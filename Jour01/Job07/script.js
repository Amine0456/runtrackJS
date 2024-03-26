function jourTravaille(date) {
    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var annee = date.getFullYear();

    var joursFeries = [
        "01/01", // Jour de l'An
        "01/04", // Lundi de Pâques
        "01/05", // Fête du Travail
        "01/06", // Victoire 1945
        "01/08", // Ascension
        "01/07", // Lundi de Pentecôte
        "01/14", // Fête Nationale
        "01/15", // Assomption
        "01/11", // Toussaint
        "01/25", // Armistice 1918
        "01/25"  // Noël
    ];

    var jourMois = ("0" + jour).slice(-2) + "/" + ("0" + mois).slice(-2);

    if (joursFeries.includes(jourMois)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié.");
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + jour + "/" + mois + "/" + annee + " est un week-end.");
    } else {
        console.log("Oui, " + jour + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}

var dateTest = new Date("2024-04-15");
jourTravaille(dateTest);

