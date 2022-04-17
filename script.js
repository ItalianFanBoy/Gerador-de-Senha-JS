let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let SizePassword = document.querySelector("#valor");
let Passaword = document.querySelector("#password");

let ContainerPassword = document.querySelector("#container-password");

let chartSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&%";
let novasenha = "";

SizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    SizePassword.innerHTML = this.value 
}

function gerarSenha() {
let pass = "";

for(i = 0, n = chartSet.length; i < sliderElement.value; ++i){
    pass += chartSet.charAt(Math.floor(Math.random() * n ));
    
}
ContainerPassword.classList.remove("hide");
 Passaword.innerHTML = pass
 novasenha = pass
}

function copiarSenha() {
    alert("SENHA COPIADA COM SUCESSO")
    navigator.clipboard.writeText(novasenha);
}


