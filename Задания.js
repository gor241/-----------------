// 1) Реализовать функцию мемоизации, которая кэширует результаты вызова функции.

// const pow = (a) => a * a

// const memo = (fn) => {
// //     // Код здесь
// }

// const memoized = memo(pow)

// memoized(4)


// 2) Что будет в очереди консолей

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 0);

// Promise.resolve().then(() => {
//     console.log(3);
// });

// console.log(4);

// setTimeout(() => {
//     console.log(5);
// }, 0);

// Promise.resolve().then(() => {
//     console.log(6);
// });

// console.log(7);

// Ответ ...

// 3) Перевернуть каждое слово в строке

// const reverseWords = (str) => {
// //     // Код здесь
// }

// console.log(reverseWords('Welcome to JavaScript'));


// 4) Что выведется в консоль

// function foo() {
//     const x = 10
//     return {
//         x: 20,
//         bar: () => {
//             console.log(this.x);
//         },
//         baz: function () {
//             console.log(this.x);
//         }
//     }
// }

// const obj1 = foo()
// console.log(obj1.bar()); // Что выведется ? 
// console.log(obj1.baz()); // Что выведется ? 

// const obj2 = foo.call({ x: 30 })
// console.log(obj2.bar()); // Что выведется ? 
// console.log(obj2.baz()); // Что выведется ? 


// 5) Реализация Promise.race своими силами

// function myPromiseRace(promises) {
// //     // Код здесь
// }

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise1 resolved')
//     }, 300);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise2 resolved')
//     }, 200);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise3 resolved')
//     }, 100);
// })

// const result = myPromiseRace([
//     promise1, promise2, promise3
// ])
//     .then(result => console.log(result))
//     .catch(err => console.log(err))


// 6) Реализация Promise.All своими силами

// function myPromiseAll(promises) {
// //     // Код здесь
// }

// const promiseAll1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promiseAll1 resolved')
//     }, 300);
// })

// const promiseAll2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('promiseAll2 resolved')
//     }, 200);
// })

// const promiseAll3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promiseAll3 resolved')
//     }, 100);
// })


// const resultAll = myPromiseAll([
//     promiseAll1, promiseAll2, promiseAll3
// ])
//     .then(result => console.log(result))
//     .catch(err => console.log(err))


// 7) Убрать повторяющиеся элементы без использовании Set

// const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

// const removeDuplicates = (arr) => {
//     // Код здесь
// }

// console.log(removeDuplicates(array));


// 8) Что выведется в консоль

// Promise.reject('a')
//     .catch(p => p + 'b')
//     .catch(p => p + 'c')
//     .then(p => p + 'd')
//     .finally(p => p + 'e')
//     .then(p => console.log(p))

// Ответ -


// 9) Что выведется в консоль

// const promise = new Promise((resolve) => {
//     console.log(1);

//     setTimeout(() => {
//         console.log(2);
//         resolve(3)
//         console.log(4);
//     }, 0);

//     console.log(5);
// })

// promise.then((res) => {
//     console.log(res);
// })

// console.log(6);

// Ответ - 


// 10) Что выведется в консоль 

// for (var i = []; i.length < 3; i.push(1)) {
//     setTimeout(function () {
//         console.log(1);
//     }, i.length * 1000);
// }

// Ответ - 


// 11) Что выведет консоль 

// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof Array);
// console.log(typeof (() => { }));
// console.log(typeof Function);

// Ответ - 

// 12) Что выведет консоль 

// console.log([] == []);
// // console.log([]===[]);
// console.log({} == {});
// // console.log({}==={});
// console.log(NaN == NaN);
// console.log(null === undefined);
// console.log(undefined === null);

// Ответ - 


// 13) Что выведет консоль 

// console.log(true || false);
// console.log(1 || false);
// console.log(0 || false);
// console.log('string' || false);
// console.log(0 || false || 'string' || 1);
// console.log(false || 0 && 5);
// console.log(true || 1 && 5);
// console.log(true && false);
// console.log(false && true);
// console.log(1 && 0 && 5);
// console.log(1 && 5 || 7);

// Ответ - 


// 14) Задача на замыкание

// function createCounter() {
// //    // Код здесь
//   }
  
//   const counter = createCounter();
//   console.log(counter()); // 
//   console.log(counter()); // 
//   console.log(counter()); // 


// 15) Создание методов массива filter и map

// Array.prototype.myMap = function(arr, callback) {
// //     // Код здесь
//   };
  
//   Array.prototype.myFilter = function(arr,callback) {
// //     // Код здесь
//   };
  

// 16) Что выведет в консоль 

// [1,2,3].map(console.log) // 

// const a = [1,2,3].map(console.log)
// console.log(a); //

// 17) Развернуть многоуровневый массив (сделать одноуровневым) и сложить всё (рекурсия)

// const arr = [1,1,[1,[1,2],1],[1]]

// const sum = (arr) => {
// //   // Код здесь
// }

// console.log(sum(arr));

// 18) Что выведется в консоль

// console.log(1);

// const a = new Promise((resolve, reject) => {
//   console.log(2);
//   reject()
// })

// setTimeout(() => {
//   console.log(2);
// });

// a.then(()=> console.log(4))
//   .catch(()=>console.log(5))
//   .catch(()=>console.log(6))
//   .then(()=> console.log(7))

// console.log(8);

// Ответ 


// 19) Что выведет консоль

// const a = { a : 'a'}
// const b = { b : 'b'}
// const c = {}

// c[a] = a
// c[b] = b

// console.log(c[a].a, c[b].b); 

// 20) Как отработает функция

// function sleep<T extends number>(ms:T):Promise<T> {
//   return new Promise((resolve) => setTimeout(() => resolve(ms), ms))
// }

// sleep(1000)
//   .then((res) => {
//     console.log(res)  
//   })
//   .then((res) => {
//     console.log(res)  
//     return sleep(500)
//   })
//   .then((res) => {
//     console.log(res)  
//   })

// 21) Что выведет консоль 

// const run = () => {
//   setTimeout(() => {
//       console.log('timeout');
//   }, 0);

//   console.log(1);
  
//   new Promise((resolve) => {
//       console.log('Promise');
//       setTimeout(() => {
//           console.log('777');
//           resolve()
//       }, 0);
//   })
//       .then(() => {
//           console.log('then1');
//       })
//       .then(() => {
//           console.log('then2');
//       });
//   console.log(4);

//   setTimeout(() => {
//       console.log('timeout2');
//   }, 0);
// }

// run() 

// 21) Объяснить работу this в разных контекстах

// const obj = {
//   name: 'Alice',
//   getName: function() {
//       return this.name;
//   },
// };

// console.log(obj.getName());  

// const getName = obj.getName;
// console.log(getName()); 

// 22) Как отработает функция с замыканием

// function makeAdder(x) {
//   return function(y) {
//       return x + y;
//   };
// }

// const add5 = makeAdder(5);
// console.log(add5(2));

// 23) Объяснить работу и разницу между методами `call`, `apply` и `bind`.

// const obj = { num: 2 };

// function add(a, b) {
//     return this.num + a + b;
// }

// console.log(add.call(obj, 3, 4)); 
// console.log(add.apply(obj, [3, 4])); 

// const boundAdd = add.bind(obj, 3);
// console.log(boundAdd(4)); 
