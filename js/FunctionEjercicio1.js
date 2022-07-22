let numero = Number(prompt("Ingresa un número"));

function parImpar() {
  if (numero % 2 == 0) {
    document.write("El número es par ");
  } else if (numero % 3 == 0) {
    document.write("El número es impar ");
  } else {
    document.write("No ingresaste un número ");
  }
}
parImpar(numero);

