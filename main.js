const openMenuBar = document.querySelector(".menu-bar img")
const mobileMenu = document.querySelector(".mobileMenu");
const closeMenuBar = document.querySelector(".close img")

openMenuBar.addEventListener("click", ()=>{
    mobileMenu.style.transform = "translateX(0%)"
})

closeMenuBar.addEventListener("click", ()=>{
    mobileMenu.style.transform = "translateX(100%)"
})
