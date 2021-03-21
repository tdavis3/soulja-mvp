// import { Float16Array, getFloat16, setFloat16, hfround } from "@petamoriken/float16"
import { ethers } from 'ethers';
import fetch from 'node-fetch';
import abi from './metadatastorage.js';

global.fetch = fetch

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
const key = 'd08793d2a78b7f0c52a46c8320ce00c4849664278d0e859c3e85ea9ea201d14b'; // priv key



function convertBlock(buffer){
  var incomingData = new Uint8Array(buffer); 
  var i, l = incomingData.length;
  var outputData = new Float32Array(incomingData.length); 
  for (i = 0; i < l; i++) {
      outputData[i] = (incomingData[i] - 128) / 128.0;
  }
  return outputData; 
}

// floats to dec to Bytes
function floatsToBytes(array){
  var buf = new ArrayBuffer(array.length * 4);
  var view = new DataView(buf);
  array.forEach((float, i) => {
    view.setFloat32(i*4, float);
  })

  const output = new Uint8Array(view.buffer); 
  return Array.from(output)
}


export async function handler(event) {
  const { floatsStr } = JSON.parse(event && event.body ? event.body : {});
  if (!floatsStr) {
    return {
      statusCode: 400
    }
  }

  const floats = JSON.parse(floatsStr);

  const provider = new ethers.providers.StaticJsonRpcProvider(url, network);
  const wallet = new ethers.Wallet(key, provider);
  wallet.connect(provider);
  const MetadataStorage = new ethers.Contract(contractAddress, abi, wallet);
  
  // Random ID
  const id = Math.floor(Math.random() * 1000000000);
  const bytes = floatsToBytes(floats);

  const res = await MetadataStorage.storeData(id, bytes);
  console.log(res);

  return {
    statusCode: 200,
    body: JSON.stringify({ success: res, id })
  }
}