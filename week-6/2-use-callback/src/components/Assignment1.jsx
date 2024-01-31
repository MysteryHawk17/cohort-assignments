import { useState, useCallback } from "react";
import PropTypes from 'prop-types'
// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(() => {
        setCount((count) => {
            return count + 1;
        })
    },[]
    )

    const handleDecrement = useCallback(() => {
        setCount((count) => {
            return count - 1
        });
    }, []);
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
}

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);

CounterButtons.propTypes = ({
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func
})