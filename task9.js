// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
// Знайти добуток позитивних елементів.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let filteredArr = arr.filter (element => element > 0);
console.log ('Відфільтрований масив тільки з позитивними елементами = ' + filteredArr);

function arrayProd(array){
let prod = 1;
for (let i = 0; i < array.length; i++) {
  prod *= array[i];
}
console.log('Добуток позитивних елементів масиву = ' + prod);
}
arrayProd(filteredArr);