// 1) Сделать кастомный хук useFetch

function useFetch(url) {
    // Код здесь
}

// 2) Создать имитацию получение данных с api и на основе этих данных развернуть компонент

// import React from 'react';
// import useFetch from './useFetch';

// interface Todo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const Component = ()=>{
  
//   return(
//     <div>
//     </div>
//   )
// }

// 3) Подключить context api

// import React, { createContext, useContext, useState } from 'react';

// type ThemeContextType = {
//     theme: string;
//     setTheme: (theme: string) => void;
// };

// const ThemeProvider: React.FC = ({ children }) => {
//     return (
//     );
// }

// const ThemeComponent: React.FC = () => {
//     return (
//         <div>
//         </div>
//     );
// };

// const App: React.FC = () => {
//     return (
//     );
// };

// export { ThemeProvider, ThemeComponent };
// export default App;


// 4) Создать слайс rtk

// import { createSlice } from '@reduxjs/toolkit';

// interface CounterState {
//     value: number;
// }

// const initialState: CounterState = { value: 0 };

// const counterSlice = createSlice({
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;


// 5) Сделать асинхронный экшен rtk

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

// export const fetchData = createAsyncThunk(

// );

// const dataSlice = createSlice({

// });

// export default dataSlice.reducer;


// 6) Создать configureStore



// 7) Создать debounce хук

// 8) Дебаунс для функции:

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

// 10) Нужно, что бы тикали часы и при unmount отправлялось последнее время

// function logMetric(date: string) {
//     fetch('/api/metric', {
//         method: 'POST',
//         body: JSON.stringify({ date }),
//     });
// }

// const Clock = () => {
//     const [currentDate, setCurrentDate] = useState((new Date()).toISOString())

//     return <h1>{currentDate}</h1>
// }

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
// console.log(userService.getFilteredUsers());

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

// const convertInput = () => {
    
// }

// 14) Типизировать массив

// const array = [1, [2, [3]], [4, 5]]

// 15) Что будет в type Result

// type ExampleType = {
//     Field1:string
//     Field2:string
//     Field3:number
//     Field4:boolean
// }

// type T1<S, T> = { [K in keyof S]: S[K] extends T ? K : never }[keyof S]

// type Result = T1<ExampleType, string>

// 16) Не отрабатывает клик

// import React, {useState} from 'react'

// export default () => <div><Clicker /></div>

// function Clicker() {
//     const [clicks, setClicks] = useState(0)

//     const onClick = () => {
//         setTimeout(() => {
//             setClicks(clicks + 1)
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

// import { useRef, useState } from 'react';

// export default function App() {
//     const [isVisible, setIsVisible] = useState(false)
//     const inputRef = useRef()
    
//     const toggleInput = () => {
//         setIsVisible(true)
//         inputRef.current.focus()
//     }

//     return (
//         <div>
//             <button onClick={toggleInput}>Show and focus</button>
//             {isVisible && <input ref={inputRef} type='text'/>}
//         </div>
//     )
// }

// 18)  Вопрос: Объяснить использование `React.memo` для оптимизации производительности.

// import React from 'react';

// const ExpensiveComponent = function ExpensiveComponent({ data }) {
//     return <div>{data}</div>;
// };

// export default ExpensiveComponent;