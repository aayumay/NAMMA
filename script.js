// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Load Animation
gsap.to(".hero-text", {
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out",
    delay: 0.2
});

// Video scroll animation
gsap.to(".video-container video", {
    width: "100%",
    height: "100%",
    marginTop: "0%",
    borderRadius: "0px",
    scrollTrigger: {
        trigger: ".video-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true
    }
});

// Description text reveal
gsap.utils.toArray(".desc-line h1").forEach((line) => {
    gsap.to(line, {
        y: 0,
        scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "bottom 70%",
            scrub: 1
        }
    });
});

let card = document.querySelector(".cardfoll")
let hero = document.querySelector(".hero") 
 
window.addEventListener("mousemove", (e)=>{
    gsap.to(card, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.6,
        ease: "power3.out",
        opacity: 1
    });
})

let menu = document.querySelector(".menu")
let click = document.querySelector("#menuclick")
let flag = 0
let texts = document.querySelector(".texts")
let button = document.querySelector(".btn1")

click.addEventListener("click", ()=>{
    if(!flag){
        menu.style.top = "0%"
        menu.style.transition = "linear 0.5s"
        menu.style.rotate = "4deg"
        menu.style.height = "150%"

        click.querySelector("p").innerText = "CLOSE";
        click.querySelector(".overlay p").innerText = "CLOSE";

        //text------------
        setTimeout(()=>{
        texts.style.top = "15vh";
        texts.style.opacity = 1;
        texts.style.pointerEvents = "auto";
        texts.style.transition = "all ease 0.5s";
    },500) 
        
        flag = 1
    }else{
        menu.style.top = "-115%"
        menu.style.transition = "linear 0.5s"
        menu.style.rotate = "0deg"
        menu.style.height = "100%"

        click.querySelector("p").innerText = "MENU";
        click.querySelector(".overlay p").innerText = "OPEN";

        texts.style.top = "60%";
        texts.style.opacity = 0;
        texts.style.pointerEvents = "none";
        texts.style.transition = "all 0.5s ease-out"
        flag = 0
    }
    
})



// button.addEventListener("click",()=>{
//     texts.style.bottom = "40%";
//     texts.style.opacity = 1;
//     texts.style.transition = "all 0.5s ease-out";
// })

let detail = document.querySelector(".detail")
let playground = document.querySelector(".playground")
let img = document.querySelector("#preview")

// const images = [
//     "Screenshot 2026-07-24 105710.png",
//     "Screenshot 2026-07-24 105710.png",
//     "Screenshot 2026-07-24 105710.png"
// ]
let i = 0
let interval;

let details = document.querySelectorAll(".detail")
details.forEach((det) => {
    det.addEventListener("mouseenter", () => {
        let rect = det.getBoundingClientRect();
        
        if(img && typeof images !== 'undefined') {
            img.src = images[i];
            img.style.left = (rect.left + rect.width / 2) + "px";
            img.style.top = (rect.top + rect.height / 2) + "px";
            img.style.opacity = "1";
            
            let randomX = Math.floor(Math.random() * 40) - 20;
            let randomY = Math.floor(Math.random() * 40) - 20;
            let randomRot = Math.floor(Math.random() * 20) - 10;
            let randomScale = 0.9 + (Math.random() * 0.3);
            
            img.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px)) rotate(${randomRot}deg) scale(${randomScale})`;
        }
        
        interval = setInterval(()=>{
            if(img && typeof images !== 'undefined') {
                img.src = images[i];
                
                let randomX = Math.floor(Math.random() * 40) - 20;
                let randomY = Math.floor(Math.random() * 40) - 20;
                let randomRot = Math.floor(Math.random() * 20) - 10;
                let randomScale = 0.9 + (Math.random() * 0.3);
                
                img.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px)) rotate(${randomRot}deg) scale(${randomScale})`;
            }
            i++;

            if(typeof images !== 'undefined' && i>=images.length){
                i=0;
            }
        }, 150);
    })

    det.addEventListener("mouseleave",()=>{
        clearInterval(interval);
        i=0;
        if(img && typeof images !== 'undefined') {
            img.src = images[0];
            img.style.opacity = "0";
            img.style.transform = "translate(-50%, -50%)";
        }
    })
});



//------------------------------------------------------
let boxes = document.querySelectorAll(".box")
let rectangle = document.querySelector(".rectangle")

boxes.forEach((box, index) => {
    let video = box.querySelector("video");
    
    box.addEventListener("mouseenter", () => {
        rectangle.style.opacity = 1;
        
        
        if (index === 0) {
            rectangle.innerHTML = "<h1>aayush</h1>";
        } else if (index === 1) {
            rectangle.innerHTML = "<h1>aayu</h1>";
        } else if (index === 2) {
            rectangle.innerHTML = "<h1>aaayumay</h1>";
        } else {
            rectangle.innerHTML = "<h1>aayuuuu</h1>";
        }
        
    });

    box.addEventListener("mouseleave", () => {
        rectangle.style.opacity = 0;
        
    });
});

document.addEventListener("mousemove", (e) => {
    rectangle.style.left = e.clientX + "px"
    rectangle.style.top = e.clientY + "px"
    rectangle.style.transition = "left 0.15s ease-out, top 0.15s ease-out, opacity 0.2s "
    rectangle.style.transform = `rotate(-8deg)`;

})

// let playground = document.querySelector(".playground");
const preview = document.querySelector(".description img");
let timer
// let i = 0
const images =[
    "d1.webp",
    "d2.webp",
    "d3.webp",
    "p1.webp"
]
let playgrounds = document.querySelectorAll(".playground")
playgrounds.forEach((pg) => {
    pg.addEventListener("mouseenter", () => {
        let rect = pg.getBoundingClientRect();

        if(preview && typeof images !== 'undefined') {
            preview.src = images[i];
            preview.style.left = (rect.left + rect.width / 2) + "px";
            preview.style.top = (rect.top + rect.height / 2) + "px";
            preview.style.opacity = "1";
            
            let randomX = Math.floor(Math.random() * 40) - 20;
            let randomY = Math.floor(Math.random() * 40) - 20;
            let randomRot = Math.floor(Math.random() * 20) - 10;
            let randomScale = 0.9 + (Math.random() * 0.3);
            
            preview.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px)) rotate(${randomRot}deg) scale(${randomScale})`;
        }

        timer = setInterval(()=>{
            if(preview && typeof images !== 'undefined') {
                preview.src = images[i];
                
                let randomX = Math.floor(Math.random() * 40) - 20;
                let randomY = Math.floor(Math.random() * 40) - 20;
                let randomRot = Math.floor(Math.random() * 20) - 10;
                let randomScale = 0.9 + (Math.random() * 0.3);
                
                preview.style.transform = `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px)) rotate(${randomRot}deg) scale(${randomScale})`;
            }
            i++;

            if(typeof images !== 'undefined' && i>=images.length){
                i=0;
            }
        }, 150);
    })

    pg.addEventListener("mouseleave",()=>{
        clearInterval(timer);
        i=0;
        if(preview && typeof images !== 'undefined') {
            preview.src = images[0];
            preview.style.opacity = "0";
            preview.style.transform = "translate(-50%, -50%)";
        }
    })
});

// Services hover logic
let serviceItems = document.querySelectorAll(".service-item");
serviceItems.forEach((item) => {
    let video = item.querySelector(".service-video");
    
    item.addEventListener("mouseenter", (e) => {
        if(video) {
            video.style.opacity = "1";
            video.style.left = e.clientX + "px";
            video.style.top = e.clientY + "px";
        }
    });
    
    item.addEventListener("mousemove", (e) => {
        if(video) {
            video.style.left = e.clientX + "px";
            video.style.top = e.clientY + "px";
        }
    });
    
    item.addEventListener("mouseleave", () => {
        if(video) {
            video.style.opacity = "0";
        }
    });
});
