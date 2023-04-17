import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Color from './components/color/Color';
import Wheel from './components/Wheel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import List from './components/List';
import { ScrollRestoration } from 'react-router-dom';

function App() {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Routes>
        <Route path='/' element={[<Home />, <Wheel />]} />
        <Route path='color/:id' element={<Color />} />
      </Routes>
      <Footer />
      <List />
    </div>
  );
}

export default App;
