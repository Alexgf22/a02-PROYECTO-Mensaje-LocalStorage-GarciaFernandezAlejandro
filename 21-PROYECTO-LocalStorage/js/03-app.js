// Teoría localStorage clase

localStorage.removeItem("nombre")

// en session storage seria sessionStorage.removeItem("nombre2")

const mesesParse = JSON.parse(localStorage.getItem("meses"))

console.log(mesesParse)

mesesParse.push("Abril")

// Añado un mes más y paso de nuevo el array a string y lo subo
localStorage.setItem("meses",JSON.stringify(mesesParse))