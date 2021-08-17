/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenFactory, TokenFactoryInterface } from "../TokenFactory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "list",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506120c8806100206000396000f3fe60806040523480156200001157600080fd5b50600436106200003a5760003560e01c80630f560cd7146200003f578063d41d9a271462000061575b600080fd5b6200004962000081565b6040516200005891906200042a565b60405180910390f35b6200007f6004803603810190620000799190620002bb565b620000db565b005b60606000805480602002602001604051908101604052809291908181526020018280548015620000d157602002820191906000526020600020905b815481526020019060010190808311620000bc575b5050505050905090565b6200011b6040518060400160405280600c81526020017f43726561746520455243323000000000000000000000000000000000000000008152506200015e565b8282826040516200012c9062000224565b6200013a9392919062000472565b604051809103906000f08015801562000157573d6000803e3d6000fd5b5050505050565b620001f8816040516024016200017591906200044e565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620001fb565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b611a42806200065183390190565b6000620002496200024384620004e6565b620004bd565b9050828152602081018484840111156200026257600080fd5b6200026f8482856200057b565b509392505050565b600082601f8301126200028957600080fd5b81356200029b84826020860162000232565b91505092915050565b600081359050620002b58162000636565b92915050565b600080600060608486031215620002d157600080fd5b600084013567ffffffffffffffff811115620002ec57600080fd5b620002fa8682870162000277565b935050602084013567ffffffffffffffff8111156200031857600080fd5b620003268682870162000277565b92505060406200033986828701620002a4565b9150509250925092565b600062000351838362000408565b60208301905092915050565b60006200036a826200052c565b6200037681856200054f565b935062000383836200051c565b8060005b83811015620003ba5781516200039e888262000343565b9750620003ab8362000542565b92505060018101905062000387565b5085935050505092915050565b6000620003d48262000537565b620003e0818562000560565b9350620003f28185602086016200058a565b620003fd8162000625565b840191505092915050565b620004138162000571565b82525050565b620004248162000571565b82525050565b600060208201905081810360008301526200044681846200035d565b905092915050565b600060208201905081810360008301526200046a8184620003c7565b905092915050565b600060608201905081810360008301526200048e8186620003c7565b90508181036020830152620004a48185620003c7565b9050620004b5604083018462000419565b949350505050565b6000620004c9620004dc565b9050620004d78282620005c0565b919050565b6000604051905090565b600067ffffffffffffffff821115620005045762000503620005f6565b5b6200050f8262000625565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000819050919050565b82818337600083830152505050565b60005b83811015620005aa5780820151818401526020810190506200058d565b83811115620005ba576000848401525b50505050565b620005cb8262000625565b810181811067ffffffffffffffff82111715620005ed57620005ec620005f6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620006418162000571565b81146200064d57600080fd5b5056fe60806040523480156200001157600080fd5b5060405162001a4238038062001a42833981810160405281019062000037919062000344565b82828160039080519060200190620000519291906200020b565b5080600490805190602001906200006a9291906200020b565b5050506200007f33826200008860201b60201c565b5050506200069d565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f29062000404565b60405180910390fd5b6200010f600083836200020160201b60201c565b8060026000828254620001239190620004b3565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200017a9190620004b3565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e1919062000426565b60405180910390a3620001fd600083836200020660201b60201c565b5050565b505050565b505050565b828054620002199062000550565b90600052602060002090601f0160209004810192826200023d576000855562000289565b82601f106200025857805160ff191683800117855562000289565b8280016001018555821562000289579182015b82811115620002885782518255916020019190600101906200026b565b5b5090506200029891906200029c565b5090565b5b80821115620002b75760008160009055506001016200029d565b5090565b6000620002d2620002cc846200046c565b62000443565b905082815260208101848484011115620002eb57600080fd5b620002f88482856200051a565b509392505050565b600082601f8301126200031257600080fd5b815162000324848260208601620002bb565b91505092915050565b6000815190506200033e8162000683565b92915050565b6000806000606084860312156200035a57600080fd5b600084015167ffffffffffffffff8111156200037557600080fd5b620003838682870162000300565b935050602084015167ffffffffffffffff811115620003a157600080fd5b620003af8682870162000300565b9250506040620003c2868287016200032d565b9150509250925092565b6000620003db601f83620004a2565b9150620003e8826200065a565b602082019050919050565b620003fe8162000510565b82525050565b600060208201905081810360008301526200041f81620003cc565b9050919050565b60006020820190506200043d6000830184620003f3565b92915050565b60006200044f62000462565b90506200045d828262000586565b919050565b6000604051905090565b600067ffffffffffffffff8211156200048a57620004896200061a565b5b620004958262000649565b9050602081019050919050565b600082825260208201905092915050565b6000620004c08262000510565b9150620004cd8362000510565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005055762000504620005bc565b5b828201905092915050565b6000819050919050565b60005b838110156200053a5780820151818401526020810190506200051d565b838111156200054a576000848401525b50505050565b600060028204905060018216806200056957607f821691505b6020821081141562000580576200057f620005eb565b5b50919050565b620005918262000649565b810181811067ffffffffffffffff82111715620005b357620005b26200061a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6200068e8162000510565b81146200069a57600080fd5b50565b61139580620006ad6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e35565b60405180910390f35b6100e660048036038101906100e19190610c83565b610308565b6040516100f39190610e1a565b60405180910390f35b610104610326565b6040516101119190610f37565b60405180910390f35b610134600480360381019061012f9190610c34565b610330565b6040516101419190610e1a565b60405180910390f35b610152610428565b60405161015f9190610f52565b60405180910390f35b610182600480360381019061017d9190610c83565b610431565b60405161018f9190610e1a565b60405180910390f35b6101b260048036038101906101ad9190610bcf565b6104dd565b6040516101bf9190610f37565b60405180910390f35b6101d0610525565b6040516101dd9190610e35565b60405180910390f35b61020060048036038101906101fb9190610c83565b6105b7565b60405161020d9190610e1a565b60405180910390f35b610230600480360381019061022b9190610c83565b6106a2565b60405161023d9190610e1a565b60405180910390f35b610260600480360381019061025b9190610bf8565b6106c0565b60405161026d9190610f37565b60405180910390f35b60606003805461028590611067565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190611067565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c610315610747565b848461074f565b6001905092915050565b6000600254905090565b600061033d84848461091a565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610388610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610eb7565b60405180910390fd5b61041c85610414610747565b85840361074f565b60019150509392505050565b60006012905090565b60006104d361043e610747565b84846001600061044c610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104ce9190610f89565b61074f565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461053490611067565b80601f016020809104026020016040519081016040528092919081815260200182805461056090611067565b80156105ad5780601f10610582576101008083540402835291602001916105ad565b820191906000526020600020905b81548152906001019060200180831161059057829003601f168201915b5050505050905090565b600080600160006105c6610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a90610f17565b60405180910390fd5b61069761068e610747565b8585840361074f565b600191505092915050565b60006106b66106af610747565b848461091a565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b690610ef7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082690610e77565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161090d9190610f37565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190610ed7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f190610e57565b60405180910390fd5b610a05838383610b9b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8290610e97565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b1e9190610f89565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b829190610f37565b60405180910390a3610b95848484610ba0565b50505050565b505050565b505050565b600081359050610bb481611331565b92915050565b600081359050610bc981611348565b92915050565b600060208284031215610be157600080fd5b6000610bef84828501610ba5565b91505092915050565b60008060408385031215610c0b57600080fd5b6000610c1985828601610ba5565b9250506020610c2a85828601610ba5565b9150509250929050565b600080600060608486031215610c4957600080fd5b6000610c5786828701610ba5565b9350506020610c6886828701610ba5565b9250506040610c7986828701610bba565b9150509250925092565b60008060408385031215610c9657600080fd5b6000610ca485828601610ba5565b9250506020610cb585828601610bba565b9150509250929050565b610cc881610ff1565b82525050565b6000610cd982610f6d565b610ce38185610f78565b9350610cf3818560208601611034565b610cfc816110f7565b840191505092915050565b6000610d14602383610f78565b9150610d1f82611108565b604082019050919050565b6000610d37602283610f78565b9150610d4282611157565b604082019050919050565b6000610d5a602683610f78565b9150610d65826111a6565b604082019050919050565b6000610d7d602883610f78565b9150610d88826111f5565b604082019050919050565b6000610da0602583610f78565b9150610dab82611244565b604082019050919050565b6000610dc3602483610f78565b9150610dce82611293565b604082019050919050565b6000610de6602583610f78565b9150610df1826112e2565b604082019050919050565b610e058161101d565b82525050565b610e1481611027565b82525050565b6000602082019050610e2f6000830184610cbf565b92915050565b60006020820190508181036000830152610e4f8184610cce565b905092915050565b60006020820190508181036000830152610e7081610d07565b9050919050565b60006020820190508181036000830152610e9081610d2a565b9050919050565b60006020820190508181036000830152610eb081610d4d565b9050919050565b60006020820190508181036000830152610ed081610d70565b9050919050565b60006020820190508181036000830152610ef081610d93565b9050919050565b60006020820190508181036000830152610f1081610db6565b9050919050565b60006020820190508181036000830152610f3081610dd9565b9050919050565b6000602082019050610f4c6000830184610dfc565b92915050565b6000602082019050610f676000830184610e0b565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f948261101d565b9150610f9f8361101d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fd457610fd3611099565b5b828201905092915050565b6000610fea82610ffd565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611052578082015181840152602081019050611037565b83811115611061576000848401525b50505050565b6000600282049050600182168061107f57607f821691505b60208210811415611093576110926110c8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61133a81610fdf565b811461134557600080fd5b50565b6113518161101d565b811461135c57600080fd5b5056fea26469706673582212200b6d036ec77c4246859a266226329d65fe11e6a6675d4918b30496c6100d411864736f6c63430008040033a26469706673582212201d00a4895224a2471f3d508881a8bd1ac85ee5f502e3a7fa1ce4e364dac39d4d64736f6c63430008040033";

export class TokenFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenFactory> {
    return super.deploy(overrides || {}) as Promise<TokenFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenFactory {
    return super.attach(address) as TokenFactory;
  }
  connect(signer: Signer): TokenFactory__factory {
    return super.connect(signer) as TokenFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenFactoryInterface {
    return new utils.Interface(_abi) as TokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFactory {
    return new Contract(address, _abi, signerOrProvider) as TokenFactory;
  }
}
