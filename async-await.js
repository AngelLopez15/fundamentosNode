// Cuando se usa la palabra async con solo poner esa palabra
// es equivalente a poner toda la sintaxis de una promesa

/*Ejemplo:
Un async es equivalente a = let getNombre()=>{
                                return new Promise((resolve, reject)=>{
                                    resolve('Angel')
                                })
                            } 

*/

// REsolviendo el ejercicio de los empleados con async  y await

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

const getEmpleado=async(id)=>{
    
    const empleadoDB = empleados.find(empleado => empleado.id === id)
    
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID: ${id}`)
    } else {
        return(empleadoDB)
    }
    
}

const getSalario = async(empleado) =>{
    const salarioDB=salarios.find(salario => salario.id===empleado.id)

    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el usuario ${empleado.nombre}`)
    } else {   
        return{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id:empleado.id
        }
    }
}

const getInformacion = async (id) => {
    const empleado = await getEmpleado(id)
    const resp = await getSalario(empleado)
    return `${resp.nombre} tiene un salario de $ ${resp.salario}`
}

getInformacion(1)
    .then(mensaje=>console.log(mensaje))
    // para manejar el error
    .catch(error=>console.log(error))