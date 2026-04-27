import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import CountdownBanner from './components/CountdownBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <PromoBanner />
      <Header />
      <Hero />
      <Features />
      <Products />
      <CountdownBanner />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
