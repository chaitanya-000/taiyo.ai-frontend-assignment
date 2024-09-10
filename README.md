# Documentation Maintenance
Link : https://trello.com/b/BEQ92VQs/traiyoai-frontend-assignment

A Trello board has been created for maintaining the commits and adding more detailed information about them. Each commit is associated with a specific number, such as `#3` or `#43`. You can reference these commit numbers by navigating to the corresponding card in the Trello board to find more details about the commit.

Additionally, each commit has a **unique deployment view** attached, allowing you to see how the project looked at the time of that specific commit. This ensures that all changes are tracked and easily accessible for review.

---


# Project Structure & File Organization

## RootLayout Component

The `RootLayout` component provides the main layout structure for the entire application. It features a **responsive sidebar** that remains consistent across all routes. The component leverages **React Router’s Outlet** to render the content of specific routes within the layout. This keeps the sidebar persistent while displaying dynamic content based on the current route.

---

The component follows the **Atomic Design** methodology which are categorized into three primary types:

### 1. Molecules
Molecules are small, reusable components that combine basic UI elements. These serve as the building blocks used throughout the application.
- **Examples**: StatCard, Loading.

### 2. Organisms
Organisms are more complex components, built from molecules and other elements. They represent meaningful sections of the user interface.
- **Examples**: Map component, charts displaying COVID-19 data.

### 3. Pages
Pages are full, functional views that consist of multiple organisms and other components to create complete screens.
- **Examples**: Dashboard with charts and maps.

---

## State Management

The application’s global state is managed using **Redux Toolkit**.

### Contacts Slice (`contactsSlice.ts`)
The `contactsSlice` manages the state for contact information, providing the following functionality:
- **Add Contact**: The `addContact` action appends a new contact to the array.
- **Remove Contact**: The `removeContact` action removes a contact by its index.
- **Update Contact**: The `updateContact` action updates the details of a contact based on its index.
  
The initial state consists of an empty array of contacts.

---

## API Integration

### `apiRequests.ts`
This file centralizes all API requests related to fetching COVID-19 data. The API calls are structured into reusable functions to handle data fetching.
The base URL for the API is configured using an environment variable (`process.env.REACT_APP_BASE_URL`).

---

## TypeScript Interfaces

### `types.ts`
The `types.ts` file contains all TypeScript interfaces used throughout the application.

---

# API

**Endpoint**: `/historical/all?lastdays=all`  
Fetches the historical COVID-19 data for all countries, including cases, deaths, and recoveries over time.  
Used for displaying the line chart of cases, deaths, and recoveries.

**Endpoint**: `/countries`  
This data is used for populating the map with markers for each country.  
Used for rendering the map with country markers and displaying COVID-19 stats in popups.

**Endpoint**: `/all`  
Fetches the global statistics for COVID-19, including total cases, deaths, recoveries, and active cases worldwide.  
Used for displaying global statistics on the dashboard, such as total cases, deaths, and recoveries.

All API requests are made using the base URL defined in the `.env` file. The environment variable is named `REACT_APP_BASE_URL`.

---


# How to Run the Project
1. **Clone the Repository**:
git clone https://github.com/chaitanya-000/taiyo.ai-frontend-assignment

2. **Install Dependencies: Install the project dependencies using the package manager:** npm install or yarn install

3. Set Up Environment Variables: Create a .env file in the root directory and add the following:
REACT_APP_BASE_URL=https://disease.sh/v3/covid-19

4. Run the Project: To start the development server, run the following command:
npm start or yarn start


