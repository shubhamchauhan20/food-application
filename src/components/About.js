// import { Outlet } from "react-router-dom";
// import Profile from "../Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

// const About=() => {
//     return (
//         <div>
//             <h1>About us Page</h1>
//             <p>This is the Namaste React Live course chapter- 07- finding the Path</p>
//             <ProfileClass name={"shubham"} />
//             {/* <Profile name={"shubham"} /> */}
//         </div>
  
//     )
// }

class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent-constructor");
    }

    componentDidMount(){
        // console.log("componentDidMount");
    }
    render(){
        return (
            <div>
                {/* {console.log("Parent Render")} */}
                <h1>About us Page</h1>
                <p>This is the Namaste React Live course chapter- 07- finding the Path</p>
                <ProfileClass />
            </div>
        )
    }
}

export default About;