pragma solidity ^0.8.0;

import "./OZ/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract SouljaNFT is ERC721PresetMinterPauserAutoId {
    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI
    ) ERC721PresetMinterPauserAutoId(name, symbol, baseTokenURI) {}
}
