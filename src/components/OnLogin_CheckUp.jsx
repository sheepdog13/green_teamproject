import DataContext from "../context/DataContext";
import { useContext} from "react";
import { useState } from "react";


const OnLogin_CheckUp = () => {
    const data = useContext(DataContext);

    const date1 = new Date(data.state.infant.age);
    const date2 = new Date();
    const diffDate = date1.getTime() - date2.getTime();
    const month = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));
    
    const [btn,setBtn] = useState(true);

    const health_check = function(){
        if(month >= 71){
            data.action.setHcheck(7);
        } else if (month > 60){
            data.action.setHcheck(6);
        } else if (month > 48){
            data.action.setHcheck(5);
        } else if (month > 36){
            data.action.setHcheck(4);
        } else if (month > 24){
            data.action.setHcheck(3);
        } else if (month > 12){
            data.action.setHcheck(2);
        } else if (month > 6){
            data.action.setHcheck(1);
        } else {
            return "수정"
        }
    }
    const inoculation_check = function(){
        if(month > 144) {
            data.action.setIcheck(37);
        } else if(month > 72 ) {
            data.action.setIcheck(33);
        } else if(month > 35 ) {
            data.action.setIcheck(31);
        } else if(month > 23 ) {
            data.action.setIcheck(28);
        } else if(month > 18 ) {
            data.action.setIcheck(24);
        } else if(month > 15 ) {
            data.action.setIcheck(19);
        } else if(month > 6 ) {
            data.action.setIcheck(14);
        } else if(month > 4 ) {
            data.action.setIcheck(8);
        } else if(month > 2 ) {
            data.action.setIcheck(2);
        } else if(month > 1 ) {
            data.action.setIcheck(1);
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
                    <p>{data.state.hcheck*12.5}퍼센트</p>
                </>
            ):(
                <>
                    <p>전체40</p>
                    <p>미검진{40-data.state.icheck}</p>
                    <p>검진완료{data.state.icheck}</p>
                    <p>{data.state.icheck*2.5}퍼센트</p>
                </>
            )}
        </>
    );
}
 
export default OnLogin_CheckUp