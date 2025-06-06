# A thousand channels: Map client

A prototype of a map frontend for the A thousand channels project w/Nuxt.js v2

Preview:
**https://a-thousand-channels.github.io/a1000c-map-client/**

It renders map data provided via ORTE Backend. Currently some sample map data is shown.

You can manually load any layer (that has the status "Published") into the client. Just add the URL of the layer to the URL with the param layer.

**https://a-thousand-channels.github.io/a1000c-map-client/?layer=LAYER_JSON_URL**

(You have to replace the placeholder LAYER_JSON_URL with a real URL.)

## Using a local backend

In order to use this client for backend development on your local machine, you can change the value for `defaultDataUrl` value in nuxt.config.js to something like http://127.0.0.1:3000/public/maps/1/layers/1.json (alternatively to the ids, use your map's and layer's title).

---

## Testing

e2e and component testing with Cypress

### e2e testing

```bash
# start the client
$ yarn dev
# run cypres
$ yarn run cypress open
```

Tests are located in /cypress/integration

### Component testing

With Cypress + Webpacker

```bash
# run with yarn
$ yarn run cypress open-ct
# run with npx
$ npx cypress open-ct
```

Tests reside in-place in the /components-folder

More infos about [Cypress component testing](https://www.cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner/)

Installation explained in [Cypress.io Framework Configuration](https://docs.cypress.io/guides/component-testing/framework-configuration#Nuxt)


----

## Nuxt.js Installation and setup


### Installation

```bash
# install dependencies
$ yarn install
```

### Build/Run


```bash
# serve with hot reload at localhost:3000
$ yarn dev

# serve at <YOUR_IP>:3000, to make it accessible for other machines in your network
$ HOST=<YOUR_IP> npm run dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

#### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

#### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

#### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


#### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

#### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

#### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

#### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
