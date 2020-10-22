FROM node:12.16.1-alpine As builder

WORKDIR /usr/share/app

RUN npm i -g @angular/cli@9.1.0

EXPOSE 4200
