FROM nginx:stable-alpine
RUN apk update && apk add libxml2 && apk upgrade
COPY ./build /bin/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

COPY ./entrypoint.sh .

ENTRYPOINT ["./entrypoint.sh"]
