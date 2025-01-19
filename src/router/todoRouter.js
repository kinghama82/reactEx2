import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";

const Loading = <div>Loading 중입니다</div>
const TodoList = lazy(() => import("../pages/todo/ListPage"));
const TodoRead = lazy( () => import("../pages/todo/ReadPage"))
const TodoAdd = lazy( () => import( "../pages/todo/AddPage"))
const TodoModify = lazy(()=> import("../pages/todo/ModifyPage") )

const todoRouter = () => {
    return[
        {
            path: 'list',
            element: <Suspense fallback={Loading}><TodoList/></Suspense>
        },
        {     //todo 로만 호출해도 자동으로 todo/list 로 이동
            path: '',
            element: <Navigate to={'list'}></Navigate>
        },
        {
            path: "read/:tno",
            element: <Suspense fallback={Loading}><TodoRead/></Suspense>
        },
        {
            path: "add",
            element: <Suspense fallback={Loading}><TodoAdd/></Suspense>
        },
        {
            path: "modify/:tno",
            element: <Suspense fallback={Loading}><TodoModify/></Suspense>
        }
    ];
}
export default todoRouter;