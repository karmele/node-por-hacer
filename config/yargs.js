const descripcion = {
        demand: true,
        alias: 'd'
}

const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}