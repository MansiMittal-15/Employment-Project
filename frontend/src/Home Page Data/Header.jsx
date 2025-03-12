import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpeg";
import { useSelector } from "react-redux";
import store from "../redux/store.js";

const Header = () => {
  const {user} = useSelector(store => store.auth)
  return (
    <>
      <div className="text-xl text-black border-b-2 bg-white py-1 px-5 z-30 sticky top-0 ">
        <div className="max-w-[1200px] mx-auto ">
          <div className="flex justify-between items-center">
            <p className="text-3xl text-black font-bold ">
              Nirman <span className="text-orange-600">Saathi</span>
            </p>
            <div className="flex gap-6 text-slate-700 ">
              <div className=" hover:text-slate-500 cursor-pointer font-semibold">
                <Link to={"/"}>Home</Link>
              </div>
              <div className=" hover:text-slate-500 cursor-pointer font-semibold">
                <Link to={"/explore"}>Explore</Link>
              </div>
              <div className=" hover:text-slate-500 cursor-pointer font-semibold">
                <Link to={"/postJob"}>Post a Job</Link>
              </div>
              <div className=" hover:text-slate-500 cursor-pointer font-semibold">
                <Link to={"/advancedSearch"}>Search</Link>
              </div>
            </div>
            {user ? (
              <Link to={"/viewProfile"}>
                <img
                  src={profileImg}
                  alt="p_icon"
                  className="w-12 h-12 object-cover rounded-full"
                />
              </Link>
            ) : (
              <Link to={"/login"}>
                <button className="border rounded-xl text-black w-36 bg-green-500  font-semibold p-2 hover:bg-green-600 text-lg">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
