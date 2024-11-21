const pessoa = {
    nome: "João",
    idade: 30,
    cumprimentar: function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  };
  
pessoa.cumprimentar();
  