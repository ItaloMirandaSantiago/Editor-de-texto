     document.getElementById('fonte1').addEventListener("click", ()=> {
    input.removeAttribute('id')
    input.removeAttribute("style")
    input.setAttribute("id", "fonte1")
        })

    document.getElementById('fonte2').addEventListener("click", ()=> {
    input.removeAttribute('id')
    input.removeAttribute("style")
    input.setAttribute("id", "fonte2")
        })

    document.getElementById('fonte3').addEventListener("click", ()=> {
    input.removeAttribute('id')    
    input.removeAttribute("style")
    input.setAttribute("id", "fonte3")
        })   
            
    document.getElementById('fonte4').addEventListener("click", ()=> {
    input.removeAttribute('id')
    input.removeAttribute("style")
    input.setAttribute("id", "fonte4")
        })

    document.getElementById('fonte5').addEventListener("click", ()=> {
    input.removeAttribute('id')
    input.removeAttribute("style")
    input.setAttribute("id", "fonte5")
        })

    document.getElementById('fonte6').addEventListener("click", ()=> {
    input.removeAttribute('id')
    input.removeAttribute("style")
    input.setAttribute("id", "fonte6")
        })

// fonte exportada 

    
     function colocar_link() {
         let link = document.getElementById('link1').value
         let nome = document.getElementById('nome').value

        document.getElementById('exportar').innerHTML = link
        input.setAttribute("id",'fonte7')
        document.getElementById("fonte7").style.fontFamily = nome
     }

