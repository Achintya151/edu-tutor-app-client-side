import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Layouts/ErrorPage";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Categories/Category/Category";
import Course from "../../Pages/Categories/Course/Course";
import CheckOutPage from "../../Pages/CheckOutPage/CheckOutPage";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
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
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://edututor-app-server.vercel.app/courses')
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://edututor-app-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://edututor-app-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://edututor-app-server.vercel.app/courses/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);