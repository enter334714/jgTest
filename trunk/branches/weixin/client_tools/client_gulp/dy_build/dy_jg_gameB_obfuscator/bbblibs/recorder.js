var _ = wx.y$;
console['log']('進入錄製視頻js');class _dihmlk {
  constructor() {
    this['gameRecorderManager'] = tt['getGameRecorderManager'](), this['videoStart'] = ![], this['videoStart'] = ![], this['autoStop'] = !![], this['startTime'] = 0x0, this['stopTime'] = 0x0, this['videoPath'] = null, this['stopFun'] = null, this['stopContext'] = null, this['initRecorderVideo']();
  }['initRecorderVideo']() {
    console['log']('监听录屏返回');var onqmp = this,
        onqmp = this;console['log']('监听录屏返回'), onqmp['gameRecorderManager']['onStart'](function () {
      console['log']('录屏开始'), onqmp['videoStart'] = !![], this['startTime'] = new Date()['getTime']();
    }), onqmp['gameRecorderManager']['onPause'](function () {
      console['log']('录屏暂停'), onqmp['videoPause'] = !![];
    }), onqmp['gameRecorderManager']['onStop'](function (egdi) {
      console['log']('录屏onStop', egdi), onqmp['videoPause'] = ![], onqmp['videoStart'] = ![], onqmp['videoPath'] = egdi['videoPath'], onqmp['stopFun'] && onqmp['stopContext'] && onqmp['stopFun']['call'](onqmp['stopContext']);
    }), onqmp['gameRecorderManager']['onResume'](function (edihf) {
      console['log']('录屏继续'), onqmp['videoPause'] = ![];
    }), onqmp['gameRecorderManager']['onError'](function () {
      console['log']('录屏错误');
    }), onqmp['gameRecorderManager']['onInterruptionBegin'](function () {
      console['log']('监听录屏中断开始');
    }), onqmp['gameRecorderManager']['onInterruptionEnd'](function () {
      console['log']('监听录屏中断结束');
    });
  }['getVideoState']() {
    return { 'videoStart': this['videoStart'], 'videoPause': this['videoPause'] };
  }['startVideo'](fgcbe) {
    console['log']('startVideo:', fgcbe['time']);var tvxyuw = this,
        mlnok = fgcbe['time'] || 0xf;tvxyuw['autoStop'] = !![], tvxyuw['stopFun'] = fgcbe['stopFun'], tvxyuw['stopContext'] = fgcbe['stopContext'], tvxyuw['gameRecorderManager']['start']({ 'duration': mlnok });
  }['clearStopFun']() {
    this['stopFun'] = null, this['stopContext'] = null;
  }['stopVideo'](_$yz0x) {
    var uxzy = this;if (!uxzy['videoStart']) {
      console['log']('未在录制，不用停止');return;
    }this['stopTime'] = new Date()['getTime'](), uxzy['autoStop'] = ![], uxzy['gameRecorderManager']['stop']();
  }['shareVideo'](hjfgei, tvxwuy) {
    let qstv = this;console['log']('shareVdieo');var snqr = '暂无录屏';if (!qstv['videoPath']) return console['log'](snqr), snqr;tt['shareAppMessage']({ 'channel': 'video', 'title': '分享', 'extra': { 'videoPath': qstv['videoPath'] }, 'success'() {
        console['log']('分享视频成功'), hjfgei && tvxwuy && hjfgei['call'](tvxwuy, 0x1);
      }, 'fail'(lok) {
        console['log']('分享视频失败:', lok), hjfgei && tvxwuy && hjfgei['call'](tvxwuy, 0x0);
      }, 'complete'(qtr) {
        console['log']('分享完成complete\uFF1A');
      } });
  }['pauseVideo']() {
    var omlpqn = this;omlpqn['gameRecorderManager']['pause']();
  }['resumeVideo']() {
    var knolj = this;knolj['gameRecorderManager']['resume']();
  }['clipVideo'](svurtq) {
    var hifgkj = this;if (hifgkj['videoStart']) {
      console['log']('需要先暂停录屏\x20才能剪辑');return;
    }if (!hifgkj['videoPath']) {
      console['log']('视频地址为空');return;
    }svurtq = svurtq || {};var _$xywz = svurtq['ago'] || 0xf,
        usxvw = svurtq['after'] || 0x0;hifgkj['gameRecorderManager']['clipVideo']({ 'path': hifgkj['videoPath'], 'timeRange': [0x1e, 0x0], 'success'(z_$120) {
        console['log']('剪辑精彩的视频片段保存地址：', z_$120['videoPath']);
      }, 'fail'(jlihk) {
        console['log']('剪辑失败');
      } });
  }['recordClipVideo'](_1$z2) {
    var y$0_1 = this;if (!y$0_1['videoStart']) {
      console['log']('记录精彩的视频片段，调用时必须是正在录屏');return;
    }_1$z2 = _1$z2 || {};var qtrp = _1$z2['ago'] || 0x0,
        $1y0z_ = _1$z2['after'] || 0x78;console['log']('ago:', qtrp, 'after:', $1y0z_), y$0_1['gameRecorderManager']['recordClip']({ 'timeRange': [qtrp, $1y0z_] });
  }
}window['RecoderVideo'] = new _dihmlk();