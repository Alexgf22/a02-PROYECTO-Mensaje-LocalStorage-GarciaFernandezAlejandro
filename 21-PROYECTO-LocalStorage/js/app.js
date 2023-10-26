var arrayMensajes = []
var mensajesEnPantalla = document.querySelector("#lista-mensajes")
const boton = document.querySelector(".button")

// Al cargar la página, intenta recuperar los mensajes del localStorage
document.addEventListener("DOMContentLoaded", function() {
  var mensajesGuardados = localStorage.getItem("Mensajes")
  if (mensajesGuardados) {
    arrayMensajes = JSON.parse(mensajesGuardados)

    // Vuelve a crear los elementos en el DOM
    for (var i = 0; i < arrayMensajes.length; i++) {
      var mensajeAnadir = `
        <li data-indice="${i}">${arrayMensajes[i]}<a class="borrar-mensaje" href="#">X</a></li>
      `
      var ul = document.createElement("ul")
      ul.innerHTML = mensajeAnadir
      mensajesEnPantalla.appendChild(ul)
    }
  }
})

// Listener para el botón de añadir
boton.addEventListener("click", () => {
  anadirHTML()
})

// Listener para remover mensajes
mensajesEnPantalla.addEventListener("click", (e) => {
  if (e.target.className == "borrar-mensaje") {
    var indiceLi = parseInt(e.target.parentElement.dataset.indice)
    // Eliminamos el mensaje del array
    arrayMensajes.splice(indiceLi, 1)
    // Actualizamos el localStorage tras haber eliminado el mensaje
    localStorage.setItem("Mensajes", JSON.stringify(arrayMensajes))
    console.log(localStorage)
    // Eliminamos el 'li' del mensaje correspondiente
    e.target.parentElement.remove()
  }
})

// Función para añadir mensajes
function anadirHTML() {
  var mensaje = document.querySelector("#mensaje").value.trim();
  if (mensaje !== "") {
    arrayMensajes.push(mensaje);
    var mensajeAnadir = `
    <li data-indice="${arrayMensajes.length - 1}">${mensaje}<a class="borrar-mensaje" href="#">X</a></li>
    `

    var ul = document.createElement("ul")
    ul.innerHTML = mensajeAnadir

    mensajesEnPantalla.appendChild(ul)

    // Se actualiza el localStorage tras añadir el nuevo mensaje
    localStorage.setItem("Mensajes", JSON.stringify(arrayMensajes))
    console.log(localStorage)

    //console.log(arrayMensajes)

    document.querySelector("#mensaje").value = ""
  } else {
    alert("Por favor, debes agregar un mensaje antes de añadirlo.");
  }
  
}
