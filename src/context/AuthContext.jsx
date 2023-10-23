import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
  });
  console.log(inputFields);
  return (
    <AuthContext.Provider value={{ setInputFields, inputFields }}>
      {children}
    </AuthContext.Provider>
  );
};
