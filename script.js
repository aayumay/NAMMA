let card = document.querySelector(".cardfoll")
let hero = document.querySelector(".hero") 

hero.addEventListener("mousemove", (e)=>{
    card.style.top = e.clientY +"px"
    card.style.left = e.clientX + "px"
    card.style.transition = "linear 0.2s"

})

let menu = document.querySelector(".menu")
let click = document.querySelector("#menuclick")
let flag = 0

click.addEventListener("click", ()=>{
    if(!flag){
        menu.style.top = "0%"
        menu.style.transition = "linear 1s"
        menu.style.rotate = "10deg"
        flag = 1
    }else{
        menu.style.top = "-100%"
        menu.style.transition = "linear 0.5s"
        flag = 0
    }  
})