import React from "react";
import useApiStatus from "./hooks/setApiStatus";
import { API_ENDPOINTS } from "./helpers/constants";
import ServiceCard from "./components/ServiceCard";
import Header from "./components/Header";

/**
 * StatusPage Component
 * @component
 *
 * @description
 * A React functional component representing the status dashboard page.
 * Fetches and displays the health status of various FactoryFour APIs.
 *
 * @returns {JSX.Element} - The rendered StatusPage component.
 *
 * @example
 * // Example usage of StatusPage component
 * import StatusPage from './path/to/StatusPage';
 *
 * const App = () => {
 *   return (
 *     <StatusPage />
 *   );
 * };
 */
const StatusPage: React.FC = () => {
  // Fetches and holds the health status of various FactoryFour APIs
  const { apiStatus } = useApiStatus();

  return (
    <>
      {/* Page header */}
      <Header title="Status Dashboard" />

      {/* Main content section */}
      <section className="container">
        {/* Renders ServiceCard for each API endpoint */}
        {API_ENDPOINTS.map((apiName) => (
          <ServiceCard key={apiName} apiName={apiName} apiStatus={apiStatus[apiName]} />
        ))}
      </section>
    </>
  );
};

export default StatusPage;
