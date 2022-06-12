import { Card, Text, Button } from '@geist-ui/core';
import {
  useEthers,
  useEtherBalance,
  useTokenBalance,
  useBlockMeta,
  useTokenAllowance,
  useSendTransaction,
  Mainnet,
  ZkSyncTestnet,
  Arbitrum,
  useContractFunction,
  Rinkeby,
  useTransactions,
} from '@usedapp/core';
import { utils, Contract } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useState, useEffect } from 'react';
import {
  WethAbi,
  WETH_ADDRESSES,
  SUPPORTED_TEST_CHAINS,
} from '../../constants/Weth';

const TOKEN = '0x5AB1012B03Ee56320519f06d211B7a7884A50e0a';
const address = '0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6';

const Usedapp = () => {
  const {
    account,
    activate,
    activateBrowserWallet,
    deactivate,
    chainId,
    switchNetwork,
    error,
  } = useEthers();
  const [activateError, setActivateError] = useState('');
  const etherBalance = useEtherBalance(account);
  const tokenBalance = useTokenBalance(TOKEN, account);
  const blockMeta = useBlockMeta();
  const tokenAllowance = useTokenAllowance(TOKEN, account, address);
  const { sendTransaction, state } = useSendTransaction();
  const status = state.status;
  const wethAddress = chainId ? WETH_ADDRESSES[chainId] : '';
  const wethBalance = useTokenBalance(WETH_ADDRESSES[Rinkeby.chainId], account);

  const mainnetBalance = useEtherBalance(address, { chainId: Mainnet.chainId });
  const arbitrumBalance = useEtherBalance(address, {
    chainId: Arbitrum.chainId,
  });
  const zkSyncBalance = useEtherBalance(address, {
    chainId: ZkSyncTestnet.chainId,
  });
  const { transactions } = useTransactions();
  const isSupportedChain = SUPPORTED_TEST_CHAINS.includes(chainId || -1);

  const WrapEtherComponent = () => {
    const wethInterface = new utils.Interface(WethAbi);
    const contract = new Contract(wethAddress, wethInterface) as any;

    const { state, send } = useContractFunction(contract, 'deposit', {
      transactionName: 'Wrap',
    });
    const { status } = state;

    const wrapEther = () => {
      void send({ value: utils.parseEther('0.0001') });
    };

    const { state: stateUnWrap, send: sendUnWrap } = useContractFunction(
      contract,
      'withdraw',
      { transactionName: 'Unwrap' }
    );
    const { status: statusUnWrap } = stateUnWrap;

    const withdrawEther = () => {
      sendUnWrap(utils.parseEther('0.0001'));
    };

    return (
      <div>
        <Button onClick={() => wrapEther()}>Wrap ether</Button>
        <Button onClick={() => withdrawEther()}>Unwrap ether</Button>
        <p>Status: {status}</p>
        <p>stateUnWrap: {statusUnWrap}</p>
        <p>wethBalance: {wethBalance && utils.formatUnits(wethBalance, 18)}</p>
        {transactions.length !== 0 && (
          <table>
            <th>Name</th>
            <th>Block hash</th>
            <th>Date</th>
            {transactions.map((transaction) => {
              return (
                <tr>
                  <td>{transaction.transactionName}</td>
                  <td>{transaction.receipt?.blockHash ?? 'Pending...'}</td>
                  <td>{new Date(transaction.submittedAt).toDateString()}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    );
  };

  const ChainFilter = () => {
    return isSupportedChain ? (
      <WrapEtherComponent />
    ) : (
      <p>Set network to: Ropsten, Kovan, Rinkeby or Goerli</p>
    );
  };

  const send = () => {
    void sendTransaction({ to: address, value: utils.parseEther('0.000123') });
  };

  const sendNonce = () => {
    void sendTransaction({
      to: address,
      value: utils.parseEther('0.000001'),
      nonce: 15,
    });
  };

  const switchNetworkFn = () => {
    if (chainId !== Mainnet.chainId) {
      switchNetwork(Mainnet.chainId);
    }
  };

  const onConnect = async () => {
    try {
      const provider = new WalletConnectProvider({
        infuraId: 'b234dc4922e7482a870a092c4bf7630b',
      });
      await provider.enable();
      await activate(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const activateBrowserWalletActivate = async () => {
    setActivateError('');
    activateBrowserWallet();
  };

  useEffect(() => {
    if (error) {
      setActivateError(error.message);
    }
  }, [error]);

  return (
    <Card>
      <Text h3>usedapp</Text>
      <Text>error: {activateError}</Text>
      <Button onClick={() => activateBrowserWalletActivate()}>Connect</Button>
      <Button onClick={() => deactivate()}>Disconnect</Button>
      <Text>chainId: {chainId}</Text>
      <Text>account: {account}</Text>
      <Text>
        useTokenBalance: {tokenBalance && utils.formatUnits(tokenBalance, 18)}
      </Text>
      <Text>
        useEtherBalance: {etherBalance && utils.formatUnits(etherBalance)}
      </Text>
      <Text>blockMeta: {JSON.stringify(blockMeta)}</Text>
      <Text>blockMeta difficulty: {blockMeta.difficulty?.toString()}</Text>
      <Text>tokenAllowance: {JSON.stringify(tokenAllowance)}</Text>
      <div>
        <Button onClick={() => send()}>sendTransaction</Button>
        <p>Status: {status}</p>
      </div>
      <Button onClick={() => switchNetworkFn()}>switchNetwork</Button>
      <Button onClick={() => onConnect()}> Wallet Connect</Button>
      <hr />
      <div>
        <div className="balance"> Account:</div>
        <div className="inline">
          <div className="account">{address}</div>
        </div>
        <br />
        <div className="balance">
          Balance on Mainnet:
          <p className="bold">
            {mainnetBalance && utils.formatEther(mainnetBalance)} Eth{' '}
          </p>
        </div>
        <div className="balance">
          Balance on Arbitrum:
          <p className="bold">
            {arbitrumBalance && utils.formatEther(arbitrumBalance)} AEth
          </p>
        </div>
        <div className="balance">
          Balance on ZkSync Testnet:
          <p className="bold">
            {zkSyncBalance && utils.formatEther(zkSyncBalance)} ZKEth
          </p>
        </div>
      </div>
      {account && <ChainFilter />}
      <Button onClick={() => sendNonce()}>nonce</Button>
      <p>Transactions</p>
    </Card>
  );
};

export default Usedapp;
