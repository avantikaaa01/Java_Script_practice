// Write a function findMax(a, b, c) that returns the largest of three numbers.

// function findMax(a,b,c){
//     if(a>b && a >c){
//         return a ;
//     } 
//     else if(b > a && b > c){
//         return b;
//     }
//     else if(c > a && c > b){
//         return c;
//     } 
// }
// let result = findMax(90, 6, 9);
// console.log(result);

// Write a function printNumbers(n) that prints numbers from 1 to n.

// function printNumbers(n){
//     for(let i = 1; i <=n ; i++){
//         console.log(i);

//     }
// }
// printNumbers(23);

// Write a function sumTillN(n) that returns the sum of all numbers from 1 to n.

// function sumTill(n){
//     let sum = 0;
//     for(let i = 1; i <=n; i++){
//         sum = sum + i;
//     }
//     return sum;
    
// }
// let result = sumTill(2);
// console.log(result);


// Write a function reverseNumber(num) that reverses a number.

function reverseNumber(num){
    let rev = 0;
    while(num > 0){
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverseNumber(1234));

