function findFunction(array,fun){
    for(let index=0;index<array.length;index++){
        if(fun(array[index])===true){
            return array[index];
        }
    }
}
module.exports=findFunction;