let contador = 0;

function sumar() {
  contador = contador + 1;
  document.getElementById("valor").innerHTML = contador;
}

function restar() {
  contador = contador - 1;
  document.getElementById("valor").innerHTML = contador;
}

function reset() {
  contador = 0;
  document.getElementById("valor").innerHTML = contador;
}
