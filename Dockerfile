# Pull the official Node.js Docker image
# This should match the `engines` property in `package.json` and `.nvmrc`
FROM node:8.1.2


# Create install location in Docker container
ADD . /cnn-antools-factors-fe/


# Change to working directory
WORKDIR /cnn-antools-factors-fe


# Install
RUN npm install --loglevel warn


# Fire it up
CMD ["npm", "start"]
