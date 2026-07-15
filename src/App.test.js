import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders MedTara brand in hero", () => {
  render(<App />);
  expect(screen.getAllByText(/MedTara/i).length).toBeGreaterThan(0);
});
