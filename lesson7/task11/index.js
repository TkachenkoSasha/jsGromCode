function filterNames(arr, text){
    return arr.filter(el => el.includes(text) && el.length > 5);
}