import {Link} from "react-router-dom";
import ExRateComponent from "../ExRateComponent"
import {useSelector} from "react-redux";

const BasicMenu = ()=>{
    //useSelector()로 상태를 선택해서, 상태가 바꼈을때 useDispatch()로 반환
    const loginState = useSelector(state=>state.loginSlice);

    console.log("loginState......" + loginState)
    return(
        <nav id="navbar" className="flex bg-blue-700">
            
            <div className="w-4/5 bg-gray-500">
                <ul className="flex p-4 text-white font-bold">
                    <li className="pr-6 text-2xl">
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li className="pr-6 text-2xl">
                        <Link to={'/about'}>About</Link>
                    </li>
                    {/*이메일 값이 있다면 아래 메뉴를 출력, 이메일이 없다면 아래메뉴는 안보임
                      삼항 연산자 -->  조건 ? 참 : 거짓 */}
                    {loginState.email ? 
                    <>
                        <li className="pr-6 text-2xl">
                            <Link to={'/todo'}>Todo</Link>
                        </li>
                        <li className="pr-6 text-2xl">
                            <Link to={'/products'}>Products</Link>
                        </li>
                    </> : <></>}
                </ul>
            </div>
            <div className="flex justify-end bg-gray-500 h-full w-full">
                        <ExRateComponent></ExRateComponent>
            </div>

            <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
            {! loginState.email ?
                <div className="text-white text-2xl font-bold m-1 rounded">
                    <Link to={'/member/login'}>Login</Link>
                </div>
                :
                <div className="text-white text-2xl font-bold m-1 rounded">
                    <Link to={'/member/logout'}>Logout</Link>
                </div>
            }   
            </div>
        </nav>
    );
}
export default BasicMenu;