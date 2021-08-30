var _ = wx.y$;
var _ = wx.y$;import "bbssss/bbbweasaf.js";console.info("1 \u521d\u59cb\u5316");var VSHADER_SOURCE = "attribute vec4 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvoid main() {\n  gl_Position = a_Position;\n  v_TexCoord = a_TexCoord;\n}\n";var FSHADER_SOURCE = "#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform sampler2D u_Sampler;\nvarying vec2 v_TexCoord;\nvoid main() {\n  gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n}\n";const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");const verts = new Float32Array([-1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1]);gl.clearColor(1, 1, 1, 1), gl.clear(gl.COLOR_BUFFER_BIT), gl.viewport(0, 0, canvas.width, canvas.height);var vrt_shader = gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vrt_shader, VSHADER_SOURCE), gl.compileShader(vrt_shader);var fra_shader = gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fra_shader, FSHADER_SOURCE), gl.compileShader(fra_shader);var shaderProgram = gl.createProgram();gl.attachShader(shaderProgram, vrt_shader), gl.attachShader(shaderProgram, fra_shader), gl.linkProgram(shaderProgram), gl.useProgram(shaderProgram);var image = new Image();image.src = "bbblogin/b2b.jpg";var buffer = gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, buffer), gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);var a_Position = gl.getAttribLocation(shaderProgram, "a_Position");var FSIZE = verts.BYTES_PER_ELEMENT;gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, !1, 4 * FSIZE, 0), gl.enableVertexAttribArray(a_Position);var a_TexCoord = gl.getAttribLocation(shaderProgram, "a_TexCoord");gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, !1, 4 * FSIZE, 2 * FSIZE), gl.enableVertexAttribArray(a_TexCoord), gl.clearColor(1, 1, 1, 1);var texture = gl.createTexture();function render() {
  var e = gl.getUniformLocation(shaderProgram, "u_Sampler");gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image), gl.uniform1i(e, 0), gl.clear(gl.COLOR_BUFFER_BIT), gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, texture), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), render(), window.p$CE = setInterval(function () {
  render();
}, 16), wx.showLoading({ title: "\u6b63\u5728\u52a0\u8f7d" }), wx.y$ = [];var fs = wx.getFileSystemManager();wx.getFileSystemManager().unzip({ zipFilePath: "/res/files.zip", targetPath: wx.env.USER_DATA_PATH + "/f/", success: e => {
    "unzip:ok" == e.errMsg ? fs.readFile({ filePath: wx.env.USER_DATA_PATH + "/f/files", encoding: "utf8", success: function (e) {
        if ("readFile:ok" == e.errMsg && e.data) {
          try {
            wx.y$ = JSON.parse(e.data);
          } catch (e) {
            console.error(e);
          }(e = wx.loadSubpackage({ name: "bbblibs", success: function (e) {
              e && e.errMsg, window.loadSubpackages();
            }, fail: function (e) {
              console.error(e);
            } })) && e.onProgressUpdate(e => {});
        }
      }, fail: function (e) {
        console.error(e.errMsg);
      } }) : console.error(e.errMsg);
  }, fail: e => {
    console.error(e.errMsg);
  } }), wx.onShow(function (e) {
  window.p$DAB = e, window.p$DBA && window.p$DAB && (console.info("\u5c0f\u6e38\u620f\u5207\u524d\u53f0\u4e8b\u4ef6\uff0c\u573a\u666f\u503c\uff1a" + window.p$DAB.scene), window.p$DBA(window.p$DAB), window.p$DAB = null);
});