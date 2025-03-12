import React from "react";
import profileImg from "../assets/profile.jpeg";
import icon from "../assets/github.png";
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
  return (
    <div className="flex flex-col gap-4 p-6 w-80 shadow-2xl absolute z-50 bg-white">
      <div className="flex gap-4">
        <img
          src={profileImg}
          alt="p_icon"
          className="w-12 h-12 object-cover rounded-full"
        />
        <div>
          <h3 className="font-bold">Mansi Mittal</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="flex gap-4">
        <img src={icon} alt="user" className="w-6 h-6 " />
        <Link to={"#"} className="hover:underline font-semibold ">
          View Profile
        </Link>
      </div>
      <div className="flex gap-4">
        <img src={icon} alt="user" className="w-6 h-6 " />
        <Link to={"#"} className="hover:underline font-semibold ">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ProfileDropDown;
