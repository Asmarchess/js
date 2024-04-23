let array2 = [23, 23, 5, 6, 5, 6, 7, 7, 789];

let edediOrta = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        sum = sum + element;
    }
    return sum / array.length;
}
console.log(edediOrta(array2));

