import axios, { AxiosResponse } from 'axios';
import { ApiStatusResponse } from "../types/types";

const BASE_URL = 'https://api.factoryfour.com';
/**
 * Fetches the health status of the factory four API.
 *
 * @async
 * @function
 * @param {string} apiName - The name of the API endpint.
 * @returns {Promise<ApiStatusResponse>} - A promise that resolves to the health status of the API.
 *
 * @throws {Error} If an error occurs during the API request.
 *
 * @example
 * // Example usage of getApiHealthStatus function
 * const apiStatus = await getApiHealthStatus('exampleApi');
 * console.log(apiStatus);
 */
const getApiHealthStatus = async (apiEndpoint:string) => {
  try {
    /**
     * Axios response containing the API health status.
     * @typedef {Object} AxiosResponse<ApiStatusResponse>
     */
    const response: AxiosResponse<ApiStatusResponse> = await axios.get(`${BASE_URL}/${apiEndpoint}/health/status`);

    // Extracts the hostname from the full domain and updates the response data
    return { ...response.data, hostname: response.data.hostname.split('.')[0] };
  } catch (error) {
    /**
     * Represents the health status when an error occurs.
     * @typedef {Object} ErrorStatus
     * @property {boolean} success - Indicates whether the request was successful.
     * @property {string} message - The error message.
     * @property {string} hostname - The hostname (empty string in case of error).
     * @property {number} time - The timestamp of the request.
     */
    // Handle errors, e.g., show a 503 status for the deprecated API
    return { success: false, message: 'Service Unavailable', hostname: '', time: Date.now() };
  }
};

export default getApiHealthStatus;
