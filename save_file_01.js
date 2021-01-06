//Existen 3 tios de required

//1.- Ya existe en nodejs
const fs = require('fs');
//2.- No existe en la documentación de node, es un paquete que se instala, es decir otrs personas hicieron por nosotros
//const fs = require('express');
//3.- archivos que nosotros creamos en nuesto proyecto punto pleca (./) o punto punto pleca (../)
//const fs = require('./fs');

let base = 2;
let dataTabla = '';

for (let i = 0; i < 10; i++) {

    dataTabla += `${base} * ${i} : ${i * base} \n`;
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
//const data = new Uint8Array(Buffer.from('Hello Node.js'));

fs.writeFile(`tablas/tabla-${base}.txt`, dataTabla, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});