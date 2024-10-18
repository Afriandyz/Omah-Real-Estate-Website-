import Home from  "./Pages/Home/Home"
import HeroImage from "./components/HeroImage/HeroImage";

const App = () => {
  return (
    <section className="out font-poppins">
      <div className="in container px-3 py-2 mx-auto">
        <Home />
      </div>
      {/* Hero Image */}
      <HeroImage />
    </section>
  );
}

export default App