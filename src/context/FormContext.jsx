import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const FormContext = createContext();
export const FormContextProvider = ({ children }) => {
  const { setInputFields, inputFields } = useContext(AuthContext);
  const [auth, setAuth] = useState(() => {
    try {
      const authFromLocalStorage = JSON.parse(localStorage.getItem("auth"));
      if (authFromLocalStorage !== null && authFromLocalStorage !== undefined) {
        return authFromLocalStorage;
      }
    } catch (error) {
      // Handle the error or return a default value if needed
      console.error("Error parsing data from localStorage:", error);
    }

    return false;
  });

  const navigate = useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (inputFields.username === "test" && inputFields.password === "test") {
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

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);
  return (
    <FormContext.Provider value={{ formSubmitHandler, auth, setAuth }}>
      {children}
    </FormContext.Provider>
  );
};
