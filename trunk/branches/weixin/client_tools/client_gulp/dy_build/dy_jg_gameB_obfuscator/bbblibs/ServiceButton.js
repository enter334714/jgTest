var _ = wx.y$;
class _d$x_yw {
  constructor() {
    this['button'] = null;
  }['create'](wvtuxs) {
    this['button'] = tt['createContactButton']({ 'type': 'image', 'image': wvtuxs, 'style': { 'left': 0x0, 'top': 0x50, 'width': 0x2c, 'height': 0x29, 'borderWidth': 0x0 }, 'success'(lhjgki) {
        console['log']('create success', lhjgki);
      }, 'fail'(kjnoml) {
        console['log']('create fail', kjnoml);
      }, 'complete'(rstpoq) {
        console['log']('create complete', rstpoq);
      } });
  }['hide']() {
    this['button'] && this['button']['hide']();
  }['show']() {
    this['button'] && this['button']['show']();
  }['destroy']() {
    this['button'] && this['button']['destroy']();
  }['createBtn']() {
    var xytvw = this;tt['downloadFile']({ 'url': p$DE['cdn'] + 'dyService/service44_41.png', 'success': ijkmn => {
        xytvw['create'](ijkmn['tempFilePath']);
      } });
  }
}window['ttServiceBtn'] = new _d$x_yw();