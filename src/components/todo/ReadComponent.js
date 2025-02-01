import {useEffect, useState} from "react";
import {getOne} from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    tno: 0,
    title:'',
    writer: '',
    dueDate:null,
    complete:false
}

const ReadComponent = ({tno})=> {
    const [todo, setTodo] = useState(initState)

    const {moveToList, moveToModify} = useCustomMove()
    useEffect( ()=> {
        getOne(tno).then(data => {
            console.log(data) // 잘 가져왔나 확인용 콘솔로그
            setTodo(data)
        })
    },[tno])
    return(
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {makeDiv('TNO', todo.tno)}
            {makeDiv('TITLE',todo.title)}
            {makeDiv('WRITER',todo.writer)}
            {makeDiv('DUEDATE',todo.dueDate)}
            {makeDiv('COMPLETE',todo.complete ? 'Complete' : 'Not Yet')}

            <div className="flex justify-end p-4">
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                        onClick={() => moveToList()}>
                    목록보기
                </button>
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
                        onClick={() => moveToModify(tno)}>
                    수정하기
                </button>
            </div>
        </div>
    );
}
const makeDiv = (title, value) =>
    <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <div className="w-1/5 p-6 text-right font-bold">{title}</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">{value}</div>
        </div>
    </div>

export default ReadComponent;