import Compliance from '../components/Compliance';
import Contact from '../components/Contact';
import Grades from '../components/Grades';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OEM from '../components/OEM';
import Products from '../components/Products';
import Quality from '../components/Quality';
import WhySailtik from '../components/WhySailtik';

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Products />
        <Grades />
        <Quality />
        <OEM />
        <Compliance />
        <WhySailtik />
        <Contact />
      </main>
    </div>
  );
}
