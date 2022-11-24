import DataContext from "../context/DataContext";
import { useContext} from "react";


const OnLogin_CheckUp = () => {
    const data = useContext(DataContext);

    const date1 = new Date(data.state.infant.age);
    const date2 = new Date();
    const diffDate = date1.getTime() - date2.getTime();

    const date = Math.floor(Math.abs(diffDate /  ( 1000 * 60 * 60 * 24 )));
    const month = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30)));
    return (  
        <>
        <h1>{month}</h1>
        </>
    );
}
 
export default OnLogin_CheckUp