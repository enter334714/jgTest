var E = wx.$p;
console[E[240331]](E[243562]), window[E[243563]], wx[E[241495]](function (ag8qb9) {
  if (ag8qb9) {
    if (ag8qb9[E[240813]]) {
      var mxu = window[E[240290]][E[240291]]['replace'](new RegExp(/\./, 'g'), '_'),
          tpl4x = ag8qb9[E[240813]],
          z0vr2 = tpl4x[E[241142]](/(pp\/pppGAME.js:)[0-9]{1,60}(:)/g);if (z0vr2) for (var hijy$k = 0x0; hijy$k < z0vr2[E[240110]]; hijy$k++) {
        if (z0vr2[hijy$k] && z0vr2[hijy$k][E[240110]] > 0x0) {
          var lfu_ = parseInt(z0vr2[hijy$k]['replace']('pp/pppGAME.js:', '')['replace'](':', ''));tpl4x = tpl4x['replace'](z0vr2[hijy$k], z0vr2[hijy$k]['replace'](':' + lfu_ + ':', ':' + (lfu_ - 0x2) + ':'));
        }
      }tpl4x = tpl4x['replace'](new RegExp('pp/pppGAME.js', 'g'), 'pp/main__' + mxu + E[243564]), tpl4x = tpl4x['replace'](new RegExp('pp/ppppMAIN.js', 'g'), 'pp/main__' + mxu + E[243564]), ag8qb9[E[240813]] = tpl4x;
    }var gb9 = { 'id': window['_p$3'][E[240336]], 'role': window['_p$3'][E[240337]], 'level': window['_p$3'][E[240338]], 'user': window['_p$3'][E[240339]], 'version': window['_p$3'][E[240125]], 'gamever': window[E[240290]][E[240291]], 'cdn': window['_p$3'][E[240189]], 'serverid': window['_p$3'][E[240088]] ? window['_p$3'][E[240088]][E[240089]] : 0x0, 'systemInfo': window[E[240340]], 'error': E[243565], 'stack': ag8qb9 ? ag8qb9[E[240813]] : '' },
        y$i16j = JSON[E[240261]](gb9);console[E[240263]](E[243566] + y$i16j), (!window[E[243563]] || window[E[243563]] != gb9[E[240263]]) && (window[E[243563]] = gb9[E[240263]], window['_pF$'](gb9));
  }
});import 'ppMDadfap.js';import 'pp12asz.js';window[E[243567]] = require('pppparse.js');import 'pINDEX.js';import 'ppLIBsdsa.js';import 'pppWXMsad.js';import 'ooooINITMIN.js';import 'SyMiniTool.js';console[E[240331]](E[243568]), console[E[240331]](E[243569]), _pF$23({ 'title': E[243570] });var p_tlu4px = { '_pX2F$3': !![] };new window[E[240288]](p_tlu4px), window[E[240288]][E[240085]]['_pX23F$']();if (window['_pXF32$']) clearInterval(window['_pXF32$']);window['_pXF32$'] = null, window['_pX23$F'] = function (w5ne89, n5ezw) {
  if (!w5ne89 || !n5ezw) return 0x0;w5ne89 = w5ne89['split']('.'), n5ezw = n5ezw['split']('.');const tlxf_ = Math[E[240626]](w5ne89[E[240110]], n5ezw[E[240110]]);while (w5ne89[E[240110]] < tlxf_) {
    w5ne89['push']('0');
  }while (n5ezw[E[240110]] < tlxf_) {
    n5ezw['push']('0');
  }for (var cdba = 0x0; cdba < tlxf_; cdba++) {
    const xfpt = parseInt(w5ne89[cdba]),
          nz3e5 = parseInt(n5ezw[cdba]);if (xfpt > nz3e5) return 0x1;else {
      if (xfpt < nz3e5) return -0x1;
    }
  }return 0x0;
}, window[E[240423]] = wx[E[243571]]()[E[240423]], console[E[240172]](E[243572] + window[E[240423]]);var p_ftxlu = wx['getUpdateManager']();p_ftxlu['onCheckForUpdate'](function (_futx) {
  console[E[240172]](E[243573] + _futx['hasUpdate']);
}), p_ftxlu['onUpdateReady'](function () {
  wx[E[240316]]({ 'title': E[243574], 'content': E[243575], 'showCancel': ![], 'success': function (pjshk4) {
      p_ftxlu['applyUpdate']();
    } });
}), p_ftxlu['onUpdateFailed'](function () {
  console[E[240172]](E[243576]);
}), window['_pX$F23'] = function () {
  console[E[240172]]('protobuf 分包加载');var ac8gbq = wx['loadSubpackage']({ 'name': 'pPF', 'success': function ($ykhj) {
      console[E[240172]]('protobuf 分包加载成功'), console[E[240172]]($ykhj), $ykhj && $ykhj[E[240378]] == 'loadSubpackage:ok' ? (window['_p32'] = !![], window['_p3$F2'](), window['_p3$2F']()) : setTimeout(function () {
        window['_pX$F23']();
      }, 0x1f4);
    }, 'fail': function (a9e8q) {
      console[E[240172]]('protobuf 分包加载失败'), console[E[240172]](a9e8q), setTimeout(function () {
        window['_pX$F23']();
      }, 0x1f4);
    } });ac8gbq && ac8gbq['onProgressUpdate'](_fxtu => {});
}, window['_pX$2F3'] = function () {
  console[E[240172]](E[243577]);var m_foux = wx['loadSubpackage']({ 'name': 'pp', 'success': function (_fxtl) {
      console[E[240172]](E[243578]), console[E[240172]](_fxtl), _fxtl && _fxtl[E[240378]] == 'loadSubpackage:ok' ? (window['_p$23'] = !![], window['_p3$F2'](), window['_p3$2F']()) : setTimeout(function () {
        window['_pX$2F3']();
      }, 0x1f4);
    }, 'fail': function (z03w) {
      console[E[240172]](E[243579]), console[E[240172]](z03w), setTimeout(function () {
        window['_pX$2F3']();
      }, 0x1f4);
    } });m_foux && m_foux['onProgressUpdate'](w5z03n => {});
}, window['loadSubpackages'] = function () {
  window['_pX23$F'](window[E[240423]], E[243580]) >= 0x0 ? (console[E[240172]](E[243581] + window[E[240423]] + E[243582]), window['_p$F'](), window['_pX$F23'](), window['_pX$2F3']()) : (window['_p$3F'](E[243583], window[E[240423]]), wx[E[240316]]({ 'title': E[240317], 'content': E[243584] }));
}, window[E[240340]] = '', wx[E[243585]]({ 'success'(r2v1) {
    window[E[240340]] = E[243586] + r2v1[E[243587]] + E[243588] + r2v1[E[243589]] + E[243590] + r2v1[E[240295]] + E[243591] + r2v1[E[241832]] + E[243592] + r2v1['platform'] + E[243593] + r2v1[E[240423]] + E[243594] + r2v1[E[243595]], console[E[240172]](window[E[240340]]), console[E[240172]](E[243596] + r2v1['pixelRatio'] + E[243597] + r2v1[E[243598]] + E[243599] + r2v1[E[243600]] + E[243601] + r2v1[E[243602]] + E[243603] + r2v1[E[243604]] + E[243605] + r2v1[E[243606]] + E[243607] + (r2v1[E[243608]] ? r2v1[E[243608]]['top'] + ',' + r2v1[E[243608]][E[240137]] + ',' + r2v1[E[243608]][E[240489]] + ',' + r2v1[E[243608]][E[240039]] : ''));var fxtu_m = r2v1[E[241832]] ? r2v1[E[241832]][E[241385]]() : '',
        xfp = r2v1[E[243589]] ? r2v1[E[243589]][E[241385]]()['replace']('\x20', '') : '';window['_p$3'][E[240311]] = fxtu_m[E[240279]](E[243609]) != -0x1, window['_p$3'][E[240312]] = fxtu_m[E[240279]](E[243610]) != -0x1, window['_p$3'][E[240486]] = fxtu_m[E[240279]](E[243609]) != -0x1 || fxtu_m[E[240279]](E[243610]) != -0x1, window['_p$3'][E[240313]] = fxtu_m[E[240279]](E[243611]) != -0x1 || fxtu_m[E[240279]](E[240296]) != -0x1, window['_p$3'][E[240346]] = r2v1['platform'] ? r2v1['platform'][E[241385]]() : '', window['_p$3']['_pXF$23'] = ![], window['_p$3']['_pXF$32'] = 0x2;if (fxtu_m[E[240279]](E[243610]) != -0x1) {
      if (r2v1[E[243595]] >= 0x18) window['_p$3']['_pXF$32'] = 0x3;else window['_p$3']['_pXF$32'] = 0x2;
    } else {
      if (fxtu_m[E[240279]](E[243609]) != -0x1) {
        if (r2v1[E[243595]] && r2v1[E[243595]] >= 0x14) window['_p$3']['_pXF$32'] = 0x3;else {
          if (xfp[E[240279]]('iphone5') != -0x1 || xfp[E[240279]]('iphone6') != -0x1 || xfp[E[240279]]('iphone7') != -0x1 || xfp[E[240279]]('iphonese') != -0x1 || xfp[E[240279]]('ipad') != -0x1) window['_p$3']['_pXF$32'] = 0x2;else window['_p$3']['_pXF$32'] = 0x3;
        }
      } else window['_p$3']['_pXF$32'] = 0x2;
    }console[E[240172]](E[243612] + window['_p$3']['_pXF$23'] + E[243613] + window['_p$3']['_pXF$32']);
  } }), wx[E[240440]]({ 'success': function (_ftuxl) {
    console[E[240172]](E[243614] + _ftuxl[E[240442]] + E[243615] + _ftuxl[E[240444]]);
  } }), wx['getNetworkType']({ 'success': function (cdbqg) {
    console[E[240172]](E[243616] + cdbqg['networkType']);
  } }), wx['setKeepScreenOn']({ 'keepScreenOn': !![] }), wx[E[243617]](function (f_xmut) {
  console[E[240172]](E[243616] + f_xmut['networkType'] + E[243618] + f_xmut[E[243619]]);
}), wx[E[243620]](function (pjhs) {
  window['_p3F2'] = pjhs, window['_p32F'] && window['_p3F2'] && (console[E[240331]](E[240420] + window['_p3F2'][E[240421]]), window['_p32F'](window['_p3F2']), window['_p3F2'] = null);
}), window['_pX$3F2'] = 0x0, window[E[243621]] = null, wx[E[243622]](function () {
  window['_pX$3F2']++, wx[E[243623]]();if (window['_pX$3F2'] >= 0x2) {
    window['_pX$3F2'] = 0x0, console[E[240263]](E[243624]), wx['reportMonitor']('0', 0x1);if (window['_p$3'] && window['_p$3'][E[240311]]) window['_p$3F'](E[243625], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});