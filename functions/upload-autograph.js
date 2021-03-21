// import { Float16Array, getFloat16, setFloat16, hfround } from "@petamoriken/float16"
import { ethers } from 'ethers'



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
  return {
    statusCode: 200,
    body: JSON.stringify({ success: 'hello!' })
  }
}