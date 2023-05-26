import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import MyToy from "../pages/MyToy/MyToy";
import AddToy from "../pages/AddToy/AddToy";
import Login from "../pages/Login/Login";
import Register from "../pages/Registration/Register";
import PrivateRoute from "./privateRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>
            },
            {
                path: '/myToys',
                element:<PrivateRoute><MyToy></MyToy></PrivateRoute>
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/singleToyDetails/:id',
                element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://my-toy-house-server.vercel.app/toys/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updateToy/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({params})=> fetch(`https://my-toy-house-server.vercel.app/toys/${params.id}`)
            },
        ]
    }
])

export default router