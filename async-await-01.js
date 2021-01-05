/**
 * Async Await
 * Async se utiliza para los dos tipos de funciones, para las normales y las de flecha
 */


let getNombre = () => {
    return new Promise((resolve, reject) => {
        resolve `Guillermo`;

    })
}

/**
 * La función anterior equivale a la siguiente función
 */

let getNombreAsy = async() => {
    return `Alberto`;
}

console.log(getNombre());
console.log(getNombreAsy());

/* ################################## Ejemplo 1 async ########################## */

let getUsuario = async() => {
    //Cualquier error que suceda aquí es cachado por el error
    //1.- throw new Error(`No existe un nombre para ese usuario`);
    //El siguiente return regresa una promesa
    return `bambu`;
}

getUsuario().then((valUsuario) => {
    console.log(valUsuario);
}).catch((e) => {
    console.log(`Error de Async`, e);
})

/* ################################## Ejemplo 2 async ########################## */

let getNombreUsuario = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve `Guillermo`;
        }, 3000)
    })
}

let saludoUsuario = async() => {

    //la palabra await hace que las funciones que regresan promesas tengan la sensación de que son trbajos sincronos es decir que se ejecutan sobre el mismo hilo.
    // Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.

    let nombreUsr = await getNombreUsuario();
    return `Hola ${nombreUsr}`;
}

getNombreUsuario().then((valUsuario) => {
    console.log(valUsuario);
}).catch((e) => {
    console.log(`Error de Async`, e);
})

saludoUsuario().then((mensaje) => {
    console.log(mensaje);
}).catch(e => {
    console.log(`Error de Async`, e);
})