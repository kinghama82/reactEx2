import { useState } from "react"
import useCustomLogin from "../../hooks/useCustomLogin"
import { setCookie } from "../../util/cookieUtil"

const initState = {
    email:'',
    pw:''
}
const LoginComponent = () => {
    //상태값 관리 할 객체 생성
    const [loginParam, setLoginParam] = useState({...initState})

    //useCustomLogin() 추가로 코드가 간결해 진다
    const {doLogin, moveToPath} = useCustomLogin()
   
    const handleChange = (e) => {
        //이벤트처리
        loginParam[e.target.name] = e.target.value
        //...loginParam 변경된 값으로 설정
        setLoginParam({...loginParam})
        }
        const handleClickLogin = (e) =>{
            //동기화된 호출에 사용
            //dispatchEvent(login(loginParam))

            //비동기 호출에 사용
            // dispatch(loginPostAsync(loginParam))
            // .unwrap()
            // .then(data => {
            //     console.log("after unwrap....")
            //     console.log(data)

            doLogin(loginParam)
            .then(data => {
                console.log(data)
            
                if(data.error){
                    alert("이메일과 패스워드를 확인 후 다시 입력해주세요")
                }else{
                    setCookie('member', JSON.stringify(data), 1)
                    alert("로그인 성공")
                    // navigate({pathname:`/`} , {replace:true}) //뒤로 가기 했을때 로그인 화면은 볼 수 없도록
                    moveToPath('/')
                }
            })
        }
        return(
            <div className="border-2 border-sky-200 mt-10 m-2 p-4">
                <div className="flex justify-center">
                    <div className="text-4xl m-4 p-4 font-extrabold text-blue-500">Login component</div>
                </div>

                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-full p-3 text-left font-bold">Email</div>
                        <input className="w-full p-3 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="email"
                               type={'text'}
                               value={loginParam.email}
                               onChange={handleChange}>
                        </input>
                    </div>
                </div>
                <div className="flex justify-center">    
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-full p-3 text-left font-bold">Password</div>
                        <input className="w-full p-3 rounded-r border border-solid border-neutral-500 shadow-md"
                               name="pw"
                               type={'password'}
                               value={loginParam.pw}
                               onChange={handleChange}>
                        </input>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full justify-center">
                        <div className="w-2/5 p-6 flex justify-center font-bold">
                            <button className="rounded p-4 w-36 bg-blue-500 text-xl text-white"
                                    onClick={handleClickLogin}>
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default LoginComponent; 