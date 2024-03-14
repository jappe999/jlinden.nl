FROM node:18-alpine as build

WORKDIR /tmp/build
COPY . .
RUN npm ci \
    && npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www/html
COPY --from=build /tmp/build/public .