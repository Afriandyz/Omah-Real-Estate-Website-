const Subscribe = () => {
  return (
    <div className="bg-[#F58634] p-16 space-y-4">
      <div className="headline flex justify-center">
        <h1 className="text-white font-medium text-5xl w-[60%] text-center leading-tight">
          Subscribe to get a discount of 30%
        </h1>
      </div>
      <div className="input bg-white max-w-sm mx-auto">
        <input type="text" placeholder="Enter your email addres" className="p-5 outline-none" />
        <button className="py-3 px-7 bg-[#F58634] text-white border hover:bg-inherit hover:text-slate-950 hover:border-[#F58634] transition-all ease-in-out duration-100">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
