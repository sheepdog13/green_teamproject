import Preview from './Preview';
import { useSelector } from 'react-redux';
import {useState, useContext} from "react";
import DataContext from "../context/DataContext";
import Health_Modal from './Health_Modal';


const HealthChart = () => {
    const data = useContext(DataContext);

    const preview1 = useSelector((state)=>(state.healthChart.preview1))
    const [show,setShow] = useState(false)
    return (  
        <>
        {data.state.login ? (
            <>
                <p>{data.state.infant.name}의 건강 피드를 생성해주세요</p>
                <p>우측하단에 버튼을 누르면</p>
                <p>키/몸무게/체온/해열제/처방전</p>
                <p>을 등록할 수 있어요~</p>

                <button onClick={()=>{
                    setShow(true)
                }}>버튼</button>
                {show && <Health_Modal setShow={setShow} />}
            </>
        ):(
            <Preview content={preview1} />
        )}
        </>
    );
}
 
export default HealthChart;