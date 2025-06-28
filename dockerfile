FROM node:latest

# create app directory
WORKDIR /app

# Copy package.json first (for better caching)
COPY package*.json ./

# Install dependencies 
RUN npm install

#Copy rest of the code
COPY . .

# Expose Port
EXPOSE 3999

# Start your app
CMD ["npm", "run", "dev"]