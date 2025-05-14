FROM nginx:1.27.5-alpine
RUN apk update --no-cache && apk add --no-cache libxml2 && apk upgrade --no-cache
COPY ./build /bin/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /bin/www && chmod -R 755 /bin/www && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

USER nginx

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl --fail http://localhost:3000 || exit 1
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]

COPY ./entrypoint.sh .

ENTRYPOINT ["./entrypoint.sh"]
