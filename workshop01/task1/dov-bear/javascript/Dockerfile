#build
FROM node:20

LABEL name=dov-bear

ARG APP_DIR=/app

WORKDIR ${APP_DIR}

ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD public public

RUN npm ci

#run
ENV APP_PORT=3000
EXPOSE ${APP_PORT}

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -s -f http://localhost:${APP_PORT}/ready > /dev/null || exit 1 


ENTRYPOINT node main.js 
