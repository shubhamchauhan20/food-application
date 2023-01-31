import React from "react";

const Profile= () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h2>Profile Functional Component</h2>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(1)}}>count</button>
        </div>
    )
};

export default Profile;