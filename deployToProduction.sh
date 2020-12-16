#! /bin/bash

# yarn build &&
scp -r ./.nuxt/ codingblocks@139.59.7.146:~/frontends/junior-frontend/.nuxt/ &&
ssh codingblocks@139.59.7.146 "cd ~/frontends/junior-frontends && pm2 restart ecosystem.config.js --end production"

