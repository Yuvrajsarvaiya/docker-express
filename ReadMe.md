# Installation

- Run ``nvm install 21.6.1`
- then Run `nvm use` to use node version specified in .nvmrc
- install the dependencies: `pnpm i`
- RUN `cp .env.test .env` to copy environment variables to `.env`
- Run in development mode: `pnpm run dev`
- Run `pnpm run build` to build the project

# Docker Setup

- Run the `docker build -t drizzle-docker` to generate the docker image
- Run `docker run -p 9000:9000 --name drizzle-container [image_id]` to run the container from build docker image
- test the server endpoint with `CURL -X GET http://localhost:9000/health`
