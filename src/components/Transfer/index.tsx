// https://github.com/cavanmflynn/ethers-multicall

import { Button, Card, Avatar, Space, Typography, Divider } from "antd";
import { ethers, utils } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { _abi } from "src/blockchain/contracts/BaseErc20Factory";
import { currentProvider } from "src/constant/providers";
import { useWallet } from "use-wallet";
import { useSigner } from "src/hooks/useSigner";

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

  return (
    <Card>
      <Divider orientation="left">Transfer</Divider>
      <Button onClick={send}>Send</Button>
    </Card>
  );
};

export default Transfer;
