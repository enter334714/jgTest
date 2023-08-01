console.info("0 进入游戏包");


//有涟漪效果
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'uniform float u_rainFrequency1;\n' +
    'uniform float u_Time1;\n' +
    'uniform vec4 u_Size;\n' +
    'varying vec2 v_TexCoord;\n' +
    'varying vec4 v_rainDrop[7];\n' +
    'void main() {\n' +
    '  gl_Position = vec4((a_Position.x*u_Size.z/u_Size.x)*2.0, (a_Position.y*u_Size.w/u_Size.y)*2.0, a_Position.z, 1.0);\n' +
    '  v_TexCoord = a_TexCoord;\n' +

    '  vec2 magicVec2 = vec2(0.0041,0.0111);\n' +
    '  float magicNum = 2767.0;\n' +
    '  vec4 timeSeed1 = floor(u_Time1*2.0*u_rainFrequency1*vec4(1.00, 1.30, 1.57, 2.03));\n' +
    '  vec4 timeSeed2 = floor(u_Time1*2.0*u_rainFrequency1*vec4(2.37, 2.67, 2.97, 3.37));\n' +
    '  vec4 seed1 = timeSeed1*magicNum;\n' +
    '  vec4 seed2 = timeSeed2*magicNum;\n' +
    
    '  vec3 seedVec1 = vec3(seed1.x + magicNum, seed1.x + 2.0*magicNum, seed1.x + 3.0*magicNum);\n' +
    '  seedVec1 = fract(seedVec1*magicVec2.x + magicVec2.y)*magicNum;\n' +
    '  vec3 seedVec2 = vec3(seed1.y + magicNum, seed1.y + 2.0*magicNum, seed1.y + 3.0*magicNum);\n' +
    '  seedVec2 = fract(seedVec2*magicVec2.x + magicVec2.y)*magicNum;\n' +
    '  vec3 seedVec3 = vec3(seed1.z + magicNum, seed1.z + 2.0*magicNum, seed1.z + 3.0*magicNum);\n' +
    '  seedVec3 = fract(seedVec3*magicVec2.x + magicVec2.y)*magicNum;\n' +
    '  vec3 seedVec4 = vec3(seed1.w + magicNum, seed1.w + 2.0*magicNum, seed1.w + 3.0*magicNum);\n' +
    '  seedVec4 = fract(seedVec4*magicVec2.x + magicVec2.y)*magicNum;\n' +
    '  vec3 seedVec5 = vec3(seed2.x + magicNum,seed2.x + 2.0*magicNum, seed2.x + 3.0*magicNum);\n' +
    '  seedVec5 = fract(seedVec5*magicVec2.x + magicVec2.y)*magicNum;\n' +
    '  vec3 seedVec6 = vec3(seed2.y + magicNum,seed2.y + 2.0*magicNum, seed2.y + 3.0*magicNum);\n' +
    '  seedVec6 = fract(seedVec6*magicVec2.x + magicVec2.y)*magicNum;\n' +
    '  vec3 seedVec7 = vec3(seed2.z + magicNum,seed2.z + 2.0*magicNum, seed2.z + 3.0*magicNum);\n' +
    '  seedVec7 = fract(seedVec7*magicVec2.x + magicVec2.y)*magicNum;\n' +
    
    '  v_rainDrop[0] = vec4(fract(seedVec1*magicVec2.x + magicVec2.y),timeSeed1.x);\n' +
    '  v_rainDrop[1] = vec4(fract(seedVec2*magicVec2.x + magicVec2.y),timeSeed1.y);\n' +
    '  v_rainDrop[2] = vec4(fract(seedVec3*magicVec2.x + magicVec2.y),timeSeed1.z);\n' +
    '  v_rainDrop[3] = vec4(fract(seedVec4*magicVec2.x + magicVec2.y),timeSeed1.w);\n' +
    '  v_rainDrop[4] = vec4(fract(seedVec5*magicVec2.x + magicVec2.y),timeSeed2.x);\n' +
    '  v_rainDrop[5] = vec4(fract(seedVec6*magicVec2.x + magicVec2.y),timeSeed2.y);\n' +
    '  v_rainDrop[6] = vec4(fract(seedVec7*magicVec2.x + magicVec2.y),timeSeed2.z);\n' +
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'precision mediump float;\n' +
    'uniform sampler2D u_MainTex;\n' +
    'uniform sampler2D u_ControlTex;\n' +
    'uniform float u_UvOffsetFrequency;\n' +
    'uniform float u_AmplitudeFactor;\n' +
    'uniform float u_PhaseFactor;\n' +
    'uniform float u_ripplingIntensity;\n' +
    'uniform float u_ripplingFrequency;\n' +
    'uniform float u_spaceDisFactor;\n' +
    'uniform float u_ripplingVelocity;\n' +
    'uniform float u_ripplingRoundness;\n' +
    'uniform vec4 u_rainAreaST;\n' +
    'uniform float u_rainFrequency2;\n' +
    'uniform float u_Time2;\n' +
    'varying vec2 v_TexCoord;\n' +
    'varying vec4 v_rainDrop[7];\n' +
    'void main() {\n' +
    '  vec4 control = texture2D(u_ControlTex, v_TexCoord);\n' +
    '  float ripplingStep = step(0.5, control.r);\n' +
    '  vec2 ripplingStepVector = vec2(1.0-ripplingStep, ripplingStep);\n' +
    '  float uvOffsetDirection = dot(vec2(control.r*2.0, control.r*2.0-1.0), ripplingStepVector);\n' +
    '  float uvOffsetAmplitude = control.g * u_AmplitudeFactor * (1.0 - ripplingStep);\n' +
    '  float swingPhase = control.b;\n' +
    '  float loacalFrequency = control.a;\n' +

    '  float timeFactor = sin((u_Time2 + swingPhase * u_PhaseFactor) * 6.2831853 * u_UvOffsetFrequency * loacalFrequency);\n' +
    '  float reversStep = step(uvOffsetDirection, 0.5);\n' +
    '  float offsetU = mix(-1.0, 1.0, uvOffsetDirection);\n' +
    '  float offsetV = mix(0.0, -1.0, uvOffsetDirection*2.0*reversStep+(1.0-uvOffsetDirection)*2.0*(1.0-reversStep));\n' +
    '  vec2 offsetDir = normalize(vec2(offsetU, offsetV));\n' +
				
    '  vec2 ripplingShotAxle = offsetDir*ripplingStep;\n' +
    '  float ripplingLocalRoundness = 1.001 - control.b;\n' +
    '  float localSapceDisFactor = 1.0/(1.0001 - control.g);\n' +
    '  vec2 ripplingUVOffset = vec2(0.0, 0.0);\n' +
        
    '  float rf = u_rainFrequency2;\n' +
    '  float dropFrenquency[7];\n' +
    '  dropFrenquency[0] = rf;\n' +
    '  dropFrenquency[1] = rf*1.3;\n' +
    '  dropFrenquency[2] = rf*1.57;\n' +
    '  dropFrenquency[3] = rf*2.03;\n' +
    '  dropFrenquency[4] = rf*2.37;\n' +
    '  dropFrenquency[5] = rf*2.67;\n' +
    '  dropFrenquency[6] = rf*2.97;\n' +
    '  for (int l = 0; l < 7; l++) \n' +
    '  {\n' +
    '    vec4 rainDrop = v_rainDrop[l];\n' +
    '    float passTime = u_Time2*2.0*dropFrenquency[l] - rainDrop.w;\n' +
    '    vec2 ripplingCenter = rainDrop.xy*u_rainAreaST.xy + u_rainAreaST.zw;\n' +
    '    vec2 ripplingVector = v_TexCoord - ripplingCenter;\n' +
    '    vec2 ripplingVectorProj = dot(ripplingVector,ripplingShotAxle)*ripplingShotAxle;\n' +
    '    ripplingVector = ripplingVectorProj/(u_ripplingRoundness*ripplingLocalRoundness) + (ripplingVector - ripplingVectorProj);\n' +
    '    vec2 ripplingDir = normalize(ripplingVector);\n' +
    '    float disSquareFromCenter = dot(ripplingVector,ripplingVector)*u_spaceDisFactor*localSapceDisFactor;\n' +
    '    float ripplingAmplitude = u_ripplingIntensity*(1.01 - passTime)/(disSquareFromCenter + 1.0);\n' +
    '    float ripplingTimeFactor = sin((u_Time2*u_ripplingFrequency - sqrt(disSquareFromCenter)/u_ripplingVelocity));\n' +
    '    ripplingUVOffset += ripplingDir*ripplingAmplitude*ripplingTimeFactor;\n' +
    '  }\n' +
        
    '  vec2 uvOffset = offsetDir * uvOffsetAmplitude * timeFactor * (1.0 - ripplingStep) + ripplingUVOffset * ripplingStep;\n' +
    '  gl_FragColor = texture2D(u_MainTex, v_TexCoord + uvOffset);\n' +
    '}\n';

var canvas = wx.canvas = wx.createCanvas(); 
var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
var verts = new Float32Array([
  -360, 640, 0.0, 0.0,
  -360, -640, 0.0, 1.0,
  360, 640, 1.0, 0.0,
  360, -640, 1.0, 1.0
]);
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


wx.rainArr = [0.4, 0.1, 2.0, 200,    12.0, 0.5, 0.7, 0.25,    0.1, 0.1,    0.7, 0.1, 0.15, 0.57];


gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_UvOffsetFrequency'), wx.rainArr[0]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_AmplitudeFactor'), wx.rainArr[1]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_PhaseFactor'), wx.rainArr[2]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_spaceDisFactor'), wx.rainArr[3]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_ripplingFrequency'), wx.rainArr[4]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_ripplingIntensity'), wx.rainArr[5]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_ripplingRoundness'), wx.rainArr[6]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_ripplingVelocity'), wx.rainArr[7]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_rainFrequency1'), wx.rainArr[8]);
gl.uniform1f(gl.getUniformLocation(shaderProgram, 'u_rainFrequency2'), wx.rainArr[9]);
if (wx.rainArr.length >= 14) gl.uniform4f(gl.getUniformLocation(shaderProgram, 'u_rainAreaST'), wx.rainArr[10],wx.rainArr[11],wx.rainArr[12],wx.rainArr[13]);
    
var u_Time1 = gl.getUniformLocation(shaderProgram, 'u_Time1');
var u_Time2 = gl.getUniformLocation(shaderProgram, 'u_Time2');


var texture0 = gl.createTexture();
var image0 = wx.createImage();
image0.onload = function() {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture0);
    var u_MainTex = gl.getUniformLocation(shaderProgram, 'u_MainTex');
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image0);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(u_MainTex, 0);
}
image0.src = "wxlogin_atlas/image_new_init.jpg";

var texture1 = gl.createTexture();
var image1 = wx.createImage();
image1.onload = function() {
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    var u_ControlTex = gl.getUniformLocation(shaderProgram, 'u_ControlTex');
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image1);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(u_ControlTex, 1);
}
image1.src = "wxlogin_atlas/image_new_ctrl.png";

var wh = 720, th = 1280;
function resizeStage() {
  wh = (wh + 1) & 0x7FFFFFFE, th = (th + 1) & 0x7FFFFFFE;
  if (wh <= th) {
    th = (Math.floor(th / (wh / 840)) + 1) & 0x7FFFFFFE;
    wh = 840;
  }
  var viewW = 720, viewH = 1280, viewS = 1;
  if (th / wh < 1.7777778) {
      viewW = Math.floor(wh / (th / 1280));
      viewH = 1280;
      viewS = th / 1280;
  } else {
      viewW = 720;
      viewH = Math.floor(th / (wh / 720));
      viewS = wh / 720;
  }
  gl.uniform4f(gl.getUniformLocation(shaderProgram, 'u_Size'), wh, th, viewS, viewS);
}

var systemInfo = wx.getSystemInfoSync();
wh = Math.floor(systemInfo.screenWidth * systemInfo.pixelRatio);
th = Math.floor(systemInfo.screenHeight * systemInfo.pixelRatio);
resizeStage();



var time = 0.0;
function render() {
    gl.uniform1f(u_Time1, time/1000);
    gl.uniform1f(u_Time2, time/1000);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
render();
wx.loadingInterval = setInterval(function(){
    time += 16;
    render();
}, 16);


console.info("1 加载游戏");
wx.showLoading({ title: '正在加载' });

var loadLibs = function() {
    console.log("libs 分包加载");
    var loadLibsTask = wx.loadSubpackage({
        name: 'libs',
        success: function(res) {
            console.log("libs 分包加载成功");
            console.log(res);
            if (res && res.errMsg == "loadSubpackage:ok") {
                wx.loadSubpackages();
            } else {
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
wx.onShow(function (res) {
    wx.onShowData = res;
    if (wx.onShowCallback && wx.onShowData) {
        console.info("小游戏切前台事件，场景值："+wx.onShowData.scene);
        wx.onShowCallback(wx.onShowData);
        wx.onShowData = null;
    }
})

wx.onHide(function(){
  console.info("小游戏进入后台");
  if (wx.onHideCallBack) {
    wx.onHideCallBack();
}
});
loadLibs();