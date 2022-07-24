let frase = prompt("Ingrese un texto")

function texto(cadena) {
    if(frase == cadena.toUpperCase()){
        document.write("La frase solo contiene mayúsculas")
    }else if(frase == cadena.toLowerCase()){
        document.write("La frase solo contiene minúsculas")
    }else{
        document.write("La frase contiene mayúsculas y minúsculas")
    }    
}
texto(frase)
