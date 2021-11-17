//set initial count
let count= 0;
// Select  value  and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
let x=0;
btns.forEach(function(iuu){
    console.log(iuu);

});

const b1 = document.querySelector("#btn1");
const b2 = document.querySelector("#btn2");
const b3 = document.querySelector("#btn3");

b1.addEventListener("click",function(){
    x=x-1;
    value.textContent =x;
    if(x<0){
    value.style.color ='rgb(235, 21, 21)';
    }
    if(x==0){
    value.style.color ='black';
    }
    
})
b2.addEventListener("click",function(){
    x=0;
    value.textContent =x;
    value.style.color ='black';
})
b3.addEventListener("click",function(){
    x=x+1;
    value.textContent =x;
    if(x>0){
        value.style.color ='rgb(30, 206, 30)';
        }
        if(x==0){
            value.style.color ='black';
            }
    
})