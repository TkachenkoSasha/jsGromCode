function getArrayBounds(arr){
    return arr.length === 0 ? null : [arr.length, arr[0], arr[arr.length-1]];
}