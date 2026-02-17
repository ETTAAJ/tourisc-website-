import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marrakech from './pages/Marrakech';
import Fes from './pages/Fes';
import Agadir from './pages/Agadir';
import ActivityDetails from './pages/ActivityDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marrakech" element={<Marrakech />} />
            <Route path="/fes" element={<Fes />} />
            <Route path="/agadir" element={<Agadir />} />
            <Route path="/activity/:id" element={<ActivityDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
