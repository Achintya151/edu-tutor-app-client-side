import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Categories/Category/Category";
import Course from "../../Pages/Categories/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

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
                element: <Courses></Courses>
            },
            {
                path: 'category/:id',
                element: <Category></Category>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
]);