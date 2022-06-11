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
} from '@usedapp/core';
import { utils } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

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
  } = useEthers();
  const etherBalance = useEtherBalance(account);
  const tokenBalance = useTokenBalance(TOKEN, account);
  const blockMeta = useBlockMeta();
  const tokenAllowance = useTokenAllowance(TOKEN, account, address);
  const { sendTransaction, state } = useSendTransaction();
  const status = state.status;

  const mainnetBalance = useEtherBalance(address, { chainId: Mainnet.chainId });
  const arbitrumBalance = useEtherBalance(address, {
    chainId: Arbitrum.chainId,
  });
  const zkSyncBalance = useEtherBalance(address, {
    chainId: ZkSyncTestnet.chainId,
  });

  const send = () => {
    void sendTransaction({ to: address, value: utils.parseEther('0.000123') });
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

  return (
    <Card>
      <Text h3>usedapp</Text>
      <Button onClick={() => activateBrowserWallet()}>Connect</Button>
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
    </Card>
  );
};

export default Usedapp;
