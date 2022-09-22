const { merge } = require('webpack-merge');
const renderer = require('./webpack.renderer.config')
const path = require('path');

const ElectronReloadPlugin = require('webpack-electron-reload')({
    path: path.join(__dirname, '..', '/build/main/main.js')
});

const result = merge(renderer, {
    plugins: [
        ElectronReloadPlugin()
    ]
})

module.exports = result