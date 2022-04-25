// Import the coinFlip function from your coin.mjs file

import minimist from "minimist";
import {coinFlip, flipACoin} from "./modules/coin.mjs";
// Call the coinFlip function and put the return into STDOUT
const args = (minimist)(process.argv.slice(2))

const call = args.call || "-1"

if(call == undefined || (call!= "heads" && call !="tails")){
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
    
}else{
  console.log(flipACoin(call))
}



