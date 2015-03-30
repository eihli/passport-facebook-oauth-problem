FROM google/nodejs

RUN  npm install nodemon -g

WORKDIR /app

ADD . /app

EXPOSE 3000
ENV NODE_ENV=production

CMD node server