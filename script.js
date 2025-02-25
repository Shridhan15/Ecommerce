const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');


//close navbar on clicking X
const close=document.getElementById('close');



if (bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active');
    })
}


if (close){
    //close on clicking
    close.addEventListener("click",()=>{
        nav.classList.remove('active');
    })
}