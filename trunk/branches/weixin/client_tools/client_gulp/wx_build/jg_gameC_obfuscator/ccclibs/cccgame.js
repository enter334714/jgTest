var p = wx.$h;
console[p[20078]](p[47801]), window[p[47802]], wx[p[47803]](function (t5d) {
  if (t5d) {
    if (t5d[p[24419]]) {
      var r4pnwa = window[p[20547]][p[47804]][p[24595]](new RegExp(/\./, 'g'), '_'),
          c1d5st = t5d[p[24419]],
          jf3t = c1d5st[p[31564]](/(cccccccc\/cccgame.js:)[0-9]{1,60}(:)/g);if (jf3t) for (var a3fj7 = 0x0; a3fj7 < jf3t[p[20013]]; a3fj7++) {
        if (jf3t[a3fj7] && jf3t[a3fj7][p[20013]] > 0x0) {
          var b9qzyo = parseInt(jf3t[a3fj7][p[24595]](p[47805], '')[p[24595]](':', ''));c1d5st = c1d5st[p[24595]](jf3t[a3fj7], jf3t[a3fj7][p[24595]](':' + b9qzyo + ':', ':' + (b9qzyo - 0x2) + ':'));
        }
      }c1d5st = c1d5st[p[24595]](new RegExp(p[47806], 'g'), p[47807] + r4pnwa + p[44344]), c1d5st = c1d5st[p[24595]](new RegExp(p[47808], 'g'), p[47807] + r4pnwa + p[44344]), t5d[p[24419]] = c1d5st;
    }var yob$ei = { 'id': window['$aQV'][p[47809]], 'role': window['$aQV'][p[24537]], 'level': window['$aQV'][p[47810]], 'user': window['$aQV'][p[44247]], 'version': window['$aQV'][p[20101]], 'gamever': window[p[20547]][p[47804]], 'cdn': window['$aQV'][p[24418]], 'serverid': window['$aQV'][p[44242]] ? window['$aQV'][p[44242]][p[31126]] : 0x0, 'systemInfo': window[p[47811]], 'error': p[47812], 'stack': t5d ? t5d[p[24419]] : '' },
        jt374 = JSON[p[24404]](yob$ei);console[p[20125]](p[47813] + jt374), (!window[p[47802]] || window[p[47802]] != yob$ei[p[20125]]) && (window[p[47802]] = yob$ei[p[20125]], window['$a5Q'](yob$ei));
  }
});import 'cccmd5min.js';import 'ccczlibs.js';window[p[47814]] = require(p[47815]);import 'cccindex.js';import 'ccclibsmin.js';import 'cccwxmini.js';import 'cccinitmin.js';console[p[20078]](p[47816]), console[p[20078]](p[47817]), $a5Q3V({ 'title': p[47818] });var a_k$6ye = { '$aH35QV': !![] };new window[p[47819]](a_k$6ye), window[p[47819]][p[20148]]['$aH3V5Q']();if (window['$aH5V3Q']) clearInterval(window['$aH5V3Q']);window['$aH5V3Q'] = null, window['$aH3VQ5'] = function (cs5td, $ek86i) {
  if (!cs5td || !$ek86i) return 0x0;cs5td = cs5td[p[20015]]('.'), $ek86i = $ek86i[p[20015]]('.');const an4w = Math[p[20842]](cs5td[p[20013]], $ek86i[p[20013]]);while (cs5td[p[20013]] < an4w) {
    cs5td[p[20029]]('0');
  }while ($ek86i[p[20013]] < an4w) {
    $ek86i[p[20029]]('0');
  }for (var ke6$8h = 0x0; ke6$8h < an4w; ke6$8h++) {
    const bi9yoz = parseInt(cs5td[ke6$8h]),
          vxwn2r = parseInt($ek86i[ke6$8h]);if (bi9yoz > vxwn2r) return 0x1;else {
      if (bi9yoz < vxwn2r) return -0x1;
    }
  }return 0x0;
}, window[p[47820]] = wx[p[47821]]()[p[47820]], console[p[20471]](p[47822] + window[p[47820]]);var a_xrwvn = wx[p[47823]]();a_xrwvn[p[47824]](function (h0_8) {
  console[p[20471]](p[47825] + h0_8[p[47826]]);
}), a_xrwvn[p[47827]](function () {
  wx[p[47828]]({ 'title': p[47829], 'content': p[47830], 'showCancel': ![], 'success': function (_ngvx2) {
      a_xrwvn[p[47831]]();
    } });
}), a_xrwvn[p[47832]](function () {
  console[p[20471]](p[47833]);
}), window['$aHQ53V'] = function () {
  console[p[20471]](p[47834]);var zibo9y = wx[p[47835]]({ 'name': p[47836], 'success': function (t743j) {
      console[p[20471]](p[47837]), console[p[20471]](t743j), t743j && t743j[p[44422]] == p[47838] ? (window['$aV3'] = !![], window['$aVQ53'](), window['$aVQ35']()) : setTimeout(function () {
        window['$aHQ53V']();
      }, 0x1f4);
    }, 'fail': function (arwp7) {
      console[p[20471]](p[47839]), console[p[20471]](arwp7), setTimeout(function () {
        window['$aHQ53V']();
      }, 0x1f4);
    } });zibo9y && zibo9y[p[47840]](t1jfcs => {});
}, window['$aHQ35V'] = function () {
  console[p[20471]](p[47841]);var d1c5t = wx[p[47835]]({ 'name': p[47842], 'success': function (p7ra4) {
      console[p[20471]](p[47843]), console[p[20471]](p7ra4), p7ra4 && p7ra4[p[44422]] == p[47838] ? (window['$aQ3V'] = !![], window['$aVQ53'](), window['$aVQ35']()) : setTimeout(function () {
        window['$aHQ35V']();
      }, 0x1f4);
    }, 'fail': function (s51c) {
      console[p[20471]](p[47844]), console[p[20471]](s51c), setTimeout(function () {
        window['$aHQ35V']();
      }, 0x1f4);
    } });d1c5t && d1c5t[p[47840]](_nvx2r => {});
}, window[p[47845]] = function () {
  window['$aH3VQ5'](window[p[47820]], p[47846]) >= 0x0 ? (console[p[20471]](p[47847] + window[p[47820]] + p[47848]), window['$aQ5'](), window['$aHQ53V'](), window['$aHQ35V']()) : (window['$aQV5'](p[47849], window[p[47820]]), wx[p[47828]]({ 'title': p[26309], 'content': p[47850] }));
}, window[p[47811]] = '', wx[p[47851]]({ 'success'(f3t17j) {
    window[p[47811]] = p[47852] + f3t17j[p[47853]] + p[47854] + f3t17j[p[47855]] + p[47856] + f3t17j[p[24608]] + p[47857] + f3t17j[p[20464]] + p[47858] + f3t17j[p[44218]] + p[47859] + f3t17j[p[47820]] + p[47860] + f3t17j[p[29037]], console[p[20471]](window[p[47811]]), console[p[20471]](p[47861] + f3t17j[p[47862]] + p[47863] + f3t17j[p[47864]] + p[47865] + f3t17j[p[47866]] + p[47867] + f3t17j[p[47868]] + p[47869] + f3t17j[p[47870]] + p[47871] + f3t17j[p[47872]] + p[47873] + (f3t17j[p[47874]] ? f3t17j[p[47874]][p[20320]] + ',' + f3t17j[p[47874]][p[21204]] + ',' + f3t17j[p[47874]][p[21206]] + ',' + f3t17j[p[47874]][p[21205]] : ''));var sd51c = f3t17j[p[20464]] ? f3t17j[p[20464]][p[31816]]() : '',
        t1cds = f3t17j[p[47855]] ? f3t17j[p[47855]][p[31816]]()[p[24595]]('\x20', '') : '';window['$aQV'][p[20501]] = sd51c[p[20115]](p[47875]) != -0x1, window['$aQV'][p[30956]] = sd51c[p[20115]](p[47706]) != -0x1, window['$aQV'][p[47876]] = sd51c[p[20115]](p[47875]) != -0x1 || sd51c[p[20115]](p[47706]) != -0x1, window['$aQV'][p[43936]] = sd51c[p[20115]](p[47707]) != -0x1 || sd51c[p[20115]](p[47877]) != -0x1, window['$aQV'][p[47878]] = f3t17j[p[44218]] ? f3t17j[p[44218]][p[31816]]() : '', window['$aQV']['$aH5Q3V'] = ![], window['$aQV']['$aH5QV3'] = 0x2;if (sd51c[p[20115]](p[47706]) != -0x1) {
      if (f3t17j[p[29037]] >= 0x18) window['$aQV']['$aH5QV3'] = 0x3;else window['$aQV']['$aH5QV3'] = 0x2;
    } else {
      if (sd51c[p[20115]](p[47875]) != -0x1) {
        if (f3t17j[p[29037]] && f3t17j[p[29037]] >= 0x14) window['$aQV']['$aH5QV3'] = 0x3;else {
          if (t1cds[p[20115]](p[47879]) != -0x1 || t1cds[p[20115]](p[47880]) != -0x1 || t1cds[p[20115]](p[47881]) != -0x1 || t1cds[p[20115]](p[47882]) != -0x1 || t1cds[p[20115]](p[47883]) != -0x1) window['$aQV']['$aH5QV3'] = 0x2;else window['$aQV']['$aH5QV3'] = 0x3;
        }
      } else window['$aQV']['$aH5QV3'] = 0x2;
    }console[p[20471]](p[47884] + window['$aQV']['$aH5Q3V'] + p[47885] + window['$aQV']['$aH5QV3']);
  } }), wx[p[47886]]({ 'success': function (by6i) {
    console[p[20471]](p[47887] + by6i[p[24513]] + p[47888] + by6i[p[47889]]);
  } }), wx[p[47890]]({ 'success': function (sdct1) {
    console[p[20471]](p[47891] + sdct1[p[47892]]);
  } }), wx[p[47893]]({ 'keepScreenOn': !![] }), wx[p[47894]](function ($ie68) {
  console[p[20471]](p[47891] + $ie68[p[47892]] + p[47895] + $ie68[p[47896]]);
}), wx[p[47897]](function (wrvx2) {
  window['$aV53'] = wrvx2, window['$aV35'] && window['$aV53'] && (console[p[20078]](p[47898] + window['$aV53'][p[20765]]), window['$aV35'](window['$aV53']), window['$aV53'] = null);
}), window['$aHQV53'] = 0x0, window[p[47899]] = null, wx[p[47900]](function () {
  window['$aHQV53']++, wx[p[31367]]();if (window['$aHQV53'] >= 0x2) {
    window['$aHQV53'] = 0x0, console[p[20125]](p[47901]), wx[p[47902]]('0', 0x1);if (window['$aQV'] && window['$aQV'][p[20501]]) window['$aQV5'](p[47903], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});