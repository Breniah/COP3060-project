// src/__mocks__/axios.js

const mockAxiosInstance = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
};

const mockAxios = {
    create: jest.fn(() => mockAxiosInstance),
    get: mockAxiosInstance.get,
    post: mockAxiosInstance.post,
    put: mockAxiosInstance.put,
    delete: mockAxiosInstance.delete,
};

export default mockAxios;
