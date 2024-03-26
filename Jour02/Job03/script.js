var button = document.getElementById("button");
var compteur = document.getElementById("compteur");
var nombreClics = 0;

function addOne() {
  nombreClics++;
  compteur.textContent = nombreClics;
}

button.addEventListener("click", addOne);

  
  
