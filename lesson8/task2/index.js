function concatProps(obj){
    const arr = [];
    
    for(let k in obj){
        arr.push(obj[k]);
    }

    return arr;
}