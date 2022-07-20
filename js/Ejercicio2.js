let ciudades = [];


while(listaCiudades = prompt("Introduce le nombre de una ciudad")){
    ciudades.push(listaCiudades)
}
ciudades.push("Paris")



ciudades.splice(1, 1, "Barcelona")

document.write(`<ol>`)
for (let i = 0; i < ciudades.length; i++){
    document.write(`<li>${ciudades[i]}</li>`)
}
document.write(`</ol>`)

document.write("Cantidad de ciudades ingresadas :" + ciudades.length)


document.write("<br>La ciudad en primera posición es :" + ciudades[0])
document.write("<br>La ciudad en segunda posición es :" + ciudades[1])
document.write("<br>La ciudad en tercera posición es :" + ciudades[2])
document.write("<br>La ciudad en tercera posición es : Paris")