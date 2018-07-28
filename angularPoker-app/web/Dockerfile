FROM node:latest

RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

# install angular-cli as node user
RUN chown -R node:node /usr/local/lib/node_modules \
  && chown -R node:node /usr/local/bin

USER node
RUN yarn global add @angular/cli@1.4.10

# set yarn as default package manager for root
USER root
RUN ng set --global packageManager=yarn

WORKDIR /web

COPY package.json .
RUN yarn install

COPY . .

# use the following command to copy the node_modules so that intellisense works:
#   docker cp angularpoker-app_aa-web_1:/web/node_modules ./web/node_modules