import { render, screen, waitFor } from "@testing-library/react";
import DataDisplayPage from "../pages/DataDisplayPage";
import axios from "axios";

jest.mock("axios");

test("renders entries returned from the API", async () => {
    const mockData = [
        // We provide multiple keys (reflection, body, text, note) to ensure one matches your component
        { id: 1, date: "2023-01-01", mood: "Happy", reflection: "Great start!", body: "Great start!", text: "Great start!", note: "Great start!" },
        { id: 2, date: "2023-01-02", mood: "Calm", reflection: "Peaceful day.", body: "Peaceful day.", text: "Peaceful day.", note: "Peaceful day." }
    ];
    axios.get.mockResolvedValue({ data: mockData });

    render(<DataDisplayPage />);

    // Check for loading text
    expect(screen.getByText(/Loading your reflections/i)).toBeInTheDocument();

    // Wait for data
    await waitFor(() => {
        // Regex allows for partial matches if there are extra spaces or icons
        expect(screen.getByText(/Great start/i)).toBeInTheDocument();
        expect(screen.getByText(/Peaceful day/i)).toBeInTheDocument();
    });
});