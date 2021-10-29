var b = wx.$e;
console[b[40075]](b[66419]), window['lastError'], wx['onError'](function (uwamv) {
  if (uwamv) {
    if (uwamv[b[43840]]) {
      var gsh4 = window[b[40497]][b[66420]][b[44004]](new RegExp(/\./, 'g'), '_'),
          fs_94 = uwamv[b[43840]],
          j5r01 = fs_94[b[50560]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (j5r01) for (var hgl_x = 0x0; hgl_x < j5r01[b[40012]]; hgl_x++) {
        if (j5r01[hgl_x] && j5r01[hgl_x][b[40012]] > 0x0) {
          var do01 = parseInt(j5r01[hgl_x][b[44004]](b[66421], '')[b[44004]](':', ''));fs_94 = fs_94[b[44004]](j5r01[hgl_x], j5r01[hgl_x][b[44004]](':' + do01 + ':', ':' + (do01 - 0x2) + ':'));
        }
      }fs_94 = fs_94[b[44004]](new RegExp(b[66422], 'g'), b[66423] + gsh4 + b[62981]), fs_94 = fs_94[b[44004]](new RegExp(b[66424], 'g'), b[66423] + gsh4 + b[62981]), uwamv[b[43840]] = fs_94;
    }var l_h4gx = { 'id': window['E$VE'][b[66425]], 'role': window['E$VE'][b[43950]], 'level': window['E$VE'][b[66426]], 'user': window['E$VE'][b[62892]], 'version': window['E$VE'][b[40097]], 'gamever': window[b[40497]][b[66420]], 'cdn': window['E$VE'][b[43839]], 'serverid': window['E$VE'][b[62887]] ? window['E$VE'][b[62887]][b[50146]] : 0x0, 'systemInfo': window[b[66427]], 'error': 'MiniProgramError', 'stack': uwamv ? uwamv[b[43840]] : '' },
        a3uwm = JSON[b[43825]](l_h4gx);console[b[40121]](b[66428] + a3uwm), (!window['lastError'] || window['lastError'] != l_h4gx[b[40121]]) && (window['lastError'] = l_h4gx[b[40121]], window['E$OV'](l_h4gx));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[66429]] = require(b[66430]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[40075]](b[66431]), console[b[40075]](b[66432]), E$OVCE({ 'title': b[66433] });var els4g_h = { 'E$NCOVE': !![] };new window[b[66434]](els4g_h), window[b[66434]][b[40144]]['E$NCEOV']();if (window['E$NOECV']) clearInterval(window['E$NOECV']);window['E$NOECV'] = null, window['E$NCEVO'] = function (uav3xk, q9ei) {
  if (!uav3xk || !q9ei) return 0x0;uav3xk = uav3xk[b[40014]]('.'), q9ei = q9ei[b[40014]]('.');const uxav = Math[b[40773]](uav3xk[b[40012]], q9ei[b[40012]]);while (uav3xk[b[40012]] < uxav) {
    uav3xk[b[40028]]('0');
  }while (q9ei[b[40012]] < uxav) {
    q9ei[b[40028]]('0');
  }for (var e29ft = 0x0; e29ft < uxav; e29ft++) {
    const mwnu6 = parseInt(uav3xk[e29ft]),
          piybq = parseInt(q9ei[e29ft]);if (mwnu6 > piybq) return 0x1;else {
      if (mwnu6 < piybq) return -0x1;
    }
  }return 0x0;
}, window[b[66435]] = wx[b[66436]]()[b[66435]], console[b[40422]](b[66437] + window[b[66435]]);var ern5d$ = wx[b[66438]]();ern5d$[b[66439]](function (zet9sf) {
  console[b[40422]](b[66440] + zet9sf[b[66441]]);
}), ern5d$[b[66442]](function () {
  wx[b[66443]]({ 'title': b[66444], 'content': b[66445], 'showCancel': ![], 'success': function (kghx_l) {
      ern5d$[b[66446]]();
    } });
}), ern5d$[b[66447]](function () {
  console[b[40422]](b[66448]);
}), window['E$NVOCE'] = function () {
  console[b[40422]](b[66449]);var qiet2 = wx[b[66450]]({ 'name': b[66451], 'success': function (efs9tz) {
      console[b[40422]](b[66452]), console[b[40422]](efs9tz), efs9tz && efs9tz[b[63055]] == b[66453] ? (window['E$EC'] = !![], window['E$EVOC'](), window['E$EVCO']()) : setTimeout(function () {
        window['E$NVOCE']();
      }, 0x1f4);
    }, 'fail': function (rj8701) {
      console[b[40422]](b[66454]), console[b[40422]](rj8701), setTimeout(function () {
        window['E$NVOCE']();
      }, 0x1f4);
    } });qiet2 && qiet2[b[66455]](xh_4l => {});
}, window['E$NVCOE'] = function () {
  console[b[40422]](b[66456]);var xklgh = wx[b[66450]]({ 'name': b[66457], 'success': function (w6o$nd) {
      console[b[40422]](b[66458]), console[b[40422]](w6o$nd), w6o$nd && w6o$nd[b[63055]] == b[66453] ? (window['E$VCE'] = !![], window['E$EVOC'](), window['E$EVCO']()) : setTimeout(function () {
        window['E$NVCOE']();
      }, 0x1f4);
    }, 'fail': function (o$6n5) {
      console[b[40422]](b[66459]), console[b[40422]](o$6n5), setTimeout(function () {
        window['E$NVCOE']();
      }, 0x1f4);
    } });xklgh && xklgh[b[66455]](lxkh => {});
}, window[b[66460]] = function () {
  window['E$NCEVO'](window[b[66435]], b[66461]) >= 0x0 ? (console[b[40422]](b[66462] + window[b[66435]] + b[66463]), window['E$VO'](), window['E$NVOCE'](), window['E$NVCOE']()) : (window['E$VEO'](b[66464], window[b[66435]]), wx[b[66443]]({ 'title': b[45601], 'content': b[66465] }));
}, window[b[66427]] = '', wx[b[66466]]({ 'success'(kahxgl) {
    window[b[66427]] = b[66467] + kahxgl[b[66468]] + b[66469] + kahxgl[b[66470]] + b[66471] + kahxgl[b[44017]] + b[66472] + kahxgl[b[40415]] + b[66473] + kahxgl[b[62865]] + b[66474] + kahxgl[b[66435]] + b[66475] + kahxgl[b[48191]], console[b[40422]](window[b[66427]]), console[b[40422]](b[66476] + kahxgl[b[66477]] + b[66478] + kahxgl[b[66479]] + b[66480] + kahxgl[b[66481]] + b[66482] + kahxgl[b[66483]] + b[66484] + kahxgl[b[66485]] + b[66486] + kahxgl[b[66487]] + b[66488] + (kahxgl[b[66489]] ? kahxgl[b[66489]][b[40301]] + ',' + kahxgl[b[66489]][b[41039]] + ',' + kahxgl[b[66489]][b[41041]] + ',' + kahxgl[b[66489]][b[41040]] : ''));var qpi2b = kahxgl[b[40415]] ? kahxgl[b[40415]][b[50809]]() : '',
        n5$od6 = kahxgl[b[66470]] ? kahxgl[b[66470]][b[50809]]()[b[44004]]('\x20', '') : '';window['E$VE'][b[40452]] = qpi2b[b[40111]](b[66170]) != -0x1, window['E$VE'][b[50001]] = qpi2b[b[40111]](b[66169]) != -0x1, window['E$VE'][b[66490]] = qpi2b[b[40111]](b[66170]) != -0x1 || qpi2b[b[40111]](b[66169]) != -0x1, window['E$VE'][b[62610]] = qpi2b[b[40111]](b[66491]) != -0x1 || qpi2b[b[40111]](b[66175]) != -0x1, window['E$VE'][b[66492]] = kahxgl[b[62865]] ? kahxgl[b[62865]][b[50809]]() : '', window['E$VE']['E$NOVCE'] = ![], window['E$VE']['E$NOVEC'] = 0x2;if (qpi2b[b[40111]](b[66169]) != -0x1) {
      if (kahxgl[b[48191]] >= 0x18) window['E$VE']['E$NOVEC'] = 0x3;else window['E$VE']['E$NOVEC'] = 0x2;
    } else {
      if (qpi2b[b[40111]](b[66170]) != -0x1) {
        if (kahxgl[b[48191]] && kahxgl[b[48191]] >= 0x14) window['E$VE']['E$NOVEC'] = 0x3;else {
          if (n5$od6[b[40111]](b[66493]) != -0x1 || n5$od6[b[40111]](b[66494]) != -0x1 || n5$od6[b[40111]](b[66495]) != -0x1 || n5$od6[b[40111]](b[66496]) != -0x1 || n5$od6[b[40111]](b[66497]) != -0x1) window['E$VE']['E$NOVEC'] = 0x2;else window['E$VE']['E$NOVEC'] = 0x3;
        }
      } else window['E$VE']['E$NOVEC'] = 0x2;
    }console[b[40422]](b[66498] + window['E$VE']['E$NOVCE'] + b[66499] + window['E$VE']['E$NOVEC']);
  } }), wx[b[66500]]({ 'success': function (uxv3ak) {
    console[b[40422]](b[66501] + uxv3ak[b[43929]] + b[66502] + uxv3ak[b[66503]]);
  } }), wx[b[66504]]({ 'success': function (uw3v) {
    console[b[40422]](b[66505] + uw3v[b[66506]]);
  } }), wx[b[66507]]({ 'keepScreenOn': !![] }), wx[b[66508]](function (xlga) {
  console[b[40422]](b[66505] + xlga[b[66506]] + b[66509] + xlga[b[66510]]);
}), wx[b[66511]](function (au3vmk) {
  window['E$EOC'] = au3vmk, window['E$ECO'] && window['E$EOC'] && (console[b[40075]](b[66512] + window['E$EOC'][b[40696]]), window['E$ECO'](window['E$EOC']), window['E$EOC'] = null);
}), window['E$NVEOC'] = 0x0, window[b[66513]] = null, wx[b[66514]](function () {
  window['E$NVEOC']++, wx[b[50372]]();if (window['E$NVEOC'] >= 0x2) {
    window['E$NVEOC'] = 0x0, console[b[40121]](b[66515]), wx[b[66516]]('0', 0x1);if (window['E$VE'] && window['E$VE'][b[40452]]) window['E$VEO'](b[66517], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});