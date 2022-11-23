import '../css/Singup.css'
import { Link, useNavigate } from 'react-router-dom';
import DataContext from "../context/DataContext";
import {useState, useContext} from "react";
import { useEffect } from 'react';

const Singup = () => {
    const [login, setLogin] = useState(true);
    const data = useContext(DataContext);
    const navigate = useNavigate();
    
    useEffect(()=>{
        setLogin(data.state.infant ? true : false )
    }, [data.state.infant])

    const logOut = () => {
		data.action.setLogin(false) 
		data.action.setInfant(null);
		navigate("/");
	}
    
    return (  
        <header>
            <div className="container clearfix">
                <div className="row">
                    <div className='header'>
                        <button onClick={()=>{logOut()}}>로그아웃</button>
                        {data.state.login ? (
                            <>
                                <div className="infant_img">
                                {data.state.infant.gender == "남" ? (
                                    <img src={process.env.PUBLIC_URL + "./images/male.jpg"} alt="남자아이프로필" />
                                ):(
                                    <img src={process.env.PUBLIC_URL + "./images/female.jpg"} alt="여자아이프로필" />
                                )}
                                </div>
                                <p>{data.state.infant.name}</p>
    
                                <p>{String(data.state.infant.age).substr(0,4)+"/"+String(data.state.infant.age).substr(4,2)+"/"+String(data.state.infant.age).substr(6)}</p>
                                <p>{data.state.infant.gender}</p>
                            </>
                        ):(
                            <>
                                <div className="infant_img">
                                <Link to ="/Login">
                                <img src={process.env.PUBLIC_URL + "./images/user.png"} alt="아이프로필" />
                                </Link>
                                </div>
                                <h1><Link to ="/Login">우리 아이 등록</Link></h1>
                            </>
                        )}
                    </div>
                </div>
            </div>    
        </header>
    );
}
 
export default Singup;