FROM node:18 as build-step

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

RUN npm run build
RUN ls -l /app/dist

FROM nginx:alpine

COPY --from=build-step /app/dist/ap1/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
