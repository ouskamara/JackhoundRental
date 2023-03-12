import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Register from "./pages/Register";
import Login from "./pages/Login";
import VehicleList from "./pages/VehicleList";
import Footer from './components/Footer';
import './App.css'
import Reservation from './pages/Reservation';




function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/vehiclelist' element={<VehicleList />} />
            <Route path='/reservation' element={<Reservation />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
