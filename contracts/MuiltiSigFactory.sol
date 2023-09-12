// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "./MultiSig.sol";

contract FactoryMultiSig {
    MultiSig[] public multiSig;

    event CloneSuccessfully(MultiSig);

    function createMultiSig(
        address[] memory _clonedSigAdmins
    ) external payable {
        MultiSig newMultiSig = new MultiSig{value: msg.value}(_clonedSigAdmins);
        multiSig.push(newMultiSig);
        emit CloneSuccessfully(newMultiSig);
    }

    function getClonedMultiSigAddress(
        uint index
    ) external view returns (MultiSig _address) {
        _address = multiSig[index];
    }
}
