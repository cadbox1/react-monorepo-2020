# React App 2020

React App 2020 is a demonstration of some of my favourite tools and patterns for React in 2020.

## 🚀 Demo

- [App](https://react-app-2020.netlify.com/)
- [Storybook and docs](https://react-app-2020-storybook.netlify.com/)

## 🔧 Tools

- [Create React App](https://create-react-app.dev/docs/adding-typescript/) with [Typescript](https://www.typescriptlang.org/).
- [Storybook](https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app) with [Docs Addon](https://github.com/storybookjs/storybook/tree/master/addons/docs) for component developent and documentation.
- [Netlify](https://www.netlify.com/) for building and deployment, even for pull requests.
- [Theme-UI](https://theme-ui.com/) for styling.
- [usePromise](https://github.com/cadbox1/react-app-2020/blob/master/src/common/hooks/usePromise.ts) for [API requests](https://github.com/cadbox1/react-app-2020/blob/master/src/pages/Dashboard/index.tsx#L15).
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for routing.
- [Jest](https://create-react-app.dev/docs/running-tests/) for testing.
- [NVM](https://github.com/nvm-sh/nvm) for Node version management.
- [Visual Studio Code (vscode)](https://code.visualstudio.com/) for editing.
- [Prettier](https://prettier.io/) for code formatting.

## 🔮 Future Development

- Build a responsive Sidebar.
- Style the page and button.
- Use [Cypress](https://www.cypress.io/) for end to end tests.

## 💻 Running Locally

Install dependencies first.

```
npm install
```

Running the app

```
npm start
```

Running Storybook

```
npm run storybook
```

Running tests.

```
npm test
```

## 📝 Setup VSCode

Install [VSCode](https://code.visualstudio.com/).

Install these extensions:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

Install the [command line tools](https://code.visualstudio.com/docs/editor/command-line).

## 🔨 DIY

This is how I setup some of the tools.

### Create React App with Typescript

Setup your app with Create React App.

```
npx create-react-app react-app-2020 --template typescript
cd react-app-2020
code ./ -n
```

Change the `baseUrl` in [tsconfig.json](https://github.com/cadbox1/react-app-2020/blob/master/tsconfig.json) for absolute imports.

#### References:

1. https://create-react-app.dev/docs/adding-typescript/
1. https://create-react-app.dev/docs/importing-a-component/#absolute-imports
1. https://code.visualstudio.com/docs/editor/command-line

### Storybook

Setup Storybook.

```
npx -p @storybook/cli sb init
npm install --dev @storybook/addon-docs
```

Modify [.storybook/main.js](https://github.com/cadbox1/react-app-2020/blob/master/.storybook/main.js) to enable the docs addon and to handle mdx files.

Create an [Intro.stories.mdx](https://github.com/cadbox1/react-app-2020/blob/master/docs/Intro.stories.mdx) file at `/docs/`.

Modify [.storybook/config.js](https://github.com/cadbox1/react-app-2020/blob/master/.storybook/config.js) to load the Intro page first so it's at the top.

#### References:

1. https://storybook.js.org/docs/guides/guide-react/
1. https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app#enabling-docgen-for-storybook-docs

### Theme-UI

```
npm install --save theme-ui
npm install --save @theme-ui/presets
npm install --dev @types/theme-ui
```

Create a [theme.js](https://github.com/cadbox1/react-app-2020/blob/master/src/theme.js) file at `src/`.

Add the `ThemeProvider` to [src/App.js](https://github.com/cadbox1/react-app-2020/blob/master/src/App.tsx).

#### References

1. https://theme-ui.com/getting-started
1. https://theme-ui.com/packages/presets
