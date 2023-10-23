import React, { useContext } from "react";

import "./LoginPage.css";
import Footer from "../../component/footer/Footer";
import { AuthContext } from "../../context/AuthContext";
import { FormContext } from "../../context/FormContext";

function LoginPage() {
  const { setInputFields, inputFields ,} = useContext(AuthContext);
  const {formSubmitHandler}=useContext(FormContext)
  const loginDataChangeHandler = (e) => {
    setInputFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="login-layout">
      <div className="login-section">
        <form className="login-fields" onSubmit={formSubmitHandler}>
          <h3 className="signing-header" style={{ color: "white" }}>
            Sign In
          </h3>
          <div>
            {/* <label htmlFor="username">User Name </label> */}
            <input
              className="text-input"
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={loginDataChangeHandler}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password </label> */}
            <input
              className="text-input"
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={loginDataChangeHandler}
            />
          </div>
          <div>
            <input type="submit" className="signing-btn" />
          </div>
          <div className="forgot-psword">
            <p>Forgot password?</p>
          </div>
        </form>
        <div className="signup">
          <p>New to Movie World ? Sign up</p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
