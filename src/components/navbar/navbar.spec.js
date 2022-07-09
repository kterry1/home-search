import { render, screen, prettyDOM } from "@testing-library/react";
import Navbar from "./";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });
  it("should display the title of the website", async () => {
    const siteName = await screen.findByText(/^Home Search$/);
    expect(siteName).toBeInTheDocument();
  });
  it("should display 'Sign In'", async () => {
    const signInText = await screen.findByTestId("sign-in");
    expect(signInText).toBeInTheDocument();
  });
});
