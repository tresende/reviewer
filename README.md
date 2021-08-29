
![](https://badges.aleen42.com/src/react.svg)
![](https://img.shields.io/badge/e2s--test-cypress-red)
![](https://img.shields.io/badge/unit--test-jest-brightgreen)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![](https://badges.aleen42.com/src/eslint.svg)
<br />
![](./badges/badge-branches.svg) 
![](./badges/badge-functions.svg)
![](./badges/badge-lines.svg)
![](./badges/badge-statements.svg)


# Reviewer 👀
Next App for user Review :)

## Stack 🥞

#### Main
- Next
- React
- Webpack

#### Style
- Styled components

#### Test
- Jest (unit tests)
- Cypress (e2e tests)

### Mobile Version 📱
<img src="https://github.com/tresende/reviewer/blob/main/docs/mobile.png?raw=true"  width=200 /><br />

### Desktop 🖥
<img src="https://github.com/tresende/reviewer/blob/main/docs/desktop.png?raw=true"  width=400 />

## Initialization 🛠

Clone the repository:
```sh
git clone https://github.com/tresende/reviewer
```
Install npm packages:

```sh
yarn
```

## Running 👨‍💻

```sh
yarn dev
```
* Open [http://localhost:3000](http://localhost:3000)

* Have fun coding!

## Testing unit 🧪

```sh
yarn test

npm run test:e2e:ci #for ci
```

## Testing e2e 🧪

```sh
yarn cy:open #for dev

yarn test:e2e:ci #for ci
```

## Build 🚀

⚠️ Wait! This step happens automatically in pipeline, it's not necessary run build manually
```sh
yarn build
```

## DevTools 🛠

### Package Manager

* [YARN](https://yarnpkg.com/)

### Text Editor

* [Visual Studio Code](http://code.visualstudio.com)

### Necessary Packages to configure in editor

* [EditorConfig](http://editorconfig.org)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)


### Folder Structure
📦 **reviwer** <br />
 ┣━ 📂  **.dependabot** | *dependabot settings* <br />
 ┣━ 📂  **.jest** | *test and global mock settings* <br />
 ┣━ 📂  **.vscode** | *vscode debug and eslint settings* <br />
 ┣━ 📂  **badges** | *documentation stuff* <br />
 ┣━ 📂  **cypress** | *end 2 end tests(cypress stuffs)* <br />
 ┣━ 📂  **public** | *static files(img, mp4, etc)* <br />
 ┣━ 📂  **src** <br />
 ┃ ┣━ 📂  **components** | *react shared components* <br />
 ┃ ┣━ 📂  **config** | *configuration classes* <br />
 ┃ ┣━ 📂  **hooks** | *some hooks for global state* <br /> 
 ┃ ┣━ 📂  **pages** | *nextjs pages* <br />
 ┃ ┣━ 📂  **services** | *business rules* <br />
 ┃ ┣━ 📂  **styles** | *global css settings* <br />
 ┃ ┣━ 📂  **templates** | *components for pages* <br />
 ┃ ┣━ 📂  **types** | *common types* <br />
 ┗ ┗━ 📂  **utils** | *mappers, converters, etc* <br />


---
