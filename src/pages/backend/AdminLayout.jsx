import { useEffect, useState } from "react"
import axios from 'axios';
import Login from "./Login";
import AdminProducts from "./AdminProducts";
import Loading from "../../components/Loading";
// 環境變數
const {VITE_BASE_URL, VITE_API_PATH} = import.meta.env; 

function AdminLayout(){
    const [products, setProducts] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [pages,setPages] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // 取得產品
    const getProducts = async(page =1)=>{
        try {
        const res = await axios.get(`${VITE_BASE_URL}/api/${VITE_API_PATH}/admin/products?page=${page}`);
        setProducts(res.data.products);
        setPages(res.data.pagination)
        } catch (error) {
        console.log('取得產品失敗:',error)
        }
    }


    useEffect(()=>{
        const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)onion\s*=\s*([^;]*).*$)|^.*$/,"$1",
        );
        if(token){
        axios.defaults.headers.common['Authorization'] = token;
        }
        const checkLogin = async()=>{
        try {
            await axios.post(`${VITE_BASE_URL}/api/user/check`);
            setIsAuth(true)
            getProducts();
            setIsLoading(false);
        } catch (error) {
            console.log('驗證錯誤：請重新登入',error)
            setIsLoading(false);
        }
        }
        checkLogin();
    },[]);



    return (
        <>
        <Loading isLoading={isLoading} />
        {isAuth ? <AdminProducts getProducts ={getProducts} products={ products } pages={pages}/> : <Login getProducts = {getProducts} setIsAuth = {setIsAuth}/>}
        </>
    )
    }

export default AdminLayout;