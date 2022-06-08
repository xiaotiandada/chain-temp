import { Card, Text, Button } from '@geist-ui/core';
import {
  useEthers,
  useEtherBalance,
  useTokenBalance,
  useBlockMeta,
  useTokenAllowance,
  useSendTransaction,
  Mainnet,
} from '@usedapp/core';
import { utils } from 'ethers';

const TOKEN = '0x5AB1012B03Ee56320519f06d211B7a7884A50e0a';
const address = '0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6';

const Usedapp = () => {
  const { account, activateBrowserWallet, deactivate, chainId, switchNetwork } =
    useEthers();
  const etherBalance = useEtherBalance(account);
  const tokenBalance = useTokenBalance(TOKEN, account);
  const blockMeta = useBlockMeta();
  const tokenAllowance = useTokenAllowance(TOKEN, account, address);
  const { sendTransaction, state } = useSendTransaction();
  const status = state.status;

  const send = () => {
    void sendTransaction({ to: address, value: utils.parseEther('0.000123') });
  };

  const switchNetworkFn = async () => {
    if (chainId !== Mainnet.chainId) {
      await switchNetwork(Mainnet.chainId);
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
    </Card>
  );
};

export default Usedapp;
