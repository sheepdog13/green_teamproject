import DataContext from "../context/DataContext";
import { useContext } from "react";

const OnLogin_Header = () => {
    const data = useContext(DataContext)
    const age = String(data.state.infant.age)
    const date1 = new Date(data.state.infant.age);
    const date2 = new Date();
    const diffDate = date1.getTime() - date2.getTime();

    const date = Math.floor(Math.abs(diffDate /  ( 1000 * 60 * 60 * 24 )));
    const month = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));

    return (  
        <>
            <div className="infant_img">
            {data.state.infant.gender == "남" ? (
                <img src={process.env.PUBLIC_URL + "./images/male.jpg"} alt="남자아이프로필" />
            ):(
                <img src={process.env.PUBLIC_URL + "./images/female.jpg"} alt="여자아이프로필" />
            )}
            </div>
            <p>{data.state.infant.name}</p>
            <p>D+{date}/{month}개월</p>
            <p>{age.substr(0,4)+"/"+age.substr(5,2)+"/"+age.substr(8)}</p>
            <p>{data.state.infant.gender}</p>
        </>
    );
}
 
export default OnLogin_Header;