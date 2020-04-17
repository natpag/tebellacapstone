docker build -t tebella-capstone-image .

docker tag tebella-capstone-image registry.heroku.com/tebella-capstone/web


docker push registry.heroku.com/tebella-capstone/web

heroku container:release web -a tebella-capstone