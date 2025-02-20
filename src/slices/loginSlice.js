import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginPost } from '../api/memberApi'
import { getCookie, removeCookie } from '../util/cookieUtil'

const initState ={
    email:''
}

const loadMemberCookie = () => {            //로그인한 정보가 나타나게
    const memberInfo = getCookie('member')  //쿠키이름 넣어줌
    if(memberInfo && memberInfo.nickname){
                             //닉네임 인코딩되어 가져왔으니 디코딩해줌(풀어줌)
        memberInfo.nickname = decodeURIComponent(memberInfo.nickname)
    }
    return memberInfo
}
                            //얘 나오면 비동기통신 수횅 할거야
export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
    return loginPost(param)
})

const loginSlice = createSlice({
    name: 'LoginSlice',
    initialState: loadMemberCookie() || initState, //쿠키값이 없다면 초기값 사용

    reducers:{
        login:(state,action) => {
            console.log("login......", action)
            const data = action.payload
            return {email:data.email}
        },
        logout:(state,action) => {
            console.log("logout......")
            removeCookie('member')   //쿠키삭제 -> 이거 안하면 로그아웃해도 쿠키 살아있어서 탈취가능
            return {...initState}
        }
    },
    //createAsyncThunk 랑 같이 다니는 extraReducer
    //비동기통신에서 호출하는 함수를 작성하고 실제 동작은 extraReducer가 함
    extraReducers:(builder) => {
        builder.addCase( loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfilled")

            const payload = action.payload
            return payload
        })
        .addCase(loginPostAsync.pending, (state, action) => {
            console.log("pending")
        })
        .addCase(loginPostAsync.rejected, (state, action) => {
            console.log("rejected")
        })
    }
})
export const {login,logout} = loginSlice.actions   //loginSlice가 actions 실행 되었을때 login, logout을 던져줌
export default loginSlice.reducer