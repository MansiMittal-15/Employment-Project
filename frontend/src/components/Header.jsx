import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => { 
  const dropDownRef = useRef(null);

  const [dropDownConfig, setDropDownConfig] = useState({
    isOpen: false,
    position: { left: 0, top: 0 },
    items: [],
    name: '',
  });

  const handleToggleDropDown = (e, name, items) => {
    const isSameDropDown =
      (dropDownConfig.isOpen && dropDownConfig.name === name);
      setDropDownConfig({
        isOpen: !isSameDropDown,
        position: { left: e.clientX, top: e.clientY + 20 },
        items: items,
        name: name,
      });
  };

  useEffect(()=>{
    const handleClickOutside = (event) =>{
      if(dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDropDownConfig((prev) => ({...prev, isOpen: false}));
      }
    }

    if(dropDownConfig.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  
    return () =>{
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropDownConfig.isOpen])

  return (
    <>
      {dropDownConfig.isOpen && (
        <Dropdown
          ref={dropDownRef}
          items={dropDownConfig.items}
          position={dropDownConfig.position}
        />
      )}

      <div className="text-xl text-white bg-slate-950 py-6 px-5 flex justify-between items-center sticky top-0 ">
        <div className="flex items-center gap-16 ">
          <p className="text-3xl text-white font-bold ">Nirman Saathi</p>
          <div className="flex gap-6 ">
            <div className="">
              <div
                className=" hover:text-slate-500 cursor-pointer font-semibold"
                onClick={(e) =>
                  handleToggleDropDown(e, 'jobs', [
                    "Install job search app",
                    "Find Jobs by category",
                    "Interview Tips",
                  ])
                }
              >
                Jobs
              </div>
            </div>
            <div>
              <div
                className=" hover:text-slate-500 cursor-pointer font-semibold"
                onClick={(e) =>
                  handleToggleDropDown(e, 'about', [
                    "Company Overview",
                    "Our Mission",
                    "Leadership Team",
                  ])
                }
              >
                About
              </div>
            </div>
            <div>
              <div
                className=" hover:text-slate-500 cursor-pointer font-semibold"
                onClick={(e) =>
                  handleToggleDropDown(e, 'services', [
                    "Consulting Services",
                    "Support Services",
                    "Training and Development",
                  ])
                }
              >
                Services
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="border rounded-xl bg-slate-900 font-semibold p-3 hover:bg-black text-xl">
            Login/Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
