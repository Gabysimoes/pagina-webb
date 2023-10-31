class Sac {

    constructor(nome, email, telefone, mensagem) {

        this._nome = nome;      
        this._email = email; 
        this._telefone = telefone; 
        this._mensagem = mensagem;  
      
    }

    get Nome(){
        return this._nome; 
    }
  
    get Email(){
        return this._email; 
    }
   
    get Telefone(){
        return this._telefone;
    }
    
    get Mensagem(){
        return this._mensagem;
    }

   
     
    //------------------------
    set Nome(value){
        this._nome = value; 
    }
  
    set Email(value){
         this._email = value; 
    }
   
    set Telefone(value){
        this._telefone = value;
    }
    
    set Mensagem(value){
        this._mensagem = value;
    }

}