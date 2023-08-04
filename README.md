# Sportsee

This is a React-based dashboard application that fetches data from an API, creates and displays different types of charts, and separates the code into reusable components.

## Getting Started

To get started with the application, follow the steps below:

1. Clone the repository:

```bash
git clone <repository_url>

cd dashboard-application
npm install

npm start

The application should now be running on http://localhost:3000/.

Features
The dashboard application has the following features:

Data Retrieval from API: The application fetches data from an external API using Axios. It also handles scenarios where the API is unavailable and uses locally simulated data in that case.

Chart Creation and Display: The application creates and displays different types of charts using the popular recharts library. The available charts include Bar Charts, Line Chart, Radial Chart, and Spider Chart.

Logical Code Separation: The code is logically separated into reusable components, making it easier to maintain and extend the application. Each chart is encapsulated in its own component and can be reused in other parts of the application.

Project Structure
The project has the following structure:

src/
components/: Contains all the reusable components used to build the dashboard.
data/: Contains the simulated data used when the API is unavailable.
services/: Contains classes that handle API calls and data processing.
App.tsx: The main entry point of the application.
Api.ts: Handles API calls and data retrieval using Axios.
Apiurl.ts: Contains a function to determine the API URL based on configuration.
index.tsx: The root file that renders the entire application.
Dependencies
The project uses the following main dependencies:

React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API calls.
Recharts: Charting library for React applications.
D3.js: JavaScript library for creating interactive data visualizations.
Configuration
You can configure the application to use real API data or simulated data. To do this, modify the useMockData variable in Apiurl.ts. When useMockData is set to true, the application will use simulated data. Otherwise, it will try to fetch data from the specified API URL.

Contributing
If you wish to contribute to the project, feel free to submit pull requests or raise issues.
