import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import ForClientsSection from './components/ForClientsSection';
import Header from './components/Header';
import Hero from './components/Hero';
import WaitlistPage from './components/Waitlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <ForClientsSection />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/join" element={<WaitlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
