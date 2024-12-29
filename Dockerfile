# Stage 1: Compile and Build Angular codebase

# Use Node.js 16.20.2 as the base image
FROM node:16.20.2 as build

# Set the working directory inside the container
WORKDIR /usr/local/app

# Copy the source code to the working directory
COPY ./ /usr/local/app/

# Install the specific npm version (8.19.4)
RUN npm install -g npm@8.19.4

# Install all dependencies
RUN npm install

# Build the Angular application
RUN npm run build

# Stage 2: Serve the app with an Nginx server

# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the build output from the previous stage to the Nginx HTML directory
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
