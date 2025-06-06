import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import ForClientsSection from './components/ForClientsSection';
import Header from './components/Header';
import Hero from './components/Hero';
import WaitlistPage from './components/Waitlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#212121] transition-colors duration-200">
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
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
