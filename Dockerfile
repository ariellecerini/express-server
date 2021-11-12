FROM node:12-alpine
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000
CMD ["npm", "start"]

#FROM ubuntu 

# ubuntu setup
#RUN apt-get update -y
#RUN apt-get upgrade -y 
#RUN apt-get install nodejs -y && apt-get install npm -y 

# install curl for n
#RUN apt-get install curl -y
#RUN apt-get install vim -y 

# obtain latest stable version of node
#RUN npm cache clean -f
#RUN npm install -g n
#RUN n stable 

# setup working directory
# ADD /App /App
#WORKDIR /App
#RUN npm install 

# expose port
#EXPOSE 8080
