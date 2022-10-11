let contador = 0;

function sumar() {
  contador = contador + 1;
  if (contador > 0) {
    document.getElementById("valor").style.color = "green";
  } else if (contador == 0) {
    document.getElementById("valor").style.color = "black";
  }
  document.getElementById("valor").innerHTML = contador;
}

function restar() {
  contador = contador - 1;
  if (contador < 0) {
    document.getElementById("valor").style.color = "red";
  } else if (contador == 0) {
    document.getElementById("valor").style.color = "black";
  }
  document.getElementById("valor").innerHTML = contador;
}

function reset() {
  contador = 0;
  document.getElementById("valor").style.color = "black";
  document.getElementById("valor").innerHTML = contador;
}
