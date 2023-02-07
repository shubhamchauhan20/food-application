import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import UserContext from "../utils/UserContext";


const Title = () => {
    return (
        <a href="/">
          <img src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo" className="h-28 p-2"/>
        </a>
    )
}

//composing components
const HeaderComponent = () => {
    const [isloggedIn, setIsLoggedIn] = React.useState(false);
    const { user } = React.useContext(UserContext);

    return(
        <div className="flex justify-between bg-cyan-500 shadow-lg">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-5"><Link to="/">Home</Link></li>
                    <li className="px-5"><Link to="/about">About</Link></li>
                    <li className="px-5"><Link to="/contact">Contact</Link></li>
                    <li className="px-5"><Link to="/instamart">InstaMart</Link></li>
                    <li className="px-5"><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            <div className="p-2 m-5 hover:bg-cyan-400 shadow-sm bg-cyan-100 border-2 border-solid rounded-md ">
                {isloggedIn ? (<button onClick={()=>{setIsLoggedIn(false)}}>LogOut</button>): (<button onClick={()=>{setIsLoggedIn(true)}}>LogIn</button>)}
            </div>
            {/* {user.name} */}
            
            {/* <button onClick={loggedOut}>LogIn</button>
            <button>LogOut</button> */}
        </div>
    )
}

export default HeaderComponent;