let ladoA = parseInt(prompt("Ingrese un número"))
let ladoL = parseInt(prompt("Ingrese otro número"))

function resultado(perimetro){
    perimetro = 2 * (ladoA + ladoL)
    document.write("El perímetro del rectángulo es: " + perimetro)
}

resultado()