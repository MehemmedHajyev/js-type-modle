import * as path from 'path';
import { fileURLToPath } from 'url';


const _filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const config = {
    entry: ["@babel/polyfill", './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: 'bundle.js'
    }, mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        port: "3200",
        static: {
            directory: path.join(__dirname, 'public'),
        },
    }


};
export default config
