import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new useer and show it on a list", () => {
  render(<App />);
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("armu");
  user.click(emailInput);
  user.keyboard("armu@gmail.com");

  user.click(button);

  //eslint-disable-next-line
  screen.debug();

  const name = screen.getByRole("cell", { name: "armu" });
  const email = screen.getByRole("cell", { name: "armu@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
