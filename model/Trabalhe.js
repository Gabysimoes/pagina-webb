class Trabalhe {

    constructor(nome, email, telefone, mensagem, uf, cidade, unidade, curriculo) {

        this._nome = nome;      
        this._email = email; 
        this._telefone = telefone; 
        this._mensagem = mensagem; 
        this._uf = uf; 
        this._cidade = cidade; 
        this._unidade = unidade; 
        this._curriculo = curriculo; 
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

    get Uf(){
        return this._uf;
    }

    get Cidade(){
        return this._cidade;
    }
   
    get Unidade(){
        return this._unidade;
    }

    get Curriculo(){
        return this._curriculo;
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

    set Uf(value){
         this._uf = value;
    }

    set Cidade(value){
         this._cidade = value;
    }
   
    set Unidade(value){
         this._unidade = value;
    }

    set Curriculo(value){
         this._curriculo = value;
    }


}