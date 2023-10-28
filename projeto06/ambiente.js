const navBar = document.querySelector('.nav-bar') /*irá procurar a classe nav-bar*/
const allLi = document.querySelectorAll('li')/* Irá pegar todas as tags li.*/

allLi.forEach( (li, index) => {
        li.addEventListener("click", e => { 
            navBar.querySelector(".active-list").classList.remove("active-list") /*irá remover a classe do elemento*/
            li.classList.add("active-list")

            const indicator = document.querySelector(".indicator")
            indicator.style.transform = `translateX(calc(${index * 90}px))`
        }) 
})