# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
RUN yarn
# Copy application files
COPY . .
RUN yarn build

# Copy application files
COPY . .

# Expose port 3000
EXPOSE 8002

# Start the application
CMD [ "yarn",  "start" ]
