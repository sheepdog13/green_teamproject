import '../css/Singup.css'
import { Link } from 'react-router-dom';

const Singup = () => {
    return (  
        <header>
            <div className="container clearfix">
                <div className="row">
                    <div className='header'>
                        <div className="infant_img">
                            <Link to ="/Login">
                            <img src={process.env.PUBLIC_URL + "./images/baby.png"} alt="아이프로필" />
                            </Link>
                        </div>
                        <h1><Link to ="/Login">우리 아이 등록</Link></h1>
                    </div>
                </div>
            </div>    
        </header>
    );
}
 
export default Singup;