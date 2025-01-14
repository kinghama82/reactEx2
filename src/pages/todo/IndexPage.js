import BasicLayout from "../../layouts/BasicLayout";
import {Link, Outlet} from "react-router-dom";

const IndexPage = () => {
    return(
        <BasicLayout>
            <div className="w-full flex m-2 p-2">
                <Link to={'/todo/list'} className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">LIST</Link>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">ADD</div>
            </div>

            <div className="flex flex-wrap w-full">
                <Outlet></Outlet>
            </div>

        </BasicLayout>
    );

}
export default IndexPage;