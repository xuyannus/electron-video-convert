### Dev Env Set Up

1.  Set up the package. json file to use npm:

```
npm init -y
```

2.  Install electron as development dependency:

```
npm install --save-dev electron
```

3.  Install Webpack and Babel libs as development dependency:

```
npm install --save-dev webpack webpack-cli webpack-dev-server @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
```

4.  Install general react-redux-electron libs as dependency:

```
npm install --save react react-dom react-redux react-router react-router-dom redux redux-thunk lodash
```

5.  Install App sepecific libs

```
npm install --save react-dropzone fluent-ffmpeg moment
```

Install ffmpeg:

```
https://ffmpeg.org/download.html
```

How to use ffmeg:

```
https://www.ostechnix.com/20-ffmpeg-commands-beginners/
```

6. Config package.json and webpack.config.js (as shown in code)

### Run Project in Development Mode

1. Run Webpack Dev Server:

```
npm run server
```

2. Run Electron:

```
npm run start
```

or

```
npm start
```

### Basic Files

- Electron: index.js
- HTML: dist/index.html
- React: src/index.js
- Redux: src/actions/index.js, src/reducers/index.js

### Notes:

- react-router exports the core components and functions. react-router-dom exports DOM-aware components, like <Link> and <BrowserRouter>. react-router-dom re-exports all of react-router's exports, so you only need to import from react-router-dom in your project.
