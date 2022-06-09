import React, { useState, useEffect } from 'react';
import { useWallet } from 'use-wallet';
import { utils } from 'ethers';
import { Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';
import { Button, Avatar, Card, Text } from '@geist-ui/core';
import { balanceDecimal, shortedWalletAccount } from 'src/utils/index';
import TokenListSelect from 'src/components/TokenListSelect/index';
import EthersComponent from 'src/components/EthersComponent/index';
import Mint from './Components/Mint';
import EthersMulticall from 'src/components/EthersMulticall';
import Usedapp from 'src/components/Usedapp';
import Transfer from 'src/components/Transfer';
import { StandardTokenProfile } from 'src/typing/TokenList';
import { useERC20Single } from 'src/hooks/useERC20Single';
import Wallet from '../../components/Wallet';
import DePay from 'src/components/DePay';

const Home: React.FC = () => {
  const wallet = useWallet();
  const blockNumber = wallet.getBlockNumber();
  const [currency, setCurrency] = useState<string>('');
  const [currentToken, setCurrentToken] = useState<StandardTokenProfile>(
    {} as StandardTokenProfile
  );

  useEffect(() => {
    console.log('wallet', wallet);
  }, [wallet]);

  const handlerSelectCurrentToken = (token: StandardTokenProfile) => {
    console.log('token', token);
    setCurrency(token.address);
    setCurrentToken(token);
  };

  const { tokenProfile, formattedBalance } = useERC20Single(currency);

  // modal 显示/隐藏
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Text h1>Wallet</Text>
      <Wallet />
      <EthersMulticall />
      <Usedapp />
      <DePay />
      <EthersComponent />
      {wallet.status === 'connected' ? (
        <>
          <Card>
            <Button onClick={() => setIsModalVisible(true)}>Select</Button>
            <div>{currency}</div>
            <>
              {!isEmpty(currentToken) ? (
                <>
                  <Space>
                    <Avatar
                      // icon={<UserOutlined />}
                      src={currentToken.logoURI}
                    />
                    <Text p>
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
          <Transfer></Transfer>
        </>
      ) : null}
    </div>
  );
};

export default Home;
