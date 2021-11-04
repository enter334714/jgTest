var E = wx.$p;
console[E[240331]](E[243562]), window[E[243563]], wx[E[241495]](function ($y176v) {
  if ($y176v) {
    if ($y176v[E[240813]]) {
      var _tuxfl = window[E[240290]][E[240291]]['replace'](new RegExp(/\./, 'g'), '_'),
          z7r02 = $y176v[E[240813]],
          cgdaq = z7r02[E[241142]](/(pp\/pppGAME.js:)[0-9]{1,60}(:)/g);if (cgdaq) for (var j$kyhi = 0x0; j$kyhi < cgdaq[E[240110]]; j$kyhi++) {
        if (cgdaq[j$kyhi] && cgdaq[j$kyhi][E[240110]] > 0x0) {
          var flx_tu = parseInt(cgdaq[j$kyhi]['replace']('pp/pppGAME.js:', '')['replace'](':', ''));z7r02 = z7r02['replace'](cgdaq[j$kyhi], cgdaq[j$kyhi]['replace'](':' + flx_tu + ':', ':' + (flx_tu - 0x2) + ':'));
        }
      }z7r02 = z7r02['replace'](new RegExp('pp/pppGAME.js', 'g'), 'pp/main__' + _tuxfl + E[243564]), z7r02 = z7r02['replace'](new RegExp('pp/ppppMAIN.js', 'g'), 'pp/main__' + _tuxfl + E[243564]), $y176v[E[240813]] = z7r02;
    }var tsl4x = { 'id': window['_p$3'][E[240336]], 'role': window['_p$3'][E[240337]], 'level': window['_p$3'][E[240338]], 'user': window['_p$3'][E[240339]], 'version': window['_p$3'][E[240125]], 'gamever': window[E[240290]][E[240291]], 'cdn': window['_p$3'][E[240189]], 'serverid': window['_p$3'][E[240088]] ? window['_p$3'][E[240088]][E[240089]] : 0x0, 'systemInfo': window[E[240340]], 'error': E[243565], 'stack': $y176v ? $y176v[E[240813]] : '' },
        ikyshj = JSON[E[240261]](tsl4x);console[E[240263]](E[243566] + ikyshj), (!window[E[243563]] || window[E[243563]] != tsl4x[E[240263]]) && (window[E[243563]] = tsl4x[E[240263]], window['_pF$'](tsl4x));
  }
});import 'ppMDadfap.js';import 'pp12asz.js';window[E[243567]] = require('pppparse.js');import 'pINDEX.js';import 'ppLIBsdsa.js';import 'pppWXMsad.js';import 'ooooINITMIN.js';import 'SyMiniTool.js';console[E[240331]](E[243568]), console[E[240331]](E[243569]), _pF$23({ 'title': E[243570] });var p_iyv16$ = { '_pX2F$3': !![] };new window[E[240288]](p_iyv16$), window[E[240288]][E[240085]]['_pX23F$']();if (window['_pXF32$']) clearInterval(window['_pXF32$']);window['_pXF32$'] = null, window['_pX23$F'] = function (yv67$, ou_mxf) {
  if (!yv67$ || !ou_mxf) return 0x0;yv67$ = yv67$['split']('.'), ou_mxf = ou_mxf['split']('.');const s4jki = Math[E[240626]](yv67$[E[240110]], ou_mxf[E[240110]]);while (yv67$[E[240110]] < s4jki) {
    yv67$['push']('0');
  }while (ou_mxf[E[240110]] < s4jki) {
    ou_mxf['push']('0');
  }for (var k$jyhi = 0x0; k$jyhi < s4jki; k$jyhi++) {
    const nq59e8 = parseInt(yv67$[k$jyhi]),
          wz350n = parseInt(ou_mxf[k$jyhi]);if (nq59e8 > wz350n) return 0x1;else {
      if (nq59e8 < wz350n) return -0x1;
    }
  }return 0x0;
}, window[E[240423]] = wx[E[243571]]()[E[240423]], console[E[240172]](E[243572] + window[E[240423]]);var p_$i16j = wx['getUpdateManager']();p_$i16j['onCheckForUpdate'](function (bqdg) {
  console[E[240172]](E[243573] + bqdg['hasUpdate']);
}), p_$i16j['onUpdateReady'](function () {
  wx[E[240316]]({ 'title': E[243574], 'content': E[243575], 'showCancel': ![], 'success': function (cagdqb) {
      p_$i16j['applyUpdate']();
    } });
}), p_$i16j['onUpdateFailed'](function () {
  console[E[240172]](E[243576]);
}), window['_pX$F23'] = function () {
  console[E[240172]]('protobuf 分包加载');var ls4htp = wx['loadSubpackage']({ 'name': 'pPF', 'success': function (n30w5) {
      console[E[240172]]('protobuf 分包加载成功'), console[E[240172]](n30w5), n30w5 && n30w5[E[240378]] == 'loadSubpackage:ok' ? (window['_p32'] = !![], window['_p3$F2'](), window['_p3$2F']()) : setTimeout(function () {
        window['_pX$F23']();
      }, 0x1f4);
    }, 'fail': function (ptxu4) {
      console[E[240172]]('protobuf 分包加载失败'), console[E[240172]](ptxu4), setTimeout(function () {
        window['_pX$F23']();
      }, 0x1f4);
    } });ls4htp && ls4htp['onProgressUpdate']($jhkiy => {});
}, window['_pX$2F3'] = function () {
  console[E[240172]](E[243577]);var $1ivy6 = wx['loadSubpackage']({ 'name': 'pp', 'success': function (v02z7) {
      console[E[240172]](E[243578]), console[E[240172]](v02z7), v02z7 && v02z7[E[240378]] == 'loadSubpackage:ok' ? (window['_p$23'] = !![], window['_p3$F2'](), window['_p3$2F']()) : setTimeout(function () {
        window['_pX$2F3']();
      }, 0x1f4);
    }, 'fail': function (ky6j$i) {
      console[E[240172]](E[243579]), console[E[240172]](ky6j$i), setTimeout(function () {
        window['_pX$2F3']();
      }, 0x1f4);
    } });$1ivy6 && $1ivy6['onProgressUpdate'](n5e39w => {});
};window['_pX23$F'](window[E[240423]], E[243580]) >= 0x0 ? (console[E[240172]](E[243581] + window[E[240423]] + E[243582]), window['_p$F'](), window['_pX$F23'](), window['_pX$2F3']()) : (window['_p$3F'](E[243583], window[E[240423]]), wx[E[240316]]({ 'title': E[240317], 'content': E[243584] }));window[E[240340]] = '', wx[E[243585]]({ 'success'(n3e59w) {
    window[E[240340]] = E[243586] + n3e59w[E[243587]] + E[243588] + n3e59w[E[243589]] + E[243590] + n3e59w[E[240295]] + E[243591] + n3e59w[E[241832]] + E[243592] + n3e59w['platform'] + E[243593] + n3e59w[E[240423]] + E[243594] + n3e59w[E[243595]], console[E[240172]](window[E[240340]]), console[E[240172]](E[243596] + n3e59w['pixelRatio'] + E[243597] + n3e59w[E[243598]] + E[243599] + n3e59w[E[243600]] + E[243601] + n3e59w[E[243602]] + E[243603] + n3e59w[E[243604]] + E[243605] + n3e59w[E[243606]] + E[243607] + (n3e59w[E[243608]] ? n3e59w[E[243608]]['top'] + ',' + n3e59w[E[243608]][E[240137]] + ',' + n3e59w[E[243608]][E[240489]] + ',' + n3e59w[E[243608]][E[240039]] : ''));var fmutx_ = n3e59w[E[241832]] ? n3e59w[E[241832]][E[241385]]() : '',
        vz27r = n3e59w[E[243589]] ? n3e59w[E[243589]][E[241385]]()['replace']('\x20', '') : '';window['_p$3'][E[240311]] = fmutx_[E[240279]](E[243609]) != -0x1, window['_p$3'][E[240312]] = fmutx_[E[240279]](E[243610]) != -0x1, window['_p$3'][E[240486]] = fmutx_[E[240279]](E[243609]) != -0x1 || fmutx_[E[240279]](E[243610]) != -0x1, window['_p$3'][E[240313]] = fmutx_[E[240279]](E[243611]) != -0x1 || fmutx_[E[240279]](E[240296]) != -0x1, window['_p$3'][E[240346]] = n3e59w['platform'] ? n3e59w['platform'][E[241385]]() : '', window['_p$3']['_pXF$23'] = ![], window['_p$3']['_pXF$32'] = 0x2;if (fmutx_[E[240279]](E[243610]) != -0x1) {
      if (n3e59w[E[243595]] >= 0x18) window['_p$3']['_pXF$32'] = 0x3;else window['_p$3']['_pXF$32'] = 0x2;
    } else {
      if (fmutx_[E[240279]](E[243609]) != -0x1) {
        if (n3e59w[E[243595]] && n3e59w[E[243595]] >= 0x14) window['_p$3']['_pXF$32'] = 0x3;else {
          if (vz27r[E[240279]]('iphone5') != -0x1 || vz27r[E[240279]]('iphone6') != -0x1 || vz27r[E[240279]]('iphone7') != -0x1 || vz27r[E[240279]]('iphonese') != -0x1 || vz27r[E[240279]]('ipad') != -0x1) window['_p$3']['_pXF$32'] = 0x2;else window['_p$3']['_pXF$32'] = 0x3;
        }
      } else window['_p$3']['_pXF$32'] = 0x2;
    }console[E[240172]](E[243612] + window['_p$3']['_pXF$23'] + E[243613] + window['_p$3']['_pXF$32']);
  } }), wx[E[240440]]({ 'success': function (y$6j) {
    console[E[240172]](E[243614] + y$6j[E[240442]] + E[243615] + y$6j[E[240444]]);
  } }), wx['getNetworkType']({ 'success': function (benq8) {
    console[E[240172]](E[243616] + benq8['networkType']);
  } }), wx['setKeepScreenOn']({ 'keepScreenOn': !![] }), wx[E[243617]](function (zn3w50) {
  console[E[240172]](E[243616] + zn3w50['networkType'] + E[243618] + zn3w50[E[243619]]);
}), wx[E[243620]](function (i$6ky) {
  window['_p3F2'] = i$6ky, window['_p32F'] && window['_p3F2'] && (console[E[240331]](E[240420] + window['_p3F2'][E[240421]]), window['_p32F'](window['_p3F2']), window['_p3F2'] = null);
}), window['_pX$3F2'] = 0x0, window[E[243621]] = null, wx[E[243622]](function () {
  window['_pX$3F2']++, wx[E[243623]]();if (window['_pX$3F2'] >= 0x2) {
    window['_pX$3F2'] = 0x0, console[E[240263]](E[243624]), wx['reportMonitor']('0', 0x1);if (window['_p$3'] && window['_p$3'][E[240311]]) window['_p$3F'](E[243625], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});