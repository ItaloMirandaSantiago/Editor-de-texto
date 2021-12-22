document.getElementById('pequeno').addEventListener('click', ()=> {
    input.classList.remove("grande")
    input.classList.remove("padrao")
    input.classList.add("pequeno")

})

document.getElementById('padrao').addEventListener('click', ()=> {
    input.classList.remove("grande")
    input.classList.remove("pequeno")
    input.classList.add("padrao")

})

document.getElementById('grande').addEventListener('click', ()=> {
    input.classList.remove("pequeno")
    input.classList.remove("padrao")
    input.classList.add("grande")

})