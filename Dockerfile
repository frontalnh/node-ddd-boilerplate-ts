FROM node:8-alpine

# set working directory
WORKDIR /app

# install global environment
RUN npm i npm@latest -g
RUN npm install -g --quiet node-gyp
RUN npm install -g --quite typescript ts-node

# copy whole file to /app which is working directory
COPY . /app

# install build dependencies for some node module to be able to be built natively.
RUN apk --no-cache add g++ gcc git libgcc libstdc++ linux-headers make python

# install npm package
RUN npm install

# give execute permission to script file
RUN npm run-script build
# Make port 3001 available to the world outside this container
EXPOSE 3001


CMD [ "npm","run-script","start" ]
