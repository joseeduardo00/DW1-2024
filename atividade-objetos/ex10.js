const usuarios = [
    { nome: "João", idade: 25, email: "joao@email.com" },
    { nome: "Maria", idade: 30, email: "maria@email.com" },
    { nome: "Carlos", idade: 35, email: "carlos@email.com" }
  ];
  
  const usuariosSelecionados = usuarios.map(usuario => {
    return { nome: usuario.nome, email: usuario.email };
  });
  
console.log(usuariosSelecionados);
