function getAdults(obj){
    let resObj = {};
    for(let k in obj){
        if(obj[k] >= 18){
            resObj[k] = obj[k];
        }
    }
    return resObj;
}