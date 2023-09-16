//! 17-dars
// 	- react optimization
// 	- memo => child component, trigger re-render
// 	- memo vs useMome()
// 	- useMemo = > return value
// 	- useCallback vs useMemo

//!memo => child componentni orab qoyganda parentgadi state ozgarishi childga tasir qilmaydi
//!memo doim child componentga ishlatiladi
//!memo ishlatish uchun parent component re render bolishi kerak

//!child componentga ozgarmas primitive prop berilsa child re render bolmaydi
//!useMemo , useCallback =>  child componetga ozgarmas non primitive prop berilsa child re render bolishini oldini oladi
//!useMamo() -> return value
// import { useMemo } from "react";
// const data = useMemo(() => {
//     return {name:'jasurbek'}
// } , [])

// <Child data={data}/>

//!useCallback() => return function , param jonatish imkoniga egamiz
