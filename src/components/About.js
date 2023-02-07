// import { Outlet } from "react-router-dom";
// import Profile from "../Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
                <UserContext.Consumer>
                    {({user})=> <h4 className="text-4xl text-red-500">{user.name}- {user.email}</h4>}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default About;