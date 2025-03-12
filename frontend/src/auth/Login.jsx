import React, { useState } from "react";
import purpleImage from "../assets/login_image1.jpg";
import white_bg from "../assets/white_bg2.jpg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Home Page Data/Footer";
import Header from "../Home Page Data/Header";
import icon from "../assets/github.png";
import Toast from "../components/Toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice.js";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState({
    success: false,
    message: "",
  })

  const navigate = useNavigate("");
  const dispatch = useDispatch();

  const loginHandler = async ()=>{
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      setShowToast(true);
      setToastData({
        success: true,
        message: res.data.message,
      });
      dispatch(setUser(res.data.user));
      setTimeout(() => {
        navigate('/')
      }, 1000);
    } catch (error) {
      setShowToast(true);
      setToastData({
        success: false,
        message: error.response.data.message,
      });
    }
  }
  return (
    <>
      <Header />
      {
        showToast && <Toast toastData={toastData} onClose={()=> setShowToast(false)} />
      }
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-[24px] flex my-10 border-2 border-black ">
          <div
            className="w-[50%] flex flex-col items-center justify-center gap-6"
            style={{
              backgroundImage: `url(${white_bg})`,
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <img src={icon} alt="logo" className="w-16" />
              <h1 className="text-4xl font-semibold">Welcome Back!</h1>
              <p className="text-sm">
                Welcome back! Please enter your details.
              </p>
            </div>
            <div className="w-[70%] flex flex-col items-center gap-4 text-sm">
              <div className="flex flex-col w-[80%] gap-2 font-semibold ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="outline-none rounded-lg p-2 bg-white outline-black/20"
                  placeholder="Enter your email.."
                  id="email"
                  value={userData.email}
                  onChange={(e)=> setUserData({...userData, email: e.target.value})}
                />
              </div>
              <div className="flex flex-col w-[80%] gap-2 font-semibold">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter password here.."
                  className="outline-none rounded-lg p-2 outline-black/20"
                  id="password"
                  value={userData.password}
                  onChange={(e)=> setUserData({...userData, password: e.target.value})}
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
              <div className="flex justify-between w-[80%] gap-2 font-semibold ">
                <div className="flex items-center gap-1">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Remember for 30 days</label>
                </div>
                <div>
                  <Link to="/" className="font-semibold text-green-600">
                    Forgot Password
                  </Link>
                </div>
              </div>
              <div className="flex w-[100%] justify-center ">
                <button onClick={loginHandler} className="bg-green-500 text-black font-semibold w-[80%] p-2 rounded-lg text-lg hover:bg-green-600">
                  Sign in
                </button>
              </div>
              <div className="flex w-[100%] justify-center ">
                <button className="bg-white/70 border-2 border-black/30 text-black font-semibold w-[80%] p-2 rounded-lg text-lg flex justify-center gap-2">
                  <span>
                    <img src="" alt="G" />
                  </span>
                  Sign in with Google
                </button>
              </div>
            </div>
            <div>
              <div>
                Don't have an Account?{" "}
                <span>
                  <Link to="/signup" className="text-green-600 font-semibold">
                    Sign up
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={purpleImage} alt="purple image" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
