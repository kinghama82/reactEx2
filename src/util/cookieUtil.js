import { Cookies} from 'react-cookie'

const cookies = new Cookies()

export const setCookie = (name, value, days) => {
    
    const expires = new Date()

    expires.setUTCDate(expires.getUTCDate()+ days) //보관기간
    //쿠키는 이름과 값 그리고 경로 설정해줘야함  / 이후의 하위 경로에서 쿠키를 사용할 거임
    return cookies.set(name, value, {path:'/', expires:expires})
}

export const getCookie = (name) => {
    return cookies.get(name)
}

export const removeCookie = (name, path='/') => {
    cookies.remove(name, {path})
}
