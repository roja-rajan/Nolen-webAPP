let nav=document.querySelector("nav");

addEventListener("scroll",()=>{
    if(scrollY>=70){
        nav.style.backgroundColor="rgb(36, 33, 33)";
    }
    else{
        nav.style.backgroundColor="none";
    }
    
})