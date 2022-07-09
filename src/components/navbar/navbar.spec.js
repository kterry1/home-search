import { render } from "@testing-library/react";
import Navbar from "./";

describe("Navbar", () => {
  it("should display the title of the website", async () => {
    const renderedNavbarComponent = render(<Navbar />);
    const siteName = await renderedNavbarComponent.findByText(/^Home Search$/);
    expect(siteName).toBeInTheDocument();
  });
});
