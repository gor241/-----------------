// 1) Мемоизация функции

// const pow = (a) => a * a;

// const memo = (fn) => {
//     const cache = {};
//     return (arg) => {
//         if (cache[arg] !== undefined) {
//             return cache[arg]; // Берём из кеша
//         } else {
//             const result = fn(arg);
//             cache[arg] = result;
//             return result;
//         }
//     };
// };

// const memoized = memo(pow);

// console.log(memoized(4)); // 16
// console.log(memoized(4)); // 16 (из кэша)

/** Комментарий:
    Функция memo принимает другую функцию fn и возвращает новую функцию, которая кэширует результаты вызовов fn. 
    Если функция уже вызывалась с таким аргументом, результат берётся из кэша. 
*/

// 2) Очередь консолей

// Ответ: 1, 4, 7, 3, 6, 2, 5

/** Комментарий:
Синхронный код выполняется сначала: 1, 4, 7.
Микрозадачи (Promises): 3, 6.
Макрозадачи (setTimeout): 2, 5. 
*/

// 3) Перевернуть каждое слово в строке

// const reverseWords = (str) => {
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// };

// console.log(reverseWords('Welcome to JavaScript')); // "emocleW ot tpircSavaJ"

// 4) Что выведется в консоль

// function foo() {
//     const x = 10;
//     return {
//         x: 20,
//         bar: () => {
//             console.log(this.x);
//         },
//         baz: function () {
//             console.log(this.x);
//         }
//     };
// }

// const obj1 = foo();
// console.log(obj1.bar()); // undefined
// console.log(obj1.baz()); // 20

// const obj2 = foo.call({ x: 30 });
// console.log(obj2.bar()); // undefined
// console.log(obj2.baz()); // 30

/** Комментарий:
bar — это стрелочная функция, она не имеет собственного this и берёт this из окружающего контекста. 
В первом случае this — глобальный объект (undefined в строгом режиме), поэтому this.x — undefined.

baz — обычная функция, this ссылается на объект перед точкой (obj1 или obj2), поэтому выводится 20 и 30.
При вызове foo.call({ x: 30 }), контекстом this внутри foo становится { x: 30 }, что влияет на стрелочную функцию bar. 
*/

// 5) Реализация Promise.race

// function myPromiseRace(promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach(promise => {
//             Promise.resolve(promise).then(resolve).catch(reject);
//         });
//     });
// }

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise1 resolved');
//     }, 300);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise2 resolved');
//     }, 200);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise3 resolved');
//     }, 100);
// });

// myPromiseRace([promise1, promise2, promise3])
//     .then(result => console.log(result)) // "promise3 resolved"
//     .catch(err => console.log(err));

/** Комментарий:
Функция myPromiseRace возвращает новый промис, который резолвится или реджектится при первом выполненном промисе из переданного массива. 
*/

// 6) Реализация Promise.all

// function myPromiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let completed = 0;

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//                 .then(value => {
//                     results[index] = value;
//                     completed++;
//                     if (completed === promises.length) {
//                         resolve(results);
//                     }
//                 })
//                 .catch(reject);
//         });
//     });
// }

// const promiseAll1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promiseAll1 resolved');
//     }, 300);
// });

// const promiseAll2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('promiseAll2 rejected');
//     }, 200);
// });

// const promiseAll3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promiseAll3 resolved');
//     }, 100);
// });

// myPromiseAll([promiseAll1, promiseAll2, promiseAll3])
//     .then(result => console.log(result))
//     .catch(err => console.log(err)); // "promiseAll2 rejected"

/** Комментарий: myPromiseAll ожидает выполнения всех промисов. Если один из них отклоняется, общий промис тоже отклоняется. */

// 7) Убрать повторяющиеся элементы без использования Set

// const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// const removeDuplicates = (arr) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// };

// console.log(removeDuplicates(array)); // [1, 2, 3, 5, 9, 8]

// 8) Что выведется в консоль

// Promise.reject('a')
//     .catch(p => p + 'b') // "ab"
//     .catch(p => p + 'c') // Пропускается, т.к. предыдущий catch успешен
//     .then(p => p + 'd')  // 'ab' + 'd' => 'abd'
//     .finally(p => p + 'e') // Игнорирует аргументы, возвращает undefined
//     .then(p => console.log(p)); // "abd"

/** Комментарий: finally не изменяет значение, передаваемое дальше. Аргумент в finally не используется. */

// 9) Что выведется в консоль

// const promise = new Promise((resolve) => {
//     console.log(1);

//     setTimeout(() => {
//         console.log(2);
//         resolve(3);
//         console.log(4);
//     }, 0);

//     console.log(5);
// });

// promise.then((res) => {
//     console.log(res); // 3
// });

// console.log(6);

// Ответ - 1, 5, 6, 2, 4, 3

/** Комментарий:
Синхронный код: 1, 5, 6.
Таймаут: 2, 4.
Промис резолвится после resolve(3), поэтому 3 выводится после 2 и 4. 
*/


// 10) Что выведется в консоль

// for (var i = []; i.length < 3; i.push(1)) {
//     setTimeout(function () {
//         console.log(1);
//     }, i.length * 1000);
// }

// Ответ - Через 1 секунду: 1, через 2 секунды: 1, через 3 секунды: 1
/** Комментарий: В каждом цикле i.length увеличивается, и задержка в setTimeout увеличивается соответственно. */

// 11) Что выведется в консоль

// console.log(typeof NaN);           // "number"
// console.log(typeof null);          // "object"
// console.log(typeof []);            // "object"
// console.log(typeof Array);         // "function"
// console.log(typeof (() => {}));    // "function"
// console.log(typeof Function);      // "function"

// 12) Что выведется в консоль

// console.log([] == []);          // false
// console.log([] === []);         // false
// console.log({} == {});          // false
// console.log({} === {});         // false
// console.log(NaN == NaN);        // false
// console.log(null === undefined);// false
// console.log(undefined === null);// false

/** Комментарий: Объекты и массивы сравниваются по ссылке. NaN не равен самому себе. */

// 13) Что выведется в консоль

// console.log(true || false);          // true
// console.log(1 || false);             // 1
// console.log(0 || false);             // false
// console.log('string' || false);      // "string"
// console.log(0 || false || 'string' || 1); // "string"
// console.log(false || 0 && 5);        // false
// console.log(true || 1 && 5);         // true
// console.log(true && false);          // false
// console.log(false && true);          // false
// console.log(1 && 0 && 5);            // 0
// console.log(1 && 5 || 7);            // 5

// 14) Задача на замыкание

// function createCounter() {
//     let count = 0;
//     return () => ++count;
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

/** Комментарий: Переменная count доступна только через возвращаемую функцию, что и обеспечивает замыкание. */

// 15) Реализация методов filter и map

// Array.prototype.myMap = function(callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }
//     return result;
// };

// Array.prototype.myFilter = function(callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// };

// 16) Что выведется в консоль

// [1,2,3].map(console.log); 
// // В консоль: 
// // 1 0 [1, 2, 3]
// // 2 1 [1, 2, 3]
// // 3 2 [1, 2, 3]

// const a = [1,2,3].map(console.log);
// console.log(a); // [undefined, undefined, undefined]

// 17) Развернуть многоуровневый массив и сложить всё

// const arr = [1,1,[1,[1,2],1],[1]];

// const sum = (arr) => {
//     return arr.reduce((acc, val) => 
//         acc + (Array.isArray(val) ? sum(val) : val), 0);
// };

// console.log(sum(arr)); // 8

// 18) Что выведется в консоль



// const a = new Promise((resolve, reject) => {
//   console.log(2);
//   reject();
// });

// setTimeout(() => {
//   console.log(2);
// }, 0);

// a.then(() => console.log(4))
//   .catch(() => console.log(5)) 
//   .catch(() => console.log(6)) 
//   .then(() => console.log(7)); 

// console.log(8);

// Ответ - 1, 2, 7, 5, 6, 2

/** Комментарий:
Синхронный код: 1, 2, 7.
Промис отклоняется, поэтому выполняется первый catch, затем then.
Таймаут выполняется последним. 
*/

// 19) Что выведет консоль

// const a = { a : 'a'}
// const b = { b : 'b'}
// const c = {}

// c[a] = a; // c["[object Object]"] = { a: 'a' }
// c[b] = b; // c["[object Object]"] = { b: 'b' }

// console.log(c[a]); // { b: 'b' }
// console.log(c[a].a); // undefined
// console.log(c[b]); // { b: 'b' }

/** Комментарий:
Ключи объектов приводятся к строке [object Object], поэтому оба присваивания записывают значение по одному и тому же ключу.
В результате c[a] и c[b] — это одно и то же свойство. 
*/

// 20) Как отработает функция

// function sleep<T extends number>(ms:T):Promise<T> {
//     return new Promise((resolve) => setTimeout(() => resolve(ms), ms))
//   }
  
//   sleep(1000)
//     .then((res) => {
//       console.log(res)  // 1000
//     })
//     .then((res) => {
//       console.log(res)  // 1000
//       return sleep(500)
//     })
//     .then((res) => {
//       console.log(res)  // 500
//     })

/** Комментарий:
Первый then получает res = 1000.
Второй then также получает res = 1000, так как предыдущий then вернул res.
Третий then получает res = 500 после задержки. 
*/

// 21) Что выведет консоль

// const run = () => {
//     setTimeout(() => {
//         console.log('timeout');
//     }, 0);

//     console.log(1);
    
//     new Promise((resolve) => {
//         console.log('Promise');
//         setTimeout(() => {
//             console.log('777');
//             resolve()
//         }, 0);
//     })
//         .then(() => {
//             console.log('then1');
//         })
//         .then(() => {
//             console.log('then2');
//         });
//     console.log(4);

//     setTimeout(() => {
//         console.log('timeout2');
//     }, 0);
// }

// run()

// 1 Promise 4 timeout 777 then1 then2 timeout2

// 21) Объяснить работу this в разных контекстах

// const obj = {
//     name: 'Alice',
//     getName: function() {
//         return this.name;
//     },
//   };
  
//   console.log(obj.getName()); // "Alice"

// const getName = obj.getName;
// console.log(getName()); // undefined или глобальное `name` в нестрогом режиме

// Комментарий:

// Значение `this` определяется контекстом вызова функции.
// В стрелочных функциях `this` берётся из внешнего контекста.

// 22) Как отработает функция с замыканием

// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// const add5 = makeAdder(5);
// console.log(add5(2)); // 7

// Комментарий:
// Замыкание — это функция, которая имеет доступ к своей внешней (замкнутой) области видимости даже после того, как внешняя функция завершила выполнение.

// 23) Объяснить работу и разницу между методами `call`, `apply` и `bind`.

// const obj = { num: 2 };

// function add(a, b) {
//     return this.num + a + b;
// }

// console.log(add.call(obj, 3, 4)); // 9
// console.log(add.apply(obj, [3, 4])); // 9

// const boundAdd = add.bind(obj, 3);
// console.log(boundAdd(4)); // 9

// Комментарий:

// - `call` вызывает функцию с указанным `this` и аргументами.
// - `apply` аналогично `call`, но принимает аргументы в виде массива.
// - `bind` возвращает новую функцию с привязанным `this` и (опционально) частичными аргументами.