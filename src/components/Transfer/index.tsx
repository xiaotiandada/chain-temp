// https://github.com/cavanmflynn/ethers-multicall

import { Button, Card, Avatar, Space, Typography, Divider } from "antd";
import { ethers, utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { _abi } from "src/blockchain/contracts/BaseErc20Factory";
import { currentProvider } from "src/constant/providers";
import { useWallet } from "use-wallet";
import { useSigner } from "src/hooks/useSigner";
import ts from "typescript";

console.log("_abi", _abi);

const Transfer = () => {
  const { signer, isSignerReady } = useSigner();
  const wallet = useWallet();

  console.log("wallet", wallet);

  const send = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(
      wallet.ethereum as ReturnType<typeof wallet.ethereum>
    );
    console.log("provider", provider, provider.getSigner);

    if (isSignerReady(signer!)) {
      const tx = await provider.getSigner().sendTransaction({
        to: "0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6",
        value: ethers.utils.parseEther("0.00012"),
      });

      await tx.wait();

      console.log("tx", tx);
    }
  }, [signer, isSignerReady, wallet]);

  const sendRPC = useCallback(async () => {
    // If you don't specify a //url//, Ethers connects to the default
    // (i.e. ``http:/\/localhost:8545``)
    const provider = new ethers.providers.JsonRpcProvider();

    // The provider also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, we need the account signer...
    const signer = provider.getSigner();

    console.log("signer", signer);

    const tx = await signer.sendTransaction({
      to: "0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6",
      value: ethers.utils.parseEther("0.00012"),
    });

    await tx.wait();

    console.log("tx", tx);
  }, []);

  const eth_requestAccounts = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(
      wallet.ethereum as ReturnType<typeof wallet.ethereum>
    );
    console.log("provider", provider, provider.getSigner);

    const tx = await provider.send("eth_requestAccounts", []);
    console.log("tx", tx);
  }, [wallet]);

  const metamask_sendDomainMetadata = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(
      wallet.ethereum as ReturnType<typeof wallet.ethereum>
    );
    console.log("provider", provider, provider.getSigner);

    const tx = await provider.send("eth_accounts", []);
    console.log("tx", tx);
  }, [wallet]);

  return (
    <Card>
      <Divider orientation="left">Transfer</Divider>
      <Button onClick={send}>Send</Button>
      <Button onClick={sendRPC}>Send RPC</Button>
      <Button onClick={eth_requestAccounts}>eth_requestAccounts</Button>
      <Button onClick={metamask_sendDomainMetadata}>
        metamask_sendDomainMetadata
      </Button>
    </Card>
  );
};

export default Transfer;
