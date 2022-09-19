const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = {
    root: path.join(__dirname, '..'),
    config: path.join(__dirname, '.'),
    src: path.join(__dirname, '../src/renderer'),
    build: path.resolve(__dirname, '../build/renderer'),
    static: path.resolve(__dirname, '../static')
};

module.exports = {
    mode: 'development',
    target: 'web',

    entry: {
        app: paths.src + "/app.tsx"
    },

    output: {
        filename: '[name].bundle.js',
        path: paths.build
      },

    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        hot: true,
        // Folder for static files. Currently empty.
        static: paths.static,   
    },

    plugins: [
        new CleanWebpackPlugin({
            // Don't delete the .gitkeep file when cleaning the build folder
            cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep']
        }),
        new HtmlWebpackPlugin({
          title: 'MakerDAO Core Unit Reporting Tool',
          template: paths.src + "/index.html",
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

    optimization: {
      runtimeChunk: 'single',
    },
}