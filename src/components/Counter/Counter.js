import { useReducer } from "react";

const initialCount = 0;
const initialState = { count: initialCount };

// function init(initialCount) {
//     return { count: initialCount };
// }

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: action.payload };
        default:
            return state;
    }
};

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [state, dispatch] = useReducer(reducer, initialCount, init);

    return (
        <div>
            <div>Counter: {state.count}</div>
            <div>
                <button className="btn" onClick={() => dispatch({ type: "increment" })}>
                    +
                </button>
                <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
                    -
                </button>
            </div>
            <div>
                <button
                    className="btn"
                    onClick={() => dispatch({ type: "reset", payload: initialCount })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
