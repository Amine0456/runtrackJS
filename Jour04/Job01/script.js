document.getElementById("button").addEventListener("click", function() {
    fetch("expression.txt")
      .then(response => response.text())
      .then(data => {
        document.getElementById("result").innerHTML = "<p>" + data + "</p>";
      })
      .catch(error => {
        console.error("Erreur:", error);
      });
  });
  
  