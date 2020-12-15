
FROM node:alpine

WORKDIR /app

RUN apk update && \
    apk add --no-cache git curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

EXPOSE 3000

CMD [ "/sbin/init" ]
