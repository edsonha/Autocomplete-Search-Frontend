import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <React.Fragment>
      {errorMessage ? (
        <h2 style={{ color: "red" }} data-testid="error-message">
          {errorMessage}
        </h2>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default ErrorMessage;
