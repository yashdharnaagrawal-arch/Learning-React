import react from 'react'
import './Home.css'
import InvestorImage from './assets/InvestorParadiseLogo.png'


function Home(){

    const printInput = (e) =>{
        console.log(e.target.value);

        const h1Print = document.getElementById("h1-id-home");
        h1Print.innerText = e.target.value;
    }

    const showMessage = () =>{
        alert("Hello from Home Component!");
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Link clicked");
    };

    const hover = () => {
        console.log("Mouse is over");
    };

    const greet = (name) => {
        alert("Hello " + name);
    };

    const details = (e, name, age) => {
        console.log(name);
        console.log(age);
        console.log(e.target.innerText);
    };

    return(
        <>
        <h2 style={{color: "red", fontSize: "30px"}}> Home H2 Tag!</h2>
        <h3 className="home-h3"> Home H3 Tag Styling</h3>
        {/* <img src={InvestorImage} alt="Investor logo" className = "img-css-home-class"/> */}

        <div>
            <input type='text' onChange={printInput}/>
            <h1 id='h1-id-home'> </h1>
        </div>

        <button onClick={showMessage}>
            Click Me HOME BUTTON
        </button>

        <form onSubmit={submitForm}>
            <input type="text" />
            <button>Submit</button>
        </form>

        <a href="https://google.com" onClick={handleClick}>
            Google
        </a>

        <h2 onMouseOver={hover}>
            Hover over me
        </h2>

        <button onClick={() => greet("BitCode")}>
            Say Hello
        </button>

        <button onClick={(e) => details(e, "Rahul", 25)}>
            Show Details
        </button>
        </>
    )
}

export default Home;