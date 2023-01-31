import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            useInfo: {
                name: "Dummy Name",
                location: "Dummy Location"
            }
        }
        // console.log("Constructer");
    }

    async componentDidMount() {
        // console.log("componentDidMount");
        const data = await fetch(" https://api.github.com/users/shubhamchauhan20");
        const json = await data.json();
        console.log(json);
        this.setState({
            useInfo: json,
        });
    }

    componentWillUnmount(){
        // console.log("ComponentWillUnmount");
    }

    render (){
        console.log("render");
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.useInfo.avatar_url} />
                <h2>Name: {this.state.useInfo.login}</h2>
                <h2>id: {this.state.useInfo.id}</h2>
            </div>
        )
    }
}

export default ProfileClass;