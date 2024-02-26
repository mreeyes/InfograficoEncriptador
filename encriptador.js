const EntradaDeTexto = document.querySelector("#EntradaTexto");
const SalidaDeTexto = document.querySelector("#SalidaTexto");
const imagenMostrada = document.querySelector("#imagenResultado"); // Mueve la selección de la imagen fuera del bucle
const TextoOculto = document.querySelector(".TextoNoEncontrado"); // Mueve la selección del texto fuera del bucle

let Lista_Encriptada = [
  ["e", "enter"], //indice 0 (posicion 0 y 1)
  ["i", "imes"], //indice 1 (posicion 0 y 1)
  ["a", "ai"], //indice 2 (posicion 0 y 1)
  ["o", "ober"], //indice 3 (posicion 0 y 1)
  ["u", "ufat"], //indice 4 (posicion 0 y 1)
];
//botones
function EncriptarTexto() {
  if (verificarTextoIngresado()) {
    return; // No hace nada más si no se ingresó texto
  } else {
    let textoDesencriptado = Encriptacion(EntradaDeTexto.value);
    SalidaDeTexto.value = textoDesencriptado;
  }
}

function DesencriptarTexto() {
  if (verificarTextoIngresado()) {
    return; // No hace nada más si no se ingresó texto
  } else {
    let textoEncriptado = Descriptacion(EntradaDeTexto.value);
    SalidaDeTexto.value = textoEncriptado;
  }
}

//funciones
function Encriptacion(textoDesencriptado) {
  for (let i = 0; i < Lista_Encriptada.length; i++) {
    if (textoDesencriptado.includes(Lista_Encriptada[i][0])) {
      //i es el campo de texto escrito por el usuario
      textoDesencriptado = textoDesencriptado.replaceAll(
        Lista_Encriptada[i][0],
        Lista_Encriptada[i][1]
      );
    }
  }
  return textoDesencriptado;
}

function Descriptacion(textoEncriptado) {
  for (let i = 0; i < Lista_Encriptada.length; i++) {
    if (textoEncriptado.includes(Lista_Encriptada[i][1])) {
      textoEncriptado = textoEncriptado.replaceAll(
        Lista_Encriptada[i][1],
        Lista_Encriptada[i][0]
      );
    }
  }
  return textoEncriptado;
}

function verificarTextoIngresado() {
  let textoIngresado = EntradaDeTexto.value;
  if (textoIngresado.trim() === "") {
    if (window.innerWidth > 384) {
      imagenMostrada.src = "imagenes/Muñeco.png"; // Coloca la ruta de tu imagen vacía
      imagenMostrada.style.display = "block"; // Asegúrate de mostrar la imagen si no hay texto
      TextoOculto.style.display = "block";
      limpiarTexto();
    } else if (window.innerWidth <= 384) {
      imagenMostrada.style.display = "none"; // Oculta la imagen si hay texto
      TextoOculto.style.display = "block";
    }
    return true; // Indica que no se ingresó texto
  } else {
    imagenMostrada.style.display = "none"; // Oculta la imagen si hay texto
    TextoOculto.style.display = "none";
    return false; // Indica que se ingresó texto
  }
}

function CopiarTexto() {
  var SalidaDeTexto = document.getElementById("SalidaTexto");
  navigator.clipboard
    .writeText(SalidaDeTexto.value)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      alert("No se copio correctamente el texto");
    });
}

function limpiarTexto() {
  document.querySelector("#EntradaTexto").value = "";
  document.querySelector("#SalidaTexto").value = "";
}
//al reiniciar la pagina se limpia el texto
limpiarTexto();
