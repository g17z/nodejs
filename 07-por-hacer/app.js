/**
 * Ejeción:
 * node app crear -d "Pasear al perro" -c true/false
 * node app listar
 * node app actualizar -d "Pasear al perro" -c true
 * node app.js borrar -d Desayunar
 */

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')
console.log(`Valores de argv: `, argv);

//argv._[0] -> Es el comando de entrada desde la consola  (node app.js listar)
let comando = argv._[0];

switch (comando) {

    case 'crear':

        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('============================================================');
            console.log('=============== Tarea por hacer'.rainbow);
            console.log(`=============== ${tarea.descripcion}`);
            console.log(`=============== Estado: ${tarea.completado}`);
            console.log('==============='.green);
            console.log('============================================================');
        }

        break;
    case 'actualizar':
        console.log('Actualiza una tarea ' + argv.descripcion);
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}