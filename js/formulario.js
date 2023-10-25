const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const celular = document.getElementById("celular");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{

    e.preventDefault();
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrada = false

    if(nombre.nodeValueValue.length < 4){
        warnings += 'El NOMBRE NO es valido'
    }

    if(apellido.nodeValue.length < 4){
        warnings += 'El APELLIDO NO es valido <br>'
        entrada = true
    }
    
    if(regexEmail.test(email.Value)){
        warnings += 'El EMAIL NO es valido'
        entrada = true
    }

    if(entrada){
        parrafo.innerHTML = "Warning"
    }


})