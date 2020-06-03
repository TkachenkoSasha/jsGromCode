function addPropertyV1(obj, key, value){
    obj[key] = value;
    return obj;
}

function addPropertyV2(obj, key, value){
    Object.assign(obj, {key: value});
    return obj;
}

function addPropertyV3(obj, key, value){
    return Object.assign({key: value}, obj);
}

function addPropertyV4(obj, key, value){
    return {key: value, ...obj};
}