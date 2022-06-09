import { Card, Text, Button } from '@geist-ui/core';
import { ethers, utils } from 'ethers';
import { useCallback } from 'react';

const TOKEN = '0x5AB1012B03Ee56320519f06d211B7a7884A50e0a';
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

  const handleContract = useCallback(async () => {
    // Web3Provider 包装了一个标准的 Web3 提供程序，这是
    // MetaMask 作为 window.ethereum 注入每个页面的内容
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // MetaMask 需要请求权限才能连接用户帐户
    const accounts = await provider.send('eth_requestAccounts', []);

    // 您也可以使用 ENS 名称作为合约地址
    const daiAddress = TOKEN;

    // The ERC-20 Contract ABI, which is a common contract interface
    // for tokens (this is the Human-Readable ABI format)
    const daiAbi = [
      // Some details about the token
      'function name() view returns (string)',
      'function symbol() view returns (string)',

      // Get the account balance
      'function balanceOf(address) view returns (uint)',

      // Send some of your tokens to someone else
      'function transfer(address to, uint amount)',

      // An event triggered whenever anyone transfers to someone else
      'event Transfer(address indexed from, address indexed to, uint amount)',
    ];

    // 合约对象
    const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

    // Event
    // Receive an event when ANY transfer occurs
    daiContract.on('Transfer', (from, to, amount, event) => {
      console.log(`${from} sent ${utils.formatEther(amount)} to ${to}`);
      // The event object contains the verbatim log data, the
      // EventFragment and functions to fetch the block,
      // transaction and receipt and event functions
    });

    // A filter for when a specific address receives tokens
    // const myAddress = '0x8ba1f109551bD432803012645Ac136ddd64DBA72';
    const myAddress = await signer.getAddress();
    const filter = daiContract.filters.Transfer(null, myAddress);
    // {
    //   address: 'dai.tokens.ethers.eth',
    //   topics: [
    //     '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    //     null,
    //     '0x0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba72'
    //   ]
    // }

    // Receive an event when that filter occurs
    daiContract.on(filter, (from, to, amount, event) => {
      // The to will always be "address"
      console.log(`I got ${utils.formatEther(amount)} from ${from}.`);
    });

    // Query Historic Events
    // Get the address of the Signer
    const myAddressSigner = await signer.getAddress();
    // '0x8ba1f109551bD432803012645Ac136ddd64DBA72'
    console.log('myAddressSigner', myAddressSigner);

    try {
      // Filter for all token transfers from me
      const filterFrom = daiContract.filters.Transfer(myAddressSigner, null);
      // {
      //   address: 'dai.tokens.ethers.eth',
      //   topics: [
      //     '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      //     '0x0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba72'
      //   ]
      // }
      console.log('filterFrom', filterFrom);
      // Filter for all token transfers to me
      const filterTo = daiContract.filters.Transfer(null, myAddressSigner);
      // {
      //   address: 'dai.tokens.ethers.eth',
      //   topics: [
      //     '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
      //     null,
      //     '0x0000000000000000000000008ba1f109551bd432803012645ac136ddd64dba72'
      //   ]
      // }
      console.log('filterTo', filterTo);

      // List all transfers sent from me in a specific block range
      const queryFilterResult = await daiContract.queryFilter(
        filterFrom
        // 9843470,
        // 9843480
      );
      console.log('queryFilterResult', queryFilterResult);
    } catch (error) {
      console.log(error);
    }

    // 获取 ERC-20 代币名称
    const contractName = await daiContract.name();
    // 'Dai Stablecoin'
    console.log('contractName', contractName);

    // 获取 ERC-20 代币符号（用于代码和 UI）
    const contractSymbol = await daiContract.symbol();
    // 'DAI'
    console.log('contractSymbol', contractSymbol);

    // Get the balance of an address
    const balance = await daiContract.balanceOf(accounts[0]);
    // { BigNumber: "13217070455884268201631" }

    // Format the DAI for displaying to the user
    // '13217.070455884268201631'
    console.log('balance', balance, utils.formatUnits(balance, 18));

    // DAI 合约当前连接到 Provider，
    // 这是只读的。您需要连接到签名者，以便
    // 您可以付费发送状态更改交易。
    const daiWithSigner = daiContract.connect(signer);

    // 每个 DAI 有 18 位小数
    const dai = ethers.utils.parseUnits('0.00001234', 18);

    // 发送 1 个 DAI 到 "ricmoo.firefly.eth"
    const tx = await daiWithSigner.transfer(address, dai);
    tx.wait();

    console.log('tx', tx);
  }, []);

  const handleSigningMessages = useCallback(async () => {
    // Web3Provider 包装了一个标准的 Web3 提供程序，这是
    // MetaMask 作为 window.ethereum 注入每个页面的内容
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // MetaMask 需要请求权限才能连接用户帐户
    await provider.send('eth_requestAccounts', []);

    // To sign a simple string, which are used for
    // logging into a service, such as CryptoKitties,
    // pass the string in.
    const signature = await signer.signMessage('Hello World');
    // '0xca5a3c3ad288ba0f2b8321c49c974f09683e8b4d4e6a147100c17f5905ccb21e427982124fb7cc6f3b7987c3187494420040a171509de969c76d9b7c837241511b'
    console.log('signature', signature);

    //
    // A common case is also signing a hash, which is 32
    // bytes. It is important to note, that to sign binary
    // data it MUST be an Array (or TypedArray)
    //

    // This string is 66 characters long
    const message =
      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

    // This array representation is 32 bytes long
    const messageBytes = ethers.utils.arrayify(message);
    // Uint8Array [ 221, 242, 82, 173, 27, 226, 200, 155, 105, 194, 176, 104, 252, 55, 141, 170, 149, 43, 167, 241, 99, 196, 161, 22, 40, 245, 90, 77, 245, 35, 179, 239 ]

    // To sign a hash, you most often want to sign the bytes
    const signatureBytes = await signer.signMessage(messageBytes);
    // '0x2335c9b7ff61c2e6a46b37affa5963353b91b4a73afa765d5730435b2898aeaa64c0e5626b533a741b829a81a8975a41ae074a2e508e038b64123574b83e02ed1c'

    console.log('signatureBytes', signatureBytes);
  }, []);

  return (
    <Card>
      <Text h3>ethers</Text>
      <Button onClick={handleEthRequestAccounts}>eth_requestAccounts</Button>
      <Button onClick={handleSigner}>
        Connecting to Ethereum: MetaMask/RPC
      </Button>
      <Button onClick={handleInfo}>Querying the Blockchain</Button>
      <Button onClick={handleSendTransaction}>Writing to the Blockchain</Button>
      <Button onClick={handleContract}>
        Contracts - Read-Only Methods - State Changing Methods - Listening to
        Events - Query Historic Events
      </Button>
      <Button onClick={handleSigningMessages}>Signing Messages</Button>
    </Card>
  );
};

export default EthersComponent;
