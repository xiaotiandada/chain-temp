pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Example class - a mock class using delivering from ERC20
contract BasicToken is ERC20 {
    constructor(uint256 initialBalance) public ERC20("BSCUU", "UU") {
        _mint(msg.sender, initialBalance);
    }
}
