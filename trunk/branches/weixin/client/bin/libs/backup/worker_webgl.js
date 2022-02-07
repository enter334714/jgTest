"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var base;
(function (base) {
    var background;
    (function (background) {
        var WebGLWorkerProxy = (function () {
            function WebGLWorkerProxy(worker) {
                var _this = this;
                this._hasWait = false;
                this.onMessage = function (message) {
                    var args = message.data;
                    switch (args.opcode) {
                        case "canvas":
                            _this.canvas(args.value);
                            break;
                        case "compile":
                            _this.compile(args.value.vs, args.value.ps, args.value.define);
                            break;
                        default:
                            break;
                    }
                };
                this.onUpdate = function () {
                    if (_this._list.length == 0) {
                        _this._hasWait = false;
                        clearTimeout(_this._lastSetTime);
                        return;
                    }
                    var time1 = Date.now();
                    var time2 = Date.now();
                    var arr = _this._list.shift();
                    var vs = arr[0], ps = arr[1], define = arr[2];
                    var attributeParams = [], uniformParams = [];
                    var gl = _this._gl;
                    var program = gl.createProgram();
                    var vshader = gl.createShader(gl.VERTEX_SHADER);
                    gl.shaderSource(vshader, vs);
                    gl.compileShader(vshader);
                    if (!gl.getShaderParameter(vshader, gl.COMPILE_STATUS))
                        _this.postMessage("error", gl.getShaderInfoLog(vshader));
                    gl.attachShader(program, vshader);
                    var pshader = gl.createShader(gl.FRAGMENT_SHADER);
                    gl.shaderSource(pshader, ps);
                    gl.compileShader(pshader);
                    if (!gl.getShaderParameter(pshader, gl.COMPILE_STATUS))
                        _this.postMessage("error", gl.getShaderInfoLog(pshader));
                    gl.attachShader(program, pshader);
                    gl.linkProgram(program);
                    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
                        _this.postMessage("error", gl.getProgramInfoLog(program));
                    var one, i = 0, j = 0, n = 0, location;
                    var attribNum = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
                    for (i = 0; i < attribNum; i++) {
                        var attrib = gl.getActiveAttrib(program, i);
                        location = gl.getAttribLocation(program, attrib.name);
                        one = {
                            vartype: "attribute",
                            ivartype: 0,
                            attrib: attrib,
                            location: location,
                            name: attrib.name,
                            type: attrib.type,
                            isArray: false,
                            isSame: false,
                            preValue: null,
                            indexOfParams: 0
                        };
                        attributeParams.push(one);
                    }
                    var nUniformNum = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                    for (i = 0; i < nUniformNum; i++) {
                        var uniform = gl.getActiveUniform(program, i);
                        location = gl.getUniformLocation(program, uniform.name);
                        one = {
                            vartype: "uniform",
                            ivartype: 1,
                            attrib: attrib,
                            location: location,
                            name: uniform.name,
                            type: uniform.type,
                            isArray: false,
                            isSame: false,
                            preValue: null,
                            indexOfParams: 0
                        };
                        if (one.name.indexOf('[0]') > 0) {
                            one.name = one.name.substr(0, one.name.length - 3);
                            one.isArray = true;
                            one.location = gl.getUniformLocation(program, one.name);
                        }
                        uniformParams.push(one);
                    }
                    time2 = Date.now();
                    _this.postMessage("info", "Shader3D  cost=" + (time2 - time1) + " >> " + define);
                    time1 = time2;
                };
                this._worker = worker;
                this._worker.onmessage = this.onMessage;
                this._list = new Array();
            }
            WebGLWorkerProxy.prototype.postMessage = function (opcode, msg) {
                this._worker.postMessage({ opcode: opcode, value: msg });
            };
            WebGLWorkerProxy.prototype.canvas = function (canvas) {
                this._canvas = canvas;
                this._gl;
                var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                for (var i = 0; i < names.length; i++) {
                    try {
                        this._gl = canvas.getContext(names[i]);
                    }
                    catch (e) {
                        this.postMessage("error", e.message);
                    }
                    if (this._gl)
                        break;
                }
                if (!this._gl) {
                    this.postMessage("error", "WebGL初始化失败");
                }
            };
            WebGLWorkerProxy.prototype.compile = function (vs, ps, define) {
                if (!vs || !ps || !this._gl)
                    return;
                this._list.push([vs, ps, define]);
                if (!this._hasWait) {
                    this._hasWait = true;
                    this._lastSetTime = setInterval(this.onUpdate, 33);
                }
            };
            return WebGLWorkerProxy;
        }());
        background.WebGLWorkerProxy = WebGLWorkerProxy;
    })(background = base.background || (base.background = {}));
})(base || (base = {}));
var actor = new base.background.WebGLWorkerProxy(self);
//# sourceMappingURL=worker_webgl.js.map