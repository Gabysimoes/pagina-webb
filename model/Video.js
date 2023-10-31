class Video {

    constructor(nomepaciente, email, telefone, especialidades, data, hora, clinicas) {

        this._nomepaciente = nomepaciente;      
        this._email = email; 
        this._telefone = telefone; 
        this._especialidades = especialidades;  
        this._data = data; 
        this._hora = hora;  
        this._clinicas = clinicas;   
    }

    get Nomepaciente(){
        return this._nomepaciente; 
    }
  
    get Email(){
        return this._email; 
    }
   
    get Telefone(){
        return this._telefone;
    }
    
    get Especialidades(){
        return this._especialidades;
    }

    get Data(){
        return this._data;
    }
   
    get Hora(){
        return this._hora;
    }

    get Clinicas(){
        return this._clinicas;
    }
     
    //------------------------
    set Nomepaciente(value){
        this._nomepaciente = value; 
    }
  
    set Email(value){
         this._email = value; 
    }
   
    set Telefone(value){
        this._telefone = value;
    }
    
    set Especialidades(value){
        this._especialidades = value;
    }

    set Data(value){
        this._data = value;
    }

    set Hora(value){
        this._hora = value;
    }

    set Clinicas(value){
        this._clinicas = value;
    }


}