var _ = wx.y$;
console[_[82]](_[27655]), window[_[27656]], wx[_[27657]](function (fkhji) {
  if (fkhji) {
    if (fkhji[_[4509]]) {
      var dfghie = window[_[577]][_[27658]][_[4685]](new RegExp(/\./, 'g'), '_'),
          _$2103 = fkhji[_[4509]],
          dhgeif = _$2103[_[11591]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (dhgeif) for (var opsnrq = 0x0; opsnrq < dhgeif[_[16]]; opsnrq++) {
        var qtrsv;dhgeif[opsnrq] && 0x0 < dhgeif[opsnrq][_[16]] && (qtrsv = parseInt(dhgeif[opsnrq][_[4685]](_[27659], '')[_[4685]](':', '')), _$2103 = _$2103[_[4685]](dhgeif[opsnrq], dhgeif[opsnrq][_[4685]](':' + qtrsv + ':', ':' + (qtrsv - 0x2) + ':')));
      }_$2103 = (_$2103 = _$2103[_[4685]](new RegExp(_[27660], 'g'), _[27661] + dfghie + _[24297]))[_[4685]](new RegExp(_[27662], 'g'), _[27661] + dfghie + _[24297]), fkhji[_[4509]] = _$2103;
    }dfghie = { 'id': window[_[27663]][_[27664]], 'role': window[_[27663]][_[4627]], 'level': window[_[27663]][_[27665]], 'user': window[_[27663]][_[24198]], 'version': window[_[27663]][_[109]], 'gamever': window[_[577]][_[27658]], 'cdn': window[_[27663]][_[4507]], 'serverid': window[_[27663]][_[24193]] ? window[_[27663]][_[24193]][_[11180]] : 0x0, 'systemInfo': window[_[27666]], 'error': _[27667], 'stack': fkhji ? fkhji[_[4509]] : '' }, fkhji = JSON[_[4495]](dfghie), (console[_[143]](_[27668] + fkhji), window[_[27656]] && window[_[27656]] == dfghie[_[143]] || (window[_[27656]] = dfghie[_[143]], window[_[27669]](dfghie)));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27670]] = require(_[27671]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[82]](_[27672]), console[_[82]](_[27673]), wxShowLoading({ 'title': _[27674] });var wxData = { 'showLoadingBtn': !0x0 };new window[_[27675]](wxData), window[_[27675]][_[166]][_[27676]](), window[_[27677]] && clearInterval(window[_[27677]]), window[_[27677]] = null, window[_[27678]] = function (ljhm, rnspoq) {
  if (!ljhm || !rnspoq) return 0x0;ljhm = ljhm[_[18]]('.'), rnspoq = rnspoq[_[18]]('.');var klnjmo = Math[_[871]](ljhm[_[16]], rnspoq[_[16]]);for (; ljhm[_[16]] < klnjmo;) ljhm[_[33]]('0');for (; rnspoq[_[16]] < klnjmo;) rnspoq[_[33]]('0');for (var dgfbe = 0x0; dgfbe < klnjmo; dgfbe++) {
    var wzx_y = parseInt(ljhm[dgfbe]),
        suwtxv = parseInt(rnspoq[dgfbe]);if (suwtxv < wzx_y) return 0x1;if (wzx_y < suwtxv) return -0x1;
  }return 0x0;
}, window[_[27679]] = wx[_[27680]]()[_[27679]], console[_[500]](_[27681] + window[_[27679]]);var _dokm = wx[_[27682]]();_dokm[_[27683]](function (afbecd) {
  console[_[500]](_[27684] + afbecd[_[27685]]);
}), _dokm[_[27686]](function () {
  wx[_[27687]]({ 'title': _[27688], 'content': _[27689], 'showCancel': !0x1, 'success': function (kjif) {
      _dokm[_[27690]]();
    } });
}), _dokm[_[27691]](function () {
  console[_[500]](_[27692]);
}), window[_[27693]] = function () {
  console[_[500]](_[27694]);var qpso = wx[_[27695]]({ 'name': _[27696], 'success': function (pklm) {
      console[_[500]](_[27697]), console[_[500]](pklm), pklm && _[27698] == pklm[_[24373]] ? (window[_[27699]] = !0x0, window[_[27700]](), window[_[27701]]()) : setTimeout(function () {
        window[_[27693]]();
      }, 0x1f4);
    }, 'fail': function (orsqp) {
      console[_[500]](_[27702]), console[_[500]](orsqp), setTimeout(function () {
        window[_[27693]]();
      }, 0x1f4);
    } });qpso && qpso[_[27703]](glik => {});
}, window[_[27704]] = function () {
  console[_[500]](_[27705]);var utqsp = wx[_[27695]]({ 'name': _[27706], 'success': function (cdefhg) {
      console[_[500]](_[27707]), console[_[500]](cdefhg), cdefhg && _[27698] == cdefhg[_[24373]] ? (window[_[27708]] = !0x0, window[_[27700]](), window[_[27701]]()) : setTimeout(function () {
        window[_[27704]]();
      }, 0x1f4);
    }, 'fail': function (gfcedh) {
      console[_[500]](_[27709]), console[_[500]](gfcedh), setTimeout(function () {
        window[_[27704]]();
      }, 0x1f4);
    } });utqsp && utqsp[_[27703]](gcdbe => {});
}, window[_[27710]] = function () {
  0x0 <= window[_[27678]](window[_[27679]], _[27711]) ? (console[_[500]](_[27712] + window[_[27679]] + _[27713]), window[_[27714]](), window[_[27693]](), window[_[27704]]()) : (window[_[27715]](_[27716] + window[_[27679]]), wx[_[27687]]({ 'title': _[6365], 'content': _[27717] }));
}, window[_[27666]] = '', wx[_[27718]]({ 'success'(xwzuy) {
    window[_[27666]] = _[27719] + xwzuy[_[27720]] + _[27721] + xwzuy[_[27722]] + _[27723] + xwzuy[_[4698]] + _[27724] + xwzuy[_[493]] + _[27725] + xwzuy[_[24171]] + _[27726] + xwzuy[_[27679]] + _[27727] + xwzuy[_[9093]], console[_[500]](window[_[27666]]), console[_[500]](_[27728] + xwzuy[_[27729]] + _[27730] + xwzuy[_[27731]] + _[27732] + xwzuy[_[27733]] + _[27734] + xwzuy[_[27735]] + _[27736] + xwzuy[_[27737]] + _[27738] + xwzuy[_[27739]] + _[27740] + (xwzuy[_[27741]] ? xwzuy[_[27741]][_[344]] + ',' + xwzuy[_[27741]][_[1293]] + ',' + xwzuy[_[27741]][_[1295]] + ',' + xwzuy[_[27741]][_[1294]] : ''));var gfhdc = xwzuy[_[493]] ? xwzuy[_[493]][_[11843]]() : '',
        lnopmk = xwzuy[_[27722]] ? xwzuy[_[27722]][_[11843]]()[_[4685]]('\x20', '') : '';window[_[27663]][_[531]] = -0x1 != gfhdc[_[124]](_[27742]), window[_[27663]][_[11009]] = -0x1 != gfhdc[_[124]](_[27610]), window[_[27663]][_[27743]] = -0x1 != gfhdc[_[124]](_[27742]) || -0x1 != gfhdc[_[124]](_[27610]), window[_[27663]][_[23832]] = -0x1 != gfhdc[_[124]](_[27611]) || -0x1 != gfhdc[_[124]](_[27744]), window[_[27663]][_[27745]] = xwzuy[_[24171]] ? xwzuy[_[24171]][_[11843]]() : '', window[_[27663]][_[27746]] = !0x1, window[_[27663]][_[27747]] = 0x2, -0x1 != gfhdc[_[124]](_[27610]) ? 0x18 <= xwzuy[_[9093]] ? window[_[27663]][_[27747]] = 0x3 : window[_[27663]][_[27747]] = 0x2 : -0x1 == gfhdc[_[124]](_[27742]) || !(xwzuy[_[9093]] && 0x14 <= xwzuy[_[9093]] || -0x1 == lnopmk[_[124]](_[27748]) && -0x1 == lnopmk[_[124]](_[27749]) && -0x1 == lnopmk[_[124]](_[27750]) && -0x1 == lnopmk[_[124]](_[27751]) && -0x1 == lnopmk[_[124]](_[27752])) ? window[_[27663]][_[27747]] = 0x2 : window[_[27663]][_[27747]] = 0x3, console[_[500]](_[27753] + window[_[27663]][_[27746]] + _[27754] + window[_[27663]][_[27747]]);
  } }), wx[_[27755]]({ 'success': function (vsrutq) {
    console[_[500]](_[27756] + vsrutq[_[4603]] + _[27757] + vsrutq[_[27758]]);
  } }), wx[_[27759]]({ 'success': function (opmkln) {
    console[_[500]](_[27760] + opmkln[_[27761]]);
  } }), wx[_[27762]]({ 'keepScreenOn': !0x0 }), wx[_[27763]](function (dfae) {
  console[_[500]](_[27760] + dfae[_[27761]] + _[27764] + dfae[_[27765]]);
}), wx[_[10529]](function (surtq) {
  window[_[27766]] = surtq, window[_[27767]] && window[_[27766]] && (console[_[82]](_[27768] + window[_[27766]][_[794]]), window[_[27767]](window[_[27766]]), window[_[27766]] = null);
}), window[_[27769]] = 0x0, window[_[27770]] = null, wx[_[27771]](function () {
  window[_[27769]]++, wx[_[11395]](), 0x2 <= window[_[27769]] && (window[_[27769]] = 0x0, console[_[143]](_[27772]), wx[_[27773]]('0', 0x1), window[_[27663]] && window[_[27663]][_[531]] && window[_[27715]](_[27774]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});