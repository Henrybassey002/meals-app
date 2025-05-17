import React, { useContext } from "react";
import { UserContext } from "../../Kontext/kontext";

const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>GrandChild</p>
      <p>
        <b>Name:</b> Hello, Welcome{" "}
        <span className="text-primary">{user.name}</span> , You are a{" "}
        <span className="text-warning">{user.role}</span> with {user.experience}{" "}
        experience.
      </p>
    </div>
  );
};

export default GrandChild;
