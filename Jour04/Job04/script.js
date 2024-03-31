document.getElementById("updateBtn").addEventListener("click", function() {
    mettreAJourUtilisateurs();
  });
  
  function mettreAJourUtilisateurs() {
    fetch('utilisateur.json')
      .then(response => response.json())
      .then(data => {
        afficherUtilisateurs(data);
      })
      .catch(error => console.error('Erreur lors du chargement des utilisateurs :', error));
  }
  
  function afficherUtilisateurs(utilisateurs) {
    const tableBody = document.getElementById("userTableBody");
    tableBody.innerHTML = "";
  
    utilisateurs.forEach(utilisateur => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${utilisateur.id}</td>
        <td>${utilisateur.nom}</td>
        <td>${utilisateur.prenom}</td>
        <td>${utilisateur.email}</td>
      `;
      tableBody.appendChild(tr);
    });
  }
  

  mettreAJourUtilisateurs();
  