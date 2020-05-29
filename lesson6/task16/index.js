function uniqueCount(array){
    if(!Array.isArray(array)){
        return null;
    }
    let result = [];
    for(let i = 0; i < array.length; ++i){
        let curr = array[i];
        let j = 0;
        for(; j < result.length; ++j){
            if(curr === result[j] && i !== j){
                break;
            }
        }
        if(j >= result.length){
            result.push(curr);
        }
    }

    return result.length;
}