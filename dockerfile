FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY . /var/www
WORKDIR /var/www

RUN apk add --update nodejs npm
RUN npm i -g pm2
RUN npm i
RUN npm run build

EXPOSE 80

ENTRYPOINT ["sh", "start.sh"]
