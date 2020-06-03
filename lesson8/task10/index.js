function buildObject(keysList, valuesList){
    let o = {}
    for(let i = 0; i<keysList.length; ++i){
        o[keysList[i]] = valuesList[i]
    }
    return o;
}