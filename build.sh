docker stop dp-server
docker container rm dp-server

docker build --tag dp-serv .

docker create -p 8000:8000 --name dp-server dp-serv
docker start dp-server
