# Package Template

## 🚀 Demo

(link your storybook docs, probably deployed on Netlify here)

## 🔧 Tools

- [Typescript](https://www.typescriptlang.org/).
- [Microbundle](https://github.com/developit/microbundle) for bundling.
- [Storybook](https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app) with [Docs Addon](https://github.com/storybookjs/storybook/tree/master/addons/docs) for component developent and documentation.
- [Jest](https://create-react-app.dev/docs/running-tests/) for testing.

## 🔮 Future Development

- Try out my own rollup config when they fix this [typescript issue](https://github.com/rollup/plugins/issues/287).

## 💻 Running Locally

Install dependencies first.

```
yarn
```

Running Storybook

```
yarn storybook
```

Running tests.

```
yarn test
```

Build the package.

```
yarn build
```

Build the package continuously.

```
yarn build-watch
```

## Publishing to NPM

Create an account at npm then login.

```
npm login
```

Change private to false in `package.json`.

Then you're ready to publish.

```
npm publish
```

or if you have a public scoped package name like `@cadbox1/some-cool-package` you can publish with:

```
npm publish --access public
```

## 🔨 DIY

This is how I built this template.

### Storybook Setup

Setup Storybook with the react-scripts preset. [Source](https://storybook.js.org/docs/guides/guide-react/).

```
npx -p @storybook/cli sb init --type react_scripts
yarn add --dev react-scripts @storybook/addon-docs
```

Modify `.storybook/main.js` to enable the docs addon and to handle mdx files.
Create an `Intro.stories.mdx` file at `/docs/`.
Modify `.storybook/config.js` to load the Intro page first so it's at the top.
(Source)[https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app#enabling-docgen-for-storybook-docs].

### Typescript

Add typescript and the types listed in the `package.json`.
The `tsconfig.json` extends the root config, which is based on CRA's default, with the addition of targetting this source directory.

### Peer Dependencies

Add react as a peer dependency in `package.json`.

### Microbundle

Specify the path to the built files in `package.json`, similar to their (documentation)[https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app#enabling-docgen-for-storybook-docs].

Add microbundle to the scripts in `package.json`.
