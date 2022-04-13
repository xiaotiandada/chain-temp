// https://github.com/cavanmflynn/ethers-multicall

import { Button, Card, Avatar, Space, Typography, Divider } from "antd";
import { Contract, Provider } from "ethers-multicall";
import { ethers } from "ethers";
import { useEffect } from "react";
import { _abi } from "src/blockchain/contracts/BaseErc20Factory";

const provider = ethers.providers.getDefaultProvider("rinkeby");
console.log("provider", provider);
console.log("_abi", _abi);

const EthersMulticall = () => {
  useEffect(() => {
    async function init() {
      const addresses = [
        "0x5AB1012B03Ee56320519f06d211B7a7884A50e0a",
        "0x5AB1012B03Ee56320519f06d211B7a7884A50e0a",
      ];

      const ethcallProvider = new Provider(provider);
      await ethcallProvider.init();

      const yfiContract = new Contract(addresses[0], _abi);
      const uniContract = new Contract(addresses[1], _abi);

      console.log("yfiContract", yfiContract);

      const calls = [
        yfiContract.totalSupply(),
        uniContract.totalSupply(),
        uniContract.symbol(),
      ];
      const [yfiSupply, uniSupply, uniSupplySymbol] = await ethcallProvider.all(
        calls
      );

      console.log("yfiSupply", yfiSupply.toString());
      console.log("uniSupply", uniSupply.toString());
      console.log("uniSupplySymbol", uniSupplySymbol);
    }
    init();
  }, []);

  return (
    <Card>
      <Divider orientation="left">ethers-multicall</Divider>
    </Card>
  );
};

export default EthersMulticall;
