// this keyword
//this keyword by default windows object ko refer karta hai



//case 1
// console.log(this);

// function getUser(){
//     console.log(this); //refer window object
// }

// getUser();

//case 2
// new getUser();



//case 3
/////this inside function which function is inside object will refer current object
// let obj = {
//     fname:"rohit",
//     age:"33",
//     fun: function () {
//         console.log(this)
//     }
// }

// obj.fun();



//case 4
////this in nested function gives window object
// let obj1 = {
//     fname:"rohit",
//     age:"33",
//     fun: function () {
//         function nestedFunc () {
//             console.log(this)
//         }
//         nestedFunc();
//     }
// }

// obj1.fun();


//case 5
// let obj1 = {
//     fname:"rohit",
//     age:"33",
//     fun: function () {
//         const nestedFunc =  () => {
//             console.log(this)// obj object will refer
//         }
//         nestedFunc();
//     }
// }

// obj1.fun()


// case 7
let obj2 = {
    age: 23,
    fname: "virendra",
    data: () => {
        console.log(this); //window object
    }
}

obj2.data();



// Shallow copy-> when You make the changes in copy object change the orginal object

const object1 = {
    userName: "XYX",
    age: 21,
    city: {
        pincode: 483334
    }
}


// console.log("Orignal object can Crud on it", object1)

// const object2 = object1;//1st way of shallow copy 
// const object2 = Object.assign(object1);//2nd way of shallow copy 
// // console.log("Duplicate object",object2)

// object2.age = 26;
// object2.city.pincode=452011;
// console.log("I made change by duplicate, orignal change ho gya hai", object1)
// console.log("Now  Duplicate object", object2)







// Deep Copy->// both objects are treat differently

// const object2 =JSON.parse(JSON.stringify(object1))// 1st way
// // const object2 = structuredClone(object1)
// object2.age = 26;
// object2.city.pincode = 452011;
// console.log("No change in original object", object1)
// console.log("changes only in   Duplicate object", object2)



//Edge Cases
//case-:1 =>1st pass the empty object in the Object.assign() method 
// const object2 = Object.assign({},object1);//2nd way of shallow copy 
// // console.log("Duplicate object",object2)

// object2.age = 26;
// object2.city.pincode=452011;
// console.log("I made change by duplicate, orignal change ho gya hai", object1)
// console.log("Now  Duplicate object", object2)




//case-2: 
const object2 ={...object1};//2nd using spread
object2.age = 26;
object2.city.pincode = 452011;
console.log("I made change by duplicate, orignal change ho gya hai", object1)
console.log("Now  Duplicate object", object2)


