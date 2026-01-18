import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AirCoverSection from './components/AirCoverSection';
// import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Commitments from './components/Commitments';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalMentions from './components/LegalMentions';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#legal') {
        setCurrentView('legal');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-creme font-main">
      {currentView === 'home' ? (
        <>
          <Navbar />
          <Hero />
          <Benefits />
          <AirCoverSection />
          {/* <TrustSection /> */}
          <Services />
          <Commitments />
          <Process />
          <Contact />
        </>
      ) : (
        <LegalMentions />
      )}
      <Footer />
    </div>
  );
}

export default App;
