FROM node:14 as frontend
WORKDIR /usr/overwatch-app
COPY package.json .
COPY tsconfig.json .
COPY src ./src
COPY public ./public
RUN npm install --only=production
RUN npm run build
#RUN npm install pm2 -g

#EXPOSE 80
#RUN ls -a
#RUN ls ./build
#CMD ["pm2-runime", "app.js"]
#CMD ["node", "./dist/main.js"]
RUN ls -a ./build/
FROM nginx
COPY --from=frontend /usr/overwatch-app/build /usr/share/nginx/html
