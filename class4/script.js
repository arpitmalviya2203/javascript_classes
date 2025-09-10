let obj = {
    fname : "ajay",
    age : 26,
    email : "arpitmalviya@gmail.com",
    status: null,
    isExperience :true,
    getDegree: undefined
}


console.log("Name",obj.fname);
console.log("age",obj.age);
console.log("email",obj.email);
console.log("status",obj.status);
console.log("getDegree",obj.getDegree);

let obj2 = {
    fname : "ajay",
    age : 26,
    email : "arpitmalviya@gmail.com",
    isTraining: function (){
        console.log("i am taking training at grow tech")
    },
    additionalInfo:{
        gender :"male",
        213 : "ujjain",
        "square-root" : function (x){
            console.log("hiiiii");
            return x*x;
        }
    }
}

console.log("all keys of obj2 ",obj2);
console.log("obj2 isTraining", obj2.isTraining);
console.log(obj2.additionalInfo);
console.log(obj2.additionalInfo[213]);
console.log(obj2.additionalInfo["square-root"](3));

let obje = {
    fun : function () {
                 var objec = {
                 id:301
                 }
        // return objec;
    }
}

let ans = obje.fun();
console.log(ans);