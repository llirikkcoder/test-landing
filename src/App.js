import './App.scss';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Header';
import Hero from './components/hero-section/Hero';
import Offers from './components/offers/Offers';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Footer />
    </>
  );
}

export default App;
