import react from 'react'
import './App.css'
import Child from './Child';
import Home from './Home';
import Box1 from './Box1';
import Box2 from './Box2';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import ChildUseContext from './ChildUseContext';
import {userContext} from './context/UserContext';
import Memo from './Memo';


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

  //react hooks useState example
  const[num2, setNum2] = react.useState(2);

  const[name3, setName3] = react.useState("Dharna");

  const[car, setCar] = react.useState([" BMW ", " Audi ", " Mercedes "]);

  const[person4, setPerson4] = react.useState({name: "John", age: 30});

  let count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  const [password, setPassword] = react.useState("");

  const login = () => {
    if (password === "admin123") {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  };

  const [isLoggedIn, setIsLoggedIn] = react.useState(false);

  const [check, setCheck] = react.useState(0);
  const [data, setData] = react.useState([]);
  const [list, setList] = react.useState(0);

  useEffect(() => {
    console.log("List changed:", list);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((apiData) => {
        console.log(apiData); 
        const startList = list * 5;
        const endList = startList + 5;
        const slicedData = apiData.slice(startList, endList);
        setData((e) => [...e, ...slicedData]);})
  }, [list]);

  let count2 = 0;

  function increase2() {
    count2++;
    console.log(count2);
    document.getElementById("counter").innerText = count2;
  }

  const userObject = {
    name: "Dharna",
    age: 30,
    city: "New Delhi"
  }


  return (
    <>
    {/* useMemo Example */}
    <Memo/>
    {/* useContext Example */}
    <userContext.Provider value={userObject}>
      <ChildUseContext />
    </userContext.Provider>
    <h1 id="counter">{count2} gfegerhftnft</h1>

    <button onClick={increase2}>Increment2</button>

    {/* UseEffect Example */}
    <div>
      <h1>{check}</h1>
      <button onClick={() => setCheck(check + 1)}>
        Increase Check
      </button>
      <h1> Data from fetch API</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
      <button onClick={() => setList(list + 1)}>Load Title More</button>
    </div>
    <div>{isLoggedIn ? <Login /> : <Register />}</div>
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
    {/* without reach hook use state problem, count will not increase on click because react will not re-render the component when count is changed, so we need to use react hook useState to solve this problem. */}
    <h1>{count}</h1>

    <button onClick={increase}>
      Increment
    </button>
    {/* react hooks example */}
    {/* login page example */}
    <div>
      <h2>Login</h2>

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login Password</button>
    </div>
    
    <div>Num: {num2}</div>
    <button onClick={()=> setNum2(num2+1)}>Increment</button>
    <button onClick={()=> setNum2(num2-1)}>Decrement</button>

    <div>Name: {name3}</div>
    <button onClick={()=> setName3("Dharna Agrawal")}>Change Name</button>

    <div>Car: {car}</div>
    <button onClick={()=> setCar([...car, " Toyota "])}>Add Car</button>
    <button onClick={()=> setCar(car.filter((value)=> value !== " Toyota "))}>Remove Car</button>

    <div>Person: {person4.name}, {person4.age}</div>
    <button onClick={()=> setPerson4({...person4, name: "Dharna Agrawal"})}>Change Name</button>
    <button onClick={()=> setPerson4({...person4, age: 31})}>Change Age</button>

    <input type="text" onChange={(e)=> setName3(e.target.value)} placeholder="Enter Name" />

    <div>{name3}</div>
    <input type="text" onChange={(e)=> setName3(e.target.value)} placeholder="Enter Name" />

    <div>{person4.name}</div>
    <div>{person4.age}</div>

    <input type="text" onChange={(e)=> setPerson4({...person4, name: e.target.value})} placeholder="Enter Name" />
    

    {/* react router example */}
    <h1>React Router Example</h1>

    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    {/* {pages()} */}
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
