docker build . -t <your username>/doji-test

docker images

docker run -p 80:3000 -d <your username>/doji-test

docker ps

docker logs <container id>

curl http://<container ip>/doji/type