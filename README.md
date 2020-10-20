# junior-frontend

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# serve at http://dev.junior via dockerized nginx. 
$ echo "127.0.0.1 dev.junior" >> /etc/hosts # Make sure you have entry in /etc/hosts
$ yarn nginx.linux # nginx.mac for mac

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
