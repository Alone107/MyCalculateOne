'use strict';


// function getMaxSubSum (num) {
//   let maxSum = 0;
//   let sum = 0;
//   let maxSum1 = 0;
//   for (let j of num) {
//     sum += j;
//     if (sum > 0 ) {

//       if (maxSum < sum) {

//         maxSum = sum;
//         maxSum1 = maxSum;
//       } else {};
//     } else {
//       sum = 0;
//       maxSum = 0;
//     }
//   }

// alert (maxSum1);
// }

// getMaxSubSum([-1, 2, 3, -9]) 
// getMaxSubSum([2, -1, 2, 3, -9]) 
// getMaxSubSum([-1, 2, 3, -9, 11]) 
// getMaxSubSum([-2, -1, 1, 2]) 
// getMaxSubSum([100, -9, 2, -3, 5]) 
// getMaxSubSum([1, 2, 3]) 
// getMaxSubSum([-1, -2, -3])

// --------------------------------------------------------------------------------------------



// function filterRangeInPlace (arr, a, b) {
//   for (let j = 0; j < arr.length; j++) {
//     if (a <= arr[j] && arr[j] <= b) {
//     } else {
//       arr.splice(j,1);

//     }
//   }
//   alert (arr);
// }


// filterRangeInPlace([5, 3, 2, 1], 1, 4)




// ==================================================================
let str = prompt ('Введите пример');
let str1 = 0;
let min = 0;
let k = 1;

function calculate (str) {
  str = str.split(' ');
  for (let j of str) {
    if ( str.includes('+') ) {
      if (!isNaN(j)) {
        str1 += +j;
        
      }
    } else if (str.includes('-')) {
      if(!isNaN(j)) {
        if (min > +j) {
          str1 = min - j
          min = j;
        } else {
          str1 = (min - j);
          min = j;
        }
      }
      } else if (str.includes('*')) {
        if(!isNaN(j)) {
          str1 = j * k;
          k = j;
        }
      } else if (str.includes('/')) {
        if(!isNaN(j)) {
          if (j >= k) {
            str1 = j / k;
            k = j;
          } else {
            str1 = k / j;
            k = j;
          }
        }
      } else if (str.includes('**')) {
        if (!isNaN(j)) {
          if (k == 1) {
            str1 = j ** k;
            k = j;
          } else {
            str1 = k ** j;
          }
        }
      }
    }
    alert (str1)
  }
calculate(str);


let str2 = "2 * 3"

// -------------------------------------------------------------------------


// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }


// Calculator()









// let powerCalc = new calculate;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8





// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10











// ------------------------------------------------------------------



// let arr = ["HTML", "JavaScript", "CSS"];
// let arr1;
// let sorted = copySorted(arr);



// function copySorted (arr) {
//   arr1 = arr.concat();
//   arr1.sort( (a, b) => a.length - b.length );
// }

// alert(arr1); // HTML, JavaScript, CSS (без изменений)
// alert(arr); // HTML, JavaScript, CSS (без изменений)




// ==================================================================



// let arr = [5, 2, 1, -10, 8];
// arr.sort( (a, b) => b - a );

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10




// ----------------------------------------------------------------------




// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [ 1, 2, 15 ];

// arr.sort(compareNumeric);

// alert(arr);  // 1, 2, 15





// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]







// --------------------------------------------------------------------------------------

// function filterRange (arr, a, b) {
//   let arr1 = [];
//   for (let j of arr) {
//     if (j >= a && j <= b ) {
//       arr1.push(j);
//     }
//   }
//   alert (arr1);
//   alert (arr);
// }


// filterRange([5, 3, 8, 1], 1 , 4)


// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)









