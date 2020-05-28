let m = 1;
let n = 100;
let result = 1;

for(let i = m; i <= n; ++i){
    if(i % 2 === 0){
        continue;
    }

    result *= i;
}

console.log('Reselt: ', result);