// function isEven(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }

// isEven(10);


// function isEvenWithLimit(slimit,elimit){
//     let a=slimit;
//     for(;a<=elimit;a++){
//         if(a%2==0){
//             console.log(a);
//         }
//     }
// }

//  isEvenWithLimit(100,300);


function primeNo(a){
    
    for(let num=2; num<=a; num++){

        let x=0;
        for(let i=2; i<num; i++){
           if(num% i== 0){
            x=1;
            // break;
           }
        //    break;
        }


        if(x==1){
            console.log(num,"is not prime")
        }
        else{
            console.log(num, "is prime")
        }
        
    }
    
}

primeNo(38);