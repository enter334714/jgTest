var _ = wx.y$;
console[_[78]](_[27737]), window[_[27738]], wx[_[27739]](function (onqmlp) {
  if (onqmlp) {
    if (onqmlp[_[4418]]) {
      var ijlhgk = window[_[547]][_[27740]][_[4594]](new RegExp(/\./, 'g'), '_'),
          hijeg = onqmlp[_[4418]],
          qurps = hijeg[_[11562]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (qurps) for (var wyuxvz = 0x0; wyuxvz < qurps[_[13]]; wyuxvz++) {
        if (qurps[wyuxvz] && qurps[wyuxvz][_[13]] > 0x0) {
          var eifd = parseInt(qurps[wyuxvz][_[4594]](_[27741], '')[_[4594]](':', ''));hijeg = hijeg[_[4594]](qurps[wyuxvz], qurps[wyuxvz][_[4594]](':' + eifd + ':', ':' + (eifd - 0x2) + ':'));
        }
      }hijeg = hijeg[_[4594]](new RegExp(_[27742], 'g'), _[27743] + ijlhgk + _[24340]), hijeg = hijeg[_[4594]](new RegExp(_[27744], 'g'), _[27743] + ijlhgk + _[24340]), onqmlp[_[4418]] = hijeg;
    }var ornpqs = { 'id': window['p$DE'][_[27745]], 'role': window['p$DE'][_[4536]], 'level': window['p$DE'][_[27746]], 'user': window['p$DE'][_[24243]], 'version': window['p$DE'][_[101]], 'gamever': window[_[547]][_[27740]], 'cdn': window['p$DE'][_[4417]], 'serverid': window['p$DE'][_[24238]] ? window['p$DE'][_[24238]][_[11124]] : 0x0, 'systemInfo': window[_[27747]], 'error': _[27748], 'stack': onqmlp ? onqmlp[_[4418]] : '' },
        rsvtuw = JSON[_[4403]](ornpqs);console[_[125]](_[27749] + rsvtuw), (!window[_[27738]] || window[_[27738]] != ornpqs[_[125]]) && (window[_[27738]] = ornpqs[_[125]], window['p$BD'](ornpqs));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27750]] = require(_[27751]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[78]](_[27752]), console[_[78]](_[27753]), p$BDCE({ 'title': _[27754] });var _dxzyvw$ = { 'p$ACBDE': !![] };new window[_[27755]](_dxzyvw$), window[_[27755]][_[148]]['p$ACEBD']();if (window['p$ABECD']) clearInterval(window['p$ABECD']);window['p$ABECD'] = null, window['p$ACEDB'] = function (ywzx, rpuq) {
  if (!ywzx || !rpuq) return 0x0;ywzx = ywzx[_[15]]('.'), rpuq = rpuq[_[15]]('.');const bcfade = Math[_[842]](ywzx[_[13]], rpuq[_[13]]);while (ywzx[_[13]] < bcfade) {
    ywzx[_[29]]('0');
  }while (rpuq[_[13]] < bcfade) {
    rpuq[_[29]]('0');
  }for (var jihkm = 0x0; jihkm < bcfade; jihkm++) {
    const $wzyx_ = parseInt(ywzx[jihkm]),
          sonp = parseInt(rpuq[jihkm]);if ($wzyx_ > sonp) return 0x1;else {
      if ($wzyx_ < sonp) return -0x1;
    }
  }return 0x0;
}, window[_[27756]] = wx[_[27757]]()[_[27756]], console[_[471]](_[27758] + window[_[27756]]);var _dtuvyxw = wx[_[27759]]();_dtuvyxw[_[27760]](function (rsnpq) {
  console[_[471]](_[27761] + rsnpq[_[27762]]);
}), _dtuvyxw[_[27763]](function () {
  wx[_[27764]]({ 'title': _[27765], 'content': _[27766], 'showCancel': ![], 'success': function (dcgebf) {
      _dtuvyxw[_[27767]]();
    } });
}), _dtuvyxw[_[27768]](function () {
  console[_[471]](_[27769]);
}), window['p$ADBCE'] = function () {
  console[_[471]](_[27770]);var limhk = wx[_[27771]]({ 'name': _[27772], 'success': function (lqmopn) {
      console[_[471]](_[27773]), console[_[471]](lqmopn), lqmopn && lqmopn[_[24418]] == _[27774] ? (window['p$EC'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    }, 'fail': function (omlj) {
      console[_[471]](_[27775]), console[_[471]](omlj), setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    } });limhk && limhk[_[27776]](vxzuw => {});
}, window['p$ADCBE'] = function () {
  console[_[471]](_[27777]);var z_0$x = wx[_[27771]]({ 'name': _[27778], 'success': function (z_210$) {
      console[_[471]](_[27779]), console[_[471]](z_210$), z_210$ && z_210$[_[24418]] == _[27774] ? (window['p$DCE'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    }, 'fail': function (lnmop) {
      console[_[471]](_[27780]), console[_[471]](lnmop), setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    } });z_0$x && z_0$x[_[27776]](lpnoqm => {});
}, window[_[27781]] = function () {
  window['p$ACEDB'](window[_[27756]], _[27782]) >= 0x0 ? (console[_[471]](_[27783] + window[_[27756]] + _[27784]), window['p$DB'](), window['p$ADBCE'](), window['p$ADCBE']()) : (window['p$DEB'](_[27785], window[_[27756]]), wx[_[27764]]({ 'title': _[6307], 'content': _[27786] }));
}, window[_[27747]] = '', wx[_[27787]]({ 'success'(_2$0z1) {
    window[_[27747]] = _[27788] + _2$0z1[_[27789]] + _[27790] + _2$0z1[_[27791]] + _[27792] + _2$0z1[_[4607]] + _[27793] + _2$0z1[_[464]] + _[27794] + _2$0z1[_[24214]] + _[27795] + _2$0z1[_[27756]] + _[27796] + _2$0z1[_[9035]], console[_[471]](window[_[27747]]), console[_[471]](_[27797] + _2$0z1[_[27798]] + _[27799] + _2$0z1[_[27800]] + _[27801] + _2$0z1[_[27802]] + _[27803] + _2$0z1[_[27804]] + _[27805] + _2$0z1[_[27806]] + _[27807] + _2$0z1[_[27808]] + _[27809] + (_2$0z1[_[27810]] ? _2$0z1[_[27810]][_[320]] + ',' + _2$0z1[_[27810]][_[1204]] + ',' + _2$0z1[_[27810]][_[1206]] + ',' + _2$0z1[_[27810]][_[1205]] : ''));var nlmijk = _2$0z1[_[464]] ? _2$0z1[_[464]][_[11814]]() : '',
        cfgdhe = _2$0z1[_[27791]] ? _2$0z1[_[27791]][_[11814]]()[_[4594]]('\x20', '') : '';window['p$DE'][_[501]] = nlmijk[_[115]](_[27811]) != -0x1, window['p$DE'][_[10954]] = nlmijk[_[115]](_[27691]) != -0x1, window['p$DE'][_[27812]] = nlmijk[_[115]](_[27811]) != -0x1 || nlmijk[_[115]](_[27691]) != -0x1, window['p$DE'][_[23932]] = nlmijk[_[115]](_[27692]) != -0x1 || nlmijk[_[115]](_[27813]) != -0x1, window['p$DE'][_[27814]] = _2$0z1[_[24214]] ? _2$0z1[_[24214]][_[11814]]() : '', window['p$DE']['p$ABDCE'] = ![], window['p$DE']['p$ABDEC'] = 0x2;if (nlmijk[_[115]](_[27691]) != -0x1) {
      if (_2$0z1[_[9035]] >= 0x18) window['p$DE']['p$ABDEC'] = 0x3;else window['p$DE']['p$ABDEC'] = 0x2;
    } else {
      if (nlmijk[_[115]](_[27811]) != -0x1) {
        if (_2$0z1[_[9035]] && _2$0z1[_[9035]] >= 0x14) window['p$DE']['p$ABDEC'] = 0x3;else {
          if (cfgdhe[_[115]](_[27815]) != -0x1 || cfgdhe[_[115]](_[27816]) != -0x1 || cfgdhe[_[115]](_[27817]) != -0x1 || cfgdhe[_[115]](_[27818]) != -0x1 || cfgdhe[_[115]](_[27819]) != -0x1) window['p$DE']['p$ABDEC'] = 0x2;else window['p$DE']['p$ABDEC'] = 0x3;
        }
      } else window['p$DE']['p$ABDEC'] = 0x2;
    }console[_[471]](_[27820] + window['p$DE']['p$ABDCE'] + _[27821] + window['p$DE']['p$ABDEC']);
  } }), wx[_[27822]]({ 'success': function (ecfab) {
    console[_[471]](_[27823] + ecfab[_[4512]] + _[27824] + ecfab[_[27825]]);
  } }), wx[_[27826]]({ 'success': function (oqpnrm) {
    console[_[471]](_[27827] + oqpnrm[_[27828]]);
  } }), wx[_[27829]]({ 'keepScreenOn': !![] }), wx[_[27830]](function (gfedbc) {
  console[_[471]](_[27827] + gfedbc[_[27828]] + _[27831] + gfedbc[_[27832]]);
}), wx[_[27833]](function (mnpkl) {
  window['p$EBC'] = mnpkl, window['p$ECB'] && window['p$EBC'] && (console[_[78]](_[27834] + window['p$EBC'][_[765]]), window['p$ECB'](window['p$EBC']), window['p$EBC'] = null);
}), window['p$ADEBC'] = 0x0, window[_[27835]] = null, wx[_[27836]](function () {
  window['p$ADEBC']++, wx[_[11365]]();if (window['p$ADEBC'] >= 0x2) {
    window['p$ADEBC'] = 0x0, console[_[125]](_[27837]), wx[_[27838]]('0', 0x1);if (window['p$DE'] && window['p$DE'][_[501]]) window['p$DEB'](_[27839], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});