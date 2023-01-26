import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo testleri", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });
});
