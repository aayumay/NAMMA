let card = document.querySelector(".cardfoll")
let hero = document.querySelector(".hero") 
 
window.addEventListener("mousemove", (e)=>{
    card.style.top = e.clientY +"px"
    card.style.left = e.clientX + "px"
    card.style.transition = "linear 0.2s"

})

let menu = document.querySelector(".menu")
let click = document.querySelector("#menuclick")
let flag = 0
let texts = document.querySelector(".texts")
let button = document.querySelector(".btn1")

click.addEventListener("click", ()=>{
    if(!flag){
        menu.style.top = "0%"
        menu.style.transition = "linear 1s"
        menu.style.rotate = "15deg"
        menu.style.height = "150%"


        //text------------
        setTimeout(()=>{
        texts.style.bottom = "10%";
        texts.style.opacity = 1;
        texts.style.transition = "all 0.5s ease-out";
    },700) 
        
        flag = 1
    }else{
        menu.style.top = "-100%"
        menu.style.transition = "linear 0.5s"
        menu.style.rotate = "0deg"
        menu.style.height = "100%"

        //text--------
        texts.style.bottom = "0%";
        texts.style.opacity = 0;
        texts.style.transition = "all 0.5s ease-out"
        flag = 0
    }
    
})



// button.addEventListener("click",()=>{
//     texts.style.bottom = "40%";
//     texts.style.opacity = 1;
//     texts.style.transition = "all 0.5s ease-out";
// })

let detail = document.querySelector(".details")
let playground = document.querySelector(".playground")
let img = document.querySelector("#preview")

const images = [
    "Screenshot 2026-07-24 105710.png",
    "Screenshot 2026-07-24 105710.png",
    "Screenshot 2026-07-24 105710.png"
]
let i = 0
let interval;

detail.addEventListener("mouseenter",()=>{
    interval = setInterval(()=>{
        img.src = images[i]
        i++

        if(i>=images.length){
            i=0
        }
    },120);
})

detail.addEventListener("mouseleave",()=>{
    clearInterval(interval)
    i=0
    img.src = images[0]
})