
import { render, screen, fireEvent } from "@testing-library/react";
import FormPage from "../pages/FormPage";
import apiClient from "../api/apiClient";

jest.mock("../api/apiClient");

test("submits new entry to the API", async () => {
    apiClient.post.mockResolvedValue({});

    render(<FormPage />);

    const titleInput = screen.getByPlaceholderText(/enter title/i);
    const bodyTextarea = screen.getByPlaceholderText(/enter body/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(titleInput, { target: { value: "My Title" } });
    fireEvent.change(bodyTextarea, { target: { value: "My Body" } });
    fireEvent.click(submitButton);

    expect(apiClient.post).toHaveBeenCalledWith("/content", {
        title: "My Title",
        body: "My Body",
    });
});
