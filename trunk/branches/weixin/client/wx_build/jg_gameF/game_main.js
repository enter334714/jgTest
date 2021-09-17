﻿import "ffssss/fffweasaf.js"; console.info("1 \u521d\u59cb\u5316");
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
// vec4(1.0,1.0,1.0,1.0)
//texture2D(u_Sampler, v_TexCoord)
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
const verts = new Float32Array([-1, 1, 0.0, 0.0, 
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


var image = new Image();
image.src = "ffflogin/f22b.png";
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
// gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); 
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
// // image.onload = function () {
  
// //   var u_Sampler = gl.getUniformLocation(shaderProgram, 'u_Sampler');
// //   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
// //   gl.uniform1i(u_Sampler, 0);
// //   gl.clear(gl.COLOR_BUFFER_BIT);
// //   gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); 
// // }

function render() {
  // 我们关闭筛选
  var u_Sampler = gl.getUniformLocation(shaderProgram, 'u_Sampler');
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
  gl.uniform1i(u_Sampler, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); 
}
render();
window.loadingInterval = setInterval(function(){
  render();
}, 16)
wx.showLoading({ title: "\u6b63\u5728\u52a0\u8f7d" });
wx.y$ = []; var fs = wx.getFileSystemManager(); wx.getFileSystemManager().unzip({
  zipFilePath: "/res/files.zip", targetPath: wx.env.USER_DATA_PATH + "/f/", success: r => {
    "unzip:ok" == r.errMsg ? fs.readFile({
      filePath: wx.env.USER_DATA_PATH + "/f/files", encoding: "utf8", success: function (r) {
        if ("readFile:ok" == r.errMsg && r.data) {
          try {
            wx.y$ = JSON.parse(r.data);
          } catch (r) {
            console.error(r);
          } r = wx.loadSubpackage({
            name: "bbblibs", success: function (r) {
              r && r.errMsg, window.loadSubpackages();             
            }, fail: function (r) {
              console.error(r);
            }
          }); r && r.onProgressUpdate(r => { });
        }
      }, fail: function (r) {
        console.error(r.errMsg);
      }
    }) : console.error(r.errMsg);
  }, fail: r => {
    console.error(r.errMsg);
  }
});
//监听小游戏切前台事件
wx.onShow(function (res) {
    window.onShowData = res;
    if (window.onShowCallback && window.onShowData) {
        console.info("小游戏切前台事件，场景值：" + window.onShowData.scene);
        window.onShowCallback(window.onShowData);
        window.onShowData = null;
    }
})