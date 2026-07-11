import react from 'react';

const initialState = {count: 0};

function rec(state, action){
    switch(action.type){
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count - 1};
        case "reset":
            return initialState;
    }
}

function Reducer(){

    const [state, dispatch] = react.useReducer(rec, initialState)

    return(
        <>
        <h2>Reducer component</h2>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </>
    )
}

export default Reducer