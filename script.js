"use strict";
//identificamos boton para "sumar" y "restar" (para el juego de colores no hacen falta)
const botonVida = document.getElementById("sumar");
const botonMuerte = document.getElementById("restar");

//Identificamos los pictures para luego aplicarles eso de poner img dentro (saber en qué huevo van):
const intento1 = document.getElementById("intento1");
const intento2 = document.getElementById("intento2");
const intento3 = document.getElementById("intento3");
const intento4 = document.getElementById("intento4");
const intento5 = document.getElementById("intento5");

//Cada vez que clicamos botonVida, aparece un corazon
botonVida.addEventListener("click", (evento) => {
  //dentro del picture creamos una etiqueta img con la imagen que corresponda
  intento1.innerHTML = `<img src="/iconos/vida.svg"/>`;
  intento2.innerHTML = `<img src="/iconos/vida.svg"/>`;
  intento3.innerHTML = `<img src="/iconos/vida.svg"/>`;
  intento4.innerHTML = `<img src="/iconos/vida.svg"/>`;
  intento5.innerHTML = `<img src="/iconos/vida.svg"/>`;
});
//Cada vez que clicamos botonVida, aparece una calavera
botonMuerte.addEventListener("click", (evento) => {
  //dentro del picture creamos una etiqueta img con la imagen que corresponda
  intento1.innerHTML = `<img src="/iconos/muerte.svg"/>`;
  intento2.innerHTML = `<img src="/iconos/muerte.svg"/>`;
  intento3.innerHTML = `<img src="/iconos/muerte.svg"/>`;
  intento4.innerHTML = `<img src="/iconos/muerte.svg"/>`;
  intento5.innerHTML = `<img src="/iconos/muerte.svg"/>`;
});

/* FALTA que vaya por condicionales: si acierta imprime corazón y si falla LA MUERTE :D Luego lo del evento de click eso no hará falta para el juego de colorinchis*/
