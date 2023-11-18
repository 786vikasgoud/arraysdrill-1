let mapFunction = require ('../map');

let elements=[2,3,4,5,6,7];

function cd(element){
    return element*element;
}

let squareOfNumbers=mapFunction(elements,cd);

console.log(squareOfNumbers);