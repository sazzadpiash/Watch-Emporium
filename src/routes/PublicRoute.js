import Main from "../layout/Main";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import CheckoutForm from "../pages/CheckoutForm/CheckoutForm";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/watch/:id',
                element: <SingleProduct></SingleProduct>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/checkout/:price',
                element: <CheckoutPage></CheckoutPage>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
])