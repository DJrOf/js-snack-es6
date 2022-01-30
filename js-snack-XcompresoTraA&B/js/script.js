/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe. */

const foodArray = ['pizza', 'pasta', 'bistecca', 'salmone', 'arachidi'];

// filter solution

const arrayQuantFilter = (arr, start, end) => {
    const newArray = arr.filter((item, index) => {
if (index >= start && item <= end) {
    return true;
}else {
    return false;
}
});
return newArray;
}


// For-each solution

const arrayQuant = (arr, start, end) => {
    const newArray = [];
    arr.forEach((item, index) => {
        if(index >= start && item <= end) newArray.push(item);
    });
    return newArray;
};



console.log(arrayQuantFilter(foodArray, 1, 3));