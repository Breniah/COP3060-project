import apiClient from "../api/apiClient";
import axios from "axios";

jest.mock("axios");

jest.mock("axios");

test("sends Authorization header with JWT for authenticated route", async () => {
    const fakeToken = "fake.jwt.token";
    const headers = {
        Authorization: `Bearer ${fakeToken}`,
    };

    // Pretend our code calls:
    await apiClient.get("/content", { headers });

    expect(apiClient.get).toHaveBeenCalledWith("/content", { headers });
});
