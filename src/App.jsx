
import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import './components/index.css';
// import 'index.css';
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestrauntMenu";
// import Profile from "./Profile";
import ProfileClass from "./components/ProfileClass";
// import Instamart from "./components/Instamart";

// const Instamart= lazy(()=> import("./components/Instamart"));
const Instamart = React.lazy(() => import("./components/Instamart"));


const Footer = () => {
    return (
        <h1>Footer</h1>
    )
}

const AppLayout = () => {
    return (
        <React.Fragment>
            <HeaderComponent />
            <Outlet />
            <Footer />
            {/* <Shimmer /> */}
        </React.Fragment>
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
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestrauntMenu />
            },
            {
                path: "/instamart",
                element: <Suspense><Instamart /></Suspense>
            },
        ]
    },

])




const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />)