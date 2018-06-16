<h1 align="center">
  Hyperapp Kit
</h1>

<p align="center">
  <img src="https://thumbs.gfycat.com/LimpingEachGalapagospenguin-max-1mb.gif" alt="Hyperapp Kit Intro">
</p>

<p align="center">
  A starter kit for Hyperapp projects with prerendering.
</p>

## Install

```shell
git clone https://github.com/atomiks/hyperapp-kit
cd hyperapp-kit
npm install
```

## Development

```shell
# Start development server on http://localhost:1234
npm run dev
```

Hyperapp Kit uses [Parcel](https://github.com/parcel-bundler/parcel). It comes with a development server and hot module reloading out of the box.

## Production

```shell
# Build files to dist/
npm run build
```

Parcel's build process will automatically minify and tree-shake the files for optimization. The files are also given hashes for cache-busting.

Hyperapp Kit comes with a script `build.js` on the root and the `prerender` function inside `src/js/utils.js` to enable prerendering for SEO and better user experience.

Using [`@hyperapp/render`](https://github.com/hyperapp/render), the app is turned into an HTML string that is written to the `index.html` file that Parcel outputs to `dist/`. If you want to change the structure of the project, you will need to edit these files to ensure everything stays in sync.

Static parts of the app (i.e. content not loaded via `fetch` or `XMLHttpRequest`) exist as markup in the `index.html` file for a faster first meaningful paint by browsers. This means the entire JavaScript file does not need to be downloaded, parsed, and executed before the elements can be painted onto the screen. The nodes are hydrated by Hyperapp once the JavaScript has been downloaded and parsed to enable interactivity.

> Google is able to index dynamic content loaded with `fetch` or `XMLHttpRequest` most of the time. However, it generally does not wait longer than 5 seconds. Other search engines like Bing and Yandex currently do not execute JavaScript at all.

## Testing

Hyperapp Kit uses [Jest](https://github.com/facebook/jest) for testing. It provides an automatic browser-like environment for Node with [JSDOM](https://github.com/jsdom/jsdom) to test your components.

```shell
# Run tests with coverage output
npm test
```

## Recommended config and style

### JSX

Virtual nodes as XML tags instead of `h` function calls is usually easier to parse because of the terminating tag. It also looks stylistically pleasing due to familiarity with writing UIs as HTML.

### Prettier

Prettier formats your code to keep it nice and consistent. Use default settings with the option `semi = false`. Single quotes are popular, but when working with JSX it makes sense to use double quotes because of HTML conventions.

### Sass

The most popular CSS preprocessor. Works nicely with BEM - see below.

### CSS

Store styles in `src/css`. Each component should have its own stylesheet. It should then be imported at the top of `src/css/index.scss`.

Use the BEM methodology for scoping and maintainable CSS without styled components overhead.

```scss
.MyComponent {
  &__element {
    color: red;

    &--modifier {
      color: green;
    }
  }
}
```

Use the `cc` function in `src/js/utils.js` for conditional class concatenation:

```js
cc("static", { highlighted: false }) // "static"
cc("static", { highlighted: true }) // "static highlighted"
cc({ a: false, b: true }) // "b"
```

For automatic BEM elements and modifiers, use the higher-order `bem` function in `src/js/utils.js`:

```js
const cc = bem("block")
cc("element") // "block__element"
cc("element", { modifier: true }) // "block__element--modifier"
cc({ modifier: true }) // "block--modifier"
```

For generic or CSS framework components, use `kebab-case`:

```css
.css-component {
  text-align: center;
}
```

For Hyperapp components, use `PascalCase`:

```css
.HyperappComponent {
  text-align: center;
}
```

### Utility functions

Place utility functions as exported named functions inside `src/js/utils.js` to be imported throughout the app.

## License

MIT
