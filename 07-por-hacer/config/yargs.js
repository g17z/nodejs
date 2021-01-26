const opts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    }
}

const optAct = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const optBorrar = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Borra una tarea de la lista de tareas'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado copletado de una tarea', optAct)
    .command('borrar', 'Borra una tarea de la lista de tareas', optBorrar)
    .help()
    .argv;

module.exports = {
    argv
}