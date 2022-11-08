import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Others/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Logins/Login";
import Register from "../../Pages/Logins/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../Pages/Service/AddService/AddService";
import Services from "../../Pages/Service/Services/Services";
import ServiceDetails from "../../Pages/Service/ServiceDetails/ServiceDetails";
import MyReviews from "../../Pages/Review/MyReviews/MyReviews";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <h2 className="text-3xl font-bold">Error Page</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/popular-services')
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/popular-services')
      },
      {
        path: '/services',
        element: <Services></Services>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/add-service',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/my-reviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
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
        path: '/blog',
        element: <Blog></Blog>
      }
    ],
  }
]);