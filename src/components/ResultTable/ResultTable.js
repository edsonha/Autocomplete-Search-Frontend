import React from "react";
import "./ResultTable.css";

const ResultTable = ({ searchData }) => {
  return (
    <table style={{ marginTop: "20px" }} data-testid="result-table">
      <thead>
        <tr>
          <th>Repository Name</th>
          <th>Description</th>
          <th>Stars</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {searchData &&
          searchData.map((data) => {
            return (
              <tr key={data.url} data-testid="result-table-row">
                <td data-testid="search-name-info">{data.full_name}</td>
                <td data-testid="search-description-info">
                  {data.description}
                </td>
                <td data-testid="search-stars-info">{data.stars}</td>
                <td data-testid="search-url-info">
                  <a href={data.url} target={"blank"}>
                    {data.url}
                  </a>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ResultTable;
