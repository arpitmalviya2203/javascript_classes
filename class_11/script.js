// console.log("Data")

//api calling useign xhr
// function callData(method, url) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "json";
//     xhr.open(method, url);
//     xhr.send();
//     xhr.onload = () => {
//         console.log("xhr", xhr.response)
//     }
// }
// callData("GET", "https://jsonplaceholder.typicode.com/posts ")


//callhelll using xhr


// function callData(method, url, useDatainApi) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "json";
//     xhr.open(method, url);
//     xhr.send();
//     xhr.onload = () => {
//         // console.log("xhr", xhr.response)
//         useDatainApi(xhr.response)
//     }
// }
// callData("GET", "https://jsonplaceholder.typicode.com/posts ", (post) => {
//     console.log("post", post)
//     callData("GET", `https://jsonplaceholder.typicode.com/posts/${post[0].id}`, (post) => {
//         console.log("Single post", post)

//         callData("GET", `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, (post) => {
//             console.log("comments", post)

//             callData("GET", `https://jsonplaceholder.typicode.com/comments?postId=${post[0].id}`, (post) => {

//                 console.log("all post jo comment kee gai hai", post)


//             })
//         })
//     })

// })

//solve using fetch 

// function callApi(url) {
//     const op = fetch(url);
//     return op;


// }
// let ans = callApi("https://jsonplaceholder.typicode.com/posts ").
//     then(ip => {
//         // console.log(ip)
//         // console.log(ip.json())
//         return ip.json()
//     }).then((ans) => {
//         console.log("array", ans)
//         callApi(`https://jsonplaceholder.typicode.com/posts/${ans[0].id} `).
//             then(ip => {
//                 // console.log(ip)
//                 // console.log(ip.json())
//                 return ip.json()

//             }).then(ip => {
//                 console.log(ip)

//                 callApi(`https://jsonplaceholder.typicode.com/posts/${ip.id}/comments `).
//                     then(ip => {
//                         // console.log(ip)
//                         // console.log(ip.json())
//                         return ip.json()

//                     }).then(ip => {
//                         console.log(ip)

//                     }).catch(err => console.log(err))

//             })
//     }).catch(err => console.log(err))



//best way
// async function callApiData() {

//     const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const ans1 = await res1.json();
//     console.log("ans1", ans1)
//     const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${ans1[0].id}`);
//     const ans2 = await res2.json();
//     console.log("ans2", ans2)
//     const res3 = await fetch(`https://jsonplaceholder.typicode.com/posts/${ans2.id}/comments`);
//     const ans3 = await res3.json();
//     console.log("ans3", ans3)
//     const res4 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${ans3[0].id}`);
//     const ans4 = await res4.json();
//     console.log("ans4", ans4)



// }

// callApiData()



function fun (){
    console.log(y);
    var y = 34;
}

fun();