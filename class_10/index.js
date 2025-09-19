// const  xhrobj = new XMLHttpRequest()


// debugger
// console.log(xhrobj)
// // xhrobj.open("GET","https://jsonplaceholder.typicode.com/todos/1")
// xhrobj.open("GET","https://httpbin.org/get")
// console.log(xhrobj.response)
// xhrobj.send()

// demo
// const xhrobj = new XMLHttpRequest()
// xhrobj.responseType ='json'


// // xhrobj.open("GET","https://jsonplaceholder.typicode.com/todos/1")
// xhrobj.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
// xhrobj.send()
// console.log(xhrobj.response)
// console.log(xhrobj)
// setTimeout(() => {
//     console.log(xhrobj)
//     console.log(xhrobj.response)
// }
//     , 6000)




// function callApiViaXHR(MethodType, RequestURL, callback) {
//     try {
//         const xhrobj = new XMLHttpRequest()
//         xhrobj.responseType = 'json'
//         xhrobj.open(MethodType, RequestURL)
//         console.log(xhrobj)

//         xhrobj.send();
//         xhrobj.onload = () => {
//             callback(xhrobj.response);
//         }

//     }
//     catch (error) {
//         console.log("Getting error ", error)
//     }
// }


//Definition->when you all funtion inside a callback and do same thing for the nested callback function.
//Example of callback hell

//iusse-> It becomes difficult to manage code due to horizantal scalling

// callApiViaXHR("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
//     console.log("Post-Data", data);
//     let id = data[0].id;
//     console.log("post id", id)
//     callApiViaXHR("GET", `https://jsonplaceholder.typicode.com/posts/${id}`, (data) => {
//         console.log("Single Post-Data", data);
//         callApiViaXHR("GET", `https://jsonplaceholder.typicode.com/posts/${id}/comments`, (data) => {
//             console.log("Comments", data);

//             callApiViaXHR("GET", `https://jsonplaceholder.typicode.com/posts/${id}/comments`, (data) => {
//                 console.log("Comments", data);

//             })

//         })
//     })
// })



//Promise->Its an object, it give sureity to return any value at the certail time period.
//its has 3 states, pendinf state(Default state), fulfilled state  and reject state
//solve the problem of callbackhell



// const promise = new Promise((reslove, reject) => {
//     const age = Math.floor((Math.random(0, 10) * 10));
//     console.log(age)
//     if (age >= 5)
//         reslove("Promise Done")

//     else
//         reject("Promise Rejected")


// });
// console.log("Promise ", promise)
// promise.then((op) => {
// console.log("Output of then method",`****${op}***`)
// }).catch((err)=>{console.log("Promise Status",err)});


//ek promise ko print karne me promise hee aata hai
// promise.then((op) => {
//     console.log("Output of then method", `****${op}***`)
// }).catch((err) => { console.log("Promise Status", err) }).then(i => console.log(i)).catch(err => console.log(err)).finally(() => {
//     console.log("This code run no matter your promise is resolve reject")
// })


// const pro = promise.then((op) => {
//     console.log("Output of then method", `****${op}***`)
//     // return "done done done"
// }).catch((err) => {
//     console.log("Promise Status", err)
// })

// console.log(pro)
// pro.then(i => console.log(i))


//create a obe promise jo kisi btn ke click hone par resolve ya reject hoga

//Interview Q   1
// const resolveBtn = document.getElementById("res");
// const rejectBtn = document.getElementById("rej");
// console.log(resolveBtn, rejectBtn)
// const promise = new Promise((reslove, reject) => {
//     resolveBtn.addEventListener('click', () => {
//         reslove("Promise Done");
//     })

//     rejectBtn.addEventListener('click', () => {
//         reject("Promise Rejected")
//     })
// });

// promise.then(i => console.log(i)).catch(err => console.log(err))


// Q.2 Make promise pending

// this is not correct way
// const promise1 = new Promise((reslove, reject) => {})
// console.log(promise1)


// Good way
// const promise1 = new Promise((reslove, reject) => {
//     const age = Math.floor((Math.random(0, 10) * 10));
//     setTimeout(() => {
//         if (age >= 5)
//             reslove("Promise Done")

//         else
//             reject("Promise Rejected")
//     }, 3000)
// })

// // promise1.then(i => console.log(i)).catch(err => console.log(err))
// // console.log(promise1)
// console.log(promise1)//pending
// setTimeout(() => {
//     console.log(promise1)

// }, 5000)//promise resolve/reject


//Fetch-> this is now day way of calling the api
// console.log(fetch("https://jsonplaceholder.typicode.com/posts"))


//bad way
// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {

//     console.log("api response", response);
//     console.log(response.json().then(i=>console.log(i)))
// }).
//     catch(err => console.log(err))

// correct way



// console.log(fetch("https://jsonplaceholder.typicode.com/posts"))

// console.log(fetch("https://jsonplaceholder.typicode.com/posts")
//     .
//     then((response) => {
//         return response.json()
//     }))


// let arr = []
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .
//     then((response) => {
//         return response.json()
//     }).
//     then((data) => {
//         console.log("api data", data)
//         // single index me pura data copy kar dega
//         // arr.push(data)
//         for (let i = 0; i < data.length; i++) {
//             arr.push(data[i])
//         }
//     }).
//     catch(error => console.log("Error aa gyi hai", error))
// console.log(arr)


// let arr1 = [38, 2136, 89, 980, 8435]
// console.log(arr1)

//solve the 



//Api calling using fetch

// let arr = []
// fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).
// then((data) => {
//     console.log(data)
//     for (let i = 0; i < data.length; i++) {
//         arr.push(data[i])
//     }
// }).
// catch(error => console.log("Error aa gyi hai", error))
// console.log(arr)




//optional chaining ? it ignore the null or undefined value if you are destruute


const user = {
    uid: "c2115",
    uName: "Jagmohan Rai",
    age: "Esi bate batai nhi jati hai",
    kaam: function () {
        console.log("I am a FSD Coach")
    },
    vision: {
        Sabko: "Barbad karna ",
        kaamHua: function () {
            console.log("Nhi hua lekin kar dunga")
        },
        arr:undefined
    }

}
console.log(user.uid)
// console.log(user ?.vision ?.kaam())
// console.log(user ?.vision .kaam())
console.log(user ?.vision?.arr?.map(i=>console.log(i)))