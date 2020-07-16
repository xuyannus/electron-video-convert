### Dev Env Set Up

- Set up the package. json file to use npm:

`npm init -y`

- Install electron as development dependency:

`npm install --save-dev electron`

- Install Webpack and Babel libs as development dependency:

`npm install --save-dev webpack webpack-cli webpack-dev-server @babel/core babel-loader @babel/preset-env @babel/preset-react`

- Install general react-redux-electron libs as dependency:

`npm install --save react react-dom react-redux react-router react-router-dom redux redux-thunk lodash`

### Basic Files

- Electron Entry File: index.js
- HTML File: dist/index.html
- React Entry File: src/index.js

### Notes:

- react-router exports the core components and functions. react-router-dom exports DOM-aware components, like <Link> and <BrowserRouter>. react-router-dom re-exports all of react-router's exports, so you only need to import from react-router-dom in your project.
