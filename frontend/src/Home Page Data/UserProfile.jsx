import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import profile from "../assets/profile.jpeg";
import edit from "../assets/edit.png";
import { Link } from "react-router-dom";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";

const UserProfile = () => {
  const skillsArray = ["ReactJS", "Javascript", "HTML", "CSS", "Web DEV"];
  const isResume = true;
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-[24px]">
          <div className="w-[90%] mx-auto flex flex-col gap-6">

          <div className=" shadow-lg shadow-black/60 p-6 flex flex-col gap-5">
            <div className="flex gap-8">
              <div className="flex items-center gap-4">
                <img
                  src={profile}
                  alt="profile"
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div>
                  <h2 className="font-bold text-xl">Mansi Mittal</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni eveniet facere, distinctio repellat illo voluptates!
                  </p>
                </div>
              </div>
              <Link
                to={"#"}
                className=" w-16 h-[60px] shadow-md rounded-lg border"
              >
                <img src={edit} alt="edit" className="p-2 " />
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-4 items-center">
                <img src={mail} alt="mail" className="w-8" />
                <p>mansimittal@gmail.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={phone} alt="phone" className="w-7" />
                <p>1234567890</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold ">Skills</p>
              <div>
                {skillsArray.length !== 0 ? (
                  <ul className="flex gap-4">
                    {skillsArray.map((value, index) => {
                      return (
                        <li
                          key={index}
                          className="border-2 border-green-600/50 text-gray-700 bg-green-100/50 rounded-lg p-1"
                        >
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <p className="font-bold">Resume</p>
              {
                isResume ? <a
                target="_blank"
                href="https://leetcode.com/u/mansimittal935/"
                className="text-blue-500 cursor-pointer"
              >
                Mansi Mittal
              </a> : ""
              }
              
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-3xl">Applied Jobs</h2>
            <div>Applied job table</div>
          </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
