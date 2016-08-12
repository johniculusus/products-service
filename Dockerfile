FROM node:wheezy

# Create app directory
#RUN mkdir -p /usr/src/app/
#WORKDIR /usr/src/app/

# Install app dependencies
#COPY package.json /usr/src/app/
#RUN npm install

# Bundle app source
#COPY . /usr/src/app/

#EXPOSE 3000
#CMD ["node","server.js"]

FROM centos:centos6

MAINTAINER gilwen-h.paragas@hpe.com

LABEL Description="This image is used to start product service" Vendor="HPE" Version="0.001"

# Enable EPEL for Node.js
RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node...
RUN yum install -y npm

# Copy app to /src
COPY . /src

# Install app and dependencies into /src
RUN cd /src; npm install

EXPOSE 3000

CMD cd /src && node ./app.js