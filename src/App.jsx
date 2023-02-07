
import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
import ProfileClass from "./components/ProfileClass";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";


// const Instamart= lazy(()=> import("./components/Instamart"));
const Instamart = React.lazy(() => import("./components/Instamart"));


const Footer = () => {
    return (
        <h1>Footer</h1>
    )
}

const AppLayout = () => {
    const [user, setUser] =  React.useState({
        name: "Shubham Chauhan",
        email: "shubhamcahuhan55t@gmail.com"
    })
    return (
        <UserContext.Provider value={{user: user, setUser: setUser}}>
            <HeaderComponent />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    )
}

const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <ProfileClass />,
                    }
                ]
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restaurant/:id",
                element: <RestrauntMenu />
            },
            {
                path: "/instamart",
                element: <Suspense><Instamart /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/cart",
                element: <Cart />
            }
            
        ]
    },

])




const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />)