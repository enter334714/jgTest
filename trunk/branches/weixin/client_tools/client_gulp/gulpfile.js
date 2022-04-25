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

// var requirejs = require('gulp-requirejs');
// var webpack = require('webpack-stream');
// var rollup = require('gulp-rollup');
// var sourcemaps = require('gulp-sourcemaps');
// var convertEncoding = require('gulp-convert-encoding');

var SRC = '../../client/src/'; //路径
var BIN = '../../client/bin/'; //路径
var DEST = '../../client/wx_dist/packageA/'; //路径自行设置
var DEST_JS = 'wx_dist/'; //路径
var BUILD = 'wx_build/'; //路径
var PACK = 'jg_gameA'; //项目名
var INIT_PATH = ''; //init.min.js的目录
var SCOPE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_';
var PREFIX = '';
var libsName = 'libs.min.js';
var initName = 'init.min.js';
var mainName = 'main.min.js';
var sourceProject = "wx_build1/jg_gameB_new";
var targetProject = "wx_build1/jg_gameB_obfuscator";
var define_ENV = -1;

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

        var scoreCheck = false;
        for(var i = 0;i<SCOPE.length;i++){
            var str = SCOPE[i];
            var tempScope = SCOPE.replace(str,"");
            var index = tempScope.indexOf(str);
            if(index != -1){
                console.error("----------------------替换混淆参数相同了：" + str,"不能相同请修改");
                scoreCheck = true;
            }
        }

        if(scoreCheck){
            throw Error("替换混淆参数相同了,设置失败");
            return;
        }

        if (mch && mch.length == 1) {
            let repl = 'var leading = init("' + SCOPE + '");';
            contents = contents.replace(mch[0], repl);
            console.error("替换混淆参数成功：" + mch[0] + '  替换为  ' + repl);
        } else {
            console.error("替换混淆参数出错：" + mch + "  " + (mch&&mch.length));
        }

        //替换 return ret;
        var reg = /(return )[a-zA-Z\$_+" ]{0,30}(ret;)/g;
        var mch = contents.match(reg);
        if (mch && mch.length == 1) {
            let repl = 'return ' + (PREFIX.length>0 ? '"'+PREFIX+'" + ' : "") + 'ret;';
            contents = contents.replace(mch[0], repl);
            console.error("替换前缀参数成功：" + mch[0] + "  替换为  " + repl);
        } else {
            console.error("替换前缀参数出错：" + mch + "  " + (mch&&mch.length));
        }

        console.error("================================替换参数================================\n");
        var bf = new Buffer.from( contents );
		file.contents = bf;		
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task('scope-modify', function () {
	var stream = gulp.src(
        'node_modules/uglify-js/lib/scope.js'
    )
        .pipe(modify_scope())
        .pipe(concat('scope.js'))
        .pipe(gulp.dest('node_modules/uglify-js/lib/'))
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
            if (scope != SCOPE) throw Error("当前包与混淆的参数设置不一致，无法打包，当前混淆的设置为："+ scope +"，当前包参数为："+ SCOPE);
        } else {
            throw Error("混淆的参数获取错误，无法打包");
        }

        var bf = new Buffer.from( contents );
		file.contents = bf;		
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task('scope-check', function () {
	var stream = gulp.src(
        'node_modules/uglify-js/lib/scope.js'
    )
        .pipe(check_scope())
	return stream;
});


/**文件处理*/
var modify_main = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = file.contents + "\nwindow.MainWX = MainWX;";
        var bf = new Buffer.from( contents );
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
        var bf = new Buffer.from( contents );
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
        var bf = new Buffer.from( contents );
		file.contents = bf;		
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};
/**文件压缩*/
var minify_main = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;

        console.info("minify文件："+ file.path);
        var global_defsParam = {DEBUG: false}
        if(define_ENV != -1){
            global_defsParam.ENV = define_ENV;
        }
        console.log("条件编译参数：",global_defsParam)
        var options = {
            compress: {
                // global_defs: global_defsParam,            //使用debug.html测试时不能打开
                // drop_debugger: true,
                // toplevel: true,
                // if_return: true,
                // join_vars: true,
                // booleans: true,
                // dead_code: true,
                // properties: true,
            },
            mangle: {
                // toplevel: true,
                // eval: true,
                // keep_fnames: false,
                // reserved: ["Main","MainWX","LayaGPU"],
                properties:{
                    // debug: true,
                    ///1.以p_|P_开头，以Cfg结尾；2.大写字母开头，某类词结尾；3. get,set,do方法
                    // regex: /(^((p|P|n|N)_.{3,100})|(.{2,100}Cfg)$)|(^[A-Z].*(Panel|Alert|Model|Mod|Ctrl|Ctl|Item|Itm|View|Mgr)$)|(^(get|set|do)_[A-Z].{3,100})$/,
                    // reserved: ["LayaGPU"],
                }
            },
            output: {
                beautify: false,  //微信小游戏、qq小游戏
                ascii_only:true
            },
            sourceMap: {
                includeSources:true,
                filename:"main.js"
            },
        };
        var mainres = uglifyjs.minify(contents, options);

        if (mainres.error) {
            throw Error("Main压缩报错："+ mainres.error);
        }

        if (mainres.code) {
            contents = mainres.code;// + "\n//@ sourceMappingURL=js/main.min.map";
        }

        if (mainres.map) {
            var mapbuf = Buffer.alloc(Buffer.byteLength(mainres.map), mainres.map);
            fs.writeFileSync(file.path.replace('.js', '.min.map'), mapbuf);
        }

        var bf = new Buffer.from( contents );
        file.contents = bf;
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};
var minify_libs = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;

        console.info("minify文件："+ file.path);

        var options = {
            sourceMap: {
                includeSources:true,
                filename: "libs.js"
            },
        };
        var libsres = uglifyjs.minify(contents, options);

        if (libsres.error) {
            throw Error("Libs压缩报错："+ libsres.error);
        }

        if (libsres.code) {
            contents = libsres.code;// + "\n//@ sourceMappingURL=js/main.min.map";
        }

        if (libsres.map) {
            var mapbuf = Buffer.alloc(Buffer.byteLength(libsres.map), libsres.map);
            fs.writeFileSync(file.path.replace('.js', '.min.map'), mapbuf);
        }

        var bf = new Buffer.from( contents );
        file.contents = bf;
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};
var minify_init = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;

        console.info("minify文件："+ file.path);

        var options = {
            compress: {
                global_defs: {DEBUG: false},
                drop_debugger: true,
                toplevel: false,
                if_return: true,
                join_vars: true,
                booleans: true,
                dead_code: false,  //没调用的函数
                properties: true,
            },
            mangle: {

                toplevel: false,
                eval: true,
                keep_fnames: false,
                reserved: ["loadingPanel", "loadingLaunch", "toProgress", "toAllProgress", "toEnterGame", "getJsURL", "reqRecordError", "enterGame", "getJsURL", "serverPanel"],
                properties:{
                    // debug: true,
                    //以p_|P_开头，以Cfg结尾，或者一些指定单词
                    //regex: /(^((p|P|n)_.{3,100})|(.{2,100}Cfg)$)|(^(assets)$|^(mesh)$|^(particle)$|^(behavior)$|^(component)$|^(common)$)/,
                    // regex: /(^((p|P|n|N)_.{1,100})$)/,
                }
            },
            output: {
                beautify: false,
                ascii_only:true
            },
        };
        var initres = uglifyjs.minify(contents, options);

        if (initres.error) {
            throw Error("Init压缩报错："+ initres.error);
        }

        if (initres.code) {
            contents = initres.code;// + "\n//@ sourceMappingURL=js/main.min.map";
        }

        if (initres.map) {
            var mapbuf = Buffer.alloc(Buffer.byteLength(initres.map), initres.map);
            fs.writeFileSync(file.path.replace('.js', '.min.map'), mapbuf);
        }

        var bf = new Buffer.from( contents );
        file.contents = bf;
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};
/**拷贝图片*/


//libs
gulp.task('libs-modify', function () {
    var stream = gulp.src([
            BIN + 'libs/laya.core.js',
            BIN + 'libs/laya.webgl.js',
            BIN + 'libs/laya.html.js',
            BIN + 'libs/laya.ui.js',
            BIN + 'libs/laya.d3.js',
            BIN + 'libs/laya.ani.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(DEST + "/"))
    return stream;
});
gulp.task('libs-mini', function () {
	var stream = gulp.src([
        DEST + '/libs.js',
    ])
        .pipe(minify_libs())
        .pipe(concat(libsName))
        .pipe(gulp.dest(DEST + PACK + "/libs/"))
	return stream;
});
gulp.task('init-cocos2d-js-min', function () {
    var stream = gulp.src([
        BIN + 'cocos2d-js-min.js'
    ])
        .pipe(js_minify())
        .pipe(gulp.dest(DEST + PACK + "/"))
    return stream;
});



gulp.task('init-cocos2d-protolib-min', function () {
    var stream = gulp.src([
        BIN + 'protolib.js'
    ])
        .pipe(minify_libs())
        .pipe(gulp.dest(DEST + PACK + "/myProtoJs/"))
    return stream;
});

gulp.task('init-cocos2d-main-min', function () {
    var stream = gulp.src([
        BIN + 'project.js'
    ])
        .pipe(minify_libs())
        .pipe(gulp.dest(DEST + PACK + "/myMainJs/"))
    return stream;
});

//init
gulp.task('init-modify', function () {
	var stream = gulp.src([
        BIN + 'init_wx_debug.js'
    ])
        .pipe(modify_init())
		.pipe(concat('init.js'))
        .pipe(gulp.dest(DEST + "/"))
	return stream;
});
gulp.task('init-mini', function () {
    var stream = gulp.src([
        DEST + '/init.js',
    ])
        .pipe(minify_init())
        .pipe(concat(initName))
        .pipe(gulp.dest(DEST + PACK + INIT_PATH))
    return stream;
});


//main
gulp.task('main-modify', function () {
    var stream = gulp.src([
            BIN + 'js/main.js'
    ])
        .pipe(modify_main())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(DEST + "/"))
    return stream;
});
gulp.task('main-mini', function () {
    var stream = gulp.src([
        DEST + '/main.js'
    ])
        .pipe(minify_main())
        .pipe(concat(mainName))
        .pipe(gulp.dest(DEST + PACK + "/subPackage/"))
    return stream;
});

gulp.task('main-cocos2d-main', function () {
    var stream = gulp.src([
        BIN + '/project.js'
    ])
        .pipe(js_minify())
        .pipe(gulp.dest(DEST + PACK + "/myMainJs/"))
    return stream;
});
//main.js备份
gulp.task('main-backup', function () {
	var stream = gulp.src([
        DEST + 'extends.js',
        BIN + 'js/main.js'
    ])
        .pipe(modify_main())
		.pipe(concat('main_debug.min.js'))
		.pipe(gulp.dest(DEST))
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
	var stream = gulp.src(DEST + PACK +"/**/*.*")
        .pipe(gulp.dest(BUILD + PACK +'/'));
	return stream;
});

//protobuf的json文件转成js文件输出
gulp.task("build-protobuf", function () {
    var stream = gulp.src(BIN+'assets/protobuf/client_pb.json')
        .pipe(concat('client_pb.js'))
        .pipe(protobuf())
		.pipe(gulp.dest(DEST + PACK + "/protobuf/"))
	return stream;
});


//测试打包main分包
gulp.task('test-build-main', function (cb) {
    sequence('set-param-a', 'scope-check', 'main-modify', 'main-mini', 'main-backup', cb)
});
gulp.task('test-build-init', function (cb) {
    sequence('set-param-a', 'scope-check', 'init-modify', 'init-mini', cb)
});
gulp.task('test-build-libs', function (cb) {
    sequence('set-param-a', 'scope-check', 'libs-modify', 'libs-mini', cb)
});





/**+++++++++++++++++++++++++++++++++++++++++++++++++微信小游戏--A包 start+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**A包参数*/
var set_param_a = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageA/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameA';
        INIT_PATH = '/libs';
        SCOPE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_';
        PREFIX = '';
        sourceProject = "wx_build1/jg_gameA_new";
        targetProject = "wx_build1/jg_gameA_obfuscator";
        define_ENV = 1,
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
    sequence('scope-A', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
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
        
        DEST = 'wx_dist/packageB/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameB';
        INIT_PATH = '/';
        SCOPE = 'cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ab';
        PREFIX = '$';
        sourceProject = "wx_build1/jg_gameB_new";
        targetProject = "wx_build1/jg_gameB_obfuscator";
        define_ENV = 1,
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
    sequence('scope-B', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});


/**-------------------------------------------------微信小游戏--B包  end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--C包  start-----------------------------------------------------------*/

/**C包参数*/
var set_param_C = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageC/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameC';
        INIT_PATH = '/';
        SCOPE = 'abcdghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ef';
        PREFIX = 'c$';
        sourceProject = "wx_build/jg_gameC_new";
        targetProject = "wx_build/jg_gameC_obfuscator";

        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-C', function () {
    var stream = gulp.src("")
        .pipe(set_param_C())
    return stream;
});

//设置混淆参数（C包）
gulp.task('scope-C', function (cb) {
    sequence('set-param-C', 'scope-modify', cb)
});

//打包所有（C包）
gulp.task('build-all-C', function (cb) {
    sequence('scope-C', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
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

        DEST = 'wx_dist/packageD/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameD';
        INIT_PATH = '/';
        SCOPE = 'abcdefijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_gh';
        PREFIX = 'd$';
        sourceProject = "wx_build1/jg_gameD_new";
        targetProject = "wx_build1/jg_gameD_obfuscator";

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

//设置混淆参数（D包）
gulp.task('scope-D', function (cb) {
    sequence('set-param-d', 'scope-modify', cb)
});

//打包所有（D包）
gulp.task('build-all-D', function (cb) {
    sequence('scope-D', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--D包  end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--E包  start-----------------------------------------------------------*/

/**E包参数*/
var set_param_e= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageE/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameE';
        INIT_PATH = '/';
        SCOPE = 'dtlkWiABoIbfJcYwDzegHRGqL$pMTrSjCKxnQyVZUENuhsPXmOFa_v';
        PREFIX = 'e$';
        sourceProject = "wx_build1/jg_gameE_new";
        targetProject = "wx_build1/jg_gameE_obfuscator";

        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-e', function () {
    var stream = gulp.src("")
        .pipe(set_param_e()
        )
    return stream;
});

//设置混淆参数（E包）
gulp.task('scope-E', function (cb) {
    sequence('set-param-e', 'scope-modify', cb)
});

//打包所有（E包）
gulp.task('build-all-E', function (cb) {
    sequence('scope-E', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--E包  end-----------------------------------------------------------*/




/**-------------------------------------------------微信小游戏--F包  start-----------------------------------------------------------*/

/**F包参数*/
var set_param_f= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageF/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameF';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_kl';
        PREFIX = 'F';
        sourceProject = "wx_build1/jg_gameF_new";
        targetProject = "wx_build1/jg_gameF_obfuscator";

        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-f', function () {
    var stream = gulp.src("")
        .pipe(set_param_f()
        )
    return stream;
});

//设置混淆参数（F包）
gulp.task('scope-F', function (cb) {
    sequence('set-param-f', 'scope-modify', cb)
});

//打包所有（F包）
gulp.task('build-all-F', function (cb) {
    sequence('scope-F', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--F包  end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--G包  start-----------------------------------------------------------*/

/**G包参数*/
var set_param_g= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageG/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameG';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_mn';
        PREFIX = 'G';
        sourceProject = "wx_build1/jg_gameG_new";
        targetProject = "wx_build1/jg_gameG_obfuscator";

        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-g', function () {
    var stream = gulp.src("")
        .pipe(set_param_g()
        )
    return stream;
});

//设置混淆参数（G包）
gulp.task('scope-G', function (cb) {
    sequence('set-param-g', 'scope-modify', cb)
});

//打包所有（G包）
gulp.task('build-all-G', function (cb) {
    sequence('scope-G', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--G包  end-----------------------------------------------------------*/



/**-------------------------------------------------微信小游戏--H包  start-----------------------------------------------------------*/

/**H包参数*/
var set_param_h= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageH/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameH';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_op';
        PREFIX = 'H_';
        sourceProject = "wx_build1/jg_gameH_new";
        targetProject = "wx_build1/jg_gameH_obfuscator";

        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-h', function () {
    var stream = gulp.src("")
        .pipe(set_param_h()
        )
    return stream;
});

//设置混淆参数（H包）
gulp.task('scope-H', function (cb) {
    sequence('set-param-h', 'scope-modify', cb)
});

//打包所有（H包）
gulp.task('build-all-H', function (cb) {
    sequence('scope-H', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--I包  end-----------------------------------------------------------*/
/**I包参数*/
var set_param_i= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageI/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameI';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_qr';
        PREFIX = 'I_';
        sourceProject = "wx_build1/jg_gameI_new";
        targetProject = "wx_build1/jg_gameI_obfuscator";

        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-i', function () {
    var stream = gulp.src("")
        .pipe(set_param_i()
        )
    return stream;
});

//设置混淆参数（I包）
gulp.task('scope-I', function (cb) {
    sequence('set-param-i', 'scope-modify', cb)
});

//打包所有（I包）
gulp.task('build-all-I', function (cb) {
    sequence('scope-I', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--I包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--J包  腾庚-缥缈仙剑H5 start-----------------------------------------------------------*/
/**J包参数*/
var set_param_j= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageJ/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameJ';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqruvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_st';
        PREFIX = 'J$';
        sourceProject = "wx_build1/jg_gameJ_new";
        targetProject = "wx_build1/jg_gameJ_obfuscator";

        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-j', function () {
    var stream = gulp.src("")
        .pipe(set_param_j()
        )
    return stream;
});

//设置混淆参数（J包）
gulp.task('scope-J', function (cb) {
    sequence('set-param-j', 'scope-modify', cb)
});

//打包所有（J包）
gulp.task('build-all-J', function (cb) {
    sequence('scope-J', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--J包  腾庚-缥缈仙剑H5 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--K包  start-----------------------------------------------------------*/
/**K包参数*/
var set_param_k= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageK/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameK';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_uv';
        PREFIX = 'k$';
        sourceProject = "wx_build1/jg_gamek_new";
        targetProject = "wx_build1/jg_gameK_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-k', function () {
    var stream = gulp.src("")
        .pipe(set_param_k()
        )
    return stream;
});

//设置混淆参数（K包）
gulp.task('scope-K', function (cb) {
    sequence('set-param-k', 'scope-modify', cb)
});

//打包所有（K包）
gulp.task('build-all-K', function (cb) {
    sequence('scope-K', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--K包  end-----------------------------------------------------------*/



/**-------------------------------------------------微信小游戏--l包  end-----------------------------------------------------------*/
/**L包参数*/
var set_param_l= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageL/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameL';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstuvyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_wx';
        PREFIX = 'L$';
        sourceProject = "wx_build1/jg_gameL_new";
        targetProject = "wx_build1/jg_gameL_obfuscator";
        define_ENV = 1,
        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-l', function () {
    var stream = gulp.src("")
        .pipe(set_param_l()
        )
    return stream;
});

//设置混淆参数（L包）
gulp.task('scope-L', function (cb) {
    sequence('set-param-l', 'scope-modify', cb)
});

//打包所有（L包）
gulp.task('build-all-L', function (cb) {
    sequence('scope-L', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--L包  end-----------------------------------------------------------*/




/**-------------------------------------------------微信小游戏--M包  end-----------------------------------------------------------*/
/**M包参数*/
var set_param_m= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageM/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameM';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWXYZ$_yz';
        PREFIX = 'M$';
        sourceProject = "wx_build1/jg_gameM_new";
        targetProject = "wx_build1/jg_gameM_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-m', function () {
    var stream = gulp.src("")
        .pipe(set_param_m()
        )
    return stream;
});

//设置混淆参数（M包）
gulp.task('scope-M', function (cb) {
    sequence('set-param-m', 'scope-modify', cb)
});

//打包所有（M包）
gulp.task('build-all-M', function (cb) {
    sequence('scope-M', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--M包  end-----------------------------------------------------------*/



/**-------------------------------------------------微信小游戏--N包  end-----------------------------------------------------------*/
/**N包参数*/
var set_param_n= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageN/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameN';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstuvwxyzCDEFGHIJKLMNOPQRSTUVWXYZ$_AB';
        PREFIX = 'n$';
        sourceProject = "wx_build1/jg_gameN_new";
        targetProject = "wx_build1/jg_gameN_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-n', function () {
    var stream = gulp.src("")
        .pipe(set_param_n()
        )
    return stream;
});

//设置混淆参数（N包）
gulp.task('scope-N', function (cb) {
    sequence('set-param-n', 'scope-modify', cb)
});

//打包所有（N包）
gulp.task('build-all-N', function (cb) {
    sequence('scope-N', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--N包  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--O包  盛也鬼剑豪HD end-----------------------------------------------------------*/
/**O包参数*/
var set_param_O = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageO/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameO';
        INIT_PATH = '/';
        SCOPE = 'orTkWDnVLUhpivxj_K$ylSqbFPtHRuszmCXOMceJYAINfaGwZQgBEd';// CD
        PREFIX = 'o$';
        sourceProject = "wx_build1/jg_gameO_new";
        targetProject = "wx_build1/jg_gameO_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-O', function () {
    var stream = gulp.src("")
        .pipe(set_param_O()
        )
    return stream;
});

//设置混淆参数（O包）
gulp.task('scope-O', function (cb) {
    sequence('set-param-O', 'scope-modify', cb)
});

//打包所有（O包）
gulp.task('build-all-O', function (cb) {
    sequence('scope-O', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--O包 盛也鬼剑豪HD end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--P包  柔情小师妹福利版 end-----------------------------------------------------------*/
/**P包参数*/
var set_param_P= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageP/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameP';
        INIT_PATH = '/';
        SCOPE = 'hqfg$PSBrYCUuvLel_NGmERtXnJpAdbizcMWTIwkHDsVKyFZQoOjxa'; //EF
        PREFIX = 'p$';
        sourceProject = "wx_build1/jg_gameP_new";
        targetProject = "wx_build1/jg_gameP_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-P', function () {
    var stream = gulp.src("")
        .pipe(set_param_P()
        )
    return stream;
});

//设置混淆参数（P包）
gulp.task('scope-P', function (cb) {
    sequence('set-param-P', 'scope-modify', cb)
});

//打包所有（P包）
gulp.task('build-all-P', function (cb) {
    sequence('scope-P', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--P包 柔情小师妹福利版 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Q包  战神荣耀online end-----------------------------------------------------------*/
/**Q包参数*/
var set_param_Q= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageQ/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameQ';
        INIT_PATH = '/';
        SCOPE = 'S_aRJVWkzbHLCGto$FTDjQmqNnlBIAXhuKPMregxsUfYiZpcyEOwvd'; //GH
        PREFIX = 'q$';
        sourceProject = "wx_build1/jg_gameQ_new";
        targetProject = "wx_build1/jg_gameQ_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Q', function () {
    var stream = gulp.src("")
        .pipe(set_param_Q()
        )
    return stream;
});

//设置混淆参数（Q包）
gulp.task('scope-Q', function (cb) {
    sequence('set-param-Q', 'scope-modify', cb)
});

//打包所有（Q包）
gulp.task('build-all-Q', function (cb) {
    sequence('scope-Q', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Q包 战神荣耀online end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--R包  王女异闻录online end-----------------------------------------------------------*/
/**R包参数*/
var set_param_R= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageR/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameR';
        INIT_PATH = '/';
        SCOPE = 'SQelMdTUiRoYpJLjcGzAvDBOHgIEtkXhbm$nPafwurWxFqZNCKV_sy'; //IJ
        PREFIX = 'r$';
        sourceProject = "wx_build1/jg_gameR_new";
        targetProject = "wx_build1/jg_gameR_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-R', function () {
    var stream = gulp.src("")
        .pipe(set_param_R()
        )
    return stream;
});

//设置混淆参数（R包）
gulp.task('scope-R', function (cb) {
    sequence('set-param-R', 'scope-modify', cb)
});

//打包所有（R包）
gulp.task('build-all-R', function (cb) {
    sequence('scope-R', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--R包 王女异闻录online end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--S包  王女异闻录HD end-----------------------------------------------------------*/
/**S包参数*/
var set_param_S= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageS/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameS';
        INIT_PATH = '/';
        SCOPE = 'dLlZh_NmuxtbqYcrakewsAy$OnVQgFEIpHXjRoiSBCPTzDGKvJfUWM'; //kl
        PREFIX = 's$';
        sourceProject = "wx_build1/jg_gameS_new";
        targetProject = "wx_build1/jg_gameS_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-S', function () {
    var stream = gulp.src("")
        .pipe(set_param_S()
        )
    return stream;
});

//设置混淆参数（S包）
gulp.task('scope-S', function (cb) {
    sequence('set-param-S', 'scope-modify', cb)
});

//打包所有（S包）
gulp.task('build-all-S', function (cb) {
    sequence('scope-S', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--S包  王女异闻录HD end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--T包  官方-苍月之戒 start-----------------------------------------------------------*/
/**T包参数*/
var set_param_T= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageT/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameT';
        INIT_PATH = '/';
        SCOPE = 'DYgTrsaWMEIOCN$dJxjZplt_AqbGXzmhiPBHvSUFVcfekwKoRQLyun'; //MN
        PREFIX = 't$';
        sourceProject = "wx_build1/jg_gameT_new";
        targetProject = "wx_build1/jg_gameT_obfuscator";
        define_ENV = 1,
        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-T', function () {
    var stream = gulp.src("")
        .pipe(set_param_T()
        )
    return stream;
});

//设置混淆参数（T包）
gulp.task('scope-T', function (cb) {
    sequence('set-param-T', 'scope-modify', cb)
});

//打包所有（T包）
gulp.task('build-all-T', function (cb) {
    sequence('scope-T', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--T包  官方-苍月之戒 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--u包  37-微微剑仙 start-----------------------------------------------------------*/
/**U包参数*/
var set_param_U= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageU/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameU';
        INIT_PATH = '/';
        SCOPE = 'WjtdbEOqAcRmQT$eKoSMZX_NzCLVxGlhvyauDsYHIgfwUJrPiBnkpF'; //OP
        PREFIX = 'u$';
        sourceProject = "wx_build1/jg_gameU_new";
        targetProject = "wx_build1/jg_gameU_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-U', function () {
    var stream = gulp.src("")
        .pipe(set_param_U()
        )
    return stream;
});

//设置混淆参数（V包）
gulp.task('scope-U', function (cb) {
    sequence('set-param-U', 'scope-modify', cb)
});

//打包所有（U包）
gulp.task('build-all-U', function (cb) {
    sequence('scope-U', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--u包  37-微微剑仙 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--V包  卡卡-六玄之苍 start-----------------------------------------------------------*/
/**V包参数*/
var set_param_V= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageV/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameV';
        INIT_PATH = '/';
        SCOPE = 'naUxDpQVyRXziqEmbPATKYWkN_$MZucHGIvljhfFgoBOLdSwsCtrJe'; //QR
        PREFIX = 'v$';
        sourceProject = "wx_build1/jg_gameV_new";
        targetProject = "wx_build1/jg_gameV_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-V', function () {
    var stream = gulp.src("")
        .pipe(set_param_V()
        )
    return stream;
});

//设置混淆参数（V包）
gulp.task('scope-V', function (cb) {
    sequence('set-param-V', 'scope-modify', cb)
});

//打包所有（V包）
gulp.task('build-all-V', function (cb) {
    sequence('scope-V', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--V包  卡卡-六玄之苍 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--W包  雷霆-仙侠决 start-----------------------------------------------------------*/
/**W包参数*/
var set_param_W= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageW/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameW';
        INIT_PATH = '/';
        SCOPE = 'vlLAxmZOe$_oKrGcdCJBXfwHgThVkQMPItaquRNbjFpYDSyWEsinUz'; //ST
        PREFIX = 'w$';
        sourceProject = "wx_build1/jg_gameW_new";
        targetProject = "wx_build1/jg_gameW_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-W', function () {
    var stream = gulp.src("")
        .pipe(set_param_W()
        )
    return stream;
});

//设置混淆参数（W包）
gulp.task('scope-W', function (cb) {
    sequence('set-param-W', 'scope-modify', cb)
});

//打包所有（W包）
gulp.task('build-all-W', function (cb) {
    sequence('scope-W', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--W包  雷霆-仙侠决 end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--X包  墨阳-御天下 start-----------------------------------------------------------*/
/**X包参数*/
var set_param_X= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageX/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameX';
        INIT_PATH = '/';
        SCOPE = 'b_shxnECOLfpPVQywiRtc$DoMrkBSZJWTqUGzaKdIgFAulNXYmevHj'; //UV
        PREFIX = 'x$';
        sourceProject = "wx_build1/jg_gameX_new";
        targetProject = "wx_build1/jg_gameX_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-X', function () {
    var stream = gulp.src("")
        .pipe(set_param_X()
        )
    return stream;
});

//设置混淆参数（X包）
gulp.task('scope-X', function (cb) {
    sequence('set-param-X', 'scope-modify', cb)
});

//打包所有（X包）
gulp.task('build-all-X', function (cb) {
    sequence('scope-X', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--X包  墨阳-御天下 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--Y包  点完-斗战仙魔 start-----------------------------------------------------------*/
/**Y包参数*/
var set_param_Y= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageY/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameY';
        INIT_PATH = '/';
        SCOPE = '_ceZXuPOsnmHBDUkaGwzLqKMfAvrCy$ThRixFYpoQJjtbNVgSEWldI'; //WX
        PREFIX = 'y$';
        sourceProject = "wx_build1/jg_gameY_new";
        targetProject = "wx_build1/jg_gameY_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Y', function () {
    var stream = gulp.src("")
        .pipe(set_param_Y()
        )
    return stream;
});

//设置混淆参数（Y包）
gulp.task('scope-Y', function (cb) {
    sequence('set-param-Y', 'scope-modify', cb)
});

//打包所有（Y包）
gulp.task('build-all-Y', function (cb) {
    sequence('scope-Y', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Y包  点完-斗战仙魔 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--  Z包  有一-萌神战姬 start-----------------------------------------------------------*/
/**Z包参数*/
var set_param_Z= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageZ/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ';
        INIT_PATH = '/';
        SCOPE = 'VUrspcRTNtbS_GquhlWOLdkyDnIQHwzEKmaZx$joJiBPMAXeFgvYCf'; //WX
        PREFIX = 'z$';
        sourceProject = "wx_build1/jg_gameZ_new";
        targetProject = "wx_build1/jg_gameZ_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z()
        )
    return stream;
});

//设置混淆参数（Z包）
gulp.task('scope-Z', function (cb) {
    sequence('set-param-Z', 'scope-modify', cb)
});

//打包所有（Z包）
gulp.task('build-all-Z', function (cb) {
    sequence('scope-Z', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Z包  有一-萌神战姬 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--  Z_1包  萌蛋-仙尘 start-----------------------------------------------------------*/
/**Z_1包参数*/
var set_param_Z_1= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageZ_1/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_1';
        INIT_PATH = '/';
        SCOPE = 'tkvjQuSVJWwMHEARhloYfXFdmZsKUNazGcTpOn_xIiDBbqCLerg$yP'; //WX
        PREFIX = 'a$';
        sourceProject = "wx_build1/jg_gameZ_1_new";
        targetProject = "wx_build1/jg_gameZ_1_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_1', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_1()
        )
    return stream;
});

//设置混淆参数（Z_1包）
gulp.task('scope-Z_1', function (cb) {
    sequence('set-param-Z_1', 'scope-modify', cb)
});

//打包所有（Z_1包）
gulp.task('build-all-Z_1', function (cb) {
    sequence('scope-Z_1', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Z1包   萌蛋-仙尘 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--  Z_2包  荀鹿-永夜君王 start-----------------------------------------------------------*/
/**Z_2包参数*/
var set_param_Z_2= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageZ_2/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_2';
        INIT_PATH = '/';
        SCOPE = 'CRjwTGoUtIeHMKFLDQZSbfphxW$ArEPJNanymkVzlgBi_uscXYdOqv'; //WX
        PREFIX = 'A$';
        sourceProject = "wx_build1/jg_gameZ_2_new";
        targetProject = "wx_build1/jg_gameZ_2_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_2', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_2()
        )
    return stream;
});

//设置混淆参数（Z_2包）
gulp.task('scope-Z_2', function (cb) {
    sequence('set-param-Z_2', 'scope-modify', cb)
});

//打包所有（Z_2包）
gulp.task('build-all-Z_2', function (cb) {
    sequence('scope-Z_2', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Z_2包  荀鹿-永夜君王 end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--  Z_3-666-多梦江湖_混淆 start-----------------------------------------------------------*/
/**Z_3包参数*/
var set_param_Z_3= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageZ_3/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_3';
        INIT_PATH = '/';
        SCOPE = 'MyiHSfVKkXFodPlJhCvRAGIUQWcnaTmesDzwqtupBZE_bYrN$xgjOL'; //WX
        PREFIX = 'b$';
        sourceProject = "wx_build1/jg_gameZ_3_new";
        targetProject = "wx_build1/jg_gameZ_3_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_3', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_3()
        )
    return stream;
});

//设置混淆参数（Z_3包）
gulp.task('scope-Z_3', function (cb) {
    sequence('set-param-Z_3', 'scope-modify', cb)
});

//打包所有（Z_3包）
gulp.task('build-all-Z_3', function (cb) {
    sequence('scope-Z_3', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Z_3-666-多梦江湖_混淆 end-----------------------------------------------------------*/


/**-------------------------------------------------微信小游戏--  Z_4-掌上-我和我的影子_混淆 start-----------------------------------------------------------*/
/**Z_4包参数*/
var set_param_Z_4= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageZ_4/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_4';
        INIT_PATH = '/';
        SCOPE = 'OJDpmCik_LrHYGXchyvAqdMaetzgsPEoWNFRjul$xVTIwUZnBSQbKf'; //WX
        PREFIX = 'B$';
        sourceProject = "wx_build1/jg_gameZ_4_new";
        targetProject = "wx_build1/jg_gameZ_4_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_4', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_4()
        )
    return stream;
});

//设置混淆参数（Z_4包）
gulp.task('scope-Z_4', function (cb) {
    sequence('set-param-Z_4', 'scope-modify', cb)
});

//打包所有（Z_4包）
gulp.task('build-all-Z_4', function (cb) {
    sequence('scope-Z_4', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Z_4-掌上-我和我的影子_混淆 end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--  Z_5-斯琪_主宰领域_混淆  start-----------------------------------------------------------*/
/**Z_5包参数*/
var set_param_Z_5= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageZ_5/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_5';
        INIT_PATH = '/';
        SCOPE = 'sMTXxcluEOUp_RqGgfJPtrNwkADhQvzBoCmYIyeVbLSKZn$FWajiHd'; //WX
        PREFIX = 'C$';
        sourceProject = "wx_build1/jg_gameZ_5_new";
        targetProject = "wx_build1/jg_gameZ_5_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_5', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_5()
        )
    return stream;
});

//设置混淆参数（Z_5包）
gulp.task('scope-Z_5', function (cb) {
    sequence('set-param-Z_5', 'scope-modify', cb)
});

//打包所有（Z_5包）
gulp.task('build-all-Z_5', function (cb) {
    sequence('scope-Z_5', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Z_5-斯琪_主宰领域_混淆  end-----------------------------------------------------------*/

/**-------------------------------------------------微信小游戏--  Z_888  start-----------------------------------------------------------*/
/**Z_888包参数*/
var set_param_Z_888= function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'wx_dist/packageZ_888/';
        BUILD = 'wx_build/';
        PACK = 'jg_gameZ_888';
        INIT_PATH = '/';
        SCOPE = 'sMTXxcluEOUp_RqGgfJPtrNwkADhQvzBoCmYIyeVbLSKZn$FWajiHd'; //WX
        PREFIX = 'C$99';
        sourceProject = "wx_build1/jg_gameZ_888_new";
        targetProject = "wx_build1/jg_gameZ_888_obfuscator";

        cb();

        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

gulp.task('set-param-Z_888', function () {
    var stream = gulp.src("")
        .pipe(set_param_Z_888()
        )
    return stream;
});

//设置混淆参数（Z_888包）
gulp.task('scope-Z_888', function (cb) {
    sequence('set-param-Z_888', 'scope-modify', cb)
});

//打包所有（Z_888包）
gulp.task('build-all-Z_888', function (cb) {
    sequence('scope-Z_888', 'scope-check', 'main-cocos2d-main', 'init-cocos2d-js-min',  'init-cocos2d-protolib-min', 'copy', cb)
});

/**-------------------------------------------------微信小游戏--Z_888-斯琪_主宰领域_混淆  end-----------------------------------------------------------*/
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


/**+++++++++++++++++++++++++++++++++++++++++++++++++VIVO小游戏--A包 start+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**A包参数*/
var set_vivo_param_a = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = 'vivo_dist/packageA/';
        BUILD = 'vivo_build/';
        PACK = 'jg_gameA/src';
        INIT_PATH = '/';
        SCOPE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_';
        PREFIX = '';
        libsName = 'libs_min.js';
        initName = 'init_min.js';
        mainName = 'main_min.js';
        sourceProject = "vivo_build1/jg_gameA_new";
        targetProject = "vivo_build1/jg_gameA_obfuscator";

        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task('set-vivo-param-a', function () {
    var stream = gulp.src("")
        .pipe(set_vivo_param_a())
    return stream;
});
//设置混淆参数（A包）
gulp.task('scope-vivo-A', function (cb) {
    sequence('set-vivo-param-a', 'scope-modify', cb)
});
//打包所有（A包）
gulp.task('build-vivo-all-A', function (cb) {
    sequence('set-vivo-param-a', 'scope-check', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'main-modify', 'main-mini', 'main-backup', 'build-protobuf', 'copy', cb)
});
/**-------------------------------------------------VIVO小游戏--A包 end-----------------------------------------------------------*/






















//QQ小游戏分包
var SPLIT1 = 0.33; //总文件数的SPLIT1分包1，
var SPLIT2 = 0.66; //总文件数的SPLIT1~SPLIT2为分包2，其他为分包3
var LIMIT = 6291456; //QQ小游戏包体限制为6M
var sortList = []; //排序的列表
var globalsJsNames = [];
var globalsImports = {}; //全局import
var subList1 = []; //分包1路径
var subList2 = []; //分包2路径
var subList3 = []; //分包3路径
/**编译TS*/
gulp.task("tsc", function () {
    var tsProject = gulpts.createProject(BUILD+'qq_tsconfig.json');
    var stream = tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest(DEST_JS +"js/"));
    return stream;
});

/**全局import处理*/
var global_imports = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        console.info("全局定义处理："+file.path);
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
                globalsImports[varname] = replace;
                // console.info("全局定义==========【"+ varname +"】======>【"+ replace +"】");
            }
        }

        var bf = new Buffer.from( contents );
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

        var src = SRC;
        var extension = ".ts";
        var mainjs = "main.js";
        var result = [];
        var stat = fs.statSync;
        var nextfind = function(url) {
            var fileList = fs.readdirSync(url);
            fileList.forEach(function(filepath) {
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
        var enumHelp = /\benum\b\s+((?:\w\.?)+)/;

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
        var allImportMap = {moduleMap:{}, classMap:{}, importMap:{}};
        var workspace = "./".replace(/\\/g, "/").replace(/\/$/, "");
        var fileNodes = [];
        for (var i = 0; i < allClassArr.length; i++) {
            var fileNode = new FileNode();
            fileNode.url = allClassArr[i].replace(SRC, DEST_JS+"js/src/").replace(".ts", ".js");
            fileNode.filename = fileNode.url.substring(fileNode.url.lastIndexOf("/")+1, fileNode.url.length);
            fileNode.jscontent = fs.readFileSync(fileNode.url, "utf-8"); //读取生成的js内容
            fileNodes.push(fileNode);
            var filecont = fs.readFileSync(allClassArr[i], "utf-8"); //读取内容
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
                if (idx1 >= 0 && idx2 >= 0 && idx2 >= idx1+3)
                    linecont = linecont.replace(linecont.substr(idx1, idx2+2), "");

                if (linecont != "") {
                    var tempmod = modeuleHelp.exec(linecont);
                    if(tempmod) {
                        tempmod = (tempmod[1] + ".").replace(/ /g, "");
                        if (moduleName != "" && moduleName != tempmod) {
                            throw Error("该文件有多处不相同命名空间的定义，一个文件只能有一个命名空间："+ tempmod +"，"+ fileNode.url);
                        } else {
                            moduleName = tempmod;
                            fileNode.moduleName = moduleName;
                            if (moduleName != "") {
                                var moduleNames = moduleName.split(".");
                                for (var k = 0; k < moduleNames.length; k++) {
                                    if (moduleNames[k] != "") {
                                        if (!parentMap.moduleMap[moduleNames[k]]) parentMap.moduleMap[moduleNames[k]] = {moduleMap:{}, importMap:{}, classMap:{}};
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
                    var enumClass = enumHelp.exec(linecont);
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
                            throw Error("全局Import需移到main.ts里："+importClass+"，"+fileNode.url);
                        }
                        var defineClassName = importClass[1].split(",");
                        importClass = importClass[2].split(",");
                        for (var p = 0; p < importClass.length; p++) {
                            var defi = defineClassName[p].replace(/ /g, "");
                            var inte = importClass[p].replace(/ /g, "");

                            if (globalsImports[defi] && globalsImports[defi] != inte) {
                                throw Error("局部定义的 import 与全局定义的 import 冲突：局部（import "+defi+" = "+inte+"），全局（import "+defi+" = "+globalsImports[defi]+"），"+fileNode.url);
                            }

                            var varHelp = new RegExp("var\\s*"+ defi +"\\s*=\\s*\\w.+"+ (inte.substring(inte.lastIndexOf(".")+1, inte.length)) +";");
                            var varClass = varHelp.exec(fileNode.jscontent);
                            if (varClass) { //编译后的js里还存在该定义表示有在使用，否则不加入
                                if (fileNode.parentClassList.indexOf(inte) == -1)
                                    fileNode.parentClassList.push(inte);
                                fileNode.importClassMap[defi] = inte;
                                fileNode.importClassNameMap[inte] = defi;
                                parentMap.importMap[defi] = inte;
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
                                    // console.info("未使用的定义："+inte+"，"+defi+"，"+fileNode.url+"，"+varHelp.input);
                                }
                            }
                        }
                    }
                    if (enumClass && enumClass[0]) {
                        if (linecont.indexOf("const") == -1) {
                            throw Error("enum 定义需要在 enum 前加上 const ："+enumClass+"，"+fileNode.url);
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
                            if ((linecont.indexOf("extends")!=-1 || linecont.indexOf("implements")!=-1) && linecont.indexOf("<T extends HeapElement")==-1 && linecont.indexOf("<T, E extends N_Entity<T>>")==-1) {
                                throw Error("继承匹配失败====" + linecont);
                            }
                        }
                    }
                }
            }
        }


        var mathError = function(parentClassPath, moduleName, url) {
            if (parentClassPath.indexOf("Configuration.") == -1 &&
                parentClassPath.indexOf("Protocols.") == -1 &&
                parentClassPath.indexOf("Laya.") == -1 &&
                parentClassPath.indexOf("laya.") == -1 &&
                parentClassPath.indexOf("HeapElement") == -1 &&
                parentClassPath.indexOf("IActor") == -1 &&
                parentClassPath.indexOf("Float32Array") == -1 &&
                parentClassPath.indexOf("N_BehavCond") == -1 &&
                parentClassPath.indexOf("QuickUseSpecialGoodsid") == -1)
            {
                throw Error("未匹配到定义："+moduleName+"，"+parentClassPath+"，"+url);
            }
        }
        var pushList = function(tempClassName, tempClassPath, fileNode, parentClassList_New) {
            if (parentClassList_New.indexOf(tempClassPath) == -1)
                parentClassList_New.push(tempClassPath);
        }


        for (var i = 0; i < fileNodes.length; i++) {
            var fileNode = fileNodes[i];

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
                                if (parentMap.importMap.hasOwnProperty(tempClassName)){ //全局Import
                                    var tempClassPath = parentMap.importMap[tempClassName];
                                    pushList(tempClassName, tempClassPath, fileNode, parentClassList_New);
                                    break;
                                } else {
                                    var isMatch = false;
                                    var moduleNames = fileNode.moduleName.split(".");
                                    for (var k = 0; k < moduleNames.length; k++) {
                                        if (moduleNames[k] != "" && parentMap.moduleMap[moduleNames[k]]) {
                                            if (parentMap.moduleMap[moduleNames[k]].importMap.hasOwnProperty(tempClassName)){
                                                var tempClassPath = parentMap.moduleMap[moduleNames[k]].importMap[tempClassName];
                                                pushList(tempClassName, tempClassPath, fileNode, parentClassList_New);
                                                isMatch = true;
                                                break;
                                            } else if (parentMap.moduleMap[moduleNames[k]].classMap.hasOwnProperty(tempClassName)){
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
                                var tempClassName = parentClassPath.substring(parentClassPath.lastIndexOf(".")+1, parentClassPath.length);
                                var tempClassPath = fileNode.moduleName.substring(0, fileNode.moduleName.indexOf(".")+1) + parentClassPath;
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

        var changeParentIndex = function(parentClassList, childNodeIndex, loop, urls) {
            loop++;
            if (loop > 100) {
                throw Error("死循环："+ urls);
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
                                changeParentIndex(parentNode.parentClassList, childNodeIndex, loop, urls+","+parentNode.url);
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
                                    changeParentIndex(parentNode.parentClassList, childNodeIndex, 1, childNode.url+","+parentNode.url);
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
                                        changeParentIndex(parentNode.parentClassList, childNodeIndex, 1, childNode.url+","+parentNode.url);
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
            if (fileItem){
                if (fileItem.indexOf(mainjs) != -1) {
                    mainItem = fileItem;
                } else {
                    sortList.push(fileItem);
                }
            }
        }
        if (mainItem) sortList.push(mainItem);

        var split1 = sortList.length*SPLIT1, split2 = sortList.length*SPLIT2;
        for (var i = 0; i < sortList.length; i++) {
            var jspath = sortList[i];
            if(i < split1){
                subList1.push(jspath);
                // console.info("分包【1】======="+i+"==="+jspath);
            } else if(i < split2){
                subList2.push(jspath);
                // console.info("分包【2】======="+i+"==="+jspath);
            } else {
                subList3.push(jspath);
                // console.info("分包【3】======="+i+"==="+jspath);
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
        for (var key in globalsImports) {
            var varname = key;
            var replace = globalsImports[key];

            if(contents.indexOf("var "+ varname +" = /** @class */function (") == -1 &&
                contents.indexOf("var "+ varname +" = /** @class */ (function (") == -1 &&
                contents.indexOf("var "+ varname +" = (function (") == -1){
                var reg46 = new RegExp("(?<!((['\".\/_0-9a-zA-Z])|(var )|(function )))("+varname+")((?!(['\"\/_0-9a-zA-Z])))", "g");
                var match46 = contents.match(reg46);
                if (match46 && match46.length > 0) {
                    contents = contents.replace(reg46, replace);
                    // console.info("2==========【"+ varname +"】======【"+ match46 +"】======>【"+ replace +"】");
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
                    var match44 = array[array.length-1].match(reg44);
                    if(!match44 || match44.length==0){ //首字符不是大写，不是Class
                        // "var XXX = ******;"   修加为： "var XXX = window.XXX = ******;";
                        var classname = varname;
                        var classreplace = match4[i].replace("var "+classname+" = ", "var "+classname+" = window."+classname+" = ");
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
                var replace = "var "+varname+" = window."+varname+";";
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
				var replace = match1[i].replace(" = {}));", " = window."+varname+" = {}));").replace("||", "|| window."+varname+" ||");
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
				var replace = match11[i].replace("={}));", "=window."+varname+"={}));").replace("||", "||window."+varname+"||");
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
                var replace = match2[i].replace(" = /** @class */function (", " = window."+classname+" = /** @class */function (");
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
                var replace = match21[i].replace(" = /** @class */ (function (", " = window."+classname+" = /** @class */ (function (");
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
                var replace = match22[i].replace(" = (function (", " = window."+classname+" = (function (");
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


        var bf = new Buffer.from( contents );
		// var bf = new Buffer( contents );
		file.contents = bf;		
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

/**文件压缩*/
var qq_minify = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;

        console.info("minify文件："+ file.path);

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
            throw Error("压缩报错："+ mainres.error);
        }

        if (mainres.code) {
            contents = mainres.code;// + "\n//@ sourceMappingURL=js/main.min.map";
        }

        if (mainres.map) {
            var mapbuf = Buffer.alloc(Buffer.byteLength(mainres.map), mainres.map);
            fs.writeFileSync(file.path.replace('.extends.js', '.min.map'), mapbuf);
        }

        var bf = new Buffer.from( contents );
        if (bf.byteLength >= LIMIT) {
            throw Error("分包超过QQ小游戏6M包体限制："+ (bf.byteLength/1024/1024)+"M");
        }
        file.contents = bf;
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};


gulp.task('sort-files', function () {
    var stream = gulp.src([
        DEST+'extends.js'
    ])
        .pipe(sort_files())
        .pipe(gulp.dest(DEST))
    return stream;
});
gulp.task('global-imports', function () {
    var stream = gulp.src([
        SRC+'main.ts',
        SRC+'ui/layaUI.max.all.ts'
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
		DEST+'extends.js',  //添加继承代码
        DEST+'sub1.js'
    ])
        .pipe(concat('sub1.extends.js'))
		.pipe(gulp.dest(DEST))
	return stream;
});
gulp.task('sub1-mini', function () {
    var stream = gulp.src([
        DEST+'sub1.extends.js'
    ])
        // .pipe(minifyes())
        .pipe(qq_minify())
        .pipe(concat('main.min.js'))
		.pipe(gulp.dest(DEST + PACK +"/subPackage1/"))
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
		DEST+'extends.js',  //添加继承代码
        DEST+'sub2.js'
    ])
        .pipe(concat('sub2.extends.js'))
		.pipe(gulp.dest(DEST))
	return stream;
});
gulp.task('sub2-mini', function () {
    var stream = gulp.src([
        DEST+'sub2.extends.js'
    ])
        // .pipe(minifyes())
        .pipe(qq_minify())
        .pipe(concat('main.min.js'))
		.pipe(gulp.dest(DEST + PACK + "/subPackage2/"))
	return stream;
});
//分包3
gulp.task('sub3-modify', function () {
    var stream = gulp.src(
        subList3
    )
        .pipe(modify_replace())
        .pipe(concat('sub3.js'))
        .pipe(gulp.dest(DEST))
    return stream;
});
gulp.task('sub3-extends', function () {
    var stream = gulp.src([
        DEST+'extends.js',  //添加继承代码
        DEST+'sub3.js',
        DEST+'window.js'
    ])
        .pipe(concat('sub3.extends.js'))
        .pipe(gulp.dest(DEST))
    return stream;
});
gulp.task('sub3-mini', function () {
    var stream = gulp.src([
        DEST+'sub3.extends.js'
    ])
    // .pipe(minifyes())
        .pipe(qq_minify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(DEST + PACK + "/subPackage3/"))
    return stream;
});
//分包处理
gulp.task('test-qq-package', function (cb) {
	sequence('set-qq-param-a', 'global-imports', 'sort-files', 'sub1-modify', 'sub1-extends', 'sub1-mini', 'sub2-modify', 'sub2-extends', 'sub2-mini', 'copy', cb)
});



/**+++++++++++++++++++++++++++++++++++++++++++++++++QQ小游戏--A包+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**不同A包体参数*/
var set_qq_param_a = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        
        DEST_JS = 'qq_dist/';
        DEST = 'qq_dist/packageA/';
        BUILD = 'qq_build/';
        PACK = 'jg_gameA';
        INIT_PATH = '/libs/';
        SCOPE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_';
        sourceProject = "qq_build/jg_gameA";
        targetProject = "qq_build/jg_gameA_new";

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
    sequence('set-qq-param-a', 'tsc', 'global-imports', 'sort-files', 'sub1-modify', 'sub1-extends', 'sub1-mini', 'sub2-modify', 'sub2-extends', 'sub2-mini', 'sub3-modify', 'sub3-extends', 'sub3-mini', 'init-modify', 'init-mini', 'libs-modify', 'libs-mini', 'build-protobuf', 'copy', cb)
});
/**-------------------------------------------------QQ小游戏--A包-----------------------------------------------------------*/






























//马甲包文件名重命名映射表
var filesMap = {
    "libs": "liwbs",
    "game.js": "liwbs/mawqein.js",
    "index.js": "liwbs/insdfdex.js",
    "init.min.js": "liwbs/intweol.js",
    "libs/dom.js": "liwbs/ddwdom.js",
    "libs/dom_parser.js": "liwbs/ddweparsercf.js",
    "libs/laya.wxmini.js": "liwbs/layawewwx.js",
    "libs/libs.min.js": "liwbs/liewfbs.js",
    "libs/md5.min.js": "liwbs/mdfive.js",
    "libs/sax.js": "liwbs/sawewdx.js",
    "libs/weapp-adapter.js": "liwbs/wxadawew.js",
    "libs/zlib.js": "liwbs/zipsjdwe.js",
    "wxsdk/wx_aksdk.js": "wxsdk/wxdfwsdk.js",
    "wxsdk/helper.js": "wxsdk/wxfdehelp.js",

    "protobuf": "proaf",
    "protobuf/client_pb.js": "proaf/clewepb.js",
    "protobuf/protobuf.js": "proaf/progtrbuf.js",

    "subPackage": "mawin",
    "subPackage/main.min.js": "mawin/maisdn.js",
};
var pfFlag = "wx";
var globleKeys = ["$b", "$c", "b", "B_"];  //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀
var identifiersObfuscatorArray = [];  //混淆用到的标识符
var arrIndex = 0;  //数组索引
var globleArrs = [];  //抽取的字符串数组，生成压缩文件
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
            "case",	"catch", "char", "class", "const",
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
            "Infinity",	"isFinite", "isNaN", "isPrototypeOf", "length",
            "Math", "NaN", "name", "Number", "Object",
            "prototype", "String", "toString", "undefined",	"valueOf",
            
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
            '_easingFunction', '_interpolationFunction', 'stopChainedTweens','getLeftTime', 'repeatDelay', 'setInterrupt', 
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


        var ui = fs.readFileSync("../../client/src/ui/layaUI.max.all.ts", {encoding:"utf8"});
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


        var digits  = "0123456789";
        var identifiersRenameArray = [];
        var identifiersGlobleArray = [];
        identifiersObfuscatorArray = [];

        var perm = function(s, arr, pre) {
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
                        if (keys.indexOf(tmp) == -1 && globleKeys.indexOf(tmp) == -1 && arr.indexOf(tmp) == -1 && identifiersObfuscatorArray.indexOf(tmp) == -1 && identifiersGlobleArray.indexOf(tmp) == -1 && digits.indexOf(tmp.slice(0,1)) == -1) {
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
                perm(leading.slice(m, m+n), identifiersRenameArray, globleKeys[3]);
            }
        }

        if (identifiersRename.length > identifiersRenameArray.length) {
            throw new Error('全局变量映射随机字符过少  '+identifiersRename.length+'  '+identifiersRenameArray.length);
        }
        identifiersRenameMapStr = "";
        for (var i=0; i<identifiersRename.length; i++) {
            identifiersGlobleMap[identifiersRename[i]] = identifiersRenameArray[i];
            identifiersGlobleArray.push(identifiersRename[i]);
            identifiersGlobleArray.push(identifiersRenameArray[i]);
            identifiersRenameMapStr += identifiersRename[i] +":"+ identifiersRenameArray[i] +", ";
        }
        // console.info("全局变量映射关系："+ identifiersRenameMapStr);


        leading = "abcdefghijklmnopqrstuvwxyz$_0123456789";
        leading = leading.replace(globleKeys[2],'');
        for (var n = 1; n < 7; n++) { //字符数量
            for (var m = 0; m < leading.length; m++) {
                perm(leading.slice(m, m+n), identifiersObfuscatorArray, '');
            }
        }
        
        console.info("标识符生成："+ identifiersRenameArray.length + "  "+ identifiersObfuscatorArray.length);

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






/**AST处理（字符串提取，变量名替换）*/
var js_babel = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;
        console.info("字符串标识符处理："+ file.path);
        identifiersRenameStr += "\n\n\n\n============================"+ file.path +"\n";

        var arrayName = globleKeys[1];
        // var arrayElements = [];
        // var arrayDeclaration = babel_types.variableDeclaration("var", [babel_types.variableDeclarator(babel_types.identifier(arrayName), babel_types.arrayExpression(arrayElements)]);
        var arrayDeclaration = babel_types.variableDeclaration("var", [babel_types.variableDeclarator(babel_types.identifier(arrayName), babel_types.memberExpression(babel_types.identifier(pfFlag), babel_types.identifier(globleKeys[0])))]);



        //插件对象，可以对特定类型的节点进行处理
        var visitor = {
            StringLiteral(path) {  //代表处理 StringLiteral 节点 提取字符串
                // && !(path.parent && path.parent.type == "VariableDeclaration" && path.parent.parent && path.parent.parent.type == "VariableDeclarator" && path.parent.parent.id && path.parent.parent.id.name== "acfe")
                if (path.node.type == "StringLiteral") { //查找需要修改的叶子节点
                    var tempstr = path.node.value;
                    if (tempstr.length > 0 && tempstr.length < 100 && tempstr.indexOf("\n")==-1) {
                        // console.info(path.node.type +"   "+ path.node.value);
                        try {
                            var memberExpression = babel_types.memberExpression(babel_types.identifier(arrayName), babel_types.numericLiteral(arrIndex), true);
                            path.replaceWith(memberExpression);
                            // var element = babel_types.stringLiteral(tempstr);  //创建一个数组元素
                            // arrayElements.push(element);
                            globleArrs.push(tempstr);
                            arrIndex++;
                        } catch (error) {
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
            Program: {
                enter(path, state) {
                    // console.log('start processing this Program...');
                },
                exit(path, state) {
                    // console.log('end processing this Program!');
                    // console.info(path.node.type +"   "+ (path.node.body&&path.node.body.length));
                    if (path.node.body) {
                        path.node.body.unshift(arrayDeclaration);
                    }
                }
            }
        };


        //transform方法转换code，babel先将代码转换成ast，然后进行遍历，最后输出code
        var result = babel_core.transform(contents, {
            plugins:[
                {
                    visitor
                }
            ]
        });
        contents = result.code; //从AST还原成字符串


        var bf = new Buffer.from( contents );
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
            if(content) {
                fs.writeFileSync(targetProject + "/res/files.zip", content, {encoding:"utf8"});
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
gulp.task("build-js-babel",  function () {
    var stream = gulp
        .src(sourceProject+'/**/*.js')
        .pipe(js_babel())
        .pipe(gulp.dest(targetProject+"/"))
	return stream;
});
gulp.task("build-end-babel", function () {
    var stream = gulp
        .src(sourceProject+'/game.js')
        .pipe(end_babel())
        .pipe(gulp.dest(targetProject+"/"))
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
            plugins:[
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

            var sub2 = contents.slice(idx+spl.length, contents.length);
            var buf2 = Buffer.alloc(Buffer.byteLength(sub2), sub2);
            fs.writeFileSync('./qq_build/jg_gameA/subPackage1/main.min.js', buf2);
        } else {
			console.info("未找到libs的分隔符："+spl);
		}

        var bf = new Buffer.from( contents );
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
    var def_ids = {pathMap:{}, idMap:{}, varMap:{}, paramMap:{}};
    // {name1: {arr, path, map:{name2: {arr, obj:{}}}}}
    var def_mem_num = {};

    parse_VariableDeclaration_params(def_ids, params);
    parse_BlockStatement_body(path, def_ids, def_mem_num);

    console.info("代码："+ id, path.node.start, path.node.end);//, contents.substring(body.start, body.end).substring(0, 100));
    var str = "";
    for(var key1 in def_ids.paramMap) str += key1 + ", ";
    for(var key1 in def_ids.idMap) str += key1 + ", ";
    for(var key1 in def_ids.varMap) str += key1 + ", ";
    console.info("定义："+str);

    str = "";
    var def_func = function (obj) {
        for(var key in obj) {
            var item = obj[key];

            //本地定义，不替换
            if (!def_ids.paramMap.hasOwnProperty(key) && !def_ids.idMap.hasOwnProperty(key) && !def_ids.varMap.hasOwnProperty(key)) {
                // def_func(item.map);  //先替换子级

                if (item.arr.length >= 3) {
                    var idf;
                    var nam = item.name;
                    if (def_ids.pathMap[item.path]) {
                        idf = def_ids.pathMap[item.path].id;
                    } else if (item.init){
                        var copy_func = function (node5) {
                            var copy;
                            if (node5.type == "MemberExpression") {
                                copy = babel_types.memberExpression(copy_func(node5.object), copy_func(node5.property));
                            } else if (node5.type == "ThisExpression") {
                                copy = babel_types.thisExpression();
                            } else if (node5.type == "Identifier") {
                                copy = babel_types.identifier(node5.name);
                            } else {
                                console.info("replace_global_identifier  copy_func  object  type="+node1.object.name)
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
                                console.info("replace_global_identifier  def_func  type="+node1.type);
                            }
                        }
                        str += item.path +":"+ item.arr.length + ", ";
                        item.arr = [];
                    }
                }
            }
        }
    }
    def_func(def_mem_num);
    console.info("引用："+str);
}

var parse_VariableDeclaration_body = function (path, def_ids, def_mem_num) {
    for (var j = 0; j < path.node.declarations.length; j++) {
        var path1 = path.get("declarations."+j);
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
                        if (node2.type == "MemberExpression"){
                            if (node2.object.type == "MemberExpression") {
                                nam2 = init_func(node2.object, nam2);
                            } else if (node2.object.type == "ThisExpression") {
                                nam2 = (nam2 ? nam2+"." : "") + "this";
                            } else if (node2.object.type == "Identifier") {
                                nam2 = (nam2 ? nam2+"." : "") + node2.object.name;
                            } else {
                                console.info("     parse_VariableDeclaration_body  init_func  object  type="+node2.object.type)
                            }
                            nam2 = (nam2 ? nam2+"." : "") + node2.property.name;
                        } else if (node2.type == "ThisExpression"){
                            nam2 = (nam2 ? nam2+"." : "") + "this";
                        } else {
                            console.info("     parse_VariableDeclaration_body  init_func  type="+node2.type)
                        }
                        return nam2;
                    }
                    nam = init_func(node1.init, nam);
                    def_ids.pathMap[nam] = {id: node1.id, init:node1.init};
                    def_ids.idMap[node1.id.name] = nam;
                } else if (node1.init.type == "NewExpression" || node1.init.type == "BinaryExpression" || node1.init.type == "CallExpression" ||
                            node1.init.type == "ConditionalExpression" || node1.init.type == "UnaryExpression" || node1.init.type == "LogicalExpression" ||
                            node1.init.type == "ObjectExpression" || node1.init.type == "ArrayExpression" || node1.init.type == "FunctionExpression" ||
                            node1.init.type == "AssignmentExpression") {
                    def_ids.varMap[node1.id.name] = node1.init;
                    parse_Expression_type(node1.init, def_ids, def_mem_num, null, "parse_VariableDeclaration_body  declarations  index="+j+"  init  ");
                } else if (node1.init.type == "Identifier" || node1.init.type == "RegExpLiteral" || node1.init.type == "UpdateExpression" ||
                            node1.init.type == "StringLiteral" || node1.init.type == "NumericLiteral" || node1.init.type == "NullLiteral" || node1.init.type == "BooleanLiteral") {
                    def_ids.varMap[node1.id.name] = node1.init;
                } else {
                    def_ids.varMap[node1.id.name] = node1.init;
                    console.info("     parse_VariableDeclaration_body  declarations  index="+j+"  id  name="+node1.id.name+"  init  type="+(node1.init&&node1.init.type))
                }
            } else {
                console.info("     parse_VariableDeclaration_body  declarations  index="+j+"  id  type="+node1.id.type)
            }
        } else {
            console.info("     parse_VariableDeclaration_body  declarations  index="+j+"  type="+node1.type)
        }
    }
}
var parse_VariableDeclaration_params = function (def_ids, params) {
    for (var j = 0; j < params.length; j++) {
        var node1 = params[j];
        if (node1.type == "Identifier") {
            def_ids.paramMap[node1.name] = node1;
        } else {
            console.info("parse_VariableDeclaration_params  index="+j+"  id  type="+node1.type)
        }
    }
}
var parse_BlockStatement_body = function (path, def_ids, def_mem_num) {
    for (var i = 0; i < path.node.body.length; i++) {
        var path1 = path.get("body."+i);
        var node1 = path1.node;
        if (node1.type == "VariableDeclaration"){
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
            console.info("parse_BlockStatement_body  "+node1.type);
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
        console.info("parse_WhileStatement_body  "+path.node.body.type);
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
                parse_Expression_type(path.get("cases."+i+".test"), def_ids, def_mem_num, null, "parse_SwitchStatement_body  cases  index="+ i +"  ");
                for (var j = 0; j < path.node.cases[i].consequent.length; j++) {
                    parse_Expression_type(path.get("cases."+i+".consequent."+j), def_ids, def_mem_num, null, "parse_SwitchStatement_body  cases  index="+ i +"  consequent  index="+ j +"  ");
                }
            } else {
                console.info("parse_SwitchStatement_body  cases  index="+ i +"  type=" + path.node.cases[i].type);
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
        console.info("parse_ExpressionStatement_body  expression  "+node.expression.type);
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
            parse_Expression_type(path.get("arguments."+i), def_ids, def_mem_num, null, "parse_CallExpression_body  arguments  index="+ i +"  ");
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
            parse_Expression_type(path.get("arguments."+i), def_ids, def_mem_num, null, "parse_NewExpression_body  arguments  index="+ i + "  ");
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
            return {path: path2+"."+name1, map: obj1[name1].map};
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
        if (node.type == "VariableDeclaration"){
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
                parse_ElementExpression_body(path.get("elements."+i), def_ids, def_mem_num);
            }
        } else if (node.type == "ObjectExpression") {  //如：this.p_pLim = {};
            for (var i = 0; i < node.properties.length; i++) {
                parse_ElementExpression_body(path.get("properties."+i+".key"), def_ids, def_mem_num);
                parse_ElementExpression_body(path.get("properties."+i+".value"), def_ids, def_mem_num);
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
            console.info("     "+ else_val +"type="+ node.type);
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


        console.info("混淆提取文件："+ file.path +"  rate="+rate);
        

        var obfuscationResult = jsobfuscator.obfuscate(contents,
            {
                compact: true,  //紧凑的代码输出在一行上
                simplify: true,  //通过简化启用其他代码混淆
                controlFlowFlattening: false,  //包含混淆器选项的JS/JSON配置文件的名称。这些将被直接传递给CLI的选项覆盖，此选项对性能的影响最大为运行速度降低1.5倍
                controlFlowFlatteningThreshold: 0,  //转换将应用于任何给定节点的概率，此设置对于大代码量特别有用，因为大量的控制流转换会降低代码速度并增加代码大小
                stringArray: false,  //删除字符串文字并将其放置在特殊的数组中。例如，var m = "Hello World";将被替换为var m = _0x12c456[0x1];
                stringArrayEncoding: ['base64'],  //'none'（boolean）：不对stringArray值进行编码，'base64'（string）：stringArray使用编码值base64，'rc4'（string）：stringArray使用编码值rc4。比慢30-50％base64
                stringArrayThreshold: 0.1,  //您可以使用此设置来调整将字符串文字插入的可能性（从0到1）
                stringArrayIndexShift: false,  //为所有字符串数组调用启用附加索引移位
                // stringArrayWrappersCount: 2,
                // stringArrayWrappersChainedCalls: true,
                // stringArrayWrappersParametersMaxCount: 4,
                // stringArrayWrappersType: 'function',
                splitStrings: false,  //将文字字符串拆分为带有splitStringsChunkLength选项值长度的块
                splitStringsChunkLength: 1,  //设置splitStrings选项的块长度
                shuffleStringArray: false,  //随机stringArray排列数组项
                exclude: ['game.js'],  //文件名或glob，指示要从混淆中排除的文件
                reservedStrings: ['wx', 'qq', 'window', 'globle', 'document', 'GameGlobal', 'console', 'exports', 'require', 'module', '\\r', '\\w', '\\t', ']]>', '//', '<!--', '-->', '\\*', '\\?', '\\$', '\\^'],  //禁用字符串文字的转换，该文字与通过的RegExp模式匹配
                reservedNames: ['wx', 'qq', 'window', 'globle', 'document', 'GameGlobal', 'console', 'exports', 'require', 'module'],  //禁用混淆和标识符的生成，这些标识符与通过的RegExp模式匹配
                identifierNamesGenerator: "dictionary",  //mangled  dictionary  设置标识符名称生成器。dictionary：identifiersDictionary列表中的标识符名称，hexadecimal：标识符名称，例如 _0xabc123，mangled：短标识符的名称，如a，b，c，mangled-shuffled：与...相同，mangled但字母乱序
                identifiersDictionary: identifiersObfuscatorArray,  //为identifierNamesGenerator：dictionary选项设置标识符字典。字典中的每个标识符将在几种变体中使用，每个字符使用不同的大小写。因此，字典中标识符的数量应取决于原始源代码中的标识符数量。
                identifiersPrefix: globleKeys[2],  //为所有全局标识符设置前缀
                renameGlobals: true,  //使用声明启用对全局变量和函数名称的混淆
                renameProperties: false,  //启用属性名称的重命名
                numbersToExpressions: false,  //允许将数字转换为表达式
                disableConsoleOutput: true,  //控制台输出
                unicodeEscapeSequence: false, //允许启用/禁用字符串转换为Unicode转义序列
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

        var bf = new Buffer.from( contents );
		file.contents = bf;		
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};
gulp.task("build-libs-obfuscator", function () {
    var stream = gulp
        .src(targetProject+'/'+filesMap["libs"]+'/**/*.js')
        .pipe(js_obfuscator(1))
        .pipe(gulp.dest(targetProject+'/'+filesMap["libs"]))
	return stream;
});
gulp.task("build-protobuf-obfuscator", function () {
    var stream = gulp
        .src(targetProject+'/'+filesMap["protobuf"]+'/**/*.js')
        .pipe(js_obfuscator(1))
        .pipe(gulp.dest(targetProject+'/'+filesMap["protobuf"]))
	return stream;
});
gulp.task("build-subPackage-obfuscator", function () {
    var stream = gulp
        .src(targetProject+'/'+filesMap["subPackage"]+'/**/*.js')
        .pipe(js_obfuscator(1))
        .pipe(gulp.dest(targetProject+'/'+filesMap["subPackage"]))
	return stream;
});
gulp.task("build-workers-obfuscator", function () {
    var stream = gulp
        .src(targetProject+'/'+filesMap["workers"]+'/**/*.js')
        .pipe(gulp.dest(targetProject+'/'+filesMap["workers"]))
	return stream;
});
gulp.task("build-js-obfuscator", function () {
    var stream = gulp
        .src(targetProject+'/**/*.js')
        .pipe(js_obfuscator(1))
        .pipe(gulp.dest(targetProject+'/'))
	return stream;
});
gulp.task("build-end-obfuscator", function () {
    var stream = gulp
        .src(sourceProject+'/game.js')
        .pipe(gulp.dest(targetProject+'/'))
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

gulp.task('build-babel-obfuscator-MT1', function (cb) {
    sequence('build-identifier-MT1', 'build-js-babel', 'build-end-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator', cb)
});


//
gulp.task('build_rollup', function() {
    return gulp.src(BUILD+'jg_gameB/game2.js')
        .pipe(rollup({
            // any option supported by Rollup can be set here.
            input: BUILD+'jg_gameB/game2.js'
        }))
        .pipe(gulp.dest(BUILD+'jg_gameB/'))
});
gulp.task('build_webpack', function() {
    return gulp.src(BUILD+'jg_gameB/protobuf/protobuf2.js')
        .pipe(webpack({
            mode: "production",
            devtool: false,
            optimization: {
                minimize: false,
            },
            entry: BUILD+'jg_gameB/protobuf/protobuf2.js',
            output: {
                path: path.resolve(__dirname, BUILD+'jg_gameB/protobuf/'),
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
        .pipe(gulp.dest(BUILD+'jg_gameB/'))
});




var randomstr1 = function (){
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
        var leading1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_";
        // var split1Index = Math.floor(Math.random()*(leading1.length+1));
        // var split1Str = leading1[split1Index];
        // leading1 = leading1.replace(split1Str,"")
        // var split2Index = Math.floor(Math.random()*(leading1.length+1));
        // var split2Str = leading1[split2Index];
        // leading1 = leading1.replace(split2Str,"")
        var str = shuffle(Array.from(leading1)).join("");
        console.log("SOCRE:",str, "长度:"+str.length," 请对比下是否和其他包相同，如果相同，请重新生成")
        cb();
        this.emit("data", file);

    }

    // 不处理end 使用默认的end
    return through.obj(onFile)
}

gulp.task('生成混淆SCOPE', function () {
    var sourceUrl = BUILD+ PACK;
    return gulp.src("")
        .pipe(randomstr1())
        .pipe(gulp.dest(""));
})

