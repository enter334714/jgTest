var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var babel_core = require('babel-core');
var babel_types = require('babel-types');
var babel_template = require('babel-template');
var babel_generate = require('babel-generator');
var babel_traverse = require('babel-traverse');
var clean = require('gulp-clean');
var sequence = require('run-sequence');
var through = require('through2');
var fs = require('fs');
var jsobfuscator = require('javascript-obfuscator');
var jszip = require('jszip');
var uglifyjs = require('uglify-js');
var path = require('path');
var gulpts = require('gulp-typescript');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
// var imagemin  = require('gulp-imagemin');
// var smushit = require('gulp-smushit');
// const gulpPngquant = require('gulp-pngquant');
// const tiny = require('gulp-tinypng-nokey');
// var requirejs = require('gulp-requirejs');
// var webpack = require('webpack-stream');
// var rollup = require('gulp-rollup');
// var sourcemaps = require('gulp-sourcemaps');
// var convertEncoding = require('gulp-convert-encoding');

var SRC = '../../client/src/'; //路径
var BIN = '../../client/bin/'; //路径
var DEST = ''; //路径自行设置
var DEST_JS = ''; //路径
var BUILD = ''; //路径
var PACK = ''; //项目名
var INIT_PATH = ''; //init.min.js的目录
var SCOPE = '';
var PREFIX = '';
var sourceProject = "";
var targetProject = "";
var targetGameJs = "game_main.js"; //混淆后的入口文件
var buildPACK ="";
var AST = {};
/**scope.js文件处理*/
var modify_scope = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;

        console.error("\n================================替换参数================================");

        //替换 leading.sort(compare).concat(digits.sort(compare));
        contents = contents.replace("leading.sort(compare).concat(digits.sort(compare));", "leading.concat(digits);");

        //替换 var leading = init("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_");
        var reg = /(var leading = init\(\")[a-zA-Z\$_]{30,60}(\"\);)/g;
        var mch = contents.match(reg);
        if (mch && mch.length == 1) {
            let repl = 'var leading = init("' + SCOPE + '");';
            contents = contents.replace(mch[0], repl);
            console.error("替换混淆参数成功：" + mch[0] + '  替换为  ' + repl);
        } else {
            console.error("替换混淆参数出错：" + mch + "  " + (mch && mch.length));
        }

        //替换 return ret;
        var reg = /(return )[a-zA-Z\$_+" ]{0,20}(ret;)/g;
        var mch = contents.match(reg);
        if (mch && mch.length == 1) {
            let repl = 'return ' + (PREFIX.length > 0 ? '"' + PREFIX + '" + ' : "") + 'ret;';
            contents = contents.replace(mch[0], repl);
            console.error("替换前缀参数成功：" + mch[0] + "  替换为  " + repl);
        } else {
            console.error("替换前缀参数出错：" + mch + "  " + (mch && mch.length));
        }

        console.error("================================替换参数================================\n");
        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task('scope-modify', function () {
    var stream = gulp.src(
        '../../tools/node_modules/uglify-js/lib/scope.js'
    )
        .pipe(modify_scope())
        .pipe(concat('scope.js'))
        .pipe(gulp.dest('../../tools/node_modules/uglify-js/lib/'))
    return stream;
});

/**scope.js参数验证*/
var check_scope = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;

        //替换 leading.sort(compare).concat(digits.sort(compare));
        contents = contents.replace("leading.sort(compare).concat(digits.sort(compare));", "leading.concat(digits);");

        //替换 var leading = init("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_");
        var reg = /(var leading = init\(\")[a-zA-Z\$_]{30,60}(\"\);)/g;
        var mch = contents.match(reg);
        if (mch && mch.length == 1) {
            var scope = mch[0].replace('var leading = init("', '').replace('");', '');
            if (scope != SCOPE) throw Error("当前包与混淆的参数设置不一致，无法打包，当前混淆的设置为：" + scope + "，当前包参数为：" + SCOPE);
        } else {
            throw Error("混淆的参数获取错误，无法打包");
        }

        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task('scope-check', function () {
    var stream = gulp.src(
        '../../tools/node_modules/uglify-js/lib/scope.js'
    )
        .pipe(check_scope())
    return stream;
});


/**main.min.js文件处理*/
var modify = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = file.contents + "\nwindow.MainWX = MainWX;";
        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
var modify_init = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = file.contents + "\nwindow.ServerLoading = ServerLoading;";
        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
var modify_libs = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = file.contents + "";

        var splitIndex = contents.indexOf(',console.log("--------------------------"),');
        if (splitIndex >= 0) {
            contents = contents.substr(0, splitIndex) + ";";  //微信去掉protobuf.js的内容
        } else {
            console.info("libs未分隔")
        }

        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
/**protobuf的json文件转成js文件*/
var protobuf = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "module.exports = " + file.contents;
        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};


//libs
gulp.task('libs-min', function () {
    var stream = gulp.src([
        BIN + 'js/html/libs.min.js',
    ])
        .pipe(modify_libs())
        .pipe(gulp.dest(DEST + PACK + "/libs/"))
    return stream;
});
gulp.task('libs-map', function () {
    var stream = gulp.src([
        BIN + 'js/html/libs.min.map',
    ])
        .pipe(gulp.dest(DEST))
    return stream;
});
//libs.js备份
gulp.task('libs-backup', function () {
    var stream = gulp.src([
        BIN + 'js/html/libs.js',
    ])
        .pipe(gulp.dest(DEST))
    return stream;
});

//init
gulp.task('init-modify', function () {
    var stream = gulp.src(
        BIN + 'init_wx.js'
    )
        .pipe(modify_init())
        .pipe(concat('init.min.js'))
        .pipe(gulp.dest(DEST + PACK + INIT_PATH))
    return stream;
});
//init.js备份
gulp.task('init-backup', function () {
    var stream = gulp.src([
            BIN + 'init_debug.js'
        ]
    )
        .pipe(modify_init())
        .pipe(concat('init.js'))
        .pipe(gulp.dest(DEST))
    return stream;
});


//main
gulp.task('main-modify', function () {
    var stream = gulp.src(
        BIN + 'js/main.min.js'
    )
        .pipe(modify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(DEST + PACK + "/subPackage/"))
    return stream;
});
gulp.task('main-map', function () {
    var stream = gulp.src([
        BIN + 'js/main.min.map',
    ])
        .pipe(gulp.dest(DEST))
    return stream;
});
//main.js备份
gulp.task('main-backup', function () {
    var stream = gulp.src([
            DEST + 'extends.js',
            BIN + 'js/main.js'
        ]
    )
        .pipe(modify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(DEST))
    return stream;
});
//main不压缩debug版本
gulp.task('main-modify-debug', function () {
    var stream = gulp.src([
            DEST + 'extends.js',
            BIN + 'js/main.js'
        ]
    )
        .pipe(modify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(DEST + PACK + "/subPackage/"))
    return stream;
});


//清空发布目录
gulp.task('clean', function () {
    var stream = gulp.src([DEST])
        .pipe(clean({
            force: true
        }))
    return stream;
});

//拷贝到小程序项目
gulp.task('copy', function () {
    var stream = gulp.src(DEST + PACK + "/**/*.*")
        .pipe(gulp.dest(BUILD + PACK + '/'));
    return stream;
});


//protobuf的json文件转成js文件输出
gulp.task("build-protobuf", function () {
    var stream = gulp.src(BIN + 'assets/protobuf/client_pb.json')
        .pipe(concat('client_pb.js'))
        .pipe(protobuf())
        .pipe(gulp.dest(DEST + PACK + "/protobuf/"))
    return stream;
});


//打包main分包
gulp.task('build-main', function (cb) {
    sequence('main-modify', 'copy', cb)
});
//打包main分包不压缩debug版本
gulp.task('build-debug', function (cb) {
    sequence('', 'main-modify-debug', 'copy', cb)
});


/**-------------------------------------------------微信小游戏--A包 end-----------------------------------------------------------*/



/**+++++++++++++++++++++++++++++++++++++++++++++++++微信小游戏--B包 start+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var set_param_aa_main = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        // sourceProject = "wx_build/jg_gameA";
        mainJsName = "1.js"
        targetProject = "wx_build/a_main_debug/";
        sourceProject = "wx_build/jg_gameA/subPackage/";
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-aa_main', function () {
    var stream = gulp.src("")
        .pipe(set_param_aa_main())
    return stream;
});
//混淆
gulp.task('build-babel-obfuscator-AA_MAIN-minify', function (cb) {
    sequence("set-param-aa_main","MT1_build_minifyMainTargetProject",cb);
});

var set_param_aa = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        // sourceProject = "wx_build/jg_gameA";
        mainJsName = "main.min.js"
        targetProject = "wx_build/jg_gameA";
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};




gulp.task('set-param-aa', function () {
    var stream = gulp.src("")
        .pipe(set_param_aa())
    return stream;
});



//混淆
gulp.task('build-babel-obfuscator-AA-minify', function (cb) {
    sequence("set-param-aa","MT1_build_minifyTargetProject",cb);
});



/**B包参数*/
var set_param_b = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageB/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameB';
        INIT_PATH = '/';
        SCOPE = 'cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ab';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameB_new";
        targetProject = "wx_build/jg_gameB_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "lsjdflaamain.js";
        libsMainJs = "bbbgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"bbblibs"},
            "game.js": {url:"bbblibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"bbblibs/bbbindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"bbblibs/bbbinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"bbblibs/bbbdom.js"},
            "libs/dom_parser.js":  {url:"bbblibs/bbbdomparser.js"},
            "libs/laya.wxmini.js":  {url:"bbblibs/bbbwxmini.js"},
            "libs/libs.min.js":  {url:"bbblibs/bbblibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"bbblibs/bbbmd5min.js"},
            "libs/sax.js":  {url:"bbblibs/bbbsax.js"},
            "libs/weapp-adapter.js":  {url:"bbssss/bbbweasaf.js"},
            "libs/zlib.js":  {url:"bbblibs/bbbzlibs.js"},
            // "libs/game.js":  {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"bbbk"},
            "wxsdk/wx_aksdk.js":  {url:"bbbk/bbbsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"bbbk/bbbhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"bbbbbbf"},
            "protobuf/client_pb.js":  {url:"bbbbbbf/bbbcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"bbbbbbf/bbbbBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"bbbbbbf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"bbbbbbbbb"},
            "subPackage/main.min.js":  {url:"bbbbbbbbb/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"bbbbbbbbb/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹

            "wxloading_atlas": {url:"bbbloding"},
            "wxlogin_atlas": {url:"bbblogin"},
            "wxeff_btn_atlas":{url:"bwxeff"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"bbbloding/a4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"bbbloding/a5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"bbbloding/a6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"bbbloding/a7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"bbbloding/a8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"bbbloding/a9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"bbbloding/a10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"bbbloding/a11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"bbbloding/a12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"bbbloding/a13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"bbbloding/a14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"bbbloding/a15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"bbbloding/a16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"bbbloding/a17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"bbbloding/a18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"bbbloding/a19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"bbbloding/a20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"bbblogin/b199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"bbblogin/b1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"bbblogin/b123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"bbblogin/b2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"bbblogin/b3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"bbblogin/b4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"bbblogin/b5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"bbblogin/b6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"bbblogin/b7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"bbblogin/b8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"bbblogin/b9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"bbblogin/b10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"bbblogin/b11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"bbblogin/b12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"bbblogin/b13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"bbblogin/b14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"bbblogin/b15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"bbblogin/b16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"bbblogin/b17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"bbblogin/b18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"bbblogin/b19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"bbblogin/b20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"bbblogin/b21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"bbblogin/b23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"bbblogin/b24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"bbblogin/b25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"bbblogin/b26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"bbblogin/b27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"bbblogin/b28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"bbblogin/b29b.png"},

            "wxeff_btn_atlas/0.png": {url:"bwxeff/b100b.png"},
            "wxeff_btn_atlas/1.png": {url:"bwxeff/b101b.png"},
            "wxeff_btn_atlas/2.png": {url:"bwxeff/b102b.png"},
            "wxeff_btn_atlas/3.png": {url:"bwxeff/b103b.png"},
            "wxeff_btn_atlas/4.png": {url:"bwxeff/b104b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "bbbhelp",
            "./sax": "./bbbsax",
            "./dom": "./bbbdom",
            "client_pb.js": "bbbcleintpb.js",
            "protobuf.js": "bbbbBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "bbblogin",
            "wxeff_btn_atlas": "bwxeff",
            "wxloading_atlas": "bbbloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1a.png",
            "btn_loding_abcelq1.png": "a2a.png",
            "image_loading_bg.jpg": "a3a.jpg",
            "image_loading_bg_bottom.jpg": "a4a.jpg",
            "image_loading_bg_bottom2.jpg": "a5a.jpg",
            "image_loading_bg_left.jpg": "a6a.jpg",
            "image_loading_bg_left2.jpg": "a7a.jpg",
            "image_loading_bg_right.jpg": "a8a.jpg",
            "image_loading_bg_right2.jpg": "a9a.jpg",
            "image_loading_bg_top.jpg": "a10a.jpg",
            "image_loading_bg_top2.jpg": "a11a.jpg",
            "image_loading_bg2.jpg": "a12a.jpg",

            "image_loding_bar0.png": "a13a.png",
            "image_loding_bar1.png": "a14a.png",
            "image_loding_bar02.png": "a15a.png",
            "image_loding_bar2.png": "a16a.png",
            "image_loding_bar3.png": "a17a.png",
            "image_login_point1.png": "a18a.png",
            "image_login_point2.png":"a19a.png",
            "image_login_point3.png": "a20a.png",


            "image_xuanqu_ztjb0.png": "b199b.png",
            "image_denglu_txtshenpi.png": "b1b.png",
            "shenhezizi.png": "b123b.png",
            "image_login_loginbg.jpg": "b2b.jpg",
            "image_login_loginbg_bottom.jpg": "b3b.jpg",
            "image_login_loginbg_left.jpg": "b4b.jpg",
            "image_login_loginbg_right.jpg": "b5b.jpg",
            "image_login_loginbg_top.jpg": "b6b.jpg",
            "image_login_logo.png": "b7b.png",
            "image_login_notice.png": "b8b.png",
            "image_xuanfu_xfbg.png": "b9b.png",

            "btn_com_chuangback.png": "b10b.png",
            "btn_login_gonggao.png": "b11b.png",
            "btn_login_loginanniu.png": "b12b.png",
            "btn_login_yingsi.png": "b13b.png",
            "btn_xuanqu_anniuhuang.png": "b14b.png",
            "btn_xuanqu_anniulan.png": "b15b.png",
            "btn_xuanqu_quanniu.png": "b16b.png",
            "image_com_tuichu.png": "b17b.png",
            "image_login_changtong.png": "b18b.png",
            "image_login_fanmang.png": "b19b.png",
            "image_login_weihu.png": "b20b.png",
            "image_login_xuanqubg.png": "b21b.png",
            "image_login_init.png": "b22b.png",
            "btn_com_chuangback1.png": "b23b.png",
            "btn_com_long0.png":"b24b.png",
            "btn_com_long1.png":"b25b.png",
            "image_login_notice1.png":"b26b.png",
            "image_loding_txtbhcc.png":"b27b.png",
            "image_xuanfu_gx0.png": "b28b.png",
            "image_xuanfu_gx1.png": "b29b.png",

            "0.png": "b100b.png",
            "1.png": "b101b.png",
            "2.png": "b102b.png",
            "3.png": "b103b.png",
            "4.png": "b104b.png",

        };

        strFilePath = "/res";
        strFileName = "/files.zip";
        globleKeys = ["y$", "_", "_s", "p$", "_d"];
        noReplaceJs = "bbblibs/game.js";
        packageName1 = "bbblibs";
        packageName2 = "bbbbbbf";
        packageName3 = "bbbbbbbbb";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = false;
        str_leading1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
        str_leading2 = "abcdefghijklmnopqrstuvwxyz$_0123456789";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};


gulp.task('set-param-b', function () {
    var stream = gulp.src("")
        .pipe(set_param_b())
    return stream;
});
//设置混淆参数（B包）
gulp.task('scope-B', function (cb) {
    sequence('set-param-b', 'scope-modify', cb)
});
//打包所有（B包）
gulp.task('build-all-B', function (cb) {
    sequence('set-param-b', 'scope-check', 'main-modify', 'main-map', 'main-backup', 'init-modify', 'init-backup', 'libs-min', 'libs-map', 'libs-backup', 'build-protobuf', 'copy', cb)
});
//混淆
gulp.task('build-babel-obfuscator-B', function (cb) {
    sequence("set-param-b","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb)
});

//混淆
gulp.task('build-babel-obfuscator-B-minify', function (cb) {
    sequence("set-param-b","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--B包  end-----------------------------------------------------------*/

/**+++++++++++++++++++++++++++++++++++++++++++++++++微信小游戏--C包 start+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**C包参数*/
var set_param_c = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageC/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameC';
        INIT_PATH = '/';
        SCOPE = 'abcdghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ef';
        PREFIX = 'c$';
        sourceProject = "wx_build/jg_gameC_new";
        targetProject = "wx_build/jg_gameC_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ccccccccmain.js";
        libsMainJs = "cccgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen   replace是否替换文件里面的资源名称
            "libs": {url:"ccclibs"},
            "game.js": {url:"ccclibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"ccclibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"ccclibs/cccindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"ccclibs/cccinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"ccclibs/cccdom.js"},
            "libs/dom_parser.js":  {url:"ccclibs/cccdomparser.js"},
            "libs/laya.wxmini.js":  {url:"ccclibs/cccwxmini.js"},
            "libs/libs.min.js":  {url:"ccclibs/ccclibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"ccclibs/cccmd5min.js"},
            "libs/sax.js":  {url:"ccclibs/cccsax.js"},
            "libs/weapp-adapter.js":  {url:"cccssss/cccweasaf.js"},
            "libs/zlib.js":  {url:"ccclibs/ccczlibs.js"},
            // "libs/game.js":  {url:"ccclibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"cccck"},
            "wxsdk/wx_aksdk.js":  {url:"cccck/cccsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"cccck/ccchelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"cccccf"},
            "protobuf/client_pb.js":  {url:"cccccf/ccccleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"cccccf/ccccBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"cccccf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"cccccccc"},
            "subPackage/main.min.js":  {url:"cccccccc/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"cccccccc/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"cccloding"},
            "wxlogin_atlas": {url:"ccclogin"},
            "wxeff_btn_atlas":{url:"cccwxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/ccclogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/cccloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"cccloding/a1c.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"cccloding/a2c.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"cccloding/a3c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"cccloding/a4c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"cccloding/a5c.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"cccloding/a6c.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"cccloding/a7c.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"cccloding/a8c.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"cccloding/a9c.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"cccloding/a10c.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"cccloding/a11c.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"cccloding/a12c.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"cccloding/a13c.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"cccloding/a14c.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"cccloding/a15c.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"cccloding/a16c.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"cccloding/a17c.png"},
            "wxloading_atlas/image_login_point1.png": {url:"cccloding/a18c.png"},
            "wxloading_atlas/image_login_point2.png": {url:"cccloding/a19c.png"},
            "wxloading_atlas/image_login_point3.png": {url:"cccloding/a20c.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ccclogin/b199c.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ccclogin/b1c.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ccclogin/b123c.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ccclogin/b2c.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ccclogin/b3c.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ccclogin/b4c.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ccclogin/b5c.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ccclogin/b6c.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ccclogin/b7c.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ccclogin/b8c.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ccclogin/b9c.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ccclogin/b10c.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ccclogin/b11c.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ccclogin/b12c.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ccclogin/b13c.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ccclogin/b14c.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ccclogin/b15c.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ccclogin/b16c.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ccclogin/b17c.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ccclogin/b18c.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ccclogin/b19c.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ccclogin/b20c.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ccclogin/b21c.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ccclogin/b22c.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ccclogin/b23c.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ccclogin/b24c.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ccclogin/b255c.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ccclogin/b26c.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ccclogin/b27c.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ccclogin/b28c.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ccclogin/b29c.png"},

            "wxeff_btn_atlas/0.png": {url:"cccwxeff/c100c.png"},
            "wxeff_btn_atlas/1.png": {url:"cccwxeff/c101c.png"},
            "wxeff_btn_atlas/2.png": {url:"cccwxeff/c102c.png"},
            "wxeff_btn_atlas/3.png": {url:"cccwxeff/c103c.png"},
            "wxeff_btn_atlas/4.png": {url:"cccwxeff/c104c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ccchelp",
            "./sax": "./cccsax",
            "./dom": "./cccdom",
            "client_pb.js": "ccccleintpb.js",
            "protobuf.js": "ccccBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ccclogin",
            "wxeff_btn_atlas": "cccwxeff",
            "wxloading_atlas": "cccloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1c.png",
            "btn_loding_abcelq1.png": "a2c.png",
            "image_loading_bg.jpg": "a3c.jpg",
            "image_loading_bg_bottom.jpg": "a4c.jpg",
            "image_loading_bg_bottom2.jpg": "a5c.jpg",
            "image_loading_bg_left.jpg": "a6c.jpg",
            "image_loading_bg_left2.jpg": "a7c.jpg",
            "image_loading_bg_right.jpg": "a8c.jpg",
            "image_loading_bg_right2.jpg": "a9c.jpg",
            "image_loading_bg_top.jpg": "a10c.jpg",
            "image_loading_bg_top2.jpg": "a11c.jpg",
            "image_loading_bg2.jpg": "a12c.jpg",

            "image_loding_bar0.png": "a13c.png",
            "image_loding_bar1.png": "a14c.png",
            "image_loding_bar02.png": "a15c.png",
            "image_loding_bar2.png": "a16c.png",
            "image_loding_bar3.png": "a17c.png",
            "image_login_point1.png": "a18c.png",
            "image_login_point2.png":"a19c.png",
            "image_login_point3.png": "a20c.png",


            "image_xuanqu_ztjb0.png": "b199c.png",
            "image_denglu_txtshenpi.png": "b1c.png",
            "shenhezizi.png": "b123c.png",
            "image_login_loginbg.jpg": "b2c.jpg",
            "image_login_loginbg_bottom.jpg": "b3c.jpg",
            "image_login_loginbg_left.jpg": "b4c.jpg",
            "image_login_loginbg_right.jpg": "b5c.jpg",
            "image_login_loginbg_top.jpg": "b6c.jpg",
            "image_login_logo.png": "b7c.png",
            "image_login_notice.png": "b8c.png",
            "image_xuanfu_xfbg.png": "b9c.png",

            "btn_com_chuangback.png": "b10c.png",
            "btn_login_gonggao.png": "b11c.png",
            "btn_login_loginanniu.png": "b12c.png",
            "btn_login_yingsi.png": "b13c.png",
            "btn_xuanqu_anniuhuang.png": "b14c.png",
            "btn_xuanqu_anniulan.png": "b15c.png",
            "btn_xuanqu_quanniu.png": "b16c.png",
            "image_com_tuichu.png": "b17c.png",
            "image_login_changtong.png": "b18c.png",
            "image_login_fanmang.png": "b19c.png",
            "image_login_weihu.png": "b20c.png",
            "image_login_xuanqubg.png": "b21c.png",
            "image_login_init.png": "b22c.png",
            "btn_com_chuangback1.png": "b23c.png",
            "btn_com_long0.png":"b24c.png",
            "btn_com_long1.png":"b255c.png",
            "image_login_notice1.png":"b26c.png",
            "image_loding_txtbhcc.png":"b27c.png",
            "image_xuanfu_gx0.png": "b28c.png",
            "image_xuanfu_gx1.png": "b29c.png",

            "0.png": "c100c.png",
            "1.png": "c101c.png",
            "2.png": "c102c.png",
            "3.png": "c103c.png",
            "4.png": "c104c.png",

        };
        strFilePath = "/cres";
        strFileName = "/files.zip";
        globleKeys = ["$h", "p", "u", "$a", "a_"];
        noReplaceJs = "ccclibs/game.js";
        packageName1 = "ccclibs";
        packageName2 = "cccccf";
        packageName3 = "cccccccc";
        arrIndex = 20000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "H53QV1S8BO_6MUXE4KA2ZJ$0PLD7CTY9NIRWFG";
        str_leading2 = "qz9uobyie$6k8h0g_vx2nrwpa473fjt1sc5dml";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-c', function () {
    var stream = gulp.src("")
        .pipe(set_param_c())
    return stream;
});


//混淆
gulp.task('build-babel-obfuscator-C', function (cb) {
    sequence("set-param-c","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb)
});

/**-------------------------------------------------微信小游戏--C包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--D包  start-----------------------------------------------------------*/
/**D包参数*/
var set_param_d = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageD/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameD';
        INIT_PATH = '/';
        SCOPE = 'abcdefijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_gh';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameD_new";
        targetProject = "wx_build/jg_gameD_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "dddmain.js";
        libsMainJs = "dddgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"dddlibs"},
            "game.js": {url:"dddlibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"dddlibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"dddlibs/dddindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"dddlibs/dddinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"dddlibs/ddddom.js"},
            "libs/dom_parser.js":  {url:"dddlibs/ddddomparser.js"},
            "libs/laya.wxmini.js":  {url:"dddlibs/dddwxmini.js"},
            "libs/libs.min.js":  {url:"dddlibs/dddlibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"dddlibs/dddmd5min.js"},
            "libs/sax.js":  {url:"dddlibs/dddsax.js"},
            "libs/weapp-adapter.js":  {url:"ddssss/dddweasaf.js"},
            "libs/zlib.js":  {url:"dddlibs/dddzlibs.js"},
            // "libs/game.js":  {url:"dddlibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"dddk"},
            "wxsdk/wx_aksdk.js":  {url:"dddk/dddsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"dddk/dddhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"ddddddf"},
            "protobuf/client_pb.js":  {url:"ddddddf/dddcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"ddddddf/ddddBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"ddddddf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"ddddddddd"},
            "subPackage/main.min.js":  {url:"ddddddddd/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"ddddddddd/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"dddloding"},
            "wxlogin_atlas": {url:"dddlogin"},
            "wxeff_btn_atlas":{url:"ddwxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/dddlogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/dddloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"dddloding/d1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"dddloding/d2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"dddloding/d3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"dddloding/d4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"dddloding/d5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"dddloding/d6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"dddloding/d7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"dddloding/d8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"dddloding/d9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"dddloding/d10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"dddloding/d11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"dddloding/d12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"dddloding/d13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"dddloding/d14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"dddloding/d15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"dddloding/d16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"dddloding/d17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"dddloding/d18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"dddloding/d19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"dddloding/d20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"dddlogin/d199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"dddlogin/d1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"dddlogin/d123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"dddlogin/d2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"dddlogin/d3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"dddlogin/d4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"dddlogin/d5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"dddlogin/d6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"dddlogin/d7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"dddlogin/d8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"dddlogin/d9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"dddlogin/d10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"dddlogin/d11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"dddlogin/d12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"dddlogin/d13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"dddlogin/d14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"dddlogin/d15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"dddlogin/d16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"dddlogin/d17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"dddlogin/d18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"dddlogin/d19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"dddlogin/d20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"dddlogin/d21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"dddlogin/d22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"dddlogin/d23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"dddlogin/d24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"dddlogin/d25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"dddlogin/d26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"dddlogin/d27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"dddlogin/d28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"dddlogin/d29b.png"},

            "wxeff_btn_atlas/0.png": {url:"ddwxeff/d1c.png"},
            "wxeff_btn_atlas/1.png": {url:"ddwxeff/d2c.png"},
            "wxeff_btn_atlas/2.png": {url:"ddwxeff/d3c.png"},
            "wxeff_btn_atlas/3.png": {url:"ddwxeff/d4c.png"},
            "wxeff_btn_atlas/4.png": {url:"ddwxeff/d5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "dddhelp",
            "./sax": "./dddsax",
            "./dom": "./ddddom",
            "client_pb.js": "dddcleintpb.js",
            "protobuf.js": "ddddBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "dddlogin",
            "wxeff_btn_atlas": "ddwxeff",
            "wxloading_atlas": "dddloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "d1a.png",
            "btn_loding_abcelq1.png": "d2a.png",
            "image_loading_bg.jpg": "d3a.jpg",
            "image_loading_bg_bottom.jpg": "d4a.jpg",
            "image_loading_bg_bottom2.jpg": "d5a.jpg",
            "image_loading_bg_left.jpg": "d6a.jpg",
            "image_loading_bg_left2.jpg": "d7a.jpg",
            "image_loading_bg_right.jpg": "d8a.jpg",
            "image_loading_bg_right2.jpg": "d9a.jpg",
            "image_loading_bg_top.jpg": "d10a.jpg",
            "image_loading_bg_top2.jpg": "d11a.jpg",
            "image_loading_bg2.jpg": "d12a.jpg",

            "image_loding_bar0.png": "d13a.png",
            "image_loding_bar1.png": "d14a.png",
            "image_loding_bar02.png": "d15a.png",
            "image_loding_bar2.png": "d16a.png",
            "image_loding_bar3.png": "d17a.png",
            "image_login_point1.png": "d18a.png",
            "image_login_point2.png":"d19a.png",
            "image_login_point3.png": "d20a.png",


            "image_xuanqu_ztjb0.png": "d199b.png",
            "image_denglu_txtshenpi.png": "d1b.png",
            "shenhezizi.png": "d123b.png",
            "image_login_loginbg.jpg": "d2b.jpg",
            "image_login_loginbg_bottom.jpg": "d3b.jpg",
            "image_login_loginbg_left.jpg": "d4b.jpg",
            "image_login_loginbg_right.jpg": "d5b.jpg",
            "image_login_loginbg_top.jpg": "d6b.jpg",
            "image_login_logo.png": "d7b.png",
            "image_login_notice.png": "d8b.png",
            "image_xuanfu_xfbg.png": "d9b.png",

            "btn_com_chuangback.png": "d10b.png",
            "btn_login_gonggao.png": "d11b.png",
            "btn_login_loginanniu.png": "d12b.png",
            "btn_login_yingsi.png": "d13b.png",
            "btn_xuanqu_anniuhuang.png": "d14b.png",
            "btn_xuanqu_anniulan.png": "d15b.png",
            "btn_xuanqu_quanniu.png": "d16b.png",
            "image_com_tuichu.png": "d17b.png",
            "image_login_changtong.png": "d18b.png",
            "image_login_fanmang.png": "d19b.png",
            "image_login_weihu.png": "d20b.png",
            "image_login_xuanqubg.png": "d21b.png",
            "image_login_init.png": "d22b.png",
            "btn_com_chuangback1.png": "d23b.png",
            "btn_com_long0.png":"d24b.png",
            "btn_com_long1.png":"d25b.png",
            "image_login_notice1.png":"d26b.png",
            "image_loding_txtbhcc.png":"d27b.png",
            "image_xuanfu_gx0.png": "d28b.png",
            "image_xuanfu_gx1.png": "d29b.png",

            "0.png": "d1c.png",
            "1.png": "d2c.png",
            "2.png": "d3c.png",
            "3.png": "d4c.png",
            "4.png": "d5c.png",

        }
        strFilePath = "/dres";
        strFileName = "/dfiles.zip";
        globleKeys = ["$d", "v", "s", "D$", "z"];
        noReplaceJs = "dddlibs/game.js";
        packageName1 = "dddlibs";
        packageName2 = "ddddddf";
        packageName3 = "ddddddddd";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "YSALZE8C$P2F5RI619O3U7KMQ4XH0DVN_JGBTW";
        str_leading2 = "25oc39_4njh6mediutfkgq0zabx81srw$pv7yl";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-d', function () {
    var stream = gulp.src("")
        .pipe(set_param_d())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-D', function (cb) {
    sequence("set-param-d","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb)
});

//混淆
gulp.task('build-babel-obfuscator-D-minify', function (cb) {
    sequence("set-param-d","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--D包  end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--E包  start-----------------------------------------------------------*/


/**E包参数*/
var set_param_e = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageE/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameE';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameE_new";
        targetProject = "wx_build/jg_gameE_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "eeemain.js";
        packageName1 = "eeelibs";
        packageName2 = "eeeeeepf";
        packageName3 = "eeeeeeee";
        libsMainJs = "eeegame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/eeeindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/eeeinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/eeedom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/eeedomparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/eeewxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/eeelibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/eeemd5min.js"},
            "libs/sax.js":  {url:packageName1+"/eeesax.js"},
            "libs/weapp-adapter.js":  {url:"eessss/eeeweasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/eeezlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"eeeesdk"},
            "wxsdk/wx_aksdk.js":  {url:"eeeesdk/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"eeeesdk/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/eeecleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/eeeeBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"eeeloding"},
            "wxlogin_atlas": {url:"eeelogin"},
            "wxeff_btn_atlas":{url:"eewxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/eeeloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"eeeloding/e1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"eeeloding/e2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"eeeloding/e3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"eeeloding/e4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"eeeloding/e5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"eeeloding/e6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"eeeloding/e7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"eeeloding/e8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"eeeloding/e9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"eeeloding/e10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"eeeloding/e11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"eeeloding/e12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"eeeloding/e13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"eeeloding/e14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"eeeloding/e15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"eeeloding/e16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"eeeloding/e17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"eeeloding/e18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"eeeloding/e19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"eeeloding/e20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"eeelogin/e199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"eeelogin/e1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"eeelogin/e123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"eeelogin/e2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"eeelogin/e3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"eeelogin/e4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"eeelogin/e5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"eeelogin/e6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"eeelogin/e7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"eeelogin/e8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"eeelogin/e9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"eeelogin/e10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"eeelogin/e11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"eeelogin/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"eeelogin/e13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"eeelogin/e14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"eeelogin/e15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"eeelogin/e16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"eeelogin/e17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"eeelogin/e18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"eeelogin/e19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"eeelogin/e20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"eeelogin/e21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"eeelogin/e22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"eeelogin/e23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"eeelogin/e24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"eeelogin/e25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"eeelogin/e26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"eeelogin/e27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"eeelogin/e28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"eeelogin/e29b.png"},

            "wxeff_btn_atlas/0.png": {url:"eewxeff/e1c.png"},
            "wxeff_btn_atlas/1.png": {url:"eewxeff/e2c.png"},
            "wxeff_btn_atlas/2.png": {url:"eewxeff/e3c.png"},
            "wxeff_btn_atlas/3.png": {url:"eewxeff/e4c.png"},
            "wxeff_btn_atlas/4.png": {url:"eewxeff/e5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./eeesax",
            "./dom": "./eeedom",
            "client_pb.js": "eeecleintpb.js",
            "protobuf.js": "eeeeBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "eeelogin",
            "wxeff_btn_atlas": "eewxeff",
            "wxloading_atlas": "eeeloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "e1a.png",
            "btn_loding_abcelq1.png": "e2a.png",
            "image_loading_bg.jpg": "e3a.jpg",
            "image_loading_bg_bottom.jpg": "e4a.jpg",
            "image_loading_bg_bottom2.jpg": "e5a.jpg",
            "image_loading_bg_left.jpg": "e6a.jpg",
            "image_loading_bg_left2.jpg": "e7a.jpg",
            "image_loading_bg_right.jpg": "e8a.jpg",
            "image_loading_bg_right2.jpg": "e9a.jpg",
            "image_loading_bg_top.jpg": "e10a.jpg",
            "image_loading_bg_top2.jpg": "e11a.jpg",
            "image_loading_bg2.jpg": "e12a.jpg",

            "image_loding_bar0.png": "e13a.png",
            "image_loding_bar1.png": "e14a.png",
            "image_loding_bar02.png": "e15a.png",
            "image_loding_bar2.png": "e16a.png",
            "image_loding_bar3.png": "e17a.png",
            "image_login_point1.png": "e18a.png",
            "image_login_point2.png":"e19a.png",
            "image_login_point3.png": "e20a.png",


            "image_xuanqu_ztjb0.png": "e199b.png",
            "image_denglu_txtshenpi.png": "e1b.png",
            "shenhezizi.png": "e123b.png",
            "image_login_loginbg.jpg": "e2b.jpg",
            "image_login_loginbg_bottom.jpg": "e3b.jpg",
            "image_login_loginbg_left.jpg": "e4b.jpg",
            "image_login_loginbg_right.jpg": "e5b.jpg",
            "image_login_loginbg_top.jpg": "e6b.jpg",
            "image_login_logo.png": "e7b.png",
            "image_login_notice.png": "e8b.png",
            "image_xuanfu_xfbg.png": "e9b.png",

            "btn_com_chuangback.png": "e10b.png",
            "btn_login_gonggao.png": "e11b.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "e13b.png",
            "btn_xuanqu_anniuhuang.png": "e14b.png",
            "btn_xuanqu_anniulan.png": "e15b.png",
            "btn_xuanqu_quanniu.png": "e16b.png",
            "image_com_tuichu.png": "e17b.png",
            "image_login_changtong.png": "e18b.png",
            "image_login_fanmang.png": "e19b.png",
            "image_login_weihu.png": "e20b.png",
            "image_login_xuanqubg.png": "e21b.png",
            "image_login_init.png": "e22b.png",
            "btn_com_chuangback1.png": "e23b.png",
            "btn_com_long0.png":"e24b.png",
            "btn_com_long1.png":"e25b.png",
            "image_login_notice1.png":"e26b.png",
            "image_loding_txtbhcc.png":"e27b.png",
            "image_xuanfu_gx0.png": "e28b.png",
            "image_xuanfu_gx1.png": "e29b.png",

            "0.png": "e1c.png",
            "1.png": "e2c.png",
            "2.png": "e3c.png",
            "3.png": "e4c.png",
            "4.png": "e5c.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$e", "b", "c1", "e1", "e"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "I1GU0J3L2R79YDCHTWBF8_NVS4AZKO$PMQ56EX";
        str_leading2 = "12w85d0b6k9sunq3ji$xgtlhrzyfv4_7amcope";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-e', function () {
    var stream = gulp.src("")
        .pipe(set_param_e())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-E', function (cb) {
    sequence("set-param-e","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-E-minify', function (cb) {
    sequence("set-param-e","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--E包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--F包  start-----------------------------------------------------------*/


/**F包参数*/
var set_param_f = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageF/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameF';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_kl';
        PREFIX = 'F$';
        sourceProject = "wx_build/jg_gameF_new";
        targetProject = "wx_build/jg_gameF_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "fffmain.js";
        packageName1 = "ffflibs";
        packageName2 = "ffffffpf";
        packageName3 = "ffffffff";
        libsMainJs = "fffgame.js";
        var clinetPbName = "fffcleintpb.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/fffindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/fffinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/fffdom.js",extractStr:true,count:2,strLen:3},
            "libs/dom_parser.js":  {url:packageName1+"/fffdomparser.js",extractStr:true,count:2,strLen:3},
            "libs/laya.wxmini.js":  {url:packageName1+"/fffwxmini.js",extractStr:true,count:2,strLen:3},
            "libs/libs.min.js":  {url:packageName1+"/ffflibsmin.js",extractStr:true,count:2,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/fffmd5min.js",extractStr:true,count:2,strLen:3},
            "libs/sax.js":  {url:packageName1+"/fffsax.js",extractStr:true,count:2,strLen:3},
            "libs/weapp-adapter.js":  {url:"ffssss/fffweasaf.js",extractStr:false,count:2,strLen:3},
            "libs/zlib.js":  {url:packageName1+"/fffzlibs.js",extractStr:true,count:2,strLen:3},
            "SyMiniTool.js":  {url:packageName1+"/SyMiniTool.js",extractStr:true,count:1,strLen:3},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"ffffsdk"},
            "wxsdk/wx_aksdk.js":  {url:"ffffsdk/fffsdk.js",extractStr:true,count:1,strLen:2},
            "wxsdk/helper.js":  {url:"ffffsdk/fffhelp.js",extractStr:true,count:1,strLen:2},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:1,strLen:2},
            "protobuf/protobuf.js":  {url: packageName2 + "/ffffBuff.js",extractStr:true,count:1,strLen:2},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:1,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"fffloding"},
            "wxlogin_atlas": {url:"ffflogin"},
            "wxeff_btn_atlas":{url:"ffwxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/fffloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"fffloding/f1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"fffloding/f2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"fffloding/f3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"fffloding/f4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"fffloding/f5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"fffloding/f6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"fffloding/f7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"fffloding/f8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"fffloding/f9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"fffloding/f10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"fffloding/f11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"fffloding/f12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"fffloding/f13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"fffloding/f14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"fffloding/f15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"fffloding/f16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"fffloding/f17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"fffloding/f18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"fffloding/f19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"fffloding/f20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ffflogin/f199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ffflogin/f1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ffflogin/f123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ffflogin/f2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ffflogin/f3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ffflogin/f4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ffflogin/f5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ffflogin/f6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ffflogin/f7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ffflogin/f8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ffflogin/f9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ffflogin/f10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ffflogin/f11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ffflogin/f12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ffflogin/f13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ffflogin/f14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ffflogin/f15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ffflogin/f16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ffflogin/f17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ffflogin/f18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ffflogin/f19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ffflogin/f20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ffflogin/f21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ffflogin/f22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ffflogin/f23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ffflogin/f24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ffflogin/f25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ffflogin/f26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ffflogin/f27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ffflogin/f28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ffflogin/f29b.png"},

            "wxeff_btn_atlas/0.png": {url:"ffwxeff/f1c.png"},
            "wxeff_btn_atlas/1.png": {url:"ffwxeff/f2c.png"},
            "wxeff_btn_atlas/2.png": {url:"ffwxeff/f3c.png"},
            "wxeff_btn_atlas/3.png": {url:"ffwxeff/f4c.png"},
            "wxeff_btn_atlas/4.png": {url:"ffwxeff/f5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "fffhelp",
            "./sax": "./fffsax",
            "./dom": "./fffdom",
            "client_pb.js": clinetPbName,
            "protobuf.js": "ffffBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ffflogin",
            "wxeff_btn_atlas": "ffwxeff",
            "wxloading_atlas": "fffloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "f1a.png",
            "btn_loding_abcelq1.png": "f2a.png",
            "image_loading_bg.jpg": "f3a.jpg",
            "image_loading_bg_bottom.jpg": "f4a.jpg",
            "image_loading_bg_bottom2.jpg": "f5a.jpg",
            "image_loading_bg_left.jpg": "f6a.jpg",
            "image_loading_bg_left2.jpg": "f7a.jpg",
            "image_loading_bg_right.jpg": "f8a.jpg",
            "image_loading_bg_right2.jpg": "f9a.jpg",
            "image_loading_bg_top.jpg": "f10a.jpg",
            "image_loading_bg_top2.jpg": "f11a.jpg",
            "image_loading_bg2.jpg": "f12a.jpg",

            "image_loding_bar0.png": "f13a.png",
            "image_loding_bar1.png": "f14a.png",
            "image_loding_bar02.png": "f15a.png",
            "image_loding_bar2.png": "f16a.png",
            "image_loding_bar3.png": "f17a.png",
            "image_login_point1.png": "f18a.png",
            "image_login_point2.png":"f19a.png",
            "image_login_point3.png": "f20a.png",


            "image_xuanqu_ztjb0.png": "f199b.png",
            "image_denglu_txtshenpi.png": "f1b.png",
            "shenhezizi.png": "f123b.png",
            "image_login_loginbg.jpg": "f2b.jpg",
            "image_login_loginbg_bottom.jpg": "f3b.jpg",
            "image_login_loginbg_left.jpg": "f4b.jpg",
            "image_login_loginbg_right.jpg": "f5b.jpg",
            "image_login_loginbg_top.jpg": "f6b.jpg",
            "image_login_logo.png": "f7b.png",
            "image_login_notice.png": "f8b.png",
            "image_xuanfu_xfbg.png": "f9b.png",

            "btn_com_chuangback.png": "f10b.png",
            "btn_login_gonggao.png": "f11b.png",
            "btn_login_loginanniu.png": "f12b.png",
            "btn_login_yingsi.png": "f13b.png",
            "btn_xuanqu_anniuhuang.png": "f14b.png",
            "btn_xuanqu_anniulan.png": "f15b.png",
            "btn_xuanqu_quanniu.png": "f16b.png",
            "image_com_tuichu.png": "f17b.png",
            "image_login_changtong.png": "f18b.png",
            "image_login_fanmang.png": "f19b.png",
            "image_login_weihu.png": "f20b.png",
            "image_login_xuanqubg.png": "f21b.png",
            "image_login_init.png": "f22b.png",
            "btn_com_chuangback1.png": "f23b.png",
            "btn_com_long0.png":"f24b.png",
            "btn_com_long1.png":"f25b.png",
            "image_login_notice1.png":"f26b.png",
            "image_loding_txtbhcc.png":"f27b.png",
            "image_xuanfu_gx0.png": "f28b.png",
            "image_xuanfu_gx1.png": "f29b.png",

            "0.png": "f1c.png",
            "1.png": "f2c.png",
            "2.png": "f3c.png",
            "3.png": "f4c.png",
            "4.png": "f5c.png",

        }
        strFilePath = "/fres";
        strFileName = "/ffiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$f", "k", "l", "F$", "f"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "I08L67U_HZP$X41QRWA39KM2VE5NDSYGBTOCFJ";
        str_leading2 = "pay3$7r8zexnwsdjco624_k5q0htfmlibvu19g";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-f', function () {
    var stream = gulp.src("")
        .pipe(set_param_f())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-F', function (cb) {
    sequence("set-param-f","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Fminify', function (cb) {
    sequence("set-param-f","MT1_build_minifyTargetProject",cb);
});



/**-------------------------------------------------微信小游戏--F包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--G包  start-----------------------------------------------------------*/


/**G包参数*/
var set_param_g = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageG/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameG';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_mn';
        PREFIX = 'G';
        sourceProject = "wx_build/jg_gameG_new";
        targetProject = "wx_build/jg_gameG_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "gggmain.js";
        libsMainJs = "gggggame.js";
        packageName1 = "ggglibs";
        packageName2 = "ggggggpf";
        packageName3 = "gggggggg";
        var clinetPbName = "gggcleintpb.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/gggindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ggginitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/gggdom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/gggdomparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/gggwxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/ggglibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/gggmd5min.js"},
            "libs/sax.js":  {url:packageName1+"/gggsax.js"},
            "libs/weapp-adapter.js":  {url:"ggssss/gggweasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/gggzlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"gggsdk"},
            "wxsdk/wx_aksdk.js":  {url:"gggsdk/gggsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"gggsdk/ggghelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/ggggBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "utils/Hortor/sdk/sdk.min.js":{url:"utils/Hortor/sdk/sdk.min.js",addGlobleKeys0:false,extractStr:false},
            "XingJuBox.js":  {url:packageName1+"/XingJuBox.js",extractStr:false,count:1,strLen:3},
            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"gggloding"},
            "wxlogin_atlas": {url:"ggglogin"},
            "wxeff_btn_atlas":{url:"gggwxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/gggloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"gggloding/g1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"gggloding/g2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"gggloding/g3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"gggloding/g4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"gggloding/g5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"gggloding/g6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"gggloding/g7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"gggloding/g8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"gggloding/g9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"gggloding/g10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"gggloding/g11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"gggloding/g12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"gggloding/g13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"gggloding/g14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"gggloding/g15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"gggloding/g16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"gggloding/g17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"gggloding/g18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"gggloding/g19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"gggloding/g20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ggglogin/g199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ggglogin/g1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ggglogin/g123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ggglogin/g2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ggglogin/g3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ggglogin/g4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ggglogin/g5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ggglogin/g6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ggglogin/g7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ggglogin/g8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ggglogin/g9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ggglogin/g10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ggglogin/g11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ggglogin/g12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ggglogin/g13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ggglogin/g14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ggglogin/g15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ggglogin/g16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ggglogin/g17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ggglogin/g18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ggglogin/g19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ggglogin/g20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ggglogin/g21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ggglogin/g22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ggglogin/g23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ggglogin/g24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ggglogin/g25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ggglogin/g26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ggglogin/g27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ggglogin/g28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ggglogin/g29b.png"},

            "wxeff_btn_atlas/0.png": {url:"gggwxeff/g1c.png"},
            "wxeff_btn_atlas/1.png": {url:"gggwxeff/g2c.png"},
            "wxeff_btn_atlas/2.png": {url:"gggwxeff/g3c.png"},
            "wxeff_btn_atlas/3.png": {url:"gggwxeff/g4c.png"},
            "wxeff_btn_atlas/4.png": {url:"gggwxeff/g5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ggghelp",
            "./sax": "./gggsax",
            "./dom": "./gggdom",
            "client_pb.js": clinetPbName,
            "protobuf.js": "ggggBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ggglogin",
            "wxeff_btn_atlas": "gggwxeff",
            "wxloading_atlas": "gggloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "g1a.png",
            "btn_loding_abcelq1.png": "g2a.png",
            "image_loading_bg.jpg": "g3a.jpg",
            "image_loading_bg_bottom.jpg": "g4a.jpg",
            "image_loading_bg_bottom2.jpg": "g5a.jpg",
            "image_loading_bg_left.jpg": "g6a.jpg",
            "image_loading_bg_left2.jpg": "g7a.jpg",
            "image_loading_bg_right.jpg": "g8a.jpg",
            "image_loading_bg_right2.jpg": "g9a.jpg",
            "image_loading_bg_top.jpg": "g10a.jpg",
            "image_loading_bg_top2.jpg": "g11a.jpg",
            "image_loading_bg2.jpg": "g12a.jpg",

            "image_loding_bar0.png": "g13a.png",
            "image_loding_bar1.png": "g14a.png",
            "image_loding_bar02.png": "g15a.png",
            "image_loding_bar2.png": "g16a.png",
            "image_loding_bar3.png": "g17a.png",
            "image_login_point1.png": "g18a.png",
            "image_login_point2.png":"g19a.png",
            "image_login_point3.png": "g20a.png",


            "image_xuanqu_ztjb0.png": "g199b.png",
            "image_denglu_txtshenpi.png": "g1b.png",
            "shenhezizi.png": "g123b.png",
            "image_login_loginbg.jpg": "g2b.jpg",
            "image_login_loginbg_bottom.jpg": "g3b.jpg",
            "image_login_loginbg_left.jpg": "g4b.jpg",
            "image_login_loginbg_right.jpg": "g5b.jpg",
            "image_login_loginbg_top.jpg": "g6b.jpg",
            "image_login_logo.png": "g7b.png",
            "image_login_notice.png": "g8b.png",
            "image_xuanfu_xfbg.png": "g9b.png",

            "btn_com_chuangback.png": "g10b.png",
            "btn_login_gonggao.png": "g11b.png",
            "btn_login_loginanniu.png": "g12b.png",
            "btn_login_yingsi.png": "g13b.png",
            "btn_xuanqu_anniuhuang.png": "g14b.png",
            "btn_xuanqu_anniulan.png": "g15b.png",
            "btn_xuanqu_quanniu.png": "g16b.png",
            "image_com_tuichu.png": "g17b.png",
            "image_login_changtong.png": "g18b.png",
            "image_login_fanmang.png": "g19b.png",
            "image_login_weihu.png": "g20b.png",
            "image_login_xuanqubg.png": "g21b.png",
            "image_login_init.png": "g22b.png",
            "btn_com_chuangback1.png": "g23b.png",
            "btn_com_long0.png":"g24b.png",
            "btn_com_long1.png":"g25b.png",
            "image_login_notice1.png":"g26b.png",
            "image_loding_txtbhcc.png":"g27b.png",
            "image_xuanfu_gx0.png": "g28b.png",
            "image_xuanfu_gx1.png": "g29b.png",

            "0.png": "g1c.png",
            "1.png": "g2c.png",
            "2.png": "g3c.png",
            "3.png": "g4c.png",
            "4.png": "g5c.png",

        }
        strFilePath = "/gres";
        strFileName = "/gfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$g", "m", "n", "G$", "g"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;//80000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "V203J9SIW8A65BGQDZTL$FKRNC7OUHPM14_YEX";
        str_leading2 = "mu$jr6n2zdo34tf_0pb5iaxh1kwyev7qgcs8l9";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-g', function () {
    var stream = gulp.src("")
        .pipe(set_param_g())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-G', function (cb) {
    sequence("set-param-g","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-G-minify', function (cb) {
    sequence("set-param-g","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--G包  end-----------------------------------------------------------*/
/**-------------------------------------------------微信小游戏--H包  start-----------------------------------------------------------*/


/**H包参数*/
var set_param_h = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageH/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameH';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_op';
        PREFIX = 'H';
        sourceProject = "wx_build/jg_gameH_new";
        targetProject = "wx_build/jg_gameH_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "hhhhmain.js";
        libsMainJs = "hhhhgame.js";
        packageName1 = "hhhlibs";
        packageName2 = "hhhhhhpf";
        packageName3 = "hhhhhhhh";
        var clinetPbName = "hhhhcleintpb.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/hhhindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/hhhinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/hhhdom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/hhhdomparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/hhhwxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/hhhlibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/hhhmd5min.js"},
            "libs/sax.js":  {url:packageName1+"/hhhsax.js"},
            "libs/weapp-adapter.js":  {url:"hhssss/hhhweasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/hhhzlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"hhhhsdk"},
            "wxsdk/wx_aksdk.js":  {url:"hhhhsdk/hhhsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"hhhhsdk/hhhhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/hhhhBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"hhhloding"},
            "wxlogin_atlas": {url:"hhhlogin"},
            "wxeff_btn_atlas":{url:"hhhwxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/hhhloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"hhhloding/h1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"hhhloding/h2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"hhhloding/h3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"hhhloding/h4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"hhhloding/h5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"hhhloding/h6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"hhhloding/h7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"hhhloding/h8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"hhhloding/h9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"hhhloding/h10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"hhhloding/h11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"hhhloding/h12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"hhhloding/h13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"hhhloding/h14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"hhhloding/h15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"hhhloding/h16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"hhhloding/h17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"hhhloding/h18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"hhhloding/h19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"hhhloding/h20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"hhhlogin/h199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"hhhlogin/h1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"hhhlogin/h123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"hhhlogin/h2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"hhhlogin/h3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"hhhlogin/h4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"hhhlogin/h5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"hhhlogin/h6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"hhhlogin/h7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"hhhlogin/h8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"hhhlogin/h9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"hhhlogin/h10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"hhhlogin/h11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"hhhlogin/h12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"hhhlogin/h13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"hhhlogin/h14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"hhhlogin/h15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"hhhlogin/h16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"hhhlogin/h17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"hhhlogin/h18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"hhhlogin/h19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"hhhlogin/h20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"hhhlogin/h21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"hhhlogin/h22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"hhhlogin/h23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"hhhlogin/h24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"hhhlogin/h25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"hhhlogin/h26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"hhhlogin/h27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"hhhlogin/h28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"hhhlogin/h29b.png"},

            "wxeff_btn_atlas/0.png": {url:"hhhwxeff/h1c.png"},
            "wxeff_btn_atlas/1.png": {url:"hhhwxeff/h2c.png"},
            "wxeff_btn_atlas/2.png": {url:"hhhwxeff/h3c.png"},
            "wxeff_btn_atlas/3.png": {url:"hhhwxeff/h4c.png"},
            "wxeff_btn_atlas/4.png": {url:"hhhwxeff/h5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "hhhhelp",
            "./sax": "./hhhsax",
            "./dom": "./hhhdom",
            "client_pb.js": clinetPbName,
            "protobuf.js": "hhhhBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "hhhlogin",
            "wxeff_btn_atlas": "hhhwxeff",
            "wxloading_atlas": "hhhloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "h1a.png",
            "btn_loding_abcelq1.png": "h2a.png",
            "image_loading_bg.jpg": "h3a.jpg",
            "image_loading_bg_bottom.jpg": "h4a.jpg",
            "image_loading_bg_bottom2.jpg": "h5a.jpg",
            "image_loading_bg_left.jpg": "h6a.jpg",
            "image_loading_bg_left2.jpg": "h7a.jpg",
            "image_loading_bg_right.jpg": "h8a.jpg",
            "image_loading_bg_right2.jpg": "h9a.jpg",
            "image_loading_bg_top.jpg": "h10a.jpg",
            "image_loading_bg_top2.jpg": "h11a.jpg",
            "image_loading_bg2.jpg": "h12a.jpg",

            "image_loding_bar0.png": "h13a.png",
            "image_loding_bar1.png": "h14a.png",
            "image_loding_bar02.png": "h15a.png",
            "image_loding_bar2.png": "h16a.png",
            "image_loding_bar3.png": "h17a.png",
            "image_login_point1.png": "h18a.png",
            "image_login_point2.png":"h19a.png",
            "image_login_point3.png": "h20a.png",


            "image_xuanqu_ztjb0.png": "h199b.png",
            "image_denglu_txtshenpi.png": "h1b.png",
            "shenhezizi.png": "h123b.png",
            "image_login_loginbg.jpg": "h2b.jpg",
            "image_login_loginbg_bottom.jpg": "h3b.jpg",
            "image_login_loginbg_left.jpg": "h4b.jpg",
            "image_login_loginbg_right.jpg": "h5b.jpg",
            "image_login_loginbg_top.jpg": "h6b.jpg",
            "image_login_logo.png": "h7b.png",
            "image_login_notice.png": "h8b.png",
            "image_xuanfu_xfbg.png": "h9b.png",

            "btn_com_chuangback.png": "h10b.png",
            "btn_login_gonggao.png": "h11b.png",
            "btn_login_loginanniu.png": "h12b.png",
            "btn_login_yingsi.png": "h13b.png",
            "btn_xuanqu_anniuhuang.png": "h14b.png",
            "btn_xuanqu_anniulan.png": "h15b.png",
            "btn_xuanqu_quanniu.png": "h16b.png",
            "image_com_tuichu.png": "h17b.png",
            "image_login_changtong.png": "h18b.png",
            "image_login_fanmang.png": "h19b.png",
            "image_login_weihu.png": "h20b.png",
            "image_login_xuanqubg.png": "h21b.png",
            "image_login_init.png": "h22b.png",
            "btn_com_chuangback1.png": "h23b.png",
            "btn_com_long0.png":"h24b.png",
            "btn_com_long1.png":"h25b.png",
            "image_login_notice1.png":"h26b.png",
            "image_loding_txtbhcc.png":"h27b.png",
            "image_xuanfu_gx0.png": "h28b.png",
            "image_xuanfu_gx1.png": "h29b.png",

            "0.png": "h1c.png",
            "1.png": "h2c.png",
            "2.png": "h3c.png",
            "3.png": "h4c.png",
            "4.png": "h5c.png",

        }
        strFilePath = "/hres";
        strFileName = "/hfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$C", "O", "_p", "$h", "h_"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "XYU6RHS90AQ3CP7LOM1BKW4$V2NZF85E_IJDGT";
        str_leading2 = "kmto5lcpu$8rz9jdhw0xq7134fgv_nsya62ibe";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-h', function () {
    var stream = gulp.src("")
        .pipe(set_param_h())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-H', function (cb) {
    sequence("set-param-h","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-H-minify', function (cb) {
    sequence("set-param-h","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--H包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--I包  start-----------------------------------------------------------*/


/**I包参数*/
var set_param_i = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageI/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameI';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_qr';
        PREFIX = 'I_';
        sourceProject = "wx_build/jg_gameI_new";
        targetProject = "wx_build/jg_gameI_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "iiiMAIN.js";
        libsMainJs = "iiiiGAME.js";
        packageName1 = "iiiLIBS";
        packageName2 = "iiiiiPF";
        packageName3 = "iiiiiiiii";
        var clinetPbName = "iiiCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/iiiINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/iiiINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/iiiDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/iiiDOMPARSER.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/iiiWXMINI.js"},
            "libs/libs.min.js":  {url:packageName1+"/iiiLIBSMIN.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/iiiMDFIVEMIN.js"},
            "libs/sax.js":  {url:packageName1+"/iiiSAX.js"},
            "libs/weapp-adapter.js":  {url:"iisadfa/iiiWEASAF.js"},
            "libs/zlib.js":  {url:packageName1+"/iiiZLIBS.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"iiiiSDK"},
            "wxsdk/wx_aksdk.js":  {url:"iiiiSDK/iiiSDDK.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"iiiiSDK/iiiiHELP.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/iiBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"IIILOADING"},
            "wxlogin_atlas": {url:"IIILOGIN"},
            "wxeff_btn_atlas":{url:"IIIWXEFF"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/IIILOADING.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"IIILOADING/I1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"IIILOADING/I2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"IIILOADING/I3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"IIILOADING/I4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"IIILOADING/I5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"IIILOADING/I6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"IIILOADING/I7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"IIILOADING/I8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"IIILOADING/I9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"IIILOADING/I10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"IIILOADING/I11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"IIILOADING/I12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"IIILOADING/I13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"IIILOADING/I14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"IIILOADING/I15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"IIILOADING/I16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"IIILOADING/I17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"IIILOADING/I18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"IIILOADING/I19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"IIILOADING/I20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"IIILOGIN/I199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"IIILOGIN/I1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"IIILOGIN/I123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"IIILOGIN/I2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"IIILOGIN/I3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"IIILOGIN/I4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"IIILOGIN/I5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"IIILOGIN/I6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"IIILOGIN/I7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"IIILOGIN/I8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"IIILOGIN/I9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"IIILOGIN/I10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"IIILOGIN/I11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"IIILOGIN/I12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"IIILOGIN/I13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"IIILOGIN/I14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"IIILOGIN/I15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"IIILOGIN/I16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"IIILOGIN/I17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"IIILOGIN/I18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"IIILOGIN/I19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"IIILOGIN/I20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"IIILOGIN/I21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"IIILOGIN/I22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"IIILOGIN/I23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"IIILOGIN/I24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"IIILOGIN/I25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"IIILOGIN/I26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"IIILOGIN/I27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"IIILOGIN/I28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"IIILOGIN/I29b.png"},

            "wxeff_btn_atlas/0.png": {url:"IIIWXEFF/I1c.png"},
            "wxeff_btn_atlas/1.png": {url:"IIIWXEFF/I2c.png"},
            "wxeff_btn_atlas/2.png": {url:"IIIWXEFF/I3c.png"},
            "wxeff_btn_atlas/3.png": {url:"IIIWXEFF/I4c.png"},
            "wxeff_btn_atlas/4.png": {url:"IIIWXEFF/I5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "iiiiHELP",
            "./sax": "./iiiSAX",
            "./dom": "./iiiDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "iiBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "IIILOGIN",
            "wxeff_btn_atlas": "IIIWXEFF",
            "wxloading_atlas": "IIILOADING",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "I1a.png",
            "btn_loding_abcelq1.png": "I2a.png",
            "image_loading_bg.jpg": "I3a.jpg",
            "image_loading_bg_bottom.jpg": "I4a.jpg",
            "image_loading_bg_bottom2.jpg": "I5a.jpg",
            "image_loading_bg_left.jpg": "I6a.jpg",
            "image_loading_bg_left2.jpg": "I7a.jpg",
            "image_loading_bg_right.jpg": "I8a.jpg",
            "image_loading_bg_right2.jpg": "I9a.jpg",
            "image_loading_bg_top.jpg": "I10a.jpg",
            "image_loading_bg_top2.jpg": "I11a.jpg",
            "image_loading_bg2.jpg": "I12a.jpg",

            "image_loding_bar0.png": "I13a.png",
            "image_loding_bar1.png": "I14a.png",
            "image_loding_bar02.png": "I15a.png",
            "image_loding_bar2.png": "I16a.png",
            "image_loding_bar3.png": "I17a.png",
            "image_login_point1.png": "I18a.png",
            "image_login_point2.png":"I19a.png",
            "image_login_point3.png": "I20a.png",



            "image_xuanqu_ztjb0.png": "I199b.png",
            "image_denglu_txtshenpi.png": "I1b.png",
            "shenhezizi.png": "I123b.png",
            "image_login_loginbg.jpg": "I2b.jpg",
            "image_login_loginbg_bottom.jpg": "I3b.jpg",
            "image_login_loginbg_left.jpg": "I4b.jpg",
            "image_login_loginbg_right.jpg": "I5b.jpg",
            "image_login_loginbg_top.jpg": "I6b.jpg",
            "image_login_logo.png": "I7b.png",
            "image_login_notice.png": "I8b.png",
            "image_xuanfu_xfbg.png": "I9b.png",

            "btn_com_chuangback.png": "I10b.png",
            "btn_login_gonggao.png": "I11b.png",
            "btn_login_loginanniu.png": "I12b.png",
            "btn_login_yingsi.png": "I13b.png",
            "btn_xuanqu_anniuhuang.png": "I14b.png",
            "btn_xuanqu_anniulan.png": "I15b.png",
            "btn_xuanqu_quanniu.png": "I16b.png",
            "image_com_tuichu.png": "I17b.png",
            "image_login_changtong.png": "I18b.png",
            "image_login_fanmang.png": "I19b.png",
            "image_login_weihu.png": "I20b.png",
            "image_login_xuanqubg.png": "I21b.png",
            "image_login_init.png": "I22b.png",
            "btn_com_chuangback1.png": "I23b.png",
            "btn_com_long0.png":"I24b.png",
            "btn_com_long1.png":"I25b.png",
            "image_login_notice1.png":"I26b.png",
            "image_loding_txtbhcc.png":"I27b.png",
            "image_xuanfu_gx0.png": "I28b.png",
            "image_xuanfu_gx1.png": "I29b.png",

            "0.png": "I1c.png",
            "1.png": "I2c.png",
            "2.png": "I3c.png",
            "3.png": "I4c.png",
            "4.png": "I5c.png",

        }
        strFilePath = "/ires";
        strFileName = "/ifiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$I", "Q", "_r", "$i", "i_"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 120000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "EXDGRUYZVS6F_$CABKH5TNMIPL91Q7420OW8J3";
        str_leading2 = "dyog0zl$irt9vm1cpf_8ja637besukq2n5w4hx";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-i', function () {
    var stream = gulp.src("")
        .pipe(set_param_i())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-I', function (cb) {
    sequence("set-param-i","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-I-minify', function (cb) {
    sequence("set-param-i","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--I包  end-----------------------------------------------------------*/
/**-------------------------------------------------微信小游戏--J包  趣侬vs腾庚--缥缈仙剑h5start-----------------------------------------------------------*/


/**J包参数*/
var set_param_j = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageJ/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameJ';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqruvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_st';
        PREFIX = 'J$';
        sourceProject = "wx_build/jg_gameJ_new";
        targetProject = "wx_build/jg_gameJ_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "jjjMAIN.js";
        libsMainJs = "jjjjGAME.js";
        packageName1 = "jjjLIBS";
        packageName2 = "jjjjjPF";
        packageName3 = "jjjjjjjjjj";
        var clinetPbName = "jjjCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/jjjINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/jjjINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/jjjDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/jjjDOMPARSER.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/jjjWXMINI.js"},
            "libs/libs.min.js":  {url:packageName1+"/jjjLIBSMIN.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/jjjMDFIVEMIN.js"},
            "libs/sax.js":  {url:packageName1+"/jjjSAX.js"},
            "libs/weapp-adapter.js":  {url:"jjasdfads/jjjWEASAF.js"},
            "libs/zlib.js":  {url:packageName1+"/jjjZLIBS.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"jjjjSDK"},
            "wxsdk/wx_aksdk.js":  {url:"jjjjSDK/jjjSDDK.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"jjjjSDK/jjjjHELP.js",extractStr:true,count:1,strLen:3},
            "utils/config.js":{url:"utils/config.js",addGlobleKeys0:false,extractStr:false},
            "utils/ddsdk.js":{url:"utils/ddsdk.js",addGlobleKeys0:false,extractStr:false},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/jjBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"JJJLOADING"},
            "wxlogin_atlas": {url:"JJJLOGIN"},
            "wxeff_btn_atlas":{url:"JJJWXEFF"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/JJJLOADING.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"JJJLOADING/J1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"JJJLOADING/J2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"JJJLOADING/J3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"JJJLOADING/J4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"JJJLOADING/J5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"JJJLOADING/J6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"JJJLOADING/J7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"JJJLOADING/J8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"JJJLOADING/J9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"JJJLOADING/J10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"JJJLOADING/J11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"JJJLOADING/J12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"JJJLOADING/J13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"JJJLOADING/J14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"JJJLOADING/J15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"JJJLOADING/J16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"JJJLOADING/J17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"JJJLOADING/J18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"JJJLOADING/J19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"JJJLOADING/J20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"JJJLOGIN/J199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"JJJLOGIN/J1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"JJJLOGIN/J123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"JJJLOGIN/J2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"JJJLOGIN/J3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"JJJLOGIN/J4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"JJJLOGIN/J5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"JJJLOGIN/J6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"JJJLOGIN/J7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"JJJLOGIN/J8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"JJJLOGIN/J9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"JJJLOGIN/J10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"JJJLOGIN/J11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"JJJLOGIN/J12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"JJJLOGIN/J13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"JJJLOGIN/J14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"JJJLOGIN/J15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"JJJLOGIN/J16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"JJJLOGIN/J17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"JJJLOGIN/J18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"JJJLOGIN/J19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"JJJLOGIN/J20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"JJJLOGIN/J21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"JJJLOGIN/J22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"JJJLOGIN/J23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"JJJLOGIN/J24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"JJJLOGIN/J25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"JJJLOGIN/J26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"JJJLOGIN/J27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"JJJLOGIN/J28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"JJJLOGIN/J29b.png"},

            "wxeff_btn_atlas/0.png": {url:"JJJWXEFF/J1c.png"},
            "wxeff_btn_atlas/1.png": {url:"JJJWXEFF/J2c.png"},
            "wxeff_btn_atlas/2.png": {url:"JJJWXEFF/J3c.png"},
            "wxeff_btn_atlas/3.png": {url:"JJJWXEFF/J4c.png"},
            "wxeff_btn_atlas/4.png": {url:"JJJWXEFF/J5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "jjjjHELP",
            "./sax": "./jjjSAX",
            "./dom": "./jjjDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "jjBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "JJJLOGIN",
            "wxeff_btn_atlas": "JJJWXEFF",
            "wxloading_atlas": "JJJLOADING",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "J1a.png",
            "btn_loding_abcelq1.png": "J2a.png",
            "image_loading_bg.jpg": "J3a.jpg",
            "image_loading_bg_bottom.jpg": "J4a.jpg",
            "image_loading_bg_bottom2.jpg": "J5a.jpg",
            "image_loading_bg_left.jpg": "J6a.jpg",
            "image_loading_bg_left2.jpg": "J7a.jpg",
            "image_loading_bg_right.jpg": "J8a.jpg",
            "image_loading_bg_right2.jpg": "J9a.jpg",
            "image_loading_bg_top.jpg": "J10a.jpg",
            "image_loading_bg_top2.jpg": "J11a.jpg",
            "image_loading_bg2.jpg": "J12a.jpg",

            "image_loding_bar0.png": "J13a.png",
            "image_loding_bar1.png": "J14a.png",
            "image_loding_bar02.png": "J15a.png",
            "image_loding_bar2.png": "J16a.png",
            "image_loding_bar3.png": "J17a.png",
            "image_login_point1.png": "J18a.png",
            "image_login_point2.png":"J19a.png",
            "image_login_point3.png": "J20a.png",


            "image_xuanqu_ztjb0.png": "J199b.png",
            "image_denglu_txtshenpi.png": "J1b.png",
            "shenhezizi.png": "J123b.png",
            "image_login_loginbg.jpg": "J2b.jpg",
            "image_login_loginbg_bottom.jpg": "J3b.jpg",
            "image_login_loginbg_left.jpg": "J4b.jpg",
            "image_login_loginbg_right.jpg": "J5b.jpg",
            "image_login_loginbg_top.jpg": "J6b.jpg",
            "image_login_logo.png": "J7b.png",
            "image_login_notice.png": "J8b.png",
            "image_xuanfu_xfbg.png": "J9b.png",

            "btn_com_chuangback.png": "J10b.png",
            "btn_login_gonggao.png": "J11b.png",
            "btn_login_loginanniu.png": "J12b.png",
            "btn_login_yingsi.png": "J13b.png",
            "btn_xuanqu_anniuhuang.png": "J14b.png",
            "btn_xuanqu_anniulan.png": "J15b.png",
            "btn_xuanqu_quanniu.png": "J16b.png",
            "image_com_tuichu.png": "J17b.png",
            "image_login_changtong.png": "J18b.png",
            "image_login_fanmang.png": "J19b.png",
            "image_login_weihu.png": "J20b.png",
            "image_login_xuanqubg.png": "J21b.png",
            "image_login_init.png": "J22b.png",
            "btn_com_chuangback1.png": "J23b.png",
            "btn_com_long0.png":"J24b.png",
            "btn_com_long1.png":"J25b.png",
            "image_login_notice1.png":"J26b.png",
            "image_loding_txtbhcc.png":"J27b.png",
            "image_xuanfu_gx0.png": "J28b.png",
            "image_xuanfu_gx1.png": "J29b.png",

            "0.png": "J1c.png",
            "1.png": "J2c.png",
            "2.png": "J3c.png",
            "3.png": "J4c.png",
            "4.png": "J5c.png",

        }
        strFilePath = "/Jres";
        strFileName = "/Jfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$J", "S", "_t", "$j", "j1_"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 540000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "I3S9A2B6V$LNEZP1KUCROGFT8MH0D7WJY4XQ5_";
        str_leading2 = "_t$haz9xi82dq1mfr76ksyog0clu4bepn5j3wv";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-j', function () {
    var stream = gulp.src("")
        .pipe(set_param_j())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-J', function (cb) {
    sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});
//混淆
gulp.task('build-babel-obfuscator-Jminify', function (cb) {
    sequence("set-param-j","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--J包 趣侬vs腾庚--缥缈仙剑h5 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--k包  start-----------------------------------------------------------*/


/**K包参数*/
var set_param_k = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageK/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameK';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_uv';
        PREFIX = 'k$';
        sourceProject = "wx_build/jg_gameK_new";
        targetProject = "wx_build/jg_gameK_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "KKKMAIN.js";
        libsMainJs = "kkkkGAME.js";
        packageName1 = "KKKLIBS";
        packageName2 = "kkkkkPF";
        packageName3 = "kkkkkkkkkk";
        var clinetPbName = "kkkCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/kkkINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/kkkINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/kkkDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/kkkDOMPARSER.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/kkkWXMINI.js"},
            "libs/libs.min.js":  {url:packageName1+"/KKKLIBSMIN.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/kkkMDFIVEMIN.js"},
            "libs/sax.js":  {url:packageName1+"/kkkSAX.js"},
            "libs/weapp-adapter.js":  {url:"fsfdgsfd3/kkkWEASAF.js"},
            "libs/zlib.js":  {url:packageName1+"/kkkZLIBS.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"kkkkSDK"},
            "wxsdk/wx_aksdk.js":  {url:"kkkkSDK/kkkSDDK.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"kkkkSDK/kkkkHELP.js",extractStr:true,count:1,strLen:3},
            "utils/bgwl_v1.7.min.js":{url:"utils/bgwl_v1.7.min.js",addGlobleKeys0:false,extractStr:false},
            "utils/bgwl.js":{url:"utils/bgwl.js",addGlobleKeys0:false,extractStr:false},
            "utils/crypto-js.js":{url:"utils/crypto-js.js",addGlobleKeys0:false,extractStr:false},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/kkkBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"KKKLOADING"},
            "wxlogin_atlas": {url:"KKKLOGIN"},
            "wxeff_btn_atlas":{url:"KKKWXEFF"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/KKKLOADING.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"KKKLOADING/K1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"KKKLOADING/K2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"KKKLOADING/K3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"KKKLOADING/K4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"KKKLOADING/K5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"KKKLOADING/K6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"KKKLOADING/K7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"KKKLOADING/K8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"KKKLOADING/K9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"KKKLOADING/K10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"KKKLOADING/K11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"KKKLOADING/K12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"KKKLOADING/K13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"KKKLOADING/K14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"KKKLOADING/K15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"KKKLOADING/K16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"KKKLOADING/K17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"KKKLOADING/K18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"KKKLOADING/K19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"KKKLOADING/K20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"KKKLOGIN/K199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"KKKLOGIN/K1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"KKKLOGIN/K123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"KKKLOGIN/K2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"KKKLOGIN/K3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"KKKLOGIN/K4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"KKKLOGIN/K5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"KKKLOGIN/K6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"KKKLOGIN/K7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"KKKLOGIN/K8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"KKKLOGIN/K9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"KKKLOGIN/K10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"KKKLOGIN/K11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"KKKLOGIN/K12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"KKKLOGIN/K13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"KKKLOGIN/K14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"KKKLOGIN/K15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"KKKLOGIN/K16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"KKKLOGIN/K17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"KKKLOGIN/K18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"KKKLOGIN/K19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"KKKLOGIN/K20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"KKKLOGIN/K21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"KKKLOGIN/K22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"KKKLOGIN/K23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"KKKLOGIN/K24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"KKKLOGIN/K25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"KKKLOGIN/K26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"KKKLOGIN/K27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"KKKLOGIN/K28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"KKKLOGIN/K29b.png"},

            "wxeff_btn_atlas/0.png": {url:"KKKWXEFF/K1c.png"},
            "wxeff_btn_atlas/1.png": {url:"KKKWXEFF/K2c.png"},
            "wxeff_btn_atlas/2.png": {url:"KKKWXEFF/K3c.png"},
            "wxeff_btn_atlas/3.png": {url:"KKKWXEFF/K4c.png"},
            "wxeff_btn_atlas/4.png": {url:"KKKWXEFF/K5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "kkkkHELP",
            "./sax": "./kkkSAX",
            "./dom": "./kkkDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "kkkBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "KKKLOGIN",
            "wxeff_btn_atlas": "KKKWXEFF",
            "wxloading_atlas": "KKKLOADING",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "K1a.png",
            "btn_loding_abcelq1.png": "K2a.png",
            "image_loading_bg.jpg": "K3a.jpg",
            "image_loading_bg_bottom.jpg": "K4a.jpg",
            "image_loading_bg_bottom2.jpg": "K5a.jpg",
            "image_loading_bg_left.jpg": "K6a.jpg",
            "image_loading_bg_left2.jpg": "K7a.jpg",
            "image_loading_bg_right.jpg": "K8a.jpg",
            "image_loading_bg_right2.jpg": "K9a.jpg",
            "image_loading_bg_top.jpg": "K10a.jpg",
            "image_loading_bg_top2.jpg": "K11a.jpg",
            "image_loading_bg2.jpg": "K12a.jpg",

            "image_loding_bar0.png": "K13a.png",
            "image_loding_bar1.png": "K14a.png",
            "image_loding_bar02.png": "K15a.png",
            "image_loding_bar2.png": "K16a.png",
            "image_loding_bar3.png": "K17a.png",
            "image_login_point1.png": "K18a.png",
            "image_login_point2.png":"K19a.png",
            "image_login_point3.png": "K20a.png",


            "image_xuanqu_ztjb0.png": "K199b.png",
            "image_denglu_txtshenpi.png": "K1b.png",
            "shenhezizi.png": "K123b.png",
            "image_login_loginbg.jpg": "K2b.jpg",
            "image_login_loginbg_bottom.jpg": "K3b.jpg",
            "image_login_loginbg_left.jpg": "K4b.jpg",
            "image_login_loginbg_right.jpg": "K5b.jpg",
            "image_login_loginbg_top.jpg": "K6b.jpg",
            "image_login_logo.png": "K7b.png",
            "image_login_notice.png": "K8b.png",
            "image_xuanfu_xfbg.png": "K9b.png",

            "btn_com_chuangback.png": "K10b.png",
            "btn_login_gonggao.png": "K11b.png",
            "btn_login_loginanniu.png": "K12b.png",
            "btn_login_yingsi.png": "K13b.png",
            "btn_xuanqu_anniuhuang.png": "K14b.png",
            "btn_xuanqu_anniulan.png": "K15b.png",
            "btn_xuanqu_quanniu.png": "K16b.png",
            "image_com_tuichu.png": "K17b.png",
            "image_login_changtong.png": "K18b.png",
            "image_login_fanmang.png": "K19b.png",
            "image_login_weihu.png": "K20b.png",
            "image_login_xuanqubg.png": "K21b.png",
            "image_login_init.png": "K22b.png",
            "btn_com_chuangback1.png": "K23b.png",
            "btn_com_long0.png":"K24b.png",
            "btn_com_long1.png":"K25b.png",
            "image_login_notice1.png":"K26b.png",
            "image_loding_txtbhcc.png":"K27b.png",
            "image_xuanfu_gx0.png": "K28b.png",
            "image_xuanfu_gx1.png": "K29b.png",

            "0.png": "K1c.png",
            "1.png": "K2c.png",
            "2.png": "K3c.png",
            "3.png": "K4c.png",
            "4.png": "K5c.png",

        }
        strFilePath = "/kres";
        strFileName = "/kfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$k", "U", "_V", "$K", "K1_"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 140000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "TP7E2FJROQ81MK35ADV_YUC$G9H0NSBXZW64IL";
        str_leading2 = "4mj7tieh6ks9280qn1vowbzxaul$d_rp53gfcy";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-k', function () {
    var stream = gulp.src("")
        .pipe(set_param_k())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-K', function (cb) {
    sequence("set-param-k","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

//混淆
gulp.task('build-babel-obfuscator-Kminify', function (cb) {
    sequence("set-param-k","MT1_build_minifyTargetProject",cb);
});



/**-------------------------------------------------微信小游戏--k包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--L包  start-----------------------------------------------------------*/


/**L包参数*/
var set_param_l = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageL/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameL';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstuvyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_wx';
        PREFIX = 'L$';
        sourceProject = "wx_build/jg_gameL_new";
        targetProject = "wx_build/jg_gameL_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "LLLMAIN.js";
        libsMainJs = "LLLLGAME.js";
        packageName1 = "LLLLIBS";
        packageName2 = "LLLLLLPF";
        packageName3 = "LLLLLLLL";
        var clinetPbName = "LLLCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/LLLLINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/LLLINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/LLLDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/LLLDOMPARSER.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/LLLLWXMINI.js"},
            "libs/libs.min.js":  {url:packageName1+"/llllLIBSMIN.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/lllMDFIVEMIN.js"},
            "libs/sax.js":  {url:packageName1+"/lllSAX.js"},
            "libs/weapp-adapter.js":  {url:"srcds312/lllWEASAF.js"},
            "libs/zlib.js":  {url:packageName1+"/lllZLIBS.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"llllSDK"},
            "wxsdk/wx_aksdk.js":  {url:"llllSDK/llllSDDK.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"llllSDK/llllHELP.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/llllllBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"lllllLOADING"},
            "wxlogin_atlas": {url:"llllLOGIN"},
            "wxeff_btn_atlas":{url:"llllWXEFF"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/lllllLOADING.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"lllllLOADING/l1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"lllllLOADING/l2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"lllllLOADING/l3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"lllllLOADING/l4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"lllllLOADING/l5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"lllllLOADING/l6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"lllllLOADING/l7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"lllllLOADING/l8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"lllllLOADING/l9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"lllllLOADING/l10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"lllllLOADING/l11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"lllllLOADING/l12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"lllllLOADING/l13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"lllllLOADING/l14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"lllllLOADING/l15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"lllllLOADING/l16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"lllllLOADING/l17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"lllllLOADING/l18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"lllllLOADING/l19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"lllllLOADING/l20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"llllLOGIN/l199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"llllLOGIN/l1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"llllLOGIN/l123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"llllLOGIN/l2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"llllLOGIN/l3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"llllLOGIN/l4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"llllLOGIN/l5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"llllLOGIN/l6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"llllLOGIN/l7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"llllLOGIN/l8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"llllLOGIN/l9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"llllLOGIN/l10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"llllLOGIN/l11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"llllLOGIN/l12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"llllLOGIN/l13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"llllLOGIN/l14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"llllLOGIN/l15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"llllLOGIN/l16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"llllLOGIN/l17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"llllLOGIN/l18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"llllLOGIN/l19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"llllLOGIN/l20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"llllLOGIN/l21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"llllLOGIN/l22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"llllLOGIN/l23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"llllLOGIN/l24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"llllLOGIN/l25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"llllLOGIN/l26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"llllLOGIN/l27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"llllLOGIN/l28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"llllLOGIN/l29b.png"},

            "wxeff_btn_atlas/0.png": {url:"llllWXEFF/l1c.png"},
            "wxeff_btn_atlas/1.png": {url:"llllWXEFF/l2c.png"},
            "wxeff_btn_atlas/2.png": {url:"llllWXEFF/l3c.png"},
            "wxeff_btn_atlas/3.png": {url:"llllWXEFF/l4c.png"},
            "wxeff_btn_atlas/4.png": {url:"llllWXEFF/l5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "llllHELP",
            "./sax": "./lllSAX",
            "./dom": "./LLLDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "llllllBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "llllLOGIN",
            "wxeff_btn_atlas": "llllWXEFF",
            "wxloading_atlas": "lllllLOADING",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "l1a.png",
            "btn_loding_abcelq1.png": "l2a.png",
            "image_loading_bg.jpg": "l3a.jpg",
            "image_loading_bg_bottom.jpg": "l4a.jpg",
            "image_loading_bg_bottom2.jpg": "l5a.jpg",
            "image_loading_bg_left.jpg": "l6a.jpg",
            "image_loading_bg_left2.jpg": "l7a.jpg",
            "image_loading_bg_right.jpg": "l8a.jpg",
            "image_loading_bg_right2.jpg": "l9a.jpg",
            "image_loading_bg_top.jpg": "l10a.jpg",
            "image_loading_bg_top2.jpg": "l11a.jpg",
            "image_loading_bg2.jpg": "l12a.jpg",

            "image_loding_bar0.png": "l13a.png",
            "image_loding_bar1.png": "l14a.png",
            "image_loding_bar02.png": "l15a.png",
            "image_loding_bar2.png": "l16a.png",
            "image_loding_bar3.png": "l17a.png",
            "image_login_point1.png": "l18a.png",
            "image_login_point2.png":"l19a.png",
            "image_login_point3.png": "l20a.png",


            "image_xuanqu_ztjb0.png": "l199b.png",
            "image_denglu_txtshenpi.png": "l1b.png",
            "shenhezizi.png": "l123b.png",
            "image_login_loginbg.jpg": "l2b.jpg",
            "image_login_loginbg_bottom.jpg": "l3b.jpg",
            "image_login_loginbg_left.jpg": "l4b.jpg",
            "image_login_loginbg_right.jpg": "l5b.jpg",
            "image_login_loginbg_top.jpg": "l6b.jpg",
            "image_login_logo.png": "l7b.png",
            "image_login_notice.png": "l8b.png",
            "image_xuanfu_xfbg.png": "l9b.png",

            "btn_com_chuangback.png": "l10b.png",
            "btn_login_gonggao.png": "l11b.png",
            "btn_login_loginanniu.png": "l12b.png",
            "btn_login_yingsi.png": "l13b.png",
            "btn_xuanqu_anniuhuang.png": "l14b.png",
            "btn_xuanqu_anniulan.png": "l15b.png",
            "btn_xuanqu_quanniu.png": "l16b.png",
            "image_com_tuichu.png": "l17b.png",
            "image_login_changtong.png": "l18b.png",
            "image_login_fanmang.png": "l19b.png",
            "image_login_weihu.png": "l20b.png",
            "image_login_xuanqubg.png": "l21b.png",
            "image_login_init.png": "l22b.png",
            "btn_com_chuangback1.png": "l23b.png",
            "btn_com_long0.png":"l24b.png",
            "btn_com_long1.png":"l25b.png",
            "image_login_notice1.png":"l26b.png",
            "image_loding_txtbhcc.png":"l27b.png",
            "image_xuanfu_gx0.png": "l28b.png",
            "image_xuanfu_gx1.png": "l29b.png",

            "0.png": "l1c.png",
            "1.png": "l2c.png",
            "2.png": "l3c.png",
            "3.png": "l4c.png",
            "4.png": "l5c.png",

        }
        strFilePath = "/lres";
        strFileName = "/lfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$l", "W", "_X", "$L", "L9"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;//160000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "BT0HDPSKYCNUFLQI78_WM24RE$3V6GJZ1A5OX9";
        str_leading2 = "wimcr30yxn_48s$d2bakjhzqlt5f9o7v1egu6p";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-l', function () {
    var stream = gulp.src("")
        .pipe(set_param_l())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-L', function (cb) {
    sequence("set-param-l","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-L-minify', function (cb) {
    sequence("set-param-l","MT1_build_minifyTargetProject",cb);
});

var set_param_LL = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        // sourceProject = "wx_build/jg_gameA";
        mainJsName = "main.min.js"
        targetProject = "wx_build/jg_gameL";
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-LL', function () {
    var stream = gulp.src("")
        .pipe(set_param_LL())
    return stream;
});

//压缩
gulp.task('build-babel-obfuscator-LL-minify', function (cb) {
    sequence("set-param-LL","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--L包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--M包  start-----------------------------------------------------------*/


/**M包参数*/
var set_param_m = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageM/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameM';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWXYZ$_yz';
        PREFIX = 'M$';
        sourceProject = "wx_build/jg_gameM_new";
        targetProject = "wx_build/jg_gameM_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "MMMMAIN.js";
        libsMainJs = "mmmGAME.js";
        packageName1 = "MMMMIBS";
        packageName2 = "MMMMMMPF";
        packageName3 = "MMMMMMMM";
        var clinetPbName = "MMMCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/mmmmINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/mmmINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/mmmDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/mmmDOMPARSER.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/mmmmWXMINI.js"},
            "libs/libs.min.js":  {url:packageName1+"/mmmmmmmLIBSMIN.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/mmmmmmmmMDFIVEMIN.js"},
            "libs/sax.js":  {url:packageName1+"/mmmSAX.js"},
            "libs/weapp-adapter.js":  {url:"afa1/mmmWEASAF.js"},
            "libs/zlib.js":  {url:packageName1+"/mmmZLIBS.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"mmmmmSDK"},
            "wxsdk/wx_aksdk.js":  {url:"mmmmmSDK/mmmSDDK.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"mmmmmSDK/mmmmHELP.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/mmmmmBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"mmmmmmLOADING"},
            "wxlogin_atlas": {url:"mmmmmLOGIN"},
            "wxeff_btn_atlas":{url:"mmmmmWXEFF"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/mmmmmmLOADING.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"mmmmmmLOADING/m1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"mmmmmmLOADING/m2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"mmmmmmLOADING/m3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"mmmmmmLOADING/m4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"mmmmmmLOADING/m5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"mmmmmmLOADING/m6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"mmmmmmLOADING/m7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"mmmmmmLOADING/m8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"mmmmmmLOADING/m9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"mmmmmmLOADING/m10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"mmmmmmLOADING/m11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"mmmmmmLOADING/m12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"mmmmmmLOADING/m13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"mmmmmmLOADING/m14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"mmmmmmLOADING/m15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"mmmmmmLOADING/m16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"mmmmmmLOADING/m17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"mmmmmmLOADING/m18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"mmmmmmLOADING/m19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"mmmmmmLOADING/m20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"mmmmmLOGIN/m199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"mmmmmLOGIN/m1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"mmmmmLOGIN/m123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"mmmmmLOGIN/m2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"mmmmmLOGIN/m3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"mmmmmLOGIN/m4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"mmmmmLOGIN/m5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"mmmmmLOGIN/m6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"mmmmmLOGIN/m7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"mmmmmLOGIN/m8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"mmmmmLOGIN/m9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"mmmmmLOGIN/m10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"mmmmmLOGIN/m11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"mmmmmLOGIN/m12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"mmmmmLOGIN/m13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"mmmmmLOGIN/m14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"mmmmmLOGIN/m15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"mmmmmLOGIN/m16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"mmmmmLOGIN/m17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"mmmmmLOGIN/m18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"mmmmmLOGIN/m19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"mmmmmLOGIN/m20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"mmmmmLOGIN/m21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"mmmmmLOGIN/m22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"mmmmmLOGIN/m23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"mmmmmLOGIN/m24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"mmmmmLOGIN/m25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"mmmmmLOGIN/m26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"mmmmmLOGIN/m27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"mmmmmLOGIN/m28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"mmmmmLOGIN/m29b.png"},

            "wxeff_btn_atlas/0.png": {url:"mmmmmWXEFF/m1c.png"},
            "wxeff_btn_atlas/1.png": {url:"mmmmmWXEFF/m2c.png"},
            "wxeff_btn_atlas/2.png": {url:"mmmmmWXEFF/m3c.png"},
            "wxeff_btn_atlas/3.png": {url:"mmmmmWXEFF/m4c.png"},
            "wxeff_btn_atlas/4.png": {url:"mmmmmWXEFF/m5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "mmmmHELP",
            "./sax": "./mmmSAX",
            "./dom": "./mmmDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "mmmmmBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "mmmmmLOGIN",
            "wxeff_btn_atlas": "mmmmmWXEFF",
            "wxloading_atlas": "mmmmmmLOADING",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "m1a.png",
            "btn_loding_abcelq1.png": "m2a.png",
            "image_loading_bg.jpg": "m3a.jpg",
            "image_loading_bg_bottom.jpg": "m4a.jpg",
            "image_loading_bg_bottom2.jpg": "m5a.jpg",
            "image_loading_bg_left.jpg": "m6a.jpg",
            "image_loading_bg_left2.jpg": "m7a.jpg",
            "image_loading_bg_right.jpg": "m8a.jpg",
            "image_loading_bg_right2.jpg": "m9a.jpg",
            "image_loading_bg_top.jpg": "m10a.jpg",
            "image_loading_bg_top2.jpg": "m11a.jpg",
            "image_loading_bg2.jpg": "m12a.jpg",


            "image_loding_bar0.png": "m13a.png",
            "image_loding_bar1.png": "m14a.png",
            "image_loding_bar02.png": "m15a.png",
            "image_loding_bar2.png": "m16a.png",
            "image_loding_bar3.png": "m17a.png",
            "image_login_point1.png": "m18a.png",
            "image_login_point2.png":"m19a.png",
            "image_login_point3.png": "m20a.png",


            "image_xuanqu_ztjb0.png": "m199b.png",
            "image_denglu_txtshenpi.png": "m1b.png",
            "shenhezizi.png": "m123b.png",
            "image_login_loginbg.jpg": "m2b.jpg",
            "image_login_loginbg_bottom.jpg": "m3b.jpg",
            "image_login_loginbg_left.jpg": "m4b.jpg",
            "image_login_loginbg_right.jpg": "m5b.jpg",
            "image_login_loginbg_top.jpg": "m6b.jpg",
            "image_login_logo.png": "m7b.png",
            "image_login_notice.png": "m8b.png",
            "image_xuanfu_xfbg.png": "m9b.png",

            "btn_com_chuangback.png": "m10b.png",
            "btn_login_gonggao.png": "m11b.png",
            "btn_login_loginanniu.png": "m12b.png",
            "btn_login_yingsi.png": "m13b.png",
            "btn_xuanqu_anniuhuang.png": "m14b.png",
            "btn_xuanqu_anniulan.png": "m15b.png",
            "btn_xuanqu_quanniu.png": "m16b.png",
            "image_com_tuichu.png": "m17b.png",
            "image_login_changtong.png": "m18b.png",
            "image_login_fanmang.png": "m19b.png",
            "image_login_weihu.png": "m20b.png",
            "image_login_xuanqubg.png": "m21b.png",
            "image_login_init.png": "m22b.png",
            "btn_com_chuangback1.png": "m23b.png",
            "btn_com_long0.png":"m24b.png",
            "btn_com_long1.png":"m25b.png",
            "image_login_notice1.png":"m26b.png",
            "image_loding_txtbhcc.png":"m27b.png",
            "image_xuanfu_gx0.png": "m28b.png",
            "image_xuanfu_gx1.png": "m29b.png",

            "0.png": "m1c.png",
            "1.png": "m2c.png",
            "2.png": "m3c.png",
            "3.png": "m4c.png",
            "4.png": "m5c.png",

        }
        strFilePath = "/mres";
        strFileName = "/mfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$M", "Y", "_z", "$m", "M_"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 180000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "540127$DEUPNAJV_8GF9CQIXOLMKSHZYBR36TW";
        str_leading2 = "pzt2e8cago6s4_7jmhni5l0$dbwfvr91kxuyq3";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-m', function () {
    var stream = gulp.src("")
        .pipe(set_param_m())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-M', function (cb) {
    sequence("set-param-m","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});



/**-------------------------------------------------微信小游戏--M包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--N包  start-----------------------------------------------------------*/


/**N包参数*/
var set_param_n = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageN/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameN';
        INIT_PATH = '/';
        SCOPE = 'NCaueJMnVAP$OGzftgxWvXrcEFDsq_dQlijyTLRwBYKkSpmboHIZhU';
        PREFIX = 'n$';
        sourceProject = "wx_build/jg_gameN_new";
        targetProject = "wx_build/jg_gameN_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "nnnnMAIN.js";
        libsMainJs = "nnnGAME.js";
        packageName1 = "nnnnIBS";
        packageName2 = "nnnnnPF";
        packageName3 = "nnnnnnnnn";
        var clinetPbName = "nnnCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/nnnnnINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/nnnnINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/nnnnDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/nnnndddparse.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/nnnnnWXMsad.js"},
            "libs/libs.min.js":  {url:packageName1+"/nnnLIBsdsa.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/nnnnMDadfa.js"},
            "libs/sax.js":  {url:packageName1+"/nnnSAX.js"},
            "libs/weapp-adapter.js":  {url:"afa891/nnnWEs1.js"},
            "libs/zlib.js":  {url:packageName1+"/nnnasdf.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"nnnkkk"},
            "wxsdk/wx_aksdk.js":  {url:"nnnkkk/nnnnSsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"nnnkkk/nnnhp.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/nBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"nding"},
            "wxlogin_atlas": {url:"nlgn"},
            "wxeff_btn_atlas":{url:"nff"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"nding/n1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"nding/n2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"nding/n3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"nding/n4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"nding/n5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"nding/n6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"nding/n7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"nding/n8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"nding/n9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"nding/n10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"nding/n11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"nding/n12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"nding/n13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"nding/n14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"nding/n15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"nding/n16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"nding/n17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"nding/n18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"nding/n19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"nding/n20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"nlgn/n199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"nlgn/n1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"nlgn/n123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"nlgn/n2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"nlgn/n3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"nlgn/n4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"nlgn/n5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"nlgn/n6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"nlgn/n7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"nlgn/n8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"nlgn/n9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"nlgn/n10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"nlgn/n11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"nlgn/n12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"nlgn/n13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"nlgn/n14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"nlgn/n15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"nlgn/n16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"nlgn/n17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"nlgn/n18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"nlgn/n19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"nlgn/n20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"nlgn/n21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"nlgn/n22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"nlgn/n23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"nlgn/n24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"nlgn/n25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"nlgn/n26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"nlgn/n27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"nlgn/n28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"nlgn/n29b.png"},

            "wxeff_btn_atlas/0.png": {url:"nff/n1c.png"},
            "wxeff_btn_atlas/1.png": {url:"nff/n2c.png"},
            "wxeff_btn_atlas/2.png": {url:"nff/n3c.png"},
            "wxeff_btn_atlas/3.png": {url:"nff/n4c.png"},
            "wxeff_btn_atlas/4.png": {url:"nff/n5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "nnnhp",
            "./sax": "./nnnSAX",
            "./dom": "./nnnnDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "nBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "nlgn",
            "wxeff_btn_atlas": "nff",
            "wxloading_atlas": "nding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "n1a.png",
            "btn_loding_abcelq1.png": "n2a.png",
            "image_loading_bg.jpg": "n3a.jpg",
            "image_loading_bg_bottom.jpg": "n4a.jpg",
            "image_loading_bg_bottom2.jpg": "n5a.jpg",
            "image_loading_bg_left.jpg": "n6a.jpg",
            "image_loading_bg_left2.jpg": "n7a.jpg",
            "image_loading_bg_right.jpg": "n8a.jpg",
            "image_loading_bg_right2.jpg": "n9a.jpg",
            "image_loading_bg_top.jpg": "n10a.jpg",
            "image_loading_bg_top2.jpg": "n11a.jpg",
            "image_loading_bg2.jpg": "n12a.jpg",


            "image_loding_bar0.png": "n13a.png",
            "image_loding_bar1.png": "n14a.png",
            "image_loding_bar02.png": "n15a.png",
            "image_loding_bar2.png": "n16a.png",
            "image_loding_bar3.png": "n17a.png",
            "image_login_point1.png": "n18a.png",
            "image_login_point2.png":"n19a.png",
            "image_login_point3.png": "n20a.png",


            "image_xuanqu_ztjb0.png": "n199b.png",
            "image_denglu_txtshenpi.png": "n1b.png",
            "shenhezizi.png": "n123b.png",
            "image_login_loginbg.jpg": "n2b.jpg",
            "image_login_loginbg_bottom.jpg": "n3b.jpg",
            "image_login_loginbg_left.jpg": "n4b.jpg",
            "image_login_loginbg_right.jpg": "n5b.jpg",
            "image_login_loginbg_top.jpg": "n6b.jpg",
            "image_login_logo.png": "n7b.png",
            "image_login_notice.png": "n8b.png",
            "image_xuanfu_xfbg.png": "n9b.png",

            "btn_com_chuangback.png": "n10b.png",
            "btn_login_gonggao.png": "n11b.png",
            "btn_login_loginanniu.png": "n12b.png",
            "btn_login_yingsi.png": "n13b.png",
            "btn_xuanqu_anniuhuang.png": "n14b.png",
            "btn_xuanqu_anniulan.png": "n15b.png",
            "btn_xuanqu_quanniu.png": "n16b.png",
            "image_com_tuichu.png": "n17b.png",
            "image_login_changtong.png": "n18b.png",
            "image_login_fanmang.png": "n19b.png",
            "image_login_weihu.png": "n20b.png",
            "image_login_xuanqubg.png": "n21b.png",
            "image_login_init.png": "n22b.png",
            "btn_com_chuangback1.png": "n23b.png",
            "btn_com_long0.png":"n24b.png",
            "btn_com_long1.png":"n25b.png",
            "image_login_notice1.png":"n26b.png",
            "image_loding_txtbhcc.png":"n27b.png",
            "image_xuanfu_gx0.png": "n28b.png",
            "image_xuanfu_gx1.png": "n29b.png",

            "0.png": "n1c.png",
            "1.png": "n2c.png",
            "2.png": "n3c.png",
            "3.png": "n4c.png",
            "4.png": "n5c.png",

        }
        strFilePath = "/nres";
        strFileName = "/nfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$N", "A", "_B", "_n", "n_"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "OSC06I4G$HMX21U3FWZAPYQ5DLTKVJB97R_E8N";
        str_leading2 = "a6w$bq9r4yzo3el0jnmu_8hfdt57g1cxsvki2p";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-n', function () {
    var stream = gulp.src("")
        .pipe(set_param_n())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-N', function (cb) {
    sequence("set-param-n","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

//混淆
gulp.task('build-babel-obfuscator-N-minify', function (cb) {
    sequence("set-param-n","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--N包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--O包  盛也鬼剑豪HD start-----------------------------------------------------------*/


/**O包参数*/
var set_param_O = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageO/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameO';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'o$';
        sourceProject = "wx_build/jg_gameO_new";
        targetProject = "wx_build/jg_gameO_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ooooMAIN.js";
        libsMainJs = "oooGAME.js";
        packageName1 = "ooooIBS";
        packageName2 = "oooooPF";
        packageName3 = "ooooooo";
        var clinetPbName = "oooCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/oooooINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ooooINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ooooDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/oooooparse.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/oooWXMsad.js"},
            "libs/libs.min.js":  {url:packageName1+"/ooooLIBsdsa.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/oooMDadfa.js"},
            "libs/sax.js":  {url:packageName1+"/oooSAX.js"},
            "libs/weapp-adapter.js":  {url:"aa3891/oooWEs1.js"},
            "libs/zlib.js":  {url:packageName1+"/oooasdf.js"},
            "wxsdk":  {url:"ooosk"},
            "wxsdk/wx_aksdk.js":  {url:"ooosk/oooosdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"ooosk/ooop.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/oobBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "SyMiniTool.js":  {url:packageName1+"/SyMiniTool.js",extractStr:false,count:1,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"oodino"},
            "wxlogin_atlas": {url:"oolgo"},
            "wxeff_btn_atlas":{url:"ofo"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"oodino/o1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"oodino/o2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"oodino/o3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"oodino/o4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"oodino/o5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"oodino/o6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"oodino/o7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"oodino/o8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"oodino/o9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"oodino/o10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"oodino/o11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"oodino/o12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"oodino/o13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"oodino/o14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"oodino/o15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"oodino/o16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"oodino/o17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"oodino/o18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"oodino/o19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"oodino/o20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"oolgo/o199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"oolgo/o1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"oolgo/o123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"oolgo/o2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"oolgo/o3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"oolgo/o4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"oolgo/o5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"oolgo/o6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"oolgo/o7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"oolgo/o8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"oolgo/o9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"oolgo/o10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"oolgo/o11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"oolgo/o12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"oolgo/o13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"oolgo/o14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"oolgo/o15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"oolgo/o16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"oolgo/o17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"oolgo/o18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"oolgo/o19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"oolgo/o20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"oolgo/o21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"oolgo/o22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"oolgo/o23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"oolgo/o24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"oolgo/o25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"oolgo/o26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"oolgo/o27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"oolgo/o28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"oolgo/o29b.png"},

            "wxeff_btn_atlas/0.png": {url:"ofo/o1c.png"},
            "wxeff_btn_atlas/1.png": {url:"ofo/o2c.png"},
            "wxeff_btn_atlas/2.png": {url:"ofo/o3c.png"},
            "wxeff_btn_atlas/3.png": {url:"ofo/o4c.png"},
            "wxeff_btn_atlas/4.png": {url:"ofo/o5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ooop",
            "./sax": "./oooSAX",
            "./dom": "./ooooDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "oobBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "oolgo",
            "wxeff_btn_atlas": "ofo",
            "wxloading_atlas": "oodino",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "o1a.png",
            "btn_loding_abcelq1.png": "o2a.png",
            "image_loading_bg.jpg": "o3a.jpg",
            "image_loading_bg_bottom.jpg": "o4a.jpg",
            "image_loading_bg_bottom2.jpg": "o5a.jpg",
            "image_loading_bg_left.jpg": "o6a.jpg",
            "image_loading_bg_left2.jpg": "o7a.jpg",
            "image_loading_bg_right.jpg": "o8a.jpg",
            "image_loading_bg_right2.jpg": "o9a.jpg",
            "image_loading_bg_top.jpg": "o10a.jpg",
            "image_loading_bg_top2.jpg": "o11a.jpg",
            "image_loading_bg2.jpg": "o12a.jpg",


            "image_loding_bar0.png": "o13a.png",
            "image_loding_bar1.png": "o14a.png",
            "image_loding_bar02.png": "o15a.png",
            "image_loding_bar2.png": "o16a.png",
            "image_loding_bar3.png": "o17a.png",
            "image_login_point1.png": "o18a.png",
            "image_login_point2.png":"o19a.png",
            "image_login_point3.png": "o20a.png",


            "image_xuanqu_ztjb0.png": "o199b.png",
            "image_denglu_txtshenpi.png": "o1b.png",
            "shenhezizi.png": "o123b.png",
            "image_login_loginbg.jpg": "o2b.jpg",
            "image_login_loginbg_bottom.jpg": "o3b.jpg",
            "image_login_loginbg_left.jpg": "o4b.jpg",
            "image_login_loginbg_right.jpg": "o5b.jpg",
            "image_login_loginbg_top.jpg": "o6b.jpg",
            "image_login_logo.png": "o7b.png",
            "image_login_notice.png": "o8b.png",
            "image_xuanfu_xfbg.png": "o9b.png",

            "btn_com_chuangback.png": "o10b.png",
            "btn_login_gonggao.png": "o11b.png",
            "btn_login_loginanniu.png": "o12b.png",
            "btn_login_yingsi.png": "o13b.png",
            "btn_xuanqu_anniuhuang.png": "o14b.png",
            "btn_xuanqu_anniulan.png": "o15b.png",
            "btn_xuanqu_quanniu.png": "o16b.png",
            "image_com_tuichu.png": "o17b.png",
            "image_login_changtong.png": "o18b.png",
            "image_login_fanmang.png": "o19b.png",
            "image_login_weihu.png": "o20b.png",
            "image_login_xuanqubg.png": "o21b.png",
            "image_login_init.png": "o22b.png",
            "btn_com_chuangback1.png": "o23b.png",
            "btn_com_long0.png":"o24b.png",
            "btn_com_long1.png":"o25b.png",
            "image_login_notice1.png":"o26b.png",
            "image_loding_txtbhcc.png":"o27b.png",
            "image_xuanfu_gx0.png": "o28b.png",
            "image_xuanfu_gx1.png": "o29b.png",

            "0.png": "o1c.png",
            "1.png": "o2c.png",
            "2.png": "o3c.png",
            "3.png": "o4c.png",
            "4.png": "o5c.png",

        }
        strFilePath = "/ores";
        strFileName = "/ofiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$o", "c", "_d", "_o", "o_"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "QU8AE5$RNP32GHDOJZBIS7TLFM16CX09K4W_YV";
        str_leading2 = "7sqt5mrpc8zhbog4x9fw1i2d6alv3nu_yek0$j";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-O', function () {
    var stream = gulp.src("")
        .pipe(set_param_O())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-O', function (cb) {
    sequence("set-param-O","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

//混淆
gulp.task('build-babel-obfuscator-Qminify', function (cb) {
    sequence("set-param-Q","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--O包  盛也鬼剑豪HD end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--P包  盛也-柔情小师妹福利版 start-----------------------------------------------------------*/


/**P包参数*/
var set_param_P = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageP/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameP';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'p$';
        sourceProject = "wx_build/jg_gameP_new";
        targetProject = "wx_build/jg_gameP_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ppppMAIN.js";
        libsMainJs = "pppGAME.js";
        packageName1 = "pIBS";
        packageName2 = "pPF";
        packageName3 = "pp";
        var clinetPbName = "pCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/pINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ooooINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ppDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/pppparse.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/pppWXMsad.js"},
            "libs/libs.min.js":  {url:packageName1+"/ppLIBsdsa.js",extractStr:true,count:3,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ppMDadfap.js"},
            "libs/sax.js":  {url:packageName1+"/pSAXp.js"},
            "libs/weapp-adapter.js":  {url:"pa1/pWEs1p.js"},
            "libs/zlib.js":  {url:packageName1+"/pp12asz.js"},
            "wxsdk":  {url:"pskp"},
            "wxsdk/wx_aksdk.js":  {url:"pskp/psdkp.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"pskp/poop.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/ppBFp.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "SyMiniTool.js":  {url:packageName1+"/SyMiniTool.js",extractStr:false,count:1,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"pdinp"},
            "wxlogin_atlas": {url:"plgop"},
            "wxeff_btn_atlas":{url:"pfp"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"pdinp/p1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"pdinp/p2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"pdinp/p3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"pdinp/p4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"pdinp/p5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"pdinp/p6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"pdinp/p7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"pdinp/p8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"pdinp/p9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"pdinp/p10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"pdinp/p11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"pdinp/p12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"pdinp/p13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"pdinp/p14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"pdinp/p15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"pdinp/p16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"pdinp/p17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"pdinp/p18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"pdinp/p19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"pdinp/p20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"plgop/p199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"plgop/p1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"plgop/p123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"plgop/p2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"plgop/p3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"plgop/p4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"plgop/p5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"plgop/p6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"plgop/p7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"plgop/p8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"plgop/p9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"plgop/p10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"plgop/p11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"plgop/p12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"plgop/p13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"plgop/p14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"plgop/p15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"plgop/p16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"plgop/p17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"plgop/p18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"plgop/p19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"plgop/p20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"plgop/p21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"plgop/p22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"plgop/p23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"plgop/p24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"plgop/p25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"plgop/p26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"plgop/p27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"plgop/p28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"plgop/p29b.png"},

            "wxeff_btn_atlas/0.png": {url:"pfp/p1c.png"},
            "wxeff_btn_atlas/1.png": {url:"pfp/p2c.png"},
            "wxeff_btn_atlas/2.png": {url:"pfp/p3c.png"},
            "wxeff_btn_atlas/3.png": {url:"pfp/p4c.png"},
            "wxeff_btn_atlas/4.png": {url:"pfp/p5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "poop",
            "./sax": "./pSAXp",
            "./dom": "./ppDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "ppBFp.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "plgop",
            "wxeff_btn_atlas": "pfp",
            "wxloading_atlas": "pdinp",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "p1a.png",
            "btn_loding_abcelq1.png": "p2a.png",
            "image_loading_bg.jpg": "p3a.jpg",
            "image_loading_bg_bottom.jpg": "p4a.jpg",
            "image_loading_bg_bottom2.jpg": "p5a.jpg",
            "image_loading_bg_left.jpg": "p6a.jpg",
            "image_loading_bg_left2.jpg": "p7a.jpg",
            "image_loading_bg_right.jpg": "p8a.jpg",
            "image_loading_bg_right2.jpg": "p9a.jpg",
            "image_loading_bg_top.jpg": "p10a.jpg",
            "image_loading_bg_top2.jpg": "p11a.jpg",
            "image_loading_bg2.jpg": "p12a.jpg",


            "image_loding_bar0.png": "p13a.png",
            "image_loding_bar1.png": "p14a.png",
            "image_loding_bar02.png": "p15a.png",
            "image_loding_bar2.png": "p16a.png",
            "image_loding_bar3.png": "p17a.png",
            "image_login_point1.png": "p18a.png",
            "image_login_point2.png":"p19a.png",
            "image_login_point3.png": "p20a.png",


            "image_xuanqu_ztjb0.png": "p199b.png",
            "image_denglu_txtshenpi.png": "p1b.png",
            "shenhezizi.png": "p123b.png",
            "image_login_loginbg.jpg": "p2b.jpg",
            "image_login_loginbg_bottom.jpg": "p3b.jpg",
            "image_login_loginbg_left.jpg": "p4b.jpg",
            "image_login_loginbg_right.jpg": "p5b.jpg",
            "image_login_loginbg_top.jpg": "p6b.jpg",
            "image_login_logo.png": "p7b.png",
            "image_login_notice.png": "p8b.png",
            "image_xuanfu_xfbg.png": "p9b.png",

            "btn_com_chuangback.png": "p10b.png",
            "btn_login_gonggao.png": "p11b.png",
            "btn_login_loginanniu.png": "p12b.png",
            "btn_login_yingsi.png": "p13b.png",
            "btn_xuanqu_anniuhuang.png": "p14b.png",
            "btn_xuanqu_anniulan.png": "p15b.png",
            "btn_xuanqu_quanniu.png": "p16b.png",
            "image_com_tuichu.png": "p17b.png",
            "image_login_changtong.png": "p18b.png",
            "image_login_fanmang.png": "p19b.png",
            "image_login_weihu.png": "p20b.png",
            "image_login_xuanqubg.png": "p21b.png",
            "image_login_init.png": "p22b.png",
            "btn_com_chuangback1.png": "p23b.png",
            "btn_com_long0.png":"p24b.png",
            "btn_com_long1.png":"p25b.png",
            "image_login_notice1.png":"p26b.png",
            "image_loding_txtbhcc.png":"p27b.png",
            "image_xuanfu_gx0.png": "p28b.png",
            "image_xuanfu_gx1.png": "p29b.png",

            "0.png": "p1c.png",
            "1.png": "p2c.png",
            "2.png": "p3c.png",
            "3.png": "p4c.png",
            "4.png": "p5c.png",

        }
        strFilePath = "/pres";
        strFileName = "/pfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$p", "E", "_F", "_p", "p_"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 240000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "XF2$3VN7C5T6MW01ZHJG_EIBOD48URSPLQY9AK";
        str_leading2 = "dcgabq89en5w3z02r7v16$yijkhs4pltxuf_mo";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-P', function () {
    var stream = gulp.src("")
        .pipe(set_param_P())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-P', function (cb) {
    sequence("set-param-P","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

/**-------------------------------------------------微信小游戏--P包  盛也-柔情小师妹福利版 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Q包  果子-微信 全民来打怪-Q start-----------------------------------------------------------*/


/**Q包参数*/
var set_param_Q = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageQ/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameQ';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'q$';
        sourceProject = "wx_build/jg_gameQ_new";
        targetProject = "wx_build/jg_gameQ_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "qqMAINqq.js";
        libsMainJs = "qGAMEqq.js";
        packageName1 = "qIBSq";
        packageName2 = "qPFq";
        packageName3 = "qmmmq";
        var clinetPbName = "qCLIENTPqq.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/qINDEXq.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/qqINITMINqq.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/qqDOMq.js"},
            "libs/dom_parser.js":  {url:packageName1+"/qqparseq.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/qWXMsadqq.js"},
            "libs/libs.min.js":  {url:packageName1+"/qqLIB12q.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/qsfs32q.js"},
            "libs/sax.js":  {url:packageName1+"/qS12q.js"},
            "libs/weapp-adapter.js":  {url:"pa1/qWE41q.js"},
            "libs/zlib.js":  {url:packageName1+"/qq12qq.js"},
            "wxsdk":  {url:"qskqq"},
            "wxsdk/wx_aksdk.js":  {url:"qskqq/qs6kq.js",extractStr:true,count:1,strLen:3},
            // "wxsdk/helper.js":  {url:"qskqq/qttq.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/qBFqq.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            // "SyMiniTool.js":  {url:packageName1+"/SyMiniTool.js",extractStr:false,count:1,strLen:3},
            "utils/gzsdk.js":  {url:"utils/gzsdk.js",extractStr:false,count:1,strLen:3},
            "utils/md5.js":  {url:"utils/md5.js",extractStr:false,count:1,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"qqdiq"},
            "wxlogin_atlas": {url:"qlgqq"},
            "wxeff_btn_atlas":{url:"qfq"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"qqdiq/q1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"qqdiq/q2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"qqdiq/q3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"qqdiq/q4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"qqdiq/q5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"qqdiq/q6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"qqdiq/q7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"qqdiq/q8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"qqdiq/q9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"qqdiq/q10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"qqdiq/q11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"qqdiq/q12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"qqdiq/q13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"qqdiq/q14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"qqdiq/q15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"qqdiq/q16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"qqdiq/q17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"qqdiq/q18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"qqdiq/q19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"qqdiq/q20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"qlgqq/q199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"qlgqq/q1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"qlgqq/q123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"qlgqq/q2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"qlgqq/q3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"qlgqq/q4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"qlgqq/q5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"qlgqq/q6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"qlgqq/q7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"qlgqq/q8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"qlgqq/q9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"qlgqq/q10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"qlgqq/q11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"qlgqq/q12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"qlgqq/q13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"qlgqq/q14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"qlgqq/q15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"qlgqq/q16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"qlgqq/q17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"qlgqq/q18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"qlgqq/q19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"qlgqq/q20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"qlgqq/q21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"qlgqq/q22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"qlgqq/q23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"qlgqq/q24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"qlgqq/q25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"qlgqq/q26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"qlgqq/q27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"qlgqq/q28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"qlgqq/q29b.png"},

            "wxeff_btn_atlas/0.png": {url:"qfq/q1c.png"},
            "wxeff_btn_atlas/1.png": {url:"qfq/q2c.png"},
            "wxeff_btn_atlas/2.png": {url:"qfq/q3c.png"},
            "wxeff_btn_atlas/3.png": {url:"qfq/q4c.png"},
            "wxeff_btn_atlas/4.png": {url:"qfq/q5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "qttq",
            "./sax": "./qS12q",
            "./dom": "./qqDOMq",
            "client_pb.js": clinetPbName,
            "protobuf.js": "qBFqq.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "qlgqq",
            "wxeff_btn_atlas": "qfq",
            "wxloading_atlas": "qqdiq",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "q1a.png",
            "btn_loding_abcelq1.png": "q2a.png",
            "image_loading_bg.jpg": "q3a.jpg",
            "image_loading_bg_bottom.jpg": "q4a.jpg",
            "image_loading_bg_bottom2.jpg": "q5a.jpg",
            "image_loading_bg_left.jpg": "q6a.jpg",
            "image_loading_bg_left2.jpg": "q7a.jpg",
            "image_loading_bg_right.jpg": "q8a.jpg",
            "image_loading_bg_right2.jpg": "q9a.jpg",
            "image_loading_bg_top.jpg": "q10a.jpg",
            "image_loading_bg_top2.jpg": "q11a.jpg",
            "image_loading_bg2.jpg": "q12a.jpg",


            "image_loding_bar0.png": "q13a.png",
            "image_loding_bar1.png": "q14a.png",
            "image_loding_bar02.png": "q15a.png",
            "image_loding_bar2.png": "q16a.png",
            "image_loding_bar3.png": "q17a.png",
            "image_login_point1.png": "q18a.png",
            "image_login_point2.png":"q19a.png",
            "image_login_point3.png": "q20a.png",


            "image_xuanqu_ztjb0.png": "q199b.png",
            "image_denglu_txtshenpi.png": "q1b.png",
            "shenhezizi.png": "q123b.png",
            "image_login_loginbg.jpg": "q2b.jpg",
            "image_login_loginbg_bottom.jpg": "q3b.jpg",
            "image_login_loginbg_left.jpg": "q4b.jpg",
            "image_login_loginbg_right.jpg": "q5b.jpg",
            "image_login_loginbg_top.jpg": "q6b.jpg",
            "image_login_logo.png": "q7b.png",
            "image_login_notice.png": "q8b.png",
            "image_xuanfu_xfbg.png": "q9b.png",

            "btn_com_chuangback.png": "q10b.png",
            "btn_login_gonggao.png": "q11b.png",
            "btn_login_loginanniu.png": "q12b.png",
            "btn_login_yingsi.png": "q13b.png",
            "btn_xuanqu_anniuhuang.png": "q14b.png",
            "btn_xuanqu_anniulan.png": "q15b.png",
            "btn_xuanqu_quanniu.png": "q16b.png",
            "image_com_tuichu.png": "q17b.png",
            "image_login_changtong.png": "q18b.png",
            "image_login_fanmang.png": "q19b.png",
            "image_login_weihu.png": "q20b.png",
            "image_login_xuanqubg.png": "q21b.png",
            "image_login_init.png": "q22b.png",
            "btn_com_chuangback1.png": "q23b.png",
            "btn_com_long0.png":"q24b.png",
            "btn_com_long1.png":"q25b.png",
            "image_login_notice1.png":"q26b.png",
            "image_loding_txtbhcc.png":"q27b.png",
            "image_xuanfu_gx0.png": "q28b.png",
            "image_xuanfu_gx1.png": "q29b.png",

            "0.png": "q1c.png",
            "1.png": "q2c.png",
            "2.png": "q3c.png",
            "3.png": "q4c.png",
            "4.png": "q5c.png",

        }
        strFilePath = "/qres";
        strFileName = "/qfiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$Q", "g", "_h", "_q", "q_"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 260000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "AYUO7I963WVK1DB5S_NRX4Z08QEJM2LT$GPCHF";
        str_leading2 = "7vibgalpf02x35yktcdrz$_e9on6m41h8jswuq";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Q', function () {
    var stream = gulp.src("")
        .pipe(set_param_Q())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Q', function (cb) {
    sequence("set-param-Q","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

//混淆
gulp.task('build-babel-obfuscator-Qminify', function (cb) {
    sequence("set-param-Q","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--Q包  果子-微信 全民来打怪 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--R包  盛也-王女异闻录online start-----------------------------------------------------------*/

/**R包参数*/
var set_param_R = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageR/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameR';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameR_new";
        targetProject = "wx_build/jg_gameR_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "lsjdflaamain.js";
        libsMainJs = "bbbgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"bbblibs"},
            "game.js": {url:"bbblibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"bbblibs/bbbindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"bbblibs/bbbinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"bbblibs/bbbdom.js"},
            "libs/dom_parser.js":  {url:"bbblibs/bbbdomparser.js"},
            "libs/laya.wxmini.js":  {url:"bbblibs/bbbwxmini.js"},
            "libs/libs.min.js":  {url:"bbblibs/bbblibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"bbblibs/bbbmd5min.js"},
            "libs/sax.js":  {url:"bbblibs/bbbsax.js"},
            "libs/weapp-adapter.js":  {url:"bbssss/bbbweasaf.js"},
            "libs/zlib.js":  {url:"bbblibs/bbbzlibs.js"},
            // "libs/game.js":  {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"bbbk"},
            "wxsdk/wx_aksdk.js":  {url:"bbbk/bbbsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"bbbk/bbbhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"bbbbbbf"},
            "protobuf/client_pb.js":  {url:"bbbbbbf/bbbcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"bbbbbbf/bbbbBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"bbbbbbf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"bbbbbbbbb"},
            "subPackage/main.min.js":  {url:"bbbbbbbbb/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"bbbbbbbbb/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹

            "wxloading_atlas": {url:"bbbloding"},
            "wxlogin_atlas": {url:"bbblogin"},
            "wxeff_btn_atlas":{url:"bwxeff"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"bbbloding/a4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"bbbloding/a5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"bbbloding/a6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"bbbloding/a7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"bbbloding/a8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"bbbloding/a9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"bbbloding/a10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"bbbloding/a11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"bbbloding/a12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"bbbloding/a13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"bbbloding/a14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"bbbloding/a15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"bbbloding/a16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"bbbloding/a17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"bbbloding/a18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"bbbloding/a19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"bbbloding/a20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"bbblogin/b199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"bbblogin/b1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"bbblogin/b123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"bbblogin/b2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"bbblogin/b3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"bbblogin/b4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"bbblogin/b5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"bbblogin/b6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"bbblogin/b7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"bbblogin/b8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"bbblogin/b9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"bbblogin/b10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"bbblogin/b11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"bbblogin/b12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"bbblogin/b13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"bbblogin/b14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"bbblogin/b15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"bbblogin/b16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"bbblogin/b17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"bbblogin/b18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"bbblogin/b19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"bbblogin/b20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"bbblogin/b21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"bbblogin/b23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"bbblogin/b24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"bbblogin/b25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"bbblogin/b26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"bbblogin/b27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"bbblogin/b28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"bbblogin/b29b.png"},

            "wxeff_btn_atlas/0.png": {url:"bwxeff/b100b.png"},
            "wxeff_btn_atlas/1.png": {url:"bwxeff/b101b.png"},
            "wxeff_btn_atlas/2.png": {url:"bwxeff/b102b.png"},
            "wxeff_btn_atlas/3.png": {url:"bwxeff/b103b.png"},
            "wxeff_btn_atlas/4.png": {url:"bwxeff/b104b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "bbbhelp",
            "./sax": "./bbbsax",
            "./dom": "./bbbdom",
            "client_pb.js": "bbbcleintpb.js",
            "protobuf.js": "bbbbBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "bbblogin",
            "wxeff_btn_atlas": "bwxeff",
            "wxloading_atlas": "bbbloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1a.png",
            "btn_loding_abcelq1.png": "a2a.png",
            "image_loading_bg.jpg": "a3a.jpg",
            "image_loading_bg_bottom.jpg": "a4a.jpg",
            "image_loading_bg_bottom2.jpg": "a5a.jpg",
            "image_loading_bg_left.jpg": "a6a.jpg",
            "image_loading_bg_left2.jpg": "a7a.jpg",
            "image_loading_bg_right.jpg": "a8a.jpg",
            "image_loading_bg_right2.jpg": "a9a.jpg",
            "image_loading_bg_top.jpg": "a10a.jpg",
            "image_loading_bg_top2.jpg": "a11a.jpg",
            "image_loading_bg2.jpg": "a12a.jpg",

            "image_loding_bar0.png": "a13a.png",
            "image_loding_bar1.png": "a14a.png",
            "image_loding_bar02.png": "a15a.png",
            "image_loding_bar2.png": "a16a.png",
            "image_loding_bar3.png": "a17a.png",
            "image_login_point1.png": "a18a.png",
            "image_login_point2.png":"a19a.png",
            "image_login_point3.png": "a20a.png",


            "image_xuanqu_ztjb0.png": "b199b.png",
            "image_denglu_txtshenpi.png": "b1b.png",
            "shenhezizi.png": "b123b.png",
            "image_login_loginbg.jpg": "b2b.jpg",
            "image_login_loginbg_bottom.jpg": "b3b.jpg",
            "image_login_loginbg_left.jpg": "b4b.jpg",
            "image_login_loginbg_right.jpg": "b5b.jpg",
            "image_login_loginbg_top.jpg": "b6b.jpg",
            "image_login_logo.png": "b7b.png",
            "image_login_notice.png": "b8b.png",
            "image_xuanfu_xfbg.png": "b9b.png",

            "btn_com_chuangback.png": "b10b.png",
            "btn_login_gonggao.png": "b11b.png",
            "btn_login_loginanniu.png": "b12b.png",
            "btn_login_yingsi.png": "b13b.png",
            "btn_xuanqu_anniuhuang.png": "b14b.png",
            "btn_xuanqu_anniulan.png": "b15b.png",
            "btn_xuanqu_quanniu.png": "b16b.png",
            "image_com_tuichu.png": "b17b.png",
            "image_login_changtong.png": "b18b.png",
            "image_login_fanmang.png": "b19b.png",
            "image_login_weihu.png": "b20b.png",
            "image_login_xuanqubg.png": "b21b.png",
            "image_login_init.png": "b22b.png",
            "btn_com_chuangback1.png": "b23b.png",
            "btn_com_long0.png":"b24b.png",
            "btn_com_long1.png":"b25b.png",
            "image_login_notice1.png":"b26b.png",
            "image_loding_txtbhcc.png":"b27b.png",
            "image_xuanfu_gx0.png": "b28b.png",
            "image_xuanfu_gx1.png": "b29b.png",

            "0.png": "b100b.png",
            "1.png": "b101b.png",
            "2.png": "b102b.png",
            "3.png": "b103b.png",
            "4.png": "b104b.png",

        };

        strFilePath = "/res";
        strFileName = "/files.zip";
        globleKeys = ["y$", "_", "_s", "p$", "_d"];
        noReplaceJs = "bbblibs/game.js";
        packageName1 = "bbblibs";
        packageName2 = "bbbbbbf";
        packageName3 = "bbbbbbbbb";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "2_VR50I$T4Z8UWQNMGDSXA1LHBO9CYFK67PE3J";
        str_leading2 = "8xc_amvkf$93r0ozhq6swdl7pgn2b4yieju5t1";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-R', function () {
    var stream = gulp.src("")
        .pipe(set_param_R())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-R', function (cb) {
    sequence("set-param-R","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-R_minify', function (cb) {
    sequence("set-param-R","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--R包 666-剑斩星辰-R  END-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--T包  盛也-王女异闻录HD start-----------------------------------------------------------*/

/**S包参数*/
var set_param_S = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageS/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameS';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 's$';
        sourceProject = "wx_build/jg_gameS_new";
        targetProject = "wx_build/jg_gameS_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ssMAINrs.js";
        libsMainJs = "sGAMEss.js";
        packageName1 = "sIBSs";
        packageName2 = "sPFs";
        packageName3 = "smmms";
        var clinetPbName = "sCLIENTss.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/sINDss.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ssINITsss.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ssDOss.js"},
            "libs/dom_parser.js":  {url:packageName1+"/ssparses.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/sWXMsadss.js"},
            "libs/libs.min.js":  {url:packageName1+"/ssLIB12ss.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ssfss.js"},
            "libs/sax.js":  {url:packageName1+"/sS12ss.js"},
            "libs/weapp-adapter.js":  {url:"sa11/sWE4ss.js"},
            "libs/zlib.js":  {url:packageName1+"/ss12s.js"},
            "wxsdk":  {url:"sskss"},
            "wxsdk/wx_aksdk.js":  {url:"sskss/ss6ksg.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"sskss/stts.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/sBFss.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "SyMiniTool.js":  {url:packageName1+"/SyMiniTool.js",extractStr:false,count:1,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"ssds"},
            "wxlogin_atlas": {url:"sslgrss"},
            "wxeff_btn_atlas":{url:"sfs"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"ssds/s1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"ssds/s2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"ssds/s3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"ssds/s4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"ssds/s5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"ssds/s6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"ssds/s7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"ssds/s8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"ssds/s9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"ssds/s10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"ssds/s11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"ssds/s12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"ssds/s13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"ssds/s14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"ssds/s15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"ssds/s16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"ssds/s17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"ssds/s18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"ssds/s19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"ssds/s20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"sslgrss/s199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"sslgrss/s1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"sslgrss/s123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"sslgrss/s2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"sslgrss/s3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"sslgrss/s4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"sslgrss/s5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"sslgrss/s6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"sslgrss/s7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"sslgrss/s8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"sslgrss/s9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"sslgrss/s10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"sslgrss/s11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"sslgrss/s12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"sslgrss/s13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"sslgrss/s14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"sslgrss/s15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"sslgrss/s16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"sslgrss/s17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"sslgrss/s18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"sslgrss/s19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"sslgrss/s20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"sslgrss/s21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"sslgrss/s22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"sslgrss/s23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"sslgrss/s24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"sslgrss/s25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"sslgrss/s26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"sslgrss/s27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"sslgrss/s28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"sslgrss/s29b.png"},

            "wxeff_btn_atlas/0.png": {url:"sfs/s1c.png"},
            "wxeff_btn_atlas/1.png": {url:"sfs/s2c.png"},
            "wxeff_btn_atlas/2.png": {url:"sfs/s3c.png"},
            "wxeff_btn_atlas/3.png": {url:"sfs/s4c.png"},
            "wxeff_btn_atlas/4.png": {url:"sfs/s5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "stts",
            "./sax": "./sS12ss",
            "./dom": "./ssDOss",
            "client_pb.js": clinetPbName,
            "protobuf.js": "sBFss.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "sslgrss",
            "wxeff_btn_atlas": "sfs",
            "wxloading_atlas": "ssds",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "s1a.png",
            "btn_loding_abcelq1.png": "s2a.png",
            "image_loading_bg.jpg": "s3a.jpg",
            "image_loading_bg_bottom.jpg": "s4a.jpg",
            "image_loading_bg_bottom2.jpg": "s5a.jpg",
            "image_loading_bg_left.jpg": "s6a.jpg",
            "image_loading_bg_left2.jpg": "s7a.jpg",
            "image_loading_bg_right.jpg": "s8a.jpg",
            "image_loading_bg_right2.jpg": "s9a.jpg",
            "image_loading_bg_top.jpg": "s10a.jpg",
            "image_loading_bg_top2.jpg": "s11a.jpg",
            "image_loading_bg2.jpg": "s12a.jpg",


            "image_loding_bar0.png": "s13a.png",
            "image_loding_bar1.png": "s14a.png",
            "image_loding_bar02.png": "s15a.png",
            "image_loding_bar2.png": "s16a.png",
            "image_loding_bar3.png": "s17a.png",
            "image_login_point1.png": "s18a.png",
            "image_login_point2.png":"s19a.png",
            "image_login_point3.png": "s20a.png",


            "image_xuanqu_ztjb0.png": "s199b.png",
            "image_denglu_txtshenpi.png": "s1b.png",
            "shenhezizi.png": "s123b.png",
            "image_login_loginbg.jpg": "s2b.jpg",
            "image_login_loginbg_bottom.jpg": "s3b.jpg",
            "image_login_loginbg_left.jpg": "s4b.jpg",
            "image_login_loginbg_right.jpg": "s5b.jpg",
            "image_login_loginbg_top.jpg": "s6b.jpg",
            "image_login_logo.png": "s7b.png",
            "image_login_notice.png": "s8b.png",
            "image_xuanfu_xfbg.png": "s9b.png",

            "btn_com_chuangback.png": "s10b.png",
            "btn_login_gonggao.png": "s11b.png",
            "btn_login_loginanniu.png": "s12b.png",
            "btn_login_yingsi.png": "s13b.png",
            "btn_xuanqu_anniuhuang.png": "s14b.png",
            "btn_xuanqu_anniulan.png": "s15b.png",
            "btn_xuanqu_quanniu.png": "s16b.png",
            "image_com_tuichu.png": "s17b.png",
            "image_login_changtong.png": "s18b.png",
            "image_login_fanmang.png": "s19b.png",
            "image_login_weihu.png": "s20b.png",
            "image_login_xuanqubg.png": "s21b.png",
            "image_login_init.png": "s22b.png",
            "btn_com_chuangback1.png": "s23b.png",
            "btn_com_long0.png":"s24b.png",
            "btn_com_long1.png":"s25b.png",
            "image_login_notice1.png":"s26b.png",
            "image_loding_txtbhcc.png":"s27b.png",
            "image_xuanfu_gx0.png": "s28b.png",
            "image_xuanfu_gx1.png": "s29b.png",

            "0.png": "s1c.png",
            "1.png": "s2c.png",
            "2.png": "s3c.png",
            "3.png": "s4c.png",
            "4.png": "s5c.png",

        }
        strFilePath = "/sses";
        strFileName = "/ssiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$S", "K", "L1", "s1", "s"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 300000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "MTPX4H3IZUCJWO7L9DV25B6N$EK_YRAS0G81FQ";
        str_leading2 = "7tn2mxi_c0w9kzvo3rue4$ad5hyspqgj18b6lf";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-S', function () {
    var stream = gulp.src("")
        .pipe(set_param_S())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-S', function (cb) {
    sequence("set-param-S","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});


/**-------------------------------------------------微信小游戏--T包 官方-苍月之戒 start-----------------------------------------------------------*/

/**T包参数*/
var set_param_T = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageT/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameT';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 't$';
        sourceProject = "wx_build/jg_gameT_new";
        targetProject = "wx_build/jg_gameT_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ttMAItttt.js";
        libsMainJs = "tGAMEtt.js";
        packageName1 = "tIBSt";
        packageName2 = "tpft";
        packageName3 = "ttttttt";
        var clinetPbName = "tCLIENTtt.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/tINDtt.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ttINItt.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ttDOtt.js"},
            "libs/dom_parser.js":  {url:packageName1+"/ttparstt.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/tWXMtadtt.js"},
            "libs/libs.min.js":  {url:packageName1+"/ttLIB23tt.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ttfttt.js"},
            "libs/sax.js":  {url:packageName1+"/tT12tt.js"},
            "libs/weapp-adapter.js":  {url:"ta11/stE4tt.js"},
            "libs/zlib.js":  {url:packageName1+"/tt112tt.js"},
            "wxsdk":  {url:"ttkttt"},
            "wxsdk/wx_aksdk.js":  {url:"ttkttt/t6ktgt.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"ttkttt/ttsstt.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/tBFtt.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"ttdt"},
            "wxlogin_atlas": {url:"ttlgrtt"},
            "wxeff_btn_atlas":{url:"tft"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"ttdt/t1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"ttdt/t2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"ttdt/t3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"ttdt/t4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"ttdt/t5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"ttdt/t6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"ttdt/t7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"ttdt/t8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"ttdt/t9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"ttdt/t10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"ttdt/t11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"ttdt/t12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"ttdt/t13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"ttdt/t14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"ttdt/t15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"ttdt/t16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"ttdt/t17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"ttdt/t18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"ttdt/t19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"ttdt/t20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ttlgrtt/t199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ttlgrtt/t1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ttlgrtt/t123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ttlgrtt/t2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ttlgrtt/t3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ttlgrtt/t4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ttlgrtt/t5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ttlgrtt/t6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ttlgrtt/t7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ttlgrtt/t8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ttlgrtt/t9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ttlgrtt/t10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ttlgrtt/t11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ttlgrtt/t12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ttlgrtt/t13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ttlgrtt/t14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ttlgrtt/t15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ttlgrtt/t16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ttlgrtt/t17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ttlgrtt/t18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ttlgrtt/t19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ttlgrtt/t20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ttlgrtt/t21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ttlgrtt/t22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ttlgrtt/t23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ttlgrtt/t24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ttlgrtt/t25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ttlgrtt/t26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ttlgrtt/t27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ttlgrtt/t28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ttlgrtt/t29b.png"},

            "wxeff_btn_atlas/0.png": {url:"tft/t1c.png"},
            "wxeff_btn_atlas/1.png": {url:"tft/t2c.png"},
            "wxeff_btn_atlas/2.png": {url:"tft/t3c.png"},
            "wxeff_btn_atlas/3.png": {url:"tft/t4c.png"},
            "wxeff_btn_atlas/4.png": {url:"tft/t5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ttsstt",
            "./sax": "./tT12tt",
            "./dom": "./ttDOtt",
            "client_pb.js": clinetPbName,
            "protobuf.js": "tBFtt.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ttlgrtt",
            "wxeff_btn_atlas": "tft",
            "wxloading_atlas": "ttdt",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "t1a.png",
            "btn_loding_abcelq1.png": "t2a.png",
            "image_loading_bg.jpg": "t3a.jpg",
            "image_loading_bg_bottom.jpg": "t4a.jpg",
            "image_loading_bg_bottom2.jpg": "t5a.jpg",
            "image_loading_bg_left.jpg": "t6a.jpg",
            "image_loading_bg_left2.jpg": "t7a.jpg",
            "image_loading_bg_right.jpg": "t8a.jpg",
            "image_loading_bg_right2.jpg": "t9a.jpg",
            "image_loading_bg_top.jpg": "t10a.jpg",
            "image_loading_bg_top2.jpg": "t11a.jpg",
            "image_loading_bg2.jpg": "t12a.jpg",


            "image_loding_bar0.png": "t13a.png",
            "image_loding_bar1.png": "t14a.png",
            "image_loding_bar02.png": "t15a.png",
            "image_loding_bar2.png": "t16a.png",
            "image_loding_bar3.png": "t17a.png",
            "image_login_point1.png": "t18a.png",
            "image_login_point2.png":"t19a.png",
            "image_login_point3.png": "t20a.png",

            "image_xuanqu_ztjb0.png": "t199b.png",
            "image_denglu_txtshenpi.png": "t1b.png",
            "shenhezizi.png": "t123b.png",
            "image_login_loginbg.jpg": "t2b.jpg",
            "image_login_loginbg_bottom.jpg": "t3b.jpg",
            "image_login_loginbg_left.jpg": "t4b.jpg",
            "image_login_loginbg_right.jpg": "t5b.jpg",
            "image_login_loginbg_top.jpg": "t6b.jpg",
            "image_login_logo.png": "t7b.png",
            "image_login_notice.png": "t8b.png",
            "image_xuanfu_xfbg.png": "t9b.png",

            "btn_com_chuangback.png": "t10b.png",
            "btn_login_gonggao.png": "t11b.png",
            "btn_login_loginanniu.png": "t12b.png",
            "btn_login_yingsi.png": "t13b.png",
            "btn_xuanqu_anniuhuang.png": "t14b.png",
            "btn_xuanqu_anniulan.png": "t15b.png",
            "btn_xuanqu_quanniu.png": "t16b.png",
            "image_com_tuichu.png": "t17b.png",
            "image_login_changtong.png": "t18b.png",
            "image_login_fanmang.png": "t19b.png",
            "image_login_weihu.png": "t20b.png",
            "image_login_xuanqubg.png": "t21b.png",
            "image_login_init.png": "t22b.png",
            "btn_com_chuangback1.png": "t23b.png",
            "btn_com_long0.png":"t24b.png",
            "btn_com_long1.png":"t25b.png",
            "image_login_notice1.png":"t26b.png",
            "image_loding_txtbhcc.png":"t27b.png",
            "image_xuanfu_gx0.png": "t28b.png",
            "image_xuanfu_gx1.png": "t29b.png",

            "0.png": "t1c.png",
            "1.png": "t2c.png",
            "2.png": "t3c.png",
            "3.png": "t4c.png",
            "4.png": "t5c.png",

        }
        strFilePath = "/ttes";
        strFileName = "/ttiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$T", "M", "_n", "t_", "t"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "FM6ZKUSR93APEW47_VJBI05TQNYODLX$GCH128";
        str_leading2 = "l42tci9v$dpfz7oeq0xy_mhw56183ngrjbaksu";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-T', function () {
    var stream = gulp.src("")
        .pipe(set_param_T())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-T', function (cb) {
    sequence("set-param-T","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-T-minify', function (cb) {
    sequence("set-param-T","MT1_build_minifyTargetProject",cb);
});

var set_param_TT = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        // sourceProject = "wx_build/jg_gameA";
        mainJsName = "main.min.js"
        targetProject = "wx_build/jg_gameT";
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-TT', function () {
    var stream = gulp.src("")
        .pipe(set_param_TT())
    return stream;
});

//压缩
gulp.task('build-babel-obfuscator-TT-minify', function (cb) {
    sequence("set-param-TT","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--T包 官方-苍月之戒 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--U包 趣侬vs37--微微剑仙 start-----------------------------------------------------------*/

/**U包参数*/
var set_param_U = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageU/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameU';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'u$';
        sourceProject = "wx_build/jg_gameU_new";
        targetProject = "wx_build/jg_gameU_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "uuMAIu.js";
        libsMainJs = "uGAMEu.js";
        packageName1 = "uIBSu";
        packageName2 = "upftu";
        packageName3 = "uuuuuuu";
        var clinetPbName = "uCLIENTuu.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/uINDuu.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/uuINIuu.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/uuDOuu.js"},
            "libs/dom_parser.js":  {url:packageName1+"/uuparsuu.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/uXMtaduu.js"},
            "libs/libs.min.js":  {url:packageName1+"/uuIB23uu.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/uufuu.js"},
            "libs/sax.js":  {url:packageName1+"/uu12uu.js"},
            "libs/weapp-adapter.js":  {url:"uu1/uuE4tu.js"},
            "libs/zlib.js":  {url:packageName1+"/uu112uu.js"},
            "wxsdk":  {url:"uukuuu"},
            "wxsdk/wx_aksdk.js":  {url:"uukuuu/u6kuu.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"uukuuu/uussuu.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/uBFuu.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "utils/ACTIVITYSDK3.0.js":{url:"utils/ACTIVITYSDK3.0.js",addGlobleKeys0:false,extractStr:false},
            "utils/adsdklib-2.0.0.min.js":{url:"utils/adsdklib-2.0.0.min.js",addGlobleKeys0:false,extractStr:false},
            "utils/huosdk-2.1.0.js":{url:"utils/huosdk-2.1.0.js",addGlobleKeys0:false,extractStr:false},
            "utils/md5Encryp.js":{url:"utils/md5Encryp.js",addGlobleKeys0:false,extractStr:false},
            "utils/reportjs.min.js":{url:"utils/reportjs.min.js",addGlobleKeys0:false,extractStr:false},
            "utils/sdklib-2.9.4.min.js":{url:"utils/sdklib-2.9.4.min.js",addGlobleKeys0:false,extractStr:false},
            "utils/usingOptionConfig.js":{url:"utils/usingOptionConfig.js",addGlobleKeys0:false,extractStr:false},
            //随机创建名字和文件夹
            "wxloading_atlas": {url:"uudu"},
            "wxlogin_atlas": {url:"uulgruu"},
            "wxeff_btn_atlas":{url:"utu"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"uudu/u1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"uudu/u2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"uudu/u3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"uudu/u4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"uudu/u5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"uudu/u6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"uudu/u7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"uudu/u8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"uudu/u9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"uudu/u10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"uudu/u11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"uudu/u12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"uudu/u13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"uudu/u14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"uudu/u15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"uudu/u16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"uudu/u17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"uudu/u18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"uudu/u19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"uudu/u20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"uulgruu/u199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"uulgruu/u1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"uulgruu/u123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"uulgruu/u2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"uulgruu/u3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"uulgruu/u4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"uulgruu/u5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"uulgruu/u6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"uulgruu/u7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"uulgruu/u8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"uulgruu/u9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"uulgruu/u10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"uulgruu/u11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"uulgruu/u12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"uulgruu/u13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"uulgruu/u14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"uulgruu/u15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"uulgruu/u16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"uulgruu/u17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"uulgruu/u18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"uulgruu/u19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"uulgruu/u20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"uulgruu/u21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"uulgruu/u22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"uulgruu/u23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"uulgruu/u24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"uulgruu/u25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"uulgruu/u26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"uulgruu/u27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"uulgruu/u28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"uulgruu/u29b.png"},

            "wxeff_btn_atlas/0.png": {url:"utu/u1c.png"},
            "wxeff_btn_atlas/1.png": {url:"utu/u2c.png"},
            "wxeff_btn_atlas/2.png": {url:"utu/u3c.png"},
            "wxeff_btn_atlas/3.png": {url:"utu/u4c.png"},
            "wxeff_btn_atlas/4.png": {url:"utu/u5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "uussuu",
            "./sax": "./uu12uu",
            "./dom": "./uuDOuu",
            "client_pb.js": clinetPbName,
            "protobuf.js": "uBFuu.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "uulgruu",
            "wxeff_btn_atlas": "utu",
            "wxloading_atlas": "uudu",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "u1a.png",
            "btn_loding_abcelq1.png": "u2a.png",
            "image_loading_bg.jpg": "u3a.jpg",
            "image_loading_bg_bottom.jpg": "u4a.jpg",
            "image_loading_bg_bottom2.jpg": "u5a.jpg",
            "image_loading_bg_left.jpg": "u6a.jpg",
            "image_loading_bg_left2.jpg": "u7a.jpg",
            "image_loading_bg_right.jpg": "u8a.jpg",
            "image_loading_bg_right2.jpg": "u9a.jpg",
            "image_loading_bg_top.jpg": "u10a.jpg",
            "image_loading_bg_top2.jpg": "u11a.jpg",
            "image_loading_bg2.jpg": "u12a.jpg",


            "image_loding_bar0.png": "u13a.png",
            "image_loding_bar1.png": "u14a.png",
            "image_loding_bar02.png": "u15a.png",
            "image_loding_bar2.png": "u16a.png",
            "image_loding_bar3.png": "u17a.png",
            "image_login_point1.png": "u18a.png",
            "image_login_point2.png":"u19a.png",
            "image_login_point3.png": "u20a.png",


            "image_xuanqu_ztjb0.png": "u199b.png",
            "image_denglu_txtshenpi.png": "u1b.png",
            "shenhezizi.png": "u123b.png",
            "image_login_loginbg.jpg": "u2b.jpg",
            "image_login_loginbg_bottom.jpg": "u3b.jpg",
            "image_login_loginbg_left.jpg": "u4b.jpg",
            "image_login_loginbg_right.jpg": "u5b.jpg",
            "image_login_loginbg_top.jpg": "u6b.jpg",
            "image_login_logo.png": "u7b.png",
            "image_login_notice.png": "u8b.png",
            "image_xuanfu_xfbg.png": "u9b.png",

            "btn_com_chuangback.png": "u10b.png",
            "btn_login_gonggao.png": "u11b.png",
            "btn_login_loginanniu.png": "u12b.png",
            "btn_login_yingsi.png": "u13b.png",
            "btn_xuanqu_anniuhuang.png": "u14b.png",
            "btn_xuanqu_anniulan.png": "u15b.png",
            "btn_xuanqu_quanniu.png": "u16b.png",
            "image_com_tuichu.png": "u17b.png",
            "image_login_changtong.png": "u18b.png",
            "image_login_fanmang.png": "u19b.png",
            "image_login_weihu.png": "u20b.png",
            "image_login_xuanqubg.png": "u21b.png",
            "image_login_init.png": "u22b.png",
            "btn_com_chuangback1.png": "u23b.png",
            "btn_com_long0.png":"u24b.png",
            "btn_com_long1.png":"u25b.png",
            "image_login_notice1.png":"u26b.png",
            "image_loding_txtbhcc.png":"u27b.png",
            "image_xuanfu_gx0.png": "u28b.png",
            "image_xuanfu_gx1.png": "u29b.png",

            "0.png": "u1c.png",
            "1.png": "u2c.png",
            "2.png": "u3c.png",
            "3.png": "u4c.png",
            "4.png": "u5c.png",

        }
        strFilePath = "/uues";
        strFileName = "/uuiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$U", "o", "_P", "u$", "u"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 340000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "70G$849B6HM1JSIAV_WNETO2KX35LRYQFCDZPU";
        str_leading2 = "2t5dz9gw7xlqoimhj34pfue$snv_ka6cr081by";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-U', function () {
    var stream = gulp.src("")
        .pipe(set_param_U())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-U', function (cb) {
    sequence("set-param-U","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

//混淆
gulp.task('build-babel-obfuscator-U-minify', function (cb) {
    sequence("set-param-U","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--U包 天剑vs卡卡-六玄之苍 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--V包 天剑vs卡卡-六玄之苍 start-----------------------------------------------------------*/

/**V包参数*/
var set_param_V = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageV/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameV';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'v$';
        sourceProject = "wx_build/jg_gameV_new";
        targetProject = "wx_build/jg_gameV_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "vvMAIv.js";
        libsMainJs = "vGAMEv.js";
        packageName1 = "vIBv";
        packageName2 = "vpftv";
        packageName3 = "vvvvvvv";
        var clinetPbName = "vCLIENvv.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/vINDvv.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/vvINIvv.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/vvDOvv.js"},
            "libs/dom_parser.js":  {url:packageName1+"/vvparsvv.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/vvMtadvv.js"},
            "libs/libs.min.js":  {url:packageName1+"/vvIB1vv.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/vvfvv.js"},
            "libs/sax.js":  {url:packageName1+"/vv12vv.js"},
            "libs/weapp-adapter.js":  {url:"vv2/vvE4vv.js"},
            "libs/zlib.js":  {url:packageName1+"/vv11vv.js"},
            "wxsdk":  {url:"vvavvv"},
            "wxsdk/wx_aksdk.js":  {url:"vvavvv/v7tvv.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"vvavvv/vvssvv.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/vBFvv.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "utils/huosdk-2.1.0.js":{url:"utils/huosdk-2.1.0.js",addGlobleKeys0:false,extractStr:false},
            "utils/gameSDK.bundle.js":{url:"utils/gameSDK.bundle.js",addGlobleKeys0:false,extractStr:false},
            //随机创建名字和文件夹
            "wxloading_atlas": {url:"vvdv"},
            "wxlogin_atlas": {url:"vvlgrvv"},
            "wxeff_btn_atlas":{url:"vtv"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"vvdv/v1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"vvdv/v2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"vvdv/v3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"vvdv/v4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"vvdv/v5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"vvdv/v6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"vvdv/v7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"vvdv/v8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"vvdv/v9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"vvdv/v10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"vvdv/v11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"vvdv/v12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"vvdv/v13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"vvdv/v14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"vvdv/v15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"vvdv/v16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"vvdv/v17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"vvdv/v18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"vvdv/v19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"vvdv/v20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"vvlgrvv/v199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"vvlgrvv/v1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"vvlgrvv/v123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"vvlgrvv/v2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"vvlgrvv/v3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"vvlgrvv/v4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"vvlgrvv/v5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"vvlgrvv/v6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"vvlgrvv/v7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"vvlgrvv/v8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"vvlgrvv/v9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"vvlgrvv/v10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"vvlgrvv/v11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"vvlgrvv/v12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"vvlgrvv/v13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"vvlgrvv/v14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"vvlgrvv/v15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"vvlgrvv/v16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"vvlgrvv/v17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"vvlgrvv/v18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"vvlgrvv/v19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"vvlgrvv/v20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"vvlgrvv/v21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"vvlgrvv/v22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"vvlgrvv/v23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"vvlgrvv/v24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"vvlgrvv/v25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"vvlgrvv/v26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"vvlgrvv/v27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"vvlgrvv/v28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"vvlgrvv/v29b.png"},

            "wxeff_btn_atlas/0.png": {url:"vtv/v1c.png"},
            "wxeff_btn_atlas/1.png": {url:"vtv/v2c.png"},
            "wxeff_btn_atlas/2.png": {url:"vtv/v3c.png"},
            "wxeff_btn_atlas/3.png": {url:"vtv/v4c.png"},
            "wxeff_btn_atlas/4.png": {url:"vtv/v5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "vvssvv",
            "./sax": "./vv12vv",
            "./dom": "./vvDOvv",
            "client_pb.js": clinetPbName,
            "protobuf.js": "vBFvv.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "vvlgrvv",
            "wxeff_btn_atlas": "vtv",
            "wxloading_atlas": "vvdv",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "v1a.png",
            "btn_loding_abcelq1.png": "v2a.png",
            "image_loading_bg.jpg": "v3a.jpg",
            "image_loading_bg_bottom.jpg": "v4a.jpg",
            "image_loading_bg_bottom2.jpg": "v5a.jpg",
            "image_loading_bg_left.jpg": "v6a.jpg",
            "image_loading_bg_left2.jpg": "v7a.jpg",
            "image_loading_bg_right.jpg": "v8a.jpg",
            "image_loading_bg_right2.jpg": "v9a.jpg",
            "image_loading_bg_top.jpg": "v10a.jpg",
            "image_loading_bg_top2.jpg": "v11a.jpg",
            "image_loading_bg2.jpg": "v12a.jpg",


            "image_loding_bar0.png": "v13a.png",
            "image_loding_bar1.png": "v14a.png",
            "image_loding_bar02.png": "v15a.png",
            "image_loding_bar2.png": "v16a.png",
            "image_loding_bar3.png": "v17a.png",
            "image_login_point1.png": "v18a.png",
            "image_login_point2.png":"v19a.png",
            "image_login_point3.png": "v20a.png",


            "image_xuanqu_ztjb0.png": "v199b.png",
            "image_denglu_txtshenpi.png": "v1b.png",
            "shenhezizi.png": "v123b.png",
            "image_login_loginbg.jpg": "v2b.jpg",
            "image_login_loginbg_bottom.jpg": "v3b.jpg",
            "image_login_loginbg_left.jpg": "v4b.jpg",
            "image_login_loginbg_right.jpg": "v5b.jpg",
            "image_login_loginbg_top.jpg": "v6b.jpg",
            "image_login_logo.png": "v7b.png",
            "image_login_notice.png": "v8b.png",
            "image_xuanfu_xfbg.png": "v9b.png",

            "btn_com_chuangback.png": "v10b.png",
            "btn_login_gonggao.png": "v11b.png",
            "btn_login_loginanniu.png": "v12b.png",
            "btn_login_yingsi.png": "v13b.png",
            "btn_xuanqu_anniuhuang.png": "v14b.png",
            "btn_xuanqu_anniulan.png": "v15b.png",
            "btn_xuanqu_quanniu.png": "v16b.png",
            "image_com_tuichu.png": "v17b.png",
            "image_login_changtong.png": "v18b.png",
            "image_login_fanmang.png": "v19b.png",
            "image_login_weihu.png": "v20b.png",
            "image_login_xuanqubg.png": "v21b.png",
            "image_login_init.png": "v22b.png",
            "btn_com_chuangback1.png": "v23b.png",
            "btn_com_long0.png":"v24b.png",
            "btn_com_long1.png":"v25b.png",
            "image_login_notice1.png":"v26b.png",
            "image_loding_txtbhcc.png":"v27b.png",
            "image_xuanfu_gx0.png": "v28b.png",
            "image_xuanfu_gx1.png": "v29b.png",

            "0.png": "v1c.png",
            "1.png": "v2c.png",
            "2.png": "v3c.png",
            "3.png": "v4c.png",
            "4.png": "v5c.png",

        }
        strFilePath = "/vves";
        strFileName = "/vviles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$v", "Q", "_r", "_v", "v"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "6O$KD8V05RXQICHMA7L3T1NEZG492BSJ_FUPYW";
        str_leading2 = "r9fis$o43nt2_1hy6zlu8beqwgxpv57k0cmdja";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-V', function () {
    var stream = gulp.src("")
        .pipe(set_param_V())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-V', function (cb) {
    sequence("set-param-V","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

//混淆
gulp.task('build-babel-obfuscator-V-minify', function (cb) {
    sequence("set-param-V","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--V包 趣侬vs37--微微剑仙 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--W包 天剑vs霆耀--仙侠决 start-----------------------------------------------------------*/

/**W包参数*/
var set_param_W = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageW/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameW';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'w$';
        sourceProject = "wx_build/jg_gameW_new";
        targetProject = "wx_build/jg_gameW_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "WWMAIW.js";
        libsMainJs = "WWGAMEW.js";
        packageName1 = "wIBw";
        packageName2 = "wpftw";
        packageName3 = "wwwwwwwww";
        var clinetPbName = "wwCLIENw.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/wINDww.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/wwINIwww.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/wwDOww.js"},
            "libs/dom_parser.js":  {url:packageName1+"/wwparsww.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/wwMtadww.js"},
            "libs/libs.min.js":  {url:packageName1+"/wwIB1ww.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/wwfww.js"},
            "libs/sax.js":  {url:packageName1+"/wwqww.js"},
            "libs/weapp-adapter.js":  {url:"wv2/wwE4ww.js"},
            "libs/zlib.js":  {url:packageName1+"/ww11ww.js"},
            "wxsdk":  {url:"wwawww"},
            "wxsdk/wx_aksdk.js":  {url:"wwawww/w7ww.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"wwawww/wwssww.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/wBFww.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "utils/funsdk_wx_min.js":{url:"utils/funsdk_wx_min.js",addGlobleKeys0:false,extractStr:false},
            "utils/qingjs-conf.js":{url:"utils/qingjs-conf.js",addGlobleKeys0:false,extractStr:false},
            "utils/qingjs-wxapp.js":{url:"utils/qingjs-wxapp.js",addGlobleKeys0:false,extractStr:false},
            "utils/cxui.laya.js":{url:packageName1+"/utils/cxui.laya.js",addGlobleKeys0:false,extractStr:false},
            //随机创建名字和文件夹
            "wxloading_atlas": {url:"wwdw"},
            "wxlogin_atlas": {url:"wwlgrww"},
            "wxeff_btn_atlas":{url:"wtw"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"wwdw/w1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"wwdw/w2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"wwdw/w3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"wwdw/w4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"wwdw/w5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"wwdw/w6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"wwdw/w7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"wwdw/w8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"wwdw/w9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"wwdw/w10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"wwdw/w11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"wwdw/w12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"wwdw/w13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"wwdw/w14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"wwdw/w15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"wwdw/w16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"wwdw/w17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"wwdw/w18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"wwdw/w19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"wwdw/w20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"wwlgrww/w199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"wwlgrww/w1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"wwlgrww/w123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"wwlgrww/w2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"wwlgrww/w3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"wwlgrww/w4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"wwlgrww/w5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"wwlgrww/w6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"wwlgrww/w7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"wwlgrww/w8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"wwlgrww/w9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"wwlgrww/w10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"wwlgrww/w11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"wwlgrww/w12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"wwlgrww/w13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"wwlgrww/w14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"wwlgrww/w15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"wwlgrww/w16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"wwlgrww/w17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"wwlgrww/w18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"wwlgrww/w19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"wwlgrww/w20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"wwlgrww/w21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"wwlgrww/w22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"wwlgrww/w23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"wwlgrww/w24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"wwlgrww/w25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"wwlgrww/w26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"wwlgrww/w27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"wwlgrww/w28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"wwlgrww/w29b.png"},

            "wxeff_btn_atlas/0.png": {url:"wtw/w1c.png"},
            "wxeff_btn_atlas/1.png": {url:"wtw/w2c.png"},
            "wxeff_btn_atlas/2.png": {url:"wtw/w3c.png"},
            "wxeff_btn_atlas/3.png": {url:"wtw/w4c.png"},
            "wxeff_btn_atlas/4.png": {url:"wtw/w5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "wwssww",
            "./sax": "./wwqww",
            "./dom": "./wwDOww",
            "client_pb.js": clinetPbName,
            "protobuf.js": "wBFww.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "wwlgrww",
            "wxeff_btn_atlas": "wtw",
            "wxloading_atlas": "wwdw",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "w1a.png",
            "btn_loding_abcelq1.png": "w2a.png",
            "image_loading_bg.jpg": "w3a.jpg",
            "image_loading_bg_bottom.jpg": "w4a.jpg",
            "image_loading_bg_bottom2.jpg": "w5a.jpg",
            "image_loading_bg_left.jpg": "w6a.jpg",
            "image_loading_bg_left2.jpg": "w7a.jpg",
            "image_loading_bg_right.jpg": "w8a.jpg",
            "image_loading_bg_right2.jpg": "w9a.jpg",
            "image_loading_bg_top.jpg": "w10a.jpg",
            "image_loading_bg_top2.jpg": "w11a.jpg",
            "image_loading_bg2.jpg": "w12a.jpg",


            "image_loding_bar0.png": "w13a.png",
            "image_loding_bar1.png": "w14a.png",
            "image_loding_bar02.png": "w15a.png",
            "image_loding_bar2.png": "w16a.png",
            "image_loding_bar3.png": "w17a.png",
            "image_login_point1.png": "w18a.png",
            "image_login_point2.png":"w19a.png",
            "image_login_point3.png": "w20a.png",


            "image_xuanqu_ztjb0.png": "w199b.png",
            "image_denglu_txtshenpi.png": "w1b.png",
            "shenhezizi.png": "w123b.png",
            "image_login_loginbg.jpg": "w2b.jpg",
            "image_login_loginbg_bottom.jpg": "w3b.jpg",
            "image_login_loginbg_left.jpg": "w4b.jpg",
            "image_login_loginbg_right.jpg": "w5b.jpg",
            "image_login_loginbg_top.jpg": "w6b.jpg",
            "image_login_logo.png": "w7b.png",
            "image_login_notice.png": "w8b.png",
            "image_xuanfu_xfbg.png": "w9b.png",

            "btn_com_chuangback.png": "w10b.png",
            "btn_login_gonggao.png": "w11b.png",
            "btn_login_loginanniu.png": "w12b.png",
            "btn_login_yingsi.png": "w13b.png",
            "btn_xuanqu_anniuhuang.png": "w14b.png",
            "btn_xuanqu_anniulan.png": "w15b.png",
            "btn_xuanqu_quanniu.png": "w16b.png",
            "image_com_tuichu.png": "w17b.png",
            "image_login_changtong.png": "w18b.png",
            "image_login_fanmang.png": "w19b.png",
            "image_login_weihu.png": "w20b.png",
            "image_login_xuanqubg.png": "w21b.png",
            "image_login_init.png": "w22b.png",
            "btn_com_chuangback1.png": "w23b.png",
            "btn_com_long0.png":"w24b.png",
            "btn_com_long1.png":"w25b.png",
            "image_login_notice1.png":"w26b.png",
            "image_loding_txtbhcc.png":"w27b.png",
            "image_xuanfu_gx0.png": "w28b.png",
            "image_xuanfu_gx1.png": "w29b.png",

            "0.png": "w1c.png",
            "1.png": "w2c.png",
            "2.png": "w3c.png",
            "3.png": "w4c.png",
            "4.png": "w5c.png",

        }
        strFilePath = "/wwes";
        strFileName = "/wwiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$W", "s", "_T", "_w", "w"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "$IYA1MD4JVGX06L7OUT3PKBNHEF2ZQWSR85_C9";
        str_leading2 = "gmx4hv6do5wbu3z1e8cka7jr_y9p0inl$tsqf2";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-W', function () {
    var stream = gulp.src("")
        .pipe(set_param_W())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-W', function (cb) {
    sequence("set-param-W","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

/**-------------------------------------------------微信小游戏--W包 天剑vs霆耀--仙侠决 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--X包 墨阳--御天下 start-----------------------------------------------------------*/

/**X包参数*/
var set_param_X = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageX/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameX';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'x$';
        sourceProject = "wx_build/jg_gameX_new";
        targetProject = "wx_build/jg_gameX_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "xxMAIx.js";
        libsMainJs = "xxGAMEx.js";
        packageName1 = "xIBx";
        packageName2 = "xpftx";
        packageName3 = "xxxxxxxxx";
        var clinetPbName = "xxCLIENx.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/xINDxx.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/xxINIxxx.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/xxDOxx.js"},
            "libs/dom_parser.js":  {url:packageName1+"/xxparsxx.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/xxMtadxx.js"},
            "libs/libs.min.js":  {url:packageName1+"/xxIB1xx.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/xxfxx.js"},
            "libs/sax.js":  {url:packageName1+"/xxqxx.js"},
            "libs/weapp-adapter.js":  {url:"xv2/xxE4xx.js"},
            "libs/zlib.js":  {url:packageName1+"/xx11xx.js"},
            "wxsdk":  {url:"xxaxxx"},
            "wxsdk/wx_aksdk.js":  {url:"xxaxxx/x7xx.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"xxaxxx/xxssxx.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/xBFxx.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "utils/config.js":{url:"/utils/config.js",addGlobleKeys0:false,extractStr:false},
            "utils/funsdk_wx_min.js":{url:"/utils/funsdk_wx_min.js",addGlobleKeys0:false,extractStr:false},
            "utils/qingjs-conf.js":{url:"/utils/qingjs-conf.js",addGlobleKeys0:false,extractStr:false},
            "utils/qingjs-wxapp.js":{url:"/utils/qingjs-wxapp.js",addGlobleKeys0:false,extractStr:false},
            "utils/wxsdk_v3.7.js":{url:"/utils/wxsdk_v3.7.js",addGlobleKeys0:false,extractStr:false},
            "utils/wxsdk_v3.8.js":{url:"/utils/wxsdk_v3.8.js",addGlobleKeys0:false,extractStr:false},
            //随机创建名字和文件夹
            "wxloading_atlas": {url:"xxdx"},
            "wxlogin_atlas": {url:"xxlgrxx"},
            "wxeff_btn_atlas":{url:"xtx"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"xxdx/x1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"xxdx/x2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"xxdx/x3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"xxdx/x4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"xxdx/x5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"xxdx/x6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"xxdx/x7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"xxdx/x8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"xxdx/x9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"xxdx/x10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"xxdx/x11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"xxdx/x12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"xxdx/x13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"xxdx/x14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"xxdx/x15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"xxdx/x16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"xxdx/x17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"xxdx/x18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"xxdx/x19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"xxdx/x20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"xxlgrxx/x199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"xxlgrxx/x1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"xxlgrxx/x123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"xxlgrxx/x2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"xxlgrxx/x3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"xxlgrxx/x4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"xxlgrxx/x5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"xxlgrxx/x6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"xxlgrxx/x7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"xxlgrxx/x8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"xxlgrxx/x9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"xxlgrxx/x10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"xxlgrxx/x11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"xxlgrxx/x12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"xxlgrxx/x13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"xxlgrxx/x14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"xxlgrxx/x15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"xxlgrxx/x16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"xxlgrxx/x17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"xxlgrxx/x18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"xxlgrxx/x19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"xxlgrxx/x20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"xxlgrxx/x21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"xxlgrxx/x22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"xxlgrxx/x23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"xxlgrxx/x24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"xxlgrxx/x25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"xxlgrxx/x26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"xxlgrxx/x27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"xxlgrxx/x28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"xxlgrxx/x29b.png"},

            "wxeff_btn_atlas/0.png": {url:"xtx/x1c.png"},
            "wxeff_btn_atlas/1.png": {url:"xtx/x2c.png"},
            "wxeff_btn_atlas/2.png": {url:"xtx/x3c.png"},
            "wxeff_btn_atlas/3.png": {url:"xtx/x4c.png"},
            "wxeff_btn_atlas/4.png": {url:"xtx/x5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "xxssxx",
            "./sax": "./xxqxx",
            "./dom": "./xxDOxx",
            "client_pb.js": clinetPbName,
            "protobuf.js": "xBFxx.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "xxlgrxx",
            "wxeff_btn_atlas": "xtx",
            "wxloading_atlas": "xxdx",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "x1a.png",
            "btn_loding_abcelq1.png": "x2a.png",
            "image_loading_bg.jpg": "x3a.jpg",
            "image_loading_bg_bottom.jpg": "x4a.jpg",
            "image_loading_bg_bottom2.jpg": "x5a.jpg",
            "image_loading_bg_left.jpg": "x6a.jpg",
            "image_loading_bg_left2.jpg": "x7a.jpg",
            "image_loading_bg_right.jpg": "x8a.jpg",
            "image_loading_bg_right2.jpg": "x9a.jpg",
            "image_loading_bg_top.jpg": "x10a.jpg",
            "image_loading_bg_top2.jpg": "x11a.jpg",
            "image_loading_bg2.jpg": "x12a.jpg",


            "image_loding_bar0.png": "x13a.png",
            "image_loding_bar1.png": "x14a.png",
            "image_loding_bar02.png": "x15a.png",
            "image_loding_bar2.png": "x16a.png",
            "image_loding_bar3.png": "x17a.png",
            "image_login_point1.png": "x18a.png",
            "image_login_point2.png":"x19a.png",
            "image_login_point3.png": "x20a.png",


            "image_xuanqu_ztjb0.png":"x199b.png",
            "image_denglu_txtshenpi.png": "x1b.png",
            "shenhezizi.png": "x123b.png",
            "image_login_loginbg.jpg": "x2b.jpg",
            "image_login_loginbg_bottom.jpg": "x3b.jpg",
            "image_login_loginbg_left.jpg": "x4b.jpg",
            "image_login_loginbg_right.jpg": "x5b.jpg",
            "image_login_loginbg_top.jpg": "x6b.jpg",
            "image_login_logo.png": "x7b.png",
            "image_login_notice.png": "x8b.png",
            "image_xuanfu_xfbg.png": "x9b.png",

            "btn_com_chuangback.png": "x10b.png",
            "btn_login_gonggao.png": "x11b.png",
            "btn_login_loginanniu.png": "x12b.png",
            "btn_login_yingsi.png": "x13b.png",
            "btn_xuanqu_anniuhuang.png": "x14b.png",
            "btn_xuanqu_anniulan.png": "x15b.png",
            "btn_xuanqu_quanniu.png": "x16b.png",
            "image_com_tuichu.png": "x17b.png",
            "image_login_changtong.png": "x18b.png",
            "image_login_fanmang.png": "x19b.png",
            "image_login_weihu.png": "x20b.png",
            "image_login_xuanqubg.png": "x21b.png",
            "image_login_init.png": "x22b.png",
            "btn_com_chuangback1.png": "x23b.png",
            "btn_com_long0.png":"x24b.png",
            "btn_com_long1.png":"x25b.png",
            "image_login_notice1.png":"x26b.png",
            "image_loding_txtbhcc.png":"x27b.png",
            "image_xuanfu_gx0.png": "x28b.png",
            "image_xuanfu_gx1.png": "x29b.png",

            "0.png": "x1c.png",
            "1.png": "x2c.png",
            "2.png": "x3c.png",
            "3.png": "x4c.png",
            "4.png": "x5c.png",

        }
        strFilePath = "/XXes";
        strFileName = "/XXiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$x", "u", "v1", "x1", "x"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "T$J69HDKRP8N4UBFG72AO05SWECIXVQLYZ_1M3";
        str_leading2 = "r_qaphe0bkw13t625zomsxi4gdvunjcf9l78y$";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-X', function () {
    var stream = gulp.src("")
        .pipe(set_param_X())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-X', function (cb) {
    sequence("set-param-X","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

//混淆
gulp.task('build-babel-obfuscator-X-minify', function (cb) {
    sequence("set-param-X","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--X包 墨阳--御天下 end-----------------------------------------------------------*/



/**-------------------------------------------------微信小游戏--Y包 点完-斗战仙魔-盈月服 start-----------------------------------------------------------*/

/**Y包参数*/
var set_param_Y = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageY/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameY';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'y$';
        sourceProject = "wx_build/jg_gameY_new";
        targetProject = "wx_build/jg_gameY_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "yyMAIy.js";
        libsMainJs = "yyGAMEy.js";
        packageName1 = "yIBy";
        packageName2 = "ypfty";
        packageName3 = "yyyyy";
        var clinetPbName = "yyCLIENy.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/yINDyy.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/yyINIyy.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/yyDOyy.js"},
            "libs/dom_parser.js":  {url:packageName1+"/yyparsyy.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/yyMtadyy.js"},
            "libs/libs.min.js":  {url:packageName1+"/yyIB1yy.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/yybfyy.js"},
            "libs/sax.js":  {url:packageName1+"/yycyy.js"},
            "libs/weapp-adapter.js":  {url:"xv2/yyE4yy.js"},
            "libs/zlib.js":  {url:packageName1+"/yy11yy.js"},
            "wxsdk":  {url:"yyabyysdk"},
            "wxsdk/wx_aksdk.js":  {url:"yyabyysdk/y7sdky.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"yyabyysdk/yysshy.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/yBFyy.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "utils/config.js":{url:"/utils/config.js",addGlobleKeys0:false,extractStr:false},
            "utils/funsdk_wx_min.js":{url:"/utils/funsdk_wx_min.js",addGlobleKeys0:false,extractStr:false},
            "utils/qingjs-conf.js":{url:"/utils/qingjs-conf.js",addGlobleKeys0:false,extractStr:false},
            "utils/qingjs-wxapp.js":{url:"/utils/qingjs-wxapp.js",addGlobleKeys0:false,extractStr:false},
            "utils/wxsdk_v3.7.js":{url:"/utils/wxsdk_v3.7.js",addGlobleKeys0:false,extractStr:false},
            "utils/wxsdk_v3.8.js":{url:"/utils/wxsdk_v3.8.js",addGlobleKeys0:false,extractStr:false},
            "utils/dwPlatformSDK.js":{url:"/utils/dwPlatformSDK.js",addGlobleKeys0:false,extractStr:false},
            //随机创建名字和文件夹
            "wxloading_atlas": {url:"yydy"},
            "wxlogin_atlas": {url:"yylgryy"},
            "wxeff_btn_atlas":{url:"yty"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"yydy/yu1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"yydy/yu2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"yydy/yu3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"yydy/yu4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"yydy/yu5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"yydy/yu6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"yydy/yu7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"yydy/yu8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"yydy/yu9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"yydy/yu10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"yydy/yu11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"yydy/yu12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"yydy/yu13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"yydy/yu14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"yydy/yu15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"yydy/yu16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"yydy/yu17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"yydy/yu18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"yydy/yu19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"yydy/yu20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"yylgryy/yu199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"yylgryy/yu1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"yylgryy/yu123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"yylgryy/yu2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"yylgryy/yu3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"yylgryy/yu4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"yylgryy/yu5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"yylgryy/yu6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"yylgryy/yu7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"yylgryy/yu8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"yylgryy/yu9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"yylgryy/yu10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"yylgryy/yu11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"yylgryy/yu12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"yylgryy/yu13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"yylgryy/yu14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"yylgryy/yu15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"yylgryy/yu16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"yylgryy/yu17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"yylgryy/yu18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"yylgryy/yu19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"yylgryy/yu20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"yylgryy/yu21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"yylgryy/yu22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"yylgryy/yu23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"yylgryy/yu24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"yylgryy/yu25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"yylgryy/yu26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"yylgryy/yu27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"yylgryy/yu28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"yylgryy/yu29b.png"},

            "wxeff_btn_atlas/0.png": {url:"yty/yu1c.png"},
            "wxeff_btn_atlas/1.png": {url:"yty/yu2c.png"},
            "wxeff_btn_atlas/2.png": {url:"yty/yu3c.png"},
            "wxeff_btn_atlas/3.png": {url:"yty/yu4c.png"},
            "wxeff_btn_atlas/4.png": {url:"yty/yu5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "yysshy",
            "./sax": "./yycyy",
            "./dom": "./yyDOyy",
            "client_pb.js": clinetPbName,
            "protobuf.js": "yBFyy.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "yylgryy",
            "wxeff_btn_atlas": "yty",
            "wxloading_atlas": "yydy",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "yu1a.png",
            "btn_loding_abcelq1.png": "yu2a.png",
            "image_loading_bg.jpg": "yu3a.jpg",
            "image_loading_bg_bottom.jpg": "yu4a.jpg",
            "image_loading_bg_bottom2.jpg": "yu5a.jpg",
            "image_loading_bg_left.jpg": "yu6a.jpg",
            "image_loading_bg_left2.jpg": "yu7a.jpg",
            "image_loading_bg_right.jpg": "yu8a.jpg",
            "image_loading_bg_right2.jpg": "yu9a.jpg",
            "image_loading_bg_top.jpg": "yu10a.jpg",
            "image_loading_bg_top2.jpg": "yu11a.jpg",
            "image_loading_bg2.jpg": "yu12a.jpg",


            "image_loding_bar0.png": "yu13a.png",
            "image_loding_bar1.png": "yu14a.png",
            "image_loding_bar02.png": "yu15a.png",
            "image_loding_bar2.png": "yu16a.png",
            "image_loding_bar3.png": "yu17a.png",
            "image_login_point1.png": "yu18a.png",
            "image_login_point2.png":"yu19a.png",
            "image_login_point3.png": "yu20a.png",


            "image_xuanqu_ztjb0.png": "yu199b.png",
            "image_denglu_txtshenpi.png": "yu1b.png",
            "shenhezizi.png": "yu123b.png",
            "image_login_loginbg.jpg": "yu2b.jpg",
            "image_login_loginbg_bottom.jpg": "yu3b.jpg",
            "image_login_loginbg_left.jpg": "yu4b.jpg",
            "image_login_loginbg_right.jpg": "yu5b.jpg",
            "image_login_loginbg_top.jpg": "yu6b.jpg",
            "image_login_logo.png": "yu7b.png",
            "image_login_notice.png": "yu8b.png",
            "image_xuanfu_xfbg.png": "yu9b.png",

            "btn_com_chuangback.png": "yu10b.png",
            "btn_login_gonggao.png": "yu11b.png",
            "btn_login_loginanniu.png": "yu12b.png",
            "btn_login_yingsi.png": "yu13b.png",
            "btn_xuanqu_anniuhuang.png": "yu14b.png",
            "btn_xuanqu_anniulan.png": "yu15b.png",
            "btn_xuanqu_quanniu.png": "yu16b.png",
            "image_com_tuichu.png": "yu17b.png",
            "image_login_changtong.png": "yu18b.png",
            "image_login_fanmang.png": "yu19b.png",
            "image_login_weihu.png": "yu20b.png",
            "image_login_xuanqubg.png": "yu21b.png",
            "image_login_init.png": "yu22b.png",
            "btn_com_chuangback1.png": "yu23b.png",
            "btn_com_long0.png":"yu24b.png",
            "btn_com_long1.png":"yu25b.png",
            "image_login_notice1.png":"yu26b.png",
            "image_loding_txtbhcc.png":"yu27b.png",
            "image_xuanfu_gx0.png": "yu28b.png",
            "image_xuanfu_gx1.png": "yu29b.png",

            "0.png": "yu1c.png",
            "1.png": "yu2c.png",
            "2.png": "yu3c.png",
            "3.png": "yu4c.png",
            "4.png": "yu5c.png",

        }
        strFilePath = "/yyes";
        strFileName = "/yyiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$y", "a", "b", "y2", "y"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 420000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "9$5S01OTHRG7MCK43F8_B6JIPNYZQ2DXLWVUAE";
        str_leading2 = "exzr0yv36a5mu1dtw4hjof_78lsc9k2n$giqpb";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Y', function () {
    var stream = gulp.src("")
        .pipe(set_param_Y())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Y', function (cb) {
    sequence("set-param-Y","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);

});

//混淆
gulp.task('build-babel-obfuscator-Y-minify', function (cb) {
    sequence("set-param-Y","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--Y包 点完-斗战仙魔-盈月服 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z包  天剑vs有一-萌神战姬start-----------------------------------------------------------*/


/**Z包参数*/
var set_param_Z = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_new";
        targetProject = "wx_build/jg_gameZ_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "zzMAIz.js";
        libsMainJs = "zzGAMEz.js";
        packageName1 = "zIBz";
        packageName2 = "zpftz";
        packageName3 = "zzzzz";
        var clinetPbName = "zzCLIENz.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/zINDzz.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/zzINIzz.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/zzDOzz.js"},
            "libs/dom_parser.js":  {url:packageName1+"/zzparszz.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/zzMtadzz.js"},
            "libs/libs.min.js":  {url:packageName1+"/zzIB1zz.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/zzbfzz.js"},
            "libs/sax.js":  {url:packageName1+"/zzczz.js"},
            "libs/weapp-adapter.js":  {url:"xv2/zzE4zz.js"},
            "libs/zlib.js":  {url:packageName1+"/zz11zz.js"},
            "wxsdk":  {url:"zzabzzsdk"},
            "wxsdk/wx_aksdk.js":  {url:"zzabzzsdk/z7sdkz.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"zzabzzsdk/zzsshz.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/zBFzz.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "wxloading_atlas": {url:"zzdz"},
            "wxlogin_atlas": {url:"zzlgrzz"},
            "wxeff_btn_atlas":{url:"ztz"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"zzdz/zz1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"zzdz/zz2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"zzdz/zz3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"zzdz/zz4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"zzdz/zz5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"zzdz/zz6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"zzdz/zz7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"zzdz/zz8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"zzdz/zz9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"zzdz/zz10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"zzdz/zz11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"zzdz/zz12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"zzdz/zz13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"zzdz/zz14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"zzdz/zz15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"zzdz/zz16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"zzdz/zz17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"zzdz/zz18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"zzdz/zz19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"zzdz/zz20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"zzlgrzz/zz199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"zzlgrzz/zz1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"zzlgrzz/zz123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"zzlgrzz/zz2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"zzlgrzz/zz3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"zzlgrzz/zz4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"zzlgrzz/zz5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"zzlgrzz/zz6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"zzlgrzz/zz7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"zzlgrzz/zz8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"zzlgrzz/zz9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"zzlgrzz/zz10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"zzlgrzz/zz11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"zzlgrzz/zz12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"zzlgrzz/zz13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"zzlgrzz/zz14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"zzlgrzz/zz15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"zzlgrzz/zz16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"zzlgrzz/zz17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"zzlgrzz/zz18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"zzlgrzz/zz19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"zzlgrzz/zz20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"zzlgrzz/zz21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"zzlgrzz/zz22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"zzlgrzz/zz23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"zzlgrzz/zz24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"zzlgrzz/zz25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"zzlgrzz/zz26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"zzlgrzz/zz27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"zzlgrzz/zz28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"zzlgrzz/zz29b.png"},

            "wxeff_btn_atlas/0.png": {url:"ztz/zz1c.png"},
            "wxeff_btn_atlas/1.png": {url:"ztz/zz2c.png"},
            "wxeff_btn_atlas/2.png": {url:"ztz/zz3c.png"},
            "wxeff_btn_atlas/3.png": {url:"ztz/zz4c.png"},
            "wxeff_btn_atlas/4.png": {url:"ztz/zz5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "zzsshz",
            "./sax": "./zzczz",
            "./dom": "./zzDOzz",
            "client_pb.js": clinetPbName,
            "protobuf.js": "zBFzz.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "zzlgrzz",
            "wxeff_btn_atlas": "ztz",
            "wxloading_atlas": "zzdz",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "zz1a.png",
            "btn_loding_abcelq1.png": "zz2a.png",
            "image_loading_bg.jpg": "zz3a.jpg",
            "image_loading_bg_bottom.jpg": "zz4a.jpg",
            "image_loading_bg_bottom2.jpg": "zz5a.jpg",
            "image_loading_bg_left.jpg": "zz6a.jpg",
            "image_loading_bg_left2.jpg": "zz7a.jpg",
            "image_loading_bg_right.jpg": "zz8a.jpg",
            "image_loading_bg_right2.jpg": "zz9a.jpg",
            "image_loading_bg_top.jpg": "zz10a.jpg",
            "image_loading_bg_top2.jpg": "zz11a.jpg",
            "image_loading_bg2.jpg": "zz12a.jpg",


            "image_loding_bar0.png": "zz13a.png",
            "image_loding_bar1.png": "zz14a.png",
            "image_loding_bar02.png": "zz15a.png",
            "image_loding_bar2.png": "zz16a.png",
            "image_loding_bar3.png": "zz17a.png",
            "image_login_point1.png": "zz18a.png",
            "image_login_point2.png":"zz19a.png",
            "image_login_point3.png": "zz20a.png",


            "image_xuanqu_ztjb0.png": "zz199b.png",
            "image_denglu_txtshenpi.png": "zz1b.png",
            "shenhezizi.png": "zz123b.png",
            "image_login_loginbg.jpg": "zz2b.jpg",
            "image_login_loginbg_bottom.jpg": "zz3b.jpg",
            "image_login_loginbg_left.jpg": "zz4b.jpg",
            "image_login_loginbg_right.jpg": "zz5b.jpg",
            "image_login_loginbg_top.jpg": "zz6b.jpg",
            "image_login_logo.png": "zz7b.png",
            "image_login_notice.png": "zz8b.png",
            "image_xuanfu_xfbg.png": "zz9b.png",

            "btn_com_chuangback.png": "zz10b.png",
            "btn_login_gonggao.png": "zz11b.png",
            "btn_login_loginanniu.png": "zz12b.png",
            "btn_login_yingsi.png": "zz13b.png",
            "btn_xuanqu_anniuhuang.png": "zz14b.png",
            "btn_xuanqu_anniulan.png": "zz15b.png",
            "btn_xuanqu_quanniu.png": "zz16b.png",
            "image_com_tuichu.png": "zz17b.png",
            "image_login_changtong.png": "zz18b.png",
            "image_login_fanmang.png": "zz19b.png",
            "image_login_weihu.png": "zz20b.png",
            "image_login_xuanqubg.png": "zz21b.png",
            "image_login_init.png": "zz22b.png",
            "btn_com_chuangback1.png": "zz23b.png",
            "btn_com_long0.png":"zz24b.png",
            "btn_com_long1.png":"zz25b.png",
            "image_login_notice1.png":"zz26b.png",
            "image_loding_txtbhcc.png":"zz27b.png",
            "image_xuanfu_gx0.png": "zz28b.png",
            "image_xuanfu_gx1.png": "zz29b.png",

            "0.png": "zz1c.png",
            "1.png": "zz2c.png",
            "2.png": "zz3c.png",
            "3.png": "zz4c.png",
            "4.png": "zz5c.png",

        }
        strFilePath = "/ZZes";
        strFileName = "/ZZiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$z", "B", "c", "z0", "z"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "R0YJDT3VLU1ZK$94CSEHGP7XF2QO8NM_AWI6B5";
        str_leading2 = "j$q3mi7nclvf64gph19xsaeztodykb8r_52uw0";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z', function (cb) {
    sequence("set-param-Z","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z-minify', function (cb) {
    sequence("set-param-Z","MT1_build_minifyTargetProject",cb);
});



/**-------------------------------------------------微信小游戏--Z包 天剑vs有一-萌神战姬 end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--Z_1包  天剑vs萌蛋-仙尘start-----------------------------------------------------------*/


/**Z_1包参数*/
var set_param_Z_1 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_1/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_1';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'a$';
        sourceProject = "wx_build/jg_gameZ_1_new";
        targetProject = "wx_build/jg_gameZ_1_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "a1MAIa1.js";
        libsMainJs = "a1GAMEa1.js";
        packageName1 = "a1Ia1";
        packageName2 = "a1pfta1";
        packageName3 = "aaaaa";
        var clinetPbName = "aaCLIENaa.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/aINDaa.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/aaINIaa.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/aaDOaa.js"},
            "libs/dom_parser.js":  {url:packageName1+"/aaparsaa.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/aaMtadaa.js"},
            "libs/libs.min.js":  {url:packageName1+"/aaIB1aa.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/aabfaa.js"},
            "libs/sax.js":  {url:packageName1+"/aacaa.js"},
            "libs/weapp-adapter.js":  {url:"xv2/aaE4aa.js"},
            "libs/zlib.js":  {url:packageName1+"/aa11aa.js"},
            "wxsdk":  {url:"aaabasdk"},
            "wxsdk/wx_aksdk.js":  {url:"aaabasdk/a5sdka.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"aaabasdk/a5ssha.js",extractStr:false,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/aBFaa.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "wxloading_atlas": {url:"aada"},
            "wxlogin_atlas": {url:"aalgraa"},
            "wxeff_btn_atlas":{url:"aya"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"aada/aa1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"aada/aa2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"aada/aa3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"aada/aa4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"aada/aa5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"aada/aa6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"aada/aa7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"aada/aa8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"aada/aa9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"aada/aa10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"aada/aa11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"aada/aa12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"aada/aa13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"aada/aa14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"aada/aa15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"aada/aa16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"aada/aa17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"aada/aa18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"aada/aa19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"aada/aa20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"aalgraa/aa199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"aalgraa/aa1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"aalgraa/aa123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"aalgraa/aa2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"aalgraa/aa3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"aalgraa/aa4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"aalgraa/aa5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"aalgraa/aa6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"aalgraa/aa7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"aalgraa/aa8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"aalgraa/aa9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"aalgraa/aa10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"aalgraa/aa11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"aalgraa/aa12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"aalgraa/aa13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"aalgraa/aa14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"aalgraa/aa15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"aalgraa/aa16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"aalgraa/aa17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"aalgraa/aa18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"aalgraa/aa19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"aalgraa/aa20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"aalgraa/aa21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"aalgraa/aa22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"aalgraa/aa23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"aalgraa/aa24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"aalgraa/aa25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"aalgraa/aa26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"aalgraa/aa27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"aalgraa/aa28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"aalgraa/aa29b.png"},

            "wxeff_btn_atlas/0.png": {url:"aya/aa1c.png"},
            "wxeff_btn_atlas/1.png": {url:"aya/aa2c.png"},
            "wxeff_btn_atlas/2.png": {url:"aya/aa3c.png"},
            "wxeff_btn_atlas/3.png": {url:"aya/aa4c.png"},
            "wxeff_btn_atlas/4.png": {url:"aya/aa5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5ssha",
            "./sax": "./aacaa",
            "./dom": "./aaDOaa",
            "client_pb.js": clinetPbName,
            "protobuf.js": "aBFaa.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "aalgraa",
            "wxeff_btn_atlas": "aya",
            "wxloading_atlas": "aada",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "aa1a.png",
            "btn_loding_abcelq1.png": "aa2a.png",
            "image_loading_bg.jpg": "aa3a.jpg",
            "image_loading_bg_bottom.jpg": "aa4a.jpg",
            "image_loading_bg_bottom2.jpg": "aa5a.jpg",
            "image_loading_bg_left.jpg": "aa6a.jpg",
            "image_loading_bg_left2.jpg": "aa7a.jpg",
            "image_loading_bg_right.jpg": "aa8a.jpg",
            "image_loading_bg_right2.jpg": "aa9a.jpg",
            "image_loading_bg_top.jpg": "aa10a.jpg",
            "image_loading_bg_top2.jpg": "aa11a.jpg",
            "image_loading_bg2.jpg": "aa12a.jpg",


            "image_loding_bar0.png": "aa13a.png",
            "image_loding_bar1.png": "aa14a.png",
            "image_loding_bar02.png": "aa15a.png",
            "image_loding_bar2.png": "aa16a.png",
            "image_loding_bar3.png": "aa17a.png",
            "image_login_point1.png": "aa18a.png",
            "image_login_point2.png":"aa19a.png",
            "image_login_point3.png": "aa20a.png",


            "image_xuanqu_ztjb0.png": "aa199b.png",
            "image_denglu_txtshenpi.png": "aa1b.png",
            "shenhezizi.png": "aa123b.png",
            "image_login_loginbg.jpg": "aa2b.jpg",
            "image_login_loginbg_bottom.jpg": "aa3b.jpg",
            "image_login_loginbg_left.jpg": "aa4b.jpg",
            "image_login_loginbg_right.jpg": "aa5b.jpg",
            "image_login_loginbg_top.jpg": "aa6b.jpg",
            "image_login_logo.png": "aa7b.png",
            "image_login_notice.png": "aa8b.png",
            "image_xuanfu_xfbg.png": "aa9b.png",

            "btn_com_chuangback.png": "aa10b.png",
            "btn_login_gonggao.png": "aa11b.png",
            "btn_login_loginanniu.png": "aa12b.png",
            "btn_login_yingsi.png": "aa13b.png",
            "btn_xuanqu_anniuhuang.png": "aa14b.png",
            "btn_xuanqu_anniulan.png": "aa15b.png",
            "btn_xuanqu_quanniu.png": "aa16b.png",
            "image_com_tuichu.png": "aa17b.png",
            "image_login_changtong.png": "aa18b.png",
            "image_login_fanmang.png": "aa19b.png",
            "image_login_weihu.png": "aa20b.png",
            "image_login_xuanqubg.png": "aa21b.png",
            "image_login_init.png": "aa22b.png",
            "btn_com_chuangback1.png": "aa23b.png",
            "btn_com_long0.png":"aa24b.png",
            "btn_com_long1.png":"aa25b.png",
            "image_login_notice1.png":"aa26b.png",
            "image_loding_txtbhcc.png":"aa27b.png",
            "image_xuanfu_gx0.png": "aa28b.png",
            "image_xuanfu_gx1.png": "aa29b.png",

            "0.png": "aa1c.png",
            "1.png": "aa2c.png",
            "2.png": "aa3c.png",
            "3.png": "aa4c.png",
            "4.png": "aa5c.png",

        }
        strFilePath = "/aaes";
        strFileName = "/aailes.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$a", "C", "a", "a1", "a",["helper.js"]]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 460000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "CJ84M_GH52U09DYEXTNSQ3OK1W$RAPIBFL67VZ";
        str_leading2 = "g3en82pbaxohti5d4jmz9_csrqv$l0kfy671uw";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_1', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_1())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_1', function (cb) {
    sequence("set-param-Z_1","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});



/**-------------------------------------------------微信小游戏--Z1包 天剑vs萌蛋-仙尘 end-----------------------------------------------------------*/



/**-------------------------------------------------微信小游戏--Z2包 天剑vs九紫--极道仙尊 start-----------------------------------------------------------*/


/**Z_2包参数*/
var set_param_Z_2 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_2/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_2';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'K$';
        sourceProject = "wx_build/jg_gameZ_2_new";
        targetProject = "wx_build/jg_gameZ_2_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "A2MAIA2.js";
        libsMainJs = "A2GAMEA2.js";
        packageName1 = "A2IA2";
        packageName2 = "A2pftA2";
        packageName3 = "AAAAA";
        var clinetPbName = "AAIENAA.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/AINDAA.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/AAINIAaA.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/AADOAA.js",extractStr:true,count:1,strLen:3},
            "libs/dom_parser.js":  {url:packageName1+"/AAparsaA.js",extractStr:true,count:1,strLen:3},
            "libs/laya.wxmini.js":  {url:packageName1+"/AAMtadAA.js",extractStr:true,count:1,strLen:3},
            "libs/libs.min.js":  {url:packageName1+"/AAIB1AA.js",extractStr:true,count:3,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/AAbfAA.js",extractStr:true,count:1,strLen:3},
            "libs/sax.js":  {url:packageName1+"/AAcAA.js",extractStr:true,count:1,strLen:3},
            "libs/weapp-adapter.js":  {url:"xv2/AAE4AA.js"},
            "libs/zlib.js":  {url:packageName1+"/AA11AA.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"AAbasdA"},
            "wxsdk/wx_aksdk.js":  {url:"AAbasdA/A5sdkA.js",extractStr:true,count:1,strLen:3},
            // "wxsdk/helper.js":  {url:"AAbasdA/a5sshAA.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/ABFAA.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            // "utils/SdkFloat.js":  {url:"utils/SdkFloat.js",extractStr:false,count:1,strLen:3},
            // "utils/xlgame-jsdk-promise.js":  {url:"utils/xlgame-jsdk-promise.js",extractStr:false,count:1,strLen:3},
            // "utils/xlgame-sdk-3.0.js":  {url:"utils/xlgame-sdk-3.0.js",extractStr:false,count:1,strLen:3},
            // "utils/xlgame-sdk-util.js":  {url:"utils/xlgame-sdk-util.js",extractStr:false,count:1,strLen:3},
            "wxloading_atlas": {url:"AAdA"},
            "wxlogin_atlas": {url:"AAlgrAA"},
            "wxeff_btn_atlas":{url:"AyA"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"AAdA/AA1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"AAdA/AA2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"AAdA/AA3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"AAdA/AA4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"AAdA/AA5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"AAdA/AA6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"AAdA/AA7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"AAdA/AA8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"AAdA/AA9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"AAdA/AA10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"AAdA/AA11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"AAdA/AA12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"AAdA/AA13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"AAdA/AA14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"AAdA/AA15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"AAdA/AA16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"AAdA/AA17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"AAdA/AA18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"AAdA/AA19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"AAdA/AA20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"AAlgrAA/AA199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"AAlgrAA/AA1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"AAlgrAA/AA123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"AAlgrAA/AA2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"AAlgrAA/AA3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"AAlgrAA/AA4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"AAlgrAA/AA5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"AAlgrAA/AA6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"AAlgrAA/AA7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"AAlgrAA/AA8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"AAlgrAA/AA9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"AAlgrAA/AA10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"AAlgrAA/AA11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"AAlgrAA/AA12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"AAlgrAA/AA13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"AAlgrAA/AA14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"AAlgrAA/AA15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"AAlgrAA/AA16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"AAlgrAA/AA17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"AAlgrAA/AA18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"AAlgrAA/AA19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"AAlgrAA/AA20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"AAlgrAA/AA21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"AAlgrAA/AA22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"AAlgrAA/AA23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"AAlgrAA/AA24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"AAlgrAA/AA25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"AAlgrAA/AA26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"AAlgrAA/AA27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"AAlgrAA/AA28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"AAlgrAA/AA29b.png"},

            "wxeff_btn_atlas/0.png": {url:"AyA/AA1c.png"},
            "wxeff_btn_atlas/1.png": {url:"AyA/AA2c.png"},
            "wxeff_btn_atlas/2.png": {url:"AyA/AA3c.png"},
            "wxeff_btn_atlas/3.png": {url:"AyA/AA4c.png"},
            "wxeff_btn_atlas/4.png": {url:"AyA/AA5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshAA",
            "./sax": "./AAcAA",
            "./dom": "./AADOAA",
            "client_pb.js": clinetPbName,
            "protobuf.js": "ABFAA.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "AAlgrAA",
            "wxeff_btn_atlas": "AyA",
            "wxloading_atlas": "AAdA",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "AA1a.png",
            "btn_loding_abcelq1.png": "AA2a.png",
            "image_loading_bg.jpg": "AA3a.jpg",
            "image_loading_bg_bottom.jpg": "AA4a.jpg",
            "image_loading_bg_bottom2.jpg": "AA5a.jpg",
            "image_loading_bg_left.jpg": "AA6a.jpg",
            "image_loading_bg_left2.jpg": "AA7a.jpg",
            "image_loading_bg_right.jpg": "AA8a.jpg",
            "image_loading_bg_right2.jpg": "AA9a.jpg",
            "image_loading_bg_top.jpg": "AA10a.jpg",
            "image_loading_bg_top2.jpg": "AA11a.jpg",
            "image_loading_bg2.jpg": "AA12a.jpg",


            "image_loding_bar0.png": "AA13a.png",
            "image_loding_bar1.png": "AA14a.png",
            "image_loding_bar02.png": "AA15a.png",
            "image_loding_bar2.png": "AA16a.png",
            "image_loding_bar3.png": "AA17a.png",
            "image_login_point1.png": "AA18a.png",
            "image_login_point2.png":"AA19a.png",
            "image_login_point3.png": "AA20a.png",


            "image_xuanqu_ztjb0.png": "AA199b.png",
            "image_denglu_txtshenpi.png": "AA1b.png",
            "shenhezizi.png": "AA123b.png",
            "image_login_loginbg.jpg": "AA2b.jpg",
            "image_login_loginbg_bottom.jpg": "AA3b.jpg",
            "image_login_loginbg_left.jpg": "AA4b.jpg",
            "image_login_loginbg_right.jpg": "AA5b.jpg",
            "image_login_loginbg_top.jpg": "AA6b.jpg",
            "image_login_logo.png": "AA7b.png",
            "image_login_notice.png": "AA8b.png",
            "image_xuanfu_xfbg.png": "AA9b.png",

            "btn_com_chuangback.png": "AA10b.png",
            "btn_login_gonggao.png": "AA11b.png",
            "btn_login_loginanniu.png": "AA12b.png",
            "btn_login_yingsi.png": "AA13b.png",
            "btn_xuanqu_anniuhuang.png": "AA14b.png",
            "btn_xuanqu_anniulan.png": "AA15b.png",
            "btn_xuanqu_quanniu.png": "AA16b.png",
            "image_com_tuichu.png": "AA17b.png",
            "image_login_changtong.png": "AA18b.png",
            "image_login_fanmang.png": "AA19b.png",
            "image_login_weihu.png": "AA20b.png",
            "image_login_xuanqubg.png": "AA21b.png",
            "image_login_init.png": "AA22b.png",
            "btn_com_chuangback1.png": "AA23b.png",
            "btn_com_long0.png":"AA24b.png",
            "btn_com_long1.png":"AA25b.png",
            "image_login_notice1.png":"AA26b.png",
            "image_loding_txtbhcc.png":"AA27b.png",
            "image_xuanfu_gx0.png": "AA28b.png",
            "image_xuanfu_gx1.png": "AA29b.png",

            "0.png": "AA1c.png",
            "1.png": "AA2c.png",
            "2.png": "AA3c.png",
            "3.png": "AA4c.png",
            "4.png": "AA5c.png",

        }
        strFilePath = "/AAes";
        strFileName = "/AAiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$k", "k", "g1", "q1", "p"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "$87Z6B2F4QPMUGH_5XW1YC0IRSA9EJTNLDOK3V";
        str_leading2 = "57fr4g_oqbtxyip1ku380va9$emnds6jchzwl2";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_2', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_2())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_2', function (cb) {
    sequence("set-param-Z_2","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_2minify', function (cb) {
    sequence("set-param-Z_2","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z2包 天剑vs九紫--极道仙尊end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--Z3包 666vs9130-多梦江湖 start-----------------------------------------------------------*/


/**Z_3包参数*/
var set_param_Z_3 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_3/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_3';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'b$';
        sourceProject = "wx_build/jg_gameZ_3_new";
        targetProject = "wx_build/jg_gameZ_3_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "B2MBIB2.js";
        libsMainJs = "B2GBMEB2.js";
        packageName1 = "B2IB2";
        packageName2 = "B2pftB2";
        packageName3 = "BBBBB";
        var clinetPbName = "BBIENBB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/BINDBB.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/BBINIBaB.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/BBDOBB.js"},
            "libs/dom_parser.js":  {url:packageName1+"/BBparsaB.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/BBMtadBB.js"},
            "libs/libs.min.js":  {url:packageName1+"/BBIB1BB.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/BBbfBB.js"},
            "libs/sax.js":  {url:packageName1+"/BBcBB.js"},
            "libs/weapp-adapter.js":  {url:"xv2/BBE4BB.js"},
            "libs/zlib.js":  {url:packageName1+"/BB11BB.js"},
            "wxsdk":  {url:"BBbasdB"},
            "wxsdk/wx_aksdk.js":  {url:"BBbasdB/B5sdkB.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"BBbasdB/a5sshBB.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/BBFBB.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "untils/ddtSDKPlat.js":  {url:"untils/ddtSDKPlat.js",extractStr:false,count:1,strLen:3},
            "wxloading_atlas": {url:"BBdB"},
            "wxlogin_atlas": {url:"BBlgrBB"},
            "wxeff_btn_atlas":{url:"ByB"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"BBdB/BB1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"BBdB/BB2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"BBdB/BB3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"BBdB/BB4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"BBdB/BB5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"BBdB/BB6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"BBdB/BB7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"BBdB/BB8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"BBdB/BB9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"BBdB/BB10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"BBdB/BB11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"BBdB/BB12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"BBdB/BB13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"BBdB/BB14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"BBdB/BB15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"BBdB/BB16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"BBdB/BB17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"BBdB/BB18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"BBdB/BB19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"BBdB/BB20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"BBlgrBB/BB199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"BBlgrBB/BB1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"BBlgrBB/BB123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"BBlgrBB/BB2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"BBlgrBB/BB3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"BBlgrBB/BB4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"BBlgrBB/BB5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"BBlgrBB/BB6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"BBlgrBB/BB7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"BBlgrBB/BB8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"BBlgrBB/BB9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"BBlgrBB/BB10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"BBlgrBB/BB11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"BBlgrBB/BB12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"BBlgrBB/BB13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"BBlgrBB/BB14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"BBlgrBB/BB15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"BBlgrBB/BB16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"BBlgrBB/BB17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"BBlgrBB/BB18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"BBlgrBB/BB19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"BBlgrBB/BB20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"BBlgrBB/BB21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"BBlgrBB/BB22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"BBlgrBB/BB23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"BBlgrBB/BB24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"BBlgrBB/BB25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"BBlgrBB/BB26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"BBlgrBB/BB27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"BBlgrBB/BB28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"BBlgrBB/BB29b.png"},

            "wxeff_btn_atlas/0.png": {url:"ByB/BB1c.png"},
            "wxeff_btn_atlas/1.png": {url:"ByB/BB2c.png"},
            "wxeff_btn_atlas/2.png": {url:"ByB/BB3c.png"},
            "wxeff_btn_atlas/3.png": {url:"ByB/BB4c.png"},
            "wxeff_btn_atlas/4.png": {url:"ByB/BB5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshBB",
            "./sax": "./BBcBB",
            "./dom": "./BBDOBB",
            "client_pb.js": clinetPbName,
            "protobuf.js": "BBFBB.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "BBlgrBB",
            "wxeff_btn_atlas": "ByB",
            "wxloading_atlas": "BBdB",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "BB1a.png",
            "btn_loding_abcelq1.png": "BB2a.png",
            "image_loading_bg.jpg": "BB3a.jpg",
            "image_loading_bg_bottom.jpg": "BB4a.jpg",
            "image_loading_bg_bottom2.jpg": "BB5a.jpg",
            "image_loading_bg_left.jpg": "BB6a.jpg",
            "image_loading_bg_left2.jpg": "BB7a.jpg",
            "image_loading_bg_right.jpg": "BB8a.jpg",
            "image_loading_bg_right2.jpg": "BB9a.jpg",
            "image_loading_bg_top.jpg": "BB10a.jpg",
            "image_loading_bg_top2.jpg": "BB11a.jpg",
            "image_loading_bg2.jpg": "BB12a.jpg",


            "image_loding_bar0.png": "BB13a.png",
            "image_loding_bar1.png": "BB14a.png",
            "image_loding_bar02.png": "BB15a.png",
            "image_loding_bar2.png": "BB16a.png",
            "image_loding_bar3.png": "BB17a.png",
            "image_login_point1.png": "BB18a.png",
            "image_login_point2.png":"BB19a.png",
            "image_login_point3.png": "BB20a.png",


            "image_xuanqu_ztjb0.png": "BB199b.png",
            "image_denglu_txtshenpi.png": "BB1b.png",
            "shenhezizi.png": "BB123b.png",
            "image_login_loginbg.jpg": "BB2b.jpg",
            "image_login_loginbg_bottom.jpg": "BB3b.jpg",
            "image_login_loginbg_left.jpg": "BB4b.jpg",
            "image_login_loginbg_right.jpg": "BB5b.jpg",
            "image_login_loginbg_top.jpg": "BB6b.jpg",
            "image_login_logo.png": "BB7b.png",
            "image_login_notice.png": "BB8b.png",
            "image_xuanfu_xfbg.png": "BB9b.png",

            "btn_com_chuangback.png": "BB10b.png",
            "btn_login_gonggao.png": "BB11b.png",
            "btn_login_loginanniu.png": "BB12b.png",
            "btn_login_yingsi.png": "BB13b.png",
            "btn_xuanqu_anniuhuang.png": "BB14b.png",
            "btn_xuanqu_anniulan.png": "BB15b.png",
            "btn_xuanqu_quanniu.png": "BB16b.png",
            "image_com_tuichu.png": "BB17b.png",
            "image_login_changtong.png": "BB18b.png",
            "image_login_fanmang.png": "BB19b.png",
            "image_login_weihu.png": "BB20b.png",
            "image_login_xuanqubg.png": "BB21b.png",
            "image_login_init.png": "BB22b.png",
            "btn_com_chuangback1.png": "BB23b.png",
            "btn_com_long0.png":"BB24b.png",
            "btn_com_long1.png":"BB25b.png",
            "image_login_notice1.png":"BB26b.png",
            "image_loding_txtbhcc.png":"BB27b.png",
            "image_xuanfu_gx0.png": "BB28b.png",
            "image_xuanfu_gx1.png": "BB29b.png",

            "0.png": "BB1c.png",
            "1.png": "BB2c.png",
            "2.png": "BB3c.png",
            "3.png": "BB4c.png",
            "4.png": "BB5c.png",

        }
        strFilePath = "/BBes";
        strFileName = "/BBiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$b", "D", "b", "b1", "b"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 500000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "7STP1HZF0GRM926BUQCA5NEI4_Y$8J3XOKVLWD";
        str_leading2 = "3gq7xklo6d8s9r2_hvpw1ctmzyui0nj45b$afe";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_3', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_3())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_3', function (cb) {
    sequence("set-param-Z_3","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});
//混淆
gulp.task('build-babel-obfuscator-Z_3_minify', function (cb) {
    sequence("set-param-Z_3","MT1_build_minifyTargetProject",cb);
});



/**-------------------------------------------------微信小游戏--Z3包 666vs9130-多梦江湖 end-----------------------------------------------------------*/



/**-------------------------------------------------微信小游戏--Z4包 9130vs掌上-我和我的影子 start-----------------------------------------------------------*/


/**Z_4包参数*/
var set_param_Z_4 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_4/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_4';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'B$';
        sourceProject = "wx_build/jg_gameZ_4_new";
        targetProject = "wx_build/jg_gameZ_4_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "T52MT5IT52.js";
        libsMainJs = "T52GT5MET52.js";
        packageName1 = "T52IT52";
        packageName2 = "T52pftT52";
        packageName3 = "T5T5T5T5T5";
        var clinetPbName = "T5T5IENT5T5.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/T5INDT5T5.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/T5T5INIT5aT5.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/T5T5DOT5T5.js"},
            "libs/dom_parser.js":  {url:packageName1+"/T5T5parsaT5.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/T5T5MtadT5T5.js"},
            "libs/libs.min.js":  {url:packageName1+"/T5T5IT51T5T5.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/T5T5bfT5T5.js"},
            "libs/sax.js":  {url:packageName1+"/T5T5cT5T5.js"},
            "libs/weapp-adapter.js":  {url:"xv2/T5T5E4T5T5.js"},
            "libs/zlib.js":  {url:packageName1+"/T5T511T5T5.js"},
            "wxsdk":  {url:"T5T5basdT5"},
            "wxsdk/wx_aksdk.js":  {url:"T5T5basdT5/T55sdkT5.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"T5T5basdT5/a5sshT5T5.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/T5T5FT5T5.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "untils/ddtSDKPlat.js":  {url:"untils/ddtSDKPlat.js",extractStr:false,count:1,strLen:3},
            "wxloading_atlas": {url:"T5T5dT5"},
            "wxlogin_atlas": {url:"T5T5lgrT5T5"},
            "wxeff_btn_atlas":{url:"T5yT5"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"T5T5dT5/T5T51a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"T5T5dT5/T5T52a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"T5T5dT5/T5T53a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"T5T5dT5/T5T54a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"T5T5dT5/T5T55a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"T5T5dT5/T5T56a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"T5T5dT5/T5T57a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"T5T5dT5/T5T58a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"T5T5dT5/T5T59a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"T5T5dT5/T5T510a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"T5T5dT5/T5T511a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"T5T5dT5/T5T512a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"T5T5dT5/T5T513a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"T5T5dT5/T5T514a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"T5T5dT5/T5T515a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"T5T5dT5/T5T516a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"T5T5dT5/T5T517a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"T5T5dT5/T5T518a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"T5T5dT5/T5T519a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"T5T5dT5/T5T520a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"T5T5lgrT5T5/T5T5199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"T5T5lgrT5T5/T5T51b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"T5T5lgrT5T5/T5T5123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"T5T5lgrT5T5/T5T52b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"T5T5lgrT5T5/T5T53b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"T5T5lgrT5T5/T5T54b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"T5T5lgrT5T5/T5T55b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"T5T5lgrT5T5/T5T56b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"T5T5lgrT5T5/T5T57b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"T5T5lgrT5T5/T5T58b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"T5T5lgrT5T5/T5T59b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"T5T5lgrT5T5/T5T510b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"T5T5lgrT5T5/T5T511b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"T5T5lgrT5T5/T5T512b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"T5T5lgrT5T5/T5T513b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"T5T5lgrT5T5/T5T514b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"T5T5lgrT5T5/T5T515b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"T5T5lgrT5T5/T5T516b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"T5T5lgrT5T5/T5T517b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"T5T5lgrT5T5/T5T518b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"T5T5lgrT5T5/T5T519b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"T5T5lgrT5T5/T5T520b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"T5T5lgrT5T5/T5T521b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"T5T5lgrT5T5/T5T522b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"T5T5lgrT5T5/T5T523b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"T5T5lgrT5T5/T5T524b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"T5T5lgrT5T5/T5T525b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"T5T5lgrT5T5/T5T526b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"T5T5lgrT5T5/T5T527b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"T5T5lgrT5T5/T5T528b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"T5T5lgrT5T5/T5T529b.png"},

            "wxeff_btn_atlas/0.png": {url:"T5yT5/T5T51c.png"},
            "wxeff_btn_atlas/1.png": {url:"T5yT5/T5T52c.png"},
            "wxeff_btn_atlas/2.png": {url:"T5yT5/T5T53c.png"},
            "wxeff_btn_atlas/3.png": {url:"T5yT5/T5T54c.png"},
            "wxeff_btn_atlas/4.png": {url:"T5yT5/T5T55c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshT5T5",
            "./sax": "./T5T5cT5T5",
            "./dom": "./T5T5DOT5T5",
            "client_pb.js": clinetPbName,
            "protobuf.js": "T5T5FT5T5.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "T5T5lgrT5T5",
            "wxeff_btn_atlas": "T5yT5",
            "wxloading_atlas": "T5T5dT5",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "T5T51a.png",
            "btn_loding_abcelq1.png": "T5T52a.png",
            "image_loading_bg.jpg": "T5T53a.jpg",
            "image_loading_bg_bottom.jpg": "T5T54a.jpg",
            "image_loading_bg_bottom2.jpg": "T5T55a.jpg",
            "image_loading_bg_left.jpg": "T5T56a.jpg",
            "image_loading_bg_left2.jpg": "T5T57a.jpg",
            "image_loading_bg_right.jpg": "T5T58a.jpg",
            "image_loading_bg_right2.jpg": "T5T59a.jpg",
            "image_loading_bg_top.jpg": "T5T510a.jpg",
            "image_loading_bg_top2.jpg": "T5T511a.jpg",
            "image_loading_bg2.jpg": "T5T512a.jpg",


            "image_loding_bar0.png": "T5T513a.png",
            "image_loding_bar1.png": "T5T514a.png",
            "image_loding_bar02.png": "T5T515a.png",
            "image_loding_bar2.png": "T5T516a.png",
            "image_loding_bar3.png": "T5T517a.png",
            "image_login_point1.png": "T5T518a.png",
            "image_login_point2.png":"T5T519a.png",
            "image_login_point3.png": "T5T520a.png",


            "image_xuanqu_ztjb0.png": "T5T5199b.png",
            "image_denglu_txtshenpi.png": "T5T51b.png",
            "shenhezizi.png": "T5T5123b.png",
            "image_login_loginbg.jpg": "T5T52b.jpg",
            "image_login_loginbg_bottom.jpg": "T5T53b.jpg",
            "image_login_loginbg_left.jpg": "T5T54b.jpg",
            "image_login_loginbg_right.jpg": "T5T55b.jpg",
            "image_login_loginbg_top.jpg": "T5T56b.jpg",
            "image_login_logo.png": "T5T57b.png",
            "image_login_notice.png": "T5T58b.png",
            "image_xuanfu_xfbg.png": "T5T59b.png",

            "btn_com_chuangback.png": "T5T510b.png",
            "btn_login_gonggao.png": "T5T511b.png",
            "btn_login_loginanniu.png": "T5T512b.png",
            "btn_login_yingsi.png": "T5T513b.png",
            "btn_xuanqu_anniuhuang.png": "T5T514b.png",
            "btn_xuanqu_anniulan.png": "T5T515b.png",
            "btn_xuanqu_quanniu.png": "T5T516b.png",
            "image_com_tuichu.png": "T5T517b.png",
            "image_login_changtong.png": "T5T518b.png",
            "image_login_fanmang.png": "T5T519b.png",
            "image_login_weihu.png": "T5T520b.png",
            "image_login_xuanqubg.png": "T5T521b.png",
            "image_login_init.png": "T5T522b.png",
            "btn_com_chuangback1.png": "T5T523b.png",
            "btn_com_long0.png":"T5T524b.png",
            "btn_com_long1.png":"T5T525b.png",
            "image_login_notice1.png":"T5T526b.png",
            "image_loding_txtbhcc.png":"T5T527b.png",
            "image_xuanfu_gx0.png": "T5T528b.png",
            "image_xuanfu_gx1.png": "T5T529b.png",

            "0.png": "T5T51c.png",
            "1.png": "T5T52c.png",
            "2.png": "T5T53c.png",
            "3.png": "T5T54c.png",
            "4.png": "T5T55c.png",

        }
        strFilePath = "/BCes";
        strFileName = "/BCiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$B", "B", "c", "B1", "B"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex =520000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "2_SNLUABDIMK$Y5CQJH8OGXZ901EP6WT37R4FV";
        str_leading2 = "om1j5rf83wa2iepguns7h69kbz4lvy0$tcx_dq";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_4', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_4())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_4', function (cb) {
    sequence("set-param-Z_4","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

/**-------------------------------------------------微信小游戏--Z5包 9130vs掌上-我和我的影子 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z5包 诗淇-主宰领域 start-----------------------------------------------------------*/


/**Z_5包参数*/
var set_param_Z_5 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_5/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_5';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'C$';
        sourceProject = "wx_build/jg_gameZ_5_new";
        targetProject = "wx_build/jg_gameZ_5_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "d222Md22Id222.js";
        libsMainJs = "d222Gd22MEd222.js";
        packageName1 = "d222Id222";
        packageName2 = "d222pftd222";
        packageName3 = "d22d22d22d22d22";
        var clinetPbName = "d22d22IENd22d22.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/d22INDd22d22.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/d22d22INId22ad22.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/d22d22DOd22d22.js"},
            "libs/dom_parser.js":  {url:packageName1+"/d22d22parsad22.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/d22d22Mtadd22d22.js"},
            "libs/libs.min.js":  {url:packageName1+"/d22d22Id221d22d22.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/d22d22bfd22d22.js"},
            "libs/sax.js":  {url:packageName1+"/d22d22cd22d22.js"},
            "libs/weapp-adapter.js":  {url:"xv2/d22d22E4d22d22.js"},
            "libs/zlib.js":  {url:packageName1+"/d22d2211d22d22.js"},
            "wxsdk":  {url:"d22d22basdd22"},
            "wxsdk/wx_aksdk.js":  {url:"d22d22basdd22/d225sdkd22.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"d22d22basdd22/a5sshd22d22.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/d22d22Fd22d22.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "untils/ddtSDKPlat.js":  {url:"untils/ddtSDKPlat.js",extractStr:false,count:1,strLen:3},
            "wxloading_atlas": {url:"d22d22dd22"},
            "wxlogin_atlas": {url:"d22d22lgrd22d22"},
            "wxeff_btn_atlas":{url:"d22yd22"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"d22d22dd22/d22d221a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"d22d22dd22/d22d222a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"d22d22dd22/d22d223a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"d22d22dd22/d22d224a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"d22d22dd22/d22d225a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"d22d22dd22/d22d226a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"d22d22dd22/d22d227a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"d22d22dd22/d22d228a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"d22d22dd22/d22d229a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"d22d22dd22/d22d2210a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"d22d22dd22/d22d2211a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"d22d22dd22/d22d2212a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"d22d22dd22/d22d2213a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"d22d22dd22/d22d2214a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"d22d22dd22/d22d2215a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"d22d22dd22/d22d2216a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"d22d22dd22/d22d2217a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"d22d22dd22/d22d2218a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"d22d22dd22/d22d2219a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"d22d22dd22/d22d2220a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"d22d22lgrd22d22/d22d22199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"d22d22lgrd22d22/d22d221b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"d22d22lgrd22d22/d22d22123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"d22d22lgrd22d22/d22d222b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"d22d22lgrd22d22/d22d223b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"d22d22lgrd22d22/d22d224b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"d22d22lgrd22d22/d22d225b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"d22d22lgrd22d22/d22d226b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"d22d22lgrd22d22/d22d227b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"d22d22lgrd22d22/d22d228b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"d22d22lgrd22d22/d22d229b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"d22d22lgrd22d22/d22d2210b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"d22d22lgrd22d22/d22d2211b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"d22d22lgrd22d22/d22d2212b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"d22d22lgrd22d22/d22d2213b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"d22d22lgrd22d22/d22d2214b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"d22d22lgrd22d22/d22d2215b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"d22d22lgrd22d22/d22d2216b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"d22d22lgrd22d22/d22d2217b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"d22d22lgrd22d22/d22d2218b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"d22d22lgrd22d22/d22d2219b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"d22d22lgrd22d22/d22d2220b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"d22d22lgrd22d22/d22d2221b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"d22d22lgrd22d22/d22d2222b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"d22d22lgrd22d22/d22d2223b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"d22d22lgrd22d22/d22d2224b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"d22d22lgrd22d22/d22d2225b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"d22d22lgrd22d22/d22d2226b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"d22d22lgrd22d22/d22d2227b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"d22d22lgrd22d22/d22d2228b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"d22d22lgrd22d22/d22d2229b.png"},

            "wxeff_btn_atlas/0.png": {url:"d22yd22/d22d221c.png"},
            "wxeff_btn_atlas/1.png": {url:"d22yd22/d22d222c.png"},
            "wxeff_btn_atlas/2.png": {url:"d22yd22/d22d223c.png"},
            "wxeff_btn_atlas/3.png": {url:"d22yd22/d22d224c.png"},
            "wxeff_btn_atlas/4.png": {url:"d22yd22/d22d225c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshd22d22",
            "./sax": "./d22d22cd22d22",
            "./dom": "./d22d22DOd22d22",
            "client_pb.js": clinetPbName,
            "protobuf.js": "d22d22Fd22d22.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "d22d22lgrd22d22",
            "wxeff_btn_atlas": "d22yd22",
            "wxloading_atlas": "d22d22dd22",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "d22d221a.png",
            "btn_loding_abcelq1.png": "d22d222a.png",
            "image_loading_bg.jpg": "d22d223a.jpg",
            "image_loading_bg_bottom.jpg": "d22d224a.jpg",
            "image_loading_bg_bottom2.jpg": "d22d225a.jpg",
            "image_loading_bg_left.jpg": "d22d226a.jpg",
            "image_loading_bg_left2.jpg": "d22d227a.jpg",
            "image_loading_bg_right.jpg": "d22d228a.jpg",
            "image_loading_bg_right2.jpg": "d22d229a.jpg",
            "image_loading_bg_top.jpg": "d22d2210a.jpg",
            "image_loading_bg_top2.jpg": "d22d2211a.jpg",
            "image_loading_bg2.jpg": "d22d2212a.jpg",


            "image_loding_bar0.png": "d22d2213a.png",
            "image_loding_bar1.png": "d22d2214a.png",
            "image_loding_bar02.png": "d22d2215a.png",
            "image_loding_bar2.png": "d22d2216a.png",
            "image_loding_bar3.png": "d22d2217a.png",
            "image_login_point1.png": "d22d2218a.png",
            "image_login_point2.png":"d22d2219a.png",
            "image_login_point3.png": "d22d2220a.png",


            "image_xuanqu_ztjb0.png": "d22d22199b.png",
            "image_denglu_txtshenpi.png": "d22d221b.png",
            "shenhezizi.png": "d22d22123b.png",
            "image_login_loginbg.jpg": "d22d222b.jpg",
            "image_login_loginbg_bottom.jpg": "d22d223b.jpg",
            "image_login_loginbg_left.jpg": "d22d224b.jpg",
            "image_login_loginbg_right.jpg": "d22d225b.jpg",
            "image_login_loginbg_top.jpg": "d22d226b.jpg",
            "image_login_logo.png": "d22d227b.png",
            "image_login_notice.png": "d22d228b.png",
            "image_xuanfu_xfbg.png": "d22d229b.png",

            "btn_com_chuangback.png": "d22d2210b.png",
            "btn_login_gonggao.png": "d22d2211b.png",
            "btn_login_loginanniu.png": "d22d2212b.png",
            "btn_login_yingsi.png": "d22d2213b.png",
            "btn_xuanqu_anniuhuang.png": "d22d2214b.png",
            "btn_xuanqu_anniulan.png": "d22d2215b.png",
            "btn_xuanqu_quanniu.png": "d22d2216b.png",
            "image_com_tuichu.png": "d22d2217b.png",
            "image_login_changtong.png": "d22d2218b.png",
            "image_login_fanmang.png": "d22d2219b.png",
            "image_login_weihu.png": "d22d2220b.png",
            "image_login_xuanqubg.png": "d22d2221b.png",
            "image_login_init.png": "d22d2222b.png",
            "btn_com_chuangback1.png": "d22d2223b.png",
            "btn_com_long0.png":"d22d2224b.png",
            "btn_com_long1.png":"d22d2225b.png",
            "image_login_notice1.png":"d22d2226b.png",
            "image_loding_txtbhcc.png":"d22d2227b.png",
            "image_xuanfu_gx0.png": "d22d2228b.png",
            "image_xuanfu_gx1.png": "d22d2229b.png",

            "0.png": "d22d221c.png",
            "1.png": "d22d222c.png",
            "2.png": "d22d223c.png",
            "3.png": "d22d224c.png",
            "4.png": "d22d225c.png",

        }
        strFilePath = "/SDFDCes";
        strFileName = "/SAFACiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$D", "F", "d", "D1", "D"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 560000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "WIX24NLDGA3PR61M8$0TJBOYHUVFC7ESK95_QZ";
        str_leading2 = "y$8n1h2rzi_lom5dgajx6kwqvtse0c3upb9f74";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_5', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_5())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_5', function (cb) {
    sequence("set-param-Z_5","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_5_minify', function (cb) {
    sequence("set-param-Z_5","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--Z5包 诗淇-主宰领域 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z6 天剑vs千禧--天命传说 start-----------------------------------------------------------*/


/**Z_6包参数*/
var set_param_Z_6 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_6/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_6';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'C$';
        sourceProject = "wx_build/jg_gameZ_6_new";
        targetProject = "wx_build/jg_gameZ_6_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "DD882MDD88IDD882.js";
        libsMainJs = "DD882GDD88MEDD882.js";
        packageName1 = "DD882IDD882";
        packageName2 = "DD882pftDD882";
        packageName3 = "DD88DD88DD88DD88DD88";
        var clinetPbName = "DD88DD88IENDD88DD88.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/DD88INDDD88DD88.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/DD88DD88INIDD88aDD88.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/DD88DD88DODD88DD88.js"},
            "libs/dom_parser.js":  {url:packageName1+"/DD88DD88parsaDD88.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/DD88DD88MtadDD88DD88.js"},
            "libs/libs.min.js":  {url:packageName1+"/DD88DD88IDD881DD88DD88.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/DD88DD88bfDD88DD88.js"},
            "libs/sax.js":  {url:packageName1+"/DD88DD88cDD88DD88.js"},
            "libs/weapp-adapter.js":  {url:"xv2/DD88DD88E4DD88DD88.js"},
            "libs/zlib.js":  {url:packageName1+"/DD88DD8811DD88DD88.js"},
            "wxsdk":  {url:"DD88DD88basdDD88"},
            "wxsdk/wx_aksdk.js":  {url:"DD88DD88basdDD88/DD885sdkDD88.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"DD88DD88basdDD88/a5sshDD88DD88.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/DD88DD88FDD88DD88.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            "utils/qxMiniSDK.js":{url:"utils/qxMiniSDK.js",addGlobleKeys0:false,extractStr:false},
            "wxloading_atlas": {url:"DD88DD88dDD88"},
            "wxlogin_atlas": {url:"DD88DD88lgrDD88DD88"},

            "wxeff_btn_atlas":{url:"DD88yDD88"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"DD88DD88dDD88/DD88DD881a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"DD88DD88dDD88/DD88DD882a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"DD88DD88dDD88/DD88DD883a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"DD88DD88dDD88/DD88DD884a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"DD88DD88dDD88/DD88DD885a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"DD88DD88dDD88/DD88DD886a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"DD88DD88dDD88/DD88DD887a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"DD88DD88dDD88/DD88DD888a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"DD88DD88dDD88/DD88DD889a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"DD88DD88dDD88/DD88DD8810a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"DD88DD88dDD88/DD88DD8811a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"DD88DD88dDD88/DD88DD8812a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"DD88DD88dDD88/DD88DD8813a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"DD88DD88dDD88/DD88DD8814a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"DD88DD88dDD88/DD88DD8815a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"DD88DD88dDD88/DD88DD8816a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"DD88DD88dDD88/DD88DD8817a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"DD88DD88dDD88/DD88DD8818a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"DD88DD88dDD88/DD88DD8819a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"DD88DD88dDD88/DD88DD8820a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"DD88DD88lgrDD88DD88/DD88DD88199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"DD88DD88lgrDD88DD88/DD88DD881b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"DD88DD88lgrDD88DD88/DD88DD88123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"DD88DD88lgrDD88DD88/DD88DD882b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"DD88DD88lgrDD88DD88/DD88DD883b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"DD88DD88lgrDD88DD88/DD88DD884b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"DD88DD88lgrDD88DD88/DD88DD885b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"DD88DD88lgrDD88DD88/DD88DD886b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"DD88DD88lgrDD88DD88/DD88DD887b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"DD88DD88lgrDD88DD88/DD88DD888b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"DD88DD88lgrDD88DD88/DD88DD889b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"DD88DD88lgrDD88DD88/DD88DD8810b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"DD88DD88lgrDD88DD88/DD88DD8811b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"DD88DD88lgrDD88DD88/DD88DD8812b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"DD88DD88lgrDD88DD88/DD88DD8813b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"DD88DD88lgrDD88DD88/DD88DD8814b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"DD88DD88lgrDD88DD88/DD88DD8815b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"DD88DD88lgrDD88DD88/DD88DD8816b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"DD88DD88lgrDD88DD88/DD88DD8817b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"DD88DD88lgrDD88DD88/DD88DD8818b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"DD88DD88lgrDD88DD88/DD88DD8819b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"DD88DD88lgrDD88DD88/DD88DD8820b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"DD88DD88lgrDD88DD88/DD88DD8821b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"DD88DD88lgrDD88DD88/DD88DD8822b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"DD88DD88lgrDD88DD88/DD88DD8823b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"DD88DD88lgrDD88DD88/DD88DD8824b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"DD88DD88lgrDD88DD88/DD88DD8825b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"DD88DD88lgrDD88DD88/DD88DD8826b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"DD88DD88lgrDD88DD88/DD88DD8827b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"DD88DD88lgrDD88DD88/DD88DD8828b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"DD88DD88lgrDD88DD88/DD88DD8829b.png"},

            "wxeff_btn_atlas/0.png": {url:"DD88yDD88/DD88DD881c.png"},
            "wxeff_btn_atlas/1.png": {url:"DD88yDD88/DD88DD882c.png"},
            "wxeff_btn_atlas/2.png": {url:"DD88yDD88/DD88DD883c.png"},
            "wxeff_btn_atlas/3.png": {url:"DD88yDD88/DD88DD884c.png"},
            "wxeff_btn_atlas/4.png": {url:"DD88yDD88/DD88DD885c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshDD88DD88",
            "./sax": "./DD88DD88cDD88DD88",
            "./dom": "./DD88DD88DODD88DD88",
            "client_pb.js": clinetPbName,
            "protobuf.js": "DD88DD88FDD88DD88.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "DD88DD88lgrDD88DD88",
            "wxeff_btn_atlas": "DD88yDD88",
            "wxloading_atlas": "DD88DD88dDD88",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "DD88DD881a.png",
            "btn_loding_abcelq1.png": "DD88DD882a.png",
            "image_loading_bg.jpg": "DD88DD883a.jpg",
            "image_loading_bg_bottom.jpg": "DD88DD884a.jpg",
            "image_loading_bg_bottom2.jpg": "DD88DD885a.jpg",
            "image_loading_bg_left.jpg": "DD88DD886a.jpg",
            "image_loading_bg_left2.jpg": "DD88DD887a.jpg",
            "image_loading_bg_right.jpg": "DD88DD888a.jpg",
            "image_loading_bg_right2.jpg": "DD88DD889a.jpg",
            "image_loading_bg_top.jpg": "DD88DD8810a.jpg",
            "image_loading_bg_top2.jpg": "DD88DD8811a.jpg",
            "image_loading_bg2.jpg": "DD88DD8812a.jpg",


            "image_loding_bar0.png": "DD88DD8813a.png",
            "image_loding_bar1.png": "DD88DD8814a.png",
            "image_loding_bar02.png": "DD88DD8815a.png",
            "image_loding_bar2.png": "DD88DD8816a.png",
            "image_loding_bar3.png": "DD88DD8817a.png",
            "image_login_point1.png": "DD88DD8818a.png",
            "image_login_point2.png":"DD88DD8819a.png",
            "image_login_point3.png": "DD88DD8820a.png",


            "image_xuanqu_ztjb0.png": "DD88DD88199b.png",
            "image_denglu_txtshenpi.png": "DD88DD881b.png",
            "shenhezizi.png": "DD88DD88123b.png",
            "image_login_loginbg.jpg": "DD88DD882b.jpg",
            "image_login_loginbg_bottom.jpg": "DD88DD883b.jpg",
            "image_login_loginbg_left.jpg": "DD88DD884b.jpg",
            "image_login_loginbg_right.jpg": "DD88DD885b.jpg",
            "image_login_loginbg_top.jpg": "DD88DD886b.jpg",
            "image_login_logo.png": "DD88DD887b.png",
            "image_login_notice.png": "DD88DD888b.png",
            "image_xuanfu_xfbg.png": "DD88DD889b.png",

            "btn_com_chuangback.png": "DD88DD8810b.png",
            "btn_login_gonggao.png": "DD88DD8811b.png",
            "btn_login_loginanniu.png": "DD88DD8812b.png",
            "btn_login_yingsi.png": "DD88DD8813b.png",
            "btn_xuanqu_anniuhuang.png": "DD88DD8814b.png",
            "btn_xuanqu_anniulan.png": "DD88DD8815b.png",
            "btn_xuanqu_quanniu.png": "DD88DD8816b.png",
            "image_com_tuichu.png": "DD88DD8817b.png",
            "image_login_changtong.png": "DD88DD8818b.png",
            "image_login_fanmang.png": "DD88DD8819b.png",
            "image_login_weihu.png": "DD88DD8820b.png",
            "image_login_xuanqubg.png": "DD88DD8821b.png",
            "image_login_init.png": "DD88DD8822b.png",
            "btn_com_chuangback1.png": "DD88DD8823b.png",
            "btn_com_long0.png":"DD88DD8824b.png",
            "btn_com_long1.png":"DD88DD8825b.png",
            "image_login_notice1.png":"DD88DD8826b.png",
            "image_loding_txtbhcc.png":"DD88DD8827b.png",
            "image_xuanfu_gx0.png": "DD88DD8828b.png",
            "image_xuanfu_gx1.png": "DD88DD8829b.png",

            "0.png": "DD88DD881c.png",
            "1.png": "DD88DD882c.png",
            "2.png": "DD88DD883c.png",
            "3.png": "DD88DD884c.png",
            "4.png": "DD88DD885c.png",

        }
        strFilePath = "/Z6es";
        strFileName = "/Z6iles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$E", "G", "e", "E1", "E"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 580000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "CD6R_3TWJBL$KPMZ985NOQ1IVUGYHFS24EA07X";
        str_leading2 = "oxlnypgh9uaqrvw8f7mb4c$k65jdi1e_ts230z";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_6', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_6())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_6', function (cb) {
    sequence("set-param-Z_6","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_6_minify', function (cb) {
    sequence("set-param-Z_6","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z6包 天剑vs千禧--天命传说 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z7 9130vs盛也-逆神h5 start-----------------------------------------------------------*/


/**Z_7包参数*/
var set_param_Z_7 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_7/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_7';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'E$';
        sourceProject = "wx_build/jg_gameZ_7_new";
        targetProject = "wx_build/jg_gameZ_7_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "zh442Mzh44Izh442.js";
        libsMainJs = "zh442Gzh44MEzh442.js";
        packageName1 = "zh442Izh442";
        packageName2 = "zh442pftzh442";
        packageName3 = "zh44zh44zh44zh44zh44";
        var clinetPbName = "zh44zh44IENzh44zh44.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/zh44INDzh44zh44.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/zh44zh44INIzh44azh44.js",extractStr:true,count:1,strLen:2,replace:true},
            "libs/dom.js":  {url:packageName1+"/zh44zh44DOzh44zh44.js",extractStr:true,count:2,strLen:3},
            "libs/dom_parser.js":  {url:packageName1+"/zh44zh44parsazh44.js",extractStr:true,count:2,strLen:3},
            "libs/laya.wxmini.js":  {url:packageName1+"/zh44zh44Mtadzh44zh44.js",extractStr:true,count:2,strLen:3},
            "libs/libs.min.js":  {url:packageName1+"/zh44zh44Izh441zh44zh44.js",extractStr:true,count:1,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/zh44zh44bfzh44zh44.js",extractStr:true,count:2,strLen:3},
            "libs/sax.js":  {url:packageName1+"/zh44zh44czh44zh44.js",extractStr:true,count:2,strLen:3},
            "libs/weapp-adapter.js":  {url:"xv2/zh44zh44E4zh44zh44.js",extractStr:false,count:2,strLen:3},
            "libs/zlib.js":  {url:packageName1+"/zh44zh4411zh44zh44.js",extractStr:true,count:2,strLen:3},
            "wxsdk":  {url:"zh44zh44basdzh44"},
            "wxsdk/wx_aksdk.js":  {url:"zh44zh44basdzh44/zh445sdkzh44.js",extractStr:true,count:1,strLen:2},
            "wxsdk/helper.js":  {url:"zh44zh44basdzh44/a5sshzh44zh44.js",extractStr:true,count:1,strLen:2},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:1,strLen:1},
            "protobuf/protobuf.js":  {url: packageName2 + "/zh44zh44Fzh44zh44.js",extractStr:true,count:1,strLen:1},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:2,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:2},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:2},
            "SyMiniTool.js":  {url:packageName1+"/SyMiniTool.js",extractStr:false,count:1,strLen:2},
            "wxloading_atlas": {url:"zh44zh44dzh44"},
            "wxlogin_atlas": {url:"zh44zh44lgrzh44zh44"},
            "wxeff_btn_atlas":{url:"zh44yzh44"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"zh44zh44dzh44/zh44zh441a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"zh44zh44dzh44/zh44zh442a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"zh44zh44dzh44/zh44zh443a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"zh44zh44dzh44/zh44zh444a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"zh44zh44dzh44/zh44zh445a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"zh44zh44dzh44/zh44zh446a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"zh44zh44dzh44/zh44zh447a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"zh44zh44dzh44/zh44zh448a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"zh44zh44dzh44/zh44zh449a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"zh44zh44dzh44/zh44zh4410a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"zh44zh44dzh44/zh44zh4411a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"zh44zh44dzh44/zh44zh4412a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"zh44zh44dzh44/zh44zh4413a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"zh44zh44dzh44/zh44zh4414a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"zh44zh44dzh44/zh44zh4415a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"zh44zh44dzh44/zh44zh4416a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"zh44zh44dzh44/zh44zh4417a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"zh44zh44dzh44/zh44zh4418a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"zh44zh44dzh44/zh44zh4419a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"zh44zh44dzh44/zh44zh4420a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"zh44zh44lgrzh44zh44/zh44zh44199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"zh44zh44lgrzh44zh44/zh44zh441b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"zh44zh44lgrzh44zh44/zh44zh44123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"zh44zh44lgrzh44zh44/zh44zh442b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"zh44zh44lgrzh44zh44/zh44zh443b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"zh44zh44lgrzh44zh44/zh44zh444b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"zh44zh44lgrzh44zh44/zh44zh445b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"zh44zh44lgrzh44zh44/zh44zh446b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"zh44zh44lgrzh44zh44/zh44zh447b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"zh44zh44lgrzh44zh44/zh44zh448b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"zh44zh44lgrzh44zh44/zh44zh449b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"zh44zh44lgrzh44zh44/zh44zh4410b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"zh44zh44lgrzh44zh44/zh44zh4411b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"zh44zh44lgrzh44zh44/zh44zh4412b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"zh44zh44lgrzh44zh44/zh44zh4413b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"zh44zh44lgrzh44zh44/zh44zh4414b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"zh44zh44lgrzh44zh44/zh44zh4415b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"zh44zh44lgrzh44zh44/zh44zh4416b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"zh44zh44lgrzh44zh44/zh44zh4417b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"zh44zh44lgrzh44zh44/zh44zh4418b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"zh44zh44lgrzh44zh44/zh44zh4419b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"zh44zh44lgrzh44zh44/zh44zh4420b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"zh44zh44lgrzh44zh44/zh44zh4421b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"zh44zh44lgrzh44zh44/zh44zh4422b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"zh44zh44lgrzh44zh44/zh44zh4423b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"zh44zh44lgrzh44zh44/zh44zh4424b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"zh44zh44lgrzh44zh44/zh44zh4425b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"zh44zh44lgrzh44zh44/zh44zh4426b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"zh44zh44lgrzh44zh44/zh44zh4427b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"zh44zh44lgrzh44zh44/zh44zh4428b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"zh44zh44lgrzh44zh44/zh44zh4429b.png"},

            "wxeff_btn_atlas/0.png": {url:"zh44yzh44/zh44zh441c.png"},
            "wxeff_btn_atlas/1.png": {url:"zh44yzh44/zh44zh442c.png"},
            "wxeff_btn_atlas/2.png": {url:"zh44yzh44/zh44zh443c.png"},
            "wxeff_btn_atlas/3.png": {url:"zh44yzh44/zh44zh444c.png"},
            "wxeff_btn_atlas/4.png": {url:"zh44yzh44/zh44zh445c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshzh44zh44",
            "./sax": "./zh44zh44czh44zh44",
            "./dom": "./zh44zh44DOzh44zh44",
            "client_pb.js": clinetPbName,
            "protobuf.js": "zh44zh44Fzh44zh44.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "zh44zh44lgrzh44zh44",
            "wxeff_btn_atlas": "zh44yzh44",
            "wxloading_atlas": "zh44zh44dzh44",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "zh44zh441a.png",
            "btn_loding_abcelq1.png": "zh44zh442a.png",
            "image_loading_bg.jpg": "zh44zh443a.jpg",
            "image_loading_bg_bottom.jpg": "zh44zh444a.jpg",
            "image_loading_bg_bottom2.jpg": "zh44zh445a.jpg",
            "image_loading_bg_left.jpg": "zh44zh446a.jpg",
            "image_loading_bg_left2.jpg": "zh44zh447a.jpg",
            "image_loading_bg_right.jpg": "zh44zh448a.jpg",
            "image_loading_bg_right2.jpg": "zh44zh449a.jpg",
            "image_loading_bg_top.jpg": "zh44zh4410a.jpg",
            "image_loading_bg_top2.jpg": "zh44zh4411a.jpg",
            "image_loading_bg2.jpg": "zh44zh4412a.jpg",


            "image_loding_bar0.png": "zh44zh4413a.png",
            "image_loding_bar1.png": "zh44zh4414a.png",
            "image_loding_bar02.png": "zh44zh4415a.png",
            "image_loding_bar2.png": "zh44zh4416a.png",
            "image_loding_bar3.png": "zh44zh4417a.png",
            "image_login_point1.png": "zh44zh4418a.png",
            "image_login_point2.png":"zh44zh4419a.png",
            "image_login_point3.png": "zh44zh4420a.png",


            "image_xuanqu_ztjb0.png": "zh44zh44199b.png",
            "image_denglu_txtshenpi.png": "zh44zh441b.png",
            "shenhezizi.png": "zh44zh44123b.png",
            "image_login_loginbg.jpg": "zh44zh442b.jpg",
            "image_login_loginbg_bottom.jpg": "zh44zh443b.jpg",
            "image_login_loginbg_left.jpg": "zh44zh444b.jpg",
            "image_login_loginbg_right.jpg": "zh44zh445b.jpg",
            "image_login_loginbg_top.jpg": "zh44zh446b.jpg",
            "image_login_logo.png": "zh44zh447b.png",
            "image_login_notice.png": "zh44zh448b.png",
            "image_xuanfu_xfbg.png": "zh44zh449b.png",

            "btn_com_chuangback.png": "zh44zh4410b.png",
            "btn_login_gonggao.png": "zh44zh4411b.png",
            "btn_login_loginanniu.png": "zh44zh4412b.png",
            "btn_login_yingsi.png": "zh44zh4413b.png",
            "btn_xuanqu_anniuhuang.png": "zh44zh4414b.png",
            "btn_xuanqu_anniulan.png": "zh44zh4415b.png",
            "btn_xuanqu_quanniu.png": "zh44zh4416b.png",
            "image_com_tuichu.png": "zh44zh4417b.png",
            "image_login_changtong.png": "zh44zh4418b.png",
            "image_login_fanmang.png": "zh44zh4419b.png",
            "image_login_weihu.png": "zh44zh4420b.png",
            "image_login_xuanqubg.png": "zh44zh4421b.png",
            "image_login_init.png": "zh44zh4422b.png",
            "btn_com_chuangback1.png": "zh44zh4423b.png",
            "btn_com_long0.png":"zh44zh4424b.png",
            "btn_com_long1.png":"zh44zh4425b.png",
            "image_login_notice1.png":"zh44zh4426b.png",
            "image_loding_txtbhcc.png":"zh44zh4427b.png",
            "image_xuanfu_gx0.png": "zh44zh4428b.png",
            "image_xuanfu_gx1.png": "zh44zh4429b.png",

            "0.png": "zh44zh441c.png",
            "1.png": "zh44zh442c.png",
            "2.png": "zh44zh443c.png",
            "3.png": "zh44zh444c.png",
            "4.png": "zh44zh445c.png",

        }
        strFilePath = "/Z7es";
        strFileName = "/Z7iles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$F", "E", "z", "h", "f"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "ETODZMS3AKU0YVQ8F2WIH67$L91BJXN5R_PGC4";
        str_leading2 = "rsbe2duql_5xj1$6vw8mf0zyo3na9pic74tkgh";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_7', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_7())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_7', function (cb) {
    sequence("set-param-Z_7","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_7_minify', function (cb) {
    sequence("set-param-Z_7","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--Z7包 9130vs盛也-逆神h5 end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--Z8 9130vs火速-九州修仙记 start-----------------------------------------------------------*/


/**Z_8包参数*/
var set_param_Z_8 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_8/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_8';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'F$';
        sourceProject = "wx_build/jg_gameZ_8_new";
        targetProject = "wx_build/jg_gameZ_8_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "z8882Mz888Iz8882.js";
        libsMainJs = "z8882Gz888MEz8882.js";
        packageName1 = "z8882Iz8882";
        packageName2 = "z8882pftz8882";
        packageName3 = "z888z888z888z888z888";
        var clinetPbName = "z888z888IENz888z888.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/z888INDz888z888.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/z888z888INIz888az888.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/z888z888DOz888z888.js"},
            "libs/dom_parser.js":  {url:packageName1+"/z888z888parsaz888.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/z888z888Mtadz888z888.js"},
            "libs/libs.min.js":  {url:packageName1+"/z888z888Iz8881z888z888.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/z888z888bfz888z888.js"},
            "libs/sax.js":  {url:packageName1+"/z888z888cz888z888.js"},
            "libs/weapp-adapter.js":  {url:"xv2/z888z888E4z888z888.js"},
            "libs/zlib.js":  {url:packageName1+"/z888z88811z888z888.js"},
            "wxsdk":  {url:"z888z888basdz888"},
            "wxsdk/wx_aksdk.js":  {url:"z888z888basdz888/z8885sdkz888.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"z888z888basdz888/a5sshz888z888.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/z888z888Fz888z888.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            // "untils/ddtSDKPlat.js":  {url:"untils/ddtSDKPlat.js",extractStr:false,count:1,strLen:3},
            "wxloading_atlas": {url:"z888z888dz888"},
            "wxlogin_atlas": {url:"z888z888lgrz888z888"},
            "wxeff_btn_atlas":{url:"z888yz888"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"z888z888dz888/z888z8881a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"z888z888dz888/z888z8882a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"z888z888dz888/z888z8883a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"z888z888dz888/z888z8884a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"z888z888dz888/z888z8885a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"z888z888dz888/z888z8886a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"z888z888dz888/z888z8887a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"z888z888dz888/z888z8888a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"z888z888dz888/z888z8889a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"z888z888dz888/z888z88810a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"z888z888dz888/z888z88811a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"z888z888dz888/z888z88812a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"z888z888dz888/z888z88813a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"z888z888dz888/z888z88814a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"z888z888dz888/z888z88815a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"z888z888dz888/z888z88816a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"z888z888dz888/z888z88817a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"z888z888dz888/z888z88818a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"z888z888dz888/z888z88819a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"z888z888dz888/z888z88820a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"z888z888lgrz888z888/z888z888199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"z888z888lgrz888z888/z888z8881b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"z888z888lgrz888z888/z888z888123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"z888z888lgrz888z888/z888z8882b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"z888z888lgrz888z888/z888z8883b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"z888z888lgrz888z888/z888z8884b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"z888z888lgrz888z888/z888z8885b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"z888z888lgrz888z888/z888z8886b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"z888z888lgrz888z888/z888z8887b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"z888z888lgrz888z888/z888z8888b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"z888z888lgrz888z888/z888z8889b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"z888z888lgrz888z888/z888z88810b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"z888z888lgrz888z888/z888z88811b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"z888z888lgrz888z888/z888z88812b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"z888z888lgrz888z888/z888z88813b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"z888z888lgrz888z888/z888z88814b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"z888z888lgrz888z888/z888z88815b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"z888z888lgrz888z888/z888z88816b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"z888z888lgrz888z888/z888z88817b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"z888z888lgrz888z888/z888z88818b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"z888z888lgrz888z888/z888z88819b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"z888z888lgrz888z888/z888z88820b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"z888z888lgrz888z888/z888z88821b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"z888z888lgrz888z888/z888z88822b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"z888z888lgrz888z888/z888z88823b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"z888z888lgrz888z888/z888z88824b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"z888z888lgrz888z888/z888z88825b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"z888z888lgrz888z888/z888z88826b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"z888z888lgrz888z888/z888z88827b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"z888z888lgrz888z888/z888z88828b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"z888z888lgrz888z888/z888z88829b.png"},

            "wxeff_btn_atlas/0.png": {url:"z888yz888/z888z8881c.png"},
            "wxeff_btn_atlas/1.png": {url:"z888yz888/z888z8882c.png"},
            "wxeff_btn_atlas/2.png": {url:"z888yz888/z888z8883c.png"},
            "wxeff_btn_atlas/3.png": {url:"z888yz888/z888z8884c.png"},
            "wxeff_btn_atlas/4.png": {url:"z888yz888/z888z8885c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshz888z888",
            "./sax": "./z888z888cz888z888",
            "./dom": "./z888z888DOz888z888",
            "client_pb.js": clinetPbName,
            "protobuf.js": "z888z888Fz888z888.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "z888z888lgrz888z888",
            "wxeff_btn_atlas": "z888yz888",
            "wxloading_atlas": "z888z888dz888",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "z888z8881a.png",
            "btn_loding_abcelq1.png": "z888z8882a.png",
            "image_loading_bg.jpg": "z888z8883a.jpg",
            "image_loading_bg_bottom.jpg": "z888z8884a.jpg",
            "image_loading_bg_bottom2.jpg": "z888z8885a.jpg",
            "image_loading_bg_left.jpg": "z888z8886a.jpg",
            "image_loading_bg_left2.jpg": "z888z8887a.jpg",
            "image_loading_bg_right.jpg": "z888z8888a.jpg",
            "image_loading_bg_right2.jpg": "z888z8889a.jpg",
            "image_loading_bg_top.jpg": "z888z88810a.jpg",
            "image_loading_bg_top2.jpg": "z888z88811a.jpg",
            "image_loading_bg2.jpg": "z888z88812a.jpg",


            "image_loding_bar0.png": "z888z88813a.png",
            "image_loding_bar1.png": "z888z88814a.png",
            "image_loding_bar02.png": "z888z88815a.png",
            "image_loding_bar2.png": "z888z88816a.png",
            "image_loding_bar3.png": "z888z88817a.png",
            "image_login_point1.png": "z888z88818a.png",
            "image_login_point2.png":"z888z88819a.png",
            "image_login_point3.png": "z888z88820a.png",


            "image_xuanqu_ztjb0.png": "z888z888199b.png",
            "image_denglu_txtshenpi.png": "z888z8881b.png",
            "shenhezizi.png": "z888z888123b.png",
            "image_login_loginbg.jpg": "z888z8882b.jpg",
            "image_login_loginbg_bottom.jpg": "z888z8883b.jpg",
            "image_login_loginbg_left.jpg": "z888z8884b.jpg",
            "image_login_loginbg_right.jpg": "z888z8885b.jpg",
            "image_login_loginbg_top.jpg": "z888z8886b.jpg",
            "image_login_logo.png": "z888z8887b.png",
            "image_login_notice.png": "z888z8888b.png",
            "image_xuanfu_xfbg.png": "z888z8889b.png",

            "btn_com_chuangback.png": "z888z88810b.png",
            "btn_login_gonggao.png": "z888z88811b.png",
            "btn_login_loginanniu.png": "z888z88812b.png",
            "btn_login_yingsi.png": "z888z88813b.png",
            "btn_xuanqu_anniuhuang.png": "z888z88814b.png",
            "btn_xuanqu_anniulan.png": "z888z88815b.png",
            "btn_xuanqu_quanniu.png": "z888z88816b.png",
            "image_com_tuichu.png": "z888z88817b.png",
            "image_login_changtong.png": "z888z88818b.png",
            "image_login_fanmang.png": "z888z88819b.png",
            "image_login_weihu.png": "z888z88820b.png",
            "image_login_xuanqubg.png": "z888z88821b.png",
            "image_login_init.png": "z888z88822b.png",
            "btn_com_chuangback1.png": "z888z88823b.png",
            "btn_com_long0.png":"z888z88824b.png",
            "btn_com_long1.png":"z888z88825b.png",
            "image_login_notice1.png":"z888z88826b.png",
            "image_loding_txtbhcc.png":"z888z88827b.png",
            "image_xuanfu_gx0.png": "z888z88828b.png",
            "image_xuanfu_gx1.png": "z888z88829b.png",

            "0.png": "z888z8881c.png",
            "1.png": "z888z8882c.png",
            "2.png": "z888z8883c.png",
            "3.png": "z888z8884c.png",
            "4.png": "z888z8885c.png",

        }
        strFilePath = "/Z8es";
        strFileName = "/Z8iles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$G", "G", "h1", "g", "a"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 620000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "GA608EHV4$1_PMZDUOJTNCFXYRWQ7S529KILB3";
        str_leading2 = "jc2hyixtbnzmsr_$eq38l67vak5f4dou1w0p9g";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_8', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_8())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_8', function (cb) {
    sequence("set-param-Z_8","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});



/**-------------------------------------------------微信小游戏--Z8包 9130vs火速-九州修仙记 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z9 天剑vs墨雪--蜀山御剑仙 start-----------------------------------------------------------*/


/**Z_9包参数*/
var set_param_Z_9 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_9/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_9';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'G$';
        sourceProject = "wx_build/jg_gameZ_9_new";
        targetProject = "wx_build/jg_gameZ_9_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "z9992Mz999Iz9992.js";
        libsMainJs = "z9992Gz999MEz9992.js";
        packageName1 = "z9992Iz9992";
        packageName2 = "z9992pftz9992";
        packageName3 = "z999z999z999z999z999";
        var clinetPbName = "z999z999IENz999z999.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/z999INDz999z999.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/z999z999INIz999az999.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/z999z999DOz999z999.js"},
            "libs/dom_parser.js":  {url:packageName1+"/z999z999parsaz999.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/z999z999Mtadz999z999.js"},
            "libs/libs.min.js":  {url:packageName1+"/z999z999Iz9991z999z999.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/z999z999bfz999z999.js"},
            "libs/sax.js":  {url:packageName1+"/z999z999cz999z999.js"},
            "libs/weapp-adapter.js":  {url:"xv2/z999z999E4z999z999.js"},
            "libs/zlib.js":  {url:packageName1+"/z999z99911z999z999.js"},
            "wxsdk":  {url:"z999z999basdz999"},
            "wxsdk/wx_aksdk.js":  {url:"z999z999basdz999/z9995sdkz999.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"z999z999basdz999/a5sshz999z999.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/z999z999Fz999z999.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            // "untils/ddtSDKPlat.js":  {url:"untils/ddtSDKPlat.js",extractStr:false,count:1,strLen:3},
            "mx.laya.fc.js":  {url:packageName1+"/mx.laya.fc.js",extractStr:false,count:1,strLen:3},
            "wxloading_atlas": {url:"z999z999dz999"},
            "wxlogin_atlas": {url:"z999z999lgrz999z999"},
            "wxeff_btn_atlas":{url:"z999yz999"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"z999z999dz999/z999z9991a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"z999z999dz999/z999z9992a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"z999z999dz999/z999z9993a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"z999z999dz999/z999z9994a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"z999z999dz999/z999z9995a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"z999z999dz999/z999z9996a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"z999z999dz999/z999z9997a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"z999z999dz999/z999z9998a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"z999z999dz999/z999z9999a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"z999z999dz999/z999z99910a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"z999z999dz999/z999z99911a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"z999z999dz999/z999z99912a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"z999z999dz999/z999z99913a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"z999z999dz999/z999z99914a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"z999z999dz999/z999z99915a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"z999z999dz999/z999z99916a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"z999z999dz999/z999z99917a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"z999z999dz999/z999z99918a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"z999z999dz999/z999z99919a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"z999z999dz999/z999z99920a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"z999z999lgrz999z999/z999z999199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"z999z999lgrz999z999/z999z9991b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"z999z999lgrz999z999/z999z999123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"z999z999lgrz999z999/z999z9992b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"z999z999lgrz999z999/z999z9993b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"z999z999lgrz999z999/z999z9994b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"z999z999lgrz999z999/z999z9995b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"z999z999lgrz999z999/z999z9996b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"z999z999lgrz999z999/z999z9997b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"z999z999lgrz999z999/z999z9998b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"z999z999lgrz999z999/z999z9999b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"z999z999lgrz999z999/z999z99910b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"z999z999lgrz999z999/z999z99911b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"z999z999lgrz999z999/z999z99912b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"z999z999lgrz999z999/z999z99913b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"z999z999lgrz999z999/z999z99914b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"z999z999lgrz999z999/z999z99915b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"z999z999lgrz999z999/z999z99916b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"z999z999lgrz999z999/z999z99917b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"z999z999lgrz999z999/z999z99918b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"z999z999lgrz999z999/z999z99919b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"z999z999lgrz999z999/z999z99920b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"z999z999lgrz999z999/z999z99921b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"z999z999lgrz999z999/z999z99922b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"z999z999lgrz999z999/z999z99923b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"z999z999lgrz999z999/z999z99924b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"z999z999lgrz999z999/z999z99925b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"z999z999lgrz999z999/z999z99926b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"z999z999lgrz999z999/z999z99927b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"z999z999lgrz999z999/z999z99928b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"z999z999lgrz999z999/z999z99929b.png"},

            "wxeff_btn_atlas/0.png": {url:"z999yz999/z999z9991c.png"},
            "wxeff_btn_atlas/1.png": {url:"z999yz999/z999z9992c.png"},
            "wxeff_btn_atlas/2.png": {url:"z999yz999/z999z9993c.png"},
            "wxeff_btn_atlas/3.png": {url:"z999yz999/z999z9994c.png"},
            "wxeff_btn_atlas/4.png": {url:"z999yz999/z999z9995c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshz999z999",
            "./sax": "./z999z999cz999z999",
            "./dom": "./z999z999DOz999z999",
            "client_pb.js": clinetPbName,
            "protobuf.js": "z999z999Fz999z999.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "z999z999lgrz999z999",
            "wxeff_btn_atlas": "z999yz999",
            "wxloading_atlas": "z999z999dz999",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "z999z9991a.png",
            "btn_loding_abcelq1.png": "z999z9992a.png",
            "image_loading_bg.jpg": "z999z9993a.jpg",
            "image_loading_bg_bottom.jpg": "z999z9994a.jpg",
            "image_loading_bg_bottom2.jpg": "z999z9995a.jpg",
            "image_loading_bg_left.jpg": "z999z9996a.jpg",
            "image_loading_bg_left2.jpg": "z999z9997a.jpg",
            "image_loading_bg_right.jpg": "z999z9998a.jpg",
            "image_loading_bg_right2.jpg": "z999z9999a.jpg",
            "image_loading_bg_top.jpg": "z999z99910a.jpg",
            "image_loading_bg_top2.jpg": "z999z99911a.jpg",
            "image_loading_bg2.jpg": "z999z99912a.jpg",


            "image_loding_bar0.png": "z999z99913a.png",
            "image_loding_bar1.png": "z999z99914a.png",
            "image_loding_bar02.png": "z999z99915a.png",
            "image_loding_bar2.png": "z999z99916a.png",
            "image_loding_bar3.png": "z999z99917a.png",
            "image_login_point1.png": "z999z99918a.png",
            "image_login_point2.png":"z999z99919a.png",
            "image_login_point3.png": "z999z99920a.png",


            "image_xuanqu_ztjb0.png": "z999z999199b.png",
            "image_denglu_txtshenpi.png": "z999z9991b.png",
            "shenhezizi.png": "z999z999123b.png",
            "image_login_loginbg.jpg": "z999z9992b.jpg",
            "image_login_loginbg_bottom.jpg": "z999z9993b.jpg",
            "image_login_loginbg_left.jpg": "z999z9994b.jpg",
            "image_login_loginbg_right.jpg": "z999z9995b.jpg",
            "image_login_loginbg_top.jpg": "z999z9996b.jpg",
            "image_login_logo.png": "z999z9997b.png",
            "image_login_notice.png": "z999z9998b.png",
            "image_xuanfu_xfbg.png": "z999z9999b.png",

            "btn_com_chuangback.png": "z999z99910b.png",
            "btn_login_gonggao.png": "z999z99911b.png",
            "btn_login_loginanniu.png": "z999z99912b.png",
            "btn_login_yingsi.png": "z999z99913b.png",
            "btn_xuanqu_anniuhuang.png": "z999z99914b.png",
            "btn_xuanqu_anniulan.png": "z999z99915b.png",
            "btn_xuanqu_quanniu.png": "z999z99916b.png",
            "image_com_tuichu.png": "z999z99917b.png",
            "image_login_changtong.png": "z999z99918b.png",
            "image_login_fanmang.png": "z999z99919b.png",
            "image_login_weihu.png": "z999z99920b.png",
            "image_login_xuanqubg.png": "z999z99921b.png",
            "image_login_init.png": "z999z99922b.png",
            "btn_com_chuangback1.png": "z999z99923b.png",
            "btn_com_long0.png":"z999z99924b.png",
            "btn_com_long1.png":"z999z99925b.png",
            "image_login_notice1.png":"z999z99926b.png",
            "image_loding_txtbhcc.png":"z999z99927b.png",
            "image_xuanfu_gx0.png": "z999z99928b.png",
            "image_xuanfu_gx1.png": "z999z99929b.png",

            "0.png": "z999z9991c.png",
            "1.png": "z999z9992c.png",
            "2.png": "z999z9993c.png",
            "3.png": "z999z9994c.png",
            "4.png": "z999z9995c.png",

        }
        strFilePath = "/Z91es";
        strFileName = "/Z91iles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$F", "H", "f", "f1", "f"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 640000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "2KBT90VL7M_Y8N1PO3HA$UDQ4SJ6CRXZF5WIGE";
        str_leading2 = "rq3m0b$x7zantv58je21wghclk4dfsup9_y6io";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_9', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_9())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_9', function (cb) {
    sequence("set-param-Z_9","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});



/**-------------------------------------------------微信小游戏--Z9包 天剑vs墨雪--蜀山御剑仙 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z10 6KW奇趣-微信 start-----------------------------------------------------------*/


/**Z_10包参数*/
var set_param_Z_10 = function () {

    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_10/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_10';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'H$';
        sourceProject = "wx_build/jg_gameZ_10_new";
        targetProject = "wx_build/jg_gameZ_10_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "Zqy102MZqy10IZqy102.js";
        libsMainJs = "Zqy102GZqy10MEZqy102.js";
        packageName1 = "Zqy102IZqy102";
        packageName2 = "Zqy102pftZqy102";
        packageName3 = "Zqy10Zqy10Zqy10Zqy10Zqy10";
        var clinetPbName = "Zqy10Zqy10IENZqy10Zqy10.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/Zqy10INDZqy10Zqy10.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/Zqy10Zqy10INIZqy10aZqy10.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/Zqy10Zqy10DOZqy10Zqy10.js"},
            "libs/dom_parser.js":  {url:packageName1+"/Zqy10Zqy10parsaZqy10.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/Zqy10Zqy10MtadZqy10Zqy10.js"},
            "libs/libs.min.js":  {url:packageName1+"/Zqy10Zqy10IZqy101Zqy10Zqy10.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/Zqy10Zqy10bfZqy10Zqy10.js"},
            "libs/sax.js":  {url:packageName1+"/Zqy10Zqy10cZqy10Zqy10.js"},
            "libs/weapp-adapter.js":  {url:"xv2/Zqy10Zqy10E4Zqy10Zqy10.js"},
            "libs/zlib.js":  {url:packageName1+"/Zqy10Zqy1011Zqy10Zqy10.js"},
            "wxsdk":  {url:"Zqy10Zqy10basdZqy10"},
            "wxsdk/wx_aksdk.js":  {url:"Zqy10Zqy10basdZqy10/Zqy105sdkZqy10.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"Zqy10Zqy10basdZqy10/a5sshZqy10Zqy10.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/Zqy10Zqy10FZqy10Zqy10.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            // "untils/ddtSDKPlat.js":  {url:"untils/ddtSDKPlat.js",extractStr:false,count:1,strLen:3},
            "wxsdk/utils/sdkFrom6kw.com.js":  {url:"Zqy10Zqy10basdZqy10/utils/sdkFrom6kw.com.js",extractStr:false,count:1,strLen:3},

            "wxloading_atlas": {url:"Zqy10Zqy10dZqy10"},
            "wxlogin_atlas": {url:"Zqy10Zqy10lgrZqy10Zqy10"},
            "wxeff_btn_atlas":{url:"Zqy10yZqy10"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy101a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy102a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy103a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy104a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy105a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy106a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy107a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy108a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy109a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1010a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1011a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1012a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1013a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1014a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1015a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1016a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1017a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1018a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1019a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1020a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy10199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy101b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy10123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy102b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy103b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy104b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy105b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy106b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy107b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy108b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy109b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1010b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1011b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1012b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1013b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1014b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1015b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1016b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1017b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1018b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1019b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1020b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1021b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1022b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1023b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1024b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1025b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1026b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1027b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1028b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1029b.png"},

            "wxeff_btn_atlas/0.png": {url:"Zqy10yZqy10/Zqy10Zqy101c.png"},
            "wxeff_btn_atlas/1.png": {url:"Zqy10yZqy10/Zqy10Zqy102c.png"},
            "wxeff_btn_atlas/2.png": {url:"Zqy10yZqy10/Zqy10Zqy103c.png"},
            "wxeff_btn_atlas/3.png": {url:"Zqy10yZqy10/Zqy10Zqy104c.png"},
            "wxeff_btn_atlas/4.png": {url:"Zqy10yZqy10/Zqy10Zqy105c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshZqy10Zqy10",
            "./sax": "./Zqy10Zqy10cZqy10Zqy10",
            "./dom": "./Zqy10Zqy10DOZqy10Zqy10",
            "client_pb.js": clinetPbName,
            "protobuf.js": "Zqy10Zqy10FZqy10Zqy10.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "Zqy10Zqy10lgrZqy10Zqy10",
            "wxeff_btn_atlas": "Zqy10yZqy10",
            "wxloading_atlas": "Zqy10Zqy10dZqy10",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "Zqy10Zqy101a.png",
            "btn_loding_abcelq1.png": "Zqy10Zqy102a.png",
            "image_loading_bg.jpg": "Zqy10Zqy103a.jpg",
            "image_loading_bg_bottom.jpg": "Zqy10Zqy104a.jpg",
            "image_loading_bg_bottom2.jpg": "Zqy10Zqy105a.jpg",
            "image_loading_bg_left.jpg": "Zqy10Zqy106a.jpg",
            "image_loading_bg_left2.jpg": "Zqy10Zqy107a.jpg",
            "image_loading_bg_right.jpg": "Zqy10Zqy108a.jpg",
            "image_loading_bg_right2.jpg": "Zqy10Zqy109a.jpg",
            "image_loading_bg_top.jpg": "Zqy10Zqy1010a.jpg",
            "image_loading_bg_top2.jpg": "Zqy10Zqy1011a.jpg",
            "image_loading_bg2.jpg": "Zqy10Zqy1012a.jpg",


            "image_loding_bar0.png": "Zqy10Zqy1013a.png",
            "image_loding_bar1.png": "Zqy10Zqy1014a.png",
            "image_loding_bar02.png": "Zqy10Zqy1015a.png",
            "image_loding_bar2.png": "Zqy10Zqy1016a.png",
            "image_loding_bar3.png": "Zqy10Zqy1017a.png",
            "image_login_point1.png": "Zqy10Zqy1018a.png",
            "image_login_point2.png":"Zqy10Zqy1019a.png",
            "image_login_point3.png": "Zqy10Zqy1020a.png",


            "image_xuanqu_ztjb0.png": "Zqy10Zqy10199b.png",
            "image_denglu_txtshenpi.png": "Zqy10Zqy101b.png",
            "shenhezizi.png": "Zqy10Zqy10123b.png",
            "image_login_loginbg.jpg": "Zqy10Zqy102b.jpg",
            "image_login_loginbg_bottom.jpg": "Zqy10Zqy103b.jpg",
            "image_login_loginbg_left.jpg": "Zqy10Zqy104b.jpg",
            "image_login_loginbg_right.jpg": "Zqy10Zqy105b.jpg",
            "image_login_loginbg_top.jpg": "Zqy10Zqy106b.jpg",
            "image_login_logo.png": "Zqy10Zqy107b.png",
            "image_login_notice.png": "Zqy10Zqy108b.png",
            "image_xuanfu_xfbg.png": "Zqy10Zqy109b.png",

            "btn_com_chuangback.png": "Zqy10Zqy1010b.png",
            "btn_login_gonggao.png": "Zqy10Zqy1011b.png",
            "btn_login_loginanniu.png": "Zqy10Zqy1012b.png",
            "btn_login_yingsi.png": "Zqy10Zqy1013b.png",
            "btn_xuanqu_anniuhuang.png": "Zqy10Zqy1014b.png",
            "btn_xuanqu_anniulan.png": "Zqy10Zqy1015b.png",
            "btn_xuanqu_quanniu.png": "Zqy10Zqy1016b.png",
            "image_com_tuichu.png": "Zqy10Zqy1017b.png",
            "image_login_changtong.png": "Zqy10Zqy1018b.png",
            "image_login_fanmang.png": "Zqy10Zqy1019b.png",
            "image_login_weihu.png": "Zqy10Zqy1020b.png",
            "image_login_xuanqubg.png": "Zqy10Zqy1021b.png",
            "image_login_init.png": "Zqy10Zqy1022b.png",
            "btn_com_chuangback1.png": "Zqy10Zqy1023b.png",
            "btn_com_long0.png":"Zqy10Zqy1024b.png",
            "btn_com_long1.png":"Zqy10Zqy1025b.png",
            "image_login_notice1.png":"Zqy10Zqy1026b.png",
            "image_loding_txtbhcc.png":"Zqy10Zqy1027b.png",
            "image_xuanfu_gx0.png": "Zqy10Zqy1028b.png",
            "image_xuanfu_gx1.png": "Zqy10Zqy1029b.png",

            "0.png": "Zqy10Zqy101c.png",
            "1.png": "Zqy10Zqy102c.png",
            "2.png": "Zqy10Zqy103c.png",
            "3.png": "Zqy10Zqy104c.png",
            "4.png": "Zqy10Zqy105c.png",

        }
        strFilePath = "/qyz10res";
        strFileName = "/qyz10Files.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["h$", "J", "J", "J1", "g"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "G5JQ4RT321OCSNZBMDEVX8A$Y7IUK9_6FPLH0W";
        str_leading2 = "s$f9w2_pezhtc86dgk0bq5oyrvj7xin143ualm";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_10', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_10())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_10', function (cb) {
    sequence("set-param-Z_10","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

gulp.task('build-Z_10-test', function (cb) {
    sequence("set-param-Z_10",'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_10_minify', function (cb) {
    sequence("set-param-Z_10","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z10 6KW奇趣-微信 end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--Z11包  9130vs有一-封神之怒start-----------------------------------------------------------*/
/**Z11包参数*/
var set_param_Z_11 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_11/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_11';
        INIT_PATH = '/';
        SCOPE = 'abcdefijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_gh';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_11_new";
        targetProject = "wx_build/jg_gameZ_11_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "Z11main.js";
        libsMainJs = "Z11game.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"Z11libs"},
            "game.js": {url:"Z11libs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"Z11libs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"Z11libs/Z11index.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"Z11libs/Z11initmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"Z11libs/Z11dom.js"},
            "libs/dom_parser.js":  {url:"Z11libs/Z11domparser.js"},
            "libs/laya.wxmini.js":  {url:"Z11libs/Z11wxmini.js"},
            "libs/libs.min.js":  {url:"Z11libs/Z11libsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"Z11libs/Z11md5min.js"},
            "libs/sax.js":  {url:"Z11libs/Z11sax.js"},
            "libs/weapp-adapter.js":  {url:"ddssss/Z11weasaf.js"},
            "libs/zlib.js":  {url:"Z11libs/Z11zlibs.js"},
            // "libs/game.js":  {url:"Z11libs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"Z11k"},
            "wxsdk/wx_aksdk.js":  {url:"Z11k/Z11sdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"Z11k/Z11help.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"Z11Z11f"},
            "protobuf/client_pb.js":  {url:"Z11Z11f/Z11cleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"Z11Z11f/Z11dBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"Z11Z11f/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"Z11Z11Z11"},
            "subPackage/main.min.js":  {url:"Z11Z11Z11/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"Z11Z11Z11/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"Z11loding"},
            "wxlogin_atlas": {url:"Z11login"},
            "wxeff_btn_atlas":{url:"z11wxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/Z11login.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/Z11loding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"Z11loding/z111a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"Z11loding/z112a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"Z11loding/z113a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"Z11loding/z114a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"Z11loding/z115a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"Z11loding/z116a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"Z11loding/z117a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"Z11loding/z118a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"Z11loding/z119a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"Z11loding/z1110a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"Z11loding/z1111a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"Z11loding/z1112a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"Z11loding/z1113a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"Z11loding/z1114a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"Z11loding/z1115a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"Z11loding/z1116a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"Z11loding/z1117a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"Z11loding/z1118a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"Z11loding/z1119a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"Z11loding/z1120a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"Z11login/z11199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"Z11login/z111b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"Z11login/z11123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"Z11login/z112b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"Z11login/z113b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"Z11login/z114b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"Z11login/z115b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"Z11login/z116b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"Z11login/z117b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"Z11login/z118b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"Z11login/z119b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"Z11login/z1110b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"Z11login/z1111b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"Z11login/z1112b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"Z11login/z1113b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"Z11login/z1114b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"Z11login/z1115b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"Z11login/z1116b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"Z11login/z1117b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"Z11login/z1118b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"Z11login/z1119b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"Z11login/z1120b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"Z11login/z1121b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"Z11login/z1122b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"Z11login/z1123b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"Z11login/z1124b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"Z11login/z1125b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"Z11login/z1126b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"Z11login/z1127b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"Z11login/z1128b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"Z11login/z1129b.png"},

            "wxeff_btn_atlas/0.png": {url:"z11wxeff/z111c.png"},
            "wxeff_btn_atlas/1.png": {url:"z11wxeff/z112c.png"},
            "wxeff_btn_atlas/2.png": {url:"z11wxeff/z113c.png"},
            "wxeff_btn_atlas/3.png": {url:"z11wxeff/z114c.png"},
            "wxeff_btn_atlas/4.png": {url:"z11wxeff/z115c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "Z11help",
            "./sax": "./Z11sax",
            "./dom": "./Z11dom",
            "client_pb.js": "Z11cleintpb.js",
            "protobuf.js": "Z11dBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "Z11login",
            "wxeff_btn_atlas": "z11wxeff",
            "wxloading_atlas": "Z11loding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "z111a.png",
            "btn_loding_abcelq1.png": "z112a.png",
            "image_loading_bg.jpg": "z113a.jpg",
            "image_loading_bg_bottom.jpg": "z114a.jpg",
            "image_loading_bg_bottom2.jpg": "z115a.jpg",
            "image_loading_bg_left.jpg": "z116a.jpg",
            "image_loading_bg_left2.jpg": "z117a.jpg",
            "image_loading_bg_right.jpg": "z118a.jpg",
            "image_loading_bg_right2.jpg": "z119a.jpg",
            "image_loading_bg_top.jpg": "z1110a.jpg",
            "image_loading_bg_top2.jpg": "z1111a.jpg",
            "image_loading_bg2.jpg": "z1112a.jpg",

            "image_loding_bar0.png": "z1113a.png",
            "image_loding_bar1.png": "z1114a.png",
            "image_loding_bar02.png": "z1115a.png",
            "image_loding_bar2.png": "z1116a.png",
            "image_loding_bar3.png": "z1117a.png",
            "image_login_point1.png": "z1118a.png",
            "image_login_point2.png":"z1119a.png",
            "image_login_point3.png": "z1120a.png",


            "image_xuanqu_ztjb0.png": "z11199b.png",
            "image_denglu_txtshenpi.png": "z111b.png",
            "shenhezizi.png": "z11123b.png",
            "image_login_loginbg.jpg": "z112b.jpg",
            "image_login_loginbg_bottom.jpg": "z113b.jpg",
            "image_login_loginbg_left.jpg": "z114b.jpg",
            "image_login_loginbg_right.jpg": "z115b.jpg",
            "image_login_loginbg_top.jpg": "z116b.jpg",
            "image_login_logo.png": "z117b.png",
            "image_login_notice.png": "z118b.png",
            "image_xuanfu_xfbg.png": "z119b.png",

            "btn_com_chuangback.png": "z1110b.png",
            "btn_login_gonggao.png": "z1111b.png",
            "btn_login_loginanniu.png": "z1112b.png",
            "btn_login_yingsi.png": "z1113b.png",
            "btn_xuanqu_anniuhuang.png": "z1114b.png",
            "btn_xuanqu_anniulan.png": "z1115b.png",
            "btn_xuanqu_quanniu.png": "z1116b.png",
            "image_com_tuichu.png": "z1117b.png",
            "image_login_changtong.png": "z1118b.png",
            "image_login_fanmang.png": "z1119b.png",
            "image_login_weihu.png": "z1120b.png",
            "image_login_xuanqubg.png": "z1121b.png",
            "image_login_init.png": "z1122b.png",
            "btn_com_chuangback1.png": "z1123b.png",
            "btn_com_long0.png":"z1124b.png",
            "btn_com_long1.png":"z1125b.png",
            "image_login_notice1.png":"z1126b.png",
            "image_loding_txtbhcc.png":"z1127b.png",
            "image_xuanfu_gx0.png": "z1128b.png",
            "image_xuanfu_gx1.png": "z1129b.png",

            "0.png": "z111c.png",
            "1.png": "z112c.png",
            "2.png": "z113c.png",
            "3.png": "z114c.png",
            "4.png": "z115c.png",

        }
        strFilePath = "/Z11res";
        strFileName = "/Z11iles.zip";
        globleKeys = ["$z", "B", "c", "z0", "z"];
        noReplaceJs = "Z11libs/game.js";
        packageName1 = "Z11libs";
        packageName2 = "Z11Z11f";
        packageName3 = "Z11Z11Z11";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "4YG7LB01PJZWV93HMKODRTC5E2_86XS$FAUINQ";
        str_leading2 = "k4px8163d9fzwm0hnqa_egjrosui7cb5y2t$lv";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_11', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_11())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_11', function (cb) {
    sequence("set-param-Z_11","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb)
});

//混淆
gulp.task('build-babel-obfuscator-Z_11_minify', function (cb) {
    sequence("set-param-Z_11","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--Z12天剑vs可以--幻灵仙境包 end-----------------------------------------------------------*/

/**Z_12包参数*/
var set_param_Z_12 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_12/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_12';
        INIT_PATH = '/';
        SCOPE = 'cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ab';
        PREFIX = 'Z$';
        sourceProject = "wx_build/jg_gameZ_12_new";
        targetProject = "wx_build/jg_gameZ_12_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "lsjdflaamain.js";
        libsMainJs = "bbbgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"bbblibs"},
            "game.js": {url:"bbblibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"bbblibs/bbbindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"bbblibs/bbbinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"bbblibs/bbbdom.js"},
            "libs/dom_parser.js":  {url:"bbblibs/bbbdomparser.js"},
            "libs/laya.wxmini.js":  {url:"bbblibs/bbbwxmini.js"},
            "libs/libs.min.js":  {url:"bbblibs/bbblibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"bbblibs/bbbmd5min.js"},
            "libs/sax.js":  {url:"bbblibs/bbbsax.js"},
            "libs/weapp-adapter.js":  {url:"bbssss/bbbweasaf.js"},
            "libs/zlib.js":  {url:"bbblibs/bbbzlibs.js"},
            // "libs/game.js":  {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"bbbk"},
            "wxsdk/wx_aksdk.js":  {url:"bbbk/bbbsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"bbbk/bbbhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"bbbbbbf"},
            "protobuf/client_pb.js":  {url:"bbbbbbf/bbbcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"bbbbbbf/bbbbBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"bbbbbbf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"bbbbbbbbb"},
            "subPackage/main.min.js":  {url:"bbbbbbbbb/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"bbbbbbbbb/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹

            "wxloading_atlas": {url:"bbbloding"},
            "wxlogin_atlas": {url:"bbblogin"},
            "wxeff_btn_atlas":{url:"bwxeff"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"bbbloding/a4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"bbbloding/a5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"bbbloding/a6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"bbbloding/a7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"bbbloding/a8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"bbbloding/a9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"bbbloding/a10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"bbbloding/a11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"bbbloding/a12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"bbbloding/a13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"bbbloding/a14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"bbbloding/a15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"bbbloding/a16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"bbbloding/a17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"bbbloding/a18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"bbbloding/a19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"bbbloding/a20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"bbblogin/b199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"bbblogin/b1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"bbblogin/b123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"bbblogin/b2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"bbblogin/b3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"bbblogin/b4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"bbblogin/b5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"bbblogin/b6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"bbblogin/b7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"bbblogin/b8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"bbblogin/b9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"bbblogin/b10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"bbblogin/b11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"bbblogin/b12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"bbblogin/b13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"bbblogin/b14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"bbblogin/b15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"bbblogin/b16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"bbblogin/b17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"bbblogin/b18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"bbblogin/b19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"bbblogin/b20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"bbblogin/b21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"bbblogin/b23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"bbblogin/b24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"bbblogin/b25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"bbblogin/b26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"bbblogin/b27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"bbblogin/b28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"bbblogin/b29b.png"},

            "wxeff_btn_atlas/0.png": {url:"bwxeff/b100b.png"},
            "wxeff_btn_atlas/1.png": {url:"bwxeff/b101b.png"},
            "wxeff_btn_atlas/2.png": {url:"bwxeff/b102b.png"},
            "wxeff_btn_atlas/3.png": {url:"bwxeff/b103b.png"},
            "wxeff_btn_atlas/4.png": {url:"bwxeff/b104b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "bbbhelp",
            "./sax": "./bbbsax",
            "./dom": "./bbbdom",
            "client_pb.js": "bbbcleintpb.js",
            "protobuf.js": "bbbbBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "bbblogin",
            "wxeff_btn_atlas": "bwxeff",
            "wxloading_atlas": "bbbloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1a.png",
            "btn_loding_abcelq1.png": "a2a.png",
            "image_loading_bg.jpg": "a3a.jpg",
            "image_loading_bg_bottom.jpg": "a4a.jpg",
            "image_loading_bg_bottom2.jpg": "a5a.jpg",
            "image_loading_bg_left.jpg": "a6a.jpg",
            "image_loading_bg_left2.jpg": "a7a.jpg",
            "image_loading_bg_right.jpg": "a8a.jpg",
            "image_loading_bg_right2.jpg": "a9a.jpg",
            "image_loading_bg_top.jpg": "a10a.jpg",
            "image_loading_bg_top2.jpg": "a11a.jpg",
            "image_loading_bg2.jpg": "a12a.jpg",

            "image_loding_bar0.png": "a13a.png",
            "image_loding_bar1.png": "a14a.png",
            "image_loding_bar02.png": "a15a.png",
            "image_loding_bar2.png": "a16a.png",
            "image_loding_bar3.png": "a17a.png",
            "image_login_point1.png": "a18a.png",
            "image_login_point2.png":"a19a.png",
            "image_login_point3.png": "a20a.png",


            "image_xuanqu_ztjb0.png": "b199b.png",
            "image_denglu_txtshenpi.png": "b1b.png",
            "shenhezizi.png": "b123b.png",
            "image_login_loginbg.jpg": "b2b.jpg",
            "image_login_loginbg_bottom.jpg": "b3b.jpg",
            "image_login_loginbg_left.jpg": "b4b.jpg",
            "image_login_loginbg_right.jpg": "b5b.jpg",
            "image_login_loginbg_top.jpg": "b6b.jpg",
            "image_login_logo.png": "b7b.png",
            "image_login_notice.png": "b8b.png",
            "image_xuanfu_xfbg.png": "b9b.png",

            "btn_com_chuangback.png": "b10b.png",
            "btn_login_gonggao.png": "b11b.png",
            "btn_login_loginanniu.png": "b12b.png",
            "btn_login_yingsi.png": "b13b.png",
            "btn_xuanqu_anniuhuang.png": "b14b.png",
            "btn_xuanqu_anniulan.png": "b15b.png",
            "btn_xuanqu_quanniu.png": "b16b.png",
            "image_com_tuichu.png": "b17b.png",
            "image_login_changtong.png": "b18b.png",
            "image_login_fanmang.png": "b19b.png",
            "image_login_weihu.png": "b20b.png",
            "image_login_xuanqubg.png": "b21b.png",
            "image_login_init.png": "b22b.png",
            "btn_com_chuangback1.png": "b23b.png",
            "btn_com_long0.png":"b24b.png",
            "btn_com_long1.png":"b25b.png",
            "image_login_notice1.png":"b26b.png",
            "image_loding_txtbhcc.png":"b27b.png",
            "image_xuanfu_gx0.png": "b28b.png",
            "image_xuanfu_gx1.png": "b29b.png",

            "0.png": "b100b.png",
            "1.png": "b101b.png",
            "2.png": "b102b.png",
            "3.png": "b103b.png",
            "4.png": "b104b.png",

        };

        strFilePath = "/res";
        strFileName = "/files.zip";
        globleKeys = ["y$", "_", "_s", "p$", "_d"];
        noReplaceJs = "bbblibs/game.js";
        packageName1 = "bbblibs";
        packageName2 = "bbbbbbf";
        packageName3 = "bbbbbbbbb";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = false;
        str_leading1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
        str_leading2 = "abcdefghijklmnopqrstuvwxyz$_0123456789";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};


gulp.task('set-param-Z_12', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_12())
    return stream;
});
//设置混淆参数（Z_12包）
gulp.task('scope-Z_12', function (cb) {
    sequence('set-param-Z_12', 'scope-modify', cb)
});
//打包所有（B包）
gulp.task('build-all-Z_12', function (cb) {
    sequence('set-param-Z_12', 'scope-check', 'main-modify', 'main-map', 'main-backup', 'init-modify', 'init-backup', 'libs-min', 'libs-map', 'libs-backup', 'build-protobuf', 'copy', cb)
});
//混淆
gulp.task('build-babel-obfuscator-Z_12', function (cb) {
    sequence("set-param-Z_12","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb)
});

//混淆
gulp.task('build-babel-obfuscator-Z_12-minify', function (cb) {
    sequence("set-param-Z_12","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--Z12天剑vs可以--幻灵仙境包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z13包 热游 耀石神魔  start-----------------------------------------------------------*/


/**L包参数*/
var set_param_Z_13 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_13/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_13';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstuvyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_wx';
        PREFIX = 'l$';
        sourceProject = "wx_build/jg_gameZ_13_new";
        targetProject = "wx_build/jg_gameZ_13_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "LLLMAIN.js";
        libsMainJs = "LLLLGAME.js";
        packageName1 = "LLLLIBS";
        packageName2 = "LLLLLLPF";
        packageName3 = "LLLLLLLL";
        var clinetPbName = "LLLCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/LLLLINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/LLLINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/LLLDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/LLLDOMPARSER.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/LLLLWXMINI.js"},
            "libs/libs.min.js":  {url:packageName1+"/llllLIBSMIN.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/lllMDFIVEMIN.js"},
            "libs/sax.js":  {url:packageName1+"/lllSAX.js"},
            "libs/weapp-adapter.js":  {url:"srcds312/lllWEASAF.js"},
            "libs/zlib.js":  {url:packageName1+"/lllZLIBS.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"llllSDK"},
            "wxsdk/wx_aksdk.js":  {url:"llllSDK/llllSDDK.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"llllSDK/llllHELP.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/llllllBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"lllllLOADING"},
            "wxlogin_atlas": {url:"llllLOGIN"},
            "wxeff_btn_atlas":{url:"llllWXEFF"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/lllllLOADING.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"lllllLOADING/l1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"lllllLOADING/l2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"lllllLOADING/l3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"lllllLOADING/l4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"lllllLOADING/l5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"lllllLOADING/l6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"lllllLOADING/l7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"lllllLOADING/l8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"lllllLOADING/l9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"lllllLOADING/l10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"lllllLOADING/l11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"lllllLOADING/l12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"lllllLOADING/l13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"lllllLOADING/l14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"lllllLOADING/l15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"lllllLOADING/l16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"lllllLOADING/l17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"lllllLOADING/l18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"lllllLOADING/l19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"lllllLOADING/l20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"llllLOGIN/l199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"llllLOGIN/l1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"llllLOGIN/l123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"llllLOGIN/l2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"llllLOGIN/l3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"llllLOGIN/l4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"llllLOGIN/l5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"llllLOGIN/l6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"llllLOGIN/l7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"llllLOGIN/l8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"llllLOGIN/l9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"llllLOGIN/l10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"llllLOGIN/l11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"llllLOGIN/l12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"llllLOGIN/l13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"llllLOGIN/l14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"llllLOGIN/l15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"llllLOGIN/l16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"llllLOGIN/l17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"llllLOGIN/l18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"llllLOGIN/l19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"llllLOGIN/l20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"llllLOGIN/l21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"llllLOGIN/l22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"llllLOGIN/l23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"llllLOGIN/l24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"llllLOGIN/l25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"llllLOGIN/l26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"llllLOGIN/l27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"llllLOGIN/l28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"llllLOGIN/l29b.png"},

            "wxeff_btn_atlas/0.png": {url:"llllWXEFF/l1c.png"},
            "wxeff_btn_atlas/1.png": {url:"llllWXEFF/l2c.png"},
            "wxeff_btn_atlas/2.png": {url:"llllWXEFF/l3c.png"},
            "wxeff_btn_atlas/3.png": {url:"llllWXEFF/l4c.png"},
            "wxeff_btn_atlas/4.png": {url:"llllWXEFF/l5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "llllHELP",
            "./sax": "./lllSAX",
            "./dom": "./LLLDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "llllllBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "llllLOGIN",
            "wxeff_btn_atlas": "llllWXEFF",
            "wxloading_atlas": "lllllLOADING",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "l1a.png",
            "btn_loding_abcelq1.png": "l2a.png",
            "image_loading_bg.jpg": "l3a.jpg",
            "image_loading_bg_bottom.jpg": "l4a.jpg",
            "image_loading_bg_bottom2.jpg": "l5a.jpg",
            "image_loading_bg_left.jpg": "l6a.jpg",
            "image_loading_bg_left2.jpg": "l7a.jpg",
            "image_loading_bg_right.jpg": "l8a.jpg",
            "image_loading_bg_right2.jpg": "l9a.jpg",
            "image_loading_bg_top.jpg": "l10a.jpg",
            "image_loading_bg_top2.jpg": "l11a.jpg",
            "image_loading_bg2.jpg": "l12a.jpg",

            "image_loding_bar0.png": "l13a.png",
            "image_loding_bar1.png": "l14a.png",
            "image_loding_bar02.png": "l15a.png",
            "image_loding_bar2.png": "l16a.png",
            "image_loding_bar3.png": "l17a.png",
            "image_login_point1.png": "l18a.png",
            "image_login_point2.png":"l19a.png",
            "image_login_point3.png": "l20a.png",


            "image_xuanqu_ztjb0.png": "l199b.png",
            "image_denglu_txtshenpi.png": "l1b.png",
            "shenhezizi.png": "l123b.png",
            "image_login_loginbg.jpg": "l2b.jpg",
            "image_login_loginbg_bottom.jpg": "l3b.jpg",
            "image_login_loginbg_left.jpg": "l4b.jpg",
            "image_login_loginbg_right.jpg": "l5b.jpg",
            "image_login_loginbg_top.jpg": "l6b.jpg",
            "image_login_logo.png": "l7b.png",
            "image_login_notice.png": "l8b.png",
            "image_xuanfu_xfbg.png": "l9b.png",

            "btn_com_chuangback.png": "l10b.png",
            "btn_login_gonggao.png": "l11b.png",
            "btn_login_loginanniu.png": "l12b.png",
            "btn_login_yingsi.png": "l13b.png",
            "btn_xuanqu_anniuhuang.png": "l14b.png",
            "btn_xuanqu_anniulan.png": "l15b.png",
            "btn_xuanqu_quanniu.png": "l16b.png",
            "image_com_tuichu.png": "l17b.png",
            "image_login_changtong.png": "l18b.png",
            "image_login_fanmang.png": "l19b.png",
            "image_login_weihu.png": "l20b.png",
            "image_login_xuanqubg.png": "l21b.png",
            "image_login_init.png": "l22b.png",
            "btn_com_chuangback1.png": "l23b.png",
            "btn_com_long0.png":"l24b.png",
            "btn_com_long1.png":"l25b.png",
            "image_login_notice1.png":"l26b.png",
            "image_loding_txtbhcc.png":"l27b.png",
            "image_xuanfu_gx0.png": "l28b.png",
            "image_xuanfu_gx1.png": "l29b.png",

            "0.png": "l1c.png",
            "1.png": "l2c.png",
            "2.png": "l3c.png",
            "3.png": "l4c.png",
            "4.png": "l5c.png",

        }
        strFilePath = "/z13res";
        strFileName = "/z13files.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$L", "Z", "X", "$l", "l1"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;//160000;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "TZONMXHK1LD5$EB6QPAC8YV73W_9RS0I24FUGJ";
        str_leading2 = "4vnqs5ga$k7ledc8hy2jo_1bmip90r6xztwuf3";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_13', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_13())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_13', function (cb) {
    sequence("set-param-Z_13","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_13-minify', function (cb) {
    sequence("set-param-Z_13","MT1_build_minifyTargetProject",cb);
});



/**-------------------------------------------------微信小游戏--Z13包 热游 耀石神魔  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--微信小游戏--Z14包 圣域伏魔录  start-----------------------------------------------------------*/

/**T包参数*/
var set_param_Z_14 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_14/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_14';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'T$';
        sourceProject = "wx_build/jg_gameZ_14_new";
        targetProject = "wx_build/jg_gameZ_14_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ttMAItttt.js";
        libsMainJs = "tGAMEtt.js";
        packageName1 = "tIBSt";
        packageName2 = "tpft";
        packageName3 = "ttttttt";
        var clinetPbName = "tCLIENTtt.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/tINDtt.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ttINItt.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ttDOtt.js"},
            "libs/dom_parser.js":  {url:packageName1+"/ttparstt.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/tWXMtadtt.js"},
            "libs/libs.min.js":  {url:packageName1+"/ttLIB23tt.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ttfttt.js"},
            "libs/sax.js":  {url:packageName1+"/tT12tt.js"},
            "libs/weapp-adapter.js":  {url:"ta11/stE4tt.js"},
            "libs/zlib.js":  {url:packageName1+"/tt112tt.js"},
            "wxsdk":  {url:"ttkttt"},
            "wxsdk/wx_aksdk.js":  {url:"ttkttt/t6ktgt.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"ttkttt/ttsstt.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/tBFtt.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"ttdt"},
            "wxlogin_atlas": {url:"ttlgrtt"},
            "wxeff_btn_atlas":{url:"tft"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"ttdt/t1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"ttdt/t2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"ttdt/t3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"ttdt/t4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"ttdt/t5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"ttdt/t6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"ttdt/t7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"ttdt/t8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"ttdt/t9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"ttdt/t10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"ttdt/t11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"ttdt/t12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"ttdt/t13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"ttdt/t14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"ttdt/t15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"ttdt/t16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"ttdt/t17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"ttdt/t18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"ttdt/t19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"ttdt/t20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ttlgrtt/t199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ttlgrtt/t1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ttlgrtt/t123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ttlgrtt/t2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ttlgrtt/t3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ttlgrtt/t4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ttlgrtt/t5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ttlgrtt/t6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ttlgrtt/t7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ttlgrtt/t8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ttlgrtt/t9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ttlgrtt/t10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ttlgrtt/t11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ttlgrtt/t12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ttlgrtt/t13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ttlgrtt/t14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ttlgrtt/t15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ttlgrtt/t16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ttlgrtt/t17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ttlgrtt/t18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ttlgrtt/t19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ttlgrtt/t20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ttlgrtt/t21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ttlgrtt/t22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ttlgrtt/t23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ttlgrtt/t24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ttlgrtt/t25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ttlgrtt/t26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ttlgrtt/t27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ttlgrtt/t28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ttlgrtt/t29b.png"},

            "wxeff_btn_atlas/0.png": {url:"tft/t1c.png"},
            "wxeff_btn_atlas/1.png": {url:"tft/t2c.png"},
            "wxeff_btn_atlas/2.png": {url:"tft/t3c.png"},
            "wxeff_btn_atlas/3.png": {url:"tft/t4c.png"},
            "wxeff_btn_atlas/4.png": {url:"tft/t5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ttsstt",
            "./sax": "./tT12tt",
            "./dom": "./ttDOtt",
            "client_pb.js": clinetPbName,
            "protobuf.js": "tBFtt.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ttlgrtt",
            "wxeff_btn_atlas": "tft",
            "wxloading_atlas": "ttdt",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "t1a.png",
            "btn_loding_abcelq1.png": "t2a.png",
            "image_loading_bg.jpg": "t3a.jpg",
            "image_loading_bg_bottom.jpg": "t4a.jpg",
            "image_loading_bg_bottom2.jpg": "t5a.jpg",
            "image_loading_bg_left.jpg": "t6a.jpg",
            "image_loading_bg_left2.jpg": "t7a.jpg",
            "image_loading_bg_right.jpg": "t8a.jpg",
            "image_loading_bg_right2.jpg": "t9a.jpg",
            "image_loading_bg_top.jpg": "t10a.jpg",
            "image_loading_bg_top2.jpg": "t11a.jpg",
            "image_loading_bg2.jpg": "t12a.jpg",


            "image_loding_bar0.png": "t13a.png",
            "image_loding_bar1.png": "t14a.png",
            "image_loding_bar02.png": "t15a.png",
            "image_loding_bar2.png": "t16a.png",
            "image_loding_bar3.png": "t17a.png",
            "image_login_point1.png": "t18a.png",
            "image_login_point2.png":"t19a.png",
            "image_login_point3.png": "t20a.png",


            "image_xuanqu_ztjb0.png": "t199b.png",
            "image_denglu_txtshenpi.png": "t1b.png",
            "shenhezizi.png": "t123b.png",
            "image_login_loginbg.jpg": "t2b.jpg",
            "image_login_loginbg_bottom.jpg": "t3b.jpg",
            "image_login_loginbg_left.jpg": "t4b.jpg",
            "image_login_loginbg_right.jpg": "t5b.jpg",
            "image_login_loginbg_top.jpg": "t6b.jpg",
            "image_login_logo.png": "t7b.png",
            "image_login_notice.png": "t8b.png",
            "image_xuanfu_xfbg.png": "t9b.png",

            "btn_com_chuangback.png": "t10b.png",
            "btn_login_gonggao.png": "t11b.png",
            "btn_login_loginanniu.png": "t12b.png",
            "btn_login_yingsi.png": "t13b.png",
            "btn_xuanqu_anniuhuang.png": "t14b.png",
            "btn_xuanqu_anniulan.png": "t15b.png",
            "btn_xuanqu_quanniu.png": "t16b.png",
            "image_com_tuichu.png": "t17b.png",
            "image_login_changtong.png": "t18b.png",
            "image_login_fanmang.png": "t19b.png",
            "image_login_weihu.png": "t20b.png",
            "image_login_xuanqubg.png": "t21b.png",
            "image_login_init.png": "t22b.png",
            "btn_com_chuangback1.png": "t23b.png",
            "btn_com_long0.png":"t24b.png",
            "btn_com_long1.png":"t25b.png",
            "image_login_notice1.png":"t26b.png",
            "image_loding_txtbhcc.png":"t27b.png",
            "image_xuanfu_gx0.png": "t28b.png",
            "image_xuanfu_gx1.png": "t29b.png",

            "0.png": "t1c.png",
            "1.png": "t2c.png",
            "2.png": "t3c.png",
            "3.png": "t4c.png",
            "4.png": "t5c.png",

        }
        strFilePath = "/z14ttes";
        strFileName = "/z14ttiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$t", "U", "_Z", "T_", "T"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "GNQTW1EXPAHI523ZRUJO$MY8LB07V9K_D6CFS4";
        str_leading2 = "_izmk95up0fx$n34cyrv8slgabtdj7q2ehow16";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_14', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_14())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_14', function (cb) {
    sequence("set-param-Z_14","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_14-minify', function (cb) {
    sequence("set-param-Z_14","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z14包 圣域伏魔录 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--微信小游戏--Z15包 一五  start-----------------------------------------------------------*/

/**Z15包参数*/
var set_param_Z_15 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_15/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_15';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_15_new";
        targetProject = "wx_build/jg_gameZ_15_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ttMAItttt.js";
        libsMainJs = "tGAMEtt.js";
        packageName1 = "tIBSt";
        packageName2 = "tpft";
        packageName3 = "ttttttt";
        var clinetPbName = "tCLIENTtt.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/tINDtt.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ttINItt.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ttDOtt.js"},
            "libs/dom_parser.js":  {url:packageName1+"/ttparstt.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/tWXMtadtt.js"},
            "libs/libs.min.js":  {url:packageName1+"/ttLIB23tt.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ttfttt.js"},
            "libs/sax.js":  {url:packageName1+"/tT12tt.js"},
            "libs/weapp-adapter.js":  {url:"ta11/stE4tt.js"},
            "libs/zlib.js":  {url:packageName1+"/tt112tt.js"},
            "wxsdk":  {url:"ttkttt"},
            "wxsdk/wx_aksdk.js":  {url:"ttkttt/t6ktgt.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"ttkttt/ttsstt.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/tBFtt.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"ttdt"},
            "wxlogin_atlas": {url:"ttlgrtt"},
            "wxeff_btn_atlas":{url:"tft"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"ttdt/t1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"ttdt/t2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"ttdt/t3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"ttdt/t4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"ttdt/t5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"ttdt/t6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"ttdt/t7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"ttdt/t8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"ttdt/t9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"ttdt/t10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"ttdt/t11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"ttdt/t12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"ttdt/t13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"ttdt/t14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"ttdt/t15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"ttdt/t16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"ttdt/t17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"ttdt/t18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"ttdt/t19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"ttdt/t20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ttlgrtt/t199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ttlgrtt/t1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ttlgrtt/t123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ttlgrtt/t2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ttlgrtt/t3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ttlgrtt/t4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ttlgrtt/t5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ttlgrtt/t6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ttlgrtt/t7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ttlgrtt/t8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ttlgrtt/t9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ttlgrtt/t10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ttlgrtt/t11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ttlgrtt/t12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ttlgrtt/t13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ttlgrtt/t14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ttlgrtt/t15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ttlgrtt/t16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ttlgrtt/t17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ttlgrtt/t18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ttlgrtt/t19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ttlgrtt/t20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ttlgrtt/t21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ttlgrtt/t22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ttlgrtt/t23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ttlgrtt/t24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ttlgrtt/t25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ttlgrtt/t26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ttlgrtt/t27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ttlgrtt/t28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ttlgrtt/t29b.png"},

            "wxeff_btn_atlas/0.png": {url:"tft/t1c.png"},
            "wxeff_btn_atlas/1.png": {url:"tft/t2c.png"},
            "wxeff_btn_atlas/2.png": {url:"tft/t3c.png"},
            "wxeff_btn_atlas/3.png": {url:"tft/t4c.png"},
            "wxeff_btn_atlas/4.png": {url:"tft/t5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ttsstt",
            "./sax": "./tT12tt",
            "./dom": "./ttDOtt",
            "client_pb.js": clinetPbName,
            "protobuf.js": "tBFtt.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ttlgrtt",
            "wxeff_btn_atlas": "tft",
            "wxloading_atlas": "ttdt",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "t1a.png",
            "btn_loding_abcelq1.png": "t2a.png",
            "image_loading_bg.jpg": "t3a.jpg",
            "image_loading_bg_bottom.jpg": "t4a.jpg",
            "image_loading_bg_bottom2.jpg": "t5a.jpg",
            "image_loading_bg_left.jpg": "t6a.jpg",
            "image_loading_bg_left2.jpg": "t7a.jpg",
            "image_loading_bg_right.jpg": "t8a.jpg",
            "image_loading_bg_right2.jpg": "t9a.jpg",
            "image_loading_bg_top.jpg": "t10a.jpg",
            "image_loading_bg_top2.jpg": "t11a.jpg",
            "image_loading_bg2.jpg": "t12a.jpg",


            "image_loding_bar0.png": "t13a.png",
            "image_loding_bar1.png": "t14a.png",
            "image_loding_bar02.png": "t15a.png",
            "image_loding_bar2.png": "t16a.png",
            "image_loding_bar3.png": "t17a.png",
            "image_login_point1.png": "t18a.png",
            "image_login_point2.png":"t19a.png",
            "image_login_point3.png": "t20a.png",


            "image_xuanqu_ztjb0.png": "t199b.png",
            "image_denglu_txtshenpi.png": "t1b.png",
            "shenhezizi.png": "t123b.png",
            "image_login_loginbg.jpg": "t2b.jpg",
            "image_login_loginbg_bottom.jpg": "t3b.jpg",
            "image_login_loginbg_left.jpg": "t4b.jpg",
            "image_login_loginbg_right.jpg": "t5b.jpg",
            "image_login_loginbg_top.jpg": "t6b.jpg",
            "image_login_logo.png": "t7b.png",
            "image_login_notice.png": "t8b.png",
            "image_xuanfu_xfbg.png": "t9b.png",

            "btn_com_chuangback.png": "t10b.png",
            "btn_login_gonggao.png": "t11b.png",
            "btn_login_loginanniu.png": "t12b.png",
            "btn_login_yingsi.png": "t13b.png",
            "btn_xuanqu_anniuhuang.png": "t14b.png",
            "btn_xuanqu_anniulan.png": "t15b.png",
            "btn_xuanqu_quanniu.png": "t16b.png",
            "image_com_tuichu.png": "t17b.png",
            "image_login_changtong.png": "t18b.png",
            "image_login_fanmang.png": "t19b.png",
            "image_login_weihu.png": "t20b.png",
            "image_login_xuanqubg.png": "t21b.png",
            "image_login_init.png": "t22b.png",
            "btn_com_chuangback1.png": "t23b.png",
            "btn_com_long0.png":"t24b.png",
            "btn_com_long1.png":"t25b.png",
            "image_login_notice1.png":"t26b.png",
            "image_loding_txtbhcc.png":"t27b.png",
            "image_xuanfu_gx0.png": "t28b.png",
            "image_xuanfu_gx1.png": "t29b.png",

            "0.png": "t1c.png",
            "1.png": "t2c.png",
            "2.png": "t3c.png",
            "3.png": "t4c.png",
            "4.png": "t5c.png",

        }
        strFilePath = "/z15ttes";
        strFileName = "/z15ttiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$y", "P", "_Z", "P_", "T"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "_GVU9362EY5LDKZOIWTP0SJAQM$B4CRF78NX1H";
        str_leading2 = "aui43b7mrcls_yqgxn8do$kf2wptz6ev10j9h5";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_15', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_15())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_15', function (cb) {
    sequence("set-param-Z_15","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_15-minify', function (cb) {
    sequence("set-param-Z_15","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z15包 一五-萌将轰轰轰 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z16包 网拓安逗小游戏  start-----------------------------------------------------------*/

/**Z16包参数*/
var set_param_Z_16 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_16/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_16';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$T';
        sourceProject = "wx_build/jg_gameZ_16_new";
        targetProject = "wx_build/jg_gameZ_16_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ttMAItttt.js";
        libsMainJs = "tGAMEtt.js";
        packageName1 = "tIBSt";
        packageName2 = "tpft";
        packageName3 = "ttttttt";
        var clinetPbName = "tCLIENTtt.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/tINDtt.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ttINItt.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ttDOtt.js"},
            "libs/dom_parser.js":  {url:packageName1+"/ttparstt.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/tWXMtadtt.js"},
            "libs/libs.min.js":  {url:packageName1+"/ttLIB23tt.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ttfttt.js"},
            "libs/sax.js":  {url:packageName1+"/tT12tt.js"},
            "libs/weapp-adapter.js":  {url:"ta11/stE4tt.js"},
            "libs/zlib.js":  {url:packageName1+"/tt112tt.js"},
            "wxsdk":  {url:"ttkttt"},
            "wxsdk/wx_aksdk.js":  {url:"ttkttt/t6ktgt.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"ttkttt/ttsstt.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/tBFtt.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"ttdt"},
            "wxlogin_atlas": {url:"ttlgrtt"},
            "wxeff_btn_atlas":{url:"tft"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"ttdt/t1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"ttdt/t2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"ttdt/t3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"ttdt/t4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"ttdt/t5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"ttdt/t6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"ttdt/t7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"ttdt/t8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"ttdt/t9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"ttdt/t10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"ttdt/t11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"ttdt/t12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"ttdt/t13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"ttdt/t14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"ttdt/t15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"ttdt/t16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"ttdt/t17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"ttdt/t18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"ttdt/t19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"ttdt/t20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ttlgrtt/t199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ttlgrtt/t1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ttlgrtt/t123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ttlgrtt/t2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ttlgrtt/t3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ttlgrtt/t4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ttlgrtt/t5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ttlgrtt/t6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ttlgrtt/t7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ttlgrtt/t8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ttlgrtt/t9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ttlgrtt/t10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ttlgrtt/t11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ttlgrtt/t12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ttlgrtt/t13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ttlgrtt/t14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ttlgrtt/t15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ttlgrtt/t16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ttlgrtt/t17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ttlgrtt/t18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ttlgrtt/t19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ttlgrtt/t20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ttlgrtt/t21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ttlgrtt/t22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ttlgrtt/t23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ttlgrtt/t24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ttlgrtt/t25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ttlgrtt/t26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ttlgrtt/t27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ttlgrtt/t28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ttlgrtt/t29b.png"},

            "wxeff_btn_atlas/0.png": {url:"tft/t1c.png"},
            "wxeff_btn_atlas/1.png": {url:"tft/t2c.png"},
            "wxeff_btn_atlas/2.png": {url:"tft/t3c.png"},
            "wxeff_btn_atlas/3.png": {url:"tft/t4c.png"},
            "wxeff_btn_atlas/4.png": {url:"tft/t5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ttsstt",
            "./sax": "./tT12tt",
            "./dom": "./ttDOtt",
            "client_pb.js": clinetPbName,
            "protobuf.js": "tBFtt.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ttlgrtt",
            "wxeff_btn_atlas": "tft",
            "wxloading_atlas": "ttdt",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "t1a.png",
            "btn_loding_abcelq1.png": "t2a.png",
            "image_loading_bg.jpg": "t3a.jpg",
            "image_loading_bg_bottom.jpg": "t4a.jpg",
            "image_loading_bg_bottom2.jpg": "t5a.jpg",
            "image_loading_bg_left.jpg": "t6a.jpg",
            "image_loading_bg_left2.jpg": "t7a.jpg",
            "image_loading_bg_right.jpg": "t8a.jpg",
            "image_loading_bg_right2.jpg": "t9a.jpg",
            "image_loading_bg_top.jpg": "t10a.jpg",
            "image_loading_bg_top2.jpg": "t11a.jpg",
            "image_loading_bg2.jpg": "t12a.jpg",


            "image_loding_bar0.png": "t13a.png",
            "image_loding_bar1.png": "t14a.png",
            "image_loding_bar02.png": "t15a.png",
            "image_loding_bar2.png": "t16a.png",
            "image_loding_bar3.png": "t17a.png",
            "image_login_point1.png": "t18a.png",
            "image_login_point2.png":"t19a.png",
            "image_login_point3.png": "t20a.png",


            "image_xuanqu_ztjb0.png": "t199b.png",
            "image_denglu_txtshenpi.png": "t1b.png",
            "shenhezizi.png": "t123b.png",
            "image_login_loginbg.jpg": "t2b.jpg",
            "image_login_loginbg_bottom.jpg": "t3b.jpg",
            "image_login_loginbg_left.jpg": "t4b.jpg",
            "image_login_loginbg_right.jpg": "t5b.jpg",
            "image_login_loginbg_top.jpg": "t6b.jpg",
            "image_login_logo.png": "t7b.png",
            "image_login_notice.png": "t8b.png",
            "image_xuanfu_xfbg.png": "t9b.png",

            "btn_com_chuangback.png": "t10b.png",
            "btn_login_gonggao.png": "t11b.png",
            "btn_login_loginanniu.png": "t12b.png",
            "btn_login_yingsi.png": "t13b.png",
            "btn_xuanqu_anniuhuang.png": "t14b.png",
            "btn_xuanqu_anniulan.png": "t15b.png",
            "btn_xuanqu_quanniu.png": "t16b.png",
            "image_com_tuichu.png": "t17b.png",
            "image_login_changtong.png": "t18b.png",
            "image_login_fanmang.png": "t19b.png",
            "image_login_weihu.png": "t20b.png",
            "image_login_xuanqubg.png": "t21b.png",
            "image_login_init.png": "t22b.png",
            "btn_com_chuangback1.png": "t23b.png",
            "btn_com_long0.png":"t24b.png",
            "btn_com_long1.png":"t25b.png",
            "image_login_notice1.png":"t26b.png",
            "image_loding_txtbhcc.png":"t27b.png",
            "image_xuanfu_gx0.png": "t28b.png",
            "image_xuanfu_gx1.png": "t29b.png",

            "0.png": "t1c.png",
            "1.png": "t2c.png",
            "2.png": "t3c.png",
            "3.png": "t4c.png",
            "4.png": "t5c.png",

        }
        strFilePath = "/z16ttes";
        strFileName = "/z16ttiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$l", "W", "_X", "$L", "L9"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "TNPDFAE01RL3S2Y89$6B4JW_VCXQHZGU5OMKI7";
        str_leading2 = "9x_eckw7f2s$ql3ypt6go8rim0n45azbdv1juh";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_16', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_16())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_16', function (cb) {
    sequence("set-param-Z_16","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_16-minify', function (cb) {
    sequence("set-param-Z_16","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z16包 网拓安逗小游戏 end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--Z17包 黑骑小游戏  游戏名：剑灵世界  start-----------------------------------------------------------*/

/**Z17包参数*/
var set_param_Z_17 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_17/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_17';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$L';
        sourceProject = "wx_build/jg_gameZ_17_new";
        targetProject = "wx_build/jg_gameZ_17_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ttMAItttt.js";
        libsMainJs = "tGAMEtt.js";
        packageName1 = "tIBSt";
        packageName2 = "tpft";
        packageName3 = "ttttttt";
        var clinetPbName = "tCLIENTtt.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/tINDtt.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ttINItt.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ttDOtt.js"},
            "libs/dom_parser.js":  {url:packageName1+"/ttparstt.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/tWXMtadtt.js"},
            "libs/libs.min.js":  {url:packageName1+"/ttLIB23tt.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ttfttt.js"},
            "libs/sax.js":  {url:packageName1+"/tT12tt.js"},
            "libs/weapp-adapter.js":  {url:"ta11/stE4tt.js"},
            "libs/zlib.js":  {url:packageName1+"/tt112tt.js"},
            "wxsdk":  {url:"ttkttt"},
            "wxsdk/wx_aksdk.js":  {url:"ttkttt/t6ktgt.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"ttkttt/ttsstt.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/tBFtt.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"ttdt"},
            "wxlogin_atlas": {url:"ttlgrtt"},
            "wxeff_btn_atlas":{url:"tft"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"ttdt/t1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"ttdt/t2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"ttdt/t3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"ttdt/t4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"ttdt/t5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"ttdt/t6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"ttdt/t7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"ttdt/t8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"ttdt/t9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"ttdt/t10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"ttdt/t11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"ttdt/t12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"ttdt/t13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"ttdt/t14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"ttdt/t15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"ttdt/t16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"ttdt/t17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"ttdt/t18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"ttdt/t19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"ttdt/t20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ttlgrtt/t199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ttlgrtt/t1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ttlgrtt/t123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ttlgrtt/t2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ttlgrtt/t3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ttlgrtt/t4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ttlgrtt/t5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ttlgrtt/t6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ttlgrtt/t7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ttlgrtt/t8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ttlgrtt/t9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ttlgrtt/t10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ttlgrtt/t11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ttlgrtt/t12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ttlgrtt/t13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ttlgrtt/t14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ttlgrtt/t15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ttlgrtt/t16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ttlgrtt/t17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ttlgrtt/t18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ttlgrtt/t19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ttlgrtt/t20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ttlgrtt/t21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ttlgrtt/t22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ttlgrtt/t23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ttlgrtt/t24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ttlgrtt/t25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ttlgrtt/t26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ttlgrtt/t27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ttlgrtt/t28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ttlgrtt/t29b.png"},

            "wxeff_btn_atlas/0.png": {url:"tft/t1c.png"},
            "wxeff_btn_atlas/1.png": {url:"tft/t2c.png"},
            "wxeff_btn_atlas/2.png": {url:"tft/t3c.png"},
            "wxeff_btn_atlas/3.png": {url:"tft/t4c.png"},
            "wxeff_btn_atlas/4.png": {url:"tft/t5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ttsstt",
            "./sax": "./tT12tt",
            "./dom": "./ttDOtt",
            "client_pb.js": clinetPbName,
            "protobuf.js": "tBFtt.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ttlgrtt",
            "wxeff_btn_atlas": "tft",
            "wxloading_atlas": "ttdt",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "t1a.png",
            "btn_loding_abcelq1.png": "t2a.png",
            "image_loading_bg.jpg": "t3a.jpg",
            "image_loading_bg_bottom.jpg": "t4a.jpg",
            "image_loading_bg_bottom2.jpg": "t5a.jpg",
            "image_loading_bg_left.jpg": "t6a.jpg",
            "image_loading_bg_left2.jpg": "t7a.jpg",
            "image_loading_bg_right.jpg": "t8a.jpg",
            "image_loading_bg_right2.jpg": "t9a.jpg",
            "image_loading_bg_top.jpg": "t10a.jpg",
            "image_loading_bg_top2.jpg": "t11a.jpg",
            "image_loading_bg2.jpg": "t12a.jpg",


            "image_loding_bar0.png": "t13a.png",
            "image_loding_bar1.png": "t14a.png",
            "image_loding_bar02.png": "t15a.png",
            "image_loding_bar2.png": "t16a.png",
            "image_loding_bar3.png": "t17a.png",
            "image_login_point1.png": "t18a.png",
            "image_login_point2.png":"t19a.png",
            "image_login_point3.png": "t20a.png",


            "image_xuanqu_ztjb0.png": "t199b.png",
            "image_denglu_txtshenpi.png": "t1b.png",
            "shenhezizi.png": "t123b.png",
            "image_login_loginbg.jpg": "t2b.jpg",
            "image_login_loginbg_bottom.jpg": "t3b.jpg",
            "image_login_loginbg_left.jpg": "t4b.jpg",
            "image_login_loginbg_right.jpg": "t5b.jpg",
            "image_login_loginbg_top.jpg": "t6b.jpg",
            "image_login_logo.png": "t7b.png",
            "image_login_notice.png": "t8b.png",
            "image_xuanfu_xfbg.png": "t9b.png",

            "btn_com_chuangback.png": "t10b.png",
            "btn_login_gonggao.png": "t11b.png",
            "btn_login_loginanniu.png": "t12b.png",
            "btn_login_yingsi.png": "t13b.png",
            "btn_xuanqu_anniuhuang.png": "t14b.png",
            "btn_xuanqu_anniulan.png": "t15b.png",
            "btn_xuanqu_quanniu.png": "t16b.png",
            "image_com_tuichu.png": "t17b.png",
            "image_login_changtong.png": "t18b.png",
            "image_login_fanmang.png": "t19b.png",
            "image_login_weihu.png": "t20b.png",
            "image_login_xuanqubg.png": "t21b.png",
            "image_login_init.png": "t22b.png",
            "btn_com_chuangback1.png": "t23b.png",
            "btn_com_long0.png":"t24b.png",
            "btn_com_long1.png":"t25b.png",
            "image_login_notice1.png":"t26b.png",
            "image_loding_txtbhcc.png":"t27b.png",
            "image_xuanfu_gx0.png": "t28b.png",
            "image_xuanfu_gx1.png": "t29b.png",

            "0.png": "t1c.png",
            "1.png": "t2c.png",
            "2.png": "t3c.png",
            "3.png": "t4c.png",
            "4.png": "t5c.png",

        }
        strFilePath = "/z17ttes";
        strFileName = "/z17ttiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["u$", "g", "s_", "p", "_d"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "T1S4HF92R0UDV85Z7PMJWGNKOA_Q$Y3ILBXE6C";
        str_leading2 = "13tr6fdq5uv29b$7lzomcpx4igyjnk_we8hsa0";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_17', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_17())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_17', function (cb) {
    sequence("set-param-Z_17","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_17-minify', function (cb) {
    sequence("set-param-Z_17","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z17包 黑骑小游戏  游戏名：剑灵世界 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z17包.趣浓vs闲闲  start-----------------------------------------------------------*/

/**Z18包参数*/
var set_param_Z_18 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_18/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_18';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_18_new";
        targetProject = "wx_build/jg_gameZ_18_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "ttMAItttt.js";
        libsMainJs = "tGAMEtt.js";
        packageName1 = "tIBSt";
        packageName2 = "tpft";
        packageName3 = "ttttttt";
        var clinetPbName = "tCLIENTtt.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/tINDtt.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ttINItt.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ttDOtt.js"},
            "libs/dom_parser.js":  {url:packageName1+"/ttparstt.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/tWXMtadtt.js"},
            "libs/libs.min.js":  {url:packageName1+"/ttLIB23tt.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ttfttt.js"},
            "libs/sax.js":  {url:packageName1+"/tT12tt.js"},
            "libs/weapp-adapter.js":  {url:"ta11/stE4tt.js"},
            "libs/zlib.js":  {url:packageName1+"/tt112tt.js"},
            "wxsdk":  {url:"ttkttt"},
            "wxsdk/wx_aksdk.js":  {url:"ttkttt/t6ktgt.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"ttkttt/ttsstt.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/tBFtt.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"ttdt"},
            "wxlogin_atlas": {url:"ttlgrtt"},
            "wxeff_btn_atlas":{url:"tft"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"ttdt/t1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"ttdt/t2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"ttdt/t3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"ttdt/t4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"ttdt/t5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"ttdt/t6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"ttdt/t7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"ttdt/t8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"ttdt/t9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"ttdt/t10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"ttdt/t11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"ttdt/t12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"ttdt/t13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"ttdt/t14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"ttdt/t15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"ttdt/t16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"ttdt/t17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"ttdt/t18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"ttdt/t19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"ttdt/t20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ttlgrtt/t199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ttlgrtt/t1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ttlgrtt/t123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ttlgrtt/t2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ttlgrtt/t3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ttlgrtt/t4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ttlgrtt/t5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ttlgrtt/t6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ttlgrtt/t7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ttlgrtt/t8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ttlgrtt/t9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ttlgrtt/t10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ttlgrtt/t11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ttlgrtt/t12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ttlgrtt/t13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ttlgrtt/t14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ttlgrtt/t15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ttlgrtt/t16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ttlgrtt/t17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ttlgrtt/t18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ttlgrtt/t19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ttlgrtt/t20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ttlgrtt/t21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ttlgrtt/t22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ttlgrtt/t23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ttlgrtt/t24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ttlgrtt/t25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ttlgrtt/t26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ttlgrtt/t27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ttlgrtt/t28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ttlgrtt/t29b.png"},

            "wxeff_btn_atlas/0.png": {url:"tft/t1c.png"},
            "wxeff_btn_atlas/1.png": {url:"tft/t2c.png"},
            "wxeff_btn_atlas/2.png": {url:"tft/t3c.png"},
            "wxeff_btn_atlas/3.png": {url:"tft/t4c.png"},
            "wxeff_btn_atlas/4.png": {url:"tft/t5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ttsstt",
            "./sax": "./tT12tt",
            "./dom": "./ttDOtt",
            "client_pb.js": clinetPbName,
            "protobuf.js": "tBFtt.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ttlgrtt",
            "wxeff_btn_atlas": "tft",
            "wxloading_atlas": "ttdt",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "t1a.png",
            "btn_loding_abcelq1.png": "t2a.png",
            "image_loading_bg.jpg": "t3a.jpg",
            "image_loading_bg_bottom.jpg": "t4a.jpg",
            "image_loading_bg_bottom2.jpg": "t5a.jpg",
            "image_loading_bg_left.jpg": "t6a.jpg",
            "image_loading_bg_left2.jpg": "t7a.jpg",
            "image_loading_bg_right.jpg": "t8a.jpg",
            "image_loading_bg_right2.jpg": "t9a.jpg",
            "image_loading_bg_top.jpg": "t10a.jpg",
            "image_loading_bg_top2.jpg": "t11a.jpg",
            "image_loading_bg2.jpg": "t12a.jpg",


            "image_loding_bar0.png": "t13a.png",
            "image_loding_bar1.png": "t14a.png",
            "image_loding_bar02.png": "t15a.png",
            "image_loding_bar2.png": "t16a.png",
            "image_loding_bar3.png": "t17a.png",
            "image_login_point1.png": "t18a.png",
            "image_login_point2.png":"t19a.png",
            "image_login_point3.png": "t20a.png",


            "image_xuanqu_ztjb0.png": "t199b.png",
            "image_denglu_txtshenpi.png": "t1b.png",
            "shenhezizi.png": "t123b.png",
            "image_login_loginbg.jpg": "t2b.jpg",
            "image_login_loginbg_bottom.jpg": "t3b.jpg",
            "image_login_loginbg_left.jpg": "t4b.jpg",
            "image_login_loginbg_right.jpg": "t5b.jpg",
            "image_login_loginbg_top.jpg": "t6b.jpg",
            "image_login_logo.png": "t7b.png",
            "image_login_notice.png": "t8b.png",
            "image_xuanfu_xfbg.png": "t9b.png",

            "btn_com_chuangback.png": "t10b.png",
            "btn_login_gonggao.png": "t11b.png",
            "btn_login_loginanniu.png": "t12b.png",
            "btn_login_yingsi.png": "t13b.png",
            "btn_xuanqu_anniuhuang.png": "t14b.png",
            "btn_xuanqu_anniulan.png": "t15b.png",
            "btn_xuanqu_quanniu.png": "t16b.png",
            "image_com_tuichu.png": "t17b.png",
            "image_login_changtong.png": "t18b.png",
            "image_login_fanmang.png": "t19b.png",
            "image_login_weihu.png": "t20b.png",
            "image_login_xuanqubg.png": "t21b.png",
            "image_login_init.png": "t22b.png",
            "btn_com_chuangback1.png": "t23b.png",
            "btn_com_long0.png":"t24b.png",
            "btn_com_long1.png":"t25b.png",
            "image_login_notice1.png":"t26b.png",
            "image_loding_txtbhcc.png":"t27b.png",
            "image_xuanfu_gx0.png": "t28b.png",
            "image_xuanfu_gx1.png": "t29b.png",

            "0.png": "t1c.png",
            "1.png": "t2c.png",
            "2.png": "t3c.png",
            "3.png": "t4c.png",
            "4.png": "t5c.png",

        }
        strFilePath = "/z18ttes";
        strFileName = "/z18ttiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$d", "v", "s", "D$", "z"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "HQ45$X317NGYCVOE9PWD0LRAST62ZKJUBFM8I_";
        str_leading2 = "iegbsn0apm6vjx$97_f51zrtykulh34d82cqow";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_18', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_18())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_18', function (cb) {
    sequence("set-param-Z_18","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_18-minify', function (cb) {
    sequence("set-param-Z_18","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z18包 .趣浓vs闲闲 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z19 9130vs火速混墨阳战神风云 start-----------------------------------------------------------*/


/**Z_19包参数*/
var set_param_Z_19 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_19/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_19';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'x$';
        sourceProject = "wx_build/jg_gameZ_19_new";
        targetProject = "wx_build/jg_gameZ_19_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "z8882Mz888Iz8882.js";
        libsMainJs = "z8882Gz888MEz8882.js";
        packageName1 = "z8882Iz8882";
        packageName2 = "z8882pftz8882";
        packageName3 = "z888z888z888z888z888";
        var clinetPbName = "z888z888IENz888z888.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/z888INDz888z888.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/z888z888INIz888az888.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/z888z888DOz888z888.js"},
            "libs/dom_parser.js":  {url:packageName1+"/z888z888parsaz888.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/z888z888Mtadz888z888.js"},
            "libs/libs.min.js":  {url:packageName1+"/z888z888Iz8881z888z888.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/z888z888bfz888z888.js"},
            "libs/sax.js":  {url:packageName1+"/z888z888cz888z888.js"},
            "libs/weapp-adapter.js":  {url:"xv2/z888z888E4z888z888.js"},
            "libs/zlib.js":  {url:packageName1+"/z888z88811z888z888.js"},
            "wxsdk":  {url:"z888z888basdz888"},
            "wxsdk/wx_aksdk.js":  {url:"z888z888basdz888/z8885sdkz888.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"z888z888basdz888/a5sshz888z888.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/z888z888Fz888z888.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            // "untils/ddtSDKPlat.js":  {url:"untils/ddtSDKPlat.js",extractStr:false,count:1,strLen:3},
            "wxloading_atlas": {url:"z888z888dz888"},
            "wxlogin_atlas": {url:"z888z888lgrz888z888"},
            "wxeff_btn_atlas":{url:"z888yz888"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"z888z888dz888/z888z8881a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"z888z888dz888/z888z8882a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"z888z888dz888/z888z8883a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"z888z888dz888/z888z8884a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"z888z888dz888/z888z8885a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"z888z888dz888/z888z8886a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"z888z888dz888/z888z8887a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"z888z888dz888/z888z8888a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"z888z888dz888/z888z8889a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"z888z888dz888/z888z88810a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"z888z888dz888/z888z88811a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"z888z888dz888/z888z88812a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"z888z888dz888/z888z88813a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"z888z888dz888/z888z88814a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"z888z888dz888/z888z88815a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"z888z888dz888/z888z88816a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"z888z888dz888/z888z88817a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"z888z888dz888/z888z88818a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"z888z888dz888/z888z88819a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"z888z888dz888/z888z88820a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"z888z888lgrz888z888/z888z888199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"z888z888lgrz888z888/z888z8881b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"z888z888lgrz888z888/z888z888123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"z888z888lgrz888z888/z888z8882b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"z888z888lgrz888z888/z888z8883b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"z888z888lgrz888z888/z888z8884b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"z888z888lgrz888z888/z888z8885b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"z888z888lgrz888z888/z888z8886b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"z888z888lgrz888z888/z888z8887b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"z888z888lgrz888z888/z888z8888b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"z888z888lgrz888z888/z888z8889b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"z888z888lgrz888z888/z888z88810b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"z888z888lgrz888z888/z888z88811b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"z888z888lgrz888z888/z888z88812b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"z888z888lgrz888z888/z888z88813b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"z888z888lgrz888z888/z888z88814b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"z888z888lgrz888z888/z888z88815b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"z888z888lgrz888z888/z888z88816b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"z888z888lgrz888z888/z888z88817b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"z888z888lgrz888z888/z888z88818b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"z888z888lgrz888z888/z888z88819b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"z888z888lgrz888z888/z888z88820b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"z888z888lgrz888z888/z888z88821b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"z888z888lgrz888z888/z888z88822b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"z888z888lgrz888z888/z888z88823b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"z888z888lgrz888z888/z888z88824b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"z888z888lgrz888z888/z888z88825b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"z888z888lgrz888z888/z888z88826b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"z888z888lgrz888z888/z888z88827b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"z888z888lgrz888z888/z888z88828b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"z888z888lgrz888z888/z888z88829b.png"},

            "wxeff_btn_atlas/0.png": {url:"z888yz888/z888z8881c.png"},
            "wxeff_btn_atlas/1.png": {url:"z888yz888/z888z8882c.png"},
            "wxeff_btn_atlas/2.png": {url:"z888yz888/z888z8883c.png"},
            "wxeff_btn_atlas/3.png": {url:"z888yz888/z888z8884c.png"},
            "wxeff_btn_atlas/4.png": {url:"z888yz888/z888z8885c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshz888z888",
            "./sax": "./z888z888cz888z888",
            "./dom": "./z888z888DOz888z888",
            "client_pb.js": clinetPbName,
            "protobuf.js": "z888z888Fz888z888.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "z888z888lgrz888z888",
            "wxeff_btn_atlas": "z888yz888",
            "wxloading_atlas": "z888z888dz888",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "z888z8881a.png",
            "btn_loding_abcelq1.png": "z888z8882a.png",
            "image_loading_bg.jpg": "z888z8883a.jpg",
            "image_loading_bg_bottom.jpg": "z888z8884a.jpg",
            "image_loading_bg_bottom2.jpg": "z888z8885a.jpg",
            "image_loading_bg_left.jpg": "z888z8886a.jpg",
            "image_loading_bg_left2.jpg": "z888z8887a.jpg",
            "image_loading_bg_right.jpg": "z888z8888a.jpg",
            "image_loading_bg_right2.jpg": "z888z8889a.jpg",
            "image_loading_bg_top.jpg": "z888z88810a.jpg",
            "image_loading_bg_top2.jpg": "z888z88811a.jpg",
            "image_loading_bg2.jpg": "z888z88812a.jpg",


            "image_loding_bar0.png": "z888z88813a.png",
            "image_loding_bar1.png": "z888z88814a.png",
            "image_loding_bar02.png": "z888z88815a.png",
            "image_loding_bar2.png": "z888z88816a.png",
            "image_loding_bar3.png": "z888z88817a.png",
            "image_login_point1.png": "z888z88818a.png",
            "image_login_point2.png":"z888z88819a.png",
            "image_login_point3.png": "z888z88820a.png",


            "image_xuanqu_ztjb0.png": "z888z888199b.png",
            "image_denglu_txtshenpi.png": "z888z8881b.png",
            "shenhezizi.png": "z888z888123b.png",
            "image_login_loginbg.jpg": "z888z8882b.jpg",
            "image_login_loginbg_bottom.jpg": "z888z8883b.jpg",
            "image_login_loginbg_left.jpg": "z888z8884b.jpg",
            "image_login_loginbg_right.jpg": "z888z8885b.jpg",
            "image_login_loginbg_top.jpg": "z888z8886b.jpg",
            "image_login_logo.png": "z888z8887b.png",
            "image_login_notice.png": "z888z8888b.png",
            "image_xuanfu_xfbg.png": "z888z8889b.png",

            "btn_com_chuangback.png": "z888z88810b.png",
            "btn_login_gonggao.png": "z888z88811b.png",
            "btn_login_loginanniu.png": "z888z88812b.png",
            "btn_login_yingsi.png": "z888z88813b.png",
            "btn_xuanqu_anniuhuang.png": "z888z88814b.png",
            "btn_xuanqu_anniulan.png": "z888z88815b.png",
            "btn_xuanqu_quanniu.png": "z888z88816b.png",
            "image_com_tuichu.png": "z888z88817b.png",
            "image_login_changtong.png": "z888z88818b.png",
            "image_login_fanmang.png": "z888z88819b.png",
            "image_login_weihu.png": "z888z88820b.png",
            "image_login_xuanqubg.png": "z888z88821b.png",
            "image_login_init.png": "z888z88822b.png",
            "btn_com_chuangback1.png": "z888z88823b.png",
            "btn_com_long0.png":"z888z88824b.png",
            "btn_com_long1.png":"z888z88825b.png",
            "image_login_notice1.png":"z888z88826b.png",
            "image_loding_txtbhcc.png":"z888z88827b.png",
            "image_xuanfu_gx0.png": "z888z88828b.png",
            "image_xuanfu_gx1.png": "z888z88829b.png",

            "0.png": "z888z8881c.png",
            "1.png": "z888z8882c.png",
            "2.png": "z888z8883c.png",
            "3.png": "z888z8884c.png",
            "4.png": "z888z8885c.png",

        }
        strFilePath = "/Z19es";
        strFileName = "/Z19iles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$x", "u", "v1", "x1", "x"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "GA608EHV4$1_PMZDUOJTNCFXYRWQ7S529KILB3";
        str_leading2 = "jc2hyixtbnzmsr_$eq38l67vak5f4dou1w0p9g";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_19', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_19())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_19', function (cb) {
    sequence("set-param-Z_19","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_19-minify', function (cb) {
    sequence("set-param-Z_19","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z19包 9130vs火速混墨阳  战神风云 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--魔法风云纪-Z_20 start-----------------------------------------------------------*/


/**Z_20包参数*/
var set_param_Z_20 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_20/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_20';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_20_new";
        targetProject = "wx_build/jg_gameZ_20_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "LLLMAIN.js";
        libsMainJs = "LLLLGAME.js";
        packageName1 = "LLLLIBS";
        packageName2 = "LLLLLLPF";
        packageName3 = "LLLLLLLL";
        var clinetPbName = "LLLCLIENTPB.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/LLLLINDEX.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/LLLINITMIN.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/LLLDOM.js"},
            "libs/dom_parser.js":  {url:packageName1+"/LLLDOMPARSER.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/LLLLWXMINI.js"},
            "libs/libs.min.js":  {url:packageName1+"/llllLIBSMIN.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/lllMDFIVEMIN.js"},
            "libs/sax.js":  {url:packageName1+"/lllSAX.js"},
            "libs/weapp-adapter.js":  {url:"srcds312/lllWEASAF.js"},
            "libs/zlib.js":  {url:packageName1+"/lllZLIBS.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"llllSDK"},
            "wxsdk/wx_aksdk.js":  {url:"llllSDK/llllSDDK.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"llllSDK/llllHELP.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/llllllBF.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"lllllLOADING"},
            "wxlogin_atlas": {url:"llllLOGIN"},
            "wxeff_btn_atlas":{url:"llllWXEFF"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/lllllLOADING.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"lllllLOADING/l1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"lllllLOADING/l2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"lllllLOADING/l3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"lllllLOADING/l4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"lllllLOADING/l5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"lllllLOADING/l6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"lllllLOADING/l7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"lllllLOADING/l8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"lllllLOADING/l9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"lllllLOADING/l10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"lllllLOADING/l11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"lllllLOADING/l12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"lllllLOADING/l13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"lllllLOADING/l14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"lllllLOADING/l15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"lllllLOADING/l16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"lllllLOADING/l17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"lllllLOADING/l18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"lllllLOADING/l19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"lllllLOADING/l20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"llllLOGIN/l199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"llllLOGIN/l1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"llllLOGIN/l123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"llllLOGIN/l2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"llllLOGIN/l3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"llllLOGIN/l4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"llllLOGIN/l5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"llllLOGIN/l6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"llllLOGIN/l7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"llllLOGIN/l8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"llllLOGIN/l9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"llllLOGIN/l10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"llllLOGIN/l11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"llllLOGIN/l12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"llllLOGIN/l13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"llllLOGIN/l14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"llllLOGIN/l15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"llllLOGIN/l16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"llllLOGIN/l17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"llllLOGIN/l18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"llllLOGIN/l19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"llllLOGIN/l20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"llllLOGIN/l21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"llllLOGIN/l22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"llllLOGIN/l23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"llllLOGIN/l24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"llllLOGIN/l25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"llllLOGIN/l26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"llllLOGIN/l27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"llllLOGIN/l28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"llllLOGIN/l29b.png"},

            "wxeff_btn_atlas/0.png": {url:"llllWXEFF/l1c.png"},
            "wxeff_btn_atlas/1.png": {url:"llllWXEFF/l2c.png"},
            "wxeff_btn_atlas/2.png": {url:"llllWXEFF/l3c.png"},
            "wxeff_btn_atlas/3.png": {url:"llllWXEFF/l4c.png"},
            "wxeff_btn_atlas/4.png": {url:"llllWXEFF/l5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "llllHELP",
            "./sax": "./lllSAX",
            "./dom": "./LLLDOM",
            "client_pb.js": clinetPbName,
            "protobuf.js": "llllllBF.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "llllLOGIN",
            "wxeff_btn_atlas": "llllWXEFF",
            "wxloading_atlas": "lllllLOADING",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "l1a.png",
            "btn_loding_abcelq1.png": "l2a.png",
            "image_loading_bg.jpg": "l3a.jpg",
            "image_loading_bg_bottom.jpg": "l4a.jpg",
            "image_loading_bg_bottom2.jpg": "l5a.jpg",
            "image_loading_bg_left.jpg": "l6a.jpg",
            "image_loading_bg_left2.jpg": "l7a.jpg",
            "image_loading_bg_right.jpg": "l8a.jpg",
            "image_loading_bg_right2.jpg": "l9a.jpg",
            "image_loading_bg_top.jpg": "l10a.jpg",
            "image_loading_bg_top2.jpg": "l11a.jpg",
            "image_loading_bg2.jpg": "l12a.jpg",

            "image_loding_bar0.png": "l13a.png",
            "image_loding_bar1.png": "l14a.png",
            "image_loding_bar02.png": "l15a.png",
            "image_loding_bar2.png": "l16a.png",
            "image_loding_bar3.png": "l17a.png",
            "image_login_point1.png": "l18a.png",
            "image_login_point2.png":"l19a.png",
            "image_login_point3.png": "l20a.png",


            "image_xuanqu_ztjb0.png": "l199b.png",
            "image_denglu_txtshenpi.png": "l1b.png",
            "shenhezizi.png": "l123b.png",
            "image_login_loginbg.jpg": "l2b.jpg",
            "image_login_loginbg_bottom.jpg": "l3b.jpg",
            "image_login_loginbg_left.jpg": "l4b.jpg",
            "image_login_loginbg_right.jpg": "l5b.jpg",
            "image_login_loginbg_top.jpg": "l6b.jpg",
            "image_login_logo.png": "l7b.png",
            "image_login_notice.png": "l8b.png",
            "image_xuanfu_xfbg.png": "l9b.png",

            "btn_com_chuangback.png": "l10b.png",
            "btn_login_gonggao.png": "l11b.png",
            "btn_login_loginanniu.png": "l12b.png",
            "btn_login_yingsi.png": "l13b.png",
            "btn_xuanqu_anniuhuang.png": "l14b.png",
            "btn_xuanqu_anniulan.png": "l15b.png",
            "btn_xuanqu_quanniu.png": "l16b.png",
            "image_com_tuichu.png": "l17b.png",
            "image_login_changtong.png": "l18b.png",
            "image_login_fanmang.png": "l19b.png",
            "image_login_weihu.png": "l20b.png",
            "image_login_xuanqubg.png": "l21b.png",
            "image_login_init.png": "l22b.png",
            "btn_com_chuangback1.png": "l23b.png",
            "btn_com_long0.png":"l24b.png",
            "btn_com_long1.png":"l25b.png",
            "image_login_notice1.png":"l26b.png",
            "image_loding_txtbhcc.png":"l27b.png",
            "image_xuanfu_gx0.png": "l28b.png",
            "image_xuanfu_gx1.png": "l29b.png",

            "0.png": "l1c.png",
            "1.png": "l2c.png",
            "2.png": "l3c.png",
            "3.png": "l4c.png",
            "4.png": "l5c.png",

        }
        strFilePath = "/Z20es";
        strFileName = "/Z20iles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$l", "W", "_X", "$L", "L9"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "MR7UX4Q5LY_I6$PVKW08NZ1923DCJFHTSGEAOB";
        str_leading2 = "jren7cwyk3zv2_61i8blfud9xa5sp4qho0m$tg";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_20', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_20())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_20', function (cb) {
    sequence("set-param-Z_20","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_20-minify', function (cb) {
    sequence("set-param-Z_20","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--魔法风云纪-Z_20 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--米壳-微信御天-Z_21 start-----------------------------------------------------------*/


/**Z_21包参数*/
var set_param_Z_21 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_21/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_21';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'T$';
        sourceProject = "wx_build/jg_gameZ_21_new";
        targetProject = "wx_build/jg_gameZ_21_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "z21MAItttt.js";
        libsMainJs = "z21tGAMEtt.js";
        packageName1 = "z21tIBSt";
        packageName2 = "z21tpft";
        packageName3 = "z21ttttttt";
        var clinetPbName = "z21tCLIENTtt.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/tINDtt.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/ttINItt.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/ttDOtt.js"},
            "libs/dom_parser.js":  {url:packageName1+"/ttparstt.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/tWXMtadtt.js"},
            "libs/libs.min.js":  {url:packageName1+"/ttLIB23tt.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/ttfttt.js"},
            "libs/sax.js":  {url:packageName1+"/tT12tt.js"},
            "libs/weapp-adapter.js":  {url:"ta11/stE4tt.js"},
            "libs/zlib.js":  {url:packageName1+"/tt112tt.js"},
            "wxsdk":  {url:"ttkttt"},
            "wxsdk/wx_aksdk.js":  {url:"ttkttt/t6ktgt.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"ttkttt/ttsstt.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/tBFtt.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            "wxloading_atlas": {url:"ttdt"},
            "wxlogin_atlas": {url:"ttlgrtt"},
            "wxeff_btn_atlas":{url:"tft"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"ttdt/t1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"ttdt/t2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"ttdt/t3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"ttdt/t4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"ttdt/t5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"ttdt/t6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"ttdt/t7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"ttdt/t8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"ttdt/t9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"ttdt/t10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"ttdt/t11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"ttdt/t12a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"ttdt/t13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"ttdt/t14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"ttdt/t15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"ttdt/t16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"ttdt/t17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"ttdt/t18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"ttdt/t19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"ttdt/t20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"ttlgrtt/t199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ttlgrtt/t1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"ttlgrtt/t123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"ttlgrtt/t2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"ttlgrtt/t3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"ttlgrtt/t4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"ttlgrtt/t5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"ttlgrtt/t6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"ttlgrtt/t7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"ttlgrtt/t8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"ttlgrtt/t9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"ttlgrtt/t10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"ttlgrtt/t11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"ttlgrtt/t12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"ttlgrtt/t13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"ttlgrtt/t14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"ttlgrtt/t15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"ttlgrtt/t16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"ttlgrtt/t17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"ttlgrtt/t18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"ttlgrtt/t19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"ttlgrtt/t20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"ttlgrtt/t21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"ttlgrtt/t22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"ttlgrtt/t23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"ttlgrtt/t24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"ttlgrtt/t25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"ttlgrtt/t26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"ttlgrtt/t27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"ttlgrtt/t28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"ttlgrtt/t29b.png"},

            "wxeff_btn_atlas/0.png": {url:"tft/t1c.png"},
            "wxeff_btn_atlas/1.png": {url:"tft/t2c.png"},
            "wxeff_btn_atlas/2.png": {url:"tft/t3c.png"},
            "wxeff_btn_atlas/3.png": {url:"tft/t4c.png"},
            "wxeff_btn_atlas/4.png": {url:"tft/t5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "ttsstt",
            "./sax": "./tT12tt",
            "./dom": "./ttDOtt",
            "client_pb.js": clinetPbName,
            "protobuf.js": "tBFtt.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "ttlgrtt",
            "wxeff_btn_atlas": "tft",
            "wxloading_atlas": "ttdt",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "t1a.png",
            "btn_loding_abcelq1.png": "t2a.png",
            "image_loading_bg.jpg": "t3a.jpg",
            "image_loading_bg_bottom.jpg": "t4a.jpg",
            "image_loading_bg_bottom2.jpg": "t5a.jpg",
            "image_loading_bg_left.jpg": "t6a.jpg",
            "image_loading_bg_left2.jpg": "t7a.jpg",
            "image_loading_bg_right.jpg": "t8a.jpg",
            "image_loading_bg_right2.jpg": "t9a.jpg",
            "image_loading_bg_top.jpg": "t10a.jpg",
            "image_loading_bg_top2.jpg": "t11a.jpg",
            "image_loading_bg2.jpg": "t12a.jpg",


            "image_loding_bar0.png": "t13a.png",
            "image_loding_bar1.png": "t14a.png",
            "image_loding_bar02.png": "t15a.png",
            "image_loding_bar2.png": "t16a.png",
            "image_loding_bar3.png": "t17a.png",
            "image_login_point1.png": "t18a.png",
            "image_login_point2.png":"t19a.png",
            "image_login_point3.png": "t20a.png",

            "image_xuanqu_ztjb0.png": "t199b.png",
            "image_denglu_txtshenpi.png": "t1b.png",
            "shenhezizi.png": "t123b.png",
            "image_login_loginbg.jpg": "t2b.jpg",
            "image_login_loginbg_bottom.jpg": "t3b.jpg",
            "image_login_loginbg_left.jpg": "t4b.jpg",
            "image_login_loginbg_right.jpg": "t5b.jpg",
            "image_login_loginbg_top.jpg": "t6b.jpg",
            "image_login_logo.png": "t7b.png",
            "image_login_notice.png": "t8b.png",
            "image_xuanfu_xfbg.png": "t9b.png",

            "btn_com_chuangback.png": "t10b.png",
            "btn_login_gonggao.png": "t11b.png",
            "btn_login_loginanniu.png": "t12b.png",
            "btn_login_yingsi.png": "t13b.png",
            "btn_xuanqu_anniuhuang.png": "t14b.png",
            "btn_xuanqu_anniulan.png": "t15b.png",
            "btn_xuanqu_quanniu.png": "t16b.png",
            "image_com_tuichu.png": "t17b.png",
            "image_login_changtong.png": "t18b.png",
            "image_login_fanmang.png": "t19b.png",
            "image_login_weihu.png": "t20b.png",
            "image_login_xuanqubg.png": "t21b.png",
            "image_login_init.png": "t22b.png",
            "btn_com_chuangback1.png": "t23b.png",
            "btn_com_long0.png":"t24b.png",
            "btn_com_long1.png":"t25b.png",
            "image_login_notice1.png":"t26b.png",
            "image_loding_txtbhcc.png":"t27b.png",
            "image_xuanfu_gx0.png": "t28b.png",
            "image_xuanfu_gx1.png": "t29b.png",

            "0.png": "t1c.png",
            "1.png": "t2c.png",
            "2.png": "t3c.png",
            "3.png": "t4c.png",
            "4.png": "t5c.png",

        }
        strFilePath = "/z21ttes";
        strFileName = "/z21ttiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$d", "v", "s", "D$", "z"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        buildPACK = "Z_21";
        str_leading1 = "MR7UX4Q5LY_I6$PVKW08NZ1923DCJFHTSGEAOB";
        str_leading2 = "jren7cwyk3zv2_61i8blfud9xa5sp4qho0m$tg";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_21', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_21())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_21', function (cb) {
    sequence("set-param-Z_21","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_21-minify', function (cb) {
    sequence("set-param-Z_21","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--米壳-微信御天-Z_21end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z-22 有一 封神之怒包  start-----------------------------------------------------------*/


/**Z_22包参数*/
var set_param_Z_22 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_22/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_22';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_22_new";
        targetProject = "wx_build/jg_gameZ_22_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "eeemain.js";
        packageName1 = "eeelibs";
        packageName2 = "eeeeeepf";
        packageName3 = "eeeeeeee";
        libsMainJs = "eeegame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/eeeindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/eeeinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/eeedom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/eeedomparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/eeewxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/eeelibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/eeemd5min.js"},
            "libs/sax.js":  {url:packageName1+"/eeesax.js"},
            "libs/weapp-adapter.js":  {url:"eessss/eeeweasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/eeezlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"eeeesdk"},
            "wxsdk/wx_aksdk.js":  {url:"eeeesdk/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"eeeesdk/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/eeecleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/eeeeBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"eeeloding"},
            "wxlogin_atlas": {url:"eeelogin"},
            "wxeff_btn_atlas":{url:"eewxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/eeeloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"eeeloding/e1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"eeeloding/e2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"eeeloding/e3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"eeeloding/e4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"eeeloding/e5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"eeeloding/e6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"eeeloding/e7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"eeeloding/e8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"eeeloding/e9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"eeeloding/e10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"eeeloding/e11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"eeeloding/e12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"eeeloding/e13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"eeeloding/e14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"eeeloding/e15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"eeeloding/e16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"eeeloding/e17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"eeeloding/e18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"eeeloding/e19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"eeeloding/e20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"eeelogin/e199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"eeelogin/e1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"eeelogin/e123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"eeelogin/e2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"eeelogin/e3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"eeelogin/e4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"eeelogin/e5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"eeelogin/e6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"eeelogin/e7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"eeelogin/e8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"eeelogin/e9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"eeelogin/e10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"eeelogin/e11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"eeelogin/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"eeelogin/e13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"eeelogin/e14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"eeelogin/e15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"eeelogin/e16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"eeelogin/e17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"eeelogin/e18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"eeelogin/e19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"eeelogin/e20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"eeelogin/e21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"eeelogin/e22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"eeelogin/e23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"eeelogin/e24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"eeelogin/e25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"eeelogin/e26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"eeelogin/e27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"eeelogin/e28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"eeelogin/e29b.png"},

            "wxeff_btn_atlas/0.png": {url:"eewxeff/e1c.png"},
            "wxeff_btn_atlas/1.png": {url:"eewxeff/e2c.png"},
            "wxeff_btn_atlas/2.png": {url:"eewxeff/e3c.png"},
            "wxeff_btn_atlas/3.png": {url:"eewxeff/e4c.png"},
            "wxeff_btn_atlas/4.png": {url:"eewxeff/e5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./eeesax",
            "./dom": "./eeedom",
            "client_pb.js": "eeecleintpb.js",
            "protobuf.js": "eeeeBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "eeelogin",
            "wxeff_btn_atlas": "eewxeff",
            "wxloading_atlas": "eeeloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "e1a.png",
            "btn_loding_abcelq1.png": "e2a.png",
            "image_loading_bg.jpg": "e3a.jpg",
            "image_loading_bg_bottom.jpg": "e4a.jpg",
            "image_loading_bg_bottom2.jpg": "e5a.jpg",
            "image_loading_bg_left.jpg": "e6a.jpg",
            "image_loading_bg_left2.jpg": "e7a.jpg",
            "image_loading_bg_right.jpg": "e8a.jpg",
            "image_loading_bg_right2.jpg": "e9a.jpg",
            "image_loading_bg_top.jpg": "e10a.jpg",
            "image_loading_bg_top2.jpg": "e11a.jpg",
            "image_loading_bg2.jpg": "e12a.jpg",

            "image_loding_bar0.png": "e13a.png",
            "image_loding_bar1.png": "e14a.png",
            "image_loding_bar02.png": "e15a.png",
            "image_loding_bar2.png": "e16a.png",
            "image_loding_bar3.png": "e17a.png",
            "image_login_point1.png": "e18a.png",
            "image_login_point2.png":"e19a.png",
            "image_login_point3.png": "e20a.png",


            "image_xuanqu_ztjb0.png": "e199b.png",
            "image_denglu_txtshenpi.png": "e1b.png",
            "shenhezizi.png": "e123b.png",
            "image_login_loginbg.jpg": "e2b.jpg",
            "image_login_loginbg_bottom.jpg": "e3b.jpg",
            "image_login_loginbg_left.jpg": "e4b.jpg",
            "image_login_loginbg_right.jpg": "e5b.jpg",
            "image_login_loginbg_top.jpg": "e6b.jpg",
            "image_login_logo.png": "e7b.png",
            "image_login_notice.png": "e8b.png",
            "image_xuanfu_xfbg.png": "e9b.png",

            "btn_com_chuangback.png": "e10b.png",
            "btn_login_gonggao.png": "e11b.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "e13b.png",
            "btn_xuanqu_anniuhuang.png": "e14b.png",
            "btn_xuanqu_anniulan.png": "e15b.png",
            "btn_xuanqu_quanniu.png": "e16b.png",
            "image_com_tuichu.png": "e17b.png",
            "image_login_changtong.png": "e18b.png",
            "image_login_fanmang.png": "e19b.png",
            "image_login_weihu.png": "e20b.png",
            "image_login_xuanqubg.png": "e21b.png",
            "image_login_init.png": "e22b.png",
            "btn_com_chuangback1.png": "e23b.png",
            "btn_com_long0.png":"e24b.png",
            "btn_com_long1.png":"e25b.png",
            "image_login_notice1.png":"e26b.png",
            "image_loding_txtbhcc.png":"e27b.png",
            "image_xuanfu_gx0.png": "e28b.png",
            "image_xuanfu_gx1.png": "e29b.png",

            "0.png": "e1c.png",
            "1.png": "e2c.png",
            "2.png": "e3c.png",
            "3.png": "e4c.png",
            "4.png": "e5c.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$e", "b", "c1", "e1", "e"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "I1GU0J3L2R79YDCHTWBF8_NVS4AZKO$PMQ56EX";
        str_leading2 = "12w85d0b6k9sunq3ji$xgtlhrzyfv4_7amcope";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_22', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_22())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_22', function (cb) {
    sequence("set-param-Z_22","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_22-minify', function (cb) {
    sequence("set-param-Z_22","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z-22 有一 封神之怒包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--荣耀-微信 剑侠逍遥-Z_23  start-----------------------------------------------------------*/
/**Z_23包参数*/
var set_param_Z_23 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_23/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_23';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_23_new";
        targetProject = "wx_build/jg_gameZ_23_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "amain.js";
        packageName1 = "alibs";
        packageName2 = "a2a1epf";
        packageName3 = "a2a3a1";
        libsMainJs = "a12game.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/a1index.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/a1initmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/a1dom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/a1domparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/a1wxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/a1ibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/a1md5min.js"},
            "libs/sax.js":  {url:packageName1+"/a1sax.js"},
            "libs/weapp-adapter.js":  {url:"haha/a1weasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/ea1zlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"a3a4"},
            "wxsdk/wx_aksdk.js":  {url:"a3a4/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"a3a4/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/a5a6cleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/a5a6uff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"a7a1"},
            "wxlogin_atlas": {url:"a7a2"},
            "wxeff_btn_atlas":{url:"a7a6"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/a7a2.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/a7a1.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"a7a1/a1c.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"a7a1/a2c.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"a7a1/a3c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"a7a1/a4c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"a7a1/a5c.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"a7a1/a6c.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"a7a1/a7c.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"a7a1/a8c.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"a7a1/a9c.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"a7a1/a10c.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"a7a1/a11c.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"a7a1/a12c.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"a7a1/a13c.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"a7a1/a14c.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"a7a1/a15c.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"a7a1/a16c.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"a7a1/a17c.png"},
            "wxloading_atlas/image_login_point1.png": {url:"a7a1/a18c.png"},
            "wxloading_atlas/image_login_point2.png": {url:"a7a1/a19c.png"},
            "wxloading_atlas/image_login_point3.png": {url:"a7a1/a20c.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"a7a2/a100c.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"a7a2/a101c.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"a7a2/a102c.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"a7a2/a103c.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"a7a2/a104c.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"a7a2/a105c.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"a7a2/a106c.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"a7a2/a107c.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"a7a2/a108c.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"a7a2/a109c.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"a7a2/a110c.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"a7a2/a111c.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"a7a2/a112c.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"a7a2/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"a7a2/a113c.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"a7a2/a114c.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"a7a2/a115c.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"a7a2/a116c.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"a7a2/a117c.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"a7a2/a118c.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"a7a2/a119c.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"a7a2/a120c.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"a7a2/a121c.png"},
            "wxlogin_atlas/image_login_init.png": {url:"a7a2/a122c.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"a7a2/a123c.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"a7a2/a124c.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"a7a2/a125c.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"a7a2/a126c.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"a7a2/a127c.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"a7a2/a128c.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"a7a2/a129c.png"},

            "wxeff_btn_atlas/0.png": {url:"a7a6/a1b.png"},
            "wxeff_btn_atlas/1.png": {url:"a7a6/a2b.png"},
            "wxeff_btn_atlas/2.png": {url:"a7a6/a3b.png"},
            "wxeff_btn_atlas/3.png": {url:"a7a6/a4b.png"},
            "wxeff_btn_atlas/4.png": {url:"a7a6/a5b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./a1sax",
            "./dom": "./a1dom",
            "client_pb.js": "a5a6cleintpb.js",
            "protobuf.js": "a5a6uff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "a7a2",
            "wxeff_btn_atlas": "a7a6",
            "wxloading_atlas": "a7a1",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": 		"a1c.png",
            "btn_loding_abcelq1.png": 		"a2c.png",
            "image_loading_bg.jpg": 		"a3c.jpg",
            "image_loading_bg_bottom.jpg": 	"a4c.jpg",
            "image_loading_bg_bottom2.jpg": "a5c.jpg",
            "image_loading_bg_left.jpg": 	"a6c.jpg",
            "image_loading_bg_left2.jpg": 	"a7c.jpg",
            "image_loading_bg_right.jpg": 	"a8c.jpg",
            "image_loading_bg_right2.jpg": 	"a9c.jpg",
            "image_loading_bg_top.jpg": 	"a10c.jpg",
            "image_loading_bg_top2.jpg": 	"a11c.jpg",
            "image_loading_bg2.jpg": 		"a12c.jpg",

            "image_loding_bar0.png": 		"a13c.png",
            "image_loding_bar1.png": 		"a14c.png",
            "image_loding_bar02.png": 		"a15c.png",
            "image_loding_bar2.png": 		"a16c.png",
            "image_loding_bar3.png": 		"a17c.png",
            "image_login_point1.png": 		"a18c.png",
            "image_login_point2.png":		"a19c.png",
            "image_login_point3.png": 		"a20c.png",


            "image_xuanqu_ztjb0.png": "a100c.png",
            "image_denglu_txtshenpi.png": "a101c.png",
            "shenhezizi.png": "a102c.png",
            "image_login_loginbg.jpg": "a103c.jpg",
            "image_login_loginbg_bottom.jpg": "a104c.jpg",
            "image_login_loginbg_left.jpg": "a105c.jpg",
            "image_login_loginbg_right.jpg": "a106c.jpg",
            "image_login_loginbg_top.jpg": "a107c.jpg",
            "image_login_logo.png": "a108c.png",
            "image_login_notice.png": "a109c.png",
            "image_xuanfu_xfbg.png": "a110c.png",

            "btn_com_chuangback.png": "a111c.png",
            "btn_login_gonggao.png": "a112c.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "a113c.png",
            "btn_xuanqu_anniuhuang.png": "a114c.png",
            "btn_xuanqu_anniulan.png": "a115c.png",
            "btn_xuanqu_quanniu.png": "a116c.png",
            "image_com_tuichu.png": "a117c.png",
            "image_login_changtong.png": "a118c.png",
            "image_login_fanmang.png": "a119c.png",
            "image_login_weihu.png": "a120c.png",
            "image_login_xuanqubg.png": "a121c.png",
            "image_login_init.png": "a122c.png",
            "btn_com_chuangback1.png": "a123c.png",
            "btn_com_long0.png":"a124c.png",
            "btn_com_long1.png":"a125c.png",
            "image_login_notice1.png":"a126c.png",
            "image_loding_txtbhcc.png":"a127c.png",
            "image_xuanfu_gx0.png": "a128c.png",
            "image_xuanfu_gx1.png": "a129c.png",

            "0.png": "a1b.png",
            "1.png": "a2b.png",
            "2.png": "a3b.png",
            "3.png": "a4b.png",
            "4.png": "a5b.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$a", "c", "t1", "j", "g"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        // 
        str_leading1 = "6MB1EPT9LKGDFRS$2OX5YHW84QIAVC_J3U0NZ7";
        str_leading2 = "9aml$bcy0o4_ewug21fxsjnvhzk6dq8tr573pi";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_23', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_23())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_23', function (cb) {
    sequence("set-param-Z_23","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_23-minify', function (cb) {
    sequence("set-param-Z_23","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--Z-23 荣耀-微信 剑侠逍遥-Z_23  end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--Z24 6KW奇趣-微信 封神大主宰-Z_24(独立服务器) start-----------------------------------------------------------*/


/**Z_24包参数*/
var set_param_Z_24 = function () {

    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_24/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_24';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = 'H$';
        sourceProject = "wx_build/jg_gameZ_24_new";
        targetProject = "wx_build/jg_gameZ_24_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "Zqy102MZqy10IZqy102.js";
        libsMainJs = "Zqy102GZqy10MEZqy102.js";
        packageName1 = "Zqy102IZqy102";
        packageName2 = "Zqy102pftZqy102";
        packageName3 = "Zqy10Zqy10Zqy10Zqy10Zqy10";
        var clinetPbName = "Zqy10Zqy10IENZqy10Zqy10.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称 addGlobleKeys0 是否添加全局变量
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/Zqy10INDZqy10Zqy10.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/Zqy10Zqy10INIZqy10aZqy10.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/Zqy10Zqy10DOZqy10Zqy10.js"},
            "libs/dom_parser.js":  {url:packageName1+"/Zqy10Zqy10parsaZqy10.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/Zqy10Zqy10MtadZqy10Zqy10.js"},
            "libs/libs.min.js":  {url:packageName1+"/Zqy10Zqy10IZqy101Zqy10Zqy10.js",extractStr:false,count:5,strLen:3},
            "libs/md5.min.js":  {url:packageName1+"/Zqy10Zqy10bfZqy10Zqy10.js"},
            "libs/sax.js":  {url:packageName1+"/Zqy10Zqy10cZqy10Zqy10.js"},
            "libs/weapp-adapter.js":  {url:"xv2/Zqy10Zqy10E4Zqy10Zqy10.js"},
            "libs/zlib.js":  {url:packageName1+"/Zqy10Zqy1011Zqy10Zqy10.js"},
            "wxsdk":  {url:"Zqy10Zqy10basdZqy10"},
            "wxsdk/wx_aksdk.js":  {url:"Zqy10Zqy10basdZqy10/Zqy105sdkZqy10.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"Zqy10Zqy10basdZqy10/a5sshZqy10Zqy10.js",extractStr:true,count:1,strLen:3},
            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/"+clinetPbName,extractStr:true,count:2,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/Zqy10Zqy10FZqy10Zqy10.js",extractStr:true,count:2,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},
            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},
            // "untils/ddtSDKPlat.js":  {url:"untils/ddtSDKPlat.js",extractStr:false,count:1,strLen:3},
            "wxsdk/utils/sdkFrom6kw.com.js":  {url:"Zqy10Zqy10basdZqy10/utils/sdkFrom6kw.com.js",extractStr:false,count:1,strLen:3},

            "wxloading_atlas": {url:"Zqy10Zqy10dZqy10"},
            "wxlogin_atlas": {url:"Zqy10Zqy10lgrZqy10Zqy10"},
            "wxeff_btn_atlas":{url:"Zqy10yZqy10"},


            "wxloading_atlas/btn_loding_abcelq0.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy101a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy102a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy103a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy104a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy105a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy106a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy107a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy108a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy109a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1010a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1011a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1012a.jpg"},


            "wxloading_atlas/image_loding_bar0.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1013a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1014a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1015a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1016a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1017a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1018a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1019a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"Zqy10Zqy10dZqy10/Zqy10Zqy1020a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy10199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy101b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy10123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy102b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy103b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy104b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy105b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy106b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy107b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy108b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy109b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1010b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1011b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1012b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1013b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1014b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1015b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1016b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1017b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1018b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1019b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1020b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1021b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1022b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1023b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1024b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1025b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1026b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1027b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1028b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1029b.png"},

            "wxeff_btn_atlas/0.png": {url:"Zqy10yZqy10/Zqy10Zqy101c.png"},
            "wxeff_btn_atlas/1.png": {url:"Zqy10yZqy10/Zqy10Zqy102c.png"},
            "wxeff_btn_atlas/2.png": {url:"Zqy10yZqy10/Zqy10Zqy103c.png"},
            "wxeff_btn_atlas/3.png": {url:"Zqy10yZqy10/Zqy10Zqy104c.png"},
            "wxeff_btn_atlas/4.png": {url:"Zqy10yZqy10/Zqy10Zqy105c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "a5sshZqy10Zqy10",
            "./sax": "./Zqy10Zqy10cZqy10Zqy10",
            "./dom": "./Zqy10Zqy10DOZqy10Zqy10",
            "client_pb.js": clinetPbName,
            "protobuf.js": "Zqy10Zqy10FZqy10Zqy10.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "Zqy10Zqy10lgrZqy10Zqy10",
            "wxeff_btn_atlas": "Zqy10yZqy10",
            "wxloading_atlas": "Zqy10Zqy10dZqy10",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "Zqy10Zqy101a.png",
            "btn_loding_abcelq1.png": "Zqy10Zqy102a.png",
            "image_loading_bg.jpg": "Zqy10Zqy103a.jpg",
            "image_loading_bg_bottom.jpg": "Zqy10Zqy104a.jpg",
            "image_loading_bg_bottom2.jpg": "Zqy10Zqy105a.jpg",
            "image_loading_bg_left.jpg": "Zqy10Zqy106a.jpg",
            "image_loading_bg_left2.jpg": "Zqy10Zqy107a.jpg",
            "image_loading_bg_right.jpg": "Zqy10Zqy108a.jpg",
            "image_loading_bg_right2.jpg": "Zqy10Zqy109a.jpg",
            "image_loading_bg_top.jpg": "Zqy10Zqy1010a.jpg",
            "image_loading_bg_top2.jpg": "Zqy10Zqy1011a.jpg",
            "image_loading_bg2.jpg": "Zqy10Zqy1012a.jpg",


            "image_loding_bar0.png": "Zqy10Zqy1013a.png",
            "image_loding_bar1.png": "Zqy10Zqy1014a.png",
            "image_loding_bar02.png": "Zqy10Zqy1015a.png",
            "image_loding_bar2.png": "Zqy10Zqy1016a.png",
            "image_loding_bar3.png": "Zqy10Zqy1017a.png",
            "image_login_point1.png": "Zqy10Zqy1018a.png",
            "image_login_point2.png":"Zqy10Zqy1019a.png",
            "image_login_point3.png": "Zqy10Zqy1020a.png",


            "image_xuanqu_ztjb0.png": "Zqy10Zqy10199b.png",
            "image_denglu_txtshenpi.png": "Zqy10Zqy101b.png",
            "shenhezizi.png": "Zqy10Zqy10123b.png",
            "image_login_loginbg.jpg": "Zqy10Zqy102b.jpg",
            "image_login_loginbg_bottom.jpg": "Zqy10Zqy103b.jpg",
            "image_login_loginbg_left.jpg": "Zqy10Zqy104b.jpg",
            "image_login_loginbg_right.jpg": "Zqy10Zqy105b.jpg",
            "image_login_loginbg_top.jpg": "Zqy10Zqy106b.jpg",
            "image_login_logo.png": "Zqy10Zqy107b.png",
            "image_login_notice.png": "Zqy10Zqy108b.png",
            "image_xuanfu_xfbg.png": "Zqy10Zqy109b.png",

            "btn_com_chuangback.png": "Zqy10Zqy1010b.png",
            "btn_login_gonggao.png": "Zqy10Zqy1011b.png",
            "btn_login_loginanniu.png": "Zqy10Zqy1012b.png",
            "btn_login_yingsi.png": "Zqy10Zqy1013b.png",
            "btn_xuanqu_anniuhuang.png": "Zqy10Zqy1014b.png",
            "btn_xuanqu_anniulan.png": "Zqy10Zqy1015b.png",
            "btn_xuanqu_quanniu.png": "Zqy10Zqy1016b.png",
            "image_com_tuichu.png": "Zqy10Zqy1017b.png",
            "image_login_changtong.png": "Zqy10Zqy1018b.png",
            "image_login_fanmang.png": "Zqy10Zqy1019b.png",
            "image_login_weihu.png": "Zqy10Zqy1020b.png",
            "image_login_xuanqubg.png": "Zqy10Zqy1021b.png",
            "image_login_init.png": "Zqy10Zqy1022b.png",
            "btn_com_chuangback1.png": "Zqy10Zqy1023b.png",
            "btn_com_long0.png":"Zqy10Zqy1024b.png",
            "btn_com_long1.png":"Zqy10Zqy1025b.png",
            "image_login_notice1.png":"Zqy10Zqy1026b.png",
            "image_loding_txtbhcc.png":"Zqy10Zqy1027b.png",
            "image_xuanfu_gx0.png": "Zqy10Zqy1028b.png",
            "image_xuanfu_gx1.png": "Zqy10Zqy1029b.png",

            "0.png": "Zqy10Zqy101c.png",
            "1.png": "Zqy10Zqy102c.png",
            "2.png": "Zqy10Zqy103c.png",
            "3.png": "Zqy10Zqy104c.png",
            "4.png": "Zqy10Zqy105c.png",

        }
        strFilePath = "/qyz24res";
        strFileName = "/qyz24Files.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["h$", "J", "J", "J1", "g"]; //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "G5JQ4RT321OCSNZBMDEVX8A$Y7IUK9_6FPLH0W";
        str_leading2 = "s$f9w2_pezhtc86dgk0bq5oyrvj7xin143ualm";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

// 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_24', function () {

    var stream = gulp.src("")
        .pipe(set_param_Z_24())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_24', function (cb) {
    sequence("set-param-Z_24","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

gulp.task('build-Z_24-test', function (cb) {
    sequence("set-param-Z_24",'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_24_minify', function (cb) {
    sequence("set-param-Z_24","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z24 6KW奇趣-微信 封神大主宰-Z_24(独立服务器) end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z25包 666笑傲天龙-Z_25  END start-----------------------------------------------------------*/

/**Z_25包参数*/
var set_param_Z_25 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_25/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_25';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_25_new";
        targetProject = "wx_build/jg_gameZ_25_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "lsjdflaamain.js";
        libsMainJs = "bbbgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"bbblibs"},
            "game.js": {url:"bbblibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"bbblibs/bbbindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"bbblibs/bbbinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"bbblibs/bbbdom.js"},
            "libs/dom_parser.js":  {url:"bbblibs/bbbdomparser.js"},
            "libs/laya.wxmini.js":  {url:"bbblibs/bbbwxmini.js"},
            "libs/libs.min.js":  {url:"bbblibs/bbblibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"bbblibs/bbbmd5min.js"},
            "libs/sax.js":  {url:"bbblibs/bbbsax.js"},
            "libs/weapp-adapter.js":  {url:"bbssss/bbbweasaf.js"},
            "libs/zlib.js":  {url:"bbblibs/bbbzlibs.js"},
            // "libs/game.js":  {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"bbbk"},
            "wxsdk/wx_aksdk.js":  {url:"bbbk/bbbsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"bbbk/bbbhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"bbbbbbf"},
            "protobuf/client_pb.js":  {url:"bbbbbbf/bbbcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"bbbbbbf/bbbbBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"bbbbbbf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"bbbbbbbbb"},
            "subPackage/main.min.js":  {url:"bbbbbbbbb/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"bbbbbbbbb/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹

            "wxloading_atlas": {url:"bbbloding"},
            "wxlogin_atlas": {url:"bbblogin"},
            "wxeff_btn_atlas":{url:"bwxeff"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"bbbloding/a4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"bbbloding/a5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"bbbloding/a6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"bbbloding/a7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"bbbloding/a8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"bbbloding/a9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"bbbloding/a10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"bbbloding/a11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"bbbloding/a12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"bbbloding/a13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"bbbloding/a14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"bbbloding/a15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"bbbloding/a16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"bbbloding/a17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"bbbloding/a18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"bbbloding/a19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"bbbloding/a20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"bbblogin/b199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"bbblogin/b1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"bbblogin/b123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"bbblogin/b2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"bbblogin/b3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"bbblogin/b4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"bbblogin/b5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"bbblogin/b6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"bbblogin/b7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"bbblogin/b8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"bbblogin/b9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"bbblogin/b10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"bbblogin/b11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"bbblogin/b12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"bbblogin/b13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"bbblogin/b14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"bbblogin/b15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"bbblogin/b16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"bbblogin/b17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"bbblogin/b18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"bbblogin/b19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"bbblogin/b20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"bbblogin/b21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"bbblogin/b23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"bbblogin/b24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"bbblogin/b25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"bbblogin/b26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"bbblogin/b27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"bbblogin/b28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"bbblogin/b29b.png"},

            "wxeff_btn_atlas/0.png": {url:"bwxeff/b100b.png"},
            "wxeff_btn_atlas/1.png": {url:"bwxeff/b101b.png"},
            "wxeff_btn_atlas/2.png": {url:"bwxeff/b102b.png"},
            "wxeff_btn_atlas/3.png": {url:"bwxeff/b103b.png"},
            "wxeff_btn_atlas/4.png": {url:"bwxeff/b104b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "bbbhelp",
            "./sax": "./bbbsax",
            "./dom": "./bbbdom",
            "client_pb.js": "bbbcleintpb.js",
            "protobuf.js": "bbbbBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "bbblogin",
            "wxeff_btn_atlas": "bwxeff",
            "wxloading_atlas": "bbbloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1a.png",
            "btn_loding_abcelq1.png": "a2a.png",
            "image_loading_bg.jpg": "a3a.jpg",
            "image_loading_bg_bottom.jpg": "a4a.jpg",
            "image_loading_bg_bottom2.jpg": "a5a.jpg",
            "image_loading_bg_left.jpg": "a6a.jpg",
            "image_loading_bg_left2.jpg": "a7a.jpg",
            "image_loading_bg_right.jpg": "a8a.jpg",
            "image_loading_bg_right2.jpg": "a9a.jpg",
            "image_loading_bg_top.jpg": "a10a.jpg",
            "image_loading_bg_top2.jpg": "a11a.jpg",
            "image_loading_bg2.jpg": "a12a.jpg",

            "image_loding_bar0.png": "a13a.png",
            "image_loding_bar1.png": "a14a.png",
            "image_loding_bar02.png": "a15a.png",
            "image_loding_bar2.png": "a16a.png",
            "image_loding_bar3.png": "a17a.png",
            "image_login_point1.png": "a18a.png",
            "image_login_point2.png":"a19a.png",
            "image_login_point3.png": "a20a.png",


            "image_xuanqu_ztjb0.png": "b199b.png",
            "image_denglu_txtshenpi.png": "b1b.png",
            "shenhezizi.png": "b123b.png",
            "image_login_loginbg.jpg": "b2b.jpg",
            "image_login_loginbg_bottom.jpg": "b3b.jpg",
            "image_login_loginbg_left.jpg": "b4b.jpg",
            "image_login_loginbg_right.jpg": "b5b.jpg",
            "image_login_loginbg_top.jpg": "b6b.jpg",
            "image_login_logo.png": "b7b.png",
            "image_login_notice.png": "b8b.png",
            "image_xuanfu_xfbg.png": "b9b.png",

            "btn_com_chuangback.png": "b10b.png",
            "btn_login_gonggao.png": "b11b.png",
            "btn_login_loginanniu.png": "b12b.png",
            "btn_login_yingsi.png": "b13b.png",
            "btn_xuanqu_anniuhuang.png": "b14b.png",
            "btn_xuanqu_anniulan.png": "b15b.png",
            "btn_xuanqu_quanniu.png": "b16b.png",
            "image_com_tuichu.png": "b17b.png",
            "image_login_changtong.png": "b18b.png",
            "image_login_fanmang.png": "b19b.png",
            "image_login_weihu.png": "b20b.png",
            "image_login_xuanqubg.png": "b21b.png",
            "image_login_init.png": "b22b.png",
            "btn_com_chuangback1.png": "b23b.png",
            "btn_com_long0.png":"b24b.png",
            "btn_com_long1.png":"b25b.png",
            "image_login_notice1.png":"b26b.png",
            "image_loding_txtbhcc.png":"b27b.png",
            "image_xuanfu_gx0.png": "b28b.png",
            "image_xuanfu_gx1.png": "b29b.png",

            "0.png": "b100b.png",
            "1.png": "b101b.png",
            "2.png": "b102b.png",
            "3.png": "b103b.png",
            "4.png": "b104b.png",

        };

        strFilePath = "/res";
        strFileName = "/files.zip";
        globleKeys = ["y$", "_", "_s", "p$", "_d"];
        noReplaceJs = "bbblibs/game.js";
        packageName1 = "bbblibs";
        packageName2 = "bbbbbbf";
        packageName3 = "bbbbbbbbb";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "2_VR50I$T4Z8UWQNMGDSXA1LHBO9CYFK67PE3J";
        str_leading2 = "8xc_amvkf$93r0ozhq6swdl7pgn2b4yieju5t1";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_25', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_25())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_25', function (cb) {
    sequence("set-param-Z_25","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_25_minify', function (cb) {
    sequence("set-param-Z_25","MT1_build_minifyTargetProject",cb);
});

var set_param_Z2525 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        // sourceProject = "wx_build/jg_gameA";
        mainJsName = "main.min.js"
        targetProject = "wx_build/jg_gameZ_25";
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z2525', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z2525())
    return stream;
});

//压缩
gulp.task('build-babel-obfuscator-Z2525-minify', function (cb) {
    sequence("set-param-Z2525","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--Z25包 666笑傲天龙-Z_25  END-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z26包 泡椒-斗剑仙_Z_26 END start-----------------------------------------------------------*/

/**Z_26包参数*/
var set_param_Z_26 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_26/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_26';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_26_new";
        targetProject = "wx_build/jg_gameZ_26_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "lsjdflaamain.js";
        libsMainJs = "bbbgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"bbblibs"},
            "game.js": {url:"bbblibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"bbblibs/bbbindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"bbblibs/bbbinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"bbblibs/bbbdom.js"},
            "libs/dom_parser.js":  {url:"bbblibs/bbbdomparser.js"},
            "libs/laya.wxmini.js":  {url:"bbblibs/bbbwxmini.js"},
            "libs/libs.min.js":  {url:"bbblibs/bbblibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"bbblibs/bbbmd5min.js"},
            "libs/sax.js":  {url:"bbblibs/bbbsax.js"},
            "libs/weapp-adapter.js":  {url:"bbssss/bbbweasaf.js"},
            "libs/zlib.js":  {url:"bbblibs/bbbzlibs.js"},
            // "libs/game.js":  {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"bbbk"},
            "wxsdk/wx_aksdk.js":  {url:"bbbk/bbbsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"bbbk/bbbhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"bbbbbbf"},
            "protobuf/client_pb.js":  {url:"bbbbbbf/bbbcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"bbbbbbf/bbbbBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"bbbbbbf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"bbbbbbbbb"},
            "subPackage/main.min.js":  {url:"bbbbbbbbb/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"bbbbbbbbb/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹

            "wxloading_atlas": {url:"bbbloding"},
            "wxlogin_atlas": {url:"bbblogin"},
            "wxeff_btn_atlas":{url:"bwxeff"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"bbbloding/a4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"bbbloding/a5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"bbbloding/a6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"bbbloding/a7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"bbbloding/a8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"bbbloding/a9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"bbbloding/a10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"bbbloding/a11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"bbbloding/a12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"bbbloding/a13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"bbbloding/a14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"bbbloding/a15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"bbbloding/a16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"bbbloding/a17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"bbbloding/a18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"bbbloding/a19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"bbbloding/a20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"bbblogin/b199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"bbblogin/b1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"bbblogin/b123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"bbblogin/b2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"bbblogin/b3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"bbblogin/b4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"bbblogin/b5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"bbblogin/b6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"bbblogin/b7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"bbblogin/b8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"bbblogin/b9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"bbblogin/b10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"bbblogin/b11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"bbblogin/b12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"bbblogin/b13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"bbblogin/b14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"bbblogin/b15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"bbblogin/b16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"bbblogin/b17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"bbblogin/b18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"bbblogin/b19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"bbblogin/b20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"bbblogin/b21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"bbblogin/b23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"bbblogin/b24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"bbblogin/b25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"bbblogin/b26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"bbblogin/b27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"bbblogin/b28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"bbblogin/b29b.png"},

            "wxeff_btn_atlas/0.png": {url:"bwxeff/b100b.png"},
            "wxeff_btn_atlas/1.png": {url:"bwxeff/b101b.png"},
            "wxeff_btn_atlas/2.png": {url:"bwxeff/b102b.png"},
            "wxeff_btn_atlas/3.png": {url:"bwxeff/b103b.png"},
            "wxeff_btn_atlas/4.png": {url:"bwxeff/b104b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "bbbhelp",
            "./sax": "./bbbsax",
            "./dom": "./bbbdom",
            "client_pb.js": "bbbcleintpb.js",
            "protobuf.js": "bbbbBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "bbblogin",
            "wxeff_btn_atlas": "bwxeff",
            "wxloading_atlas": "bbbloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1a.png",
            "btn_loding_abcelq1.png": "a2a.png",
            "image_loading_bg.jpg": "a3a.jpg",
            "image_loading_bg_bottom.jpg": "a4a.jpg",
            "image_loading_bg_bottom2.jpg": "a5a.jpg",
            "image_loading_bg_left.jpg": "a6a.jpg",
            "image_loading_bg_left2.jpg": "a7a.jpg",
            "image_loading_bg_right.jpg": "a8a.jpg",
            "image_loading_bg_right2.jpg": "a9a.jpg",
            "image_loading_bg_top.jpg": "a10a.jpg",
            "image_loading_bg_top2.jpg": "a11a.jpg",
            "image_loading_bg2.jpg": "a12a.jpg",

            "image_loding_bar0.png": "a13a.png",
            "image_loding_bar1.png": "a14a.png",
            "image_loding_bar02.png": "a15a.png",
            "image_loding_bar2.png": "a16a.png",
            "image_loding_bar3.png": "a17a.png",
            "image_login_point1.png": "a18a.png",
            "image_login_point2.png":"a19a.png",
            "image_login_point3.png": "a20a.png",


            "image_xuanqu_ztjb0.png": "b199b.png",
            "image_denglu_txtshenpi.png": "b1b.png",
            "shenhezizi.png": "b123b.png",
            "image_login_loginbg.jpg": "b2b.jpg",
            "image_login_loginbg_bottom.jpg": "b3b.jpg",
            "image_login_loginbg_left.jpg": "b4b.jpg",
            "image_login_loginbg_right.jpg": "b5b.jpg",
            "image_login_loginbg_top.jpg": "b6b.jpg",
            "image_login_logo.png": "b7b.png",
            "image_login_notice.png": "b8b.png",
            "image_xuanfu_xfbg.png": "b9b.png",

            "btn_com_chuangback.png": "b10b.png",
            "btn_login_gonggao.png": "b11b.png",
            "btn_login_loginanniu.png": "b12b.png",
            "btn_login_yingsi.png": "b13b.png",
            "btn_xuanqu_anniuhuang.png": "b14b.png",
            "btn_xuanqu_anniulan.png": "b15b.png",
            "btn_xuanqu_quanniu.png": "b16b.png",
            "image_com_tuichu.png": "b17b.png",
            "image_login_changtong.png": "b18b.png",
            "image_login_fanmang.png": "b19b.png",
            "image_login_weihu.png": "b20b.png",
            "image_login_xuanqubg.png": "b21b.png",
            "image_login_init.png": "b22b.png",
            "btn_com_chuangback1.png": "b23b.png",
            "btn_com_long0.png":"b24b.png",
            "btn_com_long1.png":"b25b.png",
            "image_login_notice1.png":"b26b.png",
            "image_loding_txtbhcc.png":"b27b.png",
            "image_xuanfu_gx0.png": "b28b.png",
            "image_xuanfu_gx1.png": "b29b.png",

            "0.png": "b100b.png",
            "1.png": "b101b.png",
            "2.png": "b102b.png",
            "3.png": "b103b.png",
            "4.png": "b104b.png",

        };

        strFilePath = "/res";
        strFileName = "/files.zip";
        globleKeys = ["y$", "_", "_s", "p$", "_d"];
        noReplaceJs = "bbblibs/game.js";
        packageName1 = "bbblibs";
        packageName2 = "bbbbbbf";
        packageName3 = "bbbbbbbbb";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "LNBUKO5C7W$3MJ6QS2X_EFZ18GDVAT0YPR9IH4";
        str_leading2 = "h$12pou93a4ygr58fizdkelcnvx7mwts60_jqb";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_26', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_26())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_26', function (cb) {
    sequence("set-param-Z_26","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_26_minify', function (cb) {
    sequence("set-param-Z_26","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--Z26包 泡椒-斗剑仙_Z_26 END-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z27包 群侠挂机_Z_27 END start-----------------------------------------------------------*/

/**Z_27包参数*/
var set_param_Z_27 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_27/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_27';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_27_new";
        targetProject = "wx_build/jg_gameZ_27_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "lsjdflaamain.js";
        libsMainJs = "bbbgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"bbblibs"},
            "game.js": {url:"bbblibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"bbblibs/bbbindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"bbblibs/bbbinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"bbblibs/bbbdom.js"},
            "libs/dom_parser.js":  {url:"bbblibs/bbbdomparser.js"},
            "libs/laya.wxmini.js":  {url:"bbblibs/bbbwxmini.js"},
            "libs/libs.min.js":  {url:"bbblibs/bbblibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"bbblibs/bbbmd5min.js"},
            "libs/sax.js":  {url:"bbblibs/bbbsax.js"},
            "libs/weapp-adapter.js":  {url:"bbssss/bbbweasaf.js"},
            "libs/zlib.js":  {url:"bbblibs/bbbzlibs.js"},
            // "libs/game.js":  {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"bbbk"},
            "wxsdk/wx_aksdk.js":  {url:"bbbk/bbbsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"bbbk/bbbhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"bbbbbbf"},
            "protobuf/client_pb.js":  {url:"bbbbbbf/bbbcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"bbbbbbf/bbbbBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"bbbbbbf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"bbbbbbbbb"},
            "subPackage/main.min.js":  {url:"bbbbbbbbb/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"bbbbbbbbb/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹

            "wxloading_atlas": {url:"bbbloding"},
            "wxlogin_atlas": {url:"bbblogin"},
            "wxeff_btn_atlas":{url:"bwxeff"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"bbbloding/a4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"bbbloding/a5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"bbbloding/a6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"bbbloding/a7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"bbbloding/a8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"bbbloding/a9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"bbbloding/a10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"bbbloding/a11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"bbbloding/a12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"bbbloding/a13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"bbbloding/a14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"bbbloding/a15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"bbbloding/a16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"bbbloding/a17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"bbbloding/a18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"bbbloding/a19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"bbbloding/a20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"bbblogin/b199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"bbblogin/b1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"bbblogin/b123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"bbblogin/b2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"bbblogin/b3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"bbblogin/b4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"bbblogin/b5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"bbblogin/b6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"bbblogin/b7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"bbblogin/b8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"bbblogin/b9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"bbblogin/b10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"bbblogin/b11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"bbblogin/b12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"bbblogin/b13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"bbblogin/b14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"bbblogin/b15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"bbblogin/b16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"bbblogin/b17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"bbblogin/b18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"bbblogin/b19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"bbblogin/b20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"bbblogin/b21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"bbblogin/b23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"bbblogin/b24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"bbblogin/b25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"bbblogin/b26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"bbblogin/b27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"bbblogin/b28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"bbblogin/b29b.png"},

            "wxeff_btn_atlas/0.png": {url:"bwxeff/b100b.png"},
            "wxeff_btn_atlas/1.png": {url:"bwxeff/b101b.png"},
            "wxeff_btn_atlas/2.png": {url:"bwxeff/b102b.png"},
            "wxeff_btn_atlas/3.png": {url:"bwxeff/b103b.png"},
            "wxeff_btn_atlas/4.png": {url:"bwxeff/b104b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "bbbhelp",
            "./sax": "./bbbsax",
            "./dom": "./bbbdom",
            "client_pb.js": "bbbcleintpb.js",
            "protobuf.js": "bbbbBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "bbblogin",
            "wxeff_btn_atlas": "bwxeff",
            "wxloading_atlas": "bbbloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1a.png",
            "btn_loding_abcelq1.png": "a2a.png",
            "image_loading_bg.jpg": "a3a.jpg",
            "image_loading_bg_bottom.jpg": "a4a.jpg",
            "image_loading_bg_bottom2.jpg": "a5a.jpg",
            "image_loading_bg_left.jpg": "a6a.jpg",
            "image_loading_bg_left2.jpg": "a7a.jpg",
            "image_loading_bg_right.jpg": "a8a.jpg",
            "image_loading_bg_right2.jpg": "a9a.jpg",
            "image_loading_bg_top.jpg": "a10a.jpg",
            "image_loading_bg_top2.jpg": "a11a.jpg",
            "image_loading_bg2.jpg": "a12a.jpg",

            "image_loding_bar0.png": "a13a.png",
            "image_loding_bar1.png": "a14a.png",
            "image_loding_bar02.png": "a15a.png",
            "image_loding_bar2.png": "a16a.png",
            "image_loding_bar3.png": "a17a.png",
            "image_login_point1.png": "a18a.png",
            "image_login_point2.png":"a19a.png",
            "image_login_point3.png": "a20a.png",


            "image_xuanqu_ztjb0.png": "b199b.png",
            "image_denglu_txtshenpi.png": "b1b.png",
            "shenhezizi.png": "b123b.png",
            "image_login_loginbg.jpg": "b2b.jpg",
            "image_login_loginbg_bottom.jpg": "b3b.jpg",
            "image_login_loginbg_left.jpg": "b4b.jpg",
            "image_login_loginbg_right.jpg": "b5b.jpg",
            "image_login_loginbg_top.jpg": "b6b.jpg",
            "image_login_logo.png": "b7b.png",
            "image_login_notice.png": "b8b.png",
            "image_xuanfu_xfbg.png": "b9b.png",

            "btn_com_chuangback.png": "b10b.png",
            "btn_login_gonggao.png": "b11b.png",
            "btn_login_loginanniu.png": "b12b.png",
            "btn_login_yingsi.png": "b13b.png",
            "btn_xuanqu_anniuhuang.png": "b14b.png",
            "btn_xuanqu_anniulan.png": "b15b.png",
            "btn_xuanqu_quanniu.png": "b16b.png",
            "image_com_tuichu.png": "b17b.png",
            "image_login_changtong.png": "b18b.png",
            "image_login_fanmang.png": "b19b.png",
            "image_login_weihu.png": "b20b.png",
            "image_login_xuanqubg.png": "b21b.png",
            "image_login_init.png": "b22b.png",
            "btn_com_chuangback1.png": "b23b.png",
            "btn_com_long0.png":"b24b.png",
            "btn_com_long1.png":"b25b.png",
            "image_login_notice1.png":"b26b.png",
            "image_loding_txtbhcc.png":"b27b.png",
            "image_xuanfu_gx0.png": "b28b.png",
            "image_xuanfu_gx1.png": "b29b.png",

            "0.png": "b100b.png",
            "1.png": "b101b.png",
            "2.png": "b102b.png",
            "3.png": "b103b.png",
            "4.png": "b104b.png",

        };

        strFilePath = "/res";
        strFileName = "/files.zip";
        globleKeys = ["y$", "_", "_s", "p$", "_d"];
        noReplaceJs = "bbblibs/game.js";
        packageName1 = "bbblibs";
        packageName2 = "bbbbbbf";
        packageName3 = "bbbbbbbbb";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "6MTG0YH2EDSINRB17J8QK5PX4_WCLVUOA3$9ZF";
        str_leading2 = "j$lms761nxi248rfy_uh0kvd3at9qpbcweo5gz";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_27', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_27())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_27', function (cb) {
    sequence("set-param-Z_27","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_27_minify', function (cb) {
    sequence("set-param-Z_27","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--群侠挂机_Z_27 END-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z28包 辉耀逆天纪z-28 END start-----------------------------------------------------------*/

/**Z_28包参数*/
var set_param_Z_28 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_28/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_28';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'A';
        sourceProject = "wx_build/jg_gameZ_28_new";
        targetProject = "wx_build/jg_gameZ_28_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "lsjdflaamain.js";
        libsMainJs = "bbbgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"bbblibs"},
            "game.js": {url:"bbblibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"bbblibs/bbbindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"bbblibs/bbbinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"bbblibs/bbbdom.js"},
            "libs/dom_parser.js":  {url:"bbblibs/bbbdomparser.js"},
            "libs/laya.wxmini.js":  {url:"bbblibs/bbbwxmini.js"},
            "libs/libs.min.js":  {url:"bbblibs/bbblibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"bbblibs/bbbmd5min.js"},
            "libs/sax.js":  {url:"bbblibs/bbbsax.js"},
            "libs/weapp-adapter.js":  {url:"bbssss/bbbweasaf.js"},
            "libs/zlib.js":  {url:"bbblibs/bbbzlibs.js"},
            // "libs/game.js":  {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"bbbk"},
            "wxsdk/wx_aksdk.js":  {url:"bbbk/bbbsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"bbbk/bbbhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"bbbbbbf"},
            "protobuf/client_pb.js":  {url:"bbbbbbf/bbbcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"bbbbbbf/bbbbBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"bbbbbbf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"bbbbbbbbb"},
            "subPackage/main.min.js":  {url:"bbbbbbbbb/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"bbbbbbbbb/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹

            "wxloading_atlas": {url:"bbbloding"},
            "wxlogin_atlas": {url:"bbblogin"},
            "wxeff_btn_atlas":{url:"bwxeff"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"bbbloding/a4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"bbbloding/a5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"bbbloding/a6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"bbbloding/a7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"bbbloding/a8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"bbbloding/a9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"bbbloding/a10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"bbbloding/a11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"bbbloding/a12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"bbbloding/a13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"bbbloding/a14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"bbbloding/a15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"bbbloding/a16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"bbbloding/a17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"bbbloding/a18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"bbbloding/a19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"bbbloding/a20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"bbblogin/b199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"bbblogin/b1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"bbblogin/b123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"bbblogin/b2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"bbblogin/b3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"bbblogin/b4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"bbblogin/b5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"bbblogin/b6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"bbblogin/b7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"bbblogin/b8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"bbblogin/b9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"bbblogin/b10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"bbblogin/b11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"bbblogin/b12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"bbblogin/b13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"bbblogin/b14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"bbblogin/b15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"bbblogin/b16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"bbblogin/b17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"bbblogin/b18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"bbblogin/b19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"bbblogin/b20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"bbblogin/b21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"bbblogin/b23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"bbblogin/b24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"bbblogin/b25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"bbblogin/b26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"bbblogin/b27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"bbblogin/b28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"bbblogin/b29b.png"},

            "wxeff_btn_atlas/0.png": {url:"bwxeff/b100b.png"},
            "wxeff_btn_atlas/1.png": {url:"bwxeff/b101b.png"},
            "wxeff_btn_atlas/2.png": {url:"bwxeff/b102b.png"},
            "wxeff_btn_atlas/3.png": {url:"bwxeff/b103b.png"},
            "wxeff_btn_atlas/4.png": {url:"bwxeff/b104b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "bbbhelp",
            "./sax": "./bbbsax",
            "./dom": "./bbbdom",
            "client_pb.js": "bbbcleintpb.js",
            "protobuf.js": "bbbbBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "bbblogin",
            "wxeff_btn_atlas": "bwxeff",
            "wxloading_atlas": "bbbloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1a.png",
            "btn_loding_abcelq1.png": "a2a.png",
            "image_loading_bg.jpg": "a3a.jpg",
            "image_loading_bg_bottom.jpg": "a4a.jpg",
            "image_loading_bg_bottom2.jpg": "a5a.jpg",
            "image_loading_bg_left.jpg": "a6a.jpg",
            "image_loading_bg_left2.jpg": "a7a.jpg",
            "image_loading_bg_right.jpg": "a8a.jpg",
            "image_loading_bg_right2.jpg": "a9a.jpg",
            "image_loading_bg_top.jpg": "a10a.jpg",
            "image_loading_bg_top2.jpg": "a11a.jpg",
            "image_loading_bg2.jpg": "a12a.jpg",

            "image_loding_bar0.png": "a13a.png",
            "image_loding_bar1.png": "a14a.png",
            "image_loding_bar02.png": "a15a.png",
            "image_loding_bar2.png": "a16a.png",
            "image_loding_bar3.png": "a17a.png",
            "image_login_point1.png": "a18a.png",
            "image_login_point2.png":"a19a.png",
            "image_login_point3.png": "a20a.png",


            "image_xuanqu_ztjb0.png": "b199b.png",
            "image_denglu_txtshenpi.png": "b1b.png",
            "shenhezizi.png": "b123b.png",
            "image_login_loginbg.jpg": "b2b.jpg",
            "image_login_loginbg_bottom.jpg": "b3b.jpg",
            "image_login_loginbg_left.jpg": "b4b.jpg",
            "image_login_loginbg_right.jpg": "b5b.jpg",
            "image_login_loginbg_top.jpg": "b6b.jpg",
            "image_login_logo.png": "b7b.png",
            "image_login_notice.png": "b8b.png",
            "image_xuanfu_xfbg.png": "b9b.png",

            "btn_com_chuangback.png": "b10b.png",
            "btn_login_gonggao.png": "b11b.png",
            "btn_login_loginanniu.png": "b12b.png",
            "btn_login_yingsi.png": "b13b.png",
            "btn_xuanqu_anniuhuang.png": "b14b.png",
            "btn_xuanqu_anniulan.png": "b15b.png",
            "btn_xuanqu_quanniu.png": "b16b.png",
            "image_com_tuichu.png": "b17b.png",
            "image_login_changtong.png": "b18b.png",
            "image_login_fanmang.png": "b19b.png",
            "image_login_weihu.png": "b20b.png",
            "image_login_xuanqubg.png": "b21b.png",
            "image_login_init.png": "b22b.png",
            "btn_com_chuangback1.png": "b23b.png",
            "btn_com_long0.png":"b24b.png",
            "btn_com_long1.png":"b25b.png",
            "image_login_notice1.png":"b26b.png",
            "image_loding_txtbhcc.png":"b27b.png",
            "image_xuanfu_gx0.png": "b28b.png",
            "image_xuanfu_gx1.png": "b29b.png",

            "0.png": "b100b.png",
            "1.png": "b101b.png",
            "2.png": "b102b.png",
            "3.png": "b103b.png",
            "4.png": "b104b.png",

        };

        strFilePath = "/res";
        strFileName = "/files.zip";
        globleKeys = ["y$", "_", "_s", "p$", "_d"];
        noReplaceJs = "bbblibs/game.js";
        packageName1 = "bbblibs";
        packageName2 = "bbbbbbf";
        packageName3 = "bbbbbbbbb";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "JR8GXO3K4MA$SIZYQUDN7T1CPV5L_92W0HF6BE";
        str_leading2 = "25xlgwtnbj8h$19rfm_siod7q04cau3z6evpky";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_28', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_28())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_28', function (cb) {
    sequence("set-param-Z_28","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_28_minify', function (cb) {
    sequence("set-param-Z_28","MT1_build_minifyTargetProject",cb);
});
var set_param_Z2828 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        // sourceProject = "wx_build/jg_gameA";
        mainJsName = "main.min.js"
        targetProject = "wx_build/jg_gameZ_28";
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z2828', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z2828())
    return stream;
});

//压缩
gulp.task('build-babel-obfuscator-Z2828-minify', function (cb) {
    sequence("set-param-Z2828","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--辉耀-微信	逆天纪_Z_28END-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--Z-29 有一 圣翼传说  start-----------------------------------------------------------*/


/**Z_29包参数*/
var set_param_Z_29 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_29/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_29';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_29_new";
        targetProject = "wx_build/jg_gameZ_29_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "eeemain.js";
        packageName1 = "eeelibs";
        packageName2 = "eeeeeepf";
        packageName3 = "eeeeeeee";
        libsMainJs = "eeegame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/eeeindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/eeeinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/eeedom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/eeedomparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/eeewxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/eeelibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/eeemd5min.js"},
            "libs/sax.js":  {url:packageName1+"/eeesax.js"},
            "libs/weapp-adapter.js":  {url:"eessss/eeeweasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/eeezlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"eeeesdk"},
            "wxsdk/wx_aksdk.js":  {url:"eeeesdk/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"eeeesdk/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/eeecleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/eeeeBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"eeeloding"},
            "wxlogin_atlas": {url:"eeelogin"},
            "wxeff_btn_atlas":{url:"eewxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/eeeloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"eeeloding/e1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"eeeloding/e2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"eeeloding/e3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"eeeloding/e4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"eeeloding/e5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"eeeloding/e6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"eeeloding/e7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"eeeloding/e8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"eeeloding/e9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"eeeloding/e10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"eeeloding/e11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"eeeloding/e12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"eeeloding/e13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"eeeloding/e14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"eeeloding/e15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"eeeloding/e16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"eeeloding/e17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"eeeloding/e18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"eeeloding/e19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"eeeloding/e20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"eeelogin/e199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"eeelogin/e1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"eeelogin/e123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"eeelogin/e2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"eeelogin/e3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"eeelogin/e4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"eeelogin/e5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"eeelogin/e6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"eeelogin/e7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"eeelogin/e8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"eeelogin/e9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"eeelogin/e10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"eeelogin/e11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"eeelogin/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"eeelogin/e13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"eeelogin/e14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"eeelogin/e15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"eeelogin/e16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"eeelogin/e17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"eeelogin/e18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"eeelogin/e19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"eeelogin/e20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"eeelogin/e21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"eeelogin/e22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"eeelogin/e23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"eeelogin/e24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"eeelogin/e25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"eeelogin/e26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"eeelogin/e27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"eeelogin/e28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"eeelogin/e29b.png"},

            "wxeff_btn_atlas/0.png": {url:"eewxeff/e1c.png"},
            "wxeff_btn_atlas/1.png": {url:"eewxeff/e2c.png"},
            "wxeff_btn_atlas/2.png": {url:"eewxeff/e3c.png"},
            "wxeff_btn_atlas/3.png": {url:"eewxeff/e4c.png"},
            "wxeff_btn_atlas/4.png": {url:"eewxeff/e5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./eeesax",
            "./dom": "./eeedom",
            "client_pb.js": "eeecleintpb.js",
            "protobuf.js": "eeeeBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "eeelogin",
            "wxeff_btn_atlas": "eewxeff",
            "wxloading_atlas": "eeeloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "e1a.png",
            "btn_loding_abcelq1.png": "e2a.png",
            "image_loading_bg.jpg": "e3a.jpg",
            "image_loading_bg_bottom.jpg": "e4a.jpg",
            "image_loading_bg_bottom2.jpg": "e5a.jpg",
            "image_loading_bg_left.jpg": "e6a.jpg",
            "image_loading_bg_left2.jpg": "e7a.jpg",
            "image_loading_bg_right.jpg": "e8a.jpg",
            "image_loading_bg_right2.jpg": "e9a.jpg",
            "image_loading_bg_top.jpg": "e10a.jpg",
            "image_loading_bg_top2.jpg": "e11a.jpg",
            "image_loading_bg2.jpg": "e12a.jpg",

            "image_loding_bar0.png": "e13a.png",
            "image_loding_bar1.png": "e14a.png",
            "image_loding_bar02.png": "e15a.png",
            "image_loding_bar2.png": "e16a.png",
            "image_loding_bar3.png": "e17a.png",
            "image_login_point1.png": "e18a.png",
            "image_login_point2.png":"e19a.png",
            "image_login_point3.png": "e20a.png",


            "image_xuanqu_ztjb0.png": "e199b.png",
            "image_denglu_txtshenpi.png": "e1b.png",
            "shenhezizi.png": "e123b.png",
            "image_login_loginbg.jpg": "e2b.jpg",
            "image_login_loginbg_bottom.jpg": "e3b.jpg",
            "image_login_loginbg_left.jpg": "e4b.jpg",
            "image_login_loginbg_right.jpg": "e5b.jpg",
            "image_login_loginbg_top.jpg": "e6b.jpg",
            "image_login_logo.png": "e7b.png",
            "image_login_notice.png": "e8b.png",
            "image_xuanfu_xfbg.png": "e9b.png",

            "btn_com_chuangback.png": "e10b.png",
            "btn_login_gonggao.png": "e11b.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "e13b.png",
            "btn_xuanqu_anniuhuang.png": "e14b.png",
            "btn_xuanqu_anniulan.png": "e15b.png",
            "btn_xuanqu_quanniu.png": "e16b.png",
            "image_com_tuichu.png": "e17b.png",
            "image_login_changtong.png": "e18b.png",
            "image_login_fanmang.png": "e19b.png",
            "image_login_weihu.png": "e20b.png",
            "image_login_xuanqubg.png": "e21b.png",
            "image_login_init.png": "e22b.png",
            "btn_com_chuangback1.png": "e23b.png",
            "btn_com_long0.png":"e24b.png",
            "btn_com_long1.png":"e25b.png",
            "image_login_notice1.png":"e26b.png",
            "image_loding_txtbhcc.png":"e27b.png",
            "image_xuanfu_gx0.png": "e28b.png",
            "image_xuanfu_gx1.png": "e29b.png",

            "0.png": "e1c.png",
            "1.png": "e2c.png",
            "2.png": "e3c.png",
            "3.png": "e4c.png",
            "4.png": "e5c.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$e", "b", "c1", "e1", "e"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "I1GU0J3L2R79YDCHTWBF8_NVS4AZKO$PMQ56EX";
        str_leading2 = "12w85d0b6k9sunq3ji$xgtlhrzyfv4_7amcope";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_29', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_29())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_29', function (cb) {
    sequence("set-param-Z_29","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_29-minify', function (cb) {
    sequence("set-param-Z_29","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z-29 有一 圣翼传说  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--荣耀-微信 泣神曲-Z_30  start-----------------------------------------------------------*/
/**Z_30包参数*/
var set_param_Z_30 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_30/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_30';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_30_new";
        targetProject = "wx_build/jg_gameZ_30_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "amain.js";
        packageName1 = "alibs";
        packageName2 = "a2a1epf";
        packageName3 = "a2a3a1";
        libsMainJs = "a12game.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/a1index.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/a1initmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/a1dom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/a1domparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/a1wxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/a1ibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/a1md5min.js"},
            "libs/sax.js":  {url:packageName1+"/a1sax.js"},
            "libs/weapp-adapter.js":  {url:"haha/a1weasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/ea1zlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"a3a4"},
            "wxsdk/wx_aksdk.js":  {url:"a3a4/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"a3a4/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/a5a6cleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/a5a6uff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"a7a1"},
            "wxlogin_atlas": {url:"a7a2"},
            "wxeff_btn_atlas":{url:"a7a6"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/a7a2.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/a7a1.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"a7a1/a1c.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"a7a1/a2c.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"a7a1/a3c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"a7a1/a4c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"a7a1/a5c.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"a7a1/a6c.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"a7a1/a7c.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"a7a1/a8c.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"a7a1/a9c.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"a7a1/a10c.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"a7a1/a11c.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"a7a1/a12c.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"a7a1/a13c.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"a7a1/a14c.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"a7a1/a15c.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"a7a1/a16c.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"a7a1/a17c.png"},
            "wxloading_atlas/image_login_point1.png": {url:"a7a1/a18c.png"},
            "wxloading_atlas/image_login_point2.png": {url:"a7a1/a19c.png"},
            "wxloading_atlas/image_login_point3.png": {url:"a7a1/a20c.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"a7a2/a100c.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"a7a2/a101c.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"a7a2/a102c.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"a7a2/a103c.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"a7a2/a104c.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"a7a2/a105c.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"a7a2/a106c.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"a7a2/a107c.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"a7a2/a108c.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"a7a2/a109c.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"a7a2/a110c.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"a7a2/a111c.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"a7a2/a112c.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"a7a2/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"a7a2/a113c.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"a7a2/a114c.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"a7a2/a115c.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"a7a2/a116c.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"a7a2/a117c.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"a7a2/a118c.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"a7a2/a119c.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"a7a2/a120c.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"a7a2/a121c.png"},
            "wxlogin_atlas/image_login_init.png": {url:"a7a2/a122c.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"a7a2/a123c.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"a7a2/a124c.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"a7a2/a125c.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"a7a2/a126c.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"a7a2/a127c.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"a7a2/a128c.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"a7a2/a129c.png"},

            "wxeff_btn_atlas/0.png": {url:"a7a6/a1b.png"},
            "wxeff_btn_atlas/1.png": {url:"a7a6/a2b.png"},
            "wxeff_btn_atlas/2.png": {url:"a7a6/a3b.png"},
            "wxeff_btn_atlas/3.png": {url:"a7a6/a4b.png"},
            "wxeff_btn_atlas/4.png": {url:"a7a6/a5b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./a1sax",
            "./dom": "./a1dom",
            "client_pb.js": "a5a6cleintpb.js",
            "protobuf.js": "a5a6uff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "a7a2",
            "wxeff_btn_atlas": "a7a6",
            "wxloading_atlas": "a7a1",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": 		"a1c.png",
            "btn_loding_abcelq1.png": 		"a2c.png",
            "image_loading_bg.jpg": 		"a3c.jpg",
            "image_loading_bg_bottom.jpg": 	"a4c.jpg",
            "image_loading_bg_bottom2.jpg": "a5c.jpg",
            "image_loading_bg_left.jpg": 	"a6c.jpg",
            "image_loading_bg_left2.jpg": 	"a7c.jpg",
            "image_loading_bg_right.jpg": 	"a8c.jpg",
            "image_loading_bg_right2.jpg": 	"a9c.jpg",
            "image_loading_bg_top.jpg": 	"a10c.jpg",
            "image_loading_bg_top2.jpg": 	"a11c.jpg",
            "image_loading_bg2.jpg": 		"a12c.jpg",

            "image_loding_bar0.png": 		"a13c.png",
            "image_loding_bar1.png": 		"a14c.png",
            "image_loding_bar02.png": 		"a15c.png",
            "image_loding_bar2.png": 		"a16c.png",
            "image_loding_bar3.png": 		"a17c.png",
            "image_login_point1.png": 		"a18c.png",
            "image_login_point2.png":		"a19c.png",
            "image_login_point3.png": 		"a20c.png",


            "image_xuanqu_ztjb0.png": "a100c.png",
            "image_denglu_txtshenpi.png": "a101c.png",
            "shenhezizi.png": "a102c.png",
            "image_login_loginbg.jpg": "a103c.jpg",
            "image_login_loginbg_bottom.jpg": "a104c.jpg",
            "image_login_loginbg_left.jpg": "a105c.jpg",
            "image_login_loginbg_right.jpg": "a106c.jpg",
            "image_login_loginbg_top.jpg": "a107c.jpg",
            "image_login_logo.png": "a108c.png",
            "image_login_notice.png": "a109c.png",
            "image_xuanfu_xfbg.png": "a110c.png",

            "btn_com_chuangback.png": "a111c.png",
            "btn_login_gonggao.png": "a112c.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "a113c.png",
            "btn_xuanqu_anniuhuang.png": "a114c.png",
            "btn_xuanqu_anniulan.png": "a115c.png",
            "btn_xuanqu_quanniu.png": "a116c.png",
            "image_com_tuichu.png": "a117c.png",
            "image_login_changtong.png": "a118c.png",
            "image_login_fanmang.png": "a119c.png",
            "image_login_weihu.png": "a120c.png",
            "image_login_xuanqubg.png": "a121c.png",
            "image_login_init.png": "a122c.png",
            "btn_com_chuangback1.png": "a123c.png",
            "btn_com_long0.png":"a124c.png",
            "btn_com_long1.png":"a125c.png",
            "image_login_notice1.png":"a126c.png",
            "image_loding_txtbhcc.png":"a127c.png",
            "image_xuanfu_gx0.png": "a128c.png",
            "image_xuanfu_gx1.png": "a129c.png",

            "0.png": "a1b.png",
            "1.png": "a2b.png",
            "2.png": "a3b.png",
            "3.png": "a4b.png",
            "4.png": "a5b.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$a", "c", "t1", "j", "g"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        //
        str_leading1 = "6MB1EPT9LKGDFRS$2OX5YHW84QIAVC_J3U0NZ7";
        str_leading2 = "9aml$bcy0o4_ewug21fxsjnvhzk6dq8tr573pi";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_30', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_30())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_30', function (cb) {
    sequence("set-param-Z_30","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_30-minify', function (cb) {
    sequence("set-param-Z_30","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--Z-30 荣耀-微信 泣神曲-Z_30  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--荣耀-微信 凡人修真-Z_31  start-----------------------------------------------------------*/
/**Z_31包参数*/
var set_param_Z_31 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_31/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_31';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_31_new";
        targetProject = "wx_build/jg_gameZ_31_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "amain.js";
        packageName1 = "alibs";
        packageName2 = "a2a1epf";
        packageName3 = "a2a3a1";
        libsMainJs = "a12game.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/a1index.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/a1initmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/a1dom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/a1domparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/a1wxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/a1ibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/a1md5min.js"},
            "libs/sax.js":  {url:packageName1+"/a1sax.js"},
            "libs/weapp-adapter.js":  {url:"haha/a1weasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/ea1zlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"a3a4"},
            "wxsdk/wx_aksdk.js":  {url:"a3a4/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"a3a4/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/a5a6cleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/a5a6uff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"a7a1"},
            "wxlogin_atlas": {url:"a7a2"},
            "wxeff_btn_atlas":{url:"a7a6"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/a7a2.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/a7a1.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"a7a1/a1c.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"a7a1/a2c.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"a7a1/a3c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"a7a1/a4c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"a7a1/a5c.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"a7a1/a6c.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"a7a1/a7c.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"a7a1/a8c.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"a7a1/a9c.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"a7a1/a10c.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"a7a1/a11c.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"a7a1/a12c.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"a7a1/a13c.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"a7a1/a14c.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"a7a1/a15c.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"a7a1/a16c.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"a7a1/a17c.png"},
            "wxloading_atlas/image_login_point1.png": {url:"a7a1/a18c.png"},
            "wxloading_atlas/image_login_point2.png": {url:"a7a1/a19c.png"},
            "wxloading_atlas/image_login_point3.png": {url:"a7a1/a20c.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"a7a2/a100c.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"a7a2/a101c.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"a7a2/a102c.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"a7a2/a103c.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"a7a2/a104c.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"a7a2/a105c.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"a7a2/a106c.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"a7a2/a107c.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"a7a2/a108c.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"a7a2/a109c.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"a7a2/a110c.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"a7a2/a111c.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"a7a2/a112c.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"a7a2/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"a7a2/a113c.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"a7a2/a114c.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"a7a2/a115c.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"a7a2/a116c.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"a7a2/a117c.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"a7a2/a118c.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"a7a2/a119c.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"a7a2/a120c.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"a7a2/a121c.png"},
            "wxlogin_atlas/image_login_init.png": {url:"a7a2/a122c.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"a7a2/a123c.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"a7a2/a124c.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"a7a2/a125c.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"a7a2/a126c.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"a7a2/a127c.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"a7a2/a128c.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"a7a2/a129c.png"},

            "wxeff_btn_atlas/0.png": {url:"a7a6/a1b.png"},
            "wxeff_btn_atlas/1.png": {url:"a7a6/a2b.png"},
            "wxeff_btn_atlas/2.png": {url:"a7a6/a3b.png"},
            "wxeff_btn_atlas/3.png": {url:"a7a6/a4b.png"},
            "wxeff_btn_atlas/4.png": {url:"a7a6/a5b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./a1sax",
            "./dom": "./a1dom",
            "client_pb.js": "a5a6cleintpb.js",
            "protobuf.js": "a5a6uff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "a7a2",
            "wxeff_btn_atlas": "a7a6",
            "wxloading_atlas": "a7a1",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": 		"a1c.png",
            "btn_loding_abcelq1.png": 		"a2c.png",
            "image_loading_bg.jpg": 		"a3c.jpg",
            "image_loading_bg_bottom.jpg": 	"a4c.jpg",
            "image_loading_bg_bottom2.jpg": "a5c.jpg",
            "image_loading_bg_left.jpg": 	"a6c.jpg",
            "image_loading_bg_left2.jpg": 	"a7c.jpg",
            "image_loading_bg_right.jpg": 	"a8c.jpg",
            "image_loading_bg_right2.jpg": 	"a9c.jpg",
            "image_loading_bg_top.jpg": 	"a10c.jpg",
            "image_loading_bg_top2.jpg": 	"a11c.jpg",
            "image_loading_bg2.jpg": 		"a12c.jpg",

            "image_loding_bar0.png": 		"a13c.png",
            "image_loding_bar1.png": 		"a14c.png",
            "image_loding_bar02.png": 		"a15c.png",
            "image_loding_bar2.png": 		"a16c.png",
            "image_loding_bar3.png": 		"a17c.png",
            "image_login_point1.png": 		"a18c.png",
            "image_login_point2.png":		"a19c.png",
            "image_login_point3.png": 		"a20c.png",


            "image_xuanqu_ztjb0.png": "a100c.png",
            "image_denglu_txtshenpi.png": "a101c.png",
            "shenhezizi.png": "a102c.png",
            "image_login_loginbg.jpg": "a103c.jpg",
            "image_login_loginbg_bottom.jpg": "a104c.jpg",
            "image_login_loginbg_left.jpg": "a105c.jpg",
            "image_login_loginbg_right.jpg": "a106c.jpg",
            "image_login_loginbg_top.jpg": "a107c.jpg",
            "image_login_logo.png": "a108c.png",
            "image_login_notice.png": "a109c.png",
            "image_xuanfu_xfbg.png": "a110c.png",

            "btn_com_chuangback.png": "a111c.png",
            "btn_login_gonggao.png": "a112c.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "a113c.png",
            "btn_xuanqu_anniuhuang.png": "a114c.png",
            "btn_xuanqu_anniulan.png": "a115c.png",
            "btn_xuanqu_quanniu.png": "a116c.png",
            "image_com_tuichu.png": "a117c.png",
            "image_login_changtong.png": "a118c.png",
            "image_login_fanmang.png": "a119c.png",
            "image_login_weihu.png": "a120c.png",
            "image_login_xuanqubg.png": "a121c.png",
            "image_login_init.png": "a122c.png",
            "btn_com_chuangback1.png": "a123c.png",
            "btn_com_long0.png":"a124c.png",
            "btn_com_long1.png":"a125c.png",
            "image_login_notice1.png":"a126c.png",
            "image_loding_txtbhcc.png":"a127c.png",
            "image_xuanfu_gx0.png": "a128c.png",
            "image_xuanfu_gx1.png": "a129c.png",

            "0.png": "a1b.png",
            "1.png": "a2b.png",
            "2.png": "a3b.png",
            "3.png": "a4b.png",
            "4.png": "a5b.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$a", "c", "t1", "j", "g"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        //
        str_leading1 = "6MB1EPT9LKGDFRS$2OX5YHW84QIAVC_J3U0NZ7";
        str_leading2 = "9aml$bcy0o4_ewug21fxsjnvhzk6dq8tr573pi";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_31', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_31())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_31', function (cb) {
    sequence("set-param-Z_31","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_31-minify', function (cb) {
    sequence("set-param-Z_31","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--Z_31 荣耀-微信 凡人修真-Z_31  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--荣耀-微信 小黑坚持住-Z_32  start-----------------------------------------------------------*/
/**Z_32包参数*/
var set_param_Z_32 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_32/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_32';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_32_new";
        targetProject = "wx_build/jg_gameZ_32_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "amain.js";
        packageName1 = "alibs";
        packageName2 = "a2a1epf";
        packageName3 = "a2a3a1";
        libsMainJs = "a12game.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/a1index.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/a1initmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/a1dom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/a1domparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/a1wxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/a1ibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/a1md5min.js"},
            "libs/sax.js":  {url:packageName1+"/a1sax.js"},
            "libs/weapp-adapter.js":  {url:"haha/a1weasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/ea1zlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"a3a4"},
            "wxsdk/wx_aksdk.js":  {url:"a3a4/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"a3a4/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/a5a6cleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/a5a6uff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"a7a1"},
            "wxlogin_atlas": {url:"a7a2"},
            "wxeff_btn_atlas":{url:"a7a6"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/a7a2.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/a7a1.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"a7a1/a1c.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"a7a1/a2c.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"a7a1/a3c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"a7a1/a4c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"a7a1/a5c.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"a7a1/a6c.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"a7a1/a7c.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"a7a1/a8c.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"a7a1/a9c.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"a7a1/a10c.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"a7a1/a11c.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"a7a1/a12c.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"a7a1/a13c.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"a7a1/a14c.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"a7a1/a15c.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"a7a1/a16c.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"a7a1/a17c.png"},
            "wxloading_atlas/image_login_point1.png": {url:"a7a1/a18c.png"},
            "wxloading_atlas/image_login_point2.png": {url:"a7a1/a19c.png"},
            "wxloading_atlas/image_login_point3.png": {url:"a7a1/a20c.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"a7a2/a100c.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"a7a2/a101c.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"a7a2/a102c.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"a7a2/a103c.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"a7a2/a104c.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"a7a2/a105c.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"a7a2/a106c.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"a7a2/a107c.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"a7a2/a108c.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"a7a2/a109c.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"a7a2/a110c.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"a7a2/a111c.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"a7a2/a112c.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"a7a2/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"a7a2/a113c.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"a7a2/a114c.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"a7a2/a115c.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"a7a2/a116c.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"a7a2/a117c.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"a7a2/a118c.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"a7a2/a119c.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"a7a2/a120c.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"a7a2/a121c.png"},
            "wxlogin_atlas/image_login_init.png": {url:"a7a2/a122c.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"a7a2/a123c.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"a7a2/a124c.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"a7a2/a125c.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"a7a2/a126c.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"a7a2/a127c.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"a7a2/a128c.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"a7a2/a129c.png"},

            "wxeff_btn_atlas/0.png": {url:"a7a6/a1b.png"},
            "wxeff_btn_atlas/1.png": {url:"a7a6/a2b.png"},
            "wxeff_btn_atlas/2.png": {url:"a7a6/a3b.png"},
            "wxeff_btn_atlas/3.png": {url:"a7a6/a4b.png"},
            "wxeff_btn_atlas/4.png": {url:"a7a6/a5b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./a1sax",
            "./dom": "./a1dom",
            "client_pb.js": "a5a6cleintpb.js",
            "protobuf.js": "a5a6uff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "a7a2",
            "wxeff_btn_atlas": "a7a6",
            "wxloading_atlas": "a7a1",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": 		"a1c.png",
            "btn_loding_abcelq1.png": 		"a2c.png",
            "image_loading_bg.jpg": 		"a3c.jpg",
            "image_loading_bg_bottom.jpg": 	"a4c.jpg",
            "image_loading_bg_bottom2.jpg": "a5c.jpg",
            "image_loading_bg_left.jpg": 	"a6c.jpg",
            "image_loading_bg_left2.jpg": 	"a7c.jpg",
            "image_loading_bg_right.jpg": 	"a8c.jpg",
            "image_loading_bg_right2.jpg": 	"a9c.jpg",
            "image_loading_bg_top.jpg": 	"a10c.jpg",
            "image_loading_bg_top2.jpg": 	"a11c.jpg",
            "image_loading_bg2.jpg": 		"a12c.jpg",

            "image_loding_bar0.png": 		"a13c.png",
            "image_loding_bar1.png": 		"a14c.png",
            "image_loding_bar02.png": 		"a15c.png",
            "image_loding_bar2.png": 		"a16c.png",
            "image_loding_bar3.png": 		"a17c.png",
            "image_login_point1.png": 		"a18c.png",
            "image_login_point2.png":		"a19c.png",
            "image_login_point3.png": 		"a20c.png",


            "image_xuanqu_ztjb0.png": "a100c.png",
            "image_denglu_txtshenpi.png": "a101c.png",
            "shenhezizi.png": "a102c.png",
            "image_login_loginbg.jpg": "a103c.jpg",
            "image_login_loginbg_bottom.jpg": "a104c.jpg",
            "image_login_loginbg_left.jpg": "a105c.jpg",
            "image_login_loginbg_right.jpg": "a106c.jpg",
            "image_login_loginbg_top.jpg": "a107c.jpg",
            "image_login_logo.png": "a108c.png",
            "image_login_notice.png": "a109c.png",
            "image_xuanfu_xfbg.png": "a110c.png",

            "btn_com_chuangback.png": "a111c.png",
            "btn_login_gonggao.png": "a112c.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "a113c.png",
            "btn_xuanqu_anniuhuang.png": "a114c.png",
            "btn_xuanqu_anniulan.png": "a115c.png",
            "btn_xuanqu_quanniu.png": "a116c.png",
            "image_com_tuichu.png": "a117c.png",
            "image_login_changtong.png": "a118c.png",
            "image_login_fanmang.png": "a119c.png",
            "image_login_weihu.png": "a120c.png",
            "image_login_xuanqubg.png": "a121c.png",
            "image_login_init.png": "a122c.png",
            "btn_com_chuangback1.png": "a123c.png",
            "btn_com_long0.png":"a124c.png",
            "btn_com_long1.png":"a125c.png",
            "image_login_notice1.png":"a126c.png",
            "image_loding_txtbhcc.png":"a127c.png",
            "image_xuanfu_gx0.png": "a128c.png",
            "image_xuanfu_gx1.png": "a129c.png",

            "0.png": "a1b.png",
            "1.png": "a2b.png",
            "2.png": "a3b.png",
            "3.png": "a4b.png",
            "4.png": "a5b.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$a", "c", "t1", "j", "g"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        //
        str_leading1 = "6MB1EPT9LKGDFRS$2OX5YHW84QIAVC_J3U0NZ7";
        str_leading2 = "9aml$bcy0o4_ewug21fxsjnvhzk6dq8tr573pi";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_32', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_32())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_32', function (cb) {
    sequence("set-param-Z_32","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_32-minify', function (cb) {
    sequence("set-param-Z_32","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--Z_32 荣耀-微信 小黑坚持住-Z_32  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z-33 有一 太平洋堡垒战  start-----------------------------------------------------------*/


/**Z_33包参数*/
var set_param_Z_33 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_33/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_33';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_33_new";
        targetProject = "wx_build/jg_gameZ_33_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "eeemain.js";
        packageName1 = "eeelibs";
        packageName2 = "eeeeeepf";
        packageName3 = "eeeeeeee";
        libsMainJs = "eeegame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/eeeindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/eeeinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/eeedom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/eeedomparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/eeewxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/eeelibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/eeemd5min.js"},
            "libs/sax.js":  {url:packageName1+"/eeesax.js"},
            "libs/weapp-adapter.js":  {url:"eessss/eeeweasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/eeezlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"eeeesdk"},
            "wxsdk/wx_aksdk.js":  {url:"eeeesdk/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"eeeesdk/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/eeecleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/eeeeBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"eeeloding"},
            "wxlogin_atlas": {url:"eeelogin"},
            "wxeff_btn_atlas":{url:"eewxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/eeeloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"eeeloding/e1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"eeeloding/e2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"eeeloding/e3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"eeeloding/e4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"eeeloding/e5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"eeeloding/e6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"eeeloding/e7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"eeeloding/e8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"eeeloding/e9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"eeeloding/e10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"eeeloding/e11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"eeeloding/e12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"eeeloding/e13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"eeeloding/e14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"eeeloding/e15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"eeeloding/e16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"eeeloding/e17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"eeeloding/e18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"eeeloding/e19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"eeeloding/e20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"eeelogin/e199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"eeelogin/e1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"eeelogin/e123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"eeelogin/e2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"eeelogin/e3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"eeelogin/e4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"eeelogin/e5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"eeelogin/e6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"eeelogin/e7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"eeelogin/e8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"eeelogin/e9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"eeelogin/e10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"eeelogin/e11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"eeelogin/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"eeelogin/e13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"eeelogin/e14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"eeelogin/e15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"eeelogin/e16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"eeelogin/e17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"eeelogin/e18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"eeelogin/e19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"eeelogin/e20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"eeelogin/e21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"eeelogin/e22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"eeelogin/e23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"eeelogin/e24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"eeelogin/e25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"eeelogin/e26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"eeelogin/e27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"eeelogin/e28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"eeelogin/e29b.png"},

            "wxeff_btn_atlas/0.png": {url:"eewxeff/e1c.png"},
            "wxeff_btn_atlas/1.png": {url:"eewxeff/e2c.png"},
            "wxeff_btn_atlas/2.png": {url:"eewxeff/e3c.png"},
            "wxeff_btn_atlas/3.png": {url:"eewxeff/e4c.png"},
            "wxeff_btn_atlas/4.png": {url:"eewxeff/e5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./eeesax",
            "./dom": "./eeedom",
            "client_pb.js": "eeecleintpb.js",
            "protobuf.js": "eeeeBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "eeelogin",
            "wxeff_btn_atlas": "eewxeff",
            "wxloading_atlas": "eeeloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "e1a.png",
            "btn_loding_abcelq1.png": "e2a.png",
            "image_loading_bg.jpg": "e3a.jpg",
            "image_loading_bg_bottom.jpg": "e4a.jpg",
            "image_loading_bg_bottom2.jpg": "e5a.jpg",
            "image_loading_bg_left.jpg": "e6a.jpg",
            "image_loading_bg_left2.jpg": "e7a.jpg",
            "image_loading_bg_right.jpg": "e8a.jpg",
            "image_loading_bg_right2.jpg": "e9a.jpg",
            "image_loading_bg_top.jpg": "e10a.jpg",
            "image_loading_bg_top2.jpg": "e11a.jpg",
            "image_loading_bg2.jpg": "e12a.jpg",

            "image_loding_bar0.png": "e13a.png",
            "image_loding_bar1.png": "e14a.png",
            "image_loding_bar02.png": "e15a.png",
            "image_loding_bar2.png": "e16a.png",
            "image_loding_bar3.png": "e17a.png",
            "image_login_point1.png": "e18a.png",
            "image_login_point2.png":"e19a.png",
            "image_login_point3.png": "e20a.png",


            "image_xuanqu_ztjb0.png": "e199b.png",
            "image_denglu_txtshenpi.png": "e1b.png",
            "shenhezizi.png": "e123b.png",
            "image_login_loginbg.jpg": "e2b.jpg",
            "image_login_loginbg_bottom.jpg": "e3b.jpg",
            "image_login_loginbg_left.jpg": "e4b.jpg",
            "image_login_loginbg_right.jpg": "e5b.jpg",
            "image_login_loginbg_top.jpg": "e6b.jpg",
            "image_login_logo.png": "e7b.png",
            "image_login_notice.png": "e8b.png",
            "image_xuanfu_xfbg.png": "e9b.png",

            "btn_com_chuangback.png": "e10b.png",
            "btn_login_gonggao.png": "e11b.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "e13b.png",
            "btn_xuanqu_anniuhuang.png": "e14b.png",
            "btn_xuanqu_anniulan.png": "e15b.png",
            "btn_xuanqu_quanniu.png": "e16b.png",
            "image_com_tuichu.png": "e17b.png",
            "image_login_changtong.png": "e18b.png",
            "image_login_fanmang.png": "e19b.png",
            "image_login_weihu.png": "e20b.png",
            "image_login_xuanqubg.png": "e21b.png",
            "image_login_init.png": "e22b.png",
            "btn_com_chuangback1.png": "e23b.png",
            "btn_com_long0.png":"e24b.png",
            "btn_com_long1.png":"e25b.png",
            "image_login_notice1.png":"e26b.png",
            "image_loding_txtbhcc.png":"e27b.png",
            "image_xuanfu_gx0.png": "e28b.png",
            "image_xuanfu_gx1.png": "e29b.png",

            "0.png": "e1c.png",
            "1.png": "e2c.png",
            "2.png": "e3c.png",
            "3.png": "e4c.png",
            "4.png": "e5c.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$e", "b", "c1", "e1", "e"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "I1GU0J3L2R79YDCHTWBF8_NVS4AZKO$PMQ56EX";
        str_leading2 = "12w85d0b6k9sunq3ji$xgtlhrzyfv4_7amcope";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_33', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_33())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_33', function (cb) {
    sequence("set-param-Z_33","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_33-minify', function (cb) {
    sequence("set-param-Z_33","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z-33 有一 太平洋堡垒战  end-----------------------------------------------------------*/
/**-------------------------------------------------微信小游戏--奇遇-剑雨遮天-Z_34  start-----------------------------------------------------------*/
/**Z_34包参数*/
var set_param_Z_34 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_34/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_34';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_34_new";
        targetProject = "wx_build/jg_gameZ_34_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "amain.js";
        packageName1 = "alibs";
        packageName2 = "a2a1epf";
        packageName3 = "a2a3a1";
        libsMainJs = "a12game.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/a1index.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/a1initmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/a1dom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/a1domparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/a1wxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/a1ibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/a1md5min.js"},
            "libs/sax.js":  {url:packageName1+"/a1sax.js"},
            "libs/weapp-adapter.js":  {url:"haha/a1weasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/ea1zlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"a3a4"},
            "wxsdk/wx_aksdk.js":  {url:"a3a4/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"a3a4/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/a5a6cleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/a5a6uff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"a7a1"},
            "wxlogin_atlas": {url:"a7a2"},
            "wxeff_btn_atlas":{url:"a7a6"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/a7a2.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/a7a1.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"a7a1/a1c.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"a7a1/a2c.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"a7a1/a3c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"a7a1/a4c.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"a7a1/a5c.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"a7a1/a6c.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"a7a1/a7c.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"a7a1/a8c.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"a7a1/a9c.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"a7a1/a10c.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"a7a1/a11c.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"a7a1/a12c.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"a7a1/a13c.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"a7a1/a14c.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"a7a1/a15c.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"a7a1/a16c.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"a7a1/a17c.png"},
            "wxloading_atlas/image_login_point1.png": {url:"a7a1/a18c.png"},
            "wxloading_atlas/image_login_point2.png": {url:"a7a1/a19c.png"},
            "wxloading_atlas/image_login_point3.png": {url:"a7a1/a20c.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"a7a2/a100c.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"a7a2/a101c.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"a7a2/a102c.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"a7a2/a103c.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"a7a2/a104c.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"a7a2/a105c.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"a7a2/a106c.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"a7a2/a107c.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"a7a2/a108c.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"a7a2/a109c.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"a7a2/a110c.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"a7a2/a111c.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"a7a2/a112c.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"a7a2/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"a7a2/a113c.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"a7a2/a114c.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"a7a2/a115c.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"a7a2/a116c.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"a7a2/a117c.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"a7a2/a118c.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"a7a2/a119c.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"a7a2/a120c.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"a7a2/a121c.png"},
            "wxlogin_atlas/image_login_init.png": {url:"a7a2/a122c.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"a7a2/a123c.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"a7a2/a124c.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"a7a2/a125c.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"a7a2/a126c.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"a7a2/a127c.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"a7a2/a128c.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"a7a2/a129c.png"},

            "wxeff_btn_atlas/0.png": {url:"a7a6/a1b.png"},
            "wxeff_btn_atlas/1.png": {url:"a7a6/a2b.png"},
            "wxeff_btn_atlas/2.png": {url:"a7a6/a3b.png"},
            "wxeff_btn_atlas/3.png": {url:"a7a6/a4b.png"},
            "wxeff_btn_atlas/4.png": {url:"a7a6/a5b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./a1sax",
            "./dom": "./a1dom",
            "client_pb.js": "a5a6cleintpb.js",
            "protobuf.js": "a5a6uff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "a7a2",
            "wxeff_btn_atlas": "a7a6",
            "wxloading_atlas": "a7a1",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": 		"a1c.png",
            "btn_loding_abcelq1.png": 		"a2c.png",
            "image_loading_bg.jpg": 		"a3c.jpg",
            "image_loading_bg_bottom.jpg": 	"a4c.jpg",
            "image_loading_bg_bottom2.jpg": "a5c.jpg",
            "image_loading_bg_left.jpg": 	"a6c.jpg",
            "image_loading_bg_left2.jpg": 	"a7c.jpg",
            "image_loading_bg_right.jpg": 	"a8c.jpg",
            "image_loading_bg_right2.jpg": 	"a9c.jpg",
            "image_loading_bg_top.jpg": 	"a10c.jpg",
            "image_loading_bg_top2.jpg": 	"a11c.jpg",
            "image_loading_bg2.jpg": 		"a12c.jpg",

            "image_loding_bar0.png": 		"a13c.png",
            "image_loding_bar1.png": 		"a14c.png",
            "image_loding_bar02.png": 		"a15c.png",
            "image_loding_bar2.png": 		"a16c.png",
            "image_loding_bar3.png": 		"a17c.png",
            "image_login_point1.png": 		"a18c.png",
            "image_login_point2.png":		"a19c.png",
            "image_login_point3.png": 		"a20c.png",


            "image_xuanqu_ztjb0.png": "a100c.png",
            "image_denglu_txtshenpi.png": "a101c.png",
            "shenhezizi.png": "a102c.png",
            "image_login_loginbg.jpg": "a103c.jpg",
            "image_login_loginbg_bottom.jpg": "a104c.jpg",
            "image_login_loginbg_left.jpg": "a105c.jpg",
            "image_login_loginbg_right.jpg": "a106c.jpg",
            "image_login_loginbg_top.jpg": "a107c.jpg",
            "image_login_logo.png": "a108c.png",
            "image_login_notice.png": "a109c.png",
            "image_xuanfu_xfbg.png": "a110c.png",

            "btn_com_chuangback.png": "a111c.png",
            "btn_login_gonggao.png": "a112c.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "a113c.png",
            "btn_xuanqu_anniuhuang.png": "a114c.png",
            "btn_xuanqu_anniulan.png": "a115c.png",
            "btn_xuanqu_quanniu.png": "a116c.png",
            "image_com_tuichu.png": "a117c.png",
            "image_login_changtong.png": "a118c.png",
            "image_login_fanmang.png": "a119c.png",
            "image_login_weihu.png": "a120c.png",
            "image_login_xuanqubg.png": "a121c.png",
            "image_login_init.png": "a122c.png",
            "btn_com_chuangback1.png": "a123c.png",
            "btn_com_long0.png":"a124c.png",
            "btn_com_long1.png":"a125c.png",
            "image_login_notice1.png":"a126c.png",
            "image_loding_txtbhcc.png":"a127c.png",
            "image_xuanfu_gx0.png": "a128c.png",
            "image_xuanfu_gx1.png": "a129c.png",

            "0.png": "a1b.png",
            "1.png": "a2b.png",
            "2.png": "a3b.png",
            "3.png": "a4b.png",
            "4.png": "a5b.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$a", "c", "t1", "j", "g"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        //
        str_leading1 = "6MB1EPT9LKGDFRS$2OX5YHW84QIAVC_J3U0NZ7";
        str_leading2 = "9aml$bcy0o4_ewug21fxsjnvhzk6dq8tr573pi";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_34', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_34())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_34', function (cb) {
    sequence("set-param-Z_34","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_34-minify', function (cb) {
    sequence("set-param-Z_34","MT1_build_minifyTargetProject",cb);
});
/**-------------------------------------------------微信小游戏--Z_34 奇遇-剑雨遮天-Z_34  end-----------------------------------------------------------*/
/**-------------------------------------------------微信小游戏--Z-35 有一 指尖决斗家  start-----------------------------------------------------------*/


/**Z_35包参数*/
var set_param_Z_35 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_35/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_35';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ij';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_35_new";
        targetProject = "wx_build/jg_gameZ_35_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "eeemain.js";
        packageName1 = "eeelibs";
        packageName2 = "eeeeeepf";
        packageName3 = "eeeeeeee";
        libsMainJs = "eeegame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:packageName1},
            "game.js": {url:packageName1+"/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:packageName1+"/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:packageName1+"/eeeindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:packageName1+"/eeeinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:packageName1+"/eeedom.js"},
            "libs/dom_parser.js":  {url:packageName1+"/eeedomparser.js"},
            "libs/laya.wxmini.js":  {url:packageName1+"/eeewxmini.js"},
            "libs/libs.min.js":  {url:packageName1+"/eeelibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:packageName1+"/eeemd5min.js"},
            "libs/sax.js":  {url:packageName1+"/eeesax.js"},
            "libs/weapp-adapter.js":  {url:"eessss/eeeweasaf.js"},
            "libs/zlib.js":  {url:packageName1+"/eeezlibs.js"},
            // "libs/game.js":  {url:"eeelibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"eeeesdk"},
            "wxsdk/wx_aksdk.js":  {url:"eeeesdk/eeesdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"eeeesdk/eeehelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:packageName2},
            "protobuf/client_pb.js":  {url: packageName2 + "/eeecleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url: packageName2 + "/eeeeBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url: packageName2 + "/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:packageName3},
            "subPackage/main.min.js":  {url:packageName3+"/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:packageName3+"/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹
            // "res": {url:"gafda"},
            // "res/atlas": {url:"gafda"},
            "wxloading_atlas": {url:"eeeloding"},
            "wxlogin_atlas": {url:"eeelogin"},
            "wxeff_btn_atlas":{url:"eewxeff"},
            // "res/atlas/wxlogin_atlas.png": {url:"gafda/eeelogin.png"},
            // "res/atlas/wxeff_btn_atlas.png": {url:"gafda/adga321.png"},
            // "res/atlas/wxloading_atlas.png": {url:"gafda/eeeloding.png"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"eeeloding/e1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"eeeloding/e2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"eeeloding/e3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"eeeloding/e4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"eeeloding/e5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"eeeloding/e6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"eeeloding/e7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"eeeloding/e8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"eeeloding/e9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"eeeloding/e10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"eeeloding/e11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"eeeloding/e12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"eeeloding/e13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"eeeloding/e14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"eeeloding/e15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"eeeloding/e16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"eeeloding/e17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"eeeloding/e18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"eeeloding/e19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"eeeloding/e20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"eeelogin/e199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"eeelogin/e1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"eeelogin/e123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"eeelogin/e2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"eeelogin/e3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"eeelogin/e4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"eeelogin/e5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"eeelogin/e6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"eeelogin/e7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"eeelogin/e8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"eeelogin/e9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"eeelogin/e10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"eeelogin/e11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"eeelogin/e12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"eeelogin/e13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"eeelogin/e14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"eeelogin/e15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"eeelogin/e16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"eeelogin/e17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"eeelogin/e18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"eeelogin/e19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"eeelogin/e20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"eeelogin/e21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"eeelogin/e22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"eeelogin/e23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"eeelogin/e24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"eeelogin/e25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"eeelogin/e26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"eeelogin/e27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"eeelogin/e28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"eeelogin/e29b.png"},

            "wxeff_btn_atlas/0.png": {url:"eewxeff/e1c.png"},
            "wxeff_btn_atlas/1.png": {url:"eewxeff/e2c.png"},
            "wxeff_btn_atlas/2.png": {url:"eewxeff/e3c.png"},
            "wxeff_btn_atlas/3.png": {url:"eewxeff/e4c.png"},
            "wxeff_btn_atlas/4.png": {url:"eewxeff/e5c.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "eeehelp",
            "./sax": "./eeesax",
            "./dom": "./eeedom",
            "client_pb.js": "eeecleintpb.js",
            "protobuf.js": "eeeeBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "eeelogin",
            "wxeff_btn_atlas": "eewxeff",
            "wxloading_atlas": "eeeloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "e1a.png",
            "btn_loding_abcelq1.png": "e2a.png",
            "image_loading_bg.jpg": "e3a.jpg",
            "image_loading_bg_bottom.jpg": "e4a.jpg",
            "image_loading_bg_bottom2.jpg": "e5a.jpg",
            "image_loading_bg_left.jpg": "e6a.jpg",
            "image_loading_bg_left2.jpg": "e7a.jpg",
            "image_loading_bg_right.jpg": "e8a.jpg",
            "image_loading_bg_right2.jpg": "e9a.jpg",
            "image_loading_bg_top.jpg": "e10a.jpg",
            "image_loading_bg_top2.jpg": "e11a.jpg",
            "image_loading_bg2.jpg": "e12a.jpg",

            "image_loding_bar0.png": "e13a.png",
            "image_loding_bar1.png": "e14a.png",
            "image_loding_bar02.png": "e15a.png",
            "image_loding_bar2.png": "e16a.png",
            "image_loding_bar3.png": "e17a.png",
            "image_login_point1.png": "e18a.png",
            "image_login_point2.png":"e19a.png",
            "image_login_point3.png": "e20a.png",


            "image_xuanqu_ztjb0.png": "e199b.png",
            "image_denglu_txtshenpi.png": "e1b.png",
            "shenhezizi.png": "e123b.png",
            "image_login_loginbg.jpg": "e2b.jpg",
            "image_login_loginbg_bottom.jpg": "e3b.jpg",
            "image_login_loginbg_left.jpg": "e4b.jpg",
            "image_login_loginbg_right.jpg": "e5b.jpg",
            "image_login_loginbg_top.jpg": "e6b.jpg",
            "image_login_logo.png": "e7b.png",
            "image_login_notice.png": "e8b.png",
            "image_xuanfu_xfbg.png": "e9b.png",

            "btn_com_chuangback.png": "e10b.png",
            "btn_login_gonggao.png": "e11b.png",
            "btn_login_loginanniu.png": "e12b.png",
            "btn_login_yingsi.png": "e13b.png",
            "btn_xuanqu_anniuhuang.png": "e14b.png",
            "btn_xuanqu_anniulan.png": "e15b.png",
            "btn_xuanqu_quanniu.png": "e16b.png",
            "image_com_tuichu.png": "e17b.png",
            "image_login_changtong.png": "e18b.png",
            "image_login_fanmang.png": "e19b.png",
            "image_login_weihu.png": "e20b.png",
            "image_login_xuanqubg.png": "e21b.png",
            "image_login_init.png": "e22b.png",
            "btn_com_chuangback1.png": "e23b.png",
            "btn_com_long0.png":"e24b.png",
            "btn_com_long1.png":"e25b.png",
            "image_login_notice1.png":"e26b.png",
            "image_loding_txtbhcc.png":"e27b.png",
            "image_xuanfu_gx0.png": "e28b.png",
            "image_xuanfu_gx1.png": "e29b.png",

            "0.png": "e1c.png",
            "1.png": "e2c.png",
            "2.png": "e3c.png",
            "3.png": "e4c.png",
            "4.png": "e5c.png",

        }
        strFilePath = "/eres";
        strFileName = "/efiles.zip";
        // globleKeys = ["$e", "w", "x", "E$", "y"];
        globleKeys = ["$e", "b", "c1", "e1", "e"];
        noReplaceJs = packageName1+"/game.js";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = false;
        // needShuffle = true;
        str_leading1 = "I1GU0J3L2R79YDCHTWBF8_NVS4AZKO$PMQ56EX";
        str_leading2 = "12w85d0b6k9sunq3ji$xgtlhrzyfv4_7amcope";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_35', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_35())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_35', function (cb) {
    sequence("set-param-Z_35","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_35-minify', function (cb) {
    sequence("set-param-Z_35","MT1_build_minifyTargetProject",cb);
});


/**-------------------------------------------------微信小游戏--Z-35 有一 指尖决斗家  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Z36包 泡椒-新大话梦缘_Z_36 END start-----------------------------------------------------------*/

/**Z_36包参数*/
var set_param_Z_36 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageZ_36/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_36';
        INIT_PATH = '/';
        // SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = '$';
        sourceProject = "wx_build/jg_gameZ_36_new";
        targetProject = "wx_build/jg_gameZ_36_obfuscator";
        targetFileMap[targetGameJs] = {url:"game_main.js",extractStr:false,count:5,strLen:13};
        mainJsName = "lsjdflaamain.js";
        libsMainJs = "bbbgame.js";
        filesMap = {
            //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen replace是否替换文件里面的资源名称
            "libs": {url:"bbblibs"},
            "game.js": {url:"bbblibs/"+libsMainJs,extractStr:true,count:1,strLen:3},
            "libs_game.js": {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "index.js": {url:"bbblibs/bbbindex.js",extractStr:true,count:1,strLen:3},
            "init.min.js":  {url:"bbblibs/bbbinitmin.js",extractStr:true,count:1,strLen:3,replace:true},
            "libs/dom.js":  {url:"bbblibs/bbbdom.js"},
            "libs/dom_parser.js":  {url:"bbblibs/bbbdomparser.js"},
            "libs/laya.wxmini.js":  {url:"bbblibs/bbbwxmini.js"},
            "libs/libs.min.js":  {url:"bbblibs/bbblibsmin.js",extractStr:false},
            "libs/md5.min.js":  {url:"bbblibs/bbbmd5min.js"},
            "libs/sax.js":  {url:"bbblibs/bbbsax.js"},
            "libs/weapp-adapter.js":  {url:"bbssss/bbbweasaf.js"},
            "libs/zlib.js":  {url:"bbblibs/bbbzlibs.js"},
            // "libs/game.js":  {url:"bbblibs/game.js",extractStr:true,count:1,strLen:3},
            "wxsdk":  {url:"bbbk"},
            "wxsdk/wx_aksdk.js":  {url:"bbbk/bbbsdk.js",extractStr:true,count:1,strLen:3},
            "wxsdk/helper.js":  {url:"bbbk/bbbhelp.js",extractStr:true,count:1,strLen:3},

            "protobuf":  {url:"bbbbbbf"},
            "protobuf/client_pb.js":  {url:"bbbbbbf/bbbcleintpb.js",extractStr:true,count:5,strLen:3},
            "protobuf/protobuf.js":  {url:"bbbbbbf/bbbbBuff.js",extractStr:true,count:5,strLen:3},
            "protobuf/game.js":  {url:"bbbbbbf/game.js",extractStr:true,count:5,strLen:3},

            "subPackage":  {url:"bbbbbbbbb"},
            "subPackage/main.min.js":  {url:"bbbbbbbbb/"+mainJsName,extractStr:true,count:1,strLen:3},
            "subPackage/game.js":  {url:"bbbbbbbbb/game.js",extractStr:true,count:1,strLen:3},

            //随机创建名字和文件夹

            "wxloading_atlas": {url:"bbbloding"},
            "wxlogin_atlas": {url:"bbblogin"},
            "wxeff_btn_atlas":{url:"bwxeff"},

            "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
            "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
            "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"bbbloding/a4a.jpg"},
            "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"bbbloding/a5a.jpg"},
            "wxloading_atlas/image_loading_bg_left.jpg": {url:"bbbloding/a6a.jpg"},
            "wxloading_atlas/image_loading_bg_left2.jpg": {url:"bbbloding/a7a.jpg"},
            "wxloading_atlas/image_loading_bg_right.jpg": {url:"bbbloding/a8a.jpg"},
            "wxloading_atlas/image_loading_bg_right2.jpg": {url:"bbbloding/a9a.jpg"},
            "wxloading_atlas/image_loading_bg_top.jpg": {url:"bbbloding/a10a.jpg"},
            "wxloading_atlas/image_loading_bg_top2.jpg": {url:"bbbloding/a11a.jpg"},
            "wxloading_atlas/image_loading_bg2.jpg": {url:"bbbloding/a12a.jpg"},

            "wxloading_atlas/image_loding_bar0.png": {url:"bbbloding/a13a.png"},
            "wxloading_atlas/image_loding_bar1.png": {url:"bbbloding/a14a.png"},
            "wxloading_atlas/image_loding_bar02.png": {url:"bbbloding/a15a.png"},
            "wxloading_atlas/image_loding_bar2.png": {url:"bbbloding/a16a.png"},
            "wxloading_atlas/image_loding_bar3.png": {url:"bbbloding/a17a.png"},
            "wxloading_atlas/image_login_point1.png": {url:"bbbloding/a18a.png"},
            "wxloading_atlas/image_login_point2.png": {url:"bbbloding/a19a.png"},
            "wxloading_atlas/image_login_point3.png": {url:"bbbloding/a20a.png"},

            "wxlogin_atlas/image_xuanqu_ztjb0.png": {url:"bbblogin/b199b.png"},
            "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"bbblogin/b1b.png"},
            "wxlogin_atlas/shenhezizi.png": {url:"bbblogin/b123b.png"},
            "wxlogin_atlas/image_login_loginbg.jpg": {url:"bbblogin/b2b.jpg"},
            "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"bbblogin/b3b.jpg"},
            "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"bbblogin/b4b.jpg"},
            "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"bbblogin/b5b.jpg"},
            "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"bbblogin/b6b.jpg"},
            "wxlogin_atlas/image_login_logo.png": {url:"bbblogin/b7b.png"},
            "wxlogin_atlas/image_login_notice.png": {url:"bbblogin/b8b.png"},
            "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"bbblogin/b9b.png"},

            "wxlogin_atlas/btn_com_chuangback.png": {url:"bbblogin/b10b.png"},
            "wxlogin_atlas/btn_login_gonggao.png": {url:"bbblogin/b11b.png"},
            "wxlogin_atlas/btn_login_loginanniu.png": {url:"bbblogin/b12b.png"},
            "wxlogin_atlas/btn_login_yingsi.png": {url:"bbblogin/b13b.png"},
            "wxlogin_atlas/btn_xuanqu_anniuhuang.png": {url:"bbblogin/b14b.png"},
            "wxlogin_atlas/btn_xuanqu_anniulan.png": {url:"bbblogin/b15b.png"},
            "wxlogin_atlas/btn_xuanqu_quanniu.png": {url:"bbblogin/b16b.png"},
            "wxlogin_atlas/image_com_tuichu.png": {url:"bbblogin/b17b.png"},
            "wxlogin_atlas/image_login_changtong.png": {url:"bbblogin/b18b.png"},
            "wxlogin_atlas/image_login_fanmang.png": {url:"bbblogin/b19b.png"},
            "wxlogin_atlas/image_login_weihu.png": {url:"bbblogin/b20b.png"},
            "wxlogin_atlas/image_login_xuanqubg.png": {url:"bbblogin/b21b.png"},
            "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22b.png"},
            "wxlogin_atlas/btn_com_chuangback1.png": {url:"bbblogin/b23b.png"},
            "wxlogin_atlas/btn_com_long0.png": {url:"bbblogin/b24b.png"},
            "wxlogin_atlas/btn_com_long1.png": {url:"bbblogin/b25b.png"},
            "wxlogin_atlas/image_login_notice1.png": {url:"bbblogin/b26b.png"},
            "wxlogin_atlas/image_loding_txtbhcc.png": {url:"bbblogin/b27b.png"},
            "wxlogin_atlas/image_xuanfu_gx0.png": {url:"bbblogin/b28b.png"},
            "wxlogin_atlas/image_xuanfu_gx1.png": {url:"bbblogin/b29b.png"},

            "wxeff_btn_atlas/0.png": {url:"bwxeff/b100b.png"},
            "wxeff_btn_atlas/1.png": {url:"bwxeff/b101b.png"},
            "wxeff_btn_atlas/2.png": {url:"bwxeff/b102b.png"},
            "wxeff_btn_atlas/3.png": {url:"bwxeff/b103b.png"},
            "wxeff_btn_atlas/4.png": {url:"bwxeff/b104b.png"},
        };
        mt1Replace = {
            "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
            "./helper": "./" + "bbbhelp",
            "./sax": "./bbbsax",
            "./dom": "./bbbdom",
            "client_pb.js": "bbbcleintpb.js",
            "protobuf.js": "bbbbBuff.js",
            "main.min.js": mainJsName,
            "wxlogin_atlas": "bbblogin",
            "wxeff_btn_atlas": "bwxeff",
            "wxloading_atlas": "bbbloding",
            // "res/atlas/": "gafda/",

            "btn_loding_abcelq0.png": "a1a.png",
            "btn_loding_abcelq1.png": "a2a.png",
            "image_loading_bg.jpg": "a3a.jpg",
            "image_loading_bg_bottom.jpg": "a4a.jpg",
            "image_loading_bg_bottom2.jpg": "a5a.jpg",
            "image_loading_bg_left.jpg": "a6a.jpg",
            "image_loading_bg_left2.jpg": "a7a.jpg",
            "image_loading_bg_right.jpg": "a8a.jpg",
            "image_loading_bg_right2.jpg": "a9a.jpg",
            "image_loading_bg_top.jpg": "a10a.jpg",
            "image_loading_bg_top2.jpg": "a11a.jpg",
            "image_loading_bg2.jpg": "a12a.jpg",

            "image_loding_bar0.png": "a13a.png",
            "image_loding_bar1.png": "a14a.png",
            "image_loding_bar02.png": "a15a.png",
            "image_loding_bar2.png": "a16a.png",
            "image_loding_bar3.png": "a17a.png",
            "image_login_point1.png": "a18a.png",
            "image_login_point2.png":"a19a.png",
            "image_login_point3.png": "a20a.png",


            "image_xuanqu_ztjb0.png": "b199b.png",
            "image_denglu_txtshenpi.png": "b1b.png",
            "shenhezizi.png": "b123b.png",
            "image_login_loginbg.jpg": "b2b.jpg",
            "image_login_loginbg_bottom.jpg": "b3b.jpg",
            "image_login_loginbg_left.jpg": "b4b.jpg",
            "image_login_loginbg_right.jpg": "b5b.jpg",
            "image_login_loginbg_top.jpg": "b6b.jpg",
            "image_login_logo.png": "b7b.png",
            "image_login_notice.png": "b8b.png",
            "image_xuanfu_xfbg.png": "b9b.png",

            "btn_com_chuangback.png": "b10b.png",
            "btn_login_gonggao.png": "b11b.png",
            "btn_login_loginanniu.png": "b12b.png",
            "btn_login_yingsi.png": "b13b.png",
            "btn_xuanqu_anniuhuang.png": "b14b.png",
            "btn_xuanqu_anniulan.png": "b15b.png",
            "btn_xuanqu_quanniu.png": "b16b.png",
            "image_com_tuichu.png": "b17b.png",
            "image_login_changtong.png": "b18b.png",
            "image_login_fanmang.png": "b19b.png",
            "image_login_weihu.png": "b20b.png",
            "image_login_xuanqubg.png": "b21b.png",
            "image_login_init.png": "b22b.png",
            "btn_com_chuangback1.png": "b23b.png",
            "btn_com_long0.png":"b24b.png",
            "btn_com_long1.png":"b25b.png",
            "image_login_notice1.png":"b26b.png",
            "image_loding_txtbhcc.png":"b27b.png",
            "image_xuanfu_gx0.png": "b28b.png",
            "image_xuanfu_gx1.png": "b29b.png",

            "0.png": "b100b.png",
            "1.png": "b101b.png",
            "2.png": "b102b.png",
            "3.png": "b103b.png",
            "4.png": "b104b.png",

        };

        strFilePath = "/res";
        strFileName = "/files.zip";
        globleKeys = ["y$", "_", "_s", "p$", "_d"];
        noReplaceJs = "bbblibs/game.js";
        packageName1 = "bbblibs";
        packageName2 = "bbbbbbf";
        packageName3 = "bbbbbbbbb";
        arrIndex = 0;
        globleArrs = new Array(arrIndex);
        numberToHex = true;
        // needShuffle = true;
        str_leading1 = "LNBUKO5C7W$3MJ6QS2X_EFZ18GDVAT0YPR9IH4";
        str_leading2 = "h$12pou93a4ygr58fizdkelcnvx7mwts60_jqb";
        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
            var repalce = item.replace;
            if(repalce){
                replaceMap[url] = true;
            }
        }
        replaceMap[targetGameJs] = true;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_36', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_36())
    return stream;
});

//混淆
gulp.task('build-babel-obfuscator-Z_36', function (cb) {
    sequence("set-param-Z_36","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string', "renameGameJs","cleanGameJs",'build-end-babel',cb);
    // sequence("set-param-j","CleanNewFolder","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel',cb);
});

//混淆
gulp.task('build-babel-obfuscator-Z_36_minify', function (cb) {
    sequence("set-param-Z_36","MT1_build_minifyTargetProject",cb);
});

/**-------------------------------------------------微信小游戏--Z36包 泡椒-新大话梦缘_Z_36 END-----------------------------------------------------------*/


/**文件压缩*/
var js_minify = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;

        console.info("minify文件：" + file.path);

        var options = {
            compress: {
                global_defs: {DEBUG: false},
                drop_debugger: true,
                toplevel: false, //干掉顶层作用域中没有被引用的函数 ("funcs")和/或变量("vars")
                if_return: true,
                join_vars: false, //合并连续 var 声明
                booleans: true,
                dead_code: true,
                properties: true, //用.来重写属性引用，例如foo["bar"] → foo.bar
            },
            mangle: {
                toplevel: false, //混淆那些定义在顶层作用域的名字
                eval: false,
                keep_fnames: true, //true表示不混淆函数名
                reserved: ["Main", "MainWX", "LayaGPU"],
                // properties: {
                //     regex: /(^((p|P|n|N)_.{3,100})|(.{2,100}Cfg)$)|(^[A-Z].*(Panel|Alert|Model|Mod|Ctrl|Ctl|Item|Itm|View|Mgr)$)|(^(get|set|do)_[A-Z].{3,100})$/,
                // }
            },
            output: {
                beautify: false,
                ascii_only: true
            },
            sourceMap: {
                includeSources: true,
                filename: "main.js"
                // root: path.join(root, "js/"),
            },
        };
        var mainres = uglifyjs.minify(contents, options);

        if (mainres.error) {
            throw Error("压缩报错：" + mainres.error);
        }

        if (mainres.code) {
            contents = mainres.code;// + "\n//@ sourceMappingURL=js/main.min.map";
        }

        if (mainres.map) {
            var mapbuf = Buffer.alloc(Buffer.byteLength(mainres.map), mainres.map);
            fs.writeFileSync(file.path.replace('.extends.js', '.min.map'), mapbuf);
        }

        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
var pfFlag = "wx";
var globleKeys = [];//["$b", "$c", "b", "B_","$"];  //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀,为所有全局标识符设置前缀
var identifiersObfuscatorArray = [];  //混淆用到的标识符
var arrIndex = 0;  //数组索引
var globleArrs = [];  //抽取的字符串数组，生成压缩文件
var globleArrsObj = {}; //抽取的字符串数组用于比较重复，不重复添加到globleArrs
var globleStrStat = {}; //字符出现统计
var identifiersGlobleMap = {};
var identifiersRenameStr = '';
var identifiersRenameMapStr = '';
var identifiersUIMap = {};
var strFilePath = "";   //字符串提取保存文件路径
var strFileName = "";   //字符串提取保存文件名字
var noReplaceJs = "";   //不需要替换的js
var packageName1 = "";  //包名1
var packageName2 = "";  //包名2
var packageName3 = "";  //包名3
var numberToHex=false;  //提取的字符串数组下标是否转化为16进制
// var needShuffle = false; //是否打乱替换的字符串
var str_leading1 = "";
var str_leading2 = "";
var mainJsName = ""; //主文件的名字
var imgRes1 = "wxloading_atlas";//图片资源文件夹1
var imgRes2 = "wxlogin_atlas";//图片资源文件夹2
var imgRes3  = "wxeff_btn_atlas";//图片资源文件夹3
var libsMainJs = ""; //入口包game 应该require的文件
/**生成随机变量名*/
var identifier_create = function (rate) {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        // 语法关键字
        var keys = [
            "abstract", "arguments", "boolean", "break", "byte",
            "case", "catch", "char", "class", "const",
            "continue", "debugger", "default", "delete", "do",
            "double", "else", "enum", "eval", "export",
            "extends", "false", "final", "finally", "float",
            "for", "each", "function", "goto", "if", "implements",
            "import", "in", "instanceof", "int", "interface",
            "var", "long", "native", "new", "null",
            "package", "private", "protected", "public", "return",
            "short", "static", "super", "switch", "synchronized",
            "this", "throw", "throws", "transient", "true",
            "try", "typeof", "var", "void", "volatile",
            "while", "with", "yield", "Array", "Date", "eval", "function", "hasOwnProperty",
            "Infinity", "isFinite", "isNaN", "isPrototypeOf", "length",
            "Math", "NaN", "name", "Number", "Object",
            "prototype", "String", "toString", "undefined", "valueOf",

            "Array", "Date", "eval", "function", "hasOwnProperty",

            "alert", "all", "anchor", "anchors", "area",
            "assign", "blur", "button", "checkbox", "clearInterval",
            "clearTimeout", "clientInformation", "close", "closed", "confirm",
            "constructor", "crypto", "decodeURI", "decodeURIComponent", "defaultStatus",
            "document", "element", "elements", "embed", "embeds",
            "encodeURI", "encodeURIComponent", "escape", "event", "fileUpload",
            "focus", "form", "forms", "frame", "innerHeight",
            "innerWidth", "layer", "layers", "link", "location",
            "mimeTypes", "navigate", "navigator", "frames", "frameRate",
            "hidden", "history", "image", "images", "offscreenBuffering",
            "open", "opener", "option", "outerHeight", "outerWidth",
            "packages", "pageXOffset", "pageYOffset", "parent", "parseFloat",
            "parseInt", "password", "pkcs11", "plugin", "prompt",
            "propertyIsEnum", "radio", "reset", "screenX", "screenY",
            "scroll", "secure", "select", "self", "setInterval",
            "setTimeout", "status", "submit", "taint", "text",
            "textarea", "top", "unescape", "untaint", "window",

            "onblur", "onclick", "onerror", "onfocus",
            "onkeydown", "onkeypress", "onkeyup", "onmouseover",
            "onload", "onmouseup", "onmousedown", "onsubmit",

            "global", "document", "root", "module", "Laya", "require", "exports",
            "JSON", "Error", "runWith", "__getset", "defineProperty",
            "define", "unescape", "Symbol", "Promise", "GameGlobal"
        ]


        // 代码里要混淆的全局属性和方法
        var identifiersRename = [
            // libs/index.js
            'PF_INFO', 'PLATFORM', 'PACK', 'apiRetryAmount', 'isCheckBan', 'loadProbPkg', 'loadMainPkg', 'loadVersion', 'loadOption', 'loadServer',
            'bEnterGame', 'loginAlert', 'loginAlert', 'isShowLoading', 'wxShowLoading', 'wxHideLoading', 'changeServerLoading', 'getJsURL',
            'toAllProgress', 'toProgress', 'toEnterGame', 'onApiError', 'reqRecordError', 'reqRecordInfo', 'clientlog', 'sdkInit', 'sdkOnInited',
            'sdkOnLogin', 'onUserLogin', 'onUserLoginDefaultServers', 'loadVersionConfig', 'reqPkgOptions', 'reqPkgOptionsCallBack', 'loadCreateRole',
            'toCreate', 'toLogin', 'toLevelUp', 'toRealName', 'openShare', 'onShowData', 'onShowCallback', 'reqPlayerAskInfo',
            'openSubscribeMsg', 'batteryInfo', 'getBatteryInfo', 'onRoleRecordStep', 'req_server_group', 'reqServerGroupCallBack', 'req_server_owner', 'reqServerOwnerCallBack',
            'req_server_list', 'reqServerListCallBack', 'req_server_notice', 'get_status', 'req_server_check_ban', 'reqServerCheckBanCallBack', 'checkBanSuccess',
            'initMain', 'enterToGame', 'initComplete', 'workerJsURL', 'wxLimitLoad', 'wxBenchmarkLevel',

            // libs/main.js
            'loadingInterval', 'wxData', 'showLoadingBtn', 'wxlogin_atlas', 'wxloading_atlas', 'wxeff_btn_atlas', 'openAuthor', 'compareVersion', 'loadProbuf', 'loadProbufTask',
            'loadMain', 'loadMainTask', 'memoryWarningNum',

            // wxsdk
            'PARTNER_SDK', 'user_game_info', 'user_invite_info', 'this_order_id', 'mainSDK',

            // init.js
            'preloadServer', 'preloadServer1', 'preloadLoading1', 'preloadLoading2', 'req_recommend_server_list', 'm_loadingRes1', 'm_loadingRes2', 'm_serverRes',
            'm_serverRes1', 'requestWeb', 'setShowBtn',

            // subPackage/main.min.js
            'onMessageOpcodes', 'publishOpcodes', 'sendPb', 'showMainTxt', 'gameAlert', 'loginUrlMap', 'startLogin', 'initPlatdata', 'reloginHandler',
            'showMessage', '_onRefresh', 'get_pbtype', 'enableCache', 'enableCheck', 'texSupportIndex', 'unsafeRemoveAt', 'unsafeRemove', 'randomIndex', 'removeRepetition', 'randomExclude',
            'registerOpcode', 'addCommandHandler', 'removeCommandHandler', 'sendCommand', 'updateElement', 'allocEntry', 'removeQueue', 'updateQueue',
            'removeback', 'ResPickUtils', 'recLoadRes', 'getProCount', 'onUpdateQueue', 'closePower', 'getCfgById',
            '_easingFunction', '_interpolationFunction', 'stopChainedTweens', 'getLeftTime', 'repeatDelay', 'setInterrupt',
            'completeGuids', 'registeGuid', 'removeGuid', 'getSprById', 'isInMission', 'hasMonster', 'getMonsterIDBySpwan', 'setSpwanMonsterMap', 'clearSpwanMonserMap',
            'enterSceFunc', 'leaveSceFunc', 'getIsLivePlayer', 'getRoleByObjId', 'exceptScene', 'getEnablePlatformsByPanelId', 'getEnableWxByPanelId', 'getEnableBgFieldsByPanelId',
            'getEnablePlatformsByActionId', 'getEnableWxByActionId', 'getEnableBgFieldsByActionId', 'getEnablePlatformsByUipartId', 'getEnableWxByUipartId', 'getEnableBgFieldsByUipartId', 'getEnablePlatformsByRpKey', 'getEnableWxByRpKey', 'getEnableBgFieldsByRpKey',
            'getEnableWxActionIds', 'isForbidenByPanelId', 'isWxLackMissionLv', 'isContainOpenBgField', 'isForbidenByActionId', 'isForbidenByUipartId', 'isForbidenByRpKey', 'getDataByField',
            'getActOpenRep', 'setRingActionState', 'updActOpen', 'setActOpen', 'getFcStateById', 'isIosVerify', 'getActFcState',
            'getFcNdShow', 'getFcIsOpen', 'getWindowFcIsOpen', 'getWindowConfigById', 'getFcOpenTipById',
            'getFcOpenTipByPanelId', 'getFctInfo', 'getJiuXiaoLingInfo', 'onFuwaAllInfoReq', 'onGetUserSelectInfo', 'setRpKeyState', 'getRpKeyState', 'getPvtFoolInfo', 'getAnswerReply', 'getPreventFool', 'getAnswerAward',
            'getBtmTabCfgByPanelId', 'viewFtType', 'openPanelByEnterId', 'getWindowCfgByFcId', 'BotmTabData', 'getRpsByPanelId', 'getTabDataByPanelId', 'openPanelByPanelId', 'getTrueVipLv', 'getPanelById', 'closeBotmTab', 'isSameTabDataByPanelId',
            'getPanelIdArr', 'addToMidUiLy', 'setGradientImg', 'onSpecialCheck', 'clearStack', 'exitDungeon', 'isCommonSceneByType', 'loseToOpenPanel', 'isRechargeWindow', 'getTabDataByEnterId',
            'displayFunc', 'closeByOthers', '_isDisplay', '_isPowerModeUnClose', 'isPowerMode', 'isPowerModeUnClose', 'rmAutoEvts', 'rmAutoRegRp', 'addAutoEvt', 'addAutoRegRp', 'setOpenParamInterface', 'setOpenParam', 'closeByOtherPanel', 'regGuideSpr',

        ]


        var ui = fs.readFileSync("../../client/src/ui/layaUI.max.all.ts", {encoding: "utf8"});
        var reg = /(public )[a-zA-Z0-9\$_]{10,60}(:)/g;
        // var reg = /(var leading = init\(\")[a-zA-Z\$_]{1,60}(\"\);)/g;

        var mch = ui.match(reg);
        if (mch && mch.length > 0) {
            console.error("获取UI的标识符：" + mch.length);
            for (var i = 0; i < mch.length; i++) {
                var uiide = mch[i].replace("public ", "").replace(":", "");
                identifiersUIMap[uiide] = true;
                // console.error("获取UI的标识符：" + uiide);
            }
        } else {
            console.error("获取UI的标识符出错：");
        }


        var digits = "0123456789";
        var identifiersRenameArray = [];
        var identifiersGlobleArray = [];
        identifiersObfuscatorArray = [];
        var reNameArrObj = {};
        var obfuscatorArrObj = {};
        var perm = function (s, arrObj, pre) {
            var result = [];
            if (s.length <= 1) {
                return [s];
            } else {
                for (var i = 0; i < s.length; i++) {
                    var c = s[i];
                    var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
                    var l = perm(newStr, arrObj, pre);

                    for (var j = 0; j < l.length; j++) {
                        var tmp = c + l[j];
                        result.push(tmp);
                        tmp = pre + tmp;
                        if (keys.indexOf(tmp) == -1 && globleKeys.indexOf(tmp) == -1 && !reNameArrObj[tmp] && !obfuscatorArrObj[tmp] && identifiersGlobleArray.indexOf(tmp) == -1 && digits.indexOf(tmp.slice(0, 1)) == -1) {
                            arrObj[tmp] = tmp;
                        }
                    }
                }
            }
            return result;
        };

        // var shuffle =  function (array) {
        //     for (var i = array.length - 1; i > 0; i--) {
        //         var j = Math.floor(Math.random() * (i + 1));
        //         var temp = array[i];
        //         array[i] = array[j];
        //         array[j] = temp;
        //     }
        //     return array;
        // };
        // leading = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";

        // if(needShuffle){
            leading = str_leading1;
        // }
        console.log("是否打乱数组", leading)
        for (var n = 5; n < 6; n++) {
            for (var m = 0; m < leading.length; m++) {
                perm(leading.slice(m, m + n), reNameArrObj, globleKeys[3]);
            }
        }

        for(var key in reNameArrObj){
            identifiersRenameArray.push(key);
        }

        if (identifiersRename.length > identifiersRenameArray.length) {
            throw new Error('全局变量映射随机字符过少  ' + identifiersRename.length + '  ' + identifiersRenameArray.length);
        }
        // identifiersRenameMapStr = "";
        for (var i = 0; i < identifiersRename.length; i++) {
            identifiersGlobleMap[identifiersRename[i]] = identifiersRenameArray[i];
            identifiersGlobleArray.push(identifiersRename[i]);
            identifiersGlobleArray.push(identifiersRenameArray[i]);
            // identifiersRenameMapStr += identifiersRename[i] + ":" + identifiersRenameArray[i] + ", ";
        }
        // console.info("全局变量映射关系："+ identifiersRenameMapStr);


        // leading = "abcdefghijklmnopqrstuvwxyz$_0123456789";
        leading = str_leading2;
        leading = leading.replace(globleKeys[2], '');
        // if(needShuffle){
        //     leading = shuffle(Array.from(leading)).join("")
        // }
        console.log("是否打乱数组",leading)
        //生成混淆用的标识符
        for (var n = 1; n < 7; n++) { //字符数量
            for (var m = 0; m < leading.length; m++) {
                perm(leading.slice(m, m + n), obfuscatorArrObj, '');
            }
        }
        for(var key in obfuscatorArrObj){
            identifiersObfuscatorArray.push(key);
        }

        console.info("标识符生成：" + identifiersRenameArray.length + "  " + identifiersObfuscatorArray.length);

        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task("build-identifier", function () {
    var stream = gulp
        .src(BUILD+PACK+"/game.js")
        .pipe(identifier_create())
        // .pipe(gulp.dest(sourceProject+"/"))
    return stream;
});

var js_checkStrCount =  function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;
        console.info("字符串检测：" + file.path);

        var url = file.relative.replace(/\\/g,"/");
        var config = targetFileMap[url];
        if(!config){
            console.log("没有配置 "+file.path)
        }else{
            var extractStr = config.extractStr || false;
            if(!extractStr){
                console.log("check  配置不需要提取字符串:", url);
            }
        }

        //插件对象，可以对特定类型的节点进行处理
        var filePath = path;
        var visitor = {
            StringLiteral(path) {  //代表处理 StringLiteral 节点 提取字符串
                // && !(path.parent && path.parent.type == "VariableDeclaration" && path.parent.parent && path.parent.parent.type == "VariableDeclarator" && path.parent.parent.id && path.parent.parent.id.name== "acfe")
                if (path.node.type == "StringLiteral") { //查找需要修改的叶子节点
                    var tempstr = path.node.value;
                    if(!config){
                        return;
                    }
                    // if(tempstr.indexOf(globleKeys[3])!=-1){//不需要提取
                    //     return;//
                    // }
                    // for(var i = 0;i<globleKeys.length;i++){
                    //     if(tempstr.indexOf(globleKeys[i])!=-1){
                    //         return;
                    //     }
                    // }
                    if(tempstr.indexOf("$")!=-1){
                        return;
                    }
                    if(globleKeys.indexOf(tempstr)!= -1){//不需要提取
                        return;
                    }

                    var extractStr = config.extractStr || false;
                    if(!extractStr){
                        return;
                    }
                    var strLen = config.strLen || 0;
                    var reg = /[\u4e00-\u9fa5]+/g;
                    var isChinese = reg.test(tempstr);
                    if(!isChinese &&  tempstr.length < strLen){
                        return;
                    }
                    if(tempstr.indexOf(PREFIX)!= -1 && !isChinese){ //不需要提取
                        return;
                    }
                    if(tempstr.length>=1000){
                        console.log("大于1000的字符串：",tempstr.length , "内容:",tempstr);
                    }
                    // if (tempstr.length > 0 && ((tempstr.length < 300 && tempstr.indexOf("\n") == -1) || isChinese)) {
                        // console.info(path.node.type +"   "+ path.node.value);
                        try {
                            if(globleStrStat[tempstr] == undefined){
                                globleStrStat[tempstr] = 1;
                            }else{
                                globleStrStat[tempstr] += 1;
                            }
                            var count = config.count;
                            if(globleStrStat[tempstr] == count){
                                // console.log(url+"出现"+count+"次:",tempstr)
                            }
                        } catch (error) {
                            // console.error(error);
                        }
                    // }

                }
            },
            BinaryExpression(path){

            },
            Program: {
                enter(path, state) {
                    // console.log('start processing this Program...');
                },
                exit(path, state) {
                    // console.log('end processing this Program!');
                    // console.info(path.node.type +"   "+ (path.node.body&&path.node.body.length));
                    // if (path.node.body) {
                    //     path.node.body.unshift(arrayDeclaration);
                    // }
                }
            }
        };

        var pipeline = new babel_core.Pipeline();
        var pretransform = pipeline.pretransform.bind(pipeline);
        var rst = pretransform(contents);
        rst.opts = rst.initOptions({plugins : [
            {
                'visitor' : visitor
            }
        ]});
        rst.buildPluginsForOptions(rst.opts);
        contents = rst.transform().code;
        //这里存起来放到下个task里用
        AST[url] = rst

        // 其实不用写入也不影响才对
        var bf = new Buffer.from(contents);
        file.contents = bf;
        //console.log(url + ",ast处理完成");
        cb();
        this.emit("data", file);
        //console.log(url + ",已经emit了");
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

/**AST处理（字符串提取，变量名替换）*/
var js_babel = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;
        console.info("字符串标识符处理：" + file.path);
        identifiersRenameStr += "\n\n\n\n============================" + file.path + "\n";

        // var arrayName = globleKeys[1];
        // var arrayElements = [];
        // var arrayDeclaration = babel_types.variableDeclaration("var", [babel_types.variableDeclarator(babel_types.identifier(arrayName), babel_types.arrayExpression(arrayElements)]);
        //var  $b = wx.xxx;  variableDeclaration 声明一个变量   variableDeclarator声明变量node  identifier 声明变量的标识符（名字）    memberExpression 成员表达式 通常指屌用成员对象
        // var arrayDeclaration = babel_types.variableDeclaration("var", [babel_types.variableDeclarator(babel_types.identifier(arrayName), babel_types.memberExpression(babel_types.identifier(pfFlag), babel_types.identifier(globleKeys[0])))]);
        var url = file.relative.replace(/\\/g,"/");
        var config = targetFileMap[url];
        if(!config){
            console.log("没有配置 "+file.path)
        }
        else{
            var extractStr = config.extractStr || false;
            if(!extractStr){
                console.log("js_babel  配置不需要提取字符串:", url);
            }
        }

        //插件对象，可以对特定类型的节点进行处理
        var visitor = {
            StringLiteral(path) {  //代表处理 StringLiteral 节点 提取字符串
                // && !(path.parent && path.parent.type == "VariableDeclaration" && path.parent.parent && path.parent.parent.type == "VariableDeclarator" && path.parent.parent.id && path.parent.parent.id.name== "acfe")
                if (path.node.type == "StringLiteral") { //查找需要修改的叶子节点
                    var tempstr = path.node.value;
                    if(!config){
                        return;
                    }
                    // if(tempstr.indexOf(globleKeys[3])!=-1){//不需要提取
                    //     return;//
                    // }
                    // for(var i = 0;i<globleKeys.length;i++){
                    //     if(tempstr.indexOf(globleKeys[i])!=-1){
                    //         return;
                    //     }
                    // }
                    if(tempstr.indexOf("$")!=-1){
                        return;
                    }
                    if(globleKeys.indexOf(tempstr)!= -1){//不需要提取
                        return;
                    }
                    var extractStr = config.extractStr || false;
                    if(!extractStr){
                        return;
                    }
                    var reg = /[\u4e00-\u9fa5]+/g;
                    var isChinese = reg.test(tempstr);
                    var strLen = config.strLen || 0;
                    if(tempstr.length < strLen && !isChinese){
                        return;
                    }
                    if(tempstr.indexOf(PREFIX)!= -1 && !isChinese){ //不需要提取
                        return;
                    }
                    var count = config.count || 0;
                    if(!globleStrStat[tempstr] && !isChinese){
                        return;
                    }
                    if(globleStrStat[tempstr] < count && !isChinese) {
                        // console.log(url+"字符小于"+count+"次抛弃：",tempstr)
                        return;
                    }

                    if (tempstr.length > 0 && ((tempstr.length < 1000 && tempstr.indexOf("\n") == -1) || isChinese)) {
                        // console.info(path.node.type +"   "+ path.node.value);
                        try {
                            var index;
                            var add = false;

                            if(globleArrsObj[tempstr] != undefined &&  globleArrsObj[tempstr] >= 0 ){
                                index = globleArrsObj[tempstr];
                                add = false;
                            }else{
                                index = arrIndex;
                                add = true;
                            }
                            // 暂时不用
                            // var strLength = tempstr.length + 1; //字符的数量
                            // var arrExpression = arrayName+"["+index+"]";
                            // var arrNameLength = arrExpression.length;
                            // if(arrNameLength > strLength && !isChinese){
                            //     add = false;
                            //     console.log("长度过大，不替换:",tempstr,"strLength：",strLength,"arrExpression:",arrExpression,"arrExpression length:",arrNameLength)
                            // }

                            // console.log("输出-------------：",1);
                            var numericLiteral = babel_types.numericLiteral(index);
                            // console.log("输出-------------：",2);
                            if(numberToHex){
                                var hexValue = "0x"+index.toString(16);
                                numericLiteral.extra = {rawValue:index,raw:hexValue};
                                numericLiteral.raw = hexValue;
                            }
                            // console.log("输出-------------：",value,hexValue);
                            var memberExpression = babel_types.memberExpression(babel_types.identifier(arrayName), numericLiteral, true);
                            path.replaceWith(memberExpression);


                            if(add){
                                globleArrs.push(tempstr);
                                globleArrsObj[tempstr] = arrIndex;
                                arrIndex = globleArrs.length;
                                // console.log("成功的字符串111:",tempstr)
                            }
                        } catch (error) {
                            // console.log("失败的字符串:",tempstr,"替换失败")
                            // console.error(error);

                        }
                    }

                }
            },
            Identifier(path) {  //代表处理 Identifier 节点  全局变量名替换）
                if (path.node.type == "Identifier") { //查找需要修改的叶子节点
                    var tempstr = path.node.name;
                    if (identifiersGlobleMap.hasOwnProperty(tempstr)) {
                        var member_path = path.findParent(p => p.isMemberExpression());
                        var object = member_path && member_path.node && member_path.node.object;
                        if (object && (object.name == "wx" || object.name == "qq" || object.name == "laya" || object.name == "Laya")) {
                            // console.info("全局变量名替换："+  path.node.type +"   "+ path.node.name +" => "+ identifiersGlobleMap[tempstr]);
                        } else {
                            path.node.name = identifiersGlobleMap[tempstr];
                        }
                    } else {
                        if (!identifiersUIMap[tempstr] && tempstr.length >= 10) {
                            var str = "'" + path.node.name + "', ";
                            if (identifiersRenameStr.indexOf(str) == -1) {
                                identifiersRenameStr += str;
                                // console.info("未混淆变量名："+  path.node.type +"   "+ path.node.name);
                            }
                        }
                    }
                }
            },
            NewExpression(path) {
                var node = path.node;
                var isNewExpression = babel_types.isNewExpression(node);
                if (isNewExpression) {
                    var name = node.callee.name;
                    if (name == "Array") {
                        // var arguments = path.get("arguments");
                        var arguments = path.node.arguments;
                        if(arguments.length <= 0 || arguments.length > 1){ //只有一個參數的表达式不管，因为一个参数如果是表达式，区分不开是设置长度还是设置设置数据
                            var arrayExpression = babel_types.arrayExpression(arguments);
                            path.replaceWith(arrayExpression)
                        }else{
                            var arg0 = arguments[0];
                            //是否是成员表达式，是表达式就不管
                            // var isMemberExpression = babel_types.isMemberExpression(arg0);
                            // if(isMemberExpression){
                            //     console.log("repalce Array isMemberExpression discard")
                            //     return;
                            // }
                            //BinaryExpression //1+1,2+2 这种二进制表达式直接算出值， 先不管，工具会自动先转换
                            var isLiteral = babel_types.isLiteral(arg0)
                            if(isLiteral){ //除了直接是數字，其他都不管
                                var arrayExpression = babel_types.arrayExpression();
                                path.replaceWith(arrayExpression)
                            }else{
                                console.log("repalce Array isMemberExpression discard：",arg0.type);
                                // return;
                            }
                        }
                    }
                }
            },
            AssignmentExpression(path){
                try{
                    var left = path.node.left;
                    if(left.type == "MemberExpression" ){
                        var name = left.property.name;
                        var right = path.node.right;

                        //J包 不需要自动创建角色 修改自动创角函数 返回false;
                        if((PREFIX == "k$") && name == "isAutoCreRole" && right.type == "FunctionExpression" && right.body.body[0].argument.type != "NumericLiteral"){
                            console.log("替换isAutoCreRole name:",name);
                            var resultStatement = babel_types.returnStatement(babel_types.numericLiteral(0));
                            var block = babel_types.blockStatement([resultStatement]);
                            var func= babel_types.functionExpression(null,[],block);//;//arrowFunctionExpression([],block)
                            var assignmentExpression = babel_types.assignmentExpression("=",path.node.left,func)
                            path.replaceWith(assignmentExpression)
                        }
                    }

                }catch (e) {

                }
            },

            Program: {
                enter(path, state) {
                    // console.log('start processing this Program...');
                },
                exit(path, state) {
                    // console.log('end processing this Program!');
                    // console.info(path.node.type +"   "+ (path.node.body&&path.node.body.length));
                    // if (path.node.body) {
                    //     path.node.body.unshift(arrayDeclaration);
                    // }
                }
            }
        };

        var rst = AST[url];
        if(rst){
            rst.pluginPasses = [];
            rst.pluginVisitors = [];
            //console.log("suc 从缓存中拿到ast:" + url);
        }else{
            var pipeline = new babel_core.Pipeline();
            var pretransform = pipeline.pretransform.bind(pipeline);
            rst = pretransform(contents);
            //console.log("fail 从缓存中拿不到ast:" + url);
        }
        rst.opts = rst.initOptions({plugins : [
            {'visitor' : visitor}
        ]});
        rst.buildPluginsForOptions(rst.opts);
        contents = rst.transform().code;
        rst = AST[url] = null; //内存回收

        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        rst = null;
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

/**AST处理 混淆完成在处理一遍字符串*/
var js_babel_str = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;
        console.info("字符串标识符处理：" + file.path);
        var arrayName = globleKeys[1];
        // var arrayElements = [];
        // var arrayDeclaration = babel_types.variableDeclaration("var", [babel_types.variableDeclarator(babel_types.identifier(arrayName), babel_types.arrayExpression(arrayElements)]);
        //var  $b = wx.xxx;  variableDeclaration 声明一个变量   variableDeclarator声明变量node  identifier 声明变量的标识符（名字）    memberExpression 成员表达式 通常指屌用成员对象
        var arrayDeclaration = babel_types.variableDeclaration("var", [babel_types.variableDeclarator(babel_types.identifier(arrayName), babel_types.memberExpression(babel_types.identifier(pfFlag), babel_types.identifier(globleKeys[0])))]);
        var url = file.relative.replace(/\\/g,"/");
        var config = targetFileMap[url];
        var addGlobleKeys0 = true;
        if(!config){
            console.log("没有配置 "+file.path)
        } else{
            var extractStr = config.extractStr || false;
            if(!extractStr){
                console.log("js_babel_str  配置不需要提取字符串:", url);
            }
            addGlobleKeys0 = !(config.addGlobleKeys0 === false);
        }
        console.log(file.path + "是否添加全局变量:",addGlobleKeys0)

        //插件对象，可以对特定类型的节点进行处理
        var visitor = {
            StringLiteral(path) {  //代表处理 StringLiteral 节点 提取字符串
                // && !(path.parent && path.parent.type == "VariableDeclaration" && path.parent.parent && path.parent.parent.type == "VariableDeclarator" && path.parent.parent.id && path.parent.parent.id.name== "acfe")
                if (path.node.type == "StringLiteral") { //查找需要修改的叶子节点
                    var tempstr = path.node.value;
                    if(!config){
                       return;
                    }
                    // if(tempstr.indexOf(globleKeys[3])!=-1){//不需要提取
                    //     return;//
                    // }
                    // for(var i = 0;i<globleKeys.length;i++){
                    //     if(tempstr.indexOf(globleKeys[i])!=-1){
                    //         return;
                    //     }
                    // }
                    if(tempstr.indexOf("$")!=-1){
                        return;
                    }
                    if(globleKeys.indexOf(tempstr)!= -1){
                        return;
                    }

                    var extractStr = config.extractStr || false;
                    if(!extractStr){
                        return;
                    }
                    var reg = /[\u4e00-\u9fa5]+/g;
                    var isChinese = reg.test(tempstr);
                    var strLen = config.strLen || 0;
                    if(tempstr.length < strLen && !isChinese)
                        return;
                    if(tempstr.indexOf(PREFIX)!= -1 && !isChinese){ //不需要提取
                        return;
                    }
                    var count = config.count || 0;
                    if(!globleStrStat[tempstr] && !isChinese){
                        return;
                    }
                    if(globleStrStat[tempstr] < count && !isChinese) {
                        // console.log(url+"字符小于"+count+"次抛弃：",tempstr)
                        return;
                    }
                    if (tempstr.length > 0 && ((tempstr.length < 1000 && tempstr.indexOf("\n") == -1) || isChinese)) {
                        // console.info(path.node.type +"   "+ path.node.value);
                        try {
                            var index;
                            var add = false;
                            if(globleArrsObj[tempstr] != undefined &&  globleArrsObj[tempstr] >= 0 ){
                                index = globleArrsObj[tempstr];
                                add = false;

                            }else{
                                index = arrIndex;
                                add = true;
                            }
                            // 暂时不用
                            // var strLength = tempstr.length + 1; //字符的数量
                            // var arrExpression = arrayName+"["+index+"]";
                            // var arrNameLength = arrExpression.length;
                            // if(arrNameLength > strLength && !isChinese){
                            //     add = false;
                            //     console.log("长度过大，不替换:",tempstr,"strLength：",strLength,"arrExpression:",arrExpression,"arrExpression length:",arrNameLength)
                            // }

                            var numericLiteral = babel_types.numericLiteral(index);
                            if(numberToHex){
                                var hexValue = "0x"+index.toString(16);
                                numericLiteral.extra = {rawValue:index,raw:hexValue};
                                numericLiteral.raw = hexValue;
                            }
                            var memberExpression = babel_types.memberExpression(babel_types.identifier(arrayName), numericLiteral, true);
                            path.replaceWith(memberExpression);
                            if(add){
                                globleArrs.push(tempstr);
                                globleArrsObj[tempstr] = arrIndex;
                                arrIndex = globleArrs.length;
                                // console.log("成功的字符串:",tempstr,"index:",index)
                            }
                        } catch (error) {
                            // console.log("失败的字符串:",tempstr,"替换失败")
                            // console.error(error);
                        }
                    }

                }
            },
            Program: {
                enter(path, state) {

                },
                exit(path, state) {
                    if (path.node.body) {
                        if(addGlobleKeys0){
                            path.node.body.unshift(arrayDeclaration);
                        }
                    }
                }
            }
        };

        var rst = AST[url];
        if(rst){
            rst.pluginPasses = [];
            rst.pluginVisitors = [];
            //console.log("suc 从缓存中拿到ast:" + url);
        }else{
            var pipeline = new babel_core.Pipeline();
            var pretransform = pipeline.pretransform.bind(pipeline);
            rst = pretransform(contents);
            //console.log("fail 从缓存中拿不到ast:" + url);
        }
        rst.opts = rst.initOptions({plugins : [
            {'visitor' : visitor}
        ]});
        rst.buildPluginsForOptions(rst.opts);
        contents = rst.transform().code;
        rst = AST[url] = null; //内存回收

        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        rst = null;
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};


var end_babel = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        //生成 files.zip
        var str = JSON.stringify(globleArrs);
        console.log("globleArrs长度：",globleArrs.length)
        var zipfile = new jszip().file("files", str);
        var self = this;

        // var checkarr = globleArrs.concat();
        // for(var i =  0;i<checkarr.length;i++){
        //     var str = checkarr[i];
        //     var lastIndex = checkarr.lastIndexOf(str)
        //     if(lastIndex!=-1 && lastIndex != i){
        //         console.log("str:",str,"curindex:",i,"lastIndex:",lastIndex)
        //     }
        // }

        zipfile.generateAsync({type: "uint8array", compression: "DEFLATE", compressionOptions: {level: 9}}).then(function(content) {
            if (content) {
                var p = path.resolve(targetProject + strFilePath);
                try {
                    fs.statSync(p);
                } catch (e) {
                    fs.mkdirSync(p);
                }
                console.log("生成files.zip:",p);
                fs.writeFileSync(targetProject + strFilePath+strFileName, content, {encoding: "utf8"});
                // fs.writeFileSync(targetProject + "/res/str.txt", str, {encoding:"utf8"});
                cb();
                self.emit("data", file);
            }
        });

        // fs.writeFileSync("./qq_build/jg_gameA_identifiersMap.txt", identifiersRenameMapStr, {encoding:"utf8"});


    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task("build-js-babel", function () {
    var stream = gulp
        .src(sourceProject + '/**/*.js')
        .pipe(js_babel()) //暂时不用这个
        .pipe(gulp.dest(targetProject + "/"))
    return stream;
});
gulp.task("build-js-babel-source-string-check", function () {
    var stream = gulp
        .src(sourceProject + '/**/*.js')
        .pipe(js_checkStrCount())
        .pipe(gulp.dest(sourceProject + "/"))
    return stream;
});
gulp.task("build-js-babel-target-string-check", function () {
    var stream = gulp
        .src(targetProject + '/**/*.js')
        .pipe(js_checkStrCount())
        .pipe(gulp.dest(targetProject + "/"))
    return stream;
});
gulp.task("build-js-babel-target-string", function () {
    var stream = gulp
        .src(targetProject + '/**/*.js')
        .pipe(js_babel_str())
        .pipe(gulp.dest(targetProject + "/"))
    return stream;
});
gulp.task("build-end-babel", function () {
    var stream = gulp
        .src(BUILD + PACK +  '/game.js')
        .pipe(end_babel())
        // .pipe(gulp.dest(targetProject + "/"))
    return stream;
});
gulp.task('build-babel', function (cb) {
    sequence('build-identifier', 'build-js-babel', 'build-end-babel', cb)
});

/**混淆*/
var js_obfuscator = function (rate) {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;


        console.info("混淆提取文件：" + file.path + "  rate=" + rate);

        var excludeFiles = globleKeys[5] || [];
        var obfuscationResult = jsobfuscator.obfuscate(contents,
            {
                compact: true,  //紧凑的代码输出在一行上
                simplify: true,  //通过简化启用其他代码混淆
                controlFlowFlattening: false,  //包含混淆器选项的JS/JSON配置文件的名称。这些将被直接传递给CLI的选项覆盖，此选项对性能的影响最大为运行速度降低1.5倍
                controlFlowFlatteningThreshold: 0,  //转换将应用于任何给定节点的概率，此设置对于大代码量特别有用，因为大量的控制流转换会降低代码速度并增加代码大小
                stringArray: false,  //删除字符串文字并将其放置在特殊的数组中。例如，var m = "Hello World";将被替换为var m = _0x12c456[0x1];
                stringArrayEncoding: ['base64'],  //'none'（boolean）：不对stringArray值进行编码，'base64'（string）：stringArray使用编码值base64，'rc4'（string）：stringArray使用编码值rc4。比慢30-50％base64
                stringArrayThreshold: 0,  //您可以使用此设置来调整将字符串文字插入的可能性（从0到1）
                stringArrayIndexShift: false,  //为所有字符串数组调用启用附加索引移位
                // stringArrayWrappersCount: 2,
                // stringArrayWrappersChainedCalls: true,
                // stringArrayWrappersParametersMaxCount: 4,
                // stringArrayWrappersType: 'function',
                splitStrings: false,  //将文字字符串拆分为带有splitStringsChunkLength选项值长度的块
                splitStringsChunkLength: 1,  //设置splitStrings选项的块长度
                shuffleStringArray: false,  //随机stringArray排列数组项
                exclude: excludeFiles,  //文件名或glob，指示要从混淆中排除的文件
                reservedStrings: ['wx', 'qq', 'window', 'globle', 'document', 'GameGlobal', 'console', 'exports', 'require', 'module', '\\r', '\\w', '\\t', ']]>', '//', '<!--', '-->', '\\*', '\\?', '\\$', '\\^'],  //禁用字符串文字的转换，该文字与通过的RegExp模式匹配
                reservedNames: ['wx', 'qq', 'window', 'globle', 'document', 'GameGlobal', 'console', 'exports', 'require', 'module'],  //禁用混淆和标识符的生成，这些标识符与通过的RegExp模式匹配
                identifierNamesGenerator: "dictionary",  //mangled  dictionary  设置标识符名称生成器。dictionary：identifiersDictionary列表中的标识符名称，hexadecimal：标识符名称，例如 _0xabc123，mangled：短标识符的名称，如a，b，c，mangled-shuffled：与...相同，mangled但字母乱序
                identifiersDictionary: identifiersObfuscatorArray,  //为identifierNamesGenerator：dictionary选项设置标识符字典。字典中的每个标识符将在几种变体中使用，每个字符使用不同的大小写。因此，字典中标识符的数量应取决于原始源代码中的标识符数量。
                identifiersPrefix: globleKeys[4],  //为所有全局标识符设置前缀
                renameGlobals: true,  //4 启用全局变量和函数名与声明的混淆 此选项可能会破坏您的代码。只有当你知道它的功能时才启用它！
                renameProperties: false,  //启用属性名称的重命名  启用属性名称的重命名。所有内置的DOM属性和核心JavaScript类中的属性都将被忽略。此选项可能会破坏您的代码。只有当你知道它的功能时才启用它！
                renamePropertiesMode: "safe",//Type: string Default: safe 即使在安全模式下，renameProperties选项也可能会破坏代码 如果一个文件正在使用其他文件的属性，请使用identifierNameCache选项在这些文件之间保持相同的属性名称。
                numbersToExpressions: false,  //允许将数字转换为表达式
                disableConsoleOutput: false,  //控制台输出
                unicodeEscapeSequence: false, //允许启用/禁用字符串转换为Unicode转义序列
                deadCodeInJection: false, // 使用此选项，将随机废代码添加到混淆代码中  该选项显著的增加混淆代码的大小（200%），如果贵混淆代码大小不敏感的时候启用改选项 。开启该选项将强制启用stringArray选项
                optionsPreset: 'default',//可用参数 default,low-obfuscation,medium-obfuscation,high-obfuscation,所有副将选项将于改名称对应的预设选项合并
                //rotateStringArray:true,//将stringArray移动固定和随机（在代码混淆处生成）位置。这使得将删除的字符串的顺序与其原始位置进行匹配变得更加困难。
                //seed:0,Type: string|number Default: 0 此选项设置随机生成器的种子。这对于创建可重复结果很有用,如果种子是0-随机生成器将工作无种子。
                // sourceMap:true,
                // sourceMapMode:'inline',

            }
        );
        contents = obfuscationResult.getObfuscatedCode();
        //console.log(file.path + "已经混淆完成");

        // var startIdx = contents.indexOf("[")+1;
        // var endIdx = contents.indexOf("];");

        // var arrstr = contents.slice(startIdx, endIdx);
        // var strarr = arrstr.split(",");
        // console.info(arrstr);
        // console.info(strarr);

        // var rlsstr = "";
        // if (strarr && strarr.length) {
        //     for (var i = 0; i < strarr.length; i++) {
        //         var index = globleArrs.length;
        //         // console.info(strarr[i]);
        //         var idx1 = strarr[i].indexOf("'");
        //         var idx2 = strarr[i].lastIndexOf("'");
        //         globleArrs[index] = strarr[i].slice(idx1+1, idx2);
        //         if (globleArrs[index] == "") console.info(idx1, idx2, strarr[i], globleArrs[index]);
        //         rlsstr += `${globleKeys[1]}[${index}]` + (i<strarr.length-1 ? `,` : ``);
        //     }
        // } else {
        //     console.error("错误  "+ arrstr +"  "+ strarr);
        // }
        // contents = `var ${globleKeys[1]} = wx.${globleKeys[0]};\n` + contents.slice(0, startIdx) + rlsstr + contents.slice(endIdx, contents.length);

        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
        //console.log(file.path + "已经混淆 emit 了");
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task("build-libs-obfuscator", function () {
    var stream = gulp
        .src(targetProject + '/' + filesMap["libs"].url + '/**/*.js')
        .pipe(js_obfuscator(1))
        .pipe(gulp.dest(targetProject + '/' + filesMap["libs"].url))
    return stream;
});
gulp.task("build-protobuf-obfuscator", function () {
    var stream = gulp
        .src(targetProject + '/' + filesMap["protobuf"].url + '/**/*.js')
        .pipe(js_obfuscator(1))
        .pipe(gulp.dest(targetProject + '/' + filesMap["protobuf"].url))
    return stream;
});
gulp.task("build-subPackage-obfuscator", function () {
    var stream = gulp
        .src(targetProject + '/' + filesMap["subPackage"].url + '/**/*.js')
        .pipe(js_obfuscator(1))
        .pipe(gulp.dest(targetProject + '/' + filesMap["subPackage"].url))
    return stream;
});
gulp.task("build-workers-obfuscator", function () {
    var stream = gulp
        .src(targetProject + '/' + filesMap["workers"].url + '/**/*.js')
        .pipe(gulp.dest(targetProject + '/' + filesMap["workers"].url))
    return stream;
});
gulp.task("build-js-obfuscator", function () {
    var stream = gulp
        .src(targetProject + '/**/*.js')
        .pipe(js_obfuscator(1))
        .pipe(gulp.dest(targetProject + '/'))
    return stream;
});
gulp.task("build-end-obfuscator", function () {
    var stream = gulp
        .src(targetProject + '/game.js')
        .pipe(gulp.dest(targetProject + '/'))
    return stream;
});
//马甲包文件名重命名映射表
var filesMap = {};
//混淆后的文件配置通过  filesMap 转化 "libs": {url:"bbblibs"},  -》"bbblibs":{url:"bbblibs"}
var targetFileMap = {};
var replaceMap = {};
var mt1Replace = {}

//压缩
gulp.task('MT1_build_minify', function () {
    var sourceUrl =  sourceProject;// "wx_build/jg_gameMT1_new";
    var srcs = [sourceUrl + '/**/*.js', "!" + sourceUrl + '/**/'+mainJsName];
    if(PREFIX == "G" || PREFIX=="k$" || PREFIX == "J_"){
        //g,j包SDK都不處理
        srcs = [sourceUrl + '/**/*.js', "!" + sourceUrl + '/utils/**/*.js',"!" + sourceUrl + '/**/'+mainJsName];
    }
    var stream = gulp.src(srcs)
        // .pipe(js_minify())
        .pipe(gulp.dest(sourceUrl + '/'))
    return stream;
});

//压缩
gulp.task('MT1_build_minifyTargetProject', function () {
    var sourceUrl =  targetProject;// "wx_build/jg_gameMT1_new";
    var srcs = [sourceUrl + '/**/*.js', "!" + sourceUrl + '/**/'+mainJsName];
    if(PREFIX == "G" || PREFIX=="k$" || PREFIX == "J_" || buildPACK == "Z_21"){
        //g,j包SDK都不處理
        srcs = [sourceUrl + '/**/*.js', "!" + sourceUrl + '/utils/**/*.js',"!" + sourceUrl + '/**/'+mainJsName];
    }
    var stream = gulp.src(srcs)
        .pipe(js_minify())
        .pipe(gulp.dest(sourceUrl + '/'))
    return stream;
});

//压缩
gulp.task('MT1_build_minifyMainTargetProject', function () {
    var sourceUrl =  targetProject;// "wx_build/jg_gameMT1_new";
    var srcs = [sourceUrl + '/**/*.js', "!" + sourceUrl + '/**/'+mainJsName];
    if(PREFIX == "G" || PREFIX=="k$" || PREFIX == "J_"){
        //g,j包SDK都不處理
        srcs = [sourceUrl + '/**/*.js', "!" + sourceUrl + '/utils/**/*.js',"!" + sourceUrl + '/**/'+mainJsName];
    }
    var stream = gulp.src(srcs)
        .pipe(js_minify())
        .pipe(gulp.dest(sourceProject + '/'))
    return stream;
});

gulp.task('CleanNewFolder',function(){
    var stream = gulp.src([sourceProject + "/",targetProject + "/"])
        .pipe(clean({
            force: true
        }))
    return stream;
})

gulp.task('MT1_COPY', function () {
    var sourceUrl = "wx_build/"+ PACK;
    var targetUrl =  sourceProject;
    return gulp.src(sourceUrl + "/" + '/**/*')
        .pipe(rename(function (path) {
            console.log("path:",path);
            var fileName;
            if (path.dirname == ".") {
                fileName = path.basename + path.extname;
            } else {
                fileName = path.dirname + "/" + path.basename + path.extname;
            }
            fileName = fileName.replace(/\\/g, "/");
            var isDir = path.extname == "";
            if (isDir) {
                var defineDirname = (filesMap[fileName] || {}).url;
                if (defineDirname) {
                    var dirs = defineDirname.split("/");
                    console.log("文件夹名字:", path.basename, "修改为:", defineDirname);
                    var basename = dirs.pop();
                    path.dirname = dirs.join("/");
                    path.basename = basename;
                }
            } else {
                var defineDirname = (filesMap[fileName] || {}).url;
                if (defineDirname) {
                    var dirs = defineDirname.split("/");
                    if (dirs.length <= 1) { //直接是文件
                        console.log("文件名字:", path.basename, "修改文件名为:", dirs[0]);
                        path.basename = dirs[0];
                    } else {  //有路径
                        var curFileName = dirs.pop();
                        var dirPath = dirs.join("/");
                        if(path.basename.indexOf("sdk.min")!=-1){
                            debugger;
                        }
                        var lastIndex = curFileName.lastIndexOf(".");
                        var baseName = curFileName.slice(0,lastIndex);
                        console.log("文件路径:", path.dirname, "文件名字:", path.basename, "修改路径为:", dirPath, "修改文件名为：", baseName);
                        path.dirname = dirPath;
                        path.basename = baseName;

                    }
                }
            }
            // console.log("ppp:", path);

        }))
        //不用修改
        .pipe(replace(/(import "libs\/weapp-adapter.js";)/g, function (match, p1, offset, string) {
            var relative = this.file.relative.replace(/\\/g, "/");
            var targetFileMap = targetFileMap;
            if(relative == targetGameJs){
                // var arr = filesMap[match].url.split("/");
                return "import '" +  filesMap["libs/weapp-adapter.js"].url +"';";
            }
            return "";
        }))
        .pipe(replace(/(subPackage)|(subPackage\/game.js)|(subPackage\/main.min.js)|(libs\/md5.min.js)|(libs\/zlib.js)|(libs\/dom_parser.js)|(index.js)|(libs\/libs.min.js)|(libs\/laya.wxmini.js)|(init.min.js)|(game.js)/g, function (match, p1, offset, string) {
            var reg = filesMap[match];
            if(!reg || !reg.url){
                console.info("未匹配的  match:",match);
                return match;
            }
            var arr = reg.url.split("/");
            var relative = this.file.relative.replace(/\\/g, "/");
            if(relative == noReplaceJs){
                return match;
            }
            console.log("relative4:",relative,"match:",match,"替换为:",arr[arr.length - 1])
            return arr[arr.length - 1];
        }))
        // .pipe(replace(/(res\/atlas\/wxlogin_atlas.png)|(res\/atlas\/wxeff_btn_atlas.png)|(res\/atlas\/wxloading_atlas.png)|(res\/atlas)/g, function (match, p1, offset, string) {
        //     var relative = this.file.relative.replace(/\\/g, "/");
        //     if (relative == "bbblibs/bbbinitmin.js") { //登录界面才替换
        //         var arr = filesMap[match].url.split("/");
        //         console.log('Found ' + match + ' with param ' + p1, "替换为:", arr[arr.length - 1]);
        //         return arr[arr.length - 1];
        //     } else {
        //         return match;
        //     }
        // }))
        //不用修改
        .pipe(replace(/(.\/wxsdk\/wx_aksdk.js)|(.\/helper)|(.\/sax)|(.\/dom)|(client_pb.js)|(protobuf.js)|(main.min.js)/g, function (match, p1, offset, string) {
            // console.log('Found ' + match + ' with param ' + p1,"替换为:", mt1Replace[match]);
            return mt1Replace[match];
        }))
        .pipe(replace(/(wxlogin_atlas)|(wxeff_btn_atlas)|(wxloading_atlas)|(btn_loding_abcelq0.png)|(btn_loding_abcelq1.png)|(image_loading_bg.jpg)|(image_loading_bg_bottom.jpg)|(image_loading_bg_bottom2.jpg)|(image_loading_bg_left.jpg)|(image_loading_bg_left2.jpg)|(image_loading_bg_right.jpg)|(image_loading_bg_right2.jpg)|(image_loading_bg_top.jpg)|(image_loading_bg_top2.jpg)|(image_loading_bg2.jpg)|(image_loding_bar0.png)|(image_loding_bar1.png)|(image_loding_bar02.png)|(image_loding_bar2.png)|(image_loding_bar3.png)|(image_login_point1.png)|(image_login_point2.png)|(image_login_point3.png)|(image_loding_txtbhcc.png)|(image_xuanfu_gx0.png)|(image_xuanfu_gx1.png)/g, function (match, p1, offset, string) {
            var relative = this.file.relative.replace(/\\/g, "/");
            if (replaceMap[relative]) { //登录界面才替换
                console.log("relative1:",relative,'Found ' + match + ' with param ' + p1, "替换为:", mt1Replace[match]);
                return mt1Replace[match];
            }else{
                return match;
            }
        }))
        .pipe(replace(/(image_xuanqu_ztjb0.png)|(image_denglu_txtshenpi.png)|(image_login_loginbg.jpg)|(image_login_loginbg_bottom.jpg)|(image_login_loginbg_left.jpg)|(image_login_loginbg_right.jpg)|(image_login_loginbg_top.jpg)|(image_login_logo.png)|(image_login_notice.png)|(image_xuanfu_xfbg.png)|(btn_com_chuangback.png)|(btn_login_gonggao.png)|(btn_login_loginanniu.png)|(btn_login_yingsi.png)|(btn_xuanqu_anniuhuang.png)|(btn_xuanqu_anniulan.png)|(btn_xuanqu_quanniu.png)|(image_com_tuichu.png)|(image_login_changtong.png)|(image_login_fanmang.png)|(image_login_weihu.png)|(image_login_xuanqubg.png)|(image_login_init.png)|(btn_com_chuangback1.png)|(btn_com_long0.png)|(btn_com_long1.png)|(image_login_notice1.png)|(shenhezizi.png)/g, function (match, p1, offset, string) {
            var relative = this.file.relative.replace(/\\/g, "/");
            if (replaceMap[relative]) { //登录界面才替换
                console.log("relative2:",relative,'Found ' + match + ' with param ' + p1, "替换为:", mt1Replace[match]);
                return mt1Replace[match];
            }else{
                return match;
            }
        }))
        .pipe(replace(/(0.png)|(1.png)|(2.png)|(3.png)|(4.png)/g, function (match, p1, offset, string) {
            var relative = this.file.relative.replace(/\\/g, "/");
            if (replaceMap[relative]) { //登录界面才替换
                console.log("relative3:",relative,'Found ' + match + ' with param ' + p1, "替换为:", mt1Replace[match]);
                return mt1Replace[match];
            }else{
                return match;
            }

        }))
        .pipe(replace(/(\/zzzzipRes\/ResFile.zip)/g, strFilePath+strFileName))
        .pipe(replace(/(wx.globalStrArrs)/g, "wx."+globleKeys[0]))
        .pipe(replace(/tempPackageGame.js/g,libsMainJs))
        //报名需要修改
        .pipe(replace(/( name: 'packages')/g, "name: " + "'" + packageName1 + "'"))
        .pipe(replace(/( name: 'main')/g, "name: " + "'" + packageName3 + "'"))
        .pipe(replace(/( name: 'probuf')/g, "name: " + "'" + packageName2 + "'"))
        .pipe(through.obj(function (file, encode, cb) {
            // console.log("file:",file,"encode:",encode);
            if (file.relative == "game.json") {
                var result = file.contents.toString();
                var json = JSON.parse(result);
                console.log("修改game.json：修改分包")
                json.subpackages = [
                    {
                        "name": packageName1,
                        "root": packageName1+"/"
                    },
                    {
                        "name": packageName2,
                        "root": packageName2+"/"
                    },
                    {
                        "name": packageName3,
                        "root": packageName3+"/"
                    }
                ];
                console.log(json)
                file.contents = Buffer.from(JSON.stringify(json), "utf-8")

            }
            this.push(file);
            cb();
        }))
        .pipe(gulp.dest(targetUrl + '/'))
});

gulp.task('MT1_COPY2', function () {
    var sourceUrl =  sourceProject;// "wx_build/jg_gameMT1_new";
    var targetUrl = targetProject;// "wx_build/jg_gameMT1_obfuscator";
    var req = "sourceUrl + " / " + '/**/*";
    return gulp.src([sourceUrl + "/" + '/**/*.png', sourceUrl + "/" + '/**/*.jpg', sourceUrl + "/" + '/**/*.json'])
        .pipe(gulp.dest(targetUrl + '/'));
});

gulp.task('renameGameJs',function(){
    var stream = gulp.src(targetProject + "/game_main.js").
    pipe(rename(function (path) {
            path.basename = "game";
        })
    ).pipe(gulp.dest(targetProject + '/'))
    return stream;
})

gulp.task('cleanGameJs',function(){
    var stream = gulp.src(targetProject + "/game_main.js")
        .pipe(clean({
            force: true
        }))
    return stream;
})


//随机产生辣鸡空文件
gulp.task('CREATE_REFUSEFILE', function () {
    var targetUrl = targetProject;//"wx_build/jg_gameMT1_obfuscator";
    return gulp.src(targetUrl + "/game.js")
        .pipe(createRefuseFile())
        .pipe(gulp.dest(targetUrl + '/'));
});




//删除随机产生的辣鸡空文件
gulp.task('DEL_REFUSEFILE', function () {
    var targetUrl = targetProject;// "wx_build/jg_gameMT1_obfuscator";
    return gulp.src(targetUrl + "/game.js")
        .pipe(deleteRefuseFile())
        .pipe(gulp.dest(targetUrl + '/'));
});

gulp.task('CREATE_REFUSEFILE_B', function (cb) {
    sequence("set-param-b","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_B', function (cb) {
    sequence("set-param-b","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_C', function (cb) {
    sequence("set-param-c","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_C', function (cb) {
    sequence("set-param-c","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_D', function (cb) {
    sequence("set-param-d","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_D', function (cb) {
    sequence("set-param-d","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_E', function (cb) {
    sequence("set-param-e","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_E', function (cb) {
    sequence("set-param-e","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_F', function (cb) {
    sequence("set-param-f","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_F', function (cb) {
    sequence("set-param-f","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_G', function (cb) {
    sequence("set-param-g","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_G', function (cb) {
    sequence("set-param-g","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_H', function (cb) {
    sequence("set-param-h","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_H', function (cb) {
    sequence("set-param-h","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_I', function (cb) {
    sequence("set-param-i","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_I', function (cb) {
    sequence("set-param-i","DEL_REFUSEFILE",cb)
});


gulp.task('CREATE_REFUSEFILE_J', function (cb) {
    sequence("set-param-j","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_J', function (cb) {
    sequence("set-param-j","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_K', function (cb) {
    sequence("set-param-k","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_K', function (cb) {
    sequence("set-param-k","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_L', function (cb) {
    sequence("set-param-l","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_L', function (cb) {
    sequence("set-param-l","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_M', function (cb) {
    sequence("set-param-m","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_M', function (cb) {
    sequence("set-param-m","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_N', function (cb) {
    sequence("set-param-n","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_N', function (cb) {
    sequence("set-param-n","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_O', function (cb) {
    sequence("set-param-O","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_O', function (cb) {
    sequence("set-param-O","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_P', function (cb) {
    sequence("set-param-P","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_P', function (cb) {
    sequence("set-param-P","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Q', function (cb) {
    sequence("set-param-Q","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Q', function (cb) {
    sequence("set-param-Q","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_R', function (cb) {
    sequence("set-param-R","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_R', function (cb) {
    sequence("set-param-R","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_S', function (cb) {
    sequence("set-param-S","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_S', function (cb) {
    sequence("set-param-S","DEL_REFUSEFILE",cb)
});


gulp.task('CREATE_REFUSEFILE_T', function (cb) {
    sequence("set-param-T","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_T', function (cb) {
    sequence("set-param-T","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_U', function (cb) {
    sequence("set-param-U","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_U', function (cb) {
    sequence("set-param-U","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_V', function (cb) {
    sequence("set-param-V","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_V', function (cb) {
    sequence("set-param-V","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_W', function (cb) {
    sequence("set-param-W","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_W', function (cb) {
    sequence("set-param-W","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_X', function (cb) {
    sequence("set-param-X","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_X', function (cb) {
    sequence("set-param-X","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Y', function (cb) {
    sequence("set-param-Y","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Y', function (cb) {
    sequence("set-param-Y","DEL_REFUSEFILE",cb)
});


gulp.task('CREATE_REFUSEFILE_Z', function (cb) {
    sequence("set-param-Z","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z', function (cb) {
    sequence("set-param-Z","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_1', function (cb) {
    sequence("set-param-Z_1","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_1', function (cb) {
    sequence("set-param-Z_1","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_2', function (cb) {
    sequence("set-param-Z_2","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_2', function (cb) {
    sequence("set-param-Z_2","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_3', function (cb) {
    sequence("set-param-Z_3","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_3', function (cb) {
    sequence("set-param-Z_3","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_4', function (cb) {
    sequence("set-param-Z_4","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_4', function (cb) {
    sequence("set-param-Z_4","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_5', function (cb) {
    sequence("set-param-Z_5","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_5', function (cb) {
    sequence("set-param-Z_5","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_6', function (cb) {
    sequence("set-param-Z_6","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_6', function (cb) {
    sequence("set-param-Z_6","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_7', function (cb) {
    sequence("set-param-Z_7","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_7', function (cb) {
    sequence("set-param-Z_7","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_8', function (cb) {
    sequence("set-param-Z_8","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_8', function (cb) {
    sequence("set-param-Z_8","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_9', function (cb) {
    sequence("set-param-Z_9","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_9', function (cb) {
    sequence("set-param-Z_9","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_10', function (cb) {
    sequence("set-param-Z_10","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_10', function (cb) {
    sequence("set-param-Z_10","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_11', function (cb) {
    sequence("set-param-Z_11","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_11', function (cb) {
    sequence("set-param-Z_11","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_12', function (cb) {
    sequence("set-param-Z_12","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_12', function (cb) {
    sequence("set-param-Z_12","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_13', function (cb) {
    sequence("set-param-Z_13","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_13', function (cb) {
    sequence("set-param-Z_13","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_14', function (cb) {
    sequence("set-param-Z_14","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_14', function (cb) {
    sequence("set-param-Z_14","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_15', function (cb) {
    sequence("set-param-Z_15","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_15', function (cb) {
    sequence("set-param-Z_15","DEL_REFUSEFILE",cb)
});


gulp.task('CREATE_REFUSEFILE_Z_16', function (cb) {
    sequence("set-param-Z_16","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_16', function (cb) {
    sequence("set-param-Z_16","DEL_REFUSEFILE",cb)
});


gulp.task('CREATE_REFUSEFILE_Z_17', function (cb) {
    sequence("set-param-Z_17","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_17', function (cb) {
    sequence("set-param-Z_17","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_18', function (cb) {
    sequence("set-param-Z_18","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_18', function (cb) {
    sequence("set-param-Z_18","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_19', function (cb) {
    sequence("set-param-Z_19","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_19', function (cb) {
    sequence("set-param-Z_19","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_19', function (cb) {
    sequence("set-param-Z_19","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_19', function (cb) {
    sequence("set-param-Z_19","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_20', function (cb) {
    sequence("set-param-Z_20","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_20', function (cb) {
    sequence("set-param-Z_20","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_21', function (cb) {
    sequence("set-param-Z_21","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_21', function (cb) {
    sequence("set-param-Z_21","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_22', function (cb) {
    sequence("set-param-Z_22","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_22', function (cb) {
    sequence("set-param-Z_22","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_23', function (cb) {
    sequence("set-param-Z_23","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_23', function (cb) {
    sequence("set-param-Z_23","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_24', function (cb) {
    sequence("set-param-Z_24","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_24', function (cb) {
    sequence("set-param-Z_24","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_25', function (cb) {
    sequence("set-param-Z_25","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_25', function (cb) {
    sequence("set-param-Z_25","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_26', function (cb) {
    sequence("set-param-Z_26","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_26', function (cb) {
    sequence("set-param-Z_26","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_27', function (cb) {
    sequence("set-param-Z_27","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_27', function (cb) {
    sequence("set-param-Z_27","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_28', function (cb) {
    sequence("set-param-Z_28","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_28', function (cb) {
    sequence("set-param-Z_28","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_29', function (cb) {
    sequence("set-param-Z_29","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_29', function (cb) {
    sequence("set-param-Z_29","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_30', function (cb) {
    sequence("set-param-Z_30","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_30', function (cb) {
    sequence("set-param-Z_30","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_31', function (cb) {
    sequence("set-param-Z_31","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_31', function (cb) {
    sequence("set-param-Z_31","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_32', function (cb) {
    sequence("set-param-Z_32","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_32', function (cb) {
    sequence("set-param-Z_32","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_33', function (cb) {
    sequence("set-param-Z_33","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_33', function (cb) {
    sequence("set-param-Z_33","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_34', function (cb) {
    sequence("set-param-Z_34","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_34', function (cb) {
    sequence("set-param-Z_34","DEL_REFUSEFILE",cb)
});

gulp.task('CREATE_REFUSEFILE_Z_35', function (cb) {
    sequence("set-param-Z_35","CREATE_REFUSEFILE",cb)
});

gulp.task('DEL_REFUSEFILE_Z_35', function (cb) {
    sequence("set-param-Z_35","DEL_REFUSEFILE",cb)
});




//无网络 使用这个图片压缩
gulp.task('gulp-imagemin', function (cb) {
    sourceProject = "wx_build/jg_gameE_new";
    targetProject = "wx_build/jg_gameE_obfuscator";
    var sourceUrl =  sourceProject;// "wx_build/jg_gameMT1_new";
    var targetUrl = targetProject;// "wx_build/jg_gameMT1_obfuscator";
    return gulp.src([sourceUrl + "/" + '/**/*'])
        .pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            use:[gulpPngquant({
                quality: '65-80'
            })]
        }))
        .pipe(gulp.dest(targetUrl + '/'));
});

//有网络 使用这个 图片压缩
gulp.task('gulp-tingPNG', function (cb) {
    sourceProject = "wx_build/jg_gameE_new";
    targetProject = "wx_build/jg_gameE_obfuscator";
    var sourceUrl =  sourceProject;// "wx_build/jg_gameMT1_new";
    var targetUrl = targetProject;// "wx_build/jg_gameMT1_obfuscator";
    return gulp.src([sourceUrl + "/" + '/**/*.{png,jpg}'])
        .pipe(tiny())
        .pipe(gulp.dest(targetUrl + '/'));
});

//图片压缩 太慢了不用这个
gulp.task('gulp_smushit', function (cb) {
    sourceProject = "wx_build/jg_gameE_new";
    targetProject = "wx_build/jg_gameE_obfuscator";
    var sourceUrl =  sourceProject;// "wx_build/jg_gameMT1_new";
    var targetUrl = targetProject;// "wx_build/jg_gameMT1_obfuscator";
    return gulp.src([sourceUrl + "/" + '/**/*.{jpg,png}'])
        .pipe(smushit())
        .pipe(gulp.dest(targetUrl + '/'));
});

var deleteRefuseFile = function () {
    function onFile(file, enc, cb) {
        var targetUrl =  targetProject;////"wx_build/jg_gameMT1_obfuscator";

        function delTempFile(foldPath) {
            var files = fs.readdirSync(foldPath);
            for (var i = 0; i < files.length; i++) {
                var fileName = files[i];
                var director = path.resolve(foldPath, fileName);
                var stat = fs.statSync(director);
                if (stat.isDirectory()) {
                    delTempFile(director);
                }
                if (stat.isFile()) {
                    if (fileName.indexOf("temp") != -1) {
                        console.log("删除随机文件:", director)
                        fs.unlinkSync(director);
                    }
                }
            }
        }

        delTempFile(targetUrl)
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
}



//随机产生辣鸡空文件
var createRefuseFile = function () {
    function onFile(file, enc, cb) {
        var targetUrl =  targetProject;// "wx_build/jg_gameMT1_obfuscator";

        function delTempFile(foldPath) {
            var files = fs.readdirSync(foldPath);
            for (var i = 0; i < files.length; i++) {
                var fileName = files[i];
                var director = path.resolve(foldPath, fileName);
                var stat = fs.statSync(director);
                if (stat.isDirectory()) {
                    delTempFile(director);
                }
                if (stat.isFile()) {
                    if (fileName.indexOf("btemp") != -1) {
                        console.log("删除随机文件:", director)
                        fs.unlinkSync(director);
                    }
                }
            }
        }

        delTempFile(targetUrl)
        var codes = [];
        for (var i = 48; i <= 57; i++) {
            codes.push(i);
        }
        for (var i = 65; i <= 90; i++) {
            codes.push(i);
        }
        for (var i = 97; i <= 122; i++) {
            codes.push(i);
        }
        codes.push(95);
        var createFileNum = (Math.random() * 150 >> 0) + 100; //创建多少个文件
        // var createFolderNum = 100;//创建多少个文件夹
        // var folderNames = [];
        console.log("随机产生辣鸡文件数量：", createFileNum);

        var suffixs = [
            "png","jpg","jpeg","gif","svg","js","json","cer","obj","dae","fbx","mtl","stl","3ds","mp3","pvr",
            "wav","plist","ttf","fnt","gz","ccz","m4a","mp4","bmp","atlas","swf","ani","part","proto","bin",
            "sk","mipmaps","txt","zip","ogg","silk","dbbin","dbmv","etc","lmat","lm","ls","lh",
            "lani","lav","lsani","ltc","aac","astc","br","csv","cur","dat","dds","glb","gltf","ico","ktx",
            "lmani","lml","pkm","prefab","scene","skel","wasm","xml"
        ];
        var fielNames = [];
        var createSuffixs = [];


        for (var i = 0; i < createFileNum; i++) {
            var fileNameLength = (Math.random() * 10 >> 0) + 1; //文件名字长度
            var suffixIndex = Math.random() * suffixs.length >> 0;
            var suffix = suffixs[suffixIndex];
            if (suffix == "*") {
                var suffixLength = (Math.random() * 5 >> 0) + 1; //后缀长度
                // var str = "";
                suffix = "";
                for (var j = 0; j < suffixLength; j++) {
                    var index = (Math.random() * (codes.length - 1) >> 0) + 1;
                    var ascill = String.fromCharCode(codes[index]);
                    suffix += ascill;
                }

            }

            var filename = "";
            for (var j = 0; j < fileNameLength; j++) {
                var index = (Math.random() * (codes.length - 1) >> 0) + 1;
                var ascill = String.fromCharCode(codes[index]);
                filename += ascill;
            }
            fielNames.push(filename);
            createSuffixs.push(suffix);
        }

        var files = fs.readdirSync(targetUrl);
        for (var i = 0; i < files.length; i++) {
            var fileName = files[i];
            var director = path.resolve(targetUrl + '/', fileName);
            var stat = fs.statSync(director);
            if (stat.isDirectory()) {
                var insertNum = (Math.random() * (fielNames.length / 2 - 1)) >> 0;
                for (var m = 0; m < insertNum; m++) {
                    var f = fielNames.pop();
                    var s = createSuffixs.pop();
                    var tempName = "btemp" + f + "." + s;
                    var url = director + "/" + tempName
                    fs.writeFileSync(url, Math.random() * 999999 >> 0);
                    console.log("随机生成文件:", url);
                }
            }
        }

        for (var i = fielNames.length - 1; i >= 0; i--) {
            var f = fielNames.pop();
            var s = createSuffixs.pop();
            var tempName = "btemp" + f + "." + s;
            var url = targetUrl + "/" + tempName
            fs.writeFileSync(url, Math.random() * 999999 >> 0);
            console.log("随机生成文件:", url);
        }

        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
}


//自动命名资源 暂时没写好没用
var reNameImgs = function(){
    function onFile(file, enc, cb) {
        var targetUrl =   BUILD+ PACK;

        function delTempFile(foldPath) {
            var files = fs.readdirSync(foldPath);
            for (var i = 0; i < files.length; i++) {
                var fileName = files[i];
                var director = path.resolve(foldPath, fileName);
                var stat = fs.statSync(director);
                if (stat.isDirectory()) {
                    delTempFile(director);
                }
                if (stat.isFile()) {
                    if (fileName.indexOf("btemp") != -1) {
                        console.log("删除随机文件:", director)
                        fs.unlinkSync(director);
                    }
                }
            }
        }
        // "wxloading_atlas": {url:"bbbloding"},
        // "wxlogin_atlas": {url:"bbblogin"},
        // "wxeff_btn_atlas":{url:"bwxeff"},
        //
        // "wxloading_atlas/btn_loding_abcelq0.png": {url:"bbbloding/a1a.png"},
        // "wxloading_atlas/btn_loding_abcelq1.png": {url:"bbbloding/a2a.png"},
        // "wxloading_atlas/image_loading_bg.jpg": {url:"bbbloding/a3a.jpg"},
        var files = fs.readdirSync(targetUrl);
        for (var i = 0; i < files.length; i++) {
            var fileName = files[i];
            var director = path.resolve(targetUrl + '/', fileName);
            var stat = fs.statSync(director);
            if (stat.isDirectory()) {
                if(fileName == imgRes1 || fileName == imgRes2 || fileName == imgRes3){
                    var imgfiles = fs.readdirSync(director);
                    for(var m = 0;m<imgfiles.length;i++){
                        // mt1Replace[]
                    }

                    debugger;
                }
                // var insertNum = (Math.random() * (fielNames.length / 2 - 1)) >> 0;
                // for (var m = 0; m < insertNum; m++) {
                //     var f = fielNames.pop();
                //     var s = createSuffixs.pop();
                //     var tempName = "btemp" + f + "." + s;
                //     var url = director + "/" + tempName
                //     fs.writeFileSync(url, Math.random() * 999999 >> 0);
                //     console.log("随机生成文件:", url);
                // }

                    }
        }

        for (var i = fielNames.length - 1; i >= 0; i--) {
            var f = fielNames.pop();
            var s = createSuffixs.pop();
            var tempName = "btemp" + f + "." + s;
            var url = targetUrl + "/" + tempName
            fs.writeFileSync(url, Math.random() * 999999 >> 0);
            console.log("随机生成文件:", url);
        }

        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
}



//自动命名资源 、、暂时没写好没用
gulp.task('set_img_params', function (cb) {
    sequence("set-param-b","imgName",cb)
});


gulp.task('imgName', function () {
    var sourceUrl = BUILD+ PACK;
    return gulp.src(sourceUrl + "/game.js")
        .pipe(reNameImgs())
        .pipe(gulp.dest(sourceUrl + '/'));
});

var randomstr = function (){
    function onFile(file, enc, cb) {

        var shuffle =  function (array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        };
        var leading1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
        var leading2 =  "abcdefghijklmnopqrstuvwxyz$_0123456789";
        console.log("leading1:",shuffle(Array.from(leading1)).join(""),"leading2:",shuffle(Array.from(leading2)).join(""))
        cb();
        this.emit("data", file);

    }

    // 不处理end 使用默认的end
    return through.obj(onFile)
}

gulp.task('生成混淆字符串', function () {
    var sourceUrl = BUILD+ PACK;
    return gulp.src("")
        .pipe(randomstr())
        .pipe(gulp.dest(""));
})
