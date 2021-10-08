console['info']('0 进入游戏包'), window['lastError'], wx['onError'](function (l_8ew) {
  if (l_8ew) {
    if (l_8ew['message']) {
      var hj6ig$ = window['config']['game_ver']['replace'](new RegExp(/\./, 'g'), '_'),
          tbqpov = l_8ew['message'],
          $i1r = tbqpov['match'](/(gggggggg\/gggggame.js:)[0-9]{1,60}(:)/g);if ($i1r) for (var voqptw = 0x0; voqptw < $i1r['length']; voqptw++) {
        var a0yri;$i1r[voqptw] && 0x0 < $i1r[voqptw]['length'] && (a0yri = parseInt($i1r[voqptw]['replace']('gggggggg/gggggame.js:', '')['replace'](':', '')), tbqpov = tbqpov['replace']($i1r[voqptw], $i1r[voqptw]['replace'](':' + a0yri + ':', ':' + (a0yri - 0x2) + ':')));
      }tbqpov = (tbqpov = tbqpov['replace'](new RegExp('gggggggg/gggggame.js', 'g'), 'gggggggg/main__' + hj6ig$ + '.min.js'))['replace'](new RegExp('gggggggg/gggmain.js', 'g'), 'gggggggg/main__' + hj6ig$ + '.min.js'), l_8ew['message'] = tbqpov;
    }hj6ig$ = { 'id': window['G$Y$']['roleId'], 'role': window['G$Y$']['roleName'], 'level': window['G$Y$']['roleLevel'], 'user': window['G$Y$']['account'], 'version': window['G$Y$']['lastVersion'], 'gamever': window['config']['game_ver'], 'cdn': window['G$Y$']['cdn'], 'serverid': window['G$Y$']['selectedServer'] ? window['G$Y$']['selectedServer']['server_id'] : 0x0, 'systemInfo': window['systemInfo'], 'error': 'MiniProgramError', 'stack': l_8ew ? l_8ew['message'] : '' }, l_8ew = JSON['stringify'](hj6ig$), (console['error']('脚本错误：' + l_8ew), window['lastError'] && window['lastError'] == hj6ig$['error'] || (window['lastError'] = hj6ig$['error'], window['G$LY'](hj6ig$)));
  }
});import 'gggmd5min.js';import 'gggzlibs.js';window['Parser'] = require('gggdomparser.js');import 'gggindex.js';import 'ggglibsmin.js';import 'gggwxmini.js';import 'ggginitmin.js';import 'XingJuBox.js';console['info']('1 初始化'), console['info']('2 加载游戏'), G$LY8$({ 'title': '正在加载' });var gyr5 = { 'G$Q8LY$': !0x0 };new window['ServerLoading'](gyr5), window['ServerLoading']['instance']['G$Q8$LY'](), window['G$QL$8Y'] && clearInterval(window['G$QL$8Y']), window['G$QL$8Y'] = null, window['G$Q8$YL'] = function (jg$16i, vtwpq) {
  if (!jg$16i || !vtwpq) return 0x0;jg$16i = jg$16i['split']('.'), vtwpq = vtwpq['split']('.');var tqw8e = Math['max'](jg$16i['length'], vtwpq['length']);for (; jg$16i['length'] < tqw8e;) jg$16i['push']('0');for (; vtwpq['length'] < tqw8e;) vtwpq['push']('0');for (var r$y1ij = 0x0; r$y1ij < tqw8e; r$y1ij++) {
    var $_6j = parseInt(jg$16i[r$y1ij]),
        ayi0r = parseInt(vtwpq[r$y1ij]);if (ayi0r < $_6j) return 0x1;if ($_6j < ayi0r) return -0x1;
  }return 0x0;
}, window['SDKVersion'] = wx['getSystemInfoSync']()['SDKVersion'], console['log']('微信基础库版本：' + window['SDKVersion']);var gr6$ij1 = wx['getUpdateManager']();gr6$ij1['onCheckForUpdate'](function (wtqp) {
  console['log']('是否有新版本：' + wtqp['hasUpdate']);
}), gr6$ij1['onUpdateReady'](function () {
  wx['showModal']({ 'title': '更新提示', 'content': '新版本已经准备好，是否重启应用？', 'showCancel': !0x1, 'success': function (h_69g$) {
      gr6$ij1['applyUpdate']();
    } });
}), gr6$ij1['onUpdateFailed'](function () {
  console['log']('新版本下载失败\x20');
}), window['G$QYL8$'] = function () {
  console['log']('protobuf 分包加载');var j$61ir = wx['loadSubpackage']({ 'name': 'ggggggpf', 'success': function ($6igj) {
      console['log']('protobuf 分包加载成功'), console['log']($6igj), $6igj && 'loadSubpackage:ok' == $6igj['errMsg'] ? (window['G$$8'] = !0x0, window['G$$YL8'](), window['G$$Y8L']()) : setTimeout(function () {
        window['G$QYL8$']();
      }, 0x1f4);
    }, 'fail': function (xusk7z) {
      console['log']('protobuf 分包加载失败'), console['log'](xusk7z), setTimeout(function () {
        window['G$QYL8$']();
      }, 0x1f4);
    } });j$61ir && j$61ir['onProgressUpdate'](ihgj => {});
}, window['G$QY8L$'] = function () {
  console['log']('Main 分包加载');var g6$_h = wx['loadSubpackage']({ 'name': 'gggggggg', 'success': function (r1i$y) {
      console['log']('Main 分包加载成功'), console['log'](r1i$y), r1i$y && 'loadSubpackage:ok' == r1i$y['errMsg'] ? (window['G$Y8$'] = !0x0, window['G$$YL8'](), window['G$$Y8L']()) : setTimeout(function () {
        window['G$QY8L$']();
      }, 0x1f4);
    }, 'fail': function (rya05) {
      console['log']('Main 分包加载失败'), console['log'](rya05), setTimeout(function () {
        window['G$QY8L$']();
      }, 0x1f4);
    } });g6$_h && g6$_h['onProgressUpdate'](wqvpo => {});
}, 0x0 <= window['G$Q8$YL'](window['SDKVersion'], '2.1.0') ? (console['log']('微信基础库版本符合最低版本要求：' + window['SDKVersion'] + '>=2.1.0'), window['G$YL'](), window['G$QYL8$'](), window['G$QY8L$']()) : (window['G$Y$L']('微信基础库版本过低:' + window['SDKVersion']), wx['showModal']({ 'title': '提示', 'content': '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。' })), window['systemInfo'] = '', wx['getSystemInfo']({ 'success'(ry1j$) {
    window['systemInfo'] = '品牌：' + ry1j$['brand'] + '，型号：' + ry1j$['model'] + '，微信版本号：' + ry1j$['version'] + '，系统及版本：' + ry1j$['system'] + '，客户端平台：' + ry1j$['platform'] + '，基础库版本：' + ry1j$['SDKVersion'] + '，设备性能等级：' + ry1j$['benchmarkLevel'], console['log'](window['systemInfo']), console['log']('设备像素比：' + ry1j$['pixelRatio'] + '，屏幕宽度：' + ry1j$['screenWidth'] + '，屏幕高度：' + ry1j$['screenHeight'] + '，可使用窗口宽度：' + ry1j$['windowWidth'] + '，可使用窗口高度：' + ry1j$['windowHeight'] + '，状态栏的高度：' + ry1j$['statusBarHeight'] + '，安全区域：' + (ry1j$['safeArea'] ? ry1j$['safeArea']['top'] + ',' + ry1j$['safeArea']['bottom'] + ',' + ry1j$['safeArea']['left'] + ',' + ry1j$['safeArea']['right'] : ''));var g_$ = ry1j$['system'] ? ry1j$['system']['toLowerCase']() : '',
        g96_$h = ry1j$['model'] ? ry1j$['model']['toLowerCase']()['replace']('\x20', '') : '';window['G$Y$']['wxIOS'] = -0x1 != g_$['indexOf']('ios'), window['G$Y$']['wxAndroid'] = -0x1 != g_$['indexOf']('android'), window['G$Y$']['wxPhone'] = -0x1 != g_$['indexOf']('ios') || -0x1 != g_$['indexOf']('android'), window['G$Y$']['wxPC'] = -0x1 != g_$['indexOf']('windows') || -0x1 != g_$['indexOf']('mac'), window['G$Y$']['wxPlatform'] = ry1j$['platform'] ? ry1j$['platform']['toLowerCase']() : '', window['G$Y$']['G$QLY8$'] = !0x1, -(window['G$Y$']['G$QLY$8'] = 0x1) != g_$['indexOf']('android') ? 0x18 <= ry1j$['benchmarkLevel'] ? window['G$Y$']['G$QLY$8'] = 0x2 : window['G$Y$']['G$QLY$8'] = 0x1 : -0x1 == g_$['indexOf']('ios') || !(ry1j$['benchmarkLevel'] && 0x14 <= ry1j$['benchmarkLevel'] || -0x1 == g96_$h['indexOf']('iphone5') && -0x1 == g96_$h['indexOf']('iphone6') && -0x1 == g96_$h['indexOf']('iphone7') && -0x1 == g96_$h['indexOf']('iphonese') && -0x1 == g96_$h['indexOf']('ipad')) ? window['G$Y$']['G$QLY$8'] = 0x1 : window['G$Y$']['G$QLY$8'] = 0x2, console['log']('加载限制：' + window['G$Y$']['G$QLY8$'] + '，设备限制等级：' + window['G$Y$']['G$QLY$8']);
  } }), wx['getBatteryInfo']({ 'success': function (k7z) {
    console['log']('电量：' + k7z['level'] + '%，是否正在充电：' + k7z['isCharging']);
  } }), wx['getNetworkType']({ 'success': function (xk7zf) {
    console['log']('网络类型：' + xk7zf['networkType']);
  } }), wx['setKeepScreenOn']({ 'keepScreenOn': !0x0 }), wx['onNetworkStatusChange'](function (leq98w) {
  console['log']('网络类型：' + leq98w['networkType'] + '，是否有网络连接：' + leq98w['isConnected']);
}), wx['onShow'](function (ihgj$) {
  window['G$$L8'] = ihgj$, window['G$$8L'] && window['G$$L8'] && (console['info']('小游戏切前台事件，场景值：' + window['G$$L8']['scene']), window['G$$8L'](window['G$$L8']), window['G$$L8'] = null);
}), window['G$QY$L8'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['G$QY$L8']++, wx['triggerGC'](), 0x2 <= window['G$QY$L8'] && (window['G$QY$L8'] = 0x0, console['error']('第二次内存警告'), wx['reportMonitor']('0', 0x1), window['G$Y$'] && window['G$Y$']['wxIOS'] && window['G$Y$L']('内存警告'), onMemoryWarningCallBack && onMemoryWarningCallBack());
});