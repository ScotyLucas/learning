import { useState } from "react";

const Prob = () => {
    const [count, setCount] = useState(0);


    const increment = () => setCount(count +1)
    const decrement = () => setCount(count -1)

    return (
    <selection>

        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>

    </selection>

    );
};

export default Prob;
