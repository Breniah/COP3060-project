import { render, screen } from "@testing-library/react";
import FormPage from "../pages/FormPage";
import axios from "axios";

jest.mock("axios");

test("renders the reflection form", () => {
    render(<FormPage />);

    // Check for the main title seen in your error log
    expect(screen.getByText(/Daily Reflection/i)).toBeInTheDocument();

    // Check for the input fields seen in your error log
    expect(screen.getByPlaceholderText(/Entry Title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Write your thoughts here/i)).toBeInTheDocument();

    // Check for the submit button
    expect(screen.getByRole("button", { name: /Save Reflection/i })).toBeInTheDocument();
});