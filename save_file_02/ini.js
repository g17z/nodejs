//Se realiza una destructuración
const { crearArchivo } = require('./create_file.js')
let base = '7';

//module es un objeto, que esta disponible a lo largo de toda la aplicación. Module tiene la propiedad export donde se colocan todos los objetos que se utilizan en la aplicación de forma global
//console.log(module);

crearArchivo(base).then(archivo => {
    console.log(`Archivo creado: ${archivo}`);
}).catch(err => { console.log(err); });