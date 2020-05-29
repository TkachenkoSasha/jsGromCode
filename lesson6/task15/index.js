function removeDuplicates(array){
    if(!Array.isArray(array)){
        return null;
    }
    let result = [];
    for(let i = 0; i < array.length; ++i){
        let curr = array[i]
        let j = 0;
        for(; j < array.length; ++j){
            if(curr === array[j] && i !== j){
               break; 
            }
        }

        if(j >= array.length){
            result.push(curr);
        }
    }

    return result;
}