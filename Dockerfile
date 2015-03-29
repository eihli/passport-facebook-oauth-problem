FROM google/nodejs

RUN  npm install nodemon -g

WORKDIR /app

ADD . /app

EXPOSE 3000
ENV PORT=3000
ENV MONGO_PORT=27017

CMD nodemon server.js