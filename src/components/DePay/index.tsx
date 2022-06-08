import { Card, Text, Button } from '@geist-ui/core';
import DePayWidgets from '@depay/widgets';
import { useCallback } from 'react';
import { Blockchain } from '@depay/web3-blockchains';

const DePay = () => {
  const handleDonations = useCallback(() => {
    DePayWidgets.Donation({
      providers: {
        // ethereum: [
        //   'https://rinkeby.infura.io/v3/',
        // ],
      },
      accept: [
        {
          blockchain: 'ethereum',
          token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb',
          receiver: '0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6',
        },
        {
          blockchain: 'bsc',
          token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb',
          receiver: '0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6',
        },
      ],
      amount: {
        start: 1,
        step: 1,
        min: 1,
      },
    });
  }, []);
  const handlePayments = useCallback(() => {
    DePayWidgets.Payment({
      providers: {
        // ethereum: [
        //   'https://rinkeby.infura.io/v3/',
        // ],
      },
      accept: [
        {
          blockchain: 'ethereum',
          token: '0x9df0FC0bff2D80C7E725c7Dc7b58Cc8312431a2D',
          receiver: '0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6',
        },
        {
          blockchain: 'bsc',
          token: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb',
          receiver: '0x3484040A7c337A95d0eD7779769ffe3e14ecCcA6',
        },
      ],
      amount: {
        start: 1,
        step: 1,
        min: 1,
      },
    });
  }, []);

  const handleBlockchain = useCallback(() => {
    console.log('Blockchain.all', Blockchain.all);
    console.log('Blockchain.all', Blockchain.findByName('ethereum'));
    console.log('Blockchain.all', Blockchain.findById('0x1'));
    console.log('Blockchain.all', Blockchain.findByNetworkId(1));
    console.log('Blockchain.all', Blockchain.findByNetworkId(4));
  }, []);

  const handleSale = useCallback(() => {
    DePayWidgets.Sale({
      sell: {
        ethereum: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb',
        bsc: '0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb',
      },
      amount: {
        start: 1,
        step: 1,
        min: 1,
      },
    });
  }, []);

  return (
    <Card>
      <Text h3>De Pay(Mainnet only)</Text>
      <Button onClick={handleDonations}>Donations</Button>
      <Button onClick={handlePayments}>Payments</Button>
      <Button onClick={handleBlockchain}>Blockchain</Button>
      <Button onClick={handleSale}>Sale</Button>
    </Card>
  );
};

export default DePay;
