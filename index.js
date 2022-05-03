import { hexToRgb, rgbToHex } from './colourfunction.js';

if (process.argv[2] === "hexrgb") {
  console.log(process.argv[3]);
  console.log(hexToRgb(process.argv[3]));
}

if (process.argv[2] === "rgbhex") {
  // store 'rgb(255,255,255)' as variable
  let rgbValue = process.argv[3];
  let rgbNums = rgbValue.split(",");
  let rNum = parseInt(rgbNums[0].slice(4));
  let gNum = parseInt(rgbNums[1]);
  let bNum = parseInt(rgbNums[2].slice(0, -1));
  console.log(rgbToHex(rNum,gNum,bNum));
}


