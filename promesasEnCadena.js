const empleados = [{
    id:1,
    nombre:'Angel'
    },{
    id:2,
    nombre:'Octavio'
    },{
    id:3,
    nombre:'López'
}]

const salarios=[{
    id:1,
    salario:1000
},{
    id:2,
    salario:2000
}]

const getEmpleado=(id)=>{
    //la promesa es un funcion que recibe como parametro dos callbacks
    return new Promise((resolve, reject)=>{
        const empleadoDB = empleados.find(empleado => empleado.id === id)
        // Primero trabajar con el caso negativo
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID: ${id}`)
        } else {
            // las promesas solo pueden devolver un parametro. Si necesitamos recibir mas
            // entonces debemos enviar un objeto
            resolve(empleadoDB)
        }
    }) 
}

const getSalario = (empleado) =>{
    return new Promise((resolve, reject)=>{
        const salarioDB=salarios.find(salario => salario.id===empleado.id)
        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id:empleado.id
            })
        }
    })
}

getEmpleado(1).then(empleado=>{
    return getSalario(empleado)
})
// este then es del return de arriba
.then(resp=>{
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
})
.catch(error=>{
    console.log(error)
})