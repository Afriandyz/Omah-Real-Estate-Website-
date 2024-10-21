import house1 from "../../assets/HouseImage/house-1.png"
import {saleData} from "../../data/saleData"

const saleCard = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="img">
          <img src={house1} alt="house1" />
        </div>
        <div className="title">
          <h1 className="font-medium text-3xl">Green House</h1>
        </div>
        <div className="addres">
          <p className="text-base text-gray-400">Lorem, ipsum dolor.</p>
        </div>
        <div className="price">
          <p className="text-[#F58634] font-medium text-2xl">Lorem, ipsum dolor.</p>
        </div>
      </div>
      {saleData.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img} alt="" />
            <h1>{item.houseName}</h1>
          </div>
        )
      })}
    </div>
  );
};

export default saleCard;
