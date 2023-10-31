let qtddH3 = document.querySelector("#qtdd");
let nPacientee = document.querySelector("#txtNomePacientee");
let emaill = document.querySelector("#txtEmaill");
let telefonee = document.querySelector("#txtTelefonee");
let examess = document.querySelector("#txtexamess");
let dataa = document.querySelector("#txtDataa");
let horaa = document.querySelector("#txtHoraa");
let clinicass = document.querySelector("#txtClinicass");
let Cadastrarr = document.querySelector("#Cadastrarr");
let contentt = document.querySelector("#contentt");

let arrExames = [];
let exames;


const insert = () => {
   
    exames = new Exames(nPacientee.value,emaill.value,telefonee.value,examess.value,dataa.value,horaa.value,clinicass.value);
  
    arrExames.push(exames);
   
   
    alert("Cadastro efetuado com sucesso!!");
    
   
    printt();
    qtdd();
    clearr();
    console.log(arrExames);
}

const printt = () => {
    let str = '';
    for(let i = 0; i < arrExames.length; i++){
        str += `
        <tr>
            <td>${arrExames[i].Nomepaciente}</td>
            <td> ${arrExames[i].Email} </td>
            <td> ${arrExames[i].Telefone} </td>
            <td> ${arrExames[i].Exames} </td>
            <td> ${arrExames[i].Data} </td>
            <td> ${arrExames[i].Hora} </td>
            <td> ${arrExames[i].Clinicas} </td>
        </tr> 
        `;
    }
    contentt.innerHTML = str;
}

const qtdd = () =>{
    qtddH3.innerHTML = `<p>${arrExames.length}</p>`;
}

const clearr = () =>{
    nPacientee.value = '';
    emaill.value = '';
    telefonee.value = '';
    examess.value = '';
    dataa.value = '';
    horaa.value = '';
    clinicass.value = '';
}
qtdd();
Cadastrarr.addEventListener('click', insert);
