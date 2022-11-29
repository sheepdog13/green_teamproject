import { useSelector } from 'react-redux';
import { useContext} from "react";
import DataContext from "../context/DataContext";
import Preview from './Preview';

const Notice = () => {
    const data = useContext(DataContext);

    const preview4 = useSelector((state)=>(state.temperature.preview4))
    return (  
        <>
        {data.state.ismeasures ? (
            <>
                <h1>정보를 받았을때</h1>
            </>
        ):(
            data.state.login ? (
                <>
                    <h2>{data.state.infant.name}의 체온을 입력해주세요</h2>
                </>
            ):(
                <>
                    <Preview content={preview4} />
                </>
            )
        )}
        </>
    );
}
 
export default Notice;