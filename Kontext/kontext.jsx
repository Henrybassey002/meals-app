import React, { createContext, useState } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Henry Bassey",
    role: "Frontend Developer",
    experience: "5 years",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
