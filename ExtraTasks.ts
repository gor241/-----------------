// 1) Сделать функцию throttle:
const throttle = (fn, delay) => {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return fn(...args);
    };
};
/* Пример использования:
   const log = () => console.log('throttled');
   const throttledLog = throttle(log, 1000);
   window.addEventListener('scroll', throttledLog);
*/

// 2) Написать функцию flattenObject, разворачивающую вложенный объект в плоский:
const flattenObject = (obj, prefix = '', res = {}) => {
    for (let key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObject(obj[key], newKey, res);
        } else {
            res[newKey] = obj[key];
        }
    }
    return res;
};
// Пример использования:
// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: { e: 3 }
//   }
// };
// console.log(flattenObject(obj)); // { 'a': 1, 'b.c': 2, 'b.d.e': 3 }

// 3) Реализовать собственный метод reduce для массива:
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
};

// 4) Проверка работы EventLoop (какой будет порядок?):
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
// Ответ: A, D, C, B

// 5) Написать функцию для глубокой копии объектов/массивов:
function deepClone(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(deepClone);
    }
    const clonedObj = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(value[key]);
        }
    }
    return clonedObj;
}

// 6) Создать компонент таймера React, который уничтожается через 5 секунд.
// При размонтировании показать диалоговое окно с итоговым значением таймера.
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            alert(`Timer stopped at ${time} seconds`);
        };
    }, [time]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTime(0);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return <h1>{time}</h1>;
};

export default Timer;

// 7) Написать TypeScript-функцию, принимающую массив (чисел или строк)
// и возвращающую кортеж [минимум, максимум].
function getMinMax<T extends number | string>(arr: T[]): [T, T] {
    return [Math.min(...arr), Math.max(...arr)];
}

// 8) Создать HOC (Higher Order Component) для логирования пропсов
// перед рендером оборачиваемого компонента.
import React from 'react';

const withLogger = (WrappedComponent) => {
    return (props) => {
        console.log('Props:', props);
        return <WrappedComponent {...props} />;
    };
};

// Пример использования:
// const MyComponent = (props) => <div>{props.message}</div>;
// const MyComponentWithLogger = withLogger(MyComponent);

// 9) Дописать пример Async/Await для чтения нескольких файлов последовательно,
// затем вывести общий результат.
import { readFile } from 'fs/promises';

async function readFilesSequentially() {
    try {
        const data1 = await readFile('file1.txt', 'utf8');
        const data2 = await readFile('file2.txt', 'utf8');
        const data3 = await readFile('file3.txt', 'utf8');
        console.log(data1 + data2 + data3);
    } catch (e) {
        console.error('Error reading files:', e);
    }
}

// 10) Написать функцию groupBy, которая группирует элементы массива по заданному критерию:
function groupBy(array, keyFn) {
    return array.reduce((result, item) => {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}

// Пример использования:
// const data = [{ age: 10 }, { age: 22 }, { age: 10 }];
// console.log(groupBy(data, x => x.age)); // { '10': [...], '22': [...] }
