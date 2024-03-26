function estNombrePremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;

    if (nombre % 2 === 0 || nombre % 3 === 0) return false;

    let i = 5;
    while (i * i <= nombre) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

var premier1 = 17;
var premier2 = 23;
var nonPremier = 10;

console.log(sommeNombresPremiers(premier1, premier2)); 
console.log(sommeNombresPremiers(premier1, nonPremier)); 


