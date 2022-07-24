let numero = Number(prompt("Ingresa un número"));

function parImpar() {
  if (numero % 2 == 0) {
    document.write("El número es par");
  } else{
    document.write("El número es impar");
  }
}
parImpar(numero);

