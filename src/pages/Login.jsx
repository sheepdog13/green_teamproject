import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addinfant } from "../modules/Infant";
import axios from 'axios'; 

const Login = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [ischecked,setIschecked] = useState(true);
    const [gender,setGender] = useState("");
    
    const infantList = useSelector((state)=>state.infant.infantList)
    const dispatch = useDispatch()
    console.log(infantList)

    const addInfant = (e) => {
        e.preventDefault();
        dispatch(addinfant({
            name : name,
            age : age,
            gender: gender
        }))
    }
    

    return (  
        <>
            <form onSubmit={addInfant}>
                <label>이름:</label>
                <input type="text" onChange={
                    (e)=>{
                        setName(e.target.value)
                    }
                } />
                <input type="text" placeholder="생년월일(YYYYMMDD)" onChange={
                    (e)=>{
                        setAge(e.target.value)
                    }
                } />
                <fieldset>
                    <legend>성별</legend>
                    남성 <input type="radio" name="gender" />
                    여성 <input type="radio" name="gender" />
                </fieldset>
                <input type="submit" value="작성" />
            </form>  
            <ul>
                {infantList.map((infant)=>(
                    <li>{infant.name}{infant.age}{infant.gender}</li>
                ))}
            </ul>
        </>
    );
}
 
export default Login;