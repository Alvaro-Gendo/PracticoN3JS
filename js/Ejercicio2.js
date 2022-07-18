let ciudades = [];

do{
    let nombreCiudades = prompt("Escribe el nombre de una ciudad")
    for(let indice = 0; indice < nombreCiudades; indice++)
    document.write(ciudades[indice])

}while(confirm("Continue?"))


