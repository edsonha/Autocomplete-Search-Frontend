import React from "react";
import { render } from "@testing-library/react";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

describe("Error Message", () => {
  it("should render error message when there is an error", () => {
    const { getByTestId } = render(<ErrorMessage errorMessage={"error"} />);

    const errorMessage = getByTestId("error-message");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should not render error message when there is no error", () => {
    const { queryByTestId } = render(<ErrorMessage errorMessage={null} />);

    const errorMessage = queryByTestId("error-message");
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("test", () => {
    expect(true).toBeTruthy();
  });
});
