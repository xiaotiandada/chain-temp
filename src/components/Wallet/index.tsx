import React, { useState, useEffect } from "react";
import { useWallet } from "use-wallet";
import { utils } from "ethers";
import { Button, Avatar, Card, Text } from "@geist-ui/core";
import { balanceDecimal, shortedWalletAccount } from "src/utils/index";

const Wallet: React.FC = () => {
  const wallet = useWallet();
  const blockNumber = wallet.getBlockNumber();
  return (
    <Card>
      <Text h3>Info</Text>
      {wallet.status === "connected" ? (
        <>
          <ul>
            <li>
              <span>Account: </span>
              <span>{wallet.account}</span>
            </li>
            <li>
              <span>Account: </span>
              <span>{shortedWalletAccount(wallet.account)}</span>
            </li>
            <li>
              <span>Balance: </span>
              <span>{wallet.balance}</span>
            </li>
            <li>
              <span>Balance: </span>
              <span>{utils.formatUnits(wallet.balance, 18)}</span>
            </li>
            <li>
              <span>Balance: </span>
              <span>
                {balanceDecimal(utils.formatUnits(wallet.balance, 18), 3)}
              </span>
            </li>
            <li>
              <span>blockNumber: </span>
              <span>{blockNumber}</span>
            </li>
            <li>
              <span>chainId: </span>
              <span>{wallet.chainId}</span>
            </li>
            <li>
              <span>networkName: </span>
              <span>{wallet.networkName}</span>
            </li>
            <li>
              <span>status: </span>
              <span>{wallet.status}</span>
            </li>
            <li>
              <span>providerInfo name: </span>
              <span>{wallet.providerInfo.name}</span>
            </li>
            <li>
              <span>providerInfo id: </span>
              <span>{wallet.providerInfo.id}</span>
            </li>
            <li>
              <span>providerInfo type: </span>
              <span>{wallet.providerInfo.type}</span>
            </li>
            <li>
              <span>providerInfo strings: </span>
              <span>{JSON.stringify(wallet.providerInfo.strings)}</span>
            </li>
            <li>
              <span>providerInfo image: </span>
              <span>
                <Avatar isSquare src={wallet.providerInfo.image} />
              </span>
            </li>
          </ul>
          <Button onClick={() => wallet.reset()}>disconnect</Button>
        </>
      ) : (
        <Button onClick={() => wallet.connect()}>Connect MetaMask</Button>
      )}
    </Card>
  );
};

export default Wallet;
