
let nCompleto = document.querySelector("#txtNomeCompleto");
let email = document.querySelector("#txtEmail");
let telefone = document.querySelector("#txtTelefone");
let mensagem = document.querySelector("#txtMensagem");
let Enviar = document.querySelector("#Enviar");


let arrSac = [];
let sac;


const insert = () => {
   
    sac = new Sac (nCompleto.value,email.value,telefone.value,mensagem.value);
  
    arrSac.push(sac);
   
   
    alert("Mensagem enviada com sucesso!!");
    
   
   
  
    clear();
    console.log(arrSac);
}


const clear = () =>{
    nCompleto.value = '';
    email.value = '';
    telefone.value = '';
    mensagem.value = '';
  
}

Enviar.addEventListener('click', insert);
