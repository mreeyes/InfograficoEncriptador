let EntradaDeTexto = document.querySelector("#textoEncriptado");
let BotonEncriptar = document.querySelector("#textoDesencriptado");

let Lista_Encriptada = [
  ["e", "enter"], //indice 0 (posicion 0 y 1)
  ["i", "imes"], //indice 1 (posicion 0 y 1)
  ["a", "ai"], //indice 2 (posicion 0 y 1)
  ["o", "ober"], //indice 3 (posicion 0 y 1)
  ["u", "ufat"], //indice 4 (posicion 0 y 1)
];
function EncriptarTexto() {
  let texto = Encriptacion(EntradaDeTexto.value);
  textoDesencriptado.value = texto;
}

function Encriptacion(texto) {
  for (let i = 0; i < Lista_Encriptada.length; i++) {
    if (texto.includes(Lista_Encriptada[i][0])) {
      texto = texto.replaceAll(Lista_Encriptada[i][0], Lista_Encriptada[i][1]);
    }
  }
  return texto;
}
