function checker(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i = 0; i < arr.length; ++i){
        if(min < arr[i]){
            min = arr[i];
        } else if(max > arr[i]){
            max = arr[i]
        }
    }

    return (min + max) > 1000;
}