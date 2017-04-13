# Tells Docker which base image to use.
FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

#expose a port to allow external access
EXPOSE 8090

# Start application
# CMD ["npm", "run", "dev:startServer"]

