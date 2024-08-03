//---------------------1-masala-----------------

// const array = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// array.sort((a, b) => b - a);
// console.log(array);

//---------------------2-masala-----------------

// const array = [1, 6, 9, 5, 8, 10, 15];
// const rangeSum = (arr, start, end) => arr.slice(start, end + 1).reduce((acc, val) => acc + val, 0);
// console.log(rangeSum(array, 2, 5));

//---------------------3-masala-----------------

// const array = [2, 4, 5, 6, 6, 3, 2, 1];
// const removeArray = [...new Set(array)];
// console.log(removeArray);

//---------------------4-masala-----------------

// let array = [2, 4, 5, 6, 6, 3, 2, 1]

// const findMinMax = arr => ({
//     kattasi: Math.max(...arr),
//     kichigi: Math.min(...arr)
// });
// console.log(findMinMax(array));

//---------------------5-masala-----------------

// const array = [1, 5, 8, 9, 10];
// array.push(array.shift());
// console.log(array);

//---------------------6-masala-----------------

// let array = [1, 2, 3, 4, 5, 6]

// const reverseArray = arr => arr.reverse();
// console.log(reverseArray(array));

//---------------------7-masala-----------------

// const array = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];
// const oddNumbers = array.filter(num => num % 2 !== 0);
// console.log(oddNumbers, oddNumbers.length);

//---------------------8-masala-----------------

// const array = [2, 3, 4, 5, 7];
// const oddIndex = array.filter((_, index) => index % 2 !== 0);
// console.log(oddIndex);

// ---------------------9-masala-----------------

// const array = [1, 2, 3, 4, 5, 6];
// const maxOddNumber = arr => Math.max(...arr.filter((_, index) => index % 2 !== 0));
// console.log(maxOddNumber(array));

// ---------------------11-masala-----------------

// const array = 6;
// const OddNumbers = n => Array.from({ length: n }, (_, i) => 2 * i + 1);
// console.log(OddNumbers(array));

// ---------------------12-masala-----------------

// const array = [3, 5, 6, 3, 2, 3];
// const reverseArray = [...new Set(array)];
// console.log(reverseArray);

// ---------------------13-masala-----------------

// const array = [2, 3, 5, 6, 3, 3];
// const sortingArray = [...new Set(array)];
// console.log(sortingArray);

//!@#$$%^&&^%&^%$%^&*(*&^#$%&^%$%^&------qolgan 7 tasi ishlashi uchun mana bu arrayni comentdan chiqaring

// const arr = [
//     { id: 1, name: 'Asad', age: 30, salary: 2000 },
//     { id: 2, name: 'Sarbon', age: 24, salary: 1200 },
//     { id: 3, name: 'Sardor', age: 28, salary: 1000 }
// ];

//#$%^&*&^%#@#$%^&*&#@#$%^&*#$%^&*&

// ---------------------1-masala-----------------

// function collectSalaries(arr) {
//     const salaries = arr.map(employee => employee.salary);
//     const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
//     return { salaries, totalSalary };
// }

// const { salaries, totalSalary } = collectSalaries(arr);
// console.log(salaries);
// console.log(totalSalary);

// ---------------------2-masala-----------------

// function highestSalaryEmployee(arr) {
//     const highestPaidEmployee = arr.reduce((max, arr) => 
//         arr.salary > max.salary ? arr : max
//     );
//     return highestPaidEmployee.name;
// }

// console.log(highestSalaryEmployee(arr));

// ---------------------4-masala-----------------

// const array = [43, 12, 76, 23, 97, 28, 11];
// array.sort((a, b) => a - b);
// console.log(array);

// ---------------------5-masala-----------------

// const array = [43, 12, 76, 23, 97, 28, 11];
// const minValue = Math.min(...array);
// console.log(minValue);

// ---------------------7-masala-----------------

// const id = parseInt(prompt('id kiriting: '));

// function findEmployeeById(arr, id) {
//     const index = arr.findIndex(employee => employee.id === id);
//     const employee = arr[index];
//     return { index, employee };
// }


// const result = findEmployeeById(arr, id);
// console.log('indeksi:', result.index);
// console.log('ismi:', result.employee);

