## Installation
```
npm install webpack -g
npm install karma-cli -g
npm install
```

## Workflow
1. Run webpack-dev-server.js with Node. This will run `webpack-dev-server` with
HMR enabled on port 5000:
>```
>node webpack-dev-server.js
>```

2. Run an HTTP server on port 5001. This is going to handle your back-end
application (e.g. Rails).
One of the available options is [http-server](https://www.npmjs.com/package/http-server).
>```
>http-server -p 5001
>```

3. Open http://localhost:5001 in your browser.

4. Make a change in any of your scripts or stylesheets - you should see these
changes applied in the browser instantaneously.


5. Once finished modifying files, run Webpack to compile the bundle(s) into the
filesystem.
>```
>npm run build
>```

## Unit tests and code coverage
```
npm test
```

### Code coverage
We use [Istanbul](http://istanbul-js.org/) for unit test code coverage reports.
But because Istanbul does not currently understand the ECMAScript 6 syntax, we
use a tool bridging these two technologies called [Isparta](https://github.com/douglasduteil/isparta).
This extension allows us to generate reports for the actual ES6 source, not the
ES5-compatible code "transpiled" by [Babel](http://babeljs.io).

The actual integration of Isparta with the [Karma](http://karma-runner.github.io/0.13/index.html)
tests runner is done via a [Webpack](http://webpack.github.io) pre-loader. We
have opted for a pre-loader instead of a loaded to clearly separate the coverage
generation from other actions that involve various source code transformations.
This is 100% arbitrary and the coverage reporter might as well be included in
the subsequent loaders step.

### Running results on command line
As we have now introduced a React component that depends on the DOM's
`document` object, you won't be able to run the application directly
from command line (at least in the current configuration).

## Clean project
```
npm run clean
```
