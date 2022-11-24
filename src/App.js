import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
