import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useCallback} from "react";

const ReadPage = () => {
    const {tno} = useParams()

    const navigate = useNavigate()
    const [queryParams] = useSearchParams()

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams( {page, size}).toString()

    const moveToModify = useCallback( (tno) => {
        navigate({
            pathname: `/todo/modify/${tno}`,  //주소 연결은 백틱 ``
            search: queryStr
        })
    }, [tno, page, size])

    const moveToList = useCallback( ()=>{
        navigate({
            pathname:`/todo/list`,
            search: queryStr
        })
    },[page,size] )

    return(
        <div className="text-3xl font-extrabold">
            글 상세보기 {tno}
            <div>
                <button onClick={ () => moveToModify({tno})}>수정 테스트</button>
                <button onClick={ ()=> moveToList()}>목록보기 테스트</button>
            </div>
        </div>
    );
}
export default ReadPage;