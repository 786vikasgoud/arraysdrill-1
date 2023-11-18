function mapFunction(array,logic){
    let arr=[];
    for(let index=0;index<array.length;index++){
        arr.push(logic(array[index]));
    }
    return arr;
}

module.exports=mapFunction;
