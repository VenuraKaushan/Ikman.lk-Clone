# Stage 1: Build the React app using Vite
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./ 
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

#RUN
CMD ["npm","run","dev"] .

