# rollup-plugin-generate-declarations

Simple rollup plugin to run `tsc --emitDeclarationOnly` right from the rollup config.

## Why?

When you're using [babel](https://babeljs.io/) to transpile [typescript](https://babeljs.io/docs/en/babel-preset-typescript) files you could be [missing](https://github.com/babel/babel/issues/9850) one *(sometimes)* pretty important thing: declaration files `.d.ts`.
This rollup plugin will generate them for you automatically, so you don't have
 to run `tsc --emitDeclarationOnly` separately.

## How?

Just install this package as `devDependency` with your preferred package manager:
```bash
$ npm install rollup-plugin-generate-declarations --save-dev
```

and place it into `plugins` section in your `rollup.config.js` file:
```js
import generateDeclarations from 'rollup-plugin-generate-declarations';

export default {
  /* ... */
  plugins: [
    generateDeclarations()
  ]
};
```
