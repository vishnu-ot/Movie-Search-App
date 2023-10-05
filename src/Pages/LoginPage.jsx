import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import './LoginPage.css'
function LoginPage() {
  const {  loginSubmitHandler,loginDataChangeHandler } = useContext(DataContext);
  return (
    <div>
      <form onSubmit={loginSubmitHandler}>
        <div>
          <label htmlFor="username">User Name </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={loginDataChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={loginDataChangeHandler}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
