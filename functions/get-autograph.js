import { ethers } from 'ethers';
import abi from './metadatastorage.js';

const url = 'https://rpc-mumbai.maticvigil.com'
const network = {
  name: 'Mumbai',
  chainId: 80001,
};

//mainnet
/* const network = {
  name: 'matic',
  chainId: 137,
}; */

const contractAddress = '0xc700769a1F0184B3af2b5808f4Be2000580de793';

export async function handler(event) {
  // Autograph ID
  //const { id } = JSON.parse(event && event.body ? event.body : {});
  const dataId = Number(1);

  const provider = new ethers.providers.JsonRpcProvider(url, network);

  // Read only
  const MetadataStorage = new ethers.Contract(contractAddress, abi, provider);

  const byteData = await MetadataStorage.store(dataId);

  return {
    statusCode: 200,
    body: byteData
  }
}

handler();
