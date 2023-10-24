import React, { useContext } from "react";
import "./SearchInput.css";
import { MovieContext } from "../../context/Moviecontext";
function Searchinput() {
  const { searchInput, setSearchInput } = useContext(MovieContext);
  const movieNameHandler = (e) => {
    setSearchInput(e.target.value);
  };
  const clearSearch = () => {
    setSearchInput("");
  };
  return (
    <div className="search-input-section">
      <input
        value={searchInput}
        type="text"
        className="search-input"
        placeholder="Search your movies"
        onChange={movieNameHandler}
      />
      {searchInput && (
        <span className="close-butn" onClick={clearSearch}>
          X
        </span>
      )}
    </div>
  );
}

export default Searchinput;
