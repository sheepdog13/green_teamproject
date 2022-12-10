import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { firebaseAuth, createUserWithEmailAndPassword,db } from "../Firebase";
import {setDoc, collection, doc, getDocs} from "firebase/firestore"

const FirebaseLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const usersCollectionRef = collection(db, "users")
    
    const createUser = async () => {
        const newUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = newUser.user
        const data = await getDocs(usersCollectionRef);
        await setDoc(doc(db, "users", user.uid), {...data.docs[0].data(), name:name});
        console.log(data.docs.map((doc)=>(doc.data())))
    }


    return (  
        <>
            <form onSubmit={(e)=>{e.preventDefault(); createUser()}}>
                <input type="text" placeholder="이메일" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" onChange={ (e)=>{setPassword(e.target.value)}} />
                <input type="text" placeholder="이름" onChange={ (e)=>{setName(e.target.value)}} />
                <input type="submit" value="로그인" />
            </form>
        </>
    );
}
 
export default FirebaseLogin;