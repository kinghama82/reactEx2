import {lazy, Suspense} from "react";
import todoRouter from "./todoRouter";
import productsRouter from "./productsRouter";

const {createBrowserRouter} = require("react-router-dom");
const Loading = <div>Loading 중입니다</div>
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy( () => import("../pages/todo/IndexPage") );
const ProductsIndex = lazy( () => import("../pages/products/IndexPage"));

//기본라우팅 설정(부트 메인컨트롤러 역할?)
const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },

    {   //path는 중괄호 한개당 한개만 들어감( url 주소니까 )
        path: 'about',
        element: <Suspense fallback={Loading}><About/></Suspense>
    },

    {
        path: 'todo',
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    },
    
    {
        path: 'products',
        element: <Suspense fallback={Loading}><ProductsIndex/></Suspense>,
        children: productsRouter()
    },
])

export default root;