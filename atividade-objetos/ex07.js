const carrinho = {
    itens: [
      { nome: "Camisa", preco: 50 },
      { nome: "Calça", preco: 100 }
    ],
    calcularTotal: function() {
      return this.itens.reduce((total, item) => total + item.preco, 0);
    }
  };
  
  console.log(carrinho.calcularTotal()); 
  