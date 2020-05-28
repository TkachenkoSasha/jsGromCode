function increaseEvenEl(arr, delta){
    if(!Array.isArray(arr)){
        return null;
    }

    let result = [];
    
    for(let el of arr){
        result.push(el + delta);
    }

    return result;
}