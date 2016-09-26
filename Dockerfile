FROM ghost:0.11
MAINTAINER Benjamin Pannell <admin@sierrasoftworks.com>

ADD config.js /usr/src/ghost/config.js

ENV NODE_ENV=production
ENV GHOST_PRODUCTION_URL="http://my-ghost-blog.com"
ENV GHOST_PRODUCTION_SERVER_HOST="0.0.0.0"

CMD npm start