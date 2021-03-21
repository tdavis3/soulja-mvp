// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./OZ/access/Ownable.sol";
import "./OZ/token/ERC721/IERC721.sol";

contract SignatureRegistrar is Ownable {
    event SignRequestCreated(
        address nftContract,
        uint256 nftID,
        address signer,
        address requester
    );
    event SignRequestCancelled(
        address nftContract,
        uint256 nftID,
        address signer,
        address requester
    );
    event Signed(
        address nftContract,
        uint256 nftID,
        uint256 signatureID,
        address signer,
        address requester
    );

    struct Signature {
        address signer;
        string signatureFile;
    }

    Signature[] public signatures;

    mapping(address => mapping(uint256 => mapping(address => bool)))
        public canSign;
    mapping(address => mapping(uint256 => uint256)) public nftToSignatureID;

    constructor() {
        // Fill index 0 to identify unsigned NFTs
        signatures.push(Signature(address(0), ""));
    }

    function sign(
        address nftContract,
        uint256 nftID,
        string calldata signatureFile
    ) public {
        require(
            nftToSignatureID[nftContract][nftID] == 0,
            "SignatureRegistrar: NFT already signed"
        );
        require(
            canSign[nftContract][nftID][msg.sender],
            "SignatureRegistrar: Not allowed to sign this NFT"
        );

        signatures.push(Signature(msg.sender, signatureFile));

        uint256 signatureID = signatures.length - 1;

        nftToSignatureID[nftContract][nftID] = signatureID;

        canSign[nftContract][nftID][msg.sender] = false;

        IERC721 nft = IERC721(nftContract);
        emit Signed(
            nftContract,
            nftID,
            signatureID,
            msg.sender,
            nft.ownerOf(nftID)
        );
    }

    function createSignatureRequest(
        address nftContract,
        uint256 nftID,
        address signer
    ) public {
        IERC721 nft = IERC721(nftContract);
        require(
            nftToSignatureID[nftContract][nftID] == 0,
            "SignatureRegistrar: NFT already signed"
        );
        require(
            nft.ownerOf(nftID) == msg.sender,
            "SignatureRegistrar: msg.sender is not the owner of this NFT"
        );
        require(
            !canSign[nftContract][nftID][signer],
            "SignatureRegistrar: signer can sign already"
        );

        canSign[nftContract][nftID][signer] = true;
        emit SignRequestCreated(nftContract, nftID, signer, msg.sender);
    }

    function cancelSignatureRequest(
        address nftContract,
        uint256 nftID,
        address signer
    ) public {
        IERC721 nft = IERC721(nftContract);
        require(
            nft.ownerOf(nftID) == msg.sender,
            "SignatureRegistrar: msg.sender is not the owner of this NFT"
        );
        require(
            canSign[nftContract][nftID][signer],
            "SignatureRegistrar: signer can't sign already"
        );

        canSign[nftContract][nftID][signer] = false;
        emit SignRequestCancelled(nftContract, nftID, signer, msg.sender);
    }
}
