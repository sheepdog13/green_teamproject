import '../css/Preview.css'
import { useSelector } from 'react-redux';

const Preview = () => {
    const preview1 = useSelector((state)=>(state.preview1.preview1))
    return (  
        <>
            <section className="contents">
                <div className="row">
                    <div className="cont_box">
                            <p className="title">{preview1.title}</p>
                            <p className="desc">{preview1.desc}</p>
                            <p className="sub_desc">{preview1.sub_desc}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Preview;