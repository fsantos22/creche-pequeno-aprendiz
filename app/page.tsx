import About from '@/components/About/About';
import Activities from '@/components/Activities/Activities';
import Classes from '@/components/Classes/Classes';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Highlights from '@/components/Highlights/Highlights';
import Location from '@/components/Location/Location';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Classes />
      <Activities />
      <Location />
      <Footer />
    </main>
  );
}

//Incluir fotos do Insta
//Incluir rodapé
