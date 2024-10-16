# Use Node.js image
FROM node:19

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ../package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the backend port (e.g., 3000)
EXPOSE 3000

# Start the backend
CMD ["npm", "start"]
