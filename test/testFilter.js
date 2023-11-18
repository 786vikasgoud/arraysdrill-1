let filterFunction = require ('../filter');

let elements=[2,3,7,8,6,53,5,8,9,4,2,1];

function logic(element){
    return element > 5;
}
let result = filterFunction(logic,elements);
console.log(result);