import { useState } from "react";
import { doc,getDoc} from "firebase/firestore"
import { db } from "../Firebase";
import { useEffect } from "react";
const GetUserData = () => {
    const [name,setName] = useState();
    const user = localStorage.getItem("currentUser")
    const getSingleData = async () => {
        const docRef = doc(db, "users", user);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setName(docSnap.data().name);
        }
      };
      console.log(name)
      useEffect(()=>{
        getSingleData()
      },[])
    return (  
        <>
        <h1>user페이지입니다</h1>
        <h1>{name}</h1>
        </>
    );
}
 
export default GetUserData;