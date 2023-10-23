import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MovieContext = createContext();
export const MovieContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";
  const [moviesList, setMoviesList] = useState([]);
  const fetchMovieList = async () => {
    const response = await axios(API_URL, {
      params: { query: searchInput },
    });
    setMoviesList(response.data.results);
    // setFilteredList(response.data.results);
    // console.log("filtered list calling...,,..");
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchInput) {
        fetchMovieList();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);
  return (
    <MovieContext.Provider value={{ searchInput, setSearchInput, moviesList }}>
      {children}
    </MovieContext.Provider>
  );
};
