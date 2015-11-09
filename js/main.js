/*
 * Colores con los que se mostrara el texto
 */
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Cesar"; // Texto a mostrar en el navegador
var letterColors = [red, orange, blue, green, purple]; // Array con todos los colores a usar en el texto

/*
 * Por default el texto es mostrado por medio de circulos, pero se pueden usar cuadados
 */

if(15 > 5) {
    bubbleShape = "circle";
}else {
    bubbleShape = "square";
}

drawName(myName, letterColors);// Escribimos el texto de los colores especificados
bounceBubbles(); // Funcion para hacer que los circulos se muevan