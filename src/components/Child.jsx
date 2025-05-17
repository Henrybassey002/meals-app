import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <div>
      <p>Child</p>
      <GrandChild />
    </div>
  );
};

export default Child;
