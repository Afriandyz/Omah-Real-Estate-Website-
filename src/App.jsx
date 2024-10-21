import Home from  "./Pages/Home/Home"
import SaleHouse from "./Pages/SaleHouse";
import ReviewPage from "./Pages/ReviewPages"


const App = () => {
  return (
    <section className="font-poppins">
        <Home />
        <SaleHouse />
        <ReviewPage />
    </section>
  );
}

export default App