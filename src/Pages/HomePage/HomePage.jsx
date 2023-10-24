import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import Searchinput from "../../component/SearchInput/Searchinput";
import "./HomePage.css";
import DisplayMovie from "../../component/DisplayMovie/DisplayMovie";
function HomePage() {
  const { auth, setAuth } = useContext(FormContext);

  return (
    <div className="home-page">
      <div className="logout-btn"></div>

      <div className="movie-search">
        <Searchinput />
      </div>
      <DisplayMovie />
    </div>
  );
}

export default HomePage;
