# Use official Node.js image
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps  
# Install dependencies, handling peer-dep issues

# Copy the rest of the app source code
COPY . .  
# Copy the rest of the source files into the container

# Build the app using Vite
RUN npm run build 
# Run the build command (npm run build)

# Use a smaller image to run the app in production
CMD ["npm", "run", "serve"]