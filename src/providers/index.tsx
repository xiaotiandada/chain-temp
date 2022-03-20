import React, { StrictMode } from 'react';
import { UseWalletProvider } from 'use-wallet'
import { GeistProvider, CssBaseline } from '@geist-ui/core'


const Providers: React.FC = ({ children }) => {
  return (
    <StrictMode>
      <GeistProvider>
        <CssBaseline />
        <UseWalletProvider
          chainId={4}
          connectors={{}}
        >
          {children}
        </UseWalletProvider>
      </GeistProvider>
    </StrictMode>
  )
}

export default Providers