// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

interface ERC20INTERFACE {
    function transfer(
        address _to,
        uint256 _value
    ) external returns (bool success);

    function balanceOf(address _address) external view returns (uint);
}
