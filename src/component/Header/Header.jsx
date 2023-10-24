import React from "react";
import { useContext } from "react";
import "./Header.css";
import { FormContext } from "../../context/FormContext";
import { Button } from "bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { MovieContext } from "../../context/Moviecontext";
function Header() {
  const { auth, setAuth } = useContext(FormContext);
  const { searchInput, setSearchInput } = useContext(MovieContext);
  const logoutHandler = () => {
    setSearchInput("");
    setAuth(false);
  };
  return (
    <div className="header-section">
      <h3>Movie World</h3>
      {auth && (
        <button className="logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Header;
