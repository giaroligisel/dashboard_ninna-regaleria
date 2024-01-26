// import './App.css';
import { Outlet } from 'react-router-dom';

import LeftBar from './components/LeftBar';
function App() {

  return (
    <div id="wrapper">
      <LeftBar/>
      <div id="content-wrapper">
      <Outlet/>
      </div>
    </div>
  );
}

export default App;
