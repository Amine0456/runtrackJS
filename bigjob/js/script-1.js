document.getElementById("monFormulaire").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nom = document.getElementById("exampleInputName").value;
    var prenom = document.getElementById("exampleInputName").value;
    var email = document.getElementById("validationCustomUsername").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var robot = document.getElementById("exampleCheck1").checked;
    
    if (nom !== '' && prenom !== '' && email !== '' && password !== '' && robot) {
      window.location.href = "page_calendrier.html";
    } else {
      alert("Veuillez remplir tous les champs du formulaire.");
    }
  });
  