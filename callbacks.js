// El callback mas conocido es el setTimeout
// setTimeout(()=>{
//     console.log('Hola, Mundo')
// },2000)

// creando nuestro propio callback
const getUserById= (id, callback) =>{
    const user={
        nombre:'Fernando',
        id
    }
    if (id===20) {
        callback(`El usuario con id ${id} no existe en la BD`)
    }else{
        // ponemos null por que ese es el espacio que ocupa el error
        callback(null,user)
    }
}

// cuando se ocuapa el callback el primer parametro que le pasamos debe ser el error
getUserById(20, (error,user) =>{
    if (error) {
        return console.log(error)
    } else {
        console.log('Usuario de la base de datos', user)
    }
})
