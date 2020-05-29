function includes(arr, number){
    for(let i = 0; i < arr.length; ++i){
        if(number === arr[i]){
            return true;
        }
    }

    return false;
}