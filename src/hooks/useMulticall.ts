import { FunctionFragment } from '@ethersproject/abi';
import { BytesLike, ethers, utils } from 'ethers';
import { useCallback, useMemo } from 'react';
import { Multicall__factory } from '../blockchain/contracts/MulticallFactory';
import { currentMulticallAddress } from '../constant/contracts';
import { currentProvider } from '../constant/providers';
import { useSigner } from './useSigner';

// static multicall
export const staticMulticall = Multicall__factory.connect(
  currentMulticallAddress,
  currentProvider as ethers.providers.Provider
);

export function useMulticall() {
  const { signer, isSignerReady } = useSigner();
  // multicall contract
  const Multicall = useMemo(() => {
    if (isSignerReady(signer)) {
      return Multicall__factory.connect(currentMulticallAddress, signer);
    } else {
      return staticMulticall;
    }
  }, [signer, isSignerReady]);

  // 聚合查询
  const aggerateQuery = useCallback(
    async (
      _calls: Array<{
        target: string;
        iface: utils.Interface;
        funcFrag: FunctionFragment;
        data: any[];
      }>
    ) => {
      // 处理 multi calls
      const calls: Array<{ target: string; callData: BytesLike }> = _calls.map(
        c => {
          console.log('_calls', c)
          return {
            target: c.target,
            // token.interface.decodeFunctionResult('name', data);
            callData: c.iface.encodeFunctionData(c.funcFrag, c.data),
          };
        }
      );
      // 聚合
      const { returnData, blockNumber } = await Multicall.callStatic.aggregate(
        calls
      );
      // 处理返回的数据
      const returns = returnData.map((result, idx) => {
        const _ = _calls[idx];
        // 解码数据 tag resultData
        return _.iface.decodeFunctionResult(_.funcFrag, result);
      });
      return { returns, blockNumber };
    },
    [Multicall]
  );

  return { Multicall, aggerateQuery };
}
