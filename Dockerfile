# Use official Node.js image
FROM node:22 AS build

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
FROM node:22 AS serve

# Set working directory for serving the app
WORKDIR /app

# Install serve package to serve static files
RUN npm install -g serve  
# Install the 'serve' package globally

# Copy the build output from the build stage to the serve stage
COPY --from=build /app/dist /app/dist  
# Copy build files from the build stage to the serve stage

# Expose the port that Vite is serving the app on (4173 by default)
EXPOSE 5000

# Serve the app using the serve command
CMD ["serve", "-s", "dist", "-l", "5000"]  # Serve on port 4173
