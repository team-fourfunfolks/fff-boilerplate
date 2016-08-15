# Git Together Boilerplate

__Git Together__ is a D3 visualization of a team-based Git workflow that updates in real-time when users emit Git events. Technologies used in this project include:

  - Electron
  - React
  - Socket.io
  - Node / Express
  - Webpack
  - SCSS
  - Mocha / Chai

## Installation

#### Grab code and resolve module dependencies

	git clone https://github.com/team-fourfunfolks/fff-boilerplate.git
	cd fff-boilerplate
	npm install

## Developing

First watch files
```
npm run dev
```

Start app
```
npm start
```

If you get ENOENT after renaming folder
```
npm rebuild
```

Run tests
```
npm test
```

#### Run server-side environment

	npm run server
	
#### Testing

	npm run test

## File Structure

#### Client Side

React components will be layed out in the __src__ folder from the root directory.

#### Server Side

Express/Socket.io components will be in the __server__ folder from the root directory


## Deploy
When you are ready to deploy your app, first change path to `/index.html` (in root folder) file in `index.js`.

Build sources with webpack
```
npm run build
```

Build to all platforms. Results goes to `dist/` folder
```
npm run deploy
```

Make tar.gz (with symbolic links ?)
```
tar -zcvf my-app.tar.gz directory-name -h
```

## Important

Need electron-packager to deploy properly. Refer to 'build' script : https://github.com/sindresorhus/electron-boilerplate/blob/master/boilerplate/package.json
