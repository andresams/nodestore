# Create nodestore server (api)
FROM node:latest as nodestore

RUN mkdir /src
RUN npm install nodemon -g

WORKDIR /src
ADD package.json /src/package.json
RUN npm install

ADD nodemon.json /src/nodemon.json
# Running on port 8000 since reactstore container will be using port 3000
EXPOSE 8000

CMD npm start
