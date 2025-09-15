// for(let i =0;i<4;i++)
// {
//     let str= "";
//     for(let j =0;j<4;j++){
//         str = str + "5";
//     }
//     console.log(str);
// }

//output of above program
// 5555
// 5555
// 5555
// 5555


//pattern 2
// for(let i =0;i<=5;i++)
// {
//     let str= "";
//     for(let j =0;j<i;j++){
//         str = str + "+";
//     }
//     console.log(str);
// }

//pattern 3
// for(let i =1;i<=5;i++)
// {
//     let str= "";
//     for(let j =1;j<=i;j++){
//         str = str + i ;
//     }
//     console.log(str);
// }


//pattern 4
// for(let i =0;i<5;i++)
// {
//     let str= "";
//     for(let j =0;j<5-i;j++){
//         str = str + "*" ;
//     }
//     console.log(str);
// }


//pattern 5

// for(let i =5;i>=1;i--)
// {
//     let str= "";
//     for(let j =5;j;j++){
//         str = str + "*" ;
//     }
//     console.log(str);
// }


// pattern 6

// for(let i =0;i<5;i++){
//     let space = "";
//     for(let j = 0;j<i;j++){
//         space = space + " ";
//     }
//     let ans = space;

//     for(j = 0; j<5-i;j++){
//         ans = ans + (5-i-j);
//     }
//     console.log(ans);
// }


// for(let i=1;i<=5;i++){
//     let spaceStr = "";
//     for(let space = 1;space <= 5-i;space ++){
//         spaceStr = spaceStr + " ";
//     }

//     let ans = spaceStr;
//     for(let j = 1;j<=2*i-1;j++){
//         ans = ans + "*";
//     }
//     console.log(ans);
// }


// for(let i = 1;i<=4;i++){
//     let ans = "";
//     for(let j = 1;j<=4;j++){
//         if(i==1||j==1||j==4||i==4){
//             ans = ans + "+";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log(ans);
// }

// for(let i=1;i<=5;i++){
//     let spaceStr = "";
//     for(let space = 1;space <= 5-i;space ++){
//         spaceStr = spaceStr + " ";
//     }

//     let ans = spaceStr;
//     for(let j = 1;j<=2*i-1;j++){
//          if(i==1||j==1||j==2*i-1||i==5){
//             ans = ans + "+";
//         }
//         else{
//             ans = ans + " ";
//         }
        
//     }
//     console.log(ans);
// }

///when we have to change the first letter of array element into capital letter 
// let arr = ["paritosh", "ankit", "shubham", "manish", "ritik"];
// let capital  = arr.map((w)=>{
//   return w.charAt(0).toUpperCase()+w.slice(1);
// })

// console.log(capital);

let arr = [1,2,3,4,5];

let sum = arr.reduce((pre,curr) => {
  console.log(pre,curr);
  pre = pre + curr;
})

console.log(sum);

// function flattenArrayLoop(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // If it's an array, recursively call the function and spread the result
//       result.push(...flattenArrayLoop(arr[i]));
//     } else {
//       // If not an array, push the element directlys
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }c

// // const nestedArray2 = [1, [2, 3], [4, [5, 6]]];
// const nestedArray2 = [1, [2, 3]];
// const flattenedArray2 = flattenArrayLoop(nestedArray2);
// console.log(flattenedArray2);
