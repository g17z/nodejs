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




let getEmpleadoObj = (id) => {

    //Las promesas tienen 2 callback uno llamado "resolve" y otro "reject"
    //en la siguiente linea se encuentran 3 callbacks (return, resolve y reject)
    return new Promise((resolve, reject) => {

        //1.- El callback resolve se va a llamar si la promesa es exitosa, es decir si existe un empleado en la base de datos
        //2.- El callback reject se va a llamar si la promesa NO es exitosa, es decir si existe un empleado en la base de datos
        //3.- IMPORTANTE: En el result no se pueden enviar 2 parámetros, siempre se debe envíar solo 1 (puede ser un objeto {....}).

        let empleadoDB = empleados.find((empleado) => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB); // El null se coloca por que no existe algún error
        }
    });
}

let getSalarioObj = (empleado) => {
    let salario = salarios.find((objSal) => objSal.id === empleado.id)

    //return new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {

        if (!salario) {
            reject(`No se encontró un salario para el usuario: ${empleado.nombre}`)
        } else {
            resolve({ nombre: empleado.nombre, salario: salario.salario, id: empleado.id });
        }
    });
}

getEmpleadoObj(20).then((empleadoDB) => {
    //cada que se realiza el return de una promesa se puede manejar el then fuera del bloque de código
    return getSalarioObj(empleadoDB);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch((err => {
    //Cuando alguna de las dos promesas anteriores falle (getEmpleadoObj o getSalarioObj), entonces se manejará el erro
    console.log(err);
}))