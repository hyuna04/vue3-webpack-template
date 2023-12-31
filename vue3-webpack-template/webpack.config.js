// path: NodeJS에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader') //VueLoaderPlugin이라는 내용을 require함수를 통해 가져옴

module.exports = {
    resolve: {
        extensions: ['.js', '.vue'],
        //경로 별칭
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },

    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './src/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // 주석은 기본값!, `__dirname`은 현재 파일의 위치를 알려주는 NodeJS 전역 변수
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    // 모듈 처리 방식을 설정
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, //필터링을 통해 vue로 시작하는 확장자를 가져와 vue-loader가 실행될 수 있도록 함
            {
                test: /\.s?css$/,
                use: [
                    // 순서 중요!
                    'vue-style-loader', //App.vue에서 style태그를 통해 css가 동작하도록 해줌
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 제외할 경로
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
        new VueLoaderPlugin() //new라는 생성자 함수를 통해 실행해주기
    ],

    // 개발 서버 옵션
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true
    }
}