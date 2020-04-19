import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchConsole = ({ handleChange, inputOptions, handleSelect }) => {
  return (
    <React.Fragment>
      <Autocomplete
        id="Input-Textbox"
        options={inputOptions}
        getOptionLabel={(option) => option}
        style={{ width: 300, margin: "auto" }}
        onChange={(event, value) => handleSelect(event, value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Github Repository"
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
        )}
      />
    </React.Fragment>
  );
};

export default SearchConsole;
