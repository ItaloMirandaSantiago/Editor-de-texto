const input = document.getElementById("input")

    function enviar () {
        if (input.value == ""){
            document.getElementById("erro").classList.remove('hide')
            document.getElementById("sucesso").classList.add('hide')
        } else {
            localStorage.setItem('texto_salvo', input.value)
            document.getElementById("sucesso").classList.remove('hide')
            document.getElementById("erro").classList.add('hide')
        }
    }

    function apagar() {
        document.getElementById("sucesso").classList.add('hide')
        document.getElementById("erro").classList.add('hide')
        input.removeAttribute("id")
        input.removeAttribute("style")
        input.value = ""
        input.innerHTML = ""
    }

    function recuperar() {
        input.innerText = localStorage.getItem('texto_salvo')
    }