import React from "react";
import "./ResultTable.css";

const ResultTable = ({ searchData }) => {
  return (
    <table style={{ marginTop: "20px" }}>
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
              <tr key={data.url}>
                <td>{data.full_name}</td>
                <td>{data.description}</td>
                <td>{data.stars}</td>
                <td>
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
