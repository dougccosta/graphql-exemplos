const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Bom dia!';
    },
    horaAtual() {
    return new Date();
    },
    usuarioLogado() {
    return {
        id: 1,
        nome: 'Ana da web',
        email: 'ana@email.com',
        idade: 23,
        salario_real: 1234.63,
        vip: true
    }
    },    
    produtoEmDestaque() {
    return {
        nome: 'Mouse',
        preco: 230.00,
        desconto: 0.5
    }
    },
    numerosMegaSena() {
    // return [4, 8, 16, 45, 89, 60]
    const crescente = (a, b) => a - b;
    return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crescente);
    },
    usuarios() {
    return usuarios;
    },
    usuario(_, { id }) {
    const selecionados = usuarios.filter(usuario => usuario.id === id);

    return selecionados ? selecionados[0] : null;
    },
    perfis() {
    return perfis;
    },
    perfil(_, { id }) {
    const selecioado = perfis.filter(perfil => perfil.id === id);

    return selecioado ? selecioado[0] : null;
    }    
}