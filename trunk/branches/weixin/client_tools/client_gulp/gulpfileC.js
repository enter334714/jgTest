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

// var requirejs = require('gulp-requirejs');
// var webpack = require('webpack-stream');
// var rollup = require('gulp-rollup');
// var sourcemaps = require('gulp-sourcemaps');
// var convertEncoding = require('gulp-convert-encoding');

var SRC = '../../client/src/'; //路径
var BIN = '../../client/bin/'; //路径
var DEST = '../../client/wx_dist/packageC'; //路径自行设置
var DEST_JS = '../../client/wx_dist/'; //路径
var BUILD = '../../client/wx_build/'; //路径
var PACK = 'jg_gameC'; //项目名
var INIT_PATH = ''; //init.min.js的目录
var SCOPE = 'abcdghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ef';
var PREFIX = '';
var sourceProject = "../../client/wx_build/jg_gameC_new";
var targetProject = "../../client/wx_build/jg_gameC_obfuscator";


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


/**+++++++++++++++++++++++++++++++++++++++++++++++++微信小游戏--C包 start+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**C包参数*/
var set_param_c = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }

        DEST = '../../client/wx_dist/packageC/';
        BUILD = '../../client/wx_build/';
        PACK = 'jg_gameC';
        INIT_PATH = '/';
        SCOPE = 'cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_ef';
        PREFIX = 'c$';
        sourceProject = "../../client/wx_build/jg_gameC_new";
        targetProject = "../../client/wx_build/jg_gameC_obfuscator";
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


gulp.task('set-param-c', function () {
    var stream = gulp.src("")
        .pipe(set_param_c())
    return stream;
});

//设置混淆参数（C包）
gulp.task('scope-C', function (cb) {
    sequence('set-param-c', 'scope-modify', cb)
});


//打包所有（C包）
gulp.task('build-all-C', function (cb) {
    sequence('set-param-c', 'scope-check', 'main-modify', 'main-map', 'main-backup', 'init-modify', 'init-backup', 'libs-min', 'libs-map', 'libs-backup', 'build-protobuf', 'copy', cb)
});

//混淆
gulp.task('build-babel-obfuscator-C', function (cb) {
    sequence("set-param-c","MT1_COPY",'MT1_COPY2',"MT1_build_minify",'build-identifier', 'build-js-babel-source-string-check', 'build-js-babel', 'build-libs-obfuscator', 'build-protobuf-obfuscator', 'build-subPackage-obfuscator', 'build-end-obfuscator','build-js-babel-target-string-check','build-js-babel-target-string',  'build-end-babel',"renameGamejs",'cleanGamejs',cb)
});
/**-------------------------------------------------微信小游戏--C包  end-----------------------------------------------------------*/



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
var globleKeys = ["$h", "p", "u", "$a", "a_"];//["$b", "$c", "b", "B_","$"];  //数组全局变量名、数组局部变量名、全局标识符设置前缀、替换全局标识符前缀
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
            'toCreate', 'toLogin', 'toLevelUp', 'toRealName', 'openShare', 'onShow', 'onShowData', 'onShowCallback', 'reqPlayerAskInfo',
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
            'actStateOfOperate', 'actStateOfOperateShare', 'actStateOfOperateService', 'actStateOfOperateCollect', 'actStateOfOperateHelper', 'getFcNdShow', 'getFcIsOpen', 'getWindowFcIsOpen', 'getWindowConfigById', 'getFcOpenTipById',
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

        var shuffle =  function (array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        };

        leading = shuffle(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789")).join("")
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


        leading = "abcdefghijklmnopqrstuvwxyz$_0123456789";
        leading = leading.replace(globleKeys[2], '');
        leading = shuffle(Array.from(leading)).join("")
        //生成混淆用的标识符
        for (var n = 1; n < 8; n++) { //字符数量
        //     var n = 7;
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
                    if(tempstr.indexOf(globleKeys[3])!=-1){//不需要提取
                        return;//
                    }

                    if(tempstr.indexOf("$")!=-1){
                        return;
                    }

                    // if(tempstr.indexOf(".png")!=-1 || tempstr.indexOf(".jpg")!=-1){//不需要提取
                    //     return;//
                    // }

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
                    var strLen = config.strLen || 0;
                    var reg = /[\u4e00-\u9fa5]+/g;
                    var isChinese = reg.test(tempstr);
                    if(!isChinese &&  tempstr.length < strLen){
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

                    if(tempstr.indexOf(globleKeys[3])!=-1){//不需要提取
                        return;//
                    }

                    if(tempstr.indexOf("$")!=-1){
                        return;
                    }

                    // if(tempstr.indexOf(".png")!=-1 || tempstr.indexOf(".jpg")!=-1){//不需要提取
                    //     return;//
                    // }

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
                    var reg = /[\u4e00-\u9fa5]+/g;
                    var isChinese = reg.test(tempstr);
                    var strLen = config.strLen || 0;
                    if(tempstr.length < strLen && !isChinese){
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
                                 // console.log("字符下标:",arrIndex)
                            }
                            // console.log("输出-------------：",1);
                            var numericLiteral = babel_types.numericLiteral(index);
                            // console.log("输出-------------：",2);
                            var hexValue = "0x"+index.toString(16);
                            numericLiteral.extra = {rawValue:index,raw:hexValue};
                            numericLiteral.raw = hexValue;
                            // console.log("输出-------------：",value,hexValue);
                            var memberExpression = babel_types.memberExpression(babel_types.identifier(arrayName), numericLiteral, true);
                            path.replaceWith(memberExpression);


                            if(add){
                                globleArrs.push(tempstr);
                                globleArrsObj[tempstr] = arrIndex;
                                arrIndex = globleArrs.length;
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
                    if(tempstr.indexOf(globleKeys[3])!=-1){//不需要提取
                        return;//
                    }
                    
                    if(tempstr.indexOf("$")!=-1){
                        return;
                    }
                    
                    // if(tempstr.indexOf(".png")!=-1 || tempstr.indexOf(".jpg")!=-1){//不需要提取
                    //     return;//
                    // }

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
                    var reg = /[\u4e00-\u9fa5]+/g;
                    var isChinese = reg.test(tempstr);
                    var strLen = config.strLen || 0;
                    if(tempstr.length < strLen && !isChinese)
                        return;
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
                                // console.log("字符下标:",arrIndex)
                            }

                            // console.log("输出-------------：",1);
                            var numericLiteral = babel_types.numericLiteral(index);
                            // console.log("输出-------------：",2);
                            var hexValue = "0x"+index.toString(16);
                            numericLiteral.extra = {rawValue:index,raw:hexValue};
                            numericLiteral.raw = hexValue;
                            // console.log("输出-------------：",value,hexValue);

                            var memberExpression = babel_types.memberExpression(babel_types.identifier(arrayName),numericLiteral, true);
                            path.replaceWith(memberExpression);
                            if(add){
                                globleArrs.push(tempstr);
                                globleArrsObj[tempstr] = arrIndex;
                                arrIndex = globleArrs.length;
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
                var p = path.resolve(targetProject + "/cres");
                try {
                    fs.statSync(p);
                } catch (e) {
                    fs.mkdirSync(p);
                }
                console.log("生成files.zip:",p);
                fs.writeFileSync(targetProject + "/cres/files.zip", content, {encoding: "utf8"});
                // fs.writeFileSync(targetProject + "/res/str.txt", str, {encoding:"utf8"});
            }
        });

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
        .src(BUILD + PACK +  '/game.js')
        .pipe(end_babel())
        // .pipe(gulp.dest(targetProject + "/"))
    return stream;
});
gulp.task('build-babel', function (cb) {
    sequence('build-identifier', 'build-js-babel', 'build-end-babel', cb)
});

var globleIdentifiers = {};


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
        .src(targetProject + '/game.js')
        .pipe(gulp.dest(targetProject + '/'))
    return stream;
});


//马甲包文件名重命名映射表
var filesMap = {
    //extractStr是否提取字符串，count 提取出现大于等于的且字符串长度大于strLen
    "libs": {url:"ccclibs"},
    "game.js": {url:"ccclibs/cccgame.js",extractStr:true,count:1,strLen:3},
    "libs_game.js": {url:"ccclibs/game.js",extractStr:true,count:1,strLen:3},
    "index.js": {url:"ccclibs/cccindex.js",extractStr:true,count:1,strLen:3},
    "init.min.js":  {url:"ccclibs/cccinitmin.js",extractStr:true,count:1,strLen:3},
    "libs/dom.js":  {url:"ccclibs/cccdom.js"},
    "libs/dom_parser.js":  {url:"ccclibs/cccdomparser.js"},
    "libs/laya.wxmini.js":  {url:"ccclibs/cccwxmini.js"},
    "libs/libs.min.js":  {url:"ccclibs/ccclibsmin.js",extractStr:false},
    "libs/md5.min.js":  {url:"ccclibs/cccmd5min.js"},
    "libs/sax.js":  {url:"ccclibs/cccsax.js"},
    "libs/weapp-adapter.js":  {url:"cccssss/cccweasaf.js"},
    "libs/zlib.js":  {url:"ccclibs/ccczlibs.js"},
    "libs/game.js":  {url:"ccclibs/game.js",extractStr:true,count:1,strLen:3},
    "wxsdk":  {url:"cccck"},
    "wxsdk/wx_aksdk.js":  {url:"cccck/cccsdk.js",extractStr:true,count:1,strLen:3},
    "wxsdk/helper.js":  {url:"cccck/ccchelp.js",extractStr:true,count:1,strLen:3},

    "protobuf":  {url:"cccccf"},
    "protobuf/client_pb.js":  {url:"cccccf/ccccleintpb.js",extractStr:true,count:5,strLen:3},
    "protobuf/protobuf.js":  {url:"cccccf/ccccBuff.js",extractStr:true,count:5,strLen:3},
    "protobuf/game.js":  {url:"cccccf/game.js",extractStr:true,count:5,strLen:3},

    "subPackage":  {url:"cccccccc"},
    "subPackage/main.min.js":  {url:"cccccccc/ccccccccmain.js",extractStr:true,count:1,strLen:3},
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

    "wxlogin_atlas/image_denglu_txtshenpi.png": {url:"ccclogin/b1c.png"},
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
    "wxlogin_atlas/image_login_init.png": {url:"bbblogin/b22c.png"},

    "wxeff_btn_atlas/0.png": {url:"cccwxeff/c100c.png"},
    "wxeff_btn_atlas/1.png": {url:"cccwxeff/c101c.png"},
    "wxeff_btn_atlas/2.png": {url:"cccwxeff/c102c.png"},
    "wxeff_btn_atlas/3.png": {url:"cccwxeff/c103c.png"},
    "wxeff_btn_atlas/4.png": {url:"cccwxeff/c104c.png"},
};

//混淆后的文件配置通过  filesMap 转化 "libs": {url:"ccclibs"},  -》"ccclibs":{url:"ccclibs"}
var targetFileMap = {"game_main.js":{url:"game_main.js",extractStr:false,count:5,strLen:13}};

var mt1Replace = {
    "./wxsdk/wx_aksdk.js": "../" + filesMap["wxsdk/wx_aksdk.js"].url,
    "./helper": "./" + "ccchelp",
    "./sax": "./cccsax",
    "./dom": "./cccdom",
    "client_pb.js": "ccccleintpb.js",
    "protobuf.js": "ccccBuff.js",
    "main.min.js": "ccccccccmain.js",
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



    "image_denglu_txtshenpi.png": "b1c.png",
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


    "0.png": "c100c.png",
    "1.png": "c101c.png",
    "2.png": "c102c.png",
    "3.png": "c103c.png",
    "4.png": "c104c.png",

}

//压缩
gulp.task('MT1_build_minify', function () {
    var sourceUrl =  sourceProject;// "../../client/wx_build/jg_gameMT1_new";
    var stream = gulp.src([sourceUrl + '/**/*.js', "!" + sourceUrl + '/**/ccccccccmain.js'])
        .pipe(js_minify())
        .pipe(gulp.dest(sourceUrl + '/'))
    return stream;
});

gulp.task('MT1_COPY', function () {
    var sourceUrl = "../../client/wx_build/"+ PACK //jg_gameMT1";
    var targetUrl =  sourceProject;
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
        .pipe(replace(/(import "libs\/weapp-adapter.js";)/g, function (match, p1, offset, string) {
            return "";
        }))
        .pipe(replace(/(subPackage\/game.js)|(subPackage\/main.min.js)|(libs\/md5.min.js)|(libs\/zlib.js)|(libs\/dom_parser.js)|(index.js)|(libs\/libs.min.js)|(libs\/laya.wxmini.js)|(init.min.js)|(game.js)/g, function (match, p1, offset, string) {
            var arr = filesMap[match].url.split("/");
            // console.log('Found ' + match + ' with param ' + p1,"替换为:", arr[arr.length-1]);
            if(arr[arr.length - 1].indexOf("cccweasaf")!=-1)
                debugger;
            var relative = this.file.relative.replace(/\\/g, "/");
            if(relative == "ccclibs/game.js"){
                return match;
            }
            console.log(" arr[arr.length - 1]:", arr[arr.length - 1])
            return arr[arr.length - 1];
        }))
        // .pipe(replace(/(res\/atlas\/wxlogin_atlas.png)|(res\/atlas\/wxeff_btn_atlas.png)|(res\/atlas\/wxloading_atlas.png)|(res\/atlas)/g, function (match, p1, offset, string) {
        //     var relative = this.file.relative.replace(/\\/g, "/");
        //     if (relative == "dddlibs/dddinitmin.js") { //登录界面才替换
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
        .pipe(replace(/(wxlogin_atlas)|(wxeff_btn_atlas)|(wxloading_atlas)|(btn_loding_abcelq0.png)|(btn_loding_abcelq1.png)|(image_loading_bg.jpg)|(image_loading_bg_bottom.jpg)|(image_loading_bg_bottom2.jpg)|(image_loading_bg_left.jpg)|(image_loading_bg_left2.jpg)|(image_loading_bg_right.jpg)|(image_loading_bg_right2.jpg)|(image_loading_bg_top.jpg)|(image_loading_bg_top2.jpg)|(image_loading_bg2.jpg)|(image_loding_bar0.png)|(image_loding_bar1.png)|(image_loding_bar02.png)|(image_loding_bar2.png)|(image_loding_bar3.png)|(image_login_point1.png)|(image_login_point2.png)|(image_login_point3.png)/g, function (match, p1, offset, string) {
            console.log('Found ' + match + ' with param ' + p1, "替换为:", mt1Replace[match]);
            if (!mt1Replace[match]) {
                console.log(1);
            }
            return mt1Replace[match];
        }))
        .pipe(replace(/(image_denglu_txtshenpi.png)|(image_login_loginbg.jpg)|(image_login_loginbg_bottom.jpg)|(image_login_loginbg_left.jpg)|(image_login_loginbg_right.jpg)|(image_login_loginbg_top.jpg)|(image_login_logo.png)|(image_login_notice.png)|(image_xuanfu_xfbg.png)|(btn_com_chuangback.png)|(btn_login_gonggao.png)|(btn_login_loginanniu.png)|(btn_login_yingsi.png)|(btn_xuanqu_anniuhuang.png)|(btn_xuanqu_anniulan.png)|(btn_xuanqu_quanniu.png)|(image_com_tuichu.png)|(image_login_changtong.png)|(image_login_fanmang.png)|(image_login_weihu.png)|(image_login_xuanqubg.png)|(image_login_init.png)/g, function (match, p1, offset, string) {
            if (!mt1Replace[match]) {
                console.log(1);
            }
            console.log('Found ' + match + ' with param ' + p1, "替换为:", mt1Replace[match]);
            return mt1Replace[match];
        }))
        .pipe(replace(/(0.png)|(1.png)|(2.png)|(3.png)|(4.png)/g, function (match, p1, offset, string) {
            var relative = this.file.relative.replace(/\\/g, "/");
            if (relative == "ccclibs/cccinitmin.js") { //登录界面才替换
                if (!mt1Replace[match]) {
                    console.log(1);
                }
                console.log('Found ' + match + ' with param ' + p1, "替换为:", mt1Replace[match]);
                return mt1Replace[match];
            }else{
                return match;
            }

        }))
        //报名需要修改
        .pipe(replace(/( name: 'main')/g, "name: 'cccccccc'"))
        .pipe(replace(/( name: 'probuf')/g, "name: 'cccccf'"))
        .pipe(through.obj(function (file, encode, cb) {
            // console.log("file:",file,"encode:",encode);
            if (file.relative == "game.json") {
                var result = file.contents.toString();
                var json = JSON.parse(result);
                console.log("修改game.json：修改分包")
                json.subpackages = [
                    {
                        "name": "ccclibs",
                        "root": "ccclibs/"
                    },
                    {
                        "name": "cccccf",
                        "root": "cccccf/"
                    },
                    {
                        "name": "cccccccc",
                        "root": "cccccccc/"
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
    var sourceUrl =  sourceProject;// "../../client/wx_build/jg_gameMT1_new";
    var targetUrl = targetProject;// "../../client/wx_build/jg_gameMT1_obfuscator";
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
    var targetUrl = targetProject;//"../../client/wx_build/jg_gameMT1_obfuscator";
    return gulp.src(targetUrl + "/game.js")
        .pipe(createRefuseFile())
        .pipe(gulp.dest(targetUrl + '/'));
});

//删除随机产生的辣鸡空文件
gulp.task('DEL_REFUSEFILE', function () {
    var targetUrl = targetProject;// "../../client/wx_build/jg_gameMT1_obfuscator";
    return gulp.src(targetUrl + "/game.js")
        .pipe(deleteRefuseFile())
        .pipe(gulp.dest(targetUrl + '/'));
});

var deleteRefuseFile = function () {
    function onFile(file, enc, cb) {
        var targetUrl =  targetProject;////"../../client/wx_build/jg_gameMT1_obfuscator";

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
        var targetUrl =  targetProject;// "../../client/wx_build/jg_gameMT1_obfuscator";

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







