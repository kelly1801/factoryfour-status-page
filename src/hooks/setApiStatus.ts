import { useState, useEffect } from 'react';
import getApiHealthStatus from '../services/apiServices';
import { ApiStatusResponse } from '../types/types';
import { API_ENDPOINTS } from '../helpers/constants';

/**
 * Custom React hook for tracking the health status of multiple FactoryFour APIs.
 *
 * @function
 * @name useApiStatus
 *
 * @param {number} [intervalSeconds=15] - The interval, in seconds, for fetching API health statusthe default value is 15 seconds.
 * @returns {Object} - An object containing the current API status and a function to manually fetch the status.
 *
 * @property {Object} apiStatus - The current health status of each API, stored in an object with API names as keys.
 * @property {function} fetchApiStatus - A function to manually trigger the fetching of API health status.
 *
 * @example
 * // Example usage of useApiStatus hook
 * const { apiStatus, fetchApiStatus } = useApiStatus(10);
 * console.log(apiStatus);
 * // Output: { 'accounts': { success: true, message: '', hostname: 'example.com', time: 1638331423097 }, ... }
 */
const useApiStatus = (intervalSeconds = 15) => {
  const [apiStatus, setApiStatus] = useState<{ [api: string]: ApiStatusResponse }>({});

  /**
   * Fetches the health status of all FactoryFour APIs.
   *
   * @async
   * @function
   * @private
   */
  const fetchApiStatus = async () => {
    const newApiStatus: { [api: string]: ApiStatusResponse } = {};

    for (const apiName of API_ENDPOINTS) {
      const result = await getApiHealthStatus(apiName);
      newApiStatus[apiName] = result;
    }

    setApiStatus(newApiStatus);
  };

  useEffect(() => {
    // Initial fetch on mount
    fetchApiStatus();

    // Fetch every specified interval
    const intervalId = setInterval(fetchApiStatus, intervalSeconds * 1000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [intervalSeconds]);

  return { apiStatus, fetchApiStatus };
};

export default useApiStatus;
