
import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="container">
      <weather/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weather' element={<Weather/>}/>
      </Routes>
    </div>
  );
}

export default App;
