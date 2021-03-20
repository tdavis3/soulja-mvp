pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract CrankToken is ERC20PresetFixedSupply {
    ERC721PresetMinterPauserAutoId nftContract;

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        address nftContractAddress
    ) ERC20PresetFixedSupply(name, symbol, initialSupply, owner) {
        nftContract = ERC721PresetMinterPauserAutoId(nftContractAddress);
    }

    function mintNFT() public {
        require(
            balanceOf(msg.sender) >= 10**18,
            "CrankToken: Not enough token"
        );
        _burn(msg.sender, 10**18);
        nftContract.mint(msg.sender);
    }
}
