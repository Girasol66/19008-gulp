var gulp = require('gulp');
var os = require('os'); // 基础的系统操作模块
var open = require('open'); // 在指定浏览器打开url
var cssnext = require('cssnext');
var autoprefixer = require('autoprefixer');
var proxy = require('http-proxy-middleware');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var args = require('yargs').argv;

//  定义项目路径
var srcPath = 'src/' + target + '/',
    // devPath = 'build/' + target + '/',
    devPath = 'build/',
    // distPath = 'dist/' + target + '/';
    distPath = 'dist/';


//  执行LESS编译、添加浏览器前缀、压缩并输出
gulp.task('build:less', function () {
    return gulp.src([srcPath + 'less/**/*.less',
        '!' + srcPath + 'less/variable.less'])
        .pipe(plugins.less())
        .pipe(plugins.postcss(postCssConfig))
        .pipe(gulp.dest(devPath + 'css'))
        .pipe(plugins.connect.reload());
    // .pipe(plugins.if(isPruduction, plugins.cssmin()))
    // .pipe(plugins.if(isPruduction, gulp.dest(distPath + 'css')));
});