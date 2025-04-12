import { createContext, useState } from "react";

export const contextObj = createContext();

export default function CounterContext({ children }) {
    let [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <contextObj.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </contextObj.Provider>
    )
}

