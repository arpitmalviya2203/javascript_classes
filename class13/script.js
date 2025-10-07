// let outerdiv = document.getElementsByClassName("div1")
// let addTaskbtn = document.getElementById("addbtn")

// addTaskbtn.addEventListener("click",()=>{
//     let div = document.createElement("div");

//     let para = document.createElement("p");
//     para.innerText = "this is para"

//     let updtbtn = document.createElement("button")
//     updtbtn.innerText = "Update";

//     let dltbtn = document.createElement("button")
//     dltbtn.innerText = "Delete";

//     div.append(para);
//     div.append(updtbtn);
//     div.append(dltbtn);

//     outerdiv[0].append(div);

// })

// let a = 5;

// let b = console.log(5);
// console.log(b);
// if(5==console.log("5")){
//     console.log("hi");
// }
// switch (a) {
//     case 2:
//         console.log("1");
//         // break;
//     case console.log(5):
//         console.log("2");
//         break;
//     default:
//         console.log("3");
// }


// 1
// console.log("hey");
// {
//   let a = 1;
//   let b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);
// //1
// //2
// //refrence error

// 2
// console.log("hey");
// {
//   var a = 1;
//   var b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);
// //hey
// //1
// //2
// //1
// //2

// // 3
// console.log(a);//undefined
// a();//a is not a function
//  var a=()=>{
//      console.log("hello");
//      }

    //  console.log(a);//undefined
// a();//a is not a function
//  var a=()=>{
//      console.log("hello");
//      }

// console.log([1,2,3]===[1,2,3]);//false
// console.log({ name: "a" } == { name: "a" });


// let a = [1,2,3];
// console.log(a===a);//true
// console.log({ name: "a" } == { name: "a" });


// console.log(name);
// var name = "John";

// let a = 10; 
// console.log(typeof typeof a);


// let a=10;
// console.log(++a)//11
// console.log(a)//11
// let a1=10;
// console.log(a1++)//10
// console.log(a1)//11

// console.log(1<2<3)//true
// console.log(3>2>0)//true
// console.log(3>2>1)//false

// const z=null;
// console.log(typeof z)//object
// const a=undefined;
// console.log(typeof a)//undefined

// function printVal(){
//   var x=10;
//   console.log(x);//10
// }
// printVal();
// console.log(x);//refrence error x is not defined


// function demo(){
//   console.log("hey");//hey
// }
// const ans=demo();
// console.log(ans);//undefined
// function demo1(){
//   return "hey";
// }
// const ans1=demo1();
// console.log(ans1);//hey


// console.log(a);
// console.log(b);
// var a=b=5;


// const user1 = {
//   userName: "syam",
//   age: 20,
//   address: {
//     city: "katni",
//     state: "mp",
//   },
// };
// const user2 = user1;
// user2.userName = "Dr. K. Anji Reddy";
// user2.address.city = "indore";
// console.log("user1", user1); 
// console.log("user2", user2);


 const user11 = {
   userName: "syam",
   age: 20,
   address: {
    city: "katni",
     state: "mp",
   },
 };


//  const user12 = { ...user11};
//  user12.userName = "Raghav";
//  user12.address.city = "Jab"; 
//  console.log("user11", user11); 
//  console.log("user12", user12); 

// 2nd category
// const user12 = { ...user11,...user11.address };
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("user12 has newly assign city which in user11", user12); 

// 3rd category
// const user12 = JSON.parse(JSON.stringify(user11));
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("no changes bcs we do deep copy", user11); 
// console.log("name and city in user12 object has changed", user12); 
 

const myNumbers = [2, 4, 5, 6, 7];
const modifyArray = myNumbers.map((num) => {
  return (num = num / 2);
});
const modifyArray1 = myNumbers.map((num) => (num = num / 2));
console.log("Given Array ", myNumbers);
console.log("Modified array ", modifyArray);
console.log("without return ", modifyArray1);
