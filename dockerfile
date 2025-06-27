# Step 1: Use an official Node.js image as a base image
FROM node:18-alpine as build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --frozen-lockfile

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use an Nginx image to serve the build files
FROM nginx:alpine

# Step 8: Copy the build output from the previous step to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port Nginx will run on
EXPOSE 80

# Step 10: Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
