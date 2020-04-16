import React from "react";
import { render } from "@testing-library/react";
import SearchConsole from "../components/SearchConsole/SearchConsole";

describe("Search Console", () => {
  it("should render the input textbox and the search button ", () => {
    const { getByLabelText, getByTestId } = render(
      <SearchConsole inputOptions={["value1", "value2"]} />
    );

    const inputBox = getByLabelText("Search Github Repository");
    const searchButton = getByTestId("search-button");

    expect(inputBox).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
