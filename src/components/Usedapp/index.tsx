import { Card, Text, Button } from "@geist-ui/core";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Usedapp = () => {
  const { account, activateBrowserWallet, deactivate, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <Card>
      <Text h3>usedapp</Text>
      <Button onClick={() => activateBrowserWallet()}>Connect</Button>
      {account && <Button onClick={() => deactivate()}>Disconnect</Button>}
      {JSON.stringify(account)}
      {JSON.stringify(etherBalance)}
      {etherBalance?.toString()}
      {chainId}
    </Card>
  );
};

export default Usedapp;
