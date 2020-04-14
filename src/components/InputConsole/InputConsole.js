import React from "react";
import "./InputConsole.css";

const InputConsole = () => {
  return (
    <React.Fragment>
      <input type="search" placeholder="Search Github Repository" />
      <button data-testid="search-button" type="button">
        SEARCH
      </button>
    </React.Fragment>
  );
};

export default InputConsole;
