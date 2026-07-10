import react from 'react';
import CallbackChild from './CallbackChild';

function Callback(){

    const [count, setCount] = react.useState(0);

    const child = react.useCallback(()=>{
        console.log("Child Function Called");
    }, []);

    return(
        <>
        <h1>CallBack JSX</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <CallbackChild child={child}/>
        </>
    )
}

export default Callback