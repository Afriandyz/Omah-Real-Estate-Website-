import navLogo from "../../assets/logo/Navbar-brand.svg";
import { navData } from "../../data/navbarData";

const Navbar = () => {
  return (
    <div className="wrapper flex justify-between items-center">
      <div className="img cursor-pointer">
        <img src={navLogo} alt="" />
      </div>
      <div className="navItem flex items-center gap-14">
        {navData.map((list, index) => {
          return (
            <ul
              key={index}
              className="text-slate-600 hover:text-slate-950 transition-all ease-in-out duration-100"
            >
              <li>
                <a href={list.url}>{list.item}</a>
              </li>
            </ul>
          );
        })}
        <button className="py-3 px-7 bg-[#F58634] text-white hover:border hover:bg-inherit hover:text-slate-950 hover:border-[#F58634] transition-all ease-in-out duration-100">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
