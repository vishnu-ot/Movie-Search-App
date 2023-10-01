import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const [signupData, setSignupData] = useState({
    username: "",
    password1: "",
    password2: "",
    email: "",
  });

  const [userInfo, setUserInfo] = useState([]);
  const [loginUserData, setLoginUserData] = useState({
    username: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const [errors, setErrors] = useState({
    username: false,
    password1: false,
    password2: false,
    email: false,
  });

  const loginSubmitHandler = (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    if (
      loginUserData.username === storedUsername &&
      loginUserData.password === storedPassword
    ) {
      navigate("/");
    } else {
      alert("login failed");
    }
  };

  const loginDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (isValidOnSubmit()) {
      alert("Success");
    } else {
      alert("something went wrong");
    }

    localStorage.setItem("username", signupData.username);
    localStorage.setItem("password", signupData.password2);
  };

  const isValidOnSubmit = () => {
    let errObj = {
      username: false,
      password1: false,
      password2: false,
      email: false,
    };
    if (signupData.username === "") {
      errObj.username = true;
    }
    if (signupData.password1 === "") {
      errObj.password1 = true;
    }
    if (signupData.password2 === "") {
      errObj.password2 = true;
    }
    if (signupData.email === "") {
      errObj.email = true;
    }
    setErrors(errObj);
    if (Object.values(errObj).some((err) => err === true)) {
      return false;
    }
    return true;
  };

  const dataHandler = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <DataContext.Provider
      value={{
        signupData,
        setSignupData,
        users,
        setUsers,
        submitHandler,
        dataHandler,
        loginSubmitHandler,
        loginDataChangeHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
