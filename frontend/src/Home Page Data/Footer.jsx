import React from "react";

const Footer = () => {
  return (
    <div className=" bg-slate-100 text-black ">
      <div className="max-w-[1200px] mx-auto ">
        <div className="mx-10 ">
          <div className="flex gap-10 py-10 justify-between border-b-2 border-b-black/40 ">
            <div className="flex flex-col w-[40%] gap-3 ">
              <h1 className="text-4xl">Build with Confidence, Hire the Best</h1>
              <p className="text-sm">
                A short tagline encouraging users to connect with skilled
                professionals. Your Trusted Partner in Construction & Hiring.
              </p>
            </div>
            <div>
              <button className="text-xl text-black font-bold bg-green-500 hover:bg-green-600 p-6 rounded-2xl">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4 py-10 justify-between ">
              <div className="w-[33%] flex gap-4 flex-col ">
                <h1 className="text-2xl font-semibold">
                  Nirman <span className="text-orange-500">Saathi</span>
                </h1>
                <p className="text-sm">
                  Nirman Saathi helps you find trusted civil engineers,
                  contractors, and workers for your construction needs. Compare,
                  connect, and hire the best professionals. Also, explore our
                  marketplace for top-quality construction materials at
                  competitive prices.
                </p>
              </div>
              <div className="flex gap-16 w-[40%] ">
                <div className="flex flex-col gap-3 ">
                  <h3 className="text-xl">Help</h3>
                  <ul className="text-sm flex flex-col gap-2">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 ">
                  <h3 className="text-xl">Company</h3>
                  <ul className="text-sm flex flex-col gap-2">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Features</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 ">
                  <h3 className="text-xl">Social Media</h3>
                  <ul className="flex gap-4">
                    <li>
                      <img src="" alt="fb" />
                    </li>
                    <li>
                      <img src="" alt="ig" />
                    </li>
                    <li>
                      <img src="" alt="in" />
                    </li>
                    <li>
                      <img src="" alt="x" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-6 text-sm flex justify-between">
              <div>&copy; Nirman <span className="text-orange-600">Saathi</span> 2025 - All Rights Reserved. </div>
              <div>
                <ul className="flex gap-10">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Refund Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
