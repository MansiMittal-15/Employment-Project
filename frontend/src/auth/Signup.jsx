import React, { useState } from "react";
import white_bg from "../assets/white_bg2.jpg";
import { Link, useNavigate } from "react-router-dom";
import icon from "../assets/github.png";
import Header from "../Home Page Data/Header";
import Footer from "../Home Page Data/Footer";
import axios from "axios";
import Toast from "../components/Toast";

const Signup = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  });

  const [toastData, setToastData] = useState({
    success: false,
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate("");

  const signupHandler = async () => {
    const formData = new FormData();
    formData.append("fullname", userData.fullname);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("phoneNumber", userData.phoneNumber);
    formData.append("role", userData.role);
    if(userData.file) {
      formData.append("file", userData.file);
    }
    try {
      console.log(userData);
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setShowToast(true);
      setToastData({
        success: true,
        message: res.data.message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setShowToast(true);
      setToastData({
        success: false,
        message: error.response.data.message,
      });
    }
  };

  return (
    <>
      <Header />
      {showToast && (
        <Toast toastData={toastData} onClose={() => setShowToast(false)} />
      )}
      <div className="max-w-[1200px] mx-auto my-10 border-2 border-black">
        <div
          className="mx-[24px] py-10 flex flex-col items-center gap-6 "
          style={{
            backgroundImage: `url(${white_bg})`,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <img src={icon} alt="logo" className="w-16" />
            <h1 className="text-4xl font-semibold">Create an Account!</h1>
            <p className="text-sm">
              Welcome! Enter your details to getting started.
            </p>
          </div>
          <div className="w-[70%] flex flex-col items-center gap-6 text-sm">
            <div className="flex flex-col w-[80%] gap-2 font-semibold">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your fullname.."
                id="fullname"
                value={userData.fullname}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    fullname: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex flex-col w-[80%] gap-2 font-semibold">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your email.."
                id="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col w-[80%] gap-2 font-semibold ">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your Phone Number.."
                id="phoneNumber"
                value={userData.phoneNumber}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex flex-col w-[80%] gap-2 font-semibold ">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your password.."
                id="password"
                value={userData.password}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex place-self-start mx-20 gap-5 font-semibold">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="userType"
                  id="student"
                  value={"student"}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, role: e.target.value }))
                  }
                />
                <label htmlFor="student">Student</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="userType"
                  id="recruiter"
                  value={"recruiter"}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, role: e.target.value }))
                  }
                />
                <label htmlFor="recruiter">Recruiter</label>
              </div>
            </div>
            <div className="flex flex-col w-[80%] gap-2 font-semibold ">
              <label htmlFor="profile">Profile</label>
              <input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                id="profile"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    file: e.target.files?.[0],
                  }))
                }
              />
            </div>
            <div className="flex w-[100%] justify-center pt-2 ">
              <button
                className="bg-green-500 text-black font-semibold w-[80%] p-2 rounded-lg text-lg hover:bg-green-600"
                onClick={signupHandler}
              >
                Sign Up
              </button>
            </div>
            <div className="flex w-[100%] justify-center ">
              <button className="bg-white/70 border-2 border-black/30 text-black font-semibold w-[80%] p-2 rounded-lg text-lg flex justify-center gap-2">
                <span>
                  <img src="" alt="G" />
                </span>
                Sign up with Google
              </button>
            </div>
          </div>
          <div>
            <div>
              Already have an Account?{" "}
              <span>
                <Link to="/login" className="text-green-600 font-semibold">
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
