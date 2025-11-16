// Print a Rectangle

// for(let i = 1; i <=2 ; i++){
//     let row = " "
//     for(let j = 1; j <=3; j++){
//         row += "*"
        
//     }
//     console.log(row);
// }

// Print This Pattern
// *
// **
// ***
// ****

// for(let i = 1; i <=4; i++){
//     let row = " ";
//     for(let j = 1; j <=i; j++){
//         row += "*";
//     }
//     console.log(row);

// }

// Print this pattern:

// 1
// 12
// 123
// 1234

// for(let i = 1; i <=4; i++){
//     let row = "";
//     for(let j = 1; j <=i; j++){
//         row += j;
//     }
//     console.log(row);
// }

// Print 5 stars in one line
// let starts = ""
// for(let i = 1; i <=5; i++){
//     starts += "*";
    
// }
// console.log(starts);

// Print this pattern (using nested loops):
// ***
// ***
// ***

// for(let i = 1; i <=3; i++){
//     let row = " ";
//     for(let j = 1; j <=3; j++){
//         row += "*";
        
//     }
//     console.log(row);

// }

// Print the sum of numbers from 1 to 10- answer - 55
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);

// Print this pattern (reverse stars):
// ****
// ***
// **
// *

// for(let i = 1; i<=4; i++){
//     let row = " ";
//     for(let j = 4; j >= i; j--){
//         row += "*";
//     }
//     console.log(row);
// }


// Pattern 1 — Solid Square (3×3)
// ***
// ***
// ***

// for(let i = 1; i <=3; i++){
//     let rows ="";
//     for(let j = 1; j<=3; j++){
//         rows += "*";
//     }
//     console.log(rows);
// }

// Solid Rectangle (3×5)
// *****
// *****
// *****

// for(let i = 1; i<=3; i++){
//     let rows = "";
//     for(let j = 1; j<=5; j++){
//         rows += "*";
//     }
//     console.log(rows);
// }

// Pattern 3 — Increasing Triangle
// *
// **
// ***
// ****

// for(let i = 1; i<=4; i++){
//     let rows ="";
//     for(let j = 1; j<=i; j++){
//         rows += "*";
//     }
//     console.log(rows);
// }

// Pattern 4 — Decreasing Triangle
// ****
// ***
// **
// *

// for(let i = 1; i<=4; i++){
//     let rows = "";
//    for(let j= 4; j>=i; j-- ){
//     rows += "*";
//    }
//    console.log(rows);
// }

// Pattern 5 — Number Triangle
// 1
// 12
// 123
// 1234

// for(let i = 1; i<=4; i++){
//     let rows = "";
//     for(let j = 1; j<= i; j++){
//         rows += j;
//     }
//     console.log(rows);
// }


// Pattern 6 — Repeated Numbers
// 1111
// 2222
// 3333
// 4444

// for(let i = 1; i<=4; i++){
//     let rows = "";
//     for(let j = 1; j<=4; j++){
//         rows += i;
//     }
//     console.log(rows);
// }


// Pattern 7 — Number Pyramid
// 1
// 22
// 333
// 4444

for(let i = 1; i <=4; i++){
    let rows = "";
    for(j = 1; j<=i; j++){
        rows += i;
        
    }
    console.log(rows);
}