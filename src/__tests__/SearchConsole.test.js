import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchConsole from "../components/SearchConsole/SearchConsole";

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});

describe("Search Console", () => {
  it("should render the input textbox", () => {
    const { getByLabelText } = render(
      <SearchConsole inputOptions={["value1", "value2"]} />
    );

    const inputBox = getByLabelText("Search Github Repository");

    expect(inputBox).toBeInTheDocument();
  });

  it("should trigger the onChange function when the input text is filled in", () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <SearchConsole
        handleChange={handleChange}
        inputOptions={["value1", "value2"]}
      />
    );

    const inputBox = getByLabelText("Search Github Repository");

    fireEvent.change(inputBox, { target: { value: "react" } });

    expect(inputBox).toHaveAttribute("value", "react");
  });
});
