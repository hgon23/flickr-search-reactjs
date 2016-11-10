# Flickr search (ReactJS)

Demo app build with ReactJS to perform live Flickr image search

## Live demo

### Heroku

### Google App Engine

## Features

## Web framework layer
This generators can be used directly to bypass the framework question.

[![React](http://fountainjs.io/assets/imgs/react.png)](https://github.com/FountainJS/generator-fountain-react)

### Web tooling layer
[![Gulp](http://fountainjs.io/assets/imgs/gulp.png)](https://github.com/FountainJS/generator-fountain-gulp)
[![ESLint](http://fountainjs.io/assets/imgs/eslint.png)](https://github.com/FountainJS/generator-fountain-eslint)
[![BrowserSync](http://fountainjs.io/assets/imgs/browsersync.png)](https://github.com/FountainJS/generator-fountain-browsersync)
[![Karma](http://fountainjs.io/assets/imgs/karma.png)](https://github.com/FountainJS/generator-fountain-karma)

### Module management layer
[![Webpack](http://fountainjs.io/assets/imgs/webpack.png)](https://github.com/FountainJS/generator-fountain-webpack)
[![Bower](http://fountainjs.io/assets/imgs/bower.png)](https://github.com/FountainJS/generator-fountain-inject)

## Little Features

* Deployed to Paas services(Heroku & GAE) for easy demo
* Nearly 100% (99.15%) unit test coverage
* Detect when user input finishes before firing up API calls to Flickr
* Auto refresh/inject on code change to all connected devices in local development mode (powered by Gulp with browserSync)
* Using [Masonry](https://github.com/desandro/masonry) for search result layout

## Usage

### Install

##### Install required tools `gulp` and `bower`:
```
npm install -g gulp bower
```

##### Clone this repo and goto its directory

##### Install node packages:
```
npm install
```

### Run

#### Use Gulp tasks

If you have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global packages you can use equivalent:

- `gulp` or `gulp build`
- `gulp serve`
- `gulp serve:dist`
- `gulp test`
- `gulp test:auto`

#### Or NPM scripts

- `npm run build` to build an optimized version of your application in /dist
- `npm run serve` to launch a browser sync server on your source files
- `npm run serve:dist` to launch a server on your optimized application
- `npm run test` to launch your unit tests with Karma
- `npm run test:auto` to launch your unit tests with Karma in watch mode

**If you don't have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global, you should have this error:**
> /usr/local/lib/node_modules/gulp/bin/gulp.js:121
    gulpInst.start.apply(gulpInst, toRun);
TypeError: Cannot read property 'apply' of undefined