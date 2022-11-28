import { useContext, useState } from "react";
import DataContext from "../context/DataContext";

import '../css/health_Modal.css'

const Health_Modal = (props) => {
    const data = useContext(DataContext)
    const [show,setShow] = useState(false);
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);
    const [temperature,setTemperature] = useState(0);
    const [medicine,setMedicine] = useState("")
    const measure = () => {
        data.action.setMesures({height:height,weight:weight,temperature:temperature, medicine:medicine})
    }
    console.log(data.state.measures)
    return ( 
        <div className='layer_bg'>
            <div className='layer'>
                    <ul className='modal_title'>
                        <li><a href='#' onClick={()=>{
                            setShow(true);
                        }}>키 등록</a></li>
                        {show && 
                                <div className="measure_box">
                                    <input type="text" onChange={(e)=>{
                                        setHeight(e.target.value);
                                    }}/>
                                    <button onClick={()=>{
                                        setShow(false)
                                    }
                                    }>완료</button>
                                </div>
                        }
                        <li><a href='#' onClick={()=>{
                            setShow(true);
                        }}>몸무게 등록</a></li>
                        {show && 
                                <div className="measure_box">
                                    <input type="text" onChange={(e)=>{
                                        setWeight(e.target.value);
                                    }}/>
                                    <button onClick={()=>{
                                        setShow(false)
                                    }
                                    }>완료</button>
                                </div>
                        }
                        <li><a href='#' onClick={()=>{
                            setShow(true);
                        }}>체온 등록</a></li>
                        {show && 
                                <div className="measure_box">
                                    <input type="text" onChange={(e)=>{
                                        setTemperature(e.target.value);
                                    }}/>
                                    <button onClick={()=>{
                                        setShow(false)
                                    }
                                    }>완료</button>
                                </div>
                        }
                        <li><a href='#' onClick={()=>{
                            setShow(true);
                        }}>처방전 등록</a></li>
                        {show && 
                                <div className="measure_box">
                                    <input type="text" onChange={(e)=>{
                                        setMedicine(e.target.value);
                                    }}/>
                                    <button onClick={()=>{
                                        setShow(false)
                                    }
                                    }>완료</button>
                                </div>
                        }
                        {height ? (
                            <>
                                <li>
                                    <a href="#" className='close' onClick={()=>{
                                        props.setShow(false)
                                        measure()
                                    }}>
                                        완료
                                    </a>
                                </li>
                            </>
                        ):(
                            <>
                                <li>
                                    <a href="#" className='close' onClick={()=>{
                                        props.setShow(false)
                                    }}>
                                        취소
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
            </div>
        </div> 
    );
}
 
export default Health_Modal;