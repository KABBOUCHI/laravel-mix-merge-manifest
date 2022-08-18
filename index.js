
let mix = require('laravel-mix');
let ManifestPlugin = require('laravel-mix/src/webpackPlugins/ManifestPlugin');
const Manifest = require('laravel-mix/src/Manifest');
let merge = require('lodash').merge;

mix.extend('mergeManifest', (config, nameFile) => {
    config.plugins.forEach((plugin, index) => {
        if (plugin instanceof ManifestPlugin) {
            config.plugins.splice(index, 1);
        }
    });

    config.plugins.push(new class {
        apply(compiler) {

            compiler.plugin('emit', (curCompiler, callback) => {
                let stats = curCompiler.getStats().toJson();
                if (nameFile !== undefined) {
                    Mix.manifest = new Manifest(`${nameFile}.json`);
                }

                try {
                    Mix.manifest.manifest = merge(Mix.manifest.read(), Mix.manifest.manifest);
                } catch (e) {

                }

                Mix.manifest.transform(stats).refresh();
                callback();
            });
        }
    })
});
