import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import Service from './routes/Service';

import Contact from './routes/Contact';
import Register from './routes/Register';
import About from './routes/About.';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service"  element={<Service/>}/>
        <Route  path="/contact"  element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
     

    </div>
  );
}

export default App;