import react from 'react';
import Child3UseContext from './Child3UseContext';


function Child2UseContext(){

    return(
        <>
        <h4> H4 inside Child2UseContext component</h4>
        <Child3UseContext/>
        </>
    )
}

export default Child2UseContext