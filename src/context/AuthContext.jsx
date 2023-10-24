import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
  });

  return (
    <AuthContext.Provider value={{ setInputFields, inputFields }}>
      {children}
    </AuthContext.Provider>
  );
};
