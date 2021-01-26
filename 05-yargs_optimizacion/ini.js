/**
 * Forma de ejecutar 
 * 1.-node ini.js --base=5
 * 2.-node app listar --help
 * 3.-node ini.js crear --base 10
 * 4.-node ini.js listar --limite 30 -b 3
 * 5.-node .\ini.js crear --limite 5 -b 3
 */

//Se realiza una destructuración
const { crearArchivo, listarTabla } = require('./create_file.js')
const argv = require('./config/yargs').argv;

console.log(`argv:`, argv);
console.log(`Base: ${argv.base}`);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('Listar');

        listarTabla(argv.base, argv.limite)

        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${archivo}`);
        }).catch(err => { console.log(err); });

        break;
    default:
        console.log('Comando no reconocido');
}