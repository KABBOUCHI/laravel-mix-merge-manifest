# Laravel Mix - Merge Manifest

This extension supports multi mix configration without overwriting the mix-manifest.json file. It merges new manifests into the existing one.

## Usage

First, install the extension.

```
// Laravel Mix v5
npm install laravel-mix-merge-manifest@v1 --save-dev

// Laravel Mix v6
npm install laravel-mix-merge-manifest@v2 --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('laravel-mix-merge-manifest');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .less('resources/assets/less/app.less', 'public/css')
    .mergeManifest();
```

## Examples - Laravel Mix v6

### Running Laravel Mix with different configurations

Laravel Mix only supports a global configuration. If you want to use diffent configurations - e.g. to provide a separate JS file for legacy browsers - you need to run mix multiple times with different configs.

```sh
npx mix && npx mix --mix-config=webpack.legacy.mix.js
```

Your default configuration in `webpack.mix.js` could look like this:
```js
// ...
mix.js('resources/assets/scripts/main.js', 'scripts')
    .mergeManifest()
// ...
```

And your legacy configuration in `webpack.legacy.mix.js` would use `.mergeManifest()`:
```js
// ...
mix
    .babel({ ... }) // Different Babel Configuration
    .js('resources/assets/scripts/main.js', 'scripts/main.legacy.js')
    .mergeManifest()
// ...
```


### Extracting multiple vendors

```sh
npx mix --mix-config=webpack.backoffice.mix.js && npx mix --mix-config=webpack.customers.mix.js
```

`webpack.backoffice.mix.js`
```js
mix
    .js('resources/js/backoffice/backoffice.js', 'public/js/backoffice')
    .extract(['jquery', 'bootstrap', 'lodash', 'popper.js'])
    .mergeManifest()
```

`webpack.customers.mix.js`
```js
mix
    .js('resources/js/customers/customers.js', 'public/js/customers')
    .extract(['vue'])
    .mergeManifest()
```

Source: [How to Split Dependencies into Multiple Vendors using Laravel Mix](https://www.compulsivecoders.com/tech/how-to-build-multiple-vendors-using-laravel-mix/)
