// 1) Кастомный хук useFetch

// import { useState, useEffect } from 'react';

// function useFetch<T>(url: string): { data: T | null; loading: boolean; error: Error | null } {
//     const [data, setData] = useState<T | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<Error | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const result: T = await response.json();
//                 setData(result);
//             } catch (error) {
//                 setError(error as Error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [url]);

//     return { data, loading, error };
// }

// export default useFetch;

// 2) Имитация получения данных с API и рендеринг компонента

// import React from 'react';
// import useFetch from './useFetch'; // предположим, что хук useFetch находится в файле useFetch.js

// interface Todo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const Component = () => {
//     const { data, loading, error } = useFetch<Todo>('https://jsonplaceholder.typicode.com/todos/1');

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <div>
//             <h3>{data?.title}</h3>
//             <p>Status: {data.completed ? 'Completed' : 'Pending'}</p>
//         </div>
//     );
// };

// export default Component;

// 3) Подключение Context API

// import React, { createContext, useContext, useState } from 'react';

// type ThemeContextType = {
//     theme: string;
//     setTheme: (theme: string) => void;
// };

// // Создание контекста
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// const ThemeProvider: React.FC = ({ children }) => {
//     const [theme, setTheme] = useState('light');
//     return (
//         <ThemeContext.Provider value={{ theme, setTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }

// const ThemeComponent: React.FC = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//         throw new Error('ThemeComponent must be used within a ThemeProvider');
//     }
//     const { theme, setTheme } = context;
//     return (
//         <div>
//             <p>Current theme: {theme}</p>
//             <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
//                 Toggle Theme
//             </button>
//         </div>
//     );
// };

// const App: React.FC = () => {
//     return (
//         <ThemeProvider>
//             <ThemeComponent />
//         </ThemeProvider>
//     );
// };

// export { ThemeProvider, ThemeComponent };
// export default App;


// 4) Создание слайса с использованием RTK

// import { createSlice } from '@reduxjs/toolkit';

// interface CounterState {
//     value: number;
// }

// const initialState: CounterState = { value: 0 };

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: state => { state.value += 1; },
//         decrement: state => { state.value -= 1; },
//         incrementByAmount: (state, action: PayloadAction<number>) => {
//             state.value += action.payload;
//         },
//     },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;

// 5) Асинхронный экшен с использованием RTK

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// interface DataState {
//     data: any;
//     loading: boolean;
//     error: string | null;
// }

// const initialState: DataState = {
//     data: null,
//     loading: false,
//     error: null,
// };

// export const fetchData = createAsyncThunk('data/fetchData', async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
// });

// const dataSlice = createSlice({
//     name: 'data',
//     initialState,
//     reducers: {},
//     extraReducers: builder => {
//         builder
//             .addCase(fetchData.pending, state => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchData.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = action.payload;
//             })
//             .addCase(fetchData.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message || 'Something went wrong';
//             });
//     },
// });

// export default dataSlice.reducer;

// 6) Создание configureStore

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';
// import dataReducer from './dataSlice';

// const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         data: dataReducer,
//     },
// });

// export default store;

// 7) Создание дебаунс хука

// import { useState, useEffect } from 'react';

// function useDebounce(value, delay) {
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay);

//         return () => {
//             clearTimeout(handler);
//         };
//     }, [value, delay]);

//     return debouncedValue;
// }

// export default useDebounce;

// 8) Дебаунс для функции:

// import React, { useState, useCallback, useRef } from 'react';

// function useDebounce(callback, delay) {
//   const timeoutRef = useRef(null);

//   const debouncedFunction = useCallback((...args) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   }, [callback, delay]);

//   return debouncedFunction;
// }

// function DebouncedComponent() {
//   const [value, setValue] = useState('');

//   const debouncedSetValue = useDebounce((newValue) => {
//     setValue(newValue);
//   }, 1000);

//   const handleChange = (event) => {
//     debouncedSetValue(event.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <p>Значение: {value}</p>
//     </div>
//   );
// }

// export default DebouncedComponent;


// 9) В каком порядке отработает консоль

// export default function App() {
//     return (
//         <Parent>
//             <Child/>
//         </Parent>
//     )
// }

// function Parent({ children }) {
//     console.log(1);
    
//     useEffect(() => {
//         console.log(2);
//     },[])

//     return <div>{ children }</div>
// }

// function Child() {
//     console.log(3);
    
//     useEffect(() => {
//         console.log(4);
//     },[])

//     return <h1>Hi</h1>
// }

// 1 3 4 2
/** Комментарий:
При первом рендере сначала вызываются функции компонентов (1, 3).
Затем useEffect выполняются после отрисовки: 2, 4. 
*/

// 10) Нужно, что бы тикали часы и при unmount отправлялось последнее время

// function logMetric(date: string) {
//     fetch('/api/metric', {
//         method: 'POST',
//         body: JSON.stringify({ date }),
//     });
// }

// const Clock: React.FC = () => {
//     const [currentDate, setCurrentDate] = useState((new Date()).toISOString())
//     const dateRef = useRef(currentDate)

//     useEffect(() => {
//        const interval = setInterval(() => {
//         const currDate = new Date().toISOString();
//         setCurrentDate(currDate)
//         dateRef.current = currDate
//        }, 1000)

//        return () => {
//         clearInterval(interval)
//         logMetric(dateRef.current);
//        }
//     },[])

//     return <h1>{currentDate}</h1>
// }

/** Комментарий: При очистке эффекта (return внутри useEffect) мы вызываем logMetric с последним значением времени. */

// 11) Необходимо запросить сообщения и комнаты и сгруппировать сообщения по дням

// interface IRoom {
//     id: number
//     name: string
//     type: string
// }

// interface IMessage {
//     roomId: IRoom['id']
//     id: number
//     text: string
//     ts: Date
// }

// // Эндпоинт GET '/rooms' возвращает IRoom[]
// // Эндпоинт GET '/message' возвращает IMessage[]

// type ProcessedMessage = Omit<IMessage, 'roomId'> & {
//     roomName: IRoom['name']
// }

// type ProcessData = Record<string, ProcessedMessage>

// // При этом строковый ключ - ISO представление даты начала дня ('2022-06-23T00:00:00')

// // Пример результата:

// {
//     '2023-03-23T00:00:00': // ISO представление даты начала дня
//     [
//         {
//             "roomName": 'Room name', // Название комнаты из rooms
//             "id": 1,
//             "text": "sunt aut facere ...",
//             "ts": "Thu Mar 23 2023 12:15:15 GMT+0200 (Восточная Европа, стандартное время)"
//         }
//     ]
// }

// async function processData(): Promise<ProcessData> {
//     const [rooms, messages]: [IRoom[], IMessage[]] = await Promise.all([
//         fetch('/rooms').then(res => res.json()),
//         fetch('/message').then(res => res.json()),
//     ]);

//     const roomMap = new Map<number, string>();
//     rooms.forEach(room => {
//         roomMap.set(room.id, room.name);
//     });

//     const result: ProcessData = {};

//     messages.forEach(message => {
//         const dateKey = new Date(message.ts).toISOString().split('T')[0] + 'T00:00:00';
//         const processedMessage: ProcessedMessage = {
//             id: message.id,
//             text: message.text,
//             ts: message.ts,
//             roomName: roomMap.get(message.roomId) || 'Unknown',
//         };

//         if (!result[dateKey]) {
//             result[dateKey] = [];
//         }

//         result[dateKey].push(processedMessage);
//     });

//     return result;
// }

// 12) Что будет в консоле

// const userService = {
//     currentFilter: 'active',

//     users: [
//         {name:'Alex', status:'active'},
//         {name:'Nick', status:'delete'}
//     ],

//     getFilteredUsers: function(){
//         return this.users.filter(function (user){
//             return user.status === this.currentFilter
//         })
//     }
// }
// console.log(userService.getFilteredUsers()); // [] - здесь this ссылается на глобальный объект

// 13) Написать функцию  или последовательность операций, которая вернёт результат следующий условий
// результат есть строка из сконкатенированных value элементов коллекций, расположенных в обратном порядке символов,
// результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order
// результат не содержит одинаковых символов

// const input = [
//     { value: 'abcd', order: 4, expired: false },
//     { value: 'qwer', order: 2, expired: true },
//     { value: 'xyz1', order: 1, expired: false },
//     { value: 'abx2', order: 3, expired: false },
// ]

// const convertInput = (arr) => {
//     return arr
//         .filter(el => !el.expired)
//         .sort((a, b) => a.order - b.order)
//         .map(el => el.value.split('').reverse().join(''))
//         .join('')
//         .split('')
//         .filter((item, pos, self) => self.indexOf(item) === pos)
//         .join('');
// };

// console.log(convertInput(input)); // "1zyxba2dc"
/** Комментарий:
Фильтруем непросроченные записи.
Сортируем по возрастанию order.
Переворачиваем каждое значение value.
Объединяем и удаляем дубликаты символов.
 */


// 14) Типизировать массив

// type Arr = Array<number> | Arr

// const array: Arr = [1, [2, [3]], [4, 5]]


// 15) Что будет в type Result

// type ExampleType = {
//     Field1:string
//     Field2:string
//     Field3:number
//     Field4:boolean
// }

// type T1<S, T> = { [K in keyof S]: S[K] extends T ? K : never }[keyof S]

// type Result = T1<ExampleType, string>

// Field1 | Field2

// 16) Не отрабатывает клик

// import React, {useState} from 'react'

// export default () => <div><Clicker /></div>

// function Clicker() {
//     const [clicks, setClicks] = useState(0)

//     const onClick = () => {
//         setTimeout(() => {
//             setClicks(click => click + 1) // Добавил колбек
//         }, 2000);
//     }

//     return (
//         <>
//             {clicks}
//             <button onClick={onClick}>
//                 Increment
//             </button>
//         </>
//     )
// }

// 17) Приложение содержит кнопку, при нажатии на которую должен появиться инпут с фокусом.
// Но почему то это не работает

// import { useRef, useState, useEffect } from 'react';

// export default function App() {
//     const [isVisible, setIsVisible] = useState(false)
//     const inputRef = useRef()
    
//     const toggleInput = () => {
//         setIsVisible(true)
//         inputRef.current.focus() //! В первом варианте убрать
//     }
//     // 1 вариант, добавление useEffect

//     useEffect(() => {
//       if (isVisible) {
//         inputRef.current?.focus()
//       }
    
//     }, [isVisible])
    

//     return (
//         <div>
//             <button onClick={toggleInput}>Show and focus</button>
//             {isVisible && <input ref={inputRef} type='text' autoFocus />} 
//             {/* Второй вариант добавить autoFocus */}
//             {/* Третий вариант в ref кинуть колбек - ref={(el)=>el?focus()} */}
//         </div>
//     )
// }

// 18) Объяснить использование `React.memo` для оптимизации производительности.

// import React from 'react';

// const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
//     // Рендеринг, зависящий только от `data`
//     return <div>{data}</div>;
// });

// export default ExpensiveComponent;

// // Комментарий:
// // `React.memo` предотвращает ненужные перерисовки компонента, если его пропсы не изменились.


