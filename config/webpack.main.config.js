const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = {
    root: path.join(__dirname, '..'),
    config: path.join(__dirname, '.'),
    src: path.join(__dirname, '../src/main'),
    build: path.resolve(__dirname, '../build/main'),
    static: path.resolve(__dirname, '../static')
};

module.exports = {
    mode: 'development',
    target: 'electron-main',

    entry: {
        main: paths.src + "/main.ts",
        preload: paths.src + "/preload.ts",
    },

    output: {
        filename: '[name].js',
        path: paths.build
      },

    devtool: 'inline-source-map',

    plugins: [
        new CleanWebpackPlugin({
            // Don't delete the .gitkeep file when cleaning the build folder
            cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep']
        }),
      ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: paths.config + "/tsconfig.json"
                    }
                },
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
}