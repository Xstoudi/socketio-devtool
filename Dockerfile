FROM node:latest

ENV VERSION 1.0.3
ENV HTTP_PORT 3000

WORKDIR /usr/src/socketio-devtool

RUN git clone https://github.com/Xstoudi/socketio-devtool/archive/$VERSION.zip; \
    cd socketio-devtool \
    npm start;

EXPOSE $HTTP_PORT
CMD ["npm", "start"]
