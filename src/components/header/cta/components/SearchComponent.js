import React from "react";
import { searchIcon } from "../../../../icons/header-icons";

function SearchComponent() {
  return (
    <div className="search-container">
      <textarea
        rows="1"
        placeholder="Send a message..."
        className="search-text-area"
      ></textarea>
      <button className="search-btn">{searchIcon}</button>
    </div>
  );
}

export default SearchComponent;
