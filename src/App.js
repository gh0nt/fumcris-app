import Navbar from './Pages/Navbar';
import Home from './Pages/Homescreen';
import Footer from "./Pages/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /><Route/>
            <Route path='*' element={<div>404 Not Found</div>}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
