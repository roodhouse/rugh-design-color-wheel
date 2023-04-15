import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Color from './components/Color';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='color/:id' element={<Color />} />

      
    </Routes>
  );
}

export default App;
