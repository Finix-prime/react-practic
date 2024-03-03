import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // to update twice this will not work 
        // setCount(count + 1);
        // setCount(count + 1); 

        // use arrow function to use previous state
        setCount(param => param + 1);
        setCount(param => param + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="count-button" onClick={decrement}>Decremenet</button>
            <button className="count-button" onClick={reset}>Reset</button>
            <button className="count-button" onClick={increment}>Incremenet</button>
        </div>
    );
}

export default Counter