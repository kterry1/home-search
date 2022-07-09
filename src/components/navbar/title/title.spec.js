import { render } from "@testing-library/react";
import Title from "./index";

describe("Title", () => {
  it('should display passed in value to "title" prop', async () => {
    const renderedTitleComponent = render(<Title title="New Page" />);
    const renderedTitleProp = await renderedTitleComponent.findByText(
      /^New Page$/
    );
    expect(renderedTitleProp).toBeInTheDocument();
  });
});
