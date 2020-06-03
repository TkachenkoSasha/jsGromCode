function transformToObject(arr){
    const obj = {};
    
    arr.forEach(element => {
       obj[element] = element; 
    });
    
    return obj
}