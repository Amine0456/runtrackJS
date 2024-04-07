document.getElementById("monFormulaire").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    
    if (email !== '' && password !== '') {
      window.location.href = "page_admin.html";
    } else {
      alert("Veuillez remplir tous les champs du formulaire.");
    }
  });
  