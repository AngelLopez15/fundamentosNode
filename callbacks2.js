// Simulando una minibase de datos
// Arreglo de objetos
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

// Funcion para obtener un usuario por su id
const getEmpleado=(id,callback)=>{
    const empleadoDB = empleados.find(empleado => empleado.id === id)
    // Primero trabajar con el caso negativo
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID: ${id}`)
    } else {
        callback(null, empleadoDB)
    }
}

// Funcion para obtener el salario de un empleado
const getSalario = (empleado, callback) =>{
    
    const salarioDB=salarios.find(salario => salario.id===empleado.id)
    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`)
    } else {
        callback(null,{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id:empleado.id
        })
    }

}

getEmpleado(1, (error, empleado)=>{
    if (error) {
        return console.log(error)
    }
    getSalario(empleado,(error,resp)=>{
        if (error) {
            return console.log(error)
        } else {
            console.log(`El salario de ${resp.nombre} es de $ ${resp.salario}`)
        }
    })
})
