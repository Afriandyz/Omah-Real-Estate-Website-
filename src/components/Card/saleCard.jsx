import { saleData } from "../../data/saleData";

const saleCard = () => {
  return (
    <div className="wrapper flex justify-center gap-7 mb-32">
      
      {saleData.map((item, index) => {
        return (
          <div key={index} className="">
            <div className="img">
              <img src={item.img} alt="" width={"370px"} />
              <h1 className="font-medium text-3xl">{item.houseName}</h1>
              <p className="text-base text-gray-400">{item.address}</p>
              <p className="text-[#F58634] font-medium text-2xl">
                {item.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default saleCard;
