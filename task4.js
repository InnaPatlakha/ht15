// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Визначити кількість негативних елементів.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let filteredArr = arr.filter (element => element < 0);
console.log ('Відфільтрований масив тільки з негативними елементами = ' + filteredArr);

console.log('Кількість негативних елементів масиву = ' + filteredArr.length);