let mainDiv = document.getElementById("container");
let all = document.getElementById("all");
let price = document.getElementById("price");
let rate = document.getElementById("rate");
let country = document.getElementById("country");
async function apicall(url) {
  try {
    mainDiv.innerHTML = `<div class="spinner-border" style="margin-left: 50em; margin-top:4em;"></div>`;
    const data = await fetch(url);
    const mData = await data.json();
    mainDiv.innerHTML = "";
    let allEle= () =>{
    mainDiv.innerHTML = "";
    mData.filter((ele) => {
      return (
        mainDiv.innerHTML += `<div  class="card " style="width: 23rem;"> 
                         <img src=${ele.img} class="card-img-top" alt="">
                <p class="card-text" >Name:${ele.name}</p>
                <p class="card-text" >Discription:${ele.dsc}</p>
                <p class="card-text" >Rate:${ele.rate}</p>
                <p class="card-text" >Price:${ele.price}</p>
                <p class="card-text" >Country:${ele.country}</p>
        </div>`
        );
    });
}


    allEle();
    all.addEventListener("click",allEle);
    //filter price btn

    price.addEventListener("click", () => {
        mainDiv.innerHTML="";
      mData.filter((ele) => {
        if (ele.price > 100) {
            
          mainDiv.innerHTML += `<div  class="card " style="width: 23rem;"> 
                         <img src=${ele.img} class="card-img-top" alt="">
                <p class="card-text" >Name:${ele.name}</p>
                <p class="card-text" >Discription:${ele.dsc}</p>
                <p class="card-text" >Rate:${ele.rate}</p>
                <p class="card-text" >Price:${ele.price}</p>
                <p class="card-text" >Country:${ele.country}</p>
        </div>`;
        }
      });
    });

    //filter rate btn
    rate.addEventListener("click", () => {
        mainDiv.innerHTML="";
      mData.filter((ele) => {
        if (ele.rate > 4) {
            console.log("hi")
          mainDiv.innerHTML += `<div  class="card " style="width: 23rem;"> 
                         <img src=${ele.img} class="card-img-top" alt="">
                <p class="card-text" >Name:${ele.name}</p>
                <p class="card-text" >Discription:${ele.dsc}</p>
                <p class="card-text" >Rate:${ele.rate}</p>
                <p class="card-text" >Price:${ele.price}</p>
                <p class="card-text" >Country:${ele.country}</p>
        </div>`;
        }
      });
    });

    //filter country btn
      country.addEventListener("click", () => {
        mainDiv.innerHTML="";
      mData.filter((ele) => {
        if (ele.country === "Kinston, NC") {
            
          mainDiv.innerHTML += `<div  class="card " style="width: 23rem;"> 
                         <img src=${ele.img} class="card-img-top" alt="">
                <p class="card-text" >Name:${ele.name}</p>
                <p class="card-text" >Discription:${ele.dsc}</p>
                <p class="card-text" >Rate:${ele.rate}</p>
                <p class="card-text" >Price:${ele.price}</p>
                <p class="card-text" >Country:${ele.country}</p>
        </div>`;
        }
      });
    });
  } catch (error) {
    console.log("error occured", error);
  }
}

apicall("https://free-food-menus-api-two.vercel.app/bbqs");

// let mainDiv = document.getElementById("container");
// let price = document.getElementById("price");
// let rate = document.getElementById("rate");
// let country = document.getElementById("country");
// async function apicall(url) {
//     try {
//         mainDiv.innerHTML = `<div class="spinner-border" style="margin-left: 50em; margin-top:4em;"></div>`;
//         const data = await fetch(url);
//         const mData = await data.json();
//         mainDiv.innerHTML='';
//         mData.filter((ele) => {
//             return (
//                 mainDiv.innerHTML += `<div  class="card " style="width: 23rem;">
//                          <img src=${ele.img} class="card-img-top" alt="">
//                 <p class="card-text" >Name:${ele.name}</p>
//                 <p class="card-text" >Discription:${ele.dsc}</p>
//                 <p class="card-text" >Rate:${ele.rate}</p>
//                 <p class="card-text" >Price:${ele.price}</p>
//                 <p class="card-text" >Country:${ele.country}</p>
//         </div>`
//             )
//         })

//     }
//     catch (error) {
//         console.log("error occured", error)
//     }
// }

// apicall("https://free-food-menus-api-two.vercel.app/bbqs")
