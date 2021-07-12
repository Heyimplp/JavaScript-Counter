
let lowercount= document.querySelector('.lowercount');
let addcount = document.querySelector('.addcount');
let counterValue = document.querySelector('.counterValue');

let integer = 0;

lowercount.addEventListener("click" , ()=>{
    integer -= 1;
    counterValue.innerText= integer ;
    if(integer <= 1) {
        integer=1
    }
}); 

addcount.addEventListener("click", ()=>{
    integer += 1;
    counterValue.innerText = integer ;
    if(integer >=50) {
        integer=49
    }
}); 