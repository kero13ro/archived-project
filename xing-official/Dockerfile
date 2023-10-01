# NodeJS
FROM node:18.15.0 AS builder
ARG DEPLOY_ENV

WORKDIR /home/node/app

COPY package.json /home/node/app

RUN npm config set registry=http://registry.npmjs.org
RUN npm config set proxy http://192.168.101.1:3128/ 
RUN npm config set https-proxy http://192.168.101.1:3128/ 
RUN npm config set strict-ssl false
RUN rm -rf package-lock.json node_modules && npm install

COPY ./ /home/node/app
# RUN cp ./env/.env.$DEPLOY_ENV ./
# RUN echo $VERSION
# RUN echo "VUE_APP_VERSION=$VERSION" >> ./.env.$DEPLOY_ENV
RUN rm -rf dist && npm run build

# Nginx
# FROM nginx:1.19.6-alpine
# ENV TZ=Asia/Taipei
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# COPY --from=builder /home/node/app/dist /app
# COPY nginx.conf /etc/nginx/nginx.conf
