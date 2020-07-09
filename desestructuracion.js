// Suponiendo que tenemos este objeto

const deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder:'regeneración',
    // como estamos en node. La forma de declarar metodos en los objetos es asi.
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

// Y que ahora necesitamoa acceder a cada una de sus propiedades por separado
// Para eso tendriamos que hacer algo como lo siguiente
// const nombre = deadpool.nombre
// const apellido = deadpool.apellido
// const poder = deadpool.poder

// Sin embargo podemos hacer las 3 lineas de codigo en una sola usando la desestructuración
const {nombre, apellido, poder} = deadpool

// si queremos que la propiedad del objeto a la que estamos accediendo se llame de otra forma
// podemos hacer lo siguiente
// const {nombre: primerNombre, apellido, poder} = deadpool
// console.log(primerNombre,apellido,poder)

console.log(nombre,apellido,poder)