# Entreprise Connect - Frontend

![Vue Version](https://img.shields.io/badge/Vue-3.0.0-brightgreen.svg)

Welcome to the frontend of **Entreprise Connect**, a web application designed to retrieve and display enterprise data from the associated backend. This frontend part of the project is built using Vue.js and Vite.

## Features

- Display enterprise data as cards
- Pagination for better user experience
- Search functionality to filter enterprises by name
- Detailed view of an enterprise, including Google Maps image based on GPS coordinates

## Project Structure

This project is a part of the "Entreprise Connect" project, serving as the frontend. It works in conjunction with a backend to fetch and display enterprise information. The frontend is built using Vue.js and leverages various libraries for UI and state management.

### Technologies Used

- Vue.js: A progressive JavaScript framework for building user interfaces.
- Vite: A fast build tool and development server.
- Naive UI: A Vue.js UI library with a set of high-quality components.
- Axios: A promise-based HTTP client for making API requests.

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/dorian-pltr/entreprise-connect-front.git
```

2. Navigate to the project directory:

```bash
cd entreprise-connect-frontend
```

3. Install dependencies:

```bash
yarn
```

4. Configure Environment Variables:

   Create a `.env` file in the root directory and set the following variables:

   ```env
   VITE_BACKEND_URL=<URL of your backend/or the one I host>
   VITE_GMAPS_API_KEY=<Your Google Maps API Key>
   ```

5. Run the development server:

```bash
yarn dev
```

6. Open your browser and navigate to the local application

### Usage

- Browse through the list of enterprises displayed as cards.
- Use the search bar to filter enterprises by name.
- Navigate between pages using the pagination controls.
- Click on an enterprise card to view detailed information, including a Google Maps image based on GPS coordinates.