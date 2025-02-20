import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice';

//스토어는 저장 공간(금고)  --> 리듀서가 금고안의 데이터를 넣다 뺏다 해주는 역할
//리듀서는 안쪽에 state action 2개만 들어감
//리듀서는 저장 공간에 저장된 데이터를 변경하는 함수
//리듀서는 현재 스토어에 있는 애플리케이션의 상태를 가공, 변경하는 함수
//리듀서는 순수 함수여야 한다. 순수함수는 외부의 상태를 변경하지 않고, 인자로 받은 값을 그대로 반환하는 함수
//리듀서는 이전 상태와 액션을 받아서 다음 상태를 반환하는 함수
//리듀서는 현재 상태를 변경하지 않고, 새로운 상태를 반환한다.
//리듀서는 이전 상태를 변경하지 않고, 새로운 상태를 반환한다.


export default configureStore({
    reducer:{   
        "loginSlice":loginSlice    //이름은 내맘대로 지어도 됨
        //reducer: {키, 값}
     }
     //1. 스토어 생성
     //2. 상태 값 반환  -> state사용     ex) store.getState
     //3. 상태 업데이트 -> dispatch 사용 ex) store.dispatch({type:'액션명', payload:값})
})
