FROM node:19-alpine3.16 as build

ARG NODE_OPTIONS

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=${NODE_OPTIONS}

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# stage 2
FROM nginx:stable-alpine
RUN apk update && apk add libxml2 && apk upgrade
COPY --from=build /app/build /bin/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

COPY ./entrypoint.sh .

ENTRYPOINT ["./entrypoint.sh"]
