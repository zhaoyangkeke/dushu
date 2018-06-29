var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
var mockJson = require('./mock/index');
var jsonLogin = require('./mock/data/login.json').userLogin;
var css = require('gulp-clean-css');
var minjs = require('gulp-uglify');
var es5 = require('gulp-babel');
var auto = require('gulp-autoprefixer');
var minhtml = require('gulp-htmlmin');

//编译sass
gulp.task('sass', function() {
    gulp.src('src/scss/*.{sass,scss}')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 7878,
            host: 'localhost',
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return;
                }
                var pathname = url.parse(req.url, true).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (/\/api\//.test(pathname)) {
                    if (pathname === '/api/login') {
                        var arr = [];
                        req.on('data', function(chunk) {
                            arr.push(chunk)
                        });
                        req.on('end', function() {
                            var data = Buffer.concat(arr).toString();
                            data = require('querystring').parse(data);
                            var yes = jsonLogin.some(function(v) {
                                return v.user == data.user && v.pwd == data.pwd
                            })
                            if (yes) {
                                res.end('{"res":1,"mes":"success"}')
                            } else {
                                res.end('{"res":0,"mes":"您的用户名或密码不正确"}')
                            }
                        })
                        return;
                    } else if (pathname === '/api/loginZhu') {
                        var arr = [];
                        req.on('data', function(chunk) {
                            arr.push(chunk)
                        });
                        req.on('end', function() {
                            var data = Buffer.concat(arr).toString();
                            data = require('querystring').parse(data);
                            jsonLogin.push(data);
                            var obj = {
                                userLogin: jsonLogin
                            }
                            fs.writeFileSync('./mock/data/login.json', JSON.stringify(obj));
                        })
                        return
                    }
                    res.end(JSON.stringify(mockJson(req.url)));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})

gulp.task('change', function() {
    gulp.watch('src/scss/*.{sass,scss}', ['sass']);
})

gulp.task('default', ['change', 'server', 'sass']);


//压缩CSS
gulp.task('css', function() {
    gulp.src('src/**/*.css')
        .pipe(auto({
            browsers: ['last 2 versions']
        }))
        .pipe(css())
        .pipe(gulp.dest('buld'))
})

//压缩js
gulp.task('minjs', function() {
    gulp.src('src/js/**/*.js')
        .pipe(es5({
            presets: 'es2015'
        }))
        .pipe(minjs())
        .pipe(gulp.dest('buld/js'))
})

//压缩html
gulp.task('minhtml', function() {
    gulp.src('src/**/*.html')
        .pipe(minhtml({
            removeComments: false,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('buld'))
})

//服务
gulp.task('buldServer', function() {
    gulp.src('buld')
        .pipe(server({
            port: 7878,
            host: 'localhost',
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return;
                }
                var pathname = url.parse(req.url, true).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (/\/api\//.test(pathname)) {
                    if (pathname === '/api/login') {
                        var arr = [];
                        req.on('data', function(chunk) {
                            arr.push(chunk)
                        });
                        req.on('end', function() {
                            var data = Buffer.concat(arr).toString();
                            data = require('querystring').parse(data);
                            var yes = jsonLogin.some(function(v) {
                                return v.user == data.user && v.pwd == data.pwd
                            })
                            if (yes) {
                                res.end('{"res":1,"mes":"success"}')
                            } else {
                                res.end('{"res":0,"mes":"您的用户名或密码不正确"}')
                            }
                        })
                        return;
                    } else if (pathname === '/api/loginZhu') {
                        var arr = [];
                        req.on('data', function(chunk) {
                            arr.push(chunk)
                        });
                        req.on('end', function() {
                            var data = Buffer.concat(arr).toString();
                            data = require('querystring').parse(data);
                            jsonLogin.push(data);
                            var obj = {
                                userLogin: jsonLogin
                            }
                            fs.writeFileSync('./mock/data/login.json', JSON.stringify(obj));
                        })
                        return
                    }
                    res.end(JSON.stringify(mockJson(req.url)));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'buld', pathname)))
                }
            }
        }))
})

gulp.task('buld', ['buldServer']);