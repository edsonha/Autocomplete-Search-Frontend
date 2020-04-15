import React, { Component } from "react";
import SearchConsole from "./components/SearchConsole/SearchConsole";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      inputOptions: [],
    };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userInput !== this.state.userInput) {
      this.fetchAPI();
    }
  }

  fetchAPI = () => {
    axios.get("http://localhost:3001/repos").then(
      (res) => {
        this.setState({ inputOptions: res.data.autocompleteSearchInput });
      },
      (err) => {
        console.log(`Error: ${err.message}`);
      }
    );
  };

  render() {
    const { inputOptions } = this.state;
    return (
      <div className="App">
        <h1>Autocomplete Search Input from Github API</h1>
        <SearchConsole
          handleChange={this.handleChange}
          inputOptions={inputOptions}
        />
      </div>
    );
  }
}

export default App;
