FROM node:latest

# Create app directory
WORKDIR /app

# Copy package.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose your server port
EXPOSE 3999

# Start your app
CMD ["npm", "run", "dev"]