var H = wx.$F;
var fsq$dm = wx['$F'],
    fdsqym = this && this[H[93]] || function (myd, x0wnle, abvk_i) {
  myd[H[94]] = x0wnle, abvk_i ? abvk_i[H[95]](x0wnle) : abvk_i = [x0wnle], myd[H[96]] = myd[H[96]] ? abvk_i[H[97]](myd[H[96]]) : abvk_i;
},
    fmy$d = this && this[H[98]] || function (i_bk, jsv_d5) {
  function rtp6u() {
    this[H[99]] = i_bk;
  }for (var ysq$md in jsv_d5) jsv_d5[H[100]](ysq$md) && (i_bk[ysq$md] = jsv_d5[ysq$md]);rtp6u[H[101]] = jsv_d5[H[101]], i_bk[H[101]] = new rtp6u();
},
    fi3k_a,
    fymgq7$;void 0x0 === fi3k_a && (fi3k_a = window), void 0x0 === fymgq7$ && (fymgq7$ = fi3k_a);var fajv = this && this[H[395]] || function (_bvak, j$qms, sd_5j, nbw3ei) {
  Object[H[107]](_bvak, j$qms, { 'configurable': !0x0, 'enumerable': !0x0, 'get': sd_5j, 'set': nbw3ei });
};!function (bia_k) {
  bia_k['$hashCount'] = 0x1;var nxw0le = (Object[H[107]](r9618[H[101]], H[396], { 'get': function () {
      return this['$hashCode'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), r9618);function r9618() {
    this['$hashCode'] = bia_k['$hashCount']++;
  }bia_k[H[397]] = nxw0le, fdsqym(nxw0le[H[101]], H[398], [H[399]]);
}(fm$sjd = fm$sjd || {}), function (djsv5_) {
  var vb_ai = [],
      dj5_ = (dymgq$ = djsv5_[H[397]], fmy$d(xp0ul4, dymgq$), xp0ul4[H[101]]['$getEventMap'] = function (x3ine) {
    var pru6 = this['$EventDispatcher'];return x3ine ? pru6[0x2] : pru6[0x1];
  }, xp0ul4[H[101]][H[79]] = function (v_ak5, nxw0e, p4tur6, t4u0, d5jv_s) {
    this['$addListener'](v_ak5, nxw0e, p4tur6, t4u0, d5jv_s);
  }, xp0ul4[H[101]][H[400]] = function (p6r94t, nbeiw3, qyg7$m, nk3a, z9r81) {
    this['$addListener'](p6r94t, nbeiw3, qyg7$m, nk3a, z9r81, !0x0);
  }, xp0ul4[H[101]]['$addListener'] = function (zc98, mdj$, bkai_3, mdj5s$, h8oz1, lxweu0) {
    mdj$ || djsv5_['$error'](0x3eb, H[401]);var jdv = this['$EventDispatcher'],
        s5m$d = mdj5s$ ? jdv[0x2] : jdv[0x1],
        rp9t64 = s5m$d[zc98];rp9t64 ? 0x0 !== jdv[0x3] && (s5m$d[zc98] = rp9t64 = rp9t64[H[97]]()) : rp9t64 = s5m$d[zc98] = [], this['$insertEventBin'](rp9t64, zc98, mdj$, bkai_3, mdj5s$, h8oz1, lxweu0);
  }, xp0ul4[H[101]]['$insertEventBin'] = function (t9p8r, elx3w, $myq7, dqg$m, ikavb_, ajk_5, u4xlp) {
    ajk_5 = 0x0 | +ajk_5;var inxwe = -0x1,
        wnex0 = t9p8r[H[50]];for (var jvd5$s = 0x0; jvd5$s < wnex0; jvd5$s++) {
      var zhco2 = t9p8r[jvd5$s];if (zhco2[H[401]] == $myq7 && zhco2[H[402]] == dqg$m && zhco2[H[403]] == this) return !0x1;-0x1 == inxwe && zhco2[H[404]] < ajk_5 && (inxwe = jvd5$s);
    }return u4xlp = { 'type': elx3w, 'listener': $myq7, 'thisObject': dqg$m, 'priority': ajk_5, 'target': this, 'useCapture': ikavb_, 'dispatchOnce': !!u4xlp }, (-0x1 !== inxwe ? t9p8r[H[57]](inxwe, 0x0, u4xlp) : t9p8r[H[95]](u4xlp), !0x0);
  }, xp0ul4[H[101]][H[250]] = function (r869, e3nab, wne3x, sjdm5$) {
    var x3ewi = this['$EventDispatcher'],
        dm = sjdm5$ ? x3ewi[0x2] : x3ewi[0x1];sjdm5$ = dm[r869], sjdm5$ && (0x0 !== x3ewi[0x3] && (dm[r869] = sjdm5$ = sjdm5$[H[97]]()), this['$removeEventBin'](sjdm5$, e3nab, wne3x), 0x0 == sjdm5$[H[50]] && (dm[r869] = null));
  }, xp0ul4[H[101]]['$removeEventBin'] = function (k_5aj, jsmqd, dsm$jq) {
    var l0xne = k_5aj[H[50]];for (var iexw3 = 0x0; iexw3 < l0xne; iexw3++) {
      var u0ltp = k_5aj[iexw3];if (u0ltp[H[401]] == jsmqd && u0ltp[H[402]] == dsm$jq && u0ltp[H[403]] == this) return k_5aj[H[57]](iexw3, 0x1), !0x0;
    }return !0x1;
  }, xp0ul4[H[101]][H[405]] = function (p6tu40) {
    var i_ = this['$EventDispatcher'];return !(!i_[0x1][p6tu40] && !i_[0x2][p6tu40]);
  }, xp0ul4[H[101]][H[406]] = function (ni3ab) {
    return this[H[405]](ni3ab);
  }, xp0ul4[H[101]][H[362]] = function (l0xn) {
    return l0xn['$currentTarget'] = this['$EventDispatcher'][0x0], l0xn['$setTarget'](l0xn['$currentTarget']), this['$notifyListener'](l0xn, !0x1);
  }, xp0ul4[H[101]]['$notifyListener'] = function (qm7$y, p64rt9) {
    var syqdm = this['$EventDispatcher'],
        ne3bi = (p64rt9 ? syqdm[0x2] : syqdm[0x1])[qm7$y['$type']];if (!ne3bi) return !0x0;var ds$mqy = ne3bi[H[50]];if (0x0 == ds$mqy) return !0x0;var yqm7g$ = vb_ai;syqdm[0x3]++;for (var u0plt = 0x0; u0plt < ds$mqy; u0plt++) if ((_akiv = ne3bi[u0plt])[H[401]][H[268]](_akiv[H[402]], qm7$y), _akiv[H[407]] && yqm7g$[H[95]](_akiv), qm7$y['$isPropagationImmediateStopped']) break;for (syqdm[0x3]--; yqm7g$[H[50]];) {
      var _akiv;(_akiv = yqm7g$[H[53]]())[H[403]][H[250]](_akiv[H[146]], _akiv[H[401]], _akiv[H[402]], _akiv[H[408]]);
    }return !qm7$y['$isDefaultPrevented'];
  }, xp0ul4[H[101]][H[176]] = function (nw, avib, u04xlp, gmq$7y) {
    if (avib || this[H[405]](nw)) return gmq$7y = djsv5_[H[80]][H[357]](djsv5_[H[80]], nw, avib, gmq$7y), gmq$7y[H[29]] = u04xlp, u04xlp = this[H[362]](gmq$7y), (djsv5_[H[80]][H[363]](gmq$7y), u04xlp);return !0x0;
  }, xp0ul4);function xp0ul4(r9oz) {
    void 0x0 === r9oz && (r9oz = null);var bak_3 = dymgq$[H[268]](this) || this;return bak_3['$EventDispatcher'] = { 0x0: r9oz || bak_3, 0x1: {}, 0x2: {}, 0x3: 0x0 }, bak_3;
  }var dymgq$;djsv5_[H[158]] = dj5_, fdsqym(dj5_[H[101]], H[409], [H[410]]);
}(fm$sjd = fm$sjd || {}), function (_bav5) {
  var ab3en = ($vdj5s = _bav5[H[397]], fmy$d(_javk5, $vdj5s), _javk5[H[101]]['$toJson'] = function () {
    return '';
  }, _javk5[H[101]][H[411]] = function () {}, _javk5[H[101]][H[412]] = function () {
    var hco1z2 = this;hco1z2[H[411]](), _bav5[H[413]] && (egret_native[H[414]][H[415]](hco1z2['$id'], hco1z2[H[416]], hco1z2[H[417]], hco1z2[H[418]], hco1z2[H[419]]), egret_native[H[414]][H[420]](hco1z2));
  }, _javk5);function _javk5() {
    var $ydmq = $vdj5s[H[268]](this) || this;return $ydmq[H[146]] = null, $ydmq['$id'] = null, $ydmq[H[416]] = 0x0, $ydmq[H[417]] = 0x0, $ydmq[H[418]] = 0x0, $ydmq[H[419]] = 0x0, $ydmq['$uniforms'] = {}, _bav5[H[413]] && egret_native[H[414]][H[421]]($ydmq), $ydmq;
  }var $vdj5s;_bav5[H[422]] = ab3en, fdsqym(ab3en[H[101]], H[423]);
}(fm$sjd = fm$sjd || {}), function (p4u0x) {
  function sjvd_5(z8r19) {
    return 0xb4 < (z8r19 %= 0x168) ? z8r19 -= 0x168 : z8r19 < -0xb4 && (z8r19 += 0x168), z8r19;
  }var b3iane = (dv5j_ = p4u0x[H[158]], fmy$d(md$qsy, dv5j_), md$qsy[H[101]][H[424]] = function () {
    this['$nativeDisplayObject'] = new egret_native[H[414]](0x0);
  }, Object[H[107]](md$qsy[H[101]], H[145], { 'get': function () {
      return this['$name'];
    }, 'set': function (ul40pt) {
      this['$name'] = ul40pt;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](md$qsy[H[101]], H[425], { 'get': function () {
      return this['$parent'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setParent'] = function (r8tp9) {
    this['$parent'] = r8tp9;
  }, md$qsy[H[101]]['$onAddToStage'] = function (xeln3w, tl40up) {
    this['$stage'] = xeln3w, this['$nestLevel'] = tl40up, this['$hasAddToStage'] = !0x0, p4u0x[H[426]]['$EVENT_ADD_TO_STAGE_LIST'][H[95]](this);
  }, md$qsy[H[101]]['$onRemoveFromStage'] = function () {
    this['$nestLevel'] = 0x0, p4u0x[H[426]]['$EVENT_REMOVE_FROM_STAGE_LIST'][H[95]](this);
  }, md$qsy[H[101]]['$updateUseTransform'] = function () {
    var _abkvi = this;0x1 == _abkvi['$scaleX'] && 0x1 == _abkvi['$scaleY'] && 0x0 == _abkvi['$skewX'] && 0x0 == _abkvi['$skewY'] ? _abkvi['$useTranslate'] = !0x1 : _abkvi['$useTranslate'] = !0x0;
  }, Object[H[107]](md$qsy[H[101]], H[427], { 'get': function () {
      return this['$stage'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](md$qsy[H[101]], H[428], { 'get': function () {
      return this['$getMatrix']()[H[429]]();
    }, 'set': function (bkia_) {
      this['$setMatrix'](bkia_);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getMatrix'] = function () {
    var w4ux = this;return w4ux['$matrixDirty'] && (w4ux['$matrixDirty'] = !0x1, w4ux['$matrix']['$updateScaleAndRotation'](w4ux['$scaleX'], w4ux['$scaleY'], w4ux['$skewX'], w4ux['$skewY'])), w4ux['$matrix']['tx'] = w4ux['$x'], w4ux['$matrix']['ty'] = w4ux['$y'], w4ux['$matrix'];
  }, md$qsy[H[101]]['$setMatrix'] = function ($g7my, o8ch) {
    void 0x0 === o8ch && (o8ch = !0x0);var j5ak_v = this,
        ja5_ = j5ak_v['$matrix'];ja5_['a'] = $g7my['a'], ja5_['b'] = $g7my['b'], ja5_['c'] = $g7my['c'], ja5_['d'] = $g7my['d'], j5ak_v['$x'] = $g7my['tx'], j5ak_v['$y'] = $g7my['ty'], j5ak_v['$matrixDirty'] = !0x1, 0x1 == ja5_['a'] && 0x0 == ja5_['b'] && 0x0 == ja5_['c'] && 0x1 == ja5_['d'] ? j5ak_v['$useTranslate'] = !0x1 : j5ak_v['$useTranslate'] = !0x0, o8ch && (j5ak_v['$scaleX'] = ja5_['$getScaleX'](), j5ak_v['$scaleY'] = ja5_['$getScaleY'](), j5ak_v['$skewX'] = $g7my['$getSkewX'](), j5ak_v['$skewY'] = $g7my['$getSkewY'](), j5ak_v['$skewXdeg'] = sjvd_5(0xb4 * j5ak_v['$skewX'] / Math['PI']), j5ak_v['$skewYdeg'] = sjvd_5(0xb4 * j5ak_v['$skewY'] / Math['PI']), j5ak_v['$rotation'] = sjvd_5(0xb4 * j5ak_v['$skewY'] / Math['PI'])), p4u0x[H[413]] && j5ak_v['$nativeDisplayObject'][H[430]]($g7my['a'], $g7my['b'], $g7my['c'], $g7my['d'], $g7my['tx'], $g7my['ty']);
  }, md$qsy[H[101]]['$getConcatenatedMatrix'] = function () {
    var s5d = this,
        hz8c1 = s5d['$concatenatedMatrix'];hz8c1 = hz8c1 || (s5d['$concatenatedMatrix'] = new p4u0x[H[431]]()), s5d['$parent'] ? s5d['$parent']['$getConcatenatedMatrix']()['$preMultiplyInto'](s5d['$getMatrix'](), hz8c1) : hz8c1[H[432]](s5d['$getMatrix']());var vj_a = s5d['$anchorOffsetX'],
        aibe3 = s5d['$anchorOffsetY'],
        lt40u = s5d['$scrollRect'];return lt40u ? hz8c1['$preMultiplyInto'](p4u0x['$TempMatrix'][H[433]](0x1, 0x0, 0x0, 0x1, -lt40u['x'] - vj_a, -lt40u['y'] - aibe3), hz8c1) : 0x0 == vj_a && 0x0 == aibe3 || hz8c1['$preMultiplyInto'](p4u0x['$TempMatrix'][H[433]](0x1, 0x0, 0x0, 0x1, -vj_a, -aibe3), hz8c1), s5d['$concatenatedMatrix'];
  }, md$qsy[H[101]]['$getInvertedConcatenatedMatrix'] = function () {
    var n3l = this;return n3l['$invertedConcatenatedMatrix'] || (n3l['$invertedConcatenatedMatrix'] = new p4u0x[H[431]]()), n3l['$getConcatenatedMatrix']()['$invertInto'](n3l['$invertedConcatenatedMatrix']), n3l['$invertedConcatenatedMatrix'];
  }, Object[H[107]](md$qsy[H[101]], 'x', { 'get': function () {
      return this['$getX']();
    }, 'set': function (_iva) {
      this['$setX'](_iva);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getX'] = function () {
    return this['$x'];
  }, md$qsy[H[101]]['$setX'] = function (u40p6t) {
    var myqsd = this;return myqsd['$x'] != u40p6t && (myqsd['$x'] = u40p6t, p4u0x[H[413]] ? myqsd['$nativeDisplayObject'][H[434]](u40p6t) : ((u40p6t = myqsd['$parent']) && !u40p6t['$cacheDirty'] && (u40p6t['$cacheDirty'] = !0x0, u40p6t['$cacheDirtyUp']()), (myqsd = myqsd['$maskedObject']) && !myqsd['$cacheDirty'] && (myqsd['$cacheDirty'] = !0x0, myqsd['$cacheDirtyUp']())), !0x0);
  }, Object[H[107]](md$qsy[H[101]], 'y', { 'get': function () {
      return this['$getY']();
    }, 'set': function (i3_bak) {
      this['$setY'](i3_bak);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getY'] = function () {
    return this['$y'];
  }, md$qsy[H[101]]['$setY'] = function (abk_) {
    var bavik = this;return bavik['$y'] != abk_ && (bavik['$y'] = abk_, p4u0x[H[413]] ? bavik['$nativeDisplayObject'][H[435]](abk_) : ((abk_ = bavik['$parent']) && !abk_['$cacheDirty'] && (abk_['$cacheDirty'] = !0x0, abk_['$cacheDirtyUp']()), (bavik = bavik['$maskedObject']) && !bavik['$cacheDirty'] && (bavik['$cacheDirty'] = !0x0, bavik['$cacheDirtyUp']())), !0x0);
  }, Object[H[107]](md$qsy[H[101]], H[436], { 'get': function () {
      return this['$getScaleX']();
    }, 'set': function (lxpu04) {
      this['$setScaleX'](lxpu04);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getScaleX'] = function () {
    return this['$scaleX'];
  }, md$qsy[H[101]]['$setScaleX'] = function (vbkia) {
    var r91z8o = this;r91z8o['$scaleX'] != vbkia && (r91z8o['$scaleX'] = vbkia, r91z8o['$matrixDirty'] = !0x0, r91z8o['$updateUseTransform'](), p4u0x[H[413]] ? r91z8o['$nativeDisplayObject'][H[437]](vbkia) : ((vbkia = r91z8o['$parent']) && !vbkia['$cacheDirty'] && (vbkia['$cacheDirty'] = !0x0, vbkia['$cacheDirtyUp']()), (r91z8o = r91z8o['$maskedObject']) && !r91z8o['$cacheDirty'] && (r91z8o['$cacheDirty'] = !0x0, r91z8o['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[438], { 'get': function () {
      return this['$getScaleY']();
    }, 'set': function (jv5a_k) {
      this['$setScaleY'](jv5a_k);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getScaleY'] = function () {
    return this['$scaleY'];
  }, md$qsy[H[101]]['$setScaleY'] = function (sj$d) {
    var qd$jms = this;qd$jms['$scaleY'] != sj$d && (qd$jms['$scaleY'] = sj$d, qd$jms['$matrixDirty'] = !0x0, qd$jms['$updateUseTransform'](), p4u0x[H[413]] ? qd$jms['$nativeDisplayObject'][H[439]](sj$d) : ((sj$d = qd$jms['$parent']) && !sj$d['$cacheDirty'] && (sj$d['$cacheDirty'] = !0x0, sj$d['$cacheDirtyUp']()), (qd$jms = qd$jms['$maskedObject']) && !qd$jms['$cacheDirty'] && (qd$jms['$cacheDirty'] = !0x0, qd$jms['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[440], { 'get': function () {
      return this['$getRotation']();
    }, 'set': function (va_bk) {
      this['$setRotation'](va_bk);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getRotation'] = function () {
    return this['$rotation'];
  }, md$qsy[H[101]]['$setRotation'] = function (nk3bia) {
    var uwle0x = this,
        bk3an;(nk3bia = sjvd_5(nk3bia)) != uwle0x['$rotation'] && (bk3an = (nk3bia - uwle0x['$rotation']) / 0xb4 * Math['PI'], uwle0x['$skewX'] += bk3an, uwle0x['$skewY'] += bk3an, uwle0x['$rotation'] = nk3bia, uwle0x['$matrixDirty'] = !0x0, uwle0x['$updateUseTransform'](), p4u0x[H[413]] ? uwle0x['$nativeDisplayObject'][H[441]](nk3bia) : ((nk3bia = uwle0x['$parent']) && !nk3bia['$cacheDirty'] && (nk3bia['$cacheDirty'] = !0x0, nk3bia['$cacheDirtyUp']()), (uwle0x = uwle0x['$maskedObject']) && !uwle0x['$cacheDirty'] && (uwle0x['$cacheDirty'] = !0x0, uwle0x['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[442], { 'get': function () {
      return this['$skewXdeg'];
    }, 'set': function (sd5v$j) {
      this['$setSkewX'](sd5v$j);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setSkewX'] = function ($sdv) {
    var $qmdy = this;$sdv != $qmdy['$skewXdeg'] && ($sdv = ($sdv = sjvd_5($qmdy['$skewXdeg'] = $sdv)) / 0xb4 * Math['PI'], $qmdy['$skewX'] = $sdv, $qmdy['$matrixDirty'] = !0x0, $qmdy['$updateUseTransform'](), p4u0x[H[413]] ? $qmdy['$nativeDisplayObject'][H[443]]($qmdy['$skewXdeg']) : (($sdv = $qmdy['$parent']) && !$sdv['$cacheDirty'] && ($sdv['$cacheDirty'] = !0x0, $sdv['$cacheDirtyUp']()), ($qmdy = $qmdy['$maskedObject']) && !$qmdy['$cacheDirty'] && ($qmdy['$cacheDirty'] = !0x0, $qmdy['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[444], { 'get': function () {
      return this['$skewYdeg'];
    }, 'set': function (elnxw0) {
      this['$setSkewY'](elnxw0);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setSkewY'] = function (ds$5jv) {
    var zco = this;ds$5jv != zco['$skewYdeg'] && (ds$5jv = ((ds$5jv = sjvd_5(zco['$skewYdeg'] = ds$5jv)) + zco['$rotation']) / 0xb4 * Math['PI'], zco['$skewY'] = ds$5jv, zco['$matrixDirty'] = !0x0, zco['$updateUseTransform'](), p4u0x[H[413]] ? zco['$nativeDisplayObject'][H[445]](zco['$skewYdeg']) : ((ds$5jv = zco['$parent']) && !ds$5jv['$cacheDirty'] && (ds$5jv['$cacheDirty'] = !0x0, ds$5jv['$cacheDirtyUp']()), (zco = zco['$maskedObject']) && !zco['$cacheDirty'] && (zco['$cacheDirty'] = !0x0, zco['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[446], { 'get': function () {
      return this['$getWidth']();
    }, 'set': function (jd$qsm) {
      this['$setWidth'](jd$qsm);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getWidth'] = function () {
    return isNaN(this['$explicitWidth']) ? this['$getOriginalBounds']()[H[446]] : this['$explicitWidth'];
  }, md$qsy[H[101]]['$setWidth'] = function (b3inak) {
    b3inak = isNaN(b3inak) ? NaN : b3inak, this['$explicitWidth'] != b3inak && (this['$explicitWidth'] = b3inak);
  }, Object[H[107]](md$qsy[H[101]], H[447], { 'get': function () {
      return this['$getHeight']();
    }, 'set': function (a3k_bi) {
      this['$setHeight'](a3k_bi);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getHeight'] = function () {
    return isNaN(this['$explicitHeight']) ? this['$getOriginalBounds']()[H[447]] : this['$explicitHeight'];
  }, md$qsy[H[101]]['$setHeight'] = function (j5_d) {
    j5_d = isNaN(j5_d) ? NaN : j5_d, this['$explicitHeight'] != j5_d && (this['$explicitHeight'] = j5_d);
  }, Object[H[107]](md$qsy[H[101]], H[448], { 'get': function () {
      return this['$getOriginalBounds']()[H[446]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](md$qsy[H[101]], H[449], { 'get': function () {
      return this['$getOriginalBounds']()[H[447]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](md$qsy[H[101]], H[450], { 'get': function () {
      return this['$anchorOffsetX'];
    }, 'set': function (z91) {
      this['$setAnchorOffsetX'](z91);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setAnchorOffsetX'] = function (ibvka_) {
    var ewln = this;ewln['$anchorOffsetX'] != ibvka_ && (ewln['$anchorOffsetX'] = ibvka_, p4u0x[H[413]] ? ewln['$nativeDisplayObject'][H[451]](ibvka_) : ((ibvka_ = ewln['$parent']) && !ibvka_['$cacheDirty'] && (ibvka_['$cacheDirty'] = !0x0, ibvka_['$cacheDirtyUp']()), (ewln = ewln['$maskedObject']) && !ewln['$cacheDirty'] && (ewln['$cacheDirty'] = !0x0, ewln['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[452], { 'get': function () {
      return this['$anchorOffsetY'];
    }, 'set': function (j5d$m) {
      this['$setAnchorOffsetY'](j5d$m);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setAnchorOffsetY'] = function (tp68r9) {
    var l4upt0 = this;l4upt0['$anchorOffsetY'] != tp68r9 && (l4upt0['$anchorOffsetY'] = tp68r9, p4u0x[H[413]] ? l4upt0['$nativeDisplayObject'][H[453]](tp68r9) : ((tp68r9 = l4upt0['$parent']) && !tp68r9['$cacheDirty'] && (tp68r9['$cacheDirty'] = !0x0, tp68r9['$cacheDirtyUp']()), (l4upt0 = l4upt0['$maskedObject']) && !l4upt0['$cacheDirty'] && (l4upt0['$cacheDirty'] = !0x0, l4upt0['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[454], { 'get': function () {
      return this['$visible'];
    }, 'set': function (ds$m) {
      this['$setVisible'](ds$m);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setVisible'] = function (pr46t) {
    var ul0w4 = this;ul0w4['$visible'] != pr46t && (ul0w4['$visible'] = pr46t, p4u0x[H[413]] ? ul0w4['$nativeDisplayObject'][H[455]](pr46t) : (ul0w4['$updateRenderMode'](), (pr46t = ul0w4['$parent']) && !pr46t['$cacheDirty'] && (pr46t['$cacheDirty'] = !0x0, pr46t['$cacheDirtyUp']()), (ul0w4 = ul0w4['$maskedObject']) && !ul0w4['$cacheDirty'] && (ul0w4['$cacheDirty'] = !0x0, ul0w4['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[456], { 'get': function () {
      return this['$cacheAsBitmap'];
    }, 'set': function (aki_3) {
      this['$cacheAsBitmap'] = aki_3, p4u0x[H[413]] ? this['$nativeDisplayObject'][H[457]](aki_3) : this['$setHasDisplayList'](aki_3);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setHasDisplayList'] = function (z9r68) {
    var jakv_5 = this;!!jakv_5['$displayList'] != z9r68 && (z9r68 ? (z9r68 = p4u0x[H[246]][H[458]][H[357]](jakv_5)) && (jakv_5['$displayList'] = z9r68, jakv_5['$cacheDirty'] = !0x0) : jakv_5['$displayList'] = null);
  }, md$qsy[H[101]]['$cacheDirtyUp'] = function () {
    var p4u60t = this['$parent'];p4u60t && !p4u60t['$cacheDirty'] && (p4u60t['$cacheDirty'] = !0x0, p4u60t['$cacheDirtyUp']());
  }, Object[H[107]](md$qsy[H[101]], H[459], { 'get': function () {
      return this['$alpha'];
    }, 'set': function (kib_a) {
      this['$setAlpha'](kib_a);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setAlpha'] = function (iwe) {
    var w3lne = this;w3lne['$alpha'] != iwe && (w3lne['$alpha'] = iwe, p4u0x[H[413]] ? w3lne['$nativeDisplayObject'][H[460]](iwe) : (w3lne['$updateRenderMode'](), (iwe = w3lne['$parent']) && !iwe['$cacheDirty'] && (iwe['$cacheDirty'] = !0x0, iwe['$cacheDirtyUp']()), (w3lne = w3lne['$maskedObject']) && !w3lne['$cacheDirty'] && (w3lne['$cacheDirty'] = !0x0, w3lne['$cacheDirtyUp']())));
  }, Object[H[107]](md$qsy[H[101]], H[461], { 'get': function () {
      return this['$getTouchEnabled']();
    }, 'set': function (ak_v) {
      this['$setTouchEnabled'](ak_v);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$getTouchEnabled'] = function () {
    return this['$touchEnabled'];
  }, md$qsy[H[101]]['$setTouchEnabled'] = function (z19r68) {
    this['$touchEnabled'] = !!z19r68;
  }, Object[H[107]](md$qsy[H[101]], H[462], { 'get': function () {
      return this['$scrollRect'];
    }, 'set': function (p0tl4) {
      this['$setScrollRect'](p0tl4);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setScrollRect'] = function (vkba5_) {
    var lwexn = this;vkba5_ || lwexn['$scrollRect'] ? (vkba5_ ? (lwexn['$scrollRect'] || (lwexn['$scrollRect'] = new p4u0x[H[61]]()), lwexn['$scrollRect'][H[432]](vkba5_), p4u0x[H[413]] && lwexn['$nativeDisplayObject'][H[463]](vkba5_['x'], vkba5_['y'], vkba5_[H[446]], vkba5_[H[447]])) : (lwexn['$scrollRect'] = null, p4u0x[H[413]] && lwexn['$nativeDisplayObject'][H[463]](0x0, 0x0, 0x0, 0x0)), p4u0x[H[413]] || (lwexn['$updateRenderMode'](), (vkba5_ = lwexn['$parent']) && !vkba5_['$cacheDirty'] && (vkba5_['$cacheDirty'] = !0x0, vkba5_['$cacheDirtyUp']()), (vkba5_ = lwexn['$maskedObject']) && !vkba5_['$cacheDirty'] && (vkba5_['$cacheDirty'] = !0x0, vkba5_['$cacheDirtyUp']()))) : lwexn['$updateRenderMode']();
  }, Object[H[107]](md$qsy[H[101]], H[464], { 'get': function () {
      return p4u0x[H[246]][H[465]](this['$blendMode']);
    }, 'set': function ($jmq) {
      var ptr4u = this;$jmq = p4u0x[H[246]][H[466]]($jmq), ptr4u['$blendMode'] != $jmq && (ptr4u['$blendMode'] = $jmq, p4u0x[H[413]] ? ptr4u['$nativeDisplayObject'][H[467]]($jmq) : (ptr4u['$updateRenderMode'](), ($jmq = ptr4u['$parent']) && !$jmq['$cacheDirty'] && ($jmq['$cacheDirty'] = !0x0, $jmq['$cacheDirtyUp']()), (ptr4u = ptr4u['$maskedObject']) && !ptr4u['$cacheDirty'] && (ptr4u['$cacheDirty'] = !0x0, ptr4u['$cacheDirtyUp']())));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](md$qsy[H[101]], H[468], { 'get': function () {
      return this['$mask'] || this['$maskRect'];
    }, 'set': function (nb3eia) {
      var t0plu4 = this;if (nb3eia !== t0plu4) {
        if (nb3eia) {
          if (nb3eia instanceof md$qsy) {
            if (nb3eia == t0plu4['$mask']) return;nb3eia['$maskedObject'] && (nb3eia['$maskedObject'][H[468]] = null), (nb3eia['$maskedObject'] = t0plu4)['$mask'] = nb3eia, p4u0x[H[413]] || nb3eia['$updateRenderMode'](), t0plu4['$maskRect'] && (p4u0x[H[413]] && t0plu4['$nativeDisplayObject'][H[469]](0x0, 0x0, 0x0, 0x0), t0plu4['$maskRect'] = null), p4u0x[H[413]] && t0plu4['$nativeDisplayObject'][H[470]](nb3eia['$nativeDisplayObject']['id']);
          } else t0plu4['$maskRect'] || (t0plu4['$maskRect'] = new p4u0x[H[61]]()), t0plu4['$maskRect'][H[432]](nb3eia), p4u0x[H[413]] && t0plu4['$nativeDisplayObject'][H[469]](nb3eia['x'], nb3eia['y'], nb3eia[H[446]], nb3eia[H[447]]), t0plu4['$mask'] && (t0plu4['$mask']['$maskedObject'] = null, p4u0x[H[413]] || t0plu4['$mask']['$updateRenderMode']()), t0plu4[H[468]] && (p4u0x[H[413]] && t0plu4['$nativeDisplayObject'][H[470]](-0x1), t0plu4['$mask'] = null);
        } else t0plu4['$mask'] && (t0plu4['$mask']['$maskedObject'] = null, p4u0x[H[413]] || t0plu4['$mask']['$updateRenderMode']()), t0plu4[H[468]] && (p4u0x[H[413]] && t0plu4['$nativeDisplayObject'][H[470]](-0x1), t0plu4['$mask'] = null), t0plu4['$maskRect'] && (p4u0x[H[413]] && t0plu4['$nativeDisplayObject'][H[469]](0x0, 0x0, 0x0, 0x0), t0plu4['$maskRect'] = null);p4u0x[H[413]] || t0plu4['$updateRenderMode']();
      }
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]]['$setMaskRect'] = function (jvd_s5) {
    var pu64 = this;(jvd_s5 || pu64['$maskRect']) && (jvd_s5 ? (pu64['$maskRect'] || (pu64['$maskRect'] = new p4u0x[H[61]]()), pu64['$maskRect'][H[432]](jvd_s5)) : pu64['$maskRect'] = null);
  }, Object[H[107]](md$qsy[H[101]], H[471], { 'get': function () {
      return this['$filters'];
    }, 'set': function (_a3i) {
      var pr98t6 = this,
          p6t4ru = pr98t6['$filters'];if (!p6t4ru && !_a3i) return pr98t6['$filters'] = _a3i, void (p4u0x[H[413]] ? pr98t6['$nativeDisplayObject'][H[472]](null) : (pr98t6['$updateRenderMode'](), (hz12oc = pr98t6['$parent']) && !hz12oc['$cacheDirty'] && (hz12oc['$cacheDirty'] = !0x0, hz12oc['$cacheDirtyUp']()), (bika_v = pr98t6['$maskedObject']) && !bika_v['$cacheDirty'] && (bika_v['$cacheDirty'] = !0x0, bika_v['$cacheDirtyUp']())));var hz12oc, bika_v;_a3i && _a3i[H[50]] ? (_a3i = _a3i[H[97]](), pr98t6['$filters'] = _a3i, p4u0x[H[413]] && pr98t6['$nativeDisplayObject'][H[472]](_a3i)) : (pr98t6['$filters'] = _a3i, p4u0x[H[413]] && pr98t6['$nativeDisplayObject'][H[472]](null)), p4u0x[H[413]] || (pr98t6['$updateRenderMode'](), (hz12oc = pr98t6['$parent']) && !hz12oc['$cacheDirty'] && (hz12oc['$cacheDirty'] = !0x0, hz12oc['$cacheDirtyUp']()), (bika_v = pr98t6['$maskedObject']) && !bika_v['$cacheDirty'] && (bika_v['$cacheDirty'] = !0x0, bika_v['$cacheDirtyUp']()));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]][H[473]] = function (k3ainb, b3wine) {
    return this['$getTransformedBounds'](k3ainb = k3ainb || this, b3wine);
  }, md$qsy[H[101]][H[474]] = function (euxwl, a_5vjk) {
    void 0x0 === a_5vjk && (a_5vjk = !0x0);var rz6891 = this;return euxwl = rz6891['$getTransformedBounds'](rz6891, euxwl), a_5vjk && (0x0 != rz6891['$anchorOffsetX'] && (euxwl['x'] -= rz6891['$anchorOffsetX']), 0x0 != rz6891['$anchorOffsetY'] && (euxwl['y'] -= rz6891['$anchorOffsetY'])), euxwl;
  }, md$qsy[H[101]]['$getTransformedBounds'] = function (lpu4t0, lxnwe0) {
    var qsm = this['$getOriginalBounds']();return (lxnwe0 = lxnwe0 || new p4u0x[H[61]]())[H[432]](qsm), lpu4t0 == this || (lpu4t0 ? (czho8 = p4u0x['$TempMatrix'], lpu4t0['$getInvertedConcatenatedMatrix']()['$preMultiplyInto'](this['$getConcatenatedMatrix'](), czho8)) : czho8 = this['$getConcatenatedMatrix'](), czho8['$transformBounds'](lxnwe0)), lxnwe0;var czho8;
  }, md$qsy[H[101]][H[475]] = function (ks5jv, rz9o, xwe3in) {
    if (void 0x0 === ks5jv && (ks5jv = 0x0), void 0x0 === rz9o && (rz9o = 0x0), p4u0x[H[413]]) {
      egret_native[H[476]]();var ur6p4 = egret_native[H[477]](this['$nativeDisplayObject']['id'], ks5jv, rz9o)[H[22]](','),
          lu40p = parseFloat(ur6p4[0x0]);return ur6p4 = parseFloat(ur6p4[0x1]), (xwe3in ? xwe3in[H[433]](lu40p, ur6p4) : xwe3in = new p4u0x[H[478]](lu40p, ur6p4), xwe3in);
    }return this['$getInvertedConcatenatedMatrix']()[H[479]](ks5jv, rz9o, xwe3in);
  }, md$qsy[H[101]][H[480]] = function (t964, oz918, _vd5) {
    if (void 0x0 === t964 && (t964 = 0x0), void 0x0 === oz918 && (oz918 = 0x0), p4u0x[H[413]]) {
      egret_native[H[476]]();var y$sdqm = egret_native[H[481]](this['$nativeDisplayObject']['id'], t964, oz918)[H[22]](','),
          an3kb = parseFloat(y$sdqm[0x0]);return y$sdqm = parseFloat(y$sdqm[0x1]), (_vd5 ? _vd5[H[433]](an3kb, y$sdqm) : _vd5 = new p4u0x[H[478]](an3kb, y$sdqm), _vd5);
    }return this['$getConcatenatedMatrix']()[H[479]](t964, oz918, _vd5);
  }, md$qsy[H[101]]['$getOriginalBounds'] = function () {
    var xwe0nl = this['$getContentBounds']();this['$measureChildBounds'](xwe0nl);var a3nki = this['$measureFiltersOffset'](!0x1);return a3nki && (xwe0nl['x'] += a3nki[H[482]], xwe0nl['y'] += a3nki[H[483]], xwe0nl[H[446]] += -a3nki[H[482]] + a3nki[H[484]], xwe0nl[H[447]] += -a3nki[H[483]] + a3nki[H[485]]), xwe0nl;
  }, md$qsy[H[101]]['$measureChildBounds'] = function (my$dqg) {}, md$qsy[H[101]]['$getContentBounds'] = function () {
    var _svd5 = p4u0x['$TempRectangle'];return _svd5[H[486]](), this['$measureContentBounds'](_svd5), _svd5;
  }, md$qsy[H[101]]['$measureContentBounds'] = function (utp46) {}, md$qsy[H[101]]['$getRenderNode'] = function () {
    var ygq$md = this,
        or91 = ygq$md['$renderNode'];return or91 ? (ygq$md['$renderDirty'] && (or91[H[487]](), ygq$md['$updateRenderNode'](), ygq$md['$renderDirty'] = !0x1, or91 = ygq$md['$renderNode']), or91) : null;
  }, md$qsy[H[101]]['$updateRenderMode'] = function () {
    var wiexn = this;!wiexn['$visible'] || wiexn['$alpha'] <= 0x0 || wiexn['$maskedObject'] ? wiexn['$renderMode'] = 0x1 : wiexn[H[471]] && 0x0 < wiexn[H[471]][H[50]] ? wiexn['$renderMode'] = 0x2 : 0x0 !== wiexn['$blendMode'] || wiexn['$mask'] && wiexn['$mask']['$stage'] ? wiexn['$renderMode'] = 0x3 : wiexn['$scrollRect'] || wiexn['$maskRect'] ? wiexn['$renderMode'] = 0x4 : wiexn['$renderMode'] = null;
  }, md$qsy[H[101]]['$measureFiltersOffset'] = function (b3aki_) {
    var p6t4r = this,
        gdyq = 0x0,
        m$qsj = 0x0,
        ia_kv = 0x0,
        ysm$q = 0x0;for (; p6t4r;) {
      var $q7gy = p6t4r['$filters'];if ($q7gy && $q7gy[H[50]]) {
        var mqs$dy = $q7gy[H[50]];for (var _aivkb = 0x0; _aivkb < mqs$dy; _aivkb++) {
          var _i3b = $q7gy[_aivkb],
              dm$q,
              k5_bav,
              i3bnk,
              _k5vs,
              iba3en,
              d$5jms;H[488] == _i3b[H[146]] ? (gdyq -= dm$q = _i3b[H[489]], m$qsj -= k5_bav = _i3b[H[490]], ia_kv += dm$q, ysm$q += k5_bav) : H[491] == _i3b[H[146]] ? (gdyq -= dm$q = _i3b[H[489]], m$qsj -= k5_bav = _i3b[H[490]], ia_kv += dm$q, ysm$q += k5_bav, i3bnk = _i3b[H[492]] || 0x0, _k5vs = _i3b[H[493]] || 0x0, (d$5jms = iba3en = 0x0) != i3bnk && (gdyq += iba3en = 0x0 < (iba3en = i3bnk * p4u0x[H[494]][H[495]](_k5vs)) ? Math[H[496]](iba3en) : Math[H[497]](iba3en), ia_kv += iba3en, m$qsj += d$5jms = 0x0 < (d$5jms = i3bnk * p4u0x[H[494]][H[498]](_k5vs)) ? Math[H[496]](d$5jms) : Math[H[497]](d$5jms), ysm$q += d$5jms)) : H[499] == _i3b[H[146]] && (gdyq -= _i3b = _i3b[H[500]], m$qsj -= _i3b, ia_kv += _i3b, ysm$q += _i3b);
        }
      }p6t4r = b3aki_ ? p6t4r['$parent'] : null;
    }return { 'minX': gdyq = Math[H[501]](gdyq, 0x0), 'minY': m$qsj = Math[H[501]](m$qsj, 0x0), 'maxX': ia_kv = Math[H[187]](ia_kv, 0x0), 'maxY': ysm$q = Math[H[187]](ysm$q, 0x0) };
  }, md$qsy[H[101]]['$getConcatenatedMatrixAt'] = function (l4up0t, mjds5) {
    var p4x0 = l4up0t['$getInvertedConcatenatedMatrix']();if (0x0 === p4x0['a'] || 0x0 === p4x0['d']) {
      var r196t8 = this,
          ch2oz = l4up0t['$nestLevel'];for (mjds5[H[502]](); r196t8['$nestLevel'] > ch2oz;) {
        var rt964p = r196t8['$scrollRect'];rt964p && mjds5[H[97]](p4u0x['$TempMatrix'][H[433]](0x1, 0x0, 0x0, 0x1, -rt964p['x'], -rt964p['y'])), mjds5[H[97]](r196t8['$getMatrix']()), r196t8 = r196t8['$parent'];
      }
    } else p4x0['$preMultiplyInto'](mjds5, mjds5);
  }, md$qsy[H[101]]['$updateRenderNode'] = function () {}, md$qsy[H[101]]['$hitTest'] = function (ki3b, r169t8) {
    var kv_i = this;if (!p4u0x[H[413]] && !kv_i['$renderNode'] || !kv_i['$visible'] || 0x0 == kv_i['$scaleX'] || 0x0 == kv_i['$scaleY']) return null;var c1o = kv_i['$getInvertedConcatenatedMatrix']();if (0x0 == c1o['a'] && 0x0 == c1o['b'] && 0x0 == c1o['c'] && 0x0 == c1o['d']) return null;var ib3nw = kv_i['$getContentBounds'](),
        ds_5j = c1o['a'] * ki3b + c1o['c'] * r169t8 + c1o['tx'];c1o = c1o['b'] * ki3b + c1o['d'] * r169t8 + c1o['ty'];if (ib3nw[H[503]](ds_5j, c1o)) {
      if (!kv_i['$children']) {
        ib3nw = kv_i['$scrollRect'] || kv_i['$maskRect'];if (ib3nw && !ib3nw[H[503]](ds_5j, c1o)) return null;if (kv_i['$mask'] && !kv_i['$mask']['$hitTest'](ki3b, r169t8)) return null;
      }return kv_i;
    }return null;
  }, md$qsy[H[101]][H[504]] = function (mdy$q, xwn3ei, vd_5) {
    var t6ur4 = this;if (vd_5) {
      nei3bw = (jsqmd = t6ur4['$getInvertedConcatenatedMatrix']())['a'] * mdy$q + jsqmd['c'] * xwn3ei + jsqmd['tx'], d$ysmq = jsqmd['b'] * mdy$q + jsqmd['d'] * xwn3ei + jsqmd['ty'];var $dsmj = void 0x0;if (p4u0x[H[413]]) {
        (lexnw3 = p4u0x[H[246]][H[505]])[H[506]](0x3, 0x3), egret_native[H[507]] = !0x0, egret_native[H[508]](lexnw3), egret_native[H[476]](), egret_native[H[509]](t6ur4['$nativeDisplayObject']['id'], 0x1 - nei3bw, 0x1 - d$ysmq, !0x0);try {
          $dsmj = new Uint8Array(0x4), egret_native[H[510]](0x1, 0x1, 0x1, 0x1, $dsmj);
        } catch (v_5aj) {
          throw new Error(p4u0x[H[246]]['tr'](0x40f));
        }return egret_native[H[508]](null), egret_native[H[507]] = !0x1, 0x0 === $dsmj[0x3] ? !0x1 : !0x0;
      }vd_5 = t6ur4['$displayList'];if (vd_5) {
        var lexnw3 = vd_5[H[511]];try {
          $dsmj = lexnw3[H[512]](nei3bw - vd_5[H[513]], d$ysmq - vd_5[H[514]]);
        } catch (j5s_) {
          throw new Error(p4u0x[H[246]]['tr'](0x40f));
        }
      } else {
        (lexnw3 = p4u0x[H[246]][H[505]])[H[506]](0x3, 0x3), vd_5 = p4u0x[H[431]][H[357]](), (vd_5[H[502]](), vd_5[H[515]](0x1 - nei3bw, 0x1 - d$ysmq), p4u0x[H[246]][H[516]][H[517]](this, lexnw3, vd_5, !0x0), p4u0x[H[431]][H[363]](vd_5));try {
          $dsmj = lexnw3[H[512]](0x1, 0x1);
        } catch (wnel3x) {
          throw new Error(p4u0x[H[246]]['tr'](0x40f));
        }
      }return 0x0 !== $dsmj[0x3];
    }if (0x0 == t6ur4['$scaleX'] || 0x0 == t6ur4['$scaleY']) return !0x1;var jsqmd = t6ur4['$getInvertedConcatenatedMatrix']();$dsmj = t6ur4[H[474]](null, !0x1);var nei3bw = jsqmd['a'] * mdy$q + jsqmd['c'] * xwn3ei + jsqmd['tx'],
        d$ysmq = jsqmd['b'] * mdy$q + jsqmd['d'] * xwn3ei + jsqmd['ty'];if ($dsmj[H[503]](nei3bw, d$ysmq)) return t6ur4 = t6ur4['$scrollRect'] || t6ur4['$maskRect'], t6ur4 && !t6ur4[H[503]](nei3bw, d$ysmq) ? !0x1 : !0x0;return !0x1;
  }, md$qsy[H[101]]['$addListener'] = function (bi3kna, uxp0, ka_vb5, ux0l4, m$jsdq, lp0t4u) {
    dv5j_[H[101]]['$addListener'][H[268]](this, bi3kna, uxp0, ka_vb5, ux0l4, m$jsdq, lp0t4u), lp0t4u = bi3kna == p4u0x[H[80]][H[518]], !lp0t4u && bi3kna != p4u0x[H[80]][H[519]] || -0x1 == (lp0t4u = lp0t4u ? md$qsy['$enterFrameCallBackList'] : md$qsy['$renderCallBackList'])[H[4]](this) && lp0t4u[H[95]](this);
  }, md$qsy[H[101]][H[250]] = function (anb3k, co18h, ym$dgq, k5j_va) {
    dv5j_[H[101]][H[250]][H[268]](this, anb3k, co18h, ym$dgq, k5j_va), k5j_va = anb3k == p4u0x[H[80]][H[518]], !k5j_va && anb3k != p4u0x[H[80]][H[519]] || this[H[405]](anb3k) || -0x1 !== (k5j_va = (anb3k = k5j_va ? md$qsy['$enterFrameCallBackList'] : md$qsy['$renderCallBackList'])[H[4]](this)) && anb3k[H[57]](k5j_va, 0x1);
  }, md$qsy[H[101]][H[362]] = function (ni3kba) {
    if (!ni3kba['$bubbles']) return dv5j_[H[101]][H[362]][H[268]](this, ni3kba);var px04 = this['$getPropagationList'](this),
        c81o9z = 0.5 * px04[H[50]];return ni3kba['$setTarget'](this), this['$dispatchPropagationEvent'](ni3kba, px04, c81o9z), !ni3kba['$isDefaultPrevented'];
  }, md$qsy[H[101]]['$getPropagationList'] = function (j$mdqs) {
    var q$y7gm = [];for (; j$mdqs;) q$y7gm[H[95]](j$mdqs), j$mdqs = j$mdqs['$parent'];var pt6r98 = q$y7gm[H[97]]();return pt6r98[H[520]](), q$y7gm = pt6r98[H[97]](q$y7gm);
  }, md$qsy[H[101]]['$dispatchPropagationEvent'] = function (tr186, ibka_, p04lxu) {
    var kv_s = ibka_[H[50]],
        o2cz1h = p04lxu - 0x1;for (var s5_j = 0x0; s5_j < kv_s; s5_j++) {
      var _av = ibka_[s5_j];if (tr186['$currentTarget'] = _av, tr186['$eventPhase'] = s5_j < o2cz1h ? 0x1 : s5_j == p04lxu || s5_j == o2cz1h ? 0x2 : 0x3, _av['$notifyListener'](tr186, s5_j < p04lxu), tr186['$isPropagationStopped'] || tr186['$isPropagationImmediateStopped']) return;
    }
  }, md$qsy[H[101]][H[406]] = function (xle3n) {
    var _5sj = this;for (; _5sj;) {
      if (_5sj[H[405]](xle3n)) return !0x0;_5sj = _5sj['$parent'];
    }return !0x1;
  }, Object[H[107]](md$qsy[H[101]], H[521], { 'get': function () {
      return this[H[522]];
    }, 'set': function (ewulx) {
      this[H[522]] = ewulx, this['$tintRGB'] = (ewulx >> 0x10) + (0xff00 & ewulx) + ((0xff & ewulx) << 0x10);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[101]][H[523]] = function () {
    this['$sortDirty'] = !0x1;
  }, Object[H[107]](md$qsy[H[101]], H[524], { 'get': function () {
      return this[H[525]];
    }, 'set': function (z81r69) {
      this[H[525]] = z81r69, this[H[425]] && (this[H[425]]['$sortDirty'] = !0x0);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), md$qsy[H[526]] = !0x1, md$qsy['$enterFrameCallBackList'] = [], md$qsy['$renderCallBackList'] = [], md$qsy);function md$qsy() {
    var xlu4p0 = dv5j_[H[268]](this) || this;return xlu4p0['$children'] = null, xlu4p0['$name'] = '', xlu4p0['$parent'] = null, xlu4p0['$stage'] = null, xlu4p0['$nestLevel'] = 0x0, xlu4p0['$useTranslate'] = !0x1, xlu4p0['$matrix'] = new p4u0x[H[431]](), xlu4p0['$matrixDirty'] = !0x1, xlu4p0['$x'] = 0x0, xlu4p0['$y'] = 0x0, xlu4p0['$scaleX'] = 0x1, xlu4p0['$scaleY'] = 0x1, xlu4p0['$rotation'] = 0x0, xlu4p0['$skewX'] = 0x0, xlu4p0['$skewXdeg'] = 0x0, xlu4p0['$skewY'] = 0x0, xlu4p0['$skewYdeg'] = 0x0, xlu4p0['$explicitWidth'] = NaN, xlu4p0['$explicitHeight'] = NaN, xlu4p0['$anchorOffsetX'] = 0x0, xlu4p0['$anchorOffsetY'] = 0x0, xlu4p0['$visible'] = !0x0, xlu4p0['$displayList'] = null, xlu4p0['$cacheAsBitmap'] = !0x1, xlu4p0['$cacheDirty'] = !0x1, xlu4p0['$alpha'] = 0x1, xlu4p0['$touchEnabled'] = md$qsy[H[526]], xlu4p0['$scrollRect'] = null, xlu4p0['$blendMode'] = 0x0, xlu4p0['$maskedObject'] = null, xlu4p0['$mask'] = null, xlu4p0['$maskRect'] = null, xlu4p0['$parentDisplayList'] = null, xlu4p0['$renderNode'] = null, xlu4p0['$renderDirty'] = !0x1, xlu4p0['$renderMode'] = null, xlu4p0[H[522]] = 0x0, xlu4p0['$tintRGB'] = 0x0, xlu4p0['$sortDirty'] = !0x1, xlu4p0[H[525]] = 0x0, xlu4p0['$lastSortedIndex'] = 0x0, xlu4p0[H[527]] = !0x1, p4u0x[H[413]] && xlu4p0[H[424]](), xlu4p0[H[521]] = 0xffffff, xlu4p0;
  }var dv5j_;p4u0x[H[528]] = b3iane, fdsqym(b3iane[H[101]], H[529]);
}(fm$sjd = fm$sjd || {}), function (kb3ia) {
  kb3ia['$TextureScaleFactor'] = 0x1;var wlxn3e = (x0ulp4 = kb3ia[H[397]], fmy$d(x4wu0, x0ulp4), Object[H[107]](x4wu0[H[101]], H[530], { 'get': function () {
      return this['$getTextureWidth']();
    }, 'enumerable': !0x0, 'configurable': !0x0 }), x4wu0[H[101]]['$getTextureWidth'] = function () {
    return this['$textureWidth'];
  }, Object[H[107]](x4wu0[H[101]], H[531], { 'get': function () {
      return this['$getTextureHeight']();
    }, 'enumerable': !0x0, 'configurable': !0x0 }), x4wu0[H[101]]['$getTextureHeight'] = function () {
    return this['$textureHeight'];
  }, x4wu0[H[101]]['$getScaleBitmapWidth'] = function () {
    return this['$bitmapWidth'] * kb3ia['$TextureScaleFactor'];
  }, x4wu0[H[101]]['$getScaleBitmapHeight'] = function () {
    return this['$bitmapHeight'] * kb3ia['$TextureScaleFactor'];
  }, Object[H[107]](x4wu0[H[101]], H[532], { 'get': function () {
      return this['$bitmapData'];
    }, 'set': function (lx04) {
      this['$ktxData'] = null, this[H[68]](lx04);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), x4wu0[H[101]][H[68]] = function (yqm7) {
    this['$bitmapData'] = yqm7;var m5$djs = kb3ia['$TextureScaleFactor'],
        h1c = yqm7[H[446]] * m5$djs;m5$djs = yqm7[H[447]] * m5$djs, this['$initData'](0x0, 0x0, h1c, m5$djs, 0x0, 0x0, h1c, m5$djs, yqm7[H[446]], yqm7[H[447]]);
  }, Object[H[107]](x4wu0[H[101]], H[533], { 'get': function () {
      return this['$ktxData'];
    }, 'set': function (jd5v$) {
      this[H[534]](jd5v$);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), x4wu0[H[101]][H[534]] = function (exniw3) {
    var _avik;exniw3 ? exniw3 != this['$ktxData'] && ((_avik = new kb3ia[H[305]](exniw3, 0x1))[H[306]] ? kb3ia[H[31]](H[535]) : (this['$ktxData'] = exniw3, (exniw3 = new kb3ia[H[66]](exniw3))[H[309]] = H[297], _avik[H[310]](exniw3, !0x1), this[H[68]](exniw3))) : kb3ia[H[31]](H[536]);
  }, x4wu0[H[101]]['$initData'] = function (p4uxl, bkan, _bikva, m$qdy, yqm$g7, biwe, $7gqym, vj5ak, y$q7m, t6pu4, ne3ib) {
    void 0x0 === ne3ib && (ne3ib = !0x1);var $sqmd = kb3ia['$TextureScaleFactor'];this['$bitmapX'] = p4uxl / $sqmd, this['$bitmapY'] = bkan / $sqmd, this['$bitmapWidth'] = _bikva / $sqmd, this['$bitmapHeight'] = m$qdy / $sqmd, this['$offsetX'] = yqm$g7, this['$offsetY'] = biwe, this['$textureWidth'] = $7gqym, this['$textureHeight'] = vj5ak, this['$sourceWidth'] = y$q7m, this['$sourceHeight'] = t6pu4, this['$rotated'] = ne3ib, kb3ia[H[66]]['$invalidate'](this['$bitmapData']);
  }, x4wu0[H[101]][H[537]] = function (rt16, ak_vj) {
    throw new Error();
  }, x4wu0[H[101]][H[512]] = function (t04pl, z61r9, dgyq, av5_j) {
    throw void 0x0 === dgyq && (dgyq = 0x1), void 0x0 === av5_j && (av5_j = 0x1), new Error();
  }, x4wu0[H[101]][H[538]] = function (qmsd$, _sjv5k, rp69t) {
    throw new Error();
  }, x4wu0[H[101]][H[539]] = function (z681r9, t1869, v5s_j) {
    throw new Error();
  }, x4wu0[H[101]][H[63]] = function () {
    this['$bitmapData'] && (this[H[540]] && this['$bitmapData']['$dispose'](), this['$bitmapData'] = null);
  }, x4wu0);function x4wu0() {
    var lnxwe = x0ulp4[H[268]](this) || this;return lnxwe[H[540]] = !0x0, lnxwe['$bitmapX'] = 0x0, lnxwe['$bitmapY'] = 0x0, lnxwe['$bitmapWidth'] = 0x0, lnxwe['$bitmapHeight'] = 0x0, lnxwe['$offsetX'] = 0x0, lnxwe['$offsetY'] = 0x0, lnxwe['$textureWidth'] = 0x0, lnxwe['$textureHeight'] = 0x0, lnxwe['$sourceWidth'] = 0x0, lnxwe['$sourceHeight'] = 0x0, lnxwe['$bitmapData'] = null, lnxwe['$ktxData'] = null, lnxwe['$rotated'] = !0x1, lnxwe;
  }var x0ulp4;kb3ia[H[67]] = wlxn3e, fdsqym(wlxn3e[H[101]], H[541]);
}(fm$sjd = fm$sjd || {}), function (e3wix) {
  var _v5sdj = (d5_sjv = e3wix[H[397]], fmy$d(z8h1co, d5_sjv), Object[H[107]](z8h1co[H[101]], H[146], { 'get': function () {
      return this['$type'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](z8h1co[H[101]], H[542], { 'get': function () {
      return this['$bubbles'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](z8h1co[H[101]], H[543], { 'get': function () {
      return this['$cancelable'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](z8h1co[H[101]], H[544], { 'get': function () {
      return this['$eventPhase'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](z8h1co[H[101]], H[545], { 'get': function () {
      return this['$currentTarget'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](z8h1co[H[101]], H[403], { 'get': function () {
      return this['$target'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), z8h1co[H[101]]['$setTarget'] = function (roz819) {
    return this['$target'] = roz819, !0x0;
  }, z8h1co[H[101]][H[546]] = function () {
    return this['$isDefaultPrevented'];
  }, z8h1co[H[101]][H[547]] = function () {
    this['$cancelable'] && (this['$isDefaultPrevented'] = !0x0);
  }, z8h1co[H[101]][H[548]] = function () {
    this['$bubbles'] && (this['$isPropagationStopped'] = !0x0);
  }, z8h1co[H[101]][H[549]] = function () {
    this['$bubbles'] && (this['$isPropagationImmediateStopped'] = !0x0);
  }, z8h1co[H[101]][H[550]] = function () {
    this[H[29]] = this['$currentTarget'] = null, this['$setTarget'](null);
  }, z8h1co[H[362]] = function (dv$5sj, qm$7y, eibna, _kj5v) {
    return qm$7y = z8h1co[H[357]](z8h1co, qm$7y, eibna = void 0x0 === eibna ? !0x1 : eibna), eibna = z8h1co[H[551]](z8h1co), null != _kj5v && (eibna[H[29]] = _kj5v), dv$5sj = dv$5sj[H[362]](qm$7y), (z8h1co[H[363]](qm$7y), dv$5sj);
  }, z8h1co[H[551]] = function (ba3kn) {
    var z9r186 = ba3kn[H[552]];return z9r186 = z9r186 || (ba3kn[H[552]] = {});
  }, z8h1co[H[357]] = function (o98cz1, t0u6, rtp49, rutp6) {
    if ((pr9t = (pr9t = o98cz1[H[100]](H[553]) ? o98cz1[H[553]] : pr9t) || (o98cz1[H[553]] = []))[H[50]]) {
      var pr9t = pr9t[H[53]]();return pr9t['$type'] = t0u6, pr9t['$bubbles'] = !!rtp49, pr9t['$cancelable'] = !!rutp6, pr9t['$isDefaultPrevented'] = !0x1, pr9t['$isPropagationStopped'] = !0x1, pr9t['$isPropagationImmediateStopped'] = !0x1, pr9t['$eventPhase'] = 0x2, pr9t;
    }return new o98cz1(t0u6, rtp49, rutp6);
  }, z8h1co[H[363]] = function (zo18) {
    zo18[H[550]](), Object[H[554]](zo18)[H[99]][H[553]][H[95]](zo18);
  }, z8h1co[H[555]] = H[556], z8h1co[H[557]] = H[558], z8h1co[H[559]] = H[560], z8h1co[H[561]] = H[562], z8h1co[H[518]] = H[563], z8h1co[H[519]] = H[517], z8h1co[H[564]] = H[506], z8h1co[H[565]] = H[566], z8h1co[H[567]] = H[568], z8h1co[H[81]] = H[160], z8h1co[H[569]] = H[570], z8h1co[H[571]] = H[572], z8h1co[H[573]] = H[574], z8h1co[H[575]] = H[576], z8h1co[H[577]] = H[578], z8h1co[H[579]] = H[580], z8h1co[H[581]] = H[343], z8h1co[H[582]] = H[583], z8h1co[H[584]] = H[585], z8h1co[H[586]] = H[587], z8h1co);function z8h1co(i3nea, yg7m, sv5_d, sjdq) {
    var z1h2 = d5_sjv[H[268]](this) || this;return z1h2['$eventPhase'] = 0x2, z1h2['$currentTarget'] = null, z1h2['$target'] = null, z1h2['$isDefaultPrevented'] = !0x1, z1h2['$isPropagationStopped'] = !0x1, z1h2['$isPropagationImmediateStopped'] = !0x1, z1h2['$type'] = i3nea, z1h2['$bubbles'] = !!yg7m, z1h2['$cancelable'] = !!sv5_d, z1h2[H[29]] = sjdq, z1h2;
  }var d5_sjv;e3wix[H[80]] = _v5sdj, fdsqym(_v5sdj[H[101]], H[588]);
}(fm$sjd = fm$sjd || {}), fi3k_a[H[589]] = !0x0, fi3k_a[H[590]] = !0x1, function (wbn3e) {
  wbn3e[H[591]] = function (i3we) {
    var co81hz = [];for (var b3ni = 0x1; b3ni < arguments[H[50]]; b3ni++) co81hz[b3ni - 0x1] = arguments[b3ni];return wbn3e[H[246]]['tr'][H[200]](wbn3e[H[246]], arguments);
  }, wbn3e['$error'] = function (_vsj) {
    var v5sk = [];for (var t0u4l = 0x1; t0u4l < arguments[H[50]]; t0u4l++) v5sk[t0u4l - 0x1] = arguments[t0u4l];var rp689t = wbn3e[H[246]]['tr'][H[200]](null, arguments);throw wbn3e[H[246]]['$errorToFPS'](H[592] + _vsj + ':\x20' + rp689t), new Error('#' + _vsj + ':\x20' + rp689t);
  }, wbn3e['$warn'] = function (u064) {
    var dsm$5 = [];for (var dms$qy = 0x1; dms$qy < arguments[H[50]]; dms$qy++) dsm$5[dms$qy - 0x1] = arguments[dms$qy];var k5v_j = wbn3e[H[246]]['tr'][H[200]](null, arguments);wbn3e[H[246]]['$warnToFPS'](H[593] + u064 + ':\x20' + k5v_j), wbn3e[H[134]](H[593] + u064 + ':\x20' + k5v_j);
  }, wbn3e['$markCannotUse'] = function (lu, ai_vb, qdg) {
    Object[H[107]](lu[H[101]], ai_vb, { 'get': function () {
        return wbn3e['$warn'](0x3f1, wbn3e[H[594]](lu), ai_vb), qdg;
      }, 'set': function (k3i_ab) {
        wbn3e['$error'](0x3f1, wbn3e[H[594]](lu), ai_vb);
      }, 'enumerable': !0x0, 'configurable': !0x0 });
  };
}(fm$sjd = fm$sjd || {}), function (d$gmy) {
  var bav_i = [],
      mqdy$ = Math['PI'] / 0xb4,
      wexin3 = (dqmg$ = d$gmy[H[397]], fmy$d(u0p46t, dqmg$), u0p46t[H[363]] = function (t0p46u) {
    t0p46u && bav_i[H[95]](t0p46u);
  }, u0p46t[H[357]] = function (z91c8o, _s5k) {
    var c2hzo1 = bav_i[H[53]]();return (c2hzo1 = c2hzo1 || new u0p46t())[H[433]](z91c8o, _s5k);
  }, Object[H[107]](u0p46t[H[101]], H[50], { 'get': function () {
      return Math[H[595]](this['x'] * this['x'] + this['y'] * this['y']);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), u0p46t[H[101]][H[433]] = function (t96pr, qdmys) {
    return this['x'] = t96pr, this['y'] = qdmys, this;
  }, u0p46t[H[101]][H[429]] = function () {
    return new u0p46t(this['x'], this['y']);
  }, u0p46t[H[101]][H[596]] = function (n3lx) {
    return this['x'] == n3lx['x'] && this['y'] == n3lx['y'];
  }, u0p46t[H[492]] = function (m$syqd, p60tu4) {
    return Math[H[595]]((m$syqd['x'] - p60tu4['x']) * (m$syqd['x'] - p60tu4['x']) + (m$syqd['y'] - p60tu4['y']) * (m$syqd['y'] - p60tu4['y']));
  }, u0p46t[H[101]][H[432]] = function (ewlxu0) {
    this['x'] = ewlxu0['x'], this['y'] = ewlxu0['y'];
  }, u0p46t[H[101]][H[597]] = function ($svj5d) {
    return new u0p46t(this['x'] + $svj5d['x'], this['y'] + $svj5d['y']);
  }, u0p46t[H[598]] = function (ch81zo, $5dsmj, sdj$v5) {
    var welx0 = 0x1 - sdj$v5;return new u0p46t(ch81zo['x'] * sdj$v5 + $5dsmj['x'] * welx0, ch81zo['y'] * sdj$v5 + $5dsmj['y'] * welx0);
  }, u0p46t[H[101]][H[239]] = function (vsj_k) {
    0x0 == this['x'] && 0x0 == this['y'] || (vsj_k = vsj_k / this[H[50]], this['x'] *= vsj_k, this['y'] *= vsj_k);
  }, u0p46t[H[101]][H[599]] = function (ebn3i, aen3) {
    this['x'] += ebn3i, this['y'] += aen3;
  }, u0p46t[H[600]] = function (ulxp40, ds$qj) {
    return new u0p46t(ulxp40 * d$gmy[H[494]][H[495]](ds$qj / mqdy$), ulxp40 * d$gmy[H[494]][H[498]](ds$qj / mqdy$));
  }, u0p46t[H[101]][H[601]] = function (ne3w) {
    return new u0p46t(this['x'] - ne3w['x'], this['y'] - ne3w['y']);
  }, u0p46t[H[101]][H[390]] = function () {
    return H[602] + this['x'] + H[603] + this['y'] + ')';
  }, u0p46t);function u0p46t(xl4w0, an3bie) {
    void 0x0 === xl4w0 && (xl4w0 = 0x0), void 0x0 === an3bie && (an3bie = 0x0);var bw3in = dqmg$[H[268]](this) || this;return bw3in['x'] = xl4w0, bw3in['y'] = an3bie, bw3in;
  }var dqmg$;d$gmy[H[478]] = wexin3, fdsqym(wexin3[H[101]], H[604]), d$gmy['$TempPoint'] = new wexin3();
}(fm$sjd = fm$sjd || {}), function (z981) {
  var vka_5 = (aib3k_ = z981[H[528]], fmy$d(yd$mg, aib3k_), Object[H[107]](yd$mg[H[101]], H[605], { 'get': function () {
      return this['$children'][H[50]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), yd$mg[H[101]][H[606]] = function ($5v) {
    z981[H[413]] && this['$nativeDisplayObject'][H[606]] && this['$nativeDisplayObject'][H[606]]($5v);
  }, yd$mg[H[101]][H[607]] = function (el3nx) {
    var biae = this['$children'][H[50]];return el3nx['$parent'] == this && biae--, this['$doAddChild'](el3nx, biae);
  }, yd$mg[H[101]][H[608]] = function (d$ymsq, my$sqd) {
    return ((my$sqd = 0x0 | +my$sqd) < 0x0 || my$sqd >= this['$children'][H[50]]) && (my$sqd = this['$children'][H[50]], d$ymsq['$parent'] == this && my$sqd--), this['$doAddChild'](d$ymsq, my$sqd);
  }, yd$mg[H[101]]['$doAddChild'] = function (naib3, v_djs5, j5d) {
    void 0x0 === j5d && (j5d = !0x0);var pr64t9 = this;naib3 == pr64t9 ? z981['$error'](0x3ed) : naib3 instanceof z981[H[609]] && naib3[H[503]](pr64t9) && z981['$error'](0x3ec);var c189oz = naib3['$parent'];if (c189oz == pr64t9) return pr64t9[H[610]](naib3, v_djs5), naib3;c189oz && c189oz[H[611]](naib3), pr64t9['$children'][H[57]](v_djs5, 0x0, naib3), naib3['$setParent'](pr64t9), z981[H[413]] && pr64t9['$nativeDisplayObject'][H[608]](naib3['$nativeDisplayObject']['id'], v_djs5), c189oz = pr64t9['$stage'];if (c189oz && naib3['$onAddToStage'](c189oz, pr64t9['$nestLevel'] + 0x1), j5d && naib3[H[176]](z981[H[80]][H[559]], !0x0), c189oz) {
      var s$dmqy = yd$mg['$EVENT_ADD_TO_STAGE_LIST'];for (; s$dmqy[H[50]];) {
        var p946r = s$dmqy[H[23]]();p946r['$stage'] && j5d && p946r[H[176]](z981[H[80]][H[555]]);
      }
    }return z981[H[413]] || (naib3['$maskedObject'] && naib3['$maskedObject']['$updateRenderMode'](), pr64t9['$cacheDirty'] || (pr64t9['$cacheDirty'] = !0x0, (c189oz = pr64t9['$parent']) && !c189oz['$cacheDirty'] && (c189oz['$cacheDirty'] = !0x0, c189oz['$cacheDirtyUp']()), (pr64t9 = pr64t9['$maskedObject']) && !pr64t9['$cacheDirty'] && (pr64t9['$cacheDirty'] = !0x0, pr64t9['$cacheDirtyUp']()))), this['$childAdded'](naib3, v_djs5), naib3;
  }, yd$mg[H[101]][H[503]] = function (_a5kvj) {
    for (; _a5kvj;) {
      if (_a5kvj == this) return !0x0;_a5kvj = _a5kvj['$parent'];
    }return !0x1;
  }, yd$mg[H[101]][H[612]] = function (s$dqy) {
    return 0x0 <= (s$dqy = 0x0 | +s$dqy) && s$dqy < this['$children'][H[50]] ? this['$children'][s$dqy] : (z981['$error'](0x3ef), null);
  }, yd$mg[H[101]][H[613]] = function ($5jvsd) {
    return this['$children'][H[4]]($5jvsd);
  }, yd$mg[H[101]][H[614]] = function (tpr689) {
    var niba3e = this['$children'],
        ut60 = niba3e[H[50]],
        rt6p98;for (var lexwu = 0x0; lexwu < ut60; lexwu++) if ((rt6p98 = niba3e[lexwu])[H[145]] == tpr689) return rt6p98;return null;
  }, yd$mg[H[101]][H[611]] = function (_5skj) {
    return _5skj = this['$children'][H[4]](_5skj), 0x0 <= _5skj ? this['$doRemoveChild'](_5skj) : (z981['$error'](0x3ee), null);
  }, yd$mg[H[101]][H[615]] = function (u0px4) {
    return 0x0 <= (u0px4 = 0x0 | +u0px4) && u0px4 < this['$children'][H[50]] ? this['$doRemoveChild'](u0px4) : (z981['$error'](0x3ef), null);
  }, yd$mg[H[101]]['$doRemoveChild'] = function (vk5ab_, ni) {
    void 0x0 === ni && (ni = !0x0);var vi_bk = this,
        y$gd = this['$children'],
        ai_b = y$gd[vk5ab_ = 0x0 | +vk5ab_];if (this['$childRemoved'](ai_b, vk5ab_), ni && ai_b[H[176]](z981[H[80]][H[561]], !0x0), this['$stage']) {
      ai_b['$onRemoveFromStage']();var qdj$ms = yd$mg['$EVENT_REMOVE_FROM_STAGE_LIST'];for (; 0x0 < qdj$ms[H[50]];) {
        var zc81ho = qdj$ms[H[23]]();ni && zc81ho['$hasAddToStage'] && (zc81ho['$hasAddToStage'] = !0x1, zc81ho[H[176]](z981[H[80]][H[557]])), zc81ho['$hasAddToStage'] = !0x1, zc81ho['$stage'] = null;
      }
    }return this['$displayList'] || this['$parentDisplayList'], ai_b['$setParent'](null), vk5ab_ = y$gd[H[4]](ai_b), (-0x1 != vk5ab_ && y$gd[H[57]](vk5ab_, 0x1), z981[H[413]] ? vi_bk['$nativeDisplayObject'][H[611]](ai_b['$nativeDisplayObject']['id']) : (ai_b['$maskedObject'] && ai_b['$maskedObject']['$updateRenderMode'](), vi_bk['$cacheDirty'] || (vi_bk['$cacheDirty'] = !0x0, (vk5ab_ = vi_bk['$parent']) && !vk5ab_['$cacheDirty'] && (vk5ab_['$cacheDirty'] = !0x0, vk5ab_['$cacheDirtyUp']()), (vi_bk = vi_bk['$maskedObject']) && !vi_bk['$cacheDirty'] && (vi_bk['$cacheDirty'] = !0x0, vi_bk['$cacheDirtyUp']()))), ai_b);
  }, yd$mg[H[101]][H[616]] = function (ne3xlw, inea3b) {
    ((inea3b = 0x0 | +inea3b) < 0x0 || inea3b >= this['$children'][H[50]]) && (inea3b = this['$children'][H[50]] - 0x1), this[H[610]](ne3xlw, inea3b);
  }, yd$mg[H[101]][H[610]] = function (c2o1, ka3i_) {
    var i3nak = this['$children'][H[4]](c2o1);i3nak < 0x0 && z981['$error'](0x3ee), i3nak != ka3i_ && (this['$childRemoved'](c2o1, i3nak), this['$children'][H[57]](i3nak, 0x1), this['$children'][H[57]](ka3i_, 0x0, c2o1), this['$childAdded'](c2o1, ka3i_), z981[H[413]] ? (this['$nativeDisplayObject'][H[611]](c2o1['$nativeDisplayObject']['id']), this['$nativeDisplayObject'][H[608]](c2o1['$nativeDisplayObject']['id'], ka3i_)) : this['$cacheDirty'] || (this['$cacheDirty'] = !0x0, (ka3i_ = this['$parent']) && !ka3i_['$cacheDirty'] && (ka3i_['$cacheDirty'] = !0x0, ka3i_['$cacheDirtyUp']()), (ka3i_ = this['$maskedObject']) && !ka3i_['$cacheDirty'] && (ka3i_['$cacheDirty'] = !0x0, ka3i_['$cacheDirtyUp']())));
  }, yd$mg[H[101]][H[617]] = function (t6up4r, rt986p) {
    rt986p = 0x0 | +rt986p, 0x0 <= (t6up4r = 0x0 | +t6up4r) && t6up4r < this['$children'][H[50]] && 0x0 <= rt986p && rt986p < this['$children'][H[50]] ? this[H[618]](t6up4r, rt986p) : z981['$error'](0x3ef);
  }, yd$mg[H[101]][H[619]] = function ($dyqs, z6198r) {
    $dyqs = this['$children'][H[4]]($dyqs), z6198r = this['$children'][H[4]](z6198r), -0x1 == $dyqs || -0x1 == z6198r ? z981['$error'](0x3ee) : this[H[618]]($dyqs, z6198r);
  }, yd$mg[H[101]][H[618]] = function (mgyq7$, e3winb) {
    if (e3winb < mgyq7$) {
      var gyqm$ = e3winb;e3winb = mgyq7$, mgyq7$ = gyqm$;
    } else {
      if (mgyq7$ == e3winb) return;
    }var t986r = this['$children'],
        u064t = t986r[mgyq7$];gyqm$ = t986r[e3winb], (this['$childRemoved'](u064t, mgyq7$), this['$childRemoved'](gyqm$, e3winb), t986r[mgyq7$] = gyqm$, t986r[e3winb] = u064t, this['$childAdded'](gyqm$, mgyq7$), this['$childAdded'](u064t, e3winb), z981[H[413]] ? this['$nativeDisplayObject'][H[620]](mgyq7$, e3winb) : this['$cacheDirty'] || (this['$cacheDirty'] = !0x0, (e3winb = this['$parent']) && !e3winb['$cacheDirty'] && (e3winb['$cacheDirty'] = !0x0, e3winb['$cacheDirtyUp']()), (e3winb = this['$maskedObject']) && !e3winb['$cacheDirty'] && (e3winb['$cacheDirty'] = !0x0, e3winb['$cacheDirtyUp']())));
  }, yd$mg[H[101]][H[621]] = function () {
    for (var p6urt = this['$children'][H[50]] - 0x1; 0x0 <= p6urt; p6urt--) this['$doRemoveChild'](p6urt);
  }, yd$mg[H[101]]['$childAdded'] = function (mqdy, oczh8) {}, yd$mg[H[101]]['$childRemoved'] = function (naibe, n3xie) {}, yd$mg[H[101]]['$onAddToStage'] = function (vj$s5d, wne0l) {
    aib3k_[H[101]]['$onAddToStage'][H[268]](this, vj$s5d, wne0l);var tp86 = this['$children'][H[50]];wne0l++;for (var aj5_kv = 0x0; aj5_kv < tp86; aj5_kv++) {
      var qjm$d = this['$children'][aj5_kv];qjm$d['$onAddToStage'](vj$s5d, wne0l), qjm$d['$maskedObject'] && qjm$d['$maskedObject']['$updateRenderMode']();
    }
  }, yd$mg[H[101]]['$onRemoveFromStage'] = function () {
    aib3k_[H[101]]['$onRemoveFromStage'][H[268]](this);var q$gmd = this['$children'],
        r64ptu = q$gmd[H[50]];for (var t9861 = 0x0; t9861 < r64ptu; t9861++) q$gmd[t9861]['$onRemoveFromStage']();
  }, yd$mg[H[101]]['$measureChildBounds'] = function (c1h2oz) {
    var z8o1r = this['$children'],
        z961r = z8o1r[H[50]];if (0x0 != z961r) {
      var k3a_ib = 0x0,
          w3xne = 0x0,
          jks_v5 = 0x0,
          s5dj_ = 0x0,
          $5dsj = !0x1;for (var y$mdq = -0x1; y$mdq < z961r; y$mdq++) {
        var bk5v_ = void 0x0;(bk5v_ = -0x1 == y$mdq ? c1h2oz : (z8o1r[y$mdq][H[474]](z981['$TempRectangle']), z8o1r[y$mdq]['$getMatrix']()['$transformBounds'](z981['$TempRectangle']), z981['$TempRectangle']))[H[622]]() || (s5dj_ = $5dsj ? (k3a_ib = Math[H[501]](k3a_ib, bk5v_['x']), w3xne = Math[H[187]](w3xne, bk5v_['x'] + bk5v_[H[446]]), jks_v5 = Math[H[501]](jks_v5, bk5v_['y']), Math[H[187]](s5dj_, bk5v_['y'] + bk5v_[H[447]])) : ($5dsj = !0x0, w3xne = (k3a_ib = bk5v_['x']) + bk5v_[H[446]], (jks_v5 = bk5v_['y']) + bk5v_[H[447]]));
      }c1h2oz[H[433]](k3a_ib, jks_v5, w3xne - k3a_ib, s5dj_ - jks_v5);
    }
  }, Object[H[107]](yd$mg[H[101]], H[623], { 'get': function () {
      return this['$getTouchChildren']();
    }, 'set': function (kab_vi) {
      this['$setTouchChildren'](!!kab_vi);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), yd$mg[H[101]]['$getTouchChildren'] = function () {
    return this['$touchChildren'];
  }, yd$mg[H[101]]['$setTouchChildren'] = function (js5$vd) {
    return this['$touchChildren'] != js5$vd && (this['$touchChildren'] = js5$vd, !0x0);
  }, yd$mg[H[101]]['$hitTest'] = function (hco8z, xwne) {
    if (!this['$visible']) return null;var c98 = this['$getInvertedConcatenatedMatrix'](),
        ieab3n = c98['a'] * hco8z + c98['c'] * xwne + c98['tx'],
        enwi3b = c98['b'] * hco8z + c98['d'] * xwne + c98['ty'];c98 = this['$scrollRect'] || this['$maskRect'];if (c98 && !c98[H[503]](ieab3n, enwi3b)) return null;if (this['$mask'] && !this['$mask']['$hitTest'](hco8z, xwne)) return null;var an3ikb = this['$children'],
        z21ch = !0x1,
        kban = null;for (var x3iwe = an3ikb[H[50]] - 0x1; 0x0 <= x3iwe; x3iwe--) {
      var a3kb_i = an3ikb[x3iwe];if (!a3kb_i['$maskedObject'] && (kban = a3kb_i['$hitTest'](hco8z, xwne))) {
        if (z21ch = !0x0, kban['$touchEnabled']) break;kban = null;
      }
    }return kban ? this['$touchChildren'] ? kban : this : z21ch ? this : aib3k_[H[101]]['$hitTest'][H[268]](this, hco8z, xwne);
  }, yd$mg[H[101]][H[624]] = function (tpr4, i3b_a) {
    return tpr4[H[524]] === i3b_a[H[524]] ? tpr4['$lastSortedIndex'] - i3b_a['$lastSortedIndex'] : tpr4[H[524]] - i3b_a[H[524]];
  }, yd$mg[H[101]][H[523]] = function () {
    aib3k_[H[101]][H[523]][H[268]](this);var a5kj_ = this['$sortDirty'] = !0x1,
        dv$5js = this['$children'],
        qsdj = null;for (var kainb3 = 0x0, d$v5s = dv$5js[H[50]]; kainb3 < d$v5s; ++kainb3) (qsdj = dv$5js[kainb3])['$lastSortedIndex'] = kainb3, a5kj_ || 0x0 === qsdj[H[524]] || (a5kj_ = !0x0);a5kj_ && 0x1 < dv$5js[H[50]] && dv$5js[H[625]](this[H[624]]);
  }, yd$mg['$EVENT_ADD_TO_STAGE_LIST'] = [], yd$mg['$EVENT_REMOVE_FROM_STAGE_LIST'] = [], yd$mg);function yd$mg() {
    var v_5abk = aib3k_[H[268]](this) || this;return v_5abk['$touchChildren'] = !0x0, v_5abk['$children'] = [], v_5abk;
  }var aib3k_;z981[H[609]] = vka_5, fdsqym(vka_5[H[101]], H[626]);
}(fm$sjd = fm$sjd || {}), function (zc8o91) {
  var in3wbe = (p4xul = zc8o91[H[397]], fmy$d(lwn3, p4xul), lwn3[H[101]][H[337]] = function (sv5d$j) {
    return this[H[627]][sv5d$j];
  }, lwn3[H[101]][H[332]] = function (js_k5, pxul04, vjd$, kb5av, eb3w, rz9861, we3in, s$dymq, b3ian) {
    void 0x0 === rz9861 && (rz9861 = 0x0), void 0x0 === we3in && (we3in = 0x0), void 0x0 === s$dymq && (s$dymq = rz9861 + kb5av), void 0x0 === b3ian && (b3ian = we3in + eb3w);var $sdjv = new zc8o91[H[67]]();return $sdjv[H[540]] = !0x1, $sdjv['$bitmapData'] = this['$texture']['$bitmapData'], $sdjv['$initData'](this[H[628]] + pxul04, this[H[629]] + vjd$, kb5av, eb3w, rz9861, we3in, s$dymq, b3ian, this['$texture']['$sourceWidth'], this['$texture']['$sourceHeight']), this[H[627]][js_k5] = $sdjv;
  }, lwn3[H[101]][H[63]] = function () {
    this['$texture'] && this['$texture'][H[63]]();
  }, lwn3);function lwn3(jms5$d) {
    var msj5$d = p4xul[H[268]](this) || this;return msj5$d[H[628]] = 0x0, msj5$d[H[629]] = 0x0, msj5$d[H[627]] = zc8o91[H[630]](), msj5$d['$texture'] = jms5$d, msj5$d[H[628]] = jms5$d['$bitmapX'] - jms5$d['$offsetX'], msj5$d[H[629]] = jms5$d['$bitmapY'] - jms5$d['$offsetY'], msj5$d;
  }var p4xul;zc8o91[H[331]] = in3wbe, fdsqym(in3wbe[H[101]], H[631]);
}(fm$sjd = fm$sjd || {}), function ($s5djm) {
  $s5djm['$locale_strings'] = $s5djm['$locale_strings'] || {}, $s5djm['$language'] = H[632];
}(fm$sjd = fm$sjd || {}), function (jsv5d_) {
  (jsv5d_[H[246]] || (jsv5d_[H[246]] = {}))['tr'] = function (t694) {
    var x0l4u = [];for (var l40up = 0x1; l40up < arguments[H[50]]; l40up++) x0l4u[l40up - 0x1] = arguments[l40up];var m7yq$g = jsv5d_['$locale_strings'][jsv5d_['$language']][t694];if (!m7yq$g) return '{' + t694 + '}';var r96tp = x0l4u[H[50]];for (var mjdqs$ = 0x0; mjdqs$ < r96tp; mjdqs$++) m7yq$g = m7yq$g[H[43]]('{' + mjdqs$ + '}', x0l4u[mjdqs$]);return m7yq$g;
  };
}(fm$sjd = fm$sjd || {}), function (jmd$sq) {
  var r89t = (lu0 = jmd$sq[H[528]], fmy$d(pr4t6, lu0), pr4t6[H[101]][H[424]] = function () {
    this['$nativeDisplayObject'] = new egret_native[H[414]](0x1);
  }, pr4t6[H[101]]['$onAddToStage'] = function (p40lxu, rt9p6) {
    lu0[H[101]]['$onAddToStage'][H[268]](this, p40lxu, rt9p6), rt9p6 = this['$texture'], rt9p6 && rt9p6['$bitmapData'] && jmd$sq[H[66]]['$addDisplayObject'](this, rt9p6['$bitmapData']);
  }, pr4t6[H[101]]['$onRemoveFromStage'] = function () {
    lu0[H[101]]['$onRemoveFromStage'][H[268]](this);var nei3b = this['$texture'];nei3b && jmd$sq[H[66]]['$removeDisplayObject'](this, nei3b['$bitmapData']);
  }, Object[H[107]](pr4t6[H[101]], H[633], { 'get': function () {
      return this['$texture'];
    }, 'set': function ($qdsy) {
      this['$setTexture']($qdsy), $qdsy && this['$renderNode'] && (this['$renderNode'][H[634]] = $qdsy['$rotated']);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), pr4t6[H[101]]['$setTexture'] = function (xpu04l) {
    var ux0elw = this,
        yqg7m = ux0elw['$texture'];if (xpu04l == yqg7m) return !0x1;if (!(ux0elw['$texture'] = xpu04l)) {
      yqg7m && jmd$sq[H[66]]['$removeDisplayObject'](ux0elw, yqg7m['$bitmapData']), ux0elw[H[635]](null, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0), ux0elw['$renderDirty'] = !0x0;var akb_v = ux0elw['$parent'];return akb_v && !akb_v['$cacheDirty'] && (akb_v['$cacheDirty'] = !0x0, akb_v['$cacheDirtyUp']()), akb_v = ux0elw['$maskedObject'], (akb_v && !akb_v['$cacheDirty'] && (akb_v['$cacheDirty'] = !0x0, akb_v['$cacheDirtyUp']()), jmd$sq[H[413]] && this[H[636]](null), !0x0);
    }if (ux0elw['$refreshImageData'](), ux0elw['$stage']) {
      if (yqg7m && yqg7m['$bitmapData']) {
        if (yqg7m['$bitmapData'][H[396]] == (xpu04l['$bitmapData'] ? xpu04l['$bitmapData'][H[396]] : -0x1)) return ux0elw['$renderDirty'] = !0x0, akb_v = ux0elw['$parent'], akb_v && !akb_v['$cacheDirty'] && (akb_v['$cacheDirty'] = !0x0, akb_v['$cacheDirtyUp']()), akb_v = ux0elw['$maskedObject'], (akb_v && !akb_v['$cacheDirty'] && (akb_v['$cacheDirty'] = !0x0, akb_v['$cacheDirtyUp']()), !0x0);jmd$sq[H[66]]['$removeDisplayObject'](ux0elw, yqg7m['$bitmapData']);
      }jmd$sq[H[66]]['$addDisplayObject'](ux0elw, xpu04l['$bitmapData']);
    }return ux0elw['$renderDirty'] = !0x0, xpu04l = ux0elw['$parent'], xpu04l && !xpu04l['$cacheDirty'] && (xpu04l['$cacheDirty'] = !0x0, xpu04l['$cacheDirtyUp']()), ux0elw = ux0elw['$maskedObject'], (ux0elw && !ux0elw['$cacheDirty'] && (ux0elw['$cacheDirty'] = !0x0, ux0elw['$cacheDirtyUp']()), !0x0);
  }, pr4t6[H[101]]['$setBitmapData'] = function (sqjm$) {
    this['$setTexture'](sqjm$);
  }, pr4t6[H[101]][H[636]] = function (tpl40u) {
    this['$nativeDisplayObject'][H[637]](tpl40u);
  }, pr4t6[H[101]]['$refreshImageData'] = function () {
    var pux40l = this['$texture'];pux40l ? (jmd$sq[H[413]] && this[H[636]](pux40l), this[H[635]](pux40l['$bitmapData'], pux40l['$bitmapX'], pux40l['$bitmapY'], pux40l['$bitmapWidth'], pux40l['$bitmapHeight'], pux40l['$offsetX'], pux40l['$offsetY'], pux40l['$getTextureWidth'](), pux40l['$getTextureHeight'](), pux40l['$sourceWidth'], pux40l['$sourceHeight'])) : jmd$sq[H[413]] && this[H[636]](null);
  }, pr4t6[H[101]][H[635]] = function (c1z8h, u0tp4l, wbne, r16t8, ib3we, z9816, tp698r, bai_kv, rt98p6, aen3ib, b_a3) {
    this['$bitmapData'] = c1z8h, this['$bitmapX'] = u0tp4l, this['$bitmapY'] = wbne, this['$bitmapWidth'] = r16t8, this['$bitmapHeight'] = ib3we, this['$offsetX'] = z9816, this['$offsetY'] = tp698r, this['$textureWidth'] = bai_kv, this['$textureHeight'] = rt98p6, this['$sourceWidth'] = aen3ib, this['$sourceHeight'] = b_a3;
  }, Object[H[107]](pr4t6[H[101]], H[69], { 'get': function () {
      return this['$scale9Grid'];
    }, 'set': function (qmyg7) {
      this['$setScale9Grid'](qmyg7);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), pr4t6[H[101]]['$setScale9Grid'] = function (_v5kb) {
    var a5v_ = this;a5v_['$scale9Grid'] = _v5kb, a5v_['$renderDirty'] = !0x0, jmd$sq[H[413]] ? _v5kb ? a5v_['$nativeDisplayObject'][H[638]](_v5kb['x'], _v5kb['y'], _v5kb[H[446]], _v5kb[H[447]]) : a5v_['$nativeDisplayObject'][H[638]](0x0, 0x0, -0x1, -0x1) : ((_v5kb = a5v_['$parent']) && !_v5kb['$cacheDirty'] && (_v5kb['$cacheDirty'] = !0x0, _v5kb['$cacheDirtyUp']()), (a5v_ = a5v_['$maskedObject']) && !a5v_['$cacheDirty'] && (a5v_['$cacheDirty'] = !0x0, a5v_['$cacheDirtyUp']()));
  }, Object[H[107]](pr4t6[H[101]], H[639], { 'get': function () {
      return this['$fillMode'];
    }, 'set': function (vai_kb) {
      this['$setFillMode'](vai_kb);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), pr4t6[H[101]]['$setFillMode'] = function (r8oz9) {
    var eibn = this;return r8oz9 != eibn['$fillMode'] && (eibn['$fillMode'] = r8oz9, jmd$sq[H[413]] ? eibn['$nativeDisplayObject'][H[640]](eibn['$fillMode']) : (eibn['$renderDirty'] = !0x0, (r8oz9 = eibn['$parent']) && !r8oz9['$cacheDirty'] && (r8oz9['$cacheDirty'] = !0x0, r8oz9['$cacheDirtyUp']()), (eibn = eibn['$maskedObject']) && !eibn['$cacheDirty'] && (eibn['$cacheDirty'] = !0x0, eibn['$cacheDirtyUp']())), !0x0);
  }, Object[H[107]](pr4t6[H[101]], H[641], { 'get': function () {
      return this['$smoothing'];
    }, 'set': function (wex3ln) {
      wex3ln != this['$smoothing'] && (this['$smoothing'] = wex3ln, this['$renderNode'][H[641]] = wex3ln, jmd$sq[H[413]] || ((wex3ln = this['$parent']) && !wex3ln['$cacheDirty'] && (wex3ln['$cacheDirty'] = !0x0, wex3ln['$cacheDirtyUp']()), (wex3ln = this['$maskedObject']) && !wex3ln['$cacheDirty'] && (wex3ln['$cacheDirty'] = !0x0, wex3ln['$cacheDirtyUp']())));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), pr4t6[H[101]]['$setWidth'] = function (ib3nae) {
    var bia3kn = this;return !(ib3nae < 0x0 || ib3nae == bia3kn['$explicitBitmapWidth']) && (bia3kn['$explicitBitmapWidth'] = ib3nae, bia3kn['$renderDirty'] = !0x0, jmd$sq[H[413]] ? bia3kn['$nativeDisplayObject'][H[642]](ib3nae) : ((ib3nae = bia3kn['$parent']) && !ib3nae['$cacheDirty'] && (ib3nae['$cacheDirty'] = !0x0, ib3nae['$cacheDirtyUp']()), (bia3kn = bia3kn['$maskedObject']) && !bia3kn['$cacheDirty'] && (bia3kn['$cacheDirty'] = !0x0, bia3kn['$cacheDirtyUp']())), !0x0);
  }, pr4t6[H[101]]['$setHeight'] = function (jk5_) {
    var u0lew = this;return !(jk5_ < 0x0 || jk5_ == u0lew['$explicitBitmapHeight']) && (u0lew['$explicitBitmapHeight'] = jk5_, u0lew['$renderDirty'] = !0x0, jmd$sq[H[413]] ? u0lew['$nativeDisplayObject'][H[643]](jk5_) : ((jk5_ = u0lew['$parent']) && !jk5_['$cacheDirty'] && (jk5_['$cacheDirty'] = !0x0, jk5_['$cacheDirtyUp']()), (u0lew = u0lew['$maskedObject']) && !u0lew['$cacheDirty'] && (u0lew['$cacheDirty'] = !0x0, u0lew['$cacheDirtyUp']())), !0x0);
  }, pr4t6[H[101]]['$getWidth'] = function () {
    return isNaN(this['$explicitBitmapWidth']) ? this['$getContentBounds']()[H[446]] : this['$explicitBitmapWidth'];
  }, pr4t6[H[101]]['$getHeight'] = function () {
    return isNaN(this['$explicitBitmapHeight']) ? this['$getContentBounds']()[H[447]] : this['$explicitBitmapHeight'];
  }, pr4t6[H[101]]['$measureContentBounds'] = function (yqg$m7) {
    var $dsmjq, v$jds5;v$jds5 = this['$bitmapData'] ? ($dsmjq = isNaN(this['$explicitBitmapWidth']) ? this['$textureWidth'] : this['$explicitBitmapWidth'], isNaN(this['$explicitBitmapHeight']) ? this['$textureHeight'] : this['$explicitBitmapHeight']) : ($dsmjq = isNaN(this['$explicitBitmapWidth']) ? 0x0 : this['$explicitBitmapWidth'], isNaN(this['$explicitBitmapHeight']) ? 0x0 : this['$explicitBitmapHeight']), yqg$m7[H[433]](0x0, 0x0, $dsmjq, v$jds5);
  }, pr4t6[H[101]]['$updateRenderNode'] = function () {
    var uxpl40, orz8, _jvd;this['$texture'] && (uxpl40 = isNaN(this['$explicitBitmapWidth']) ? this['$textureWidth'] : this['$explicitBitmapWidth'], orz8 = isNaN(this['$explicitBitmapHeight']) ? this['$textureHeight'] : this['$explicitBitmapHeight'], (_jvd = this[H[69]] || this['$texture'][H[69]]) ? (this['$renderNode'] instanceof jmd$sq[H[246]][H[644]] && (this['$renderNode'] = new jmd$sq[H[246]][H[645]]()), jmd$sq[H[246]][H[645]]['$updateTextureDataWithScale9Grid'](this['$renderNode'], this['$bitmapData'], _jvd, this['$bitmapX'], this['$bitmapY'], this['$bitmapWidth'], this['$bitmapHeight'], this['$offsetX'], this['$offsetY'], this['$textureWidth'], this['$textureHeight'], uxpl40, orz8, this['$sourceWidth'], this['$sourceHeight'], this['$smoothing'])) : (this[H[639]] == jmd$sq[H[646]][H[647]] && this['$renderNode'] instanceof jmd$sq[H[246]][H[644]] && (this['$renderNode'] = new jmd$sq[H[246]][H[645]]()), jmd$sq[H[246]][H[645]]['$updateTextureData'](this['$renderNode'], this['$bitmapData'], this['$bitmapX'], this['$bitmapY'], this['$bitmapWidth'], this['$bitmapHeight'], this['$offsetX'], this['$offsetY'], this['$textureWidth'], this['$textureHeight'], uxpl40, orz8, this['$sourceWidth'], this['$sourceHeight'], this['$fillMode'], this['$smoothing'])));
  }, Object[H[107]](pr4t6[H[101]], H[648], { 'get': function () {
      return this[H[649]];
    }, 'set': function (yd$sqm) {
      this[H[649]] = !!yd$sqm;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), pr4t6[H[101]]['$hitTest'] = function (ba_v5k, pu40t) {
    var mdq$ys = lu0[H[101]]['$hitTest'][H[268]](this, ba_v5k, pu40t);return mdq$ys && this[H[649]] && (this[H[504]](ba_v5k, pu40t, !0x0) || (mdq$ys = null)), mdq$ys;
  }, pr4t6[H[650]] = !0x0, pr4t6);function pr4t6(w0eu) {
    var $smydq = lu0[H[268]](this) || this;return $smydq['$texture'] = null, $smydq['$bitmapData'] = null, $smydq['$bitmapX'] = 0x0, $smydq['$bitmapY'] = 0x0, $smydq['$bitmapWidth'] = 0x0, $smydq['$bitmapHeight'] = 0x0, $smydq['$offsetX'] = 0x0, $smydq['$offsetY'] = 0x0, $smydq['$textureWidth'] = 0x0, $smydq['$textureHeight'] = 0x0, $smydq['$sourceWidth'] = 0x0, $smydq['$sourceHeight'] = 0x0, $smydq['$smoothing'] = pr4t6[H[650]], $smydq['$explicitBitmapWidth'] = NaN, $smydq['$explicitBitmapHeight'] = NaN, $smydq['$scale9Grid'] = null, $smydq['$fillMode'] = H[651], $smydq[H[649]] = !0x1, $smydq['$renderNode'] = new jmd$sq[H[246]][H[644]](), $smydq['$setTexture'](w0eu), w0eu && ($smydq['$renderNode'][H[634]] = w0eu['$rotated']), $smydq;
  }var lu0;jmd$sq[H[652]] = r89t, fdsqym(r89t[H[101]], H[653]);
}(fm$sjd = fm$sjd || {}), function (t64pur) {
  function xeu0wl() {
    this[H[146]] = 0x0, this[H[654]] = [], this[H[655]] = 0x0;
  }var y$qsdm;y$qsdm = t64pur[H[246]] || (t64pur[H[246]] = {}), xeu0wl[H[101]][H[487]] = function () {
    this[H[654]][H[50]] = 0x0, this[H[655]] = 0x0;
  }, xeu0wl[H[101]]['$getRenderCount'] = function () {
    return this[H[655]];
  }, t64pur = xeu0wl, y$qsdm[H[656]] = t64pur, fdsqym(t64pur[H[101]], H[657]);
}(fm$sjd = fm$sjd || {}), function (vja5_k) {
  function _bkai() {
    this[H[146]] = 0x0, this['$commands'] = [], this['$data'] = [], this[H[658]] = 0x0, this[H[659]] = 0x0, this['$lastX'] = 0x0, this['$lastY'] = 0x0;
  }var ajkv;ajkv = vja5_k[H[246]] || (vja5_k[H[246]] = {}), _bkai[H[101]][H[660]] = function (pxu04l, lxwen) {
    this['$commands'][this[H[658]]++] = 0x1;var qs$d = this[H[659]];this['$data'][qs$d++] = pxu04l, this['$data'][qs$d++] = lxwen, this[H[659]] = qs$d;
  }, _bkai[H[101]][H[661]] = function (bk_ai, rpu6t4) {
    this['$commands'][this[H[658]]++] = 0x2;var t6p94r = this[H[659]];this['$data'][t6p94r++] = bk_ai, this['$data'][t6p94r++] = rpu6t4, this[H[659]] = t6p94r;
  }, _bkai[H[101]][H[662]] = function (t6u40p, _sjdv5, ru4p, vb5ka_) {
    this['$commands'][this[H[658]]++] = 0x3;var k3b_ia = this[H[659]];this['$data'][k3b_ia++] = t6u40p, this['$data'][k3b_ia++] = _sjdv5, this['$data'][k3b_ia++] = ru4p, this['$data'][k3b_ia++] = vb5ka_, this[H[659]] = k3b_ia;
  }, _bkai[H[101]][H[663]] = function (ygq$7m, v5$jd, j5dvs, s5dmj, v5sdj, svj_5) {
    this['$commands'][this[H[658]]++] = 0x4;var abk_v5 = this[H[659]];this['$data'][abk_v5++] = ygq$7m, this['$data'][abk_v5++] = v5$jd, this['$data'][abk_v5++] = j5dvs, this['$data'][abk_v5++] = s5dmj, this['$data'][abk_v5++] = v5sdj, this['$data'][abk_v5++] = svj_5, this[H[659]] = abk_v5;
  }, _bkai[H[101]][H[664]] = function (_iba3, gydq$, r698t, $sqmj) {
    r698t = _iba3 + r698t, $sqmj = gydq$ + $sqmj, (this[H[660]](_iba3, gydq$), this[H[661]](r698t, gydq$), this[H[661]](r698t, $sqmj), this[H[661]](_iba3, $sqmj), this[H[661]](_iba3, gydq$));
  }, _bkai[H[101]][H[665]] = function (qdm$g, iebn3a, dmsj5$, lwu0xe, r49t6, en3iba) {
    var wneix = 0.5 * r49t6 | 0x0,
        s$j5dm = en3iba ? 0.5 * en3iba | 0x0 : wneix,
        vsk5,
        _v5b,
        ym$gqd,
        tu4;wneix && s$j5dm ? ((tu4 = 0.5 * lwu0xe) < s$j5dm && (s$j5dm = tu4), (_v5b = 0.5 * dmsj5$) !== (wneix = _v5b < wneix ? _v5b : wneix) || tu4 !== s$j5dm ? (ym$gqd = qdm$g + wneix, r49t6 = (vsk5 = qdm$g + dmsj5$) - wneix, en3iba = iebn3a + s$j5dm, this[H[660]](vsk5, tu4 = (_v5b = iebn3a + lwu0xe) - s$j5dm), this[H[662]](vsk5, _v5b, r49t6, _v5b), this[H[661]](ym$gqd, _v5b), this[H[662]](qdm$g, _v5b, qdm$g, tu4), this[H[661]](qdm$g, en3iba), this[H[662]](qdm$g, iebn3a, ym$gqd, iebn3a), this[H[661]](r49t6, iebn3a), this[H[662]](vsk5, iebn3a, vsk5, en3iba), this[H[661]](vsk5, tu4)) : wneix === s$j5dm ? this[H[666]](qdm$g + wneix, iebn3a + s$j5dm, wneix) : this[H[667]](qdm$g, iebn3a, 0x2 * wneix, 0x2 * s$j5dm)) : this[H[664]](qdm$g, iebn3a, dmsj5$, lwu0xe);
  }, _bkai[H[101]][H[666]] = function (x0lup, mj$5ds, k5abv) {
    this[H[668]](x0lup, mj$5ds, k5abv, k5abv, 0x0, 0x2 * Math['PI']);
  }, _bkai[H[101]][H[667]] = function (t89r1, wel0xu, hzc1, akbv_5) {
    hzc1 *= 0.5, akbv_5 *= 0.5, this[H[668]](t89r1 += hzc1, wel0xu += akbv_5, hzc1, akbv_5, 0x0, 0x2 * Math['PI']);
  }, _bkai[H[101]][H[669]] = function (ux04pl, nwib3e, msjd$5, ab_k5, e3nbi, r98oz1) {
    r98oz1 ? ab_k5 <= e3nbi && (e3nbi -= 0x2 * Math['PI']) : e3nbi <= ab_k5 && (e3nbi += 0x2 * Math['PI']), this[H[668]](ux04pl, nwib3e, msjd$5, msjd$5, ab_k5, e3nbi, r98oz1);
  }, _bkai[H[101]][H[668]] = function (xenwl0, j5$dsv, vd$s, z8o9c, nki3, eni, c8zoh1) {
    var t4r = 0.5 * Math['PI'],
        akvi_ = nki3,
        bakv5 = akvi_;c8zoh1 ? (bakv5 += -t4r - akvi_ % t4r) < eni && (bakv5 = eni) : eni < (bakv5 += t4r - akvi_ % t4r) && (bakv5 = eni);var vds_j = xenwl0 + Math[H[495]](akvi_) * vd$s,
        o1r9z8 = j5$dsv + Math[H[498]](akvi_) * z8o9c;this['$lastX'] == vds_j && this['$lastY'] == o1r9z8 || this[H[660]](vds_j, o1r9z8);var t0p4u = Math[H[495]](akvi_),
        p4xu0 = Math[H[498]](akvi_);for (var _s5vjd = 0x0; _s5vjd < 0x4; _s5vjd++) {
      var ianb3 = 0x4 * Math[H[670]]((bakv5 - akvi_) / 0x4) / 0x3,
          ei3b = vds_j - p4xu0 * ianb3 * vd$s,
          $sdqmj = o1r9z8 + t0p4u * ianb3 * z8o9c;if (t0p4u = Math[H[495]](bakv5), p4xu0 = Math[H[498]](bakv5), this[H[663]](ei3b, $sdqmj, (vds_j = xenwl0 + t0p4u * vd$s) + p4xu0 * ianb3 * vd$s, (o1r9z8 = j5$dsv + p4xu0 * z8o9c) - t0p4u * ianb3 * z8o9c, vds_j, o1r9z8), bakv5 === eni) break;akvi_ = bakv5, c8zoh1 ? (bakv5 = akvi_ - t4r) < eni && (bakv5 = eni) : eni < (bakv5 = akvi_ + t4r) && (bakv5 = eni);
    }
  }, vja5_k = _bkai, ajkv[H[671]] = vja5_k, fdsqym(vja5_k[H[101]], H[672]);
}(fm$sjd = fm$sjd || {}), (fm$sjd = fm$sjd || {})[H[673]] = {}, (fm$sjd || (fm$sjd = {}))[H[630]] = function () {
  var wlu40 = Object[H[357]](null);return wlu40[H[674]] = void 0x0, delete wlu40[H[674]], wlu40;
}, function (r8691) {
  var ebain3 = (av5j = r8691[H[422]], fmy$d(gy$dq, av5j), Object[H[107]](gy$dq[H[101]], H[675], { 'get': function () {
      return this['$color'];
    }, 'set': function (r91t86) {
      this['$color'] != r91t86 && (this['$color'] = r91t86, this['$blue'] = 0xff & r91t86, this['$green'] = (0xff00 & r91t86) >> 0x8, this['$red'] = r91t86 >> 0x10, this['$uniforms'][H[675]]['x'] = this['$red'] / 0xff, this['$uniforms'][H[675]]['y'] = this['$green'] / 0xff, this['$uniforms'][H[675]]['z'] = this['$blue'] / 0xff);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](gy$dq[H[101]], H[459], { 'get': function () {
      return this['$alpha'];
    }, 'set': function (qy7mg) {
      this['$alpha'] != qy7mg && (this['$alpha'] = qy7mg, this['$uniforms'][H[459]] = qy7mg);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](gy$dq[H[101]], H[489], { 'get': function () {
      return this['$blurX'];
    }, 'set': function (i3nbea) {
      this['$blurX'] != i3nbea && (this['$blurX'] = i3nbea, this['$uniforms'][H[489]] = i3nbea, this[H[412]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](gy$dq[H[101]], H[490], { 'get': function () {
      return this['$blurY'];
    }, 'set': function (sd5jv_) {
      this['$blurY'] != sd5jv_ && (this['$blurY'] = sd5jv_, this['$uniforms'][H[490]] = sd5jv_, this[H[412]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](gy$dq[H[101]], H[676], { 'get': function () {
      return this['$strength'];
    }, 'set': function (x3lwn) {
      this['$strength'] != x3lwn && (this['$strength'] = x3lwn, this['$uniforms'][H[676]] = x3lwn);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](gy$dq[H[101]], H[677], { 'get': function () {
      return this['$quality'];
    }, 'set': function (oz2h1c) {
      this['$quality'] != oz2h1c && (this['$quality'] = oz2h1c);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](gy$dq[H[101]], H[678], { 'get': function () {
      return this['$inner'];
    }, 'set': function (s_vk) {
      this['$inner'] != s_vk && (this['$inner'] = s_vk, this['$uniforms'][H[678]] = s_vk ? 0x1 : 0x0);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](gy$dq[H[101]], H[679], { 'get': function () {
      return this['$knockout'];
    }, 'set': function (s$5jmd) {
      this['$knockout'] != s$5jmd && (this['$knockout'] = s$5jmd, this['$uniforms'][H[679]] = s$5jmd ? 0x0 : 0x1);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), gy$dq[H[101]]['$toJson'] = function () {
    return H[680] + this['$color'] + H[681] + this['$red'] + H[682] + this['$green'] + H[683] + this['$blue'] + H[684] + this['$alpha'] + H[685] + this['$blurX'] + H[686] + this[H[490]] + H[687] + this['$strength'] + H[688] + this['$quality'] + H[689] + this['$inner'] + H[690] + this['$knockout'] + '}';
  }, gy$dq[H[101]][H[411]] = function () {
    var zc2ho = this;zc2ho[H[418]] = zc2ho[H[489]], zc2ho[H[419]] = zc2ho[H[489]], zc2ho[H[416]] = zc2ho[H[490]], zc2ho[H[417]] = zc2ho[H[490]];
  }, gy$dq);function gy$dq(upt0l, l0ux, lp0tu4, jsv5d$, z89o1, prt968, gq$yd, a3b_) {
    void 0x0 === upt0l && (upt0l = 0xff0000), void 0x0 === l0ux && (l0ux = 0x1), void 0x0 === lp0tu4 && (lp0tu4 = 0x6), void 0x0 === jsv5d$ && (jsv5d$ = 0x6), void 0x0 === z89o1 && (z89o1 = 0x2), void 0x0 === prt968 && (prt968 = 0x1), void 0x0 === gq$yd && (gq$yd = !0x1), void 0x0 === a3b_ && (a3b_ = !0x1);var a3eb = av5j[H[268]](this) || this,
        ptu6 = a3eb;return ptu6[H[146]] = H[491], ptu6['$color'] = upt0l, ptu6['$blue'] = 0xff & upt0l, ptu6['$green'] = (0xff00 & upt0l) >> 0x8, ptu6['$red'] = upt0l >> 0x10, ptu6['$alpha'] = l0ux, ptu6['$blurX'] = lp0tu4, ptu6['$blurY'] = jsv5d$, ptu6['$strength'] = z89o1, ptu6['$quality'] = prt968, ptu6['$inner'] = gq$yd, ptu6['$knockout'] = a3b_, ptu6['$uniforms'][H[675]] = { 'x': a3eb['$red'] / 0xff, 'y': a3eb['$green'] / 0xff, 'z': a3eb['$blue'] / 0xff, 'w': 0x1 }, ptu6['$uniforms'][H[459]] = l0ux, ptu6['$uniforms'][H[489]] = lp0tu4, ptu6['$uniforms'][H[490]] = jsv5d$, ptu6['$uniforms'][H[676]] = z89o1, ptu6['$uniforms'][H[678]] = gq$yd ? 0x1 : 0x0, ptu6['$uniforms'][H[679]] = a3b_ ? 0x0 : 0x1, ptu6['$uniforms'][H[691]] = 0x0, ptu6['$uniforms'][H[493]] = 0x0, ptu6['$uniforms'][H[692]] = 0x0, ptu6[H[412]](), a3eb;
  }var av5j;r8691[H[693]] = ebain3, fdsqym(ebain3[H[101]], H[694]);
}(fm$sjd = fm$sjd || {}), function (tpu4l0) {
  var r8 = (wl3 = tpu4l0[H[609]], fmy$d(e3bw, wl3), e3bw[H[101]][H[424]] = function () {
    this['$nativeDisplayObject'] = new egret_native[H[414]](0xd);
  }, Object[H[107]](e3bw[H[101]], H[695], { 'get': function () {
      return tpu4l0[H[696]]['$frameRate'];
    }, 'set': function (_j5) {
      tpu4l0[H[696]]['$setFrameRate'](_j5);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](e3bw[H[101]], H[697], { 'get': function () {
      return this['$stageWidth'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](e3bw[H[101]], H[698], { 'get': function () {
      return this['$stageHeight'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), e3bw[H[101]][H[699]] = function () {
    tpu4l0[H[246]]['$invalidateRenderFlag'] = !0x0;
  }, e3bw[H[101]][H[700]] = function (_ka3b, abv5) {
    tpu4l0[H[700]](_ka3b, abv5);
  }, e3bw[H[101]][H[701]] = function (qmgy7$) {
    return tpu4l0[H[701]](qmgy7$);
  }, Object[H[107]](e3bw[H[101]], H[702], { 'get': function () {
      return this['$scaleMode'];
    }, 'set': function (kav_bi) {
      this['$scaleMode'] != kav_bi && (this['$scaleMode'] = kav_bi, this['$screen'][H[703]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](e3bw[H[101]], H[704], { 'get': function () {
      return this['$orientation'];
    }, 'set': function ($dqjm) {
      this['$orientation'] != $dqjm && (this['$orientation'] = $dqjm, this['$screen'][H[703]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](e3bw[H[101]], H[705], { 'get': function () {
      return tpu4l0['$TextureScaleFactor'];
    }, 'set': function (w0xul4) {
      tpu4l0['$TextureScaleFactor'] = w0xul4;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](e3bw[H[101]], H[706], { 'get': function () {
      return this['$maxTouches'];
    }, 'set': function (j_ks5) {
      this['$maxTouches'] != j_ks5 && (this['$maxTouches'] = j_ks5, this['$screen'][H[707]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), e3bw[H[101]][H[708]] = function (x0wl4, czo18h) {
    this['$screen'][H[708]](x0wl4, czo18h);
  }, e3bw);function e3bw() {
    var ae3bi = wl3[H[268]](this) || this;return ae3bi['$stageWidth'] = 0x0, ae3bi['$stageHeight'] = 0x0, ae3bi['$scaleMode'] = tpu4l0[H[709]][H[710]], ae3bi['$orientation'] = tpu4l0[H[711]][H[712]], ae3bi['$maxTouches'] = 0x63, (ae3bi['$stage'] = ae3bi)['$nestLevel'] = 0x1, ae3bi;
  }var wl3;tpu4l0[H[713]] = r8, fdsqym(r8[H[101]], H[714]), tpu4l0['$markCannotUse'](r8, H[459], 0x1), tpu4l0['$markCannotUse'](r8, H[454], !0x0), tpu4l0['$markCannotUse'](r8, 'x', 0x0), tpu4l0['$markCannotUse'](r8, 'y', 0x0), tpu4l0['$markCannotUse'](r8, H[436], 0x1), tpu4l0['$markCannotUse'](r8, H[438], 0x1), tpu4l0['$markCannotUse'](r8, H[440], 0x0), tpu4l0['$markCannotUse'](r8, H[456], !0x1), tpu4l0['$markCannotUse'](r8, H[462], null), tpu4l0['$markCannotUse'](r8, H[471], null), tpu4l0['$markCannotUse'](r8, H[464], null), tpu4l0['$markCannotUse'](r8, H[461], !0x0), tpu4l0['$markCannotUse'](r8, H[428], null);
}(fm$sjd = fm$sjd || {}), function (lut40p) {
  var tulp4 = (g7qm$[H[715]] = H[716], g7qm$[H[717]] = H[597], g7qm$[H[718]] = H[719], g7qm$);function g7qm$() {}lut40p[H[720]] = tulp4, fdsqym(tulp4[H[101]], H[721]);
}(fm$sjd = fm$sjd || {}), function (t8pr9) {
  !function (z8o91r) {
    var akbni3 = [H[716], H[597], H[719]],
        b3ikna = {},
        pxlu0 = akbni3[H[50]];for (var t4lu0 = 0x0; t4lu0 < pxlu0; t4lu0++) b3ikna[akbni3[t4lu0]] = t4lu0;z8o91r[H[466]] = function (xuwl4) {
      return void 0x0 === (xuwl4 = b3ikna[xuwl4]) ? 0x0 : xuwl4;
    }, z8o91r[H[465]] = function (_vsj5k) {
      return void 0x0 === (_vsj5k = akbni3[_vsj5k]) ? H[716] : _vsj5k;
    };
  }(t8pr9[H[246]] || (t8pr9[H[246]] = {}));
}(fm$sjd = fm$sjd || {}), (fm$sjd = fm$sjd || {})[H[722]] = { 'DEFAULT': H[723], 'INCREASE_Y': H[724], 'DECREASE_Y': H[725] }, (fm$sjd = fm$sjd || {})[H[726]] = { 'NONE': H[727], 'ROUND': H[728], 'SQUARE': H[729] }, function (m$7qg) {
  var p4utl = (zcho21[H[730]] = function (xnel0, kj5va, ymgq$d) {
    var tup04l = zcho21[H[731]](xnel0, ymgq$d);return ymgq$d = zcho21[H[732]](xnel0, kj5va), kj5va = xnel0[H[733]](), (xnel0[H[734]](kj5va, ymgq$d), xnel0[H[734]](kj5va, tup04l), xnel0[H[735]](kj5va), xnel0[H[736]](kj5va, xnel0[H[737]]) || m$7qg['$warn'](0x3fc), kj5va);
  }, zcho21[H[731]] = function (d$s5jv, skv5_) {
    return zcho21[H[738]](d$s5jv, skv5_, d$s5jv[H[739]]);
  }, zcho21[H[732]] = function (tr46p9, d_sv5) {
    return zcho21[H[738]](tr46p9, d_sv5, tr46p9[H[740]]);
  }, zcho21[H[738]] = function (ank3b, e0xw, tpul4) {
    return tpul4 = ank3b[H[741]](tpul4), (ank3b[H[742]](tpul4, e0xw), ank3b[H[743]](tpul4), ank3b[H[744]](tpul4, ank3b[H[745]]) ? tpul4 : null);
  }, zcho21[H[746]] = function () {
    if (null == zcho21[H[747]]) try {
      var oc19z8 = document[H[748]](H[749]);zcho21[H[747]] = !(!window[H[750]] || !oc19z8[H[751]](H[752]) && !oc19z8[H[751]](H[753]));
    } catch (ul4w) {
      zcho21[H[747]] = !0x1;
    }return zcho21[H[747]];
  }, zcho21[H[754]] = function (b_3k) {
    var jd$v5s;b_3k && (b_3k[m$7qg[H[755]]] ? console[H[134]](H[756] + m$7qg[H[755]]) : (jd$v5s = b_3k[m$7qg[H[757]]]) ? jd$v5s[H[758]](b_3k) : console[H[31]](H[759] + jd$v5s));
  }, zcho21[H[760]] = function (t6ur, enw3xi) {
    return 0x1 === enw3xi ? (0xff * enw3xi << 0x18) + t6ur : 0x0 === enw3xi ? 0x0 : (0xff * enw3xi << 0x18) + (((t6ur >> 0x10 & 0xff) * enw3xi + 0.5 | 0x0) << 0x10) + (((t6ur >> 0x8 & 0xff) * enw3xi + 0.5 | 0x0) << 0x8) + ((0xff & t6ur) * enw3xi + 0.5 | 0x0);
  }, zcho21);function zcho21() {}m$7qg[H[761]] = p4utl, fdsqym(p4utl[H[101]], H[762]);
}(fm$sjd = fm$sjd || {}), function (up4lx) {
  var jd$s5m = (p8r9 = up4lx[H[80]], fmy$d(jva_5, p8r9), jva_5[H[571]] = H[572], jva_5[H[573]] = H[574], jva_5);function jva_5(jv_ak, yqsm, $ym) {
    return p8r9[H[268]](this, jv_ak, yqsm = void 0x0 === yqsm ? !0x1 : yqsm, $ym = void 0x0 === $ym ? !0x1 : $ym) || this;
  }var p8r9;up4lx[H[763]] = jd$s5m, fdsqym(jd$s5m[H[101]], H[764]);
}(fm$sjd = fm$sjd || {}), function (ab3kin) {
  var e0xnlw = (r916z8 = ab3kin[H[80]], fmy$d(qs$m, r916z8), qs$m[H[765]] = H[766], qs$m[H[767]] = H[768], qs$m);function qs$m() {
    return null !== r916z8 && r916z8[H[200]](this, arguments) || this;
  }var r916z8;ab3kin[H[769]] = e0xnlw, fdsqym(e0xnlw[H[101]], H[770]);
}(fm$sjd = fm$sjd || {}), function (kbai_v) {
  var vd5sj$ = (mdj$q = kbai_v[H[80]], fmy$d(v5_ds, mdj$q), Object[H[107]](v5_ds[H[101]], H[87], { 'get': function () {
      return this[H[771]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), v5_ds[H[772]] = function (pt406, dsjm) {
    var n3lw = kbai_v[H[80]][H[357]](v5_ds, v5_ds[H[773]]);return n3lw[H[771]] = dsjm, pt406 = pt406[H[362]](n3lw), (kbai_v[H[80]][H[363]](n3lw), pt406);
  }, v5_ds[H[773]] = H[774], v5_ds);function v5_ds(sjq$dm, wl0nex, ds$5m) {
    return ds$5m = mdj$q[H[268]](this, sjq$dm, wl0nex = void 0x0 === wl0nex ? !0x1 : wl0nex, ds$5m = void 0x0 === ds$5m ? !0x1 : ds$5m) || this, (ds$5m[H[771]] = 0x0, ds$5m);
  }var mdj$q;kbai_v[H[775]] = vd5sj$, fdsqym(vd5sj$[H[101]], H[776]);
}(fm$sjd = fm$sjd || {}), function ($jdvs5) {
  var u0t4p6 = (c1ho2z = $jdvs5[H[80]], fmy$d(e3bain, c1ho2z), e3bain[H[777]] = function (eia3) {
    var r6t9 = $jdvs5[H[80]][H[357]](e3bain, e3bain[H[83]]);return eia3 = eia3[H[362]](r6t9), ($jdvs5[H[80]][H[363]](r6t9), eia3);
  }, e3bain[H[83]] = H[778], e3bain);function e3bain(c8o1h, orz981, $djvs5) {
    return c1ho2z[H[268]](this, c8o1h, orz981 = void 0x0 === orz981 ? !0x1 : orz981, $djvs5 = void 0x0 === $djvs5 ? !0x1 : $djvs5) || this;
  }var c1ho2z;$jdvs5[H[82]] = u0t4p6, fdsqym(u0t4p6[H[101]], H[779]);
}(fm$sjd = fm$sjd || {}), function (nw3lxe) {
  var nw3xle = (dm$gy = nw3lxe[H[80]], fmy$d(rut4, dm$gy), rut4);function rut4() {
    return null !== dm$gy && dm$gy[H[200]](this, arguments) || this;
  }var dm$gy;nw3lxe[H[780]] = nw3xle, fdsqym(nw3xle[H[101]], H[781]);
}(fm$sjd = fm$sjd || {}), function ($msj5d) {
  var xwi3en = (nebwi = $msj5d[H[80]], fmy$d(r8t169, nebwi), r8t169);function r8t169() {
    return null !== nebwi && nebwi[H[200]](this, arguments) || this;
  }var nebwi;$msj5d[H[782]] = xwi3en, fdsqym(xwi3en[H[101]], H[783]);
}(fm$sjd = fm$sjd || {}), function (ut46) {
  var gqdym$ = (v_ba5k = ut46[H[80]], fmy$d(exl0uw, v_ba5k), exl0uw[H[784]] = function (ln0xew, _vikab, l04wu, b3wnei) {
    return void 0x0 === l04wu && (l04wu = 0x0), void 0x0 === b3wnei && (b3wnei = 0x0), _vikab = ut46[H[80]][H[357]](exl0uw, _vikab), (_vikab[H[785]] = l04wu, _vikab[H[786]] = b3wnei), ln0xew = ln0xew[H[362]](_vikab), (ut46[H[80]][H[363]](_vikab), ln0xew);
  }, exl0uw[H[787]] = H[788], exl0uw[H[789]] = H[790], exl0uw);function exl0uw(v5j_sk, tr96p8, e3bina, pt40, ew3ln) {
    return void 0x0 === pt40 && (pt40 = 0x0), void 0x0 === ew3ln && (ew3ln = 0x0), e3bina = v_ba5k[H[268]](this, v5j_sk, tr96p8 = void 0x0 === tr96p8 ? !0x1 : tr96p8, e3bina = void 0x0 === e3bina ? !0x1 : e3bina) || this, (e3bina[H[785]] = 0x0, e3bina[H[786]] = 0x0, e3bina[H[785]] = pt40, e3bina[H[786]] = ew3ln, e3bina);
  }var v_ba5k;ut46[H[791]] = gqdym$, fdsqym(gqdym$[H[101]], H[792]);
}(fm$sjd = fm$sjd || {}), function (in3abk) {
  var r8oz19 = (ptul4 = in3abk[H[80]], fmy$d(ia3ebn, ptul4), ia3ebn[H[793]] = function (ajvk5_, r9p6) {
    return r9p6 = in3abk[H[80]][H[357]](ia3ebn, r9p6), ajvk5_ = ajvk5_[H[362]](r9p6), (in3abk[H[80]][H[363]](r9p6), ajvk5_);
  }, ia3ebn[H[794]] = H[795], ia3ebn);function ia3ebn(nlex3, jkv_s5, smj5d$) {
    return ptul4[H[268]](this, nlex3, jkv_s5 = void 0x0 === jkv_s5 ? !0x1 : jkv_s5, smj5d$ = void 0x0 === smj5d$ ? !0x1 : smj5d$) || this;
  }var ptul4;in3abk[H[796]] = r8oz19, fdsqym(r8oz19[H[101]], H[797]);
}(fm$sjd = fm$sjd || {}), function (vd$5j) {
  var ine3bw = (oc2 = vd$5j[H[80]], fmy$d(ydmgq$, oc2), ydmgq$[H[798]] = function (o1zc, ian3eb, utr4p6) {
    return ian3eb = vd$5j[H[80]][H[357]](ydmgq$, ian3eb), ian3eb[H[91]] = utr4p6, o1zc = o1zc[H[362]](ian3eb), (vd$5j[H[80]][H[363]](ian3eb), o1zc);
  }, ydmgq$[H[799]] = H[800], ydmgq$);function ydmgq$(wibe3, ch21, _sdj5v, ik_a) {
    return void 0x0 === ik_a && (ik_a = ''), _sdj5v = oc2[H[268]](this, wibe3, ch21 = void 0x0 === ch21 ? !0x1 : ch21, _sdj5v = void 0x0 === _sdj5v ? !0x1 : _sdj5v) || this, (_sdj5v[H[91]] = ik_a, _sdj5v);
  }var oc2;vd$5j[H[801]] = ine3bw, fdsqym(ine3bw[H[101]], H[802]);
}(fm$sjd = fm$sjd || {}), function (enlw0x) {
  var i_kba3 = (vs5_jd = enlw0x[H[80]], fmy$d(r16t98, vs5_jd), r16t98[H[101]][H[803]] = function () {
    enlw0x[H[246]]['$requestRenderingFlag'] = !0x0;
  }, r16t98[H[804]] = function (trp4u6, upt4, d5_vjs, bnaik3) {
    return bnaik3 = enlw0x[H[80]][H[357]](r16t98, upt4, d5_vjs, bnaik3), trp4u6 = trp4u6[H[362]](bnaik3), (enlw0x[H[80]][H[363]](bnaik3), trp4u6);
  }, r16t98[H[805]] = H[806], r16t98[H[807]] = H[808], r16t98);function r16t98(p0xu4l, djm$sq, xe3nl) {
    return vs5_jd[H[268]](this, p0xu4l, djm$sq, xe3nl) || this;
  }var vs5_jd;enlw0x[H[809]] = i_kba3, fdsqym(i_kba3[H[101]], H[810]);
}(fm$sjd = fm$sjd || {}), function (v5jds$) {
  var jd$5s = function () {};v5jds$[H[811]] = jd$5s, fdsqym(jd$5s[H[101]], H[812]), v5jds$[H[813]] = H[813], v5jds$[H[755]] = H[755], v5jds$[H[814]] = H[814], v5jds$[H[757]] = H[757], v5jds$[H[815]] = H[815], (g$mq = v5jds$[H[397]], fmy$d(z98r1, g$mq), Object[H[107]](z98r1[H[101]], H[816], { 'get': function () {
      return this['$source'];
    }, 'set': function (i_kva) {
      this['$source'] = i_kva, v5jds$[H[413]] && egret_native[H[414]][H[817]](this['$nativeBitmapData'], i_kva);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), z98r1[H[357]] = function (h18co, ul0x4, zro98) {
    var oz = '',
        av_5j = H[818];'/' === (oz = H[28] === h18co ? v5jds$[H[819]][H[820]](ul0x4) : ul0x4)[H[821]](0x0) ? av_5j = H[822] : 'R' === oz[H[821]](0x0) ? av_5j = H[823] : 'i' === oz[H[821]](0x0) && (av_5j = H[818]);var _dj5 = new Image();_dj5[H[73]] = H[824] + av_5j + H[825] + oz, _dj5[H[826]] = '*';var oz12h = new z98r1(_dj5);return _dj5[H[65]] = function () {
      _dj5[H[65]] = void 0x0, oz12h[H[816]] = _dj5, oz12h[H[447]] = _dj5[H[447]], oz12h[H[446]] = _dj5[H[446]], zro98 && zro98(oz12h);
    }, oz12h;
  }, z98r1[H[101]]['$dispose'] = function () {
    H[752] == v5jds$[H[288]][H[827]] && this[H[828]] && (v5jds$[H[761]][H[754]](this[H[828]]), this[H[828]] = null), this[H[816]] && this[H[816]][H[63]] && this[H[816]][H[63]](), this[H[816]] && this[H[816]][H[73]] && (this[H[816]][H[73]] = ''), this[H[816]] = null, this[H[829]](), this[H[308]] = '', this[H[313]] = null, v5jds$[H[413]] && egret_native[H[414]][H[830]](this['$nativeBitmapData']), z98r1['$dispose'](this);
  }, z98r1['$addDisplayObject'] = function (jsdv5, co1zh2) {
    var le3xn;!co1zh2 || (le3xn = co1zh2[H[396]]) && (z98r1[H[831]][le3xn] ? (co1zh2 = z98r1[H[831]][le3xn])[H[4]](jsdv5) < 0x0 && co1zh2[H[95]](jsdv5) : z98r1[H[831]][le3xn] = [jsdv5]);
  }, z98r1['$removeDisplayObject'] = function ($qdsym, lxw0n) {
    !lxw0n || (lxw0n = lxw0n[H[396]]) && (!z98r1[H[831]][lxw0n] || 0x0 <= ($qdsym = (lxw0n = z98r1[H[831]][lxw0n])[H[4]]($qdsym)) && lxw0n[H[57]]($qdsym, 0x1));
  }, z98r1['$invalidate'] = function (a3k) {
    if (a3k) {
      a3k = a3k[H[396]];if (a3k && z98r1[H[831]][a3k]) {
        var sjvd5$ = z98r1[H[831]][a3k];for (var xwie3n = 0x0; xwie3n < sjvd5$[H[50]]; xwie3n++) {
          sjvd5$[xwie3n] instanceof v5jds$[H[652]] && sjvd5$[xwie3n]['$refreshImageData']();var plx0 = sjvd5$[xwie3n];plx0['$renderDirty'] = !0x0;var a_kbi = plx0['$parent'];a_kbi && !a_kbi['$cacheDirty'] && (a_kbi['$cacheDirty'] = !0x0, a_kbi['$cacheDirtyUp']()), plx0 = plx0['$maskedObject'], plx0 && !plx0['$cacheDirty'] && (plx0['$cacheDirty'] = !0x0, plx0['$cacheDirtyUp']());
        }
      }
    }
  }, z98r1['$dispose'] = function (tup6) {
    if (tup6) {
      tup6 = tup6[H[396]];if (tup6 && z98r1[H[831]][tup6]) {
        for (var dy$qgm = 0x0, dg$mq = z98r1[H[831]][tup6]; dy$qgm < dg$mq[H[50]]; dy$qgm++) {
          var qmsdj$ = dg$mq[dy$qgm];qmsdj$ instanceof v5jds$[H[652]] && (qmsdj$['$bitmapData'] = null), qmsdj$['$renderDirty'] = !0x0;var wi3nex = qmsdj$['$parent'];wi3nex && !wi3nex['$cacheDirty'] && (wi3nex['$cacheDirty'] = !0x0, wi3nex['$cacheDirtyUp']()), qmsdj$ = qmsdj$['$maskedObject'], qmsdj$ && !qmsdj$['$cacheDirty'] && (qmsdj$['$cacheDirty'] = !0x0, qmsdj$['$cacheDirtyUp']());
        }delete z98r1[H[831]][tup6];
      }
    }
  }, z98r1[H[101]][H[832]] = function (c1o8hz, wie3) {
    return c1o8hz = this[H[833]][c1o8hz], c1o8hz ? c1o8hz[wie3] : null;
  }, z98r1[H[101]][H[834]] = function () {
    return this[H[832]](0x0, 0x0);
  }, z98r1[H[101]][H[835]] = function () {
    return !!this[H[834]]();
  }, z98r1[H[101]][H[829]] = function () {
    this[H[833]][H[50]] = 0x0;
  }, z98r1[H[831]] = v5jds$[H[630]](), jd$5s = z98r1);function z98r1(ygq7) {
    var wul4x0 = g$mq[H[268]](this) || this,
        c98oz1;return wul4x0[H[309]] = H[77], wul4x0['$deleteSource'] = !0x0, wul4x0[H[833]] = [], wul4x0[H[308]] = '', wul4x0[H[313]] = null, v5jds$[H[413]] && ((c98oz1 = new egret_native[H[836]]())['$init'](), wul4x0['$nativeBitmapData'] = c98oz1), wul4x0[H[816]] = ygq7, wul4x0[H[816]] = ygq7, wul4x0[H[816]] && (wul4x0[H[446]] = +ygq7[H[446]], wul4x0[H[447]] = +ygq7[H[447]]), wul4x0;
  }var g$mq;v5jds$[H[66]] = jd$5s, fdsqym(jd$5s[H[101]], H[837]);
}(fm$sjd = fm$sjd || {}), function (qg$y7m) {
  var xlewu0 = new qg$y7m[H[478]](),
      $sjv5d = (xw4 = qg$y7m[H[80]], fmy$d(dsj5$v, xw4), dsj5$v[H[101]]['$initTo'] = function (sqdm$, kni3, w0) {
    this[H[838]] = +w0 || 0x0, this['$stageX'] = +sqdm$ || 0x0, this['$stageY'] = +kni3 || 0x0;
  }, Object[H[107]](dsj5$v[H[101]], H[839], { 'get': function () {
      return this['$stageX'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](dsj5$v[H[101]], H[840], { 'get': function () {
      return this['$stageY'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](dsj5$v[H[101]], H[841], { 'get': function () {
      return this[H[842]] && this[H[843]](), this[H[844]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](dsj5$v[H[101]], H[845], { 'get': function () {
      return this[H[842]] && this[H[843]](), this[H[846]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), dsj5$v[H[101]][H[843]] = function () {
    this[H[842]] = !0x1, this['$target']['$getInvertedConcatenatedMatrix']()[H[479]](this['$stageX'], this['$stageY'], xlewu0), this[H[844]] = xlewu0['x'], this[H[846]] = xlewu0['y'];
  }, dsj5$v[H[101]]['$setTarget'] = function (z21h) {
    return this['$target'] = z21h, this[H[842]] = !!z21h, !0x0;
  }, dsj5$v[H[101]][H[803]] = function () {
    qg$y7m[H[246]]['$requestRenderingFlag'] = !0x0;
  }, dsj5$v[H[847]] = function (q7my$g, _jv5s, dmsqy$, tu640, t96r81, _vkaj5, x4w0ul, t046up) {
    if (void 0x0 === t046up && (t046up = !0x1), !dmsqy$ && !q7my$g[H[405]](_jv5s)) return !0x0;return tu640 = qg$y7m[H[80]][H[357]](dsj5$v, _jv5s, dmsqy$, tu640), (tu640['$initTo'](t96r81, _vkaj5, x4w0ul), tu640[H[848]] = t046up), q7my$g = q7my$g[H[362]](tu640), (qg$y7m[H[80]][H[363]](tu640), q7my$g);
  }, dsj5$v[H[849]] = H[850], dsj5$v[H[851]] = H[852], dsj5$v[H[853]] = H[854], dsj5$v[H[855]] = H[856], dsj5$v[H[857]] = H[858], dsj5$v[H[859]] = H[860], dsj5$v);function dsj5$v(ika_v, mqy$g7, xuw4, ysmq, v5jds_, $yqdm) {
    return xuw4 = xw4[H[268]](this, ika_v, mqy$g7, xuw4) || this, (xuw4[H[842]] = !0x0, xuw4[H[848]] = !0x1, xuw4['$initTo'](ysmq, v5jds_, $yqdm), xuw4);
  }var xw4;qg$y7m[H[861]] = $sjv5d, fdsqym($sjv5d[H[101]], H[862]);
}(fm$sjd = fm$sjd || {}), function (a5j_kv) {
  var k_sv5j = (sm$j5 = a5j_kv[H[422]], fmy$d(a_i3bk, sm$j5), Object[H[107]](a_i3bk[H[101]], H[489], { 'get': function () {
      return this['$blurX'];
    }, 'set': function (e3wni) {
      this['$blurX'] != e3wni && (this['$blurX'] = e3wni, this[H[863]][H[489]] = e3wni, this[H[412]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](a_i3bk[H[101]], H[490], { 'get': function () {
      return this['$blurY'];
    }, 'set': function (ab3ie) {
      this['$blurY'] != ab3ie && (this['$blurY'] = ab3ie, this[H[864]][H[490]] = ab3ie, this[H[412]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), a_i3bk[H[101]]['$toJson'] = function () {
    return H[865] + this['$blurX'] + H[686] + this['$blurY'] + H[866];
  }, a_i3bk[H[101]][H[411]] = function () {
    var vi_ba = this;vi_ba[H[418]] = vi_ba[H[489]], vi_ba[H[419]] = vi_ba[H[489]], vi_ba[H[416]] = vi_ba[H[490]], vi_ba[H[417]] = vi_ba[H[490]];
  }, a_i3bk[H[101]][H[412]] = function () {
    var ib3ank = this;ib3ank[H[411]](), a5j_kv[H[413]] && (egret_native[H[414]][H[415]](ib3ank[H[863]]['$id'], 0x0, 0x0, ib3ank[H[418]], ib3ank[H[419]]), egret_native[H[414]][H[415]](ib3ank[H[864]]['$id'], ib3ank[H[416]], ib3ank[H[417]], 0x0, 0x0), egret_native[H[414]][H[420]](ib3ank));
  }, a_i3bk);function a_i3bk(nb3aki, xp0u4, ds$jqm) {
    void 0x0 === nb3aki && (nb3aki = 0x4), void 0x0 === xp0u4 && (xp0u4 = 0x4), void 0x0 === ds$jqm && (ds$jqm = 0x1);var $ds5jv = sm$j5[H[268]](this) || this,
        my$7gq = $ds5jv;return my$7gq[H[146]] = H[488], my$7gq['$blurX'] = nb3aki, my$7gq['$blurY'] = xp0u4, my$7gq['$quality'] = ds$jqm, my$7gq[H[863]] = new k_3bia(nb3aki), my$7gq[H[864]] = new czh81o(xp0u4), my$7gq[H[412]](), $ds5jv;
  }var sm$j5;a5j_kv[H[867]] = k_sv5j, fdsqym(k_sv5j[H[101]], H[868]);var k_3bia = (in3we = a5j_kv[H[422]], fmy$d(px4lu, in3we), Object[H[107]](px4lu[H[101]], H[489], { 'get': function () {
      return this['$uniforms'][H[488]]['x'];
    }, 'set': function (czoh81) {
      this['$uniforms'][H[488]]['x'] = czoh81;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), px4lu);function px4lu(wnexl) {
    void 0x0 === wnexl && (wnexl = 0x4);var exw0ln = in3we[H[268]](this) || this;return a5j_kv[H[413]] ? exw0ln[H[146]] = H[488] : exw0ln[H[146]] = H[489], exw0ln['$uniforms'][H[488]] = { 'x': wnexl, 'y': 0x0 }, exw0ln[H[412]](), exw0ln;
  }var in3we;fdsqym(k_3bia[H[101]], H[869], [H[870]]);var czh81o = ($j5d = a5j_kv[H[422]], fmy$d(tr1689, $j5d), Object[H[107]](tr1689[H[101]], H[490], { 'get': function () {
      return this['$uniforms'][H[488]]['y'];
    }, 'set': function (ro8z9) {
      this['$uniforms'][H[488]]['y'] = ro8z9;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), tr1689);function tr1689(p064tu) {
    void 0x0 === p064tu && (p064tu = 0x4);var r4ut6p = $j5d[H[268]](this) || this;return a5j_kv[H[413]] ? r4ut6p[H[146]] = H[488] : r4ut6p[H[146]] = H[490], r4ut6p['$uniforms'][H[488]] = { 'x': 0x0, 'y': p064tu }, r4ut6p[H[412]](), r4ut6p;
  }var $j5d;fdsqym(czh81o[H[101]], H[871], [H[872]]);
}(fm$sjd = (fm$sjd = fm$sjd || {}) || {}), function (_5jvk) {
  var jks5_v = (qdsmj$ = _5jvk[H[422]], fmy$d(z918or, qdsmj$), Object[H[107]](z918or[H[101]], H[428], { 'get': function () {
      for (var nbia3 = 0x0; nbia3 < 0x14; nbia3++) this[H[873]][nbia3] = this['$matrix'][nbia3];return this[H[873]];
    }, 'set': function (lut0p) {
      this[H[430]](lut0p);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), z918or[H[101]][H[430]] = function (bnei3w) {
    if (bnei3w) {
      for (var ulw40 = 0x0; ulw40 < 0x14; ulw40++) this['$matrix'][ulw40] = bnei3w[ulw40];
    } else {
      for (ulw40 = 0x0; ulw40 < 0x14; ulw40++) this['$matrix'][ulw40] = 0x0 == ulw40 || 0x6 == ulw40 || 0xc == ulw40 || 0x12 == ulw40 ? 0x1 : 0x0;
    }var jks5v_ = this['$matrix'],
        o18czh = this['$uniforms'][H[428]],
        k_ia3 = this['$uniforms'][H[874]];for (var ulw40 = 0x0, enbiw3 = 0x0; ulw40 < jks5v_[H[50]]; ulw40++) 0x4 === ulw40 ? k_ia3['x'] = jks5v_[ulw40] / 0xff : 0x9 === ulw40 ? k_ia3['y'] = jks5v_[ulw40] / 0xff : 0xe === ulw40 ? k_ia3['z'] = jks5v_[ulw40] / 0xff : 0x13 === ulw40 ? k_ia3['w'] = jks5v_[ulw40] / 0xff : (o18czh[enbiw3] = jks5v_[ulw40], enbiw3++);this[H[412]]();
  }, z918or[H[101]]['$toJson'] = function () {
    return H[875] + this['$matrix'][H[390]]() + ']}';
  }, z918or);function z918or(jkv) {
    void 0x0 === jkv && (jkv = null);var iba3_k = qdsmj$[H[268]](this) || this;return iba3_k['$matrix'] = [], iba3_k[H[873]] = [], iba3_k[H[146]] = H[876], iba3_k['$uniforms'][H[428]] = [0x1, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x1], iba3_k['$uniforms'][H[874]] = { 'x': 0x0, 'y': 0x0, 'z': 0x0, 'w': 0x0 }, iba3_k[H[430]](jkv), iba3_k[H[412]](), iba3_k;
  }var qdsmj$;_5jvk[H[877]] = jks5_v, fdsqym(jks5_v[H[101]], H[878]);
}(fm$sjd = fm$sjd || {}), function (ab3ine) {
  var lxw3ne = {},
      z981o = H[879][H[22]](''),
      u4t0p = [],
      v_ak5j,
      vajk_ = 0x0,
      mjsdq = (l0up4 = ab3ine[H[422]], fmy$d(a_5kv, l0up4), Object[H[107]](a_5kv[H[101]], H[500], { 'get': function () {
      return this['$padding'];
    }, 'set': function (co18hz) {
      this['$padding'] != co18hz && (this['$padding'] = co18hz, this[H[412]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](a_5kv[H[101]], H[880], { 'get': function () {
      return this['$uniforms'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), a_5kv[H[101]][H[412]] = function () {
    var u64pr;ab3ine[H[413]] && (u64pr = this, egret_native[H[414]][H[415]](u64pr['$id'], u64pr['$padding'], u64pr['$padding'], u64pr['$padding'], u64pr['$padding']), egret_native[H[414]][H[420]](u64pr));
  }, a_5kv);function a_5kv(zo9r8, naki3b, i3kbna) {
    void 0x0 === i3kbna && (i3kbna = {});var $j5dm = l0up4[H[268]](this) || this;return $j5dm['$padding'] = 0x0, naki3b = ($j5dm['$vertexSrc'] = zo9r8) + ($j5dm['$fragmentSrc'] = naki3b), (lxw3ne[naki3b] || (lxw3ne[naki3b] = function () {
      for (var v_kbia = 0x0; v_kbia < 0x24; v_kbia++) 0x8 === v_kbia || 0xd === v_kbia || 0x12 === v_kbia || 0x17 === v_kbia ? u4t0p[v_kbia] = '-' : 0xe === v_kbia ? u4t0p[v_kbia] = '4' : (vajk_ <= 0x2 && (vajk_ = 0x2000000 + 0x1000000 * Math[H[881]]() | 0x0), v_ak5j = 0xf & vajk_, vajk_ >>= 0x4, u4t0p[v_kbia] = z981o[0x13 === v_kbia ? 0x3 & v_ak5j | 0x8 : v_ak5j]);return u4t0p[H[54]]('');
    }()), $j5dm['$shaderKey'] = lxw3ne[naki3b], $j5dm['$uniforms'] = i3kbna, $j5dm[H[146]] = H[499], $j5dm);
  }var l0up4;ab3ine[H[882]] = mjsdq, fdsqym(mjsdq[H[101]], H[883]);
}(fm$sjd = fm$sjd || {}), function (z1hoc2) {
  var k_sjv = (knb3i = z1hoc2[H[693]], fmy$d($sjmd, knb3i), Object[H[107]]($sjmd[H[101]], H[492], { 'get': function () {
      return this['$distance'];
    }, 'set': function (sdy$q) {
      this['$distance'] != sdy$q && (this['$distance'] = sdy$q, this['$uniforms'][H[691]] = sdy$q, this[H[412]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]]($sjmd[H[101]], H[493], { 'get': function () {
      return this['$angle'];
    }, 'set': function (h18zco) {
      this['$angle'] != h18zco && (this['$angle'] = h18zco, this['$uniforms'][H[493]] = h18zco / 0xb4 * Math['PI'], this[H[412]]());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]]($sjmd[H[101]], H[692], { 'get': function () {
      return this['$hideObject'];
    }, 'set': function (nw3ei) {
      this['$hideObject'] != nw3ei && (this['$hideObject'] = nw3ei, this['$uniforms'][H[692]] = nw3ei ? 0x1 : 0x0);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), $sjmd[H[101]]['$toJson'] = function () {
    return H[884] + this['$distance'] + H[885] + this['$angle'] + H[886] + this['$color'] + H[681] + this['$red'] + H[682] + this['$green'] + H[683] + this['$blue'] + H[684] + this['$alpha'] + H[685] + this['$blurX'] + H[686] + this[H[490]] + H[687] + this['$strength'] + H[688] + this['$quality'] + H[689] + this['$inner'] + H[690] + this['$knockout'] + H[887] + this['$hideObject'] + '}';
  }, $sjmd[H[101]][H[411]] = function () {
    var w0l = this;w0l[H[418]] = w0l[H[489]], w0l[H[419]] = w0l[H[489]], w0l[H[416]] = w0l[H[490]], w0l[H[417]] = w0l[H[490]];var svdj5$ = w0l[H[492]] || 0x0,
        rpt89 = w0l[H[493]] || 0x0,
        tp6r49 = 0x0,
        s5$dm = 0x0;0x0 != svdj5$ && (tp6r49 = 0x0 < (tp6r49 = svdj5$ * z1hoc2[H[494]][H[495]](rpt89)) ? Math[H[496]](tp6r49) : Math[H[497]](tp6r49), s5$dm = 0x0 < (s5$dm = svdj5$ * z1hoc2[H[494]][H[498]](rpt89)) ? Math[H[496]](s5$dm) : Math[H[497]](s5$dm), w0l[H[418]] += tp6r49, w0l[H[419]] += tp6r49, w0l[H[416]] += s5$dm, w0l[H[417]] += s5$dm);
  }, $sjmd);function $sjmd(ocz19, ptl4, lxe0nw, bina3, leux, tp86r9, vib_k, wnlxe0, bika_, vk5_ja, h1z8o) {
    return void 0x0 === ocz19 && (ocz19 = 0x4), void 0x0 === ptl4 && (ptl4 = 0x2d), void 0x0 === h1z8o && (h1z8o = !0x1), bika_ = knb3i[H[268]](this, lxe0nw = void 0x0 === lxe0nw ? 0x0 : lxe0nw, bina3 = void 0x0 === bina3 ? 0x1 : bina3, leux = void 0x0 === leux ? 0x4 : leux, tp86r9 = void 0x0 === tp86r9 ? 0x4 : tp86r9, vib_k = void 0x0 === vib_k ? 0x1 : vib_k, wnlxe0 = void 0x0 === wnlxe0 ? 0x1 : wnlxe0, bika_ = void 0x0 === bika_ ? !0x1 : bika_, vk5_ja = void 0x0 === vk5_ja ? !0x1 : vk5_ja) || this, vk5_ja = bika_, (vk5_ja['$distance'] = ocz19, vk5_ja['$angle'] = ptl4, vk5_ja['$hideObject'] = h1z8o, vk5_ja['$uniforms'][H[691]] = ocz19, vk5_ja['$uniforms'][H[493]] = ptl4 / 0xb4 * Math['PI'], vk5_ja['$uniforms'][H[692]] = h1z8o ? 0x1 : 0x0, vk5_ja[H[412]](), bika_);
  }var knb3i;z1hoc2[H[888]] = k_sjv, fdsqym(k_sjv[H[101]], H[889]);
}(fm$sjd = fm$sjd || {}), function (lnx3ew) {
  var z8ch = (l0wne[H[890]] = H[891], l0wne[H[892]] = H[893], l0wne);function l0wne() {}lnx3ew[H[894]] = z8ch, fdsqym(z8ch[H[101]], H[895]);
}(fm$sjd = fm$sjd || {}), function (_sjk5) {
  function ysmqd(c21ho) {
    return (c21ho %= 0x2 * Math['PI']) < 0x0 && (c21ho += 0x2 * Math['PI']), c21ho;
  }function r9z861(nib3ka, eb3ina) {
    var s$d5v = [];for (var dm$5j = 0x0; dm$5j < eb3ina; dm$5j++) {
      var av_b = function (n3ika, l40xw) {
        var ix3ewn = 0x0,
            mq$ygd = 0x0,
            _aib3 = 0x0,
            ei3wnb = n3ika[H[50]];{
          var $djv5, _bk3ai, sj$m5, e3iabn, qjmsd$, vk_b5a;ei3wnb / 0x2 == 0x3 ? ($djv5 = n3ika[ix3ewn++], _bk3ai = n3ika[ix3ewn++], sj$m5 = n3ika[ix3ewn++], e3iabn = n3ika[ix3ewn++], qjmsd$ = n3ika[ix3ewn++], vk_b5a = n3ika[ix3ewn++], mq$ygd = lxw04($djv5, sj$m5, qjmsd$, l40xw), _aib3 = lxw04(_bk3ai, e3iabn, vk_b5a, l40xw)) : ei3wnb / 0x2 == 0x4 && ($djv5 = n3ika[ix3ewn++], _bk3ai = n3ika[ix3ewn++], sj$m5 = n3ika[ix3ewn++], e3iabn = n3ika[ix3ewn++], qjmsd$ = n3ika[ix3ewn++], vk_b5a = n3ika[ix3ewn++], ei3wnb = n3ika[ix3ewn++], ix3ewn = n3ika[ix3ewn++], mq$ygd = dj$sm5($djv5, sj$m5, qjmsd$, ei3wnb, l40xw), _aib3 = dj$sm5(_bk3ai, e3iabn, vk_b5a, ix3ewn, l40xw));
        }return _sjk5[H[478]][H[357]](mq$ygd, _aib3);
      }(nib3ka, dm$5j / eb3ina);av_b && s$d5v[H[95]](av_b);
    }return s$d5v;
  }function lxw04(gqy$m, ms5d, j5_sk, tur64) {
    return Math[H[896]](0x1 - tur64, 0x2) * gqy$m + 0x2 * tur64 * (0x1 - tur64) * ms5d + Math[H[896]](tur64, 0x2) * j5_sk;
  }function dj$sm5(r6t49p, b3ei, u046p, dms5, wle0n) {
    return Math[H[896]](0x1 - wle0n, 0x3) * r6t49p + 0x3 * wle0n * Math[H[896]](0x1 - wle0n, 0x2) * b3ei + 0x3 * (0x1 - wle0n) * Math[H[896]](wle0n, 0x2) * u046p + Math[H[896]](wle0n, 0x3) * dms5;
  }var my$q7g = (d$m5j = _sjk5[H[397]], fmy$d(ydmqg$, d$m5j), ydmqg$[H[101]]['$setTarget'] = function (enb3a) {
    this['$targetDisplay'] && (this['$targetDisplay']['$renderNode'] = null), enb3a['$renderNode'] = this['$renderNode'], this['$targetDisplay'] = enb3a, this['$targetIsSprite'] = enb3a instanceof _sjk5[H[426]];
  }, ydmqg$[H[101]][H[897]] = function (_5jsd) {
    switch (_5jsd) {case 0x1:
        this[H[898]] = 0x0, this[H[899]] = 0x1;break;case 0x3:
        this[H[898]] = 0x1, this[H[899]] = 0x2;break;default:
        var tr64u = 0x0 | Math[H[496]](0.5 * _5jsd);this[H[898]] = tr64u, this[H[899]] = tr64u;}
  }, ydmqg$[H[101]][H[900]] = function (up4t, ka3nb) {
    up4t = +up4t || 0x0, ka3nb = +(ka3nb = void 0x0 === ka3nb ? 0x1 : ka3nb) || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[901]](up4t, ka3nb), this[H[902]] = this['$renderNode'][H[900]](up4t, ka3nb, this[H[903]]), 0x1 < this['$renderNode'][H[654]][H[50]] && this[H[902]][H[660]](this[H[904]], this[H[905]]);
  }, ydmqg$[H[101]][H[906]] = function (r8196z, rt4up, _k5j, $qgmy, r69z8) {
    void 0x0 === r69z8 && (r69z8 = null), _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[907]](r8196z, rt4up, _k5j, $qgmy, r69z8), this[H[902]] = this['$renderNode'][H[906]](r8196z, rt4up, _k5j, $qgmy, r69z8, this[H[903]]), 0x1 < this['$renderNode'][H[654]][H[50]] && this[H[902]][H[660]](this[H[904]], this[H[905]]);
  }, ydmqg$[H[101]][H[908]] = function () {
    _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[909]](), this[H[902]] = null;
  }, ydmqg$[H[101]][H[910]] = function (g$y7m, r19t6, d_s5jv, turp4, l0uxw, eibn3a, dm5$, myds$, pt69r) {
    void 0x0 === turp4 && (turp4 = !0x1), void 0x0 === l0uxw && (l0uxw = H[716]), void 0x0 === eibn3a && (eibn3a = null), void 0x0 === dm5$ && (dm5$ = null), g$y7m = +(g$y7m = void 0x0 === g$y7m ? NaN : g$y7m) || 0x0, r19t6 = +(r19t6 = void 0x0 === r19t6 ? 0x0 : r19t6) || 0x0, d_s5jv = +(d_s5jv = void 0x0 === d_s5jv ? 0x1 : d_s5jv) || 0x0, myds$ = +(myds$ = void 0x0 === myds$ ? 0x3 : myds$) || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[911]](g$y7m, r19t6, d_s5jv, turp4, l0uxw, eibn3a, dm5$, myds$), g$y7m <= 0x0 ? (this[H[903]] = null, this[H[897]](0x0)) : (this[H[897]](g$y7m), this[H[903]] = this['$renderNode'][H[910]](g$y7m, r19t6, d_s5jv, eibn3a, dm5$, myds$, pt69r), 0x1 < this['$renderNode'][H[654]][H[50]] && this[H[903]][H[660]](this[H[904]], this[H[905]]));
  }, ydmqg$[H[101]][H[664]] = function (r9z8o, d$sm, u6prt4, inwe3x) {
    r9z8o = +r9z8o || 0x0, d$sm = +d$sm || 0x0, u6prt4 = +u6prt4 || 0x0, inwe3x = +inwe3x || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[912]](r9z8o, d$sm, u6prt4, inwe3x);var b_kav = this[H[902]],
        e3lxw = this[H[903]];b_kav && b_kav[H[664]](r9z8o, d$sm, u6prt4, inwe3x), e3lxw && e3lxw[H[664]](r9z8o, d$sm, u6prt4, inwe3x), this[H[913]](r9z8o + u6prt4, d$sm + inwe3x), this[H[914]](r9z8o, d$sm), this[H[915]]();
  }, ydmqg$[H[101]][H[665]] = function (d5j$sm, u4t, wulxe0, s5_jv, xp4u0, tu0l) {
    d5j$sm = +d5j$sm || 0x0, u4t = +u4t || 0x0, wulxe0 = +wulxe0 || 0x0, s5_jv = +s5_jv || 0x0, xp4u0 = +xp4u0 || 0x0, tu0l = +tu0l || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[916]](d5j$sm, u4t, wulxe0, s5_jv, xp4u0, tu0l);var _5vaj = this[H[902]],
        sjdmq = this[H[903]];_5vaj && _5vaj[H[665]](d5j$sm, u4t, wulxe0, s5_jv, xp4u0, tu0l), sjdmq && sjdmq[H[665]](d5j$sm, u4t, wulxe0, s5_jv, xp4u0, tu0l), wulxe0 = d5j$sm + wulxe0, s5_jv = u4t + s5_jv, xp4u0 = s5_jv - (tu0l ? 0.5 * tu0l | 0x0 : 0.5 * xp4u0 | 0x0), (this[H[913]](d5j$sm, u4t), this[H[913]](wulxe0, s5_jv), this[H[914]](wulxe0, xp4u0), this[H[915]]());
  }, ydmqg$[H[101]][H[666]] = function (ki3_ab, _kjs5, x3newl) {
    ki3_ab = +ki3_ab || 0x0, _kjs5 = +_kjs5 || 0x0, x3newl = +x3newl || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[917]](ki3_ab, _kjs5, x3newl);var o8h = this[H[902]],
        _5kbav = this[H[903]];o8h && o8h[H[666]](ki3_ab, _kjs5, x3newl), _5kbav && _5kbav[H[666]](ki3_ab, _kjs5, x3newl), this[H[913]](ki3_ab - x3newl - 0x1, _kjs5 - x3newl - 0x1), this[H[913]](ki3_ab + x3newl + 0x2, _kjs5 + x3newl + 0x2), this[H[914]](ki3_ab + x3newl, _kjs5), this[H[915]]();
  }, ydmqg$[H[101]][H[667]] = function (nl0e, exinw3, oz1h, jkv_a5) {
    nl0e = +nl0e || 0x0, exinw3 = +exinw3 || 0x0, oz1h = +oz1h || 0x0, jkv_a5 = +jkv_a5 || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[918]](nl0e, exinw3, oz1h, jkv_a5);var z1hc2o = this[H[902]],
        nweix = this[H[903]];z1hc2o && z1hc2o[H[667]](nl0e, exinw3, oz1h, jkv_a5), nweix && nweix[H[667]](nl0e, exinw3, oz1h, jkv_a5), this[H[913]](nl0e - 0x1, exinw3 - 0x1), this[H[913]](nl0e + oz1h + 0x2, exinw3 + jkv_a5 + 0x2), this[H[914]](nl0e + oz1h, exinw3 + 0.5 * jkv_a5), this[H[915]]();
  }, ydmqg$[H[101]][H[660]] = function (z1o8, sq$dj) {
    z1o8 = +z1o8 || 0x0, sq$dj = +sq$dj || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[919]](z1o8, sq$dj);var r869pt = this[H[902]],
        rtp694 = this[H[903]];r869pt && r869pt[H[660]](z1o8, sq$dj), rtp694 && rtp694[H[660]](z1o8, sq$dj), this[H[920]] = !0x1, this[H[904]] = z1o8, this[H[905]] = sq$dj, this[H[915]]();
  }, ydmqg$[H[101]][H[661]] = function (ienx3, mjq$ds) {
    ienx3 = +ienx3 || 0x0, mjq$ds = +mjq$ds || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[921]](ienx3, mjq$ds);var av_5 = this[H[902]],
        t86pr = this[H[903]];av_5 && av_5[H[661]](ienx3, mjq$ds), t86pr && t86pr[H[661]](ienx3, mjq$ds), this[H[914]](ienx3, mjq$ds), this[H[915]]();
  }, ydmqg$[H[101]][H[662]] = function (lx0wue, exw3in, lx4u0p, yqd$g) {
    lx0wue = +lx0wue || 0x0, exw3in = +exw3in || 0x0, lx4u0p = +lx4u0p || 0x0, yqd$g = +yqd$g || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[922]](lx0wue, exw3in, lx4u0p, yqd$g);var $jsqmd = this[H[902]],
        nbe3ia = this[H[903]];$jsqmd && $jsqmd[H[662]](lx0wue, exw3in, lx4u0p, yqd$g), nbe3ia && nbe3ia[H[662]](lx0wue, exw3in, lx4u0p, yqd$g);var dm$qys = r9z861([this[H[904]] || 0x0, this[H[905]] || 0x0, lx0wue, exw3in, lx4u0p, yqd$g], 0x32);for (var p0tu46 = 0x0; p0tu46 < dm$qys[H[50]]; p0tu46++) {
      var $sm5jd = dm$qys[p0tu46];this[H[913]]($sm5jd['x'], $sm5jd['y']), _sjk5[H[478]][H[363]]($sm5jd);
    }this[H[913]](lx4u0p, yqd$g), this[H[914]](lx4u0p, yqd$g), this[H[915]]();
  }, ydmqg$[H[101]][H[663]] = function (iex3nw, aiben3, w4lx, pu4xl, _kj5va, lew) {
    iex3nw = +iex3nw || 0x0, aiben3 = +aiben3 || 0x0, w4lx = +w4lx || 0x0, pu4xl = +pu4xl || 0x0, _kj5va = +_kj5va || 0x0, lew = +lew || 0x0, _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[923]](iex3nw, aiben3, w4lx, pu4xl, _kj5va, lew);var _a5b = this[H[902]],
        t4pu0 = this[H[903]];_a5b && _a5b[H[663]](iex3nw, aiben3, w4lx, pu4xl, _kj5va, lew), t4pu0 && t4pu0[H[663]](iex3nw, aiben3, w4lx, pu4xl, _kj5va, lew);var ak_b = r9z861([this[H[904]] || 0x0, this[H[905]] || 0x0, iex3nw, aiben3, w4lx, pu4xl, _kj5va, lew], 0x32);for (var b3_ia = 0x0; b3_ia < ak_b[H[50]]; b3_ia++) {
      var t8rp96 = ak_b[b3_ia];this[H[913]](t8rp96['x'], t8rp96['y']), _sjk5[H[478]][H[363]](t8rp96);
    }this[H[913]](_kj5va, lew), this[H[914]](_kj5va, lew), this[H[915]]();
  }, ydmqg$[H[101]][H[669]] = function (prt896, k_sj5v, $ygdm, m$g7yq, bnai, xwnel) {
    var czho12, $sm5d;$ygdm < 0x0 || m$g7yq === bnai || (prt896 = +prt896 || 0x0, k_sj5v = +k_sj5v || 0x0, $ygdm = +$ygdm || 0x0, bnai = +bnai || 0x0, xwnel = !!xwnel, m$g7yq = ysmqd(m$g7yq = +m$g7yq || 0x0), bnai = ysmqd(bnai), _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[924]](prt896, k_sj5v, $ygdm, m$g7yq, bnai, xwnel), czho12 = this[H[902]], $sm5d = this[H[903]], czho12 && (czho12['$lastX'] = this[H[904]], czho12['$lastY'] = this[H[905]], czho12[H[669]](prt896, k_sj5v, $ygdm, m$g7yq, bnai, xwnel)), $sm5d && ($sm5d['$lastX'] = this[H[904]], $sm5d['$lastY'] = this[H[905]], $sm5d[H[669]](prt896, k_sj5v, $ygdm, m$g7yq, bnai, xwnel)), xwnel ? this[H[925]](prt896, k_sj5v, $ygdm, bnai, m$g7yq) : this[H[925]](prt896, k_sj5v, $ygdm, m$g7yq, bnai), prt896 = prt896 + Math[H[495]](bnai) * $ygdm, $ygdm = k_sj5v + Math[H[498]](bnai) * $ygdm, this[H[914]](prt896, $ygdm), this[H[915]]());
  }, ydmqg$[H[101]][H[915]] = function () {
    var p8t9r6, t6981;this['$renderNode'][H[926]] = !0x0, _sjk5[H[413]] || ((t6981 = this['$targetDisplay'])['$cacheDirty'] = !0x0, (p8t9r6 = t6981['$parent']) && !p8t9r6['$cacheDirty'] && (p8t9r6['$cacheDirty'] = !0x0, p8t9r6['$cacheDirtyUp']()), (t6981 = t6981['$maskedObject']) && !t6981['$cacheDirty'] && (t6981['$cacheDirty'] = !0x0, t6981['$cacheDirtyUp']()));
  }, ydmqg$[H[101]][H[925]] = function (x4ul0w, q$s, bvkia_, uw40l, h1oz8c) {
    var wlu0x = Math['PI'];if (Math[H[927]](uw40l - h1oz8c) < 0.01) return this[H[913]](x4ul0w - bvkia_, q$s - bvkia_), void this[H[913]](x4ul0w + bvkia_, q$s + bvkia_);h1oz8c < uw40l && (h1oz8c += 0x2 * wlu0x);var t94rp = Math[H[495]](uw40l) * bvkia_,
        wue0x = Math[H[495]](h1oz8c) * bvkia_,
        j5md = Math[H[501]](t94rp, wue0x),
        t9p6r = Math[H[187]](t94rp, wue0x);t94rp = Math[H[498]](uw40l) * bvkia_, wue0x = Math[H[498]](h1oz8c) * bvkia_;var tu0p6 = Math[H[501]](t94rp, wue0x),
        t4lpu = Math[H[187]](t94rp, wue0x),
        lwux04 = h1oz8c / (0.5 * wlu0x);for (var $j5sd = Math[H[496]](uw40l / (0.5 * wlu0x)); $j5sd <= lwux04; $j5sd++) switch ($j5sd % 0x4) {case 0x0:
        t9p6r = bvkia_;break;case 0x1:
        t4lpu = bvkia_;break;case 0x2:
        j5md = -bvkia_;break;case 0x3:
        tu0p6 = -bvkia_;}j5md = Math[H[497]](j5md), tu0p6 = Math[H[497]](tu0p6), t9p6r = Math[H[496]](t9p6r), t4lpu = Math[H[496]](t4lpu), this[H[913]](j5md + x4ul0w, tu0p6 + q$s), this[H[913]](t9p6r + x4ul0w, t4lpu + q$s);
  }, ydmqg$[H[101]][H[928]] = function () {
    _sjk5[H[413]] && this['$targetDisplay']['$nativeDisplayObject'][H[929]](), this['$renderNode'][H[928]](), this[H[914]](0x0, 0x0), this[H[482]] = 0x1 / 0x0, this[H[483]] = 0x1 / 0x0, this[H[484]] = -0x1 / 0x0, this[H[485]] = -0x1 / 0x0, this[H[915]]();
  }, ydmqg$[H[101]][H[913]] = function (r681t9, uw4lx) {
    this[H[930]](r681t9), this[H[931]](uw4lx);
  }, ydmqg$[H[101]][H[930]] = function (dmj5s$) {
    this[H[482]] = Math[H[501]](this[H[482]], dmj5s$ - this[H[898]]), this[H[484]] = Math[H[187]](this[H[484]], dmj5s$ + this[H[899]]), this[H[932]]();
  }, ydmqg$[H[101]][H[931]] = function (k_iabv) {
    this[H[483]] = Math[H[501]](this[H[483]], k_iabv - this[H[898]]), this[H[485]] = Math[H[187]](this[H[485]], k_iabv + this[H[899]]), this[H[932]]();
  }, ydmqg$[H[101]][H[932]] = function () {
    var d5$ms = this['$renderNode'];d5$ms['x'] = this[H[482]], d5$ms['y'] = this[H[483]], d5$ms[H[446]] = Math[H[496]](this[H[484]] - this[H[482]]), d5$ms[H[447]] = Math[H[496]](this[H[485]] - this[H[483]]);
  }, ydmqg$[H[101]][H[914]] = function (ivbka, bakv_i) {
    this[H[920]] || (this[H[913]](this[H[904]], this[H[905]]), this[H[920]] = !0x0), this[H[904]] = ivbka, this[H[905]] = bakv_i, this[H[913]](ivbka, bakv_i);
  }, ydmqg$[H[101]]['$measureContentBounds'] = function (lewn) {
    this[H[482]] === 0x1 / 0x0 ? lewn[H[486]]() : lewn[H[433]](this[H[482]], this[H[483]], this[H[484]] - this[H[482]], this[H[485]] - this[H[483]]);
  }, ydmqg$[H[101]]['$hitTest'] = function (kabni, dq$smy) {
    var _b3iak = this['$targetDisplay'],
        iae3nb = _b3iak['$getInvertedConcatenatedMatrix'](),
        c9oz = iae3nb['a'] * kabni + iae3nb['c'] * dq$smy + iae3nb['tx'],
        gy = iae3nb['b'] * kabni + iae3nb['d'] * dq$smy + iae3nb['ty'];kabni = _sjk5[H[246]][H[933]], kabni[H[506]](0x3, 0x3), dq$smy = this['$renderNode'], iae3nb = _sjk5[H[431]][H[357]](), (iae3nb[H[502]](), iae3nb[H[515]](0x1 - c9oz, 0x1 - gy), _sjk5[H[246]][H[934]][H[935]](dq$smy, kabni, iae3nb, !0x0), _sjk5[H[431]][H[363]](iae3nb));try {
      if (0x0 === kabni[H[512]](0x1, 0x1)[0x3]) return null;
    } catch (xn0wle) {
      throw new Error(_sjk5[H[246]]['tr'](0x40f));
    }return _b3iak;
  }, ydmqg$[H[101]]['$onRemoveFromStage'] = function () {
    this['$renderNode'] && this['$renderNode'][H[550]](), _sjk5[H[413]] && egret_native[H[414]][H[936]](this);
  }, ydmqg$);function ydmqg$() {
    var v5sd$ = d$m5j[H[268]](this) || this;return v5sd$[H[904]] = 0x0, v5sd$[H[905]] = 0x0, v5sd$[H[902]] = null, v5sd$[H[903]] = null, v5sd$[H[898]] = 0x0, v5sd$[H[899]] = 0x0, v5sd$[H[482]] = 0x1 / 0x0, v5sd$[H[483]] = 0x1 / 0x0, v5sd$[H[484]] = -0x1 / 0x0, v5sd$[H[485]] = -0x1 / 0x0, v5sd$[H[920]] = !0x0, v5sd$['$renderNode'] = new _sjk5[H[246]][H[937]](), v5sd$;
  }var d$m5j;_sjk5[H[938]] = my$q7g, fdsqym(my$q7g[H[101]], H[939]);
}(fm$sjd = fm$sjd || {}), function (b_3ai) {
  var lput0 = Math['PI'],
      t6u04 = 0x2 * lput0,
      t8pr96 = lput0 / 0xb4,
      jkvs_ = [],
      ne0xlw = (_vsd5 = b_3ai[H[397]], fmy$d(_kavj, _vsd5), _kavj[H[363]] = function (qydmg) {
    qydmg && jkvs_[H[95]](qydmg);
  }, _kavj[H[357]] = function () {
    var hzc81o = jkvs_[H[53]]();return hzc81o = hzc81o || new _kavj();
  }, _kavj[H[101]][H[429]] = function () {
    return new _kavj(this['a'], this['b'], this['c'], this['d'], this['tx'], this['ty']);
  }, _kavj[H[101]][H[97]] = function (qmjd$) {
    var euxw0 = this['a'] * qmjd$['a'],
        lxp40u = 0x0,
        neabi3 = 0x0,
        tr964 = this['d'] * qmjd$['d'],
        up0lt = this['tx'] * qmjd$['a'] + qmjd$['tx'],
        j5svd = this['ty'] * qmjd$['d'] + qmjd$['ty'];0x0 === this['b'] && 0x0 === this['c'] && 0x0 === qmjd$['b'] && 0x0 === qmjd$['c'] || (euxw0 += this['b'] * qmjd$['c'], tr964 += this['c'] * qmjd$['b'], lxp40u += this['a'] * qmjd$['b'] + this['b'] * qmjd$['d'], neabi3 += this['c'] * qmjd$['a'] + this['d'] * qmjd$['c'], up0lt += this['ty'] * qmjd$['c'], j5svd += this['tx'] * qmjd$['b']), this['a'] = euxw0, this['b'] = lxp40u, this['c'] = neabi3, this['d'] = tr964, this['tx'] = up0lt, this['ty'] = j5svd;
  }, _kavj[H[101]][H[432]] = function (qy$dgm) {
    return this['a'] = qy$dgm['a'], this['b'] = qy$dgm['b'], this['c'] = qy$dgm['c'], this['d'] = qy$dgm['d'], this['tx'] = qy$dgm['tx'], this['ty'] = qy$dgm['ty'], this;
  }, _kavj[H[101]][H[502]] = function () {
    this['a'] = this['d'] = 0x1, this['b'] = this['c'] = this['tx'] = this['ty'] = 0x0;
  }, _kavj[H[101]][H[940]] = function () {
    this['$invertInto'](this);
  }, _kavj[H[101]]['$invertInto'] = function (tu06p4) {
    var xw3ne = this['a'],
        o9z81c = this['b'],
        bnkai3 = this['c'],
        r46pu = this['d'],
        ni3eab = this['tx'],
        t0p46 = this['ty'],
        gmyq$,
        wux40;0x0 != o9z81c || 0x0 != bnkai3 ? 0x0 != (gmyq$ = xw3ne * r46pu - o9z81c * bnkai3) ? (wux40 = tu06p4['a'] = r46pu * (gmyq$ = 0x1 / gmyq$), o9z81c = tu06p4['b'] = -o9z81c * gmyq$, bnkai3 = tu06p4['c'] = -bnkai3 * gmyq$, r46pu = tu06p4['d'] = xw3ne * gmyq$, tu06p4['tx'] = -(wux40 * ni3eab + bnkai3 * t0p46), tu06p4['ty'] = -(o9z81c * ni3eab + r46pu * t0p46)) : tu06p4[H[502]]() : (tu06p4['b'] = tu06p4['c'] = 0x0) == xw3ne || 0x0 == r46pu ? tu06p4['a'] = tu06p4['d'] = tu06p4['tx'] = tu06p4['ty'] = 0x0 : (xw3ne = tu06p4['a'] = 0x1 / xw3ne, r46pu = tu06p4['d'] = 0x1 / r46pu, tu06p4['tx'] = -xw3ne * ni3eab, tu06p4['ty'] = -r46pu * t0p46);
  }, _kavj[H[101]][H[941]] = function (s$d5vj) {
    var wbein, bwein, v_b, sd$q, _s5j, t16r98, vikba_;0x0 !== (s$d5vj = +s$d5vj) && (wbein = b_3ai[H[494]][H[495]](s$d5vj /= t8pr96), bwein = b_3ai[H[494]][H[498]](s$d5vj), v_b = this['a'], sd$q = this['b'], _s5j = this['c'], t16r98 = this['d'], vikba_ = this['tx'], s$d5vj = this['ty'], this['a'] = v_b * wbein - sd$q * bwein, this['b'] = v_b * bwein + sd$q * wbein, this['c'] = _s5j * wbein - t16r98 * bwein, this['d'] = _s5j * bwein + t16r98 * wbein, this['tx'] = vikba_ * wbein - s$d5vj * bwein, this['ty'] = vikba_ * bwein + s$d5vj * wbein);
  }, _kavj[H[101]][H[651]] = function (exwl0u, aei3n) {
    0x1 !== exwl0u && (this['a'] *= exwl0u, this['c'] *= exwl0u, this['tx'] *= exwl0u), 0x1 !== aei3n && (this['b'] *= aei3n, this['d'] *= aei3n, this['ty'] *= aei3n);
  }, _kavj[H[101]][H[433]] = function (y$qsmd, smqdj$, r6t8, dmgq$, l40uxp, gy7qm) {
    return this['a'] = y$qsmd, this['b'] = smqdj$, this['c'] = r6t8, this['d'] = dmgq$, this['tx'] = l40uxp, this['ty'] = gy7qm, this;
  }, _kavj[H[101]][H[479]] = function (xnl0ew, v_sjd, iknba) {
    var ienb3 = this['a'] * xnl0ew + this['c'] * v_sjd + this['tx'];return v_sjd = this['b'] * xnl0ew + this['d'] * v_sjd + this['ty'], iknba ? (iknba[H[433]](ienb3, v_sjd), iknba) : new b_3ai[H[478]](ienb3, v_sjd);
  }, _kavj[H[101]][H[515]] = function (ne3lx, ebi3nw) {
    this['tx'] += ne3lx, this['ty'] += ebi3nw;
  }, _kavj[H[101]][H[596]] = function (msq) {
    return this['a'] == msq['a'] && this['b'] == msq['b'] && this['c'] == msq['c'] && this['d'] == msq['d'] && this['tx'] == msq['tx'] && this['ty'] == msq['ty'];
  }, _kavj[H[101]][H[942]] = function (v5_dj, le0xwu, s_vd, ym$g, _ibak3, kjv) {
    var w3iexn = this['tx'],
        qsymd,
        sdj$5v;return 0x1 == v5_dj && 0x0 == le0xwu && 0x0 == s_vd && 0x1 == ym$g || (qsymd = this['a'], sdj$5v = this['c'], this['a'] = qsymd * v5_dj + this['b'] * s_vd, this['b'] = qsymd * le0xwu + this['b'] * ym$g, this['c'] = sdj$5v * v5_dj + this['d'] * s_vd, this['d'] = sdj$5v * le0xwu + this['d'] * ym$g), this['tx'] = w3iexn * v5_dj + this['ty'] * s_vd + _ibak3, this['ty'] = w3iexn * le0xwu + this['ty'] * ym$g + kjv, this;
  }, _kavj[H[101]][H[943]] = function (g$mqd, t6r4p, ai3bkn, ib3aen, vkib, ibne3) {
    var rzo18 = this['a'],
        c2zo1 = this['b'],
        j$s5md = this['c'],
        skv5 = this['d'];return 0x1 == g$mqd && 0x0 == t6r4p && 0x0 == ai3bkn && 0x1 == ib3aen || (this['a'] = g$mqd * rzo18 + t6r4p * j$s5md, this['b'] = g$mqd * c2zo1 + t6r4p * skv5, this['c'] = ai3bkn * rzo18 + ib3aen * j$s5md, this['d'] = ai3bkn * c2zo1 + ib3aen * skv5), this['tx'] = vkib * rzo18 + ibne3 * j$s5md + this['tx'], this['ty'] = vkib * c2zo1 + ibne3 * skv5 + this['ty'], this;
  }, _kavj[H[101]][H[944]] = function (ulpx) {
    var xul4w0 = this['a'] * ulpx['x'] + this['c'] * ulpx['y'];return ulpx = this['b'] * ulpx['x'] + this['d'] * ulpx['y'], new b_3ai[H[478]](xul4w0, ulpx);
  }, _kavj[H[101]][H[390]] = function () {
    return H[945] + this['a'] + H[946] + this['b'] + H[947] + this['c'] + H[948] + this['d'] + H[949] + this['tx'] + H[950] + this['ty'] + ')';
  }, _kavj[H[101]][H[951]] = function (vd5sj, zc98o, tr981, ptu0, jksv5_) {
    void 0x0 === ptu0 && (ptu0 = 0x0), void 0x0 === jksv5_ && (jksv5_ = 0x0);var wi3nx = this,
        uewl0;0x0 !== (tr981 = void 0x0 === tr981 ? 0x0 : tr981) ? (uewl0 = b_3ai[H[494]][H[495]](tr981 /= t8pr96), tr981 = b_3ai[H[494]][H[498]](tr981), wi3nx['a'] = uewl0 * vd5sj, wi3nx['b'] = tr981 * zc98o, wi3nx['c'] = -tr981 * vd5sj, wi3nx['d'] = uewl0 * zc98o) : (wi3nx['a'] = vd5sj, wi3nx['b'] = 0x0, wi3nx['c'] = 0x0, wi3nx['d'] = zc98o), wi3nx['tx'] = ptu0, wi3nx['ty'] = jksv5_;
  }, _kavj[H[101]][H[952]] = function (wbei3, r1o89, rt89, nwex, o12czh) {
    this[H[951]](wbei3 / 1638.4, r1o89 / 1638.4, rt89 = void 0x0 === rt89 ? 0x0 : rt89, (nwex = void 0x0 === nwex ? 0x0 : nwex) + wbei3 / 0x2, (o12czh = void 0x0 === o12czh ? 0x0 : o12czh) + r1o89 / 0x2);
  }, _kavj[H[101]]['$transformBounds'] = function ($ydqg) {
    var qdys = this['a'],
        tu6r = this['b'],
        kv5_ = this['c'],
        xwi3 = this['d'],
        enb = this['tx'],
        e0luxw = this['ty'],
        qm$7g = $ydqg['x'],
        r16t = $ydqg['y'],
        uexwl = qm$7g + $ydqg[H[446]],
        ho8zc1 = r16t + $ydqg[H[447]],
        _ksv = qdys * qm$7g + kv5_ * r16t + enb,
        enlw3 = tu6r * qm$7g + xwi3 * r16t + e0luxw,
        jd5vs = qdys * uexwl + kv5_ * r16t + enb,
        zro81 = tu6r * uexwl + xwi3 * r16t + e0luxw;r16t = qdys * uexwl + kv5_ * ho8zc1 + enb, uexwl = tu6r * uexwl + xwi3 * ho8zc1 + e0luxw, enb = qdys * qm$7g + kv5_ * ho8zc1 + enb, ho8zc1 = tu6r * qm$7g + xwi3 * ho8zc1 + e0luxw, e0luxw = 0x0, (jd5vs < _ksv && (e0luxw = _ksv, _ksv = jd5vs, jd5vs = e0luxw), enb < r16t && (e0luxw = r16t, r16t = enb, enb = e0luxw), $ydqg['x'] = Math[H[497]](_ksv < r16t ? _ksv : r16t), $ydqg[H[446]] = Math[H[496]]((enb < jd5vs ? jd5vs : enb) - $ydqg['x']), zro81 < enlw3 && (e0luxw = enlw3, enlw3 = zro81, zro81 = e0luxw), ho8zc1 < uexwl && (e0luxw = uexwl, uexwl = ho8zc1, ho8zc1 = e0luxw), $ydqg['y'] = Math[H[497]](enlw3 < uexwl ? enlw3 : uexwl), $ydqg[H[447]] = Math[H[496]]((ho8zc1 < zro81 ? zro81 : ho8zc1) - $ydqg['y']));
  }, _kavj[H[101]][H[953]] = function () {
    return this['a'] * this['d'] - this['b'] * this['c'];
  }, _kavj[H[101]]['$getScaleX'] = function () {
    var nw3e = this;if (0x0 == nw3e['b']) return nw3e['a'];return nw3e = Math[H[595]](nw3e['a'] * nw3e['a'] + nw3e['b'] * nw3e['b']), this[H[953]]() < 0x0 ? -nw3e : nw3e;
  }, _kavj[H[101]]['$getScaleY'] = function () {
    var md$5 = this;if (0x0 == md$5['c']) return md$5['d'];return md$5 = Math[H[595]](md$5['c'] * md$5['c'] + md$5['d'] * md$5['d']), this[H[953]]() < 0x0 ? -md$5 : md$5;
  }, _kavj[H[101]]['$getSkewX'] = function () {
    return this['d'] < 0x0 ? Math[H[954]](this['d'], this['c']) + lput0 / 0x2 : Math[H[954]](this['d'], this['c']) - lput0 / 0x2;
  }, _kavj[H[101]]['$getSkewY'] = function () {
    return this['a'] < 0x0 ? Math[H[954]](this['b'], this['a']) - lput0 : Math[H[954]](this['b'], this['a']);
  }, _kavj[H[101]]['$updateScaleAndRotation'] = function (xe0nwl, sd, $jdvs, n3ie) {
    if (!(0x0 != $jdvs && $jdvs != t6u04 || 0x0 != n3ie && n3ie != t6u04)) return this['a'] = xe0nwl, this['b'] = this['c'] = 0x0, void (this['d'] = sd);n3ie /= t8pr96;var zr = b_3ai[H[494]][H[495]]($jdvs /= t8pr96),
        xlp04 = b_3ai[H[494]][H[498]]($jdvs);$jdvs == n3ie ? (this['a'] = zr * xe0nwl, this['b'] = xlp04 * xe0nwl) : (this['a'] = b_3ai[H[494]][H[495]](n3ie) * xe0nwl, this['b'] = b_3ai[H[494]][H[498]](n3ie) * xe0nwl), this['c'] = -xlp04 * sd, this['d'] = zr * sd;
  }, _kavj[H[101]]['$preMultiplyInto'] = function (o2chz1, $qm7g) {
    var rpu64t = o2chz1['a'] * this['a'],
        xewn3i = 0x0,
        sd$qy = 0x0,
        $g7mqy = o2chz1['d'] * this['d'],
        jva_k5 = o2chz1['tx'] * this['a'] + this['tx'],
        e3wbni = o2chz1['ty'] * this['d'] + this['ty'];0x0 === o2chz1['b'] && 0x0 === o2chz1['c'] && 0x0 === this['b'] && 0x0 === this['c'] || (rpu64t += o2chz1['b'] * this['c'], $g7mqy += o2chz1['c'] * this['b'], xewn3i += o2chz1['a'] * this['b'] + o2chz1['b'] * this['d'], sd$qy += o2chz1['c'] * this['a'] + o2chz1['d'] * this['c'], jva_k5 += o2chz1['ty'] * this['c'], e3wbni += o2chz1['tx'] * this['b']), $qm7g['a'] = rpu64t, $qm7g['b'] = xewn3i, $qm7g['c'] = sd$qy, $qm7g['d'] = $g7mqy, $qm7g['tx'] = jva_k5, $qm7g['ty'] = e3wbni;
  }, _kavj);function _kavj(d$gqm, qsy$dm, hco81z, urp4t, ksv5j_, qmyds$) {
    void 0x0 === d$gqm && (d$gqm = 0x1), void 0x0 === qsy$dm && (qsy$dm = 0x0), void 0x0 === hco81z && (hco81z = 0x0), void 0x0 === urp4t && (urp4t = 0x1), void 0x0 === ksv5j_ && (ksv5j_ = 0x0), void 0x0 === qmyds$ && (qmyds$ = 0x0);var _sjvd = _vsd5[H[268]](this) || this;return _sjvd['a'] = d$gqm, _sjvd['b'] = qsy$dm, _sjvd['c'] = hco81z, _sjvd['d'] = urp4t, _sjvd['tx'] = ksv5j_, _sjvd['ty'] = qmyds$, _sjvd;
  }var _vsd5;b_3ai[H[431]] = ne0xlw, fdsqym(ne0xlw[H[101]], H[955]), b_3ai['$TempMatrix'] = new ne0xlw();
}(fm$sjd = fm$sjd || {}), function (kvj5_) {
  var sm$dy = [],
      lx0wne = (qmd$sj = kvj5_[H[397]], fmy$d($ysqdm, qmd$sj), $ysqdm[H[363]] = function (ne3ia) {
    ne3ia && sm$dy[H[95]](ne3ia);
  }, $ysqdm[H[357]] = function () {
    var aine3b = sm$dy[H[53]]();return aine3b = aine3b || new $ysqdm();
  }, Object[H[107]]($ysqdm[H[101]], H[956], { 'get': function () {
      return this['x'] + this[H[446]];
    }, 'set': function (lxuwe) {
      this[H[446]] = lxuwe - this['x'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]]($ysqdm[H[101]], H[957], { 'get': function () {
      return this['y'] + this[H[447]];
    }, 'set': function (i3bne) {
      this[H[447]] = i3bne - this['y'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]]($ysqdm[H[101]], H[958], { 'get': function () {
      return this['x'];
    }, 'set': function (p04lt) {
      this[H[446]] += this['x'] - p04lt, this['x'] = p04lt;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]]($ysqdm[H[101]], H[959], { 'get': function () {
      return this['y'];
    }, 'set': function (jkva) {
      this[H[447]] += this['y'] - jkva, this['y'] = jkva;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]]($ysqdm[H[101]], H[960], { 'get': function () {
      return new kvj5_[H[478]](this[H[958]], this[H[959]]);
    }, 'set': function (dq$ym) {
      this[H[959]] = dq$ym['y'], this[H[958]] = dq$ym['x'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]]($ysqdm[H[101]], H[961], { 'get': function () {
      return new kvj5_[H[478]](this[H[956]], this[H[957]]);
    }, 'set': function (t1r986) {
      this[H[957]] = t1r986['y'], this[H[956]] = t1r986['x'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), $ysqdm[H[101]][H[432]] = function (svk5j) {
    return this['x'] = svk5j['x'], this['y'] = svk5j['y'], this[H[446]] = svk5j[H[446]], this[H[447]] = svk5j[H[447]], this;
  }, $ysqdm[H[101]][H[433]] = function (le0nx, sjd$m, dmqg, t869r1) {
    return this['x'] = le0nx, this['y'] = sjd$m, this[H[446]] = dmqg, this[H[447]] = t869r1, this;
  }, $ysqdm[H[101]][H[503]] = function (wnx3i, r186z9) {
    return this['x'] <= wnx3i && this['x'] + this[H[446]] >= wnx3i && this['y'] <= r186z9 && this['y'] + this[H[447]] >= r186z9;
  }, $ysqdm[H[101]][H[962]] = function (pu6t0) {
    return this[H[429]]()['$intersectInPlace'](pu6t0);
  }, $ysqdm[H[101]][H[963]] = function ($ydgm, mq7) {
    this['x'] -= $ydgm, this[H[446]] += 0x2 * $ydgm, this['y'] -= mq7, this[H[447]] += 0x2 * mq7;
  }, $ysqdm[H[101]]['$intersectInPlace'] = function (dm5js$) {
    var q$dsjm = this['x'],
        we0uxl = this['y'],
        j5svk = dm5js$['x'],
        v5jks = dm5js$['y'],
        $msdj5 = Math[H[187]](q$dsjm, j5svk);q$dsjm = Math[H[501]](q$dsjm + this[H[446]], j5svk + dm5js$[H[446]]);if ($msdj5 <= q$dsjm) {
      j5svk = Math[H[187]](we0uxl, v5jks), dm5js$ = Math[H[501]](we0uxl + this[H[447]], v5jks + dm5js$[H[447]]);if (j5svk <= dm5js$) return this[H[433]]($msdj5, j5svk, q$dsjm - $msdj5, dm5js$ - j5svk), this;
    }return this[H[486]](), this;
  }, $ysqdm[H[101]][H[964]] = function (m$sj5) {
    return Math[H[187]](this['x'], m$sj5['x']) <= Math[H[501]](this[H[956]], m$sj5[H[956]]) && Math[H[187]](this['y'], m$sj5['y']) <= Math[H[501]](this[H[957]], m$sj5[H[957]]);
  }, $ysqdm[H[101]][H[622]] = function () {
    return this[H[446]] <= 0x0 || this[H[447]] <= 0x0;
  }, $ysqdm[H[101]][H[486]] = function () {
    this['x'] = 0x0, this['y'] = 0x0, this[H[446]] = 0x0, this[H[447]] = 0x0;
  }, $ysqdm[H[101]][H[429]] = function () {
    return new $ysqdm(this['x'], this['y'], this[H[446]], this[H[447]]);
  }, $ysqdm[H[101]][H[965]] = function (pl40x) {
    return this['x'] <= pl40x['x'] && this['x'] + this[H[446]] > pl40x['x'] && this['y'] <= pl40x['y'] && this['y'] + this[H[447]] > pl40x['y'];
  }, $ysqdm[H[101]][H[966]] = function (u6pr4) {
    var ik_vb = u6pr4['x'] + u6pr4[H[446]],
        t4pl0u = u6pr4['y'] + u6pr4[H[447]],
        kjv_5a = this['x'] + this[H[446]],
        avj_5 = this['y'] + this[H[447]];return u6pr4['x'] >= this['x'] && u6pr4['x'] < kjv_5a && u6pr4['y'] >= this['y'] && u6pr4['y'] < avj_5 && ik_vb > this['x'] && ik_vb <= kjv_5a && t4pl0u > this['y'] && t4pl0u <= avj_5;
  }, $ysqdm[H[101]][H[596]] = function (qs$djm) {
    return this === qs$djm || this['x'] === qs$djm['x'] && this['y'] === qs$djm['y'] && this[H[446]] === qs$djm[H[446]] && this[H[447]] === qs$djm[H[447]];
  }, $ysqdm[H[101]][H[967]] = function (tr986) {
    this[H[963]](tr986['x'], tr986['y']);
  }, $ysqdm[H[101]][H[599]] = function (uwl0ex, w0lu4x) {
    this['x'] += uwl0ex, this['y'] += w0lu4x;
  }, $ysqdm[H[101]][H[968]] = function (tlp4u) {
    this[H[599]](tlp4u['x'], tlp4u['y']);
  }, $ysqdm[H[101]][H[390]] = function () {
    return H[602] + this['x'] + H[603] + this['y'] + H[969] + this[H[446]] + H[970] + this[H[447]] + ')';
  }, $ysqdm[H[101]][H[971]] = function (mgd$q) {
    var $gq7y = this[H[429]]();if (mgd$q[H[622]]()) return $gq7y;if ($gq7y[H[622]]()) return $gq7y[H[432]](mgd$q), $gq7y;var kab_5 = Math[H[501]]($gq7y['x'], mgd$q['x']),
        ymgdq = Math[H[501]]($gq7y['y'], mgd$q['y']);return $gq7y[H[433]](kab_5, ymgdq, Math[H[187]]($gq7y[H[956]], mgd$q[H[956]]) - kab_5, Math[H[187]]($gq7y[H[957]], mgd$q[H[957]]) - ymgdq), $gq7y;
  }, $ysqdm[H[101]]['$getBaseWidth'] = function (bnw3ie) {
    var vk_5sj = Math[H[927]](Math[H[495]](bnw3ie));return bnw3ie = Math[H[927]](Math[H[498]](bnw3ie)), vk_5sj * this[H[446]] + bnw3ie * this[H[447]];
  }, $ysqdm[H[101]]['$getBaseHeight'] = function (qs$y) {
    var ib3ka = Math[H[927]](Math[H[495]](qs$y));return Math[H[927]](Math[H[498]](qs$y)) * this[H[446]] + ib3ka * this[H[447]];
  }, $ysqdm);function $ysqdm(pr, zor981, $vs5jd, z8r619) {
    void 0x0 === pr && (pr = 0x0), void 0x0 === zor981 && (zor981 = 0x0), void 0x0 === $vs5jd && ($vs5jd = 0x0), void 0x0 === z8r619 && (z8r619 = 0x0);var xup4l = qmd$sj[H[268]](this) || this;return xup4l['x'] = pr, xup4l['y'] = zor981, xup4l[H[446]] = $vs5jd, xup4l[H[447]] = z8r619, xup4l;
  }var qmd$sj;kvj5_[H[61]] = lx0wne, fdsqym(lx0wne[H[101]], H[972]), kvj5_['$TempRectangle'] = new lx0wne();
}(fm$sjd = fm$sjd || {}), function (md$sj) {
  md$sj['$locale_strings'] = md$sj['$locale_strings'] || {}, md$sj['$locale_strings'][H[632]] = md$sj['$locale_strings'][H[632]] || {}, md$sj = md$sj['$locale_strings'][H[632]], (md$sj[0x3e9] = H[973], md$sj[0x3ea] = H[974], md$sj[0x3eb] = H[975], md$sj[0x3ec] = H[976], md$sj[0x3ed] = H[977], md$sj[0x3ee] = H[978], md$sj[0x3ef] = H[979], md$sj[0x3f0] = H[980], md$sj[0x3f1] = H[981], md$sj[0x3f2] = H[982], md$sj[0x3f3] = H[983], md$sj[0x3f4] = H[984], md$sj[0x3f5] = H[985], md$sj[0x3f6] = H[986], md$sj[0x3f7] = H[987], md$sj[0x3f8] = H[988], md$sj[0x3f9] = 'The format of JSON file is incorrect: {0}\ndata: {1}', md$sj[0x3fa] = H[989], md$sj[0x3fb] = H[990], md$sj[0x3fc] = H[991], md$sj[0x3fd] = H[992], md$sj[0x3fe] = H[993], md$sj[0x3ff] = H[994], md$sj[0x401] = H[995], md$sj[0x402] = H[996], md$sj[0x403] = H[997], md$sj[0x404] = H[998], md$sj[0x405] = H[999], md$sj[0x409] = H[1000], md$sj[0x40a] = H[1001], md$sj[0x40b] = H[1002], md$sj[0x40c] = H[1003], md$sj[0x40d] = H[1004], md$sj[0x40e] = H[1005], md$sj[0x40f] = H[1006], md$sj[0x410] = H[1007], md$sj[0x411] = H[1008], md$sj[0x412] = H[1009], md$sj[0x413] = H[1010], md$sj[0x414] = H[1011], md$sj[0x415] = H[1012], md$sj[0x416] = H[1013], md$sj[0x417] = H[1014], md$sj[0x418] = H[1015], md$sj[0x419] = H[1016], md$sj[0x41a] = H[1017], md$sj[0x41b] = H[1018], md$sj[0x41c] = H[1019], md$sj[0xbb8] = H[1020], md$sj[0xbb9] = H[1021], md$sj[0xbba] = H[1022], md$sj[0xbbb] = H[1023], md$sj[0xbbc] = H[1024], md$sj[0xbbd] = H[1025], md$sj[0xbbe] = H[1026], md$sj[0xbbf] = H[1027], md$sj[0xbc0] = H[1028], md$sj[0xbc1] = H[1029], md$sj[0xbc2] = H[1030], md$sj[0xbc3] = H[1031], md$sj[0xbc4] = H[1032], md$sj[0xbc5] = H[1033], md$sj[0xbc6] = H[1034], md$sj[0xc1c] = H[1035], md$sj[0xc1d] = H[1036], md$sj[0xc1e] = H[1037], md$sj[0xc80] = H[1038], md$sj[0xfa0] = H[1039], md$sj[0xfa1] = H[1040], md$sj[0xfa2] = H[1041], md$sj[0xfa3] = H[1042], md$sj[0x1194] = H[1043]);
}(fm$sjd = fm$sjd || {}), (fm$sjd = fm$sjd || {})[H[1044]] = { 'BEVEL': H[1045], 'MITER': H[1046], 'ROUND': H[728] }, function (j5msd) {
  j5msd['$locale_strings'] = j5msd['$locale_strings'] || {}, j5msd['$locale_strings'][H[1047]] = j5msd['$locale_strings'][H[1047]] || {}, j5msd = j5msd['$locale_strings'][H[1047]], (j5msd[0x3e9] = H[1048], j5msd[0x3ea] = H[1049], j5msd[0x3eb] = H[1050], j5msd[0x3ec] = H[1051], j5msd[0x3ed] = H[1052], j5msd[0x3ee] = H[1053], j5msd[0x3ef] = H[1054], j5msd[0x3f0] = H[1055], j5msd[0x3f1] = H[1056], j5msd[0x3f2] = H[1057], j5msd[0x3f3] = H[1058], j5msd[0x3f4] = H[1059], j5msd[0x3f5] = H[1060], j5msd[0x3f6] = H[1061], j5msd[0x3f7] = H[987], j5msd[0x3f8] = H[1062], j5msd[0x3f9] = H[1063], j5msd[0x3fa] = H[1064], j5msd[0x3fb] = H[1065], j5msd[0x3fc] = H[1066], j5msd[0x3fd] = H[1067], j5msd[0x3fe] = H[993], j5msd[0x3ff] = H[1068], j5msd[0x401] = H[1069], j5msd[0x402] = H[1070], j5msd[0x403] = H[997], j5msd[0x404] = H[1071], j5msd[0x405] = H[999], j5msd[0x409] = H[1072], j5msd[0x40a] = H[1073], j5msd[0x40b] = H[1074], j5msd[0x40c] = H[1075], j5msd[0x40d] = H[1076], j5msd[0x40e] = H[1077], j5msd[0x40f] = H[1078], j5msd[0x410] = H[1079], j5msd[0x411] = H[1080], j5msd[0x412] = H[1081], j5msd[0x413] = H[1082], j5msd[0x414] = H[1083], j5msd[0x415] = H[1084], j5msd[0x416] = H[1085], j5msd[0x417] = H[1086], j5msd[0x418] = H[1087], j5msd[0x419] = H[1088], j5msd[0x41a] = H[1089], j5msd[0x41b] = H[1090], j5msd[0x41c] = H[1091], j5msd[0xbb8] = H[1092], j5msd[0xbb9] = H[1093], j5msd[0xbba] = H[1094], j5msd[0xbbb] = H[1095], j5msd[0xbbc] = H[1096], j5msd[0xbbd] = H[1097], j5msd[0xbbe] = H[1098], j5msd[0xbbf] = H[1099], j5msd[0xbc0] = H[1100], j5msd[0xbc1] = H[1101], j5msd[0xbc2] = H[1102], j5msd[0xbc3] = H[1103], j5msd[0xbc4] = H[1104], j5msd[0xbc5] = H[1105], j5msd[0xbc6] = H[1106], j5msd[0xc1c] = H[1107], j5msd[0xc1d] = H[1108], j5msd[0xc1e] = H[1109], j5msd[0xc80] = H[1110], j5msd[0xfa0] = H[1039], j5msd[0xfa1] = H[1040], j5msd[0xfa2] = H[1041], j5msd[0xfa3] = H[1042], j5msd[0x1194] = H[1111]);
}(fm$sjd = fm$sjd || {}), function (einba3) {
  einba3[H[1112]] || (einba3[H[1112]] = {});
}(fm$sjd = fm$sjd || {}), function (z9c1o8) {
  var h1co8;z9c1o8 = z9c1o8[H[246]] || (z9c1o8[H[246]] = {}), h1co8 = [], z9c1o8['$pushSoundChannel'] = function (tp96r4) {
    h1co8[H[4]](tp96r4) < 0x0 && h1co8[H[95]](tp96r4);
  }, z9c1o8['$popSoundChannel'] = function (up60) {
    return 0x0 <= (up60 = h1co8[H[4]](up60)) && (h1co8[H[57]](up60, 0x1), !0x0);
  };
}(fm$sjd = fm$sjd || {}), function (eni3b) {
  (eni3b = eni3b[H[1113]] || (eni3b[H[1113]] = {}))[H[1114]] = H[1114], eni3b[H[1115]] = H[1115];
}(fm$sjd = (fm$sjd = (fm$sjd = fm$sjd || {}) || {}) || {}), function (e0xnwl) {
  var dmy$s = (i_bkva[H[321]] = H[91], i_bkva[H[319]] = H[28], i_bkva);function i_bkva() {}e0xnwl[H[318]] = dmy$s, fdsqym(dmy$s[H[101]], H[1116]);
}(fm$sjd = (fm$sjd = fm$sjd || {}) || {}), function (o2hcz1) {
  function mjd(sm$q) {
    var r8o19z = r861z[H[268]](this) || this;return r8o19z[H[1117]] = !0x1, r8o19z['$renderNode'] = new d5_j[H[645]](), r8o19z[H[511]] = null, r8o19z[H[513]] = 0x0, r8o19z[H[514]] = 0x0, r8o19z[H[1118]] = new o2hcz1[H[431]](), r8o19z['$canvasScaleX'] = 0x1, r8o19z['$canvasScaleY'] = 0x1, r8o19z[H[118]] = sm$q, r8o19z[H[1117]] = sm$q instanceof o2hcz1[H[713]], r8o19z;
  }var d5_j, in3bk, r861z;d5_j = o2hcz1[H[246]] || (o2hcz1[H[246]] = {}), r861z = o2hcz1[H[397]], fmy$d(mjd, r861z), mjd[H[357]] = function (ka5b_v) {
    var ys$qdm = new o2hcz1[H[246]][H[458]](ka5b_v);try {
      var p98rt6 = new d5_j[H[1119]]();ys$qdm[H[511]] = p98rt6;
    } catch (msdyq$) {
      return null;
    }return ys$qdm[H[118]] = ka5b_v, ys$qdm;
  }, mjd[H[101]]['$getRenderNode'] = function () {
    return this['$renderNode'];
  }, mjd[H[101]][H[1120]] = function (sqmdy, elwn) {
    this[H[511]][H[506]](sqmdy *= mjd['$canvasScaleX'], elwn *= mjd['$canvasScaleY']);
  }, mjd[H[101]][H[1121]] = function () {
    var xulew;this['$canvasScaleX'] = this[H[1118]]['a'] = mjd['$canvasScaleX'], this['$canvasScaleY'] = this[H[1118]]['d'] = mjd['$canvasScaleY'], this[H[1117]] || this[H[1122]]();var $sydqm = this[H[511]],
        $qym7g,
        vsj5d$,
        c1o8z9;return $sydqm[H[928]](), xulew = d5_j[H[516]][H[517]](this[H[118]], $sydqm, this[H[1118]]), this[H[1117]] || ($qym7g = $sydqm[H[1123]], (vsj5d$ = this['$renderNode'])[H[654]][H[50]] = 0x0, c1o8z9 = $qym7g[H[446]], $sydqm = $qym7g[H[447]], this[H[532]] ? (this[H[532]][H[816]] = $qym7g, this[H[532]][H[446]] = c1o8z9, this[H[532]][H[447]] = $sydqm) : this[H[532]] = new o2hcz1[H[66]]($qym7g), vsj5d$[H[77]] = this[H[532]], vsj5d$[H[1124]] = c1o8z9, vsj5d$[H[1125]] = $sydqm, vsj5d$[H[1126]](0x0, 0x0, c1o8z9, $sydqm, -this[H[513]], -this[H[514]], c1o8z9 / this['$canvasScaleX'], $sydqm / this['$canvasScaleY'])), xulew;
  }, mjd[H[101]][H[1122]] = function () {
    this[H[118]];var kjv5 = this[H[513]],
        m$dgyq = this[H[514]],
        ms5j$d = this[H[118]]['$getOriginalBounds'](),
        j5s$md = this['$canvasScaleX'],
        lxwe3 = this['$canvasScaleY'];this[H[513]] = -ms5j$d['x'], this[H[514]] = -ms5j$d['y'], this[H[1118]][H[433]](this[H[1118]]['a'], 0x0, 0x0, this[H[1118]]['d'], this[H[513]], this[H[514]]);var abvik_ = this[H[511]];j5s$md = Math[H[187]](0x101, ms5j$d[H[446]] * j5s$md), lxwe3 = Math[H[187]](0x101, ms5j$d[H[447]] * lxwe3), this[H[513]] == kjv5 && this[H[514]] == m$dgyq && abvik_[H[1123]][H[446]] == j5s$md && abvik_[H[1123]][H[447]] == lxwe3 || abvik_[H[506]](j5s$md, lxwe3);
  }, mjd['$setCanvasScale'] = function (a3ink, xe0uwl) {
    mjd['$canvasScaleX'] = a3ink, mjd['$canvasScaleY'] = xe0uwl, o2hcz1[H[413]] && egret_native[H[1127]](mjd['$canvasScaleFactor'], a3ink, xe0uwl);
  }, mjd['$canvasScaleFactor'] = 0x1, mjd['$canvasScaleX'] = 0x1, mjd['$canvasScaleY'] = 0x1, in3bk = mjd, d5_j[H[458]] = in3bk, fdsqym(in3bk[H[101]], H[1128]);
}(fm$sjd = (fm$sjd = fm$sjd || {}) || {}), function (ch8oz1) {
  !function (lxew0u) {
    var rp986 = (niwe3x = ch8oz1[H[397]], fmy$d(sjv_k, niwe3x), sjv_k[H[101]][H[1129]] = function (b3w, tlu40) {
      var vsj$5 = new lxew0u[H[458]](b3w);return vsj$5[H[511]] = tlu40, b3w['$displayList'] = vsj$5;
    }, sjv_k[H[101]][H[1130]] = function () {
      !this[H[1131]] && this[H[427]] && (lxew0u['$TempStage'] = lxew0u['$TempStage'] || this[H[427]], this[H[1131]] = !0x0, this[H[118]] || this[H[1132]](), ch8oz1[H[696]]['$addPlayer'](this));
    }, sjv_k[H[101]][H[1132]] = function () {
      var l0x;(l0x = this[H[1133]] ? ch8oz1[H[1134]](this[H[1133]]) : l0x) ? (l0x = new l0x(), (this[H[118]] = l0x) instanceof ch8oz1[H[528]] ? this[H[427]][H[607]](l0x) : ch8oz1['$error'](0x3ea, this[H[1133]])) : ch8oz1['$error'](0x3e9, this[H[1133]]);
    }, sjv_k[H[101]][H[1135]] = function () {
      this[H[1136]](), this[H[427]] = null;
    }, sjv_k[H[101]][H[1136]] = function () {
      this[H[1131]] && (this[H[1131]] = !0x1, ch8oz1[H[696]]['$removePlayer'](this));
    }, sjv_k[H[101]]['$render'] = function (eabn3i, dj5$ms) {
      if (ch8oz1[H[413]]) return egret_native[H[476]](), void egret_native[H[1137]]();var bn3ie = this[H[427]],
          k_5jva = ch8oz1[H[1138]](),
          djsm = bn3ie['$displayList'][H[1121]]();bn3ie = ch8oz1[H[1138]](), eabn3i && this[H[1139]] && e3iw[H[1140]](djsm, bn3ie - k_5jva, dj5$ms);
    }, sjv_k[H[101]][H[1141]] = function (xpl40, hocz) {
      var _vs5jd = this[H[427]];_vs5jd['$stageWidth'] = xpl40, _vs5jd['$stageHeight'] = hocz, ch8oz1[H[413]] ? egret_native[H[1142]](xpl40, hocz) : (this[H[1143]][H[1120]](xpl40, hocz), this[H[1144]] && this[H[1144]][H[1120]](xpl40, hocz)), _vs5jd[H[176]](ch8oz1[H[80]][H[564]]);
    }, sjv_k[H[101]][H[1145]] = function (prtu4, pu4tl, nxw, $jdsm5) {
      if ((pu4tl = !!pu4tl) && (ch8oz1[H[351]] = function () {
        var $mgqyd = arguments[H[50]],
            _5vskj = '';for (var lxwen3 = 0x0; lxwen3 < $mgqyd; lxwen3++) _5vskj += arguments[lxwen3] + '\x20';lxew0u['$logToFPS'](_5vskj), console[H[351]][H[200]](console, d5s_vj(arguments));
      }, ch8oz1[H[134]] = function () {
        var y$gm7q = arguments[H[50]],
            vs$d5j = '';for (var tr946p = 0x0; tr946p < y$gm7q; tr946p++) vs$d5j += arguments[tr946p] + '\x20';lxew0u['$warnToFPS'](vs$d5j), console[H[134]][H[200]](console, d5s_vj(arguments));
      }, ch8oz1[H[31]] = function () {
        var $ydqmg = arguments[H[50]],
            n3kaib = '';for (var ivk_ab = 0x0; ivk_ab < $ydqmg; ivk_ab++) n3kaib += arguments[ivk_ab] + '\x20';lxew0u['$errorToFPS'](n3kaib), console[H[31]][H[200]](console, d5s_vj(arguments));
      }), this[H[1139]] = !!prtu4, this[H[1146]] = pu4tl, !e3iw) {
        e3iw = new FPS(this[H[427]], prtu4, pu4tl, nxw, $jdsm5);var dsj5$ = t46pu[H[50]];for (var k5aj_v = 0x0; k5aj_v < dsj5$; k5aj_v++) e3iw[H[1147]](t46pu[k5aj_v]);t46pu = null;var vk_a5b = zco21[H[50]];for (k5aj_v = 0x0; k5aj_v < vk_a5b; k5aj_v++) e3iw[H[1148]](zco21[k5aj_v]);zco21 = null;var bk_av = wne3xi[H[50]];for (k5aj_v = 0x0; k5aj_v < bk_av; k5aj_v++) e3iw[H[1149]](wne3xi[k5aj_v]);wne3xi = null;
      }
    }, sjv_k);function sjv_k(qdjms$, hc2z1o, ew3nlx) {
      var p69rt = niwe3x[H[268]](this) || this;return p69rt[H[1131]] = !0x1, qdjms$ || ch8oz1['$error'](0x3eb, H[1150]), p69rt[H[1133]] = ew3nlx, p69rt[H[427]] = hc2z1o, p69rt[H[1143]] = p69rt[H[1129]](hc2z1o, qdjms$), p69rt[H[1139]] = !0x1, p69rt[H[1146]] = !0x1, p69rt[H[1144]] = null, ch8oz1[H[413]] && (egret_native[H[1151]] = qdjms$), p69rt;
    }var niwe3x;lxew0u[H[1152]] = rp986, fdsqym(rp986[H[101]], H[1153]);var t46pu = [],
        zco21 = [],
        wne3xi = [],
        e3iw;lxew0u['$logToFPS'] = function (k5jav_) {
      e3iw ? e3iw[H[1147]](k5jav_) : t46pu[H[95]](k5jav_);
    }, lxew0u['$warnToFPS'] = function (js5k_v) {
      e3iw ? e3iw[H[1148]](js5k_v) : zco21[H[95]](js5k_v);
    }, lxew0u['$errorToFPS'] = function (r4ut) {
      e3iw ? e3iw[H[1149]](r4ut) : wne3xi[H[95]](r4ut);
    }, (_ak5[H[101]][H[1140]] = function (ksvj5_, xenl3, uwl40x) {
      var pu0lx4 = ch8oz1[H[1138]]();this[H[1154]] += pu0lx4 - this[H[1155]], this[H[1155]] = pu0lx4, this[H[1156]]++, this[H[1157]] += ksvj5_, this[H[1158]] += xenl3, this[H[1159]] += uwl40x, 0x3e8 <= this[H[1154]] && (pu0lx4 = Math[H[501]](Math[H[496]](0x3e8 * this[H[1156]] / this[H[1154]]), ch8oz1[H[696]]['$frameRate']), ksvj5_ = Math[H[728]](this[H[1157]] / this[H[1156]]), xenl3 = Math[H[728]](this[H[1158]] / this[H[1156]]), uwl40x = Math[H[728]](this[H[1159]] / this[H[1156]]), this[H[1160]][H[1140]]({ 'fps': pu0lx4, 'draw': ksvj5_, 'costTicker': uwl40x, 'costRender': xenl3 }), this[H[1156]] = 0x0, this[H[1154]] = this[H[1154]] % 0x3e8, this[H[1157]] = 0x0, this[H[1158]] = 0x0, this[H[1159]] = 0x0);
    }, _ak5[H[101]][H[1147]] = function (nkaib) {
      nkaib && this[H[1146]] && this[H[278]](nkaib) && this[H[1160]][H[1147]](nkaib);
    }, _ak5[H[101]][H[1148]] = function (ikban3) {
      ikban3 && this[H[1146]] && this[H[278]](ikban3) && (this[H[1160]][H[1148]] ? this[H[1160]][H[1148]](ikban3) : this[H[1160]][H[1147]](H[1161] + ikban3));
    }, _ak5[H[101]][H[1149]] = function (nle) {
      nle && this[H[1146]] && this[H[278]](nle) && (this[H[1160]][H[1149]] ? this[H[1160]][H[1149]](nle) : this[H[1160]][H[1147]](H[1162] + nle));
    }, rp986 = _ak5);function _ak5(wu0x, oc1zh8, vds5_j, kb3i_a, abine) {
      var tur64p;this[H[1139]] = oc1zh8, this[H[1146]] = vds5_j, this[H[1163]] = kb3i_a, this[H[1164]] = abine, this[H[1165]] = [], this[H[1154]] = 0x0, this[H[1156]] = 0x0, this[H[1155]] = 0x0, this[H[1157]] = 0x0, this[H[1158]] = 0x0, this[H[1159]] = 0x0, this[H[1165]] = [], this[H[1154]] = 0x0, this[H[1156]] = 0x0, this[H[1155]] = 0x0, this[H[1157]] = 0x0, this[H[1158]] = 0x0, this[H[1159]] = 0x0, this[H[1166]] = wu0x, this[H[1139]] = oc1zh8, this[H[1146]] = vds5_j, this[H[1163]] = kb3i_a, this[H[1164]] = abine, this[H[1160]] = new ch8oz1[H[1167]](wu0x, oc1zh8, vds5_j, kb3i_a, abine);try {
        tur64p = kb3i_a ? new RegExp(kb3i_a) : null;
      } catch (qgy$7) {
        ch8oz1[H[351]](qgy$7);
      }this[H[278]] = function (oh2cz1) {
        return tur64p ? tur64p[H[1168]](oh2cz1) : !kb3i_a || 0x0 == oh2cz1[H[4]](kb3i_a);
      };
    }function d5s_vj(i_va) {
      var va5_ = [];for (var en3wi = 0x0; en3wi < i_va[H[50]]; en3wi++) va5_[H[95]](i_va[en3wi]);return va5_;
    }fdsqym(rp986[H[101]], H[1169]), fymgq7$[H[1170]] = rp986, ch8oz1[H[134]] = function () {
      console[H[134]][H[200]](console, d5s_vj(arguments));
    }, ch8oz1[H[31]] = function () {
      console[H[31]][H[200]](console, d5s_vj(arguments));
    }, ch8oz1[H[1171]] = function () {
      console[H[1171]][H[200]](console, d5s_vj(arguments));
    }, ch8oz1[H[351]] = function () {
      console[H[351]][H[200]](console, d5s_vj(arguments));
    };
  }(ch8oz1[H[246]] || (ch8oz1[H[246]] = {}));
}(fm$sjd = (fm$sjd = (fm$sjd = fm$sjd || {}) || {}) || {}), function (ab3) {
  var $ds5mj, dmqs$y, aik3b;ab3[H[413]] = fymgq7$[H[413]], ab3[H[413]] && ($ds5mj = egret_native[H[1172]], dmqs$y = egret_native[H[1173]], $ds5mj < 0x5 ? (ab3[H[413]] = !0x1, ab3[H[246]]['$warnToFPS'](aik3b = H[1174]), ab3[H[134]](aik3b)) : 0x5 < $ds5mj && (ab3[H[413]] = !0x1, ab3[H[246]]['$warnToFPS'](aik3b = H[1175] + dmqs$y + H[1176]), ab3[H[134]](aik3b)));
}(fm$sjd = fm$sjd || {}), function (iakvb_) {
  var c81o9 = (elnxw3[H[101]][H[310]] = function (_aikbv, c1oh) {
    this[H[1177]] === elnxw3[H[1178]] && this[H[1179]](_aikbv, c1oh);
  }, elnxw3[H[101]][H[1179]] = function (ozh21, zh8c1o) {
    ozh21[H[829]]();var kn3bia = ozh21[H[833]],
        y$sqdm = elnxw3[H[1180]] + this[H[1181]],
        kna3i = this[H[1182]],
        j$ds5v = this[H[1183]],
        j$v5ds = zh8c1o ? this[H[1184]] : 0x1;for (var c1z89o = 0x0; c1z89o < j$v5ds; c1z89o++) {
      var u6tr = new Int32Array(this[H[1185]], y$sqdm, 0x1)[0x0];y$sqdm += 0x4;var uwel0x = [];for (var wn0exl = 0x0; wn0exl < this[H[1186]]; wn0exl++) {
        var o8zr1 = new Uint8Array(this[H[1185]], y$sqdm, u6tr),
            ak_5 = new iakvb_[H[811]]();ak_5[H[1187]] = this[H[1187]], ak_5[H[446]] = kna3i, ak_5[H[447]] = j$ds5v, ak_5[H[1188]] = o8zr1, ak_5[H[1189]] = wn0exl, ak_5[H[1190]] = c1z89o, uwel0x[H[95]](ak_5), y$sqdm += u6tr, y$sqdm += 0x3 - (u6tr + 0x3) % 0x4;
      }kn3bia[H[95]](uwel0x), kna3i = Math[H[187]](0x1, 0.5 * kna3i), j$ds5v = Math[H[187]](0x1, 0.5 * j$ds5v);
    }zh8c1o = ozh21[H[834]](), zh8c1o && (ozh21[H[446]] = zh8c1o[H[446]], ozh21[H[447]] = zh8c1o[H[447]]);
  }, elnxw3[H[1180]] = 0x40, elnxw3[H[1178]] = 0x0, elnxw3[H[1191]] = 0x1, elnxw3[H[1192]] = 0x2, elnxw3[H[1193]] = 0x3, elnxw3);function elnxw3(c2zho, v$s5j, xue0wl, o98z1r) {
    this[H[1185]] = c2zho, this[H[306]] = !0x1;var $s5vd = new Uint8Array(this[H[1185]], 0x0, 0xc);if (0xab !== $s5vd[0x0] || 0x4b !== $s5vd[0x1] || 0x54 !== $s5vd[0x2] || 0x58 !== $s5vd[0x3] || 0x20 !== $s5vd[0x4] || 0x31 !== $s5vd[0x5] || 0x31 !== $s5vd[0x6] || 0xbb !== $s5vd[0x7] || 0xd !== $s5vd[0x8] || 0xa !== $s5vd[0x9] || 0x1a !== $s5vd[0xa] || 0xa !== $s5vd[0xb]) return this[H[306]] = !0x0, void console[H[31]](H[1194]);var oz21h = Uint32Array[H[1195]];c2zho = new DataView(this[H[1185]], 0xc, 0xd * oz21h), $s5vd = 0x4030201 === c2zho[H[1196]](0x0, !0x0), (this[H[1197]] = c2zho[H[1196]](+oz21h, $s5vd), this[H[1198]] = c2zho[H[1196]](0x2 * oz21h, $s5vd), this[H[1199]] = c2zho[H[1196]](0x3 * oz21h, $s5vd), this[H[1187]] = c2zho[H[1196]](0x4 * oz21h, $s5vd), this[H[1200]] = c2zho[H[1196]](0x5 * oz21h, $s5vd), this[H[1182]] = c2zho[H[1196]](0x6 * oz21h, $s5vd), this[H[1183]] = c2zho[H[1196]](0x7 * oz21h, $s5vd), this[H[1201]] = c2zho[H[1196]](0x8 * oz21h, $s5vd), this[H[1202]] = c2zho[H[1196]](0x9 * oz21h, $s5vd), this[H[1186]] = c2zho[H[1196]](0xa * oz21h, $s5vd), this[H[1184]] = c2zho[H[1196]](0xb * oz21h, $s5vd), this[H[1181]] = c2zho[H[1196]](0xc * oz21h, $s5vd), 0x0 === this[H[1197]] ? (this[H[1184]] = Math[H[187]](0x1, this[H[1184]]), 0x0 !== this[H[1183]] && 0x0 === this[H[1201]] ? 0x0 === this[H[1202]] ? this[H[1186]] === v$s5j ? this[H[1177]] = elnxw3[H[1178]] : console[H[31]](H[1203] + v$s5j + H[1204] + this[H[1186]]) : console[H[31]](H[1205]) : console[H[31]](H[1206])) : console[H[31]](H[1207]));
  }iakvb_[H[305]] = c81o9, fdsqym(c81o9[H[101]], H[1208]);
}(fm$sjd = fm$sjd || {}), function (r8p9t6) {
  r8p9t6[H[246]] || (r8p9t6[H[246]] = {});
}(fm$sjd = fm$sjd || {}), function (bk_5v) {
  function _v5kab() {
    return _vkiab[H[268]](this) || this;
  }var vj_a5k, $sjdmq, _vkiab;vj_a5k = bk_5v[H[246]] || (bk_5v[H[246]] = {}), _vkiab = bk_5v[H[397]], fmy$d(_v5kab, _vkiab), _v5kab[H[101]][H[1209]] = function (kvaj, _kb3a, c1z, vjka_5, a3_b) {
    var z86r91 = _kb3a,
        _bki3a = c1z,
        gymqd$ = vjka_5,
        nwl0 = a3_b,
        l04ptu = _kb3a / gymqd$ || 0x0,
        p4rtu6 = c1z / nwl0 || 0x0;switch (kvaj) {case bk_5v[H[709]][H[1210]]:
        break;case bk_5v[H[709]][H[1211]]:
        gymqd$ = Math[H[728]](_kb3a / p4rtu6);break;case bk_5v[H[709]][H[1212]]:
        nwl0 = Math[H[728]](c1z / l04ptu);break;case bk_5v[H[709]][H[1213]]:
        p4rtu6 < l04ptu ? _bki3a = Math[H[728]](nwl0 * l04ptu) : z86r91 = Math[H[728]](gymqd$ * p4rtu6);break;case bk_5v[H[709]][H[710]]:
        p4rtu6 < l04ptu ? z86r91 = Math[H[728]](gymqd$ * p4rtu6) : _bki3a = Math[H[728]](nwl0 * l04ptu);break;case bk_5v[H[709]][H[1214]]:
        p4rtu6 < l04ptu ? gymqd$ = Math[H[728]](_kb3a / p4rtu6) : nwl0 = Math[H[728]](c1z / l04ptu);break;case bk_5v[H[709]][H[1215]]:
        p4rtu6 < l04ptu ? nwl0 = Math[H[728]](c1z / l04ptu) : gymqd$ = Math[H[728]](_kb3a / p4rtu6);break;default:
        gymqd$ = _kb3a, nwl0 = c1z;}return bk_5v[H[288]][H[289]] != bk_5v[H[290]][H[1216]] && (gymqd$ % 0x2 != 0x0 && (gymqd$ += 0x1), nwl0 % 0x2 != 0x0 && (nwl0 += 0x1), z86r91 % 0x2 != 0x0 && (z86r91 += 0x1), _bki3a % 0x2 != 0x0 && (_bki3a += 0x1)), { 'stageWidth': gymqd$, 'stageHeight': nwl0, 'displayWidth': z86r91, 'displayHeight': _bki3a };
  }, $sjdmq = _v5kab, vj_a5k[H[1217]] = $sjdmq, fdsqym($sjdmq[H[101]], H[1218], [H[1219]]);
}(fm$sjd = fm$sjd || {}), function (u0lpx) {
  var _j = (be[H[1220]] = H[1221], be[H[710]] = H[1222], be[H[1213]] = H[1223], be[H[1210]] = H[1224], be[H[1212]] = H[1225], be[H[1211]] = H[1226], be[H[1214]] = H[1227], be[H[1215]] = H[1228], be);function be() {}u0lpx[H[709]] = _j, fdsqym(_j[H[101]], H[1229]);
}(fm$sjd = fm$sjd || {}), function (bvi) {
  (bvi = bvi[H[246]] || (bvi[H[246]] = {}))[H[1230]] = function (lupx, bi3new) {
    return console[H[31]](H[1231] + lupx + ',\x20' + bi3new), null;
  }, bvi[H[1232]] = function (nxw0, welxu) {
    return console[H[31]](H[1233] + nxw0 + ',\x20' + welxu), null;
  }, bvi[H[1234]] = function (jsd5$, r6upt4, lex0wn, tl04pu) {
    console[H[31]](H[1235] + jsd5$ + ',\x20' + r6upt4 + ',\x20' + lex0wn + ',\x20' + tl04pu);
  }, bvi[H[1236]] = function (xl3) {
    return console[H[31]](H[1237] + xl3), null;
  }, bvi[H[1238]] = function (t8rp) {
    return console[H[31]](H[1239] + t8rp), null;
  }, bvi[H[332]] = function (ib3ak_, zr1o9) {
    return console[H[31]](H[1240] + zr1o9), null;
  }, bvi[H[1241]] = function (c19z8o, bewin3, djq$ms, jd5$) {
    return console[H[31]](H[1242] + bewin3 + ',\x20' + djq$ms + ',\x20' + jd5$), null;
  }, bvi[H[1243]] = function (_sv5jd, d_jsv, put) {
    return console[H[31]](H[1244] + _sv5jd + ',\x20' + d_jsv + ',\x20' + put), 0x0;
  }, bvi[H[1245]] = function (u6prt, ewnib3) {
    return console[H[31]](H[1246] + u6prt + ',\x20' + ewnib3), 0x0;
  }, bvi[H[1247]] = function (jvka_, xinw3e, xeiw3n, xule) {
    return console[H[31]](H[1248] + xinw3e + ',\x20' + xeiw3n), null;
  }, bvi[H[1249]] = function (j$s5d, gdym$, ibne3a, r9t64p) {
    console[H[31]](H[1235] + j$s5d + ',\x20' + gdym$ + ',\x20' + ibne3a + ',\x20' + r9t64p);
  };
}(fm$sjd = fm$sjd || {}), function (ux40w) {
  !function (xlp4) {
    xlp4['$START_TIME'] = 0x0, xlp4['$invalidateRenderFlag'] = !0x1, xlp4['$requestRenderingFlag'] = !0x1;var j_d5sv = ($qgmd[H[101]]['$addPlayer'] = function (wlex0n) {
      -0x1 == this[H[1250]][H[4]](wlex0n) && (egret_stages[H[95]](wlex0n[H[427]]), this[H[1250]] = this[H[1250]][H[97]](), this[H[1250]][H[95]](wlex0n));
    }, $qgmd[H[101]]['$removePlayer'] = function (z61r8) {
      var we0n = this[H[1250]][H[4]](z61r8);-0x1 !== we0n && (z61r8 = egret_stages[H[4]](z61r8[H[427]]), egret_stages[H[57]](z61r8, 0x1), this[H[1250]] = this[H[1250]][H[97]](), this[H[1250]][H[57]](we0n, 0x1));
    }, $qgmd[H[101]]['$startTick'] = function (ae, c18) {
      -0x1 == this[H[1251]](ae, c18) && (this[H[1252]](), this[H[1253]][H[95]](ae), this[H[1254]][H[95]](c18));
    }, $qgmd[H[101]]['$stopTick'] = function (putr46, kib3_) {
      kib3_ = this[H[1251]](putr46, kib3_), -0x1 != kib3_ && (this[H[1252]](), this[H[1253]][H[57]](kib3_, 0x1), this[H[1254]][H[57]](kib3_, 0x1));
    }, $qgmd[H[101]][H[1251]] = function (sm5$d, bka_3i) {
      var qjmd = this[H[1253]],
          c819 = this[H[1254]];for (var t8pr6 = qjmd[H[50]] - 0x1; 0x0 <= t8pr6; t8pr6--) if (qjmd[t8pr6] == sm5$d && c819[t8pr6] == bka_3i) return t8pr6;return -0x1;
    }, $qgmd[H[101]][H[1252]] = function () {
      this[H[1253]] = this[H[1253]][H[97]](), this[H[1254]] = this[H[1254]][H[97]]();
    }, $qgmd[H[101]]['$setFrameRate'] = function (_vd) {
      return !(_vd <= 0x0) && this['$frameRate'] != _vd && (this['$frameRate'] = _vd, this[H[1255]] = 0x3e8 / (_vd = 0x3c < _vd ? 0x3c : _vd), this[H[1256]] = this[H[1257]] = Math[H[728]](0xea60 / _vd), !0x0);
    }, $qgmd[H[101]][H[1136]] = function () {
      this[H[1258]] = !0x0;
    }, $qgmd[H[101]][H[1259]] = function () {
      this[H[1258]] = !0x1;
    }, $qgmd[H[101]][H[1140]] = function ($j5svd) {
      var qdm$yg = ux40w[H[1138]](),
          ib_vk = this[H[1253]],
          jd5m = this[H[1254]],
          $jqds = ib_vk[H[50]],
          $ydsqm = xlp4['$requestRenderingFlag'],
          pu = ux40w[H[1138]]();for (var $mj = 0x0, s$jdq = ux40w[H[1260]][H[1261]]; $mj < s$jdq[H[50]]; $mj++) {
        var aibkv = s$jdq[$mj];aibkv[H[1262]] && aibkv[H[1262]]();
      }if (this[H[1258]]) this[H[1263]] = pu;else {
        this[H[1264]]();for (var jsk5_ = 0x0; jsk5_ < $jqds; jsk5_++) ib_vk[jsk5_][H[268]](jd5m[jsk5_], pu) && ($ydsqm = !0x0);var trp694 = ux40w[H[1138]](),
            j5avk_ = pu - this[H[1263]];if (this[H[1263]] = pu, j5avk_ >= this[H[1255]] || $j5svd) this[H[1256]] = this[H[1257]];else {
          if (this[H[1256]] -= 0x3e8, 0x0 < this[H[1256]]) return void ($ydsqm && this[H[517]](!0x1, this[H[1265]] + trp694 - qdm$yg));this[H[1256]] += this[H[1257]];
        }this[H[517]](!0x0, this[H[1265]] + trp694 - qdm$yg), trp694 = ux40w[H[1138]](), this[H[1266]](), qdm$yg = ux40w[H[1138]](), this[H[1265]] = qdm$yg - trp694;
      }
    }, $qgmd[H[101]][H[517]] = function (ho8c, zc1o) {
      var qy7$ = this[H[1250]],
          nixw = qy7$[H[50]];if (0x0 != nixw) {
        this[H[1267]](), xlp4['$invalidateRenderFlag'] && (this[H[1268]](), xlp4['$invalidateRenderFlag'] = !0x1);for (var msdy = 0x0; msdy < nixw; msdy++) qy7$[msdy]['$render'](ho8c, zc1o);xlp4['$requestRenderingFlag'] = !0x1;
      }
    }, $qgmd[H[101]][H[1266]] = function () {
      var p40ulx = ux40w[H[528]]['$enterFrameCallBackList'],
          djm5 = p40ulx[H[50]];if (0x0 != djm5) {
        p40ulx = p40ulx[H[97]]();for (var r1o8z9 = 0x0; r1o8z9 < djm5; r1o8z9++) p40ulx[r1o8z9][H[176]](ux40w[H[80]][H[518]]);
      }
    }, $qgmd[H[101]][H[1268]] = function () {
      var u0p6 = ux40w[H[528]]['$renderCallBackList'],
          nwi3 = u0p6[H[50]];if (0x0 != nwi3) {
        u0p6 = u0p6[H[97]]();for (var aik3nb = 0x0; aik3nb < nwi3; aik3nb++) u0p6[aik3nb][H[176]](ux40w[H[80]][H[519]]);
      }
    }, $qgmd[H[101]][H[1267]] = function () {
      var qgm7y$, dsmj5, w40lx;if (0x0 < ux40w['$callLaterFunctionList'][H[50]] && (qgm7y$ = ux40w['$callLaterFunctionList'], ux40w['$callLaterFunctionList'] = [], dsmj5 = ux40w['$callLaterThisList'], ux40w['$callLaterThisList'] = [], w40lx = ux40w['$callLaterArgsList'], ux40w['$callLaterArgsList'] = []), qgm7y$) {
        var cz891o = qgm7y$[H[50]];for (var msqdy$ = 0x0; msqdy$ < cz891o; msqdy$++) {
          var nx0lw = qgm7y$[msqdy$];null != nx0lw && nx0lw[H[200]](dsmj5[msqdy$], w40lx[msqdy$]);
        }
      }
    }, $qgmd[H[101]][H[1264]] = function () {
      if (0x0 < ux40w['$callAsyncFunctionList'][H[50]]) {
        var t98p6 = ux40w['$callAsyncFunctionList'],
            e3nxl = ux40w['$callAsyncThisList'],
            ibk_va = ux40w['$callAsyncArgsList'];ux40w['$callAsyncFunctionList'] = [], ux40w['$callAsyncThisList'] = [], ux40w['$callAsyncArgsList'] = [];for (var v5$s = 0x0; v5$s < t98p6[H[50]]; v5$s++) {
          var ks_jv = t98p6[v5$s];null != ks_jv && ks_jv[H[200]](e3nxl[v5$s], ibk_va[v5$s]);
        }
      }
    }, $qgmd);function $qgmd() {
      this[H[1250]] = [], this[H[1253]] = [], this[H[1254]] = [], this['$frameRate'] = 0x1e, this[H[1263]] = 0x0, this[H[1265]] = 0x0, this[H[1258]] = !0x1, ux40w[H[696]] && ux40w['$error'](0x3f0, H[1269]), xlp4['$START_TIME'] = Date[H[49]](), this[H[1255]] = 0x3e8 / this['$frameRate'], this[H[1256]] = this[H[1257]] = Math[H[728]](0xea60 / this['$frameRate']);
    }xlp4[H[1270]] = j_d5sv, fdsqym(j_d5sv[H[101]], H[1269]);
  }(ux40w[H[246]] || (ux40w[H[246]] = {}));
}(fm$sjd = fm$sjd || {}), function (k5vba_) {
  !function (sj$5vd) {
    sj$5vd[H[1261]] = [];var my$gdq = !0x0,
        _5dj = (xlnw[H[101]][H[1136]] = function () {
      my$gdq && (my$gdq = !0x1, sj$5vd[H[427]][H[362]](new k5vba_[H[80]](k5vba_[H[80]][H[579]])), sj$5vd[H[1271]] && sj$5vd[H[1271]]());
    }, xlnw[H[101]][H[1259]] = function () {
      my$gdq || (my$gdq = !0x0, sj$5vd[H[427]][H[362]](new k5vba_[H[80]](k5vba_[H[80]][H[577]])), sj$5vd[H[1272]] && sj$5vd[H[1272]]());
    }, xlnw);function xlnw() {}sj$5vd[H[1273]] = _5dj, fdsqym(_5dj[H[101]], H[1274]), sj$5vd[H[1275]] = function (u4pr) {
      var nwix3 = new _5dj();sj$5vd[H[1261]][H[95]](nwix3), u4pr(nwix3);
    };
  }(k5vba_[H[1260]] || (k5vba_[H[1260]] = {})), k5vba_[H[696]] = new k5vba_[H[246]][H[1270]]();
}(fm$sjd = fm$sjd || {}), fi3k_a[H[1276]] = [], function (w04) {
  function vs5dj_(y7g$) {
    var ein3x = zh2c1[H[268]](this) || this;return ein3x[H[706]] = 0x0, ein3x[H[1277]] = 0x0, ein3x[H[1278]] = {}, ein3x[H[1279]] = -0x1, ein3x[H[1280]] = -0x1, ein3x[H[427]] = y7g$, ein3x;
  }var mgqdy$, oz918c, zh2c1;mgqdy$ = w04[H[246]] || (w04[H[246]] = {}), zh2c1 = w04[H[397]], fmy$d(vs5dj_, zh2c1), vs5dj_[H[101]]['$initMaxTouches'] = function () {
    this[H[706]] = this[H[427]]['$maxTouches'];
  }, vs5dj_[H[101]][H[1281]] = function (xn, kabin, ur4p) {
    var m$dj5;this[H[1277]] >= this[H[706]] || (this[H[1279]] = xn, this[H[1280]] = kabin, m$dj5 = this[H[1282]](xn, kabin), null == this[H[1278]][ur4p] && (this[H[1278]][ur4p] = m$dj5, this[H[1277]]++), w04[H[861]][H[847]](m$dj5, w04[H[861]][H[851]], !0x0, !0x0, xn, kabin, ur4p, !0x0));
  }, vs5dj_[H[101]][H[1283]] = function (s_jv, bk3ina, l0xw4) {
    var mdy$s;null != this[H[1278]][l0xw4] && (this[H[1279]] == s_jv && this[H[1280]] == bk3ina || (this[H[1279]] = s_jv, this[H[1280]] = bk3ina, mdy$s = this[H[1282]](s_jv, bk3ina), w04[H[861]][H[847]](mdy$s, w04[H[861]][H[849]], !0x0, !0x0, s_jv, bk3ina, l0xw4, !0x0)));
  }, vs5dj_[H[101]][H[1284]] = function (pu0tl4, c2h, utp6r) {
    var d_5js, k5;null != this[H[1278]][utp6r] && (d_5js = this[H[1282]](pu0tl4, c2h), k5 = this[H[1278]][utp6r], delete this[H[1278]][utp6r], this[H[1277]]--, w04[H[861]][H[847]](d_5js, w04[H[861]][H[853]], !0x0, !0x0, pu0tl4, c2h, utp6r, !0x1), k5 == d_5js ? w04[H[861]][H[847]](d_5js, w04[H[861]][H[857]], !0x0, !0x0, pu0tl4, c2h, utp6r, !0x1) : w04[H[861]][H[847]](k5, w04[H[861]][H[859]], !0x0, !0x0, pu0tl4, c2h, utp6r, !0x1));
  }, vs5dj_[H[101]][H[1282]] = function (_ia, ikba_v) {
    return ikba_v = this[H[427]]['$hitTest'](_ia, ikba_v), ikba_v = ikba_v || this[H[427]];
  }, oz918c = vs5dj_, mgqdy$[H[1285]] = oz918c, fdsqym(oz918c[H[101]], H[1286]);
}(fm$sjd = fm$sjd || {}), function (abin) {
  function mdqys$() {
    var orz198 = sv5_k[H[268]](this) || this;return orz198[H[77]] = null, orz198[H[641]] = !0x0, orz198[H[464]] = null, orz198[H[459]] = NaN, orz198[H[278]] = null, orz198[H[634]] = !0x1, orz198[H[146]] = 0x1, orz198;
  }var akv5j_, wbe3ni, sv5_k;akv5j_ = abin[H[246]] || (abin[H[246]] = {}), sv5_k = akv5j_[H[656]], fmy$d(mdqys$, sv5_k), mdqys$[H[101]][H[1126]] = function (zho2, l3xn, vdj$5, eu0l, jsdv, jmsd5$, biea, bv5_ak) {
    this[H[654]][H[95]](zho2, l3xn, vdj$5, eu0l, jsdv, jmsd5$, biea, bv5_ak), this[H[655]]++;
  }, mdqys$[H[101]][H[487]] = function () {
    sv5_k[H[101]][H[487]][H[268]](this), this[H[77]] = null, this[H[428]] = null, this[H[464]] = null, this[H[459]] = NaN, this[H[278]] = null;
  }, mdqys$['$updateTextureData'] = function (t06up4, bak3_, _skj5v, pr69t4, b3_ak, ulx40p, w0lxeu, $jv5s, d5svj, bk_v5, i_kav, sdq$j, ak5j, l3new, tu46p0, k5v_sj) {
    if (bak3_) {
      var p40lut = abin['$TextureScaleFactor'];if (t06up4[H[641]] = k5v_sj, t06up4[H[77]] = bak3_, t06up4[H[1124]] = ak5j, t06up4[H[1125]] = l3new, tu46p0 == abin[H[646]][H[1287]]) ak5j = i_kav / d5svj * p40lut, l3new = sdq$j / bk_v5 * p40lut, t06up4[H[1126]](_skj5v, pr69t4, b3_ak, ulx40p, ak5j * w0lxeu, l3new * $jv5s, ak5j * b3_ak, l3new * ulx40p);else {
        if (tu46p0 == abin[H[646]][H[1288]]) {
          var l0w4ux = Math[H[501]](d5svj, i_kav),
              c1o2z = Math[H[501]](bk_v5, sdq$j),
              eiwbn3 = b3_ak * p40lut,
              $ysqmd = ulx40p * p40lut;mdqys$[H[1289]](t06up4, p40lut, _skj5v, pr69t4, eiwbn3, $ysqmd, w0lxeu, $jv5s, l0w4ux, c1o2z);
        } else {
          eiwbn3 = b3_ak * p40lut, $ysqmd = ulx40p * p40lut;for (var qgy7$m = 0x0; qgy7$m < i_kav; qgy7$m += d5svj) for (var wbi3 = 0x0; wbi3 < sdq$j; wbi3 += bk_v5) {
            l0w4ux = Math[H[501]](i_kav - qgy7$m, d5svj), c1o2z = Math[H[501]](sdq$j - wbi3, bk_v5), mdqys$[H[1289]](t06up4, p40lut, _skj5v, pr69t4, eiwbn3, $ysqmd, w0lxeu, $jv5s, l0w4ux, c1o2z, qgy7$m, wbi3);
          }
        }
      }
    }
  }, mdqys$['$updateTextureDataWithScale9Grid'] = function (t6ru, p968, s$mqjd, bvaik_, ka3_, y7qgm$, v_ksj5, b3anik, md$yqg, wlx0n, l4utp, s$jd, o91c8z, ien3b, vjs$, avk_bi) {
    t6ru[H[641]] = avk_bi, t6ru[H[77]] = p968, t6ru[H[1124]] = ien3b, t6ru[H[1125]] = vjs$, s$jd -= wlx0n - y7qgm$ * abin['$TextureScaleFactor'], o91c8z -= l4utp - v_ksj5 * abin['$TextureScaleFactor'];var w0uxel = s$mqjd['x'] - b3anik,
        l0uew = s$mqjd['y'] - md$yqg,
        md$qy = w0uxel / abin['$TextureScaleFactor'],
        t89r61 = l0uew / abin['$TextureScaleFactor'],
        l04pux = s$mqjd[H[446]] / abin['$TextureScaleFactor'],
        vsj5_k = s$mqjd[H[447]] / abin['$TextureScaleFactor'];0x0 == vsj5_k && (vsj5_k = 0x1, v_ksj5 <= t89r61 && t89r61--), 0x0 == l04pux && (l04pux = 0x1, y7qgm$ <= md$qy && md$qy--);var lexu0 = bvaik_,
        kbni3 = lexu0 + md$qy,
        mdysq$ = kbni3 + l04pux;avk_bi = y7qgm$ - md$qy - l04pux, p968 = ka3_, ien3b = p968 + t89r61, vjs$ = ien3b + vsj5_k, wlx0n = v_ksj5 - t89r61 - vsj5_k, l4utp = avk_bi * abin['$TextureScaleFactor'], s$mqjd = wlx0n * abin['$TextureScaleFactor'], (md$qy + avk_bi) * abin['$TextureScaleFactor'] > s$jd || (t89r61 + wlx0n) * abin['$TextureScaleFactor'] > o91c8z ? t6ru[H[1126]](bvaik_, ka3_, y7qgm$, v_ksj5, b3anik, md$yqg, s$jd, o91c8z) : (ka3_ = (bvaik_ = b3anik) + w0uxel, y7qgm$ = bvaik_ + (s$jd - l4utp), v_ksj5 = s$jd - w0uxel - l4utp, s$jd = (b3anik = md$yqg) + l0uew, md$yqg = b3anik + o91c8z - s$mqjd, o91c8z = o91c8z - l0uew - s$mqjd, 0x0 < t89r61 && (0x0 < md$qy && t6ru[H[1126]](lexu0, p968, md$qy, t89r61, bvaik_, b3anik, w0uxel, l0uew), 0x0 < l04pux && t6ru[H[1126]](kbni3, p968, l04pux, t89r61, ka3_, b3anik, v_ksj5, l0uew), 0x0 < avk_bi && t6ru[H[1126]](mdysq$, p968, avk_bi, t89r61, y7qgm$, b3anik, l4utp, l0uew)), 0x0 < vsj5_k && (0x0 < md$qy && t6ru[H[1126]](lexu0, ien3b, md$qy, vsj5_k, bvaik_, s$jd, w0uxel, o91c8z), 0x0 < l04pux && t6ru[H[1126]](kbni3, ien3b, l04pux, vsj5_k, ka3_, s$jd, v_ksj5, o91c8z), 0x0 < avk_bi && t6ru[H[1126]](mdysq$, ien3b, avk_bi, vsj5_k, y7qgm$, s$jd, l4utp, o91c8z)), 0x0 < wlx0n && (0x0 < md$qy && t6ru[H[1126]](lexu0, vjs$, md$qy, wlx0n, bvaik_, md$yqg, w0uxel, s$mqjd), 0x0 < l04pux && t6ru[H[1126]](kbni3, vjs$, l04pux, wlx0n, ka3_, md$yqg, v_ksj5, s$mqjd), 0x0 < avk_bi && t6ru[H[1126]](mdysq$, vjs$, avk_bi, wlx0n, y7qgm$, md$yqg, l4utp, s$mqjd)));
  }, mdqys$[H[1289]] = function (bk3ni, lpt04, j5k_, ne3ix, u40t6, $jsdqm, m$5js, b5kv_a, bea3i, y$7gm, e3ibn, djs$m) {
    bea3i = m$5js + u40t6 - bea3i, (0x0 < bea3i && (u40t6 -= bea3i), 0x0 < (bea3i = b5kv_a + $jsdqm - y$7gm) && ($jsdqm -= bea3i), bk3ni[H[1126]](j5k_, ne3ix, u40t6 / lpt04, $jsdqm / lpt04, (e3ibn = void 0x0 === e3ibn ? 0x0 : e3ibn) + m$5js, (djs$m = void 0x0 === djs$m ? 0x0 : djs$m) + b5kv_a, u40t6, $jsdqm));
  }, wbe3ni = mdqys$, akv5j_[H[645]] = wbe3ni, fdsqym(wbe3ni[H[101]], H[1290]);
}(fm$sjd = fm$sjd || {}), function (px40l) {
  function sd$v5j() {
    var z816r = jv5$d[H[268]](this) || this;return z816r[H[926]] = !0x0, z816r[H[146]] = 0x3, z816r;
  }var xlwe0n, l4wux0, jkv5s, sjmqd, jv5$d;xlwe0n = px40l[H[246]] || (px40l[H[246]] = {}), l4wux0 = [H[727], H[728], H[729]], jkv5s = [H[1045], H[1046], H[728]], jv5$d = xlwe0n[H[656]], fmy$d(sd$v5j, jv5$d), sd$v5j[H[101]][H[900]] = function (ab5v_, gm$q7y, tr46p) {
    void 0x0 === gm$q7y && (gm$q7y = 0x1);var xwu04 = new xlwe0n[H[1291]]();return xwu04[H[1292]] = ab5v_, xwu04[H[1293]] = gm$q7y, tr46p ? (tr46p = this[H[654]][H[207]](tr46p), this[H[654]][H[57]](tr46p, 0x0, xwu04)) : this[H[654]][H[95]](xwu04), this[H[655]]++, xwu04;
  }, sd$v5j[H[101]][H[906]] = function (tr9p4, p6rt, jk5s_v, _abik, _vakbi, $gymq) {
    var l0p4ux = new px40l[H[431]]();return _vakbi ? (l0p4ux['a'] = 819.2 * _vakbi['a'], l0p4ux['b'] = 819.2 * _vakbi['b'], l0p4ux['c'] = 819.2 * _vakbi['c'], l0p4ux['d'] = 819.2 * _vakbi['d'], l0p4ux['tx'] = _vakbi['tx'], l0p4ux['ty'] = _vakbi['ty']) : (l0p4ux['a'] = 0x64, l0p4ux['d'] = 0x64), _vakbi = new xlwe0n[H[1294]](), (_vakbi[H[1295]] = tr9p4, _vakbi[H[1296]] = p6rt, _vakbi[H[1297]] = jk5s_v, _vakbi[H[1298]] = _abik, _vakbi[H[428]] = l0p4ux, $gymq ? ($gymq = this[H[654]][H[207]]($gymq), this[H[654]][H[57]]($gymq, 0x0, _vakbi)) : this[H[654]][H[95]](_vakbi), this[H[655]]++, _vakbi);
  }, sd$v5j[H[101]][H[910]] = function (d$qsj, bniae3, qy$mg7, oz91r, mqd$gy, l0tp4u, e0nwl) {
    void 0x0 === qy$mg7 && (qy$mg7 = 0x1), void 0x0 === l0tp4u && (l0tp4u = 0x3), void 0x0 === e0nwl && (e0nwl = []), -0x1 == l4wux0[H[4]](oz91r) && (oz91r = H[728]), -0x1 == jkv5s[H[4]](mqd$gy) && (mqd$gy = H[728]);var ex3wln = new xlwe0n[H[1299]]();return ex3wln[H[1300]] = d$qsj, ex3wln[H[1301]] = bniae3, ex3wln[H[1302]] = qy$mg7, ex3wln[H[1303]] = oz91r || px40l[H[726]][H[1304]], ex3wln[H[1305]] = mqd$gy, ex3wln[H[1306]] = l0tp4u, ex3wln[H[1307]] = e0nwl, this[H[654]][H[95]](ex3wln), this[H[655]]++, ex3wln;
  }, sd$v5j[H[101]][H[928]] = function () {
    this[H[654]][H[50]] = 0x0, this[H[926]] = !0x0, this[H[655]] = 0x0;
  }, sd$v5j[H[101]][H[487]] = function () {}, sd$v5j[H[101]][H[550]] = function () {
    this['$texture'] && (px40l[H[761]][H[754]](this['$texture']), this['$texture'] = null, this[H[926]] = !0x0);
  }, sjmqd = sd$v5j, xlwe0n[H[937]] = sjmqd, fdsqym(sjmqd[H[101]], H[1308]);
}(fm$sjd = fm$sjd || {}), function (k_b3i) {
  function k_av5() {
    var kaj_v5 = tp4l0[H[268]](this) || this;return kaj_v5[H[146]] = 0x4, kaj_v5;
  }var qydg$m, tp4l0;qydg$m = k_b3i[H[246]] || (k_b3i[H[246]] = {}), tp4l0 = qydg$m[H[656]], fmy$d(k_av5, tp4l0), k_av5[H[101]][H[1309]] = function (r68z) {
    this[H[654]][H[95]](r68z);
  }, k_av5[H[101]][H[487]] = function () {
    var i3abn = this[H[654]];for (var d_jv5 = i3abn[H[50]] - 0x1; 0x0 <= d_jv5; d_jv5--) i3abn[d_jv5][H[487]]();
  }, k_av5[H[101]]['$getRenderCount'] = function () {
    var lexn0 = 0x0,
        j$qsmd = this[H[654]];for (var $qmy = j$qsmd[H[50]] - 0x1; 0x0 <= $qmy; $qmy--) lexn0 += j$qsmd[$qmy]['$getRenderCount']();return lexn0;
  }, k_b3i = k_av5, qydg$m[H[1310]] = k_b3i, fdsqym(k_b3i[H[101]], H[1311]);
}(fm$sjd = fm$sjd || {}), function ($msjd5) {
  function s$mqy() {
    var v5bak_ = k_5ajv[H[268]](this) || this;return v5bak_[H[77]] = null, v5bak_[H[641]] = !0x0, v5bak_[H[1312]] = new $msjd5[H[61]](), v5bak_[H[464]] = null, v5bak_[H[459]] = NaN, v5bak_[H[278]] = null, v5bak_[H[634]] = !0x1, v5bak_[H[146]] = 0x5, v5bak_[H[1313]] = [], v5bak_[H[1314]] = [], v5bak_[H[1315]] = [], v5bak_;
  }var dj_v5s, kniba3, k_5ajv;dj_v5s = $msjd5[H[246]] || ($msjd5[H[246]] = {}), k_5ajv = dj_v5s[H[656]], fmy$d(s$mqy, k_5ajv), s$mqy[H[101]][H[1316]] = function (ka_jv, el0wu, w3bein, mgy7$, v5skj, $msjqd, c1o8, w4xl) {
    this[H[654]][H[95]](ka_jv, el0wu, w3bein, mgy7$, v5skj, $msjqd, c1o8, w4xl), this[H[655]]++;
  }, s$mqy[H[101]][H[487]] = function () {
    k_5ajv[H[101]][H[487]][H[268]](this), this[H[77]] = null, this[H[428]] = null;
  }, kniba3 = s$mqy, dj_v5s[H[1317]] = kniba3, fdsqym(kniba3[H[101]], H[1318]);
}(fm$sjd = fm$sjd || {}), function (ulp40x) {
  function wlxe() {
    var rz189 = neiw[H[268]](this) || this;return rz189[H[77]] = null, rz189[H[641]] = !0x0, rz189[H[634]] = !0x1, rz189[H[146]] = 0x6, rz189;
  }var $m5djs, neiw;$m5djs = ulp40x[H[246]] || (ulp40x[H[246]] = {}), neiw = $m5djs[H[656]], fmy$d(wlxe, neiw), wlxe[H[101]][H[1126]] = function (t694rp, j$sqmd, $mgyqd, qsd$y, xe0uw, lux0p, ygq$m7, i_3ab) {
    var sdjmq = this;sdjmq[H[1319]] = t694rp, sdjmq[H[1320]] = j$sqmd, sdjmq[H[335]] = $mgyqd, sdjmq[H[336]] = qsd$y, sdjmq[H[1321]] = xe0uw, sdjmq[H[1322]] = lux0p, sdjmq[H[1323]] = ygq$m7, sdjmq[H[1324]] = i_3ab, sdjmq[H[655]] = 0x1;
  }, wlxe[H[101]][H[487]] = function () {
    neiw[H[101]][H[487]][H[268]](this), this[H[77]] = null;
  }, ulp40x = wlxe, $m5djs[H[644]] = ulp40x, fdsqym(ulp40x[H[101]], H[1325]);
}(fm$sjd = fm$sjd || {}), function (w0nel) {
  var ym$sdq = (w0xlne = w0nel[H[652]], fmy$d(lp, w0xlne), lp[H[101]][H[424]] = function () {
    this['$nativeDisplayObject'] = new egret_native[H[414]](0xc);
  }, lp[H[101]][H[636]] = function ($dqmy) {
    this['$nativeDisplayObject'][H[1326]]($dqmy);
  }, lp[H[101]]['$updateRenderNode'] = function () {
    var ulp04 = this['$bitmapData'],
        pl4t,
        kj5_vs,
        lxeu,
        _5svjk;ulp04 && (w0nel['$TextureScaleFactor'], (pl4t = this['$renderNode'])[H[641]] = this['$smoothing'], pl4t[H[77]] = ulp04, pl4t[H[1124]] = this['$sourceWidth'], pl4t[H[1125]] = this['$sourceHeight'], lxeu = isNaN(this['$explicitBitmapWidth']) ? this['$textureWidth'] : this['$explicitBitmapWidth'], _5svjk = isNaN(this['$explicitBitmapHeight']) ? this['$textureHeight'] : this['$explicitBitmapHeight'], kj5_vs = lxeu / this['$textureWidth'], ulp04 = _5svjk / this['$textureHeight'], lxeu = this['$bitmapWidth'], _5svjk = this['$bitmapHeight'], pl4t[H[1316]](this['$bitmapX'], this['$bitmapY'], lxeu, _5svjk, this['$offsetX'] * kj5_vs, this['$offsetY'] * ulp04, kj5_vs * lxeu, ulp04 * _5svjk));
  }, lp[H[101]]['$updateVertices'] = function () {
    var xei3wn;this[H[1327]] = !0x0, this['$renderDirty'] = !0x0, w0nel[H[413]] ? (xei3wn = this['$renderNode'], this['$nativeDisplayObject'][H[1328]](xei3wn[H[1313]], xei3wn[H[1315]], xei3wn[H[1314]])) : ((xei3wn = this['$parent']) && !xei3wn['$cacheDirty'] && (xei3wn['$cacheDirty'] = !0x0, xei3wn['$cacheDirtyUp']()), (xei3wn = this['$maskedObject']) && !xei3wn['$cacheDirty'] && (xei3wn['$cacheDirty'] = !0x0, xei3wn['$cacheDirtyUp']()));
  }, lp[H[101]]['$measureContentBounds'] = function (x4p0u) {
    if (this[H[1327]]) {
      this[H[1327]] = !0x1;var wlx3e = this['$renderNode'],
          jvd5s = wlx3e[H[1313]];if (jvd5s[H[50]]) {
        this[H[1329]][H[433]](Number[H[1330]], Number[H[1330]], -Number[H[1330]], -Number[H[1330]]);for (var msj5 = 0x0, xewlu0 = jvd5s[H[50]]; msj5 < xewlu0; msj5 += 0x2) {
          var ysmq$d = jvd5s[msj5],
              k3abni = jvd5s[msj5 + 0x1];this[H[1329]]['x'] > ysmq$d && (this[H[1329]]['x'] = ysmq$d), this[H[1329]][H[446]] < ysmq$d && (this[H[1329]][H[446]] = ysmq$d), this[H[1329]]['y'] > k3abni && (this[H[1329]]['y'] = k3abni), this[H[1329]][H[447]] < k3abni && (this[H[1329]][H[447]] = k3abni);
        }this[H[1329]][H[446]] -= this[H[1329]]['x'], this[H[1329]][H[447]] -= this[H[1329]]['y'];
      } else this[H[1329]][H[433]](0x0, 0x0, 0x0, 0x0);wlx3e[H[1312]][H[432]](this[H[1329]]);
    }x4p0u[H[432]](this[H[1329]]);
  }, lp);function lp($smq) {
    return $smq = w0xlne[H[268]](this, $smq) || this, ($smq[H[1327]] = !0x0, $smq[H[1329]] = new w0nel[H[61]](), $smq['$renderNode'] = new w0nel[H[246]][H[1317]](), $smq);
  }var w0xlne;w0nel[H[1331]] = ym$sdq, fdsqym(ym$sdq[H[101]], H[1332]);
}(fm$sjd = fm$sjd || {}), function (co1z8) {
  function iwexn3() {
    var xp4l0u = qs$dm[H[268]](this) || this;return xp4l0u[H[1333]] = 0xffffff, xp4l0u[H[1334]] = 0x0, xp4l0u[H[1335]] = 0x1e, xp4l0u[H[1336]] = 0x0, xp4l0u[H[1337]] = !0x1, xp4l0u[H[1338]] = !0x1, xp4l0u[H[1339]] = H[1340], xp4l0u[H[926]] = !0x0, xp4l0u[H[146]] = 0x2, xp4l0u;
  }var _djsv, z9o8r1, qs$dm;_djsv = co1z8[H[246]] || (co1z8[H[246]] = {}), qs$dm = _djsv[H[656]], fmy$d(iwexn3, qs$dm), iwexn3[H[101]][H[1341]] = function (iebnw3, $jmd5s, t9rp46, neb3w) {
    this[H[654]][H[95]](iebnw3, $jmd5s, t9rp46, neb3w), this[H[655]]++, this[H[926]] = !0x0;
  }, iwexn3[H[101]][H[550]] = function () {
    this['$texture'] && (co1z8[H[761]][H[754]](this['$texture']), this['$texture'] = null, this[H[926]] = !0x0);
  }, iwexn3[H[101]][H[487]] = function () {
    qs$dm[H[101]][H[487]][H[268]](this), this[H[926]] = !0x0;
  }, z9o8r1 = iwexn3, _djsv[H[1342]] = z9o8r1, fdsqym(z9o8r1[H[101]], H[1343]);
}(fm$sjd = fm$sjd || {}), function (lu0xp4) {
  function q$dmgy() {
    var b_ka = yqgdm$[H[268]](this) || this;return b_ka[H[146]] = 0x1, b_ka;
  }var ibwe, yqgdm$;ibwe = lu0xp4[H[246]] || (lu0xp4[H[246]] = {}), yqgdm$ = ibwe[H[671]], fmy$d(q$dmgy, yqgdm$), lu0xp4 = q$dmgy, ibwe[H[1291]] = lu0xp4, fdsqym(lu0xp4[H[101]], H[1344]);
}(fm$sjd = fm$sjd || {}), function (enbw3i) {
  function w3ein() {
    var lp4u = b_a5[H[268]](this) || this;return lp4u[H[146]] = 0x2, lp4u;
  }var nxei3, b_a5;nxei3 = enbw3i[H[246]] || (enbw3i[H[246]] = {}), b_a5 = nxei3[H[671]], fmy$d(w3ein, b_a5), enbw3i = w3ein, nxei3[H[1294]] = enbw3i, fdsqym(enbw3i[H[101]], H[1345]);
}(fm$sjd = fm$sjd || {}), (fm$sjd = fm$sjd || {})[H[711]] = { 'AUTO': H[1346], 'PORTRAIT': H[1347], 'LANDSCAPE': H[1348], 'LANDSCAPE_FLIPPED': H[1349] }, function (sd5v) {
  function s$dmq() {
    var _3abk = s_dv5j[H[268]](this) || this;return _3abk[H[146]] = 0x3, _3abk;
  }var j5ak_, s_dv5j;j5ak_ = sd5v[H[246]] || (sd5v[H[246]] = {}), s_dv5j = j5ak_[H[671]], fmy$d(s$dmq, s_dv5j), sd5v = s$dmq, j5ak_[H[1299]] = sd5v, fdsqym(sd5v[H[101]], H[1350]);
}(fm$sjd = fm$sjd || {}), function ($qygd) {
  var ka5_vb = [H[1351], H[1352], H[1353]],
      up4 = H[1351],
      vba_k5 = H[1354],
      h8o1zc = { 'none': H[1355], 'square': H[729], 'round': H[728] },
      mdgqy$ = [],
      kia_3 = [],
      x04lwu = (lwu0[H[101]][H[517]] = function (u4x0, i3ebw, rtu, a5_kj) {
    this[H[1356]]++, i3ebw = i3ebw[H[1357]], i3ebw[H[1358]](rtu['a'], rtu['b'], rtu['c'], rtu['d'], 0x0, 0x0), a5_kj = this[H[1359]](u4x0, i3ebw, rtu['tx'], rtu['ty'], !0x0), u4x0 = $qygd[H[431]][H[357]]();if (rtu['$invertInto'](u4x0), i3ebw[H[1358]](u4x0['a'], u4x0['b'], u4x0['c'], u4x0['d'], 0x0, 0x0), $qygd[H[431]][H[363]](u4x0), this[H[1356]]--, 0x0 === this[H[1356]]) {
      0x6 < mdgqy$[H[50]] && (mdgqy$[H[50]] = 0x6);var m5$jsd = mdgqy$[H[50]];for (var dqs$j = 0x0; dqs$j < m5$jsd; dqs$j++) mdgqy$[dqs$j][H[506]](0x0, 0x0);
    }return a5_kj;
  }, lwu0[H[101]][H[1359]] = function (tpl0, ieb3an, $smqy, s$m, k_ja5v) {
    var c89oz1 = 0x0,
        _j5sk,
        k_va5b = tpl0['$displayList'];if (_j5sk = k_va5b && !k_ja5v ? ((tpl0['$cacheDirty'] || tpl0['$renderDirty'] || k_va5b['$canvasScaleX'] != $qygd[H[246]][H[458]]['$canvasScaleX'] || k_va5b['$canvasScaleY'] != $qygd[H[246]][H[458]]['$canvasScaleY']) && (c89oz1 += k_va5b[H[1121]]()), k_va5b['$renderNode']) : tpl0['$renderDirty'] ? tpl0['$getRenderNode']() : tpl0['$renderNode'], tpl0['$cacheDirty'] = !0x1, _j5sk) {
      switch (c89oz1++, ieb3an['$offsetX'] = $smqy, ieb3an['$offsetY'] = s$m, _j5sk[H[146]]) {case 0x1:
          this[H[1360]](_j5sk, ieb3an);break;case 0x2:
          this[H[1361]](_j5sk, ieb3an);break;case 0x3:
          this[H[1362]](_j5sk, ieb3an);break;case 0x4:
          this[H[1363]](_j5sk, ieb3an);break;case 0x5:
          this[H[1364]](_j5sk, ieb3an);break;case 0x6:
          this[H[1365]](_j5sk, ieb3an);}ieb3an['$offsetX'] = 0x0, ieb3an['$offsetY'] = 0x0;
    }if (k_va5b && !k_ja5v) return c89oz1;var abie3 = tpl0['$children'];if (abie3) {
      var tup06 = abie3[H[50]];for (var $ymsq = 0x0; $ymsq < tup06; $ymsq++) {
        var ds_jv5 = abie3[$ymsq],
            mqyg$ = void 0x0,
            i3bwne = void 0x0;i3bwne = ds_jv5['$useTranslate'] ? (p96t4r = ds_jv5['$getMatrix'](), mqyg$ = $smqy + ds_jv5['$x'], i3bwne = s$m + ds_jv5['$y'], ieb3an[H[174]](), ieb3an[H[1358]](p96t4r['a'], p96t4r['b'], p96t4r['c'], p96t4r['d'], mqyg$, i3bwne), mqyg$ = -ds_jv5['$anchorOffsetX'], -ds_jv5['$anchorOffsetY']) : (mqyg$ = $smqy + ds_jv5['$x'] - ds_jv5['$anchorOffsetX'], s$m + ds_jv5['$y'] - ds_jv5['$anchorOffsetY']);var p96t4r = void 0x0;switch (0x1 != ds_jv5['$alpha'] && (p96t4r = ieb3an[H[1366]], ieb3an[H[1366]] *= ds_jv5['$alpha']), ds_jv5['$renderMode']) {case 0x1:
            break;case 0x2:
            c89oz1 += this[H[1367]](ds_jv5, ieb3an, mqyg$, i3bwne);break;case 0x3:
            c89oz1 += this[H[1368]](ds_jv5, ieb3an, mqyg$, i3bwne);break;case 0x4:
            c89oz1 += this[H[1369]](ds_jv5, ieb3an, mqyg$, i3bwne);break;default:
            c89oz1 += this[H[1359]](ds_jv5, ieb3an, mqyg$, i3bwne);}ds_jv5['$useTranslate'] ? ieb3an[H[1370]]() : p96t4r && (ieb3an[H[1366]] = p96t4r);
      }
    }return c89oz1;
  }, lwu0[H[101]][H[1367]] = function (dvs5j$, _kv5a, vaj5_k, k5vba) {
    if (dvs5j$['$children'] && 0x0 == dvs5j$['$children'][H[50]] && (!dvs5j$['$renderNode'] || 0x0 == dvs5j$['$renderNode']['$getRenderCount']())) return 0x0;var kbvai_ = 0x0,
        e0uxlw = dvs5j$['$filters'],
        y7m$q = e0uxlw[H[50]],
        i3bnak = 0x0 !== dvs5j$['$blendMode'],
        xp04l;i3bnak && (xp04l = (xp04l = ka5_vb[dvs5j$['$blendMode']]) || up4);var iva_b = dvs5j$['$getOriginalBounds'](),
        _iabv = iva_b['x'],
        gq$y7m = iva_b['y'],
        ds5_jv = iva_b[H[446]];iva_b = iva_b[H[447]];if (ds5_jv <= 0x0 || iva_b <= 0x0) return kbvai_;var ms$j5 = this[H[1371]](ds5_jv - _iabv, iva_b - gq$y7m, !0x0);iva_b = ms$j5[H[1357]];if (dvs5j$['$mask'] ? kbvai_ += this[H[1368]](dvs5j$, iva_b, -_iabv, -gq$y7m) : dvs5j$['$scrollRect'] || dvs5j$['$maskRect'] ? kbvai_ += this[H[1369]](dvs5j$, iva_b, -_iabv, -gq$y7m) : kbvai_ += this[H[1359]](dvs5j$, iva_b, -_iabv, -gq$y7m), 0x0 < kbvai_) {
      i3bnak && (_kv5a[H[1372]] = xp04l), kbvai_++;var pt4r = iva_b[H[1373]](0x0, 0x0, ms$j5[H[1123]][H[446]], ms$j5[H[1123]][H[447]]);for (var d_vs5 = 0x0; d_vs5 < y7m$q; d_vs5++) {
        var nlw3x = e0uxlw[d_vs5],
            svd5$,
            t460up,
            ba3k,
            qdj$sm;H[876] == nlw3x[H[146]] ? c1h8(pt4r[H[29]], ms$j5[H[1123]][H[446]], ms$j5[H[1123]][H[447]], nlw3x['$matrix']) : H[488] == nlw3x[H[146]] ? $sdv5j(pt4r[H[29]], ms$j5[H[1123]][H[446]], ms$j5[H[1123]][H[447]], nlw3x['$blurX'], nlw3x['$blurY']) : H[491] == nlw3x[H[146]] ? (svd5$ = nlw3x['$red'], t460up = nlw3x['$green'], ba3k = nlw3x['$blue'], qdj$sm = nlw3x['$alpha'], nlw3x['$inner'] || nlw3x['$knockout'] || nlw3x['$hideObject'] ? function (ozch8, k5_vb, vk_ab5, a5kv_, gq$d, t4l0up, jvd5$, v5a_kj, _5ba, mgyd$, dqmsj$, jvds$) {
          var js;js = new (a_k5vj ? Uint8ClampedArray : Array)(ozch8[H[50]]);var eia3n = a5kv_[0x3],
              syq$d = 0x0,
              vj5s$ = 0x0,
              nl0ex = v5a_kj * Math[H[495]](jvd5$),
              $sjdv = v5a_kj * Math[H[498]](jvd5$),
              xlewn0 = 3.141592653589793,
              ki3b_,
              ewbin3,
              ixn3w = gq$d / 0x7,
              upxl40 = t4l0up / 0x7;for (var nwel3x = 0x0; nwel3x < k5_vb; nwel3x++) for (var rp89t6 = 0x0; rp89t6 < vk_ab5; rp89t6++) {
            var c19zo = rp89t6 * k5_vb * 0x4 + 0x4 * nwel3x,
                abk5v = 0x0,
                jms5d$ = 0x0,
                c9zo8 = ozch8[c19zo] / 0xff,
                b3ina = ozch8[0x1 + c19zo] / 0xff,
                wn3i = ozch8[0x2 + c19zo] / 0xff,
                nixw3e = ozch8[0x3 + c19zo] / 0xff;for (var u0exw = 0x0; u0exw <= 0x2 * xlewn0; u0exw += 0x2 * xlewn0 / 0xc) {
              ki3b_ = Math[H[495]](u0exw + 0x0), ewbin3 = Math[H[498]](u0exw + 0x0);for (var i3bkn = 0x0; i3bkn < 0x7; i3bkn++) {
                syq$d = i3bkn * ixn3w * ki3b_, vj5s$ = i3bkn * upxl40 * ewbin3;var zc2oh = Math[H[728]](nwel3x + syq$d - nl0ex),
                    mqdsj$ = Math[H[728]](rp89t6 + vj5s$ - $sjdv),
                    gqmy$ = 0x0;gqmy$ = k5_vb <= zc2oh || zc2oh < 0x0 || mqdsj$ < 0x0 || vk_ab5 <= mqdsj$ ? 0x0 : ozch8[0x3 + (mqdsj$ * k5_vb * 0x4 + 0x4 * zc2oh)] / 0xff, abk5v += (0x7 - i3bkn) * gqmy$, jms5d$ += 0x7 - i3bkn;
              }
            }nixw3e = Math[H[187]](nixw3e, 0.0001);var uxw4l0 = abk5v / jms5d$ * _5ba * eia3n * (0x1 - mgyd$) * Math[H[187]](Math[H[501]](jvds$, dqmsj$), 0x1 - nixw3e),
                qym$g = (jms5d$ - abk5v) / jms5d$ * _5ba * eia3n * mgyd$ * nixw3e;nixw3e = Math[H[187]](nixw3e * dqmsj$ * (0x1 - jvds$), 0.0001);var vj5k = qym$g / (qym$g + nixw3e);c9zo8 = exnw0l(c9zo8, a5kv_[0x0], vj5k), b3ina = exnw0l(b3ina, a5kv_[0x1], vj5k), wn3i = exnw0l(wn3i, a5kv_[0x2], vj5k), vj5k = uxw4l0 / (qym$g + nixw3e + uxw4l0), c9zo8 = exnw0l(c9zo8, a5kv_[0x0], vj5k), b3ina = exnw0l(b3ina, a5kv_[0x1], vj5k), vj5k = exnw0l(wn3i, a5kv_[0x2], vj5k), qym$g = Math[H[501]](nixw3e + uxw4l0 + qym$g, 0x1), (js[c19zo] = 0xff * c9zo8, js[0x1 + c19zo] = 0xff * b3ina, js[0x2 + c19zo] = 0xff * vj5k, js[0x3 + c19zo] = 0xff * qym$g);
          }a_k5vj ? ozch8[H[1374]](js) : xwel(ozch8, js);
        }(pt4r[H[29]], ms$j5[H[1123]][H[446]], ms$j5[H[1123]][H[447]], [svd5$ / 0xff, t460up / 0xff, ba3k / 0xff, qdj$sm], nlw3x['$blurX'], nlw3x['$blurY'], nlw3x['$angle'] ? nlw3x['$angle'] / 0xb4 * Math['PI'] : 0x0, nlw3x['$distance'] || 0x0, nlw3x['$strength'], nlw3x['$inner'] ? 0x1 : 0x0, nlw3x['$knockout'] ? 0x0 : 0x1, nlw3x['$hideObject'] ? 0x1 : 0x0) : function (z8o19c, p6r98, iwex, leu, k_ba3i, w3nebi, hoz8c, qm$jd, _abvi) {
          leu = function (nkbi3a, nb3iw) {
            nb3iw = nb3iw || [0x0, 0x0, 0x0, 0x0];var mys$d;a_k5vj ? mys$d = new Uint8ClampedArray(nkbi3a) : xwel(mys$d = new Array(nkbi3a[H[50]]), nkbi3a);var z1o2h = nb3iw[0x0],
                gqydm$ = nb3iw[0x1],
                skj_5 = nb3iw[0x2],
                _ks5v = nb3iw[0x3];for (var iwenb3 = 0x0, rt819 = mys$d[H[50]]; iwenb3 < rt819; iwenb3 += 0x4) {
              var $yqms = mys$d[iwenb3 + 0x3];mys$d[iwenb3 + 0x0] = z1o2h * $yqms, mys$d[iwenb3 + 0x1] = gqydm$ * $yqms, mys$d[iwenb3 + 0x2] = skj_5 * $yqms, mys$d[iwenb3 + 0x3] = _ks5v * $yqms;
            }return mys$d;
          }(z8o19c, leu), (function (xuw4l, pt0l4u, ymdgq, d$5jsv, biw) {
            var v_jak5 = Math[H[498]](d$5jsv) * biw | 0x0,
                e0xluw = Math[H[495]](d$5jsv) * biw | 0x0,
                rtu46p,
                d$qgm;if (a_k5vj) {
              rtu46p = new Int32Array(xuw4l[H[1150]]), d$qgm = new Int32Array(rtu46p[H[50]]);for (var z8619 = 0x0; z8619 < ymdgq; z8619++) if (!((bv5ka = z8619 + v_jak5) < 0x0 || ymdgq < bv5ka)) {
                for (var l0pu = 0x0; l0pu < pt0l4u; l0pu++) (k3bi_ = l0pu + e0xluw) < 0x0 || pt0l4u < k3bi_ || (d$qgm[bv5ka * pt0l4u + k3bi_] = rtu46p[z8619 * pt0l4u + l0pu]);
              }rtu46p[H[1374]](d$qgm);
            } else {
              rtu46p = xuw4l, d$qgm = new Array(rtu46p[H[50]]);for (z8619 = 0x0; z8619 < ymdgq; z8619++) {
                var bv5ka;if (!((bv5ka = z8619 + v_jak5) < 0x0 || ymdgq < bv5ka)) for (l0pu = 0x0; l0pu < pt0l4u; l0pu++) {
                  var k3bi_;(k3bi_ = l0pu + e0xluw) < 0x0 || pt0l4u < k3bi_ || (d$qgm[0x4 * (bv5ka * pt0l4u + k3bi_) + 0x0] = rtu46p[0x4 * (z8619 * pt0l4u + l0pu) + 0x0], d$qgm[0x4 * (bv5ka * pt0l4u + k3bi_) + 0x1] = rtu46p[0x4 * (z8619 * pt0l4u + l0pu) + 0x1], d$qgm[0x4 * (bv5ka * pt0l4u + k3bi_) + 0x2] = rtu46p[0x4 * (z8619 * pt0l4u + l0pu) + 0x2], d$qgm[0x4 * (bv5ka * pt0l4u + k3bi_) + 0x3] = rtu46p[0x4 * (z8619 * pt0l4u + l0pu) + 0x3]);
                }
              }xwel(rtu46p, d$qgm);
            }
          }(leu, p6r98, iwex, hoz8c, qm$jd), $sdv5j(leu, p6r98, iwex, k_ba3i, w3nebi), function (q7ym$, t891) {
            for (var e3bwi = 0x0, xnewi = q7ym$[H[50]]; e3bwi < xnewi; e3bwi += 0x4) q7ym$[e3bwi + 0x3] *= t891;
          }(leu, _abvi), function (zo18c, t96r1) {
            for (var e3ia = 0x0, _avbki = zo18c[H[50]]; e3ia < _avbki; e3ia += 0x4) {
              var tr8961 = zo18c[e3ia + 0x0],
                  ds5vj$ = zo18c[e3ia + 0x1],
                  aibn3k = zo18c[e3ia + 0x2],
                  anbei3 = zo18c[e3ia + 0x3] / 0xff,
                  ewl0 = t96r1[e3ia + 0x0],
                  mg$q = t96r1[e3ia + 0x1],
                  u6tp4 = t96r1[e3ia + 0x2],
                  nx3wel = t96r1[e3ia + 0x3] / 0xff;zo18c[e3ia + 0x0] = ewl0 + tr8961 * (0x1 - nx3wel), zo18c[e3ia + 0x1] = mg$q + ds5vj$ * (0x1 - nx3wel), zo18c[e3ia + 0x2] = u6tp4 + aibn3k * (0x1 - nx3wel), zo18c[e3ia + 0x3] = 0xff * (nx3wel + anbei3 * (0x1 - nx3wel));
            }
          }(leu, z8o19c), z8o19c[H[1374]](leu), a_k5vj ? z8o19c[H[1374]](leu) : xwel(z8o19c, leu));
        }(pt4r[H[29]], ms$j5[H[1123]][H[446]], ms$j5[H[1123]][H[447]], [svd5$ / 0xff, t460up / 0xff, ba3k / 0xff, qdj$sm], nlw3x['$blurX'], nlw3x['$blurY'], nlw3x['$angle'] ? nlw3x['$angle'] / 0xb4 * Math['PI'] : 0x0, nlw3x['$distance'] || 0x0, nlw3x['$strength'])) : nlw3x[H[146]];
      }iva_b[H[1375]](pt4r, 0x0, 0x0), _kv5a[H[1126]](ms$j5[H[1123]], vaj5_k + _iabv, k5vba + gq$y7m), i3bnak && (_kv5a[H[1372]] = up4);
    }return kia_3[H[95]](ms$j5), kbvai_;
  }, lwu0[H[101]][H[1368]] = function (sy$md, z2h, j$mqsd, ue0xlw) {
    var j$qdm = 0x0,
        plux = 0x0 !== sy$md['$blendMode'],
        ue0w;plux && (ue0w = (ue0w = ka5_vb[sy$md['$blendMode']]) || up4);var pt6ru = sy$md['$scrollRect'] || sy$md['$maskRect'],
        mjs = sy$md['$mask'];if (mjs) {
      var h1c8zo = mjs['$getMatrix']();if (0x0 == h1c8zo['a'] && 0x0 == h1c8zo['b'] || 0x0 == h1c8zo['c'] && 0x0 == h1c8zo['d']) return j$qdm;
    }if (!(mjs || sy$md['$children'] && 0x0 != sy$md['$children'][H[50]])) return pt6ru && (z2h[H[174]](), z2h[H[1376]](), z2h[H[1377]](pt6ru['x'] + j$mqsd, pt6ru['y'] + ue0xlw, pt6ru[H[446]], pt6ru[H[447]]), z2h[H[1378]]()), plux && (z2h[H[1372]] = ue0w), j$qdm += this[H[1359]](sy$md, z2h, j$mqsd, ue0xlw), plux && (z2h[H[1372]] = up4), pt6ru && z2h[H[1370]](), j$qdm;if (mjs) {
      var y$gmqd = mjs['$getRenderNode']();if ((!mjs['$children'] || 0x0 == mjs['$children'][H[50]]) && y$gmqd && 0x3 == y$gmqd[H[146]] && 0x1 == y$gmqd[H[654]][H[50]] && 0x1 == y$gmqd[H[654]][0x0][H[146]] && 0x1 == y$gmqd[H[654]][0x0][H[1293]]) {
        this[H[1379]] = !0x0, z2h[H[174]](), (new0 = $qygd[H[431]][H[357]]())[H[432]](mjs['$getConcatenatedMatrix']()), mjs['$getConcatenatedMatrixAt'](sy$md, new0), new0[H[942]](0x1, 0x0, 0x0, 0x1, j$mqsd, ue0xlw), z2h[H[1358]](new0['a'], new0['b'], new0['c'], new0['d'], new0['tx'], new0['ty']);var z689r1 = this[H[1359]](mjs, z2h, 0x0, 0x0);return this[H[1379]] = !0x1, new0['$invertInto'](new0), z2h[H[1358]](new0['a'], new0['b'], new0['c'], new0['d'], new0['tx'], new0['ty']), $qygd[H[431]][H[363]](new0), pt6ru && (z2h[H[1376]](), z2h[H[1377]](pt6ru['x'] + j$mqsd, pt6ru['y'] + ue0xlw, pt6ru[H[446]], pt6ru[H[447]]), z2h[H[1378]]()), z689r1 += this[H[1359]](sy$md, z2h, j$mqsd, ue0xlw), z2h[H[1370]](), z689r1;
      }
    }var wbi3e = sy$md['$getOriginalBounds'](),
        nlxwe0 = wbi3e['x'],
        oz1r9 = wbi3e['y'],
        c18oh = wbi3e[H[446]];h1c8zo = wbi3e[H[447]];if (c18oh <= 0x0 || h1c8zo <= 0x0) return j$qdm;z689r1 = this[H[1371]](c18oh, h1c8zo), wbi3e = z689r1[H[1357]];return wbi3e ? (j$qdm += this[H[1359]](sy$md, wbi3e, -nlxwe0, -oz1r9), mjs && (y$gmqd = mjs['$getRenderNode'](), (new0 = $qygd[H[431]][H[357]]())[H[432]](mjs['$getConcatenatedMatrix']()), mjs['$getConcatenatedMatrixAt'](sy$md, new0), new0[H[515]](-nlxwe0, -oz1r9), y$gmqd && 0x1 == y$gmqd['$getRenderCount']() || mjs['$displayList'] ? (wbi3e[H[1372]] = H[1380], wbi3e[H[174]](), wbi3e[H[1381]](new0['a'], new0['b'], new0['c'], new0['d'], new0['tx'], new0['ty']), j$qdm += this[H[1359]](mjs, wbi3e, 0x0, 0x0), wbi3e[H[1370]]()) : ((h1c8zo = (c18oh = this[H[1371]](c18oh, h1c8zo))[H[1357]])[H[1381]](new0['a'], new0['b'], new0['c'], new0['d'], new0['tx'], new0['ty']), j$qdm += this[H[1359]](mjs, h1c8zo, 0x0, 0x0), wbi3e[H[1372]] = H[1380], wbi3e[H[1126]](c18oh[H[1123]], 0x0, 0x0), mdgqy$[H[95]](c18oh)), $qygd[H[431]][H[363]](new0)), 0x0 < j$qdm && (j$qdm++, plux && (z2h[H[1372]] = ue0w), pt6ru && (z2h[H[174]](), z2h[H[1376]](), z2h[H[1377]](pt6ru['x'] + j$mqsd, pt6ru['y'] + ue0xlw, pt6ru[H[446]], pt6ru[H[447]]), z2h[H[1378]]()), z2h[H[1126]](z689r1[H[1123]], j$mqsd + nlxwe0, ue0xlw + oz1r9), pt6ru && z2h[H[1370]](), plux && (z2h[H[1372]] = up4)), mdgqy$[H[95]](z689r1), j$qdm) : j$qdm += this[H[1359]](sy$md, z2h, j$mqsd, ue0xlw);var new0;
  }, lwu0[H[101]][H[1369]] = function (vj_5s, rut6p, vjk_5s, ur6pt4) {
    var _5jka = 0x0,
        c1hzo = vj_5s['$scrollRect'] || vj_5s['$maskRect'];return c1hzo[H[622]]() || (vj_5s['$scrollRect'] && (vjk_5s -= c1hzo['x'], ur6pt4 -= c1hzo['y']), rut6p[H[174]](), rut6p[H[1376]](), rut6p[H[1377]](c1hzo['x'] + vjk_5s, c1hzo['y'] + ur6pt4, c1hzo[H[446]], c1hzo[H[447]]), rut6p[H[1378]](), _5jka += this[H[1359]](vj_5s, rut6p, vjk_5s, ur6pt4), rut6p[H[1370]]()), _5jka;
  }, lwu0[H[101]][H[935]] = function (z9or8, a_b5kv, gydm$, sjqm$) {
    a_b5kv = a_b5kv[H[1357]], (a_b5kv[H[1381]](gydm$['a'], gydm$['b'], gydm$['c'], gydm$['d'], gydm$['tx'], gydm$['ty']), this[H[1382]](z9or8, a_b5kv, sjqm$));
  }, lwu0[H[101]][H[1383]] = function (o2ch, zch8, d5jm$) {
    var nxel3 = zch8[H[1357]],
        i3_;d5jm$ && nxel3[H[1381]](d5jm$['a'], d5jm$['b'], d5jm$['c'], d5jm$['d'], d5jm$['tx'], d5jm$['ty']);var ak5vb = 0x0;if (i3_ = o2ch['$renderDirty'] ? o2ch['$getRenderNode']() : o2ch['$renderNode']) switch (ak5vb++, i3_[H[146]]) {case 0x1:
        this[H[1360]](i3_, nxel3);break;case 0x2:
        this[H[1361]](i3_, nxel3);break;case 0x3:
        this[H[1362]](i3_, nxel3);break;case 0x4:
        this[H[1363]](i3_, nxel3);break;case 0x5:
        this[H[1364]](i3_, nxel3);break;case 0x6:
        this[H[1365]](i3_, nxel3);}var $ymq7 = o2ch['$children'];if ($ymq7) {
      var a_k5v = $ymq7[H[50]];for (var nel0w = 0x0; nel0w < a_k5v; nel0w++) {
        var ydmsq = $ymq7[nel0w];switch (ydmsq['$renderMode']) {case 0x1:
            break;case 0x2:
            ak5vb += this[H[1367]](ydmsq, nxel3, 0x0, 0x0);break;case 0x3:
            ak5vb += this[H[1368]](ydmsq, nxel3, 0x0, 0x0);break;case 0x4:
            ak5vb += this[H[1369]](ydmsq, nxel3, 0x0, 0x0);break;default:
            ak5vb += this[H[1359]](ydmsq, nxel3, 0x0, 0x0);}
      }
    }return ak5vb;
  }, lwu0[H[101]][H[1382]] = function (nib3w, xu0w4, mjsqd$) {
    var dy$gq = 0x0;switch (nib3w[H[146]]) {case 0x1:
        dy$gq = this[H[1360]](nib3w, xu0w4);break;case 0x2:
        dy$gq = 0x1, this[H[1361]](nib3w, xu0w4);break;case 0x3:
        dy$gq = this[H[1362]](nib3w, xu0w4, mjsqd$);break;case 0x4:
        dy$gq = this[H[1363]](nib3w, xu0w4);break;case 0x5:
        dy$gq = this[H[1364]](nib3w, xu0w4);break;case 0x6:
        dy$gq += this[H[1365]](nib3w, xu0w4);}return dy$gq;
  }, lwu0[H[101]][H[1365]] = function (_iabk3, x4lwu0) {
    var v_jk5a = _iabk3[H[77]];return v_jk5a && v_jk5a[H[816]] ? (x4lwu0['$imageSmoothingEnabled'] != _iabk3[H[641]] && (x4lwu0[H[1384]] = _iabk3[H[641]], x4lwu0['$imageSmoothingEnabled'] = _iabk3[H[641]]), _iabk3[H[634]] ? (l0ut = _iabk3[H[1319]], aeibn3 = _iabk3[H[1320]], s5$dj = _iabk3[H[335]], mjs$d = _iabk3[H[336]], vd$sj = _iabk3[H[1321]], ds_j5v = _iabk3[H[1322]], _vba = _iabk3[H[1323]], czo2h = _iabk3[H[1324]], x4lwu0[H[174]](), x4lwu0[H[1358]](0x0, -0x1, 0x1, 0x0, 0x0, czo2h), x4lwu0[H[1126]](v_jk5a[H[816]], l0ut, aeibn3, mjs$d, s5$dj, vd$sj + x4lwu0['$offsetX'], ds_j5v + x4lwu0['$offsetY'], czo2h, _vba), x4lwu0[H[1370]]()) : x4lwu0[H[1126]](v_jk5a[H[816]], _iabk3[H[1319]], _iabk3[H[1320]], _iabk3[H[335]], _iabk3[H[336]], _iabk3[H[1321]] + x4lwu0['$offsetX'], _iabk3[H[1322]] + x4lwu0['$offsetY'], _iabk3[H[1323]], _iabk3[H[1324]]), 0x1) : 0x0;var l0ut, aeibn3, s5$dj, mjs$d, vd$sj, ds_j5v, _vba, czo2h;
  }, lwu0[H[101]][H[1360]] = function (kvia_, js$md) {
    var o8zhc = kvia_[H[77]];if (!o8zhc || !o8zhc[H[816]]) return 0x0;js$md['$imageSmoothingEnabled'] != kvia_[H[641]] && (js$md[H[1384]] = kvia_[H[641]], js$md['$imageSmoothingEnabled'] = kvia_[H[641]]);var win3x = kvia_[H[654]],
        kiab3_ = win3x[H[50]],
        _3kib = 0x0,
        aiv_ = kvia_[H[428]],
        winx3e = kvia_[H[464]],
        lu4t0 = kvia_[H[459]],
        exl3w = !0x1,
        jkva5_,
        lt40pu,
        lup40x;aiv_ && (js$md[H[174]](), exl3w = !0x0, 0x0 == js$md['$offsetX'] && 0x0 == js$md['$offsetY'] || (js$md[H[515]](js$md['$offsetX'], js$md['$offsetY']), jkva5_ = js$md['$offsetX'], lt40pu = js$md['$offsetY'], js$md['$offsetX'] = js$md['$offsetY'] = 0x0), js$md[H[1358]](aiv_['a'], aiv_['b'], aiv_['c'], aiv_['d'], aiv_['tx'], aiv_['ty'])), winx3e && (js$md[H[1372]] = ka5_vb[winx3e]), lu4t0 == lu4t0 && (lup40x = js$md[H[1366]], js$md[H[1366]] *= lu4t0);var abin3e = 0x0,
        xuw40 = kvia_[H[278]];if (xuw40 && 0x8 == kiab3_) {
      var yqdm$s = win3x[0x0],
          v5a = win3x[0x1],
          yg7$qm = win3x[0x2],
          nikb = win3x[0x3],
          ne3wb = win3x[0x4],
          v$jd = win3x[0x5],
          gmy$ = win3x[0x6],
          ia3kb = win3x[0x7];kvia_[H[634]] && (yg7$qm = win3x[0x3], nikb = win3x[0x2], gmy$ = win3x[0x7], ia3kb = win3x[0x6]);var hz1co2 = this[H[1371]](gmy$, ia3kb),
          aibvk_ = hz1co2[H[1357]];abin3e++, kvia_[H[634]] && js$md[H[1358]](0x0, -0x1, 0x1, 0x0, 0x0, gmy$), aibvk_[H[1126]](o8zhc[H[816]], yqdm$s, v5a, yg7$qm, nikb, 0x0, 0x0, gmy$, ia3kb), abin3e++, aiv_ = aibvk_[H[1373]](0x0, 0x0, gmy$, ia3kb), (c1h8(aiv_[H[29]], gmy$, ia3kb, xuw40['$matrix']), aibvk_[H[1375]](aiv_, 0x0, 0x0), js$md[H[1126]](hz1co2[H[1123]], 0x0, 0x0, gmy$, ia3kb, ne3wb + js$md['$offsetX'], v$jd + js$md['$offsetY'], gmy$, ia3kb), mdgqy$[H[95]](hz1co2));
    } else for (; _3kib < kiab3_;) {
      var t698r, e3inab;abin3e++, kvia_[H[634]] ? (yqdm$s = win3x[_3kib++], v5a = win3x[_3kib++], nikb = win3x[_3kib++], yg7$qm = win3x[_3kib++], t698r = win3x[_3kib++], e3inab = win3x[_3kib++], ia3kb = win3x[_3kib++], gmy$ = win3x[_3kib++], js$md[H[174]](), js$md[H[1358]](0x0, -0x1, 0x1, 0x0, 0x0, gmy$), js$md[H[1126]](o8zhc[H[816]], yqdm$s, v5a, yg7$qm, nikb, t698r + js$md['$offsetX'], e3inab + js$md['$offsetY'], gmy$, ia3kb), js$md[H[1370]]()) : js$md[H[1126]](o8zhc[H[816]], win3x[_3kib++], win3x[_3kib++], win3x[_3kib++], win3x[_3kib++], win3x[_3kib++] + js$md['$offsetX'], win3x[_3kib++] + js$md['$offsetY'], win3x[_3kib++], win3x[_3kib++]);
    }return exl3w ? js$md[H[1370]]() : (winx3e && (js$md[H[1372]] = up4), lu4t0 == lu4t0 && (js$md[H[1366]] = lup40x)), jkva5_ && (js$md['$offsetX'] = jkva5_), lt40pu && (js$md['$offsetY'] = lt40pu), abin3e;
  }, lwu0[H[101]][H[1364]] = function (_va5, t4plu) {
    return 0x0;
  }, lwu0[H[101]][H[1361]] = function (p94t6, js$v) {
    js$v[H[1385]] = H[958], js$v[H[1386]] = H[1387], js$v[H[1388]] = H[728];var i3bk_ = p94t6[H[654]],
        avbik_ = i3bk_[H[50]],
        ozch81 = 0x0;for (; ozch81 < avbik_;) {
      var a_bk3 = i3bk_[ozch81++],
          t916r8 = i3bk_[ozch81++],
          $gmdy = i3bk_[ozch81++],
          ne3biw = i3bk_[ozch81++];js$v[H[373]] = ibak_3(p94t6, ne3biw);var v5dj = (null == ne3biw[H[1333]] ? p94t6 : ne3biw)[H[1333]],
          $qmsdj = (null == ne3biw[H[1334]] ? p94t6 : ne3biw)[H[1334]];ne3biw = (null == ne3biw[H[1336]] ? p94t6 : ne3biw)[H[1336]], (js$v[H[1389]] = $qygd[H[1390]](v5dj), js$v[H[1391]] = $qygd[H[1390]]($qmsdj), ne3biw && (js$v[H[1300]] = 0x2 * ne3biw, js$v[H[1392]]($gmdy, a_bk3 + js$v['$offsetX'], t916r8 + js$v['$offsetY'])), js$v[H[1393]]($gmdy, a_bk3 + js$v['$offsetX'], t916r8 + js$v['$offsetY']));
    }
  }, lwu0[H[101]][H[1362]] = function (g$dqy, iw3ex, jak_v5) {
    var iba3_ = g$dqy[H[654]],
        $s5jdm = iba3_[H[50]];jak_v5 = !!jak_v5;for (var nxe0lw = 0x0; nxe0lw < $s5jdm; nxe0lw++) {
      var nwex3 = iba3_[nxe0lw];switch (nwex3[H[146]]) {case 0x1:
          iw3ex[H[1389]] = jak_v5 ? vba_k5 : _jk5av(nwex3[H[1292]], nwex3[H[1293]]), this[H[1394]](nwex3, iw3ex), this[H[1379]] ? iw3ex[H[1378]]() : iw3ex[H[1395]]();break;case 0x2:
          var ieab = nwex3;iw3ex[H[1389]] = jak_v5 ? vba_k5 : function (en0w, x3ewin, o81czh, $jds5v, v5ja_k) {
            var $sdj;$sdj = x3ewin == $qygd[H[894]][H[890]] ? en0w[H[1396]](-0x1, 0x0, 0x1, 0x0) : en0w[H[1397]](0x0, 0x0, 0x0, 0x0, 0x0, 0x1);var ai_vbk = o81czh[H[50]];for (var j5$dvs = 0x0; j5$dvs < ai_vbk; j5$dvs++) $sdj[H[1398]](v5ja_k[j5$dvs] / 0xff, _jk5av(o81czh[j5$dvs], $jds5v[j5$dvs]));return $sdj;
          }(iw3ex, ieab[H[1295]], ieab[H[1296]], ieab[H[1297]], ieab[H[1298]], ieab[H[428]]), iw3ex[H[174]]();var t168 = ieab[H[428]];this[H[1394]](nwex3, iw3ex), iw3ex[H[1358]](t168['a'], t168['b'], t168['c'], t168['d'], t168['tx'], t168['ty']), iw3ex[H[1395]](), iw3ex[H[1370]]();break;case 0x3:
          ieab = nwex3, t168 = ieab[H[1300]], (iw3ex[H[1300]] = t168, iw3ex[H[1391]] = jak_v5 ? vba_k5 : _jk5av(ieab[H[1301]], ieab[H[1302]]), iw3ex[H[1399]] = h8o1zc[ieab[H[1303]]], iw3ex[H[1388]] = ieab[H[1305]], iw3ex[H[1306]] = ieab[H[1306]], iw3ex[H[1400]] && iw3ex[H[1400]](ieab[H[1307]])), t168 = 0x1 === t168 || 0x3 === t168, (t168 && iw3ex[H[515]](0.5, 0.5), this[H[1394]](nwex3, iw3ex), iw3ex[H[1336]](), t168 && iw3ex[H[515]](-0.5, -0.5));}
    }return 0x0 == $s5jdm ? 0x0 : 0x1;
  }, lwu0[H[101]][H[1394]] = function (k3ian, lt0u) {
    lt0u[H[1376]]();var t46upr = k3ian['$data'],
        $yqdsm = k3ian['$commands'],
        a_ik3b = $yqdsm[H[50]],
        m$dgy = 0x0;for (var ien3w = 0x0; ien3w < a_ik3b; ien3w++) switch ($yqdsm[ien3w]) {case 0x4:
        lt0u[H[1401]](t46upr[m$dgy++] + lt0u['$offsetX'], t46upr[m$dgy++] + lt0u['$offsetY'], t46upr[m$dgy++] + lt0u['$offsetX'], t46upr[m$dgy++] + lt0u['$offsetY'], t46upr[m$dgy++] + lt0u['$offsetX'], t46upr[m$dgy++] + lt0u['$offsetY']);break;case 0x3:
        lt0u[H[1402]](t46upr[m$dgy++] + lt0u['$offsetX'], t46upr[m$dgy++] + lt0u['$offsetY'], t46upr[m$dgy++] + lt0u['$offsetX'], t46upr[m$dgy++] + lt0u['$offsetY']);break;case 0x2:
        lt0u[H[661]](t46upr[m$dgy++] + lt0u['$offsetX'], t46upr[m$dgy++] + lt0u['$offsetY']);break;case 0x1:
        lt0u[H[660]](t46upr[m$dgy++] + lt0u['$offsetX'], t46upr[m$dgy++] + lt0u['$offsetY']);}
  }, lwu0[H[101]][H[1363]] = function (avk_5j, kvb_i) {
    var nibew3 = avk_5j[H[428]],
        s$dmy = !0x1,
        rt9618,
        sd$mqy;nibew3 && (kvb_i[H[174]](), s$dmy = !0x0, 0x0 == kvb_i['$offsetX'] && 0x0 == kvb_i['$offsetY'] || (kvb_i[H[515]](kvb_i['$offsetX'], kvb_i['$offsetY']), rt9618 = kvb_i['$offsetX'], sd$mqy = kvb_i['$offsetY'], kvb_i['$offsetX'] = kvb_i['$offsetY'] = 0x0), kvb_i[H[1358]](nibew3['a'], nibew3['b'], nibew3['c'], nibew3['d'], nibew3['tx'], nibew3['ty']));var wleu0x = 0x0,
        z9oc = avk_5j[H[654]],
        vsjd5_ = z9oc[H[50]];for (var $qg = 0x0; $qg < vsjd5_; $qg++) {
      var utl40 = z9oc[$qg];wleu0x += this[H[1382]](utl40, kvb_i);
    }return s$dmy && kvb_i[H[1370]](), rt9618 && (kvb_i['$offsetX'] = rt9618), sd$mqy && (kvb_i['$offsetY'] = sd$mqy), wleu0x;
  }, lwu0[H[101]][H[1371]] = function ($qdjs, wex3in, z819o) {
    return z819o = (z819o ? kia_3 : mdgqy$)[H[53]](), (z819o ? z819o[H[506]]($qdjs, wex3in, !0x0) : z819o = new $qygd[H[246]][H[1403]]($qdjs, wex3in), z819o);
  }, lwu0);function lwu0() {
    this[H[1356]] = 0x0, this[H[1379]] = !0x1;
  }function ibak_3(oz8c1, $g7ymq) {
    var iank3b = (null == $g7ymq[H[1338]] ? oz8c1 : $g7ymq)[H[1338]] ? H[1404] : H[1405];return iank3b += (null == $g7ymq[H[1337]] ? oz8c1 : $g7ymq)[H[1337]] ? H[1406] : H[1405], iank3b += (null == $g7ymq[H[1335]] ? oz8c1 : $g7ymq)[H[1335]] + H[1407] + ($g7ymq[H[1339]] || oz8c1[H[1339]]);
  }function _jk5av(sd_v5, kvib_a) {
    return H[1408] + (sd_v5 >> 0x10) + ',' + (sd_v5 >> 0x8 & 0xff) + ',' + (0xff & sd_v5) + ',' + kvib_a + ')';
  }$qygd[H[1409]] = x04lwu, fdsqym(x04lwu[H[101]], H[1410]), $qygd[H[1411]] = ibak_3, $qygd[H[1412]] = _jk5av;var a_k5vj = !0x1;try {
    a_k5vj = !0x0;
  } catch (o8r) {}function xwel(x04uwl, ne3xwl, ab3nik) {
    void 0x0 === ab3nik && (ab3nik = 0x0);for (var co8 = 0x0, c91o8z = ne3xwl[H[50]]; co8 < c91o8z; co8++) x04uwl[co8 + ab3nik] = ne3xwl[co8];
  }function c1h8(p469tr, bka3i, gymq$7, _v5jak) {
    var _skv = _v5jak[0x0],
        oz21hc = _v5jak[0x1],
        s$mdj5 = _v5jak[0x2],
        ho8c1z = _v5jak[0x3],
        u06 = _v5jak[0x4],
        t8p = _v5jak[0x5],
        _vjs = _v5jak[0x6],
        sd5$mj = _v5jak[0x7],
        i3nxw = _v5jak[0x8],
        x4u0wl = _v5jak[0x9],
        r869p = _v5jak[0xa],
        niweb = _v5jak[0xb],
        welxn3 = _v5jak[0xc],
        exlwu = _v5jak[0xd],
        ik_bva = _v5jak[0xe],
        ean3b = _v5jak[0xf],
        _a3kib = _v5jak[0x10],
        nxlw0 = _v5jak[0x11],
        nb3ak = _v5jak[0x12],
        lxen3w = _v5jak[0x13];for (var bikn3a = 0x0, z1698 = bka3i * gymq$7 * 0x4; bikn3a < z1698; bikn3a += 0x4) {
      var msdj$5 = p469tr[bikn3a + 0x0],
          zco81 = p469tr[bikn3a + 0x1],
          a_vkb = p469tr[bikn3a + 0x2],
          i_a = p469tr[bikn3a + 0x3];p469tr[bikn3a + 0x0] = _skv * msdj$5 + oz21hc * zco81 + s$mdj5 * a_vkb + ho8c1z * i_a + u06, p469tr[bikn3a + 0x1] = t8p * msdj$5 + _vjs * zco81 + sd5$mj * a_vkb + i3nxw * i_a + x4u0wl, p469tr[bikn3a + 0x2] = r869p * msdj$5 + niweb * zco81 + welxn3 * a_vkb + exlwu * i_a + ik_bva, p469tr[bikn3a + 0x3] = ean3b * msdj$5 + _a3kib * zco81 + nxlw0 * a_vkb + nb3ak * i_a + lxen3w;
    }
  }function $sdv5j(in3k, x3nw, ivkb_, sjvd_, ro98z1) {
    !function (r19, d$gmqy, jdsmq, ba3ki) {
      var lxwu40;lxwu40 = new (a_k5vj ? Uint8ClampedArray : Array)(0x4 * d$gmqy);var ch1o8z = 0x4 * d$gmqy,
          kbn3i = 0x2 * ba3ki + 0x1;for (var jvs5_d = 0x0; jvs5_d < jdsmq; jvs5_d++) {
        var vb5a_k = jvs5_d * ch1o8z,
            wnxie3 = 0x0,
            r6ut4 = 0x0,
            niwe3b = 0x0,
            r86t9p = 0x0,
            xelw = 0x0,
            u4lxp = 0x0;for (var $5sjd = 0x4 * -ba3ki, k5_vaj = 0x4 * ba3ki + 0x4; $5sjd < k5_vaj; $5sjd += 0x4) {
          var r9tp6 = vb5a_k + $5sjd;r9tp6 < vb5a_k || vb5a_k + ch1o8z <= r9tp6 || (xelw = r19[r9tp6 + 0x3], wnxie3 += r19[r9tp6 + 0x0] * xelw, r6ut4 += r19[r9tp6 + 0x1] * xelw, niwe3b += r19[r9tp6 + 0x2] * xelw, r86t9p += xelw);
        }for (var k5_vaj = vb5a_k + ch1o8z, vibak = 0x0, z1co98 = ($5sjd = vb5a_k) - 0x4 * ba3ki, ab_v = $5sjd + 0x4 * (ba3ki + 0x1); $5sjd < k5_vaj; $5sjd += 0x4, vibak += 0x4, ab_v += 0x4, z1co98 += 0x4) 0x0 === r86t9p ? (lxwu40[vibak + 0x0] = 0x0, lxwu40[vibak + 0x1] = 0x0, lxwu40[vibak + 0x2] = 0x0, lxwu40[vibak + 0x3] = 0x0) : (lxwu40[vibak + 0x0] = wnxie3 / r86t9p, lxwu40[vibak + 0x1] = r6ut4 / r86t9p, lxwu40[vibak + 0x2] = niwe3b / r86t9p, lxwu40[vibak + 0x3] = r86t9p / kbn3i), xelw = r19[ab_v + 0x3], u4lxp = r19[z1co98 + 0x3], xelw || 0x0 == xelw ? u4lxp || 0x0 == u4lxp ? (wnxie3 += r19[ab_v + 0x0] * xelw - r19[z1co98 + 0x0] * u4lxp, r6ut4 += r19[ab_v + 0x1] * xelw - r19[z1co98 + 0x1] * u4lxp, niwe3b += r19[ab_v + 0x2] * xelw - r19[z1co98 + 0x2] * u4lxp, r86t9p += xelw - u4lxp) : (wnxie3 += r19[ab_v + 0x0] * xelw, r6ut4 += r19[ab_v + 0x1] * xelw, niwe3b += r19[ab_v + 0x2] * xelw, r86t9p += xelw) : !u4lxp && 0x0 != u4lxp || (wnxie3 += -r19[z1co98 + 0x0] * u4lxp, r6ut4 += -r19[z1co98 + 0x1] * u4lxp, niwe3b += -r19[z1co98 + 0x2] * u4lxp, r86t9p += -u4lxp);a_k5vj ? r19[H[1374]](lxwu40, vb5a_k) : xwel(r19, lxwu40, vb5a_k);
      }
    }(in3k, x3nw, ivkb_, sjvd_), function (bn3ka, a_kvj5, k3abi, xwl0n) {
      var vsjd$;vsjd$ = new (a_k5vj ? Uint8ClampedArray : Array)(0x4 * k3abi);var zh1 = 0x4 * a_kvj5,
          r4p69t = 0x2 * xwl0n + 0x1;for (var t64rp = 0x0; t64rp < a_kvj5; t64rp++) {
        var xul0w = 0x4 * t64rp,
            enx3wl = 0x0,
            bew3 = 0x0,
            m7gy$ = 0x0,
            qyd$ = 0x0,
            zc12oh = 0x0,
            bnk = 0x0;for (var bk3_a = -xwl0n * zh1, kbia3n = xwl0n * zh1 + zh1; bk3_a < kbia3n; bk3_a += zh1) {
          var wl3xne = xul0w + bk3_a;wl3xne < xul0w || xul0w + k3abi * zh1 <= wl3xne || (zc12oh = bn3ka[wl3xne + 0x3], enx3wl += bn3ka[wl3xne + 0x0] * zc12oh, bew3 += bn3ka[wl3xne + 0x1] * zc12oh, m7gy$ += bn3ka[wl3xne + 0x2] * zc12oh, qyd$ += zc12oh);
        }for (var bk3_a = xul0w, kbia3n = xul0w + k3abi * zh1, d_jvs = 0x0, o19cz = xul0w - xwl0n * zh1, rz918o = xul0w + (xwl0n + 0x1) * zh1; bk3_a < kbia3n; bk3_a += zh1, d_jvs += 0x4, rz918o += zh1, o19cz += zh1) 0x0 === qyd$ ? (vsjd$[d_jvs + 0x0] = 0x0, vsjd$[d_jvs + 0x1] = 0x0, vsjd$[d_jvs + 0x2] = 0x0, vsjd$[d_jvs + 0x3] = 0x0) : (vsjd$[d_jvs + 0x0] = enx3wl / qyd$, vsjd$[d_jvs + 0x1] = bew3 / qyd$, vsjd$[d_jvs + 0x2] = m7gy$ / qyd$, vsjd$[d_jvs + 0x3] = qyd$ / r4p69t), zc12oh = bn3ka[rz918o + 0x3], bnk = bn3ka[o19cz + 0x3], zc12oh || 0x0 == zc12oh ? bnk || 0x0 == bnk ? (enx3wl += bn3ka[rz918o + 0x0] * zc12oh - bn3ka[o19cz + 0x0] * bnk, bew3 += bn3ka[rz918o + 0x1] * zc12oh - bn3ka[o19cz + 0x1] * bnk, m7gy$ += bn3ka[rz918o + 0x2] * zc12oh - bn3ka[o19cz + 0x2] * bnk, qyd$ += zc12oh - bnk) : (enx3wl += bn3ka[rz918o + 0x0] * zc12oh, bew3 += bn3ka[rz918o + 0x1] * zc12oh, m7gy$ += bn3ka[rz918o + 0x2] * zc12oh, qyd$ += zc12oh) : !bnk && 0x0 != bnk || (enx3wl += -bn3ka[o19cz + 0x0] * bnk, bew3 += -bn3ka[o19cz + 0x1] * bnk, m7gy$ += -bn3ka[o19cz + 0x2] * bnk, qyd$ += -bnk);for (var oc81 = 0x4 * t64rp, kbia3n = oc81 + k3abi * zh1, y$gdqm = 0x0; oc81 < kbia3n; oc81 += zh1, y$gdqm += 0x4) bn3ka[oc81 + 0x0] = vsjd$[y$gdqm + 0x0], bn3ka[oc81 + 0x1] = vsjd$[y$gdqm + 0x1], bn3ka[oc81 + 0x2] = vsjd$[y$gdqm + 0x2], bn3ka[oc81 + 0x3] = vsjd$[y$gdqm + 0x3];
      }
    }(in3k, x3nw, ivkb_, ro98z1);
  }function exnw0l(q7gym$, qjdm, t64up0) {
    return q7gym$ * (0x1 - t64up0) + qjdm * t64up0;
  }
}(fm$sjd = fm$sjd || {}), (fm$sjd = fm$sjd || {})[H[1413]] = null, function (zr89o) {
  (u0xlp = zr89o[H[290]] || (zr89o[H[290]] = {}))[H[1414]] = H[1415], u0xlp[H[291]] = H[1416], u0xlp[H[1417]] = H[1418], u0xlp[H[1419]] = H[1420], u0xlp[H[1216]] = H[1421], u0xlp[H[1422]] = H[1423], u0xlp[H[1424]] = H[1425], u0xlp[H[1426]] = H[1427], u0xlp[H[1428]] = H[1429], u0xlp[H[1430]] = H[1431];var u0xlp = (sjv_5k[H[1432]] = H[1433], sjv_5k['os'] = H[1434], sjv_5k[H[289]] = zr89o[H[290]][H[1414]], sjv_5k[H[1435]] = H[1436], sjv_5k[H[827]] = H[1434], sjv_5k[H[1437]] = 0x0, sjv_5k[H[1438]] = 0x0, sjv_5k);function sjv_5k() {}zr89o[H[288]] = u0xlp, fdsqym(u0xlp[H[101]], H[1439]);
}(fm$sjd = (fm$sjd = (fm$sjd = fm$sjd || {}) || {}) || {}), function (zc21) {
  var avki = (v$5sd = zc21[H[67]], fmy$d(s$jqd, v$5sd), s$jqd[H[101]][H[1440]] = function (qdygm, xu40pl, qy$7m) {
    if (void 0x0 === qy$7m && (qy$7m = 0x1), xu40pl && (0x0 == xu40pl[H[446]] || 0x0 == xu40pl[H[447]])) return !0x1;var pt49r6 = xu40pl || qdygm['$getOriginalBounds']();if (0x0 == pt49r6[H[446]] || 0x0 == pt49r6[H[447]]) return !0x1;qy$7m /= zc21['$TextureScaleFactor'];var r981t = (pt49r6['x'] + pt49r6[H[446]]) * qy$7m,
        a5k_v = (pt49r6['y'] + pt49r6[H[447]]) * qy$7m;xu40pl && (r981t = pt49r6[H[446]] * qy$7m, a5k_v = pt49r6[H[447]] * qy$7m);var tr94p = this['$renderBuffer'];return !!tr94p && (tr94p[H[506]](r981t, a5k_v), this['$bitmapData'][H[446]] = r981t, this['$bitmapData'][H[447]] = a5k_v, zc21[H[413]] ? (egret_native[H[508]](this['$renderBuffer']), v5js_d = !0x1, bi3ka_ = pt49r6 = up04x = p40xu = 0x0, xu40pl && (v5js_d = !0x0, p40xu = xu40pl['x'], up04x = xu40pl['y'], pt49r6 = xu40pl[H[446]], bi3ka_ = xu40pl[H[447]]), egret_native[H[476]](), egret_native[H[1441]](qdygm['$nativeDisplayObject']['id'], qy$7m, v5js_d, p40xu, up04x, pt49r6, bi3ka_), egret_native[H[508]](null)) : ((bi3ka_ = zc21[H[431]][H[357]]())[H[502]](), bi3ka_[H[651]](qy$7m, qy$7m), xu40pl && bi3ka_[H[515]](-xu40pl['x'], -xu40pl['y']), zc21[H[246]][H[516]][H[517]](qdygm, tr94p, bi3ka_, !0x0), zc21[H[431]][H[363]](bi3ka_)), this['$initData'](0x0, 0x0, r981t, a5k_v, 0x0, 0x0, r981t, a5k_v, r981t, a5k_v), !0x0);var v5js_d, p40xu, up04x, bi3ka_;
  }, s$jqd[H[101]][H[537]] = function (pt0u4l, mq$7gy) {
    var g7$myq;return this['$renderBuffer'] && (g7$myq = zc21['$TextureScaleFactor'], pt0u4l = Math[H[728]](pt0u4l / g7$myq), mq$7gy = Math[H[728]](mq$7gy / g7$myq), g7$myq = this['$renderBuffer'][H[512]](pt0u4l, mq$7gy, 0x1, 0x1)), g7$myq;
  }, s$jqd[H[101]][H[63]] = function () {
    v$5sd[H[101]][H[63]][H[268]](this), this['$renderBuffer'] = null;
  }, s$jqd);function s$jqd() {
    var vs5d = v$5sd[H[268]](this) || this;vs5d['$renderBuffer'] = new zc21[H[246]][H[1119]]();var h2zc1 = new zc21[H[66]](vs5d['$renderBuffer'][H[1123]]);return h2zc1['$deleteSource'] = !0x1, vs5d[H[68]](h2zc1), vs5d;
  }var v$5sd;zc21[H[1442]] = avki, fdsqym(avki[H[101]], H[1443]);
}(fm$sjd = fm$sjd || {}), function (beian3) {
  var xl0wue = {};beian3[H[700]] = function (nelw3, i_b3a) {
    xl0wue[nelw3] = i_b3a;
  }, beian3[H[701]] = function (k5j_av) {
    return xl0wue[k5j_av];
  };
}(fm$sjd = fm$sjd || {}), function (nl0) {
  var $md5js = ($qysm = nl0[H[528]], fmy$d(t0, $qysm), t0[H[101]][H[424]] = function () {
    this['$nativeDisplayObject'] = new egret_native[H[414]](0x8);
  }, Object[H[107]](t0[H[101]], H[1444], { 'get': function () {
      return this['$graphics'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), t0[H[101]]['$measureContentBounds'] = function (ne3l) {
    this['$graphics']['$measureContentBounds'](ne3l);
  }, t0[H[101]]['$hitTest'] = function (djsqm, _5sjv) {
    var k5avb = $qysm[H[101]]['$hitTest'][H[268]](this, djsqm, _5sjv);return k5avb = k5avb == this ? this['$graphics']['$hitTest'](djsqm, _5sjv) : k5avb;
  }, t0[H[101]]['$onRemoveFromStage'] = function () {
    $qysm[H[101]]['$onRemoveFromStage'][H[268]](this), this['$graphics'] && this['$graphics']['$onRemoveFromStage']();
  }, t0);function t0() {
    var lw3e = $qysm[H[268]](this) || this;return lw3e['$graphics'] = new nl0[H[938]](), lw3e['$graphics']['$setTarget'](lw3e), lw3e;
  }var $qysm;nl0[H[1445]] = $md5js, fdsqym($md5js[H[101]], H[1446]);
}(fm$sjd = fm$sjd || {}), function (xn3iw) {
  var k_v5aj = ($js = xn3iw[H[331]], fmy$d(ika3n, $js), ika3n[H[101]][H[337]] = function (_5vjsd) {
    var lex0wu = this[H[627]][_5vjsd];if (!lex0wu) {
      var _k5jsv = this[H[1447]][_5vjsd];if (!_k5jsv) return null;lex0wu = this[H[332]](_5vjsd, _k5jsv['x'], _k5jsv['y'], _k5jsv['w'], _k5jsv['h'], _k5jsv[H[333]], _k5jsv[H[334]], _k5jsv[H[335]], _k5jsv[H[336]]), this[H[627]][_5vjsd] = lex0wu;
    }return lex0wu;
  }, ika3n[H[101]][H[1448]] = function (qymg$, exulw0) {
    return this[H[1447]][qymg$] ? this[H[1447]][qymg$][exulw0] : 0x0;
  }, ika3n[H[101]][H[1449]] = function () {
    if (0x0 == this[H[1450]]) for (var nab in this[H[1447]]) {
      var cz18o = this[H[1447]][nab];if (cz18o) {
        var h8cz = cz18o[H[336]];if (!((h8cz = void 0x0 === h8cz ? (nab = void 0x0 === (nab = cz18o['h']) ? 0x0 : nab) + (cz18o = void 0x0 === (cz18o = cz18o[H[334]]) ? 0x0 : cz18o) : h8cz) <= 0x0)) {
          this[H[1450]] = h8cz;break;
        }
      }
    }return this[H[1450]];
  }, ika3n[H[101]][H[1451]] = function (k_vja5) {
    var xe3lwn = (k_vja5 = k_vja5[H[22]]('\r\n')[H[54]]('\x0a'))[H[22]]('\x0a'),
        s$5jvd = this[H[1452]](xe3lwn[0x3], H[1453]),
        bn3ia = {};for (var zhc2 = 0x4; zhc2 < 0x4 + s$5jvd; zhc2++) {
      var o1zhc = xe3lwn[zhc2],
          ds5m$j = {};(bn3ia[String[H[1454]](this[H[1452]](o1zhc, 'id'))] = ds5m$j)['x'] = this[H[1452]](o1zhc, 'x'), ds5m$j['y'] = this[H[1452]](o1zhc, 'y'), ds5m$j['w'] = this[H[1452]](o1zhc, H[446]), ds5m$j['h'] = this[H[1452]](o1zhc, H[447]), ds5m$j[H[333]] = this[H[1452]](o1zhc, H[1455]), ds5m$j[H[334]] = this[H[1452]](o1zhc, H[1456]), ds5m$j[H[1457]] = this[H[1452]](o1zhc, H[1457]);
    }return bn3ia;
  }, ika3n[H[101]][H[1452]] = function (p86, xne0wl) {
    var dm5s$ = p86[H[22]]('\x20');for (var pl0tu = 0x0, zc1h2 = dm5s$[H[50]]; pl0tu < zc1h2; pl0tu++) {
      var j_vks5 = dm5s$[pl0tu];if (xne0wl == j_vks5[H[294]](0x0, xne0wl[H[50]])) return j_vks5 = j_vks5[H[294]](xne0wl[H[50]] + 0x1), parseInt(j_vks5);
    }return 0x0;
  }, ika3n);function ika3n(msqj$d, sv_dj5) {
    return msqj$d = $js[H[268]](this, msqj$d) || this, (msqj$d[H[1450]] = 0x0, H[339] == typeof sv_dj5 ? msqj$d[H[1447]] = msqj$d[H[1451]](sv_dj5) : sv_dj5 && sv_dj5[H[100]](H[330]) ? msqj$d[H[1447]] = sv_dj5[H[330]] : msqj$d[H[1447]] = {}, msqj$d);
  }var $js;xn3iw[H[341]] = k_v5aj, fdsqym(k_v5aj[H[101]], H[1458]);
}(fm$sjd = fm$sjd || {}), function (lu0e) {
  var sqd$j = (mq$ = lu0e[H[528]], fmy$d(_ikvb, mq$), _ikvb[H[101]][H[424]] = function () {
    this['$nativeDisplayObject'] = new egret_native[H[414]](0xb);
  }, Object[H[107]](_ikvb[H[101]], H[641], { 'get': function () {
      return this['$smoothing'];
    }, 'set': function (p986t) {
      p986t != this['$smoothing'] && (this['$smoothing'] = p986t, lu0e[H[413]] || ((p986t = this['$parent']) && !p986t['$cacheDirty'] && (p986t['$cacheDirty'] = !0x0, p986t['$cacheDirtyUp']()), (p986t = this['$maskedObject']) && !p986t['$cacheDirty'] && (p986t['$cacheDirty'] = !0x0, p986t['$cacheDirtyUp']())));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](_ikvb[H[101]], H[91], { 'get': function () {
      return this['$text'];
    }, 'set': function (xu0l4w) {
      this['$setText'](xu0l4w);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), _ikvb[H[101]]['$setText'] = function (_vk5ba) {
    return (_vk5ba = null == _vk5ba ? '' : String(_vk5ba)) != this['$text'] && (this['$text'] = _vk5ba, this['$invalidateContentBounds'](), !0x0);
  }, _ikvb[H[101]]['$getWidth'] = function () {
    var abki_3 = this['$textFieldWidth'];return isNaN(abki_3) ? this['$getContentBounds']()[H[446]] : abki_3;
  }, _ikvb[H[101]]['$setWidth'] = function (z19c8) {
    return !(z19c8 < 0x0 || z19c8 == this['$textFieldWidth']) && (this['$textFieldWidth'] = z19c8, this['$invalidateContentBounds'](), !0x0);
  }, _ikvb[H[101]]['$invalidateContentBounds'] = function () {
    this['$renderDirty'] = !0x0, this['$textLinesChanged'] = !0x0, this['$updateRenderNode']();
  }, _ikvb[H[101]]['$getHeight'] = function () {
    var dq$gmy = this['$textFieldHeight'];return isNaN(dq$gmy) ? this['$getContentBounds']()[H[447]] : dq$gmy;
  }, _ikvb[H[101]]['$setHeight'] = function (u4x0pl) {
    return !(u4x0pl < 0x0 || u4x0pl == this['$textFieldHeight']) && (this['$textFieldHeight'] = u4x0pl, this['$invalidateContentBounds'](), !0x0);
  }, Object[H[107]](_ikvb[H[101]], H[373], { 'get': function () {
      return this['$font'];
    }, 'set': function (_bvkia) {
      this['$setFont'](_bvkia);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), _ikvb[H[101]]['$setFont'] = function (ltu04p) {
    return this['$font'] != ltu04p && (this['$font'] = ltu04p, this['$fontStringChanged'] = !0x0, this['$invalidateContentBounds'](), !0x0);
  }, Object[H[107]](_ikvb[H[101]], H[1459], { 'get': function () {
      return this['$lineSpacing'];
    }, 'set': function (mqg$dy) {
      this['$setLineSpacing'](mqg$dy);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), _ikvb[H[101]]['$setLineSpacing'] = function ($v5jd) {
    return this['$lineSpacing'] != $v5jd && (this['$lineSpacing'] = $v5jd, this['$invalidateContentBounds'](), !0x0);
  }, Object[H[107]](_ikvb[H[101]], H[1460], { 'get': function () {
      return this['$letterSpacing'];
    }, 'set': function (rz) {
      this['$setLetterSpacing'](rz);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), _ikvb[H[101]]['$setLetterSpacing'] = function (we3xnl) {
    return this['$letterSpacing'] != we3xnl && (this['$letterSpacing'] = we3xnl, this['$invalidateContentBounds'](), !0x0);
  }, Object[H[107]](_ikvb[H[101]], H[1385], { 'get': function () {
      return this['$textAlign'];
    }, 'set': function (wn3) {
      this['$setTextAlign'](wn3);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), _ikvb[H[101]]['$setTextAlign'] = function (va5_jk) {
    return this['$textAlign'] != va5_jk && (this['$textAlign'] = va5_jk, this['$invalidateContentBounds'](), !0x0);
  }, Object[H[107]](_ikvb[H[101]], H[1461], { 'get': function () {
      return this['$verticalAlign'];
    }, 'set': function (ab5v) {
      this['$setVerticalAlign'](ab5v);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), _ikvb[H[101]]['$setVerticalAlign'] = function (avb_ik) {
    return this['$verticalAlign'] != avb_ik && (this['$verticalAlign'] = avb_ik, this['$invalidateContentBounds'](), !0x0);
  }, _ikvb[H[101]]['$updateRenderNode'] = function () {
    var l0tu4p = this,
        ba3_ik = this['$getTextLines'](),
        newi3 = ba3_ik[H[50]];if (0x0 != newi3) {
      var roz891 = [],
          ainbe = this['$textLinesWidth'],
          c9oz81 = l0tu4p['$font'],
          we3nbi;lu0e[H[413]] || (we3nbi = this['$renderNode'], c9oz81['$texture'] && (we3nbi[H[77]] = c9oz81['$texture']['$bitmapData']), we3nbi[H[641]] = l0tu4p['$smoothing']);var r19o = c9oz81[H[1449]](),
          zco18 = Math[H[496]](r19o * _ikvb[H[1462]]),
          w3ib = !isNaN(l0tu4p['$textFieldHeight']),
          v5k_b = l0tu4p['$textWidth'],
          v$5jd = l0tu4p['$textFieldWidth'],
          o1zr98 = l0tu4p['$textFieldHeight'],
          zo981 = l0tu4p['$textAlign'],
          myq$d = this['$textOffsetY'] + this['$textStartY'],
          a3en = this['$lineHeights'];for (var via_bk = 0x0; via_bk < newi3; via_bk++) {
        var pu4t6r = a3en[via_bk];if (w3ib && 0x0 < via_bk && o1zr98 < myq$d + pu4t6r) break;var ulxp = ba3_ik[via_bk],
            nebiw = ulxp[H[50]],
            webn3 = this['$textOffsetX'],
            djmq;zo981 != lu0e[H[1463]][H[1464]] && (djmq = v5k_b < v$5jd ? v$5jd : v5k_b, zo981 == lu0e[H[1463]][H[1465]] ? webn3 += djmq - ainbe[via_bk] : zo981 == lu0e[H[1463]][H[1466]] && (webn3 += Math[H[497]]((djmq - ainbe[via_bk]) / 0x2)));for (var bikav_ = 0x0; bikav_ < nebiw; bikav_++) {
          var w3xlen = ulxp[H[821]](bikav_),
              kb3ian = c9oz81[H[337]](w3xlen),
              bk_a3,
              l40wux;kb3ian ? (bk_a3 = kb3ian['$bitmapWidth'], l40wux = kb3ian['$bitmapHeight'], lu0e[H[413]] ? roz891[H[95]](kb3ian['$bitmapX'], kb3ian['$bitmapY'], bk_a3, l40wux, webn3 + kb3ian['$offsetX'], myq$d + kb3ian['$offsetY'], kb3ian['$getScaleBitmapWidth'](), kb3ian['$getScaleBitmapHeight'](), kb3ian['$sourceWidth'], kb3ian['$sourceHeight']) : (we3nbi[H[1124]] = kb3ian['$sourceWidth'], we3nbi[H[1125]] = kb3ian['$sourceHeight'], we3nbi[H[1126]](kb3ian['$bitmapX'], kb3ian['$bitmapY'], bk_a3, l40wux, webn3 + kb3ian['$offsetX'], myq$d + kb3ian['$offsetY'], kb3ian['$getScaleBitmapWidth'](), kb3ian['$getScaleBitmapHeight']())), webn3 += (c9oz81[H[1448]](w3xlen, H[1457]) || kb3ian['$getTextureWidth']()) + l0tu4p['$letterSpacing']) : '\x20' == w3xlen ? webn3 += zco18 : lu0e['$warn'](0x416, w3xlen);
        }myq$d += pu4t6r + l0tu4p['$lineSpacing'];
      }lu0e[H[413]] && (l0tu4p['$nativeDisplayObject'][H[1467]](l0tu4p['$nativeDisplayObject']['id'], c9oz81['$texture'], roz891), r19o = l0tu4p['$getContentBounds'](), l0tu4p['$nativeDisplayObject'][H[642]](r19o[H[446]]), l0tu4p['$nativeDisplayObject'][H[643]](r19o[H[447]]));
    } else lu0e[H[413]] && l0tu4p['$font'] && (l0tu4p['$nativeDisplayObject'][H[1467]](l0tu4p['$nativeDisplayObject']['id'], l0tu4p['$font']['$texture'], []), l0tu4p['$nativeDisplayObject'][H[642]](0x0), l0tu4p['$nativeDisplayObject'][H[643]](0x0));
  }, _ikvb[H[101]]['$measureContentBounds'] = function (dvj5s$) {
    0x0 == this['$getTextLines']()[H[50]] ? dvj5s$[H[486]]() : dvj5s$[H[433]](this['$textOffsetX'] + this['$textStartX'], this['$textOffsetY'] + this['$textStartY'], this['$textWidth'] - this['$textOffsetX'], this['$textHeight'] - this['$textOffsetY']);
  }, Object[H[107]](_ikvb[H[101]], H[1468], { 'get': function () {
      return this['$getTextLines'](), this['$textWidth'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](_ikvb[H[101]], H[1469], { 'get': function () {
      return this['$getTextLines'](), this['$textHeight'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), _ikvb[H[101]]['$getTextLines'] = function () {
    var v_ai = this;if (!v_ai['$textLinesChanged']) return v_ai[H[1470]];var c89o1z = [];v_ai[H[1470]] = c89o1z;var wenib = [];v_ai['$textLinesWidth'] = wenib, v_ai['$textLinesChanged'] = !0x1;var jav_5 = [];if (v_ai['$lineHeights'] = jav_5, !v_ai['$text'] || !v_ai['$font']) return v_ai['$textWidth'] = 0x0, v_ai['$textHeight'] = 0x0, c89o1z;var _abv5 = v_ai['$lineSpacing'],
        ygq7m = v_ai['$letterSpacing'],
        hz12o = 0x0,
        j5$ = 0x0,
        wnx3ie = !isNaN(v_ai['$textFieldWidth']),
        oz1h2c = v_ai['$textFieldWidth'],
        ptl04u = v_ai['$textFieldHeight'],
        t0l4u = v_ai['$font'],
        sdq$jm = t0l4u[H[1449]](),
        yds = Math[H[496]](sdq$jm * _ikvb[H[1462]]),
        _bakvi = v_ai['$text'][H[22]](/(?:\r\n|\r|\n)/),
        $mqgd = _bakvi[H[50]],
        o81z9c,
        zohc18,
        xnelw,
        iae3n;for (var tr469 = 0x0; tr469 < $mqgd; tr469++) {
      var qy7m$g = _bakvi[tr469],
          ptr946 = qy7m$g[H[50]];zohc18 = !(o81z9c = !(iae3n = xnelw = 0x0));for (var lu04xp = 0x0; lu04xp < ptr946; lu04xp++) {
        o81z9c || (iae3n += ygq7m);var k3ai = qy7m$g[H[821]](lu04xp),
            z21cho = void 0x0,
            akivb = void 0x0,
            akvb5 = t0l4u[H[337]](k3ai);if (akvb5) z21cho = akvb5['$getTextureWidth'](), akivb = akvb5['$getTextureHeight'](), akvb5['$offsetX'], akvb5['$offsetY'];else {
          if ('\x20' != k3ai) {
            lu0e['$warn'](0x416, k3ai), o81z9c = o81z9c && !0x1;continue;
          }z21cho = yds, akivb = sdq$jm;
        }if (o81z9c = o81z9c && !0x1, wnx3ie && 0x0 < lu04xp && oz1h2c < iae3n + z21cho) {
          if (!x0wne(qy7m$g[H[294]](0x0, lu04xp))) break;ptr946 = (qy7m$g = qy7m$g[H[294]](lu04xp))[H[50]], iae3n = (lu04xp = 0x0) != ptr946 - 0x1 && t0l4u[H[1448]](k3ai, H[1457]) || z21cho, xnelw = akivb;
        } else iae3n += lu04xp != ptr946 - 0x1 && t0l4u[H[1448]](k3ai, H[1457]) || z21cho, xnelw = Math[H[187]](akivb, xnelw);
      }if (ptl04u && 0x0 < tr469 && ptl04u < j5$) break;if (zohc18 = !0x0, !x0wne(qy7m$g)) break;
    }function x0wne(ul4xp0) {
      return !(ptl04u && 0x0 < c89o1z[H[50]] && ptl04u < j5$) && (j5$ += xnelw + _abv5, o81z9c || zohc18 || (iae3n -= ygq7m), c89o1z[H[95]](ul4xp0), jav_5[H[95]](xnelw), wenib[H[95]](iae3n), hz12o = Math[H[187]](iae3n, hz12o), 0x1);
    }var ik3nb;return j5$ -= _abv5, v_ai['$textWidth'] = hz12o, v_ai['$textHeight'] = j5$, this['$textOffsetX'] = 0x0, this['$textOffsetY'] = 0x0, this['$textStartX'] = 0x0, this['$textStartY'] = 0x0, hz12o < oz1h2c && ((ik3nb = v_ai['$textAlign']) == lu0e[H[1463]][H[1465]] ? this['$textStartX'] = oz1h2c - hz12o : ik3nb == lu0e[H[1463]][H[1466]] && (this['$textStartX'] = Math[H[497]]((oz1h2c - hz12o) / 0x2))), j5$ < ptl04u && ((ik3nb = v_ai['$verticalAlign']) == lu0e[H[1471]][H[1472]] ? this['$textStartY'] = ptl04u - j5$ : ik3nb == lu0e[H[1471]][H[1473]] && (this['$textStartY'] = Math[H[497]]((ptl04u - j5$) / 0x2))), c89o1z;
  }, _ikvb[H[1462]] = 0.33, _ikvb);function _ikvb() {
    var nbaki = mq$[H[268]](this) || this;return nbaki['$smoothing'] = lu0e[H[652]][H[650]], nbaki['$text'] = '', nbaki['$textFieldWidth'] = NaN, nbaki['$textLinesChanged'] = !0x1, nbaki['$textFieldHeight'] = NaN, nbaki['$font'] = null, nbaki['$fontStringChanged'] = !0x1, nbaki['$lineSpacing'] = 0x0, nbaki['$letterSpacing'] = 0x0, nbaki['$textAlign'] = lu0e[H[1463]][H[1464]], nbaki['$verticalAlign'] = lu0e[H[1471]][H[1474]], nbaki['$textWidth'] = NaN, nbaki['$textHeight'] = NaN, nbaki['$textOffsetX'] = 0x0, nbaki['$textOffsetY'] = 0x0, nbaki['$textStartX'] = 0x0, nbaki['$textStartY'] = 0x0, nbaki[H[1470]] = [], nbaki['$lineHeights'] = [], lu0e[H[413]] || (nbaki['$renderNode'] = new lu0e[H[246]][H[645]]()), nbaki;
  }var mq$;lu0e[H[1475]] = sqd$j, fdsqym(sqd$j[H[101]], H[1476]);
}(fm$sjd = fm$sjd || {}), function (sv5j_d) {
  var xwu4 = (ibn[H[1464]] = H[958], ibn[H[1465]] = H[956], ibn[H[1466]] = H[1477], ibn[H[1478]] = H[1479], ibn[H[1480]] = H[1481], ibn);function ibn() {}sv5j_d[H[1463]] = xwu4, fdsqym(xwu4[H[101]], H[1482]);
}(fm$sjd = fm$sjd || {}), function ($qjd) {
  var ew3 = (u0xl4w[H[101]][H[1483]] = function () {
    this[H[1484]] = [], this[H[1484]][H[95]]([/&lt;/g, '<']), this[H[1484]][H[95]]([/&gt;/g, '>']), this[H[1484]][H[95]]([/&amp;/g, '&']), this[H[1484]][H[95]]([/&quot;/g, '\x22']), this[H[1484]][H[95]]([/&apos;/g, '\x27']);
  }, u0xl4w[H[101]][H[1485]] = function (mj5$s) {
    for (var dy$g = 0x0; dy$g < this[H[1484]][H[50]]; dy$g++) {
      var j5_vd = this[H[1484]][dy$g][0x0],
          g$yqdm = this[H[1484]][dy$g][0x1];mj5$s = mj5$s[H[43]](j5_vd, g$yqdm);
    }return mj5$s;
  }, u0xl4w[H[101]][H[284]] = function (t4r6) {
    this[H[1486]] = [], this[H[1487]] = [];var gm$dyq = 0x0,
        a3nei = t4r6[H[50]];for (; gm$dyq < a3nei;) {
      var z98r1o = t4r6[H[4]]('<', gm$dyq),
          _ikvba;gm$dyq = z98r1o < 0x0 ? (this[H[1488]](t4r6[H[294]](gm$dyq)), a3nei) : (this[H[1488]](t4r6[H[294]](gm$dyq, z98r1o)), -0x1 == (_ikvba = t4r6[H[4]]('>', z98r1o)) ? ($qjd['$error'](0x40e), _ikvba = z98r1o) : '/' == t4r6[H[821]](z98r1o + 0x1) ? this[H[1486]][H[53]]() : this[H[1489]](t4r6[H[294]](z98r1o + 0x1, _ikvba)), _ikvba + 0x1);
    }return this[H[1487]];
  }, u0xl4w[H[101]][H[1490]] = function (sd$5v) {
    return this[H[284]](sd$5v);
  }, u0xl4w[H[101]][H[1488]] = function (_bkvi) {
    '' != _bkvi && (_bkvi = this[H[1485]](_bkvi), 0x0 < this[H[1486]][H[50]] ? this[H[1487]][H[95]]({ 'text': _bkvi, 'style': this[H[1486]][this[H[1486]][H[50]] - 0x1] }) : this[H[1487]][H[95]]({ 'text': _bkvi }));
  }, u0xl4w[H[101]][H[1491]] = function (s5k_jv) {
    var kvba5 = {},
        zr16;if ('i' == (s5k_jv = s5k_jv[H[1492]]())[H[821]](0x0) || 'b' == s5k_jv[H[821]](0x0) || 'u' == s5k_jv[H[821]](0x0)) this[H[1493]](kvba5, s5k_jv, H[1494]);else {
      if (zr16 = s5k_jv[H[293]](/^(font|a)\s/)) {
        s5k_jv = s5k_jv[H[294]](zr16[0x0][H[50]])[H[1492]]();var n3eabi = 0x0,
            _a5kbv;for (; _a5kbv = s5k_jv[H[293]](this[H[1495]]());) {
          var b3_ = _a5kbv[0x0],
              e3inbw = '';'\x22' == (s5k_jv = s5k_jv[H[294]](b3_[H[50]])[H[1492]]())[H[821]](0x0) ? (n3eabi = s5k_jv[H[4]]('\x22', 0x1), e3inbw = s5k_jv[H[294]](0x1, n3eabi), n3eabi += 0x1) : '\x27' == s5k_jv[H[821]](0x0) ? (n3eabi = s5k_jv[H[4]]('\x27', 0x1), e3inbw = s5k_jv[H[294]](0x1, n3eabi), n3eabi += 0x1) : n3eabi = (e3inbw = s5k_jv[H[293]](/(\S)+/)[0x0])[H[50]], this[H[1493]](kvba5, b3_[H[294]](0x0, b3_[H[50]] - 0x1)[H[1492]](), e3inbw[H[1492]]()), s5k_jv = s5k_jv[H[294]](n3eabi)[H[1492]]();
        }
      }
    }return kvba5;
  }, u0xl4w[H[101]][H[1495]] = function () {
    return (/^(color|textcolor|strokecolor|stroke|b|bold|i|italic|u|size|fontfamily|href|target)(\s)*=/
    );
  }, u0xl4w[H[101]][H[1493]] = function (wln3x, ebai3n, w3nieb) {
    switch (ebai3n[H[1496]]()) {case H[675]:case H[1497]:
        w3nieb = w3nieb[H[43]](/#/, '0x'), wln3x[H[1333]] = parseInt(w3nieb);break;case H[1498]:
        w3nieb = w3nieb[H[43]](/#/, '0x'), wln3x[H[1334]] = parseInt(w3nieb);break;case H[1336]:
        wln3x[H[1336]] = parseInt(w3nieb);break;case 'b':case H[1337]:
        wln3x[H[1337]] = H[1494] == w3nieb;break;case 'u':
        wln3x[H[1499]] = H[1494] == w3nieb;break;case 'i':case H[1338]:
        wln3x[H[1338]] = H[1494] == w3nieb;break;case H[1335]:
        wln3x[H[1335]] = parseInt(w3nieb);break;case H[1500]:
        wln3x[H[1339]] = w3nieb;break;case H[1501]:
        wln3x[H[1501]] = this[H[1485]](w3nieb);break;case H[403]:
        wln3x[H[403]] = this[H[1485]](w3nieb);}
  }, u0xl4w[H[101]][H[1489]] = function (vjs5_) {
    var r986p = this[H[1491]](vjs5_);if (0x0 == this[H[1486]][H[50]]) this[H[1486]][H[95]](r986p);else {
      var bvi_a = this[H[1486]][this[H[1486]][H[50]] - 0x1];for (var s$vd5j in bvi_a) null == r986p[s$vd5j] && (r986p[s$vd5j] = bvi_a[s$vd5j]);this[H[1486]][H[95]](r986p);
    }
  }, u0xl4w);function u0xl4w() {
    this[H[1484]] = [], this[H[1487]] = [], this[H[1483]]();
  }$qjd[H[1502]] = ew3, fdsqym(ew3[H[101]], H[1503]);
}(fm$sjd = fm$sjd || {}), function (bia_3) {
  var mdsy$ = (tlu = bia_3[H[397]], fmy$d(r19z8, tlu), r19z8[H[101]][H[117]] = function (e3lxnw) {
    this[H[1504]] = e3lxnw, this[H[1505]] = new bia_3[H[1506]](), this[H[1505]]['$setTextField'](this[H[1504]]);
  }, r19z8[H[101]][H[1507]] = function () {
    this[H[1508]] || (this[H[1504]]['$inputEnabled'] || (this[H[1504]]['$touchEnabled'] = !0x0), this[H[1509]] = this[H[1504]][H[427]], this[H[1505]]['$addToStage'](), this[H[1505]][H[79]](H[1510], this[H[1511]], this), this[H[1504]][H[79]](bia_3[H[861]][H[851]], this[H[1512]], this), this[H[1505]][H[79]](H[488], this[H[1513]], this), this[H[1505]][H[79]](H[1514], this[H[1515]], this), this[H[1508]] = !0x0);
  }, r19z8[H[101]][H[1516]] = function () {
    this[H[1508]] && (this[H[1504]]['$inputEnabled'] || (this[H[1504]]['$touchEnabled'] = !0x1), this[H[1505]]['$removeFromStage'](), this[H[1505]][H[250]](H[1510], this[H[1511]], this), this[H[1504]][H[250]](bia_3[H[861]][H[851]], this[H[1512]], this), this[H[1509]][H[250]](bia_3[H[861]][H[851]], this[H[1517]], this), this[H[1505]][H[250]](H[488], this[H[1513]], this), this[H[1505]][H[250]](H[1514], this[H[1515]], this), this[H[1508]] = !0x1);
  }, r19z8[H[101]][H[1518]] = function () {
    return this[H[1505]]['$getText']();
  }, r19z8[H[101]][H[1519]] = function (yqsdm$) {
    this[H[1505]]['$setText'](yqsdm$);
  }, r19z8[H[101]][H[1520]] = function (vsk_5) {
    this[H[1505]]['$setColor'](vsk_5);
  }, r19z8[H[101]][H[1515]] = function (j_vka5) {
    this[H[1521]] || (this[H[1521]] = !0x0, j_vka5[H[1522]] || this[H[1504]]['$setIsTyping'](!0x0), this[H[1504]][H[362]](new bia_3[H[763]](bia_3[H[763]][H[571]], !0x0)));
  }, r19z8[H[101]][H[1513]] = function (n3) {
    this[H[1521]] && (this[H[1521]] = !0x1, this[H[1509]][H[250]](bia_3[H[861]][H[851]], this[H[1517]], this), this[H[1504]]['$setIsTyping'](!0x1), this[H[1505]]['$onBlur'](), this[H[1504]][H[362]](new bia_3[H[763]](bia_3[H[763]][H[573]], !0x0)));
  }, r19z8[H[101]][H[1512]] = function (rz918) {
    this['$onFocus']();
  }, r19z8[H[101]]['$onFocus'] = function () {
    var oz189r = this;this[H[1504]][H[454]] && (this[H[1521]] || (this[H[1509]][H[250]](bia_3[H[861]][H[851]], this[H[1517]], this), bia_3[H[269]](function () {
      oz189r[H[1509]][H[79]](bia_3[H[861]][H[851]], oz189r[H[1517]], oz189r);
    }, this), bia_3[H[413]] && this[H[1505]]['$setText'](this[H[1504]]['$TextField'][0xd]), this[H[1505]]['$show']()));
  }, r19z8[H[101]][H[1517]] = function (enwi3) {
    enwi3['$target'] != this[H[1504]] && this[H[1505]]['$hide']();
  }, r19z8[H[101]][H[1511]] = function (r6t9p8) {
    var ewulx0 = this[H[1504]]['$TextField'],
        inex = this[H[1505]]['$getText'](),
        r649p = !0x1,
        o1c2hz,
        oz8r91;null != ewulx0[0x23] && (o1c2hz = new RegExp('[' + ewulx0[0x23] + ']', 'g'), inex = (oz8r91 = inex[H[293]](o1c2hz)) ? oz8r91[H[54]]('') : '', r649p = !0x0), null != ewulx0[0x24] && (o1c2hz = new RegExp('[^' + ewulx0[0x24] + ']', 'g'), inex = (oz8r91 = inex[H[293]](o1c2hz)) ? oz8r91[H[54]]('') : '', r649p = !0x0), r649p && this[H[1505]]['$getText']() != inex && this[H[1505]]['$setText'](inex), this[H[1523]](), this[H[1504]][H[362]](new bia_3[H[80]](bia_3[H[80]][H[565]], !0x0));
  }, r19z8[H[101]][H[1523]] = function () {
    this[H[1504]]['$setBaseText'](this[H[1505]]['$getText']());
  }, r19z8[H[101]][H[1524]] = function () {
    this[H[1505]]['$removeFromStage']();
  }, r19z8[H[101]][H[1525]] = function () {
    !this[H[1504]]['$visible'] && this[H[1505]] && this[H[1524]]();
  }, r19z8[H[101]][H[1526]] = function () {
    if (this[H[1521]]) return this[H[1505]]['$resetStageText'](), void this[H[1525]]();this[H[1505]]['$setText'](this[H[1504]]['$TextField'][0xd]), this[H[1505]]['$resetStageText'](), this[H[1525]]();
  }, r19z8);function r19z8() {
    var qsy = tlu[H[268]](this) || this;return qsy[H[1508]] = !0x1, qsy[H[1504]] = null, qsy[H[1521]] = !0x1, qsy;
  }var tlu;bia_3[H[1527]] = mdsy$, fdsqym(mdsy$[H[101]], H[1528]);
}(fm$sjd = fm$sjd || {}), function (xeiw) {
  var ieb3nw = new RegExp(H[1529]);function $dj(bik3na, oh81cz, u0p4lt) {
    var wienb = null == (u0p4lt = u0p4lt || {})[H[1338]] ? oh81cz[0x10] : u0p4lt[H[1338]],
        iba_3k = null == u0p4lt[H[1337]] ? oh81cz[0xf] : u0p4lt[H[1337]],
        aj5v_ = null == u0p4lt[H[1335]] ? oh81cz[0x0] : u0p4lt[H[1335]];return oh81cz = u0p4lt[H[1339]] || oh81cz[0x8] || _jvks[H[1530]], xeiw[H[246]][H[1531]](bik3na, oh81cz, aj5v_, iba_3k, wienb);
  }var _jvks = (e3iwnx = xeiw[H[528]], fmy$d(nkia, e3iwnx), nkia[H[101]][H[424]] = function () {
    this['$nativeDisplayObject'] = new egret_native[H[414]](0x7);
  }, nkia[H[101]][H[1532]] = function () {
    return this['$TextField'][0x18] == xeiw[H[1533]][H[1534]];
  }, nkia[H[101]]['$setTouchEnabled'] = function (l4u0x) {
    e3iwnx[H[101]]['$setTouchEnabled'][H[268]](this, l4u0x), this[H[1532]]() && (this['$inputEnabled'] = !0x0);
  }, Object[H[107]](nkia[H[101]], H[1339], { 'get': function () {
      return this['$TextField'][0x8];
    }, 'set': function (y$dg) {
      this['$setFontFamily'](y$dg);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setFontFamily'] = function (pr946) {
    var ptr49 = this['$TextField'];return ptr49[0x8] != pr946 && (ptr49[0x8] = pr946, this[H[1535]](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1536]](pr946), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1335], { 'get': function () {
      return this['$TextField'][0x0];
    }, 'set': function (upt) {
      this['$setSize'](upt);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setSize'] = function (wnlx3e) {
    var _aibvk = this['$TextField'];return _aibvk[0x0] != wnlx3e && (_aibvk[0x0] = wnlx3e, this[H[1535]](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1537]](wnlx3e), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1337], { 'get': function () {
      return this['$TextField'][0xf];
    }, 'set': function (lex0n) {
      this['$setBold'](lex0n);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setBold'] = function (tr6p94) {
    var ieanb3 = this['$TextField'];return tr6p94 != ieanb3[0xf] && (ieanb3[0xf] = tr6p94, this[H[1535]](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1538]](tr6p94), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1338], { 'get': function () {
      return this['$TextField'][0x10];
    }, 'set': function (v5jsd_) {
      this['$setItalic'](v5jsd_);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setItalic'] = function (xlw4u) {
    var s5_dv = this['$TextField'];return xlw4u != s5_dv[0x10] && (s5_dv[0x10] = xlw4u, this[H[1535]](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1539]](xlw4u), !0x0);
  }, nkia[H[101]][H[1535]] = function () {
    this['$TextField'][0x11] = !0x0, this['$invalidateTextField']();
  }, Object[H[107]](nkia[H[101]], H[1385], { 'get': function () {
      return this['$TextField'][0x9];
    }, 'set': function (d$smj) {
      this['$setTextAlign'](d$smj);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setTextAlign'] = function (o9rz18) {
    var sj5_d = this['$TextField'];return sj5_d[0x9] != o9rz18 && (sj5_d[0x9] = o9rz18, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1540]](o9rz18), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1461], { 'get': function () {
      return this['$TextField'][0xa];
    }, 'set': function (ea3bni) {
      this['$setVerticalAlign'](ea3bni);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setVerticalAlign'] = function (iba3ne) {
    var nibk3a = this['$TextField'];return nibk3a[0xa] != iba3ne && (nibk3a[0xa] = iba3ne, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1541]](iba3ne), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1459], { 'get': function () {
      return this['$TextField'][0x1];
    }, 'set': function (ymgd$q) {
      this['$setLineSpacing'](ymgd$q);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setLineSpacing'] = function (_sjkv5) {
    var vdsj5_ = this['$TextField'];return vdsj5_[0x1] != _sjkv5 && (vdsj5_[0x1] = _sjkv5, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1542]](_sjkv5), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1333], { 'get': function () {
      return this['$TextField'][0x2];
    }, 'set': function (tlp) {
      this['$setTextColor'](tlp);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setTextColor'] = function (avi_bk) {
    var u0xe = this['$TextField'];return u0xe[0x2] != avi_bk && (u0xe[0x2] = avi_bk, this[H[1543]] && this[H[1543]][H[1520]](this['$TextField'][0x2]), this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1544]](avi_bk), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1545], { 'get': function () {
      return this['$TextField'][0x13];
    }, 'set': function (jsd5v) {
      this['$setWordWrap'](jsd5v);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setWordWrap'] = function (iba3n) {
    var rt869 = this['$TextField'];iba3n != rt869[0x13] && (rt869[0x14] || (rt869[0x13] = iba3n, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1546]](iba3n)));
  }, Object[H[107]](nkia[H[101]], H[146], { 'get': function () {
      return this['$TextField'][0x18];
    }, 'set': function (sdjv5_) {
      this['$setType'](sdjv5_);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setType'] = function (e3ainb) {
    var lpxu = this['$TextField'];return lpxu[0x18] != e3ainb && (lpxu[0x18] = e3ainb, xeiw[H[413]] && this['$nativeDisplayObject'][H[1547]](e3ainb), e3ainb == xeiw[H[1533]][H[1534]] ? (isNaN(lpxu[0x3]) && this['$setWidth'](0x64), isNaN(lpxu[0x4]) && this['$setHeight'](0x1e), this['$setTouchEnabled'](!0x0), null == this[H[1543]] && (this[H[1543]] = new xeiw[H[1527]]()), this[H[1543]][H[117]](this), this['$invalidateTextField'](), this['$stage'] && this[H[1543]][H[1507]]()) : (this[H[1543]] && (this[H[1543]][H[1516]](), this[H[1543]] = null), this['$setTouchEnabled'](!0x1)), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1548], { 'get': function () {
      return this['$TextField'][0x25];
    }, 'set': function (_kva5j) {
      this['$TextField'][0x25] != _kva5j && (this['$TextField'][0x25] = _kva5j, xeiw[H[413]] && this['$nativeDisplayObject'][H[1549]](_kva5j));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](nkia[H[101]], H[91], { 'get': function () {
      return this['$getText']();
    }, 'set': function (vk5ja_) {
      this['$setText'](vk5ja_);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$getText'] = function () {
    return this['$TextField'][0x18] == xeiw[H[1533]][H[1534]] ? this[H[1543]][H[1518]]() : this['$TextField'][0xd];
  }, nkia[H[101]]['$setBaseText'] = function ($y7mg) {
    $y7mg = null == $y7mg ? '' : $y7mg[H[390]](), this[H[1550]] = !0x1;var av5jk_ = this['$TextField'];if (av5jk_[0xd] == $y7mg) return !0x1;this['$invalidateTextField'](), av5jk_[0xd] = $y7mg;var xleu0 = '';return xleu0 = av5jk_[0x14] ? this[H[1551]]($y7mg) : $y7mg, xeiw[H[413]] && this['$nativeDisplayObject'][H[1552]](xleu0), this[H[1553]]([{ 'text': xleu0 }]), !0x0;
  }, nkia[H[101]]['$setText'] = function (lpu40t) {
    return lpu40t = this['$setBaseText'](lpu40t = null == lpu40t ? '' : lpu40t), (this[H[1543]] && this[H[1543]][H[1519]](this['$TextField'][0xd]), lpu40t);
  }, Object[H[107]](nkia[H[101]], H[1554], { 'get': function () {
      return this['$TextField'][0x14];
    }, 'set': function (mgd$) {
      this['$setDisplayAsPassword'](mgd$);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setDisplayAsPassword'] = function (enb3w) {
    var zho12 = this['$TextField'];if (zho12[0x14] == enb3w) return !0x1;zho12[0x14] = enb3w, this['$invalidateTextField']();var w0xlu4 = '';return w0xlu4 = enb3w ? this[H[1551]](zho12[0xd]) : zho12[0xd], xeiw[H[413]] && this['$nativeDisplayObject'][H[1552]](w0xlu4), this[H[1553]]([{ 'text': w0xlu4 }]), !0x0;
  }, Object[H[107]](nkia[H[101]], H[1334], { 'get': function () {
      return this['$TextField'][0x19];
    }, 'set': function (b5ak_) {
      this['$setStrokeColor'](b5ak_);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setStrokeColor'] = function (up04l) {
    var dy$mgq = this['$TextField'];return dy$mgq[0x19] != up04l && (this['$invalidateTextField'](), dy$mgq[0x19] = up04l, xeiw[H[413]] && this['$nativeDisplayObject'][H[1555]](up04l), dy$mgq[0x1a] = xeiw[H[1390]](up04l), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1336], { 'get': function () {
      return this['$TextField'][0x1b];
    }, 'set': function (avb5k) {
      this['$setStroke'](avb5k);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setStroke'] = function ($yms) {
    return this['$TextField'][0x1b] != $yms && (this['$invalidateTextField'](), this['$TextField'][0x1b] = $yms, xeiw[H[413]] && this['$nativeDisplayObject'][H[1556]]($yms), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1557], { 'get': function () {
      return this['$TextField'][0x15];
    }, 'set': function (xwni3e) {
      this['$setMaxChars'](xwni3e);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setMaxChars'] = function (jmsdq$) {
    return this['$TextField'][0x15] != jmsdq$ && (this['$TextField'][0x15] = jmsdq$, xeiw[H[413]] && this['$nativeDisplayObject'][H[1558]](jmsdq$), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1559], { 'get': function () {
      return Math[H[501]](Math[H[187]](this['$TextField'][0x1c], 0x1), this[H[1560]]);
    }, 'set': function (bia3ne) {
      (bia3ne = Math[H[187]](bia3ne, 0x1)) != this['$TextField'][0x1c] && (this['$TextField'][0x1c] = bia3ne, xeiw[H[413]] && this['$nativeDisplayObject'][H[1561]](bia3ne), this['$invalidateTextField']());
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](nkia[H[101]], H[1560], { 'get': function () {
      return this['$getLinesArr'](), Math[H[187]](this['$TextField'][0x1d] - xeiw[H[1562]]['$getScrollNum'](this) + 0x1, 0x1);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](nkia[H[101]], H[1563], { 'get': function () {
      return 0x0;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](nkia[H[101]], H[1564], { 'get': function () {
      return 0x0;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](nkia[H[101]], H[1565], { 'get': function () {
      return 0x0;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setSelection'] = function (lewux, vibk_) {
    return !0x1;
  }, nkia[H[101]]['$getLineHeight'] = function () {
    return this['$TextField'][0x1] + this['$TextField'][0x0];
  }, Object[H[107]](nkia[H[101]], H[1566], { 'get': function () {
      return this['$getLinesArr'](), this['$TextField'][0x1d];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](nkia[H[101]], H[1567], { 'get': function () {
      return this['$TextField'][0x1e];
    }, 'set': function (k_iavb) {
      this['$setMultiline'](k_iavb);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setMultiline'] = function (zhc1) {
    return this['$TextField'][0x1e] != zhc1 && (this['$TextField'][0x1e] = zhc1, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1568]](zhc1), !0x0);
  }, Object[H[107]](nkia[H[101]], H[1569], { 'get': function () {
      var lux0ew = this['$TextField'],
          sjv_d5 = null;return null != lux0ew[0x23] && (sjv_d5 = lux0ew[0x23]), null != lux0ew[0x24] && (null == sjv_d5 && (sjv_d5 = ''), sjv_d5 += '^' + lux0ew[0x24]), sjv_d5;
    }, 'set': function (uxw04) {
      var p04tu = this['$TextField'];if (null == uxw04) p04tu[0x23] = null, p04tu[0x24] = null;else {
        var ainkb = -0x1;for (; ainkb < uxw04[H[50]] && 0x0 != (ainkb = uxw04[H[4]]('^', ainkb)) && 0x0 < ainkb && '\x5c' == uxw04[H[821]](ainkb - 0x1);) ainkb++;0x0 == ainkb ? (p04tu[0x23] = null, p04tu[0x24] = uxw04[H[294]](ainkb + 0x1)) : 0x0 < ainkb ? (p04tu[0x23] = uxw04[H[294]](0x0, ainkb), p04tu[0x24] = uxw04[H[294]](ainkb + 0x1)) : (p04tu[0x23] = uxw04, p04tu[0x24] = null);
      }
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setWidth'] = function (mqyds$) {
    xeiw[H[413]] && this['$nativeDisplayObject'][H[1570]](mqyds$);var vb_k5a = this['$TextField'];if (isNaN(mqyds$)) {
      if (isNaN(vb_k5a[0x3])) return !0x1;vb_k5a[0x3] = NaN;
    } else {
      if (vb_k5a[0x3] == mqyds$) return !0x1;vb_k5a[0x3] = mqyds$;
    }return !((mqyds$ = +mqyds$) < 0x0) && (this['$invalidateTextField'](), !0x0);
  }, nkia[H[101]]['$setHeight'] = function (ni3eba) {
    xeiw[H[413]] && this['$nativeDisplayObject'][H[1571]](ni3eba);var r9p6t8 = this['$TextField'];if (isNaN(ni3eba)) {
      if (isNaN(r9p6t8[0x4])) return !0x1;r9p6t8[0x4] = NaN;
    } else {
      if (r9p6t8[0x4] == ni3eba) return !0x1;r9p6t8[0x4] = ni3eba;
    }return !((ni3eba = +ni3eba) < 0x0) && (this['$invalidateTextField'](), !0x0);
  }, nkia[H[101]]['$getWidth'] = function () {
    var x0uwe = this['$TextField'];return isNaN(x0uwe[0x3]) ? this['$getContentBounds']()[H[446]] : x0uwe[0x3];
  }, nkia[H[101]]['$getHeight'] = function () {
    var bi3ank = this['$TextField'];return isNaN(bi3ank[0x4]) ? this['$getContentBounds']()[H[447]] : bi3ank[0x4];
  }, Object[H[107]](nkia[H[101]], H[1572], { 'get': function () {
      return this['$TextField'][0x1f];
    }, 'set': function (xwul40) {
      this['$setBorder'](xwul40);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setBorder'] = function (av) {
    this['$TextField'][0x1f] != (av = !!av) && (this['$TextField'][0x1f] = av, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1573]](av));
  }, Object[H[107]](nkia[H[101]], H[1574], { 'get': function () {
      return this['$TextField'][0x20];
    }, 'set': function (syd$qm) {
      this['$setBorderColor'](syd$qm);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setBorderColor'] = function (zhc21o) {
    this['$TextField'][0x20] != (zhc21o = +zhc21o || 0x0) && (this['$TextField'][0x20] = zhc21o, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1575]](zhc21o));
  }, Object[H[107]](nkia[H[101]], H[1576], { 'get': function () {
      return this['$TextField'][0x21];
    }, 'set': function (elxw0n) {
      this['$setBackground'](elxw0n);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setBackground'] = function (r198z6) {
    this['$TextField'][0x21] != r198z6 && (this['$TextField'][0x21] = r198z6, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1577]](r198z6));
  }, Object[H[107]](nkia[H[101]], H[1578], { 'get': function () {
      return this['$TextField'][0x22];
    }, 'set': function (m7qgy$) {
      this['$setBackgroundColor'](m7qgy$);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]]['$setBackgroundColor'] = function (gym$d) {
    this['$TextField'][0x22] != gym$d && (this['$TextField'][0x22] = gym$d, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1579]](gym$d));
  }, nkia[H[101]][H[1580]] = function (pt04u6) {
    var bak_v5 = this['$graphicsNode'];bak_v5 && bak_v5[H[928]]();var ms$yd = this['$TextField'];if (ms$yd[0x21] || ms$yd[0x1f] || pt04u6 && 0x0 < pt04u6[H[50]]) {
      var r9t16;bak_v5 || (bak_v5 = this['$graphicsNode'] = new xeiw[H[246]][H[937]](), xeiw[H[413]] ? this['$renderNode'] = this[H[1581]] : ((r9t16 = new xeiw[H[246]][H[1310]]())[H[1309]](bak_v5), r9t16[H[1309]](this[H[1581]]), this['$renderNode'] = r9t16));var hcoz2 = void 0x0;if (ms$yd[0x21] && bak_v5[H[900]](ms$yd[0x22])[H[664]](0x0, 0x0, this['$getWidth'](), this['$getHeight']()), ms$yd[0x1f] && (hcoz2 = bak_v5[H[910]](0x1, ms$yd[0x20]))[H[664]](0x0, 0x0, this['$getWidth']() - 0x1, this['$getHeight']() - 0x1), pt04u6 && 0x0 < pt04u6[H[50]]) {
        var utl0p = ms$yd[0x2],
            l4xw0 = -0x1,
            lxewn = pt04u6[H[50]];for (var n0lwe = 0x0; n0lwe < lxewn; n0lwe += 0x4) {
          var jsd_ = pt04u6[n0lwe],
              gdm$q = pt04u6[n0lwe + 0x1],
              lp4t0 = pt04u6[n0lwe + 0x2],
              chz12o = pt04u6[n0lwe + 0x3] || utl0p;(hcoz2 = l4xw0 < 0x0 || l4xw0 != chz12o ? bak_v5[H[910]](0x2, l4xw0 = chz12o, 0x1, xeiw[H[726]][H[1582]]) : hcoz2)[H[660]](jsd_, gdm$q), hcoz2[H[661]](jsd_ + lp4t0, gdm$q);
        }
      }
    }bak_v5 && (ms$yd = this['$getRenderBounds'](), bak_v5['x'] = ms$yd['x'], bak_v5['y'] = ms$yd['y'], bak_v5[H[446]] = ms$yd[H[446]], bak_v5[H[447]] = ms$yd[H[447]], xeiw[H[61]][H[363]](ms$yd));
  }, nkia[H[101]][H[1583]] = function () {
    this[H[146]] == xeiw[H[1533]][H[1534]] && this['$stage'] && this[H[1543]]['$onFocus']();
  }, nkia[H[101]]['$onRemoveFromStage'] = function () {
    e3iwnx[H[101]]['$onRemoveFromStage'][H[268]](this), this[H[1584]](), this['$TextField'][0x18] == xeiw[H[1533]][H[1534]] && this[H[1543]][H[1516]](), this[H[1581]] && (this[H[1581]][H[550]](), xeiw[H[413]] && egret_native[H[414]][H[1585]](this));
  }, nkia[H[101]]['$onAddToStage'] = function (aneb, zhc1o) {
    e3iwnx[H[101]]['$onAddToStage'][H[268]](this, aneb, zhc1o), this[H[1586]](), this['$TextField'][0x18] == xeiw[H[1533]][H[1534]] && this[H[1543]][H[1507]]();
  }, nkia[H[101]]['$invalidateTextField'] = function () {
    var qgd$ = this,
        v5ab_k;qgd$['$renderDirty'] = !0x0, qgd$['$TextField'][0x12] = !0x0, qgd$['$TextField'][0x26] = !0x0, xeiw[H[413]] || ((v5ab_k = qgd$['$parent']) && !v5ab_k['$cacheDirty'] && (v5ab_k['$cacheDirty'] = !0x0, v5ab_k['$cacheDirtyUp']()), (qgd$ = qgd$['$maskedObject']) && !qgd$['$cacheDirty'] && (qgd$['$cacheDirty'] = !0x0, qgd$['$cacheDirtyUp']()));
  }, nkia[H[101]]['$getRenderBounds'] = function () {
    var enw0xl = this['$getContentBounds'](),
        zor18 = xeiw[H[61]][H[357]]();return zor18[H[432]](enw0xl), this['$TextField'][0x1f] && (zor18[H[446]] += 0x2, zor18[H[447]] += 0x2), enw0xl = 0x2 * this['$TextField'][0x1b], (0x0 < enw0xl && (zor18[H[446]] += 0x2 * enw0xl, zor18[H[447]] += 0x2 * enw0xl), zor18['x'] -= 0x2 + enw0xl, zor18['y'] -= 0x2 + enw0xl, zor18[H[446]] = Math[H[496]](zor18[H[446]]) + 0x4, zor18[H[447]] = Math[H[496]](zor18[H[447]]) + 0x4, zor18);
  }, nkia[H[101]]['$measureContentBounds'] = function ($v) {
    this['$getLinesArr']();var t9pr64 = 0x0,
        $gyq7m = 0x0;$gyq7m = xeiw[H[413]] ? (t9pr64 = egret_native[H[1587]](this['$nativeDisplayObject']['id']), egret_native[H[1588]](this['$nativeDisplayObject']['id'])) : (t9pr64 = isNaN(this['$TextField'][0x3]) ? this['$TextField'][0x5] : this['$TextField'][0x3], isNaN(this['$TextField'][0x4]) ? xeiw[H[1562]]['$getTextHeight'](this) : this['$TextField'][0x4]), $v[H[433]](0x0, 0x0, t9pr64, $gyq7m);
  }, nkia[H[101]]['$updateRenderNode'] = function () {
    if (this['$TextField'][0x18] == xeiw[H[1533]][H[1534]]) {
      if (this[H[1543]][H[1526]](), this['$isTyping']) return void this[H[1580]]();
    } else {
      if (0x0 == this['$TextField'][0x3]) {
        var c98o = this['$graphicsNode'];return void (c98o && c98o[H[928]]());
      }
    }var ho1z2 = this[H[1341]]();this[H[1580]](ho1z2), c98o = this['$getRenderBounds'](), ho1z2 = this[H[1581]], (ho1z2['x'] = c98o['x'], ho1z2['y'] = c98o['y'], ho1z2[H[446]] = Math[H[496]](c98o[H[446]]), ho1z2[H[447]] = Math[H[496]](c98o[H[447]]), xeiw[H[61]][H[363]](c98o));
  }, Object[H[107]](nkia[H[101]], H[1589], { 'get': function () {
      return this[H[1590]];
    }, 'set': function (sdvj) {
      this[H[1550]] = !0x0;var exi3w = '';null == sdvj && (sdvj = []);for (var co18zh = 0x0; co18zh < sdvj[H[50]]; co18zh++) exi3w += sdvj[co18zh][H[91]];this['$TextField'][0x14] ? this['$setBaseText'](exi3w) : (this['$TextField'][0xd] = exi3w, this[H[1553]](sdvj), xeiw[H[413]] && this['$nativeDisplayObject'][H[1591]](sdvj));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]][H[1551]] = function (z8r9o) {
    if (this['$TextField'][0x14]) {
      var pxul0 = '';for (var xweln0 = 0x0, _d5j = z8r9o[H[50]]; xweln0 < _d5j; xweln0++) switch (z8r9o[H[821]](xweln0)) {case '\x0a':
          pxul0 += '\x0a';break;case '\r':
          break;default:
          pxul0 += '*';}return pxul0;
    }return z8r9o;
  }, nkia[H[101]][H[1553]] = function (zo2c1) {
    this['$TextField'][0x12] = !0x0, this['$TextField'][0x26] = !0x0, this[H[1590]] = zo2c1, this['$invalidateTextField']();
  }, Object[H[107]](nkia[H[101]], H[1468], { 'get': function () {
      return this['$getLinesArr'](), xeiw[H[413]] ? egret_native[H[1592]](this['$nativeDisplayObject']['id']) : this['$TextField'][0x5];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](nkia[H[101]], H[1469], { 'get': function () {
      return this['$getLinesArr'](), xeiw[H[413]] ? egret_native[H[1593]](this['$nativeDisplayObject']['id']) : xeiw[H[1562]]['$getTextHeight'](this);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), nkia[H[101]][H[1594]] = function (m$ydg) {
    this[H[1595]]({ 'text': m$ydg });
  }, nkia[H[101]][H[1595]] = function (uprt6) {
    var kbi3a = this['$TextField'][0xd] + uprt6[H[91]];if (xeiw[H[413]]) return this[H[1590]][H[95]](uprt6), this['$TextField'][0xd] = kbi3a, this['$TextField'][0x12] = !0x0, this['$TextField'][0x26] = !0x0, void this['$nativeDisplayObject'][H[1591]](this[H[1590]]);this['$TextField'][0x14] ? this['$setBaseText'](kbi3a) : (this['$TextField'][0xd] = kbi3a, this[H[1590]][H[95]](uprt6), this[H[1553]](this[H[1590]]));
  }, nkia[H[101]]['$getLinesArr'] = function () {
    var ak5v_b = this['$TextField'];if (!xeiw[H[413]] || !ak5v_b[0x26]) return this['$getLinesArr2']();egret_native[H[476]](), ak5v_b[0x26] = !0x1;
  }, nkia[H[101]]['$getLinesArr2'] = function () {
    var kvj_s = this['$TextField'];if (!kvj_s[0x12]) return this[H[1596]];kvj_s[0x12] = !0x1;var r1zo = this[H[1590]];this[H[1596]][H[50]] = 0x0, kvj_s[0x6] = 0x0, kvj_s[0x5] = 0x0;var p96rt = kvj_s[0x3];if (!isNaN(p96rt) && 0x0 == p96rt) return [{ 'width': kvj_s[0x1d] = 0x0, 'height': 0x0, 'charNum': 0x0, 'elements': [], 'hasNextLine': !0x1 }];var mgy$q7 = this[H[1596]],
        s5dv = 0x0,
        e3bin = 0x0,
        xup04 = 0x0,
        p4rt9 = 0x0,
        vkab_5;for (var vjsk_ = 0x0, _bk = r1zo[H[50]]; vjsk_ < _bk; vjsk_++) {
      var $sjdq = r1zo[vjsk_];if ($sjdq[H[91]]) {
        $sjdq[H[1597]] = $sjdq[H[1597]] || {};var bnk3ia = $sjdq[H[91]][H[390]]()[H[22]](/(?:\r\n|\r|\n)/);for (var xelw3 = 0x0, mgydq$ = bnk3ia[H[50]]; xelw3 < mgydq$; xelw3++) {
          null == mgy$q7[p4rt9] && (mgy$q7[p4rt9] = vkab_5 = { 'width': 0x0, 'height': 0x0, 'elements': [], 'charNum': 0x0, 'hasNextLine': !0x1 }, e3bin = xup04 = s5dv = 0x0), xup04 = kvj_s[0x18] == xeiw[H[1533]][H[1534]] ? kvj_s[0x0] : Math[H[187]](xup04, $sjdq[H[1597]][H[1335]] || kvj_s[0x0]);var m$dyq = !0x0;if ('' == bnk3ia[xelw3]) xelw3 == mgydq$ - 0x1 && (m$dyq = !0x1);else {
            var nieab = $dj(bnk3ia[xelw3], kvj_s, $sjdq[H[1597]]);if (isNaN(p96rt)) s5dv += nieab, e3bin += bnk3ia[xelw3][H[50]], vkab_5[H[1598]][H[95]]({ 'width': nieab, 'text': bnk3ia[xelw3], 'style': $sjdq[H[1597]] }), xelw3 == mgydq$ - 0x1 && (m$dyq = !0x1);else {
              if (s5dv + nieab <= p96rt) vkab_5[H[1598]][H[95]]({ 'width': nieab, 'text': bnk3ia[xelw3], 'style': $sjdq[H[1597]] }), s5dv += nieab, e3bin += bnk3ia[xelw3][H[50]], xelw3 == mgydq$ - 0x1 && (m$dyq = !0x1);else {
                var h8oz = 0x0,
                    tr891 = 0x0,
                    jdsqm$ = bnk3ia[xelw3],
                    r9z8 = void 0x0,
                    ulwe = (r9z8 = kvj_s[0x13] ? jdsqm$[H[22]](ieb3nw) : jdsqm$[H[293]](/./g))[H[50]],
                    wex0l = 0x0;for (; h8oz < ulwe; h8oz++) {
                  var dqysm$ = !0x1;if (nieab = 0x1 == (p9t8r = r9z8[h8oz][H[50]]) && h8oz < ulwe - 0x1 ? (js5md = r9z8[h8oz][H[1599]](0x0), dyqms$ = r9z8[h8oz + 0x1][H[1599]](0x0), 0xd800 <= js5md && js5md <= 0xdbff && 0xdc00 == (0xfc00 & dyqms$) ? (p9t8r = 0x2, dqysm$ = !0x0, $dj(r9z8[h8oz] + r9z8[h8oz + 0x1], kvj_s, $sjdq[H[1597]])) : $dj(r9z8[h8oz], kvj_s, $sjdq[H[1597]])) : $dj(r9z8[h8oz], kvj_s, $sjdq[H[1597]]), 0x0 != s5dv && p96rt < s5dv + nieab && s5dv + h8oz != 0x0) break;if (p96rt < tr891 + nieab) {
                    var jd_v5 = r9z8[h8oz][H[293]](/./g);for (var $sdvj5 = 0x0, nakib = jd_v5[H[50]]; $sdvj5 < nakib; $sdvj5++) {
                      var p9t8r,
                          r1z8o9 = !0x1,
                          js5md,
                          dyqms$;if (nieab = 0x1 == (p9t8r = jd_v5[$sdvj5][H[50]]) && $sdvj5 < nakib - 0x1 ? (js5md = jd_v5[$sdvj5][H[1599]](0x0), dyqms$ = jd_v5[$sdvj5 + 0x1][H[1599]](0x0), 0xd800 <= js5md && js5md <= 0xdbff && 0xdc00 == (0xfc00 & dyqms$) ? (p9t8r = 0x2, r1z8o9 = !0x0, $dj(jd_v5[$sdvj5] + jd_v5[$sdvj5 + 0x1], kvj_s, $sjdq[H[1597]])) : $dj(jd_v5[$sdvj5], kvj_s, $sjdq[H[1597]])) : $dj(jd_v5[$sdvj5], kvj_s, $sjdq[H[1597]]), 0x0 < $sdvj5 && p96rt < s5dv + nieab) break;tr891 += nieab, s5dv += nieab, e3bin += wex0l += p9t8r, r1z8o9 && $sdvj5++;
                    }
                  } else tr891 += nieab, s5dv += nieab, e3bin += wex0l += p9t8r;dqysm$ && h8oz++;
                }if (0x0 < h8oz) {
                  vkab_5[H[1598]][H[95]]({ 'width': tr891, 'text': jdsqm$[H[294]](0x0, wex0l), 'style': $sjdq[H[1597]] });var ane3bi = jdsqm$[H[294]](wex0l),
                      lp04t = void 0x0,
                      _iakb = ane3bi[H[50]];for (lp04t = 0x0; lp04t < _iakb && '\x20' == ane3bi[H[821]](lp04t); lp04t++);bnk3ia[xelw3] = ane3bi[H[294]](lp04t);
                }'' != bnk3ia[xelw3] && (xelw3--, m$dyq = !0x1);
              }
            }
          }m$dyq && (e3bin++, vkab_5[H[1600]] = !0x0), xelw3 < bnk3ia[H[50]] - 0x1 && (vkab_5[H[446]] = s5dv, vkab_5[H[447]] = xup04, vkab_5[H[1601]] = e3bin, kvj_s[0x5] = Math[H[187]](kvj_s[0x5], s5dv), kvj_s[0x6] += xup04, p4rt9++);
        }vjsk_ == r1zo[H[50]] - 0x1 && vkab_5 && (vkab_5[H[446]] = s5dv, vkab_5[H[447]] = xup04, vkab_5[H[1601]] = e3bin, kvj_s[0x5] = Math[H[187]](kvj_s[0x5], s5dv), kvj_s[0x6] += xup04);
      } else vkab_5 && (vkab_5[H[446]] = s5dv, vkab_5[H[447]] = xup04, vkab_5[H[1601]] = e3bin, kvj_s[0x5] = Math[H[187]](kvj_s[0x5], s5dv), kvj_s[0x6] += xup04);
    }return kvj_s[0x1d] = mgy$q7[H[50]], mgy$q7;
  }, nkia[H[101]]['$setIsTyping'] = function (xln0we) {
    this['$isTyping'] = xln0we, this['$invalidateTextField'](), xeiw[H[413]] && this['$nativeDisplayObject'][H[1602]](xln0we);
  }, nkia[H[101]][H[1341]] = function () {
    var _vkbi = this[H[1581]],
        bakin = this['$TextField'];_vkbi[H[1337]] = bakin[0xf], _vkbi[H[1339]] = bakin[0x8] || nkia[H[1530]], _vkbi[H[1338]] = bakin[0x10], _vkbi[H[1335]] = bakin[0x0], _vkbi[H[1336]] = bakin[0x1b], _vkbi[H[1334]] = bakin[0x19], _vkbi[H[1333]] = bakin[0x2];var qdymg$ = this['$getLinesArr']();if (0x0 == bakin[0x5]) return [];var w4x0l = isNaN(bakin[0x3]) ? bakin[0x5] : bakin[0x3],
        z1h2o = xeiw[H[1562]]['$getTextHeight'](this),
        akj_ = 0x0,
        sm5j$d = xeiw[H[1562]]['$getStartLine'](this),
        c81o = bakin[0x4];!isNaN(c81o) && z1h2o < c81o && (akj_ += xeiw[H[1562]]['$getValign'](this) * (c81o - z1h2o)), akj_ = Math[H[728]](akj_);var r98p6 = xeiw[H[1562]]['$getHalign'](this),
        lu0pt = 0x0,
        eabn3 = [];for (var vsdj_ = sm5j$d, u0lexw = bakin[0x1d]; vsdj_ < u0lexw; vsdj_++) {
      var oh12z = qdymg$[vsdj_],
          t6p4 = oh12z[H[447]];if (akj_ += t6p4 / 0x2, vsdj_ != sm5j$d) {
        if (bakin[0x18] == xeiw[H[1533]][H[1534]] && !bakin[0x1e]) break;if (!isNaN(c81o) && c81o < akj_) break;
      }lu0pt = Math[H[728]]((w4x0l - oh12z[H[446]]) * r98p6);for (var lxp4u = 0x0, t4lu0p = oh12z[H[1598]][H[50]]; lxp4u < t4lu0p; lxp4u++) {
        var $dsjm = oh12z[H[1598]][lxp4u],
            $mqds = $dsjm[H[1597]][H[1335]] || bakin[0x0];_vkbi[H[1341]](lu0pt, akj_ + (t6p4 - $mqds) / 0x2, $dsjm[H[91]], $dsjm[H[1597]]), $dsjm[H[1597]][H[1499]] && eabn3[H[95]](lu0pt, akj_ + t6p4 / 0x2, $dsjm[H[446]], $dsjm[H[1597]][H[1333]]), lu0pt += $dsjm[H[446]];
      }akj_ += t6p4 / 0x2 + bakin[0x1];
    }return eabn3;
  }, nkia[H[101]][H[1586]] = function () {
    this[H[79]](xeiw[H[861]][H[857]], this[H[1603]], this);
  }, nkia[H[101]][H[1584]] = function () {
    this[H[250]](xeiw[H[861]][H[857]], this[H[1603]], this);
  }, nkia[H[101]][H[1603]] = function (vd_js) {
    var $mqyg;this['$TextField'][0x18] != xeiw[H[1533]][H[1534]] && (null == ($mqyg = xeiw[H[1562]]['$getTextElement'](this, vd_js[H[841]], vd_js[H[845]])) || (vd_js = $mqyg[H[1597]]) && vd_js[H[1501]] && (vd_js[H[1501]][H[293]](/^event:/) ? ($mqyg = vd_js[H[1501]][H[293]](/^event:/)[0x0], xeiw[H[801]][H[798]](this, xeiw[H[801]][H[799]], vd_js[H[1501]][H[294]]($mqyg[H[50]]))) : open(vd_js[H[1501]], vd_js[H[403]] || H[1604])));
  }, nkia[H[1530]] = H[1340], nkia[H[1605]] = 0x1e, nkia[H[1606]] = 0xffffff, nkia);function nkia() {
    var hc8zo = e3iwnx[H[268]](this) || this;hc8zo['$inputEnabled'] = !0x1, hc8zo[H[1543]] = null, hc8zo['$graphicsNode'] = null, hc8zo[H[1550]] = !0x1, hc8zo[H[1590]] = [], hc8zo[H[1596]] = [], hc8zo['$isTyping'] = !0x1;var a_5kbv = new xeiw[H[246]][H[1342]]();return a_5kbv[H[1339]] = nkia[H[1530]], hc8zo[H[1581]] = a_5kbv, hc8zo['$renderNode'] = a_5kbv, hc8zo['$TextField'] = { 0x0: nkia[H[1605]], 0x1: 0x0, 0x2: nkia[H[1606]], 0x3: NaN, 0x4: NaN, 0x5: 0x0, 0x6: 0x0, 0x7: 0x0, 0x8: nkia[H[1530]], 0x9: H[958], 0xa: H[959], 0xb: H[1607], 0xc: '', 0xd: '', 0xe: [], 0xf: !0x1, 0x10: !0x1, 0x11: !0x0, 0x12: !0x1, 0x13: !0x1, 0x14: !0x1, 0x15: 0x0, 0x16: 0x0, 0x17: 0x0, 0x18: xeiw[H[1533]][H[1608]], 0x19: 0x0, 0x1a: H[1354], 0x1b: 0x0, 0x1c: -0x1, 0x1d: 0x0, 0x1e: !0x1, 0x1f: !0x1, 0x20: 0x0, 0x21: !0x1, 0x22: 0xffffff, 0x23: null, 0x24: null, 0x25: xeiw[H[1609]][H[321]], 0x26: !0x1 }, hc8zo;
  }var e3iwnx;xeiw[H[1610]] = _jvks, fdsqym(_jvks[H[101]], H[1611]);
}(fm$sjd = (fm$sjd = fm$sjd || {}) || {}), function (ulxwe0) {
  var gy7$q = (jms$d[H[321]] = H[91], jms$d[H[1612]] = H[1613], jms$d[H[1614]] = H[1615], jms$d);function jms$d() {}ulxwe0[H[1609]] = gy7$q, fdsqym(gy7$q[H[101]], H[1616]);
}(fm$sjd = fm$sjd || {}), function (o2c1z) {
  var _d5jv = (oz1r89[H[1608]] = H[1617], oz1r89[H[1534]] = H[1618], oz1r89);function oz1r89() {}o2c1z[H[1533]] = _d5jv, fdsqym(_d5jv[H[101]], H[1619]);
}(fm$sjd = fm$sjd || {}), function (zo891) {
  var pul40 = (aikn['$getStartLine'] = function (up40) {
    var yg$d = up40['$TextField'],
        _aibk = aikn['$getTextHeight'](up40),
        bv_ka5 = 0x0;return up40 = yg$d[0x4], (isNaN(up40) || (_aibk < up40 || up40 < _aibk && (bv_ka5 = Math[H[187]](yg$d[0x1c] - 0x1, 0x0), bv_ka5 = Math[H[501]](yg$d[0x1d] - 0x1, bv_ka5)), yg$d[0x1e] || (bv_ka5 = Math[H[187]](yg$d[0x1c] - 0x1, 0x0), 0x0 < yg$d[0x1d] && (bv_ka5 = Math[H[501]](yg$d[0x1d] - 0x1, bv_ka5)))), bv_ka5);
  }, aikn['$getHalign'] = function (dy$mqg) {
    var p4u0tl = dy$mqg['$getLinesArr2'](),
        w0enl = 0x0;return dy$mqg['$TextField'][0x9] == zo891[H[1463]][H[1466]] ? w0enl = 0.5 : dy$mqg['$TextField'][0x9] == zo891[H[1463]][H[1465]] && (w0enl = 0x1), w0enl = dy$mqg['$TextField'][0x18] == zo891[H[1533]][H[1534]] && !dy$mqg['$TextField'][0x1e] && 0x1 < p4u0tl[H[50]] ? 0x0 : w0enl;
  }, aikn['$getTextHeight'] = function (nlwe) {
    return zo891[H[1533]][H[1534]] != nlwe['$TextField'][0x18] || nlwe['$TextField'][0x1e] ? nlwe['$TextField'][0x6] + (nlwe['$TextField'][0x1d] - 0x1) * nlwe['$TextField'][0x1] : nlwe['$TextField'][0x0];
  }, aikn['$getValign'] = function (w3ieb) {
    var q$msy = aikn['$getTextHeight'](w3ieb),
        exul = w3ieb['$TextField'][0x4];if (!isNaN(exul) && q$msy < exul) return exul = 0x0, (w3ieb['$TextField'][0xa] == zo891[H[1471]][H[1473]] ? exul = 0.5 : w3ieb['$TextField'][0xa] == zo891[H[1471]][H[1472]] && (exul = 0x1), exul);return 0x0;
  }, aikn['$getTextElement'] = function (_bviak, $qsmj, vi_ak) {
    return vi_ak = aikn['$getHit'](_bviak, $qsmj, vi_ak), _bviak = _bviak['$getLinesArr2'](), vi_ak && _bviak[vi_ak[H[1620]]] && _bviak[vi_ak[H[1620]]][H[1598]][vi_ak[H[1621]]] ? _bviak[vi_ak[H[1620]]][H[1598]][vi_ak[H[1621]]] : null;
  }, aikn['$getHit'] = function (mjsq$d, js5m$, bi3akn) {
    var z91oc8 = mjsq$d['$getLinesArr2']();if (0x0 == mjsq$d['$TextField'][0x3]) return null;var _5bak = 0x0,
        be3n = aikn['$getTextHeight'](mjsq$d),
        iakbv = 0x0,
        o1z2 = mjsq$d['$TextField'][0x4];!isNaN(o1z2) && be3n < o1z2 && 0x0 != (iakbv = aikn['$getValign'](mjsq$d) * (o1z2 - be3n)) && (bi3akn -= iakbv);var zc2ho1 = 0x0;for (var xenl3w = aikn['$getStartLine'](mjsq$d); xenl3w < z91oc8[H[50]]; xenl3w++) {
      var tlu40p = z91oc8[xenl3w];if (zc2ho1 + tlu40p[H[447]] >= bi3akn) {
        zc2ho1 < bi3akn && (_5bak = xenl3w + 0x1);break;
      }if ((zc2ho1 += tlu40p[H[447]]) + mjsq$d['$TextField'][0x1] > bi3akn) return null;zc2ho1 += mjsq$d['$TextField'][0x1];
    }if (0x0 == _5bak) return null;var qgy = z91oc8[_5bak - 0x1];iakbv = mjsq$d['$TextField'][0x3], (isNaN(iakbv) && (iakbv = mjsq$d[H[1468]]), js5m$ -= aikn['$getHalign'](mjsq$d) * (iakbv - qgy[H[446]]));var xlpu40 = 0x0;for (xenl3w = 0x0; xenl3w < qgy[H[1598]][H[50]]; xenl3w++) {
      var p8 = qgy[H[1598]][xenl3w];if (xlpu40 + p8[H[446]] <= js5m$) xlpu40 += p8[H[446]];else {
        if (xlpu40 < js5m$) return { 'lineIndex': _5bak - 0x1, 'textElementIndex': xenl3w };
      }
    }return null;
  }, aikn['$getScrollNum'] = function (t4upl) {
    var hc81 = 0x1,
        g7$my,
        ani3e;return t4upl['$TextField'][0x1e] && (g7$my = t4upl[H[447]], (ani3e = t4upl[H[1335]]) / 0x2 < g7$my - (ani3e + (t4upl = t4upl[H[1459]])) * (hc81 = Math[H[497]](g7$my / (ani3e + t4upl))) && hc81++), hc81;
  }, aikn);function aikn() {}zo891[H[1562]] = pul40, fdsqym(pul40[H[101]], H[1622]);
}(fm$sjd = fm$sjd || {}), function (lxu0w) {
  lxu0w[H[246]] || (lxu0w[H[246]] = {});
}(fm$sjd = fm$sjd || {}), function (lw0ux4) {
  var ks_ = (xeu0w[H[1474]] = H[959], xeu0w[H[1472]] = H[957], xeu0w[H[1473]] = H[1387], xeu0w[H[1478]] = H[1479], xeu0w[H[1480]] = H[1481], xeu0w);function xeu0w() {}lw0ux4[H[1471]] = ks_, fdsqym(ks_[H[101]], H[1623]);
}(fm$sjd = fm$sjd || {}), function (my7gq$) {
  var s5jvd_ = (a_jk[H[820]] = function (n3lexw) {
    var nlew0 = new Uint8Array(n3lexw),
        h18zoc = nlew0[H[50]],
        c819o = '';for (var $g7q = 0x0; $g7q < h18zoc; $g7q += 0x3) c819o += fbe3[nlew0[$g7q] >> 0x2], c819o += fbe3[(0x3 & nlew0[$g7q]) << 0x4 | nlew0[$g7q + 0x1] >> 0x4], c819o += fbe3[(0xf & nlew0[$g7q + 0x1]) << 0x2 | nlew0[$g7q + 0x2] >> 0x6], c819o += fbe3[0x3f & nlew0[$g7q + 0x2]];return h18zoc % 0x3 == 0x2 ? c819o = c819o[H[294]](0x0, c819o[H[50]] - 0x1) + '=' : h18zoc % 0x3 == 0x1 && (c819o = c819o[H[294]](0x0, c819o[H[50]] - 0x2) + '=='), c819o;
  }, a_jk[H[1624]] = function (pu4t0l) {
    var v5bk_a = 0.75 * pu4t0l[H[50]],
        plu0x = pu4t0l[H[50]],
        nei3x = 0x0,
        wlx3en,
        r64,
        b_vai,
        va_5b;'=' === pu4t0l[pu4t0l[H[50]] - 0x1] && (v5bk_a--, '=' === pu4t0l[pu4t0l[H[50]] - 0x2] && v5bk_a--);var v5bk_a = new ArrayBuffer(v5bk_a),
        ocz12h = new Uint8Array(v5bk_a);for (var av5j_k = 0x0; av5j_k < plu0x; av5j_k += 0x4) wlx3en = fzr1968[pu4t0l[H[1599]](av5j_k)], r64 = fzr1968[pu4t0l[H[1599]](av5j_k + 0x1)], b_vai = fzr1968[pu4t0l[H[1599]](av5j_k + 0x2)], va_5b = fzr1968[pu4t0l[H[1599]](av5j_k + 0x3)], ocz12h[nei3x++] = wlx3en << 0x2 | r64 >> 0x4, ocz12h[nei3x++] = (0xf & r64) << 0x4 | b_vai >> 0x2, ocz12h[nei3x++] = (0x3 & b_vai) << 0x6 | 0x3f & va_5b;return v5bk_a;
  }, a_jk);function a_jk() {}my7gq$[H[819]] = s5jvd_, fdsqym(s5jvd_[H[101]], H[1625]);
}(fm$sjd = fm$sjd || {});var fbe3 = H[1626],
    fzr1968 = new Uint8Array(0x100);for (var fx3wein = 0x0; fx3wein < fbe3[H[50]]; fx3wein++) fzr1968[fbe3[H[1599]](fx3wein)] = fx3wein;!function (k3_ib) {
  var ym$gq = (x3enwl[H[1627]] = H[1628], x3enwl[H[1629]] = H[1630], x3enwl);function x3enwl() {}k3_ib[H[1631]] = ym$gq, fdsqym(ym$gq[H[101]], H[1632]);var zo198 = (Object[H[107]](jv5$s[H[101]], H[1633], { 'get': function () {
      return 0x0 == this['$endian'] ? ym$gq[H[1627]] : ym$gq[H[1629]];
    }, 'set': function (vk5ab) {
      this['$endian'] = vk5ab == ym$gq[H[1627]] ? 0x0 : 0x1;
    }, 'enumerable': !0x0, 'configurable': !0x0 }), jv5$s[H[101]][H[1634]] = function (coz2h) {}, Object[H[107]](jv5$s[H[101]], H[1635], { 'get': function () {
      return this[H[1636]] - this[H[1637]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](jv5$s[H[101]], H[1150], { 'get': function () {
      return this[H[29]][H[1150]][H[1638]](0x0, this[H[1636]]);
    }, 'set': function (vkba_i) {
      var nka3b = vkba_i[H[1639]],
          rp869t = new Uint8Array(vkba_i);vkba_i = this[H[1640]], ((vkba_i = 0x0 == vkba_i ? new Uint8Array(nka3b) : new Uint8Array((0x1 + (nka3b / vkba_i | 0x0)) * vkba_i))[H[1374]](rp869t), this[H[1636]] = nka3b, this[H[1641]] = vkba_i, this[H[29]] = new DataView(vkba_i[H[1150]]));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](jv5$s[H[101]], H[1642], { 'get': function () {
      return this[H[29]][H[1150]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](jv5$s[H[101]], H[1643], { 'get': function () {
      return this[H[1641]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](jv5$s[H[101]], H[1644], { 'get': function () {
      return this[H[29]];
    }, 'set': function (jmds) {
      this[H[1150]] = jmds[H[1150]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](jv5$s[H[101]], H[1645], { 'get': function () {
      return this[H[29]][H[1646]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](jv5$s[H[101]], H[1647], { 'get': function () {
      return this[H[1637]];
    }, 'set': function (neb3i) {
      (this[H[1637]] = neb3i) > this[H[1636]] && (this[H[1636]] = neb3i);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](jv5$s[H[101]], H[50], { 'get': function () {
      return this[H[1636]];
    }, 'set': function (wenbi3) {
      this[H[1636]] = wenbi3, this[H[29]][H[1639]] > wenbi3 && (this[H[1637]] = wenbi3), this[H[1648]](wenbi3);
    }, 'enumerable': !0x0, 'configurable': !0x0 }), jv5$s[H[101]][H[1648]] = function (p4u0t) {
    var j_s5vk, mydgq;this[H[29]][H[1639]] < p4u0t && (mydgq = void 0x0, (mydgq = 0x0 == (j_s5vk = this[H[1640]]) ? new Uint8Array(p4u0t) : new Uint8Array((0x1 + (p4u0t / j_s5vk >> 0x0)) * j_s5vk))[H[1374]](this[H[1641]]), this[H[1641]] = mydgq, this[H[29]] = new DataView(mydgq[H[1150]]));
  }, Object[H[107]](jv5$s[H[101]], H[1649], { 'get': function () {
      return this[H[29]][H[1639]] - this[H[1637]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), jv5$s[H[101]][H[928]] = function () {
    var abikn3 = new ArrayBuffer(this[H[1640]]);this[H[29]] = new DataView(abikn3), this[H[1641]] = new Uint8Array(abikn3), this[H[1637]] = 0x0, this[H[1636]] = 0x0;
  }, jv5$s[H[101]][H[1650]] = function () {
    if (this[H[1651]](0x1)) return !!this[H[1641]][this[H[1647]]++];
  }, jv5$s[H[101]][H[1652]] = function () {
    if (this[H[1651]](0x1)) return this[H[29]][H[1653]](this[H[1647]]++);
  }, jv5$s[H[101]][H[1654]] = function (p4ut0, nw0lxe, v_abik) {
    if (void 0x0 === nw0lxe && (nw0lxe = 0x0), void 0x0 === v_abik && (v_abik = 0x0), p4ut0) {
      var pt4r9 = this[H[1637]],
          ozc1h8 = this[H[1636]] - pt4r9;if (ozc1h8 < 0x0) k3_ib['$error'](0x401);else {
        if (0x0 == v_abik) v_abik = ozc1h8;else {
          if (ozc1h8 < v_abik) return void k3_ib['$error'](0x401);
        }ozc1h8 = p4ut0[H[1637]], (p4ut0[H[1637]] = 0x0, p4ut0[H[1655]](nw0lxe + v_abik), p4ut0[H[1637]] = ozc1h8, p4ut0[H[1641]][H[1374]](this[H[1641]][H[1656]](pt4r9, pt4r9 + v_abik), nw0lxe), this[H[1647]] += v_abik);
      }
    }
  }, jv5$s[H[101]][H[1657]] = function () {
    if (this[H[1651]](0x8)) {
      var t406up = this[H[29]][H[1658]](this[H[1637]], 0x0 == this['$endian']);return this[H[1647]] += 0x8, t406up;
    }
  }, jv5$s[H[101]][H[1659]] = function () {
    if (this[H[1651]](0x4)) {
      var exnwl3 = this[H[29]][H[1660]](this[H[1637]], 0x0 == this['$endian']);return this[H[1647]] += 0x4, exnwl3;
    }
  }, jv5$s[H[101]][H[1661]] = function () {
    if (this[H[1651]](0x4)) {
      var i3bwen = this[H[29]][H[1662]](this[H[1637]], 0x0 == this['$endian']);return this[H[1647]] += 0x4, i3bwen;
    }
  }, jv5$s[H[101]][H[1663]] = function () {
    if (this[H[1651]](0x2)) {
      var q$sj = this[H[29]][H[1664]](this[H[1637]], 0x0 == this['$endian']);return this[H[1647]] += 0x2, q$sj;
    }
  }, jv5$s[H[101]][H[1665]] = function () {
    if (this[H[1651]](0x1)) return this[H[1641]][this[H[1647]]++];
  }, jv5$s[H[101]][H[1666]] = function () {
    if (this[H[1651]](0x4)) {
      var kv5a = this[H[29]][H[1196]](this[H[1637]], 0x0 == this['$endian']);return this[H[1647]] += 0x4, kv5a;
    }
  }, jv5$s[H[101]][H[1667]] = function () {
    if (this[H[1651]](0x2)) {
      var sm$5 = this[H[29]][H[1668]](this[H[1637]], 0x0 == this['$endian']);return this[H[1647]] += 0x2, sm$5;
    }
  }, jv5$s[H[101]][H[1669]] = function () {
    var pl4x0 = this[H[1667]]();return 0x0 < pl4x0 ? this[H[1670]](pl4x0) : '';
  }, jv5$s[H[101]][H[1670]] = function (vk_5b) {
    if (this[H[1651]](vk_5b)) {
      var ib = this[H[29]];return ib = new Uint8Array(ib[H[1150]], ib[H[1646]] + this[H[1637]], vk_5b), (this[H[1647]] += vk_5b, this[H[1671]](ib));
    }
  }, jv5$s[H[101]][H[1672]] = function (_vk5ab) {
    this[H[1655]](0x1), this[H[1641]][this[H[1647]]++] = +_vk5ab;
  }, jv5$s[H[101]][H[1673]] = function (ja5kv_) {
    this[H[1655]](0x1), this[H[1641]][this[H[1647]]++] = 0xff & ja5kv_;
  }, jv5$s[H[101]][H[1674]] = function (lt04up, t1986r, z69) {
    void 0x0 === z69 && (z69 = 0x0), (t1986r = void 0x0 === t1986r ? 0x0 : t1986r) < 0x0 || z69 < 0x0 || 0x0 < (z69 = 0x0 == z69 ? lt04up[H[50]] - t1986r : Math[H[501]](lt04up[H[50]] - t1986r, z69)) && (this[H[1655]](z69), this[H[1641]][H[1374]](lt04up[H[1641]][H[1656]](t1986r, t1986r + z69), this[H[1637]]), this[H[1647]] = this[H[1637]] + z69);
  }, jv5$s[H[101]][H[1675]] = function (y$g7m) {
    this[H[1655]](0x8), this[H[29]][H[1676]](this[H[1637]], y$g7m, 0x0 == this['$endian']), this[H[1647]] += 0x8;
  }, jv5$s[H[101]][H[1677]] = function (xwle3n) {
    this[H[1655]](0x4), this[H[29]][H[1678]](this[H[1637]], xwle3n, 0x0 == this['$endian']), this[H[1647]] += 0x4;
  }, jv5$s[H[101]][H[1679]] = function (sjkv_5) {
    this[H[1655]](0x4), this[H[29]][H[1680]](this[H[1637]], sjkv_5, 0x0 == this['$endian']), this[H[1647]] += 0x4;
  }, jv5$s[H[101]][H[1681]] = function (g$7q) {
    this[H[1655]](0x2), this[H[29]][H[1682]](this[H[1637]], g$7q, 0x0 == this['$endian']), this[H[1647]] += 0x2;
  }, jv5$s[H[101]][H[1683]] = function (ptru46) {
    this[H[1655]](0x4), this[H[29]][H[1684]](this[H[1637]], ptru46, 0x0 == this['$endian']), this[H[1647]] += 0x4;
  }, jv5$s[H[101]][H[1685]] = function (kaj_5v) {
    this[H[1655]](0x2), this[H[29]][H[1686]](this[H[1637]], kaj_5v, 0x0 == this['$endian']), this[H[1647]] += 0x2;
  }, jv5$s[H[101]][H[1687]] = function (gyq$) {
    var ex0lnw = this[H[1688]](gyq$);gyq$ = ex0lnw[H[50]], (this[H[1655]](0x2 + gyq$), this[H[29]][H[1686]](this[H[1637]], gyq$, 0x0 == this['$endian']), this[H[1647]] += 0x2, this[H[1689]](ex0lnw, !0x1));
  }, jv5$s[H[101]][H[1690]] = function (exlw0u) {
    this[H[1689]](this[H[1688]](exlw0u));
  }, jv5$s[H[101]][H[390]] = function () {
    return H[1691] + this[H[50]] + H[1692] + this[H[1649]];
  }, jv5$s[H[101]][H[1689]] = function (ptu064, vabk_) {
    var sm$j = this[H[1637]],
        $yqm7g = sm$j + ptu064[H[50]];(vabk_ = void 0x0 === vabk_ ? !0x0 : vabk_) && this[H[1655]]($yqm7g), this[H[1643]][H[1374]](ptu064, sm$j), this[H[1647]] = $yqm7g;
  }, jv5$s[H[101]][H[1651]] = function (l4utp0) {
    var g$qm7 = this[H[1641]][H[50]];if (0x0 < g$qm7 && this[H[1637]] + l4utp0 <= g$qm7) return !0x0;k3_ib['$error'](0x401);
  }, jv5$s[H[101]][H[1655]] = function (vaibk) {
    this[H[1636]] = vaibk > this[H[1636]] ? vaibk : this[H[1636]], vaibk += this[H[1637]], this[H[1648]](vaibk);
  }, jv5$s[H[101]][H[1688]] = function (qsjm$d) {
    var tpr8 = 0x0,
        dqym = this[H[1693]](qsjm$d),
        r1z68 = [];for (; dqym[H[50]] > tpr8;) {
      var wenx0 = dqym[tpr8++];if (this[H[1694]](wenx0, 0xd800, 0xdfff)) this[H[1695]](wenx0);else {
        if (this[H[1694]](wenx0, 0x0, 0x7f)) r1z68[H[95]](wenx0);else {
          var qdj = void 0x0,
              sjmq$ = void 0x0;for (this[H[1694]](wenx0, 0x80, 0x7ff) ? (qdj = 0x1, sjmq$ = 0xc0) : this[H[1694]](wenx0, 0x800, 0xffff) ? (qdj = 0x2, sjmq$ = 0xe0) : this[H[1694]](wenx0, 0x10000, 0x10ffff) && (qdj = 0x3, sjmq$ = 0xf0), r1z68[H[95]](this[H[1696]](wenx0, Math[H[896]](0x40, qdj)) + sjmq$); 0x0 < qdj;) {
            var kb3i_ = this[H[1696]](wenx0, Math[H[896]](0x40, qdj - 0x1));r1z68[H[95]](0x80 + kb3i_ % 0x40), --qdj;
          }
        }
      }
    }return new Uint8Array(r1z68);
  }, jv5$s[H[101]][H[1671]] = function (d$j5s) {
    var ex3iw = 0x0,
        we3ni = '',
        _dsv = 0x0,
        z1hco8 = 0x0,
        s$d5 = 0x0,
        a_ibvk = 0x0;for (; d$j5s[H[50]] > ex3iw;) {
      var mygdq = d$j5s[ex3iw++],
          abk_vi,
          u40xlw;null !== (mygdq = mygdq == this[H[1697]] ? 0x0 != z1hco8 ? this[H[1698]](!0x1) : this[H[1699]] : 0x0 == z1hco8 ? this[H[1694]](mygdq, 0x0, 0x7f) ? mygdq : (this[H[1694]](mygdq, 0xc2, 0xdf) ? (z1hco8 = 0x1, a_ibvk = 0x80, _dsv = mygdq - 0xc0) : this[H[1694]](mygdq, 0xe0, 0xef) ? (z1hco8 = 0x2, a_ibvk = 0x800, _dsv = mygdq - 0xe0) : this[H[1694]](mygdq, 0xf0, 0xf4) ? (z1hco8 = 0x3, a_ibvk = 0x10000, _dsv = mygdq - 0xf0) : this[H[1698]](!0x1), _dsv *= Math[H[896]](0x40, z1hco8), null) : this[H[1694]](mygdq, 0x80, 0xbf) ? (s$d5 += 0x1, _dsv += (mygdq - 0x80) * Math[H[896]](0x40, z1hco8 - s$d5), s$d5 !== z1hco8 ? null : (abk_vi = _dsv, u40xlw = a_ibvk, a_ibvk = s$d5 = z1hco8 = _dsv = 0x0, this[H[1694]](abk_vi, u40xlw, 0x10ffff) && !this[H[1694]](abk_vi, 0xd800, 0xdfff) ? abk_vi : this[H[1698]](!0x1, mygdq))) : (a_ibvk = s$d5 = z1hco8 = _dsv = 0x0, ex3iw--, this[H[1698]](!0x1, mygdq))) && mygdq !== this[H[1699]] && (mygdq <= 0xffff ? 0x0 < mygdq && (we3ni += String[H[1454]](mygdq)) : (mygdq -= 0x10000, we3ni += String[H[1454]](0xd800 + (mygdq >> 0xa & 0x3ff)), we3ni += String[H[1454]](0xdc00 + (0x3ff & mygdq))));
    }return we3ni;
  }, jv5$s[H[101]][H[1695]] = function (c8hz1) {
    k3_ib['$error'](0x402, c8hz1);
  }, jv5$s[H[101]][H[1698]] = function (r89zo, zro819) {
    return r89zo && k3_ib['$error'](0x403), zro819 || 0xfffd;
  }, jv5$s[H[101]][H[1694]] = function (q7$mgy, coz8, q$gmy7) {
    return coz8 <= q7$mgy && q7$mgy <= q$gmy7;
  }, jv5$s[H[101]][H[1696]] = function (w3elxn, lxenw) {
    return Math[H[497]](w3elxn / lxenw);
  }, jv5$s[H[101]][H[1693]] = function (_vabi) {
    var bk5va_ = [],
        y$sdm = 0x0,
        jqd$m = _vabi[H[50]];for (; y$sdm < _vabi[H[50]];) {
      var kav_j = _vabi[H[1599]](y$sdm),
          r68z9;this[H[1694]](kav_j, 0xd800, 0xdfff) ? this[H[1694]](kav_j, 0xdc00, 0xdfff) || y$sdm == jqd$m - 0x1 ? bk5va_[H[95]](0xfffd) : (r68z9 = _vabi[H[1599]](y$sdm + 0x1), this[H[1694]](r68z9, 0xdc00, 0xdfff) ? (y$sdm += 0x1, bk5va_[H[95]](0x10000 + ((0x3ff & kav_j) << 0xa) + (0x3ff & r68z9))) : bk5va_[H[95]](0xfffd)) : bk5va_[H[95]](kav_j), y$sdm += 0x1;
    }return bk5va_;
  }, jv5$s);function jv5$s(ab_5vk, k_ab3) {
    void 0x0 === k_ab3 && (k_ab3 = 0x0), this[H[1640]] = 0x0, this[H[1697]] = -0x1, this[H[1699]] = -0x1, this[H[1640]] = k_ab3 = k_ab3 < 0x0 ? 0x0 : k_ab3;var t06p4u,
        qgy$7m = 0x0,
        pt96r;ab_5vk ? (pt96r = void 0x0, ab_5vk instanceof Uint8Array ? qgy$7m = (pt96r = ab_5vk)[H[50]] : (qgy$7m = ab_5vk[H[1639]], pt96r = new Uint8Array(ab_5vk)), (t06p4u = 0x0 == k_ab3 ? new Uint8Array(qgy$7m) : new Uint8Array((0x1 + (qgy$7m / k_ab3 | 0x0)) * k_ab3))[H[1374]](pt96r)) : t06p4u = new Uint8Array(k_ab3), this[H[1636]] = qgy$7m, this[H[1637]] = 0x0, this[H[1641]] = t06p4u, this[H[29]] = new DataView(t06p4u[H[1150]]), this[H[1633]] = ym$gq[H[1629]];
  }k3_ib[H[1700]] = zo198, fdsqym(zo198[H[101]], H[1701]);
}(fm$sjd = fm$sjd || {}), function (t496rp) {
  var exwi3 = (iavk = t496rp[H[609]], fmy$d(bw3ein, iavk), bw3ein[H[101]][H[424]] = function () {
    this['$nativeDisplayObject'] = new egret_native[H[414]](0x9);
  }, Object[H[107]](bw3ein[H[101]], H[1444], { 'get': function () {
      return this['$graphics'];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), bw3ein[H[101]]['$hitTest'] = function (v5ka, ianbe3) {
    if (!this['$visible']) return null;var ka3inb = this['$getInvertedConcatenatedMatrix'](),
        $5jvs = ka3inb['a'] * v5ka + ka3inb['c'] * ianbe3 + ka3inb['tx'],
        p0u4lt = ka3inb['b'] * v5ka + ka3inb['d'] * ianbe3 + ka3inb['ty'];ka3inb = this['$scrollRect'] || this['$maskRect'];if (ka3inb && !ka3inb[H[503]]($5jvs, p0u4lt)) return null;if (this['$mask'] && !this['$mask']['$hitTest'](v5ka, ianbe3)) return null;var nbie = this['$children'],
        xuw0 = !0x1,
        ohz8c = null;for (var _biak = nbie[H[50]] - 0x1; 0x0 <= _biak; _biak--) {
      var z2oc1 = nbie[_biak];if (!z2oc1['$maskedObject'] && (ohz8c = z2oc1['$hitTest'](v5ka, ianbe3))) {
        if (xuw0 = !0x0, ohz8c['$touchEnabled']) break;ohz8c = null;
      }
    }return ohz8c ? this['$touchChildren'] ? ohz8c : this : xuw0 ? this : ohz8c = (ohz8c = t496rp[H[528]][H[101]]['$hitTest'][H[268]](this, v5ka, ianbe3)) && this['$graphics']['$hitTest'](v5ka, ianbe3);
  }, bw3ein[H[101]]['$measureContentBounds'] = function (ut60p) {
    this['$graphics']['$measureContentBounds'](ut60p);
  }, bw3ein[H[101]]['$onRemoveFromStage'] = function () {
    iavk[H[101]]['$onRemoveFromStage'][H[268]](this), this['$graphics'] && this['$graphics']['$onRemoveFromStage']();
  }, bw3ein);function bw3ein() {
    var k_a5b = iavk[H[268]](this) || this;return k_a5b['$graphics'] = new t496rp[H[938]](), k_a5b['$graphics']['$setTarget'](k_a5b), k_a5b;
  }var iavk;t496rp[H[426]] = exwi3, fdsqym(exwi3[H[101]], H[1702]);
}(fm$sjd = fm$sjd || {}), function (i3ewn) {
  i3ewn[H[1703]] = function (eba, j_5sd, coz189) {
    eba || i3ewn['$error'](0x3eb, H[1704]), eba[H[101]] || i3ewn['$error'](0x3f4, H[1704]), void 0x0 === j_5sd && i3ewn['$error'](0x3eb, H[1705]), eba = eba[H[101]], Object[H[107]](eba, H[94], { 'value': j_5sd, 'enumerable': !0x1, 'writable': !0x0 });var mqy$sd = [j_5sd];coz189 && (mqy$sd = mqy$sd[H[97]](coz189));var beian = eba[H[96]];if (eba[H[96]]) {
      var u6p40 = beian[H[50]];for (var iabvk_ = 0x0; iabvk_ < u6p40; iabvk_++) {
        var le3 = beian[iabvk_];-0x1 == mqy$sd[H[4]](le3) && mqy$sd[H[95]](le3);
      }
    }Object[H[107]](eba, H[96], { 'value': mqy$sd, 'enumerable': !0x1, 'writable': !0x0 });
  };
}(fm$sjd = fm$sjd || {}), (fm$sjd = fm$sjd || {})[H[646]] = { 'REPEAT': H[1706], 'SCALE': H[651], 'CLIP': H[1378] }, function (m7) {
  var ika_vb = (Object[H[107]](nxiwe3, H[1707], { 'set': function ($qdm) {}, 'enumerable': !0x0, 'configurable': !0x0 }), nxiwe3[H[1708]] = H[1709], nxiwe3[H[589]] = H[1710], nxiwe3[H[1711]] = H[1712], nxiwe3[H[1713]] = H[134], nxiwe3[H[1714]] = H[31], nxiwe3[H[1715]] = H[1716], nxiwe3);function nxiwe3() {}m7[H[1717]] = ika_vb, fdsqym(ika_vb[H[101]], H[1718]);
}(fm$sjd = fm$sjd || {}), function (y$dsqm) {
  var xu4w = (l3n[H[1719]] = function (rutp46) {
    return H[1720] == typeof rutp46 && !isNaN(rutp46);
  }, l3n[H[498]] = function ($7ym) {
    var binwe3 = Math[H[497]]($7ym),
        ki_va = binwe3 + 0x1,
        ew3xn = l3n[H[1721]](binwe3);return binwe3 == $7ym ? ew3xn : ($7ym - binwe3) * l3n[H[1721]](ki_va) + (ki_va - $7ym) * ew3xn;
  }, l3n[H[1721]] = function (t0u4) {
    return (t0u4 %= 0x168) < 0x0 && (t0u4 += 0x168), fyd$qms[t0u4];
  }, l3n[H[495]] = function (_jsv5d) {
    var dsmj = Math[H[497]](_jsv5d),
        ja5k_ = dsmj + 0x1,
        webni = l3n[H[1722]](dsmj);return dsmj == _jsv5d ? webni : (_jsv5d - dsmj) * l3n[H[1722]](ja5k_) + (ja5k_ - _jsv5d) * webni;
  }, l3n[H[1722]] = function (ki3a_) {
    return (ki3a_ %= 0x168) < 0x0 && (ki3a_ += 0x168), fl40xp[ki3a_];
  }, l3n[H[1723]] = function (q$gdm) {
    if (0x0 === q$gdm[H[50]]) return 0x0;var s5_vk = 0x0;for (var ds$mqj = 0x0, hz1co8 = q$gdm[H[50]]; ds$mqj < hz1co8; ++ds$mqj) s5_vk = (s5_vk << 0x5) - s5_vk + q$gdm[H[1599]](ds$mqj), s5_vk |= 0x0;return s5_vk;
  }, l3n);function l3n() {}y$dsqm[H[494]] = xu4w, fdsqym(xu4w[H[101]], H[1724]);
}(fm$sjd = fm$sjd || {});var fyd$qms = {},
    fl40xp = {},
    fqymdg$ = Math['PI'] / 0xb4;for (var fm5sj = 0x0; fm5sj < 0x168; fm5sj++) fyd$qms[fm5sj] = Math[H[498]](fm5sj * fqymdg$), fl40xp[fm5sj] = Math[H[495]](fm5sj * fqymdg$);var fm$sjd;fyd$qms[0x5a] = 0x1, fl40xp[0x5a] = 0x0, fyd$qms[0xb4] = 0x0, fl40xp[0xb4] = -0x1, fyd$qms[0x10e] = -0x1, fl40xp[0x10e] = 0x0, Function[H[101]][H[1725]] || (Function[H[101]][H[1725]] = function (ho1c) {
  H[105] != typeof this && fm$sjd['$error'](0x405);function dm$j5s() {
    return j5v_sd[H[200]](this instanceof h1zc2 && ho1c ? this : ho1c, nw0x[H[97]](Array[H[101]][H[1638]][H[268]](arguments)));
  }var nw0x = Array[H[101]][H[1638]][H[268]](arguments, 0x1),
      j5v_sd = this,
      h1zc2 = function () {};return h1zc2[H[101]] = this[H[101]], dm$j5s[H[101]] = new h1zc2(), dm$j5s;
}), function (viak) {
  var t94r = (utpr46 = viak[H[158]], fmy$d(v_a5kb, utpr46), Object[H[107]](v_a5kb[H[101]], H[1726], { 'get': function () {
      return this[H[1727]];
    }, 'set': function (plu4x) {
      this[H[1727]] != (plu4x = plu4x < 0x1 ? 0x1 : plu4x) && (this[H[1727]] = plu4x, this[H[1256]] = this[H[1728]] = Math[H[728]](0x3c * plu4x));
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](v_a5kb[H[101]], H[1729], { 'get': function () {
      return this[H[1730]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), Object[H[107]](v_a5kb[H[101]], H[1731], { 'get': function () {
      return this[H[1732]];
    }, 'enumerable': !0x0, 'configurable': !0x0 }), v_a5kb[H[101]][H[1733]] = function () {
    this[H[1135]](), this[H[1730]] = 0x0;
  }, v_a5kb[H[101]][H[1130]] = function () {
    this[H[1732]] || (this[H[1256]] = this[H[1728]], this[H[1263]] = viak[H[1138]](), viak[H[696]]['$startTick'](this['$update'], this), this[H[1732]] = !0x0);
  }, v_a5kb[H[101]][H[1135]] = function () {
    this[H[1732]] && (viak[H[1734]](this['$update'], this), this[H[1732]] = !0x1);
  }, v_a5kb[H[101]]['$update'] = function (kjs_) {
    if (kjs_ - this[H[1263]] >= this[H[1727]]) this[H[1256]] = this[H[1728]];else {
      if (this[H[1256]] -= 0x3e8, 0x0 < this[H[1256]]) return !0x1;this[H[1256]] += this[H[1728]];
    }return this[H[1263]] = kjs_, this[H[1730]]++, kjs_ = 0x0 < this[H[1735]] && this[H[1730]] >= this[H[1735]], ((0x0 == this[H[1735]] || this[H[1730]] <= this[H[1735]]) && viak[H[809]][H[804]](this, viak[H[809]][H[805]]), kjs_ && (this[H[1135]](), viak[H[809]][H[804]](this, viak[H[809]][H[807]])), !0x1);
  }, v_a5kb);function v_a5kb(vks_j5, a_3ik) {
    void 0x0 === a_3ik && (a_3ik = 0x0);var i3_k = utpr46[H[268]](this) || this;return i3_k[H[1727]] = 0x0, i3_k[H[1730]] = 0x0, i3_k[H[1732]] = !0x1, i3_k[H[1728]] = 0x3e8, i3_k[H[1256]] = 0x3e8, i3_k[H[1263]] = 0x0, i3_k[H[1726]] = vks_j5, i3_k[H[1735]] = 0x0 | +a_3ik, i3_k;
  }var utpr46;viak[H[1736]] = t94r, fdsqym(t94r[H[101]], H[1737]);
}(fm$sjd = fm$sjd || {}), function (kiabn) {
  kiabn['$callLaterFunctionList'] = [], kiabn['$callLaterThisList'] = [], kiabn['$callLaterArgsList'] = [], kiabn[H[269]] = function (ia3_k, kv5_j) {
    var l40x = [];for (var s_d5j = 0x2; s_d5j < arguments[H[50]]; s_d5j++) l40x[s_d5j - 0x2] = arguments[s_d5j];kiabn['$callLaterFunctionList'][H[95]](ia3_k), kiabn['$callLaterThisList'][H[95]](kv5_j), kiabn['$callLaterArgsList'][H[95]](l40x);
  }, kiabn['$callAsyncFunctionList'] = [], kiabn['$callAsyncThisList'] = [], kiabn['$callAsyncArgsList'] = [], kiabn['$callAsync'] = function (ibena3, baien) {
    var sdqjm = [];for (var a3nieb = 0x2; a3nieb < arguments[H[50]]; a3nieb++) sdqjm[a3nieb - 0x2] = arguments[a3nieb];kiabn['$callAsyncFunctionList'][H[95]](ibena3), kiabn['$callAsyncThisList'][H[95]](baien), kiabn['$callAsyncArgsList'][H[95]](sdqjm);
  };
}(fm$sjd = (fm$sjd = fm$sjd || {}) || {}), function (h12coz) {
  h12coz[H[1738]] = function (zc8h, uplt40, cz8h) {
    var rtp96 = [];for (var r8z61 = 0x3; r8z61 < arguments[H[50]]; r8z61++) rtp96[r8z61 - 0x3] = arguments[r8z61];var nx3e = zc8h[H[101]],
        sk_;zc8h[H[100]](H[1739]) || Object[H[107]](zc8h, H[1739], { 'value': {} });var ewlx3n = (sk_ = zc8h[H[1739]])[cz8h];if (ewlx3n) return ewlx3n[H[200]](uplt40, rtp96);var y7mqg = Object[H[554]](nx3e);if (null != y7mqg) {
      for (; !y7mqg[H[100]](cz8h);) if (null == (y7mqg = Object[H[554]](y7mqg))) return;ewlx3n = Object[H[103]](y7mqg, cz8h)[H[1374]], (sk_[cz8h] = ewlx3n)[H[200]](uplt40, rtp96);
    }
  }, h12coz[H[1740]] = function (mdj5, bniak, dj5m$s) {
    var $sqyd = mdj5[H[101]],
        svdj;if (mdj5[H[100]](H[1741]) || Object[H[107]](mdj5, H[1741], { 'value': {} }), mdj5 = (svdj = mdj5[H[1741]])[dj5m$s]) return mdj5[H[268]](bniak);var _vbkai = Object[H[554]]($sqyd);if (null != _vbkai) {
      for (; !_vbkai[H[100]](dj5m$s);) if (null == (_vbkai = Object[H[554]](_vbkai))) return;return mdj5 = Object[H[103]](_vbkai, dj5m$s)[H[27]], (svdj[dj5m$s] = mdj5)[H[268]](bniak);
    }
  };
}(fm$sjd = fm$sjd || {}), function (v5j_d) {
  var vsdj5_ = {};v5j_d[H[1134]] = function (xwl3) {
    if (!xwl3) return null;var smdq = vsdj5_[xwl3];if (smdq) return smdq;var vd5j$ = xwl3[H[22]]('.'),
        b_5vka = vd5j$[H[50]];smdq = fi3k_a;for (var ew3b = 0x0; ew3b < b_5vka; ew3b++) if (!(smdq = smdq[vd5j$[ew3b]])) return null;return vsdj5_[xwl3] = smdq;
  }, v5j_d[H[1742]] = function () {
    vsdj5_ = {};
  };
}(fm$sjd = fm$sjd || {}), ((fm$sjd = fm$sjd || {}) || (fm$sjd = {}))[H[594]] = function (rt9p64) {
  var xein = typeof rt9p64;if (!rt9p64 || H[104] != xein && !rt9p64[H[101]]) return xein;var l0up4t = rt9p64[H[101]] || Object[H[554]](rt9p64);return l0up4t[H[100]](H[94]) ? l0up4t[H[94]] : (xein = l0up4t[H[99]][H[390]]()[H[1492]](), rt9p64 = xein[H[4]]('('), rt9p64 = xein[H[294]](0x9, rt9p64), Object[H[107]](l0up4t, H[94], { 'value': rt9p64, 'enumerable': !0x1, 'writable': !0x0 }), rt9p64);
}, function (o918zc) {
  o918zc[H[1743]] = function (hzc12o) {
    return !hzc12o || H[104] != typeof hzc12o && !hzc12o[H[101]] ? null : (hzc12o = hzc12o[H[101]] || Object[H[554]](hzc12o), (hzc12o = Object[H[554]](hzc12o)) && (hzc12o = o918zc[H[594]](hzc12o[H[99]])) || null);
  };
}(fm$sjd = fm$sjd || {}), function (w0ex) {
  w0ex[H[1138]] = function () {
    return Date[H[49]]() - w0ex[H[246]]['$START_TIME'];
  };
}(fm$sjd = fm$sjd || {}), function (inw3e) {
  inw3e[H[1744]] = function (iw3bne) {
    return !!inw3e[H[1134]](iw3bne);
  };
}(fm$sjd = fm$sjd || {}), (fm$sjd || (fm$sjd = {}))['is'] = function (nw3ixe, bwe3ni) {
  return !(!nw3ixe || H[104] != typeof nw3ixe) && !!(nw3ixe = (nw3ixe = Object[H[554]](nw3ixe)) ? nw3ixe[H[96]] : null) && -0x1 !== nw3ixe[H[4]](bwe3ni);
}, function (ux0w4) {
  ux0w4[H[1745]] = function (naib3k, a_kb) {
    naib3k || ux0w4['$error'](0x3eb, H[1746]), ux0w4[H[696]]['$startTick'](naib3k, a_kb);
  };
}(fm$sjd = fm$sjd || {}), function (n3lwe) {
  n3lwe[H[1734]] = function (d_s5j, _vsdj5) {
    d_s5j || n3lwe['$error'](0x3eb, H[1746]), n3lwe[H[696]]['$stopTick'](d_s5j, _vsdj5);
  };
}(fm$sjd = fm$sjd || {}), (fm$sjd || (fm$sjd = {}))[H[1390]] = function (ul04pt) {
  var qsmjd = (ul04pt = 0xffffff < (ul04pt = ul04pt < 0x0 ? 0x0 : ul04pt) ? 0xffffff : ul04pt)[H[390]](0x10)[H[1747]]();for (; 0x6 < qsmjd[H[50]];) qsmjd = qsmjd[H[1638]](0x1, qsmjd[H[50]]);for (; qsmjd[H[50]] < 0x6;) qsmjd = '0' + qsmjd;return '#' + qsmjd;
}, window[H[92]] = fm$sjd;