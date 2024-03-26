function tri(numbers, order) {

    var sortedArray = numbers.slice();

    if (order === "asc") {
        sortedArray.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        sortedArray.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Order doit être 'asc' ou 'desc'.");
        return null;
    }

    return sortedArray;
}

var tableau = [3, 1, 5, 2, 4];

console.log(tri(tableau, "asc")); 
console.log(tri(tableau, "desc")); 
console.log(tri(tableau, "invalid"));

