docker build -t TeBellaCapstone-image .

docker tag TeBellaCapstone-image registry.heroku.com/TeBellaCapstone/web


docker push registry.heroku.com/TeBellaCapstone/web

heroku container:release web -a TeBellaCapstone