import react from 'react'
import Contact from './Contact';
import About from './About';
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <>
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px", backgroundColor: "#282c34", color: "white"}}>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo" />
            </div>

            <div>
                <ul className="menu">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Nav