const estoque = [
    { id: 1, nome: "Caneta", quantidade: 10 },
    { id: 2, nome: "Caderno", quantidade: 15 }
  ];
  
  function atualizarQuantidade(id, novaQuantidade) {
    const produto = estoque.find(item => item.id === id);
    if (produto) {
      produto.quantidade = novaQuantidade;
    }
  }
  
  console.log("Estoque antes:", JSON.stringify(estoque));
  atualizarQuantidade(2, 30);
  console.log("Estoque depois:", JSON.stringify(estoque));