const fs = require('fs');



let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${base} no es un número`)
            return;
        }

        let data = '';

        for (let i = 0; i < 10; i++) {

            data += `${base} * ${i} : ${i * base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                console.log(`El archivo tabla -${base}.txt ha sido creado`);
                resolve(`tabla - ${ base }.txt`);
            }
        });

    });
}

//aquí se agregan los objetos que se utilizan de forma global
module.exports = {
    crearArchivo: crearArchivo
}