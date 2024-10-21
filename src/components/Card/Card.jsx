const Card = () => {
  return (
    <section className="wrapper max-w-3xl shadow-2xll bg-white -mt-14 absolute right-32">
      <div className="card_wrapper p-4 flex gap-16">
        <div className="wrapper_1">
          <h1 className="font-medium text-base">Select City</h1>
          <p className="text-gray-400 text-base">Jakarta</p>
        </div>
        <div className="wrapper_2">
          <h1 className="font-medium text-base">Price</h1>
          <p className="text-gray-400 text-base">$1000 - $2000</p>
        </div>
        <div className="wrapper_3">
          <h1 className="font-medium text-base">Rooms</h1>
          <p className="text-gray-400 text-base">3 rooms</p>
        </div>
        <div className="wrapper_4">
          <h1 className="font-medium text-base">Footage</h1>
          <p className="text-gray-400 text-base">2 footage</p>
        </div>
        <button className="py-3 px-7 bg-[#F58634] text-white border hover:bg-inherit hover:text-slate-950 hover:border-[#F58634] transition-all ease-in-out duration-100">
          Search
        </button>
      </div>
    </section>
  );
};

export default Card;
