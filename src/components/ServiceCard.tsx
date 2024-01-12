import { ApiStatusResponse } from "../types/types";

interface ServiceCardProps {
  apiName: string;
  apiStatus?: ApiStatusResponse;
}


 /**
 * ServiceCard Component
 * @component
 *
 * @param {string} props.apiName - The name of the API endpoint.
 * @param {ApiStatusResponse} [props.apiStatus] - The status response of the API. Optional.
 *
 * @returns {JSX.Element} - The rendered ServiceCard component.
 *
 * @example
 * // Example usage of ServiceCard component
 * <ServiceCard apiName="exampleApi" apiStatus={{ success: true, message: "", hostname: "example.com", time: 1638331423097 }} />
 */
const ServiceCard = ({ apiName, apiStatus }:ServiceCardProps) => {
  return (
    /**
     * ServiceCard Container
     * @class
     * @memberOf ServiceCard
     */
    <article className="card_container" key={apiName}>
      {apiStatus ? (
        <>
          {/* Header section */}
          <header className="card-header">
            <h2 className="card-title">
              {apiName.toLocaleUpperCase()}
            </h2>
          </header>

          {/* Status and details section */}
          <section className="card-section">
            {/* Status display */}
            <div
              className={`card-status ${
                apiStatus?.success ? "bg-green-600" : "bg-red-600"
              }`}
            >
              <p className="font-bold text-white">
                Status:{" "}
                <span className="">
                  {apiStatus?.success ? "Healthy" : "Error"}
                </span>
              </p>
            </div>

            {/* Details section */}
            <div>
              {apiStatus?.success ? (
                <p className="text-center ">{apiStatus?.hostname}</p>
              ) : (
                <>
                  <h3 className="font-bold text-red-600 text-center">OUTAGE</h3>
                  <p className="text-red-600 text-center">
                    403
                    <br />
                    forbidden
                  </p>
                </>
              )}
            </div>

            {/* Last Checked information */}
            {apiStatus?.success && (
              <div>
                <p className="text-center mt-2">
                  Last Checked:{" "}
                  {apiStatus?.time
                    ? new Date(apiStatus.time).toLocaleTimeString()
                    : "N/A"}
                </p>
              </div>
            )}
          </section>
        </>
      ) : (
        // Loading state
        <p className="font-medium animate-bounce">Loading...</p>
      )}
    </article>
  );
};

/**
 * @typedef {Object} ServiceCardProps
 * @property {string} apiName - The name of the API.
 * @property {ApiStatusResponse} [apiStatus] - The status response of the API. Optional.
 */

export default ServiceCard;

