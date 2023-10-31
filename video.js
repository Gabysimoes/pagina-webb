let qtdH3 = document.querySelector("#qtd");
let nPaciente = document.querySelector("#txtNomePaciente");
let email = document.querySelector("#txtEmail");
let telefone = document.querySelector("#txtTelefone");
let especialidades = document.querySelector("#txtEspecialidade");
let data = document.querySelector("#txtData");
let hora = document.querySelector("#txtHora");
let clinicas = document.querySelector("#txtClinicas");
let Cadastrar = document.querySelector("#Cadastrar");
let content = document.querySelector("#content");

let arrVideo = [];
let video;


const insert = () => {
    // console.log(cidade.value);
    // console.log(nFantasia.value);
    // console.log(rSocial.value);
    video = new Video(nPaciente.value,email.value,telefone.value,especialidades.value,data.value,hora.value,clinicas.value);
    //console.log(emp);
    arrVideo.push(video);
   
   
    alert("Cadastro efetuado com sucesso!!");
    
   
    print();
    qtd();
    clear();
    console.log(arrVideo);
}

const print = () => {
    let str = '';
    for(let i = 0; i < arrVideo.length; i++){
        str += `
        <tr>
            <td>${arrVideo[i].Nomepaciente}</td>
            <td> ${arrVideo[i].Email} </td>
            <td> ${arrVideo[i].Telefone} </td>
            <td> ${arrVideo[i].Especialidades} </td>
            <td> ${arrVideo[i].Data} </td>
            <td> ${arrVideo[i].Hora} </td>
            <td> ${arrVideo[i].Clinicas} </td>
        </tr> 
        `;
    }
    content.innerHTML = str;
}

const qtd = () =>{
    qtdH3.innerHTML = `<p>${arrVideo.length}</p>`;
}

const clear = () =>{
    nPaciente.value = '';
    email.value = '';
    telefone.value = '';
    especialidades.value = '';
    data.value = '';
    hora.value = '';
    clinicas.value = '';
}
qtd();
Cadastrar.addEventListener('click', insert);
