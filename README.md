## Installation
```
npm install webpack -g
npm install mocha -g
npm install
```

## Running Webpack
```
webpack
```

## Unit tests
```
mocha --harmony spec/foo_spec.js
# The below won't work on command line
mocha --harmony spec/heading_spec.js
```

## Running results on command line
As we have now introduced a React component that depends on the DOM's
`document` object, you won't be able to run the application directly
from command line (at least in the current configuration).

You could use [http-server](https://www.npmjs.com/package/http-server) in order to start a web server and serve index.html
