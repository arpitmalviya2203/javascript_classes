// let x= 23;
// var y = 3;
// const z= 4;

// {
//     let x= 2;
//     var y = 3;
//     const z= 4;
// }

// console.log(x,y,z);

// function fam(){
    
// }





//simple function 


function foo (){
    console.log("helllo");
}

foo();

//function with parameter

function zoo (x,y){

    console.log(x+y);
}

let a=10;
let b=20;

zoo(a,b);//30

//function with return value

function zoo (x,y){

    return x+y;
}

let a1=30;
let b1=20;

let p=zoo(a1,b1);
console.log(p); //

//pure function
//jis function ka output  same argument dene par 
// same output aaye vah function pure function hota hai

function pure(a,b){
    console.log(a+b);
}

pure(2,5);//7
pure(2,5);//7

//impure function 
//jis function mein output diffrent ho sakta hai vah function impure function hota hai 

let i=0;

function impure (){
    console.log(++i);//
}

impure();//1
impure();//2

//first class function have to read


//callback function
function callb () {
    console.log("chello");
}

//higher order function HOC
function hoc (yi){
    yi();
    console.log(yi);
}

hoc(callb);