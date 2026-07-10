import react from 'react';

function Memo(){

    const [count, setCount] = react.useState(0);
    const [text, setText] = react.useState("");

    // console.log("Memo Component Rendered");

    // const num = [1,2,3,4,5,6,7,8,9,0,48,1,22]
    // const sortNum = num.sort((a,b) => console.log(a-b));

    const sortMemo = react.useMemo(() => {
        console.log("Sorting Memo");
        const num = [1,2,3,4,5,6,7,8,9,0,48,1,22]
        return num.sort((a,b) => console.log(a-b));
    }, [count]);

    console.log(sortMemo);

    return(
        <>
        <h1> Use Memo</h1>
         <p>Memo Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Memo Count</button>
        <h2>Memo Text: {text}</h2>
        <input type="text" placeholder='Type in Memo Something' onChange={(e) => setText(e.target.value)} />
        </>
    )
}

export default Memo