import React from "react"


 const Section = ({ title, description}) => {
    const [isVisible, setIsVisible] = React.useState(false)
    return (
        <div className="border border-black">
            <h3>{title}</h3>
            {isVisible? (<button onClick={()=> setIsVisible(false)} className="bg-cyan-400 hover:bg-cyan-700 border border-solid">hide</button>):
            (<button onClick={()=>setIsVisible(true)} className="bg-cyan-400 hover:bg-cyan-700 border border-solid">show</button>)}
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    return (
        <div>
            <h1>Instamart</h1>
            <Section className="border-solid border-orange-700" title={"About Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
        </div>
    )
}


export default Instamart;