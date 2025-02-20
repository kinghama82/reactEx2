import axios from "axios"
import {API_SERVER_HOST} from "./todoApi"

const host = `${API_SERVER_HOST}/api/member`

export const loginPost = async (loginParam) => {
    //포스트맨에 x-www에 적는게 이 문장 때문임      일반적인 문자전송할때 사용함
    const header = {headers : {"Content-Type" : "x-www-form-urlencoded"}}

    const form = new FormData()
    form.append('username', loginParam.email)
    form.append('password', loginParam.pw)

    const res = await axios.post(`${host}/login`, form, header)

    return res.data
}