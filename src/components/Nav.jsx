import '../css/Nav.css'

const Nav = () => {
    return (  
        <>
            <div className="nav clearfix">
                <ul>
                    <li className='active'><a href="#">건강피드</a></li>
                    <li><a href="#">검진/접종</a></li>
                    <li><a href="#">성장관리</a></li>
                    <li><a href="#">체온관리</a></li>
                </ul>
            </div>
        </>
    );
}
 
export default Nav;