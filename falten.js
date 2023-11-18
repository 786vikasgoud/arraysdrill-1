let arr=[];
function getFlaten(array){
    array.forEach(function(id,index){
        if(Array.isArray(id)){
            getFlaten(id);
        }
        else{
            arr.push(id);
        }
    });
    return arr;
}


module.exports=getFlaten;

// function getFlaten(array){
//     let arr=[];
//     array.forEach(function(id,index){
//         if(Array.isArray(id)){
//             getFlaten(id);
//         }
//         else{
//             console.log(id);
//         }
//     })
// }
// remove(array);