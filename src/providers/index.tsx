import React, { ReactNode, StrictMode } from 'react';
import { UseWalletProvider } from 'use-wallet';
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import {
  WalletSupportedChainIds,
  WalletSupportedRpcUrls,
} from '../constant/chains';
import { Mainnet, Rinkeby, DAppProvider, Config } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
  },
};

interface Props {
  children: ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
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
          <DAppProvider config={config}>{children}</DAppProvider>
        </UseWalletProvider>
      </GeistProvider>
    </StrictMode>
  );
};

export default Providers;
