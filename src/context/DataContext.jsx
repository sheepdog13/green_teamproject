import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [infant,setInfant] = useState({name:"홍길동", age:19990303, gender:"남"})
    const [login,setLogin] = useState(false)

    const value = {
        state : {infant, login},
        action : {setInfant, setLogin}
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export { DataProvider }

export default DataContext;

