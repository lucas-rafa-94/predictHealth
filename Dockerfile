FROM nginx:1.13.3-alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
