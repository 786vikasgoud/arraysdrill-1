let findFunction = require('../find');
let array=[2,3,4,5,6,78,9,1];
function cb(element){
    return element % 2===0 ? true : false;
    // if(element%2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
}
let answer = findFunction(array,cb);
console.log(answer);