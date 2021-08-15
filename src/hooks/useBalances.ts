import { BigNumber, BigNumberish, utils } from 'ethers';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useWallet } from 'use-wallet';
import { useLastUpdated } from './useLastUpdated';
import { staticMulticall } from './useMulticall';

type BalanceSheet = Record<string, BigNumber | undefined>;

const ABI = ['function balanceOf(address) view returns (uint256)'];
const balanceOfInterface = new utils.Interface(ABI);

/**
 * 批量处理余额
 * @param tokens
 * @returns
 */
export function useBalances(tokens: string[]) {
  // make sure every `tokens` addresses is checksumed
  const checksumedTokenAddresses = useMemo(
    () => tokens.map(t => utils.getAddress(t)),
    [tokens]
  );

  const { account } = useWallet();
  const [balanceSheet, setBalances] = useState<BalanceSheet>({});
  const { lastUpdated, updated } = useLastUpdated();

  // 根据地址获取余额
  const balanceOf = useCallback(
    (target: string) => {
      // @todo: if `target` not exist, enlist the `target` into the BalanceSheet and update
      return balanceSheet[utils.getAddress(target)] || BigNumber.from(0);
    },
    [tokens.join(), balanceSheet]
  );

  // 获取余额
  const fetchBalances = useCallback(async () => {
    if (!account) return;
    // const result = await tokens.balanceOf(account as string);
    // setBalances(result);

    // calls 处理 multicall 数据
    const calls = checksumedTokenAddresses.map(target => ({
      target,
      callData: balanceOfInterface.encodeFunctionData('balanceOf', [account]),
    }));
    // 聚合
    const { returnData } = await staticMulticall.callStatic.aggregate(calls);
    console.info('returnData', returnData);
    // 合并数据
    const sheet: BalanceSheet = {};
    checksumedTokenAddresses.forEach((token, idx) => {
      let [balance] = balanceOfInterface.decodeFunctionResult(
        'balanceOf',
        returnData[idx]
      );
      sheet[token] = balance as BigNumber;
    });
    console.info('sheet', sheet);
    setBalances(sheet);
    // 更新时间戳
    updated();
  }, [checksumedTokenAddresses.join(), account]);

  /**
   * use Dan's example
   * https://github.com/facebook/react/issues/14326#issuecomment-441680293
   * loop
   */
  useEffect(() => {
    if (tokens.length === 0 || !account) return;
    // if (account && tokens) {
    fetchBalances();
    // }
    let refreshInterval = setInterval(fetchBalances, 1000 * 10);
    return () => clearInterval(refreshInterval);
  }, [account, fetchBalances, tokens]);

  // 是否足够 get 大于等于
  const isEnough = useCallback(
    (target: string, x: BigNumberish) => balanceOf(target).gte(x),
    // [balanceSheet, balanceOf]
    [balanceOf]
  );

  return { balanceOf, isEnough, lastUpdated };
}
