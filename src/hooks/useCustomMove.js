import { useState } from "react";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

const getNum = (param, defaultValue)=> {

    if(!param){
        return defaultValue
    }
    return parseInt(param)
}

const useCustomMove = ()=>{

    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'),1)
    const size = getNum(queryParams.get('size'),10)

    const queryDefalut = createSearchParams({page,size}).toString()

    const moveToList = (pageParam) => {
        let queryStr = ''

        if(pageParam){
            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(pageParam.size, 10)

            queryStr = createSearchParams({page:pageNum, size:sizeNum}).toString()
        }else {
            queryStr = queryDefalut
        }
        setRefresh(!refresh)

        navigate({
            pathname: `../list`,
            search:queryStr
        })
    }
    const moveToModify = (num) => {
        console.log(queryDefalut)
        navigate({
            pathname: `../modify/${num}`,
            search:queryDefalut
        })
    }
    const moveToRead = (num) => {
        console.log(queryDefalut)
        navigate({
            pathname:`../read/${num}`,
            search:queryDefalut
        })
    }

    return {moveToList, moveToRead, moveToModify, refresh, page, size}
}
export default useCustomMove;