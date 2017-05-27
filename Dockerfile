FROM node:latest

ENV VERSION 1.0.3
ENV HTTP_PORT 3000

RUN mkdir -p /usr/src/socketio-devtool
WORKDIR /usr/src/socketio-devtool

COPY . /usr/src/socketio-devtool
RUN npm install

EXPOSE $HTTP_PORT
CMD ["npm", "start"]
