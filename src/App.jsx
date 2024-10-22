import Home from  "./Pages/Home/Home"
import SaleHouse from "./Pages/SaleHouse";
import ReviewPage from "./Pages/ReviewPages"
import BlogPages  from "./Pages/BlogPages";
import SubscribePages from "./Pages/SubscribePages"


const App = () => {
  return (
    <section className="font-poppins">
        <Home />
        <SaleHouse />
        <ReviewPage />
        <BlogPages />
        <SubscribePages />
    </section>
  );
}

export default App