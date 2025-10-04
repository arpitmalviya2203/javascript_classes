// console.log("---------------");
// // const h1Ele = document.getElementsByTagName("h1");
// let divEle = document.getElementsByTagName("div");

const mypara = document.getElementById("mypara");
const mypara1 = document.getElementById("mypara1");
let fun = ()=>{
    console.log("event add successfuly");
}
mypara.addEventListener("click",fun);

mypara.removeEventListener("click",fun);
