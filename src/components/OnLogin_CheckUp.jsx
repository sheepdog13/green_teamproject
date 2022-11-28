import DataContext from "../context/DataContext";
import { useContext} from "react";
import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';


const OnLogin_CheckUp = () => {
    const data = useContext(DataContext);
    
    const [btn,setBtn] = useState(true);

    const health_check = function(){
        if(data.state.month >= 71){
            data.action.setHcheck(7);
        } else if (data.state.month > 60){
            data.action.setHcheck(6);
        } else if (data.state.month > 48){
            data.action.setHcheck(5);
        } else if (data.state.month > 36){
            data.action.setHcheck(4);
        } else if (data.state.month > 24){
            data.action.setHcheck(3);
        } else if (data.state.month > 12){
            data.action.setHcheck(2);
        } else if (data.state.month > 6){
            data.action.setHcheck(1);
        } else {
            return "수정"
        }
    }
    const inoculation_check = function(){
        if(data.state.month > 144) {
            data.action.setIcheck(38);
        } else if(data.state.month > 72 ) {
            data.action.setIcheck(34);
        } else if(data.state.month > 35 ) {
            data.action.setIcheck(32);
        } else if(data.state.month > 23 ) {
            data.action.setIcheck(29);
        } else if(data.state.month > 18 ) {
            data.action.setIcheck(25);
        } else if(data.state.month > 15 ) {
            data.action.setIcheck(20);
        } else if(data.state.month > 6 ) {
            data.action.setIcheck(15);
        } else if(data.state.month > 4 ) {
            data.action.setIcheck(9);
        } else if(data.state.month > 2 ) {
            data.action.setIcheck(3);
        } else if(data.state.month > 1 ) {
            data.action.setIcheck(2);
        } 
    }
    health_check()
    inoculation_check()

    return (  
        <>
            <button onClick={()=>{
                setBtn(true)
            }}>건강검진</button>
            <button onClick={()=>{
                setBtn(false)
            }}>예방접종</button>
            {btn ? (
                <>
                    <p>현재 {data.state.hcheck}차 건강검진 기간입니다</p>
                    <p>전체7</p>
                    <p>미검진{7-data.state.hcheck}</p>
                    <p>검진완료{data.state.hcheck}</p>
                    <ProgressBar now={parseInt(data.state.hcheck*14.29) } label={`${parseInt(data.state.hcheck*14.29)}%`} variant="warning" />
                </>
            ):(
                <>
                    <p>전체41</p>
                    <p>미검진{41-data.state.icheck}</p>
                    <p>검진완료{data.state.icheck}</p>
                    <ProgressBar now={parseInt(data.state.icheck*2.44)} label={`${parseInt(data.state.icheck*2.44)}%`} variant="warning"/>
                </>
            )}
        </>
    );
}
 
export default OnLogin_CheckUp