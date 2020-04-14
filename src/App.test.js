import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Homepage", () => {
  describe("Home Title", () => {
    it("should render Autocomplete Search Input from Github API on webpage", () => {
      const { getByText } = render(<App />);
      const linkElement = getByText(
        /Autocomplete Search Input from Github API/i
      );
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Input Console", () => {
    it("should render the input box and the search button ", () => {
      const { getByPlaceholderText, getByTestId } = render(<App />);

      const inputBox = getByPlaceholderText("Search Github Repository");
      const searchButton = getByTestId("search-button");

      expect(inputBox).toBeInTheDocument();
      expect(searchButton).toBeInTheDocument();
    });
  });
});
