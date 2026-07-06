import react from 'react'
import './App.css'
import Child from './Child';
import Home from './Home';
import Box1 from './Box1';
import Box2 from './Box2';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';


function App() {
  const x = 5;

  const num = [1,2,3,4,5];
  //for iteration use only map and foreach, not for loop, while loop, do while loop
  const bis = num.map((value) => 2*value);

  const message = "Welcome";

  const fruits = [ "Apple", "Mango", "Orange" ];

  const person = {
    name: "John",
    age: 30,
    city: "New York"
  }

  const users = [
    {id: 1, name: "John", age: 30},
    {id: 2, name: "Jane", age: 25},
    {id: 3, name: "Bob", age: 35}
  ]

  const [a,b,c] = fruits;

  const {name, age, city} = person;

  const [firstUser, secondUser, thirdUser] = users;

  //nested destructing
  const [{name: firstUserName, age: firstUserAge}, {name: secondUserName, age: secondUserAge}] = users;

  //default set
  const {name2 , mobile = "1234567890"} = person;

  //spread operator

  const newPerson = {...person, country: "USA"};

  const arr1 = [1,2];
  const arr2 = [3,4];

  const arr3 = [...arr1, ...arr2];

  const person1 = {id: 1, name: 'John', age: 30};
  const person2 = {id: 2, name: 'Jane', age: 25};
  const person3 = {...person1, ...person2}

  //rest operator
  const arr = [1,2,3,4,5,6]

  const [d,f,...g] = arr;

  //props transfer msg
  const nameTransfer = "Child Prop Name Transfer";
  const contact = "12344";
  const addr = "New Delhi"

  //child -> parent transfer
  const getData = (msg)=> {
      console.log(msg);
  }

  const path = window.location.pathname;
  
  const pages = () => { 
    if(path === "/about") {
      return <About/>
    } else if(path === "/contact") {
      return <Contact/>
    } else {
      return <Home/>
    }
  }

  return (
    <>
    <Nav/>
    {pages()}
    {/* Operators and basic functionality of rest */}
    <section>
        <h1>Learning React</h1>
        <div>Age is : {x} New Array: {bis}</div>
        <div> <ul> {bis.map((value, index)=> <li key = {index}>{value}</li> )} </ul></div>


        <div> {message} </div>

        <div> Name: {person.name}, Age : {person.age}, City: {person.city}</div>

        <section> 
          <ul>
            {users.map((user, index) => <li key={index}> Name: {user.name}, Age: {user.age}</li>)}
          </ul>
        </section>

        <div> Fruits: {a}, {b}, {c} </div>

        <div> Deconstructing: Name: {name}, Age: {age}, City: {city} </div>

        <div> Users: {firstUser.name}, {secondUser.name}, {thirdUser.name} </div>

        <div> Nested Destructing: FirstUserName: {firstUserName}, SecondUserName: {secondUserName} </div>

        <div> Default Values: Name: {name2}, Mobile: {mobile}</div>

        <div> Spread Operator: {newPerson.name}, {newPerson.age}, {newPerson.city}, {newPerson.country} </div>

        <div> Array Spread: {arr3}</div>

        <div> {person3.name}, {person3.age} </div>

        <div> Rest Operator: d: {d}, f: {f}, g:{g}</div>

        <div>
            {x==1 ? "Kia": "Maruti"}
        </div>
    </section>

    {/* Props and child  */}
    <section>
      <Child childNameTransfer={nameTransfer} contact={contact} address={addr} sendData={getData}></Child>
    </section>

    {/* css and img component */}
    <Home/>

    {/* 2 children component and event onclick behaviour etc */}
    <Box1>
      <h4> H4 Box1 component</h4>
    </Box1>

    <Box2>
      <h4> H4 Box2 component</h4>
    </Box2>

    </>
  )
}

export default App
