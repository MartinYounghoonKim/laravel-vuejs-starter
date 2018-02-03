let mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

/**
 * @desc Webacpk Javascript 설정
 */
mix.js('resources/assets/js/app.js', 'public/js')
    .extract([
        'vue',
        'vuex',
        'axios',
        'vee-validate',
        'velocity-animate',
    ]);

/**
 * @desc Webacpk Sass 설정
 */
mix.sass('resources/assets/sass/app.scss', 'public/css');

/**
 * @desc Webpak BrowerSync 설정
 */
mix.browserSync({ proxy: '127.0.0.1:8000' });

/**
 * @desc Webacpk Custom Options 설정
 */

mix.webpackConfig({
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                include: [ path.resolve(__dirname, 'resources/assets/js') ],
                exclude: [/(node_modules|bootstrap.js)/, path.resolve(__dirname, 'resources/assets/js/app.js')],
                loader: 'eslint-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname, 'resources/assets/sass/helpers/_variables.scss'),
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [[
                        'env', {
                            targets: {
                                browsers: ['last 2 versions'],
                            },
                        },
                    ]],
                },
            },
            {
                test: /\.(woff2?|ttf|eot|svg|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]',
                    publicPath: '/',
                },
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, './resources/assets/'), 'node_modules'],
        extensions: ['.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            js: path.resolve(__dirname, './resources/assets/js'),
            sass: path.resolve(__dirname, './resources/assets/sass'),
        },
    },
    externals: {
        Daum: 'daum',
        Highcharts: 'Highcharts'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: path.join(__dirname, '.eslintrc'),
                },
            },
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
});

/**
 * @param { Prod/Dev 환경 설정 }
 * @desc 배포 버전시, 브라우저의 최적화를 위한 JS파일 사이즈 최소화와 캐싱을 위한 버전 라벨링 처리함.
 */
if (mix.inProduction()) {
    //배포 버전시 실행
    console.log('::::: Webpack Build Production Version :::::');
    mix
        .version(['public/js/app.js'])
        .minify('public/js/app.js');
}
else {
    //개발 버전시 실행
    mix.sourceMaps();
    console.log('::::: Webpack Build Development Version :::::');
};