import './App.css';
// 전역 style.css
import GlobalStyles from './GlobalStyles';
// 라우터 import
import {Routes, Route} from 'react-router-dom'

import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        {/* 홈페이지 설정 */}
        <Route path="/" element={<Main />}></Route>
        {/* 로그인페이지 설정 */}
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
