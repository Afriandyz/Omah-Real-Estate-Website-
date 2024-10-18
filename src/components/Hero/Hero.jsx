import { heroData } from "../../data/heroData";

const Hero = () => {
  return (
    <section className="wrapper mt-14 flex space-x-64 mb-14 items-center">
      <div className="headline w-full">
        {heroData.map((item, index) => {
          return (
            <h1 key={index} className="font-medium text-6xl w-[80%] leading-tight">
              {item.headline}
            </h1>
          );
        })}
      </div>
      <div className="subheadline flex">
        <div className="line w-9 h-1 bg-[#F58634] relative top-3 right-3"></div>
        {heroData.map((item, index) => {
          return (
            <p key={index} className="w-[80%] text-gray-400 text-xl">
              {item.subheadline}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
