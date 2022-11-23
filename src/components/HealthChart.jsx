import Preview from './Preview';
import { useSelector } from 'react-redux';
import {useState, useContext} from "react";
import DataContext from "../context/DataContext";


const HealthChart = () => {
    const data = useContext(DataContext);

    const preview1 = useSelector((state)=>(state.healthChart.preview1))
    return (  
        <>
        {data.state.login ? (
            <>
                <h1>로그인완료 페이지</h1>
            </>
        ):(
            <Preview content={preview1} />
        )}
        </>
    );
}
 
export default HealthChart;