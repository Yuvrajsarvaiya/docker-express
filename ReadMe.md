# Installation

- Run `nvm install 21.6.1`
- then Run `nvm use` to use node version specified in .nvmrc
- install the dependencies: `pnpm i`
- RUN `cp .env.test .env` to copy environment variables to `.env`
- Run in development mode: `pnpm run dev`
- Run `pnpm run build` to build the project

# Docker Setup

- Run the `docker build -t drizzle-docker .` to generate the docker image
- Run `docker run -p 9000:9000 --name drizzle-container [image_id]` to run the container from build docker image
- test the server endpoint with `CURL -X GET http://localhost:9000/health`

# postgres docker setup

- postgres container command: `docker run --name drizzle-postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=[DB_NAME] -e POSTGRES_PASSWORD=[PASSWORD] -d -p 5430:5432 [POSTGRES_IMAGE_NAME]`

# Docker network:

### To create docker network:

- Syntax: `docker network [network-name] -d [driver]`
- example: `docker network app-network -d bridge`

### To list available networks

- Syntax: `docker network ls`

### To inspect the network

- Syntax: `docker network inspect [netwrok_name]`
- example: `docker network inspect app-network`

### Running container on same network example.

- DB container: `docker run -d --name postgres --network app-network  -p 5430:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=test postgres`
- node app container: `docker run -d --name app --network app-network -e DATABASE_URL=postgres://postgres:password@postgres:5432/test -e PORT=9000 -p 9000:9000 app`
  [Note that In `postgres:5432`, **postgres** refers to container name of the database]

### Create volume to persist data:

- syntax: `docker volume create [volume_name]`
- example: `docker volume create postgres-data`

### To list available volumes

- Syntax: `docker volume ls`

### To inspect the volume

- Syntax: `docker volume inspect [volume_name]`
- example: `docker volume inspect postgres-data`

### Run the postgres container with volume

- `docker run -d --name postgres --network app-network -v postgres-data:/var/lib/postgresql/data -p 5430:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=test postgres`
  [`-v postgres-data`. here **postgres-data** refers to the volume name]
