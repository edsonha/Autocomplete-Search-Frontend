import React from "react";
import { render } from "@testing-library/react";
import SearchConsole from "../components/SearchConsole/SearchConsole";

describe("Search Console", () => {
  it("should render the input textbox", () => {
    const { getByLabelText } = render(
      <SearchConsole inputOptions={["value1", "value2"]} />
    );

    const inputBox = getByLabelText("Search Github Repository");

    expect(inputBox).toBeInTheDocument();
  });
});
