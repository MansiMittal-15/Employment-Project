import React from "react";

const Dropdown = React.forwardRef(({ items, position }, ref) => {
  return (
    <div
      className="w-56 h-auto m-3 border solid absolute bg-white z-10 "
      style={{ left:position.left, top: position.top}}
      ref={ref}
    >
      {items.map((item) => {
        return (
          <a href="/" key={item}>
            {" "}
            <div className="hover:bg-slate-200 py-3 text-xl px-2">{item}</div>
          </a>
        );
      })}
    </div>
  );
})

export default Dropdown;
