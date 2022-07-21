let sumas = [];
let pruebaDado1 = [];
let pruebaDado2 = [];

for(let i=0; i < 10; i++){
  let dado1 = Math.floor(Math.random()* (6 - 1 +1)+ 1);
  let dado2 = Math.floor(Math.random()* (6 - 1 +1)+ 1);
  let suma = dado1 + dado2;
  sumas.push(suma)
  pruebaDado1.push(dado1)
  pruebaDado2.push(dado2)
}

document.write( "Dado 1 : " +pruebaDado1);
document.write( "<br> Dado 2 : " +pruebaDado2);
document.write( "<br> Ambas sumas :" +sumas);

let frecuencia = [];

document.write(`<table><tbody><tr><td>Resultado</td><td>Frecuencia</td</tr>`)
for(let resultado =2; resultado <=12; resultado++){
  for(let posicion=0; posicion < sumas.length; posicion++){
    if(resultado == sumas[posicion]){
       frecuencia 
    }
  }
  document.write(`<tr><td>${resultado}</td><td>${frecuencia}</td></tr>`)
}
document.write(`</tbody></table>`)