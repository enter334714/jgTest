var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var babel_core = require('babel-core');
var babel_types = require('babel-types');
var babel_template = require('babel-template');
var babel_generate = require('babel-generator');
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
// var requirejs = require('gulp-requirejs');
// var webpack = require('webpack-stream');
// var rollup = require('gulp-rollup');
// var sourcemaps = require('gulp-sourcemaps');
// var convertEncoding = require('gulp-convert-encoding');

var SRC = '../../client/src/'; //路径
var BIN = '../../client/bin/'; //路径
var DEST = '../../client/wx_dist/packageA'; //路径自行设置
var DEST_JS = '../../client/wx_dist/'; //路径
var BUILD = '../../client/wx_build/'; //路径
var PACK = 'jg_gameA'; //项目名
var INIT_PATH = ''; //init.min.js的目录
var SCOPE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_';
var PREFIX = '';
var sourceProject = "../../client/wx_build/jg_gameMT1_new";
var targetProject = "../../client/wx_build/jg_gameMT1_obfuscator";


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

/**拷贝图片*/
var copy_image = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        fs.writeFileSync(DEST + PACK + '/res/atlas/wxloading_atlas.png', fs.readFileSync(BIN + 'res/atlas/wxloading_atlas.png'));
        fs.writeFileSync(DEST + PACK + '/res/atlas/wxlogin_atlas.png', fs.readFileSync(BIN + 'res/atlas/wxlogin_atlas.png'));
        fs.writeFileSync(DEST + PACK + '/wxloading_atlas/image_loading_bg.jpg', fs.readFileSync(BIN + 'wxloading_atlas/image_loading_bg.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxloading_atlas/image_loading_bg_top.jpg', fs.readFileSync(BIN + 'wxloading_atlas/image_loading_bg_top.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxloading_atlas/image_loading_bg_bottom.jpg', fs.readFileSync(BIN + 'wxloading_atlas/image_loading_bg_bottom.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxloading_atlas/image_loading_bg_left.jpg', fs.readFileSync(BIN + 'wxloading_atlas/image_loading_bg_left.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxloading_atlas/image_loading_bg_right.jpg', fs.readFileSync(BIN + 'wxloading_atlas/image_loading_bg_right.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_login_loginbg.jpg', fs.readFileSync(BIN + 'wxlogin_atlas/image_login_loginbg.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_login_loginbg_top.jpg', fs.readFileSync(BIN + 'wxlogin_atlas/image_login_loginbg_top.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_login_loginbg_bottom.jpg', fs.readFileSync(BIN + 'wxlogin_atlas/image_login_loginbg_bottom.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_login_loginbg_left.jpg', fs.readFileSync(BIN + 'wxlogin_atlas/image_login_loginbg_left.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_login_loginbg_right.jpg', fs.readFileSync(BIN + 'wxlogin_atlas/image_login_loginbg_right.jpg'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_denglu_txtshenpi.png', fs.readFileSync(BIN + 'wxlogin_atlas/image_denglu_txtshenpi.png'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_login_notice.png', fs.readFileSync(BIN + 'wxlogin_atlas/image_login_notice.png'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_xuanfu_xfbg.png', fs.readFileSync(BIN + 'wxlogin_atlas/image_xuanfu_xfbg.png'));
        fs.writeFileSync(DEST + PACK + '/wxlogin_atlas/image_login_logo.png', fs.readFileSync(BIN + 'wxlogin_atlas/image_login_logo.png'));

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


//拷贝图片
gulp.task('copy-image', function () {
    var stream = gulp.src(DEST)
        .pipe(copy_image())
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


/**+++++++++++++++++++++++++++++++++++++++++++++++++微信小游戏--A包 start+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**A包参数*/
var set_param_a = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageA/';
        BUILD = '../../client/wx_build/';
        PACK = 'jg_gameA';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_';
        PREFIX = '';
        sourceProject = "../../client/wx_build1/jg_gameA_new";
        targetProject = "../../client/wx_build1/jg_gameA_obfuscator";

        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task('set-param-a', function () {
    var stream = gulp.src("")
        .pipe(set_param_a())
    return stream;
});
//设置混淆参数（A包）
gulp.task('scope-A', function (cb) {
    sequence('set-param-a', 'scope-modify', cb)
});
//打包所有（A包）
gulp.task('build-all-A', function (cb) {
    sequence('set-param-a', 'scope-check', 'main-modify', 'main-map', 'main-backup', 'init-modify', 'init-backup', 'libs-min', 'libs-map', 'libs-backup', 'build-protobuf', 'copy', cb)
});
/**-------------------------------------------------微信小游戏--A包 end-----------------------------------------------------------*/


/**+++++++++++++++++++++++++++++++++++++++++++++++++微信小游戏--B包 start+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**B包参数*/
var set_param_b = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageB/';
        BUILD = '../../client/wx_build/';
        PACK = 'jg_gameB';
        INIT_PATH = '/';
        SCOPE = 'cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ab';
        PREFIX = 'b$';
        sourceProject = "../../client/wx_build1/jg_gameB_new";
        targetProject = "../../client/wx_build1/jg_gameB_obfuscator";

        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

/**迈腾1包参数*/
var set_param_mt1 = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageMT1/';
        BUILD = '../../client/wx_build/';
        PACK = 'jg_gameMT1';
        INIT_PATH = '/';
        SCOPE = 'abefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_cd';
        PREFIX = 'c$';
        sourceProject = "../../client/wx_build/jg_gameMT1_new";
        targetProject = "../../client/wx_build/jg_gameMT1_obfuscator";

        for(var key in  filesMap){
            var item = filesMap[key];
            var url = item.url;
            targetFileMap[url] = item;
        }

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
/**-------------------------------------------------微信小游戏--B包  end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--迈腾1包  start-----------------------------------------------------------*/

gulp.task('set-param-mt1', function () {
    var stream = gulp.src("")
        .pipe(set_param_mt1())
    return stream;
});

//设置混淆参数（迈腾1包）
gulp.task('scope-MT1', function (cb) {
    sequence('set-param-mt1', 'scope-modify', cb)
});


//打包所有（迈腾1包）
gulp.task('build-all-MT1', function (cb) {
    sequence('set-param-mt1', 'scope-check', 'main-modify', 'main-map', 'main-backup', 'init-modify', 'init-backup', 'libs-min', 'libs-map', 'libs-backup', 'build-protobuf', 'copy', "build-babel-obfuscator-MT1", cb)
});

//混淆
gulp.task('build-babel-obfuscator-MT1', function (cb) {
    sequence("set-param-mt1","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier-MT1', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator', 'build-end-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string',  'build-end-babel', cb)
});
/**-------------------------------------------------微信小游戏--迈腾1包  end-----------------------------------------------------------*/























//QQ小游戏分包
var SPLIT = 3 / 6; //总文件数的2/6为分包1，其他的为分包2
var sortList = []; //排序的列表
var globalsJsNames = [];
var globalsImports = []; //全局import
var subList1 = []; //分包1路径
var subList2 = []; //分包2路径
/**编译TS*/
gulp.task("tsc", function () {
    var tsProject = gulpts.createProject(BUILD + 'qq_tsconfig.json');
    var stream = tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest(DEST_JS + "js/"));
    return stream;
});

/**全局import处理*/
var global_imports = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        console.info("全局定义处理：" + file.path);
        globalsJsNames.push(file.path.replace(file.base, "").replace(".ts", ".js"));
        var contents = "" + file.contents;

        // 匹配代码："import EngineCore = utils.engine.EngineCore;"，

        var reg4 = /(import).\s*[_0-9a-zA-Z]{1,50}(\s*=\s*)(base.|component.|engine.|game.|modules.|net.|utils.|Laya.|laya.)[_0-9a-zA-Z.]{1,80}(;)/g;
        var match4 = contents.match(reg4);
        // console.info((match4 ? match4.length : 0));
        if (match4 && match4.length > 0) {
            for (var i = 0; i < match4.length; i++) {
                var match41 = match4[i].match(/(import).\s*[_0-9a-zA-Z]{1,50}(\s*=\s*)/g);
                var varname = match41[0].replace("import", "").replace("=", "").replace(/\s/g, "");
                var match42 = match4[i].match(/(\s*=\s*)(base.|component.|engine.|game.|modules.|net.|utils.|Laya.|laya.)[_0-9a-zA-Z.]{1,80}(;)/g);
                var replace = match42[0].replace("=", "").replace(";", "").replace(/\s/g, "");
                globalsImports.push({varname: varname, replace: replace});
                // console.info("全局定义==========【"+ varname +"】======>【"+ replace +"】");
            }
        }

        var bf = new Buffer.from(contents);
        // var bf = new Buffer( contents );
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

/**ts文件按引用排序*/
var sort_files = function () {
    function onFile(file, enc, cb) {

        var src = "./src/";
        var extension = ".ts";
        var mainjs = "main.js";
        var result = [];
        var stat = fs.statSync;
        var nextfind = function (url) {
            var fileList = fs.readdirSync(url);
            fileList.forEach(function (filepath) {
                var filepath = path.join(url, filepath);
                if (stat(filepath).isFile()) {
                    filepath = filepath.replace(/\\/g, "/");
                    if (extension) {
                        if (path.extname(filepath) == extension)
                            result.push(filepath);
                    } else {
                        result.push(filepath);
                    }
                } else {
                    nextfind(filepath);
                }
            })
        }
        nextfind(src);


        // var classPattern = /\b(?:interface|class)\b\s+(\w+)(?:\s*(?:extends|implements)\s*((?:(?:(?:\w+\.)*(?:\w+)),?\b)+))?/;
        var classPattern = /\b(?:interface|class)\b\s+(\w+)(?:\<\w+\>)*(?:\s*(?:extends|implements)\s*((?:(?:(?:\w+\.)*(?:\w+)),?\b)+))?/;
        var modeuleHelp = /\b(?:namespace|module)\b\s+((?:\w\.?)+)/;
        // var importHelp = /\bimport\b.*?=\s*((?:\w+\.?)+)/ //.exec(str)[1]
        var importHelp = /\bimport\s*((?:\w+\.?)+)\s*=\s*((?:\w+\.?)+)/
        // var interfaceHelp = /\bimplements\b\s+((?:\w+\,?)+)/ //.exec(str)
        var interfaceHelp = /\bimplements\b\s+((?:(?:(?:\w+\.)*(?:\w+)),?\s*?\b)+)/
        var staticHelp = /\bstatic\b\s+\w+:((?:\w+\.?)+)\s*=\s*new\s+/ //.exec(str)[1]
        // var staticHelp = /static\s+\w+\s*:\s*((?:\w+\.?)+)((\<\w+\>)*)\s*=\s*new\s+/

        function FileNode() {
            this.classList = [];
            this.parentClassList = [];
            this.importClassMap = {};
            this.importClassNameMap = {};
            this.id = 0;
            this.url = "";
            this.filename = "";
            this.moduleName = "";
            this.jscontent = "";
        }

        var sriptList = [];
        var allClassArr = result;
        var allClassMap = {};
        var allImportMap = {moduleMap: {}, classMap: {}, importMap: {}};
        var workspace = "./".replace(/\\/g, "/").replace(/\/$/, "");
        var fileNodes = [];
        for (var i = 0; i < allClassArr.length; i++) {
            var fileNode = new FileNode();
            fileNode.url = allClassArr[i];
            fileNode.filename = fileNode.url.substring(fileNode.url.lastIndexOf("/") + 1, fileNode.url.length).replace(".ts", ".js");
            fileNode.jscontent = fs.readFileSync(fileNode.url.replace("src/", DEST_JS + "js/src/").replace(".ts", ".js"), "utf-8"); //读取生成的js内容
            fileNodes.push(fileNode);
            var filecont = fs.readFileSync(fileNode.url, "utf-8"); //读取内容
            var moduleName = "";
            var parentMap = allImportMap;

            filecont = filecont.split("\n"); //分隔行，形成数组；
            for (var j = 0; j < filecont.length; j++) {
                var linecont = filecont[j];
                var idx = linecont.indexOf("//");
                if (idx >= 0)
                    linecont = linecont.substr(0, idx);
                var idx1 = linecont.indexOf("/**");
                var idx2 = linecont.indexOf("*/");
                if (idx1 >= 0 && idx2 >= 0 && idx2 >= idx1 + 3)
                    linecont = linecont.replace(linecont.substr(idx1, idx2 + 2), "");

                if (linecont != "") {
                    var tempmod = modeuleHelp.exec(linecont);
                    if (tempmod) {
                        tempmod = (tempmod[1] + ".").replace(/ /g, "");
                        if (moduleName != "" && moduleName != tempmod) {
                            console.error("多处命名空间的定义：" + tempmod + "，" + fileNode.url);
                        } else {
                            moduleName = tempmod;
                            fileNode.moduleName = moduleName;
                            if (moduleName != "") {
                                var moduleNames = moduleName.split(".");
                                for (var k = 0; k < moduleNames.length; k++) {
                                    if (moduleNames[k] != "") {
                                        if (!parentMap.moduleMap[moduleNames[k]]) parentMap.moduleMap[moduleNames[k]] = {
                                            moduleMap: {},
                                            importMap: {},
                                            classMap: {}
                                        };
                                        parentMap = parentMap.moduleMap[moduleNames[k]];
                                    }
                                }
                            }
                        }
                    }

                    var fileLine = classPattern.exec(linecont);
                    var interfaceClass = interfaceHelp.exec(linecont);
                    var importClass = importHelp.exec(linecont);
                    var staticClass = staticHelp.exec(linecont);
                    // console.info(linecont);

                    if (staticClass) {
                        staticClass = staticClass[1];
                        if (staticClass) {
                            var className = staticClass;
                            if (!fileNode.importClassMap.hasOwnProperty(className)) {
                                if (className.indexOf(".") == -1 && fileNode.classList.indexOf(moduleName + className) != -1) {

                                } else {
                                    if (fileNode.parentClassList.indexOf(className) == -1)
                                        fileNode.parentClassList.push(className);
                                }
                            }
                        }
                    }
                    if (interfaceClass) {
                        interfaceClass = interfaceClass[1].split(",");
                        for (var p = 0; p < interfaceClass.length; p++) {
                            var inte = interfaceClass[p].replace(/ /g, "");
                            // if (!fileNode.importClassMap.hasOwnProperty(inte)) {
                            if (fileNode.parentClassList.indexOf(inte) == -1)
                                fileNode.parentClassList.push(inte);
                            // }
                        }
                    }
                    if (importClass) {
                        // 只有main.ts和layaUI.max.all.ts有全局Import
                        if (moduleName == "" && globalsJsNames.indexOf(fileNode.filename) == -1) {
                            console.error("全局Import需移到main.ts里：" + fileNode.url);
                        }
                        var defineClassName = importClass[1].split(",");
                        importClass = importClass[2].split(",");
                        for (var p = 0; p < importClass.length; p++) {
                            var inte = importClass[p].replace(/ /g, "");
                            var varHelp = new RegExp("var\\s*" + defineClassName[p] + "\\s*=\\s*\\w.+" + (inte.substring(inte.lastIndexOf(".") + 1, inte.length)) + ";");
                            var varClass = varHelp.exec(fileNode.jscontent)
                            if (varClass) { //编译后的js里还存在该定义表示有在使用，否则不加入
                                if (fileNode.parentClassList.indexOf(inte) == -1)
                                    fileNode.parentClassList.push(inte);
                                fileNode.importClassMap[defineClassName[p]] = inte;
                                fileNode.importClassNameMap[inte] = defineClassName[p];
                                parentMap.importMap[defineClassName[p]] = inte;
                            } else {
                                if (inte.indexOf("Configuration.") == -1 &&
                                    inte.indexOf("Protocols.") == -1 &&
                                    inte.indexOf("Laya.") == -1 &&
                                    inte.indexOf("laya.") == -1 &&
                                    inte.indexOf("utils.Unit") == -1 &&
                                    inte.indexOf("ui.PanelType") == -1 &&
                                    inte.indexOf("ui.WindowInfo") == -1 &&
                                    inte.indexOf("ui.WindowEnum") == -1 &&
                                    inte.indexOf("ui.WindowInfoFields") == -1 &&
                                    inte.indexOf("n_snowflake.SnowflakeBundleType") == -1 &&
                                    inte.indexOf("n_behavior.N_BehavStus") == -1)
                                {
                                    // console.info("未使用的定义："+inte+"，"+defineClassName[p]+"，"+fileNode.url+"，"+varHelp.input);
                                }
                            }
                        }
                    }

                    //一些特殊的一个文件对另一个文件的静态引用
                    if (linecont.indexOf("N_MaterialInitializer.declareShader") != -1) {
                        var inte = "N_MaterialInitializer";
                        if (fileNode.parentClassList.indexOf(inte) == -1)
                            fileNode.parentClassList.push(inte);
                    }

                    //console.log(fileLine);
                    if (fileLine) {
                        j++;
                        var className = fileLine[1].replace(/ /g, "");
                        var classPath = moduleName + fileLine[1].replace(/ /g, "");
                        fileNode.classList.push(classPath);
                        allClassMap[classPath] = className;
                        parentMap.classMap[className] = classPath;

                        if (fileLine[2]) {
                            var parentClassList = fileLine[2].replace(/ implements /g, ",").split(",");
                            for (var o = 0; o < parentClassList.length; o++) {
                                var parentClassPath = parentClassList[o].replace(/ /g, "");
                                // if (!fileNode.importClassMap.hasOwnProperty(parentClassPath)) {
                                if (fileNode.parentClassList.indexOf(parentClassPath) == -1)
                                    fileNode.parentClassList.push(parentClassPath);
                                // }
                            }
                        } else {
                            if (linecont.indexOf("extends") != -1 || linecont.indexOf("implements") != -1) {
                                console.info("继承匹配失败====" + linecont);
                            }
                        }
                    }
                }
            }
        }


        var mathError = function (parentClassPath, moduleName, url) {
            if (parentClassPath.indexOf("Configuration.") == -1 &&
                parentClassPath.indexOf("Protocols.") == -1 &&
                parentClassPath.indexOf("Laya.") == -1 &&
                parentClassPath.indexOf("laya.") == -1)
            {
                console.error("未匹配到定义：" + moduleName + "，" + parentClassPath + "，" + url);
            }
        }
        var pushList = function (tempClassName, tempClassPath, fileNode, parentClassList_New) {
            if (parentClassList_New.indexOf(tempClassPath) == -1)
                parentClassList_New.push(tempClassPath);
        }


        for (var i = 0; i < fileNodes.length; i++) {
            var fileNode = fileNodes[i];
            fileNode.url = fileNode.url.replace(workspace + "/src/", "js/src/").replace(".ts", ".js");

            if (fileNode.parentClassList && fileNode.parentClassList.length) {
                var parentClassList_New = [];
                var parentClassList = fileNode.parentClassList;
                for (var o = 0; o < parentClassList.length; o++) {
                    var parentClassPath = parentClassList[o];
                    if (!allClassMap.hasOwnProperty(parentClassPath)) {
                        if (fileNode.moduleName != "") {
                            if (parentClassPath.indexOf(".") == -1) {
                                var tempClassName = parentClassPath;
                                var parentMap = allImportMap;
                                if (parentMap.importMap.hasOwnProperty(tempClassName)) { //全局Import
                                    var tempClassPath = parentMap.importMap[tempClassName];
                                    pushList(tempClassName, tempClassPath, fileNode, parentClassList_New);
                                    break;
                                } else {
                                    var isMatch = false;
                                    var moduleNames = fileNode.moduleName.split(".");
                                    for (var k = 0; k < moduleNames.length; k++) {
                                        if (moduleNames[k] != "" && parentMap.moduleMap[moduleNames[k]]) {
                                            if (parentMap.moduleMap[moduleNames[k]].importMap.hasOwnProperty(tempClassName)) {
                                                var tempClassPath = parentMap.moduleMap[moduleNames[k]].importMap[tempClassName];
                                                pushList(tempClassName, tempClassPath, fileNode, parentClassList_New);
                                                isMatch = true;
                                                break;
                                            } else if (parentMap.moduleMap[moduleNames[k]].classMap.hasOwnProperty(tempClassName)) {
                                                var tempClassPath = parentMap.moduleMap[moduleNames[k]].classMap[tempClassName];
                                                pushList(tempClassName, tempClassPath, fileNode, parentClassList_New);
                                                isMatch = true;
                                                break;
                                            } else {
                                                parentMap = parentMap.moduleMap[moduleNames[k]];
                                            }
                                        } else {
                                            break;
                                        }
                                    }
                                    if (!isMatch) {
                                        mathError(parentClassPath, fileNode.moduleName, fileNode.url);
                                    }
                                }
                            } else {
                                var tempClassName = parentClassPath.substring(parentClassPath.lastIndexOf(".") + 1, parentClassPath.length);
                                var tempClassPath = fileNode.moduleName.substring(0, fileNode.moduleName.indexOf(".") + 1) + parentClassPath;
                                if (allClassMap.hasOwnProperty(tempClassPath)) {
                                    pushList(tempClassName, tempClassPath, fileNode, parentClassList_New);
                                } else {
                                    mathError(parentClassPath, fileNode.moduleName, fileNode.url);
                                }
                            }
                        } else {
                            mathError(parentClassPath, fileNode.moduleName, fileNode.url);
                        }
                    } else {
                        var tempClassName = fileNode.importClassNameMap[parentClassPath];
                        var tempClassPath = parentClassPath;
                        pushList(tempClassName, tempClassPath, fileNode, parentClassList_New);
                    }
                }
                fileNode.parentClassList = parentClassList_New;
            }
        }

        var changeParentIndex = function (parentClassList, childNodeIndex, loop, urls) {
            loop++;
            if (loop > 100) {
                console.error(urls);
                return;
            }

            for (var k = 0; k < parentClassList.length; k++) {
                for (var j = 0; j < fileNodes.length; j++) {
                    var parentNode = fileNodes[j];
                    var index = parentNode.classList.indexOf(parentClassList[k]);
                    if (index >= 0) {
                        var parentNodeIndex = sriptList.indexOf(parentNode.url);
                        if (parentNodeIndex != -1 && childNodeIndex < parentNodeIndex) {
                            sriptList.splice(parentNodeIndex, 1);
                            sriptList.splice(childNodeIndex, 0, parentNode.url);
                            if (parentNode.parentClassList.length > 0) { //父类位置改变，父类的父类也同样改变
                                changeParentIndex(parentNode.parentClassList, childNodeIndex, loop, urls + "," + parentNode.url);
                            }
                        }
                        break;
                    }
                }
            }
        }

        for (var i = 0; i < fileNodes.length; i++) {
            var childNode = fileNodes[i];
            if (childNode.parentClassList.length == 0) {  //没有父类放最前
                var tempIndex = sriptList.indexOf(childNode.url);
                if (tempIndex === -1)
                    sriptList.unshift(childNode.url);
                continue;
            }
            for (var j = 0; j < fileNodes.length; j++) {
                var parentNode = fileNodes[j];
                if (parentNode.url != childNode.url) {
                    for (var k = 0; k < childNode.parentClassList.length; k++) {
                        var index = parentNode.classList.indexOf(childNode.parentClassList[k]);
                        if (index >= 0) { //parentNode文件定义了childNode的引用类
                            var childNodeIndex = sriptList.indexOf(childNode.url);
                            var parentNodeIndex = sriptList.indexOf(parentNode.url);
                            if (childNodeIndex != -1 && parentNodeIndex == -1) {
                                sriptList.splice(childNodeIndex, 0, parentNode.url);
                                if (parentNode.parentClassList.length > 0) { //父类位置改变，父类的父类也同样改变
                                    changeParentIndex(parentNode.parentClassList, childNodeIndex, 1, childNode.url + "," + parentNode.url);
                                }
                            } else if (childNodeIndex == -1 && parentNodeIndex != -1) {
                                // sriptList.push(childNode.url);
                            } else if (childNodeIndex == -1 && parentNodeIndex == -1) {
                                sriptList.push(parentNode.url);
                                // sriptList.push(childNode.url);
                            } else if (childNodeIndex != -1 && parentNodeIndex != -1) {
                                if (childNodeIndex < parentNodeIndex) {
                                    sriptList.splice(parentNodeIndex, 1);
                                    sriptList.splice(childNodeIndex, 0, parentNode.url);
                                    if (parentNode.parentClassList.length > 0) { //父类位置改变，父类的父类也同样改变
                                        changeParentIndex(parentNode.parentClassList, childNodeIndex, 1, childNode.url + "," + parentNode.url);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (sriptList.indexOf(childNode.url) == -1)
                sriptList.push(childNode.url);
        }

        var mainItem;
        for (var j = 0; j < sriptList.length; j++) {
            var fileItem = sriptList[j];
            if (fileItem) {
                if (fileItem.indexOf(mainjs) != -1) {
                    mainItem = fileItem;
                } else {
                    sortList.push(fileItem);
                }
            }
        }
        if (mainItem) sortList.push(mainItem);

        var split = sortList.length * SPLIT;
        for (var i = 0; i < sortList.length; i++) {
            var jspath = DEST_JS + "js/" + sortList[i];
            if (i < split) {
                subList1.push(jspath);
                // console.info("分包【1】======="+i+"==="+jspath);
            } else {
                subList2.push(jspath);
                // console.info("分包【2】======="+i+"==="+jspath);
            }
        }


        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

/**js代码分包兼容处理，替换成window.XXX*/
var modify_replace = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;
        var filename = file.path.replace(file.base, "").replace(".ts", ".js");
        /**
         * 匹配定义引用
         */
        // "var EngineCore = utils.engine.EngineCore;"，删除该匹配代码，代码里的EngineCore替换为utils.engine.EngineCore
        // var reg4 = /(var ).[_0-9a-zA-Z]{1,50}( = )(utils.|base.|game.|net.|modules.)[_0-9a-zA-Z.]{1,80}(;)/g;
        // var match4 = contents.match(reg4);
        // if (match4 && match4.length > 0) {
        //     for (var i = 0; i < match4.length; i++) {
        //         var match41 = match4[i].match(/(var ).[_0-9a-zA-Z]{1,50}( = )/g);
        //         var varname = match41[0].replace("var ", "").replace(" = ", "");
        //         var match42 = match4[i].match(/( = )(utils.|base.|game.|net.|modules.)[_0-9a-zA-Z.]{1,80}(;)/g);
        //         var replace = match42[0].replace(" = ", "").replace(";", "");
        //         // console.info("1###############\n"+match4[i]);
        //         // console.info("2###############\n"+match41[0]);
        //         // console.info("3###############\n"+match42[0]);
        //         // console.info("###############"+varname+"  "+replace);
        //         // contents = contents.replace(new RegExp("(?!(['\"._0-9a-zA-Z]))."+varname, "g"), " "+replace);
        //         // var reg43 = new RegExp("(?!((')|(\")|(\/)[._0-9a-zA-Z]))."+varname, "g");
        //         var reg44 = new RegExp("^(?!([A-Z])).", "g");
        //         var array = replace.split(".");
        //         var match44 = array[array.length-1].match(reg44);
        //         if(!match44 || match44.length==0){ //首字符不是大写，不是Class
        //             contents = contents.replace(match4[i], "");  //删除匹配的代码
        //             var reg46 = new RegExp("(?<!((['\".\/_0-9a-zA-Z])|(var )|(function )))("+varname+")((?!(['\"\/_0-9a-zA-Z])))", "g");
        //             var match46 = contents.match(reg46);
        //             if (match46 && match46.length > 0) {
        //                 contents = contents.replace(reg46, replace);
        //                 // console.info("1==========【"+ varname +"】======【"+ match46 +"】======>【"+ replace +"】");
        //             }
        //         }
        //         else {
        //             // console.info("###############不符合"+varname+"  "+replace+"  "+(match44?match44.length:null));
        //         }
        //     }
        // }

        //替换全局的import
        if (globalsImports && globalsImports.length > 0) {
            for (var i = 0; i < globalsImports.length; i++) {
                var varname = globalsImports[i].varname;
                var replace = globalsImports[i].replace;

                if (contents.indexOf("var " + varname + " = /** @class */function (") == -1 &&
                    contents.indexOf("var " + varname + " = /** @class */ (function (") == -1 &&
                    contents.indexOf("var " + varname + " = (function (") == -1) {
                    var reg46 = new RegExp("(?<!((['\".\/_0-9a-zA-Z])|(var )|(function )))(" + varname + ")((?!(['\"\/_0-9a-zA-Z])))", "g");
                    var match46 = contents.match(reg46);
                    if (match46 && match46.length > 0) {
                        contents = contents.replace(reg46, replace);
                        // console.info("2==========【"+ varname +"】======【"+ match46 +"】======>【"+ replace +"】");
                    }
                }
            }
        }


        /**
         * 全局定义替换，（由于Main在最后，定义的全局在最后，所以前面的继承会报错，除非把全局定义放在类声明之后，就不用全部替换）
         */
        if (globalsJsNames.indexOf(filename) != -1) {
            // 匹配代码："var EngineCore = utils.engine.EngineCore;"  替换为  var EngineCore = window.EngineCore = utils.engine.EngineCore;
            var reg4 = /(var ).[_0-9a-zA-Z]{1,50}( = )(base.|component.|engine.|game.|modules.|net.|utils.|Laya.|laya.)[_0-9a-zA-Z.]{1,80}(;)/g;
            var match4 = contents.match(reg4);
            // console.info((match4 ? match4.length : 0));
            if (match4 && match4.length > 0) {
                for (var i = 0; i < match4.length; i++) {
                    var match41 = match4[i].match(/(var ).[_0-9a-zA-Z]{1,50}( = )/g);
                    var varname = match41[0].replace("var ", "").replace(" = ", "");
                    var match42 = match4[i].match(/( = )(base.|component.|engine.|game.|modules.|net.|utils.|Laya.|laya.)[_0-9a-zA-Z.]{1,80}(;)/g);
                    var replace = match42[0].replace(" = ", "").replace(";", "");

                    var reg44 = new RegExp("^(?!([A-Z])).", "g");
                    var array = replace.split(".");
                    var match44 = array[array.length - 1].match(reg44);
                    if (!match44 || match44.length == 0) { //首字符不是大写，不是Class
                        // "var XXX = ******;"   修加为： "var XXX = window.XXX = ******;";
                        var classname = varname;
                        var classreplace = match4[i].replace("var " + classname + " = ", "var " + classname + " = window." + classname + " = ");
                        contents = contents.replace(match4[i], classreplace);
                        // console.info("全局定义替换==========【"+ classname +"】======【"+ match4[i] +"】======>【"+ classreplace +"】");
                    }
                    else {
                        // console.info("###############不符合"+varname+"  "+replace+"  "+(match44?match44.length:null));
                    }
                }
            }
        }


        /**
         * 匹配模块定义
         */
        var reg5 = /(var).(base|component|engine|game|modules|net|utils)(;)/g;
        var match5 = contents.match(reg5);
        if (match5 && match5.length > 0) {
            for (var i = 0; i < match5.length; i++) {
                var varname = match5[i].replace("var", "").replace(";", "").replace(/\s*/g, "");
                var replace = "var " + varname + " = window." + varname + ";";
                contents = contents.replace(match5[i], replace);
                // console.info("5==========【"+ varname +"】======【"+ match5[i] +"】======>【"+ replace +"】");
            }
        }


        /**
         * 匹配模块、命名空间代码
         */
            // "})(ui || (ui = {}));"   修加为： "})(ui || window.ui || (ui = window.ui = {}));";
            // var reg1 = /(}\)\()[_0-9a-zA-Z=. ]{1,50}( \|\| \()[_0-9a-zA-Z.]{1,50}( = \{}\)\);)/g;
        var reg1 = /(}\)\()[_0-9a-zA-Z= ]{1,50}( \|\| \()[_0-9a-zA-Z]{1,50}( = \{}\)\);)/g;
        var match1 = contents.match(reg1);
        if (match1 && match1.length > 0) {
            for (var i = 0; i < match1.length; i++) {
                var match11 = match1[i].match(/( \|\| \()[_0-9a-zA-Z]{1,50}( = \{}\)\);)/g);
                var varname = match11[0].replace(" || (", "").replace(" = {}));", "");
                var replace = match1[i].replace(" = {}));", " = window." + varname + " = {}));").replace("||", "|| window." + varname + " ||");
                contents = contents.replace(match1[i], replace);
                // console.info("3==========【"+ varname +"】======【"+ match11 +"】======>【"+ replace +"】");
            }
        }
        // "})(ui||(ui={}));"   修加为： "})(ui||(ui=window.ui={}));";
        var reg11 = /(}\)\()[_0-9a-zA-Z=]{1,50}(\|\|\()[_0-9a-zA-Z]{1,50}(=\{}\)\);)/g;
        var match11 = contents.match(reg11);
        if (match11 && match11.length > 0) {
            for (var i = 0; i < match11.length; i++) {
                var match12 = match11[i].match(/(\|\|\()[_0-9a-zA-Z]{1,50}(=\{}\)\);)/g);
                var varname = match12[0].replace("||(", "").replace("={}));", "");
                var replace = match11[i].replace("={}));", "=window." + varname + "={}));").replace("||", "||window." + varname + "||");
                contents = contents.replace(match11[i], replace);
                // console.info("4==========【"+ varname +"】======【"+ match12 +"】======>【"+ replace +"】");
            }
        }


        /**
         * 匹配类名
         */
            // "var XXX = /** @class */function ("   修加为： "var XXX = window.XXX = ******";
        var reg2 = /(var ).[_0-9a-zA-Z]+( = \/\*\* @class \*\/function \()/ig;
        var match2 = contents.match(reg2);
        if (match2 && match2.length > 0) {
            for (var i = 0; i < match2.length; i++) {
                var classname = match2[i].replace("var ", "").replace(" = /** @class */function (", "");
                var replace = match2[i].replace(" = /** @class */function (", " = window." + classname + " = /** @class */function (");
                contents = contents.replace(match2[i], replace);
                // console.info("5==========【"+ classname +"】======【"+ match2[i] +"】======>【"+ replace +"】");
            }
        }
        // "var XXX = /** @class */ (function ("   修加为： "var XXX = window.XXX = ******";
        var reg21 = /(var ).[_0-9a-zA-Z]+( = \/\*\* @class \*\/ \(function \()/ig;
        var match21 = contents.match(reg21);
        if (match21 && match21.length > 0) {
            for (var i = 0; i < match21.length; i++) {
                var classname = match21[i].replace("var ", "").replace(" = /** @class */ (function (", "");
                var replace = match21[i].replace(" = /** @class */ (function (", " = window." + classname + " = /** @class */ (function (");
                contents = contents.replace(match21[i], replace);
                // console.info("6==========【"+ classname +"】======【"+ match21[i] +"】======>【"+ replace +"】");
            }
        }
        // "var XXX = (function ("   修加为： "var XXX = window.XXX = ******";
        var reg22 = /(var ).[_0-9a-zA-Z]+( = \(function \()/ig;
        var match22 = contents.match(reg22);
        if (match22 && match22.length > 0) {
            for (var i = 0; i < match22.length; i++) {
                var classname = match22[i].replace("var ", "").replace(" = (function (", "");
                var replace = match22[i].replace(" = (function (", " = window." + classname + " = (function (");
                contents = contents.replace(match22[i], replace);
                // console.info("7==========【"+ classname +"】======【"+ match22[i] +"】======>【"+ replace +"】");
            }
        }


        /**
         * 匹配继承代码块，删除重复
         */
            //"var __extends = this && this.__extends || function () { ****** }();"
        var reg3 = /(var __extends = this && this.__extends \|\| function \(\) \{)[\s\S]{10,750}(\}\(\);)/g;
        var match3 = contents.match(reg3);
        if (match3 && match3.length > 0) {
            for (var i = 0; i < match3.length; i++) {
                contents = contents.replace(match3[i], "");  //去掉重复__extends
            }
        }


        var bf = new Buffer.from(contents);
        // var bf = new Buffer( contents );
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};


gulp.task('sort-files', function () {
    var stream = gulp.src([
        DEST + 'extends.js'
    ])
        .pipe(sort_files())
        .pipe(gulp.dest(DEST))
    return stream;
});
gulp.task('global-imports', function () {
    var stream = gulp.src([
        SRC + 'main.ts',
        SRC + 'ui/layaUI.max.all.ts'
    ])
        .pipe(global_imports())
    return stream;
});
//分包1
gulp.task('sub1-modify', function () {
    var stream = gulp.src(
        subList1
    )
        .pipe(modify_replace())
        .pipe(concat('sub1.js'))
        .pipe(gulp.dest(DEST))
    return stream;
});
gulp.task('sub1-extends', function () {
    var stream = gulp.src([
        DEST + 'extends.js',  //添加继承代码
        DEST + 'sub1.js'
    ])
        .pipe(concat('sub1.extends.js'))
        .pipe(gulp.dest(DEST))
    return stream;
});
gulp.task('sub1-mini', function () {
    var stream = gulp.src([
        DEST + 'sub1.extends.js'
    ])
    // .pipe(minifyes())
        .pipe(js_minify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(DEST + PACK + "/subPackage1/"))
    return stream;
});
//分包2
gulp.task('sub2-modify', function () {
    var stream = gulp.src(
        subList2
    )
        .pipe(modify_replace())
        .pipe(concat('sub2.js'))
        .pipe(gulp.dest(DEST))
    return stream;
});
gulp.task('sub2-extends', function () {
    var stream = gulp.src([
        DEST + 'extends.js',  //添加继承代码
        DEST + 'sub2.js',
        DEST + 'window.js'
    ])
        .pipe(concat('sub2.extends.js'))
        .pipe(gulp.dest(DEST))
    return stream;
});
gulp.task('sub2-mini', function () {
    var stream = gulp.src([
        DEST + 'sub2.extends.js'
    ])
    // .pipe(minifyes())
        .pipe(js_minify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(DEST + PACK + "/subPackage2/"))
    return stream;
});
//分包处理
gulp.task('build-qq-package', function (cb) {
    sequence('set-qq-param-a', 'tsc', 'global-imports', 'sort-files', 'sub1-modify', 'sub1-extends', 'sub1-mini', 'sub2-modify', 'sub2-extends', 'sub2-mini', 'copy', cb)
});


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

/**+++++++++++++++++++++++++++++++++++++++++++++++++QQ小游戏--A包+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**不同A包体参数*/
var set_qq_param_a = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST_JS = '../../client/qq_dist/';
        DEST = '../../client/qq_dist/packageA/';
        BUILD = '../../client/qq_build/';
        PACK = 'jg_gameA';
        INIT_PATH = 'libs/';
        SCOPE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_';
        sourceProject = "../../client/qq_build/jg_gameA";
        targetProject = "../../client/qq_build/jg_gameA_new";

        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task('set-qq-param-a', function () {
    var stream = gulp.src("")
        .pipe(set_qq_param_a())
    return stream;
});
//设置混淆参数（A包）
gulp.task('qq-scope-A', function (cb) {
    sequence('set-qq-param-a', 'scope-modify', cb)
});
//打包所有（A包）
gulp.task('build-all-qq-A', function (cb) {
    sequence('set-qq-param-a', 'tsc', 'global-imports', 'sort-files', 'sub1-modify', 'sub1-extends', 'sub1-mini', 'sub2-modify', 'sub2-extends', 'sub2-mini', 'init-modify', 'init-backup', 'libs-min', 'libs-map', 'libs-backup', 'build-protobuf', 'copy', cb)
});
/**-------------------------------------------------QQ小游戏--A包-----------------------------------------------------------*/






























//马甲包文件名重命名映射表
// var filesMap = {
//     "libs": "lxxibbs",
//     "game.js": "lxxibbs/mttttn.js",
//     "index.js": "lxxibbs/iddddx.js",
//     "init.min.js": "lxxibbs/inbbbbl.js",
//     "libs/dom.js": "lxxibbs/dddom.js",
//     "libs/dom_parser.js": "lxxibbs/daetsfsdf.js",
//     "libs/laya.wxmini.js": "lxxibbs/asts.js",
//     "libs/libs.min.js": "lxxibbs/sdt234.js",
//     "libs/md5.min.js": "lxxibbs/asdf2.js",
//     "libs/sax.js": "lxxibbs/ahg324.js",
//     "libs/weapp-adapter.js": "lxxibbs/adg431.js",
//     "libs/zlib.js": "lxxibbs/ah5.js",
//     "libs/game.js": "lxxibbs/game.js",
//     "wxsdk": "ddk",
//     "wxsdk/wx_aksdk.js": "ddk/ddsdk.js",
//     "wxsdk/helper.js": "ddk/ddhelp.js",
//
//     "protobuf": "pppf",
//     "protobuf/client_pb.js": "pppf/pppfb.js",
//     "protobuf/protobuf.js": "pppf/buff.js",
//     "protobuf/game.js": "pppf/game.js",
//
//     "subPackage": "mmmmm",
//     "subPackage/main.min.js": "mmmmm/mmmmmn.js",
//     "subPackage/game.js": "mmmmm/game.js",
//
//     //随机创建名字和文件夹
//     "res/atlas/wxlogin_atlas.atlas": "ttt/wxlogin_atlas123.atlas",
//     "wxlogin_atlas": "wxlogin_atlas123",
//
// };

var pfFlag = "wx";
var globleKeys = ["x$", "_$", "_", "Z", "__"];//["$b", "$c", "b", "B_","$"];  //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀
var identifiersObfuscatorArray = [];  //混淆用到的标识符
var arrIndex = 0;  //数组索引
var globleArrs = [];  //抽取的字符串数组，生成压缩文件
var globleArrsObj = {}; //抽取的字符串数组用于比较重复，不重复添加到globleArrs
var globleStrStat = {}; //字符出现统计
var identifiersGlobleMap = {};
var identifiersRenameStr = '';
var identifiersRenameMapStr = '';
var identifiersUIMap = {};

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
            'toCreate', 'toLogin', 'toLevelUp', 'toRealName', 'openShare', 'openService', 'onShow', 'onShowData', 'onShowCallback', 'reqPlayerAskInfo',
            'openSubscribeMsg', 'batteryInfo', 'getBatteryInfo', 'onRoleRecordStep', 'req_server_group', 'reqServerGroupCallBack', 'req_server_owner', 'reqServerOwnerCallBack',
            'req_server_list', 'reqServerListCallBack', 'req_server_notice', 'get_status', 'req_server_check_ban', 'reqServerCheckBanCallBack', 'checkBanSuccess',
            'initMain', 'enterToGame', 'systemInfo', 'initComplete', 'workerJsURL', 'wxLimitLoad', 'wxBenchmarkLevel',

            // libs/main.js
            'loadingInterval', 'wxData', 'showLoadingBtn', 'wxlogin_atlas', 'wxloading_atlas', 'wxeff_btn_atlas', 'openAuthor', 'compareVersion', 'loadProbuf', 'loadProbufTask',
            'loadMain', 'loadMainTask', 'memoryWarningNum',

            // wxsdk
            'PARTNER_SDK', 'user_game_info', 'user_invite_info', 'this_order_id', 'mainSDK',

            // init.js
            'preloadServer', 'preloadServer1', 'preloadLoading1', 'preloadLoading2', 'req_recommend_server_list', 'm_loadingRes1', 'm_loadingRes2', 'm_serverRes',
            'm_serverRes1', 'requestWeb', 'setShowBtn',

            // subPackage/main.min.js
            'onMessageOpcodes', 'publishOpcodes', 'sendPb', 'showMainTxt', 'gameAlert', 'exitAlert', 'loginUrlMap', 'startLogin', 'initPlatdata', 'reloginHandler',
            'showMessage', '_onRefresh', 'get_pbtype', 'enableCache', 'enableCheck', 'texSupportIndex', 'unsafeRemoveAt', 'unsafeRemove', 'randomIndex', 'removeRepetition', 'randomExclude',
            'registerOpcode', 'addCommandHandler', 'removeCommandHandler', 'sendCommand', 'updateElement', 'allocEntry', 'removeQueue', 'updateQueue',
            'removeback', 'ResPickUtils', 'recLoadRes', 'getProCount', 'onUpdateQueue', 'closePower', 'getCfgById',
            '_easingFunction', '_interpolationFunction', 'stopChainedTweens', 'getLeftTime', 'repeatDelay', 'setInterrupt',
            'completeGuids', 'registeGuid', 'removeGuid', 'getSprById', 'isInMission', 'hasMonster', 'getMonsterIDBySpwan', 'setSpwanMonsterMap', 'clearSpwanMonserMap',
            'enterSceFunc', 'leaveSceFunc', 'getIsLivePlayer', 'getRoleByObjId', 'exceptScene', 'getEnablePlatformsByPanelId', 'getEnableWxByPanelId', 'getEnableBgFieldsByPanelId',
            'getEnablePlatformsByActionId', 'getEnableWxByActionId', 'getEnableBgFieldsByActionId', 'getEnablePlatformsByUipartId', 'getEnableWxByUipartId', 'getEnableBgFieldsByUipartId', 'getEnablePlatformsByRpKey', 'getEnableWxByRpKey', 'getEnableBgFieldsByRpKey',
            'getEnableWxActionIds', 'isForbidenByPanelId', 'isWxLackMissionLv', 'isContainOpenBgField', 'isForbidenByActionId', 'isForbidenByUipartId', 'isForbidenByRpKey', 'getDataByField',
            'getActOpenRep', 'setRingActionState', 'updActOpen', 'setActOpen', 'getFcStateById', 'isIosVerify', 'getActFcState',
            'curFuncIdHQ', 'actStateOfOperate', 'actStateOfOperateShare', 'actStateOfOperateService', 'actStateOfOperateCollect', 'actStateOfOperateHelper', 'getFcNdShow', 'getFcIsOpen', 'getWindowFcIsOpen', 'getWindowConfigById', 'getFcOpenTipById',
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

        var perm = function (s, arr, pre) {
            var result = [];
            if (s.length <= 1) {
                return [s];
            } else {
                for (var i = 0; i < s.length; i++) {
                    var c = s[i];
                    var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
                    var l = perm(newStr, arr, pre);

                    for (var j = 0; j < l.length; j++) {
                        var tmp = c + l[j];
                        result.push(tmp);
                        tmp = pre + tmp;
                        if (keys.indexOf(tmp) == -1 && globleKeys.indexOf(tmp) == -1 && arr.indexOf(tmp) == -1 && identifiersObfuscatorArray.indexOf(tmp) == -1 && identifiersGlobleArray.indexOf(tmp) == -1 && digits.indexOf(tmp.slice(0, 1)) == -1) {
                            arr.push(tmp);
                        }
                    }
                }
            }
            return result;
        };

        var leading = "ABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
        for (var n = 3; n < 4; n++) {
            for (var m = 0; m < leading.length; m++) {
                perm(leading.slice(m, m + n), identifiersRenameArray, globleKeys[3]);
            }
        }

        if (identifiersRename.length > identifiersRenameArray.length) {
            throw new Error('全局变量映射随机字符过少  ' + identifiersRename.length + '  ' + identifiersRenameArray.length);
        }
        identifiersRenameMapStr = "";
        for (var i = 0; i < identifiersRename.length; i++) {
            identifiersGlobleMap[identifiersRename[i]] = identifiersRenameArray[i];
            identifiersGlobleArray.push(identifiersRename[i]);
            identifiersGlobleArray.push(identifiersRenameArray[i]);
            identifiersRenameMapStr += identifiersRename[i] + ":" + identifiersRenameArray[i] + ", ";
        }
        // console.info("全局变量映射关系："+ identifiersRenameMapStr);


        leading = "abcdefghijklmnopqrstuvwxyz$_0123456789";
        leading = leading.replace(globleKeys[2], '');
        //生成混淆用的标识符
        for (var n = 1; n < 7; n++) { //字符数量
            for (var m = 0; m < leading.length; m++) {
                perm(leading.slice(m, m + n), identifiersObfuscatorArray, '');
            }
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
        .src('./qq_build/jg_gameA/game.js')
        .pipe(identifier_create())
        .pipe(gulp.dest("./qq_build/jg_gameA_new/"))
    return stream;
});

gulp.task("build-identifier-MT1", function () {
    var stream = gulp
        .src('../../client/wx_build/jg_gameMT1/game.js')
        .pipe(identifier_create())
        .pipe(gulp.dest("../../client/wx_build/jg_gameMT1_new/"))
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
                    if(globleKeys.indexOf(tempstr)!= -1){//不需要提取
                        return;
                    }
                    if(tempstr.indexOf(PREFIX)!= -1){ //不需要提取
                        return;
                    }
                    var extractStr = config.extractStr || false;
                    var strLen = config.strLen;

                    if(!extractStr || tempstr.length < strLen){
                        return;
                    }
                    if (tempstr.length > 0 && tempstr.length < 100 && tempstr.indexOf("\n") == -1) {
                        // console.info(path.node.type +"   "+ path.node.value);
                        try {
                            if(globleStrStat[tempstr] == undefined){
                                globleStrStat[tempstr] = 1;
                            }else{
                                globleStrStat[tempstr] += 1;
                            }
                            var count = config.count;
                            if(globleStrStat[tempstr] == count){
                                console.log(url+"出现"+count+"次:",tempstr)
                            }
                        } catch (error) {
                            console
                            // console.error(error);
                        }
                    }

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


        //transform方法转换code，babel先将代码转换成ast，然后进行遍历，最后输出code
        var result = babel_core.transform(contents, {
            plugins: [
                {
                    visitor
                }
            ]
        });
        contents = result.code; //从AST还原成字符串


        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
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

        var arrayName = globleKeys[1];
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
                    if(globleKeys.indexOf(tempstr)!= -1){//不需要提取
                        return;
                    }
                    if(tempstr.indexOf(PREFIX)!= -1){ //不需要提取
                        return;
                    }
                    var extractStr = config.extractStr || false;
                    if(!extractStr){
                        return;
                    }
                    var strLen = config.strLen;
                    if(tempstr.length < strLen)
                        return;
                    var count = config.count || 0;
                    if(!globleStrStat[tempstr]){
                        return;
                    }
                    if(globleStrStat[tempstr] < count) {
                        console.log(url+"字符小于"+count+"次抛弃：",tempstr)
                        return;
                    }
                    if (tempstr.length > 0 && tempstr.length < 100 && tempstr.indexOf("\n") == -1) {
                        // console.info(path.node.type +"   "+ path.node.value);
                        try {
                            var index;
                            var add = false;

                            if(globleArrsObj[tempstr] != undefined &&  globleArrsObj[tempstr] >= 0 ){
                                index = globleArrsObj[tempstr];
                                add = false;
                                // if(globleStrStat[tempstr] == undefined){
                                //     globleStrStat[tempstr] = 2;
                                // }else{
                                //     globleStrStat[tempstr] += 1;
                                // }
                                //
                                // if( globleStrStat[tempstr] >= 5){
                                //     // console.log("出现五次以上的字符：",tempstr,"次数：",globleStrStat[tempstr]);
                                // }
                                // console.log("重复的字符串：",tempstr,"使用下标:",index,"globleArrs[index]:",globleArrs[index])
                            }else{
                                index = arrIndex;
                                add = true;
                                // console.log("字符下标:",arrIndex)
                            }

                            var memberExpression = babel_types.memberExpression(babel_types.identifier(arrayName), babel_types.numericLiteral(index), true);
                            path.replaceWith(memberExpression);

                            if(add){
                                globleArrs.push(tempstr);
                                globleArrsObj[tempstr] = arrIndex;
                                arrIndex = globleArrs.length;
                            }
                        } catch (error) {
                            console
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
                                return;
                            }
                        }
                    }
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


        //transform方法转换code，babel先将代码转换成ast，然后进行遍历，最后输出code
        var result = babel_core.transform(contents, {
            plugins: [
                {
                    visitor
                }
            ]
        });
        contents = result.code; //从AST还原成字符串


        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
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
        if(!config){
            console.log("没有配置 "+file.path)
        } else{
            var extractStr = config.extractStr || false;
            if(!extractStr){
                console.log("js_babel_str  配置不需要提取字符串:", url);
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
                    if(globleKeys.indexOf(tempstr)!= -1){
                        return;
                    }
                    if(tempstr.indexOf(PREFIX)!= -1){ //不需要提取
                        return;
                    }
                    var extractStr = config.extractStr || false;
                    if(!extractStr){
                        return;
                    }
                    var strLen = config.strLen;
                    if(tempstr.length < strLen)
                        return;
                    var count = config.count || 0;
                    if(!globleStrStat[tempstr]){
                        return;
                    }
                    if(globleStrStat[tempstr] < count) {
                        console.log(url+"字符小于"+count+"次抛弃：",tempstr)
                        return;
                    }
                    if (tempstr.length > 0 && tempstr.length < 100 && tempstr.indexOf("\n") == -1) {
                        // console.info(path.node.type +"   "+ path.node.value);
                        try {
                            var index;
                            var add = false;
                            if(globleArrsObj[tempstr] != undefined &&  globleArrsObj[tempstr] >= 0 ){
                                index = globleArrsObj[tempstr];
                                add = false;
                                // if(globleStrStat[tempstr] == undefined){
                                //     globleStrStat[tempstr] = 2;
                                // }else{
                                //     globleStrStat[tempstr] += 1;
                                // }
                                //
                                // if( globleStrStat[tempstr] >= 5){
                                //     console.log("出现五次以上的字符：",tempstr,"次数：",globleStrStat[tempstr]);
                                // }
                                // console.log("混淆后 重复的字符串：",tempstr,"使用下标:",index,"globleArrs[index]:",globleArrs[index])
                            }else{
                                index = arrIndex;
                                add = true;
                                // console.log("字符下标:",arrIndex)
                            }
                            var memberExpression = babel_types.memberExpression(babel_types.identifier(arrayName), babel_types.numericLiteral(index), true);
                            path.replaceWith(memberExpression);
                            if(add){
                                globleArrs.push(tempstr);
                                globleArrsObj[tempstr] = arrIndex;
                                arrIndex = globleArrs.length;
                            }
                        } catch (error) {
                            console
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
                        path.node.body.unshift(arrayDeclaration);
                    }
                }
            }
        };


        //transform方法转换code，babel先将代码转换成ast，然后进行遍历，最后输出code
        var result = babel_core.transform(contents, {
            plugins: [
                {
                    visitor
                }
            ]
        });
        contents = result.code; //从AST还原成字符串


        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
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
        var zipfile = new jszip().file("files", str);
        zipfile.generateAsync({type: "uint8array", compression: "DEFLATE", compressionOptions: {level: 9}}).then(function(content) {
            if (content) {
                var p = path.resolve(targetProject + "/res");
                try {
                    fs.statSync(p);
                } catch (e) {
                    fs.mkdirSync(p);
                }
                fs.writeFileSync(targetProject + "/res/files.zip", content, {encoding: "utf8"});
            }
        });
        // fs.writeFileSync("./qq_build/jg_gameA_identifiers.txt", identifiersRenameStr, {encoding:"utf8"});
        // fs.writeFileSync("./qq_build/jg_gameA_identifiersMap.txt", identifiersRenameMapStr, {encoding:"utf8"});

        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task("build-js-babel", function () {
    var stream = gulp
        .src(sourceProject + '/**/*.js')
        .pipe(js_babel())
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
        .src(sourceProject + '/game.js')
        .pipe(end_babel())
        .pipe(gulp.dest(targetProject + "/"))
    return stream;
});
gulp.task('build-babel', function (cb) {
    sequence('build-identifier', 'build-js-babel', 'build-end-babel', cb)
});

var globleIdentifiers = {};
/**main.js文件分包*/
var js_main_replace = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;


        //插件对象，可以对特定类型的节点进行处理
        var visitor = {
            Identifier(path) {  //代表处理 Identifier 节点
                //获取全局变量
                // if (path.scope.path.type=="Program" && path.parentPath && path.parentPath.type == "VariableDeclarator") {
                //     globleIdentifiers[path.node.name] = true;
                //     console.info("全局变量名："+ path.node.name +"   "+ path.node.value);
                // }

            },
            StringLiteral(path) {
                //字符串拆成单个字符拼接
                var val = path.node.value;
                if (val && val.length > 1) {
                    //把 "连接" 改为 ["连","接"].join("");
                    // var strarr = [];
                    // for (var i = 0; i < val.length; i++) {
                    //     strarr.push(babel_types.stringLiteral(val[i]));
                    // }
                    // path.replaceWith(
                    //     babel_types.callExpression(
                    //         babel_types.memberExpression(
                    //             babel_types.arrayExpression(strarr),
                    //             babel_types.identifier("join")
                    //         ),
                    //         [babel_types.stringLiteral("")]
                    //     )
                    // );

                    //把 "连接" 改为 "连"+"接";
                    // var strarr = [];
                    // for (var i = 0; i < val.length; i++) {
                    //     strarr.push(val[i]);
                    // }
                    // var binaryFunc = function (arr) {
                    //     if (arr && arr.length > 1) {
                    //         var rightExp = babel_types.stringLiteral(arr.pop());
                    //         if (arr.length > 1) {
                    //             return babel_types.binaryExpression("+", binaryFunc(arr), rightExp);
                    //         } else {
                    //             return babel_types.binaryExpression("+", babel_types.stringLiteral(arr.pop()), rightExp);
                    //         }
                    //     }
                    // }
                    // var binaryExp = binaryFunc(strarr);
                    // path.replaceWith(binaryExp);
                }
            },
            CallExpression(path) {  //代表处理 CallExpression 节点
                // 把 parseInt(a) 改为 parseInt(a,10)，方法的参数的数量,数量为1就增加第二个参数
                if (path.node.callee.name == 'parseInt' && path.node.arguments.length == 1) {
                    // path.node.arguments.push(babel_types.numericLiteral(10));
                }

            },
            ConditionalExpression(path) {  //处理 二目运算 表达式
                // 把 (_this.p_curPub > lenth ? lenth : _this.p_curPub)  改为  function () { if (_this.p_curPub > lenth) { return lenth; } else { return _this.p_curPub;} }
                if (path.parent.type == "VariableDeclarator" || path.parent.type == "AssignmentExpression") {
                    // if (path.node.test && path.node.consequent && path.node.alternate) {
                    //     var replacePath;
                    //     if (path.parent.type == "VariableDeclarator")
                    //         replacePath = path.parentPath.get('init');
                    //     else if (path.parent.type == "AssignmentExpression")
                    //         replacePath = path.parentPath.get('right');
                    //     if (replacePath) {
                    //         replacePath.replaceWith(
                    //             babel_types.functionExpression(null, [],
                    //                 babel_types.blockStatement([
                    //                     babel_types.ifStatement(
                    //                         path.node.test,
                    //                         babel_types.returnStatement(path.node.consequent),
                    //                         babel_types.returnStatement(path.node.alternate)
                    //                     )
                    //                 ])
                    //             )
                    //         );
                    //     }
                    // }
                }
            },
            AssignmentExpression(path) {  //处理 赋值运算 表达式
                // 把 _this.p_curRecv += data.byteLength  改为  _this.p_curRecv = _this.p_curRecv + data.byteLength
                // if (path.node.left && path.node.right) {
                //     if (path.node.operator == "+=" || path.node.operator == "-=" || path.node.operator == "*=" || path.node.operator == "/=") {
                //         var oldOperator = path.node.operator.substring(0, 1);
                //         path.node.operator = "=";
                //         var replacePath = path.get('right');
                //         replacePath.replaceWith(babel_types.binaryExpression(oldOperator, path.node.left, path.node.right));
                //     }
                // }
            },
            FunctionDeclaration(path) {  //替换函数声明体里的全局引用 如 ：function Socket() {......}
                if (path.parentPath && path.parentPath.type != 'BlockStatement' && path.parentPath.parentPath && path.parentPath.parentPath.type != 'BlockStatement')
                    return;
                if (!path.node || !path.node.body)
                    return;
                if (path.node.body.type != 'BlockStatement')
                    return;
                replace_global_identifier(contents, path.node.id.name, path.get("body"), path.node.params); // 函数体内容
            },
            ExpressionStatement(path) {  //替换函数里的全局引用 如 ：Socket.prototype.open = function(){......}
                if (path.parentPath && path.parentPath.type != 'BlockStatement' && path.parentPath.parentPath && path.parentPath.parentPath.type != 'BlockStatement')
                    return;
                if (!path.node || !path.node.expression || !path.node.expression.right || !path.node.expression.right.body)  //Object.defineProperty(Socket.prototype, "isOpen", {......}这种为CallExpression
                    return;
                if (path.node.expression.type != 'AssignmentExpression')  //Object.defineProperty(Socket.prototype, "isOpen", {......}这种为CallExpression
                    return;
                if (path.node.expression.left.type != 'MemberExpression')
                    return;
                if (path.node.expression.right.type != 'FunctionExpression')
                    return;
                if (path.node.expression.right.body.type != 'BlockStatement')
                    return;
                replace_global_identifier(contents, path.node.expression.left.property.name, path.get("expression.right.body"), path.node.expression.right.params); // 函数体内容
            },
            Program: {
                enter(path, state) {
                    // console.log('start processing this Program...');
                },
                exit(path, state) {
                    // console.log('end processing this Program!');
                    // console.info(path.node.type +"   "+ (path.node.body&&path.node.body.length));
                    if (path.node.body) {
                        // var ast = babel_template(`
                        //     var cec = [];
                        //     var wdwdl = [];
                        // `);
                        // var code = babel_generate(ast).code;
                        // path.node.body.unshift(ast);
                    }
                }
            }
        };

        //transform方法转换code，babel先将代码转换成ast，然后进行遍历，最后输出code
        var result = babel_core.transform(contents, {
            plugins: [
                {
                    visitor
                }
            ]
        });
        contents = result.code; //从AST还原成字符串


        var spl = 'console.info("------------------------------------")';
        var idx = contents.indexOf(spl);
        if (idx != -1) {
            var sub1 = contents.slice(0, idx);
            var buf1 = Buffer.alloc(Buffer.byteLength(sub1), sub1);
            fs.writeFileSync('./qq_build/jg_gameA/subPackage/main.min.js', buf1);

            var sub2 = contents.slice(idx + spl.length, contents.length);
            var buf2 = Buffer.alloc(Buffer.byteLength(sub2), sub2);
            fs.writeFileSync('./qq_build/jg_gameA/subPackage1/main.min.js', buf2);
        } else {
            console.info("未找到libs的分隔符：" + spl);
        }

        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};
var replace_global_identifier = function (contents, id, path, params) {
    console.info("=========================================================================================");

    // {pathMap: {name: {id, init},......}, idMap: {id:}}
    var def_ids = {pathMap: {}, idMap: {}, varMap: {}, paramMap: {}};
    // {name1: {arr, path, map:{name2: {arr, obj:{}}}}}
    var def_mem_num = {};

    parse_VariableDeclaration_params(def_ids, params);
    parse_BlockStatement_body(path, def_ids, def_mem_num);

    console.info("代码：" + id, path.node.start, path.node.end);//, contents.substring(body.start, body.end).substring(0, 100));
    var str = "";
    for (var key1 in def_ids.paramMap) str += key1 + ", ";
    for (var key1 in def_ids.idMap) str += key1 + ", ";
    for (var key1 in def_ids.varMap) str += key1 + ", ";
    console.info("定义：" + str);

    str = "";
    var def_func = function (obj) {
        for (var key in obj) {
            var item = obj[key];

            //本地定义，不替换
            if (!def_ids.paramMap.hasOwnProperty(key) && !def_ids.idMap.hasOwnProperty(key) && !def_ids.varMap.hasOwnProperty(key)) {
                // def_func(item.map);  //先替换子级

                if (item.arr.length >= 3) {
                    var idf;
                    var nam = item.name;
                    if (def_ids.pathMap[item.path]) {
                        idf = def_ids.pathMap[item.path].id;
                    } else if (item.init) {
                        var copy_func = function (node5) {
                            var copy;
                            if (node5.type == "MemberExpression") {
                                copy = babel_types.memberExpression(copy_func(node5.object), copy_func(node5.property));
                            } else if (node5.type == "ThisExpression") {
                                copy = babel_types.thisExpression();
                            } else if (node5.type == "Identifier") {
                                copy = babel_types.identifier(node5.name);
                            } else {
                                console.info("replace_global_identifier  copy_func  object  type=" + node1.object.name)
                            }
                            return copy;
                        }
                        var init = copy_func(item.init);
                        idf = path.get("body.0").scope.generateUidIdentifier(nam);  //生成一个标识符，不会与任何本地定义的变量相冲突，或者babel_types.identifier("_"+key)
                        def_ids.pathMap[item.path] = {id: idf, init: init};
                        path.get("body.0").insertBefore(
                            babel_types.variableDeclaration(
                                "var",
                                [
                                    babel_types.variableDeclarator(
                                        idf, init
                                    )
                                ]
                            )
                        );
                    }

                    if (idf) {
                        for (var i = 0; i < item.arr.length; i++) {
                            var path1 = item.arr[i];
                            var node1 = path1.node;
                            if (node1.type == "MemberExpression") {
                                path1.get("object").replaceWith(idf);
                            } else if (node1.type == "ThisExpression") {
                                path1.replaceWith(idf);
                            } else if (node1.type == "Identifier") {
                                path1.replaceWith(idf);
                            } else {
                                console.info("replace_global_identifier  def_func  type=" + node1.type);
                            }
                        }
                        str += item.path + ":" + item.arr.length + ", ";
                        item.arr = [];
                    }
                }
            }
        }
    }
    def_func(def_mem_num);
    console.info("引用：" + str);
}

var parse_VariableDeclaration_body = function (path, def_ids, def_mem_num) {
    for (var j = 0; j < path.node.declarations.length; j++) {
        var path1 = path.get("declarations." + j);
        var node1 = path1.node;
        if (node1.type == "VariableDeclarator") {
            if (node1.id.type == "Identifier") {
                if (!node1.init) {
                    def_ids.varMap[node1.id.name] = node1.init;
                } else if (node1.init.type == "MemberExpression" && (node1.init.object != "MemberExpression" || node1.init.object != "ThisExpression" || node1.init.object != "Identifier")) {
                    def_ids.varMap[node1.id.name] = node1.init;
                } else if (node1.init.type == "ThisExpression" || node1.init.type == "MemberExpression") {  //定义的引用
                    var nam = null;
                    var init_func = function (node2, nam2) {
                        if (node2.type == "MemberExpression") {
                            if (node2.object.type == "MemberExpression") {
                                nam2 = init_func(node2.object, nam2);
                            } else if (node2.object.type == "ThisExpression") {
                                nam2 = (nam2 ? nam2 + "." : "") + "this";
                            } else if (node2.object.type == "Identifier") {
                                nam2 = (nam2 ? nam2 + "." : "") + node2.object.name;
                            } else {
                                console.info("     parse_VariableDeclaration_body  init_func  object  type=" + node2.object.type)
                            }
                            nam2 = (nam2 ? nam2 + "." : "") + node2.property.name;
                        } else if (node2.type == "ThisExpression") {
                            nam2 = (nam2 ? nam2 + "." : "") + "this";
                        } else {
                            console.info("     parse_VariableDeclaration_body  init_func  type=" + node2.type)
                        }
                        return nam2;
                    }
                    nam = init_func(node1.init, nam);
                    def_ids.pathMap[nam] = {id: node1.id, init: node1.init};
                    def_ids.idMap[node1.id.name] = nam;
                } else if (node1.init.type == "NewExpression" || node1.init.type == "BinaryExpression" || node1.init.type == "CallExpression" ||
                    node1.init.type == "ConditionalExpression" || node1.init.type == "UnaryExpression" || node1.init.type == "LogicalExpression" ||
                    node1.init.type == "ObjectExpression" || node1.init.type == "ArrayExpression" || node1.init.type == "FunctionExpression" ||
                    node1.init.type == "AssignmentExpression") {
                    def_ids.varMap[node1.id.name] = node1.init;
                    parse_Expression_type(node1.init, def_ids, def_mem_num, null, "parse_VariableDeclaration_body  declarations  index=" + j + "  init  ");
                } else if (node1.init.type == "Identifier" || node1.init.type == "RegExpLiteral" || node1.init.type == "UpdateExpression" ||
                    node1.init.type == "StringLiteral" || node1.init.type == "NumericLiteral" || node1.init.type == "NullLiteral" || node1.init.type == "BooleanLiteral") {
                    def_ids.varMap[node1.id.name] = node1.init;
                } else {
                    def_ids.varMap[node1.id.name] = node1.init;
                    console.info("     parse_VariableDeclaration_body  declarations  index=" + j + "  id  name=" + node1.id.name + "  init  type=" + (node1.init && node1.init.type))
                }
            } else {
                console.info("     parse_VariableDeclaration_body  declarations  index=" + j + "  id  type=" + node1.id.type)
            }
        } else {
            console.info("     parse_VariableDeclaration_body  declarations  index=" + j + "  type=" + node1.type)
        }
    }
}
var parse_VariableDeclaration_params = function (def_ids, params) {
    for (var j = 0; j < params.length; j++) {
        var node1 = params[j];
        if (node1.type == "Identifier") {
            def_ids.paramMap[node1.name] = node1;
        } else {
            console.info("parse_VariableDeclaration_params  index=" + j + "  id  type=" + node1.type)
        }
    }
}
var parse_BlockStatement_body = function (path, def_ids, def_mem_num) {
    for (var i = 0; i < path.node.body.length; i++) {
        var path1 = path.get("body." + i);
        var node1 = path1.node;
        if (node1.type == "VariableDeclaration") {
            parse_VariableDeclaration_body(path1, def_ids, def_mem_num);
        } else if (node1.type == "IfStatement") {  //如：if (true) {......}
            parse_IfStatement_body(path1, def_ids, def_mem_num);
        } else if (node1.type == "WhileStatement") {  //如：while (true) {......}
            parse_WhileStatement_body(path1, def_ids, def_mem_num);
        } else if (node1.type == "ForStatement") {
            parse_ForStatement_body(path1, def_ids, def_mem_num);
        } else if (node1.type == "SwitchStatement") {
            parse_SwitchStatement_body(path1, def_ids, def_mem_num);
        } else if (node1.type == "ExpressionStatement") {
            parse_ExpressionStatement_body(path1, def_ids, def_mem_num);
        } else if (node1.type == "ReturnStatement") {
            parse_ReturnStatement_body(path1, def_ids, def_mem_num);
        } else if (node1.type == "BreakStatement" || node1.type == "ContinueStatement") {
            //忽略
        } else {
            console.info("parse_BlockStatement_body  " + node1.type);
        }
    }
}
var parse_IfStatement_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("test"), def_ids, def_mem_num, null, "parse_IfStatement_body  test  ");
    parse_Expression_type(path.get("consequent"), def_ids, def_mem_num, null, "parse_IfStatement_body  consequent  ");
    parse_Expression_type(path.get("alternate"), def_ids, def_mem_num, null, "parse_IfStatement_body  alternate  ");
}
var parse_WhileStatement_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("test"), def_ids, def_mem_num, null, "parse_WhileStatement_body  test  ");
    if (path.node.body && path.node.body.type == "BlockStatement") {
        parse_BlockStatement_body(path.get("body"), def_ids, def_mem_num);
    } else {
        console.info("parse_WhileStatement_body  " + path.node.body.type);
    }
}
var parse_ForStatement_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("init"), def_ids, def_mem_num, null, "parse_ForStatement_body  init  ");
    parse_Expression_type(path.get("test"), def_ids, def_mem_num, null, "parse_ForStatement_body  test  ");
    parse_Expression_type(path.get("update"), def_ids, def_mem_num, null, "parse_ForStatement_body  update  ");
    parse_Expression_type(path.get("body"), def_ids, def_mem_num, null, "parse_ForStatement_body  body  ");
}
var parse_SwitchStatement_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("discriminant"), def_ids, def_mem_num, null, "parse_SwitchStatement_body  discriminant  ");
    if (path.node.cases && path.node.cases.length) {
        for (var i = 0; i < path.node.cases.length; i++) {
            if (path.node.cases[i].type == "SwitchCase") {
                parse_Expression_type(path.get("cases." + i + ".test"), def_ids, def_mem_num, null, "parse_SwitchStatement_body  cases  index=" + i + "  ");
                for (var j = 0; j < path.node.cases[i].consequent.length; j++) {
                    parse_Expression_type(path.get("cases." + i + ".consequent." + j), def_ids, def_mem_num, null, "parse_SwitchStatement_body  cases  index=" + i + "  consequent  index=" + j + "  ");
                }
            } else {
                console.info("parse_SwitchStatement_body  cases  index=" + i + "  type=" + path.node.cases[i].type);
            }
        }
    }
}
var parse_ExpressionStatement_body = function (path, def_ids, def_mem_num) {
    var node = path.node;
    if (node.expression.type == "AssignmentExpression") {  //如：this.p_sconId = 0;
        parse_Expression_type(path.get("expression.left"), def_ids, def_mem_num, null, "parse_ExpressionStatement_body  AssignmentExpression  left  ");
        parse_Expression_type(path.get("expression.right"), def_ids, def_mem_num, null, "parse_ExpressionStatement_body  AssignmentExpression  right  ");
    } else if (node.expression.type == "CallExpression") {  //如：this._onError.call(this.p_caller, e);
        parse_Expression_type(path.get("expression"), def_ids, def_mem_num, null, "parse_ExpressionStatement_body  CallExpression  ");
    } else if (node.expression.type == "UpdateExpression") {  //如：
        parse_Expression_type(path.get("expression"), def_ids, def_mem_num, null, "parse_ExpressionStatement_body  UpdateExpression  ");
    } else if (node.expression.type == "LogicalExpression") {  //如：
        parse_Expression_type(path.get("expression"), def_ids, def_mem_num, null, "parse_ExpressionStatement_body  LogicalExpression  ");
    } else if (node.expression.type == "ConditionalExpression") {  //如：
        parse_Expression_type(path.get("expression"), def_ids, def_mem_num, null, "parse_ExpressionStatement_body  ConditionalExpression  ");
    } else {
        console.info("parse_ExpressionStatement_body  expression  " + node.expression.type);
    }
}
var parse_ReturnStatement_body = function (path, def_ids, def_mem_num) {
    if (path.node.argument) {
        parse_Expression_type(path.get("argument"), def_ids, def_mem_num, null, "parse_ReturnStatementelse_body  argument  ");
    }
}
var parse_ThrowStatement_body = function (path, def_ids, def_mem_num) {
    if (path.node.argument) {
        parse_Expression_type(path.get("argument"), def_ids, def_mem_num, null, "parse_ThrowStatement_body  argument  ");
    }
}

var parse_CallExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("callee"), def_ids, def_mem_num, null, "parse_CallExpression_body  callee  ");
    if (path.node.arguments && path.node.arguments.length) {
        for (var i = 0; i < path.node.arguments.length; i++) {
            parse_Expression_type(path.get("arguments." + i), def_ids, def_mem_num, null, "parse_CallExpression_body  arguments  index=" + i + "  ");
        }
    }
}
var parse_ConditionalExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("test"), def_ids, def_mem_num, null, "parse_ConditionalExpression_body  test  ");
    parse_Expression_type(path.get("consequent"), def_ids, def_mem_num, null, "parse_ConditionalExpression_body  consequent  ");
    parse_Expression_type(path.get("alternate"), def_ids, def_mem_num, null, "parse_ConditionalExpression_body  alternate  ");
}
var parse_NewExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("callee"), def_ids, def_mem_num, null, "parse_NewExpression_body  callee  ");
    if (path.node.arguments && path.node.arguments.length) {
        for (var i = 0; i < path.node.arguments.length; i++) {
            parse_Expression_type(path.get("arguments." + i), def_ids, def_mem_num, null, "parse_NewExpression_body  arguments  index=" + i + "  ");
        }
    }
}
var parse_BinaryExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("left"), def_ids, def_mem_num, null, "parse_BinaryExpression_body  left  ");
    parse_Expression_type(path.get("right"), def_ids, def_mem_num, null, "parse_BinaryExpression_body  right  ");
}
var parse_AssignmentExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("left"), def_ids, def_mem_num, null, "parse_AssignmentExpression_body  left  ");
    parse_Expression_type(path.get("right"), def_ids, def_mem_num, null, "parse_AssignmentExpression_body  right  ");
}
var parse_LogicalExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("left"), def_ids, def_mem_num, null, "parse_LogicalExpression_body  left  ");
    parse_Expression_type(path.get("right"), def_ids, def_mem_num, null, "parse_LogicalExpression_body  right  ");
}
var parse_UnaryExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("argument"), def_ids, def_mem_num, null, "parse_UnaryExpression_body  argument  ");
}
var parse_UpdateExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path.get("argument"), def_ids, def_mem_num, null, "parse_UpdateExpression_body  argument  ");
}
var parse_ElementExpression_body = function (path, def_ids, def_mem_num) {
    parse_Expression_type(path, def_ids, def_mem_num, null, "parse_ElementExpression_body   ");
}
var parse_MemberExpression_body = function (path, def_ids, def_mem_num) {
    var mem_func = function (path1, obj1) {
        var node1 = path1.node;
        var name1 = null;
        var init1 = null;
        var path2 = null;
        if (node1.object.type == "MemberExpression") {
            init1 = node1.object;
            name1 = null;
            var obj2 = mem_func(path1.get("object"), obj1);
            if (obj2) {
                obj1 = obj2.map;
                path2 = obj2.path;
            } else {
                obj1 = null;
                path2 = null;
            }
        } else if (node1.object.type == "ThisExpression") {
            init1 = node1.object;
            name1 = path2 = "this";
        } else if (node1.object.type == "Identifier") {
            init1 = node1.object;
            name1 = path2 = node1.object.name;
        } else {
            obj1 = null;
            path2 = null;
            // console.info("     parse_MemberExpression_body  mem_func  object  type="+node1.object.type)
        }

        if (obj1) {
            if (node1.object.type == "ThisExpression" || node1.object.type == "Identifier") {
                if (!obj1[name1] || (obj1[name1] instanceof Function))obj1[name1] = {name: name1, path: name1, init: init1, arr: [], map: {}};
                obj1[name1].arr.push(path1.get("object"));
                obj1 = obj1[name1].map;
                init1 = node1;
            } else if (node1.object.type == "MemberExpression") {
                init1 = node1;
            }
            name1 = node1.property.name;
            try {
                if (!obj1[name1] || (obj1[name1] instanceof Function)) obj1[name1] = {name: name1, path: path2+"."+name1, init: init1, arr: [], map: {}};
                obj1[name1].arr.push(path);
            } catch (e) {
                console.error(e);
            }
            return {path: path2 + "." + name1, map: obj1[name1].map};
        } else {
            return null;
        }
    }
    mem_func(path, def_mem_num);
}
var parse_ThisExpression_body = function (path, def_ids, def_mem_num) {
    // var name = "this";
    // if (!.hasOwnProperty(name)) [name] = [];
    // [name].push(path);
}
var parse_Identifier_body = function (path, def_ids, def_mem_num) {
    // var name = path.node.name;
    // if (!.hasOwnProperty(name)) [name] = [];
    // [name].push(path);
}
var parse_Expression_type = function (path, def_ids, def_mem_num, mem_parent, else_val) {
    var node = path.node;
    if (node) {
        if (node.type == "VariableDeclaration") {
            parse_VariableDeclaration_body(path, def_ids, def_mem_num);
        } else if (node.type == "FunctionExpression") {  //如：this.p_onMessage = function (event) {......}
            // 忽略
            // if (node.body.type == 'BlockStatement') {
            //     parse_BlockStatement_body(path.get("body"), def_ids, def_mem_num);
            // }
        } else if (node.type == "BlockStatement") {  //如：if (true) {......}
            parse_BlockStatement_body(path, def_ids, def_mem_num);
        } else if (node.type == "IfStatement") {  //如：if (true) {......}
            parse_IfStatement_body(path, def_ids, def_mem_num);
        } else if (node.type == "WhileStatement") {  //如：while (true) {......}
            parse_WhileStatement_body(path, def_ids, def_mem_num);
        } else if (node.type == "ExpressionStatement") {
            parse_ExpressionStatement_body(path, def_ids, def_mem_num);
        } else if (node.type == "ReturnStatement") {
            parse_ReturnStatement_body(path, def_ids, def_mem_num);
        } else if (node.type == "ThrowStatement") {  //如：throw new Error("同一条协议不可以侦听两次：" + opcode);
            parse_ThrowStatement_body(path, def_ids, def_mem_num);
        } else if (node.type == "CallExpression") {  //如：this._onError.call(this.p_caller, e);
            parse_CallExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "ConditionalExpression") {  //如：_this.p_curPub > lenth ? lenth : _this.p_curPub
            parse_ConditionalExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "BinaryExpression") {  //如："连接服务器成功 " + scon_pack.split("\n");
            parse_BinaryExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "AssignmentExpression") {  //如："连接服务器成功 " + scon_pack.split("\n");
            parse_AssignmentExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "LogicalExpression") {  //如： !pb_type && DEBUG
            parse_LogicalExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "UnaryExpression") {  //如： !pb_type
            parse_UnaryExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "UpdateExpression") {  //如： index++
            parse_UpdateExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "NewExpression") {  //如：this.p_pubBuf = new Uint8Array(16384);
            parse_NewExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "ArrayExpression") {  //如：this.p_pLim = [];
            for (var i = 0; i < node.elements.length; i++) {
                parse_ElementExpression_body(path.get("elements." + i), def_ids, def_mem_num);
            }
        } else if (node.type == "ObjectExpression") {  //如：this.p_pLim = {};
            for (var i = 0; i < node.properties.length; i++) {
                parse_ElementExpression_body(path.get("properties." + i + ".key"), def_ids, def_mem_num);
                parse_ElementExpression_body(path.get("properties." + i + ".value"), def_ids, def_mem_num);
            }
        } else if (node.type == "MemberExpression") {  //如：this.p_sconId
            parse_MemberExpression_body(path, def_ids, def_mem_num, mem_parent);
        } else if (node.type == "ThisExpression") {  //如：this
            parse_ThisExpression_body(path, def_ids, def_mem_num);
        } else if (node.type == "Identifier") {  //如：this._onError.call(this.p_caller, e);
            parse_Identifier_body(path, def_ids, def_mem_num);
        } else if (node.type == "BreakStatement" || node.type == "ContinueStatement") {
            //忽略
        } else if (node.type == "StringLiteral" || node.type == "NumericLiteral" || node.type == "NullLiteral" || node.type == "BooleanLiteral") {
            //忽略
        } else {
            console.info("     " + else_val + "type=" + node.type);
        }
    }
}

gulp.task("build-main-replace", function () {
    var stream = gulp
        .src('./bin/js/main.js')
        .pipe(js_main_replace())
        .pipe(concat('main.replace.js'))
        .pipe(gulp.dest("./bin/js/"))
    return stream;
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
                exclude: [],  //文件名或glob，指示要从混淆中排除的文件
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
        .src(sourceProject + '/game.js')
        .pipe(gulp.dest(targetProject + '/'))
    return stream;
});

//打包
gulp.task('build-obfuscator', function (cb) {
    sequence('build-identifier', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator', 'build-end-obfuscator', cb)
    // sequence('build-num-obfuscator', 'build-protobuf-obfuscator', 'build-end-obfuscator', cb)
});

gulp.task('build-babel-obfuscator', function (cb) {
    sequence('build-identifier', 'build-js-babel', 'build-end-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator', 'build-end-obfuscator', cb)
});

//
gulp.task('build_rollup', function () {
    return gulp.src(BUILD + 'jg_gameB/game2.js')
        .pipe(rollup({
            // any option supported by Rollup can be set here.
            input: BUILD + 'jg_gameB/game2.js'
        }))
        .pipe(gulp.dest(BUILD + 'jg_gameB/'))
});
gulp.task('build_webpack', function () {
    return gulp.src(BUILD + 'jg_gameB/protobuf/protobuf2.js')
        .pipe(webpack({
            mode: "production",
            devtool: false,
            optimization: {
                minimize: false,
            },
            entry: BUILD + 'jg_gameB/protobuf/protobuf2.js',
            output: {
                path: path.resolve(__dirname, BUILD + 'jg_gameB/protobuf/'),
                filename: 'protobuf.js',
            },
            resolve: {
                extensions: ['.js']
            },
            module: {
                rules: [
                    {test: /\.js$/, loader: 'babel-loader',}
                ],
            },
        }))
        .pipe(gulp.dest(BUILD + 'jg_gameB/'))
});
//马甲包文件名重命名映射表
var filesMap = {
    //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen
    "libs": {url:"lxxibbs"},
    "game.js": {url:"lxxibbs/mttttn.js",extractStr:true,count:1,strLen:3},
    "index.js": {url:"lxxibbs/iddddx.js",extractStr:true,count:1,strLen:3},
    "init.min.js":  {url:"lxxibbs/inbbbbl.js",extractStr:true,count:1,strLen:3},
    "libs/dom.js":  {url:"lxxibbs/dddom.js"},
    "libs/dom_parser.js":  {url:"lxxibbs/daetsfsdf.js"},
    "libs/laya.wxmini.js":  {url:"lxxibbs/asts.js"},
    "libs/libs.min.js":  {url:"lxxibbs/sdt234.js",extractStr:false},
    "libs/md5.min.js":  {url:"lxxibbs/asdf2.js"},
    "libs/sax.js":  {url:"lxxibbs/ahg324.js"},
    "libs/weapp-adapter.js":  {url:"lxxibbs/adg431.js"},
    "libs/zlib.js":  {url:"lxxibbs/ah5.js"},
    "libs/game.js":  {url:"lxxibbs/game.js",extractStr:true,count:1,strLen:3},
    "wxsdk":  {url:"ddk"},
    "wxsdk/wx_aksdk.js":  {url:"ddk/ddsdk.js",extractStr:true,count:1,strLen:3},
    "wxsdk/helper.js":  {url:"ddk/ddhelp.js",extractStr:true,count:1,strLen:3},

    "protobuf":  {url:"pppf"},
    "protobuf/client_pb.js":  {url:"pppf/pppfb.js",extractStr:true,count:5,strLen:3},
    "protobuf/protobuf.js":  {url:"pppf/buff.js",extractStr:true,count:5,strLen:3},
    "protobuf/game.js":  {url:"pppf/game.js",extractStr:true,count:5,strLen:3},

    "subPackage":  {url:"mmmmm"},
    "subPackage/main.min.js":  {url:"mmmmm/mmmmmn.js",extractStr:true,count:1,strLen:3},
    "subPackage/game.js":  {url:"mmmmm/game.js",extractStr:true,count:1,strLen:3},

    //随机创建名字和文件夹
    "res": {url:"atlas333"},
    "res/atlas": {url:"atlas333"},
    "wxloading_atlas": {url:"looooooding"},
    "wxlogin_atlas": {url:"llllogin"},
    "res/atlas/wxlogin_atlas.png": {url:"atlas333/llllogin.png"},
    "res/atlas/wxeff_btn_atlas.png": {url:"atlas333/bbbtn.png"},
    "res/atlas/wxloading_atlas.png": {url:"atlas333/looooooding.png"},

    "wxloading_atlas/btn_loding_abcelq0.png": {url:"looooooding/1.png"},
    "wxloading_atlas/btn_loding_abcelq1.png": {url:"looooooding/2.png"},
    "wxloading_atlas/image_loading_bg.jpg": {url:"looooooding/3.jpg"},
    "wxloading_atlas/image_loading_bg_bottom.jpg": {url:"looooooding/4.jpg"},
    "wxloading_atlas/image_loading_bg_bottom2.jpg": {url:"looooooding/5.jpg"},
    "wxloading_atlas/image_loading_bg_left.jpg": {url:"looooooding/6.jpg"},
    "wxloading_atlas/image_loading_bg_left2.jpg": {url:"looooooding/7.jpg"},
    "wxloading_atlas/image_loading_bg_right.jpg": {url:"looooooding/8.jpg"},
    "wxloading_atlas/image_loading_bg_right2.jpg": {url:"looooooding/9.jpg"},
    "wxloading_atlas/image_loading_bg_top.jpg": {url:"looooooding/10.jpg"},
    "wxloading_atlas/image_loading_bg_top2.jpg": {url:"looooooding/11.jpg"},
    "wxloading_atlas/image_loading_bg2.jpg": {url:"looooooding/12.jpg"},

    "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"llllogin/1.png"},
    "wxlogin_atlas/image_login_loginbg.jpg": {url:"llllogin/2.jpg"},
    "wxlogin_atlas/image_login_loginbg_bottom.jpg": {url:"llllogin/3.jpg"},
    "wxlogin_atlas/image_login_loginbg_left.jpg": {url:"llllogin/4.jpg"},
    "wxlogin_atlas/image_login_loginbg_right.jpg": {url:"llllogin/5.jpg"},
    "wxlogin_atlas/image_login_loginbg_top.jpg": {url:"llllogin/6.jpg"},
    "wxlogin_atlas/image_login_logo.png": {url:"llllogin/7.png"},
    "wxlogin_atlas/image_login_notice.png": {url:"llllogin/8.png"},
    "wxlogin_atlas/image_xuanfu_xfbg.png": {url:"llllogin/9.png"},
};

//混淆后的文件配置通过  filesMap 转化 "libs": {url:"lxxibbs"},  -》"lxxibbs":{url:"lxxibbs"}
var targetFileMap = {};

var mt1Replace = {
    "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
    "./helper": "./" + "ddhelp",
    "./sax": "./ahg324",
    "./dom": "./dddom",
    "client_pb.js": "pppfb.js",
    "protobuf.js": "buff.js",
    "main.min.js": "mmmmmn.js",
    "wxlogin_atlas": "llllogin",
    "wxeff_btn_atlas": "bbbtn",
    "wxloading_atlas": "looooooding",
    "res/atlas/": "atlas333/",

    "btn_loding_abcelq0.png": "1.png",
    "btn_loding_abcelq1.png": "2.png",
    "image_loading_bg.jpg": "3.jpg",
    "image_loading_bg_bottom.jpg": "4.jpg",
    "image_loading_bg_bottom2.jpg": "5.jpg",
    "image_loading_bg_left.jpg": "6.jpg",
    "image_loading_bg_left2.jpg": "7.jpg",
    "image_loading_bg_right.jpg": "8.jpg",
    "image_loading_bg_right2.jpg": "9.jpg",
    "image_loading_bg_top.jpg": "10.jpg",
    "image_loading_bg_top2.jpg": "11.jpg",
    "image_loading_bg2.jpg": "12.jpg",

    "image_denglu_txtshenpi.png": "1.png",
    "image_login_loginbg.jpg": "2.jpg",
    "image_login_loginbg_bottom.jpg": "3.jpg",
    "image_login_loginbg_left.jpg": "4.jpg",
    "image_login_loginbg_right.jpg": "5.jpg",
    "image_login_loginbg_top.jpg": "6.jpg",
    "image_login_logo.png": "7.png",
    "image_login_notice.png": "8.png",
    "image_xuanfu_xfbg.png": "9.png",
}

//压缩
gulp.task('MT1_build_minify', function () {
    var targetUrl = "../../client/wx_build/jg_gameMT1_new";
    var stream = gulp.src([targetUrl + '/**/*.js', "!" + targetUrl + '/**/mmmmmn.js'])
        .pipe(js_minify())
        .pipe(gulp.dest(targetUrl + '/'))
    return stream;
});

gulp.task('MT1_COPY', function () {
    var sourceUrl = "../../client/wx_build/jg_gameMT1";
    var targetUrl = "../../client/wx_build/jg_gameMT1_new";
    return gulp.src(sourceUrl + "/" + '/**/*')
        .pipe(rename(function (path) {
            // console.log(path);
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
                        console.log("文件路径:", path.dirname, "文件名字:", path.basename, "修改路径为:", dirPath, "修改文件名为：", curFileName.split(".")[0]);
                        path.dirname = dirPath;
                        path.basename = curFileName.split(".")[0];

                    }
                }
            }
            // console.log("ppp:", path);

        }))
        //不用修改
        .pipe(replace(/(subPackage\/game.js)|(subPackage\/main.min.js)|(libs\/md5.min.js)|(libs\/weapp-adapter.js)|(libs\/zlib.js)|(libs\/dom_parser.js)|(index.js)|(libs\/libs.min.js)|(libs\/laya.wxmini.js)|(init.min.js)|(game.js)/g, function (match, p1, offset, string) {
            var arr = filesMap[match].url.split("/");
            // console.log('Found ' + match + ' with param ' + p1,"替换为:", arr[arr.length-1]);
            return arr[arr.length - 1];
        }))
        .pipe(replace(/(res\/atlas\/wxlogin_atlas.png)|(res\/atlas\/wxeff_btn_atlas.png)|(res\/atlas\/wxloading_atlas.png)|(res\/atlas)/g, function (match, p1, offset, string) {
            var relative = this.file.relative.replace(/\\/g, "/");
            if (relative == "lxxibbs/inbbbbl.js") {
                var arr = filesMap[match].url.split("/");
                console.log('Found ' + match + ' with param ' + p1, "替换为:", arr[arr.length - 1]);
                return arr[arr.length - 1];
            } else {
                return match;
            }
        }))
        //不用修改
        .pipe(replace(/(.\/wxsdk\/wx_aksdk.js)|(.\/helper)|(.\/sax)|(.\/dom)|(client_pb.js)|(protobuf.js)|(main.min.js)/g, function (match, p1, offset, string) {
            // console.log('Found ' + match + ' with param ' + p1,"替换为:", mt1Replace[match]);
            return mt1Replace[match];
        }))
        .pipe(replace(/(wxlogin_atlas)|(wxeff_btn_atlas)|(wxloading_atlas)|(btn_loding_abcelq0.png)|(btn_loding_abcelq1.png)|(image_loading_bg.jpg)|(image_loading_bg_bottom.jpg)|(image_loading_bg_bottom2.jpg)|(image_loading_bg_left.jpg)|(image_loading_bg_left2.jpg)|(image_loading_bg_right.jpg)|(image_loading_bg_right2.jpg)|(image_loading_bg_top.jpg)|(image_loading_bg_top2.jpg)|(image_loading_bg2.jpg)/g, function (match, p1, offset, string) {
            console.log('Found ' + match + ' with param ' + p1, "替换为:", mt1Replace[match]);
            if (!mt1Replace[match]) {
                console.log(1);
            }
            return mt1Replace[match];
        }))
        .pipe(replace(/(image_denglu_txtshenpi.png)|(image_login_loginbg.jpg)|(image_login_loginbg_bottom.jpg)|(image_login_loginbg_left.jpg)|(image_login_loginbg_right.jpg)|(image_login_loginbg_top.jpg)|(image_login_logo.png)|(image_login_notice.png)|(image_xuanfu_xfbg.png)/g, function (match, p1, offset, string) {
            if (!mt1Replace[match]) {
                console.log(1);
            }
            console.log('Found ' + match + ' with param ' + p1, "替换为:", mt1Replace[match]);
            return mt1Replace[match];
        }))
        //报名需要修改
        .pipe(replace(/( name: 'main')/g, "name: 'mmmmm'"))
        .pipe(replace(/( name: 'probuf')/g, "name: 'pppf'"))
        .pipe(through.obj(function (file, encode, cb) {
            // console.log("file:",file,"encode:",encode);
            if (file.relative == "game.json") {
                var result = file.contents.toString();
                var json = JSON.parse(result);
                console.log("修改game.json：修改分包")
                json.subpackages = [
                    {
                        "name": "lxxibbs",
                        "root": "lxxibbs/"
                    },
                    {
                        "name": "pppf",
                        "root": "pppf/"
                    },
                    {
                        "name": "mmmmm",
                        "root": "mmmmm/"
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
    var sourceUrl = "../../client/wx_build/jg_gameMT1_new";
    var targetUrl = "../../client/wx_build/jg_gameMT1_obfuscator";
    var req = "sourceUrl + " / " + '/**/*";
    return gulp.src([sourceUrl + "/" + '/**/*.png', sourceUrl + "/" + '/**/*.jpg', sourceUrl + "/" + '/**/*.json'])
        .pipe(gulp.dest(targetUrl + '/'));
});


//随机产生辣鸡空文件
gulp.task('MT1_CREATE_REFUSEFILE', function () {
    var targetUrl = "../../client/wx_build/jg_gameMT1_obfuscator";
    return gulp.src(targetUrl + "/game.js")
        .pipe(mt1_createRefuseFile())
        .pipe(gulp.dest(targetUrl + '/'));
});

//删除随机产生的辣鸡空文件
gulp.task('MT1_DEL_REFUSEFILE', function () {
    var targetUrl = "../../client/wx_build/jg_gameMT1_obfuscator";
    return gulp.src(targetUrl + "/game.js")
        .pipe(mt1_deleteRefuseFile())
        .pipe(gulp.dest(targetUrl + '/'));
});

var mt1_deleteRefuseFile = function () {
    function onFile(file, enc, cb) {
        var targetUrl = "../../client/wx_build/jg_gameMT1_obfuscator";

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
var mt1_createRefuseFile = function () {
    function onFile(file, enc, cb) {
        var targetUrl = "../../client/wx_build/jg_gameMT1_obfuscator";

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
        var suffixs = ["js", "png", "jpg", "ogg", "mp4", "mp3", "astc", "ktx", "txt", "etc", "pvr", "gif", "bmp", "jpeg", "svg", "ico"];//"*"];
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
                    var tempName = "temp" + f + "." + s;
                    var url = director + "/" + tempName
                    fs.writeFileSync(url, Math.random() * 999999 >> 0);
                    console.log("随机生成文件:", url);
                }
            }
        }

        for (var i = fielNames.length - 1; i >= 0; i--) {
            var f = fielNames.pop();
            var s = createSuffixs.pop();
            var tempName = "temp" + f + "." + s;
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

/**AST处理（字符串提取，变量名替换）//临时测试用的*/
var mt_js_babel = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;
        console.info("字符串标识符处理：" + file.path);
        identifiersRenameStr += "\n\n\n\n============================" + file.path + "\n";

        var arrayName = globleKeys[1];
        // var arrayElements = [];
        // var arrayDeclaration = babel_types.variableDeclaration("var", [babel_types.variableDeclarator(babel_types.identifier(arrayName), babel_types.arrayExpression(arrayElements)]);
        //var  $b = wx.xxx;  variableDeclaration 声明一个变量   variableDeclarator声明变量node  identifier 声明变量的标识符（名字）    memberExpression 成员表达式 通常指屌用成员对象
        // var arrayDeclaration = babel_types.variableDeclaration("var", [babel_types.variableDeclarator(babel_types.identifier(arrayName), babel_types.memberExpression(babel_types.identifier(pfFlag), babel_types.identifier(globleKeys[0])))]);


        //插件对象，可以对特定类型的节点进行处理
        var visitor = {
            StringLiteral(path) {  //代表处理 StringLiteral 节点 提取字符串
                // && !(path.parent && path.parent.type == "VariableDeclaration" && path.parent.parent && path.parent.parent.type == "VariableDeclarator" && path.parent.parent.id && path.parent.parent.id.name== "acfe")
                if (path.node.type == "StringLiteral") { //查找需要修改的叶子节点
                    // var tempstr = path.node.value;
                    // if (tempstr.length > 0 && tempstr.length < 100 && tempstr.indexOf("\n") == -1) {
                    //     // console.info(path.node.type +"   "+ path.node.value);
                    //     try {
                    //         var memberExpression = babel_types.memberExpression(babel_types.identifier(arrayName), babel_types.numericLiteral(arrIndex), true);
                    //         path.replaceWith(memberExpression);
                    //         // var element = babel_types.stringLiteral(tempstr);  //创建一个数组元素
                    //         // arrayElements.push(element);
                    //         globleArrs.push(tempstr);
                    //         arrIndex++;
                    //     } catch (error) {
                    //         // console.error(error);
                    //     }
                    // }
                }
            },
            Identifier(path) {  //代表处理 Identifier 节点  全局变量名替换）
                if (path.node.type == "Identifier") { //查找需要修改的叶子节点
                    // var tempstr = path.node.name;
                    // if (identifiersGlobleMap.hasOwnProperty(tempstr)) {
                    //     var member_path = path.findParent(p => p.isMemberExpression());
                    //     var object = member_path && member_path.node && member_path.node.object;
                    //     if (object && (object.name == "wx" || object.name == "qq" || object.name == "laya" || object.name == "Laya")) {
                    //         // console.info("全局变量名替换："+  path.node.type +"   "+ path.node.name +" => "+ identifiersGlobleMap[tempstr]);
                    //     } else {
                    //         path.node.name = identifiersGlobleMap[tempstr];
                    //     }
                    // } else {
                    //     if (!identifiersUIMap[tempstr] && tempstr.length >= 10) {
                    //         var str = "'" + path.node.name + "', ";
                    //         if (identifiersRenameStr.indexOf(str) == -1) {
                    //             identifiersRenameStr += str;
                    //             // console.info("未混淆变量名："+  path.node.type +"   "+ path.node.name);
                    //         }
                    //     }
                    // }
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
                            var isMemberExpression = babel_types.isMemberExpression(arg0);
                            if(isMemberExpression){
                                return;
                            }
                            //BinaryExpression //1+1,2+2 这种二进制表达式直接算出值， 先不管，工具会自动先转换
                            var isLiteral = babel_types.isLiteral(arg0)
                            if(isLiteral){
                                var arrayExpression = babel_types.arrayExpression();
                                path.replaceWith(arrayExpression)
                            }else{
                               return;
                            }
                        }
                    }
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

        //transform方法转换code，babel先将代码转换成ast，然后进行遍历，最后输出code
        var result = babel_core.transform(contents, {
            plugins: [
                {
                    visitor
                }
            ]
        });
        contents = result.code; //从AST还原成字符串


        var bf = new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task("MT1-build-js-babel", function () {
    var sourceUrl = "../../client/wx_build/jg_gameMT1_new1";

    var stream = gulp
        .src(sourceUrl + '/game.js')
        .pipe(mt_js_babel())
        .pipe(gulp.dest(sourceUrl + "/ast/"))
    return stream;
});

// gulp.task("build-libs-obfuscator", function () {
//
//     var stream = gulp
//         .src(targetProject+'/'+filesMap["libs"]+'/**/*.js')
//         .pipe(js_obfuscator(1))
//         .pipe(gulp.dest(targetProject+'/'+filesMap["libs"]))
//     return stream;
// });




