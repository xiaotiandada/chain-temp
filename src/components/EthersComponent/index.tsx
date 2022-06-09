import { Card, Text, Button } from '@geist-ui/core';
import { ethers, utils } from 'ethers';
import { useCallback } from 'react';

const address = '0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6';

const EthersComponent = () => {
  const handleEthRequestAccounts = useCallback(async () => {
    // Web3Provider 包装了一个标准的 Web3 提供程序，这是
    // MetaMask 作为 window.ethereum 注入每个页面的内容
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask 需要请求权限才能连接用户帐户
    await provider.send('eth_requestAccounts', []);
  }, []);

  const handleSigner = useCallback(async () => {
    // Web3Provider 包装了一个标准的 Web3 提供程序，这是
    // MetaMask 作为 window.ethereum 注入每个页面的内容
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask 需要请求权限才能连接用户帐户
    await provider.send('eth_requestAccounts', []);

    // MetaMask 插件还允许签署交易
    // 发送以太币并支付更改区块链内的状态。
    // 为此，您需要帐户签名者...
    const signer = provider.getSigner();
    console.log('signer', signer);
  }, []);

  const handleInfo = useCallback(async () => {
    // Web3Provider 包装了一个标准的 Web3 提供程序，这是
    // MetaMask 作为 window.ethereum 注入每个页面的内容
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log('provider', provider);

    // MetaMask 需要请求权限才能连接用户帐户
    const accounts = await provider.send('eth_requestAccounts', []);
    console.log('accounts', accounts);

    // 查找当前区块号
    const blockNumber = await provider.getBlockNumber();
    console.log('blockNumber', blockNumber);

    // 获取账户余额（通过地址或 ENS 名称，如果网络支持）
    const balance = await provider.getBalance(accounts[0]);
    // { BigNumber: "182826475815887608" }
    console.log('balance', balance, utils.formatUnits(balance, 'ether'));
  }, []);

  const handleSendTransaction = useCallback(async () => {
    // Web3Provider 包装了一个标准的 Web3 提供程序，这是
    // MetaMask 作为 window.ethereum 注入每个页面的内容
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask 需要请求权限才能连接用户帐户
    await provider.send('eth_requestAccounts', []);

    // MetaMask 插件还允许签署交易
    // 发送以太币并支付更改区块链内的状态。
    // 为此，您需要帐户签名者...
    const signer = provider.getSigner();
    console.log('signer', signer);

    // 向一个 ens 名称发送 1 个以太币。
    const tx = await signer.sendTransaction({
      to: address,
      value: ethers.utils.parseEther('0.000123'),
    });

    tx.wait();

    console.log('tx', tx);
  }, []);

  return (
    <Card>
      <Text h3>ethers</Text>
      <Button onClick={handleEthRequestAccounts}>eth_requestAccounts</Button>
      <Button onClick={handleSigner}>signer</Button>
      <Button onClick={handleInfo}>info</Button>
      <Button onClick={handleSendTransaction}>sendTransaction</Button>
    </Card>
  );
};

export default EthersComponent;
