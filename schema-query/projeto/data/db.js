const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'joao@email.com',
    idade: 29,
    perfil_id: 1,
    status: 'BLOQUEADO'
  }, {
    id: 2,
    nome: 'Carlos Henrique',
    email: 'carlos@email.com',
    idade: 24,
    perfil_id: 2,
    status: 'ATIVO'
  },{
    id: 3,
    nome: 'Joana Silva',
    email: 'joana@email.com',
    idade: 27,
    perfil_id: 1,
    status: 'INATIVO'
  }];
  
  const perfis = [{ 
    id: 1, 
    nome: 'Comum'
  }, { 
    id: 2, 
    nome: 'Administrador'
  }];

  module.exports = { usuarios, perfis }