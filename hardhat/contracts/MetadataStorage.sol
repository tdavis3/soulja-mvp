//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./OZ/access/AccessControl.sol";

contract MetadataStorage is AccessControl {

  bytes32 public constant WRITER_ROLE = keccak256("WRITER_ROLE");

  constructor(address writer) {
    _setupRole(WRITER_ROLE, writer);
  }

  mapping(uint256 => bytes) public store;

  function storeData(uint256 id, bytes memory data) public {
    require(hasRole(WRITER_ROLE, msg.sender));
    store[id] = data;
  }

  function addWriter(address newWriter) public {
    grantRole(WRITER_ROLE, newWriter);
  }

  function removeWriter(address toRemove) public {
    revokeRole(WRITER_ROLE, toRemove);
  }
}
