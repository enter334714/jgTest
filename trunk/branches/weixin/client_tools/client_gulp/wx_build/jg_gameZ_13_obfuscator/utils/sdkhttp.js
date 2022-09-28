var Z = wx.$L;
import _0x5336b1 from './request.js';const md5 = require('./md5');const HOST = 'https://wxapi.dfkj8.com';const API_LIST = { 'init': { 'method': 'GET', 'url': '/web/xcx/init' }, 'auth': { 'method': 'GET', 'url': '/web/xcx/author', 'showLoading': !![], 'loadingText': '正在登录' }, 'report': { 'method': 'GET', 'url': '/web/xcx/reportRoleInfo' }, 'examineVerify': { 'method': 'GET', 'url': '/web/xcx/examineVerify', 'needSign': !![] }, 'createOrder': { 'method': 'POST', 'url': '/web/xcx/createOrder', 'showLoading': !![] }, 'balance': { 'method': 'GET', 'url': '/web/xcx/getBalance' }, 'payMidas': { 'method': 'POST', 'url': '/web/xcx/deduction', 'showLoading': !![], 'loadingText': '支付中', 'needSign': !![] }, 'msgSecCheck': { 'method': 'POST', 'url': '/web/xcx/msgSecCheck' }, 'specificPage': { 'method': 'GET', 'url': '/web/xcx/getPageInfo' }, 'getTransferInfo': { 'method': 'GET', 'url': '/web/xcx/getTransferInfo' } };function HttpRequest(_0x45bcff, _0x5ba84e) {
  var _0x5e4f90 = this;let _0x1a3cf4 = HOST;let _0x5a6d56 = {};for (let _0x26efe8 in _0x5ba84e) {
    let _0x4d52cb = _0x5ba84e[_0x26efe8];_0x5a6d56[_0x26efe8] = _0x424f97 => {
      let _0x635ef9 = _0x424f97 && _0x424f97['data'] ? _0x424f97['data'] : null;let _0x2b8de1 = _0x4d52cb['showLoading'] ? _0x4d52cb['showLoading'] : ![];let _0x4a5150 = _0x4d52cb['loadingText'] ? _0x4d52cb['loadingText'] : '';let _0x3c442a = _0x4d52cb['needSign'] ? _0x4d52cb['needSign'] : ![];if (_0x3c442a && _0x635ef9) {
        _0x635ef9 = _0x5e4f90['signParmas'](_0x635ef9);
      }return _0x5336b1(_0x1a3cf4 + _0x4d52cb['url'], _0x4d52cb['method'], _0x635ef9, { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8;Authorization;' }, _0x2b8de1, _0x4a5150);
    };
  }return _0x5a6d56;
};HttpRequest['prototype']['signParmas'] = function (_0x229c6f) {
  const _0x120023 = 'B055a52beb92940b15e29e0019d8d89d';let _0x23f2f8 = new Date();_0x23f2f8 = parseInt(_0x23f2f8['getTime']() / 0x3e8);let _0x459c1c = md5(_0x229c6f['game_id'] + '' + _0x23f2f8 + _0x120023);_0x229c6f['time'] = _0x23f2f8;_0x229c6f['sign'] = _0x459c1c;return _0x229c6f;
};const Api = new HttpRequest({}, API_LIST);export default Api;