function filterFunction(logic,array){
    let arr=[];
    for(let index=0;index<array.length;index++){
        if(logic(array[index])===true){
            arr.push(array[index]);
        }
    }
    return arr;
}

module.exports=filterFunction;
