function reduceFunction(array,reduceFun,element){

    if (array.length===0 && element === undefined){
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumilator = element === undefined ? array[0] : element;
    let currentValue = element===undefined ? 1 : element;
    for (let index=currentValue;index<array.length;index++){
        accumilator=reduceFun(accumilator,array[index]);
    }
    return accumilator;
}
module.exports=reduceFunction;
