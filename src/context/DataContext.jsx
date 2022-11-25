import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [infant,setInfant] = useState({name:"홍길동", age:"2020-11-23", gender:"남"})
    const [login,setLogin] = useState(true)
    const [hcheck,setHcheck] = useState(0);
    const [icheck,setIcheck] = useState(0);

    const value = {
        state : {infant, login,hcheck,icheck},
        action : {setInfant, setLogin,setHcheck,setIcheck }
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export { DataProvider }

export default DataContext;

