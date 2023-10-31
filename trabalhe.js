let nCompleto = document.querySelector("#txtNomeCompleto");
let email = document.querySelector("#txtEmail");
let telefone = document.querySelector("#txtTelefone");
let mensagem = document.querySelector("#txtMensagem");
let uf = document.querySelector("#txtUF");
let cidade = document.querySelector("#txtCidade");
let unidade = document.querySelector("#txtUnidade");
let curriculo = document.querySelector("#txtCurriculo");
let Enviar = document.querySelector("#EnviarMensagem");


let arrTrabalhe = [];
let trabalhe;


const insert = () => {
   
    trabalhe = new Trabalhe (nCompleto.value,email.value,telefone.value,mensagem.value,uf.value,cidade.value,unidade.value,curriculo.value);
  
    arrTrabalhe.push(trabalhe);
   
   
    alert("Mensagem enviada com sucesso!!");
    
   
   
  
    clear();
    console.log(arrTrabalhe);
}


const clear = () =>{
    nCompleto.value = '';
    email.value = '';
    telefone.value = '';
    mensagem.value = '';
    uf.value = '';
    cidade.value = '';
    unidade.value = '';
    curriculo.value = '';
  
}

Enviar.addEventListener('click', insert);
