# Camp vanilla boilerplate

## Usage

### Development

Just run and visit <http://localhost:3000>

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

You will see the generated files in dist that ready to be served.
To serve builded project run command bellow.

```bash
npm run preview
```

## Add new page

1. Create new folder in `src/pages`.
2. Create `index.html`.
3. Create `.css` and `.ts` files if needed.
4. Add entry point in `vite.config.ts` (see an example below).

### Example

If you want to add `cool` route take the following steps:

1. Create `index.html` inside `src/page/cool/`.
2. Add `resolve(root, 'cool', 'index.html')` to `input` array in `vite.config.ts`.

Now your `vite.config.ts` should look like this:

```ts
// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: [
        resolve(root, 'index.html'),
        resolve(root, 'example', 'index.html'),
        resolve(root, 'example', 'nested', 'index.html'),
        resolve(root, 'cool', 'index.html')
      ]
    }
  }
});
```

You can remove/rename example routes. `index.html` in `src` folder is root file. It means, that your `localhost:3000` will be represented by `index.html` file.

## ESlint

Boilerplate uses `eslint` to lint and fix your typescript. To see suggestions in your text editor, install extension.

- [ESlint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- WebStorm has built in support by default.

To manually run `eslint` over your code, you can perform command in the terminal.

```bash
npm run eslint
```

## Stylelint

Boilerplate uses `stylelint` to lint css. To see all errors and warnings in `css` files, install `stylelint` extension in your code editor.

- [Stylelint for VSCode](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- WebStorm has built in support by default.

To manually run `stylelint` over your code, you can perform command in the terminal.

```bash
npm run stylelint
```

## Editor config

Consider installing [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension if you're using `VSCode`.
