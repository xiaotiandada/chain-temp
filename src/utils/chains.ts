import { ChainInfo, CHAIN_INFO, SupportedChainIdType } from "../constant/chains"

export const getChainInfoFromId = (id: string | number): ChainInfo | undefined => CHAIN_INFO[id as SupportedChainIdType]

/**
 * get RPC URL
 * @param id 
 * @returns 
 */
export function getRpcUrl(id: string | number): string | undefined {
  const chainInfo = getChainInfoFromId(id)
  if (!chainInfo) return undefined
  if (chainInfo.infuraNameKey) {
    return `https://${chainInfo.infuraNameKey}.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`
  }
  if (chainInfo.rpcUrl) {
    return chainInfo.rpcUrl
  }
  return undefined
}
