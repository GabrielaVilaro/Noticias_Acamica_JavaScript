function obtenerNoticias() {
  return document.querySelectorAll('.highlighted');

}

function ocultarNoticia(noticia) {
  noticia.style.display = 'none';
}

function mostrarNoticia(noticia) {
  noticia.style.display = 'block';
}

function contienePalabra(noticia, palabra) {
  texto = noticia.innerText;
    if (texto.indexOf(palabra) >= 0) {
    return true;
  }
}

//Función creada para poder añadir más de una palabra como parámetro.
function contienePalabras(noticia, palabra, palabra) {
  texto = noticia.innerText;
  if (texto.indexOf(palabra) >= 0) {
    return true;
  }
}

function recortarTexto(noticia, cantidadPalabras) {
  noticia.querySelector('p').innerText = noticia.querySelector('p').innerText.split(' ').slice(0, cantidadPalabras).join(' ');
}


function cambiarColor(elemento, color) {
  elemento.style.backgroundColor = color;
}
