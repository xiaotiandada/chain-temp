import React, { StrictMode } from "react";
import { UseWalletProvider } from "use-wallet";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { currentChainId } from "../constant";

const Providers: React.FC = ({ children }) => {
  return (
    <StrictMode>
      <GeistProvider>
        <CssBaseline />
        <UseWalletProvider chainId={currentChainId}>
          {children}
        </UseWalletProvider>
      </GeistProvider>
    </StrictMode>
  );
};

export default Providers;
