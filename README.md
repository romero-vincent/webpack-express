## Overview

An Express + Webpack + LiveReload[1] boilerplate.

## Installation

### Prerequisites

* `node` v5.4.0 and `npm` v.3.3.12

```sh
# navigate to the folder where the repo should be copied
cd ~
mkdir your_local_folder
cd ~/your_local_folder

# clone the repo
git clone git@git.tm.tmcs:romero-vincent/webpack-express.git

# switch to the branch you're interested in (develop branch is latest; master matches latest stable releases)
git checkout develop

# install the dependencies (may take a minute or two); also installs bower dependencies post npm install
npm install
```

## Development

### File Structure

```
dist/                               // output folder
bin/
    www                             // main node entry point; starts Express
config/
    env.json                        // environment configuration
    helper.js
    webpack.common.js               // common Webpack configuration
    webpack.dev.js
    webpack.prod.js
    scss-lint.yml                   // scss lint configuration
public/                             // root folder for web pages
    index.html
src/                                // main source folder
    main.js                         // webpack entry file
    sass/
        app.scss                    // main 
    script/
        app.js
index.js
package.json                        // node module descriptor
```

### Quick Start

When you have the project installed locally, you are ready for development:

```sh
# fires up an Express server, along with Webpack and LiveReload; uses configuration defined in `./config/env.json`
npm start

# runs unit tests with code coverage; uses [jest](https://facebook.github.io/jest/).
npm test
```

Unless an `expressPort` is defined in `./config/env.json`, demo page is available via
[http://localhost:3000](http://localhost:3000).

By default, configurations used for compiling source files is with respect to the 'development' properties defined in
`./config/env.json`.

### Lints [OPTIONAL]

The following lints are made available and will have to be installed using Ruby:
  * SCSS-LINT[2]
  * JS LINT[3]

```sh
# runs a lint against sass files under ./src/scss/ directory
npm run lint:scss

# lints all script files under ./src/script/
npm run lint:js
```

----

## References

1. http://livereload.com/
2. https://www.theguardian.com/info/developer-blog/2014/may/13/improving-sass-code-quality-on-theguardiancom
3. https://developers.google.com/closure/utilities/docs/linter_howto
