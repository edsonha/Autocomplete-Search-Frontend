import React from "react";
import { render } from "@testing-library/react";
import ResultTable from "../components/ResultTable/ResultTable";
import mockSearchResults from "../__mocks__/mockSearchResults";

describe("Result Table", () => {
  it("should render Result Table with headers: Repository Name, Description, Stars, URL", () => {
    const { getByTestId, getByText } = render(<ResultTable />);

    const resultTable = getByTestId("result-table");
    const repoNameHeader = getByText("Repository Name");
    const descriptionHeader = getByText("Description");
    const starsHeader = getByText("Stars");
    const urlHeader = getByText("URL");

    expect(resultTable).toBeInTheDocument();
    expect(repoNameHeader).toBeInTheDocument();
    expect(descriptionHeader).toBeInTheDocument();
    expect(starsHeader).toBeInTheDocument();
    expect(urlHeader).toBeInTheDocument();
  });

  it("should display list of 2 search result with Repository Name, Description, Stars, URL", () => {
    const { getAllByTestId } = render(
      <ResultTable searchData={mockSearchResults} />
    );

    const firstRepoName = getAllByTestId("search-name-info")[0];
    const firstDescription = getAllByTestId("search-description-info")[0];
    const firstStars = getAllByTestId("search-stars-info")[0];
    const firstUrl = getAllByTestId("search-url-info")[0];
    const secondRepoName = getAllByTestId("search-name-info")[1];
    const secondDescription = getAllByTestId("search-description-info")[1];
    const secondStars = getAllByTestId("search-stars-info")[1];
    const secondUrl = getAllByTestId("search-url-info")[1];

    expect(getAllByTestId("result-table-row").length).toEqual(2);
    expect(firstRepoName).toHaveTextContent(/repo 1/);
    expect(firstDescription).toHaveTextContent(/repo1 description/);
    expect(firstStars).toHaveTextContent(/100/);
    expect(firstUrl).toHaveTextContent(/mock URL 1/);
    expect(secondRepoName).toHaveTextContent(/repo 2/);
    expect(secondDescription).toHaveTextContent(/repo2 description/);
    expect(secondStars).toHaveTextContent(/200/);
    expect(secondUrl).toHaveTextContent(/mock URL 2/);
  });
});
