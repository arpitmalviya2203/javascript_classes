//// freeze method 
//// by apply freeze method we can only read the content of object we cannot update,add, delete;

// let obj = {
//     fname : "ajay",
//     lname : "yadav",
//     age : 23
// }

// Object.freeze(obj);

// console.log(obj.fname);


////seal method
///// by apply seal method we can read and update the content of object we cannot add, delete;

// let obj1 = {
//     fname : "ajay",
//     lname : "yadav",
//     age : 23
// }

// Object.seal(obj1);
// obj1.fname = "raj";

// console.log(obj1.fname);6



//Array destructuring

let  arr= [1,2,3,23,9];
let [one, two] =arr;
console.log("original array",arr);
console.log("one=>", one,"two=>",two);

////Object destructuring

// let person = {
//     id: 101,
//     fname : "rohit",
//     data : {
//         city:"INDORE"
//     }
// }

// const {id,fname,data}=person; // object destructuring mein destructuring karte samay variable ke name same hona chahiye jaise object ke name mein hain vaise hi jis variable mein store kar rahe hai uska name bhi same hona chahiye
// console.log("id ",id,"name ",fname,"Data Object ",data,data.city);



////for of loop is used for arrray and strings
//// it gives more  control like can use break continue

// let arr = [4,344,95,353,5,53,34,344];
// console.log(arr);

// for(let value of arr){
//     console.log(value);
// }



////use break
// let arr = [4,344,95,353,5,53,34,344];
// console.log(arr);

// for(let value of arr){

//     if(value==95){
//         break; //it break the loop means control will go outside the loop
//     }
//     console.log(value);
// }



////use continue
// let arr = [4,344,95,353,5,53,34,344];
// console.log(arr);

// for(let value of arr){

//     if(value==95){
//         continue; //it stop the iteration
//     }
//     console.log(value);
// }


////for in loop 
// let obj = {
//     fname : "aman",
//     lname : "rai",
//     age : 23
// }

// for(let value in obj){
//     console.log(`value of ${value} is ${obj[value]}`);
// }

