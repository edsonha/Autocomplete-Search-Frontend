import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchConsole = ({ handleChange, inputOptions }) => {
  return (
    <div>
      <Autocomplete
        id="Input-Textbox"
        options={inputOptions}
        getOptionLabel={(option) => option}
        style={{ width: 300, margin: "auto" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Github Repository"
            variant="outlined"
            onChange={(event) => handleChange(event)}
          />
        )}
      />
      <Button data-testid="search-button" variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
};

export default SearchConsole;
