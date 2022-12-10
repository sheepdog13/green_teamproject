import FirebaseLogin from "../components/FirebaseLogin";
import Nav from "../components/Nav";
import Question from "../components/Question";
import Singup from "../components/Singup";

const Main = () => {

    return ( 
        <div>
            <Singup/>
            <Nav/>
            <FirebaseLogin />
        </div>    
    );
}
 
export default Main;