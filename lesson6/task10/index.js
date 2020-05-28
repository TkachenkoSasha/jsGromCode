function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }

    let result = [];
    for(let i = 0; i<arr.length; ++i){
        result.push(arr[i]);
    }

    return result;
}