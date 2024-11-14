import React from "react";
import profile from "../assets/profile.jpeg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import twitter from "../assets/twitter.png";

const Profile = () => {
  return (
    <div className="border-4 border-slate-800 w-[350px] rounded-2xl p-2 m-2">
      <div className="flex gap-6">
        <img
          src={profile}
          alt="profile"
          className="w-[125px] h-[125px] object-cover border rounded-xl "
        />
        <div className="flex justify-start flex-col gap-2 ">
          <div>
            <p className="text-2xl font-medium ">Mansi Mittal</p>
            <p className="font-semibold text-lg">Full Stack Developer</p>
            <p className="font-semibold text-lg">
              Experience:- <span className="font-bold">3+ yrs</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-lg flex justify-center gap-1">
              <a href="mailto:" className="text-blue-500 hover:text-blue-600">
                <img src={mail} alt="mail" className="w-7" />
              </a>
            </p>
            <p className="font-semibold text-lg flex gap-1">
              <a href="http://" className="text-blue-500 hover:text-blue-600">
                <img src={github} alt="phone" className="w-6" />
              </a>
            </p>
            <p className="font-semibold text-lg flex gap-1">
              <a href="tel:+" className="text-blue-500 hover:text-blue-600">
                <img src={phone} alt="phone" className="w-6" />
              </a>
            </p>
            <p className="font-semibold text-lg flex gap-1">
              <a href="http://" className="text-blue-500 hover:text-blue-600">
                <img src={linkedin} alt="phone" className="w-6" />
              </a>
            </p>
            <p className="font-semibold text-lg flex gap-1">
              <a href="http://" className="text-blue-500 hover:text-blue-600">
                <img src={twitter} alt="phone" className="w-5" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
