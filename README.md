<h1 align="center">
  Hyperapp Kit
</h1>

<p align="center">
  <img src="https://thumbs.gfycat.com/LimpingEachGalapagospenguin-max-1mb.gif" alt="Hyperapp Kit Intro">
</p>

<p align="center">
  A starter kit for <a href="https://github.com/hyperapp/hyperapp" target="\_blank">Hyperapp</a> projects with prerendering.
</p>

## Install

```shell
git clone https://github.com/atomiks/hyperapp-kit
cd hyperapp-kit
npm install
```

Wipe git commit history with `npm run wipe`.

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

The files are minified and tree-shaken for optimization, and given hashes for cache-busting.

### Prerendering

Upon build, the container element (`<body>` by default) will contain the app as an HTML string with the initial state. This means the browser can paint the elements onto the screen progressively as the HTML is streamed from the server without needing to download the JavaScript bundle, parse it, and then execute it. This is great for user experience and SEO, especially on slow 3G connections and low-end mobile phones. Once the JavaScript is ready, the nodes are hydrated by Hyperapp to enable interactivity.

Prerendering is distinguished from server-side rendering (SSR) in that HTTP requests for dynamic content are still done on the client, not the server. This means only static content is prerendered, and `XMLHttpRequest` or `fetch` requests are still made client-side.

Google is able to index dynamic content loaded with AJAX most of the time. However, it generally does not wait longer than 5 seconds. Other search engines like Bing and Yandex currently do not execute JavaScript at all.

## Issues

Delete the `.cache` and `.localserver` folders if you encounter issues with the development server or building for production, as old data in these directories can sometimes cause issues.

## Testing

Hyperapp Kit uses [Jest](https://github.com/facebook/jest) for testing. It provides an automatic browser-like environment for Node with [JSDOM](https://github.com/jsdom/jsdom) to test your components.

```shell
# Run tests with coverage output
npm test
```

## Recommended config and style

### JSX

Virtual nodes as XML tags instead of `h` function calls is usually easier to mentally parse because of the terminating tag. It also looks stylistically pleasing due to familiarity with writing UIs as HTML.

### Sass

The most popular CSS preprocessor. Works nicely with the BEM methodology - see below.

### CSS

Store styles in `src/css`. Each component should have its own stylesheet which is imported into the component's JavaScript file.

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
cc('static', { highlighted: false }) // "static"
cc('static', { highlighted: true }) // "static highlighted"
cc({ a: false, b: true }) // "b"
```

For automatic BEM elements and modifiers, use the higher-order `bem` function in `src/js/utils.js`:

```js
const cc = bem('block')
cc('element') // "block__element"
cc('element', { modifier: true }) // "block__element--modifier"
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
