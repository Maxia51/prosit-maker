FROM nginx:1.15-alpine

WORKDIR /usr/share/nginx/html

COPY ./build .

ADD VERSION .

EXPOSE 80