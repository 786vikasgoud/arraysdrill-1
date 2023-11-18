let getFlaten = require('../falten');

const nestedArray = [1, [2], [[3]], [[[4]]]];

let array=getFlaten(nestedArray);
console.log(array);