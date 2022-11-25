import Preview from './Preview';
import { useSelector } from 'react-redux';
import {useState, useContext} from "react";
import DataContext from "../context/DataContext";
import Health_Modal from './Health_Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import '../css/HealthChart.css'
const HealthChart = () => {
    const data = useContext(DataContext);

    const preview1 = useSelector((state)=>(state.healthChart.preview1))
    const [show,setShow] = useState(false)
    return (  
            <div className='first_box'>
            {data.state.login ? (
                <>
                    <ul>
                        <li className='title'>{data.state.infant.name}의 건강 피드를 생성해주세요</li>
                        <li>우측하단에 버튼을 누르면</li>
                        <li className='bold'>키/몸무게/체온/해열제/처방전</li>
                        <li>을 등록할 수 있어요~</li>
                    </ul>

                    <button className='plus_btn' onClick={()=>{
                        setShow(true)
                    }}><FontAwesomeIcon icon={faPlus} /></button>
                    {show && <Health_Modal setShow={setShow}/>}
                </>
            ):(
                <Preview content={preview1} />
            )}
            </div>
    );
}
 
export default HealthChart;