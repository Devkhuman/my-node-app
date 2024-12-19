# Use the official Node.js image (alpine variant for smaller size)
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to utilize Docker cache
COPY package*.json ./

# Install dependencies (use npm ci for faster, more reliable builds)
RUN npm ci --only=production

# Copy only necessary application files (excluding node_modules)
COPY . .

# Expose the application port (adjust if needed)
EXPOSE 3001

# Command to run the application
CMD ["node", "server.js"]


