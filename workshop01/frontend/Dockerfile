FROM node:20

LABEL name=my-iss-app

WORKDIR ${APP_DIR}

ADD src src
ADD package.json .
ADD package-lock.json .
ADD public public

RUN npm ci

ENV APP_PORT=3000

EXPOSE ${APP_PORT}

CMD ["npm", "start"] ${APP_PORT}

