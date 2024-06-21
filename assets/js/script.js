let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")
function validaNome() {
    let txt = document.querySelector("#txtNome")
    if(nome.value.length >= 3){
        nome.style.border = '2px solid green'
        txt.innerHTML = ""
        nomeOk = true
    }else if(nome.value.length < 3){
        nome.style.border = '2px solid red'
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
        
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email iválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = ""
        txtEmail.style.color = ""
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("formulario enviado com sucesso")
    }else{
        alert("Preencha o formulario corretamente antes de enviar")
    }
}

function mapaZoom(){
    mapa.style.width = "700px";
    mapa.style.height = "600px";
    
}

function mapaNormal(){
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}