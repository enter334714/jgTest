var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var babel_core = require('babel-core');
var babel_types = require('babel-types');
var babel_template = require('babel-template');
var babel_generate = require('babel-generator').default;
var babel_traverse = require('babel-traverse').default;
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
var babel_parse = require("@babel/parser");

/**AST处理 babel-core（字符串提取，变量名替换）//临时测试用的*/
var babel_core_test = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;
        console.info("AST测试：" + file.path);
        //插件对象，可以对特定类型的节点进行处理
        var visitor = {
            StringLiteral(path) {  //代表处理 StringLiteral 节点 提取字符串


                // // && !(path.parent && path.parent.type == "VariableDeclaration" && path.parent.parent && path.parent.parent.type == "VariableDeclarator" && path.parent.parent.id && path.parent.parent.id.name== "acfe")
                if (path.node.type == "StringLiteral") { //查找需要修改的叶子节点
                    var tempstr = path.node.value;
                    var numericLiteral = babel_types.numericLiteral(0xff);
                    numericLiteral.extra = {rawValue:1,raw:"0xff"}
                    numericLiteral.raw = "0xff";
                    var memberExpression = babel_types.memberExpression(babel_types.identifier("as"), numericLiteral, true);

                    path.replaceWith(memberExpression);

                }
            },
            Identifier(path) {  //代表处理 Identifier 节点  全局变量名替换）
                // if (path.node.type == "Identifier") { //查找需要修改的叶子节点
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
                // }
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
            BinaryExpression(path){
                var node = path.node;
            },
            Program: {
                enter(path, state) {
                    console.log("enter:",path.type)
                    // console.log('start processing this Program...');
                },
                exit(path, state) {
                    console.log("exit:",path.type)
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

var babel_core_parse_traverse = function () {
    function onFile(file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
            return cb();
        }
        var contents = "" + file.contents;
        const astContents = babel_parse.parse(contents);
        console.info("AST测试-parse-traverse：" + file.path);
        var visitor = {

            //条件运算符 var a = b?true:false
            //interface ConditionalExpression {
            //     type: 'ConditionalExpression';
            //     test: Expression;
            //     consequent: Expression;
            //     alternate: Expression;
            // }
            ConditionalExpression(path){


                // 把 a = m?11:22; 转成 m ? a = 11 : a = 22;  var a =  m?11:22;不行
                var test = path.node.test;
                var consequent = path.node.consequent;
                var alternate = path.node.alternate;
                var parentPath = path.parentPath;
                //是否是赋值表达式
                if(babel_types.isAssignmentExpression(parentPath)){
                    var operator = parentPath.node.operator;
                    var left = parentPath.node.left;
                    if (operator === '='){
                        consequent = babel_types.AssignmentExpression('=', left, consequent);
                        alternate = babel_types.AssignmentExpression('=', left, alternate);
                        parentPath.replaceWith(babel_types.ConditionalExpression(test, consequent, alternate))
                    }
                }
            },
            StringLiteral(path) {  //代表处理 StringLiteral 节点 提取字符串
                console.log("path.type:",path.type);
              if (path.node.type == "StringLiteral") { //查找需要修改的叶子节点
                    var tempstr = path.node.value;
                  //
                        //替换为一个表达式
                  //   var memberExpression = babel_types.memberExpression(babel_types.identifier("as"), babel_types.binaryExpression("^", babel_types.numericLiteral(11), babel_types.numericLiteral(0)) , true);
                  // path.get('extra').remove();
                  // if(tempstr)
                  var value = 16;

                  var numericLiteral = babel_types.numericLiteral(value);
                  // numericLiteral.extra = {rawValue:value,raw:hexValue}
                  // numericLiteral.raw = hexValue;


                  var memberExpression = babel_types.memberExpression(babel_types.identifier("as"),numericLiteral , true);
                    path.replaceWith(memberExpression);

                }
            },
            NumericLiteral(path){
                // path.value = 0xff;
                var hexValue = "0x"+path.node.value.toString(16);
                path.node.extra = {raw:hexValue,rawValue:path.node.value};
                // path.node.raw = "0xff";
                // path.extra = {rawValue:0xff,raw:"0xff"}
                // path.raw = "0xff";
                // path.replaceWith(path);
              // console.log("pathNode：",path.node);

            },
            Identifier(path) {  //代表处理 Identifier 节点  全局变量名替换）
1

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
            BinaryExpression(path){

            },
            FunctionDeclaration(path) {
                // path.scope.dump();

                var node = path.node;
                var id = path.node.id;
                var binding = path.scope.parent.getBinding(id.name);

                if (!binding || binding.constantViolations.length > 0) {
                    return;
                }

                if (binding.referencePaths.length === 0) {
                    path.remove();
                }
            },
            Program: {
                enter(path) {
                    console.log("enter:",path.type)
                    // console.log('start processing this Program...');
                },
                exit(path) {
                    console.log("exit:",path.type)
                    // console.log('end processing this Program!');
                    // console.info(path.node.type +"   "+ (path.node.body&&path.node.body.length));
                    // if (path.node.body) {
                    //     path.node.body.unshift(arrayDeclaration);
                    // }
                }
            }
        };


        babel_traverse(astContents,visitor);
        var code = babel_generate(astContents,{
            auxiliaryCommentBefore:"这是一个开始注释", //可选字符串，在输出文件的开始添加块注释
            auxiliaryCommentAfter:"这是一个结束注释", //可选字符串，在输出文件的末尾添加块注释
            comments:false,//输出中是否包含注释
            compact:false,
            // minified:true, //输出是否被压缩
        });
        // code.code = "var a = as[0xff]"
        console.log("code:",code.code);
         var bf = new Buffer.from(code.code);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }
    // 不处理end 使用默认的end
    return through.obj(onFile);
};

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
                identifiersDictionary: ["ab","bc"],  //为identifierNamesGenerator：dictionary选项设置标识符字典。字典中的每个标识符将在几种变体中使用，每个字符使用不同的大小写。因此，字典中标识符的数量应取决于原始源代码中的标识符数量。
                identifiersPrefix: "&hd",  //为所有全局标识符设置前缀
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
                // stringArrayIndexesType: [
                //     'hexadecimal-number'
                // ],

            }
        );
        contents = obfuscationResult.getObfuscatedCode();

        var bf =
            new Buffer.from(contents);
        file.contents = bf;
        cb();
        this.emit("data", file);
    }

    // 不处理end 使用默认的end
    return through.obj(onFile);
};

//测试用
gulp.task("AST-TEST-使用babel-core", function () {
    var sourceUrl = "../../client/wx_build/jg_gameMT1_new1";
    var stream = gulp
        .src(sourceUrl + '/game.js')
        .pipe(babel_core_test())
        .pipe(gulp.dest(sourceUrl + "/ast/"))
    return stream;
});

//测试用
gulp.task("AST-TEST-使用-parser-traverse", function () {
    var sourceUrl = "../../client/wx_build/jg_gameMT1_new1";
    var stream = gulp
        .src(sourceUrl + '/game.js')
        .pipe(babel_core_parse_traverse())
        .pipe(gulp.dest(sourceUrl + "/ast/"))
    return stream;
});

//清空发布目录
gulp.task('CLEAN-清空发布目录', function () {
    var sourceUrl = "../../client/wx_build/jg_gameMT1_new1/ast";
    var stream = gulp.src(sourceUrl)
        .pipe(clean({
            force: true
        }))
    return stream;
});

gulp.task("test-obfuscator", function () {
    var sourceUrl = "../../client/wx_build/jg_gameMT1_new1";
    var stream = gulp
        .src(sourceUrl + '/game.js')
        .pipe(js_obfuscator(1))
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




