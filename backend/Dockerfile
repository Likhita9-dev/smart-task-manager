# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose backend port
EXPOSE 5000

# Start server
CMD ["npm", "run", "dev"]
