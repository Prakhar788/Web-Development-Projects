import homepage from './home.js'
import menu from './menu.js'
import contact from './contact.js'

let contentdiv = document.getElementById("content");
homepage(contentdiv)

const myFunction = function(e) {
    let targetdiv = e.target;
    contentdiv.removeChild(contentdiv.firstChild)
    if(targetdiv.innerHTML == "Home"){
        homepage(contentdiv)
    }
    if(targetdiv.innerHTML == "Menu"){
        menu(contentdiv)
    }
    if(targetdiv.innerHTML == "Contact"){
        contact(contentdiv)
    }
    
    let nav_btns = document.querySelectorAll('li')
    nav_btns.forEach(element => {
        element.addEventListener('click', myFunction);
    })
}

let nav_btns = document.querySelectorAll('li')
console.log(nav_btns)
nav_btns.forEach(element => {
    element.addEventListener('click', myFunction);
})