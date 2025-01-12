FROM node:21.6.1-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /app
WORKDIR /app

RUN pnpm run clean
RUN pnpm pnpm install --frozen-lockfile 
RUN pnpm run build

COPY . .
EXPOSE 9000
CMD [ "pnpm", "start:prod" ]




