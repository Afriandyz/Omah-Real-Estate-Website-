const SaleNav = () => {
  return (
    <section className=" wrapper mt-44 flex justify-between items-center mb-12">
      <div className="wrapper_1 flex gap-14 items-center">
        <div className="headline">
          <h1 className="font-medium text-4xl">The Latest</h1>
        </div>
        <div className="navitem flex items-center gap-10">
          <p className="text-gray-400 text-2xl hover:text-[#F58634] transition-all ease-in-out duration-100 hover:cursor-pointer">
            For sale
          </p>
          <p className="text-gray-400 text-2xl hover:text-[#F58634] transition-all ease-in-out duration-100 hover:cursor-pointer">
            To rent
          </p>
        </div>
      </div>
      <div className="wraaper_2">
        <h1 className="font-medium text-2xl underline">View all</h1>
      </div>
    </section>
  );
};

export default SaleNav;
