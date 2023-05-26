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
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy";
import ViewDetails from "../pages/ViewDetails";







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
                element: < AddToys />
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
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
                path: '/details/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path: '/dollOne/:id',
                element: <PrivateRoute><DollsDetailsOne></DollsDetailsOne></PrivateRoute>,

            },
            {
                path: '/dollTwo/:id',
                element: <PrivateRoute><DollDetailsTwo></DollDetailsTwo></PrivateRoute>
            },
            {
                path: '/dollThree/:id',
                element: <PrivateRoute><DollDetailsThree></DollDetailsThree></PrivateRoute>
            },
            {
                path: '/updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },


        ]
    }
])


export default router;