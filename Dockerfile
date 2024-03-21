FROM node:20
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*json ./
RUN npm install
COPY . .
EXPOSE 8088
CMD ["npm", "start"]