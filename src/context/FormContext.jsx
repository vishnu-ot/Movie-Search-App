import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const FormContext = createContext();
export const FormContextProvider = ({ children }) => {
  const { setInputFields, inputFields } = useContext(AuthContext);
  const [auth, setAuth] = useState(false);
  console.log(auth, "useqq");
  const navigate = useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (inputFields.username === "test" && inputFields.password === "test") {
      console.log("cliceee");
      setAuth(true);
      navigate("/");
      setInputFields((prev) => {
        return { ...prev, username: "", password: "" };
      });
    } else {
      alert("invalid login details !");
    }
    // console.log(auth);
  };
  console.log(auth);
  return (
    <FormContext.Provider value={{ formSubmitHandler, auth, setAuth }}>
      {children}
    </FormContext.Provider>
  );
};
