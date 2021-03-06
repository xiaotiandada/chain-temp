import { useEffect } from 'react';
import { Button, Page, Text } from '@geist-ui/core'
import { Plus } from '@geist-ui/icons'
import { parseUnits } from 'ethers/lib/utils'
import { useWallet } from "use-wallet";

const tokens = [{
  "name": "Dai Stablecoin",
  "address": "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735",
  "symbol": "DAI",
  "decimals": 18,
  "chainId": 4,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735/logo.png"
},
{
  "name": "Maker",
  "address": "0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85",
  "symbol": "MKR",
  "decimals": 18,
  "chainId": 4,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85/logo.png"
},
{
  "name": "Uniswap",
  "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
  "symbol": "UNI",
  "decimals": 18,
  "chainId": 4,
  "logoURI": "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"
},
{
  "name": "Wrapped Ether",
  "address": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  "symbol": "WETH",
  "decimals": 18,
  "chainId": 4,
  "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png"
}]

const ERC20UnlockContent = () => {
  const wallet = useWallet()

  const send = () => {
    if (wallet && wallet.status !== 'connected') return
    console.log('PostSnippet start', wallet)

    const blockNumber = wallet.getBlockNumber()

    console.log('PostSnippet blockNumber', blockNumber)

    const time = Date.now()

    const token = tokens[3]

    const title = `Title ${time}`
    const content = `**content** ${time}`
    const owner = wallet.account
    const requirement = {
      networkId: token.chainId,
      token: token.address,
      amount: parseUnits('0.34', token.decimals || 18),
      sig: '',
      deadline: '',
    }

    console.log('requirement', requirement)
  }

  return (
    <Page>
      <Text h1>ERC20 Unlock content</Text>
      {
        wallet.status !== 'connected'
          ? <Button auto type="success-light" onClick={() => wallet.connect()}>
            Connect
            <Plus />
          </Button>
          : <Button auto type="success-light" onClick={send}>
            Post Snippet
            <Plus />
          </Button>
      }
    </Page>
  )
}

export default ERC20UnlockContent