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

const autographTemplate = {
  height: 400,
  width: 400,
  lines: []
};
const lineTemplate = {
  points: [],
  brushColor: "#444",
  brushRadius: 4
};

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

function autographFromByteArray(byteArray) {
  const autograph = {...autographTemplate};
  let curLine = {...lineTemplate};

  for(let i = 0; i < byteArray.length; i+=8) {
    // Create a buffer
    var buf = new ArrayBuffer(8);
    // Create a data view of it
    var view = new DataView(buf);

    const bytes = byteArray.slice(i, i+8);
    // Put each byte into the array buffer
    bytes.forEach(function (b, i) {
      view.setUint8(i, b);
    });

    const firstFloat = view.getFloat32(0);
    console.log(firstFloat);
    if (firstFloat < 0) {
      // Move onto new line
      autograph.lines.push(curLine);
      curLine = Object.assign({}, lineTemplate);
      curLine.points = []
      continue;
    }

    const secondFloat = view.getFloat32(4);
    console.log(secondFloat);

    curLine.points.push({
      x: firstFloat,
      y: secondFloat
    });
  }

  return autograph;
}

const autograph = autographFromByteArray(floatsToBytes(
  [64.48708571378457, 87.93311120606035, 64.48708571378457, 87.93311120606035, -1, -1, 265.35226441054994, 91.13356403756453, 265.35226441054994, 91.13356403756453, -1, -1, 181.00116765286882, 311.9999996591467, 181.00116765286882, 311.9999996591467, -1, -1]
));

console.log(autograph);
console.log(autograph.lines[0].points);
console.log(autograph.lines[1].points);
console.log(autograph.lines[2].points);

export async function handler(event) {
  // Autograph ID
  //const { id } = JSON.parse(event && event.body ? event.body : {});
  const dataId = Number(1);

  const provider = new ethers.providers.JsonRpcProvider(url, network);

  // Read only
  const MetadataStorage = new ethers.Contract(contractAddress, abi, provider);

  const byteData = await MetadataStorage.store(dataId);
  const byteArray = new Float32Array(ethers.utils.arrayify(byteData));
  
 


  return {
    statusCode: 200,
    body: byteData
  }
}

handler();
