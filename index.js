
/* variables de clases navegador*/
const nombre = document.querySelector(".nombre")
const email = document.querySelector(".email")
const cumpleaños = document.querySelector(".cumpleaños")
const localización = document.querySelector(".localización")
const telefono = document.querySelector(".telefono")
const contraseña = document.querySelector(".contraseña")

/* eventos del nav*/

nombre.addEventListener("mouseover", () => {
    handleClick(nombre)
})
email.addEventListener("mouseover", () => {
    handleClick(email)
})
cumpleaños.addEventListener("mouseover", () => {
    handleClick(cumpleaños)
})
localización.addEventListener("mouseover", () => {
    handleClick(localización)
})
telefono.addEventListener("mouseover", () => {
    handleClick(telefono)
})
contraseña.addEventListener("mouseover", () => {
    handleClick(contraseña)
})


function handleClick(element) {
    document.getElementById('user_title').innerHTML = element.getAttribute(`data-title`)
    document.getElementById('user_value').innerHTML = element.getAttribute(`data-value`)
}