import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddToys from "../pages/AddToys";
import Blogs from "../pages/Blogs";
import MyToys from "../pages/MyToys";
import AllToys from "../pages/AllToys";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DollsDetailsOne from "../pages/DollsDetailsOne";
import DollDetailsTwo from "../pages/DollDetailsTwo";
import DollDetailsThree from "../pages/DollDetailsThree";







const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/addToys',
                element: <AddToys></AddToys>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/dollOne/:id',
                element: <DollsDetailsOne></DollsDetailsOne>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/dollTwo/:id',
                element: <DollDetailsTwo></DollDetailsTwo>
            },
            {
                path: '/dollThree/:id',
                element: <DollDetailsThree></DollDetailsThree>
            }


        ]
    }
])


export default router;