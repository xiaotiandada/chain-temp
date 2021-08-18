import { useCallback, useMemo } from 'react';
import { BigNumber, ethers, utils } from 'ethers';

import { currentProvider } from '../constant/providers';
import { useSigner } from './useSigner';
import { TokenFactory__factory } from '../blockchain/contracts/TokenFactory__factory'
import { currentContracts } from '../constant/contracts';

export function useTokenFactory() {
  const { signer, isSignerReady } = useSigner();
  console.log('currentContracts', currentContracts)

  const token = useMemo(() => {
    const readonlyProvider = currentProvider as ethers.providers.Provider;
    if (isSignerReady(signer)) {
      return TokenFactory__factory.connect(currentContracts!.TOKENFACTTORY, signer)
    } else {
      return TokenFactory__factory.connect(currentContracts!.TOKENFACTTORY, readonlyProvider)
    }
  }, [ signer, isSignerReady ])

  /**
   * 发布 Token
   */
  const mint = useCallback(
    async (
      name: string,
      symbol: string,
      initialBalance: string
    ): Promise<ethers.ContractTransaction> => {
    const mintToken = await token.mint(name, symbol, BigNumber.from(utils.parseUnits(initialBalance, 18)))
    console.log('mintToken', mintToken)
    console.log('mintToken hash', mintToken.hash)
    mintToken.wait()
    return mintToken
  }, [ token ])

  /**
   * 发布过的 Token
   */
  const list = useCallback(
    async (): Promise<string[]>  => {
      const listResult = await token.list()
      console.log('listResult', listResult)
      return listResult
  }, [ token ])

  return {
    mint, list
  }
}