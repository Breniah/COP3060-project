
// src/__tests__/DataDisplayPage.test.js
import { render, screen, waitFor } from "@testing-library/react";
import DataDisplayPage from "../pages/DataDisplayPage";
import apiClient from "../api/apiClient";

// Use our manual mock instead of the real apiClient
jest.mock("../api/apiClient");

test("renders entries returned from the API", async () => {
    // Arrange: fake API response
    apiClient.get.mockResolvedValue({
        data: [{ id: 1, title: "Test Title", body: "Test body" }],
    });

    render(<DataDisplayPage />);

    // Loading text is shown first
    expect(
        screen.getByText(/Loading your entries/i)
    ).toBeInTheDocument();

    // Wait for data to appear
    await waitFor(() => {
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test body")).toBeInTheDocument();
    });

    // Verify we called the right endpoint
    expect(apiClient.get).toHaveBeenCalledWith("/content");
});
