# Quick Recycle

Quick Recycle is a web application designed to encourage recycling activities by allowing users to earn credits for recycling and redeem those credits for coupons. This project features both frontend and backend components built with various technologies.

## Project Structure

The project consists of the following main directories:

- `recycle-app/`
  - `client/` (Frontend - React)
  - `server/` (Backend - Spring Boot)

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for frontend)
- [Java JDK 11 or later](https://www.oracle.com/java/technologies/javase-downloads.html) (for backend)
- [Maven](https://maven.apache.org/) (for backend)
- [Git](https://git-scm.com/) (for version control)

## Setup

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd recycle-app/server
    ```

2. Build and run the Spring Boot application:

    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

   The backend will start on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd recycle-app/client
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

   **Note:** You may encounter vulnerabilities in the `node_modules` directory. To address them, follow the steps below:

   **a. Attempt Automatic Fixes:**

   ```bash
   npm audit fix
b. Force Fixes:

If needed, run:

bash
Copy code
npm audit fix --force
c. Review and Resolve Critical Vulnerabilities:

Run:

bash
Copy code
npm audit
Manually update dependencies as required.

Start the React application:

bash
Copy code
npm start
The frontend will be available at http://localhost:3000.

Directory Structure
Backend (server)
src/main/java/com/example/quickrecycle/
controller/ - REST API controllers
service/ - Business logic
repository/ - Data access layers
model/ - Data models
src/main/resources/
application.properties - Application configuration
Frontend (client)
src/
app/ - Angular components, services, etc.
assets/ - Static assets
environments/ - Environment files
Contributing
Contributions are welcome! Please follow the standard fork-and-pull request workflow.

Fork the repository.
Create a feature branch.
Make your changes.
Submit a pull request with a description of the changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Spring Boot - For building the backend
React - For building the frontend
npm - For package management
