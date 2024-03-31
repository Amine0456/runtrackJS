document.getElementById("filtrerBtn").addEventListener("click", function() {
    filtrerPokemon();
  });
  
  function filtrerPokemon() {
    const id = document.getElementById("id").value;
    const nom = document.getElementById("nom").value;
    const type = document.getElementById("type").value;
  
    fetch('pokemon.json')
      .then(response => response.json())
      .then(data => {
        const resultats = data.filter(pokemon => {
          if (type === 'tous') {
            return pokemon.id.includes(id) && pokemon.name.includes(nom);
          } else {
            return pokemon.id.includes(id) && pokemon.name.includes(nom) && pokemon.type.includes(type);
          }
        });
  
        afficherResultats(resultats);
      })
      .catch(error => console.error('Erreur lors du chargement des données :', error));
  }
  
  function afficherResultats(resultats) {
    const resultList = document.getElementById("resultats");
    resultList.innerHTML = "";
  
    if (resultats.length === 0) {
      resultList.innerHTML = "<p>Aucun Pokémon trouvé.</p>";
    } else {
      const ul = document.createElement("ul");
      resultats.forEach(pokemon => {
        const li = document.createElement("li");
        li.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name}, Type: ${pokemon.type}`;
        ul.appendChild(li);
      });
      resultList.appendChild(ul);
    }
  }
  