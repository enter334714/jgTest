var c = wx.$a;
console[c[598]](c[30519]), window[c[30520]], wx[c[30521]](function (s2xj1f) {
  if (s2xj1f) {
    if (s2xj1f[c[324]]) {
      var dvkhz6 = window[c[1062]][c[30522]][c[452]](new RegExp(/\./, 'g'), '_'),
          t735r = s2xj1f[c[324]],
          bo$cy0 = t735r[c[331]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);if (bo$cy0) for (var y0obc$ = 0x0; y0obc$ < bo$cy0[c[308]]; y0obc$++) {
        if (bo$cy0[y0obc$] && bo$cy0[y0obc$][c[308]] > 0x0) {
          var u2fx1 = parseInt(bo$cy0[y0obc$][c[452]](c[30523], '')[c[452]](':', ''));t735r = t735r[c[452]](bo$cy0[y0obc$], bo$cy0[y0obc$][c[452]](':' + u2fx1 + ':', ':' + (u2fx1 - 0x2) + ':'));
        }
      }t735r = t735r[c[452]](new RegExp(c[30524], 'g'), c[30525] + dvkhz6 + c[26707]), t735r = t735r[c[452]](new RegExp(c[30526], 'g'), c[30525] + dvkhz6 + c[26707]), s2xj1f[c[324]] = t735r;
    }var ew4u_ = { 'id': window[c[30527]][c[30528]], 'role': window[c[30527]][c[5445]], 'level': window[c[30527]][c[30529]], 'user': window[c[30527]][c[26608]], 'version': window[c[30527]][c[620]], 'cdn': window[c[30527]][c[5325]], 'pkgName': window[c[30527]][c[26609]], 'gamever': window[c[1062]][c[30522]], 'serverid': window[c[30527]][c[26603]] ? window[c[30527]][c[26603]][c[12388]] : 0x0, 'systemInfo': window[c[30530]], 'error': c[30531], 'stack': s2xj1f ? s2xj1f[c[324]] : '' },
        uoe_4 = JSON[c[5311]](ew4u_);console[c[485]](c[30532] + uoe_4), (!window[c[30520]] || window[c[30520]] != ew4u_[c[485]]) && (window[c[30520]] = ew4u_[c[485]], window[c[30533]](ew4u_));
  }
});import 'a1md5min.js';import 'ea1zlibs.js';window[c[30534]] = require(c[30535]);import 'a1index.js';import 'a1ibsmin.js';import 'a1wxmini.js';import 'a1initmin.js';console[c[598]](c[30536]), console[c[598]](c[30537]), jM1BE({ 'title': c[30538] });var gc0yob4 = { 'j6ME1B': !![] };new window[c[30539]](gc0yob4), window[c[30539]][c[666]][c[30540]]();if (window[c[30541]]) clearInterval(window[c[30541]]);window[c[30541]] = null, window[c[30542]] = function (_04oey, vnzh6) {
  if (!_04oey || !vnzh6) return 0x0;_04oey = _04oey[c[430]]('.'), vnzh6 = vnzh6[c[430]]('.');const x1uf2 = Math[c[477]](_04oey[c[308]], vnzh6[c[308]]);while (_04oey[c[308]] < x1uf2) {
    _04oey[c[330]]('0');
  }while (vnzh6[c[308]] < x1uf2) {
    vnzh6[c[330]]('0');
  }for (var m$alcb = 0x0; m$alcb < x1uf2; m$alcb++) {
    const g1xs2f = parseInt(_04oey[m$alcb]),
          eg2_w = parseInt(vnzh6[m$alcb]);if (g1xs2f > eg2_w) return 0x1;else {
      if (g1xs2f < eg2_w) return -0x1;
    }
  }return 0x0;
}, window[c[30543]] = wx[c[30544]]()[c[30543]], console[c[442]](c[30545] + window[c[30543]]);var gi573 = wx[c[30546]]();gi573[c[30547]](function (zq6hkd) {
  console[c[442]](c[30548] + zq6hkd[c[30549]]);
}), gi573[c[30550]](function () {
  wx[c[30551]]({ 'title': c[30552], 'content': c[30553], 'showCancel': ![], 'success': function (fjxv) {
      gi573[c[30554]]();
    } });
}), gi573[c[30555]](function () {
  console[c[442]](c[30556]);
}), window[c[30557]] = function () {
  console[c[442]](c[30558]);var xsjhnv = wx[c[30559]]({ 'name': c[30560], 'success': function (g4u_) {
      console[c[442]](c[30561]), console[c[442]](g4u_), g4u_ && g4u_[c[26802]] == c[30562] ? (window[c[30563]] = !![], window[c[30564]](), window[c[30565]]()) : setTimeout(function () {
        window[c[30557]]();
      }, 0x1f4);
    }, 'fail': function (ob0y4c) {
      console[c[442]](c[30566]), console[c[442]](ob0y4c), setTimeout(function () {
        window[c[30557]]();
      }, 0x1f4);
    } });xsjhnv && xsjhnv[c[30268]](ow4_ => {});
}, window[c[30567]] = function () {
  console[c[442]](c[30568]);var yo$c0 = wx[c[30559]]({ 'name': c[30569], 'success': function (eow_04) {
      console[c[442]](c[30570]), console[c[442]](eow_04), eow_04 && eow_04[c[26802]] == c[30562] ? (window[c[30571]] = !![], window[c[30564]](), window[c[30565]]()) : setTimeout(function () {
        window[c[30567]]();
      }, 0x1f4);
    }, 'fail': function (_oe0y4) {
      console[c[442]](c[30572]), console[c[442]](_oe0y4), setTimeout(function () {
        window[c[30567]]();
      }, 0x1f4);
    } });yo$c0 && yo$c0[c[30268]](k6dq8t => {});
}, window[c[30573]] = function () {
  window[c[30542]](window[c[30543]], c[30574]) >= 0x0 ? (console[c[442]](c[30575] + window[c[30543]] + c[30576]), window[c[30577]](), window[c[30557]](), window[c[30567]]()) : (window[c[30578]](c[30579], window[c[30543]]), wx[c[30551]]({ 'title': c[7177], 'content': c[30580] }));
}, window[c[30530]] = '', wx[c[30581]]({ 'success'(s12jfx) {
    window[c[30530]] = c[30582] + s12jfx[c[30583]] + c[30584] + s12jfx[c[30585]] + c[30586] + s12jfx[c[5516]] + c[30587] + s12jfx[c[983]] + c[30588] + s12jfx[c[26573]] + c[30589] + s12jfx[c[30543]] + c[30590] + s12jfx[c[10149]], console[c[442]](window[c[30530]]), console[c[442]](c[30591] + s12jfx[c[30592]] + c[30593] + s12jfx[c[30594]] + c[30595] + s12jfx[c[30596]] + c[30597] + s12jfx[c[30598]] + c[30599] + s12jfx[c[30600]] + c[30601] + s12jfx[c[30602]] + c[30603] + (s12jfx[c[30604]] ? s12jfx[c[30604]][c[826]] + ',' + s12jfx[c[30604]][c[1810]] + ',' + s12jfx[c[30604]][c[1812]] + ',' + s12jfx[c[30604]][c[1811]] : ''));var weu_4o = s12jfx[c[983]] ? s12jfx[c[983]][c[357]]() : '',
        qk6t8 = s12jfx[c[30585]] ? s12jfx[c[30585]][c[357]]()[c[452]]('\x20', '') : '';window[c[30527]][c[1598]] = weu_4o[c[390]](c[30605]) != -0x1, window[c[30527]][c[12210]] = weu_4o[c[390]](c[30500]) != -0x1, window[c[30527]][c[30606]] = weu_4o[c[390]](c[30605]) != -0x1 || weu_4o[c[390]](c[30500]) != -0x1, window[c[30527]][c[26304]] = weu_4o[c[390]](c[30607]) != -0x1 || weu_4o[c[390]](c[30608]) != -0x1, window[c[30527]][c[30609]] = s12jfx[c[26573]] ? s12jfx[c[26573]][c[357]]() : '', window[c[30527]][c[30610]] = ![], window[c[30527]][c[30611]] = 0x2;if (weu_4o[c[390]](c[30500]) != -0x1) {
      if (s12jfx[c[10149]] >= 0x18) window[c[30527]][c[30611]] = 0x3;else window[c[30527]][c[30611]] = 0x2;
    } else {
      if (weu_4o[c[390]](c[30605]) != -0x1) {
        if (s12jfx[c[10149]] && s12jfx[c[10149]] >= 0x14) window[c[30527]][c[30611]] = 0x3;else {
          if (qk6t8[c[390]](c[30612]) != -0x1 || qk6t8[c[390]](c[30613]) != -0x1 || qk6t8[c[390]](c[30614]) != -0x1 || qk6t8[c[390]](c[30615]) != -0x1 || qk6t8[c[390]](c[30616]) != -0x1) window[c[30527]][c[30611]] = 0x2;else window[c[30527]][c[30611]] = 0x3;
        }
      } else window[c[30527]][c[30611]] = 0x2;
    }console[c[442]](c[30617] + window[c[30527]][c[30610]] + c[30618] + window[c[30527]][c[30611]]);
  } }), wx[c[30619]]({ 'success': function (sjfnx1) {
    console[c[442]](c[30620] + sjfnx1[c[5422]] + c[30621] + sjfnx1[c[30622]]);
  } }), wx[c[12790]]({ 'success': function (nhzvsj) {
    console[c[442]](c[30623] + nhzvsj[c[14102]]);
  } }), wx[c[30624]]({ 'keepScreenOn': !![] }), wx[c[12792]](function (nsfvxj) {
  console[c[442]](c[30623] + nsfvxj[c[14102]] + c[30625] + nsfvxj[c[30626]]);
}), wx[c[11716]](function (we_o4) {
  window[c[30627]] = we_o4, window[c[30628]] && window[c[30627]] && (console[c[598]](c[30629] + window[c[30627]][c[1301]]), window[c[30628]](window[c[30627]]), window[c[30627]] = null);
}), window[c[30630]] = 0x0, window[c[30631]] = 0x0, window[c[30632]] = null, wx[c[30633]](function () {
  window[c[30631]]++;var jxh = Date[c[603]]();(window[c[30630]] == 0x0 || jxh - window[c[30630]] > 0x1d4c0) && (console[c[498]](c[30634]), wx[c[12862]]());if (window[c[30631]] >= 0x2) {
    window[c[30631]] = 0x0, console[c[485]](c[30635]), wx[c[30636]]('0', 0x1);if (window[c[30527]] && window[c[30527]][c[1598]]) window[c[30578]](c[30637], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});