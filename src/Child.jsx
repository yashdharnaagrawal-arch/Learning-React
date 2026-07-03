import react from 'react'
// import Child2 from './Child2.jsx'

//App -> Home -> NewComp : Transfer data  ??????


// function Child({childNameTransfer}){
// function Child(props){
function Child({childNameTransfer, sendData, ...rest}){


    return(
        <>
        {/* <h1> Props way of tranfer Data: {childNameTransfer} </h1> */}
        {/* <h1>Second Props way of tranfer Data: {props.childNameTransfer}</h1> */}
        <h1>Third Props way of tranfer Data: {childNameTransfer}, Address: {rest.address}, Contact: {rest.contact}</h1>

        {/* function call from parent */}
        <button onClick={()=> sendData("Hello Parent!")}>
            Click Me!
        </button>
        {/* <Child2 childNameTransfer={childNameTransfer}></Child2> */}
        </>
    )
}

export default Child