var Y = wx.$M;
console[Y[180001]](Y[180002]), window[Y[180003]], wx[Y[180004]](function (a8etc) {
  if (a8etc) {
    if (a8etc[Y[180005]]) {
      var g8aec2 = window[Y[180006]][Y[180007]][Y[180008]](new RegExp(/\./, 'g'), '_'),
          og8ac6 = a8etc[Y[180005]],
          yk1xqu = og8ac6[Y[180009]](/(MMMMMMMM\/mmmGAME.js:)[0-9]{1,60}(:)/g);if (yk1xqu) for (var l$50n = 0x0; l$50n < yk1xqu[Y[180010]]; l$50n++) {
        if (yk1xqu[l$50n] && yk1xqu[l$50n][Y[180010]] > 0x0) {
          var ukxr91 = parseInt(yk1xqu[l$50n][Y[180008]](Y[180011], '')[Y[180008]](':', ''));og8ac6 = og8ac6[Y[180008]](yk1xqu[l$50n], yk1xqu[l$50n][Y[180008]](':' + ukxr91 + ':', ':' + (ukxr91 - 0x2) + ':'));
        }
      }og8ac6 = og8ac6[Y[180008]](new RegExp(Y[180012], 'g'), Y[180013] + g8aec2 + Y[180014]), og8ac6 = og8ac6[Y[180008]](new RegExp(Y[180015], 'g'), Y[180013] + g8aec2 + Y[180014]), a8etc[Y[180005]] = og8ac6;
    }var ihlm5n = { 'id': window['$m12'][Y[180016]], 'role': window['$m12'][Y[180017]], 'level': window['$m12'][Y[180018]], 'user': window['$m12'][Y[180019]], 'version': window['$m12'][Y[180020]], 'gamever': window[Y[180006]][Y[180007]], 'cdn': window['$m12'][Y[180021]], 'serverid': window['$m12'][Y[180022]] ? window['$m12'][Y[180022]][Y[180023]] : 0x0, 'systemInfo': window[Y[180024]], 'error': Y[180025], 'stack': a8etc ? a8etc[Y[180005]] : '' },
        j647_ = JSON[Y[180026]](ihlm5n);console[Y[180027]](Y[180028] + j647_), (!window[Y[180003]] || window[Y[180003]] != ihlm5n[Y[180027]]) && (window[Y[180003]] = ihlm5n[Y[180027]], window['$m41'](ihlm5n));
  }
});import 'mmmmmmmmMDFIVEMIN.js';import 'mmmZLIBS.js';window[Y[180029]] = require(Y[180030]);import 'mmmmINDEX.js';import 'mmmmmmmLIBSMIN.js';import 'mmmmWXMINI.js';import 'mmmINITMIN.js';console[Y[180001]](Y[180031]), console[Y[180001]](Y[180032]), $m4102({ 'title': Y[180033] });var M_jimn = { '$m50412': !![] };new window[Y[180034]](M_jimn), window[Y[180034]][Y[180035]]['$m50241']();if (window['$m54201']) clearInterval(window['$m54201']);window['$m54201'] = null, window['$m50214'] = function (cg28ea, at2ce8) {
  if (!cg28ea || !at2ce8) return 0x0;cg28ea = cg28ea[Y[180036]]('.'), at2ce8 = at2ce8[Y[180036]]('.');const eaoc = Math[Y[180037]](cg28ea[Y[180010]], at2ce8[Y[180010]]);while (cg28ea[Y[180010]] < eaoc) {
    cg28ea[Y[180038]]('0');
  }while (at2ce8[Y[180010]] < eaoc) {
    at2ce8[Y[180038]]('0');
  }for (var frdbv = 0x0; frdbv < eaoc; frdbv++) {
    const c6sg = parseInt(cg28ea[frdbv]),
          y91ukx = parseInt(at2ce8[frdbv]);if (c6sg > y91ukx) return 0x1;else {
      if (c6sg < y91ukx) return -0x1;
    }
  }return 0x0;
}, window[Y[180039]] = wx[Y[180040]]()[Y[180039]], console[Y[180041]](Y[180042] + window[Y[180039]]);var M_w$ldb = wx[Y[180043]]();M_w$ldb[Y[180044]](function (rvx1) {
  console[Y[180041]](Y[180045] + rvx1[Y[180046]]);
}), M_w$ldb[Y[180047]](function () {
  wx[Y[180048]]({ 'title': Y[180049], 'content': Y[180050], 'showCancel': ![], 'success': function (e8ptz2) {
      M_w$ldb[Y[180051]]();
    } });
}), M_w$ldb[Y[180052]](function () {
  console[Y[180041]](Y[180053]);
}), window['$m51402'] = function () {
  console[Y[180041]](Y[180054]);var j4s7 = wx[Y[180055]]({ 'name': Y[180056], 'success': function (cet2) {
      console[Y[180041]](Y[180057]), console[Y[180041]](cet2), cet2 && cet2[Y[180058]] == Y[180059] ? (window['$m20'] = !![], window['$m2140'](), window['$m2104']()) : setTimeout(function () {
        window['$m51402']();
      }, 0x1f4);
    }, 'fail': function (u91xrk) {
      console[Y[180041]](Y[180060]), console[Y[180041]](u91xrk), setTimeout(function () {
        window['$m51402']();
      }, 0x1f4);
    } });j4s7 && j4s7[Y[180061]]($0dil => {});
}, window['$m51042'] = function () {
  console[Y[180041]](Y[180062]);var nhi5 = wx[Y[180055]]({ 'name': Y[180063], 'success': function (ca6g8o) {
      console[Y[180041]](Y[180064]), console[Y[180041]](ca6g8o), ca6g8o && ca6g8o[Y[180058]] == Y[180059] ? (window['$m102'] = !![], window['$m2140'](), window['$m2104']()) : setTimeout(function () {
        window['$m51042']();
      }, 0x1f4);
    }, 'fail': function (o4s_6g) {
      console[Y[180041]](Y[180065]), console[Y[180041]](o4s_6g), setTimeout(function () {
        window['$m51042']();
      }, 0x1f4);
    } });nhi5 && nhi5[Y[180061]](dfrbwv => {});
}, window[Y[180066]] = function () {
  window['$m50214'](window[Y[180039]], Y[180067]) >= 0x0 ? (console[Y[180041]](Y[180068] + window[Y[180039]] + Y[180069]), window['$m14'](), window['$m51402'](), window['$m51042']()) : (window['$m124'](Y[180070], window[Y[180039]]), wx[Y[180048]]({ 'title': Y[180071], 'content': Y[180072] }));
}, window[Y[180024]] = '', wx[Y[180073]]({ 'success'($f0bwd) {
    window[Y[180024]] = Y[180074] + $f0bwd[Y[180075]] + Y[180076] + $f0bwd[Y[180077]] + Y[180078] + $f0bwd[Y[180079]] + Y[180080] + $f0bwd[Y[180081]] + Y[180082] + $f0bwd[Y[180083]] + Y[180084] + $f0bwd[Y[180039]] + Y[180085] + $f0bwd[Y[180086]], console[Y[180041]](window[Y[180024]]), console[Y[180041]](Y[180087] + $f0bwd[Y[180088]] + Y[180089] + $f0bwd[Y[180090]] + Y[180091] + $f0bwd[Y[180092]] + Y[180093] + $f0bwd[Y[180094]] + Y[180095] + $f0bwd[Y[180096]] + Y[180097] + $f0bwd[Y[180098]] + Y[180099] + ($f0bwd[Y[180100]] ? $f0bwd[Y[180100]][Y[180101]] + ',' + $f0bwd[Y[180100]][Y[180102]] + ',' + $f0bwd[Y[180100]][Y[180103]] + ',' + $f0bwd[Y[180100]][Y[180104]] : ''));var aeg8c2 = $f0bwd[Y[180081]] ? $f0bwd[Y[180081]][Y[180105]]() : '',
        n5i0l = $f0bwd[Y[180077]] ? $f0bwd[Y[180077]][Y[180105]]()[Y[180008]]('\x20', '') : '';window['$m12'][Y[180106]] = aeg8c2[Y[180107]](Y[180108]) != -0x1, window['$m12'][Y[180109]] = aeg8c2[Y[180107]](Y[180110]) != -0x1, window['$m12'][Y[180111]] = aeg8c2[Y[180107]](Y[180108]) != -0x1 || aeg8c2[Y[180107]](Y[180110]) != -0x1, window['$m12'][Y[180112]] = aeg8c2[Y[180107]](Y[180113]) != -0x1 || aeg8c2[Y[180107]](Y[180114]) != -0x1, window['$m12'][Y[180115]] = $f0bwd[Y[180083]] ? $f0bwd[Y[180083]][Y[180105]]() : '', window['$m12']['$m54102'] = ![], window['$m12']['$m54120'] = 0x2;if (aeg8c2[Y[180107]](Y[180110]) != -0x1) {
      if ($f0bwd[Y[180086]] >= 0x18) window['$m12']['$m54120'] = 0x3;else window['$m12']['$m54120'] = 0x2;
    } else {
      if (aeg8c2[Y[180107]](Y[180108]) != -0x1) {
        if ($f0bwd[Y[180086]] && $f0bwd[Y[180086]] >= 0x14) window['$m12']['$m54120'] = 0x3;else {
          if (n5i0l[Y[180107]](Y[180116]) != -0x1 || n5i0l[Y[180107]](Y[180117]) != -0x1 || n5i0l[Y[180107]](Y[180118]) != -0x1 || n5i0l[Y[180107]](Y[180119]) != -0x1 || n5i0l[Y[180107]](Y[180120]) != -0x1) window['$m12']['$m54120'] = 0x2;else window['$m12']['$m54120'] = 0x3;
        }
      } else window['$m12']['$m54120'] = 0x2;
    }console[Y[180041]](Y[180121] + window['$m12']['$m54102'] + Y[180122] + window['$m12']['$m54120']);
  } }), wx[Y[180123]]({ 'success': function (pez28t) {
    console[Y[180041]](Y[180124] + pez28t[Y[180125]] + Y[180126] + pez28t[Y[180127]]);
  } }), wx[Y[180128]]({ 'success': function (ep8zt2) {
    console[Y[180041]](Y[180129] + ep8zt2[Y[180130]]);
  } }), wx[Y[180131]]({ 'keepScreenOn': !![] }), wx[Y[180132]](function (k1v9rf) {
  console[Y[180041]](Y[180129] + k1v9rf[Y[180130]] + Y[180133] + k1v9rf[Y[180134]]);
}), wx[Y[180135]](function (di5l0) {
  window['$m240'] = di5l0, window['$m204'] && window['$m240'] && (console[Y[180001]](Y[180136] + window['$m240'][Y[180137]]), window['$m204'](window['$m240']), window['$m240'] = null);
}), window['$m51240'] = 0x0, window[Y[180138]] = null, wx[Y[180139]](function () {
  window['$m51240']++, wx[Y[180140]]();if (window['$m51240'] >= 0x2) {
    window['$m51240'] = 0x0, console[Y[180027]](Y[180141]), wx[Y[180142]]('0', 0x1);if (window['$m12'] && window['$m12'][Y[180106]]) window['$m124'](Y[180143], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});