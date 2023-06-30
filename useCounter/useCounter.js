import { useState } from "react"

// 1) Primera tarea, aumentar, disminuir y resetear. +1 - 1 

// export const useCounter = ( initialValue = 10) => {

//     const [counter, setCounter] = useState( initialValue)

//     const increment = () => {
//         setCounter( counter + 1);
//     }

//     const decrement = () => {
//         setCounter( counter - 1);
//     }
    
//     const reset = () => {
//         setCounter( initialValue );
//     }

//     return {
//         counter,
//         increment,
//         decrement,
//         reset,
//     }
// }

//2da tarea, incrementar y disminuir de dos en dos.

export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue)

    const increment = ( value = 1) => {
        setCounter( counter + value);
    }

    const decrement = ( value = 1) => {
        setCounter( counter - value);
    }
    
    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}
