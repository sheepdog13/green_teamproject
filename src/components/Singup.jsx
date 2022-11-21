import '../css/Singup.css'

const Singup = () => {
    return (  
        <header>
            <div className="container clearfix">
                <div className="row">
                    <div className='header'>
                        <div className="infant_img">
                            <a href="#">
                            <img src={process.env.PUBLIC_URL + "./images/baby.png"} alt="아이프로필" />
                            </a>
                        </div>
                        <h1>우리 아이 등록</h1>
                    </div>
                </div>
            </div>    
        </header>
    );
}
 
export default Singup;