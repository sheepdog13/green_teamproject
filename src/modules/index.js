// 작성한 리덕스 모듈을 하나로 묶어서 사용
import { combineReducers } from "redux";


// 작성한 리덕스 모듈을 가져옴
import preview1 from "./Preview1";


// 작성한리덕스를 객체로 묶어서 내보냄
const rootReducer = combineReducers({preview1});

export default rootReducer;