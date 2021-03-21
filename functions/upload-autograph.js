import { Float16Array, getFloat16, setFloat16, hfround } from "@petamoriken/float16"
import { ethers } from 'ethers'



function convertBlock(buffer) { // incoming data is an ArrayBuffer
  var incomingData = new Uint8Array(buffer); // create a uint8 view on the ArrayBuffer
  var i, l = incomingData.length; // length, we need this for the loop
  var outputData = new Float32Array(incomingData.length); // create the Float32Array for output
  for (i = 0; i < l; i++) {
      outputData[i] = (incomingData[i] - 128) / 128.0; // convert audio to float
  }
  return outputData; // return the Float32Array
}

// floats to dec to Bytes
function floatsToBytes(array){
  // console.log(array)
  // console.log(array.buffer)
  // let outputData = new Float16Array(array.length)
  // let temp = new Float16Array(1)
  // let dataview = new DataView(temp.buffer)
  // for (let i = 0; i < array.length; i++){
  //   console.log(array[i]);
  //   setFloat16(dataview, 0, array[i], true)
  //   outputData[i] = getFloat16(dataview, 0)
  // }
  // console.log(getFloat16(new DataView(outputData.buffer),0))
  // const output = ethers.utils.arrayify(outputData)
  const output = ethers.utils.arrayify(array)
  return output
  // return new_view
}
// floatsToBytes(new Float32Array([244, 234, 49]))


export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({ success: 'hello!' })
  }
}