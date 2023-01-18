FROM nginx:stable-alpine
RUN apk update && apk add libxml2 && apk upgrade
COPY ./build /bin/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /bin/www && chmod -R 755 /bin/www && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid


USER nginx


EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

COPY ./entrypoint.sh .

ENTRYPOINT ["./entrypoint.sh"]
