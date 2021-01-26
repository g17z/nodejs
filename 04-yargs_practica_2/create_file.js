const fs = require('fs');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${base} no es un número`)
            return;
        }

        let data = '';

        for (let i = 0; i < limite; i++) {

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


let listarTabla = (base, limite = 10) => {

    for (let a = 0; a < limite; a++) {
        console.log(` ${base} * ${limite} :  ${base * limite} `);
    }
}


//aquí se agregan los objetos que se utilizan de forma global
module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}