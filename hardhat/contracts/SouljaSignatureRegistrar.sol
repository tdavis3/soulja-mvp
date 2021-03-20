// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/IERC721.sol";

contract SignatureRegistrar is Ownable {
    struct Signature {
        address signer;
        string signatureFile;
    }

    Signature[] public signatures;

    mapping(address => mapping(uint256 => mapping(address => bool))) canSign;
    mapping(address => mapping(uint256 => uint256)) nftToSignatureID;

    constructor() {
        // Fill index 0 to identify unsigned NFTs
        signatures.push(Signature(address(0), ""));
    }

    function sign(address nftContract, uint256 nftID) public {
        require(
            nftToSignatureID[nftContract][nftID] == 0,
            "SignatureRegistrar: NFT already signed"
        );
        require(
            canSign[nftContract][nftID][msg.sender],
            "SignatureRegistrar: Not allowed to sign this NFT"
        );

        signatures.push(Signature(msg.sender, "temp"));

        nftToSignatureID[nftContract][nftID] = signatures.length - 1;
    }

    function createSignatureRequest(
        address nftContract,
        uint256 nftID,
        address signer
    ) public {
        IERC721 nft = IERC721(nftContract);
        require(
            nft.ownerOf(nftID) == msg.sender,
            "SignatureRegistrar: msg,sender is not the owner of this NFT"
        );
        require(
            canSign[nftContract][nftID][signer],
            "SignatureRegistrar: signer can sign already"
        );

        canSign[nftContract][nftID][signer] = true;
    }

    function cancelSignatureRequest(
        address nftContract,
        uint256 nftID,
        address signer
    ) public {
        IERC721 nft = IERC721(nftContract);
        require(
            nft.ownerOf(nftID) == msg.sender,
            "SignatureRegistrar: msg,sender is not the owner of this NFT"
        );
        require(
            canSign[nftContract][nftID][signer],
            "SignatureRegistrar: signer can't sign already"
        );

        canSign[nftContract][nftID][signer] = false;
    }
}
