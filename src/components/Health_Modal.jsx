import { useState } from 'react';
import { shallowEqual } from 'react-redux';
import '../css/health_Modal.css'

const Health_Modal = (props) => {
    const [show,SetShow] = useState(false);
    return (  
        <>
            <div className='layer'>
                    <ul>
                        <li><a href='#'>키 등록</a></li>
                        <li><a href='#'>몸무게 등록</a></li>
                        <li><a href='#'>체온 등록</a></li>
                        <li><a href='#'>처방전 등록</a></li>
                        <li>
                            <a href="#" className='close' onClick={()=>{
                                props.setShow(false)
                                }} >취소
                            </a>
                        </li>
                    </ul>
            </div>
            <div className='layer_bg'></div>
        </>
    );
}
 
export default Health_Modal;