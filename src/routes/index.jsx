import Home from '../pages/frontend/Home';
import Layout from '../pages/frontend/Layout';
import Carts from '../pages/frontend/Carts';
import Checkout from '../pages/frontend/Checkout';
import Products from '../pages/frontend/Products';
import SingleProduct from '../pages/frontend/SingleProduct';
import NotFound from '../pages/NotFound';
import AdminLayout from '../pages/backend/AdminLayout'

const routes = [
    {
        path:'/',
        element: <Layout />,
        children: [
            {
                index: true, //path在第二層以後不加入 / ,''繼承上層
                element: < Home/>
            },
            {
                path: 'carts',
                element: <Carts/>
            },
            {
                path: 'checkout',
                element: <Checkout/>
            },
            {
                path: 'products',
                element: < Products/>,
            },
            {
                path: 'singleProduct/:id',
                element: <SingleProduct />
            },
        ]
    },
    {
        path:'/adminLayout',
        element: <AdminLayout />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes;