import { useState } from "React"


// STATEFUL COMPONENTS (SMART COMPONENT)
export function Counter () {
    const title = "Counter"
    // let count = 0;
    // [VARIABLE_NAME, SET_VALUE]
    const [count, setCount] = useState(0)

    const handleDecrement = () => {
        console.log('Decrement is clicked')
        // count -= 1
        setCount(count - 1)
        console.log('new value decrement:', count)
    };

    const handleIncrement = () => {
        console.log('Increment is clicked')
        // count += 1
        const result = count + 1
        setCount(result)
        console.log('new value increment:', count)
    }

    const handleReset = (newCount: number) => {
        console.log('Reset is clicked on: ', newCount)
        // count = newCount;
        setCount(newCount)
        console.log('new value reset:', count)
    }

    return (
        <div>
            <h2>{title}</h2>
            <h3>Current counter: <strong> {count} </strong></h3>

            <button onClick={() => { handleDecrement() }}>-</button>
            <button onClick={() => handleReset(50)}>Reset</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}