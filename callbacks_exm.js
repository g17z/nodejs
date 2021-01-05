/*Un Callback sólo es una función que se ejecuta cuando algo sucede o despues de algo*/

//Función que se va a disparar cuando pasen 3 segundos
setTimeout(function() {
    console.log(`Hola Mundo`);
}, 3000)

//Función de flecha que se va a disparar cuando pasen 3 segundo
setTimeout(() => {
    console.log(`hola mundo`);
}, 3000)


//Declaración de función con flecha
let getUsuarioById = (id, callbackFuntion) => {

    let usuario = {
        nombre: 'Guillermo',
        id
    }
    if (id === 20) {
        callbackFuntion(`El usuario con id ${id} no existe en la base de datos`)
    } else {
        //el null se coloca para el manejo de errores que se utiliza cuando se invoca la funcion (err)
        callbackFuntion(null, usuario)
    }
}

//Es muy común que el primer parámetro de un callback sea un error
getUsuarioById(2, (err, usuarioRegresaCallback) => {
    if (err) {
        return console.log(err);
    } else {
        console.log(`Usuario callback: `, usuarioRegresaCallback);
    }

})

/**************************  SIMULACIÓN DE BASES DE DATOS ************************************/

let empleados = [{
    id: 1,
    nombre: 'Guillermo'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleadoList = (id, callback) => {

    let empleadoDB = empleados.find((empleado) => {
        return empleado.id === id
    });

    if (!empleadoDB) {
        callback(`NO existe un empleado con el ID ${id}`);
    } else {
        //       console.log(`Empledo de base de datos: `, empleadoDB);
        callback(null, empleadoDB);
    }

}

let getSalarioList = (empleado, callback) => {

    let salarioDB = salarios.find((salario) => {
        return salario.id === empleado.id
    });

    if (!salarioDB) {
        callback(`No existe un salario para el usuario ${empleado.id}`);
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id });
    }
}

getEmpleadoList(2, (err, callback) => {

    if (err) {
        console.log(err);
    } else {
        console.log(callback);
    }
});

getEmpleadoList(10, (err, empleado) => {

    if (err) {
        console.log(err);
    } else {
        getSalarioList(empleado, (err, resp) => {

            if (err) {
                return console.log(err);
            } else {
                console.log(`El salario de ${resp.nombre} es de  ${resp.salario}`);
            }

        })
    }
});