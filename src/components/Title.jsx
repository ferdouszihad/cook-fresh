import React from "react";

const Title = ({ children }) => {
  console.log(children);
  return (
    <div className="relative w-11/12 mx-auto  my-10 border-s-8 ps-10">
      <h2 className={`text-5xl font-bold py-5 `}>{children}</h2>
      <h2
        className={`text-8xl font-bold opacity-10 bottom-0 py-5 absolute -z-10`}
      >
        {children}
      </h2>
    </div>
  );
};

export default Title;
