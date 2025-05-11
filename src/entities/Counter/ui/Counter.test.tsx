import { fireEvent, screen } from "@testing-library/react";

import { renderComponent } from "@/shared/config/tests/renderComponent/renderComponent";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("test render", () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", () => {
    renderComponent(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
