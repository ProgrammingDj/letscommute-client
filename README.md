# Let's Commute (Frontend)

This repository contains the frontend code for a ridesharing application. The frontend is built using React.js and communicates with the backend API to fetch and display data related to rides and user authentication.

## Prerequisites
Before running the frontend application, make sure you have the following prerequisites installed:
- Node.js
- npm (Node package manager)

## Getting Started
To get started with the frontend application, follow these steps:

1. Clone the repository:
   ```
   git clone <https://github.com/calicocode/letscommute-client>
   ```
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
   This will start the React development server and the application will be accessible at `http://localhost:3000`.

## Configuration
The frontend code uses environment variables to configure the API URL and other settings. The configuration file is located in the root directory of the frontend codebase and is named `.env`. You can modify the values in this file according to your backend API URL.

Example `.env` file:
```
REACT_APP_SERVER_URL=http://localhost:5005
```

Make sure to update the `REACT_APP_SERVER_URL` with the correct backend API URL.

## Authentication
The frontend code includes authentication functionality using JSON Web Tokens (JWT). When a user logs in or signs up, a JWT token is obtained from the backend API and stored in the browser's local storage. This token is sent in the request headers for authenticated API calls.

The authentication logic is implemented in the `AuthProviderWrapper` component, which sets up the authentication context and provides authentication-related functions and state variables to other components.

To protect private routes, the `IsPrivate` component is used. This component checks if the user is authenticated and redirects to the login page if not.

## Pages and Components
The frontend code consists of several pages and components. Here is an overview of each:

- `HomePage`: Displays the homepage of the application.
- `ExplorePage`: Shows a list of available rides retrieved from the backend API.
- `RideDetailsPage`: Displays detailed information about a specific ride.
- `EditRidePage`: Allows the user to edit the details of a ride.
- `SignupPage`: Provides a signup form for new users to create an account.
- `LoginPage`: Provides a login form for existing users to authenticate.
- `AddRidePage`: Allows the user to add a new ride.
- `MyRidesPage`: Shows a list of rides added by the authenticated user.
- `AddVehiclePage`: Allows the user to add a new vehicle to their profile.

In addition to these pages, there are also various components used for navigation, forms, and ride cards.

## API Requests
The frontend code uses Axios, a popular HTTP client, to make API requests to the backend server. The requests are sent to the API endpoints using the configured base URL (`REACT_APP_SERVER_URL` from the `.env` file) along with the appropriate route.

The API requests include authentication headers with the JWT token to authorize the user and access protected routes.

## Styling
The frontend code uses CSS for styling. The CSS files are located in the `src` directory and are imported into the respective components. The `HomePage.css` file contains the styling for the homepage component.

## Deployment
To deploy the frontend application, you can follow the standard process for deploying React applications. The code can be built using the `npm run build` command, which generates a production-ready build in the `build` directory. You can then deploy this build to a static file hosting service or serve it using a web server.

Remember to set the correct API URL in the `.env` file for the production environment.

## Conclusion
This README provides an overview of the frontend code for the ridesharing application. It explains the setup, configuration, authentication, pages, components, API requests, and deployment process. Refer to the code comments and component documentation for further details on the implementation.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
