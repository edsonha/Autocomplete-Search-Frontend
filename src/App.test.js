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
});
