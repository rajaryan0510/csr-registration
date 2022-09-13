import Navbar from './components/Navbar'
//import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='bg-[#ffffff]'>
      
    <Navbar/>
    <Login/>
    <Dashboard/>
   
    
    </div>
    
  );
}

export default App;
