const menu = document.querySelector(".menu");
const bars = document.querySelector(".munuBurguer");
const cerrarMenu =  document.querySelector(".cerrarMenu");
    bars.addEventListener("click", function(){
        menu.classList.toggle("verMenu")
})
    cerrarMenu.addEventListener("click", function(){
        menu.classList.remove("verMenu")
    })
