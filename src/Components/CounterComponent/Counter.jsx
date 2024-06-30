import { useEffect } from "react";

function Counter({count, incrementValue, decrementValue}){
    useEffect( () => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        }
    }, []);
    return (
        <>
            <p>{count}</p>
            <button onClick={incrementValue}>+</button>
            <button onClick={decrementValue}>-</button>
        </>
    )
}
export default Counter;