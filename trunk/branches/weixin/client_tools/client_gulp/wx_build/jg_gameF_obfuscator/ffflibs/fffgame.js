var k = wx.$f;
console[k[60077]](k[87601]), window[k[87602]], wx[k[87603]](function (o2jc) {
  if (o2jc) {
    if (o2jc[k[64139]]) {
      var znws = window[k[60538]][k[87604]][k[64305]](new RegExp(/\./, 'g'), '_'),
          $z87 = o2jc[k[64139]],
          m0ft = $z87[k[71139]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (m0ft) for (var swjdco = 0x0; swjdco < m0ft[k[60013]]; swjdco++) {
        if (m0ft[swjdco] && m0ft[swjdco][k[60013]] > 0x0) {
          var jc246o = parseInt(m0ft[swjdco][k[64305]](k[87605], '')[k[64305]](':', ''));$z87 = $z87[k[64305]](m0ft[swjdco], m0ft[swjdco][k[64305]](':' + jc246o + ':', ':' + (jc246o - 0x2) + ':'));
        }
      }$z87 = $z87[k[64305]](new RegExp(k[87606], 'g'), k[87607] + znws + k[84044]), $z87 = $z87[k[64305]](new RegExp(k[87608], 'g'), k[87607] + znws + k[84044]), o2jc[k[64139]] = $z87;
    }var e8nzx = { 'id': window['F$L6'][k[87609]], 'role': window['F$L6'][k[64248]], 'level': window['F$L6'][k[87610]], 'user': window['F$L6'][k[83946]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60538]][k[87604]], 'cdn': window['F$L6'][k[64138]], 'serverid': window['F$L6'][k[83941]] ? window['F$L6'][k[83941]][k[70632]] : 0x0, 'systemInfo': window[k[87611]], 'error': k[87612], 'stack': o2jc ? o2jc[k[64139]] : '' },
        t0qhf5 = JSON[k[64124]](e8nzx);console[k[60124]](k[87613] + t0qhf5), (!window[k[87602]] || window[k[87602]] != e8nzx[k[60124]]) && (window[k[87602]] = e8nzx[k[60124]], window['F$0L'](e8nzx));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[87614]] = require(k[87615]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[87616]), console[k[60077]](k[87617]), F$0L86({ 'title': k[87618] });var fufvbi = { 'F$I06L8': !![] };new window[k[87619]](fufvbi), window[k[87619]][k[60144]]['F$I8L60']();if (window['F$I0L68']) clearInterval(window['F$I0L68']);window['F$I0L68'] = null, window['F$I860L'] = function (j6ocs, dcwoj) {
  if (!j6ocs || !dcwoj) return 0x0;j6ocs = j6ocs[k[60015]]('.'), dcwoj = dcwoj[k[60015]]('.');const v1ug9b = Math[k[60822]](j6ocs[k[60013]], dcwoj[k[60013]]);while (j6ocs[k[60013]] < v1ug9b) {
    j6ocs[k[60029]]('0');
  }while (dcwoj[k[60013]] < v1ug9b) {
    dcwoj[k[60029]]('0');
  }for (var q4_25k = 0x0; q4_25k < v1ug9b; q4_25k++) {
    const sdowj = parseInt(j6ocs[q4_25k]),
          _k5426 = parseInt(dcwoj[q4_25k]);if (sdowj > _k5426) return 0x1;else {
      if (sdowj < _k5426) return -0x1;
    }
  }return 0x0;
}, window[k[87620]] = wx[k[87621]]()[k[87620]], console[k[60466]](k[87622] + window[k[87620]]);var f$8yr7 = wx[k[87623]]();f$8yr7['onCheckForUpdate'](function (cwdsjo) {
  console[k[60466]](k[87624] + cwdsjo[k[87625]]);
}), f$8yr7[k[87626]](function () {
  wx[k[87627]]({ 'title': k[87628], 'content': k[87629], 'showCancel': ![], 'success': function (ifmhb) {
      f$8yr7[k[87630]]();
    } });
}), f$8yr7['onUpdateFailed'](function () {
  console[k[60466]](k[87631]);
}), window['F$I86L0'] = function () {
  console[k[60466]](k[87632]);var nrzx = wx[k[87633]]({ 'name': k[87634], 'success': function (buvg19) {
      console[k[60466]](k[87635]), console[k[60466]](buvg19), buvg19 && buvg19[k[84122]] == k[87636] ? (window['F$68'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    }, 'fail': function (ft5qh) {
      console[k[60466]](k[87637]), console[k[60466]](ft5qh), setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    } });nrzx && nrzx[k[87638]](k26o => {});
}, window['F$IL068'] = function () {
  console[k[60466]](k[87639]);var swdnjc = wx[k[87633]]({ 'name': k[87640], 'success': function ($y8r7) {
      console[k[60466]](k[87641]), console[k[60466]]($y8r7), $y8r7 && $y8r7[k[84122]] == k[87636] ? (window['F$L86'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    }, 'fail': function (mivu) {
      console[k[60466]](k[87642]), console[k[60466]](mivu), setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    } });swdnjc && swdnjc[k[87638]](q05hft => {});
}, window[k[87643]] = function () {
  window['F$I860L'](window[k[87620]], k[87644]) >= 0x0 ? (console[k[60466]](k[87645] + window[k[87620]] + k[87646]), window['F$L0'](), window['F$I86L0'](), window['F$IL068']()) : (window['F$L60'](k[87647], window[k[87620]]), wx[k[87627]]({ 'title': k[65824], 'content': k[87648] }));
}, window[k[87611]] = '', wx[k[87649]]({ 'success'(zxe8r7) {
    window[k[87611]] = k[87650] + zxe8r7[k[87651]] + k[87652] + zxe8r7[k[87653]] + k[87654] + zxe8r7[k[64318]] + k[87655] + zxe8r7[k[60459]] + k[87656] + zxe8r7[k[83916]] + k[87657] + zxe8r7[k[87620]] + k[87658] + zxe8r7[k[68607]], console[k[60466]](window[k[87611]]), console[k[60466]](k[87659] + zxe8r7[k[87660]] + k[87661] + zxe8r7[k[87662]] + k[87663] + zxe8r7[k[87664]] + k[87665] + zxe8r7[k[87666]] + k[87667] + zxe8r7[k[87668]] + k[87669] + zxe8r7[k[87670]] + k[87671] + (zxe8r7[k[87672]] ? zxe8r7[k[87672]][k[60313]] + ',' + zxe8r7[k[87672]][k[61133]] + ',' + zxe8r7[k[87672]][k[61135]] + ',' + zxe8r7[k[87672]][k[61134]] : ''));var nwdxe = zxe8r7[k[60459]] ? zxe8r7[k[60459]][k[71409]]() : '',
        jd6c2o = zxe8r7[k[87653]] ? zxe8r7[k[87653]][k[71409]]()[k[64305]]('\x20', '') : '';window['F$L6'][k[61003]] = nwdxe[k[60114]](k[87673]) != -0x1, window['F$L6'][k[70467]] = nwdxe[k[60114]](k[87468]) != -0x1, window['F$L6'][k[87674]] = nwdxe[k[60114]](k[87673]) != -0x1 || nwdxe[k[60114]](k[87468]) != -0x1, window['F$L6'][k[83643]] = nwdxe[k[60114]](k[87675]) != -0x1 || nwdxe[k[60114]](k[87676]) != -0x1, window['F$L6'][k[87677]] = zxe8r7[k[83916]] ? zxe8r7[k[83916]][k[71409]]() : '', window['F$L6']['F$I086L'] = ![], window['F$L6']['F$I0L86'] = 0x2;if (nwdxe[k[60114]](k[87468]) != -0x1) {
      if (zxe8r7[k[68607]] >= 0x18) window['F$L6']['F$I0L86'] = 0x3;else window['F$L6']['F$I0L86'] = 0x2;
    } else {
      if (nwdxe[k[60114]](k[87673]) != -0x1) {
        if (zxe8r7[k[68607]] && zxe8r7[k[68607]] >= 0x14) window['F$L6']['F$I0L86'] = 0x3;else {
          if (jd6c2o[k[60114]](k[87678]) != -0x1 || jd6c2o[k[60114]](k[87679]) != -0x1 || jd6c2o[k[60114]](k[87680]) != -0x1 || jd6c2o[k[60114]](k[87681]) != -0x1 || jd6c2o[k[60114]](k[87682]) != -0x1) window['F$L6']['F$I0L86'] = 0x2;else window['F$L6']['F$I0L86'] = 0x3;
        }
      } else window['F$L6']['F$I0L86'] = 0x2;
    }console[k[60466]](k[87683] + window['F$L6']['F$I086L'] + k[87684] + window['F$L6']['F$I0L86']);
  } }), wx[k[87685]]({ 'success': function (yr$a37) {
    console[k[60466]](k[87686] + yr$a37[k[64224]] + k[87687] + yr$a37[k[87688]]);
  } }), wx[k[87689]]({ 'success': function (r7y83) {
    console[k[60466]](k[87690] + r7y83[k[87691]]);
  } }), wx[k[87692]]({ 'keepScreenOn': !![] }), wx[k[87693]](function (n8exwz) {
  console[k[60466]](k[87690] + n8exwz[k[87691]] + k[87694] + n8exwz[k[87695]]);
}), wx[k[70033]](function (d6js) {
  window['F$80'] = d6js, window['F$608'] && window['F$80'] && (console[k[60077]](k[87696] + window['F$80'][k[60748]]), window['F$608'](window['F$80']), window['F$80'] = null);
}), window['F$IL860'] = 0x0, window[k[87697]] = null, wx[k[87698]](function () {
  window['F$IL860']++, wx[k[71000]]();if (window['F$IL860'] >= 0x2) {
    window['F$IL860'] = 0x0, console[k[60124]](k[87699]), wx[k[87700]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[61003]]) window['F$L60'](k[87701], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});