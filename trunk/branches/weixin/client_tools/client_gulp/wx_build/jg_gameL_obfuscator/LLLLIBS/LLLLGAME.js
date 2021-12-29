var W = wx.$l;
console[W[437]](W[438]), window[W[439]], wx[W[440]](function (zjqkl) {
  if (zjqkl) {
    if (zjqkl[W[441]]) {
      var oe197v = window[W[442]][W[443]][W[286]](new RegExp(/\./, 'g'), '_'),
          xn4 = zjqkl[W[441]],
          ds842$ = xn4[W[444]](/(LLLLLLLL\/LLLLGAME.js:)[0-9]{1,60}(:)/g);if (ds842$) for (var lqf9t = 0x0; lqf9t < ds842$[W[179]]; lqf9t++) {
        if (ds842$[lqf9t] && ds842$[lqf9t][W[179]] > 0x0) {
          var s_$n48 = parseInt(ds842$[lqf9t][W[286]](W[445], '')[W[286]](':', ''));xn4 = xn4[W[286]](ds842$[lqf9t], ds842$[lqf9t][W[286]](':' + s_$n48 + ':', ':' + (s_$n48 - 0x2) + ':'));
        }
      }xn4 = xn4[W[286]](new RegExp(W[446], 'g'), W[447] + oe197v + W[448]), xn4 = xn4[W[286]](new RegExp(W[449], 'g'), W[447] + oe197v + W[448]), zjqkl[W[441]] = xn4;
    }var kb2daj = { 'id': window['$LHD'][W[450]], 'role': window['$LHD'][W[451]], 'level': window['$LHD'][W[452]], 'user': window['$LHD'][W[453]], 'version': window['$LHD'][W[207]], 'gamever': window[W[442]][W[443]], 'cdn': window['$LHD'][W[296]], 'serverid': window['$LHD'][W[150]] ? window['$LHD'][W[150]][W[151]] : 0x0, 'systemInfo': window[W[454]], 'error': W[455], 'stack': zjqkl ? zjqkl[W[441]] : '' },
        hzajk = JSON[W[403]](kb2daj);console[W[405]](W[456] + hzajk), (!window[W[439]] || window[W[439]] != kb2daj[W[405]]) && (window[W[439]] = kb2daj[W[405]], window['$LTH'](kb2daj));
  }
});import 'lllMDFIVEMIN.js';import 'lllZLIBS.js';window[W[457]] = require(W[458]);import 'LLLLINDEX.js';import 'llllLIBSMIN.js';import 'LLLLWXMINI.js';import 'LLLINITMIN.js';console[W[437]](W[459]), console[W[437]](W[460]), $LTH0D({ 'title': W[461] });var L9dbs2$ = { '$LBTDH0': !![] };new window[W[436]](L9dbs2$), window[W[436]][W[146]]['$LB0HDT']();if (window['$LBTHD0']) clearInterval(window['$LBTHD0']);window['$LBTHD0'] = null, window['$LB0DTH'] = function (f9v17o, $4s8d) {
  if (!f9v17o || !$4s8d) return 0x0;f9v17o = f9v17o[W[462]]('.'), $4s8d = $4s8d[W[462]]('.');const zjhqka = Math[W[463]](f9v17o[W[179]], $4s8d[W[179]]);while (f9v17o[W[179]] < zjhqka) {
    f9v17o[W[318]]('0');
  }while ($4s8d[W[179]] < zjhqka) {
    $4s8d[W[318]]('0');
  }for (var goev7 = 0x0; goev7 < zjhqka; goev7++) {
    const dsb2a$ = parseInt(f9v17o[goev7]),
          $8_4sd = parseInt($4s8d[goev7]);if (dsb2a$ > $8_4sd) return 0x1;else {
      if (dsb2a$ < $8_4sd) return -0x1;
    }
  }return 0x0;
}, window[W[464]] = wx[W[465]]()[W[464]], console[W[310]](W[466] + window[W[464]]);var L9nx4_s8 = wx[W[467]]();L9nx4_s8[W[468]](function (rc3mi) {
  console[W[310]](W[469] + rc3mi[W[470]]);
}), L9nx4_s8[W[471]](function () {
  wx[W[472]]({ 'title': W[473], 'content': W[474], 'showCancel': ![], 'success': function (n_x4y8) {
      L9nx4_s8[W[475]]();
    } });
}), L9nx4_s8[W[476]](function () {
  console[W[310]](W[477]);
}), window['$LB0DHT'] = function () {
  console[W[310]](W[478]);var micw3 = wx[W[479]]({ 'name': W[480], 'success': function (bzjkha) {
      console[W[310]](W[481]), console[W[310]](bzjkha), bzjkha && bzjkha[W[482]] == W[483] ? (window['$LD0'] = !![], window['$LD0HT'](), window['$LDHT0']()) : setTimeout(function () {
        window['$LB0DHT']();
      }, 0x1f4);
    }, 'fail': function (kjhzlq) {
      console[W[310]](W[484]), console[W[310]](kjhzlq), setTimeout(function () {
        window['$LB0DHT']();
      }, 0x1f4);
    } });micw3 && micw3[W[485]](_ns48 => {});
}, window['$LBHTD0'] = function () {
  console[W[310]](W[486]);var x_ny3 = wx[W[479]]({ 'name': W[487], 'success': function (qzt5h) {
      console[W[310]](W[488]), console[W[310]](qzt5h), qzt5h && qzt5h[W[482]] == W[483] ? (window['$LH0D'] = !![], window['$LD0HT'](), window['$LDHT0']()) : setTimeout(function () {
        window['$LBHTD0']();
      }, 0x1f4);
    }, 'fail': function (jhakb2) {
      console[W[310]](W[489]), console[W[310]](jhakb2), setTimeout(function () {
        window['$LBHTD0']();
      }, 0x1f4);
    } });x_ny3 && x_ny3[W[485]](khajb => {});
}, window[W[490]] = function () {
  window['$LB0DTH'](window[W[464]], W[491]) >= 0x0 ? (console[W[310]](W[492] + window[W[464]] + W[493]), window['$LHT'](), window['$LB0DHT'](), window['$LBHTD0']()) : (window['$LHDT'](W[494], window[W[464]]), wx[W[472]]({ 'title': W[495], 'content': W[496] }));
}, window[W[454]] = '', wx[W[497]]({ 'success'(ve6ug1) {
    window[W[454]] = W[498] + ve6ug1[W[499]] + W[500] + ve6ug1[W[501]] + W[502] + ve6ug1[W[503]] + W[504] + ve6ug1[W[505]] + W[506] + ve6ug1[W[507]] + W[508] + ve6ug1[W[464]] + W[509] + ve6ug1[W[510]], console[W[310]](window[W[454]]), console[W[310]](W[511] + ve6ug1[W[512]] + W[513] + ve6ug1[W[514]] + W[515] + ve6ug1[W[516]] + W[517] + ve6ug1[W[518]] + W[519] + ve6ug1[W[520]] + W[521] + ve6ug1[W[522]] + W[523] + (ve6ug1[W[524]] ? ve6ug1[W[524]][W[108]] + ',' + ve6ug1[W[524]][W[221]] + ',' + ve6ug1[W[524]][W[525]] + ',' + ve6ug1[W[524]][W[69]] : ''));var jqthzl = ve6ug1[W[505]] ? ve6ug1[W[505]][W[526]]() : '',
        kh2bj = ve6ug1[W[501]] ? ve6ug1[W[501]][W[526]]()[W[286]]('\x20', '') : '';window['$LHD'][W[527]] = jqthzl[W[425]](W[528]) != -0x1, window['$LHD'][W[529]] = jqthzl[W[425]](W[530]) != -0x1, window['$LHD'][W[531]] = jqthzl[W[425]](W[528]) != -0x1 || jqthzl[W[425]](W[530]) != -0x1, window['$LHD'][W[532]] = jqthzl[W[425]](W[533]) != -0x1 || jqthzl[W[425]](W[534]) != -0x1, window['$LHD'][W[535]] = ve6ug1[W[507]] ? ve6ug1[W[507]][W[526]]() : '', window['$LHD']['$LBT0DH'] = ![], window['$LHD']['$LBTH0D'] = 0x2;if (jqthzl[W[425]](W[530]) != -0x1) {
      if (ve6ug1[W[510]] >= 0x18) window['$LHD']['$LBTH0D'] = 0x3;else window['$LHD']['$LBTH0D'] = 0x2;
    } else {
      if (jqthzl[W[425]](W[528]) != -0x1) {
        if (ve6ug1[W[510]] && ve6ug1[W[510]] >= 0x14) window['$LHD']['$LBTH0D'] = 0x3;else {
          if (kh2bj[W[425]](W[536]) != -0x1 || kh2bj[W[425]](W[537]) != -0x1 || kh2bj[W[425]](W[538]) != -0x1 || kh2bj[W[425]](W[539]) != -0x1 || kh2bj[W[425]](W[540]) != -0x1) window['$LHD']['$LBTH0D'] = 0x2;else window['$LHD']['$LBTH0D'] = 0x3;
        }
      } else window['$LHD']['$LBTH0D'] = 0x2;
    }console[W[310]](W[541] + window['$LHD']['$LBT0DH'] + W[542] + window['$LHD']['$LBTH0D']);
  } }), wx[W[543]]({ 'success': function (s4n8x_) {
    console[W[310]](W[544] + s4n8x_[W[545]] + W[546] + s4n8x_[W[547]]);
  } }), wx[W[548]]({ 'success': function (e6pu1) {
    console[W[310]](W[549] + e6pu1[W[550]]);
  } }), wx[W[551]]({ 'keepScreenOn': !![] }), wx[W[552]](function (ymr30c) {
  console[W[310]](W[549] + ymr30c[W[550]] + W[553] + ymr30c[W[554]]);
}), wx[W[555]](function (ajbkd) {
  window['$L0T'] = ajbkd, window['$LDT0'] && window['$L0T'] && (console[W[437]](W[556] + window['$L0T'][W[557]]), window['$LDT0'](window['$L0T']), window['$L0T'] = null);
}), window['$LBH0DT'] = 0x0, window[W[558]] = null, wx[W[559]](function () {
  window['$LBH0DT']++, wx[W[560]]();if (window['$LBH0DT'] >= 0x2) {
    window['$LBH0DT'] = 0x0, console[W[405]](W[561]), wx[W[562]]('0', 0x1);if (window['$LHD'] && window['$LHD'][W[527]]) window['$LHDT'](W[563], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});