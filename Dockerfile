FROM ubuntu

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

RUN echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

RUN apt-get update && apt-get upgrade -y
RUN apt-get install git python vim build-essential wget curl mongodb-org nodejs npm git-core -y

RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g nodemon

EXPOSE 3000

WORKDIR /src

RUN npm install
CMD ["nodemon server.js"]