// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";

contract StandardVault is ERC4626 {
    constructor(IERC20 asset) ERC20("Ather Vault Token", "AVT") ERC4626(asset) {}
}