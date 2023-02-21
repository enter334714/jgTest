console['info']('0 进入游戏包'), window['lastError'], wx['onError'](function (k1qo) {
    if (k1qo) {
        if (k1qo['message']) {
            var med_p = window['config']['game_ver']['replace'](new RegExp(/\./, 'g'), '_'),
                l64fj = k1qo['message'],
                oaq1k_ = l64fj['match'](/(a4vmp\/Z_67game.js:)[0-9]{1,60}(:)/g);
            if (oaq1k_) for (var ft965 = 0x0; ft965 < oaq1k_['length']; ft965++) {
                if (oaq1k_[ft965] && oaq1k_[ft965]['length'] > 0x0) {
                    var _ca = parseInt(oaq1k_[ft965]['replace']('a4vmp/Z_67game.js:', '')['replace'](':', ''));
                    l64fj = l64fj['replace'](oaq1k_[ft965], oaq1k_[ft965]['replace'](':' + _ca + ':', ':' + (_ca - 0x2) + ':'));
                }
            }
            l64fj = l64fj['replace'](new RegExp('a4vmp/Z_67game.js', 'g'), 'a4vmp/main__' + med_p + '.min.js'), l64fj = l64fj['replace'](new RegExp('a4vmp/Z_67main.js', 'g'), 'a4vmp/main__' + med_p + '.min.js'), k1qo['message'] = l64fj;
        }
        var p_medc = {
            'id': window['J15Q']['roleId'],
            'role': window['J15Q']['roleName'],
            'level': window['J15Q']['roleLevel'],
            'user': window['J15Q']['account'],
            'version': window['J15Q']['lastVersion'],
            'cdn': window['J15Q']['cdn'],
            'pkgName': window['J15Q']['pkgName'],
            'gamever': window['config']['game_ver'],
            'serverid': window['J15Q']['selectedServer'] ? window['J15Q']['selectedServer']['server_id'] : 0x0,
            'systemInfo': window['systemInfo'],
            'error': 'MiniProgramError',
            'stack': k1qo ? k1qo['message'] : ''
        },
            oake = JSON['stringify'](p_medc);
        console['error']('脚本错误：' + oake), (!window['lastError'] || window['lastError'] != p_medc['error']) && (window['lastError'] = p_medc['error'], window['J1R5'](p_medc));
    }
});
import 'rr.js';
import 'v7saz.js';
window['Parser'] = require('a2pf1a.js');
import 'yu.js';
import 'a7ay5a.js';
import 'a8zl2d.js';
import 'tv3iw.js';
console['info']('1 初始化'), console['info']('2 加载游戏'), J1R5PQ({ 'title': '正在加载' });
var gnr8b0 = { 'J1FRQ5P': !![] };
new window['ServerLoading'](gnr8b0), window['ServerLoading']['instance']['J1FP5QR']();
if (window['J1FR5QP']) clearInterval(window['J1FR5QP']);
window['J1FR5QP'] = null, window['J1FPQR5'] = function (qr21, qr0a) {
    if (!qr21 || !qr0a) return 0x0;
    qr21 = qr21['split']('.'), qr0a = qr0a['split']('.');
    const o_akc = Math['max'](qr21['length'], qr0a['length']);
    while (qr21['length'] < o_akc) {
        qr21['push']('0');
    }
    while (qr0a['length'] < o_akc) {
        qr0a['push']('0');
    }
    for (var ao_qk = 0x0; ao_qk < o_akc; ao_qk++) {
        const de_ = parseInt(qr21[ao_qk]),
              vj$4iw = parseInt(qr0a[ao_qk]);
        if (de_ > vj$4iw) return 0x1;else {
            if (de_ < vj$4iw) return -0x1;
        }
    }
    return 0x0;
}, window['SDKVersion'] = wx['getSystemInfoSync']()['SDKVersion'], console['log']('微信基础库版本：' + window['SDKVersion']);
var g$iw = wx['getUpdateManager']();
g$iw['onCheckForUpdate'](function (mcp_) {
    console['log']('是否有新版本：' + mcp_['hasUpdate']);
}), g$iw['onUpdateReady'](function () {
    wx['showModal']({
        'title': '更新提示',
        'content': '新版本已经准备好，是否重启应用？',
        'showCancel': ![],
        'success': function (w$jil) {
            g$iw['applyUpdate']();
        }
    });
}), g$iw['onUpdateFailed'](function () {
    console['log']('新版本下载失败\x20');
}), window['J1FPQ5R'] = function () {
    console['log']('protobuf 分包加载');
    var rb802n = wx['loadSubpackage']({
        'name': 'c30i',
        'success': function (h8u32n) {
            console['log']('protobuf 分包加载成功'), console['log'](h8u32n), h8u32n && h8u32n['errMsg'] == 'loadSubpackage:ok' ? (window['J1QP'] = !![], window['J1QP5R'](), window['J1Q5RP']()) : setTimeout(function () {
                window['J1FPQ5R']();
            }, 0x1f4);
        },
        'fail': function (yg4lf) {
            console['log']('protobuf 分包加载失败'), console['log'](yg4lf), setTimeout(function () {
                window['J1FPQ5R']();
            }, 0x1f4);
        }
    });
    rb802n && rb802n['onProgressUpdate'](u8sh => {});
}, window['J1F5RQP'] = function () {
    console['log']('Main 分包加载');
    var hn0r8 = wx['loadSubpackage']({
        'name': 'a4vmp',
        'success': function (mp9de) {
            console['log']('Main 分包加载成功'), console['log'](mp9de), mp9de && mp9de['errMsg'] == 'loadSubpackage:ok' ? (window['J15PQ'] = !![], window['J1QP5R'](), window['J1Q5RP']()) : setTimeout(function () {
                window['J1F5RQP']();
            }, 0x1f4);
        },
        'fail': function (oqka1) {
            console['log']('Main 分包加载失败'), console['log'](oqka1), setTimeout(function () {
                window['J1F5RQP']();
            }, 0x1f4);
        }
    });
    hn0r8 && hn0r8['onProgressUpdate']($4lwij => {});
}, window['loadSubpackages'] = function () {
    window['J1FPQR5'](window['SDKVersion'], '2.1.0') >= 0x0 ? (console['log']('微信基础库版本符合最低版本要求：' + window['SDKVersion'] + '>=2.1.0'), window['J15R'](), window['J1FPQ5R'](), window['J1F5RQP']()) : (window['J15QR']('微信基础库版本过低', window['SDKVersion']), wx['showModal']({
        'title': '提示',
        'content': '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    }));
}, window['systemInfo'] = '', wx['getSystemInfo']({
    'success'(tygf6) {
        window['systemInfo'] = '品牌：' + tygf6['brand'] + '，型号：' + tygf6['model'] + '，微信版本号：' + tygf6['version'] + '，系统及版本：' + tygf6['system'] + '，客户端平台：' + tygf6['platform'] + '，基础库版本：' + tygf6['SDKVersion'] + '，设备性能等级：' + tygf6['benchmarkLevel'], console['log'](window['systemInfo']), console['log']('设备像素比：' + tygf6['pixelRatio'] + '，屏幕宽度：' + tygf6['screenWidth'] + '，屏幕高度：' + tygf6['screenHeight'] + '，可使用窗口宽度：' + tygf6['windowWidth'] + '，可使用窗口高度：' + tygf6['windowHeight'] + '，状态栏的高度：' + tygf6['statusBarHeight'] + '，安全区域：' + (tygf6['safeArea'] ? tygf6['safeArea']['top'] + ',' + tygf6['safeArea']['bottom'] + ',' + tygf6['safeArea']['left'] + ',' + tygf6['safeArea']['right'] : ''));
        var _kqeo = tygf6['system'] ? tygf6['system']['toLowerCase']() : '',
            ly64jf = tygf6['model'] ? tygf6['model']['toLowerCase']()['replace']('\x20', '') : '';
        window['J15Q']['wxIOS'] = _kqeo['indexOf']('ios') != -0x1, window['J15Q']['wxAndroid'] = _kqeo['indexOf']('android') != -0x1, window['J15Q']['wxPhone'] = _kqeo['indexOf']('ios') != -0x1 || _kqeo['indexOf']('android') != -0x1, window['J15Q']['wxPC'] = _kqeo['indexOf']('windows') != -0x1 || _kqeo['indexOf']('mac') != -0x1, window['J15Q']['wxPlatform'] = tygf6['platform'] ? tygf6['platform']['toLowerCase']() : '', window['J15Q']['J1FRPQ5'] = ![], window['J15Q']['J1FR5PQ'] = 0x2;
        if (_kqeo['indexOf']('android') != -0x1) {
            if (tygf6['benchmarkLevel'] >= 0x18) window['J15Q']['J1FR5PQ'] = 0x3;else window['J15Q']['J1FR5PQ'] = 0x2;
        } else {
            if (_kqeo['indexOf']('ios') != -0x1) {
                if (tygf6['benchmarkLevel'] && tygf6['benchmarkLevel'] >= 0x14) window['J15Q']['J1FR5PQ'] = 0x3;else {
                    if (ly64jf['indexOf']('iphone5') != -0x1 || ly64jf['indexOf']('iphone6') != -0x1 || ly64jf['indexOf']('iphone7') != -0x1 || ly64jf['indexOf']('iphonese') != -0x1 || ly64jf['indexOf']('ipad') != -0x1) window['J15Q']['J1FR5PQ'] = 0x2;else window['J15Q']['J1FR5PQ'] = 0x3;
                }
            } else window['J15Q']['J1FR5PQ'] = 0x2;
        }
        console['log']('加载限制：' + window['J15Q']['J1FRPQ5'] + '，设备限制等级：' + window['J15Q']['J1FR5PQ']);
    }
}), wx['getBatteryInfo']({
    'success': function (cmp_ed) {
        console['log']('电量：' + cmp_ed['level'] + '%，是否正在充电：' + cmp_ed['isCharging']);
    }
}), wx['getNetworkType']({
    'success': function ($jviw4) {
        console['log']('网络类型：' + $jviw4['networkType']);
    }
}), wx['setKeepScreenOn']({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (t9fg6) {
    console['log']('网络类型：' + t9fg6['networkType'] + '，是否有网络连接：' + t9fg6['isConnected']);
}), wx['onShow'](function (gyl) {
    window['J1PR'] = gyl, window['J1QRP'] && window['J1PR'] && (console['info']('小游戏切前台事件，场景值：' + window['J1PR']['scene']), window['J1QRP'](window['J1PR']), window['J1PR'] = null);
}), window['memoryGCTime'] = 0x0, window['J1F5PQR'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
    window['J1F5PQR']++;
    var gytfl = Date['now']();
    (window['memoryGCTime'] == 0x0 || gytfl - window['memoryGCTime'] > 0x1d4c0) && (console['warn']('内存警告触发GC'), wx['triggerGC']());
    if (window['J1F5PQR'] >= 0x2) {
        window['J1F5PQR'] = 0x0, console['error']('第二次内存警告'), wx['reportMonitor']('0', 0x1);
        if (window['J15Q'] && window['J15Q']['wxIOS']) window['J15QR']('内存警告', '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});