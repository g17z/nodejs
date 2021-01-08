/**
 * Forma de ejecutar 
 * 1.-node .\ini.js --base=5
 * 2.-node app listar --help
 *  
 */

//Se realiza una destructuración
const { crearArchivo } = require('./create_file.js')
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).help()
    .argv; //Cuando no lleva pleka es un paquete de node

console.log(`argv:`, argv);
console.log(`Base: ${argv.base}`);
console.log(`limite: ${argv.limite}`);

/*let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(`Valor del parametro: ${parametro}`);
console.log(argv);
console.log(`Valor de la base: ${base}`);


crearArchivo(base).then(archivo => {
    console.log(`Archivo creado: ${archivo}`);
}).catch(err => { console.log(err); });
*/