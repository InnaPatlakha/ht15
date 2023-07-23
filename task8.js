// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму непарних позитивних елементів.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let filteredArr = arr.filter (element => element > 0);
console.log ('Відфільтрований масив тільки з позитивними елементами = ' + filteredArr);

let oddElement = filteredArr.filter (element => element % 2 !== 0);
console.log ('Непарні позитивні елементи = ' + oddElement);

function arraySum(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log('Сума непарних позитивних елементів масиву = ' + sum);
  }
  arraySum(oddElement);