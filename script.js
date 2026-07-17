let card = document.querySelector(".cardfoll")
let hero = document.querySelector(".hero") 

hero.addEventListener("mousemove", (e)=>{
    card.style.top = e.clientY +"px"
    card.style.left = e.clientX + "px"
    card.style.transition = "linear 0.2s"

})