// Teoría localStorage clase

const nombre = localStorage.getItem("nombre")
console.log(nombre)

const productoJSON = localStorage.getItem("listaCompra")
console.log(JSON.parse(productoJSON))


console.log(JSON.parse(localStorage.getItem("meses")))
