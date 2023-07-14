import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  return {
    users,
  };
}

test("render one row per user", () => {
  // Render the component
  const { users } = renderComponent();

  const { container } = render(<UserList users={users} />);
  //screen.logTestingPlaygroundURL();

  // Find all the rows in the table
  //eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render one row per user usin within", () => {
  // Render the component
  renderComponent();
  //screen.logTestingPlaygroundURL();

  // Find all the rows in the table
  //eslint-disable-next-line
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  // Render the component
  const { users } = renderComponent();

  for (let user of users) {
    //screen.logTestingPlaygroundURL();
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    // Assertion: correct number of rows in the table
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
