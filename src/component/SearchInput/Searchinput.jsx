import React, { useContext } from "react";
import "./SearchInput.css";
import { MovieContext } from "../../context/Moviecontext";
function Searchinput() {
    const {searchInput, setSearchInput}=useContext(MovieContext)
    const movieNameHandler=(e)=>{
        setSearchInput(e.target.value)
    }
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search your movies"
        onChange={movieNameHandler}
      />
    </div>
  );
}

export default Searchinput;
