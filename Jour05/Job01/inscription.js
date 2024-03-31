document.getElementById("email2").addEventListener("input", function() {
	var paragrapheErreur = document.getElementById("erreur");
 
	if (this.value != document.getElementById("email").value) {
		paragrapheErreur.innerHTML = "Les deux adresses email ne correspondent pas";
	} else {
		paragrapheErreur.innerHTML = "";
	}
});​
document.forms["inscription"].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this;

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
		alert('Formulaire envoyé !');
	}
	
});
document.getElementById("inscription").addEventListener("submit", function(e) {
 
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
		alert('Formulaire envoyé !');
	}
 
 
	var nom = document.getElementById("nom");
    var prénom = document.getElementById("prénom");
	var email = document.getElementById("email");
	var email2 = document.getElementById("email2");
	var mdp = document.getElementById("mdp");
    var adresse = document.getElementById("adresse");
    var code = document.getElementById("code");
 
	if (!mdp.value) {
		erreur = "Veuillez renseigner un mot de passe";
	}
	if (!email.value) {
		erreur = "Veuillez renseigner un email";
	}
	if (!nom.value) {
		erreur = "Veuillez renseigner un Nom";
	}
	
 
	
});