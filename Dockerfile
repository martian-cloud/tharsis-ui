# Pin to specific SHA for immutable builds
FROM nginx:1.29.1-alpine@sha256:42a516af16b852e33b7682d5ef8acbd5d13fe08fecadc7ed98605ba5e3b26ab8

LABEL maintainer="Martian Cloud Team"

RUN apk --no-cache update && \
        apk --no-cache add libxml2=2.13.8-r0 curl=8.14.1-r1 && \
        find /usr /bin /sbin -perm /6000 -type f -exec rm -f {} \; && \
        rm -rf /var/cache/apk/* && \
        rm -rf /etc/apk && \
        rm -rf /usr/share/man /usr/share/doc /tmp/* /var/tmp/*

COPY ./dist /bin/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --chmod=0755 ./entrypoint.sh .

RUN chown -R nginx:nginx /bin/www && chmod -R 755 /bin/www && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d && \
        touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

USER nginx

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl --fail http://localhost:3000 || exit 1
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]

ENTRYPOINT ["./entrypoint.sh"]
