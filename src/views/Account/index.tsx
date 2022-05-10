import React, { useState, useEffect } from 'react'
import { useWallet } from 'use-wallet'
import { utils } from 'ethers'
import { Card, Space, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash'
import { Button, Avatar } from '@geist-ui/core'
import { balanceDecimal, shortedWalletAccount } from "src/utils/index";
import TokenListSelect from "src/components/TokenListSelect/index";
import Mint from "./Components/Mint";
import EthersMulticall from "src/components/EthersMulticall";
import Transfer from "src/components/Transfer";
import { StandardTokenProfile } from "src/typing/TokenList";
import { useERC20Single } from "src/hooks/useERC20Single";

const { Text } = Typography;

const Home: React.FC = () => {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()
  const [currency, setCurrency] = useState<string>('');
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
            <ul>
              <li><span>Account: </span><span>{wallet.account}</span></li>
              <li><span>Account: </span><span>{shortedWalletAccount(wallet.account)}</span></li>
              <li><span>Balance: </span><span>{wallet.balance}</span></li>
              <li><span>Balance: </span><span>{utils.formatUnits(wallet.balance, 18)}</span></li>
              <li><span>Balance: </span><span>{balanceDecimal(utils.formatUnits(wallet.balance, 18), 3)}</span></li>
              <li><span>blockNumber: </span><span>{blockNumber}</span></li>
              <li><span>chainId: </span><span>{wallet.chainId}</span></li>
              <li><span>networkName: </span><span>{wallet.networkName}</span></li>
              <li><span>status: </span><span>{wallet.status}</span></li>
              <li><span>providerInfo name: </span><span>{wallet.providerInfo.name}</span></li>
              <li><span>providerInfo id: </span><span>{wallet.providerInfo.id}</span></li>
              <li><span>providerInfo type: </span><span>{wallet.providerInfo.type}</span></li>
              <li><span>providerInfo strings: </span><span>{JSON.stringify(wallet.providerInfo.strings)}</span></li>
              <li><span>providerInfo image: </span><span><Avatar isSquare src={wallet.providerInfo.image} /></span></li>
            </ul>
            <Button onClick={() => wallet.reset()}>disconnect</Button>
          </Card>
          <br />
          <Card>
            <Button onClick={() => setIsModalVisible(true)}>
              Select
            </Button>
            <div>{currency}</div>
            <>
              {!isEmpty(currentToken) ? (
                <>
                  <Space>
                    <Avatar
                      // icon={<UserOutlined />}
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
          <Button onClick={() => wallet.connect()}>
            MetaMask
          </Button>
        </Card>
      )}
    </div>
  );
};

export default Home
