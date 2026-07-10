import react from 'react';
import {userContext} from './context/UserContext';

function Child3UseContext(){

    const userDetails = react.useContext(userContext);

    return(
        <>
        <h4> H4 inside Child3UseContext component</h4>
        <p>User Details</p>
        <p>Child3UseContext Name: {userDetails.name}</p>
        <p>Child3UseContext Age: {userDetails.age}</p>
        <p>Child3UseContext City: {userDetails.city}</p>
        </>
    )
}

export default Child3UseContext