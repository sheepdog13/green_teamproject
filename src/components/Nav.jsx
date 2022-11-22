import '../css/Nav.css'
import Preview from './Preview';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Nav = () => {
    const preview1 = useSelector((state)=>(state.healthChart.preview1))
    const preview2 = useSelector((state)=>(state.checkUp.preview2))
    const preview3 = useSelector((state)=>(state.growth.preview3))
    const preview4 = useSelector((state)=>(state.temperature.preview4))
    

    const lists = [
        { id:1, title:"건강피드", name:"first"}, { id:2, title:"건강피드", name:"second"}, { id:3, title:"성장관리", name:"third"}, { id:4, title:"체온관리", name:"fourth"},
    ]

    const [content, setContent] = useState("first");

    const handleClickButton = e => {
        const { name } = e.target;
        setContent(name);
    };
    const selectComponent = {
        first: <Preview content={preview1}/>,
        second: <Preview content={preview2}/>,
        third: <Preview content={preview3}/>,
        fourth: <Preview content={preview4}/>,
      };

      const list = lists.map((el) => (
        <button key={el.id} onClick={handleClickButton} className={content === el.name ? "active" : null} name={el.name}>{el.title}</button>
    ))
    return (  
        <>
            <div className="nav clearfix">
                <div className='nav_box'>
                    {list}
                </div>
            </div>
            <>
            {content ? <>{selectComponent[content]}</> : <Preview preview={preview1}/>}
            </>
        </>
    );
}
 
export default Nav;