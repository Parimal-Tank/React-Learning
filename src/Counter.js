import { useState } from "react";


const Counter = () => {

    const [count , setCount] = useState(0);

    return(
        <>
            Count: {count} <br/>
            <button className="m-5" onClick={() => setCount(0)}>Reset</button>
            <button className="m-5" onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Counter;