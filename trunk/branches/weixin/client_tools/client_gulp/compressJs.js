
var c = require('babel-core');
var fs = require("fs");
const path = require("path");

const variableName = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
var fileName = "test2.js"

module.exports = {
    createThisId(opts, n){
        var names = opts.variNames;
        if(n >= 3) return;//太长了，直接不考虑了
        var name = "z";
        var thisExpression, t = c.types;
        for (let i = 0; i < variableName.length; i++) {
            var key = "";
            for (let j = 0; j < n; j++) {
                key += variableName[i+j];
            } 
            if(names.indexOf(key) === -1){
                name = key;
                var id = t.identifier(key);
                var vari = t.VariableDeclarator(id, t.thisExpression());
                thisExpression = t.VariableDeclaration("var", [vari]);
                break;
            }
        }
        
        if(!thisExpression){
            thisExpression = this.createThisId(opts, n+1);
            // var x=this;
            // 替换后，不划算
            var nameLen = thisExpression.declarations[0].id.name.length;
            if(thisExpression && opts.count * 4 - nameLen * opts.count <= 11 + nameLen){
                return null;
            }
            console.log("多个字符：" + thisExpression.declarations[0].id.name);
        } 
        return thisExpression;
    },

    /**
     * 
     * @param {c.types.Statement[]} bodys 
     * @param {count, thisId, variNames} opts 
     * @returns 
     */
    replaceThisId(bodys, opts){
        if(opts.count < 3) return;
        var thisId = opts.thisId;
        var idx = 0;
        // if(!thisId){
            var thisExpression = this.createThisId(opts, 1);
            if(!thisExpression) return;
            thisId = thisExpression.declarations[0].id;
            bodys.unshift(thisExpression);
            opts.thisId = thisId;
            idx = 1;
        // }
        opts.replaceing = true;
        for (; idx < bodys.length; idx++) {
            var node = bodys[idx];
            var fun = this.parseFun[node.type];
            (fun && fun.call(this, node, opts, node));
        }
    },

    parseFunctionExpression(nodePath){
        // 调用函数体
        if(nodePath.container.type === "CallExpression") return;
        var rst = this.parseFunctionExpressionNode(nodePath.node, {count:0, thisId:null, variNames:[]});
        this.replaceThisId(nodePath.node.body.body, rst);
    },

    /**
     * @param node {c.types.FunctionExpression}
     * @returns {count, thisId, variNames}
    */
    parseFunctionExpressionNode(node, opts, parent){
        var fun = this.parseFun[node.body.type];
        var opts = (fun && fun.call(this, node.body, opts, node.body));
        return opts;
    },

    /**
     * @param {c.types.BlockStatement} statement 
     * @param {count, thisId, variNames} opts 
     */
    parseBlockStatement(statement, opts, parent){
        var bodys = statement.body, body;
        var idx = -1, hasThis = opts.thisId;
        for (let i = 0; i < bodys.length; i++) {
            body = bodys[i];
            var fun = this.parseFun[body.type];
            fun && fun.call(this, body, opts, body);
            if(!hasThis && idx === -1 && opts.thisId) idx = i;
        }
        // if(idx > 0){
        //     var t = bodys.splice(idx, 1);
        //     bodys.unshift(t[0]);
        // }
        return opts;
    },

    /**
     * @param {c.types.SequenceExpression} expression 
     * @param {count, thisId, variNames} opts 
     */
    parseSequenceExpression(expression, opts, parent){
        for (let i = 0; i < expression.expressions.length; i++) {
            var epxr = expression.expressions[i];
            var fun = this.parseFun[epxr.type];
            fun && fun.call(this, epxr, opts, epxr);
        }
    },

    /**
     * @param {c.types.ExpressionStatement} statement 
     * @param {count, thisId, variNames} opts 
     */
     parseExpressionStatement(statement, opts, parent){
        var expression = statement.expression, body;
        var fun = this.parseFun[expression.type];
        fun && fun.call(this, expression, opts, expression);
    },

    /**
     * @param expression {c.types.UpdateExpression}
     */
    parseUpdateExpression(expression, opts, parent){
        var fun = this.parseFun[expression.argument.type];
        fun && fun.call(this, expression.argument, opts, expression);
    },

    /**
     * @param {c.types.AssignmentExpression} expression 
     * @param {count, thisId, variNames} opts 
     * @returns 
     */
    parseAssignmentExpression(expression, opts, parent){
        var p = parent;
        function parseLeft(node, opt, parent){
            var fun = this.parseFun[node.type];
            fun && fun.call(this, node, opt, node);

            if(p.type === "VariableDeclarator" && node.type === "Identifier")
                opts.variNames.push(node.name);
        }

        function parseRight(node, opt, parent){
            var fun = this.parseFun[node.type];
            fun && fun.call(this, node, opt, node);
        }

        parseLeft.call(this, expression.left, opts, expression);
        parseRight.call(this, expression.right, opts, expression);
    },
    /**
     * @param {c.types.LogicalExpression} expression 
     * @param {count, thisId, variNames} opts 
     * @returns 
     */
    parseLogicalExpression(expression, opts, parent){
        function parseLeft(node, opt, parent){
            var fun = this.parseFun[node.type];
            fun && fun.call(this, node, opt, node);
        }

        function parseRight(node, opt, parent){
            var fun = this.parseFun[node.type];
            fun && fun.call(this, node, opt, node);
        }

        parseLeft.call(this, expression.left, opts, expression);
        parseRight.call(this, expression.right, opts, expression);
    },

     /**
     * @param {c.types.MemberExpression} expression 
     * @param {count, thisId, variNames} opts 
     * @returns 
     */
    parseMemberExpression(expression, opts, parent){
        var fun = this.parseFun[expression.object.type];
        fun && fun.call(this, expression.object, opts, expression);
    },

    /**
     * @param {c.types.CallExpression} expression 
     * @param {count, thisId, variNames} opts 
     * @returns 
     */
     parseCallExpression(expression, opts, parent){
        var fun = this.parseFun[expression.callee.type];
        fun && fun.call(this, expression.callee, opts, expression);

        var args = expression.arguments;
        for (let i = 0; i < args.length; i++) {
            var arg = args[i];
            fun = this.parseFun[arg.type];
            fun && fun.call(this, arg, opts, arg);
        }
    },

     /**
     * @param {c.types.ThisExpression} expression 
     * @param {count, thisId, variNames} opts 
     * @returns 
     */
    parseThisExpression(expression, opts, parent){
        if(opts.replaceing){
            parent.object = opts.thisId;
        }else{
            opts.count++;
            if(parent.type === "VariableDeclarator")
                opts.thisId = parent.id;
        }
    },

    /**
     * @param statement {c.types.ReturnStatement}
    */
    parseReturnStatement(statement, opts, parent){
        if(!statement.argument) return;
        var fun = this.parseFun[statement.argument.type];
        fun && fun.call(this, statement.argument, opts, statement);
    },

    /**
     * @param expression {c.types.NewExpression}
    */
     parseNewExpression(expression, opts, parent){
        if(!expression.arguments) return;
        var args = expression.arguments;
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            var fun = this.parseFun[arg.type];
            fun && fun.call(this, arg, opts, expression);
        }
    },

    /**
     * @param expression {c.types.if}
     */
    parseElseExpression(expression, opts, parent){

    },
    

    /**  
     * @param statement {c.types.VariableDeclaration} 
     * */
    parseVariableDeclarator(statement, opts, parent){
        if(!statement.init) return;
        var fun = this.parseFun[statement.init.type];
        fun && fun.call(this, statement.init, opts, statement);
        opts.variNames.push(statement.id.name);
    },
    /**  
     * @param statement {c.types.VariableDeclaration} 
     * */
    parseVariableDeclaration(statement, opts, parent){
        var decs = statement.declarations;
        var idx = -1, hasThis = opts.thisId;
        for (let i = 0; i < decs.length; i++) {
            var varDec = decs[i];
            var fun = this.parseFun[varDec.type];
            fun && fun.call(this, varDec, opts, varDec);
            if(varDec.init && varDec.init.object){
                fun = this.parseFun[varDec.init.object.type];
                fun && fun.call(this, varDec.init.object, opts, varDec);
            }
            if(!hasThis && idx === -1 && opts.thisId) idx = i;
        }
        // if(idx > 0){
        //     var t = decs.splice(idx, 1);
        //     decs.unshift(t[0]);
        // }
    },
    /**
     * @param {c.types.ForInStatement} statement 
     * @param {count, thisId, variNames} opts 
     */
    parseForInStatement(statement, opts, parent){
        var fun = this.parseFun[statement.right.type];
        fun && fun.call(this, statement.right, opts, statement);

        var fun = this.parseFun[statement.body.type];
        fun && fun.call(this, statement.body, opts, statement);
    },

    /**
     * 
     * @param {c.types.ForStatement} statement 
     * @param {*} opts 
     * @param {*} parent 
     */
    parseForStatement(statement, opts, parent){
        if(statement.init){
            var fun = this.parseFun[statement.init.type];
            fun && fun.call(this, statement.init, opts, statement);
        }

        if(statement.body){
            var fun = this.parseFun[statement.body.type];
            fun && fun.call(this, statement.body, opts, statement);
        }
        
        if(statement.update){
            var fun = this.parseFun[statement.update.type];
            fun && fun.call(this, statement.update, opts, statement);
        }

        if(statement.test){
            var fun = this.parseFun[statement.test.type];
            fun && fun.call(this, statement.test, opts, statement);
        }
    },

    /**
     * 
     * @param {c.types.WhileStatement} statement 
     * @param {*} opts 
     * @param {*} parent 
     */
    parseWhileStatement(statement, opts, parent){
        if(statement.test){
            var fun = this.parseFun[statement.test.type];
            fun && fun.call(this, statement.test, opts, statement);
        }

        if(statement.body){
            var fun = this.parseFun[statement.body.type];
            fun && fun.call(this, statement.body, opts, statement);
        }
    },

    /**
     * @param {c.types.IfStatement} statement 
     * @param {count, thisId, variNames} opts 
     */
     parseIfStatement(statement, opts, parent){
        var fun = this.parseFun[statement.test.type];
        fun && fun.call(this, statement.test, opts, statement);

        fun = this.parseFun[statement.consequent.type];
        fun && fun.call(this, statement.consequent, opts, statement);

        if(statement.alternate){
            fun = this.parseFun[statement.alternate.type];
            fun && fun.call(this, statement.alternate, opts, statement);
        }
    },

    /**
     * 各种运算符表达式
     * @param {c.types.BinaryExpression} expression 
     * @param {*} opts 
     * @param {*} parent 
     */
    parseBinaryExpression(expression, opts, parent){
        if(expression.left){
            var fun = this.parseFun[expression.left.type];
            fun && fun.call(this, expression.left, opts, expression);
        }

        if(expression.right){
            var fun = this.parseFun[expression.right.type];
            fun && fun.call(this, expression.right, opts, expression);
        }
    },

    /**
     * 
     * @param {c.types.ConditionalExpression} expression 
     * @param {*} opts 
     * @param {*} parent 
     */
    parseConditionalExpression(expression, opts, parent){
        if(expression.test){
            var fun = this.parseFun[expression.test.type];
            fun && fun.call(this, expression.test, opts, expression);
        }

        if(expression.alternate){
            var fun = this.parseFun[expression.alternate.type];
            fun && fun.call(this, expression.alternate, opts, expression);
        }

        if(expression.consequent){
            var fun = this.parseFun[expression.consequent.type];
            fun && fun.call(this, expression.consequent, opts, expression);
        }
    },

    /**
     * @param {c.types.UnaryExpression} statement 
     * @param {count, thisId, variNames} opts 
     */
     parseUnaryExpression(statement, opts, parent){
        var fun = this.parseFun[statement.argument.type];
        fun && fun.call(this, statement.argument, opts, statement);
    },

    createAccessFunction(node){
        var prototype = node.arguments[2];
        if(prototype.type === "ObjectExpression"){
            var getFun, setFun;
            for (let i = 0; i < prototype.properties.length; i++) {
                const n = prototype.properties[i];
                if(n.key.name === "set") setFun = n.value;
                else if(n.key.name === "get") getFun = n.value;
            }

            var type;
            if(node.arguments[0].type === "MemberExpression") type = c.types.numericLiteral(0);//非静态
            else type = c.types.numericLiteral(1);//静态
            var arguments = [
                type,
                node.arguments[0], //类名
                node.arguments[1], //属性名
            ];

            getFun ? arguments.push(getFun) : arguments.push(c.types.nullLiteral());
            setFun && arguments.push(setFun);
            return c.types.callExpression(c.types.identifier("_getset"), arguments);
        }
    },

    initParseFn(){
        this.parseFun = {
            "ReturnStatement" : this.parseReturnStatement,
            "AssignmentExpression" : this.parseAssignmentExpression,
            "VariableDeclarator" : this.parseVariableDeclarator,
            "VariableDeclaration" : this.parseVariableDeclaration,
            "ThisExpression" : this.parseThisExpression,
            "MemberExpression" : this.parseMemberExpression,
            "LogicalExpression" : this.parseLogicalExpression,
            "ForInStatement" : this.parseForInStatement,
            "BlockStatement" : this.parseBlockStatement,
            "IfStatement" : this.parseIfStatement,
            "CallExpression" : this.parseCallExpression,
            "ExpressionStatement" : this.parseExpressionStatement,
            "UnaryExpression" : this.parseUnaryExpression,
            "SequenceExpression" : this.parseSequenceExpression,
            "NewExpression" : this.parseNewExpression,
            "ConditionalExpression" : this.parseConditionalExpression,
            "ForStatement" : this.parseForStatement,
            "BinaryExpression" : this.parseBinaryExpression,
            "WhileStatement" : this.parseWhileStatement,
            "UpdateExpression" : this.parseUpdateExpression,
            
            // "FunctionExpression" : this.parseFunctionExpressionNode,
        };
    },

    execFile(filePath){
        var contents = fs.readFileSync(filePath);
        var rst = this.exec(contents);
        this.writeFile(rst.code);
    },

    exec(code){
        this.initParseFn();
        var _this = this;
        console.time("start");
        var rst = c.transform(code, {plugins:[
            {'visitor':
                {
                    /**
                     * @param nodePath 
                    */
                    FunctionExpression(nodePath){
                        _this.parseFunctionExpression(nodePath);
                    },

                    FunctionDeclaration(nodePath){
                        var fun = _this.parseFun[nodePath.node.body.type];
                        if(fun){
                            var opt = fun.call(_this, nodePath.node.body, {count:0, thisId:null, variNames:[]}, nodePath.node.body);
                            _this.replaceThisId(nodePath.node.body.body, opt);
                        } 
                    }, 
                    
                    /**
                     * 处理getset存储器
                     * @param {c.types.CallExpression} nodePath 
                     */
                    // CallExpression(nodePath){
                    //     if(nodePath.node.callee && 
                    //         nodePath.node.callee.object && 
                    //         nodePath.node.callee.object.name === "Object" && 
                    //         nodePath.node.callee.property && nodePath.node.callee.property.name === "defineProperty"){

                    //         var node = nodePath.node;
                    //             var container, idx;
                    //             if(nodePath.container.type === "ExpressionStatement"){
                    //                 container = nodePath.parentPath.container;
                    //                 idx = container.indexOf(nodePath.parent);
                    //             }else{
                    //                 container = nodePath.container;
                    //                 idx = container.indexOf(node);
                    //             }
                    //             nodePath.remove();
                    //             container.splice(idx, 0, _this.createAccessFunction(node));
                    //     }
                    // }
                }
            }],
            // "compact" : false
        });
        
		var searchStr = '"use strict";', replaceStr = '"use strict";var _getset=Laya.getset;';
		rst.code = rst.code.replace(searchStr, replaceStr);
		console.timeEnd("start");
        return rst;
    },

    /**
     * 
     * @param {string} content 
     */
    writeFile(content){
        var searchStr = '"use strict";', replaceStr = '"use strict";var _getset=Laya.getset;';
        content = content.replace(searchStr, replaceStr);
        var filePath = path.resolve("./out/" + fileName);
        fs.writeFile(filePath, content, null, ()=>{
            console.log("文件输出完成");
        })
    },

    
}