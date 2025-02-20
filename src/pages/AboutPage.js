import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import useCustomLogin from "../hooks/useCustomLogin";

const AboutPage = () => {
    const {isLogin, moveToLoginReturn} = useCustomLogin()

    //로그인상태가 아니면 로그인 창으로 이동시킴
    if(!isLogin){
        return moveToLoginReturn()
    }
    return (
        <BasicLayout>
            <div className="text-3xl">어바웃페이지입니다</div>
        </BasicLayout>
    )
}
export default AboutPage;