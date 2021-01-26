const opts = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con las salida de las tablas de multiplicar', opts)
    .help()
    .argv; //Cuando no lleva pleka es un paquete de node


module.exports = {
    argv
}