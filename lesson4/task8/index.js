let result = 0;

for(let i = 1; i <= 1000; i++){
    result += i;
}

let finalResult = Math.floor(result / 1234) > result % 1234;
console.log(finalResult);