document.forms["connexion"].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this;
 
	// Traitement générique
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
			break;
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Connexion Validée !');
	}
	
});
document.getElementById("connexion").addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this.getElementsByTagName("input");
 
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
		}
	}
 
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		alert('Connexion Validée !');
	}
 
 
  var email = document.getElementById("email");
	var mdp = document.getElementById("mdp");
 
	if (!mdp.value) {
		erreur = "Veuillez renseigner un mot de passe";
	}
	if (!email.value) {
		erreur = "Veuillez renseigner un email";
	}
	
});