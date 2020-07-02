const { perfis } = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real;
    },
    perfil(usuario) {
        const selecioado = perfis.filter(perfil => perfil.id === usuario.perfil_id);
        return selecioado ? selecioado[0] : null;
    }
}