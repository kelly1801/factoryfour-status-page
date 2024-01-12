# FactoryFour API Status Dashboard

This React-based web application provides a clear overview of the health status of various FactoryFour APIs. It periodically queries the health status endpoints of different APIs and displays the most recent results on a single page.

## Features

- **Real-time Status Updates:** The page fetches the health status of each API every 15 seconds, displaying the most recent result for each API.

- **Clear and Simple Design:** Designed for easy readability and understanding, providing a straightforward overview of API health.

- **Deprecated API Handling:** Handles a deprecated API that always returns a error, presenting it as a real outage.

## Stack

- **React:** A declarative, efficient, and flexible JavaScript library for building user interfaces.

- **TypeScript:** A superset of JavaScript that adds static typing to the language, making code more scalable and maintainable.

- **Axios:** A promise-based HTTP client for making requests to APIs. Used for handling HTTP calls in the application.
