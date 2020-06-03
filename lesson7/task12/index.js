function arrAverage(arr){
    if(!Array.isArray(arr)){
        return null;
    }

    return arr.reduce((sum,el) => sum += el) / arr.length;
}