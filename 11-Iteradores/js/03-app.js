//Fizz Buzz

// Multiplos de tres fizz
// Multiplos de cinco buzz
// Multiplos de ambos FIZZBUZZ

for (let i = 1; i <= 100; i++) {
    if((i % 3) === 0 && (i % 5) === 0){
        console.log(`${i} FIZZBUZZ`);
    }else if((i % 3) === 0){
        console.log(`${i} fizz`);
    }else if((i % 5) === 0){
        console.log(`${i} buzz`);
    }
}
