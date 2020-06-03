function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    
    for(let k in obj1){
        if(obj1[k] !== obj2[k]){
            return false;
        }
    }
    
    return true;
}