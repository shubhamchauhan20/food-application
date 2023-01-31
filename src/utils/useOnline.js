import React from "react";

const useOnline = () => {

    const [isOnline, setIsOnline] = React.useState(true);

    React.useEffect(()=>{

        const handlerOnline = ()=> {setIsOnline(true)};
        const handlerOffline = ()=> {setIsOnline(true)};

        window.addEventListener("online", handlerOnline);
        window.addEventListener("offline", handlerOffline);

        return ()=> {
            window.removeEventListener("online", handlerOnline)
            window.removeEventListener("offline", handlerOffline)
        }
    },[])
    
    return isOnline;
}

export default useOnline;