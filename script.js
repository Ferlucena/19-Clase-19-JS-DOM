/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y genera manipulacionde del DOM
 * 
 * Desarrollaremos los siguientes temas:
 * Métodos tradicionales - modificación de elementos
 * Métodos tradicionales - modificación de elementos, utilizacion del bucle for
 * Métodos modernos - modificación de elementos con querySelector 
 * Creación de elementos - creamos un boton
 * Creación de elementos - creamos un texto
 * Creación de elementos - clonamos un texto
 * Modificamos atributos de un elemento - cambiamos contenido, agregamos clase, cambiamos un atributo
 * Reemplazamos contenido de un elemento
 * Insertamos una imagen
 * 
 */

//1- Modificacion de elementos
// Declaracion de variables
let titulo, contenidos;

// Modificacion del título
// Inicializacion de la variable capturando elemento del DOM
titulo = document.getElementById("titulo1");
// Modificamos el título
titulo.innerHTML = "Modificación de elementos del DOM con JS";
// Agregamos una clase "modificado" al titulo
titulo.className = "modificado";

//Modificiación del cuerpo de párrafos
// Inicializacion de la variable capturando elemento del DOM
contenidos = document.getElementsByClassName('contenido1'); //devuelve un array
// Modificación del elemento mediante innerHTML
contenidos[0].innerHTML = "Este es un contenido modificado por JS";
// Capturamos el primer elemento de la lista
let contenido0 = document.querySelector(".contenido1:first-child");
// Agregamos una clase "modificado" al elemento capturado
contenido0.className = "modificado";


//2- Utilización del bucle for
// Variables
let titulo2;

// Modificacion del título2
// Inicializacion de la variable capturando elemento del DOM
titulo2 = document.getElementById("titulo2");
// Modificamos el título
titulo2.innerHTML = "Listado de Frutas";
// Agregamos una clase "modificado" al titulo
titulo2.className = "modificado";

//Implementamos una funcion
function cambiarTexto() {

    let datos = document.getElementsByClassName("contenido2")

    for (let i=0; i< datos.length; i++) {
        //cambiamos cada elemento del array dato por el de frutas
      datos[i].innerHTML= frutas[i];
      //agregamos la caracteristica de modificado a la lista
      datos[i].classList.add("modificado");
    }
 }


//3- Creación de elementos
// Variable y captura del DOM en una sola linea
let titulo3 = document.getElementById("titulo3");;

// Modificacion del título3
titulo3.innerHTML = "Creación de elementos";
// Agregamos una clase "modificado" al titulo
titulo3.className = "modificado";

//Creación de un botón
const btn = document.createElement("button");
btn.innerHTML = "Soy un botón primario por JS";
btn.className = "boton boton-primario";
//Nos referenciamos al elemento tema3 y adjuntamos btn
document.getElementById("tema3").appendChild(btn);

//Agregamos un evento onclick al botón 
btn.onclick = function(){
  //Creamos el <h1>
  const p = document.createElement("p");
  //Creamos el texto
  const textNode = document.createTextNode(
    "¡Hola soy un texto generado por un boton JS!"
  );

  //Colocamos el texto como hijo del <p>
  p.appendChild(textNode);

  // Insertamos el texto antes del botón en el espacio del div con id tema3
  tema3.insertBefore(p, btn); // Inserta el elemento <p> antes del botón
}





