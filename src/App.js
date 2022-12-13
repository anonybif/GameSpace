import { Shop } from '@material-ui/icons';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './components/Pages/Blog';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
