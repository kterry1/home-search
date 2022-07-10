import { render, screen } from "@testing-library/react";
import SearchInput from "./index";

describe("SearchInput", () => {
  beforeEach(() => {
    render(<SearchInput />);
  });
  it("should display the title for the search input on main page", async () => {
    const searchInputTitle = await screen.findByText(
      /^The easiest way to buy without a hassle.$/
    );
    expect(searchInputTitle).toBeInTheDocument();
  });
});
