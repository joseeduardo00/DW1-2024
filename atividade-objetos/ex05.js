const produto = {
    nome: "Camiseta",
    preco: 50,
    categoria: "Roupas"
  };
  
  for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
  }
