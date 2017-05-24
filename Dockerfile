FROM node:latest

ENV VERSION 1.0.1
ENV HTTP_PORT 3000

WORKDIR /usr/src/socketio-devtool

RUN wget -O socketio-devtool.zip "https://github.com/Xstoudi/socketio-devtool/archive/${VERSION}.zip"; \
    unzip socketio-devtool.zip; \
    npm start; \
    rm socketio-devtool.zip


EXPOSE HTTP_PORT
CMD ["npm", "start"]