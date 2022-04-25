// Import the coinFlip function from your coin.mjs file

import minimist from "minimist";
import {coinFlip, flipACoin} from "./modules/coin.mjs";
// Call the coinFlip function and put the return into STDOUT
const args = (minimist)(process.argv.slice(2))

const call = args.call || "-1"

if(call!= "heads" && call !="tails"){
    console.log("Error: no input.")
    process.exit(1)
}
let result
const flip = coinFlip()
  if(call == flip){
    result = 'win'
  }else{
    result = 'lose'
  }
console.log(`call: ${call}, flip: ${flip}, result: ${result}`)


