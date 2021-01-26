const fs = require('fs');
const { traceDeprecation } = require('process');
let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const guardarDb = () => {
    //Para pasarlo a un formato Json se utiliza la función JSON.stringify(), el cual convierte un objeto (en formato json) a un JSON totalmente valido
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }

    console.log(listadoPorHacer);
}

let getListado = () => {

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    //console.log(descripcion);
    let index = listadoPorHacer.findIndex(tarea => {

        //console.log(tarea.descripcion);
        return tarea.descripcion == descripcion
    })
    console.log(`Valor del index: ${index}`);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false
    }

}

let borrar = (descripcion) => {

    cargarDB();
    let elementoBorrado = false;

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion == descripcion
    })

    if (index > -1) {
        listadoPorHacer.splice(index, 1);
        elementoBorrado = true;
        guardarDb();
    }
    return elementoBorrado;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}