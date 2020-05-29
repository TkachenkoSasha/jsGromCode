function increaseEvenEl(arr, delta){
    if(!Array.isArray(arr)){
        return null;
    }

    return arr.map(el => el % 2 === 0 ? el+delta : el);
}