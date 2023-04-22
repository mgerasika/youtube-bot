#for local testing/or local docker container
image=video-stream-server-image
container=video-stream-server-image
port=8002

docker stop $container
docker rm $container
docker image rm $image
docker build -t $image -f Dockerfile . --build-arg PORT=$port
docker run --restart=always --env PORT=8002 -v /home:/home -d -p $port:8002 --env-file=.env --name $container $image