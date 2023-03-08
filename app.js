//Creamos los objetos pantalla y pincel
let lienzo = document.querySelector("#lienzo");
let pincel = lienzo.getContext("2d");

//Definimos el color y el tamaño del canvas
pincel.fillStyle = "lightgrey";//Deine el color del lienzo
pincel.fillRect(0, 0, lienzo.width, lienzo.height);//.fillRect() dibuja un rectángulo relleno.
pincel.strokeStyle = "darkgreen";//Define el color del contorno
pincel.strokeRect(0, 0, lienzo.width, lienzo.height);//.strokeRect() dibuja contorno del rectangulo.

//Cuadro 1
pincel.fillStyle = "red";
pincel.fillRect(25, 25, 350, 350)

//Cuadro 2
pincel.fillStyle = "blue";
pincel.fillRect(50, 50, 300, 300)

//Cuadro 3
pincel.fillStyle = "green";
pincel.fillRect(75, 75, 250, 250)

//Cuadro 4
pincel.fillStyle = "orange";
pincel.fillRect(100, 100, 200, 200)

//Cuadro 5
pincel.fillStyle = "magenta";
pincel.fillRect(125, 125, 150, 150)

//Cuadro 6
pincel.fillStyle = "cyan";
pincel.fillRect(150, 150, 100, 100)

//Cuadro 7
pincel.fillStyle = "yellow";
pincel.fillRect(175, 175, 50, 50)

//Cuadro 8
pincel.fillStyle = "black";
pincel.fillRect(188, 188, 25, 25)