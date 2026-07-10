import react from 'react';

function CallbackChild({child}){

    console.log("CallbackChild Rendered BitCode");

    return(
        <>
        <h1>CallBackChild JSX</h1>
        <button onClick={child}>Child</button>
        </>
    )
}

export default react.memo(CallbackChild)