import React, { useState, useContext } from "react";
import "../App.css";
import { DataContext } from "../Context/DataContext";
const SearchComponent = () => {
  const { search, cleardata, searchstring, setsearchstring } =
    useContext(DataContext);
  return (
    <div className="inputarea">
      <input
        type="text"
        value={searchstring}
        onChange={(e) => {
          search(e.target.value);
          setsearchstring(e.target.value);
        }}
      />
      <button
        onClick={() => {
          cleardata();
        }}
      >
        Clear
      </button>
    </div>
  );
};
export let searchval;
export default SearchComponent;
