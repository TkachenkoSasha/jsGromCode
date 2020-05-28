function compareSums(a, b, c, d){
    return sum(a, b) > sum(c, d)
}

function sum(from, to){
    let result = 0;
    
    for(let i = from; i <= to; ++i){
        return result += i;
    }

    return result;
}