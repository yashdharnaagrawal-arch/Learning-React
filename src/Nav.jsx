import react from 'react'
import Contact from './Contact';
import About from './About';

const Nav = () => {
    return(
        <>
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px", backgroundColor: "#282c34", color: "white"}}>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo" />
            </div>

            <div>
                <ul className="menu">
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Nav