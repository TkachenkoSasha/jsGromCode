function getArrayBounds(arr){
    return !Array.isArray(arr) ? null : [arr.length, arr[0], arr[arr.length-1]];
}