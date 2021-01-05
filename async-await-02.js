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


let getEmpleado = async(id) => {

        let empleadoDB = empleados.find((empleado) => empleado.id === id)

        if (!empleadoDB) {
            throw new Error(`No existe un empleado con el ID ${id}`);
        } else {
            return empleadoDB;
        }

    }
    /*
    let getSalarioEmp = (empleado) => {
        let salario = salarios.find((objSal) => objSal.id === empleado.id)

        return new Promise((resolve, reject) => {

            if (!salario) {
                reject(`No se encontró un salario para el usuario: ${empleado.nombre}`)
            } else {
                resolve({ nombre: empleado.nombre, salario: salario.salario, id: empleado.id });
            }
        });
    }*/


let getSalarioEmp = async(empleado) => {

    let salario = salarios.find((objSal) => objSal.id === empleado.id)

    if (!salario) {
        throw new Error(`No se encontró un salario para el usuario: ${empleado.nombre}`);
    } else {
        return { nombre: empleado.nombre, salario: salario.salario, id: empleado.id }
    }

}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalarioEmp(empleado)

    /*console.log(`Información del empleado: `, empleado);
    console.log(`Salario: `, resp);*/
    return `${resp.nombre} tiene un salario de ${resp.salario}`;
}

getInformacion(1).then((informacion => { console.log(informacion); })).catch((e) => { console.log(e); });