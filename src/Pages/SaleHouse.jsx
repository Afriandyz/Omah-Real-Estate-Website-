import SaleNav from "../components/Navbar/SaleNav"
import SaleCard from "../components/Card/saleCard"

const SaleHouse = () => {
  return (
    <div className="container px-3 py-2 mx-auto">
      <SaleNav />
      <SaleCard />
    </div>
  );
}

export default SaleHouse