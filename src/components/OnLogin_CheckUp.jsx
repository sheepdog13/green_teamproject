import DataContext from "../context/DataContext";
import { useContext} from "react";
import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from "react";


const OnLogin_CheckUp = () => {
    const data = useContext(DataContext);
    
    const [btn,setBtn] = useState(true);
    const [name,setName] = useState("")

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
            setName("일본뇌염, 파상풍")
        } else if(data.state.month > 72 ) {
            data.action.setIcheck(34);
            setName("파상풍, 폴리오, 홍역, 일본뇌염")
        } else if(data.state.month > 35 ) {
            data.action.setIcheck(32);
            setName("일본뇌염, 사람유두종바이러스")
        } else if(data.state.month > 23 ) {
            data.action.setIcheck(29);
            setName("A형간염, 일본뇌염, 사람유두종바이러스")
        } else if(data.state.month > 18 ) {
            data.action.setIcheck(25);
            setName("b형레모필루스인플루엔자, 폐렴구균, 홍역, 수두")
        } else if(data.state.month > 15 ) {
            data.action.setIcheck(20);
            setName("B형간염, 파상풍, b형레모필루스인플루엔자, 폐렴구균, 로티바이러스")
        } else if(data.state.month > 6 ) {
            data.action.setIcheck(15);
            setName("파상풍, 폴리오, b형레모필루스인플루엔자, 폐렴구균, 로티바이러스1,로티바이러스2")
        } else if(data.state.month > 4 ) {
            data.action.setIcheck(9);
            setName("파상풍, 폴리오, b형레모필루스인플루엔자, 폐렴구균, 로티바이러스1, 로티바이러스2")
        } else if(data.state.month > 2 ) {
            data.action.setIcheck(3);
            setName("B형간염")
        } else if(data.state.month > 1 ) {
            data.action.setIcheck(2);
            setName("결핵, B형간염")
        } 
    }
    health_check()
    useEffect(() => {
        inoculation_check()
    },[name])
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
                    <p>현재 {name}건의 접종기간입니다</p>
                    <p>전체41</p>
                    <p>미접종{41-data.state.icheck}</p>
                    <p>접종완료{data.state.icheck}</p>
                    <ProgressBar now={parseInt(data.state.icheck*2.44)} label={`${parseInt(data.state.icheck*2.44)}%`} variant="warning"/>
                </>
            )}
        </>
    );
}
 
export default OnLogin_CheckUp