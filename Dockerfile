FROM node:21.6.1-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml drizzle.config.ts ./

RUN pnpm run clean
RUN pnpm install --frozen-lockfile 

COPY . .

RUN pnpm run build

EXPOSE 9000

CMD [ "pnpm", "start:prod" ]