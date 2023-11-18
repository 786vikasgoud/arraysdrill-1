let reduceFunction=require('../reduce.js');

let elements= [2,4,6,8,4,9,4,6,7,21,9];
function cd(accumilator,currentValue){
    return accumilator+currentValue;
}
let startingValue=0;
let result = reduceFunction(elements,cd,startingValue);
console.log(result);