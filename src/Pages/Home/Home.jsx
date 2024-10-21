import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import HeroImage from '../../components/HeroImage/HeroImage'
import Card from '../../components/Card/Card'

const Home = () => {
  return (
    <div>
      <div className="container px-3 py-2 mx-auto">
        <Navbar />
        <Hero />
      </div>
      {/* Hero Image */}
      <HeroImage />
      {/* Card Image */}
      <Card />
    </div>
  );
}

export default Home