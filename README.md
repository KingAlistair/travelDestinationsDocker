# Travel Destinations Docker Project

This project is a full-stack application for managing travel destinations, built with a Node.js backend and frontend, connected to a MongoDB database. The entire setup runs within Docker containers for easy deployment and management.

## Prerequisites
Make sure you have the following installed:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)

## Getting Started

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/KingAlistair/travelDestinationsDocker.git
```

### 2. Project Structure
The repository contains the following main folders:

app/clientSide: The frontend files for the application
app/serverSide: The backend files for the application
docker-compose.yml: The Docker Compose configuration 

### 3. Build and Run the Application
Use Docker Compose to build and start the application. This command will download required images, build the custom images, and start all services defined in the docker-compose.yml file.

```bash
docker-compose up --build
```

### 4. Access the Application
Once Docker Compose finishes setting up the containers, you can access the application:

Frontend: Open a web browser and go to http://localhost:8080
Backend API: The backend API is available at http://localhost:3000
MongoDB: The MongoDB database is accessible within the Docker network by the backend service

### 5. Stop the Application
To stop all running containers, use the following command:
```bash
docker-compose down
```
This will stop and remove all containers created by docker-compose up.

## Additional Information

Images & Volumes:
Multer is configured to save images to app/clientSide/destinationImages.
The backend has access to the clientSide/destinationImages folder to save destination images.

