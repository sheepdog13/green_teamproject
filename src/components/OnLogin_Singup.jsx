import DataContext from "../context/DataContext";
import { useContext } from "react";
import "../css/OnLogin_Singup.css"

const OnLogin_Singup = () => {
    const data = useContext(DataContext)
    const age = String(data.state.infant.age)
    const date1 = new Date(data.state.infant.age);
    const date2 = new Date();
    const diffDate = date1.getTime() - date2.getTime();

    const date = Math.floor(Math.abs(diffDate /  ( 1000 * 60 * 60 * 24 )));
    const month = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));

    return (  
        <>
            <div className="infant_img clearfix">
            {data.state.infant.gender == "남" ? (
                <img src={process.env.PUBLIC_URL + "./images/male.jpg"} alt="남자아이프로필" />
            ):(
                <img src={process.env.PUBLIC_URL + "./images/female.jpg"} alt="여자아이프로필" />
            )}
            </div>
            <ul>
                <li className="bold">{data.state.infant.name}</li>
                <li>{age.substr(0,4)+"/"+age.substr(5,2)+"/"+age.substr(8)} ({data.state.infant.gender})</li>
                <li className="bold">D+{date}/ {month}개월</li>
            </ul>
        </>
    );
}
 
export default OnLogin_Singup;