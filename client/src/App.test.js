import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app's title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Software/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a book's title 'React Testing Library – Tutorial with JavaScript Code Examples'", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Testing Library – Tutorial with JavaScript Code Examples/i);
  expect(linkElement).toBeInTheDocument();
});

xtest("renders a book's author named 'Nathan Sebhastian'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Nathan Sebhastian/i);
  expect(linkElement).toBeInTheDocument();
});

xtest("renders a book's date as 'MARCH 7, 2021'", () => {
  render(<App />);
  const linkElement = screen.getByText(/MARCH 7, 2021/i);
  expect(linkElement).toBeInTheDocument();
});

xtest("renders a book's platform named 'www.freecodecamp.org'", () => {
  render(<App />);
  const linkElement = screen.getByText(/ www.freecodecamp.org /i);
  expect(linkElement).toBeInTheDocument();
});

xtest("renders a book's catagory as 'Testing'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing/i);
  expect(linkElement).toBeInTheDocument();
});

xtest("renders a book author named 'Nathan Sebhastian'", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Testing Library – Tutorial with JavaScript Code Examples/i);
  expect(linkElement).toBeInTheDocument();
});

xtest("renders a book's rating number as'144'", () => {
  render(<App />);
  const linkElement = screen.getByText(/144/i);
  expect(linkElement).toBeInTheDocument();
});

xtest("renders a book's rating star as 'rating star'", () => {
  render(<App />);
  const linkElement = screen.getByAltText()(/rating star/i);
  expect(linkElement).toBeInTheDocument();
});
