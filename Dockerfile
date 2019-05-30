FROM nginx:1.15-alpine

ADD default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY ./build .

ADD VERSION .

EXPOSE 80