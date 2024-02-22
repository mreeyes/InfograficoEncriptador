let EntradaDeTexto = document.querySelector("#EntradaTexto");
let SalidaDeTexto = document.querySelector("#SalidaTexto");

let Lista_Encriptada = [
  ["e", "enter"], //indice 0 (posicion 0 y 1)
  ["i", "imes"], //indice 1 (posicion 0 y 1)
  ["a", "ai"], //indice 2 (posicion 0 y 1)
  ["o", "ober"], //indice 3 (posicion 0 y 1)
  ["u", "ufat"], //indice 4 (posicion 0 y 1)
];
//botones
function EncriptarTexto() {
  let textoDesencriptado = Encriptacion(EntradaDeTexto.value);
  SalidaDeTexto.value = textoDesencriptado;
}

function DesencriptarTexto() {
  let textoEncriptado = Descriptacion(EntradaDeTexto.value);
  SalidaDeTexto.value = textoEncriptado;
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
