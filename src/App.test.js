import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders MedTara brand in navbar", () => {
  render(<App />);
  expect(screen.getAllByText(/MedTara|Tara/i).length).toBeGreaterThan(0);
});
