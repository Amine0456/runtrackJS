function rebooterLeMonde() {
    var citations = [
        "La lumière qui brille deux fois plus vite brûle deux fois moins longtemps. Tu as brûlé tellement vite, Roy.",
        "Toutes ces choses seront perdues dans le temps, comme les larmes dans la pluie.",
        "Ce n'est que dans l'obscurité que nous pouvons voir les étoiles.",
        "Je pense, Sebastian, donc je suis.",
        "J'ai vu des choses que vous les gens ne croiriez pas.",
        "Je veux dire, ça vous est jamais arrivé d'avoir l'impression que votre vie est au point mort ?",
        "Des souvenirs... vous en avez, ça, hein ?",
        "Je n'ai plus que des souvenirs, et ces souvenirs, ils ne sont pas les miens.",
        "Je suis le gars qui fait son boulot... vous devez être celui qui est le flic... si vous ne le faites pas, quelqu'un d'autre le fera.",
        "Avez-vous jamais rêvé de moutons électriques ?"
    ];

    var citationAleatoire = citations[Math.floor(Math.random() * citations.length)];

    document.getElementById("quote").innerText = '"' + citationAleatoire + '"';
}
