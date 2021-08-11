import React, { StrictMode } from 'react';
import { UseWalletProvider } from 'use-wallet'

const Providers: React.FC = ({ children }) => {
  return (
    <StrictMode>
      <UseWalletProvider
        chainId={97}
        connectors={{}}
      >
        {children}
      </UseWalletProvider>
    </StrictMode>
  )
}

export default Providers