import React from 'react';
import 'antd/dist/antd.css';
import GlobalStyle from './styles/GlobalStyles';
import Home from './pages/Home/index';


const App: React.FC = () => {
  return (
    <>
    <GlobalStyle/>
    <Home/>
    </>
  );
}

export default App;
