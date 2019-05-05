//Obtuve las noticias con la función dada.
//Resalté la noticia que contiene la palabra "Argentina" con bucle for, if y las funciones dadas.
//Pasé por parámetro la palabra "Argentina" en mayúsculas para que pueda ser reconocida.
var noticias = obtenerNoticias();
  var noticiaAhora;
    var i = 0;

for (var i = 0; i < noticias.length ; i++) {
  noticiaAhora = noticias [i];
    if(contienePalabra(noticiaAhora, "ARGENTINA")) {
      cambiarColor (noticiaAhora, 'rgb(228, 131, 140)');
   }
 }
//Oculté la noticia relacionada con "Google" usando bucle for, if y las funciones dadas.
for (var i = 0; i < noticias.length ; i++) {
  noticiaAhora = noticias [i];
    if (contienePalabra(noticiaAhora, "Google")) {
      ocultarNoticia (noticiaAhora, "Google");
  }
}
//Resalté con color las noticias relacionadas con robótica.
//Creé otra función "contienePalabras" para poder pasar por parametro más de una palabra y simplificar el código.
for(var i = 0; i < noticias.length ; i++) {
  noticiaAhora = noticias [i];
    if (contienePalabras(noticiaAhora, "robots", "robot")) {
      cambiarColor (noticiaAhora, 'rgb(129, 237, 224)');
  }
}
//Recorrí todas las noticias con bucle for y acorté la cantidad de palabras a 20.
for (var i = 0; i < noticias.length; i++) {
  noticiaAhora = noticias[i];
    recortarTexto (noticiaAhora, 20);
}
