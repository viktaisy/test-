// // вывод положительных чисел

// let b = [1, 2, -3, 4, 5];

// for (let i = 0; i < b.length; i++)
// {
//   if ((b[i] > 0))
//   {
//   	console.log(b[i]);
//   }
// }

// // вывод отрицательных чисел
// let s = [1, 2, -3, 4, 5];

// for (let i = 0; i < s.length; i++)
// {
//   if ((s[i] < 0))
//   {
//   	console.log(s[i]);
//   }
// }
// // вывод четных чисел
// let a = [1, 2, -3, 4, 5];

// for (let i = 0; i < a.length; i++)
// {
//   if ((a[i] % 2) === 0)
//   {
//   	console.log(a[i]);
//   }
// }








// 2. Создать массив, состоящий из целочисленных положительных и отрицательных элементов. Вывести на экран только положительные элементы.

// Функция для возврата массива положительных чисел

// function onlyPositive(array) {
// let temp = [];

// for (let i = 0; i < array.length; i++) {
// if (array[i] > 0) {
// temp.push(array[i]);
// }
// }

// return temp;
// }

// let input = [2, -7, 1, 5];

// let output = onlyPositive(input);

// console.log(output);