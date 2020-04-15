import React, { Component } from "react";
import SearchConsole from "./components/SearchConsole/SearchConsole";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Autocomplete Search Input from Github API</h1>
        <SearchConsole handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
