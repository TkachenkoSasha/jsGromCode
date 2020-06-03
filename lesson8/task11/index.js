function pickProps(obj, arr){
    let resObj = {};
    
    for(let k in obj){
        if(arr.includes(k)){
            resObj[k] = obj[k];
        }
    }

    return resObj;
}