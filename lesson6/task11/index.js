function sortAsc(arr){
    if(!Array.isArray(arr)){
        return null;
    }

    for(let i = 0; i < arr.length; ++i){
        let curr = i;
        for(let j = i + 1; j <= arr.length; ++j){
            if(arr[curr] > arr[j]){
                curr = j; 
            }
        }

        let tmp = arr[curr];
        arr[curr] = arr[i];
        arr[i] = tmp;
    }

    return arr;
}

function sortDesc(arr){
    if(!Array.isArray(arr)){
        return null;
    }

    for(let i = 0; i < arr.length; ++i){
        let curr = i;
        for(let j = i + 1; j <= arr.length; ++j){
            if(arr[curr] < arr[j]){
                curr = j; 
            }
        }

        let tmp = arr[curr];
        arr[curr] = arr[i];
        arr[i] = tmp;
    }

    return arr;
}