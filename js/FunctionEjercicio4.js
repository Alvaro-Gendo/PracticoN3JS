let numero = parseInt(prompt("Ingrese un número del 1 al 10"));

function tabla(numero){
    if (numero <= 10) {
        for (let i = 1; i < 11; i++) {
            document.write(`${i} x ${numero} = ${i * numero} <br>`);
        }
    }else if(numero <= 11){
        document.write("Ingresanste un número erroneo")
    }else{
        document.write("No ingresaste un número")
    }
}

tabla(numero)