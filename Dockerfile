# Pull the official Node.js Docker image
# This should match the `engines` property in `package.json` and `.nvmrc`
FROM node:7.10.0


# Create install location in Docker container
ADD . /cnn-antools-factors-fe/


# Change to working directory
WORKDIR /cnn-antools-factors-fe


# Install
RUN npm install


# Fire it up
CMD ["npm", "start"]
