
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

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-main">
      <Navbar />
      <Hero />
      <Benefits />
      <AirCoverSection />
      {/* <TrustSection /> */}
      <Services />
      <Commitments />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
