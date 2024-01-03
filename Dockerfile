FROM node:18 as build-step

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

RUN npm run build
RUN ls -l /app/dist

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step /app/dist/ap1 /usr/share/nginx/html/ap1


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]