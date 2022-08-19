# Laravel Mix - Merge Manifest MyCareer

This extension supports multi mix configration without overwriting the mix-manifest.json file. It merges new manifests into the existing one.

## Usage

First, install the extension.

```
// Laravel Mix v5
npm install laravel-mix-merge-manifest-mycareer@v1 --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
let mix = require('laravel-mix');

require('laravel-mix-merge-manifest-mycareer');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .less('resources/assets/less/app.less', 'public/css')
    .mergeManifest();
```

or 

```js
let mix = require('laravel-mix');

require('laravel-mix-merge-manifest-mycareer');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .less('resources/assets/less/app.less', 'public/css')
    .mergeManifest('new-manifest');
```
