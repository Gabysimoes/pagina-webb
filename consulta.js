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

let arrPaciente = [];
let paciente;


const insert = () => {
    // console.log(cidade.value);
    // console.log(nFantasia.value);
    // console.log(rSocial.value);
    paciente = new Paciente(nPaciente.value,email.value,telefone.value,especialidades.value,data.value,hora.value,clinicas.value);
    //console.log(emp);
    arrPaciente.push(paciente);
   
   
    alert("Cadastro efetuado com sucesso!!");
    
   
    print();
    qtd();
    clear();
    console.log(arrPaciente);
}

const print = () => {
    let str = '';
    for(let i = 0; i < arrPaciente.length; i++){
      //  str += `
      //  <tr>
        //    <td>${arrPaciente[i].Nomepaciente}</td>
         //   <td> ${arrPaciente[i].Email} </td>
         //   <td> ${arrPaciente[i].Telefone} </td>
         //   <td> ${arrPaciente[i].Especialidades} </td>
          //  <td> ${arrPaciente[i].Data} </td>
         //   <td> ${arrPaciente[i].Hora} </td>
         //   <td> ${arrPaciente[i].Clinicas} </td>
       // </tr> 
      //  `;
    
      str += "<div class='col-12 col-md-6 mt-2'>";
      str += "<div class='card text-white bg-info'>";
      str += "<div class='card-body'>";
      str += "<h4 class='card-title'>Consultas cadastradas</h4>";
      str += "<table class='bg-white text-dark text-center border table table-hover table-responsive '>";
      str += "<tr><td class='border text-center'>Nome do Paciente</td><td class='border text-center'>Email</td><td class='border'>Telefone</td><td class='border'>Especialidades</td><td class='border'>Data</td><td class='border'>Hora</td><td class='border'>Clinicas</td></tr>";
      str += "  <tr>";
      str += " <td style='width:10%' class='border'> ";
      str += arrPaciente[i].Nomepaciente;
      str += " </td> ";
      str += " <td style='width:10%' class='border'> ";
      str += arrPaciente[i].Email
      str += " </td> ";
      str += " <td style='width:10%' class='border'> ";
      str += arrPaciente[i].Telefone
      str += " </td> ";
      str += " <td style='width:10%' class='border'> ";
      str += arrPaciente[i].Especialidades
      str += " </td> ";
      str += " <td style='width:10%' class='border'> ";
      str += arrPaciente[i].Data
      str += " </td> ";
      str += " <td style='width:10%' class='border'> ";
      str += arrPaciente[i].Hora
      str += " </td> ";
      str += " <td style='width:10%' class='border'> ";
      str += arrPaciente[i].Clinicas
      str += " </td> ";
      str += " </tr> ";
     
     
      str += " </table>";

      str += " </div>";
      str += " </div>";
      str += " </div>";
    


    }
    content.innerHTML = str;
}

const qtd = () =>{
    qtdH3.innerHTML = `<p>${arrPaciente.length}</p>`;
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
