import React, { useState, useEffect } from "react";
import { useWallet } from "use-wallet";
import { utils } from "ethers";
import { Button, Card, Avatar, Space, Typography, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";

import { balanceDecimal, shortedWalletAccount } from "src/utils/index";
import TokenListSelect from "src/components/TokenListSelect/index";
import Mint from "./Components/Mint";
import EthersMulticall from "src/components/EthersMulticall";
import Transfer from "src/components/Transfer";
import { StandardTokenProfile } from "src/typing/TokenList";
import { useERC20Single } from "src/hooks/useERC20Single";

const { Text } = Typography;

const Account: React.FC = () => {
  const wallet = useWallet();
  const blockNumber = wallet.getBlockNumber();
  const [currency, setCurrency] = useState<string>("");
  const [currentToken, setCurrentToken] = useState<StandardTokenProfile>(
    {} as StandardTokenProfile
  );

  useEffect(() => {
    console.log("wallet", wallet);
  }, [wallet]);

  const handlerSelectCurrentToken = (token: StandardTokenProfile) => {
    console.log("token", token);
    setCurrency(token.address);
    setCurrentToken(token);
  };

  const { tokenProfile, formattedBalance } = useERC20Single(currency);

  // modal 显示/隐藏
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>Wallet</h1>
      {wallet.status === "connected" ? (
        <>
          <Card>
            <div>Account: {wallet.account}</div>
            <div>Account: {shortedWalletAccount(wallet.account)}</div>
            <div>Balance: {wallet.balance}</div>
            <div>Balance: {utils.formatUnits(wallet.balance, 18)}</div>
            <div>
              Balance:{" "}
              {balanceDecimal(utils.formatUnits(wallet.balance, 18), 3)}
            </div>
            <div>blockNumber: {blockNumber}</div>
            <Button onClick={() => wallet.reset()} shape="round">
              disconnect
            </Button>
          </Card>
          <br />
          <Card>
            <Button onClick={() => setIsModalVisible(true)} shape="round">
              Select
            </Button>
            <div>{currency}</div>
            <>
              {!isEmpty(currentToken) ? (
                <>
                  <Space>
                    <Avatar
                      size={30}
                      icon={<UserOutlined />}
                      src={currentToken.logoURI}
                    />
                    <Text strong>
                      {currentToken.symbol}({currentToken.name})
                    </Text>
                  </Space>
                  <div>decimals: {currentToken.decimals}</div>
                  <div>chainId: {currentToken.chainId}</div>
                  <div>balance: {formattedBalance}</div>
                </>
              ) : null}
            </>

            <TokenListSelect
              setCurrentToken={handlerSelectCurrentToken}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            ></TokenListSelect>
          </Card>
          <br />
          <Card>
            <Mint></Mint>
          </Card>
          <br />
          <EthersMulticall></EthersMulticall>
          <br />
          <Transfer></Transfer>
        </>
      ) : (
        <Card>
          Connect:
          <Button onClick={() => wallet.connect()} shape="round">
            MetaMask
          </Button>
        </Card>
      )}
    </div>
  );
};

export default Account;
