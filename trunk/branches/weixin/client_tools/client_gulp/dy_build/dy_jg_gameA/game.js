﻿console.info("0 进入游戏包");

let res = tt.getMenuButtonLayout();
console.log("宽度：" + res.width);
console.log("高度：" + res.height);
console.log("上边界坐标：" + res.top);
console.log("右边界坐标：" + res.right);
console.log("下边界坐标：" + res.bottom);
console.log("左边界坐标：" + res.left);
res.top = 50
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  v_TexCoord = a_TexCoord;\n' +
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    '#ifdef GL_ES\n' +
    'precision mediump float;\n' +
    '#endif\n' +
    'uniform sampler2D u_Sampler;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    '  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '}\n';

var canvas = tt.canvas = tt.createCanvas(); 
var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
var verts = new Float32Array([-1, 1, 0.0, 0.0,
    -1, -1, 0.0, 1.0,
    1, 1, 1.0, 0.0,
    1, -1, 1.0, 1.0,]);
gl.clearColor(1.0, 1.0, 1.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.viewport(0, 0, canvas.width, canvas.height);
var vrt_shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vrt_shader, VSHADER_SOURCE);
gl.compileShader(vrt_shader);
var fra_shader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fra_shader, FSHADER_SOURCE);
gl.compileShader(fra_shader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vrt_shader);
gl.attachShader(shaderProgram, fra_shader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);


var image = tt.createImage();
image.src = "wxlogin_atlas/image_login_init.png";
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
var a_Position = gl.getAttribLocation(shaderProgram, 'a_Position');
var FSIZE = verts.BYTES_PER_ELEMENT;
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
gl.enableVertexAttribArray(a_Position);

var a_TexCoord = gl.getAttribLocation(shaderProgram, 'a_TexCoord');
gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
gl.enableVertexAttribArray(a_TexCoord);
gl.clearColor(1.0, 1.0, 1.0, 1.0);
var texture = gl.createTexture();
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

function render() {
    var u_Sampler = gl.getUniformLocation(shaderProgram, 'u_Sampler');
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.uniform1i(u_Sampler, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
render();
tt.loadingInterval = setInterval(function(){
    render();
}, 16);


console.info("1 加载游戏");
tt.showLoading({ title: '正在加载' });

var loadLibs = function() {
    console.log("libs 分包加载");
    var loadLibsTask = tt.loadSubpackage({
        name: 'libs',
        success: function(res) {
            console.log("libs 分包加载成功");
            console.log(res);
            // loadSubpackage: ok
            if (res && res.errMsg == "loadSubpackage: ok") {
                tt.loadSubpackages();
            } 
            else {
                console.log("res::",res)
                setTimeout(function() {
                    loadLibs();
                }, 500);
            }
        },
        fail: function(res) {
            console.log("libs 分包加载失败");
            console.log(res);
            setTimeout(function() {
                loadLibs();
            }, 500);
        },
    });
    loadLibsTask && loadLibsTask.onProgressUpdate(res => {
        // console.log('libs 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
    });
}

//监听小游戏切前台事件
tt.onShow(function (res) {
    tt.onShowData = res;
    if (tt.onShowCallback && tt.onShowData) {
        console.info("小游戏切前台事件，场景值："+tt.onShowData.scene);
        tt.onShowCallback(tt.onShowData);
        tt.onShowData = null;
    }
})

loadLibs();