import './App.css';
// 전역 style.css
import GlobalStyles from './GlobalStyles';
// 라우터 import
import {Routes, Route} from 'react-router-dom'

import { DataProvider } from "./context/DataContext";

import Main from './pages/Main';
import Login from './pages/Login';
import GetUserData from './components/GetUserData';

function App() {
  return (
    <div>
      <DataProvider>
        <GlobalStyles />
        <Routes>
          {/* 홈페이지 설정 */}
          <Route path="/" element={<Main />}></Route>
          {/* 로그인페이지 설정 */}
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/user" element={<GetUserData />}></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
