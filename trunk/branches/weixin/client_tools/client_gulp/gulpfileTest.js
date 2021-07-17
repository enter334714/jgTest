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
                  var numericLiteral = babel_types.numericLiteral(0xff);
                  numericLiteral.extra = {rawValue:1,raw:"0xff"}
                  numericLiteral.raw = "0x1";
                  numericLiteral.raw = "0xff";

                  var memberExpression = babel_types.memberExpression(babel_types.identifier("as"),numericLiteral , true);
                    path.replaceWith(memberExpression);

                }
            },
            NumericLiteral(path){
                path.value = 0xff;
                path.node.extra = {rawValue:0xff,raw:"0xff"}
                path.node.raw = "0xff";
                path.extra = {rawValue:0xff,raw:"0xff"}
                path.raw = "0xff";
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
            minified:true, //输出是否被压缩
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

// gulp.task("build-libs-obfuscator", function () {
//
//     var stream = gulp
//         .src(targetProject+'/'+filesMap["libs"]+'/**/*.js')
//         .pipe(js_obfuscator(1))
//         .pipe(gulp.dest(targetProject+'/'+filesMap["libs"]))
//     return stream;
// });




