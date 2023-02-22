'use strict';
var a0_0x9d38d7 = a0_0x35ce;
(function(_0x600ab9, _0x21e5dd) {
	var _0x3ba348 = a0_0x35ce,
		_0xd7ba6f = _0x600ab9();
	while (!![]) {
		try {
			var _0x352d48 = -parseInt(_0x3ba348(0x2a6)) / 0x1 + -parseInt(_0x3ba348(0x15f)) / 0x2 * (parseInt(_0x3ba348(0x1ab)) / 0x3) + -parseInt(_0x3ba348(0xc3)) / 0x4 + parseInt(_0x3ba348(0x195)) / 0x5 * (parseInt(_0x3ba348(0x1ac)) / 0x6) + parseInt(_0x3ba348(0x294)) / 0x7 * (-parseInt(_0x3ba348(0xbe)) / 0x8) + -parseInt(_0x3ba348(0x296)) / 0x9 * (parseInt(_0x3ba348(0x21c)) / 0xa) + parseInt(_0x3ba348(0xee)) / 0xb;
			if (_0x352d48 === _0x21e5dd) break;
			else _0xd7ba6f['push'](_0xd7ba6f['shift']());
		} catch (_0x3c965b) {
			_0xd7ba6f['push'](_0xd7ba6f['shift']());
		}
	}
}(a0_0x422f, 0x71da3));
var __extends = this && this[a0_0x9d38d7(0x2ae)] || (function() {
		var _0xbeb2a6 = function(_0x231caa, _0x48668f) {
			return _0xbeb2a6 = Object['setPrototypeOf'] || {
				'__proto__': []
			}
			instanceof Array && function(_0x3720d9, _0x3bf4af) {
				var _0x77150b = a0_0x35ce;
				_0x3720d9[_0x77150b(0x281)] = _0x3bf4af;
			} || function(_0x2fdc90, _0x2879a7) {
				var _0x562c07 = a0_0x35ce;
				for (var _0x3321b8 in _0x2879a7)
					if (_0x2879a7[_0x562c07(0x2c0)](_0x3321b8)) _0x2fdc90[_0x3321b8] = _0x2879a7[_0x3321b8];
			}, _0xbeb2a6(_0x231caa, _0x48668f);
		};
		return function(_0x1f954e, _0x2186a7) {
			var _0x137adc = a0_0x35ce;
			_0xbeb2a6(_0x1f954e, _0x2186a7);

			function _0x2bfbfd() {
				var _0x5ccd93 = a0_0x35ce;
				this[_0x5ccd93(0x1d0)] = _0x1f954e;
			}
			_0x1f954e['prototype'] = _0x2186a7 === null ? Object[_0x137adc(0x237)](_0x2186a7) : (_0x2bfbfd[_0x137adc(0x10f)] = _0x2186a7['prototype'], new _0x2bfbfd());
		};
	}()),
	config = {
		'game_id': '2',
		'game_pkg': 'lmfbs1_mhdlxyx_M',
		'partner_id': '4',
		'is_auth': ![],
		'from': null
	};
window[a0_0x9d38d7(0x264)] = config;
var PARTNER_SDK = mainSDK(),
	HOST = 'https://sdk.api.l2i.cc',
	user_game_info = null,
	this_order_id = null,
	game_ver = '';

function mainSDK() {
	var _0x5e10c6 = {},
		_0x1e78a5 = 0x0;
	return {
		'order_data': {},
		'init': function(_0x560cb6, _0x25b8f8) {
			var _0x4713b8 = a0_0x35ce,
				_0x2adee6 = this;
			game_ver = _0x560cb6 && _0x560cb6[_0x4713b8(0x15d)] ? _0x560cb6[_0x4713b8(0x15d)] : 0x0, console[_0x4713b8(0x15c)](_0x4713b8(0x144), _0x560cb6);
			var _0x21da01 = wx[_0x4713b8(0xf4)](_0x4713b8(0x1a6)),
				_0x3d8825;
			!_0x21da01 ? (_0x21da01 = _0x2adee6[_0x4713b8(0x1fe)](0x10, 0x20), wx[_0x4713b8(0x202)](_0x4713b8(0x1a6), _0x21da01), _0x3d8825 = 0x1) : _0x3d8825 = 0x0;
			var _0x419205 = wx[_0x4713b8(0xf4)](_0x4713b8(0x173));
			!_0x419205 && (_0x419205 = _0x2adee6[_0x4713b8(0x1fe)](0x10, 0x20), wx['setStorageSync'](_0x4713b8(0x173), _0x419205));
			var _0x572d04 = wx[_0x4713b8(0xad)](),
				_0x13bdec = _0x572d04[_0x4713b8(0x240)] ? _0x572d04[_0x4713b8(0x240)] : '';
			console[_0x4713b8(0x15c)]('[SDK]小游戏启动参数', _0x572d04), console['log']('[SDK]小游戏is_new', _0x3d8825);
			_0x3d8825 && _0x572d04[_0x4713b8(0x221)] && _0x572d04[_0x4713b8(0x221)][_0x4713b8(0x172)] && wx[_0x4713b8(0x202)](_0x4713b8(0x141), _0x572d04[_0x4713b8(0x221)]['ad_code']);
			var _0x72964a = JSON[_0x4713b8(0x232)](_0x572d04[_0x4713b8(0x221)]);
			_0x3d8825 && _0x72964a != '{}' && wx[_0x4713b8(0x202)](_0x4713b8(0x259), JSON['stringify'](_0x572d04['query']));
			if (_0x572d04[_0x4713b8(0x221)] && _0x572d04[_0x4713b8(0x221)][_0x4713b8(0x1eb)] && _0x572d04[_0x4713b8(0x221)]['from'] != '') {
				if (_0x3d8825) wx[_0x4713b8(0x202)]('plat_from', _0x572d04['query']['from']);
				config[_0x4713b8(0x1eb)] = _0x572d04[_0x4713b8(0x221)][_0x4713b8(0x1eb)];
			} else {
				var _0x29d2df = wx[_0x4713b8(0xf4)](_0x4713b8(0x18a));
				if (!_0x29d2df && _0x29d2df != '') config[_0x4713b8(0x1eb)] = _0x29d2df;
			}
			var _0x4fb396 = {
				'install': _0x3d8825,
				'scene': _0x13bdec
			};
			_0x2adee6[_0x4713b8(0x15c)](_0x4713b8(0x18e), _0x4fb396), wx[_0x4713b8(0xb3)](), game_ver && _0x2adee6['checkGameVersion'](game_ver, function(_0x205312) {
				_0x25b8f8 && _0x25b8f8(_0x205312);
			});
		},
		'login': function(_0xc5ca13) {
			var _0x4c496a = a0_0x35ce;
			console[_0x4c496a(0x15c)](_0x4c496a(0x1a0));
			var _0xa2e58b = this;
			_0x5e10c6[_0x4c496a(0x295)] = typeof _0xc5ca13 == _0x4c496a(0x1f0) ? _0xc5ca13 : null, config[_0x4c496a(0x1e6)] ? wx[_0x4c496a(0xb2)]({
				'success': function(_0x2c235b) {
					var _0x36b2d1 = _0x4c496a;
					if (_0x2c235b[_0x36b2d1(0x200)][_0x36b2d1(0x1f7)]) console[_0x36b2d1(0x15c)](_0x36b2d1(0x260)), _0xa2e58b[_0x36b2d1(0x27e)]();
					else {
						console[_0x36b2d1(0x15c)](_0x36b2d1(0x1d5)), wx[_0x36b2d1(0x1e3)]({});
						var _0x221230 = wx[_0x36b2d1(0xb0)](),
							_0x4037bf = _0x221230[_0x36b2d1(0x16a)],
							_0x596995 = _0x221230[_0x36b2d1(0x288)],
							_0x43f47f = _0x4037bf * 0x2 / 0x3,
							_0x378044 = _0x43f47f / 0x3,
							_0x36743d = (_0x4037bf - _0x43f47f) / 0x2,
							_0x1a4642 = _0x596995 / 0x2,
							_0x4f2be8 = wx[_0x36b2d1(0xdc)]({
								'type': _0x36b2d1(0x27a),
								'text': '授权登录游戏',
								'withCredentials': ![],
								'style': {
									'top': _0x221230[_0x36b2d1(0x2c7)] / 0x2 + _0x221230[_0x36b2d1(0x2c7)] / 0x4,
									'left': _0x221230[_0x36b2d1(0x2d5)] / 0x2 - 0x64,
									'width': 0xc8,
									'height': 0x28,
									'lineHeight': 0x28,
									'backgroundColor': '#07c160',
									'color': _0x36b2d1(0x20b),
									'textAlign': _0x36b2d1(0x2a8),
									'fontSize': 0x10,
									'borderRadius': 0x4
								}
							});
						_0x4f2be8['show'](), _0x4f2be8['onTap'](function(_0x1ab8cf) {
							var _0x2a4144 = _0x36b2d1;
							console[_0x2a4144(0x15c)](_0x1ab8cf), wxShowLoading({
								'title': _0x2a4144(0xc6)
							}), _0x1ab8cf[_0x2a4144(0x1fa)] == _0x2a4144(0x219) ? _0xa2e58b['do_login']({
								'head_img': _0x1ab8cf[_0x2a4144(0x1f9)]['avatarUrl'] || '',
								'nick_name': _0x1ab8cf['userInfo'][_0x2a4144(0x190)] || ''
							}) : _0xa2e58b[_0x2a4144(0x27e)](), _0x4f2be8[_0x2a4144(0xb6)]();
						});
					}
				},
				'fail': function() {
					var _0x2e8cda = _0x4c496a;
					console[_0x2e8cda(0x15c)](_0x2e8cda(0xbc)), _0xa2e58b['do_login']();
				}
			}) : (console[_0x4c496a(0x15c)](_0x4c496a(0x225) + config['is_auth']), _0xa2e58b[_0x4c496a(0x27e)]());
		},
		'do_login': function(_0x408e9d) {
			var _0x2211ae = this;
			wx['login']({
				'success': function(_0x5d3478) {
					var _0x3c630f = a0_0x35ce;
					console[_0x3c630f(0x15c)](_0x3c630f(0x1ef) + JSON[_0x3c630f(0x232)](_0x5d3478));
					if (_0x5d3478[_0x3c630f(0x21e)]) {
						var _0x19b8c8 = _0x2211ae[_0x3c630f(0xfb)]();
						_0x19b8c8['mo'] = 0x1, _0x19b8c8[_0x3c630f(0x21e)] = _0x5d3478[_0x3c630f(0x21e)], _0x19b8c8[_0x3c630f(0xf6)] = _0x408e9d ? _0x408e9d[_0x3c630f(0xf6)] : '', _0x19b8c8[_0x3c630f(0x1ae)] = _0x408e9d ? _0x408e9d[_0x3c630f(0x1ae)] : '', config[_0x3c630f(0x1e6)] ? wx['getUserInfo']({
							'success': function(_0x3c1c58) {
								var _0x29fd94 = _0x3c630f,
									_0x2f218d = _0x3c1c58[_0x29fd94(0x234)],
									_0x573f52 = _0x3c1c58['iv'],
									_0x21630e = _0x3c1c58[_0x29fd94(0x175)];
								_0x19b8c8[_0x29fd94(0x234)] = _0x2f218d, _0x19b8c8['iv'] = _0x573f52, _0x19b8c8[_0x29fd94(0x175)] = _0x21630e, wx[_0x29fd94(0x185)]({
									'url': HOST + '/partner/auth',
									'method': 'POST',
									'dataType': _0x29fd94(0x127),
									'header': {
										'content-type': 'application/x-www-form-urlencoded'
									},
									'data': _0x19b8c8,
									'success': function(_0x55d4c3) {
										var _0x38fcc5 = _0x29fd94;
										console['log']('new[SDK]登录结果：'), console[_0x38fcc5(0x15c)](_0x55d4c3);
										if (_0x55d4c3[_0x38fcc5(0x2b7)] == 0xc8) {
											var _0x5dad92 = _0x55d4c3[_0x38fcc5(0x29d)];
											if (_0x5dad92[_0x38fcc5(0x26e)]) {
												var _0x208f08 = {
													'userid': _0x5dad92[_0x38fcc5(0x29d)][_0x38fcc5(0xfd)],
													'account': _0x5dad92['data'][_0x38fcc5(0xf6)],
													'token': _0x5dad92[_0x38fcc5(0x29d)][_0x38fcc5(0xfa)]
												};
												try {
													wx[_0x38fcc5(0x202)](_0x38fcc5(0x147), _0x5dad92['data'][_0x38fcc5(0x239)]), wx['setStorageSync'](_0x38fcc5(0x2d4), _0x5dad92[_0x38fcc5(0x29d)][_0x38fcc5(0xfd)]), wx['setStorageSync'](_0x38fcc5(0x24f), _0x5dad92[_0x38fcc5(0x29d)]['username']), wx[_0x38fcc5(0x202)](_0x38fcc5(0x1f8), _0x5dad92[_0x38fcc5(0x29d)]['openid']);
													var _0x291b01 = wx[_0x38fcc5(0xf4)](_0x38fcc5(0x141));
													!_0x291b01 && _0x5dad92[_0x38fcc5(0x29d)][_0x38fcc5(0x172)] != '' && wx[_0x38fcc5(0x202)](_0x38fcc5(0x141), _0x5dad92[_0x38fcc5(0x29d)]['ad_code']), _0x5dad92['data'][_0x38fcc5(0xb1)] && wx[_0x38fcc5(0x202)]('plat_session_key', _0x5dad92[_0x38fcc5(0x29d)][_0x38fcc5(0xb1)]);
												} catch (_0x42dcb5) {}
												_0x5e10c6['login'] && _0x5e10c6['login'](0x0, _0x208f08);
											} else _0x5e10c6[_0x38fcc5(0x295)] && _0x5e10c6[_0x38fcc5(0x295)](0x1, {
												'errMsg': _0x5dad92[_0x38fcc5(0xcf)]
											});
										} else _0x5e10c6[_0x38fcc5(0x295)] && _0x5e10c6[_0x38fcc5(0x295)](0x1, {
											'errMsg': _0x38fcc5(0xef)
										});
									},
									'fail': function(_0x292a25) {
										var _0x2a319f = _0x29fd94;
										_0x5e10c6[_0x2a319f(0x295)] && _0x5e10c6[_0x2a319f(0x295)](0x1, {
											'errMsg': _0x292a25[_0x2a319f(0x1fa)]
										});
									}
								});
							},
							'fail': function(_0x44e831) {
								var _0x2d02fa = _0x3c630f;
								_0x5e10c6[_0x2d02fa(0x295)] && _0x5e10c6[_0x2d02fa(0x295)](0x1, {
									'errMsg': _0x44e831['errMsg']
								});
							}
						}) : wx['request']({
							'url': HOST + _0x3c630f(0x2d2),
							'method': _0x3c630f(0x1b8),
							'dataType': _0x3c630f(0x127),
							'header': {
								'content-type': _0x3c630f(0x2cd)
							},
							'data': _0x19b8c8,
							'success': function(_0x12345f) {
								var _0x4e2e38 = _0x3c630f;
								console[_0x4e2e38(0x15c)]('new[SDK]登录结果：'), console[_0x4e2e38(0x15c)](_0x12345f);
								if (_0x12345f[_0x4e2e38(0x2b7)] == 0xc8) {
									var _0x3e4339 = _0x12345f[_0x4e2e38(0x29d)];
									if (_0x3e4339['state']) {
										var _0x50630e = {
											'userid': _0x3e4339[_0x4e2e38(0x29d)]['user_id'],
											'account': _0x3e4339[_0x4e2e38(0x29d)][_0x4e2e38(0xf6)],
											'token': _0x3e4339[_0x4e2e38(0x29d)]['token']
										};
										try {
											wx[_0x4e2e38(0x202)]('plat_sdk_token', _0x3e4339['data'][_0x4e2e38(0x239)]), wx[_0x4e2e38(0x202)](_0x4e2e38(0x2d4), _0x3e4339[_0x4e2e38(0x29d)]['user_id']), wx['setStorageSync'](_0x4e2e38(0x24f), _0x3e4339['data'][_0x4e2e38(0x1a2)]), wx[_0x4e2e38(0x202)](_0x4e2e38(0x1f8), _0x3e4339[_0x4e2e38(0x29d)][_0x4e2e38(0x2cb)]);
											var _0x257337 = wx[_0x4e2e38(0xf4)]('plat_ad_code');
											!_0x257337 && _0x3e4339[_0x4e2e38(0x29d)][_0x4e2e38(0x172)] != '' && wx[_0x4e2e38(0x202)](_0x4e2e38(0x141), _0x3e4339[_0x4e2e38(0x29d)][_0x4e2e38(0x172)]), _0x3e4339[_0x4e2e38(0x29d)][_0x4e2e38(0xb1)] && wx['setStorageSync'](_0x4e2e38(0x1de), _0x3e4339[_0x4e2e38(0x29d)][_0x4e2e38(0xb1)]);
										} catch (_0x3380e2) {}
										_0x5e10c6[_0x4e2e38(0x295)] && _0x5e10c6['login'](0x0, _0x50630e);
									} else _0x5e10c6[_0x4e2e38(0x295)] && _0x5e10c6['login'](0x1, {
										'errMsg': _0x3e4339[_0x4e2e38(0xcf)]
									});
								} else _0x5e10c6['login'] && _0x5e10c6[_0x4e2e38(0x295)](0x1, {
									'errMsg': '请求平台服务器失败！#2'
								});
							}
						});
					} else _0x5e10c6[_0x3c630f(0x295)] && _0x5e10c6[_0x3c630f(0x295)](0x1, {
						'errMsg': _0x5d3478[_0x3c630f(0x1fa)]
					});
				},
				'fail': function(_0x223044) {
					var _0x2fd2fa = a0_0x35ce;
					console[_0x2fd2fa(0x15c)]('微信登录失败' + JSON[_0x2fd2fa(0x232)](_0x223044)), (_0x223044['errMsg'][_0x2fd2fa(0x1b2)](_0x2fd2fa(0x1e9)) > -0x1 || _0x223044['errMsg'][_0x2fd2fa(0x1b2)](_0x2fd2fa(0x208)) > -0x1) && (_0x5e10c6['login'] && _0x5e10c6[_0x2fd2fa(0x295)](0x1, {
						'errMsg': _0x223044['errMsg']
					}));
				}
			});
		},
		'checkGameVersion': function(_0x10de2f, _0x292c3f) {
			var _0x5e3baf = a0_0x35ce;
			console['log'](_0x5e3baf(0x179));
			var _0x439259 = wx[_0x5e3baf(0xf4)]('plat_sdk_token');
			wx[_0x5e3baf(0x185)]({
				'url': HOST + _0x5e3baf(0x28c),
				'method': 'POST',
				'dataType': _0x5e3baf(0x127),
				'header': {
					'content-type': 'application/x-www-form-urlencoded'
				},
				'data': {
					'game_pkg': config['game_pkg'],
					'partner_id': config[_0x5e3baf(0x1fb)],
					'game_ver': _0x10de2f
				},
				'success': function(_0x25349a) {
					var _0x29b095 = _0x5e3baf;
					console[_0x29b095(0x15c)]('[SDK]获取游戏版本结果'), console[_0x29b095(0x15c)](_0x25349a);
					if (_0x25349a[_0x29b095(0x2b7)] == 0xc8) {
						var _0x1064a0 = _0x25349a['data'];
						_0x1064a0[_0x29b095(0x26e)] ? _0x292c3f && _0x292c3f(_0x1064a0['data']) : _0x292c3f && _0x292c3f({
							'develop': 0x0
						});
					} else _0x292c3f && _0x292c3f({
						'develop': 0x0
					});
				},
				'fail': function(_0x572849) {
					var _0x98f757 = _0x5e3baf;
					console[_0x98f757(0x15c)](_0x572849);
				}
			});
		},
		'pay': function(_0x1b0318, _0x40f811) {
			var _0x4c9848 = a0_0x35ce,
				_0x2701ef = this;
			wx[_0x4c9848(0x159)]({
				'success': function() {
					var _0x509cd0 = _0x4c9848;
					_0x2701ef[_0x509cd0(0xe8)](_0x1b0318, _0x40f811);
				},
				'fail': function() {
					var _0x4cab1e = _0x4c9848;
					console[_0x4cab1e(0x15c)](_0x4cab1e(0x290)), _0x2701ef['login']({}, function() {
						var _0x3563d5 = _0x4cab1e;
						_0x2701ef[_0x3563d5(0xe8)](_0x1b0318, _0x40f811);
					});
				}
			});
		},
		'startPay': function(_0x47471f, _0x5a2c0c) {
			var _0x1f4b4b = a0_0x35ce;
			console['log'](_0x1f4b4b(0x101)), console['log'](_0x47471f);
			var _0x2e6854 = this;
			_0x5e10c6[_0x1f4b4b(0x1e8)] = typeof _0x5a2c0c == 'function' ? _0x5a2c0c : null, _0x1e78a5 = 0x0;
			var _0x55117d = wx[_0x1f4b4b(0xf4)](_0x1f4b4b(0x147)),
				_0x2f9921 = wx[_0x1f4b4b(0xf4)](_0x1f4b4b(0x1de));
			if (!_0x55117d || !_0x2f9921) {
				_0x5e10c6[_0x1f4b4b(0x1e8)] && _0x5e10c6[_0x1f4b4b(0x1e8)](0x1, {
					'errMsg': _0x1f4b4b(0x263)
				});
				return;
			}
			var _0x4bb087 = wx[_0x1f4b4b(0xb0)](),
				_0x3cbbce = {
					'cpbill': _0x47471f['cpbill'],
					'productid': _0x47471f[_0x1f4b4b(0x28b)],
					'productname': _0x47471f[_0x1f4b4b(0x1db)],
					'productdesc': _0x47471f['productdesc'],
					'serverid': _0x47471f[_0x1f4b4b(0x14e)],
					'servername': _0x47471f['servername'],
					'roleid': _0x47471f['roleid'],
					'rolename': _0x47471f[_0x1f4b4b(0x20f)],
					'rolelevel': _0x47471f['rolelevel'],
					'price': _0x47471f[_0x1f4b4b(0x2ab)],
					'extension': _0x47471f[_0x1f4b4b(0x1d2)],
					'sdk_token': _0x55117d,
					'session_key': _0x2f9921,
					'platform': _0x4bb087['platform']
				};
			_0x2e6854[_0x1f4b4b(0xf0)] = _0x3cbbce;
			var _0x505bce = _0x2e6854['getPublicData']();
			_0x505bce['order_data'] = JSON[_0x1f4b4b(0x232)](_0x3cbbce), wx[_0x1f4b4b(0x185)]({
				'url': HOST + '/partner/order',
				'method': _0x1f4b4b(0x1b8),
				'dataType': _0x1f4b4b(0x127),
				'header': {
					'content-type': 'application/x-www-form-urlencoded'
				},
				'data': _0x505bce,
				'success': function(_0x562e07) {
					var _0x1562c7 = _0x1f4b4b;
					console[_0x1562c7(0x15c)](_0x1562c7(0x1a4)), console['log'](_0x562e07);
					if (_0x562e07[_0x1562c7(0x2b7)] == 0xc8) {
						var _0x294fb4 = _0x562e07['data'];
						_0x294fb4[_0x1562c7(0x26e)] ? typeof wx[_0x1562c7(0x2c9)] == _0x1562c7(0x29c) ? _0x4bb087['platform'] == 'android' || _0x4bb087[_0x1562c7(0x1bd)] == _0x1562c7(0x142) || _0x4bb087['platform'] == _0x1562c7(0x20c) ? _0x294fb4[_0x1562c7(0x29d)][_0x1562c7(0x148)] ? _0x2e6854['kfPay'](_0x294fb4[_0x1562c7(0x29d)]) : _0x2e6854['gamePay'](_0x294fb4[_0x1562c7(0x29d)]) : _0x294fb4[_0x1562c7(0x29d)][_0x1562c7(0x1e1)] ? _0x294fb4[_0x1562c7(0x29d)][_0x1562c7(0x24c)] == 0x1 && _0x2e6854['kfPay'](_0x294fb4['data']) : wx[_0x1562c7(0x22e)]({
							'title': _0x1562c7(0x197),
							'content': _0x1562c7(0x182),
							'confirmText': '我知道了',
							'showCancel': ![]
						}) : _0x2e6854[_0x1562c7(0x150)](_0x294fb4[_0x1562c7(0x29d)]) : _0x5e10c6[_0x1562c7(0x1e8)] && _0x5e10c6['pay'](0x1, {
							'errMsg': _0x294fb4[_0x1562c7(0xcf)]
						});
					} else _0x5e10c6[_0x1562c7(0x295)] && _0x5e10c6[_0x1562c7(0x295)](0x1, {
						'errMsg': _0x1562c7(0x2c1)
					});
				}
			});
		},
		'gamePay': function(_0x562426) {
			var _0x409009 = a0_0x35ce,
				_0x590bbe = this;
			_0x562426[_0x409009(0x161)] <= _0x562426[_0x409009(0x1d8)] ? (console[_0x409009(0x15c)](_0x409009(0x201)), wx[_0x409009(0x22e)]({
				'title': '支付提示',
				'content': _0x409009(0x2af) + _0x562426['balance'] + _0x409009(0x29a) + _0x562426[_0x409009(0x161)] + _0x409009(0x229),
				'showCancel': ![],
				'confirmText': _0x409009(0x20d),
				'success': function() {
					var _0x170b41 = _0x409009;
					_0x590bbe[_0x170b41(0x244)](_0x562426);
				}
			})) : (console[_0x409009(0x15c)]('[SDK]调起米大师支付'), console['log'](_0x562426), wx[_0x409009(0x113)]({
				'mode': 'game',
				'env': _0x562426[_0x409009(0x2b4)],
				'offerId': _0x562426[_0x409009(0x1e5)],
				'currencyType': _0x562426[_0x409009(0xb5)],
				'platform': _0x562426['platform'],
				'buyQuantity': _0x562426[_0x409009(0x161)],
				'zoneId': _0x562426[_0x409009(0x11b)],
				'success': function(_0x29d7a1) {
					var _0x5f4b0b = _0x409009;
					_0x29d7a1[_0x5f4b0b(0x1fa)] == 'requestMidasPayment:ok' && _0x590bbe[_0x5f4b0b(0x244)](_0x562426);
				},
				'fail': function(_0x38ed5b) {
					var _0x137ba3 = _0x409009;
					_0x38ed5b[_0x137ba3(0x1fa)][_0x137ba3(0x1b2)](_0x137ba3(0x1d9)) !== -0x1 ? _0x5e10c6[_0x137ba3(0x1e8)] && _0x5e10c6[_0x137ba3(0x1e8)](0x2, {
						'errMsg': _0x137ba3(0x108)
					}) : _0x5e10c6[_0x137ba3(0x1e8)] && _0x5e10c6[_0x137ba3(0x1e8)](0x1, {
						'errMsg': _0x137ba3(0x291) + _0x38ed5b['errMsg'] + '(' + _0x38ed5b['errCode'] + ')'
					});
				},
				'complete': function(_0x212e92) {}
			}));
		},
		'kfPay': function(_0x151a95) {
			var _0x5c2cfa = a0_0x35ce,
				_0x4dce6b = this;
			this_order_id = _0x151a95[_0x5c2cfa(0x11c)], wx[_0x5c2cfa(0x22e)]({
				'title': _0x5c2cfa(0x197),
				'content': _0x5c2cfa(0x1f2),
				'showCancel': ![],
				'confirmText': _0x5c2cfa(0x20d),
				'success': function() {
					var _0x5803ed = _0x5c2cfa,
						_0x4e6bd2 = {
							'showMessageCard': !![],
							'sendMessageTitle': _0x5803ed(0xe9),
							'sendMessageImg': _0x5803ed(0x26b)
						};
					wx[_0x5803ed(0x25e)](_0x4e6bd2);
				}
			});
		},
		'gameGoPay': function(_0x5f0795, _0x372cf2) {
			var _0x3329ae = a0_0x35ce;
			console[_0x3329ae(0x15c)]('[SDK]米大师支付完毕，通知服务器发货');
			var _0x259ef2 = this,
				_0x5533b7 = wx[_0x3329ae(0xf4)](_0x3329ae(0x1de));
			wx['request']({
				'url': HOST + _0x3329ae(0xd9) + config[_0x3329ae(0x1fb)] + '/' + config[_0x3329ae(0x267)] + '/',
				'method': _0x3329ae(0x1b8),
				'dataType': _0x3329ae(0x127),
				'header': {
					'content-type': _0x3329ae(0x2cd)
				},
				'data': {
					'order_id': _0x5f0795[_0x3329ae(0x11c)],
					'time': _0x5f0795[_0x3329ae(0x18f)],
					'sign': _0x5f0795[_0x3329ae(0x1ed)],
					'session_key': _0x5533b7
				},
				'success': function(_0x5b209d) {
					var _0x1767ed = _0x3329ae;
					console[_0x1767ed(0x15c)](_0x1767ed(0x183)), console[_0x1767ed(0x15c)](_0x5b209d);
					if (_0x5b209d[_0x1767ed(0x2b7)] == 0xc8) {
						if (_0x5b209d[_0x1767ed(0x29d)][_0x1767ed(0x26e)] == 0x1) {
							var _0x439d11 = {
								'cpOrderNo': _0x259ef2[_0x1767ed(0xf0)][_0x1767ed(0x2b0)],
								'orderNo': _0x5f0795[_0x1767ed(0x11c)],
								'amount': _0x259ef2[_0x1767ed(0xf0)][_0x1767ed(0x2ab)],
								'extension': _0x259ef2[_0x1767ed(0xf0)][_0x1767ed(0x1d2)]
							};
							_0x5e10c6[_0x1767ed(0x1e8)] && _0x5e10c6[_0x1767ed(0x1e8)](0x0, _0x439d11);
						} else _0x5e10c6['pay'] && _0x5e10c6[_0x1767ed(0x1e8)](0x1, {
							'errMsg': _0x1767ed(0x245)
						});
					}
				},
				'fail': function() {}
			});
		},
		'logCreateRole': function(_0x11a7b9) {
			var _0x63c509 = a0_0x35ce,
				_0x1ce72d = wx[_0x63c509(0xf4)](_0x63c509(0x2d4)),
				_0x1d88a2 = wx[_0x63c509(0xf4)](_0x63c509(0x24f)),
				_0x536c3d = {};
			_0x536c3d[_0x63c509(0xfd)] = _0x1ce72d, _0x536c3d[_0x63c509(0x12a)] = _0x1d88a2, _0x536c3d[_0x63c509(0x22f)] = _0x11a7b9[_0x63c509(0x2cc)], _0x536c3d[_0x63c509(0x1b4)] = _0x11a7b9['rolelevel'], _0x536c3d[_0x63c509(0x154)] = _0x11a7b9[_0x63c509(0x20f)], _0x536c3d[_0x63c509(0x220)] = _0x11a7b9[_0x63c509(0x14e)], _0x11a7b9[_0x63c509(0x2cc)] && _0x11a7b9['serverid'] && (user_game_info = {
				'role_id': _0x11a7b9[_0x63c509(0x2cc)],
				'server_id': _0x11a7b9['serverid']
			}), this[_0x63c509(0x15c)](_0x63c509(0x237), _0x536c3d);
		},
		'logEnterGame': function(_0x42ad36) {
			var _0x27a1dc = a0_0x35ce,
				_0x3bf3bb = wx['getStorageSync'](_0x27a1dc(0x2d4)),
				_0x2907dd = wx[_0x27a1dc(0xf4)](_0x27a1dc(0x24f)),
				_0x4cc2c7 = {};
			_0x4cc2c7[_0x27a1dc(0xfd)] = _0x3bf3bb, _0x4cc2c7[_0x27a1dc(0x12a)] = _0x2907dd, _0x4cc2c7[_0x27a1dc(0x22f)] = _0x42ad36[_0x27a1dc(0x2cc)], _0x4cc2c7[_0x27a1dc(0x1b4)] = _0x42ad36['rolelevel'], _0x4cc2c7[_0x27a1dc(0x154)] = _0x42ad36[_0x27a1dc(0x20f)], _0x4cc2c7[_0x27a1dc(0x220)] = _0x42ad36['serverid'], _0x42ad36[_0x27a1dc(0x2cc)] && _0x42ad36[_0x27a1dc(0x14e)] && (user_game_info = {
				'role_id': _0x42ad36[_0x27a1dc(0x2cc)],
				'server_id': _0x42ad36['serverid']
			}), this[_0x27a1dc(0x15c)](_0x27a1dc(0x170), _0x4cc2c7);
		},
		'logRoleUpLevel': function(_0x420f74) {
			var _0x249137 = a0_0x35ce,
				_0x508490 = wx[_0x249137(0xf4)]('plat_uid'),
				_0x2d589b = wx[_0x249137(0xf4)]('plat_username'),
				_0x467056 = {};
			_0x467056[_0x249137(0xfd)] = _0x508490, _0x467056[_0x249137(0x12a)] = _0x2d589b, _0x467056[_0x249137(0x22f)] = _0x420f74[_0x249137(0x2cc)], _0x467056[_0x249137(0x1b4)] = _0x420f74[_0x249137(0x1c5)], _0x467056[_0x249137(0x154)] = _0x420f74[_0x249137(0x20f)], _0x467056[_0x249137(0x220)] = _0x420f74[_0x249137(0x14e)], _0x420f74[_0x249137(0x2cc)] && _0x420f74[_0x249137(0x14e)] && (user_game_info = {
				'role_id': _0x420f74[_0x249137(0x2cc)],
				'server_id': _0x420f74[_0x249137(0x14e)]
			}), this[_0x249137(0x15c)](_0x249137(0x16f), _0x467056);
		},
		'uuid': function(_0x6ad498, _0x3ae36d) {
			var _0x4773d7 = a0_0x35ce,
				_0x4d17e2 = _0x4773d7(0x178)[_0x4773d7(0x169)](''),
				_0x26d33a = [],
				_0x5eb089;
			_0x6ad498 = _0x6ad498 || _0x4d17e2[_0x4773d7(0x184)];
			if (_0x3ae36d) {
				for (_0x5eb089 = 0x0; _0x5eb089 < _0x3ae36d; _0x5eb089++) _0x26d33a[_0x5eb089] = _0x4d17e2[0x0 | Math[_0x4773d7(0x227)]() * _0x6ad498];
			} else {
				var _0x140d8b;
				_0x26d33a[0x8] = _0x26d33a[0xd] = _0x26d33a[0x12] = _0x26d33a[0x17] = '-', _0x26d33a[0xe] = '4';
				for (_0x5eb089 = 0x0; _0x5eb089 < 0x24; _0x5eb089++) {
					!_0x26d33a[_0x5eb089] && (_0x140d8b = 0x0 | Math['random']() * 0x10, _0x26d33a[_0x5eb089] = _0x4d17e2[_0x5eb089 == 0x13 ? _0x140d8b & 0x3 | 0x8 : _0x140d8b]);
				}
			}
			return _0x26d33a['join']('');
		},
		'getPublicData': function() {
			var _0x356502 = a0_0x35ce,
				_0x61afff = wx['getSystemInfoSync'](),
				_0x69e2df = wx[_0x356502(0xf4)]('plat_uuid'),
				_0x360d89 = wx[_0x356502(0xf4)](_0x356502(0x173)),
				_0x45796d = wx[_0x356502(0xf4)](_0x356502(0x141)),
				_0x3df33c = wx['getStorageSync']('wx_openid'),
				_0x503a0d = wx['getStorageSync'](_0x356502(0x259));
			return {
				'game_id': config[_0x356502(0x2ac)],
				'game_pkg': config[_0x356502(0x267)],
				'partner_id': config[_0x356502(0x1fb)],
				'ad_code': _0x45796d,
				'uuid': _0x69e2df,
				'idfv': _0x360d89,
				'dname': _0x61afff[_0x356502(0x222)],
				'mac': _0x356502(0x125),
				'net_type': _0x61afff[_0x356502(0x1bf)] == 0x0 ? '4G' : _0x356502(0xce),
				'os_ver': _0x61afff[_0x356502(0x25c)],
				'sdk_ver': _0x61afff[_0x356502(0x277)],
				'game_ver': game_ver,
				'device': _0x61afff[_0x356502(0x1bd)] == _0x356502(0x1f3) ? 0x1 : 0x2,
				'is_from_min': 0x1,
				'wx_openid': _0x3df33c,
				'wx_query': _0x503a0d
			};
		},
		'log': function(_0x40311f, _0x2e44d5) {
			var _0x2be3be = a0_0x35ce,
				_0x5be713 = this[_0x2be3be(0xfb)]();
			for (var _0x137870 in _0x2e44d5) {
				_0x5be713[_0x137870] = _0x2e44d5[_0x137870];
			}
			console[_0x2be3be(0x15c)](_0x2be3be(0x29e) + _0x40311f), console[_0x2be3be(0x15c)](_0x5be713), wx[_0x2be3be(0x185)]({
				'url': HOST + _0x2be3be(0x10d) + _0x40311f + _0x2be3be(0x21b) + encodeURIComponent(JSON[_0x2be3be(0x232)](_0x5be713))
			});
		},
		'getDate': function() {
			var _0x39c1d4 = a0_0x35ce,
				_0x9ebe23 = new Date();
			return _0x9ebe23[_0x39c1d4(0x1cb)]() + '-' + _0x9ebe23['getMonth']() + '-' + _0x9ebe23['getDate']();
		},
		'downloadClient': function() {
			var _0x424caf = a0_0x35ce,
				_0x27b66b = wx[_0x424caf(0xf4)]('wx_openid'),
				_0x146c0f = _0x424caf(0xde) + _0x27b66b;
			wx[_0x424caf(0x22e)]({
				'title': '微端下载提示',
				'content': _0x424caf(0x299),
				'showCancel': ![],
				'confirmText': _0x424caf(0x20d),
				'success': function() {
					var _0x57deb8 = _0x424caf,
						_0x4f7095 = {
							'showMessageCard': !![],
							'sendMessageTitle': _0x146c0f,
							'sendMessageImg': _0x57deb8(0x186)
						};
					wx['openCustomerServiceConversation'](_0x4f7095);
				}
			});
		},
		'checkMsg': function(_0x4eba5c, _0xb42bd8) {
			var _0x3af947 = a0_0x35ce;
			console[_0x3af947(0x15c)]('[SDK]查看文本是否有违规内容');
			var _0xaf5e7a = wx[_0x3af947(0xf4)](_0x3af947(0x147));
			wx[_0x3af947(0x185)]({
				'url': HOST + _0x3af947(0x1ba),
				'method': 'POST',
				'dataType': _0x3af947(0x127),
				'header': {
					'content-type': 'application/x-www-form-urlencoded'
				},
				'data': {
					'game_pkg': config[_0x3af947(0x267)],
					'partner_id': config['partner_id'],
					'sdk_token': _0xaf5e7a,
					'content': _0x4eba5c
				},
				'success': function(_0x1be8d4) {
					var _0x3edc71 = _0x3af947;
					console[_0x3edc71(0x15c)](_0x3edc71(0x276)), _0xb42bd8 && _0xb42bd8(_0x1be8d4['data']['code'] == 0x0 ? 0x1 : 0x0, _0x1be8d4['data'][_0x3edc71(0xcf)]);
				}
			});
		},
		'checkMsgV2': function(_0x47f86a, _0xa4c929) {
			var _0x8b307e = a0_0x35ce;
			console[_0x8b307e(0x15c)](_0x8b307e(0x2b9));
			var _0x36596c = wx['getStorageSync'](_0x8b307e(0x147));
			wx[_0x8b307e(0x185)]({
				'url': HOST + '/game/min/?ac=msgCheckV2',
				'method': _0x8b307e(0x1b8),
				'dataType': _0x8b307e(0x127),
				'header': {
					'content-type': _0x8b307e(0x2cd)
				},
				'data': {
					'game_pkg': config['game_pkg'],
					'partner_id': config[_0x8b307e(0x1fb)],
					'sdk_token': _0x36596c,
					'content': _0x47f86a,
					'scene': 0x1
				},
				'success': function(_0x404b6c) {
					var _0x1a6a05 = _0x8b307e;
					console[_0x1a6a05(0x15c)](_0x1a6a05(0x276)), _0xa4c929 && _0xa4c929(_0x404b6c['data']['code'] == 0x0 ? 0x1 : 0x0, _0x404b6c[_0x1a6a05(0x29d)]['msg']);
				}
			});
		},
		'sendMessage': function(_0x49c888, _0x56232d, _0x37feb1) {
			var _0x22fcfa = a0_0x35ce;
			console[_0x22fcfa(0x15c)](_0x22fcfa(0x272));
			var _0x2745d4 = wx['getStorageSync'](_0x22fcfa(0x147));
			wx[_0x22fcfa(0x185)]({
				'url': HOST + '/game/min/?ac=sendMessage',
				'method': _0x22fcfa(0x1b8),
				'dataType': 'json',
				'header': {
					'content-type': _0x22fcfa(0x2cd)
				},
				'data': {
					'game_pkg': config[_0x22fcfa(0x267)],
					'partner_id': config['partner_id'],
					'sdk_token': _0x2745d4,
					'template_id': _0x49c888,
					'data': _0x56232d
				},
				'success': function(_0x4a57e2) {
					var _0x5f14de = _0x22fcfa;
					console['log'](_0x5f14de(0x1fc)), _0x37feb1 && _0x37feb1(_0x4a57e2[_0x5f14de(0x29d)][_0x5f14de(0x21e)] == 0x0 ? 0x1 : 0x0, _0x4a57e2[_0x5f14de(0x29d)][_0x5f14de(0xcf)]);
				}
			});
		},
		'videoAdvert': function(_0x1fcdd8, _0x1556cf) {
			var _0x390fe1 = a0_0x35ce;
			wx[_0x390fe1(0x185)]({
				'url': HOST + _0x390fe1(0xf9),
				'method': _0x390fe1(0x1b8),
				'dataType': _0x390fe1(0x127),
				'header': {
					'content-type': _0x390fe1(0x2cd)
				},
				'data': {
					'game_pkg': config['game_pkg'],
					'partner_id': config[_0x390fe1(0x1fb)]
				},
				'success': function(_0x814831) {
					var _0x111edd = _0x390fe1,
						_0x273711 = _0x814831['data'][_0x111edd(0x29d)][_0x111edd(0x166)],
						_0x109efc = null,
						_0x4ced9d = {};
					if (wx[_0x111edd(0x211)]) {
						_0x109efc = wx[_0x111edd(0x211)]({
							'adUnitId': _0x273711
						}), _0x109efc[_0x111edd(0x1b1)]()['catch'](function() {
							var _0x136eec = _0x111edd;
							console[_0x136eec(0x15c)](_0x136eec(0x104));
							var _0x316941 = 'adShow';
							_0x109efc[_0x136eec(0xfe)]()[_0x136eec(0x282)](function() {
								var _0x519f63 = _0x136eec;
								return _0x109efc[_0x519f63(0x1b1)]();
							})[_0x136eec(0x285)](function(_0x5249b1) {
								var _0x505a20 = _0x136eec,
									_0x1f7415 = _0x505a20(0xea);
								console[_0x505a20(0x15c)](_0x505a20(0x20e));
							}), (_0x4ced9d = {
								'advert_type': _0x1fcdd8,
								'status': _0x316941
							}, _0x1556cf && _0x1556cf(_0x4ced9d));
						}), _0x109efc[_0x111edd(0x17a)](function(_0x4f5963) {
							var _0x38fdad = _0x111edd;
							console[_0x38fdad(0x15c)](_0x4f5963);
						});
						try {
							_0x109efc[_0x111edd(0x103)] && (_0x109efc[_0x111edd(0x2a1)](_0x109efc[_0x111edd(0x103)]), console[_0x111edd(0x15c)]('videoAdv.offClose卸载成功'));
						} catch (_0x58eab9) {
							console[_0x111edd(0x15c)]('videoAdv.offClose\x20卸载失败'), console[_0x111edd(0x28d)](_0x58eab9);
						}
						_0x109efc[_0x111edd(0x103)] = function(_0x584b21) {
							var _0x34a0ec = _0x111edd;
							if (!_0x109efc) return;
							_0x109efc[_0x34a0ec(0x2a1)]();
							if (_0x584b21 && _0x584b21[_0x34a0ec(0x11a)] || _0x584b21 === undefined) {
								console[_0x34a0ec(0x15c)](_0x34a0ec(0x258));
								var _0x2737cd = 'adReWord';
								_0x4ced9d = {
									'advert_type': _0x1fcdd8,
									'status': _0x2737cd
								}, _0x1556cf && _0x1556cf(_0x4ced9d);
							} else {
								console[_0x34a0ec(0x15c)](_0x34a0ec(0x107));
								var _0x2737cd = _0x34a0ec(0x2cf);
								_0x4ced9d = {
									'advert_type': _0x1fcdd8,
									'status': _0x2737cd
								}, _0x1556cf && _0x1556cf(_0x4ced9d);
							}
						}, _0x109efc['onClose'](_0x109efc[_0x111edd(0x103)]);
					}
				}
			});
		},
		'getGameConfig': function(_0x211cf8) {
			var _0x246ee2 = a0_0x35ce;
			console['log'](_0x246ee2(0x106)), wx[_0x246ee2(0x185)]({
				'url': HOST + _0x246ee2(0xf9),
				'method': _0x246ee2(0x1b8),
				'dataType': 'json',
				'header': {
					'content-type': _0x246ee2(0x2cd)
				},
				'data': {
					'game_pkg': config[_0x246ee2(0x267)],
					'partner_id': config[_0x246ee2(0x1fb)]
				},
				'success': function(_0x541fc4) {
					var _0x1eac80 = _0x246ee2,
						_0x3321f3 = _0x541fc4[_0x1eac80(0x29d)][_0x1eac80(0x29d)];
					console[_0x1eac80(0x15c)](_0x1eac80(0x26f)), console['log'](_0x541fc4[_0x1eac80(0x29d)]);
					var _0x1db7a4 = {};
					_0x1db7a4 = {
						'pay_switch': _0x3321f3[_0x1eac80(0x114)],
						'game_ver': _0x3321f3[_0x1eac80(0x15d)]
					}, _0x211cf8 && _0x211cf8(_0x1db7a4);
				}
			});
		},
		'getUserZhuanduanInfo': function(_0x49c564) {
			var _0x4dfe34 = a0_0x35ce;
			console['log'](_0x4dfe34(0x1b6));
			var _0x82becb = wx[_0x4dfe34(0xf4)](_0x4dfe34(0x147));
			wx[_0x4dfe34(0x185)]({
				'url': HOST + '/?method=user.getUserZhuanduanInfo',
				'method': _0x4dfe34(0x1b8),
				'dataType': _0x4dfe34(0x127),
				'header': {
					'content-type': _0x4dfe34(0x2cd)
				},
				'data': {
					'game_id': config[_0x4dfe34(0x2ac)],
					'game_pkg': config[_0x4dfe34(0x267)],
					'partner_id': config['partner_id'],
					'sdk_token': _0x82becb
				},
				'success': function(_0x5952c4) {
					var _0x15c656 = _0x4dfe34,
						_0x41a5e9 = _0x5952c4[_0x15c656(0x29d)][_0x15c656(0x29d)];
					console[_0x15c656(0x15c)](_0x15c656(0x123));
					var _0xd91a1e = {};
					_0xd91a1e = {
						'download_url': _0x41a5e9['download_url'],
						'password': _0x41a5e9[_0x15c656(0x29b)],
						'service_qq': _0x41a5e9[_0x15c656(0x102)],
						'username': _0x41a5e9[_0x15c656(0x1a2)],
						'is_show': _0x41a5e9['is_show']
					}, _0x49c564 && _0x49c564(_0xd91a1e);
				}
			});
		},
		'openService': function() {
			var _0x294399 = a0_0x35ce;
			wx[_0x294399(0x25e)]();
		}
	};
}

function run(_0x4e33ff, _0x4059ab, _0x31f73c) {
	_0x4e33ff in PARTNER_SDK && PARTNER_SDK[_0x4e33ff](_0x4059ab, _0x31f73c);
}

function a0_0x35ce(_0x5213bd, _0xe27e9) {
	var _0x422f2 = a0_0x422f();
	return a0_0x35ce = function(_0x35cec6, _0x23413e) {
		_0x35cec6 = _0x35cec6 - 0xad;
		var _0x2dfa17 = _0x422f2[_0x35cec6];
		return _0x2dfa17;
	}, a0_0x35ce(_0x5213bd, _0xe27e9);
}
exports[a0_0x9d38d7(0x13f)] = function(_0x419923, _0x3248b4) {
	run('init', _0x419923, _0x3248b4);
}, exports[a0_0x9d38d7(0x295)] = function(_0x4a4803) {
	var _0x54383f = a0_0x9d38d7;
	run(_0x54383f(0x295), '', _0x4a4803);
}, exports[a0_0x9d38d7(0x1e8)] = function(_0x151060, _0x5b18a6) {
	var _0x21fece = a0_0x9d38d7;
	run(_0x21fece(0x1e8), _0x151060, _0x5b18a6);
}, exports[a0_0x9d38d7(0x120)] = function(_0x5b15de, _0x3ec69a, _0x59ad5b, _0x394a7a, _0x1f393d) {
	var _0x203805 = a0_0x9d38d7,
		_0x2f40d4 = {
			'serverid': _0x5b15de,
			'servername': _0x3ec69a,
			'roleid': _0x59ad5b,
			'rolename': _0x394a7a,
			'rolelevel': _0x1f393d
		};
	run(_0x203805(0x120), _0x2f40d4);
}, exports[a0_0x9d38d7(0xe6)] = function(_0x45d6c8, _0x580024, _0x208318, _0x4ef7bb, _0x5eab7e) {
	var _0x4b7ed8 = {
		'serverid': _0x45d6c8,
		'servername': _0x580024,
		'roleid': _0x208318,
		'rolename': _0x4ef7bb,
		'rolelevel': _0x5eab7e
	};
	run('logEnterGame', _0x4b7ed8);
}, exports[a0_0x9d38d7(0x19c)] = function(_0x467f50, _0x45c5e6, _0x29b919, _0x360818, _0x3b39a2) {
	var _0x49d2c7 = {
		'serverid': _0x467f50,
		'servername': _0x45c5e6,
		'roleid': _0x29b919,
		'rolename': _0x360818,
		'rolelevel': _0x3b39a2
	};
	run('logRoleUpLevel', _0x49d2c7);
}, exports[a0_0x9d38d7(0x189)] = function() {
	var _0xf83a1 = a0_0x9d38d7;
	run(_0xf83a1(0x189));
}, exports[a0_0x9d38d7(0x109)] = function() {
	var _0x2e5f7d = a0_0x9d38d7;
	return {
		'game_id': config[_0x2e5f7d(0x2ac)],
		'game_pkg': config[_0x2e5f7d(0x267)],
		'partner_id': config[_0x2e5f7d(0x1fb)]
	};
}, exports[a0_0x9d38d7(0xfb)] = function() {
	run('getPublicData');
}, exports['checkMsg'] = function(_0x2e1016, _0x222789) {
	var _0x493f7c = a0_0x9d38d7;
	run(_0x493f7c(0xd4), _0x2e1016, _0x222789);
}, exports['checkMsgV2'] = function(_0x22ef50, _0x500231) {
	var _0x219fff = a0_0x9d38d7;
	run(_0x219fff(0x1ec), _0x22ef50, _0x500231);
}, exports['sendMessage'] = function(_0x528c3a, _0x553eed, _0x418f48) {
	run('sendMessage', _0x528c3a, _0x553eed, _0x418f48);
}, exports[a0_0x9d38d7(0x2ad)] = function(_0x16d92c, _0x316c6a) {
	var _0x1a8ea4 = a0_0x9d38d7;
	run(_0x1a8ea4(0x2ad), _0x16d92c, _0x316c6a);
}, exports[a0_0x9d38d7(0x25b)] = function(_0x38cfcc) {
	var _0x15a8e9 = a0_0x9d38d7;
	run(_0x15a8e9(0x25b), _0x38cfcc);
}, exports['getUserZhuanduanInfo'] = function(_0x24e5b6) {
	var _0x2f3101 = a0_0x9d38d7;
	run(_0x2f3101(0x207), _0x24e5b6);
}, exports[a0_0x9d38d7(0x2c4)] = function() {
	var _0x1ed2ab = a0_0x9d38d7;
	run(_0x1ed2ab(0x2c4));
};
var __extends = this && this['__extends'] || (function() {
	var _0x539fb9 = a0_0x9d38d7,
		_0x37ae59 = Object[_0x539fb9(0x153)] || {
			'__proto__': []
		}
	instanceof Array && function(_0x1640d8, _0x224719) {
		var _0x183d6a = _0x539fb9;
		_0x1640d8[_0x183d6a(0x281)] = _0x224719;
	} || function(_0x8f72ed, _0x5c3acd) {
		for (var _0x4adebc in _0x5c3acd)
			if (_0x5c3acd['hasOwnProperty'](_0x4adebc)) _0x8f72ed[_0x4adebc] = _0x5c3acd[_0x4adebc];
	};
	return function(_0x414696, _0x5a6107) {
		var _0x72ea1b = _0x539fb9;
		_0x37ae59(_0x414696, _0x5a6107);

		function _0x9f4c20() {
			var _0xb5fe8c = a0_0x35ce;
			this[_0xb5fe8c(0x1d0)] = _0x414696;
		}
		_0x414696[_0x72ea1b(0x10f)] = _0x5a6107 === null ? Object['create'](_0x5a6107) : (_0x9f4c20[_0x72ea1b(0x10f)] = _0x5a6107[_0x72ea1b(0x10f)], new _0x9f4c20());
	};
}());
window[a0_0x9d38d7(0x19b)] = a0_0x9d38d7(0x23d), window[a0_0x9d38d7(0x27c)] = !![], window[a0_0x9d38d7(0x1a9)] = null, window[a0_0x9d38d7(0xf5)] = null, window[a0_0x9d38d7(0x275)] = null, window[a0_0x9d38d7(0x11f)] = '', window[a0_0x9d38d7(0x1fd)] = null, window['QCSDK'] = PARTNER_SDK, window[a0_0x9d38d7(0x134)] = null, window['MainCode'] = null, window[a0_0x9d38d7(0x180)] = function() {}, ask_pay = function(_0x25ce33, _0x457b43, _0x4ae529, _0xb42b23, _0x4d128b, _0x487305) {
	var _0x59ef38 = a0_0x9d38d7;
	QCSDK[_0x59ef38(0x1e8)](payInfo, callback);
}, player_create = function(_0x93cbe, _0x218e93, _0x48a1a8) {
	var _0xe5ddbe = a0_0x9d38d7;
	QCSDK[_0xe5ddbe(0x120)](userData[_0xe5ddbe(0x174)][_0xe5ddbe(0x220)], userData[_0xe5ddbe(0x174)][_0xe5ddbe(0x11f)], _0x93cbe, _0x218e93, _0x48a1a8);
}, player_login = function(_0x34a4a8, _0x265823, _0x3054a2) {
	var _0x472900 = a0_0x9d38d7;
	QCSDK[_0x472900(0xe6)](userData[_0x472900(0x174)][_0x472900(0x220)], userData[_0x472900(0x174)]['name'], _0x34a4a8, _0x265823, _0x3054a2);
}, player_level_up = function(_0x4aa17b, _0x41c886, _0x3e16eb) {
	var _0x345be4 = a0_0x9d38d7;
	QCSDK['logRoleUpLevel'](userData['selected_server'][_0x345be4(0x220)], userData[_0x345be4(0x174)]['name'], _0x4aa17b, _0x41c886, _0x3e16eb);
}, record_step = function(_0x2408f4, _0x411941) {
	var _0x2b41a2 = a0_0x9d38d7,
		_0x5804f7 = 0x0,
		_0xbc5b04;
	userData[_0x2b41a2(0x117)] === 0x1 && (_0x5804f7 = userData[_0x2b41a2(0x174)][_0x2b41a2(0x220)]);
	_0x2408f4 > 0x3 && (_0x5804f7 = userData[_0x2b41a2(0x174)][_0x2b41a2(0x220)]);
	_0xbc5b04 = base64_encode('game/node/' + userData[_0x2b41a2(0x15b)] + '/' + _0x5804f7 + '/' + userData[_0x2b41a2(0x24e)] + '/' + _0x2408f4 + '/' + userData[_0x2b41a2(0x2a9)] + '/' + userData[_0x2b41a2(0x1ed)] + '/' + _0x411941 + '/' + userData[_0x2b41a2(0x253)]);
	var _0x5bb87e = new Laya[(_0x2b41a2(0x1e4))]();
	_0x5bb87e[_0x2b41a2(0x255)](WeChatUI[_0x2b41a2(0x100)][_0x2b41a2(0x138)] + _0xbc5b04, null, _0x2b41a2(0xff)), _0x5bb87e[_0x2b41a2(0xf7)](Laya['Event'][_0x2b41a2(0x1a5)], this, function(_0xe6714a) {});
}, req_server_list = function() {}, showProgressInterface = function(_0x3f419f, _0x8e44aa, _0x5a22df, _0x3793d8) {
	var _0xddb6e9 = a0_0x9d38d7;
	window[_0xddb6e9(0x1fd)] && window[_0xddb6e9(0x1fd)][_0xddb6e9(0xbd)](_0x3793d8);
}, updateTotalProgress = function(_0x2f2816) {
	var _0x18b47e = a0_0x9d38d7;
	_0x2f2816 == -0x2 && window[_0x18b47e(0x1fd)] && window['loadView']['destroy']();
}, reqRecordError = function(_0x47bf51) {}, player_share = function(_0x41808a, _0x152544) {
	QCSDK['share'](type);
}, player_realname = function(_0x11786c) {}, player_follow = function(_0x28f216, _0x8cb64e) {}, player_bindphone = function(_0x57632c) {}, firstEnterGameScene = function() {}, openLogin = function() {
	var _0x80347f = a0_0x9d38d7;
	Laya['loader'][_0x80347f(0xfe)]('res/atlas/login.atlas', Laya[_0x80347f(0x139)][_0x80347f(0x237)](null, function() {
		var _0x551f32 = _0x80347f,
			_0x2629c4 = new WeChatUI[(_0x551f32(0x121))]();
		Laya[_0x551f32(0xf3)]['addChild'](_0x2629c4);
	}));
}, window[a0_0x9d38d7(0x193)] = function(_0x26dfd9) {
	var _0x13dacb = a0_0x9d38d7,
		_0x340112, _0x3a533f, _0x78d5c0, _0x349cc4 = _0x13dacb(0xcc),
		_0x8ed712 = 0x0,
		_0x1583d4 = _0x26dfd9[_0x13dacb(0x184)],
		_0x29c152 = '';
	while (_0x8ed712 < _0x1583d4) {
		_0x340112 = _0x26dfd9[_0x13dacb(0x149)](_0x8ed712++) & 0xff;
		if (_0x8ed712 == _0x1583d4) {
			_0x29c152 += _0x349cc4[_0x13dacb(0x233)](_0x340112 >> 0x2), _0x29c152 += _0x349cc4[_0x13dacb(0x233)]((_0x340112 & 0x3) << 0x4), _0x29c152 += '==';
			break;
		}
		_0x3a533f = _0x26dfd9[_0x13dacb(0x149)](_0x8ed712++);
		if (_0x8ed712 == _0x1583d4) {
			_0x29c152 += _0x349cc4[_0x13dacb(0x233)](_0x340112 >> 0x2), _0x29c152 += _0x349cc4[_0x13dacb(0x233)]((_0x340112 & 0x3) << 0x4 | (_0x3a533f & 0xf0) >> 0x4), _0x29c152 += _0x349cc4[_0x13dacb(0x233)]((_0x3a533f & 0xf) << 0x2), _0x29c152 += '=';
			break;
		}
		_0x78d5c0 = _0x26dfd9['charCodeAt'](_0x8ed712++), _0x29c152 += _0x349cc4[_0x13dacb(0x233)](_0x340112 >> 0x2), _0x29c152 += _0x349cc4['charAt']((_0x340112 & 0x3) << 0x4 | (_0x3a533f & 0xf0) >> 0x4), _0x29c152 += _0x349cc4['charAt']((_0x3a533f & 0xf) << 0x2 | (_0x78d5c0 & 0xc0) >> 0x6), _0x29c152 += _0x349cc4['charAt'](_0x78d5c0 & 0x3f);
	}
	return _0x29c152;
}, window['nameGenerator'] = {
	'familyNames': ['赵', '蒋', '孔', '柏', '鲁', '酆', '滕', '皮', '和', '米', '熊', '席', '梅', '樊', '经', '郁', '程', '甄', '井', '车', '宁', '景', '印', '卓', '闻', '冉', '边', '柴', '向', '都', '欧', '晁', '曾', '查', '万俟', '澹台', '', '钟离', '寸', '翠', '富察', '税', '泰', '求', '旁', '禾', '冒', '悟', '苟', '佼', '旷', '叔', '焉', '肇', '徭', '郯', '锁', '磨', '同', '卷', '斯', '户', '寒', '揭', '弥', '塔', '腾', '濯', '驹', '鲜', '门', '载', '修', '五', '丘', '让', '零', '励', '原', '竹', '南宫', '后', '百里', '壤驷', '鲜于', '公良', '钱', '沈', '曹', '水', '韦', '鲍', '殷', '卞', '穆', '贝', '纪', '季', '盛', '胡', '房', '单', '嵇', '段', '侯', '仇', '詹', '宿', '蔺', '莘', '宰', '扈', '瞿', '古', '耿', '勾', '毋', '司马', '公冶', '宇文', '贰', '狂', '费莫', '荤', '秘', '羽', '崇', '保', '宏', '随', '玄', '遇', '圣', '戏', '资', '蛮', '邗', '钟', '完', '闭', '少', '祈', '阿', '琦', '潮', '沐', '骑', '粟', '盈', '声', '信', '令', '义', '尧', '谌', '粘', '考', '百', '赏', '况', '钦', '乐正', '锺离', '孙', '韩', '严', '窦', '昌', '史', '齐', '萧', '明', '舒', '麻', '林', '凌', '裘', '杭', '邢', '家', '富', '宓', '栾', '束', '白', '屠', '党', '郦', '燕', '阎', '易', '满', '沃', '敖', '沙', '荆', '上官', '宗政', '长孙', '皇', '辟', '蹇', '靖', '亥', '用', '栋', '功', '类', '乘', '偶', '御', '可', '合', '汗', '邛', '机', '瓮', '止', '谬', '丹', '才', '析', '素', '闪', '镜', '茂', '貊', '栗', '庆', '漫', '闽', '将', '礼', '依', '招', '萨', '妫', '福', '伯', '亢', '鄢', '漆雕', '盖', '开', '李', '杨', '华', '章', '马', '唐', '毕', '康', '尹', '臧', '屈', '强', '刁', '霍', '缪', '洪', '滑', '封', '巫', '蓬', '暴', '龙', '怀', '蒙', '翟', '雍', '冀', '充', '慎', '弘', '利', '融', '乜', '红', '欧阳', '濮阳', '慕容', '侨', '典', '称', '绪', '绍', '占', '告', '委', '抄', '庚', '卯', '裔', '前', '夫', '智', '仍', '孛', '剑', '盘', '弭', '戢', '蹉', '表', '无', '桥', '赤', '长', '始', '似', '英', '虎', '豆', '喜', '犁', '北', '旗', '慈', '犹', '续', '邝', '纳', '言', '佴', '缑', '汝', '公西', '逯', '光', '周', '朱', '金', '云', '苗', '费', '郝', '伍', '姚', '计', '项', '贾', '锺', '虞', '包', '裴', '芮', '乌', '全', '甘', '叶', '蒲', '池', '谭', '却', '僪', '慕', '戈', '匡', '蔚', '冷', '养', '游', '夏侯', '淳于', '司徒', '彤', '良', '诺', '愈', '以', '真', '休', '钊', '定', '务', '俟', '延', '由', '仆', '尔', '九', '乾', '虢', '铎', '刀', '睢', '赧', '聊', '书', '板', '紫', '僧', '星', '澄', '兰', '肥', '帛', '及', '力', '守', '军', '孝', '介', '达', '覃', '泉', '第五', '佘', '帅', '法', '巫马', '库', '频', '化', '敏', '友', '植', '咎', '镇', '凭', '衷', '帖', '隋', '斛', '疏', '冼', '浮', '源', '学', '斐', '青', '隐', '南', '潭', '檀', '鹿', '官', '普', '贸', '坚', '行', '理', '承', '忻', '辜', '老', '佟', '牟', '微生', '闫', '端木', '郏', '瑞', '郑', '尤', '陶', '潘', '花', '岑', '安', '元', '湛', '成', '董', '娄', '邱', '支', '应', '左', '荣', '储', '巴', '班', '历', '司', '从', '阳', '劳', '桑', '尚', '茹', '庾', '文', '夔', '辛', '须', '权', '闻人', '太叔', '召', '端', '芒', '多', '牢', '森', '翦', '谏', '嬴', '莱', '捷', '答', '环', '塞', '藩', '悉', '哀', '罕', '蒿', '玉', '牵', '种', '顿', '姓', '愚', '独', '柔', '仙', '天', '謇', '藤', '雀', '布', '建', '勤', '勇', '奉', '伦', '市', '六', '初', '清', '爱', '商', '羊舌', '楚', '逢', '眭', '王', '许', '姜', '葛', '方', '薛', '常', '卜', '汪', '戴', '梁', '危', '骆', '柯', '宗', '石', '翁', '靳', '弓', '仰', '戎', '韶', '鄂', '逄', '桂', '农', '习', '终', '寇', '隆', '阚', '丰', '逮', '东方', '申屠', '有', '赫', '苦', '繁', '买', '斋', '闾', '锐', '呼', '校', '拱', '乙', '矫', '敛', '邸', '进', '刑', '洛', '茆', '线', '浑', '涂', '说', '吾', '本', '千', '刚', '隽', '接', '纵', '枝', '野', '衣', '营', '革', '汉', '敬', '卿', '所', '鄞', '楼', '德', '年', '西门', '海', '晋', '子车', '阴', '泥', '冯', '何', '戚', '奚', '俞', '雷', '乐', '顾', '祁', '谈', '杜', '江', '高', '昝', '丁', '崔', '荀', '汲', '牧', '秋', '祖', '郜', '索', '胥', '姬', '濮', '温', '宦', '暨', '广', '师', '那', '巢', '盍', '赫连', '公孙', '舜', '实', '其', '戊', '但', '释', '漆', '皋', '大', '么', '兆', '允', '赛', '受', '府', '笃', '俎', '淦', '菅', '针', '恽', '肖', '次', '寻', '性', '诗', '奇', '宇', '波', '渠', '检', '禽', '藏', '巨', '改', '练', '恭', '问', '苑', '战', '城', '卑', '笪', '东门', '归', '谷梁', '督', '薄', '运', '陈', '吕', '谢', '范', '任', '贺', '于', '孟', '毛', '宋', '阮', '童', '夏', '管', '宣', '吉', '羊', '邴', '隗', '仲', '武', '黎', '咸', '能', '申', '牛', '别', '艾', '居', '禄', '巩', '简', '关', '益', '皇甫', '仲孙', '甫', '京', '朴', '巧', '奕', '贵', '闳', '威', '抗', '丑', '甲', '昔', '泷', '掌', '厚', '仵', '洋', '苌', '箕', '势', '己', '错', '展', '雪', '嘉', '拜', '祭', '碧', '奈', '生', '飞', '宝', '望', '兴', '尉', '仪', '永', '杞', '迟', '区', '过', '谯', '左丘', '呼延', '宰父', '仉', '厉', '摩', '褚', '施', '邹', '彭', '袁', '倪', '时', '平', '禹', '茅', '蓝', '颜', '蔡', '卢', '贲', '钮', '於', '糜', '山', '伊', '符', '蓟', '籍', '苍', '扶', '寿', '庄', '鱼', '衡', '阙', '厍', '饶', '蒯', '桓', '尉迟', '令狐', '丛', '集', '中', '回', '枚', '姒', '代', '在', '昂', '祢', '丙', '留', '侍', '袭', '首', '仁', '圭', '邶', '树', '庹', '世', '泣', '念', '出', '霜', '扬', '佛', '酒', '速', '风', '折', '节', '钞', '希', '亓', '士', '母', '辉', '剧', '候', '局', '麦', '哈', '梁丘', '南门', '夹谷', '司寇', '稽', '伟', '卫', '张', '喻', '郎', '柳', '汤', '傅', '狄', '庞', '闵', '郭', '田', '莫', '邓', '龚', '惠', '松', '谷', '宫', '刘', '溥', '赖', '双', '堵', '通', '晏', '容', '步', '东', '聂', '空', '相', '公', '公羊', '轩辕', '岳', '象', '夕', '毓', '撒', '朋', '贯', '歧', '律', '綦', '畅', '尾', '度', '衅', '员', '业', '夷', '郸', '桐', '绳', '仝', '潜', '夙', '不', '烟', '善', '陀', '淡', '禚', '春', '登', '宜', '银', '道', '睦', '旅', '堂', '位', '第', '宛', '台', '曲', '墨', '琴', '东郭', '拓跋', '亓官', '闾丘', '铁'],
	'symbols': ['℡', '°', 'i', '◤', '♛', 'じ', '▃', '╋', 'ㄨ', '﹏', '☆', '╮', '╰', 'う', '━', '卐', '※', '∝', '★', '≡\x20', '╩', '╓', '╗', '╚', '◥', '¤', '№', '§', '∮', '√', '◆', '▔', '◢', '◣', '、', '·', '≡', '╝', '╔', '╬', '═', '┠', '┨', '┯', '┷', '┏', '┓', '┗', '┛', '┳', '⊥', '『', '↑', '↓', '→', '←', '↘', '↙', '♀', '♂', '┇', '┅', '∵', '∴', '‖', '︱', '︳', '囧', '⊙', '●', '○', '⊕', '◎', 'Θ'],
	'commonPrefix': ['囚心', '路人', '北眼', '心刺', '曾将', '够钟', '灼热', '闭关', '荒年', '放生', '凉薄', '放弃', '逆光', '疲惫', '指忘', '拥有', '像你', '悬崖', '裸钻', '顾忌', '毁梦', '念你', '鈊疼', '神经', '隐藏', '暖伴', '揪心', '猫九', '兲蛋', '溺毙', '陌忘', '刺痛', '溺爱', '柠檬', '奢望', '怨我', '断爱', '浅亡', '梦你', '矫情', '落墨', '沉世', '静谧', '忆白', '奢求', '归处', '七眠', '怪癖', '怀抱', '北海', '归人', '浪屿', '倔强', '旧城', '微酒', '搁浅', '淡别', '淡网', '苦酒', '酒客', '刺青', '闷热', '强挽', '浪咖', '平庸', '寄曲', '耳熟', '半醉', '绺欢', '闹巷', '远思', '厌烦', '荒途', '带刺', '心稳', '落潮', '逞笑', '孤友', '秋暮', '固执', '难挨', '伪善', '配角', '热水', '迎夏', '梦魇', '懦弱', '爱惜', '北觅', '东寻', '戒躁', '消逝', '过客', '无畏', '长安', '征途', '心抑', '现实', '拒丧', '魇九', '另类', '旧故', '难处', '深腻', '寒潮', '听孤', '薄荷', '幼稚', '清晓', '风尘', '诉说', '舌味', '自赎', '亵渎', '辞取', '纵行', '凉墨', '善变', '哑巴', '贪生', '砒霜', '寡言', '忘羡', '偏执', '败类', '任性', '大牌', '识趣', '无憾', '取悦', '沉醉', '普通', '皆叹', '惦念', '微笑', '夜声', '若久', '強荵', '爱笑', '放手', '邂逅', '玩家', '九夜', '芈妖', '血煞', '良辰', '君赋', '抬举', '闲云', '念旧', '清明', '河图', '玩具', '悲凉', '孤者', '柠凉', '卷鬓', '热吻', '笑脸', '散落', '厌世', '贪世', '世俗', '倒带', '叛逆', '脆弱', '孤身', '孤刺', '禁锢', '深碍', '遣心', '丑态', '游魂', '情丝', '依赖', '空城', '浪潮', '转角', '独瘾', '皱眉', '囚鸟', '烫嘴', '断点', '衬心', '妄念', '夏末', '猫弦', '情伤', '救赎', '失意', '傀儡', '痞爺', '啊呸', '默念', '孤傲', '孤城', '葬訫', '孤岛', '墨凉', '陌路', '彼岸', '初遇', '余醉', '深巷', '青稚', '情殇', '纪年', '嫑脸', '顾念', '墨残', '凉城', '墨染', '浅夏', '藍調', '孤痞', '孤寡', '孤心', '怣梦', '余欢', '錯過', '残忆', '失語', '槿城', '殇泪', '呆橘', '腻歪', '死撑', '凉心', '陌殇', '葬爱', '北暖', '倾寒', '青冢', '暮雨', '绝戀', '蔸蔸', '累勒', '菰犭虫', '无心', '墨痕', '木兮', '陌然', '浅歌'],
	'manPrefix': ['难酬', '孤檠', '乞讨', '狗带', '杀青', '热欲', '对手', '抽离', '贪新', '蜜酒', '体味', '爱囚', '无碍', '荣光', '利刃', '认怂', '刃白', '拂扇', '侠骨', '烟海', '话梗', '对味', '命硬', '烟徒', '犊子', '乞丐', '驼背', '魔王', '绅士', '狂神', '单杀', '孽徒', '逆战', '亡屍', '雅痞'],
	'manSuffix': ['玮桦', '嘉明', '禹锡', '智涛', '磊贯', '嘉恩', '启儒', '帆松', '荣衡', '锡杭', '成炫', '颖禹', '鹏儒', '亮尧', '清瑄', '烽狄', '衡龙', '梁羲', '经崴', '思彬', '帆少', '善颖', '少靖', '兆威', '仲盛', '道道', '谦瀚', '金树', '旭伟', '鹏航', '杭喜', '锡河', '以飞', '秋海', '广振', '衡民', '正滨', '钧清', '宸靖', '腾镇', '绍龙', '朗杭', '景坤', '宏刚', '泽广', '兆澄', '衡林', '隽盛', '卫杰', '海升', '廷宇', '金喜', '熙雷', '健栋', '道宸', '恒元', '品中', '俊宗', '权敬', '炫奕', '敬辰', '喜飞', '以枫', '城麟', '君伊', '朗玮', '雷子', '隆克', '荣敬', '建钢', '林瀚', '诚敬', '威春', '基键', '威成', '旭国', '嘉彬', '衡渝', '彪弘', '锋友', '杰渝', '树鸿', '震谦', '宏平', '岳才', '宏新', '羲若', '思泰', '群祥', '仁建', '以儒', '滨禹', '钢顺', '桂畅', '然峰', '锦楚', '昌皓', '汉群', '斌春', '麟广', '逸振', '雨军', '良杭', '仁格', '利坤', '杰禹', '田熙', '宥峰', '炎峰', '信俊', '威尧', '希峻', '然阳', '光阳', '廷颂', '晨宸', '楠宸', '学绍', '言青', '金琛', '迅贤', '迅鑫', '熙钧', '汉正', '若佳', '勤城', '锦杭', '泽毅', '信贯', '浩勇', '君威', '尧力', '铭勇', '骏旭', '信炎', '靖仲', '宸尧', '绍霆', '彪森', '光锡', '敬诚', '经羲', '廷劲', '翰生', '腾岩', '兴信', '青烽', '健裕', '辰畅', '以曦', '弘广', '若敬', '森亦', '汉寒', '大新', '学思', '鹏立', '迅坤', '锌宁', '宸宸', '毅旭', '翔翔', '润炎', '钧桂', '宏百', '骏成', '泽恒', '承德', '颖新', '森伊', '仁雷', '梁朋', '超昌', '晏铭', '楚朗', '炎然', '霏琛', '雷善', '雷君', '梁臣', '榕茂', '畅心', '畅慧', '学浚', '威绍', '武翔', '聪升', '健锦', '蓝江', '汉利', '澄田', '奕明', '森建', '凯炎', '司弘', '国宁', '颂春', '俊畅', '伦翔', '元曦', '克顺', '蓝宇', '炎敬', '品聪', '楠泽', '祥朝', '汉瑄', '弘彪', '楠颂', '青纶', '庆辉', '山绍', '君建', '安云', '智宇', '峰启', '浩宏', '才聪', '朋元', '楠朋', '彪勤', '嘉家', '侨蓝', '颂楠', '恩伟', '才亮', '田锌', '力杉', '颂希', '锋振', '茂河', '曦健', '言皓', '承树', '楚嘉', '泰刚', '林浩', '群彪', '同松', '祖贤', '雷威', '升恒', '天慧', '成健', '骏颖', '达秋', '洋奕', '秦腾', '钧源', '成鸣', '龙才', '慧恒', '敬顺', '逸纯', '骏奕', '金栋', '良品', '平嘉', '生锦', '中哲', '俊阳', '畅亚', '澄驰', '哲江', '京鑫', '劲才', '鹏栋', '虹聪', '广权', '宥帆', '利翰', '帆恩', '臣彬', '彪成', '波烽', '烽经', '飞绍', '品杰', '彪天', '霆伟', '喜曦', '利恒', '子大', '飞翔', '宏经', '庆以', '超春', '旭亦', '坚云', '博森', '岳世', '山启', '道田', '学梁', '光国', '权西', '伟京', '鸿松', '启旭', '维权', '青康', '皇基', '利大', '兆皇', '伦朗', '纯彬', '言学', '兆刚', '民贤', '家基', '豪斌', '狄杰', '豪盛', '慧皓', '志渝', '臣信', '冠翰', '少劲', '庆烽', '若然', '瀚锋', '浩林', '梁经', '宇骏', '隽喜', '宏炎', '金宗', '经子', '敬学', '润郴', '瀚辰', '廷嘉', '卫源', '润文', '光基', '伦茂', '田栋', '家成', '中经', '彬平', '良鹏', '霖永', '树仁', '颂杜', '浩锌', '汉秦', '杉曦', '百山', '恩生', '德泽', '聪峰', '剑楚', '正寒', '树华', '剑劲', '仁岳', '虹劲', '思世', '卫恩', '思绍', '绍杉', '然凌', '昌君', '雨广', '玮隽', '澄蓝', '桂阳', '翔风', '树朋', '云谦', '逸俊', '靖蓝', '鸣以', '克钢', '思钧', '曦树', '熙彬', '茂云', '希维', '寒东', '亮澄', '百谦', '博颖', '豪星', '宇聪', '纯康', '磊崴', '仁青', '鸣广', '星颂', '朗卓', '谦坚', '信杉', '琛朋', '纯炎', '广刚', '振若', '亚尊', '汉隽', '云群', '力雷', '良伦', '锋霆', '品麟', '麟刚', '鸿伟', '茂骏', '宇嘉', '平凯', '贤森', '雷道', '尊广', '镇元', '伟麟', '海元', '帆雨', '彦健', '友隽', '卓军', '威维', '弘锌', '元钧', '震尧', '迅嘉', '涛健', '格凌', '皇祖', '齐盛', '信钧', '光隆', '昌宇', '春子', '心仁', '凯国', '品霖', '冠传', '武志', '振祥', '经智', '信若', '廷波', '以聪', '德颂', '云崴', '雷锡', '正钢', '德晏', '仲润', '绍旭', '军蓝', '霏朋', '西奕', '彦元', '宏城', '然臣', '康俊', '翰飞', '灿桂', '华泽', '钧哲', '驹乐', '秦才', '凌正', '翔聪', '祖庆', '风杉', '熙群', '凌劲', '廷成', '利义', '禹翔', '民锌', '敬锦', '力祥', '波泽', '力驹', '玮亚', '学昌', '博田', '道哲', '寒永', '仁云', '剑迅', '田廷', '勤宏', '信青', '儒秋', '子建', '佳秋', '亮鹏', '林腾', '崴成', '臣星', '杰亦', '世品', '超峰', '茂基', '毅信', '司羲', '凌茂', '希权', '达以', '以元', '磊宸', '泽康', '田涛', '源隆', '京友', '震洋', '东剑', '榕亚', '键渝', '磊彬', '锋威', '朗成', '波峰', '榕武', '曦宥', '青伦', '恒贯', '世才', '佑曦', '弘桂', '裕青', '郴榕', '力佳', '奕隽', '汉弘', '坤宇', '磊雨', '霏麟', '新钢', '嘉朗', '明志', '健达', '宏源', '清豪', '雷雄', '纶祥', '世元', '浩嘉', '劲宇', '格茂', '仲钧', '品诚', '梁升', '斌航', '平百', '驰伦', '品江', '勇佳', '迅刚', '泽迅', '宏中', '亮飞', '武树', '浩武', '维林', '元友', '杰楚', '权乐', '海基', '兆汉', '浩朝', '祖滨', '楠齐', '亮隽', '键大', '瑄奕', '光桂', '武刚', '春达', '梁虹', '利琛', '亦国', '宁玮', '成畅', '大军', '瑄隽', '世宸', '岳成', '铭鸣', '迅旭', '骏超', '宇云', '松狄', '庆杉', '恒郴', '波键', '家泽', '亚宏', '冠伦', '虹贤', '泽青', '基亚', '世琛', '靖天', '金东', '圣华', '博恩', '克宇', '朋安', '克威', '杰哲', '驰子', '建城', '言鸿', '麟思', '少琛', '劲海', '东勇', '润栋', '朝狄', '禹克', '秋翔', '平圣', '树琛', '逸源', '以纯', '强皇', '恩朝', '狄雷', '维瑄', '百德', '锋彬', '基亦', '侨基', '心秦', '驹畅', '武皇', '鸿志', '天文', '旭武', '皇斌', '寒西', '宏聪', '宇金', '刚群', '尊曦', '学宇', '奇滨', '光良', '俊康', '杰维', '西翦', '翰刚', '雄麟', '瀚钢', '奕尧', '景驹', '希金', '品强', '天鹏', '贯学', '东俊', '麟大', '凯敬', '宇阳', '晏毅', '若绍', '锦超', '阳中', '宗伊', '浚坤', '锌瑄', '明翰', '传光', '群永', '正梁', '顺冠', '嘉浩', '以桂', '飞城', '麟同', '信广', '廷西', '锡义', '喜才', '才康', '岩诚', '岩春', '田西', '佳锦', '希哲', '建琛', '纶驹', '诚磊', '鸿儒', '森钧', '光品', '奕键', '迅克', '云京', '光逸', '桦乐', '浩康', '国卫', '羲飞', '涛凌', '纶承', '宗同', '狄同', '尊斌', '翦磊', '仁盛', '承仲', '航羲', '渝翦', '麟柏', '斌生', '光钧', '志雨', '言隽', '伦凌', '裕世', '翔以', '亦君', '健豪', '羲品', '利国', '春百', '亮旭', '朝兆', '海伟', '鸣炎', '启鸣', '强铭', '帆民', '荣梁', '岳畅', '弘圣', '亚峻', '毅司', '成传', '聪尊', '家源', '天翦', '君鸣', '熙金', '信生', '晨明', '同杉', '承豪', '西尊', '安皓', '以恩', '朗宗', '栋驹', '谦玮', '汉新', '心镇', '朋杉', '崴武', '隆宥', '雷飞', '霏皓', '言盛', '云维', '尧祥', '大经', '斌杜', '隽凯', '勤以', '豪豪', '道键', '力以', '兴德', '伦敬', '嘉旭', '华晏', '维聪', '振纯', '剑振', '航伊', '伟山', '剑利', '源杉', '岩卫', '仲鑫', '同泽', '以达', '琛正', '广民', '浩世', '喜武', '儒瀚', '羲宇', '源杰', '俊祥', '春传', '钢泽', '杉力', '麟震', '才百', '鸿兆', '翰杜', '旭俊', '杜辉', '敬桦', '旭坤', '纯翔', '侨力', '安润', '雷经', '国宇', '顺佳', '升海', '宁秦', '文百', '涛天', '成新', '义少', '品鸣', '华瀚', '文崴', '彪雄', '坤侨', '寒河', '亚景', '维蓝', '博辰', '清仲', '若贯', '凯宸', '家达', '凯翦', '希熙', '弘儒', '汉锌', '楚启', '若林', '杭禹', '蓝弘', '彪树', '健洋', '涛翔', '腾辉', '仁森', '斌虹', '皓臣', '灿琛', '平华', '家华', '帆衡', '浚玮', '品建', '哲斌', '茂剑', '泽嘉', '奕勇', '毅迅', '学恩', '乐源', '彬伊', '恒奇', '世天', '友雨', '超启', '锦恩', '春纯', '乐桦', '镇建', '仁群', '奕志', '雄隆', '臣崴', '田卫', '以迅', '劲凯', '伊彬', '明杜', '朋渝', '润劲', '翦宏', '雷东', '秦寒', '楚佑', '栋泽', '佑秋', '海京', '卫力', '熙勤', '京玮', '诚泰', '正楚', '阳树', '友澄', '禹祥', '仁希', '贤百', '锋少', '岩彬', '兴腾', '心顺', '龙伊', '阳勤', '中豪', '格键', '峰智', '树中', '宇中', '伟林', '儒彦', '子伟', '铭群', '滨友', '江毅', '靖盛', '灿维', '明羲', '喜劲', '庆玮', '锋霏', '源东', '楚龙', '洋栋', '凌汉', '辉侨', '齐松', '绍海', '乐裕', '东克', '辉宸', '彬超', '泽坤', '绍云', '鹏亮', '逸鹏', '虹祖', '树林', '熙晨', '仁刚', '嘉伊', '桦钧', '皇泽', '清元', '世贤', '正霏', '嘉洋', '航宇', '哲友', '汉盛', '霖国', '杜郴', '亦迅', '华伦', '玉琛', '恩郴', '承田', '达炎', '翦瀚', '亚谦', '力翔', '超尊', '烽泽', '同劲', '健桦', '兴羲', '风裕', '滨乐', '天克', '诚卫', '宗道', '嘉志', '司品', '司狄', '贯民', '言锦', '亚同', '品钢', '启彬', '杰大', '金儒', '雷磊', '驹卫', '贯航', '源谦', '桂生', '景言', '泰畅', '凯峰', '昌嘉', '炫涛', '琛浩', '雄磊', '润迅', '伟坚', '宁浩', '瑄卫', '亮若', '源辰', '颂江', '威颂', '松键', '朗信', '皓司', '鸣泽', '雷洋', '奇树', '伦成', '超纶', '民震', '雨琛', '杰君', '威喜', '阳源', '畅雷', '云峻', '冠郴', '廷皇', '达晏', '然城', '刚博', '兆希', '祥勇', '协然', '生鹏', '然宸', '军鹏', '君思', '俊东', '旭道', '云渝', '朝源', '喜广', '杰雷', '岳辉', '振霆', '威朗', '源波', '松仲', '靖松', '军启', '武虹', '炎剑', '刚峰', '雄岩', '梁军', '瀚炎', '协霆', '榕华', '伊晨', '达岳', '晨咏', '友梁', '金杉', '勇斌', '亦盛', '道世', '朗朗', '冠群', '弘浩', '迅安', '敬翦', '青广', '良良', '松同', '光田', '凯彪', '辰成', '奇茂', '绍平', '亦恩', '祥宏', '中枫', '岩迅', '齐思', '霖驹', '毅翰', '金炫', '河正', '友平', '佑纯', '刚子', '栋力', '伊鸿', '渝帆', '廷彦', '家良', '铭龙', '劲宏', '杭杭', '炎辉', '森生', '岳康', '朗旭', '佳兆', '鸿俊', '谦蓝', '磊镇', '廷晨', '源蓝', '少剑', '朋梁', '道广', '贤雨', '霏锋', '靖维', '冠升', '青峻', '浩狄', '滨洋', '绍钢', '琛群', '清鑫', '泽铭', '楚颂', '梁辰', '隆滨', '靖威', '达祥', '逸靖', '山喜', '灿栋', '然慧', '靖翦', '峰刚', '利瑄', '剑梁', '秋皓', '伦田', '洋树', '颖曦', '勇恩', '杰昌', '树咏', '齐昌', '震昌', '伟梁', '以信', '奕旭', '贯朋', '东宇', '杭业', '纶崴', '麟佳', '霖鑫', '润诚', '景颖', '骏楚', '国尊', '鸿信', '麟森', '汉西', '瀚光', '磊豪', '辰力', '新勇', '心达', '友航', '锡彬', '金迅', '晏俊', '力青', '百品', '勇武', '顺荣', '京尊', '平霆', '恩安', '俊启', '隽元', '阳友', '平杰', '泽亚', '聪齐', '鹏君', '格衡', '业隽', '纶林', '雷乐', '盛秦', '磊烽', '滨雨', '协嘉', '力超', '霆宇', '风民', '亦东', '达佳', '秦翔', '业彦', '', '嘉明', '禹锡', '智涛', '磊贯', '嘉恩', '启儒', '帆松', '玮桦', '荣衡', '锡杭', '成炫', '颖禹', '鹏儒', '亮尧', '清瑄', '烽狄', '衡龙', '梁羲', '经崴', '思彬', '帆少', '善颖', '少靖', '兆威', '仲盛', '道道', '谦瀚', '金树', '旭伟', '鹏航', '杭喜', '锡河', '以飞', '秋海', '广振', '衡民', '正滨', '钧清', '宸靖', '腾镇', '绍龙', '朗杭', '景坤', '宏刚', '泽广', '兆澄', '衡林', '隽盛', '卫杰', '海升', '廷宇', '金喜', '熙雷', '健栋', '道宸', '恒元', '品中', '俊宗', '权敬', '炫奕', '敬辰', '喜飞', '以枫', '城麟', '君伊', '朗玮', '雷子', '隆克', '荣敬', '建钢', '林瀚', '诚敬', '威春', '基键', '威成', '旭国', '嘉彬', '衡渝', '彪弘', '锋友', '杰渝', '树鸿', '震谦', '宏平', '岳才', '宏新', '羲若', '思泰', '群祥', '仁建', '以儒', '滨禹', '钢顺', '桂畅', '然峰', '锦楚', '昌皓', '汉群', '斌春', '麟广', '逸振', '雨军', '良杭', '仁格', '利坤', '杰禹', '田熙', '宥峰', '炎峰', '信俊', '威尧', '希峻', '然阳', '光阳', '廷颂', '晨宸', '楠宸', '学绍', '言青', '金琛', '迅贤', '迅鑫', '熙钧', '汉正', '若佳', '勤城', '锦杭', '泽毅', '信贯', '浩勇', '君威', '尧力', '铭勇', '骏旭', '信炎', '靖仲', '宸尧', '绍霆', '彪森', '光锡', '敬诚', '经羲', '廷劲', '翰生', '腾岩', '兴信', '青烽', '健裕', '辰畅', '以曦', '弘广', '若敬', '森亦', '汉寒', '大新', '学思', '鹏立', '迅坤', '锌宁', '宸宸', '毅旭', '翔翔', '润炎', '钧桂', '宏百', '骏成', '泽恒', '承德', '颖新', '森伊', '仁雷', '梁朋', '超昌', '晏铭', '楚朗', '炎然', '霏琛', '雷善', '雷君', '梁臣', '榕茂', '畅心', '畅慧', '学浚', '威绍', '武翔', '聪升', '健锦', '蓝江', '汉利', '澄田', '奕明', '森建', '凯炎', '司弘', '国宁', '颂春', '俊畅', '伦翔', '元曦', '克顺', '蓝宇', '炎敬', '品聪', '楠泽', '祥朝', '伦翔', '汉瑄', '弘彪', '楠颂', '青纶', '庆辉', '山绍', '君建', '安云', '智宇', '峰启', '浩宏', '才聪', '朋元', '楠朋', '彪勤', '嘉家', '侨蓝', '颂楠', '恩伟', '才亮', '田锌', '力杉', '颂希', '锋振', '茂河', '曦健', '言皓', '承树', '楚嘉', '泰刚', '林浩', '群彪', '同松', '祖贤', '雷威', '升恒', '天慧', '成健', '骏颖', '达秋', '洋奕', '秦腾', '钧源', '成鸣', '龙才', '慧恒', '敬顺', '逸纯', '骏奕', '金栋', '良品', '平嘉', '生锦', '中哲', '俊阳', '畅亚', '澄驰', '哲江', '京鑫', '劲才', '鹏栋', '虹聪', '广权', '宥帆', '利翰', '帆恩', '臣彬', '彪成', '波烽', '烽经', '飞绍', '品杰', '彪天', '霆伟', '喜曦', '利恒', '子大', '飞翔', '宏经', '庆以', '超春', '旭亦', '坚云', '博森', '岳世', '山启', '道田', '学梁', '光国', '权西', '伟京', '鸿松', '启旭', '维权', '青康', '皇基', '利大', '兆皇', '伦朗', '纯彬', '言学', '兆刚', '民贤', '家基', '豪斌', '狄杰', '豪盛', '慧皓', '志渝', '臣信', '冠翰', '少劲', '庆烽', '若然', '瀚锋', '浩林', '梁经', '宇骏', '隽喜', '宏炎', '金宗', '经子', '敬学', '润郴', '瀚辰', '廷嘉', '卫源', '润文', '光基', '伦茂', '田栋', '家成', '中经', '彬平', '良鹏', '霖永', '树仁', '颂杜', '浩锌', '汉秦', '杉曦', '百山', '恩生', '德泽', '聪峰', '剑楚', '正寒', '树华', '剑劲', '仁岳', '虹劲', '思世', '卫恩', '思绍', '绍杉', '然凌', '昌君', '雨广', '玮隽', '澄蓝', '桂阳', '翔风', '树朋', '云谦', '逸俊', '靖蓝', '鸣以', '克钢', '思钧', '曦树', '熙彬', '茂云', '希维', '寒东', '亮澄', '百谦', '博颖', '豪星', '宇聪', '纯康', '磊崴', '仁青', '鸣广', '星颂', '朗卓', '谦坚', '信杉', '琛朋', '纯炎', '广刚', '振若', '亚尊', '汉隽', '云群', '力雷', '良伦', '锋霆', '品麟', '麟刚', '鸿伟', '茂骏', '宇嘉', '平凯', '贤森', '雷道', '尊广', '镇元', '伟麟', '海元', '帆雨', '彦健', '友隽', '卓军', '威维', '弘锌', '元钧', '震尧', '迅嘉', '涛健', '格凌', '皇祖', '齐盛', '信钧', '光隆', '昌宇', '春子', '心仁', '凯国', '品霖', '冠传', '武志', '振祥', '经智', '信若', '廷波', '以聪', '德颂', '云崴', '雷锡', '正钢', '德晏', '仲润', '绍旭', '军蓝', '霏朋', '西奕', '彦元', '宏城', '然臣', '康俊', '翰飞', '灿桂', '华泽', '钧哲', '驹乐', '秦才', '凌正', '翔聪', '祖庆', '风杉', '熙群', '凌劲', '廷成', '利义', '禹翔', '民锌', '敬锦', '力祥', '波泽', '力驹', '玮亚', '学昌', '博田', '道哲', '寒永', '仁云', '剑迅', '田廷', '勤宏', '信青', '儒秋', '子建', '佳秋', '亮鹏', '林腾', '崴成', '臣星', '杰亦', '世品', '超峰', '茂基', '毅信', '司羲', '凌茂', '希权', '达以', '以元', '磊宸', '泽康', '田涛', '源隆', '京友', '震洋', '东剑', '榕亚', '键渝', '磊彬', '锋威', '朗成', '波峰', '榕武', '曦宥', '青伦', '恒贯', '世才', '佑曦', '弘桂', '裕青', '郴榕', '力佳', '奕隽', '汉弘', '坤宇', '磊雨', '霏麟', '新钢', '嘉朗', '明志', '健达', '宏源', '清豪', '雷雄', '纶祥', '世元', '浩嘉', '劲宇', '格茂', '仲钧', '品诚', '梁升', '斌航', '平百', '驰伦', '品江', '勇佳', '迅刚', '泽迅', '宏中', '亮飞', '武树', '浩武', '维林', '元友', '杰楚', '权乐', '海基', '兆汉', '浩朝', '祖滨', '楠齐', '亮隽', '键大', '瑄奕', '光桂', '武刚', '春达', '梁虹', '利琛', '亦国', '宁玮', '成畅', '大军', '瑄隽', '世宸', '岳成', '铭鸣', '迅旭', '骏超', '宇云', '松狄', '庆杉', '恒郴'],
	'womanPrefix': ['槿栀', '素颜', '眼眸', '薄姬', '大妞', '妤梦', '湉晨', '妩媚', '涟漪', '旖旎', '南笙', '沧颜', '凝眸', '花逝', '颜汐', '浅沫', '琉璃', '春野', '棠绾', '南音', '初柚', '倩影', '烈女', '泪眼', '莺语', '清悦', '温婉', '挽发', '诱惑', '情愫', '浊泪', '浅笑', '流苏', '晴栀', '槿城', '花葬', '夏墨', '余笙', '鎖惢', '旧梦', '喵喵', '心奴', '浅梦', '清樱', '柠栀', '冷眸', '冷颜'],
	'womanSuffix': ['碧莹', '笑凌', '南汐', '希菲', '雨瑶', '蕾盈', '雪如', '桂映', '颖嘉', '颖滢', '彤月', '婷姬', '萱琪', '勤香', '舒晶', '毓碧', '向姬', '采菁', '素洁', '琼涵', '卉映', '美儿', '寒念', '雨娇', '青澜', '岚桦', '语绮', '可馨', '诗卿', '怡聪', '清雁', '飞淑', '露丹', '馨友', '佩柔', '乐凌', '雅筠', '忆梵', '锦寒', '婵寒', '雪菲', '贤海', '瑾丽', '红迎', '淑睿', '诗馨', '丽琦', '影汐', '雪馥', '宜妍', '宛素', '艺雨', '影凌', '安妍', '咏雪', '雪松', '乐蕾', '凌凡', '璐舒', '可倩', '阳香', '枫雅', '婵艺', '雯思', '艺婷', '梵友', '融阳', '苇红', '丽梦', '颖婷', '萱诗', '咏晓', '雅静', '艺华', '容惠', '雪夏', '凡南', '瑶嘉', '月蓓', '风松', '莺艺', '迎叶', '娜英', '绮萱', '芹雨', '欣华', '筠霜', '娜双', '玉馨', '欣阳', '雯茗', '安宛', '娇英', '娴安', '洁月', '熙瑶', '平雪', '菱含', '婷宇', '姬儿', '翠菡', '清烁', '婉姣', '萱梵', '菲琳', '晓颖', '萱琦', '红蕊', '菱汐', '婉小', '青滢', '代容', '佩艺', '燕静', '颖婵', '涵易', '欢思', '香荔', '月凡', '雪翠', '媚伊', '聪丝', '娜锦', '彩寒', '娇寒', '松舒', '香颖', '芹萱', '晓兰', '平勤', '凌媚', '爽融', '岚菲', '秀丹', '小沫', '柔婵', '蓝忆', '婷瑾', '含儿', '娇雅', '思毓', '依曼', '琳洋', '佳清', '采蕊', '玲晶', '霜含', '媚琼', '菱阳', '瑗婷', '沫寒', '蕊霜', '黛涵', '彩萱', '若舒', '夏毓', '姬美', '欢仪', '媚晴', '蕊菲', '蕊如', '夏苛', '晶璧', '丽馥', '琦凌', '美玉', '聪慧', '瑶雅', '新瑶', '怜素', '晶蓝', '雯兰', '雯雪', '涵新', '瑶菲', '莹晓', '婷菱', '咏南', '贤汐', '玉萱', '晶华', '惠清', '蓝聪', '绮容', '友欢', '莎友', '霜雅', '彤碧', '蓝澜', '馨初', '琰瑞', '凡盈', '佩丝', '文妍', '芳媚', '南蕊', '瑶盼', '瑞沛', '亦初', '冰蕊', '夏熙', '晶曼', '玉汐', '洁柔', '逸初', '芬晴', '宛菡', '菲盈', '瑾瑞', '熙玉', '妍菲', '琬晓', '贤亦', '瑾飞', '涵桂', '风秀', '风沫', '雯菱', '筠琦', '萱静', '念荷', '玉依', '琪淑', '盈玉', '梦咏', '静淑', '毓睿', '慕瑶', '羽翠', '涵菱', '嘉文', '娜琼', '咏洋', '霞碧', '华欢', '采园', '希莎', '书雨', '娇玉', '寒欣', '以乐', '代颖', '映元', '初清', '希琪', '念璧', '亦丹', '馨贤', '念沫', '怡婉', '馥锦', '红雪', '娇琪', '涵雁', '迎熙', '亦乐', '茗彤', '笑柳', '迎静', '玲仪', '飞涵', '聪茗', '琳慕', '舒艺', '婕姣', '风雪', '涵华', '梦雪', '园霞', '荷慧', '燕雨', '珊妮', '莹汐', '露慕', '南瑶', '宜惠', '含亦', '诗瑶', '荔妍', '雅璐', '瑗聪', '蕾熙', '小媚', '儿颖', '巧玲', '慧笑', '文新', '勤蓝', '晶平', '茗叶', '静书', '珊华', '香希', '凡荔', '芙婷', '瑶静', '洋海', '曼叶', '卿惠', '初菡', '雨荔', '滢慧', '贝婷', '宇瑞', '梦锦', '婷迎', '代馨', '冰笑', '妮岚', '姬汐', '澜琰', '妙珊', '慧贤', '南婉', '骅菁', '小念', '夏贤', '安珊', '苑琰', '馨小', '倩琳', '寒风', '希怜', '洋睿', '迎羽', '霞莉', '莎清', '怜琳', '以勤', '飞梦', '娴琼', '婕念', '聪萱', '叶水', '婷凡', '蓝飘', '馨璐', '柔莉', '佩忆', '艺莹', '静露', '宛汐', '娇芬', '芳蕾', '桂叶', '妍如', '映馨', '咏骅', '思夏', '琳怜', '瑾萱', '风叶', '秀诗', '丹璧', '彤珊', '逸锦', '淑芹', '婷翠', '锦聪', '姣熙', '惜眉', '睿璧', '贤娅', '飞风', '素宛', '蓝易', '贝芹', '初骅', '芳雁', '璐妙', '婉露', '娅瑶', '芬亦', '华岚', '欢怜', '丝秀', '眉荔', '易乐', '水琪', '琳雪', '伊姣', '巧雪', '娅玉', '黛蓝', '晴霜', '露香', '飞华', '英瑶', '晶怜', '凡迎', '琳莎', '巧白', '双宛', '仪容', '晓惠', '佳儿', '影涵', '仪儿', '青宝', '菱秀', '逸娇', '诗羽', '霜欣', '丽娜', '桦桂', '琬枫', '容聪', '岚卿', '琪希', '逸语', '冰卉', '菁阳', '荷雨', '菲丹', '娅彦', '媚汐', '琳夏', '叶平', '菡红', '仪毓', '姬怡', '容英', '影风', '欣怡', '香妍', '娴怜', '苇芬', '沛青', '蕊忆', '霜艺', '晓晴', '柳素', '芳蓝', '筠白', '筠静', '菡夏', '妍莎', '海蓝', '娅晴', '彤莎', '玉媚', '勤红', '琴佩', '颖骅', '菱海', '影代', '沫瑶', '烁琴', '晓璧', '诗梦', '妍苛', '霜南', '怡燕', '梦璧', '希佩', '代晶', '羽彤', '宝柳', '冬凡', '梦容', '如荔', '南嘉', '美友', '苇以', '岚彦', '凡冰', '蓝欢', '叶宛', '惠婵', '淑采', '姣蕾', '菁毓', '霜芙', '小诗', '海阳', '英念', '琬熙', '贤佩', '红菲', '慕姣', '采莹', '彤萱', '沛雪', '素菲', '瑞迎', '聪风', '寒桦', '霞仪', '玉冬', '风彤', '莺珊', '儿儿', '佳琬', '语晓', '飞蓓', '诗晴', '蓉茜', '霜华', '琳小', '莺丹', '雅娜', '叶璐', '翠笑', '贤雪', '卿语', '希容', '凌素', '香含', '蓝贤', '儿雪', '伊丽', '艺风', '惠易', '逸宇', '逸梦', '洋仪', '瑞怜', '亦佳', '飘佩', '燕瑶', '骅绮', '宛欣', '芙聪', '雨书', '琼芳', '亦念', '琴笑', '翠宇', '琴融', '翠薇', '若怡', '枫丹', '初翠', '语静', '雅小', '妮柔', '惜文', '曼小', '萱莺', '宜佩', '易晶', '卿友', '萱红', '安红', '琪黛', '蓝枫', '珊仪', '荷萱', '萱滢', '双梦', '香易', '馨雪', '飘雅', '风冰', '蕾琦', '怜冰', '晴松', '桦素', '宇夏', '娜美', '燕琳', '慧艺', '黛烁', '影菡', '莎露', '婵苛', '柳姣', '婷盼', '琴琼', '梦欣', '玉荔', '柔诗', '曼红', '妙香', '桂凡', '寒友', '寒晶', '代桃', '文骅', '贤白', '宇倩', '茜馥', '蓓琪', '可雁', '如颖', '采笑', '莺蓉', '凌海', '清娴', '菲容', '薇骅', '涵梵', '影芙', '盼青', '馥露', '曼怜', '安凡', '玲柔', '妍仪', '苛柳', '绮琴', '冬汐', '雅文', '蓉初', '黛念', '霞苑', '映贝', '涵舒', '涵琰', '雁雯', '妮凡', '彦融', '荔颖', '睿苛', '菡盼', '芳晶', '黛媛', '雨桂', '卉晶', '馨琦', '凌笑', '安若', '蕊锦', '芳雪', '翠桃', '卿馨', '怡采', '冬涵', '夏雪', '玲珊', '初蓉', '友娜', '双萱', '萱玉', '如瑶', '慧爽', '若秀', '飞叶', '蕾爽', '英柳', '如婵', '秀若', '彩烁', '念忆', '霞晴', '骅芙', '芳英', '叶代', '舒宛', '宛瑶', '茗贝', '艺琪', '雁小', '宝菲', '瑶梦', '娇语', '迎玉', '菡乐', '芹怜', '沛美', '聪涵', '琰佳', '如雅', '霞代', '慧瑶', '宝媚', '苛蓉', '红颖', '蓝烁', '芹依', '爽雁', '雪桂', '以绮', '黛飞', '雪华', '苛水', '琦菡', '丹婷', '娴黛', '友凌', '婕惠', '菁翠', '丝菡', '婕枫', '汐友', '毓琰', '涵荔', '含娜', '琦映', '蕊慧', '燕芳', '飘叶', '滢菁', '松洁', '水灵', '娇雅', '馨骅', '梦姬', '萱菡', '水巧', '夏馨', '茗琦', '霞澜', '友丹', '睿馨', '瑾晴', '丝卿', '琼宇', '岚双', '桃淑', '芳萱', '希小', '巧娅', '惠宇', '飞菱', '琪岚', '欣蓝', '冰芙', '蕾如', '琼可', '妙亦', '梵毓', '桃可', '枫荷', '黛冬', '岚蓉', '月洁', '巧彤', '曼芙', '爽雅', '沛枫', '仪雪', '岚丽', '希碧', '英雨', '卿锦', '芹诗', '雯菁', '琪丝', '松蕾', '芬若', '芹绮', '梦勤', '雨骅', '翠亦', '蓉媚', '咏雅', '芙容', '艺南', '英彦', '曼娜', '亦燕', '颖夏', '怜苇', '慧盼', '冰荷', '芙瑾', '绮萱', '水曼', '燕惠', '儿飘', '宜菲', '倩绮', '青宛', '霞芹', '妮彩', '菲蓝', '影洁', '晶蕊', '嘉霞', '聪苑', '友莹', '姬琳', '双雪', '熙媚', '洋玉', '苇菡', '舒舒', '沛诗', '雅代', '琪夏', '夏灵', '熙静', '娅苛', '沫霞', '宝聪', '容娅', '骅冬', '芹盼', '慕岚', '澜冬', '瑶仪', '南琳', '彩乐', '惜菲', '新慧', '宛雅', '雅蕊', '映安', '沛汐', '松秀', '南沛', '迎飞', '彤采', '颖露', '梦雨', '香嘉', '乐舒', '琰惜', '苛沫', '琳南', '燕荔', '丹慕', '莉若', '迎诗', '洋馨', '蕾贤', '念婷', '园思', '贤颖', '欣柳', '素儿', '雁婉', '苛婕', '飘霞', '诗伊', '翠汐', '采倩', '柳晶', '筠玛', '蕊希', '华琳', '馥凌', '黛友', '惜采', '冬艺', '秀锦', '妙娅', '忆茗', '宇儿', '蕊丹', '荔锦', '慕琳', '婉如', '聪艺', '桦滢', '晴南', '霞菡', '荷莺', '毓芳', '琴筠', '希叶', '月雪', '蕊媚', '沛薇', '咏柔', '雅飘', '佩如', '琰夏', '婵汐', '雯琳', '含贝', '娅涵', '馨水', '桂婵', '水馨', '飘贤', '莉影', '馥菱', '馨锦', '锦菲', '蓉琴', '凌沫', '晶涵', '岚爽', '馨嘉', '琼琦', '秀姣', '寒桂', '菁洋', '儿毓', '娴爽', '荷素', '笑蓓', '以莎', '菲洋', '涵婕', '希桂', '宜雪', '凡寒', '荷妙', '莉逸', '琴茜', '雪静', '瑶晶', '桦灵', '素美', '茜芹', '爽依', '嘉红', '佩月', '诗宛', '茜素', '妍丽', '彦小', '瑗飞', '颖羽', '烁水', '娇咏', '青阳', '琼亦', '琦贤', '新玉', '含玲', '晓静', '蓝苑', '蓉希', '叶慧', '清诗', '玛丽', '阳影', '凌彤', '丹书', '琪语', '妮艺', '妮蓝', '兰卿', '如怡', '盼菁', '宛兰', '娜宜', '枫莹', '阳舒', '枫忆', '以烁', '毓晶', '霜素', '夏菲', '丝雪', '迎雅', '冰芬', '梦盼', '沫惠', '爽伊', '夏茗', '雪洁', '宛汐', '熙卉', '语婵', '霞冬', '毓萱', '汐含', '婉涵', '宜熙', '菲如', '颖苛', '玉月', '雪瑗', '香华', '宇如', '琬蓉', '彤婉', '瑶夏', '清雪', '玲易', '锦妙', '秀慧', '烁静', '菲小', '文岚', '熙珊', '盼兰', '映珊', '茜蓝', '可瑞', '澜彤', '菱艺', '忆园', '冰碧', '妍惠', '曼若', '娇黛', '雅蓉', '琬冰', '梵海', '雅莎', '梦彤', '贤安', '容依', '梦宜', '雅婉', '洁婉', '慧咏', '思熙', '婵媚', '诗素', '晴婵', '莎岚', '玉荷', '荷绮', '欢叶', '羽忆', '柳清', '海玉', '雨佳', '新冰', '依筠', '乐念', '静菡', '荷芬', '盼宛', '玉雯', '菁婷', '滢妮', '勤素', '伊勤', '羽霞', '艺丝', '容妍', '洁梵', '素思', '娅香', '佳秀', '希馨', '采晓', '冰平', '黛梵', '寒梦', '向冬', '瑞宛', '岚茜', '晓玲', '乐霜', '柳熙', '怜玲', '玲琳', '骅馥', '娅青', '卉清', '易涵', '兰蕾', '灵依', '咏黛', '瑞聪', '希媚', '桦羽', '玉巧', '小飞', '以婉', '欢蕊', '锦芬', '飞香', '素佩', '红书', '如宛', '馨清', '文沛', '晓苛', '婷卉', '初红', '桦沫', '莎梦', '琰华', '珊苛', '伊兰', '友影', '茗姬', '瑞晓', '琳丹', '娇菁', '汐雯', '婉飘', '菲玛', '碧静', '翠琼', '聪红', '嘉曼', '佳英', '琪梦', '笑颖', '睿雨', '希芙', '瑗芹', '蓓含', '丝曼', '易华', '宜媚', '桦琳', '伊薇', '宇碧', '逸婕', '忆涵', '元以', '沛南', '燕慕', '丹惠', '琳婕', '瑾影', '若晓', '苇慕', '瑾婵', '向咏', '羽玛', '宜雅', '阳容', '婵英', '蓉若', '瑶红', '元琪', '欢雪', '雪白', '清梦', '希静', '夏蓉', '玉盼', '茗思', '华娴', '新妍', '枫雨', '雪娴', '绮桃', '玉容', '思逸', '忆姣', '琴卉', '媚怡', '萱慕', '迎洋', '叶沛', '苇睿', '梵书', '宇芳', '芹希', '美书', '静芙', '雪莎', '梵柳', '琪露', '琪玉', '怡佳', '婷骅', '含晶', '曼露', '怜迎', '馥芙', '妙绮', '念筠', '澜笑', '慧希', '逸元', '如沫', '绮南', '念佳', '嘉瑾', '霜宜', '盼涵', '含彦', '汐海', '娜儿', '琪瑗', '蓝璐', '烁彤', '菲安', '骅睿', '怜儿', '松雅', '含菁', '乐兰', '茗珊', '惠霜', '艺羽', '姬冰', '沫桦', '娇琳', '梦彩', '亦涵', '娅绮', '彤欣', '瑶菲', '菁琰', '彦贤', '丝媚', '茜英', '文蓓', '夏怜', '怜菱', '莎冬', '霜菡', '璧岚', '碧艺', '芳冬', '以新', '薇蓝', '亦菲', '乐芬', '沛芳', '妙松', '娴华', '莎宇', '熙蓓'],
	'descs': [a0_0x9d38d7(0x1d3), a0_0x9d38d7(0xdf), a0_0x9d38d7(0xe1), a0_0x9d38d7(0x2d7), '渡劫成功晋升地仙', '领取了99999元宝礼包'],
	'familyArr': new Array(0x2),
	'symbolArr': new Array(0x3),
	'tops': [0x70, 0x8c, 0xa8, 0xc4, 0xe0],
	'items': new Array(),
	'destroyed': ![],
	'destory': function() {}
};
var JpegError = function JpegErrorClosure() {
		var _0x158999 = a0_0x9d38d7;

		function _0x3c2644(_0x169bb1) {
			var _0x4ae02d = a0_0x35ce;
			this[_0x4ae02d(0xd2)] = 'JPEG\x20error:\x20' + _0x169bb1;
		}
		return _0x3c2644[_0x158999(0x10f)] = new Error(), _0x3c2644[_0x158999(0x10f)][_0x158999(0x11f)] = _0x158999(0xeb), _0x3c2644[_0x158999(0x1d0)] = _0x3c2644, _0x3c2644;
	}(),
	DNLMarkerError = function DNLMarkerErrorClosure() {
		var _0x416921 = a0_0x9d38d7;

		function _0x41aead(_0x24db2b, _0x4d508f) {
			var _0x9370c1 = a0_0x35ce;
			this[_0x9370c1(0xd2)] = _0x24db2b, this[_0x9370c1(0x1c2)] = _0x4d508f;
		}
		return _0x41aead[_0x416921(0x10f)] = new Error(), _0x41aead[_0x416921(0x10f)][_0x416921(0x11f)] = _0x416921(0xae), _0x41aead['constructor'] = _0x41aead, _0x41aead;
	}(),
	EOIMarkerError = function EOIMarkerErrorClosure() {
		var _0x27c042 = a0_0x9d38d7;

		function _0x39a157(_0x20e40e) {
			var _0x1a8628 = a0_0x35ce;
			this[_0x1a8628(0xd2)] = _0x20e40e;
		}
		return _0x39a157[_0x27c042(0x10f)] = new Error(), _0x39a157['prototype']['name'] = 'EOIMarkerError', _0x39a157[_0x27c042(0x1d0)] = _0x39a157, _0x39a157;
	}(),
	JpegImage = function JpegImageClosure() {
		var _0x44b3bb = a0_0x9d38d7,
			_0x3433a1 = new Uint8Array([0x0, 0x1, 0x8, 0x10, 0x9, 0x2, 0x3, 0xa, 0x11, 0x18, 0x20, 0x19, 0x12, 0xb, 0x4, 0x5, 0xc, 0x13, 0x1a, 0x21, 0x28, 0x30, 0x29, 0x22, 0x1b, 0x14, 0xd, 0x6, 0x7, 0xe, 0x15, 0x1c, 0x23, 0x2a, 0x31, 0x38, 0x39, 0x32, 0x2b, 0x24, 0x1d, 0x16, 0xf, 0x17, 0x1e, 0x25, 0x2c, 0x33, 0x3a, 0x3b, 0x34, 0x2d, 0x26, 0x1f, 0x27, 0x2e, 0x35, 0x3c, 0x3d, 0x36, 0x2f, 0x37, 0x3e, 0x3f]),
			_0x5034ae = 0xfb1,
			_0x386913 = 0x31f,
			_0x1f5540 = 0xd4e,
			_0x830194 = 0x8e4,
			_0x5c6fff = 0x61f,
			_0x269126 = 0xec8,
			_0x5ade8b = 0x16a1,
			_0x2ae63b = 0xb50;

		function _0x23f2b8(_0x3b1eb2) {
			var _0x188413 = a0_0x35ce,
				_0x5125d6 = _0x3b1eb2 === void 0x0 ? {} : _0x3b1eb2,
				_0x5512f4 = _0x5125d6[_0x188413(0x223)],
				_0x59151c = _0x5512f4 === void 0x0 ? null : _0x5512f4,
				_0xfce340 = _0x5125d6[_0x188413(0x194)],
				_0x3b85d5 = _0xfce340 === void 0x0 ? -0x1 : _0xfce340;
			this['_decodeTransform'] = _0x59151c, this[_0x188413(0x2ba)] = _0x3b85d5;
		}

		function _0x4e4dbc(_0x462cf0, _0x241938) {
			var _0x14718f = a0_0x35ce,
				_0x1bcb21 = 0x0,
				_0x527a2c = [],
				_0x3d7a4f, _0x3da3e1, _0x18cd06 = 0x10;
			while (_0x18cd06 > 0x0 && !_0x462cf0[_0x18cd06 - 0x1]) {
				_0x18cd06--;
			}
			_0x527a2c[_0x14718f(0x1a1)]({
				'children': [],
				'index': 0x0
			});
			var _0x5e8358 = _0x527a2c[0x0],
				_0x27364d;
			for (_0x3d7a4f = 0x0; _0x3d7a4f < _0x18cd06; _0x3d7a4f++) {
				for (_0x3da3e1 = 0x0; _0x3da3e1 < _0x462cf0[_0x3d7a4f]; _0x3da3e1++) {
					_0x5e8358 = _0x527a2c[_0x14718f(0x1df)](), _0x5e8358[_0x14718f(0x1b0)][_0x5e8358[_0x14718f(0x1b5)]] = _0x241938[_0x1bcb21];
					while (_0x5e8358[_0x14718f(0x1b5)] > 0x0) {
						_0x5e8358 = _0x527a2c['pop']();
					}
					_0x5e8358['index']++, _0x527a2c['push'](_0x5e8358);
					while (_0x527a2c[_0x14718f(0x184)] <= _0x3d7a4f) {
						_0x527a2c['push'](_0x27364d = {
							'children': [],
							'index': 0x0
						}), _0x5e8358[_0x14718f(0x1b0)][_0x5e8358[_0x14718f(0x1b5)]] = _0x27364d[_0x14718f(0x1b0)], _0x5e8358 = _0x27364d;
					}
					_0x1bcb21++;
				}
				_0x3d7a4f + 0x1 < _0x18cd06 && (_0x527a2c[_0x14718f(0x1a1)](_0x27364d = {
					'children': [],
					'index': 0x0
				}), _0x5e8358[_0x14718f(0x1b0)][_0x5e8358[_0x14718f(0x1b5)]] = _0x27364d['children'], _0x5e8358 = _0x27364d);
			}
			return _0x527a2c[0x0][_0x14718f(0x1b0)];
		}

		function _0x18fc59(_0x136051, _0x1d6097, _0x236da5) {
			return 0x40 * ((_0x136051['blocksPerLine'] + 0x1) * _0x1d6097 + _0x236da5);
		}

		function _0x496902(_0x447564, _0x308411, _0x408e4d, _0x1adc20, _0x5daaa5, _0x3dc4ce, _0xd8bfad, _0x39b18e, _0x1ae5cd, _0x1dc839) {
			var _0x5aa089 = a0_0x35ce;
			_0x1dc839 === void 0x0 && (_0x1dc839 = ![]);
			var _0x45e1e6 = _0x408e4d[_0x5aa089(0x163)],
				_0x39c13a = _0x408e4d['progressive'],
				_0x118bde = _0x308411,
				_0x364ee5 = 0x0,
				_0x47597b = 0x0;

			function _0x59f0ec() {
				var _0x41d541 = _0x5aa089;
				if (_0x47597b > 0x0) return _0x47597b--, _0x364ee5 >> _0x47597b & 0x1;
				_0x364ee5 = _0x447564[_0x308411++];
				if (_0x364ee5 === 0xff) {
					var _0x4a5ff6 = _0x447564[_0x308411++];
					if (_0x4a5ff6) {
						if (_0x4a5ff6 === 0xdc && _0x1dc839) {
							_0x308411 += 0x2;
							var _0x2040dc = _0x447564[_0x308411++] << 0x8 | _0x447564[_0x308411++];
							if (_0x2040dc > 0x0 && _0x2040dc !== _0x408e4d[_0x41d541(0x1c2)]) throw new DNLMarkerError(_0x41d541(0xdb), _0x2040dc);
						} else {
							if (_0x4a5ff6 === 0xd9) throw new EOIMarkerError(_0x41d541(0x15e));
						}
						throw new JpegError(_0x41d541(0x2b8) + (_0x364ee5 << 0x8 | _0x4a5ff6)['toString'](0x10));
					}
				}
				return _0x47597b = 0x7, _0x364ee5 >>> 0x7;
			}

			function _0x403b07(_0x540654) {
				var _0xf18a4c = _0x5aa089,
					_0x3b8c27 = _0x540654;
				while (!![]) {
					_0x3b8c27 = _0x3b8c27[_0x59f0ec()];
					if (typeof _0x3b8c27 === _0xf18a4c(0x12b)) return _0x3b8c27;
					if (typeof _0x3b8c27 !== _0xf18a4c(0x2bd)) throw new JpegError('invalid\x20huffman\x20sequence');
				}
			}

			function _0x2b967a(_0x5c054d) {
				var _0x798dd1 = 0x0;
				while (_0x5c054d > 0x0) {
					_0x798dd1 = _0x798dd1 << 0x1 | _0x59f0ec(), _0x5c054d--;
				}
				return _0x798dd1;
			}

			function _0x52f4ac(_0x6b3b7e) {
				if (_0x6b3b7e === 0x1) return _0x59f0ec() === 0x1 ? 0x1 : -0x1;
				var _0x24bf95 = _0x2b967a(_0x6b3b7e);
				if (_0x24bf95 >= 0x1 << _0x6b3b7e - 0x1) return _0x24bf95;
				return _0x24bf95 + (-0x1 << _0x6b3b7e) + 0x1;
			}

			function _0x420eed(_0x16d4ae, _0xfbc497) {
				var _0x438bb5 = _0x5aa089,
					_0x27e084 = _0x403b07(_0x16d4ae[_0x438bb5(0x251)]),
					_0x43b2d3 = _0x27e084 === 0x0 ? 0x0 : _0x52f4ac(_0x27e084);
				_0x16d4ae['blockData'][_0xfbc497] = _0x16d4ae[_0x438bb5(0x1c0)] += _0x43b2d3;
				var _0x638809 = 0x1;
				while (_0x638809 < 0x40) {
					var _0x107af5 = _0x403b07(_0x16d4ae[_0x438bb5(0x23f)]),
						_0x4ec3e3 = _0x107af5 & 0xf,
						_0x54d519 = _0x107af5 >> 0x4;
					if (_0x4ec3e3 === 0x0) {
						if (_0x54d519 < 0xf) break;
						_0x638809 += 0x10;
						continue;
					}
					_0x638809 += _0x54d519;
					var _0x5ba67c = _0x3433a1[_0x638809];
					_0x16d4ae['blockData'][_0xfbc497 + _0x5ba67c] = _0x52f4ac(_0x4ec3e3), _0x638809++;
				}
			}

			function _0x394bf9(_0x12fb3e, _0x2be2c5) {
				var _0x1460a2 = _0x5aa089,
					_0x38780d = _0x403b07(_0x12fb3e[_0x1460a2(0x251)]),
					_0x4e1ca7 = _0x38780d === 0x0 ? 0x0 : _0x52f4ac(_0x38780d) << _0x1ae5cd;
				_0x12fb3e[_0x1460a2(0x212)][_0x2be2c5] = _0x12fb3e['pred'] += _0x4e1ca7;
			}

			function _0x18aee4(_0x47217d, _0x1641ab) {
				var _0x4b2afb = _0x5aa089;
				_0x47217d[_0x4b2afb(0x212)][_0x1641ab] |= _0x59f0ec() << _0x1ae5cd;
			}
			var _0x3c68a7 = 0x0;

			function _0x54707c(_0x5eb6af, _0x5d8122) {
				var _0x385dce = _0x5aa089;
				if (_0x3c68a7 > 0x0) {
					_0x3c68a7--;
					return;
				}
				var _0x5b5abd = _0x3dc4ce,
					_0x27075a = _0xd8bfad;
				while (_0x5b5abd <= _0x27075a) {
					var _0x5d1888 = _0x403b07(_0x5eb6af[_0x385dce(0x23f)]),
						_0xd31fe = _0x5d1888 & 0xf,
						_0x3c46c3 = _0x5d1888 >> 0x4;
					if (_0xd31fe === 0x0) {
						if (_0x3c46c3 < 0xf) {
							_0x3c68a7 = _0x2b967a(_0x3c46c3) + (0x1 << _0x3c46c3) - 0x1;
							break;
						}
						_0x5b5abd += 0x10;
						continue;
					}
					_0x5b5abd += _0x3c46c3;
					var _0x5921bb = _0x3433a1[_0x5b5abd];
					_0x5eb6af[_0x385dce(0x212)][_0x5d8122 + _0x5921bb] = _0x52f4ac(_0xd31fe) * (0x1 << _0x1ae5cd), _0x5b5abd++;
				}
			}
			var _0x486bcb = 0x0,
				_0x5689ae;

			function _0x155664(_0x2afab3, _0x69d614) {
				var _0x1785bc = _0x5aa089,
					_0x1fd9d7 = _0x3dc4ce,
					_0x117e0e = _0xd8bfad,
					_0x450c22 = 0x0,
					_0xb42ea8, _0x3679d8;
				while (_0x1fd9d7 <= _0x117e0e) {
					var _0x1023f8 = _0x69d614 + _0x3433a1[_0x1fd9d7],
						_0x295752 = _0x2afab3[_0x1785bc(0x212)][_0x1023f8] < 0x0 ? -0x1 : 0x1;
					switch (_0x486bcb) {
						case 0x0:
							_0x3679d8 = _0x403b07(_0x2afab3[_0x1785bc(0x23f)]), _0xb42ea8 = _0x3679d8 & 0xf, _0x450c22 = _0x3679d8 >> 0x4;
							if (_0xb42ea8 === 0x0) _0x450c22 < 0xf ? (_0x3c68a7 = _0x2b967a(_0x450c22) + (0x1 << _0x450c22), _0x486bcb = 0x4) : (_0x450c22 = 0x10, _0x486bcb = 0x1);
							else {
								if (_0xb42ea8 !== 0x1) throw new JpegError(_0x1785bc(0x165));
								_0x5689ae = _0x52f4ac(_0xb42ea8), _0x486bcb = _0x450c22 ? 0x2 : 0x3;
							}
							continue;
						case 0x1:
						case 0x2:
							_0x2afab3[_0x1785bc(0x212)][_0x1023f8] ? _0x2afab3[_0x1785bc(0x212)][_0x1023f8] += _0x295752 * (_0x59f0ec() << _0x1ae5cd) : (_0x450c22--, _0x450c22 === 0x0 && (_0x486bcb = _0x486bcb === 0x2 ? 0x3 : 0x0));
							break;
						case 0x3:
							_0x2afab3['blockData'][_0x1023f8] ? _0x2afab3[_0x1785bc(0x212)][_0x1023f8] += _0x295752 * (_0x59f0ec() << _0x1ae5cd) : (_0x2afab3['blockData'][_0x1023f8] = _0x5689ae << _0x1ae5cd, _0x486bcb = 0x0);
							break;
						case 0x4:
							_0x2afab3[_0x1785bc(0x212)][_0x1023f8] && (_0x2afab3[_0x1785bc(0x212)][_0x1023f8] += _0x295752 * (_0x59f0ec() << _0x1ae5cd));
							break;
					}
					_0x1fd9d7++;
				}
				_0x486bcb === 0x4 && (_0x3c68a7--, _0x3c68a7 === 0x0 && (_0x486bcb = 0x0));
			}

			function _0xa9d21f(_0xeb67a4, _0x4178a0, _0x15be8c, _0x5ba325, _0x4b7a4d) {
				var _0x5b2118 = _0x15be8c / _0x45e1e6 | 0x0,
					_0x5230bc = _0x15be8c % _0x45e1e6,
					_0x501f9d = _0x5b2118 * _0xeb67a4['v'] + _0x5ba325,
					_0x566ebe = _0x5230bc * _0xeb67a4['h'] + _0x4b7a4d,
					_0x9866b0 = _0x18fc59(_0xeb67a4, _0x501f9d, _0x566ebe);
				_0x4178a0(_0xeb67a4, _0x9866b0);
			}

			function _0x2b79b0(_0x14867e, _0x714a02, _0x19a6d5) {
				var _0x4df360 = _0x5aa089,
					_0x41b34a = _0x19a6d5 / _0x14867e[_0x4df360(0x226)] | 0x0,
					_0x1083e7 = _0x19a6d5 % _0x14867e[_0x4df360(0x226)],
					_0x5a5af5 = _0x18fc59(_0x14867e, _0x41b34a, _0x1083e7);
				_0x714a02(_0x14867e, _0x5a5af5);
			}
			var _0x2fecaa = _0x1adc20[_0x5aa089(0x184)],
				_0x408d07, _0x42ce9d, _0x25b451, _0x58f3ea, _0x1a678b, _0x424546;
			_0x39c13a ? _0x3dc4ce === 0x0 ? _0x424546 = _0x39b18e === 0x0 ? _0x394bf9 : _0x18aee4 : _0x424546 = _0x39b18e === 0x0 ? _0x54707c : _0x155664 : _0x424546 = _0x420eed;
			var _0x52ff87 = 0x0,
				_0xe2401c, _0x194923;
			_0x2fecaa === 0x1 ? _0x194923 = _0x1adc20[0x0]['blocksPerLine'] * _0x1adc20[0x0]['blocksPerColumn'] : _0x194923 = _0x45e1e6 * _0x408e4d[_0x5aa089(0x191)];
			var _0x5926af, _0x4b63b6;
			while (_0x52ff87 < _0x194923) {
				var _0x4295fe = _0x5daaa5 ? Math['min'](_0x194923 - _0x52ff87, _0x5daaa5) : _0x194923;
				for (_0x42ce9d = 0x0; _0x42ce9d < _0x2fecaa; _0x42ce9d++) {
					_0x1adc20[_0x42ce9d][_0x5aa089(0x1c0)] = 0x0;
				}
				_0x3c68a7 = 0x0;
				if (_0x2fecaa === 0x1) {
					_0x408d07 = _0x1adc20[0x0];
					for (_0x1a678b = 0x0; _0x1a678b < _0x4295fe; _0x1a678b++) {
						_0x2b79b0(_0x408d07, _0x424546, _0x52ff87), _0x52ff87++;
					}
				} else
					for (_0x1a678b = 0x0; _0x1a678b < _0x4295fe; _0x1a678b++) {
						for (_0x42ce9d = 0x0; _0x42ce9d < _0x2fecaa; _0x42ce9d++) {
							_0x408d07 = _0x1adc20[_0x42ce9d], _0x5926af = _0x408d07['h'], _0x4b63b6 = _0x408d07['v'];
							for (_0x25b451 = 0x0; _0x25b451 < _0x4b63b6; _0x25b451++) {
								for (_0x58f3ea = 0x0; _0x58f3ea < _0x5926af; _0x58f3ea++) {
									_0xa9d21f(_0x408d07, _0x424546, _0x52ff87, _0x25b451, _0x58f3ea);
								}
							}
						}
						_0x52ff87++;
					}
				_0x47597b = 0x0, _0xe2401c = _0x24abef(_0x447564, _0x308411);
				_0xe2401c && _0xe2401c[_0x5aa089(0x2bb)] && (warn(_0x5aa089(0x24b) + _0xe2401c['invalid']), _0x308411 = _0xe2401c[_0x5aa089(0xc0)]);
				var _0x5dee93 = _0xe2401c && _0xe2401c[_0x5aa089(0xb8)];
				if (!_0x5dee93 || _0x5dee93 <= 0xff00) throw new JpegError('marker\x20was\x20not\x20found');
				if (_0x5dee93 >= 0xffd0 && _0x5dee93 <= 0xffd7) _0x308411 += 0x2;
				else break;
			}
			return _0xe2401c = _0x24abef(_0x447564, _0x308411), _0xe2401c && _0xe2401c[_0x5aa089(0x2bb)] && (warn(_0x5aa089(0x16c) + _0xe2401c[_0x5aa089(0x2bb)]), _0x308411 = _0xe2401c[_0x5aa089(0xc0)]), _0x308411 - _0x118bde;
		}

		function _0x316211(_0xf5d9af, _0x95c863, _0x4c0231) {
			var _0x21455a = a0_0x35ce,
				_0x399bbe = _0xf5d9af['quantizationTable'],
				_0x59eff3 = _0xf5d9af[_0x21455a(0x212)],
				_0x15d681, _0xee848, _0x12dc6c, _0x363899, _0x910cc7, _0x2b10de, _0x5a9879, _0x545514, _0x388abb, _0x163638, _0x3f55f3, _0x47fc40, _0x19b9a8, _0xfb26cb, _0x2c49fe, _0x46f254, _0x34893d;
			if (!_0x399bbe) throw new JpegError(_0x21455a(0xf2));
			for (var _0x433906 = 0x0; _0x433906 < 0x40; _0x433906 += 0x8) {
				_0x388abb = _0x59eff3[_0x95c863 + _0x433906], _0x163638 = _0x59eff3[_0x95c863 + _0x433906 + 0x1], _0x3f55f3 = _0x59eff3[_0x95c863 + _0x433906 + 0x2], _0x47fc40 = _0x59eff3[_0x95c863 + _0x433906 + 0x3], _0x19b9a8 = _0x59eff3[_0x95c863 + _0x433906 + 0x4], _0xfb26cb = _0x59eff3[_0x95c863 + _0x433906 + 0x5], _0x2c49fe = _0x59eff3[_0x95c863 + _0x433906 + 0x6], _0x46f254 = _0x59eff3[_0x95c863 + _0x433906 + 0x7], _0x388abb *= _0x399bbe[_0x433906];
				if ((_0x163638 | _0x3f55f3 | _0x47fc40 | _0x19b9a8 | _0xfb26cb | _0x2c49fe | _0x46f254) === 0x0) {
					_0x34893d = _0x5ade8b * _0x388abb + 0x200 >> 0xa, _0x4c0231[_0x433906] = _0x34893d, _0x4c0231[_0x433906 + 0x1] = _0x34893d, _0x4c0231[_0x433906 + 0x2] = _0x34893d, _0x4c0231[_0x433906 + 0x3] = _0x34893d, _0x4c0231[_0x433906 + 0x4] = _0x34893d, _0x4c0231[_0x433906 + 0x5] = _0x34893d, _0x4c0231[_0x433906 + 0x6] = _0x34893d, _0x4c0231[_0x433906 + 0x7] = _0x34893d;
					continue;
				}
				_0x163638 *= _0x399bbe[_0x433906 + 0x1], _0x3f55f3 *= _0x399bbe[_0x433906 + 0x2], _0x47fc40 *= _0x399bbe[_0x433906 + 0x3], _0x19b9a8 *= _0x399bbe[_0x433906 + 0x4], _0xfb26cb *= _0x399bbe[_0x433906 + 0x5], _0x2c49fe *= _0x399bbe[_0x433906 + 0x6], _0x46f254 *= _0x399bbe[_0x433906 + 0x7], _0x15d681 = _0x5ade8b * _0x388abb + 0x80 >> 0x8, _0xee848 = _0x5ade8b * _0x19b9a8 + 0x80 >> 0x8, _0x12dc6c = _0x3f55f3, _0x363899 = _0x2c49fe, _0x910cc7 = _0x2ae63b * (_0x163638 - _0x46f254) + 0x80 >> 0x8, _0x545514 = _0x2ae63b * (_0x163638 + _0x46f254) + 0x80 >> 0x8, _0x2b10de = _0x47fc40 << 0x4, _0x5a9879 = _0xfb26cb << 0x4, _0x15d681 = _0x15d681 + _0xee848 + 0x1 >> 0x1, _0xee848 = _0x15d681 - _0xee848, _0x34893d = _0x12dc6c * _0x269126 + _0x363899 * _0x5c6fff + 0x80 >> 0x8, _0x12dc6c = _0x12dc6c * _0x5c6fff - _0x363899 * _0x269126 + 0x80 >> 0x8, _0x363899 = _0x34893d, _0x910cc7 = _0x910cc7 + _0x5a9879 + 0x1 >> 0x1, _0x5a9879 = _0x910cc7 - _0x5a9879, _0x545514 = _0x545514 + _0x2b10de + 0x1 >> 0x1, _0x2b10de = _0x545514 - _0x2b10de, _0x15d681 = _0x15d681 + _0x363899 + 0x1 >> 0x1, _0x363899 = _0x15d681 - _0x363899, _0xee848 = _0xee848 + _0x12dc6c + 0x1 >> 0x1, _0x12dc6c = _0xee848 - _0x12dc6c, _0x34893d = _0x910cc7 * _0x830194 + _0x545514 * _0x1f5540 + 0x800 >> 0xc, _0x910cc7 = _0x910cc7 * _0x1f5540 - _0x545514 * _0x830194 + 0x800 >> 0xc, _0x545514 = _0x34893d, _0x34893d = _0x2b10de * _0x386913 + _0x5a9879 * _0x5034ae + 0x800 >> 0xc, _0x2b10de = _0x2b10de * _0x5034ae - _0x5a9879 * _0x386913 + 0x800 >> 0xc, _0x5a9879 = _0x34893d, _0x4c0231[_0x433906] = _0x15d681 + _0x545514, _0x4c0231[_0x433906 + 0x7] = _0x15d681 - _0x545514, _0x4c0231[_0x433906 + 0x1] = _0xee848 + _0x5a9879, _0x4c0231[_0x433906 + 0x6] = _0xee848 - _0x5a9879, _0x4c0231[_0x433906 + 0x2] = _0x12dc6c + _0x2b10de, _0x4c0231[_0x433906 + 0x5] = _0x12dc6c - _0x2b10de, _0x4c0231[_0x433906 + 0x3] = _0x363899 + _0x910cc7, _0x4c0231[_0x433906 + 0x4] = _0x363899 - _0x910cc7;
			}
			for (var _0x1a0fdc = 0x0; _0x1a0fdc < 0x8; ++_0x1a0fdc) {
				_0x388abb = _0x4c0231[_0x1a0fdc], _0x163638 = _0x4c0231[_0x1a0fdc + 0x8], _0x3f55f3 = _0x4c0231[_0x1a0fdc + 0x10], _0x47fc40 = _0x4c0231[_0x1a0fdc + 0x18], _0x19b9a8 = _0x4c0231[_0x1a0fdc + 0x20], _0xfb26cb = _0x4c0231[_0x1a0fdc + 0x28], _0x2c49fe = _0x4c0231[_0x1a0fdc + 0x30], _0x46f254 = _0x4c0231[_0x1a0fdc + 0x38];
				if ((_0x163638 | _0x3f55f3 | _0x47fc40 | _0x19b9a8 | _0xfb26cb | _0x2c49fe | _0x46f254) === 0x0) {
					_0x34893d = _0x5ade8b * _0x388abb + 0x2000 >> 0xe, _0x34893d = _0x34893d < -0x7f8 ? 0x0 : _0x34893d >= 0x7e8 ? 0xff : _0x34893d + 0x808 >> 0x4, _0x59eff3[_0x95c863 + _0x1a0fdc] = _0x34893d, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x8] = _0x34893d, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x10] = _0x34893d, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x18] = _0x34893d, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x20] = _0x34893d, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x28] = _0x34893d, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x30] = _0x34893d, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x38] = _0x34893d;
					continue;
				}
				_0x15d681 = _0x5ade8b * _0x388abb + 0x800 >> 0xc, _0xee848 = _0x5ade8b * _0x19b9a8 + 0x800 >> 0xc, _0x12dc6c = _0x3f55f3, _0x363899 = _0x2c49fe, _0x910cc7 = _0x2ae63b * (_0x163638 - _0x46f254) + 0x800 >> 0xc, _0x545514 = _0x2ae63b * (_0x163638 + _0x46f254) + 0x800 >> 0xc, _0x2b10de = _0x47fc40, _0x5a9879 = _0xfb26cb, _0x15d681 = (_0x15d681 + _0xee848 + 0x1 >> 0x1) + 0x1010, _0xee848 = _0x15d681 - _0xee848, _0x34893d = _0x12dc6c * _0x269126 + _0x363899 * _0x5c6fff + 0x800 >> 0xc, _0x12dc6c = _0x12dc6c * _0x5c6fff - _0x363899 * _0x269126 + 0x800 >> 0xc, _0x363899 = _0x34893d, _0x910cc7 = _0x910cc7 + _0x5a9879 + 0x1 >> 0x1, _0x5a9879 = _0x910cc7 - _0x5a9879, _0x545514 = _0x545514 + _0x2b10de + 0x1 >> 0x1, _0x2b10de = _0x545514 - _0x2b10de, _0x15d681 = _0x15d681 + _0x363899 + 0x1 >> 0x1, _0x363899 = _0x15d681 - _0x363899, _0xee848 = _0xee848 + _0x12dc6c + 0x1 >> 0x1, _0x12dc6c = _0xee848 - _0x12dc6c, _0x34893d = _0x910cc7 * _0x830194 + _0x545514 * _0x1f5540 + 0x800 >> 0xc, _0x910cc7 = _0x910cc7 * _0x1f5540 - _0x545514 * _0x830194 + 0x800 >> 0xc, _0x545514 = _0x34893d, _0x34893d = _0x2b10de * _0x386913 + _0x5a9879 * _0x5034ae + 0x800 >> 0xc, _0x2b10de = _0x2b10de * _0x5034ae - _0x5a9879 * _0x386913 + 0x800 >> 0xc, _0x5a9879 = _0x34893d, _0x388abb = _0x15d681 + _0x545514, _0x46f254 = _0x15d681 - _0x545514, _0x163638 = _0xee848 + _0x5a9879, _0x2c49fe = _0xee848 - _0x5a9879, _0x3f55f3 = _0x12dc6c + _0x2b10de, _0xfb26cb = _0x12dc6c - _0x2b10de, _0x47fc40 = _0x363899 + _0x910cc7, _0x19b9a8 = _0x363899 - _0x910cc7, _0x388abb = _0x388abb < 0x10 ? 0x0 : _0x388abb >= 0xff0 ? 0xff : _0x388abb >> 0x4, _0x163638 = _0x163638 < 0x10 ? 0x0 : _0x163638 >= 0xff0 ? 0xff : _0x163638 >> 0x4, _0x3f55f3 = _0x3f55f3 < 0x10 ? 0x0 : _0x3f55f3 >= 0xff0 ? 0xff : _0x3f55f3 >> 0x4, _0x47fc40 = _0x47fc40 < 0x10 ? 0x0 : _0x47fc40 >= 0xff0 ? 0xff : _0x47fc40 >> 0x4, _0x19b9a8 = _0x19b9a8 < 0x10 ? 0x0 : _0x19b9a8 >= 0xff0 ? 0xff : _0x19b9a8 >> 0x4, _0xfb26cb = _0xfb26cb < 0x10 ? 0x0 : _0xfb26cb >= 0xff0 ? 0xff : _0xfb26cb >> 0x4, _0x2c49fe = _0x2c49fe < 0x10 ? 0x0 : _0x2c49fe >= 0xff0 ? 0xff : _0x2c49fe >> 0x4, _0x46f254 = _0x46f254 < 0x10 ? 0x0 : _0x46f254 >= 0xff0 ? 0xff : _0x46f254 >> 0x4, _0x59eff3[_0x95c863 + _0x1a0fdc] = _0x388abb, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x8] = _0x163638, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x10] = _0x3f55f3, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x18] = _0x47fc40, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x20] = _0x19b9a8, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x28] = _0xfb26cb, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x30] = _0x2c49fe, _0x59eff3[_0x95c863 + _0x1a0fdc + 0x38] = _0x46f254;
			}
		}

		function _0x39a255(_0x562930, _0x11befb) {
			var _0x22ecda = a0_0x35ce,
				_0xf8db75 = _0x11befb[_0x22ecda(0x226)],
				_0x75163f = _0x11befb[_0x22ecda(0x1dd)],
				_0x1cebdd = new Int16Array(0x40);
			for (var _0x36a7cf = 0x0; _0x36a7cf < _0x75163f; _0x36a7cf++) {
				for (var _0x3559b5 = 0x0; _0x3559b5 < _0xf8db75; _0x3559b5++) {
					var _0x2769df = _0x18fc59(_0x11befb, _0x36a7cf, _0x3559b5);
					_0x316211(_0x11befb, _0x2769df, _0x1cebdd);
				}
			}
			return _0x11befb['blockData'];
		}

		function _0x24abef(_0x16dda3, _0x4fb434, _0x2db255) {
			var _0x2421a0 = a0_0x35ce;
			_0x2db255 === void 0x0 && (_0x2db255 = _0x4fb434);

			function _0x2237e6(_0x163a16) {
				return _0x16dda3[_0x163a16] << 0x8 | _0x16dda3[_0x163a16 + 0x1];
			}
			var _0x5d9ea3 = _0x16dda3[_0x2421a0(0x184)] - 0x1,
				_0x4d069b = _0x2db255 < _0x4fb434 ? _0x2db255 : _0x4fb434;
			if (_0x4fb434 >= _0x5d9ea3) return null;
			var _0x310e2c = _0x2237e6(_0x4fb434);
			if (_0x310e2c >= 0xffc0 && _0x310e2c <= 0xfffe) return {
				'invalid': null,
				'marker': _0x310e2c,
				'offset': _0x4fb434
			};
			var _0x5a3bea = _0x2237e6(_0x4d069b);
			while (!(_0x5a3bea >= 0xffc0 && _0x5a3bea <= 0xfffe)) {
				if (++_0x4d069b >= _0x5d9ea3) return null;
				_0x5a3bea = _0x2237e6(_0x4d069b);
			}
			return {
				'invalid': _0x310e2c[_0x2421a0(0x126)](0x10),
				'marker': _0x5a3bea,
				'offset': _0x4d069b
			};
		}
		return _0x23f2b8[_0x44b3bb(0x10f)] = {
			'width': 0x0,
			'height': 0x0,
			'parse': function(_0x3ad598, _0x16f727) {
				var _0x171f74 = _0x44b3bb,
					_0x2c5ebf = (_0x16f727 === void 0x0 ? {} : _0x16f727)[_0x171f74(0xbb)],
					_0x4a8812 = _0x2c5ebf === void 0x0 ? null : _0x2c5ebf;

				function _0x218a30() {
					var _0x428c92 = _0x3ad598[_0x516ebb] << 0x8 | _0x3ad598[_0x516ebb + 0x1];
					return _0x516ebb += 0x2, _0x428c92;
				}

				function _0x13c9dc() {
					var _0x479c28 = _0x171f74,
						_0x286427 = _0x218a30(),
						_0x177fce = _0x516ebb + _0x286427 - 0x2,
						_0x386ff3 = _0x24abef(_0x3ad598, _0x177fce, _0x516ebb);
					_0x386ff3 && _0x386ff3[_0x479c28(0x2bb)] && (warn(_0x479c28(0x205) + _0x386ff3[_0x479c28(0x2bb)]), _0x177fce = _0x386ff3[_0x479c28(0xc0)]);
					var _0x2b2a98 = _0x3ad598['subarray'](_0x516ebb, _0x177fce);
					return _0x516ebb += _0x2b2a98['length'], _0x2b2a98;
				}

				function _0x16c3a8(_0x24c0a2) {
					var _0x3588a1 = _0x171f74,
						_0x328661 = Math[_0x3588a1(0x26c)](_0x24c0a2[_0x3588a1(0x181)] / 0x8 / _0x24c0a2[_0x3588a1(0x265)]),
						_0x3792a3 = Math[_0x3588a1(0x26c)](_0x24c0a2['scanLines'] / 0x8 / _0x24c0a2['maxV']);
					for (var _0x2de9c3 = 0x0; _0x2de9c3 < _0x24c0a2[_0x3588a1(0x21a)][_0x3588a1(0x184)]; _0x2de9c3++) {
						_0x4f5881 = _0x24c0a2['components'][_0x2de9c3];
						var _0x35482e = Math['ceil'](Math[_0x3588a1(0x26c)](_0x24c0a2[_0x3588a1(0x181)] / 0x8) * _0x4f5881['h'] / _0x24c0a2[_0x3588a1(0x265)]),
							_0x7d30c1 = Math[_0x3588a1(0x26c)](Math[_0x3588a1(0x26c)](_0x24c0a2[_0x3588a1(0x1c2)] / 0x8) * _0x4f5881['v'] / _0x24c0a2['maxV']),
							_0x304575 = _0x328661 * _0x4f5881['h'],
							_0x46e046 = _0x3792a3 * _0x4f5881['v'],
							_0x3f3493 = 0x40 * _0x46e046 * (_0x304575 + 0x1);
						_0x4f5881['blockData'] = new Int16Array(_0x3f3493), _0x4f5881[_0x3588a1(0x226)] = _0x35482e, _0x4f5881['blocksPerColumn'] = _0x7d30c1;
					}
					_0x24c0a2[_0x3588a1(0x163)] = _0x328661, _0x24c0a2[_0x3588a1(0x191)] = _0x3792a3;
				}
				var _0x516ebb = 0x0,
					_0x1a8b36 = null,
					_0x2ab9a6 = null,
					_0x520278, _0x2c1d8b, _0x15aa06 = 0x0,
					_0x4eb608 = [],
					_0x55a88c = [],
					_0x2cb2c0 = [],
					_0x3a89e1 = _0x218a30();
				if (_0x3a89e1 !== 0xffd8) throw new JpegError(_0x171f74(0x10a));
				_0x3a89e1 = _0x218a30();
				_0x232346: while (_0x3a89e1 !== 0xffd9) {
					var _0x2df823, _0x2ad4a2, _0x15c9c1;
					switch (_0x3a89e1) {
						case 0xffe0:
						case 0xffe1:
						case 0xffe2:
						case 0xffe3:
						case 0xffe4:
						case 0xffe5:
						case 0xffe6:
						case 0xffe7:
						case 0xffe8:
						case 0xffe9:
						case 0xffea:
						case 0xffeb:
						case 0xffec:
						case 0xffed:
						case 0xffee:
						case 0xffef:
						case 0xfffe:
							var _0x7eb6d8 = _0x13c9dc();
							_0x3a89e1 === 0xffe0 && (_0x7eb6d8[0x0] === 0x4a && _0x7eb6d8[0x1] === 0x46 && _0x7eb6d8[0x2] === 0x49 && _0x7eb6d8[0x3] === 0x46 && _0x7eb6d8[0x4] === 0x0 && (_0x1a8b36 = {
								'version': {
									'major': _0x7eb6d8[0x5],
									'minor': _0x7eb6d8[0x6]
								},
								'densityUnits': _0x7eb6d8[0x7],
								'xDensity': _0x7eb6d8[0x8] << 0x8 | _0x7eb6d8[0x9],
								'yDensity': _0x7eb6d8[0xa] << 0x8 | _0x7eb6d8[0xb],
								'thumbWidth': _0x7eb6d8[0xc],
								'thumbHeight': _0x7eb6d8[0xd],
								'thumbData': _0x7eb6d8['subarray'](0xe, 0xe + 0x3 * _0x7eb6d8[0xc] * _0x7eb6d8[0xd])
							}));
							_0x3a89e1 === 0xffee && (_0x7eb6d8[0x0] === 0x41 && _0x7eb6d8[0x1] === 0x64 && _0x7eb6d8[0x2] === 0x6f && _0x7eb6d8[0x3] === 0x62 && _0x7eb6d8[0x4] === 0x65 && (_0x2ab9a6 = {
								'version': _0x7eb6d8[0x5] << 0x8 | _0x7eb6d8[0x6],
								'flags0': _0x7eb6d8[0x7] << 0x8 | _0x7eb6d8[0x8],
								'flags1': _0x7eb6d8[0x9] << 0x8 | _0x7eb6d8[0xa],
								'transformCode': _0x7eb6d8[0xb]
							}));
							break;
						case 0xffdb:
							var _0x467063 = _0x218a30(),
								_0x16dfbd = _0x467063 + _0x516ebb - 0x2,
								_0x1b01fa;
							while (_0x516ebb < _0x16dfbd) {
								var _0x53be54 = _0x3ad598[_0x516ebb++],
									_0x2f5702 = new Uint16Array(0x40);
								if (_0x53be54 >> 0x4 === 0x0)
									for (_0x2ad4a2 = 0x0; _0x2ad4a2 < 0x40; _0x2ad4a2++) {
										_0x1b01fa = _0x3433a1[_0x2ad4a2], _0x2f5702[_0x1b01fa] = _0x3ad598[_0x516ebb++];
									} else {
										if (_0x53be54 >> 0x4 === 0x1)
											for (_0x2ad4a2 = 0x0; _0x2ad4a2 < 0x40; _0x2ad4a2++) {
												_0x1b01fa = _0x3433a1[_0x2ad4a2], _0x2f5702[_0x1b01fa] = _0x218a30();
											} else throw new JpegError('DQT\x20-\x20invalid\x20table\x20spec');
									}
								_0x4eb608[_0x53be54 & 0xf] = _0x2f5702;
							}
							break;
						case 0xffc0:
						case 0xffc1:
						case 0xffc2:
							if (_0x520278) throw new JpegError(_0x171f74(0x11d));
							_0x218a30(), _0x520278 = {}, _0x520278[_0x171f74(0x22a)] = _0x3a89e1 === 0xffc1, _0x520278[_0x171f74(0x1d6)] = _0x3a89e1 === 0xffc2, _0x520278[_0x171f74(0x177)] = _0x3ad598[_0x516ebb++];
							var _0x539d9a = _0x218a30();
							_0x520278[_0x171f74(0x1c2)] = _0x4a8812 || _0x539d9a, _0x520278[_0x171f74(0x181)] = _0x218a30(), _0x520278[_0x171f74(0x21a)] = [], _0x520278['componentIds'] = {};
							var _0x3bca4d = _0x3ad598[_0x516ebb++],
								_0x54054e, _0x504dbd = 0x0,
								_0x1be709 = 0x0;
							for (_0x2df823 = 0x0; _0x2df823 < _0x3bca4d; _0x2df823++) {
								_0x54054e = _0x3ad598[_0x516ebb];
								var _0x17bc74 = _0x3ad598[_0x516ebb + 0x1] >> 0x4,
									_0x40d4f2 = _0x3ad598[_0x516ebb + 0x1] & 0xf;
								_0x504dbd < _0x17bc74 && (_0x504dbd = _0x17bc74);
								_0x1be709 < _0x40d4f2 && (_0x1be709 = _0x40d4f2);
								var _0x5360c5 = _0x3ad598[_0x516ebb + 0x2];
								_0x15c9c1 = _0x520278['components'][_0x171f74(0x1a1)]({
									'h': _0x17bc74,
									'v': _0x40d4f2,
									'quantizationId': _0x5360c5,
									'quantizationTable': null
								}), _0x520278[_0x171f74(0x22c)][_0x54054e] = _0x15c9c1 - 0x1, _0x516ebb += 0x3;
							}
							_0x520278[_0x171f74(0x265)] = _0x504dbd, _0x520278[_0x171f74(0x28a)] = _0x1be709, _0x16c3a8(_0x520278);
							break;
						case 0xffc4:
							var _0x5754f8 = _0x218a30();
							for (_0x2df823 = 0x2; _0x2df823 < _0x5754f8;) {
								var _0x4e7b03 = _0x3ad598[_0x516ebb++],
									_0x116f17 = new Uint8Array(0x10),
									_0x9fdf51 = 0x0;
								for (_0x2ad4a2 = 0x0; _0x2ad4a2 < 0x10; _0x2ad4a2++, _0x516ebb++) {
									_0x9fdf51 += _0x116f17[_0x2ad4a2] = _0x3ad598[_0x516ebb];
								}
								var _0x3778dd = new Uint8Array(_0x9fdf51);
								for (_0x2ad4a2 = 0x0; _0x2ad4a2 < _0x9fdf51; _0x2ad4a2++, _0x516ebb++) {
									_0x3778dd[_0x2ad4a2] = _0x3ad598[_0x516ebb];
								}
								_0x2df823 += 0x11 + _0x9fdf51, (_0x4e7b03 >> 0x4 === 0x0 ? _0x2cb2c0 : _0x55a88c)[_0x4e7b03 & 0xf] = _0x4e4dbc(_0x116f17, _0x3778dd);
							}
							break;
						case 0xffdd:
							_0x218a30(), _0x2c1d8b = _0x218a30();
							break;
						case 0xffda:
							var _0xa9cca1 = ++_0x15aa06 === 0x1 && !_0x4a8812;
							_0x218a30();
							var _0x32d9ab = _0x3ad598[_0x516ebb++],
								_0x3131c1 = [],
								_0x4f5881;
							for (_0x2df823 = 0x0; _0x2df823 < _0x32d9ab; _0x2df823++) {
								var _0x54e280 = _0x520278['componentIds'][_0x3ad598[_0x516ebb++]];
								_0x4f5881 = _0x520278[_0x171f74(0x21a)][_0x54e280];
								var _0x424480 = _0x3ad598[_0x516ebb++];
								_0x4f5881['huffmanTableDC'] = _0x2cb2c0[_0x424480 >> 0x4], _0x4f5881['huffmanTableAC'] = _0x55a88c[_0x424480 & 0xf], _0x3131c1['push'](_0x4f5881);
							}
							var _0x25d603 = _0x3ad598[_0x516ebb++],
								_0x4af6ab = _0x3ad598[_0x516ebb++],
								_0x236b0f = _0x3ad598[_0x516ebb++];
							try {
								var _0x133de3 = _0x496902(_0x3ad598, _0x516ebb, _0x520278, _0x3131c1, _0x2c1d8b, _0x25d603, _0x4af6ab, _0x236b0f >> 0x4, _0x236b0f & 0xf, _0xa9cca1);
								_0x516ebb += _0x133de3;
							} catch (_0x12e82f) {
								if (_0x12e82f instanceof DNLMarkerError) return warn(_0x12e82f[_0x171f74(0xd2)] + _0x171f74(0x1c3)), this[_0x171f74(0x13c)](_0x3ad598, {
									'dnlScanLines': _0x12e82f[_0x171f74(0x1c2)]
								});
								else {
									if (_0x12e82f instanceof EOIMarkerError) {
										warn(_0x12e82f[_0x171f74(0xd2)] + _0x171f74(0x1aa));
										break _0x232346;
									}
								}
								throw _0x12e82f;
							}
							break;
						case 0xffdc:
							_0x516ebb += 0x4;
							break;
						case 0xffff:
							_0x3ad598[_0x516ebb] !== 0xff && _0x516ebb--;
							break;
						default:
							if (_0x3ad598[_0x516ebb - 0x3] === 0xff && _0x3ad598[_0x516ebb - 0x2] >= 0xc0 && _0x3ad598[_0x516ebb - 0x2] <= 0xfe) {
								_0x516ebb -= 0x3;
								break;
							}
							var _0x4a3bfd = _0x24abef(_0x3ad598, _0x516ebb - 0x2);
							if (_0x4a3bfd && _0x4a3bfd[_0x171f74(0x2bb)]) {
								warn('JpegImage.parse\x20-\x20unexpected\x20data,\x20current\x20marker\x20is:\x20' + _0x4a3bfd[_0x171f74(0x2bb)]), _0x516ebb = _0x4a3bfd[_0x171f74(0xc0)];
								break;
							}
							throw new JpegError(_0x171f74(0xb7) + _0x3a89e1[_0x171f74(0x126)](0x10));
					}
					_0x3a89e1 = _0x218a30();
				}
				this[_0x171f74(0xbf)] = _0x520278[_0x171f74(0x181)], this['height'] = _0x520278[_0x171f74(0x1c2)], this[_0x171f74(0x2d6)] = _0x1a8b36, this[_0x171f74(0x289)] = _0x2ab9a6, this[_0x171f74(0x21a)] = [];
				for (_0x2df823 = 0x0; _0x2df823 < _0x520278[_0x171f74(0x21a)][_0x171f74(0x184)]; _0x2df823++) {
					_0x4f5881 = _0x520278[_0x171f74(0x21a)][_0x2df823];
					var _0x4340a6 = _0x4eb608[_0x4f5881[_0x171f74(0x214)]];
					_0x4340a6 && (_0x4f5881[_0x171f74(0x279)] = _0x4340a6), this['components'][_0x171f74(0x1a1)]({
						'output': _0x39a255(_0x520278, _0x4f5881),
						'scaleX': _0x4f5881['h'] / _0x520278[_0x171f74(0x265)],
						'scaleY': _0x4f5881['v'] / _0x520278['maxV'],
						'blocksPerLine': _0x4f5881[_0x171f74(0x226)],
						'blocksPerColumn': _0x4f5881['blocksPerColumn']
					});
				}
				this[_0x171f74(0x241)] = this[_0x171f74(0x21a)]['length'];
			},
			'_getLinearizedBlockData': function(_0x54c760, _0x1b386f, _0x20b029, _0x3686da, _0x5c956c) {
				var _0x9a9eca = _0x44b3bb;
				_0x20b029 === void 0x0 && (_0x20b029 = ![]);
				_0x3686da === void 0x0 && (_0x3686da = 0x0);
				_0x5c956c === void 0x0 && (_0x5c956c = null);
				var _0x491467 = ![],
					_0x4e3d12 = this[_0x9a9eca(0xbf)] / _0x54c760,
					_0x32925c = this[_0x9a9eca(0x228)] / _0x1b386f,
					_0x25d3e0, _0x4905d3, _0x1aa1d, _0x4f1c64, _0x59bda6, _0x3be58c, _0x19f90e, _0x5800a8, _0x504637, _0x14ea98, _0x3a14ea = 0x0,
					_0x2d84e2, _0x571f8b = this['components'][_0x9a9eca(0x184)],
					_0x556e73 = _0x54c760 * _0x1b386f * _0x571f8b;
				_0x571f8b == 0x3 && _0x20b029 && (_0x556e73 = _0x54c760 * _0x1b386f * 0x4);
				var _0x37f413 = new ArrayBuffer(_0x556e73 + _0x3686da),
					_0x3cdf4a = new Uint8ClampedArray(_0x37f413, _0x3686da),
					_0x2057a0 = new Uint32Array(_0x54c760),
					_0x36e9b6 = 0xfffffff8;
				if (_0x571f8b == 0x3 && _0x20b029) {
					for (_0x19f90e = 0x0; _0x19f90e < _0x571f8b; _0x19f90e++) {
						_0x25d3e0 = this['components'][_0x19f90e], _0x4905d3 = _0x25d3e0['scaleX'] * _0x4e3d12, _0x1aa1d = _0x25d3e0[_0x9a9eca(0x210)] * _0x32925c, _0x3a14ea = _0x19f90e, _0x2d84e2 = _0x25d3e0[_0x9a9eca(0x1c1)], _0x4f1c64 = _0x25d3e0['blocksPerLine'] + 0x1 << 0x3;
						for (_0x59bda6 = 0x0; _0x59bda6 < _0x54c760; _0x59bda6++) {
							_0x5800a8 = 0x0 | _0x59bda6 * _0x4905d3, _0x2057a0[_0x59bda6] = (_0x5800a8 & _0x36e9b6) << 0x3 | _0x5800a8 & 0x7;
						}
						for (_0x3be58c = 0x0; _0x3be58c < _0x1b386f; _0x3be58c++) {
							_0x5800a8 = 0x0 | _0x3be58c * _0x1aa1d, _0x14ea98 = _0x4f1c64 * (_0x5800a8 & _0x36e9b6) | (_0x5800a8 & 0x7) << 0x3;
							for (_0x59bda6 = 0x0; _0x59bda6 < _0x54c760; _0x59bda6++) {
								_0x3cdf4a[_0x3a14ea] = _0x2d84e2[_0x14ea98 + _0x2057a0[_0x59bda6]], _0x3a14ea += 0x4;
							}
						}
					}
					_0x3a14ea = 0x3;
					if (_0x5c956c != null) {
						var _0x12c541 = 0x0;
						for (_0x3be58c = 0x0; _0x3be58c < _0x1b386f; _0x3be58c++) {
							for (_0x59bda6 = 0x0; _0x59bda6 < _0x54c760; _0x59bda6++) {
								_0x3cdf4a[_0x3a14ea] = _0x5c956c[_0x12c541++], _0x3a14ea += 0x4;
							}
						}
					} else
						for (_0x3be58c = 0x0; _0x3be58c < _0x1b386f; _0x3be58c++) {
							for (_0x59bda6 = 0x0; _0x59bda6 < _0x54c760; _0x59bda6++) {
								_0x3cdf4a[_0x3a14ea] = 0xff, _0x3a14ea += 0x4;
							}
						}
				} else
					for (_0x19f90e = 0x0; _0x19f90e < _0x571f8b; _0x19f90e++) {
						_0x25d3e0 = this[_0x9a9eca(0x21a)][_0x19f90e], _0x4905d3 = _0x25d3e0[_0x9a9eca(0x105)] * _0x4e3d12, _0x1aa1d = _0x25d3e0['scaleY'] * _0x32925c, _0x3a14ea = _0x19f90e, _0x2d84e2 = _0x25d3e0[_0x9a9eca(0x1c1)], _0x4f1c64 = _0x25d3e0['blocksPerLine'] + 0x1 << 0x3;
						for (_0x59bda6 = 0x0; _0x59bda6 < _0x54c760; _0x59bda6++) {
							_0x5800a8 = 0x0 | _0x59bda6 * _0x4905d3, _0x2057a0[_0x59bda6] = (_0x5800a8 & _0x36e9b6) << 0x3 | _0x5800a8 & 0x7;
						}
						for (_0x3be58c = 0x0; _0x3be58c < _0x1b386f; _0x3be58c++) {
							_0x5800a8 = 0x0 | _0x3be58c * _0x1aa1d, _0x14ea98 = _0x4f1c64 * (_0x5800a8 & _0x36e9b6) | (_0x5800a8 & 0x7) << 0x3;
							for (_0x59bda6 = 0x0; _0x59bda6 < _0x54c760; _0x59bda6++) {
								_0x3cdf4a[_0x3a14ea] = _0x2d84e2[_0x14ea98 + _0x2057a0[_0x59bda6]], _0x3a14ea += _0x571f8b;
							}
						}
					}
				var _0x5ee27e = this[_0x9a9eca(0x25f)];
				!_0x491467 && _0x571f8b === 0x4 && !_0x5ee27e && (_0x5ee27e = new Int32Array([-0x100, 0xff, -0x100, 0xff, -0x100, 0xff, -0x100, 0xff]));
				if (_0x5ee27e) {
					if (_0x571f8b == 0x3 && _0x20b029)
						for (_0x19f90e = 0x0; _0x19f90e < _0x556e73;) {
							for (_0x5800a8 = 0x0, _0x504637 = 0x0; _0x5800a8 < _0x571f8b; _0x5800a8++, _0x19f90e++, _0x504637 += 0x2) {
								_0x3cdf4a[_0x19f90e] = (_0x3cdf4a[_0x19f90e] * _0x5ee27e[_0x504637] >> 0x8) + _0x5ee27e[_0x504637 + 0x1];
							}
							_0x19f90e++;
						} else
							for (_0x19f90e = 0x0; _0x19f90e < _0x556e73;) {
								for (_0x5800a8 = 0x0, _0x504637 = 0x0; _0x5800a8 < _0x571f8b; _0x5800a8++, _0x19f90e++, _0x504637 += 0x2) {
									_0x3cdf4a[_0x19f90e] = (_0x3cdf4a[_0x19f90e] * _0x5ee27e[_0x504637] >> 0x8) + _0x5ee27e[_0x504637 + 0x1];
								}
							}
				}
				return _0x3cdf4a;
			},
			get '_isColorConversionNeeded'() {
				var _0x4aca89 = _0x44b3bb;
				if (this[_0x4aca89(0x289)]) return !!this[_0x4aca89(0x289)][_0x4aca89(0x215)];
				if (this['numComponents'] === 0x3) {
					if (this[_0x4aca89(0x2ba)] === 0x0) return ![];
					return !![];
				}
				if (this[_0x4aca89(0x2ba)] === 0x1) return !![];
				return ![];
			},
			'_convertYccToRgb': function _0x2ded04(_0x30a9ff, _0x4e9078) {
				_0x4e9078 === void 0x0 && (_0x4e9078 = ![]);
				var _0x4cb11f, _0x5b2c31, _0x3859ce, _0x186ae9, _0x4f2fa9;
				if (_0x4e9078)
					for (_0x186ae9 = 0x0, _0x4f2fa9 = _0x30a9ff['length']; _0x186ae9 < _0x4f2fa9; _0x186ae9 += 0x3) {
						_0x4cb11f = _0x30a9ff[_0x186ae9], _0x5b2c31 = _0x30a9ff[_0x186ae9 + 0x1], _0x3859ce = _0x30a9ff[_0x186ae9 + 0x2], _0x30a9ff[_0x186ae9] = _0x4cb11f - 179.456 + 1.402 * _0x3859ce, _0x30a9ff[_0x186ae9 + 0x1] = _0x4cb11f + 135.459 - 0.344 * _0x5b2c31 - 0.714 * _0x3859ce, _0x30a9ff[_0x186ae9 + 0x2] = _0x4cb11f - 226.816 + 1.772 * _0x5b2c31, _0x186ae9++;
					} else
						for (_0x186ae9 = 0x0, _0x4f2fa9 = _0x30a9ff['length']; _0x186ae9 < _0x4f2fa9; _0x186ae9 += 0x3) {
							_0x4cb11f = _0x30a9ff[_0x186ae9], _0x5b2c31 = _0x30a9ff[_0x186ae9 + 0x1], _0x3859ce = _0x30a9ff[_0x186ae9 + 0x2], _0x30a9ff[_0x186ae9] = _0x4cb11f - 179.456 + 1.402 * _0x3859ce, _0x30a9ff[_0x186ae9 + 0x1] = _0x4cb11f + 135.459 - 0.344 * _0x5b2c31 - 0.714 * _0x3859ce, _0x30a9ff[_0x186ae9 + 0x2] = _0x4cb11f - 226.816 + 1.772 * _0x5b2c31;
						}
				return _0x30a9ff;
			},
			'_convertYcckToRgb': function _0x44f22f(_0x57a6b3) {
				var _0x219c5e = _0x44b3bb,
					_0x3226e2, _0x1433f0, _0x3f576c, _0x5e7601, _0x46673d = 0x0;
				for (var _0x2b30ad = 0x0, _0x3c6d26 = _0x57a6b3[_0x219c5e(0x184)]; _0x2b30ad < _0x3c6d26; _0x2b30ad += 0x4) {
					_0x3226e2 = _0x57a6b3[_0x2b30ad], _0x1433f0 = _0x57a6b3[_0x2b30ad + 0x1], _0x3f576c = _0x57a6b3[_0x2b30ad + 0x2], _0x5e7601 = _0x57a6b3[_0x2b30ad + 0x3], _0x57a6b3[_0x46673d++] = -122.67195406894 + _0x1433f0 * (-0.0000660635669420364 * _0x1433f0 + 0.000437130475926232 * _0x3f576c - 0.000054080610064599 * _0x3226e2 + 0.00048449797120281 * _0x5e7601 - 0.154362151871126) + _0x3f576c * (-0.000957964378445773 * _0x3f576c + 0.000817076911346625 * _0x3226e2 - 0.00477271405408747 * _0x5e7601 + 1.53380253221734) + _0x3226e2 * (0.000961250184130688 * _0x3226e2 - 0.00266257332283933 * _0x5e7601 + 0.48357088451265) + _0x5e7601 * (-0.000336197177618394 * _0x5e7601 + 0.484791561490776), _0x57a6b3[_0x46673d++] = 107.268039397724 + _0x1433f0 * (0.0000219927104525741 * _0x1433f0 - 0.000640992018297945 * _0x3f576c + 0.000659397001245577 * _0x3226e2 + 0.000426105652938837 * _0x5e7601 - 0.176491792462875) + _0x3f576c * (-0.000778269941513683 * _0x3f576c + 0.00130872261408275 * _0x3226e2 + 0.000770482631801132 * _0x5e7601 - 0.151051492775562) + _0x3226e2 * (0.00126935368114843 * _0x3226e2 - 0.00265090189010898 * _0x5e7601 + 0.25802910206845) + _0x5e7601 * (-0.000318913117588328 * _0x5e7601 - 0.213742400323665), _0x57a6b3[_0x46673d++] = -20.810012546947 + _0x1433f0 * (-0.000570115196973677 * _0x1433f0 - 0.0000263409051004589 * _0x3f576c + 0.0020741088115012 * _0x3226e2 - 0.00288260236853442 * _0x5e7601 + 0.814272968359295) + _0x3f576c * (-0.0000153496057440975 * _0x3f576c - 0.000132689043961446 * _0x3226e2 + 0.000560833691242812 * _0x5e7601 - 0.195152027534049) + _0x3226e2 * (0.00174418132927582 * _0x3226e2 - 0.00255243321439347 * _0x5e7601 + 0.116935020465145) + _0x5e7601 * (-0.000343531996510555 * _0x5e7601 + 0.24165260232407);
				}
				return _0x57a6b3[_0x219c5e(0x2d0)](0x0, _0x46673d);
			},
			'_convertYcckToCmyk': function _0x20d517(_0x22ebd4) {
				var _0x2eac51, _0x44eea5, _0x5eb851;
				for (var _0x561c6b = 0x0, _0x1758ab = _0x22ebd4['length']; _0x561c6b < _0x1758ab; _0x561c6b += 0x4) {
					_0x2eac51 = _0x22ebd4[_0x561c6b], _0x44eea5 = _0x22ebd4[_0x561c6b + 0x1], _0x5eb851 = _0x22ebd4[_0x561c6b + 0x2], _0x22ebd4[_0x561c6b] = 434.456 - _0x2eac51 - 1.402 * _0x5eb851, _0x22ebd4[_0x561c6b + 0x1] = 119.541 - _0x2eac51 + 0.344 * _0x44eea5 + 0.714 * _0x5eb851, _0x22ebd4[_0x561c6b + 0x2] = 481.816 - _0x2eac51 - 1.772 * _0x44eea5;
				}
				return _0x22ebd4;
			},
			'_convertCmykToRgb': function _0x2b9b99(_0x59a644) {
				var _0x4a75f5 = _0x44b3bb,
					_0x494b79, _0x191f78, _0x3da86f, _0x195607, _0x4e7b14 = 0x0,
					_0x26132e = 0x1 / 0xff;
				for (var _0x2df6f1 = 0x0, _0x34c484 = _0x59a644[_0x4a75f5(0x184)]; _0x2df6f1 < _0x34c484; _0x2df6f1 += 0x4) {
					_0x494b79 = _0x59a644[_0x2df6f1] * _0x26132e, _0x191f78 = _0x59a644[_0x2df6f1 + 0x1] * _0x26132e, _0x3da86f = _0x59a644[_0x2df6f1 + 0x2] * _0x26132e, _0x195607 = _0x59a644[_0x2df6f1 + 0x3] * _0x26132e, _0x59a644[_0x4e7b14++] = 0xff + _0x494b79 * (-4.387332384609988 * _0x494b79 + 54.48615194189176 * _0x191f78 + 18.82290502165302 * _0x3da86f + 212.25662451639585 * _0x195607 - 285.2331026137004) + _0x191f78 * (1.7149763477362134 * _0x191f78 - 5.6096736904047315 * _0x3da86f - 17.873870861415444 * _0x195607 - 5.497006427196366) + _0x3da86f * (-2.5217340131683033 * _0x3da86f - 21.248923337353073 * _0x195607 + 17.5119270841813) - _0x195607 * (21.86122147463605 * _0x195607 + 189.48180835922747), _0x59a644[_0x4e7b14++] = 0xff + _0x494b79 * (8.841041422036149 * _0x494b79 + 60.118027045597366 * _0x191f78 + 6.871425592049007 * _0x3da86f + 31.159100130055922 * _0x195607 - 79.2970844816548) + _0x191f78 * (-15.310361306967817 * _0x191f78 + 17.575251261109482 * _0x3da86f + 131.35250912493976 * _0x195607 - 190.9453302588951) + _0x3da86f * (4.444339102852739 * _0x3da86f + 9.8632861493405 * _0x195607 - 24.86741582555878) - _0x195607 * (20.737325471181034 * _0x195607 + 187.80453709719578), _0x59a644[_0x4e7b14++] = 0xff + _0x494b79 * (0.8842522430003296 * _0x494b79 + 8.078677503112928 * _0x191f78 + 30.89978309703729 * _0x3da86f - 0.23883238689178934 * _0x195607 - 14.183576799673286) + _0x191f78 * (10.49593273432072 * _0x191f78 + 63.02378494754052 * _0x3da86f + 50.606957656360734 * _0x195607 - 112.23884253719248) + _0x3da86f * (0.03296041114873217 * _0x3da86f + 115.60384449646641 * _0x195607 - 193.58209356861505) - _0x195607 * (22.33816807309886 * _0x195607 + 180.12613974708367);
				}
				return _0x59a644[_0x4a75f5(0x2d0)](0x0, _0x4e7b14);
			},
			'getData': function(_0x4a951c, _0x948245, _0x51e7d2, _0x554d0a, _0x40a87f, _0x80fa54) {
				var _0xbd5d9a = _0x44b3bb;
				_0x51e7d2 === void 0x0 && (_0x51e7d2 = ![]);
				_0x554d0a === void 0x0 && (_0x554d0a = ![]);
				_0x40a87f === void 0x0 && (_0x40a87f = 0x0);
				_0x80fa54 === void 0x0 && (_0x80fa54 = null);
				if (this['numComponents'] > 0x4) throw new JpegError(_0xbd5d9a(0x14f));
				var _0x49d2a1 = this[_0xbd5d9a(0x1da)](_0x4a951c, _0x948245, _0x554d0a, _0x40a87f, _0x80fa54);
				if (this[_0xbd5d9a(0x241)] === 0x1 && _0x51e7d2) {
					var _0x4f78f9 = _0x49d2a1['length'],
						_0x3f3fa6 = new Uint8ClampedArray(_0x4f78f9 * 0x3),
						_0x30c347 = 0x0;
					for (var _0x4fe59d = 0x0; _0x4fe59d < _0x4f78f9; _0x4fe59d++) {
						var _0x56a85d = _0x49d2a1[_0x4fe59d];
						_0x3f3fa6[_0x30c347++] = _0x56a85d, _0x3f3fa6[_0x30c347++] = _0x56a85d, _0x3f3fa6[_0x30c347++] = _0x56a85d;
					}
					return _0x3f3fa6;
				} else {
					if (this[_0xbd5d9a(0x241)] === 0x3 && this['_isColorConversionNeeded']) return this[_0xbd5d9a(0x12c)](_0x49d2a1, _0x554d0a);
					else {
						if (this[_0xbd5d9a(0x241)] === 0x4) {
							if (this[_0xbd5d9a(0x1bc)]) {
								if (_0x51e7d2) return this['_convertYcckToRgb'](_0x49d2a1);
								return this[_0xbd5d9a(0x2ca)](_0x49d2a1);
							} else {
								if (_0x51e7d2) return this['_convertCmykToRgb'](_0x49d2a1);
							}
						}
					}
				}
				return _0x49d2a1;
			}
		}, _0x23f2b8;
	}(),
	WeChatUI;
(function(_0x2cbcc0) {
	var _0x35fb36 = a0_0x9d38d7,
		_0xe34385 = (function() {
			var _0x95e5c0 = a0_0x35ce;

			function _0x23fd86() {}
			return Object[_0x95e5c0(0x1ce)](_0x23fd86, 'backstage_url', {
				'get': function() {
					var _0x3b593f = _0x95e5c0;
					return DEBUG ? this[_0x3b593f(0x18c)] : this[_0x3b593f(0xd7)];
				},
				'enumerable': !![],
				'configurable': !![]
			}), Object[_0x95e5c0(0x1ce)](_0x23fd86, _0x95e5c0(0x224), {
				'get': function() {
					var _0x389d22 = _0x95e5c0;
					return DEBUG ? this[_0x389d22(0x1cf)] : this[_0x389d22(0x118)];
				},
				'enumerable': !![],
				'configurable': !![]
			}), _0x23fd86['dev_backstage'] = _0x95e5c0(0x12d), _0x23fd86[_0x95e5c0(0x18c)] = _0x95e5c0(0x12d), _0x23fd86[_0x95e5c0(0x118)] = 'https://api.s1.l2i.cc:82/Notice/noticeList', _0x23fd86['ts_notice'] = _0x95e5c0(0x112), _0x23fd86;
		}());
	_0x2cbcc0[_0x35fb36(0x100)] = _0xe34385;
}(WeChatUI || (WeChatUI = {})));
var WeChatUI;
(function(_0x18c630) {
	var _0x4c8462 = a0_0x9d38d7,
		_0xc0bb8c = laya['ui']['View'],
		_0x5d7fe0 = function(_0x5d06fb) {
			var _0x2ce6de = a0_0x35ce;
			__extends(_0x34abc4, _0x5d06fb);

			function _0x34abc4() {
				var _0x371acd = a0_0x35ce;
				return _0x5d06fb[_0x371acd(0xb9)](this) || this;
			}
			return _0x34abc4[_0x2ce6de(0x10f)][_0x2ce6de(0x1d7)] = function() {
				var _0x28f949 = _0x2ce6de;
				_0xc0bb8c['regComponent'](_0x28f949(0x137), laya[_0x28f949(0x28e)][_0x28f949(0x137)]), _0x5d06fb[_0x28f949(0x10f)][_0x28f949(0x1d7)][_0x28f949(0xb9)](this), this[_0x28f949(0x16b)](_0x18c630[_0x28f949(0xe3)][_0x28f949(0x23b)]);
			}, _0x34abc4[_0x2ce6de(0x23b)] = {
				'type': _0x2ce6de(0x1a3),
				'props': {
					'width': 0x2d0,
					'height': 0x500,
					'centerX': 0x0
				},
				'child': [{
					'type': 'Image',
					'props': {
						'y': -0x8c,
						'x': -0x78,
						'var': 'bgImg',
						'skin': _0x2ce6de(0xd3)
					}
				}, {
					'type': _0x2ce6de(0x1b3),
					'props': {
						'y': 0x410,
						'x': 0x0,
						'width': 0x2d0,
						'var': _0x2ce6de(0x162),
						'name': _0x2ce6de(0x162),
						'height': 0xf0
					},
					'child': [{
						'type': _0x2ce6de(0x2ce),
						'props': {
							'y': -0x25,
							'x': 0x6b,
							'width': 0x1fa,
							'var': _0x2ce6de(0x204),
							'skin': _0x2ce6de(0x199),
							'height': 0x1a
						}
					}, {
						'type': _0x2ce6de(0x2ce),
						'props': {
							'y': 0x5,
							'x': 0x6b,
							'width': 0x1fa,
							'var': 'progressBg2',
							'skin': _0x2ce6de(0x199),
							'height': 0x1a
						}
					}, {
						'type': _0x2ce6de(0x2ce),
						'props': {
							'y': -0x1f,
							'x': 0x79,
							'width': 0x1de,
							'var': _0x2ce6de(0x292),
							'skin': _0x2ce6de(0x2c8),
							'height': 0xe
						}
					}, {
						'type': _0x2ce6de(0x2ce),
						'props': {
							'y': 0xb,
							'x': 0x79,
							'width': 0x1de,
							'var': 'progressBar2',
							'skin': _0x2ce6de(0x2c8),
							'height': 0xe
						}
					}, {
						'type': _0x2ce6de(0x137),
						'props': {
							'y': -0x4b,
							'x': 0x0,
							'width': 0x2d0,
							'var': 'proLabel',
							'text': _0x2ce6de(0x135),
							'strokeColor': _0x2ce6de(0x20b),
							'stroke': 0x2,
							'fontSize': 0x18,
							'font': _0x2ce6de(0x12f),
							'color': _0x2ce6de(0x152),
							'align': _0x2ce6de(0x2a8)
						}
					}, {
						'type': _0x2ce6de(0x137),
						'props': {
							'y': -0x24,
							'x': 0x0,
							'width': 0x2d0,
							'var': _0x2ce6de(0x238),
							'text': _0x2ce6de(0x15a),
							'strokeColor': _0x2ce6de(0x1e0),
							'stroke': 0x3,
							'fontSize': 0x18,
							'font': _0x2ce6de(0x12f),
							'color': _0x2ce6de(0x250),
							'align': _0x2ce6de(0x2a8)
						}
					}, {
						'type': _0x2ce6de(0x137),
						'props': {
							'y': 0x6,
							'x': 0x0,
							'width': 0x2d0,
							'var': _0x2ce6de(0x271),
							'text': _0x2ce6de(0x15a),
							'strokeColor': _0x2ce6de(0x1e0),
							'stroke': 0x3,
							'fontSize': 0x18,
							'font': _0x2ce6de(0x12f),
							'color': '#FFFFFF',
							'align': _0x2ce6de(0x2a8)
						}
					}, {
						'type': 'Text',
						'props': {
							'y': 0x33,
							'x': 0x0,
							'width': 0x2d0,
							'text': _0x2ce6de(0x129),
							'strokeColor': '#000000',
							'stroke': 0x2,
							'fontSize': 0x18,
							'font': 'SimHei',
							'color': _0x2ce6de(0x262),
							'align': 'center'
						}
					}, {
						'type': _0x2ce6de(0x137),
						'props': {
							'y': 0x5e,
							'x': 0x0,
							'width': 0x2d0,
							'text': '抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。',
							'strokeColor': _0x2ce6de(0x1cd),
							'stroke': 0x2,
							'fontSize': 0x14,
							'font': _0x2ce6de(0x12f),
							'color': '#FFFFFF',
							'align': _0x2ce6de(0x2a8)
						}
					}, {
						'type': _0x2ce6de(0x137),
						'props': {
							'y': 0x7d,
							'x': 0x0,
							'width': 0x2d0,
							'text': _0x2ce6de(0x14a),
							'strokeColor': _0x2ce6de(0x1cd),
							'stroke': 0x2,
							'fontSize': 0x14,
							'font': _0x2ce6de(0x12f),
							'color': _0x2ce6de(0x250),
							'align': _0x2ce6de(0x2a8)
						}
					}, {
						'type': _0x2ce6de(0x137),
						'props': {
							'y': 0xa5,
							'x': 0x0,
							'width': 0x2d0,
							'var': _0x2ce6de(0x1e2),
							'text': _0x2ce6de(0x1e7),
							'strokeColor': _0x2ce6de(0x1cd),
							'stroke': 0x2,
							'fontSize': 0x12,
							'font': _0x2ce6de(0x12f),
							'color': '#FFFFFF',
							'align': _0x2ce6de(0x2a8)
						}
					}, {
						'type': _0x2ce6de(0x137),
						'props': {
							'y': 0xc3,
							'x': 0x0,
							'width': 0x2d0,
							'var': _0x2ce6de(0x27f),
							'text': _0x2ce6de(0x26a),
							'strokeColor': _0x2ce6de(0x1cd),
							'stroke': 0x2,
							'fontSize': 0x12,
							'font': _0x2ce6de(0x12f),
							'color': '#FFFFFF',
							'align': 'center'
						}
					}, {
						'type': _0x2ce6de(0x137),
						'props': {
							'y': 0xde,
							'x': 0x0,
							'width': 0x2d0,
							'var': 'verTxt',
							'text': _0x2ce6de(0x266),
							'strokeColor': _0x2ce6de(0x1cd),
							'stroke': 0x2,
							'fontSize': 0x12,
							'font': _0x2ce6de(0x12f),
							'color': '#FFFFFF',
							'align': _0x2ce6de(0x2a8)
						}
					}]
				}]
			}, _0x34abc4;
		}(_0xc0bb8c);
	_0x18c630[_0x4c8462(0xe3)] = _0x5d7fe0;
	var _0x4f40e4 = function(_0x937bbe) {
		var _0x11cbec = _0x4c8462;
		__extends(_0x9a319d, _0x937bbe);

		function _0x9a319d() {
			return _0x937bbe['call'](this) || this;
		}
		return _0x9a319d[_0x11cbec(0x10f)]['createChildren'] = function() {
			var _0x175b34 = _0x11cbec;
			_0xc0bb8c[_0x175b34(0x136)](_0x175b34(0x137), laya[_0x175b34(0x28e)][_0x175b34(0x137)]), _0xc0bb8c['regComponent'](_0x175b34(0x16d), laya[_0x175b34(0x298)][_0x175b34(0x18d)][_0x175b34(0x16d)]), _0x937bbe['prototype'][_0x175b34(0x1d7)]['call'](this), this[_0x175b34(0x16b)](_0x18c630[_0x175b34(0x2b6)]['uiView']);
		}, _0x9a319d[_0x11cbec(0x23b)] = {
			'type': _0x11cbec(0x1a3),
			'props': {
				'width': 0x2d0,
				'height': 0x500,
				'centerX': 0x0
			},
			'child': [{
				'type': _0x11cbec(0x2ce),
				'props': {
					'y': -0x8c,
					'x': -0x78,
					'skin': _0x11cbec(0x203)
				}
			}, {
				'type': _0x11cbec(0x2ce),
				'props': {
					'y': 0x391,
					'x': 0x7c,
					'var': _0x11cbec(0x2c5),
					'skin': _0x11cbec(0x247)
				}
			}, {
				'type': _0x11cbec(0xe4),
				'props': {
					'y': 0x3e8,
					'x': 0xbc,
					'var': 'loginBtn',
					'stateNum': 0x1,
					'skin': _0x11cbec(0x261)
				}
			}, {
				'type': _0x11cbec(0x2ce),
				'props': {
					'y': 0x39d,
					'x': 0x9b,
					'var': _0x11cbec(0xc5),
					'skin': 'login/image_xfy_ct.png'
				}
			}, {
				'type': _0x11cbec(0x2ce),
				'props': {
					'y': 0x31,
					'x': 0x21d,
					'var': _0x11cbec(0x23e),
					'skin': _0x11cbec(0x116)
				}
			}, {
				'type': _0x11cbec(0x1dc),
				'props': {
					'y': 0x466,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'text': _0x11cbec(0x256),
					'strokeColor': _0x11cbec(0x1cd),
					'stroke': 0x2,
					'leading': 0x6,
					'height': 0x16,
					'fontSize': 0x16,
					'font': _0x11cbec(0x12f),
					'color': '#FFFFFF',
					'align': _0x11cbec(0x2a8)
				}
			}, {
				'type': 'Label',
				'props': {
					'y': 0x39e,
					'x': 0xd2,
					'width': 0x12c,
					'var': _0x11cbec(0x1a8),
					'fontSize': 0x1e,
					'font': _0x11cbec(0x12f),
					'color': _0x11cbec(0x217),
					'align': 'center'
				}
			}, {
				'type': _0x11cbec(0x1dc),
				'props': {
					'y': 0x39e,
					'x': 0x1f0,
					'width': 0x64,
					'var': 'huanqu',
					'valign': 'middle',
					'text': _0x11cbec(0x243),
					'height': 0x1e,
					'fontSize': 0x1e,
					'font': 'SimHei',
					'color': _0x11cbec(0x217),
					'align': _0x11cbec(0x2a8)
				}
			}, {
				'type': _0x11cbec(0x1dc),
				'props': {
					'y': 0x4b0,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'text': _0x11cbec(0xcb),
					'strokeColor': _0x11cbec(0x1cd),
					'stroke': 0x2,
					'fontSize': 0x10,
					'font': _0x11cbec(0x12f),
					'color': _0x11cbec(0x250),
					'align': 'center'
				}
			}, {
				'type': _0x11cbec(0x1dc),
				'props': {
					'y': 0x4ce,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'text': '审批文号：新广出审【2016】2609号\x20出版物号：ISBN\x20：ISBN\x20978-7-7979-1212-9',
					'strokeColor': _0x11cbec(0x1cd),
					'stroke': 0x2,
					'fontSize': 0x10,
					'font': _0x11cbec(0x12f),
					'color': _0x11cbec(0x250),
					'align': _0x11cbec(0x2a8)
				}
			}, {
				'type': 'Label',
				'props': {
					'y': 0x484,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'text': _0x11cbec(0x14a),
					'strokeColor': _0x11cbec(0x1cd),
					'stroke': 0x2,
					'leading': 0x6,
					'height': 0x16,
					'fontSize': 0x16,
					'font': 'SimHei',
					'color': _0x11cbec(0x250),
					'align': 'center'
				}
			}, {
				'type': _0x11cbec(0x137),
				'props': {
					'y': 0x4ec,
					'x': 0xa,
					'width': 0x2d0,
					'var': _0x11cbec(0x13d),
					'text': _0x11cbec(0x266),
					'strokeColor': '#021224',
					'stroke': 0x2,
					'fontSize': 0x12,
					'font': _0x11cbec(0x12f),
					'color': _0x11cbec(0x250),
					'align': _0x11cbec(0x2a8)
				}
			}, {
				'type': _0x11cbec(0x1dc),
				'props': {
					'y': 0x2d7,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'visible': ![],
					'var': _0x11cbec(0x188),
					'text': _0x11cbec(0x1d1),
					'strokeColor': _0x11cbec(0x1cd),
					'stroke': 0x2,
					'leading': 0x6,
					'height': 0x24,
					'fontSize': 0x24,
					'font': _0x11cbec(0x12f),
					'color': _0x11cbec(0x176),
					'align': _0x11cbec(0x2a8)
				}
			}, {
				'type': _0x11cbec(0x1b3),
				'props': {
					'y': -0x8c,
					'x': -0x78,
					'width': 0x3c0,
					'visible': ![],
					'var': _0x11cbec(0xc8),
					'height': 0x618
				},
				'child': [{
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': 0x0,
						'x': 0x0,
						'width': 0x3c0,
						'var': _0x11cbec(0x2c6),
						'skin': _0x11cbec(0x283),
						'sizeGrid': _0x11cbec(0x1a7),
						'height': 0x618,
						'alpha': 0.7
					}
				}, {
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': 0x122,
						'x': 0x8e,
						'skin': _0x11cbec(0x1c7),
						'mouseThrough': ![],
						'mouseEnabled': !![]
					}
				}, {
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': 0x142,
						'x': 0x2fb,
						'var': _0x11cbec(0x2b5),
						'stateNum': 0x1,
						'skin': _0x11cbec(0x1ad)
					}
				}, {
					'type': _0x11cbec(0x2a4),
					'props': {
						'y': 0x1ae,
						'x': 0xc6,
						'width': 0xb6,
						'var': _0x11cbec(0x26d),
						'vScrollBarSkin': _0x11cbec(0x283),
						'height': 0x2b7
					},
					'child': [{
						'type': _0x11cbec(0x274),
						'props': {
							'y': 0x0,
							'x': 0x0,
							'var': _0x11cbec(0x19e),
							'strokeColors': '#666699,#ffffff',
							'stateNum': 0x2,
							'skin': _0x11cbec(0x2aa),
							'selectedIndex': 0x0,
							'labelStroke': 0x2,
							'labelSize': 0x1a,
							'labelFont': _0x11cbec(0x12f),
							'labelColors': _0x11cbec(0x155),
							'direction': _0x11cbec(0x17e)
						}
					}]
				}, {
					'type': 'List',
					'props': {
						'y': 0x1ad,
						'x': 0x18e,
						'width': 0x160,
						'var': 'serverList',
						'vScrollBarSkin': _0x11cbec(0x283),
						'repeatX': 0x1,
						'height': 0x2b4
					},
					'child': [{
						'type': _0x11cbec(0xe4),
						'props': {
							'y': 0x0,
							'x': 0x0,
							'var': _0x11cbec(0x1af),
							'stateNum': 0x1,
							'skin': _0x11cbec(0x1c8),
							'renderType': _0x11cbec(0xc4)
						},
						'child': [{
							'type': _0x11cbec(0x1dc),
							'props': {
								'y': 0x13,
								'x': 0x0,
								'wordWrap': !![],
								'width': 0x160,
								'var': _0x11cbec(0x22b),
								'text': _0x11cbec(0x23a),
								'name': _0x11cbec(0x22b),
								'height': 0x16,
								'fontSize': 0x16,
								'font': _0x11cbec(0x12f),
								'color': '#564674',
								'align': _0x11cbec(0x2a8)
							}
						}, {
							'type': _0x11cbec(0x2ce),
							'props': {
								'y': 0xc,
								'x': 0x15,
								'var': _0x11cbec(0x21d),
								'skin': 'login/image_xfy_ct.png',
								'name': _0x11cbec(0x21d)
							}
						}]
					}]
				}, {
					'type': _0x11cbec(0x1dc),
					'props': {
						'y': 0x2cd,
						'x': 0x78,
						'wordWrap': !![],
						'width': 0x2d0,
						'visible': ![],
						'text': _0x11cbec(0x1d1),
						'strokeColor': '#021224',
						'stroke': 0x2,
						'leading': 0x6,
						'height': 0x24,
						'fontSize': 0x24,
						'font': 'SimHei',
						'color': '#ff3333',
						'align': _0x11cbec(0x2a8)
					}
				}, {
					'type': _0x11cbec(0x1dc),
					'props': {
						'y': 0x4b2,
						'x': 0x17e,
						'width': 0xc4,
						'text': _0x11cbec(0x1ee),
						'name': _0x11cbec(0x2b2),
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': _0x11cbec(0x12f),
						'color': _0x11cbec(0x1d4)
					}
				}]
			}, {
				'type': _0x11cbec(0x1b3),
				'props': {
					'y': 0x0,
					'x': 0x0,
					'width': 0x2d0,
					'visible': ![],
					'var': _0x11cbec(0x1f5),
					'height': 0x500
				},
				'child': [{
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': -0x8c,
						'x': -0x78,
						'width': 0x3c0,
						'var': 'noticeBG',
						'skin': _0x11cbec(0x283),
						'sizeGrid': _0x11cbec(0x1a7),
						'height': 0x618,
						'alpha': 0.7
					}
				}, {
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': 0xb6,
						'x': 0x19,
						'skin': _0x11cbec(0x132),
						'mouseThrough': ![],
						'mouseEnabled': !![]
					}
				}, {
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': 0xd5,
						'x': 0x285,
						'var': _0x11cbec(0x130),
						'stateNum': 0x1,
						'skin': 'login/btn_tongyong_13.png'
					}
				}, {
					'type': _0x11cbec(0x274),
					'props': {
						'y': 0x3d0,
						'x': 0x3c,
						'var': _0x11cbec(0x19d),
						'strokeColors': _0x11cbec(0x284),
						'stateNum': 0x2,
						'skin': _0x11cbec(0x10c),
						'labels': _0x11cbec(0x17d),
						'labelStroke': 0x2,
						'labelSize': 0x1a,
						'labelFont': _0x11cbec(0x12f),
						'labelColors': _0x11cbec(0x13e),
						'direction': _0x11cbec(0x133)
					}
				}, {
					'type': _0x11cbec(0x1dc),
					'props': {
						'y': 0xfc,
						'x': 0xf5,
						'width': 0xdc,
						'var': _0x11cbec(0x1c6),
						'text': '公告',
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': 'SimHei',
						'color': _0x11cbec(0x287),
						'bold': !![],
						'align': _0x11cbec(0x2a8)
					}
				}, {
					'type': 'Label',
					'props': {
						'y': 0x445,
						'x': 0xfe,
						'width': 0xc4,
						'text': '点击空白处退出',
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': _0x11cbec(0x12f),
						'color': '#CACACA'
					}
				}, {
					'type': _0x11cbec(0x2a4),
					'props': {
						'y': 0x143,
						'x': 0x4f,
						'width': 0x230,
						'var': _0x11cbec(0x1f1),
						'vScrollBarSkin': _0x11cbec(0x283),
						'height': 0x262
					},
					'child': [{
						'type': _0x11cbec(0x16d),
						'props': {
							'y': 0x0,
							'x': 0x0,
							'width': 0x230,
							'var': _0x11cbec(0xed),
							'innerHTML': _0x11cbec(0x297),
							'height': 0x376
						}
					}]
				}]
			}, {
				'type': _0x11cbec(0x1b3),
				'props': {
					'y': 0x0,
					'x': 0x0,
					'width': 0x2d0,
					'visible': ![],
					'var': 'nonageBox',
					'height': 0x500
				},
				'child': [{
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': -0x8c,
						'x': -0x78,
						'width': 0x3c0,
						'var': _0x11cbec(0x124),
						'skin': _0x11cbec(0x283),
						'sizeGrid': '1,1,1,1',
						'height': 0x618,
						'alpha': 0.7
					}
				}, {
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': 0xb6,
						'x': 0x16,
						'skin': _0x11cbec(0x2bf),
						'mouseThrough': ![],
						'mouseEnabled': !![]
					}
				}, {
					'type': _0x11cbec(0x2ce),
					'props': {
						'y': 0xd5,
						'x': 0x27f,
						'var': _0x11cbec(0x2b1),
						'stateNum': 0x1,
						'skin': _0x11cbec(0x1ad)
					}
				}, {
					'type': 'Label',
					'props': {
						'y': 0xfc,
						'x': 0xf5,
						'width': 0xdc,
						'var': _0x11cbec(0x198),
						'text': '适龄提示',
						'name': _0x11cbec(0x12e),
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': 'SimHei',
						'color': _0x11cbec(0x287),
						'bold': !![],
						'align': 'center'
					}
				}, {
					'type': _0x11cbec(0x1dc),
					'props': {
						'y': 0x445,
						'x': 0xfe,
						'width': 0xc4,
						'text': _0x11cbec(0x1ee),
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': _0x11cbec(0x12f),
						'color': '#CACACA'
					}
				}, {
					'type': 'HTMLDivElement',
					'props': {
						'y': 0x13e,
						'x': 0x4a,
						'width': 0x230,
						'var': _0x11cbec(0x157),
						'innerHTML': _0x11cbec(0x297),
						'height': 0x2bc
					}
				}]
			}, {
				'type': _0x11cbec(0x2ce),
				'props': {
					'y': 0x32,
					'x': 0x287,
					'var': _0x11cbec(0x143),
					'skin': _0x11cbec(0xcd)
				}
			}]
		}, _0x9a319d;
	}(_0xc0bb8c);
	_0x18c630[_0x4c8462(0x2b6)] = _0x4f40e4;
}(WeChatUI || (WeChatUI = {})));
var WeChatUI;
(function(_0x366ed1) {
	var _0x41053d = a0_0x9d38d7,
		_0x9e7e1a = function(_0x5473d9) {
			var _0x5f3cd7 = a0_0x35ce;
			__extends(_0x46c776, _0x5473d9);

			function _0x46c776() {
				var _0x1c3aaf = a0_0x35ce,
					_0x537b57 = _0x5473d9[_0x1c3aaf(0xb9)](this) || this;
				return _0x537b57['maxProgress'] = 0x9, _0x537b57[_0x1c3aaf(0x13f)](), _0x537b57[_0x1c3aaf(0x1ca)](), _0x537b57;
			}
			return _0x46c776[_0x5f3cd7(0x10f)]['init'] = function() {
				var _0x4539ab = _0x5f3cd7;
				this[_0x4539ab(0xc9)]['text'] = '游戏版本：' + gameVersion, loadView = this, this[_0x4539ab(0x273)] = 0x0, this[_0x4539ab(0xc2)] = 0x0, this[_0x4539ab(0x10b)] = 0x0, this[_0x4539ab(0xba)] = this[_0x4539ab(0x292)][_0x4539ab(0xbf)], this[_0x4539ab(0x292)][_0x4539ab(0xbf)] = this[_0x4539ab(0x151)]['width'] = 0x0, this[_0x4539ab(0x238)][_0x4539ab(0x27a)] = this[_0x4539ab(0x271)][_0x4539ab(0x27a)] = '0%', this[_0x4539ab(0xbd)]('加载主程序.....');
				var _0x4208db = wx[_0x4539ab(0x171)]({
					'name': 'wechat_main',
					'success': function(_0x27d89e) {
						var _0x2f57fc = _0x4539ab;
						console[_0x2f57fc(0x15c)](_0x2f57fc(0x156), _0x27d89e), Laya[_0x2f57fc(0xb4)][_0x2f57fc(0x22d)] = _0x2f57fc(0x1ea), enterGame(userData);
					},
					'fail': function(_0xc1bd24) {
						var _0x2edba1 = _0x4539ab;
						console['log'](_0x2edba1(0x16e), _0xc1bd24);
					}
				});
				_0x4208db[_0x4539ab(0x24d)](function(_0x548236) {
					var _0x41373d = _0x4539ab;
					console['log']('下载进度', _0x548236[_0x41373d(0x206)]), console[_0x41373d(0x15c)](_0x41373d(0x27d), _0x548236[_0x41373d(0x14b)]), console[_0x41373d(0x15c)]('预期需要下载的数据总长度', _0x548236[_0x41373d(0x14c)]);
				}), Laya[_0x4539ab(0x1b9)][_0x4539ab(0x254)](0x64, this, this[_0x4539ab(0x293)]);
			}, _0x46c776[_0x5f3cd7(0x10f)]['upProgress'] = function(_0x28a52a) {
				var _0x3a69b9 = _0x5f3cd7;
				if (this['nowProgress'] == this[_0x3a69b9(0x160)]) return;
				this['nowProgress']++, this[_0x3a69b9(0x10b)] = 0x0;
				var _0x1112d = this[_0x3a69b9(0xc2)] / this['maxProgress'];
				this['progressBar2']['width'] = _0x1112d * this[_0x3a69b9(0xba)], this[_0x3a69b9(0x271)][_0x3a69b9(0x27a)] = Math['floor'](_0x1112d * 0x64) + '%', this[_0x3a69b9(0x242)][_0x3a69b9(0x27a)] = _0x28a52a, this[_0x3a69b9(0xc2)] == this['maxProgress'] && Laya[_0x3a69b9(0x1b9)][_0x3a69b9(0xf7)](0x2710, this, this[_0x3a69b9(0x111)]);
			}, _0x46c776[_0x5f3cd7(0x10f)]['upProgress2'] = function() {
				var _0x594987 = _0x5f3cd7;
				this[_0x594987(0x10b)] < 0x63 && (this[_0x594987(0x10b)]++, this['progressBar1']['width'] = this[_0x594987(0x10b)] / 0x64 * this[_0x594987(0xba)], this[_0x594987(0x238)]['text'] = this[_0x594987(0x10b)] + '%');
			}, _0x46c776[_0x5f3cd7(0x10f)][_0x5f3cd7(0x111)] = function() {
				var _0x2e57b0 = _0x5f3cd7;
				this[_0x2e57b0(0xb6)](), MainResetStage();
			}, _0x46c776[_0x5f3cd7(0x10f)][_0x5f3cd7(0x1ca)] = function() {}, _0x46c776[_0x5f3cd7(0x10f)][_0x5f3cd7(0xb6)] = function() {
				var _0x43a831 = _0x5f3cd7;
				Laya['timer']['clearAll'](this), loadView = null, _0x5473d9[_0x43a831(0x10f)][_0x43a831(0xb6)][_0x43a831(0xb9)](this, !![]);
			}, _0x46c776;
		}(_0x366ed1[_0x41053d(0xe3)]);
	_0x366ed1['Loading'] = _0x9e7e1a;
}(WeChatUI || (WeChatUI = {})));
var pack = a0_0x9d38d7(0x21f),
	cdn = a0_0x9d38d7(0xd6),
	tsCdn = a0_0x9d38d7(0xd6),
	devCdn = a0_0x9d38d7(0xd6),
	WeChatUI;
(function(_0x238501) {
	var _0x5df64d = a0_0x9d38d7,
		_0x178a53 = Laya[_0x5df64d(0x17c)],
		_0x4c62dd = function(_0x1f5ff5) {
			var _0x26d4c0 = _0x5df64d;
			__extends(_0x7ebf2e, _0x1f5ff5);

			function _0x7ebf2e() {
				var _0x4d871f = a0_0x35ce,
					_0x25eb6d = _0x1f5ff5['call'](this) || this;
				return _0x25eb6d[_0x4d871f(0x11e)] = 0x3, _0x25eb6d[_0x4d871f(0xe0)] = 0x3, _0x25eb6d[_0x4d871f(0x13f)](), _0x25eb6d[_0x4d871f(0x1ca)](), _0x25eb6d;
			}
			return _0x7ebf2e[_0x26d4c0(0x10f)]['init'] = function() {
				var _0x2cde36 = _0x26d4c0,
					_0x51ee8a = this;
				this['sdkLoginNumber'] = 0x3, this[_0x2cde36(0xe0)] = 0x3, this['prompt'][_0x2cde36(0x13a)] = ![], this[_0x2cde36(0x273)] = 0x0, this[_0x2cde36(0x13d)][_0x2cde36(0x27a)] = _0x2cde36(0x266) + gameVersion, QCSDK[_0x2cde36(0x13f)]({
					'game_ver': gameVersion
				}, function(_0x5e42c3) {
					var _0x211fde = _0x2cde36;
					_0x5e42c3[_0x211fde(0x2a5)] == 0x1 ? cdn = tsCdn : cdn = devCdn, console[_0x211fde(0x15c)](_0x211fde(0x231)), QCSDK[_0x211fde(0x295)](_0x51ee8a[_0x211fde(0x128)][_0x211fde(0x286)](_0x51ee8a));
				}), this['serverPanel'][_0x2cde36(0x248)]['visible'] = ![], this[_0x2cde36(0x1f1)]['vScrollBar'][_0x2cde36(0x13a)] = ![];
				var _0x65b321 = this[_0x2cde36(0xd5)];
				_0x65b321[_0x2cde36(0x2d3)][_0x2cde36(0x13a)] = ![], this['serverGroup']['selectHandler'] = Laya[_0x2cde36(0x139)][_0x2cde36(0x237)](this, this[_0x2cde36(0x2a3)], null, ![]), this['serverList'][_0x2cde36(0x246)] = Laya[_0x2cde36(0x139)][_0x2cde36(0x237)](this, this[_0x2cde36(0x1c9)], null, ![]), this[_0x2cde36(0xd5)][_0x2cde36(0x27b)] = Laya[_0x2cde36(0x139)]['create'](this, this[_0x2cde36(0xf1)], null, ![]), this[_0x2cde36(0xd5)][_0x2cde36(0x268)] = !![], this['noticeContent'][_0x2cde36(0x158)] = this[_0x2cde36(0x157)][_0x2cde36(0x158)] = _0x2cde36(0x287), this[_0x2cde36(0xed)][_0x2cde36(0xaf)]['fontSize'] = this[_0x2cde36(0x157)]['style'][_0x2cde36(0x2be)] = 0x16, this[_0x2cde36(0xed)][_0x2cde36(0xaf)][_0x2cde36(0xd8)] = this[_0x2cde36(0x157)][_0x2cde36(0xaf)][_0x2cde36(0xd8)] = _0x2cde36(0x12f), this[_0x2cde36(0xed)][_0x2cde36(0xaf)]['lineHeight'] = this[_0x2cde36(0x157)][_0x2cde36(0xaf)][_0x2cde36(0x23c)] = 0x1a, this[_0x2cde36(0x157)][_0x2cde36(0x270)] = NONAGE_TEXT, this[_0x2cde36(0x198)][_0x2cde36(0x27a)] = _0x2cde36(0x115), this[_0x2cde36(0x19d)][_0x2cde36(0x27b)] = Laya[_0x2cde36(0x139)][_0x2cde36(0x237)](this, this[_0x2cde36(0x269)], null, ![]);
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x128)] = function(_0x18456d, _0x39eed2) {
				var _0x2d6733 = _0x26d4c0;
				console[_0x2d6733(0x15c)](_0x2d6733(0xc7) + _0x18456d);
				if (_0x18456d == 0x0) {
					var _0x13fd01 = {};
					_0x13fd01['partner_id'] = 0x4, _0x13fd01[_0x2d6733(0x267)] = _0x2d6733(0x216), _0x13fd01[_0x2d6733(0x1bd)] = _0x2d6733(0x131), _0x13fd01[_0x2d6733(0xfd)] = _0x39eed2[_0x2d6733(0x10e)], _0x13fd01[_0x2d6733(0xfa)] = _0x39eed2['token'];
					var _0x43d1f6 = encodeURIComponent(JSON[_0x2d6733(0x232)](_0x13fd01)),
						_0x43cc7a = new Laya[(_0x2d6733(0x1e4))]();
					_0x43cc7a['send'](_0x238501[_0x2d6733(0x100)][_0x2d6733(0x138)] + _0x2d6733(0x218) + pack + '/' + _0x43d1f6, null, 'get'), _0x43cc7a[_0x2d6733(0xf7)](Laya[_0x2d6733(0x17c)][_0x2d6733(0x1a5)], this, this[_0x2d6733(0x17b)][_0x2d6733(0x286)](this));
				} else this[_0x2d6733(0x11e)]--, this[_0x2d6733(0x11e)] > 0x0 ? QCSDK[_0x2d6733(0x295)](this[_0x2d6733(0x128)][_0x2d6733(0x286)](this)) : (this['prompt']['text'] = _0x2d6733(0x122) + _0x18456d, this['prompt'][_0x2d6733(0x13a)] = !![]);
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x17b)] = function(_0x53970c) {
				var _0x6f8d6e = _0x26d4c0;
				_0x53970c = JSON[_0x6f8d6e(0x13c)](_0x53970c);
				if (!_0x53970c) {
					this[_0x6f8d6e(0xe0)]--;
					this[_0x6f8d6e(0xe0)] > 0x0 ? QCSDK['login'](this[_0x6f8d6e(0x128)][_0x6f8d6e(0x286)](this)) : (this[_0x6f8d6e(0x188)][_0x6f8d6e(0x27a)] = _0x6f8d6e(0x2c3), this[_0x6f8d6e(0x188)][_0x6f8d6e(0x13a)] = !![]);
					return;
				}
				if (_0x53970c[_0x6f8d6e(0x146)] === 0xc8) {
					var _0x2a3899 = new _0x238501[(_0x6f8d6e(0xe5))](),
						_0x53970c = _0x53970c[_0x6f8d6e(0x29d)],
						_0x546e4b = _0x53970c['s'];
					_0x2a3899[_0x6f8d6e(0x2a9)] = _0x53970c[_0x6f8d6e(0x25a)][_0x6f8d6e(0xca)], _0x2a3899['uid'] = _0x53970c['user'][_0x6f8d6e(0xca)], _0x2a3899[_0x6f8d6e(0x15b)] = _0x53970c[_0x6f8d6e(0x15b)], _0x2a3899[_0x6f8d6e(0x24e)] = _0x53970c[_0x6f8d6e(0x24e)], _0x2a3899['mac'] = '';
					!_0x53970c[_0x6f8d6e(0x1bb)] || _0x53970c[_0x6f8d6e(0x1bb)] == '' ? _0x2a3899[_0x6f8d6e(0x1bb)] = cdn : _0x2a3899[_0x6f8d6e(0x1bb)] = _0x53970c['cdn'];
					_0x2a3899[_0x6f8d6e(0x29f)] = 0x0, _0x2a3899[_0x6f8d6e(0x117)] = _0x53970c[_0x6f8d6e(0x117)], _0x2a3899[_0x6f8d6e(0x1ed)] = _0x53970c[_0x6f8d6e(0x1ed)];
					var _0x3a5745 = {
						'server_id': _0x546e4b['server_id'],
						'name': _0x546e4b[_0x6f8d6e(0x11f)],
						'server_num': parseInt(_0x546e4b[_0x6f8d6e(0x209)]),
						'channel_num': parseInt(_0x546e4b[_0x6f8d6e(0xe7)]),
						'server_addr': _0x546e4b['server_addr'],
						'server_port': parseInt(_0x546e4b[_0x6f8d6e(0x168)]),
						'status': parseInt(_0x546e4b['status']),
						'tick': parseInt(_0x546e4b[_0x6f8d6e(0x140)]),
						'sign': _0x546e4b[_0x6f8d6e(0x1ed)],
						'package': parseInt(_0x53970c['package']),
						'cdn': ''
					};
					_0x2a3899[_0x6f8d6e(0x174)] = _0x3a5745, userData = _0x2a3899, console[_0x6f8d6e(0x15c)]('kk', userData), userData['newregister'] == 0x1 ? this[_0x6f8d6e(0x295)]() : (this[_0x6f8d6e(0x24a)](), this[_0x6f8d6e(0x1a8)][_0x6f8d6e(0x13a)] = this[_0x6f8d6e(0x2c5)][_0x6f8d6e(0x13a)] = this[_0x6f8d6e(0xc5)]['visible'] = this[_0x6f8d6e(0x2a2)][_0x6f8d6e(0x13a)] = this['notice'][_0x6f8d6e(0x13a)] = this[_0x6f8d6e(0x143)]['visible'] = this[_0x6f8d6e(0x17f)][_0x6f8d6e(0x13a)] = !![], this[_0x6f8d6e(0x2a7)]());
				} else {
					this[_0x6f8d6e(0xe0)]--;
					this[_0x6f8d6e(0xe0)] > 0x0 ? QCSDK['login'](this[_0x6f8d6e(0x128)][_0x6f8d6e(0x286)](this)) : (this['prompt']['text'] = _0x6f8d6e(0x1be) + _0x53970c[_0x6f8d6e(0x146)], this[_0x6f8d6e(0x188)][_0x6f8d6e(0x13a)] = !![]);
					return;
				}
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x1ca)] = function() {
				var _0x4c1e20 = _0x26d4c0;
				this[_0x4c1e20(0x2c5)]['on'](_0x178a53['CLICK'], this, this['openDialog'], [0x0]), this[_0x4c1e20(0x2b5)]['on'](_0x178a53[_0x4c1e20(0x110)], this, this[_0x4c1e20(0x2a0)], [0x0]), this[_0x4c1e20(0x2c6)]['on'](_0x178a53[_0x4c1e20(0x110)], this, this['closeDialog'], [0x0]), this['nonage']['on'](_0x178a53[_0x4c1e20(0x110)], this, this[_0x4c1e20(0x187)], [0x1]), this[_0x4c1e20(0x2b1)]['on'](_0x178a53[_0x4c1e20(0x110)], this, this[_0x4c1e20(0x2a0)], [0x1]), this[_0x4c1e20(0x124)]['on'](_0x178a53[_0x4c1e20(0x110)], this, this[_0x4c1e20(0x2a0)], [0x1]), this['notice']['on'](_0x178a53[_0x4c1e20(0x110)], this, this['openDialog'], [0x2]), this[_0x4c1e20(0x130)]['on'](_0x178a53['CLICK'], this, this['closeDialog'], [0x2]), this['noticeBG']['on'](_0x178a53['CLICK'], this, this[_0x4c1e20(0x2a0)], [0x2]), this[_0x4c1e20(0x17f)]['on'](_0x178a53[_0x4c1e20(0x110)], this, this[_0x4c1e20(0x295)]);
			}, _0x7ebf2e[_0x26d4c0(0x10f)]['openDialog'] = function(_0x4868b2) {
				var _0x1c6c1f = _0x26d4c0;
				if (_0x4868b2 == 0x0) this[_0x1c6c1f(0x26d)][_0x1c6c1f(0x13a)] = ![], this[_0x1c6c1f(0xd5)][_0x1c6c1f(0x13a)] = ![], this[_0x1c6c1f(0xc8)][_0x1c6c1f(0x13a)] = !![], this[_0x1c6c1f(0x13b)]();
				else {
					if (_0x4868b2 == 0x1) this[_0x1c6c1f(0x1f6)][_0x1c6c1f(0x13a)] = !![];
					else _0x4868b2 == 0x2 && this[_0x1c6c1f(0x19a)](0x0);
				}
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x2a0)] = function(_0xc5032f) {
				var _0x487896 = _0x26d4c0;
				if (_0xc5032f == 0x0) this[_0x487896(0xc8)]['visible'] = ![];
				else {
					if (_0xc5032f == 0x1) this[_0x487896(0x1f6)][_0x487896(0x13a)] = ![];
					else _0xc5032f == 0x2 && (this[_0x487896(0x1f5)][_0x487896(0x13a)] = ![]);
				}
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x295)] = function() {
				var _0x301086 = _0x26d4c0,
					_0x52dab7 = new _0x238501[(_0x301086(0x196))]();
				Laya[_0x301086(0xf3)]['addChild'](_0x52dab7), this[_0x301086(0xb6)]();
			}, _0x7ebf2e[_0x26d4c0(0x10f)]['choose'] = function(_0x217987) {
				var _0x552a61 = _0x26d4c0;
				this[_0x552a61(0xd5)][_0x552a61(0xf8)] = this[_0x552a61(0x2b3)][_0x217987];
			}, _0x7ebf2e['prototype'][_0x26d4c0(0xf1)] = function(_0x2dc48f) {
				var _0x57ba8b = _0x26d4c0;
				userData[_0x57ba8b(0x174)] = this[_0x57ba8b(0x2b3)][this['serverGroup']['selectedIndex']][_0x2dc48f], this[_0x57ba8b(0x24a)](), this[_0x57ba8b(0xc8)]['visible'] = ![];
			}, _0x7ebf2e['prototype'][_0x26d4c0(0x1c9)] = function(_0x2aa0a9, _0x31c419) {
				var _0x19707a = _0x26d4c0,
					_0x38d640 = _0x2aa0a9['getChildByName'](_0x19707a(0x22b)),
					_0x345f17 = _0x2aa0a9[_0x19707a(0x252)]('itemServerState'),
					_0x15131d = this[_0x19707a(0x2b3)][this[_0x19707a(0x19e)][_0x19707a(0x257)]][_0x31c419];
				_0x38d640[_0x19707a(0x27a)] = _0x15131d[_0x19707a(0x11f)];
				if (_0x15131d[_0x19707a(0x28f)] === 0x2) _0x345f17[_0x19707a(0x2c2)] = 'login/image_xfy_ct.png';
				else {
					if (_0x15131d[_0x19707a(0x28f)] === 0x1) _0x345f17[_0x19707a(0x2c2)] = 'login/image_xfy_fm.png';
					else _0x15131d[_0x19707a(0x28f)] === -0x1 && (_0x345f17['skin'] = _0x19707a(0x14d));
				}
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x13b)] = function() {
				var _0xf0ab36 = _0x26d4c0,
					_0x4bac1d = base64_encode(_0xf0ab36(0x230) + userData['channel'] + '/' + userData[_0xf0ab36(0x24e)] + '/' + userData[_0xf0ab36(0x2a9)] + '/' + userData[_0xf0ab36(0x29f)] + '/' + userData[_0xf0ab36(0x1ed)]),
					_0x35f455 = new Laya[(_0xf0ab36(0x1e4))]();
				_0x35f455['send'](_0x238501[_0xf0ab36(0x100)]['backstage_url'] + _0x4bac1d, null, _0xf0ab36(0xff)), _0x35f455[_0xf0ab36(0xf7)](Laya[_0xf0ab36(0x17c)][_0xf0ab36(0x1a5)], this, this[_0xf0ab36(0x280)]);
			}, _0x7ebf2e['prototype']['serverListBack'] = function(_0x552341) {
				var _0x4065f0 = _0x26d4c0;
				_0x552341 = JSON[_0x4065f0(0x13c)](_0x552341);
				if (!_0x552341[_0x4065f0(0x146)]) return;
				for (var _0x57b505 = 0x0; _0x57b505 < _0x552341['z'][_0x4065f0(0x184)]; _0x57b505++) {
					_0x57b505 != 0x0 ? this['serverGroupArr'] = this[_0x4065f0(0xdd)] + ',' + _0x552341['z'][_0x57b505] : this['serverGroupArr'] = '' + _0x552341['z'][_0x57b505];
				}
				this[_0x4065f0(0x2b3)] = _0x552341['s'], this[_0x4065f0(0x19e)][_0x4065f0(0x236)] = this[_0x4065f0(0xdd)], this['serverGroup'][_0x4065f0(0x257)] = 0x0, this[_0x4065f0(0xd5)][_0x4065f0(0xf8)] = this['serverArr'][0x0], this[_0x4065f0(0x26d)][_0x4065f0(0x13a)] = !![], this[_0x4065f0(0xd5)][_0x4065f0(0x13a)] = !![];
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x24a)] = function() {
				var _0x5888b4 = _0x26d4c0;
				this[_0x5888b4(0x1a8)][_0x5888b4(0x27a)] = userData[_0x5888b4(0x174)]['name'];
				if (userData[_0x5888b4(0x174)][_0x5888b4(0x28f)] === 0x2) this['stateImg']['skin'] = _0x5888b4(0x2d1);
				else {
					if (userData[_0x5888b4(0x174)][_0x5888b4(0x28f)] === 0x1) this['stateImg'][_0x5888b4(0x2c2)] = 'login/image_xfy_fm.png';
					else userData['selected_server'][_0x5888b4(0x28f)] === -0x1 && (this[_0x5888b4(0xc5)][_0x5888b4(0x2c2)] = 'login/image_xfy_wh.png');
				}
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x2a7)] = function() {
				var _0x1c8821 = _0x26d4c0,
					_0x2f2547 = {
						'groupId': GROUP_ID
					},
					_0x50f59e = new Laya[(_0x1c8821(0x1e4))]();
				_0x50f59e[_0x1c8821(0x255)](_0x238501[_0x1c8821(0x100)][_0x1c8821(0x224)], _0x2f2547, _0x1c8821(0x213)), _0x50f59e[_0x1c8821(0xf7)](Laya['Event']['COMPLETE'], this, this[_0x1c8821(0xc1)]);
			}, _0x7ebf2e['prototype'][_0x26d4c0(0xc1)] = function(_0x3b44c1) {
				var _0x47a3a = _0x26d4c0;
				_0x3b44c1 = JSON[_0x47a3a(0x13c)](_0x3b44c1);
				if (_0x3b44c1[_0x47a3a(0x21e)] != 0x0) {
					this[_0x47a3a(0xd1)] = [{
						'title': '公告',
						'contents': '暂无公告',
						'version': 0x0
					}];
					return;
				}
				this[_0x47a3a(0xd1)] = _0x3b44c1[_0x47a3a(0x29d)];
				if (this[_0x47a3a(0xd1)][_0x47a3a(0x184)] == 0x0) {
					this['noticeData'] = [{
						'title': '公告',
						'contents': _0x47a3a(0xfc),
						'version': 0x0
					}];
					return;
				}
				var _0x16b0c4 = -0x1;
				for (var _0x352c50 = 0x0; _0x352c50 < this['noticeData'][_0x47a3a(0x184)]; _0x352c50++) {
					if (_0x352c50 == 0x3) break;
					_0x352c50 == 0x0 ? this[_0x47a3a(0xd0)] = this[_0x47a3a(0xd1)][_0x352c50][_0x47a3a(0x278)] : this[_0x47a3a(0xd0)] = this[_0x47a3a(0xd0)] + ',' + this[_0x47a3a(0xd1)][_0x352c50][_0x47a3a(0x278)];
					var _0x234a9c = Number(localStorage[_0x47a3a(0xe2)](_0x47a3a(0x19f) + _0x352c50));
					_0x234a9c == undefined && (_0x234a9c = -0x1), _0x16b0c4 == -0x1 && _0x234a9c < this[_0x47a3a(0xd1)][_0x352c50][_0x47a3a(0x277)] && (_0x16b0c4 = _0x352c50);
				}
				userData[_0x47a3a(0x117)] != 0x1 && _0x16b0c4 != -0x1 && (this[_0x47a3a(0x19a)](_0x16b0c4), localStorage[_0x47a3a(0x1f4)](_0x47a3a(0x19f) + _0x16b0c4, this[_0x47a3a(0xd1)][_0x16b0c4][_0x47a3a(0x277)] + ''));
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x269)] = function(_0x34316e) {
				var _0x4da579 = _0x26d4c0;
				this[_0x4da579(0xed)][_0x4da579(0x270)] = this[_0x4da579(0x20a)](this[_0x4da579(0xd1)][_0x34316e][_0x4da579(0x249)]), this[_0x4da579(0x1c6)][_0x4da579(0x27a)] = this[_0x4da579(0xd1)][_0x34316e][_0x4da579(0x278)];
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x19a)] = function(_0x59c43b) {
				var _0x28250f = _0x26d4c0;
				this[_0x28250f(0x1f5)][_0x28250f(0x13a)] = !![], this[_0x28250f(0xd1)][_0x28250f(0x184)] < 0x2 ? this[_0x28250f(0x19d)][_0x28250f(0x13a)] = ![] : (this[_0x28250f(0x19d)]['labels'] = this[_0x28250f(0xd0)], this[_0x28250f(0x19d)]['visible'] = !![], this[_0x28250f(0x19d)]['selectedIndex'] = _0x59c43b, this['noticeData']['length'] == 0x2 ? this['noticeTab'][_0x28250f(0x2c2)] = _0x28250f(0x10c) : this[_0x28250f(0x19d)]['skin'] = _0x28250f(0x1c4)), this[_0x28250f(0xed)][_0x28250f(0x270)] = this[_0x28250f(0x20a)](this['noticeData'][_0x59c43b][_0x28250f(0x249)]), this[_0x28250f(0x1c6)]['text'] = this['noticeData'][_0x59c43b]['title'];
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0x20a)] = function(_0x3faa83) {
				var _0x22b628 = _0x26d4c0,
					_0x2ad518 = '';
				if (_0x3faa83['length'] == 0x0) return '';
				return _0x2ad518 = _0x3faa83[_0x22b628(0x18b)](/&amp;/g, '&'), _0x2ad518 = _0x2ad518[_0x22b628(0x18b)](/&lt;/g, '<'), _0x2ad518 = _0x2ad518[_0x22b628(0x18b)](/&gt;/g, '>'), _0x2ad518 = _0x2ad518[_0x22b628(0x18b)](/&nbsp;/g, '\x20'), _0x2ad518 = _0x2ad518[_0x22b628(0x18b)](/&#39;/g, '\x27'), _0x2ad518 = _0x2ad518[_0x22b628(0x18b)](/&quot;/g, '\x22'), _0x2ad518 = _0x2ad518[_0x22b628(0x18b)](/&mdash;/g, '——'), _0x2ad518;
			}, _0x7ebf2e[_0x26d4c0(0x10f)][_0x26d4c0(0xb6)] = function() {
				var _0x30efc2 = _0x26d4c0;
				this[_0x30efc2(0x2b5)]['off'](_0x178a53[_0x30efc2(0x110)], this, this[_0x30efc2(0x2a0)]), this[_0x30efc2(0x2c6)][_0x30efc2(0x1b7)](_0x178a53[_0x30efc2(0x110)], this, this['closeDialog']), this[_0x30efc2(0x2b1)][_0x30efc2(0x1b7)](_0x178a53[_0x30efc2(0x110)], this, this[_0x30efc2(0x2a0)]), this[_0x30efc2(0x124)][_0x30efc2(0x1b7)](_0x178a53[_0x30efc2(0x110)], this, this['closeDialog']), this[_0x30efc2(0x130)][_0x30efc2(0x1b7)](_0x178a53[_0x30efc2(0x110)], this, this['closeDialog']), this[_0x30efc2(0x167)][_0x30efc2(0x1b7)](_0x178a53[_0x30efc2(0x110)], this, this['closeDialog']), this[_0x30efc2(0x2c5)]['off'](_0x178a53[_0x30efc2(0x110)], this, this[_0x30efc2(0x187)]), this[_0x30efc2(0x143)][_0x30efc2(0x1b7)](_0x178a53['CLICK'], this, this[_0x30efc2(0x187)]), this[_0x30efc2(0x23e)][_0x30efc2(0x1b7)](_0x178a53[_0x30efc2(0x110)], this, this[_0x30efc2(0x187)]), this['loginBtn'][_0x30efc2(0x1b7)](_0x178a53[_0x30efc2(0x110)], this, this[_0x30efc2(0x295)]), this[_0x30efc2(0x19e)][_0x30efc2(0x27b)]['clear'](), this[_0x30efc2(0x19e)][_0x30efc2(0x27b)] = null, this[_0x30efc2(0xd5)]['renderHandler'][_0x30efc2(0x119)](), this[_0x30efc2(0xd5)][_0x30efc2(0x246)] = null, this['serverList']['selectHandler'][_0x30efc2(0x119)](), this['serverList'][_0x30efc2(0x27b)] = null, this[_0x30efc2(0x19d)][_0x30efc2(0x27b)]['clear'](), this[_0x30efc2(0x19d)]['selectHandler'] = null, _0x1f5ff5[_0x30efc2(0x10f)][_0x30efc2(0xb6)][_0x30efc2(0xb9)](this, !![]);
			}, _0x7ebf2e;
		}(_0x238501['LoginViewUI']);
	_0x238501[_0x5df64d(0x121)] = _0x4c62dd;

	function _0x860803() {
		var _0x44f832 = _0x5df64d;
		Laya['loader'][_0x44f832(0xfe)](_0x44f832(0xda), Laya[_0x44f832(0x139)][_0x44f832(0x237)](null, _0x300c52));
	}

	function _0x300c52() {
		var _0x408099 = _0x5df64d,
			_0x4b1c07 = new _0x4c62dd();
		Laya['stage'][_0x408099(0x1ff)](_0x4b1c07);
	}
	Laya[_0x5df64d(0x192)][_0x5df64d(0x13f)](), Laya[_0x5df64d(0x13f)](0x2d0, 0x500, Laya[_0x5df64d(0x1cc)]), Laya[_0x5df64d(0xf3)]['scaleMode'] = laya[_0x5df64d(0x28e)][_0x5df64d(0x235)][_0x5df64d(0x145)], Laya['stage']['screenMode'] = Laya[_0x5df64d(0x235)]['SCREEN_NONE'], Laya['stage'][_0x5df64d(0xec)] = Laya['Stage'][_0x5df64d(0x164)], Laya[_0x5df64d(0xf3)]['alignV'] = Laya[_0x5df64d(0x235)][_0x5df64d(0x2bc)], _0x860803();
}(WeChatUI || (WeChatUI = {})));
var WeChatUI;

function a0_0x422f() {
	var _0x2d50dc = ['notice_url', '[SDK]授权登录', 'blocksPerLine', 'random', 'height', '游戏币', 'extended', 'itemServerName', 'componentIds', 'basePath', 'showModal', 'role_id', 'game/allServer/', 'kkk\x20sdk初始化完成\x20\x20调起sdk登录', 'stringify', 'charAt', 'encryptedData', 'Stage', 'labels', 'create', 'proLabel1', 'sdk_token', '已有角色', 'uiView', 'lineHeight', '1、本游戏是一款休闲放置的仙侠游戏，适用于年满16周岁及以上的用户，建议未成年人在家长的监护下使用该游戏产品。\x0a<br/><br/>2、本游戏基于侠客修仙故事为背景，人物和场景丰富多样，画面风格靓丽，有绚丽的特效来烘托游戏氛围；游戏主要玩法为休闲放置关机，\x0a也需要玩家参与多人对抗，玩法具有一定的策性与趣味性：游戏中有基于玩家与陌生人聊天的社交系统，社交系统的管理遵循相关法律法规。\x0a<br/><br/>3、本游戏中有用户实名认证系统，认证为未成年人的用户将接受以下管理：游戏中部分玩法和道具需要付费。未满8周岁的用户不能付费；\x0a8周岁以上未满16周岁的未成年人用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元；人民币16周岁以上的未成年人用户，\x0a单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。未成年人用户，仅可在周五、周六、周日或法定节假日20:00~21:00期间可以登录游戏，时间段外不允许登录\x0a<br/><br/>4、本游戏以玄幻修仙为主题，在多人协作的竞技有助于锻炼玩家的独立思考能力、空间感知能力和逻辑思维能力；酷炫的角色技能与特效，\x0a将带给用户良好的视觉享受与游戏代入感；基于团队竞技的协作玩法可以提升玩家的沟通能力、团队协作能力和大局观，鼓励玩家互帮互助、\x0a维持良好的社群关系。', 'notice', 'huffmanTableAC', 'scene', 'numComponents', 'proLabel', '换区>', 'gameGoPay', '支付失败', 'renderHandler', 'login/btn_xfy_xq.png', 'vScrollBar', 'contents', 'upSelectedServer', 'decodeScan\x20-\x20unexpected\x20MCU\x20data,\x20current\x20marker\x20is:\x20', 'ios_pay_type', 'onProgressUpdate', 'package', 'plat_username', '#FFFFFF', 'huffmanTableDC', 'getChildByName', 'mac', 'loop', 'send', '抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。', 'selectedIndex', '正常播放结束，需要下发奖励', 'plat_wx_query', 'user', 'getGameConfig', 'system', 'ServerInfo', 'openCustomerServiceConversation', '_decodeTransform', '[SDK]获得授权设置：已授权', 'login/btn_xfy_dlyx.png', '#8cff9f', '用户未登录，支付失败！', 'config', 'maxH', '游戏版本：', 'game_pkg', 'selectEnable', 'chooseNotice', '出版单位：北京畅元国讯科技有限公司，出版物号：ISBN\x20978-7-498-03918', 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png', 'ceil', 'serverPanel', 'state', '[SDK]获取游戏配置成功', 'innerHTML', 'proLabel2', '[SDK]发送订阅消息', 'centerY', 'Tab', 'MainResourcePool', '[SDK]查看文本是否有违规内容结果返回:', 'version', 'title', 'quantizationTable', 'text', 'selectHandler', 'IS_WECHAT', '已经下载的数据长度', 'do_login', 'txt2', 'serverListBack', '__proto__', 'then', 'login/image_common_zz.png', '#9e4c65,#ffffff,#fffff,#9e4c65', 'catch', 'bind', '#666699', 'screenHeight', 'adobe', 'maxV', 'productid', '/game/min/?ac=checkGameVersion', 'error', 'display', 'status', '[SDK]session过期需要重新登录', '支付失败:', 'progressBar1', 'upProgress2', '91pKdOLv', 'login', '411867ovMjvy', 'htmlText', 'html', '进入客服会话，点击右下角小卡片获取微端下载链接', '个游戏币未消费，本次支付将扣除', 'password', 'undefined', 'data', '[SDK]上报数据：', 'rvtype', 'closeDialog', 'offClose', 'huanqu', 'choose', 'Panel', 'develop', '262456zUpAcg', 'getNotice', 'center', 'account', 'login/serverGroup.png', 'price', 'game_id', 'videoAdvert', '__extends', '您还有', 'cpbill', 'closeNonage', 'ExitPromptText', 'serverArr', 'env', 'closeSever', 'LoginViewUI', 'statusCode', 'unexpected\x20marker\x20', '[SDK]查看文本是否有违规内容', '_colorTransform', 'invalid', 'ALIGN_MIDDLE', 'object', 'fontSize', 'login/xfy_gxbg.png', 'hasOwnProperty', '请求平台服务器失败！#3', 'skin', '游戏服登陆失败，返回数据为空', 'openService', 'serverBtn', 'serverBG', 'windowHeight', 'login/progress_jz_jdt_1.png', 'requestPayment', '_convertYcckToCmyk', 'openid', 'roleid', 'application/x-www-form-urlencoded', 'Image', 'adClose', 'subarray', 'login/image_xfy_ct.png', '/partner/auth', '_scrollBar', 'plat_uid', 'windowWidth', 'jfif', '渡劫成功晋升仙君', 'getLaunchOptionsSync', 'DNLMarkerError', 'style', 'getSystemInfoSync', 'ext', 'getSetting', 'showShareMenu', 'URL', 'currencyType', 'destroy', 'unknown\x20marker\x20', 'marker', 'call', 'maxWidth', 'dnlScanLines', '[SDK]获得授权设置：失败', 'upProgress', '3352FGfJak', 'width', 'offset', 'noticeBack', 'nowProgress', '2848152xeWaHy', 'render', 'stateImg', '正在登录游戏', 'kkk\x20sdk\x20登录返回：', 'serverBox', 'verTxt', 'openId', '著作权人：镇江微端网络科技有限公司\x20出版单位：上海都玩网络科技有限公司', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', 'login/img_slts_16.png', 'WIFI', 'msg', 'noticTitles', 'noticeData', 'message', 'login/loading_bj.jpg', 'checkMsg', 'serverList', 'https://h5test.s1.l2i.cc/wx', 'dev_backstage', 'fontFamily', '/partner/pay/', 'res/atlas/login.atlas', 'Found\x20DNL\x20marker\x20(0xFFDC)\x20while\x20parsing\x20scan\x20data', 'createUserInfoButton', 'serverGroupArr', '微端-不用点这个卡片-', '领取了88888元宝礼包', 'gameLoginNumber', '渡劫成功晋升玄仙', 'getItem', 'LoadingViewUI', 'Button', 'UserData', 'logEnterGame', 'channel_num', 'startPay', '不用点这个卡片', 'adFail', 'JpegError', 'alignH', 'noticeContent', '16732727NFHCGq', '请求平台服务器失败！#1', 'order_data', 'chooseServer', 'missing\x20required\x20Quantization\x20Table.', 'stage', 'getStorageSync', 'MainRun', 'nick_name', 'once', 'array', '/?method=user.gameConfig', 'token', 'getPublicData', '暂无公告', 'user_id', 'load', 'get', 'Config', '[SDK]调起支付，CP传值：', 'service_qq', 'closeHandler', '激励视频\x20广告显示成功', 'scaleX', '[SDK]获取游戏配置', '播放退出，不下发奖励', '用户取消支付', 'getConfig', 'SOI\x20not\x20found', 'nowProgress2', 'login/noticeBtn2.png', '/partner/h5Log/?type=', 'userid', 'prototype', 'CLICK', 'open', 'https://api.s1.l2i.cc:82/Notice/noticeList', 'requestMidasPayment', 'pay_switch', '适龄提示', 'login/bth_gonggao.png', 'newregister', 'dev_notice', 'clear', 'isEnded', 'zoneId', 'orderId', 'Only\x20single\x20frame\x20JPEGs\x20supported', 'sdkLoginNumber', 'name', 'logCreateRole', 'Login', 'SDK\x20登陆失败，CODE:', '[SDK]获取用户转端信息成功', 'nonageBG', '0000', 'toString', 'json', 'sdkLoginBack', '首次加载耗时较长，再等等就好了哦~', 'user_name', 'number', '_convertYccToRgb', 'https://api.s1.l2i.cc/game.php/', 'titleLittle', 'SimHei', 'closeNotice', 'minGame', 'login/image_xfy_gg.png', 'horizontal', 'MainResetStage', '正在进入场景......', 'regComponent', 'Text', 'backstage_url', 'Handler', 'visible', 'req_server_list', 'parse', 'verText', '#ffffff,#9e4c65,#9e4c65,#fffff', 'init', 'tick', 'plat_ad_code', 'windows', 'nonage', 'new[SDK]CP调用init接口', 'SCALE_FIXED_AUTO', 'errCode', 'plat_sdk_token', 'is_android_pay', 'charCodeAt', '适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。', 'totalBytesWritten', 'totalBytesExpectedToWrite', 'login/image_xfy_wh.png', 'serverid', 'Unsupported\x20color\x20mode', 'minPay', 'progressBar2', '#581a1a', 'setPrototypeOf', 'role_name', '#ffffff,#996633', '分包加载成功\x20\x20\x20', 'nonageContent', 'color', 'checkSession', '10/100%', 'channel', 'log', 'game_ver', 'Found\x20EOI\x20marker\x20(0xFFD9)\x20while\x20parsing\x20scan\x20data', '2xeympJ', 'maxProgress', 'buyQuantity', 'proDiv', 'mcusPerLine', 'ALIGN_CENTER', 'invalid\x20ACn\x20encoding', 'weixin_advert_id', 'noticeBG', 'server_port', 'split', 'screenWidth', 'createView', 'decodeScan\x20-\x20unexpected\x20Scan\x20data,\x20current\x20marker\x20is:\x20', 'HTMLDivElement', '分包加载失败\x20\x20\x20', 'levelup', 'enter', 'loadSubpackage', 'ad_code', 'plat_idfv', 'selected_server', 'signature', '#ff3333', 'precision', '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', '[SDK]检查游戏版本', 'onError', 'loginCallBack', 'Event', 'label1,label2', 'vertical', 'loginBtn', 'loadScript', 'samplesPerLine', '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', '[SDK]米大师支付结果', 'length', 'request', 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg', 'openDialog', 'prompt', 'downloadClient', 'plat_from', 'replace', 'ts_backstage', 'dom', 'start', 'time', 'nickName', 'mcusPerColumn', 'MiniAdpter', 'base64_encode', 'colorTransform', '3635KYIEtX', 'Loading', '支付提示', 'nonageTitle', 'login/progress_jz_jdt1_0.png', 'openNotice', 'NONAGE_TEXT', 'logRoleUpLevel', 'noticeTab', 'serverGroup', 'NoticeVersion', 'new[SDK]调起登录', 'push', 'username', 'View', '[SDK]完成创建订单', 'COMPLETE', 'plat_uuid', '1,1,1,1', 'serverName', 'userData', '\x20--\x20ignoring\x20the\x20rest\x20of\x20the\x20image\x20data.', '464655BovQcU', '1038xnIVnC', 'login/btn_tongyong_13.png', 'head_img', 'serverItem', 'children', 'show', 'indexOf', 'Box', 'role_lev', 'index', '[SDK]获取用户转端信息', 'off', 'POST', 'timer', '/game/min/?ac=msgCheck', 'cdn', '_isColorConversionNeeded', 'platform', '游戏服登陆失败，CODE:', 'wifiSignal', 'pred', 'output', 'scanLines', '\x20--\x20attempting\x20to\x20re-parse\x20the\x20JPEG\x20image.', 'login/noticeBtn3.png', 'rolelevel', 'noticeTitle', 'login/image_xfy_xfbg.png', 'login/btn_xfy_fwq.png', 'onListRender', 'onEven', 'getFullYear', 'WebGL', '#021224', 'defineProperty', 'ts_notice', 'constructor', '当前服务器正在维护中', 'extension', '渡劫成功晋升天仙', '#CACACA', '[SDK]获得授权设置：未授权', 'progressive', 'createChildren', 'balance', '用户取消', '_getLinearizedBlockData', 'productname', 'Label', 'blocksPerColumn', 'plat_session_key', 'pop', '#581A1A', 'is_ios_pay', 'txt1', 'hideLoading', 'HttpRequest', 'offerId', 'is_auth', '审批文号：新广出审[2018]453号，著作权人：成都贪玩蛇科技有限公司，', 'pay', 'auth\x20deny', 'http://192.168.31.223:8901/bin', 'from', 'checkMsgV2', 'sign', '点击空白处退出', '微信登录成功返回', 'function', 'noticePanel', '进入客服会话，点击右下角小卡片或输入\x22cz\x22或\x22充值\x22获取支付链接', 'android', 'setItem', 'noticeBox', 'nonageBox', 'scope.userInfo', 'wx_openid', 'userInfo', 'errMsg', 'partner_id', '[SDK]订阅消息发送成功', 'loadView', 'uuid', 'addChild', 'authSetting', '[SDK]游戏币充值直接扣除', 'setStorageSync', 'login/image_xfy_bg2.jpg', 'progressBg1', 'readDataBlock\x20-\x20incorrect\x20length,\x20current\x20marker\x20is:\x20', 'progress', 'getUserZhuanduanInfo', 'auth\x20denied', 'server_num', 'htmlDecodeByRegExp', '#ffffff', 'devtools', '我知道了', '激励视频\x20广告显示失败', 'rolename', 'scaleY', 'createRewardedVideoAd', 'blockData', 'post', 'quantizationId', 'transformCode', 'lmfbs1_mhdlxyx_M', '#51628D', 'game/login/', 'getUserInfo:ok', 'components', '&data=', '10TMKgRV', 'itemServerState', 'code', '8891', 'server_id', 'query', 'model', 'decodeTransform'];
	a0_0x422f = function() {
		return _0x2d50dc;
	};
	return a0_0x422f();
}(function(_0xecace2) {
	var _0x398fc6 = a0_0x9d38d7,
		_0x35d9fe = (function() {
			function _0x45c6f0() {}
			return _0x45c6f0;
		}());
	_0xecace2['UserData'] = _0x35d9fe;
	var _0x130acf = (function() {
		function _0x316fa4() {}
		return _0x316fa4;
	}());
	_0xecace2[_0x398fc6(0x25d)] = _0x130acf;
	var _0x9ae2f3 = (function() {
		function _0x4a5b98() {}
		return _0x4a5b98;
	}());
	_0xecace2['NoticeData'] = _0x9ae2f3;
}(WeChatUI || (WeChatUI = {})));