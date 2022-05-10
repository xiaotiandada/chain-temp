import React, { StrictMode } from 'react';
import { UseWalletProvider } from 'use-wallet'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { WalletSupportedChainIds, WalletSupportedRpcUrls } from '../constant/chains';

const Providers: React.FC = ({ children }) => {
  return (
    <StrictMode>
      <GeistProvider>
        <CssBaseline />
        <UseWalletProvider
          connectors={{
            injected: { chainId: WalletSupportedChainIds },
            walletconnect: {
              rpc: WalletSupportedRpcUrls,
              bridge: 'https://bridge.walletconnect.org',
              pollingInterval: 12000,
            },
          }}
        >
          {children}
        </UseWalletProvider>
      </GeistProvider>
    </StrictMode>
  )
}

export default Providers