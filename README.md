# React Monorepo 2020

React Monorepo 2020 is a demonstration of some of my favourite tools and patterns for React in 2020 in a Monorep.

This is based on my non-monorepo app, [React App 2020](https://github.com/cadbox1/react-app-2020), which I strongly recommend starting with. You can scale a single app a long way before even thinking about a Monorepo.

## 🔧 Tools

- [Create React App](https://create-react-app.dev/docs/adding-typescript/) with [Typescript](https://www.typescriptlang.org/).
- [Storybook](https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app) with [Docs Addon](https://github.com/storybookjs/storybook/tree/master/addons/docs) for component developent and documentation.
- [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) for monorepo development.
- [Lerna](https://github.com/lerna/lerna) for running the initial build command in all the packages.
- [Netlify](https://www.netlify.com/) for building and deployment, even for pull requests.
- [Theme-UI](https://theme-ui.com/) for styling.
- [usePromise](https://github.com/cadbox1/react-app-2020/blob/master/src/common/hooks/usePromise.ts) for [API requests](https://github.com/cadbox1/react-app-2020/blob/master/src/pages/Dashboard/index.tsx#L15).
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for routing.
- [Jest](https://create-react-app.dev/docs/running-tests/) for testing.
- [NVM](https://github.com/nvm-sh/nvm) for Node version management.
- [Visual Studio Code (vscode)](https://code.visualstudio.com/) for editing.
- [Prettier](https://prettier.io/) for code formatting.

## 🔮 Future Development

- Work out how to publish to npm.
- Maybe some custom rollup config

### Honerable Mentions

[React Workspaces Playground](https://github.com/react-workspaces/react-workspaces-playground) extends Create React App's react-scripts to transpile local packages but [doesn't help you publish to npm](https://github.com/react-workspaces/react-workspaces-playground/issues/33). Create React App _does_ reload if a dependany package changes so that's more than enough for me.

## 💻 Running Locally

Install dependencies and run the initial build.

```
yarn
yarn prepare
```

### App Development

Start the Create React App.

```
cd packages/app
yarn start
```

### Package Development

You can use Storybook and Jest to develop the package in isolation with

```
cd packages/package-template
yarn storybook
yarn test
```

You can build packages in watch mode and CRA will reload after each change. In another terminal, run:

```
cd packages/package-template
yarn build-watch
```

## 🔨 DIY

1. Create a packages directory.
2. Create a `package.json` at the root. Put react-scripts in the nohost field.
3. Add Lerna

```
yarn add --dev -W lerna
```

4. Initialisae Lerna

```
npx lerna init
```
