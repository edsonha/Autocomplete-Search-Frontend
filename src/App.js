import React, { Component } from "react";
import SearchConsole from "./components/SearchConsole/SearchConsole";
import ResultTable from "./components/ResultTable/ResultTable";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      inputOptions: [],
      searchData: [],
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
    axios
      .get(process.env.REACT_APP_API_URL + `/repos`, {
        params: { userInput: this.state.userInput },
      })
      .then(
        (res) => {
          this.setState({
            inputOptions: res.data.autocompleteSearchInput,
            searchData: res.data.searchResult,
          });
        },
        (err) => {
          console.log(`Error: ${err.message}`);
        }
      );
  };

  render() {
    const { inputOptions, searchData } = this.state;
    return (
      <div className="App">
        <h1>Autocomplete Search Input from Github API</h1>
        <SearchConsole
          handleChange={this.handleChange}
          inputOptions={inputOptions}
        />
        <ResultTable searchData={searchData} />
      </div>
    );
  }
}

export default App;
