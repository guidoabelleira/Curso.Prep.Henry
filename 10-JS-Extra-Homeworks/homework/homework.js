// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  let arr = Object.entries(objeto);
  return arr;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let resultado = {
  }
  for ( i = 0; i < string.length; i++){
    let letra = string[i];
    if(resultado[letra]){
      resultado[letra] = resultado[letra] + 1; 
    } else{
      resultado[letra] = 1;
    }
  }   
return resultado;
} 


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  var expresion = /[A-Z]/;
  var mayus = [];
  var min = [];

  for (i = 0; i < s.length; i++){
    if(expresion.test(s.charAt(i))){
      mayus.push(s.charAt(i));
    } else{
      min.push(s.charAt(i));
    }
  }
  return mayus.join('')+min.join('');
  }


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let espacio = " ";
  let fraseDiv = str.split(espacio);
  
  var invertida = '';
    for(j = 0; j < fraseDiv.length; j++){
      
    for(i = fraseDiv[j].length - 1; i >= 0; i--){
      invertida = invertida + fraseDiv[j].charAt(i);
    }
    invertida = invertida + " ";
    }
    return invertida.slice(0, -1);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numStr = numero.toString();

  for (i = 0, j = numStr.length - 1; i <= j; i++, j--){
    if(numStr.charAt(i) != numStr.charAt(j)){
      return 'No es capicua';
    }
  }
  return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var cadenaModificada = cadena.replace(/a/g, '').replace(/b/g, '').replace(/c/g, '');
  return cadenaModificada;
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  let arrOrdenado = arr.sort(function(palabra1, palabra2){
    if ( palabra1.length < palabra2.length){
      return -1;
    } if (  palabra1.length > palabra2.length ){
      return +1;
    } else{
      return 0;
    }

  })

  return arrOrdenado;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let interseccion = [];
  for (i = 0; i < arreglo1.length; i++){
    for(j = 0; j < arreglo2.length; j++)
      if(arreglo1[i] === arreglo2[j]){
      interseccion.push(arreglo1[i]);
      } 
    }  

  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

