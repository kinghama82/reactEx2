import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import ExRateComponent from "../components/ExRateComponent";

const MainPage = () => {
    return (

        <BasicLayout>
        <div className="text-3xl">
            <div>메인페이지 입니다</div>
            <ExRateComponent></ExRateComponent>
        </div>
        </BasicLayout>
    );
}
export default MainPage;