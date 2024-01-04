FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM nginx:latest
EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/* 
COPY --from=builder /app/dist/ /usr/share/nginx/html  
COPY --from=builder /app/dist/ /var/www/html/