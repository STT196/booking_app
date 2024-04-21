FROM node:20-alpine3.18

RUN apk add --no-cache bash

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./

# change ownership of the /app directory to the app user
USER root

# change ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
RUN chown -R app:app .

# change the user back to the app user
USER app

RUN touch .env | echo VITE_API_URL: http://localhost:8000 >> .env
RUN npm install



COPY . .

EXPOSE 5173

CMD npm run dev
