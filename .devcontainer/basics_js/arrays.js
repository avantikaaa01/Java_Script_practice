// 1️⃣ Problem: Find the Maximum Element in an Array

// let arr = new Array(23, 78, 90, 56, 90);
// let max = arr[0];
// for(let i = 1; i<= arr.length; i++){
//     if(arr[i] <= arr[i + 1]){
//         max = arr[i + 1];
        
//     }

   
// }
//  console.log(max);

// Find the Minimum Element in an Array

// let num = new Array(23, 76, 89, 0);
// let min;
// for(let i = 1; i<= num.length; i++){
//     if(num[i] > num[i+1]){
//         min = num[i + 1];
//     } 
// }
// console.log(min);


// Linear Search in Array
const { stdin } = require("process");
const readline = require("readline");
const rl = readline.Interface({
    input:process.stdin,
    output:process.stdin
});
rl.question("Enter the number: ", function(input){
    let num = Number(input);
    let nums = new Array(34, 78, 90, 87, 90);
for(let i = 1; i<nums.length ; i++){
    if(num == nums[i]){
        console.log(num + "is present at" + i);
    }
    else{
        console.log("target num is not present");
    }
}

    rl.close(); 
});


