import react from 'react';
import Profile from './Profile';

function Signin({setAppUser}){

    const [email, setEmail] = react.useState("");
    const [password, setPassword] = react.useState("");

    const demo ={
        email: "bit@gmail.com",
        password: "admin123"
    }

    const [msg, setMsg] = react.useState("");

    const matchFunction = () => {
        if(email === demo.email && password === demo.password){
            setMsg("Login Successful");
            setAppUser(demo);
            alert("Login Successful");
            return <Profile/>
        }else{
            setMsg("Login Failed");
        }
    }

    return(
        <>
        <h1> Signin Page</h1>
        <h4> Please Signin to access Profile Page</h4>
        <input type="email" value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={matchFunction}> Signin</button>
        <p>{msg}</p>
        </>
    )
}

export default Signin