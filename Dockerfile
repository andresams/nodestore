# Create reactstore client
FROM node:latest as reactstore

RUN mkdir /src
WORKDIR /src

ADD package.json /src/package.json
RUN npm install

EXPOSE 3000

CMD npm start
