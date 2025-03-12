import React from "react";

const SelectOption = ({ options, name }) => {
  return (
    <div
      className=" w-full border-2 rounded-xl font-semibold text-slate-500 "
      key={name}
    >
      <div>
        <select
          name={name}
          id={name}
          key={name}
          className="outline-none scale-x-100 w-full px-3 py-4"
        >
          {options.map((opt, index) => {
            return (
              <option
                className="bg-slate-100 hover:bg-green-200"
                value={opt}
                hidden={index == 0 ? true : false}
                key={opt}
              >
                {opt}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectOption;
