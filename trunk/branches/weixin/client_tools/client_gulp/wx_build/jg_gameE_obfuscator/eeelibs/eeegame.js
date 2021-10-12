var b = wx.$e;
console[b[30075]](b[56322]), window['lastError'], wx['onError'](function (yt4o_7) {
  if (yt4o_7) {
    if (yt4o_7[b[33833]]) {
      var q2$9 = window[b[30497]][b[56323]][b[33997]](new RegExp(/\./, 'g'), '_'),
          zo5_ms = yt4o_7[b[33833]],
          zd5rs = zo5_ms[b[40513]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (zd5rs) for (var djrk6a = 0x0; djrk6a < zd5rs[b[30012]]; djrk6a++) {
        var h830u;zd5rs[djrk6a] && 0x0 < zd5rs[djrk6a][b[30012]] && (h830u = parseInt(zd5rs[djrk6a][b[33997]](b[56324], '')[b[33997]](':', '')), zo5_ms = zo5_ms[b[33997]](zd5rs[djrk6a], zd5rs[djrk6a][b[33997]](':' + h830u + ':', ':' + (h830u - 0x2) + ':')));
      }zo5_ms = (zo5_ms = zo5_ms[b[33997]](new RegExp(b[56325], 'g'), b[56326] + q2$9 + b[52918]))[b[33997]](new RegExp(b[56327], 'g'), b[56326] + q2$9 + b[52918]), yt4o_7[b[33833]] = zo5_ms;
    }q2$9 = { 'id': window['E$BK'][b[56328]], 'role': window['E$BK'][b[33943]], 'level': window['E$BK'][b[56329]], 'user': window['E$BK'][b[52829]], 'version': window['E$BK'][b[30097]], 'gamever': window[b[30497]][b[56323]], 'cdn': window['E$BK'][b[33831]], 'serverid': window['E$BK'][b[52824]] ? window['E$BK'][b[52824]][b[40114]] : 0x0, 'systemInfo': window[b[56330]], 'error': 'MiniProgramError', 'stack': yt4o_7 ? yt4o_7[b[33833]] : '' }, yt4o_7 = JSON[b[33819]](q2$9), (console[b[30121]](b[56331] + yt4o_7), window['lastError'] && window['lastError'] == q2$9[b[30121]] || (window['lastError'] = q2$9[b[30121]], window['E$UB'](q2$9)));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[56332]] = require(b[56333]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[30075]](b[56334]), console[b[30075]](b[56335]), E$UBEK({ 'title': b[56336] });var ega0jk = { 'E$IEUBK': !0x0 };new window[b[56337]](ega0jk), window[b[56337]][b[30144]]['E$IEKUB'](), window['E$IUKEB'] && clearInterval(window['E$IUKEB']), window['E$IUKEB'] = null, window['E$IEKBU'] = function (u8ep, jak6rd) {
  if (!u8ep || !jak6rd) return 0x0;u8ep = u8ep[b[30014]]('.'), jak6rd = jak6rd[b[30014]]('.');var hpneu = Math[b[30772]](u8ep[b[30012]], jak6rd[b[30012]]);for (; u8ep[b[30012]] < hpneu;) u8ep[b[30028]]('0');for (; jak6rd[b[30012]] < hpneu;) jak6rd[b[30028]]('0');for (var puh0n8 = 0x0; puh0n8 < hpneu; puh0n8++) {
    var yto4i = parseInt(u8ep[puh0n8]),
        hn8pu = parseInt(jak6rd[puh0n8]);if (hn8pu < yto4i) return 0x1;if (yto4i < hn8pu) return -0x1;
  }return 0x0;
}, window[b[56338]] = wx[b[56339]]()[b[56338]], console[b[30422]](b[56340] + window[b[56338]]);var ey1i74l = wx[b[56341]]();ey1i74l[b[56342]](function (np80hu) {
  console[b[30422]](b[56343] + np80hu[b[56344]]);
}), ey1i74l[b[56345]](function () {
  wx[b[56346]]({ 'title': b[56347], 'content': b[56348], 'showCancel': !0x1, 'success': function (_rmz) {
      ey1i74l[b[56349]]();
    } });
}), ey1i74l[b[56350]](function () {
  console[b[30422]](b[56351]);
}), window['E$IBUEK'] = function () {
  console[b[30422]](b[56352]);var nph0 = wx[b[56353]]({ 'name': b[56354], 'success': function (enbu) {
      console[b[30422]](b[56355]), console[b[30422]](enbu), enbu && b[56356] == enbu[b[52983]] ? (window['E$KE'] = !0x0, window['E$KBUE'](), window['E$KBEU']()) : setTimeout(function () {
        window['E$IBUEK']();
      }, 0x1f4);
    }, 'fail': function (dg) {
      console[b[30422]](b[56357]), console[b[30422]](dg), setTimeout(function () {
        window['E$IBUEK']();
      }, 0x1f4);
    } });nph0 && nph0[b[56358]](kga6dj => {});
}, window['E$IBEUK'] = function () {
  console[b[30422]](b[56359]);var g3ph80 = wx[b[56353]]({ 'name': b[56360], 'success': function (rsj6kd) {
      console[b[30422]](b[56361]), console[b[30422]](rsj6kd), rsj6kd && b[56356] == rsj6kd[b[52983]] ? (window['E$BEK'] = !0x0, window['E$KBUE'](), window['E$KBEU']()) : setTimeout(function () {
        window['E$IBEUK']();
      }, 0x1f4);
    }, 'fail': function (g0h38a) {
      console[b[30422]](b[56362]), console[b[30422]](g0h38a), setTimeout(function () {
        window['E$IBEUK']();
      }, 0x1f4);
    } });g3ph80 && g3ph80[b[56358]](_zom => {});
}, window[b[56363]] = function () {
  0x0 <= window['E$IEKBU'](window[b[56338]], b[56364]) ? (console[b[30422]](b[56365] + window[b[56338]] + b[56366]), window['E$BU'](), window['E$IBUEK'](), window['E$IBEUK']()) : (window['E$BKU'](b[56367] + window[b[56338]]), wx[b[56346]]({ 'title': b[35562], 'content': b[56368] }));
}, window[b[56330]] = '', wx[b[56369]]({ 'success'(wv92$b) {
    window[b[56330]] = b[56370] + wv92$b[b[56371]] + b[56372] + wv92$b[b[56373]] + b[56374] + wv92$b[b[34010]] + b[56375] + wv92$b[b[30415]] + b[56376] + wv92$b[b[52802]] + b[56377] + wv92$b[b[56338]] + b[56378] + wv92$b[b[38160]], console[b[30422]](window[b[56330]]), console[b[30422]](b[56379] + wv92$b[b[56380]] + b[56381] + wv92$b[b[56382]] + b[56383] + wv92$b[b[56384]] + b[56385] + wv92$b[b[56386]] + b[56387] + wv92$b[b[56388]] + b[56389] + wv92$b[b[56390]] + b[56391] + (wv92$b[b[56392]] ? wv92$b[b[56392]][b[30301]] + ',' + wv92$b[b[56392]][b[31037]] + ',' + wv92$b[b[56392]][b[31039]] + ',' + wv92$b[b[56392]][b[31038]] : ''));var ito7 = wv92$b[b[30415]] ? wv92$b[b[30415]][b[40762]]() : '',
        l47yi = wv92$b[b[56373]] ? wv92$b[b[56373]][b[40762]]()[b[33997]]('\x20', '') : '';window['E$BK'][b[30452]] = -0x1 != ito7[b[30111]](b[56101]), window['E$BK'][b[39968]] = -0x1 != ito7[b[30111]](b[56100]), window['E$BK'][b[56393]] = -0x1 != ito7[b[30111]](b[56101]) || -0x1 != ito7[b[30111]](b[56100]), window['E$BK'][b[52490]] = -0x1 != ito7[b[30111]](b[56394]) || -0x1 != ito7[b[30111]](b[56395]), window['E$BK'][b[56396]] = wv92$b[b[52802]] ? wv92$b[b[52802]][b[40762]]() : '', window['E$BK']['E$IUBEK'] = !0x1, window['E$BK']['E$IUBKE'] = 0x2, -0x1 != ito7[b[30111]](b[56100]) ? 0x18 <= wv92$b[b[38160]] ? window['E$BK']['E$IUBKE'] = 0x3 : window['E$BK']['E$IUBKE'] = 0x2 : -0x1 == ito7[b[30111]](b[56101]) || !(wv92$b[b[38160]] && 0x14 <= wv92$b[b[38160]] || -0x1 == l47yi[b[30111]](b[56397]) && -0x1 == l47yi[b[30111]](b[56398]) && -0x1 == l47yi[b[30111]](b[56399]) && -0x1 == l47yi[b[30111]](b[56400]) && -0x1 == l47yi[b[30111]](b[56401])) ? window['E$BK']['E$IUBKE'] = 0x2 : window['E$BK']['E$IUBKE'] = 0x3, console[b[30422]](b[56402] + window['E$BK']['E$IUBEK'] + b[56403] + window['E$BK']['E$IUBKE']);
  } }), wx[b[56404]]({ 'success': function (nwue) {
    console[b[30422]](b[56405] + nwue[b[33922]] + b[56406] + nwue[b[56407]]);
  } }), wx[b[56408]]({ 'success': function (upnhb) {
    console[b[30422]](b[56409] + upnhb[b[56410]]);
  } }), wx[b[56411]]({ 'keepScreenOn': !0x0 }), wx[b[56412]](function (w29qx$) {
  console[b[30422]](b[56409] + w29qx$[b[56410]] + b[56413] + w29qx$[b[56414]]);
}), wx[b[56415]](function (bupev) {
  window['E$KUE'] = bupev, window['E$KEU'] && window['E$KUE'] && (console[b[30075]](b[56416] + window['E$KUE'][b[30695]]), window['E$KEU'](window['E$KUE']), window['E$KUE'] = null);
}), window['E$IBKUE'] = 0x0, window[b[56417]] = null, wx[b[56418]](function () {
  window['E$IBKUE']++, wx[b[40325]](), 0x2 <= window['E$IBKUE'] && (window['E$IBKUE'] = 0x0, console[b[30121]](b[56419]), wx[b[56420]]('0', 0x1), window['E$BK'] && window['E$BK'][b[30452]] && window['E$BKU'](b[56421]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});