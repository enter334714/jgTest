'use strict';
var a0_0x2da875 = a0_0x4cc5;
(function(_0x35a56e, _0x367844) {
	var _0x394f40 = a0_0x4cc5,
		_0xa717c8 = _0x35a56e();
	while (!![]) {
		try {
			var _0x1a2626 = -parseInt(_0x394f40(0x3bb)) / 0x1 + parseInt(_0x394f40(0x375)) / 0x2 + parseInt(_0x394f40(0x37c)) / 0x3 + parseInt(_0x394f40(0x1e6)) / 0x4 * (-parseInt(_0x394f40(0x236)) / 0x5) + -parseInt(_0x394f40(0x27d)) / 0x6 * (parseInt(_0x394f40(0x1f4)) / 0x7) + parseInt(_0x394f40(0x1f0)) / 0x8 + parseInt(_0x394f40(0x276)) / 0x9 * (parseInt(_0x394f40(0x21e)) / 0xa);
			if (_0x1a2626 === _0x367844) break;
			else _0xa717c8['push'](_0xa717c8['shift']());
		} catch (_0xa9de21) {
			_0xa717c8['push'](_0xa717c8['shift']());
		}
	}
}(a0_0x15dd, 0x4fe7e));
var __extends = this && this[a0_0x2da875(0x1d8)] || (function() {
		var _0x250874 = function(_0x25f1f3, _0x413561) {
			var _0x15f805 = a0_0x4cc5;
			return _0x250874 = Object[_0x15f805(0x1b6)] || {
				'__proto__': []
			}
			instanceof Array && function(_0x463f5c, _0x4ed3c3) {
				_0x463f5c['__proto__'] = _0x4ed3c3;
			} || function(_0x59fd6a, _0x3eef55) {
				var _0x5692db = _0x15f805;
				for (var _0x5a65a8 in _0x3eef55)
					if (_0x3eef55[_0x5692db(0x23c)](_0x5a65a8)) _0x59fd6a[_0x5a65a8] = _0x3eef55[_0x5a65a8];
			}, _0x250874(_0x25f1f3, _0x413561);
		};
		return function(_0x447817, _0x4895a3) {
			var _0x2b6bad = a0_0x4cc5;
			_0x250874(_0x447817, _0x4895a3);

			function _0x4ba56d() {
				this['constructor'] = _0x447817;
			}
			_0x447817['prototype'] = _0x4895a3 === null ? Object[_0x2b6bad(0x296)](_0x4895a3) : (_0x4ba56d[_0x2b6bad(0x34f)] = _0x4895a3[_0x2b6bad(0x34f)], new _0x4ba56d());
		};
	}()),
	config = {
		'game_id': '2',
		'game_pkg': a0_0x2da875(0x32c),
		'partner_id': '4',
		'is_auth': ![],
		'from': null
	};
window['config'] = config;
var PARTNER_SDK = mainSDK(),
	HOST = a0_0x2da875(0x3aa),
	user_game_info = null,
	this_order_id = null,
	game_ver = '';

function mainSDK() {
	var _0x4af546 = {},
		_0x54e12e = 0x0;
	return {
		'order_data': {},
		'init': function(_0x5e478c, _0x56f66f) {
			var _0x56b548 = a0_0x4cc5,
				_0x424b63 = this;
			game_ver = _0x5e478c && _0x5e478c['game_ver'] ? _0x5e478c[_0x56b548(0x39a)] : 0x0, console[_0x56b548(0x1bb)](_0x56b548(0x24a), _0x5e478c);
			var _0xe3ae98 = wx[_0x56b548(0x338)](_0x56b548(0x361)),
				_0x6e7864;
			!_0xe3ae98 ? (_0xe3ae98 = _0x424b63['uuid'](0x10, 0x20), wx['setStorageSync'](_0x56b548(0x361), _0xe3ae98), _0x6e7864 = 0x1) : _0x6e7864 = 0x0;
			var _0x59834f = wx['getStorageSync']('plat_idfv');
			!_0x59834f && (_0x59834f = _0x424b63['uuid'](0x10, 0x20), wx['setStorageSync'](_0x56b548(0x2d0), _0x59834f));
			var _0x3afc81 = wx[_0x56b548(0x219)](),
				_0x3562ea = _0x3afc81['scene'] ? _0x3afc81[_0x56b548(0x1c7)] : '';
			console[_0x56b548(0x1bb)](_0x56b548(0x2ec), _0x3afc81), console[_0x56b548(0x1bb)]('[SDK]小游戏is_new', _0x6e7864);
			_0x6e7864 && _0x3afc81[_0x56b548(0x3b9)] && _0x3afc81['query']['ad_code'] && wx['setStorageSync'](_0x56b548(0x3a4), _0x3afc81[_0x56b548(0x3b9)][_0x56b548(0x1d2)]);
			var _0x32a254 = JSON[_0x56b548(0x2bc)](_0x3afc81['query']);
			_0x6e7864 && _0x32a254 != '{}' && wx[_0x56b548(0x3bf)](_0x56b548(0x35d), JSON[_0x56b548(0x2bc)](_0x3afc81['query']));
			if (_0x3afc81[_0x56b548(0x3b9)] && _0x3afc81[_0x56b548(0x3b9)][_0x56b548(0x396)] && _0x3afc81[_0x56b548(0x3b9)][_0x56b548(0x396)] != '') {
				if (_0x6e7864) wx[_0x56b548(0x3bf)](_0x56b548(0x234), _0x3afc81[_0x56b548(0x3b9)][_0x56b548(0x396)]);
				config[_0x56b548(0x396)] = _0x3afc81['query']['from'];
			} else {
				var _0x243d82 = wx[_0x56b548(0x338)](_0x56b548(0x234));
				if (!_0x243d82 && _0x243d82 != '') config[_0x56b548(0x396)] = _0x243d82;
			}
			var _0x20b1df = {
				'install': _0x6e7864,
				'scene': _0x3562ea
			};
			_0x424b63[_0x56b548(0x1bb)](_0x56b548(0x3b7), _0x20b1df), wx['showShareMenu'](), game_ver && _0x424b63['checkGameVersion'](game_ver, function(_0x35df25) {
				_0x56f66f && _0x56f66f(_0x35df25);
			});
		},
		'login': function(_0x1e5f85) {
			var _0x3a86a3 = a0_0x4cc5;
			console[_0x3a86a3(0x1bb)](_0x3a86a3(0x261));
			var _0x4ebec3 = this;
			_0x4af546[_0x3a86a3(0x225)] = typeof _0x1e5f85 == _0x3a86a3(0x200) ? _0x1e5f85 : null, config[_0x3a86a3(0x364)] ? wx['getSetting']({
				'success': function(_0x276732) {
					var _0x28b9a6 = _0x3a86a3;
					if (_0x276732[_0x28b9a6(0x20a)]['scope.userInfo']) console[_0x28b9a6(0x1bb)]('[SDK]获得授权设置：已授权'), _0x4ebec3[_0x28b9a6(0x33c)]();
					else {
						console[_0x28b9a6(0x1bb)](_0x28b9a6(0x377)), wx['hideLoading']({});
						var _0x302ced = wx['getSystemInfoSync'](),
							_0x4f44c5 = _0x302ced[_0x28b9a6(0x38e)],
							_0x2793f3 = _0x302ced[_0x28b9a6(0x313)],
							_0xd79023 = _0x4f44c5 * 0x2 / 0x3,
							_0x3134db = _0xd79023 / 0x3,
							_0x4a7708 = (_0x4f44c5 - _0xd79023) / 0x2,
							_0x18d633 = _0x2793f3 / 0x2,
							_0x31022f = wx[_0x28b9a6(0x371)]({
								'type': _0x28b9a6(0x2ca),
								'text': _0x28b9a6(0x311),
								'withCredentials': ![],
								'style': {
									'top': _0x302ced[_0x28b9a6(0x1ad)] / 0x2 + _0x302ced[_0x28b9a6(0x1ad)] / 0x4,
									'left': _0x302ced[_0x28b9a6(0x38b)] / 0x2 - 0x64,
									'width': 0xc8,
									'height': 0x28,
									'lineHeight': 0x28,
									'backgroundColor': _0x28b9a6(0x1ba),
									'color': _0x28b9a6(0x3b2),
									'textAlign': 'center',
									'fontSize': 0x10,
									'borderRadius': 0x4
								}
							});
						_0x31022f[_0x28b9a6(0x1c0)](), _0x31022f['onTap'](function(_0x659410) {
							var _0x5e1268 = _0x28b9a6;
							console[_0x5e1268(0x1bb)](_0x659410), wxShowLoading({
								'title': _0x5e1268(0x305)
							}), _0x659410['errMsg'] == _0x5e1268(0x1ef) ? _0x4ebec3['do_login']({
								'head_img': _0x659410[_0x5e1268(0x2dd)][_0x5e1268(0x1cb)] || '',
								'nick_name': _0x659410[_0x5e1268(0x2dd)][_0x5e1268(0x1c4)] || ''
							}) : _0x4ebec3[_0x5e1268(0x33c)](), _0x31022f['destroy']();
						});
					}
				},
				'fail': function() {
					var _0x4063d0 = _0x3a86a3;
					console[_0x4063d0(0x1bb)](_0x4063d0(0x265)), _0x4ebec3[_0x4063d0(0x33c)]();
				}
			}) : (console[_0x3a86a3(0x1bb)](_0x3a86a3(0x262) + config['is_auth']), _0x4ebec3[_0x3a86a3(0x33c)]());
		},
		'do_login': function(_0x6d2876) {
			var _0x9b5cf9 = a0_0x4cc5,
				_0x153b31 = this;
			wx[_0x9b5cf9(0x225)]({
				'success': function(_0x33c413) {
					var _0x526190 = _0x9b5cf9;
					console[_0x526190(0x1bb)](_0x526190(0x316) + JSON[_0x526190(0x2bc)](_0x33c413));
					if (_0x33c413['code']) {
						var _0x4680b7 = _0x153b31['getPublicData']();
						_0x4680b7['mo'] = 0x1, _0x4680b7[_0x526190(0x31a)] = _0x33c413[_0x526190(0x31a)], _0x4680b7[_0x526190(0x260)] = _0x6d2876 ? _0x6d2876['nick_name'] : '', _0x4680b7[_0x526190(0x1a6)] = _0x6d2876 ? _0x6d2876[_0x526190(0x1a6)] : '', config['is_auth'] ? wx[_0x526190(0x29e)]({
							'success': function(_0x3f7385) {
								var _0x2ce8d5 = _0x526190,
									_0x61026d = _0x3f7385[_0x2ce8d5(0x343)],
									_0x5eae20 = _0x3f7385['iv'],
									_0xce2180 = _0x3f7385[_0x2ce8d5(0x3a7)];
								_0x4680b7['encryptedData'] = _0x61026d, _0x4680b7['iv'] = _0x5eae20, _0x4680b7[_0x2ce8d5(0x3a7)] = _0xce2180, wx[_0x2ce8d5(0x35c)]({
									'url': HOST + _0x2ce8d5(0x393),
									'method': _0x2ce8d5(0x2cb),
									'dataType': _0x2ce8d5(0x3a2),
									'header': {
										'content-type': _0x2ce8d5(0x220)
									},
									'data': _0x4680b7,
									'success': function(_0x4f0a2c) {
										var _0xeaa34c = _0x2ce8d5;
										console[_0xeaa34c(0x1bb)](_0xeaa34c(0x29b)), console[_0xeaa34c(0x1bb)](_0x4f0a2c);
										if (_0x4f0a2c['statusCode'] == 0xc8) {
											var _0x4119d8 = _0x4f0a2c[_0xeaa34c(0x230)];
											if (_0x4119d8['state']) {
												var _0x18718f = {
													'userid': _0x4119d8['data']['user_id'],
													'account': _0x4119d8[_0xeaa34c(0x230)]['nick_name'],
													'token': _0x4119d8[_0xeaa34c(0x230)][_0xeaa34c(0x25e)]
												};
												try {
													wx[_0xeaa34c(0x3bf)](_0xeaa34c(0x325), _0x4119d8[_0xeaa34c(0x230)][_0xeaa34c(0x29d)]), wx[_0xeaa34c(0x3bf)](_0xeaa34c(0x2b6), _0x4119d8[_0xeaa34c(0x230)][_0xeaa34c(0x206)]), wx[_0xeaa34c(0x3bf)](_0xeaa34c(0x322), _0x4119d8['data']['username']), wx['setStorageSync'](_0xeaa34c(0x285), _0x4119d8[_0xeaa34c(0x230)][_0xeaa34c(0x2bb)]);
													var _0x4fda24 = wx[_0xeaa34c(0x338)](_0xeaa34c(0x3a4));
													!_0x4fda24 && _0x4119d8[_0xeaa34c(0x230)][_0xeaa34c(0x1d2)] != '' && wx[_0xeaa34c(0x3bf)](_0xeaa34c(0x3a4), _0x4119d8['data'][_0xeaa34c(0x1d2)]), _0x4119d8[_0xeaa34c(0x230)][_0xeaa34c(0x1da)] && wx[_0xeaa34c(0x3bf)]('plat_session_key', _0x4119d8[_0xeaa34c(0x230)][_0xeaa34c(0x1da)]);
												} catch (_0x9a8ceb) {}
												_0x4af546[_0xeaa34c(0x225)] && _0x4af546[_0xeaa34c(0x225)](0x0, _0x18718f);
											} else _0x4af546['login'] && _0x4af546['login'](0x1, {
												'errMsg': _0x4119d8[_0xeaa34c(0x35a)]
											});
										} else _0x4af546[_0xeaa34c(0x225)] && _0x4af546[_0xeaa34c(0x225)](0x1, {
											'errMsg': _0xeaa34c(0x303)
										});
									},
									'fail': function(_0x10b990) {
										var _0x23afbe = _0x2ce8d5;
										_0x4af546[_0x23afbe(0x225)] && _0x4af546['login'](0x1, {
											'errMsg': _0x10b990[_0x23afbe(0x370)]
										});
									}
								});
							},
							'fail': function(_0x2d9c4c) {
								var _0x13b506 = _0x526190;
								_0x4af546[_0x13b506(0x225)] && _0x4af546[_0x13b506(0x225)](0x1, {
									'errMsg': _0x2d9c4c[_0x13b506(0x370)]
								});
							}
						}) : wx[_0x526190(0x35c)]({
							'url': HOST + _0x526190(0x393),
							'method': _0x526190(0x2cb),
							'dataType': _0x526190(0x3a2),
							'header': {
								'content-type': _0x526190(0x220)
							},
							'data': _0x4680b7,
							'success': function(_0xbdccf7) {
								var _0x5da741 = _0x526190;
								console[_0x5da741(0x1bb)](_0x5da741(0x29b)), console[_0x5da741(0x1bb)](_0xbdccf7);
								if (_0xbdccf7[_0x5da741(0x1d1)] == 0xc8) {
									var _0x30f98b = _0xbdccf7[_0x5da741(0x230)];
									if (_0x30f98b['state']) {
										var _0x34487c = {
											'userid': _0x30f98b['data']['user_id'],
											'account': _0x30f98b['data'][_0x5da741(0x260)],
											'token': _0x30f98b[_0x5da741(0x230)][_0x5da741(0x25e)]
										};
										try {
											wx[_0x5da741(0x3bf)](_0x5da741(0x325), _0x30f98b['data'][_0x5da741(0x29d)]), wx[_0x5da741(0x3bf)]('plat_uid', _0x30f98b['data'][_0x5da741(0x206)]), wx['setStorageSync'](_0x5da741(0x322), _0x30f98b[_0x5da741(0x230)]['username']), wx[_0x5da741(0x3bf)]('wx_openid', _0x30f98b['data']['openid']);
											var _0x7059f6 = wx[_0x5da741(0x338)](_0x5da741(0x3a4));
											!_0x7059f6 && _0x30f98b['data']['ad_code'] != '' && wx['setStorageSync'](_0x5da741(0x3a4), _0x30f98b[_0x5da741(0x230)][_0x5da741(0x1d2)]), _0x30f98b[_0x5da741(0x230)][_0x5da741(0x1da)] && wx[_0x5da741(0x3bf)](_0x5da741(0x341), _0x30f98b[_0x5da741(0x230)][_0x5da741(0x1da)]);
										} catch (_0x5de975) {}
										_0x4af546[_0x5da741(0x225)] && _0x4af546[_0x5da741(0x225)](0x0, _0x34487c);
									} else _0x4af546[_0x5da741(0x225)] && _0x4af546[_0x5da741(0x225)](0x1, {
										'errMsg': _0x30f98b['msg']
									});
								} else _0x4af546['login'] && _0x4af546[_0x5da741(0x225)](0x1, {
									'errMsg': '请求平台服务器失败！#2'
								});
							}
						});
					} else _0x4af546[_0x526190(0x225)] && _0x4af546['login'](0x1, {
						'errMsg': _0x33c413[_0x526190(0x370)]
					});
				},
				'fail': function(_0x3490e3) {
					var _0x5e718d = _0x9b5cf9;
					console[_0x5e718d(0x1bb)](_0x5e718d(0x1f1) + JSON[_0x5e718d(0x2bc)](_0x3490e3)), (_0x3490e3[_0x5e718d(0x370)][_0x5e718d(0x334)]('auth\x20deny') > -0x1 || _0x3490e3['errMsg'][_0x5e718d(0x334)](_0x5e718d(0x1c3)) > -0x1) && (_0x4af546[_0x5e718d(0x225)] && _0x4af546[_0x5e718d(0x225)](0x1, {
						'errMsg': _0x3490e3[_0x5e718d(0x370)]
					}));
				}
			});
		},
		'checkGameVersion': function(_0x43fb79, _0x48c659) {
			var _0x4520bd = a0_0x4cc5;
			console[_0x4520bd(0x1bb)](_0x4520bd(0x2b3));
			var _0x64d208 = wx[_0x4520bd(0x338)]('plat_sdk_token');
			wx[_0x4520bd(0x35c)]({
				'url': HOST + _0x4520bd(0x1f3),
				'method': _0x4520bd(0x2cb),
				'dataType': _0x4520bd(0x3a2),
				'header': {
					'content-type': _0x4520bd(0x220)
				},
				'data': {
					'game_pkg': config[_0x4520bd(0x273)],
					'partner_id': config['partner_id'],
					'game_ver': _0x43fb79
				},
				'success': function(_0x516ff4) {
					var _0x256b07 = _0x4520bd;
					console[_0x256b07(0x1bb)](_0x256b07(0x2aa)), console[_0x256b07(0x1bb)](_0x516ff4);
					if (_0x516ff4['statusCode'] == 0xc8) {
						var _0x459bc6 = _0x516ff4[_0x256b07(0x230)];
						_0x459bc6[_0x256b07(0x2c2)] ? _0x48c659 && _0x48c659(_0x459bc6[_0x256b07(0x230)]) : _0x48c659 && _0x48c659({
							'develop': 0x0
						});
					} else _0x48c659 && _0x48c659({
						'develop': 0x0
					});
				},
				'fail': function(_0x1c810c) {
					console['log'](_0x1c810c);
				}
			});
		},
		'pay': function(_0x2e9571, _0x29d7d8) {
			var _0x508e58 = this;
			wx['checkSession']({
				'success': function() {
					var _0xe5ca9 = a0_0x4cc5;
					_0x508e58[_0xe5ca9(0x2b5)](_0x2e9571, _0x29d7d8);
				},
				'fail': function() {
					var _0x2feecd = a0_0x4cc5;
					console[_0x2feecd(0x1bb)]('[SDK]session过期需要重新登录'), _0x508e58[_0x2feecd(0x225)]({}, function() {
						var _0x22c91f = _0x2feecd;
						_0x508e58[_0x22c91f(0x2b5)](_0x2e9571, _0x29d7d8);
					});
				}
			});
		},
		'startPay': function(_0x560224, _0x5d1ba8) {
			var _0x54e88e = a0_0x4cc5;
			console[_0x54e88e(0x1bb)](_0x54e88e(0x23e)), console['log'](_0x560224);
			var _0x2a9e7b = this;
			_0x4af546['pay'] = typeof _0x5d1ba8 == _0x54e88e(0x200) ? _0x5d1ba8 : null, _0x54e12e = 0x0;
			var _0x26815e = wx[_0x54e88e(0x338)]('plat_sdk_token'),
				_0x21ec10 = wx[_0x54e88e(0x338)](_0x54e88e(0x341));
			if (!_0x26815e || !_0x21ec10) {
				_0x4af546[_0x54e88e(0x212)] && _0x4af546[_0x54e88e(0x212)](0x1, {
					'errMsg': _0x54e88e(0x394)
				});
				return;
			}
			var _0x5887d9 = wx[_0x54e88e(0x215)](),
				_0x4ed796 = {
					'cpbill': _0x560224[_0x54e88e(0x20c)],
					'productid': _0x560224[_0x54e88e(0x1df)],
					'productname': _0x560224[_0x54e88e(0x30c)],
					'productdesc': _0x560224[_0x54e88e(0x368)],
					'serverid': _0x560224[_0x54e88e(0x297)],
					'servername': _0x560224[_0x54e88e(0x1a1)],
					'roleid': _0x560224[_0x54e88e(0x228)],
					'rolename': _0x560224[_0x54e88e(0x1d4)],
					'rolelevel': _0x560224[_0x54e88e(0x272)],
					'price': _0x560224['price'],
					'extension': _0x560224[_0x54e88e(0x2a2)],
					'sdk_token': _0x26815e,
					'session_key': _0x21ec10,
					'platform': _0x5887d9['platform']
				};
			_0x2a9e7b[_0x54e88e(0x352)] = _0x4ed796;
			var _0x384ab8 = _0x2a9e7b[_0x54e88e(0x2cd)]();
			_0x384ab8[_0x54e88e(0x352)] = JSON[_0x54e88e(0x2bc)](_0x4ed796), wx[_0x54e88e(0x35c)]({
				'url': HOST + _0x54e88e(0x218),
				'method': _0x54e88e(0x2cb),
				'dataType': _0x54e88e(0x3a2),
				'header': {
					'content-type': _0x54e88e(0x220)
				},
				'data': _0x384ab8,
				'success': function(_0x41736d) {
					var _0xd5c13a = _0x54e88e;
					console[_0xd5c13a(0x1bb)](_0xd5c13a(0x3b3)), console['log'](_0x41736d);
					if (_0x41736d['statusCode'] == 0xc8) {
						var _0x364bbf = _0x41736d[_0xd5c13a(0x230)];
						_0x364bbf[_0xd5c13a(0x2c2)] ? typeof wx[_0xd5c13a(0x307)] == 'undefined' ? _0x5887d9[_0xd5c13a(0x345)] == _0xd5c13a(0x1f5) || _0x5887d9[_0xd5c13a(0x345)] == _0xd5c13a(0x3a8) || _0x5887d9['platform'] == _0xd5c13a(0x22c) ? _0x364bbf[_0xd5c13a(0x230)]['is_android_pay'] ? _0x2a9e7b[_0xd5c13a(0x35e)](_0x364bbf[_0xd5c13a(0x230)]) : _0x2a9e7b['gamePay'](_0x364bbf[_0xd5c13a(0x230)]) : _0x364bbf[_0xd5c13a(0x230)][_0xd5c13a(0x31b)] ? _0x364bbf[_0xd5c13a(0x230)][_0xd5c13a(0x23d)] == 0x1 && _0x2a9e7b[_0xd5c13a(0x35e)](_0x364bbf['data']) : wx['showModal']({
							'title': _0xd5c13a(0x399),
							'content': _0xd5c13a(0x1aa),
							'confirmText': _0xd5c13a(0x302),
							'showCancel': ![]
						}) : _0x2a9e7b['minPay'](_0x364bbf[_0xd5c13a(0x230)]) : _0x4af546['pay'] && _0x4af546[_0xd5c13a(0x212)](0x1, {
							'errMsg': _0x364bbf['msg']
						});
					} else _0x4af546['login'] && _0x4af546[_0xd5c13a(0x225)](0x1, {
						'errMsg': '请求平台服务器失败！#3'
					});
				}
			});
		},
		'gamePay': function(_0x41b6cb) {
			var _0x40692a = a0_0x4cc5,
				_0x4da194 = this;
			_0x41b6cb[_0x40692a(0x288)] <= _0x41b6cb[_0x40692a(0x356)] ? (console[_0x40692a(0x1bb)](_0x40692a(0x293)), wx['showModal']({
				'title': _0x40692a(0x399),
				'content': _0x40692a(0x270) + _0x41b6cb['balance'] + _0x40692a(0x203) + _0x41b6cb[_0x40692a(0x288)] + _0x40692a(0x2e9),
				'showCancel': ![],
				'confirmText': '我知道了',
				'success': function() {
					var _0x5e637a = _0x40692a;
					_0x4da194[_0x5e637a(0x369)](_0x41b6cb);
				}
			})) : (console[_0x40692a(0x1bb)](_0x40692a(0x222)), console[_0x40692a(0x1bb)](_0x41b6cb), wx[_0x40692a(0x22e)]({
				'mode': _0x40692a(0x389),
				'env': _0x41b6cb[_0x40692a(0x1b3)],
				'offerId': _0x41b6cb[_0x40692a(0x2c5)],
				'currencyType': _0x41b6cb[_0x40692a(0x2b9)],
				'platform': _0x41b6cb[_0x40692a(0x345)],
				'buyQuantity': _0x41b6cb[_0x40692a(0x288)],
				'zoneId': _0x41b6cb[_0x40692a(0x241)],
				'success': function(_0x470507) {
					var _0x51e061 = _0x40692a;
					_0x470507[_0x51e061(0x370)] == _0x51e061(0x3af) && _0x4da194[_0x51e061(0x369)](_0x41b6cb);
				},
				'fail': function(_0x9769a0) {
					var _0x1a067 = _0x40692a;
					_0x9769a0[_0x1a067(0x370)][_0x1a067(0x334)](_0x1a067(0x1cc)) !== -0x1 ? _0x4af546[_0x1a067(0x212)] && _0x4af546[_0x1a067(0x212)](0x2, {
						'errMsg': _0x1a067(0x3b6)
					}) : _0x4af546[_0x1a067(0x212)] && _0x4af546[_0x1a067(0x212)](0x1, {
						'errMsg': _0x1a067(0x333) + _0x9769a0[_0x1a067(0x370)] + '(' + _0x9769a0[_0x1a067(0x255)] + ')'
					});
				},
				'complete': function(_0x172af9) {}
			}));
		},
		'kfPay': function(_0x120b9a) {
			var _0x2d2d5a = a0_0x4cc5,
				_0x435036 = this;
			this_order_id = _0x120b9a[_0x2d2d5a(0x366)], wx[_0x2d2d5a(0x2a4)]({
				'title': _0x2d2d5a(0x399),
				'content': '进入客服会话，点击右下角小卡片或输入\x22cz\x22或\x22充值\x22获取支付链接',
				'showCancel': ![],
				'confirmText': _0x2d2d5a(0x302),
				'success': function() {
					var _0x5dc93d = _0x2d2d5a,
						_0x117ddd = {
							'showMessageCard': !![],
							'sendMessageTitle': _0x5dc93d(0x2a8),
							'sendMessageImg': _0x5dc93d(0x1ee)
						};
					wx[_0x5dc93d(0x2e3)](_0x117ddd);
				}
			});
		},
		'gameGoPay': function(_0x3651d4, _0x3e9695) {
			var _0x283162 = a0_0x4cc5;
			console[_0x283162(0x1bb)](_0x283162(0x1b4));
			var _0x16d39b = this,
				_0x1a2702 = wx['getStorageSync'](_0x283162(0x341));
			wx[_0x283162(0x35c)]({
				'url': HOST + '/partner/pay/' + config[_0x283162(0x3ac)] + '/' + config[_0x283162(0x273)] + '/',
				'method': _0x283162(0x2cb),
				'dataType': 'json',
				'header': {
					'content-type': _0x283162(0x220)
				},
				'data': {
					'order_id': _0x3651d4[_0x283162(0x366)],
					'time': _0x3651d4['time'],
					'sign': _0x3651d4[_0x283162(0x2cc)],
					'session_key': _0x1a2702
				},
				'success': function(_0x4b110c) {
					var _0x2c7913 = _0x283162;
					console[_0x2c7913(0x1bb)](_0x2c7913(0x2c9)), console['log'](_0x4b110c);
					if (_0x4b110c[_0x2c7913(0x1d1)] == 0xc8) {
						if (_0x4b110c['data'][_0x2c7913(0x2c2)] == 0x1) {
							var _0x416d2e = {
								'cpOrderNo': _0x16d39b[_0x2c7913(0x352)]['cpbill'],
								'orderNo': _0x3651d4[_0x2c7913(0x366)],
								'amount': _0x16d39b[_0x2c7913(0x352)][_0x2c7913(0x28c)],
								'extension': _0x16d39b[_0x2c7913(0x352)][_0x2c7913(0x2a2)]
							};
							_0x4af546[_0x2c7913(0x212)] && _0x4af546[_0x2c7913(0x212)](0x0, _0x416d2e);
						} else _0x4af546[_0x2c7913(0x212)] && _0x4af546[_0x2c7913(0x212)](0x1, {
							'errMsg': '支付失败'
						});
					}
				},
				'fail': function() {}
			});
		},
		'logCreateRole': function(_0x2e0069) {
			var _0x314527 = a0_0x4cc5,
				_0x37ef41 = wx[_0x314527(0x338)](_0x314527(0x2b6)),
				_0x45b8ac = wx['getStorageSync']('plat_username'),
				_0x427968 = {};
			_0x427968['user_id'] = _0x37ef41, _0x427968['user_name'] = _0x45b8ac, _0x427968[_0x314527(0x280)] = _0x2e0069[_0x314527(0x228)], _0x427968[_0x314527(0x397)] = _0x2e0069[_0x314527(0x272)], _0x427968[_0x314527(0x1f6)] = _0x2e0069['rolename'], _0x427968['server_id'] = _0x2e0069[_0x314527(0x297)], _0x2e0069[_0x314527(0x228)] && _0x2e0069['serverid'] && (user_game_info = {
				'role_id': _0x2e0069[_0x314527(0x228)],
				'server_id': _0x2e0069[_0x314527(0x297)]
			}), this[_0x314527(0x1bb)](_0x314527(0x296), _0x427968);
		},
		'logEnterGame': function(_0x2effe8) {
			var _0x1b4f45 = a0_0x4cc5,
				_0x4611c6 = wx[_0x1b4f45(0x338)](_0x1b4f45(0x2b6)),
				_0x431e8a = wx[_0x1b4f45(0x338)](_0x1b4f45(0x322)),
				_0xd4569d = {};
			_0xd4569d[_0x1b4f45(0x206)] = _0x4611c6, _0xd4569d['user_name'] = _0x431e8a, _0xd4569d[_0x1b4f45(0x280)] = _0x2effe8[_0x1b4f45(0x228)], _0xd4569d['role_lev'] = _0x2effe8[_0x1b4f45(0x272)], _0xd4569d[_0x1b4f45(0x1f6)] = _0x2effe8[_0x1b4f45(0x1d4)], _0xd4569d['server_id'] = _0x2effe8[_0x1b4f45(0x297)], _0x2effe8[_0x1b4f45(0x228)] && _0x2effe8[_0x1b4f45(0x297)] && (user_game_info = {
				'role_id': _0x2effe8[_0x1b4f45(0x228)],
				'server_id': _0x2effe8['serverid']
			}), this[_0x1b4f45(0x1bb)](_0x1b4f45(0x2f6), _0xd4569d);
		},
		'logRoleUpLevel': function(_0x130146) {
			var _0x422219 = a0_0x4cc5,
				_0x59da82 = wx[_0x422219(0x338)](_0x422219(0x2b6)),
				_0x288440 = wx[_0x422219(0x338)]('plat_username'),
				_0x30264d = {};
			_0x30264d[_0x422219(0x206)] = _0x59da82, _0x30264d[_0x422219(0x294)] = _0x288440, _0x30264d[_0x422219(0x280)] = _0x130146[_0x422219(0x228)], _0x30264d[_0x422219(0x397)] = _0x130146[_0x422219(0x272)], _0x30264d[_0x422219(0x1f6)] = _0x130146['rolename'], _0x30264d['server_id'] = _0x130146[_0x422219(0x297)], _0x130146['roleid'] && _0x130146['serverid'] && (user_game_info = {
				'role_id': _0x130146['roleid'],
				'server_id': _0x130146[_0x422219(0x297)]
			}), this['log']('levelup', _0x30264d);
		},
		'uuid': function(_0x204ad2, _0x3f54ee) {
			var _0x36d002 = a0_0x4cc5,
				_0x700c15 = _0x36d002(0x1fc)[_0x36d002(0x388)](''),
				_0x43c736 = [],
				_0x289743;
			_0x204ad2 = _0x204ad2 || _0x700c15[_0x36d002(0x1a2)];
			if (_0x3f54ee) {
				for (_0x289743 = 0x0; _0x289743 < _0x3f54ee; _0x289743++) _0x43c736[_0x289743] = _0x700c15[0x0 | Math[_0x36d002(0x291)]() * _0x204ad2];
			} else {
				var _0x28b509;
				_0x43c736[0x8] = _0x43c736[0xd] = _0x43c736[0x12] = _0x43c736[0x17] = '-', _0x43c736[0xe] = '4';
				for (_0x289743 = 0x0; _0x289743 < 0x24; _0x289743++) {
					!_0x43c736[_0x289743] && (_0x28b509 = 0x0 | Math['random']() * 0x10, _0x43c736[_0x289743] = _0x700c15[_0x289743 == 0x13 ? _0x28b509 & 0x3 | 0x8 : _0x28b509]);
				}
			}
			return _0x43c736[_0x36d002(0x2ba)]('');
		},
		'getPublicData': function() {
			var _0x2e77ab = a0_0x4cc5,
				_0x33d2c2 = wx[_0x2e77ab(0x215)](),
				_0x3e432d = wx[_0x2e77ab(0x338)]('plat_uuid'),
				_0x460ad3 = wx[_0x2e77ab(0x338)]('plat_idfv'),
				_0x2f54cc = wx[_0x2e77ab(0x338)](_0x2e77ab(0x3a4)),
				_0x529fa8 = wx[_0x2e77ab(0x338)]('wx_openid'),
				_0x3dfb3f = wx['getStorageSync'](_0x2e77ab(0x35d));
			return {
				'game_id': config[_0x2e77ab(0x25a)],
				'game_pkg': config[_0x2e77ab(0x273)],
				'partner_id': config[_0x2e77ab(0x3ac)],
				'ad_code': _0x2f54cc,
				'uuid': _0x3e432d,
				'idfv': _0x460ad3,
				'dname': _0x33d2c2[_0x2e77ab(0x2a7)],
				'mac': _0x2e77ab(0x2ed),
				'net_type': _0x33d2c2[_0x2e77ab(0x240)] == 0x0 ? '4G' : _0x2e77ab(0x339),
				'os_ver': _0x33d2c2[_0x2e77ab(0x266)],
				'sdk_ver': _0x33d2c2[_0x2e77ab(0x268)],
				'game_ver': game_ver,
				'device': _0x33d2c2[_0x2e77ab(0x345)] == _0x2e77ab(0x1f5) ? 0x1 : 0x2,
				'is_from_min': 0x1,
				'wx_openid': _0x529fa8,
				'wx_query': _0x3dfb3f
			};
		},
		'log': function(_0x360c92, _0x4bc75d) {
			var _0xcf9df5 = a0_0x4cc5,
				_0x4cdb69 = this[_0xcf9df5(0x2cd)]();
			for (var _0x12a797 in _0x4bc75d) {
				_0x4cdb69[_0x12a797] = _0x4bc75d[_0x12a797];
			}
			console['log'](_0xcf9df5(0x204) + _0x360c92), console[_0xcf9df5(0x1bb)](_0x4cdb69), wx[_0xcf9df5(0x35c)]({
				'url': HOST + _0xcf9df5(0x2b4) + _0x360c92 + _0xcf9df5(0x2a5) + encodeURIComponent(JSON['stringify'](_0x4cdb69))
			});
		},
		'getDate': function() {
			var _0x25f025 = a0_0x4cc5,
				_0x38b8bf = new Date();
			return _0x38b8bf[_0x25f025(0x245)]() + '-' + _0x38b8bf[_0x25f025(0x38a)]() + '-' + _0x38b8bf['getDate']();
		},
		'downloadClient': function() {
			var _0x3a8b38 = a0_0x4cc5,
				_0xa6d06 = wx[_0x3a8b38(0x338)]('wx_openid'),
				_0x596d55 = _0x3a8b38(0x2d8) + _0xa6d06;
			wx[_0x3a8b38(0x2a4)]({
				'title': _0x3a8b38(0x39c),
				'content': _0x3a8b38(0x395),
				'showCancel': ![],
				'confirmText': _0x3a8b38(0x302),
				'success': function() {
					var _0x228028 = {
						'showMessageCard': !![],
						'sendMessageTitle': _0x596d55,
						'sendMessageImg': 'https://static.357pk.net/uploads/2109/weixin_download_img2.jpg'
					};
					wx['openCustomerServiceConversation'](_0x228028);
				}
			});
		},
		'checkMsg': function(_0xd0460a, _0x5d4afc) {
			var _0xe96cad = a0_0x4cc5;
			console[_0xe96cad(0x1bb)](_0xe96cad(0x2d9));
			var _0x196bd7 = wx[_0xe96cad(0x338)](_0xe96cad(0x325));
			wx[_0xe96cad(0x35c)]({
				'url': HOST + '/game/min/?ac=msgCheck',
				'method': _0xe96cad(0x2cb),
				'dataType': _0xe96cad(0x3a2),
				'header': {
					'content-type': _0xe96cad(0x220)
				},
				'data': {
					'game_pkg': config['game_pkg'],
					'partner_id': config['partner_id'],
					'sdk_token': _0x196bd7,
					'content': _0xd0460a
				},
				'success': function(_0x10ad31) {
					var _0x52f8be = _0xe96cad;
					console['log'](_0x52f8be(0x36a)), _0x5d4afc && _0x5d4afc(_0x10ad31[_0x52f8be(0x230)][_0x52f8be(0x31a)] == 0x0 ? 0x1 : 0x0, _0x10ad31[_0x52f8be(0x230)][_0x52f8be(0x35a)]);
				}
			});
		},
		'checkMsgV2': function(_0x58ec0a, _0x52f7ec) {
			var _0x1ac6f8 = a0_0x4cc5;
			console[_0x1ac6f8(0x1bb)](_0x1ac6f8(0x2d9));
			var _0x459028 = wx['getStorageSync']('plat_sdk_token');
			wx[_0x1ac6f8(0x35c)]({
				'url': HOST + _0x1ac6f8(0x2d5),
				'method': 'POST',
				'dataType': _0x1ac6f8(0x3a2),
				'header': {
					'content-type': _0x1ac6f8(0x220)
				},
				'data': {
					'game_pkg': config['game_pkg'],
					'partner_id': config['partner_id'],
					'sdk_token': _0x459028,
					'content': _0x58ec0a,
					'scene': 0x1
				},
				'success': function(_0x1aaa35) {
					var _0xc4903f = _0x1ac6f8;
					console[_0xc4903f(0x1bb)]('[SDK]查看文本是否有违规内容结果返回:'), _0x52f7ec && _0x52f7ec(_0x1aaa35[_0xc4903f(0x230)][_0xc4903f(0x31a)] == 0x0 ? 0x1 : 0x0, _0x1aaa35[_0xc4903f(0x230)][_0xc4903f(0x35a)]);
				}
			});
		},
		'sendMessage': function(_0x48f41e, _0x19a4b6, _0x150ff5) {
			var _0x123223 = a0_0x4cc5;
			console[_0x123223(0x1bb)]('[SDK]发送订阅消息');
			var _0x2044ca = wx[_0x123223(0x338)](_0x123223(0x325));
			wx['request']({
				'url': HOST + _0x123223(0x1c1),
				'method': _0x123223(0x2cb),
				'dataType': _0x123223(0x3a2),
				'header': {
					'content-type': 'application/x-www-form-urlencoded'
				},
				'data': {
					'game_pkg': config[_0x123223(0x273)],
					'partner_id': config[_0x123223(0x3ac)],
					'sdk_token': _0x2044ca,
					'template_id': _0x48f41e,
					'data': _0x19a4b6
				},
				'success': function(_0x173a6f) {
					var _0x521386 = _0x123223;
					console['log'](_0x521386(0x30e)), _0x150ff5 && _0x150ff5(_0x173a6f[_0x521386(0x230)][_0x521386(0x31a)] == 0x0 ? 0x1 : 0x0, _0x173a6f[_0x521386(0x230)][_0x521386(0x35a)]);
				}
			});
		},
		'videoAdvert': function(_0x3b25bb, _0x3e5250) {
			var _0x23e25e = a0_0x4cc5;
			wx['request']({
				'url': HOST + _0x23e25e(0x34a),
				'method': 'POST',
				'dataType': 'json',
				'header': {
					'content-type': _0x23e25e(0x220)
				},
				'data': {
					'game_pkg': config[_0x23e25e(0x273)],
					'partner_id': config[_0x23e25e(0x3ac)]
				},
				'success': function(_0x583d27) {
					var _0x29e675 = _0x23e25e,
						_0xefb3da = _0x583d27[_0x29e675(0x230)][_0x29e675(0x230)]['weixin_advert_id'],
						_0x13e999 = null,
						_0x44f7a2 = {};
					if (wx[_0x29e675(0x365)]) {
						_0x13e999 = wx['createRewardedVideoAd']({
							'adUnitId': _0xefb3da
						}), _0x13e999[_0x29e675(0x1c0)]()[_0x29e675(0x32b)](function() {
							var _0x73e697 = _0x29e675;
							console['log'](_0x73e697(0x26f));
							var _0x4e53f4 = _0x73e697(0x355);
							_0x13e999['load']()[_0x73e697(0x3a1)](function() {
								var _0x497aab = _0x73e697;
								return _0x13e999[_0x497aab(0x1c0)]();
							})[_0x73e697(0x32b)](function(_0x4f1fc7) {
								var _0x19d6de = _0x73e697,
									_0x474565 = _0x19d6de(0x3b0);
								console[_0x19d6de(0x1bb)](_0x19d6de(0x237));
							}), (_0x44f7a2 = {
								'advert_type': _0x3b25bb,
								'status': _0x4e53f4
							}, _0x3e5250 && _0x3e5250(_0x44f7a2));
						}), _0x13e999['onError'](function(_0x7e2ba1) {
							var _0x4de9f5 = _0x29e675;
							console[_0x4de9f5(0x1bb)](_0x7e2ba1);
						});
						try {
							_0x13e999[_0x29e675(0x3bd)] && (_0x13e999[_0x29e675(0x1c9)](_0x13e999[_0x29e675(0x3bd)]), console['log'](_0x29e675(0x301)));
						} catch (_0x3fcbc1) {
							console[_0x29e675(0x1bb)]('videoAdv.offClose\x20卸载失败'), console[_0x29e675(0x256)](_0x3fcbc1);
						}
						_0x13e999[_0x29e675(0x3bd)] = function(_0x30b2fb) {
							var _0x20cc6a = _0x29e675;
							if (!_0x13e999) return;
							_0x13e999[_0x20cc6a(0x1c9)]();
							if (_0x30b2fb && _0x30b2fb[_0x20cc6a(0x392)] || _0x30b2fb === undefined) {
								console[_0x20cc6a(0x1bb)](_0x20cc6a(0x292));
								var _0x471cbb = _0x20cc6a(0x363);
								_0x44f7a2 = {
									'advert_type': _0x3b25bb,
									'status': _0x471cbb
								}, _0x3e5250 && _0x3e5250(_0x44f7a2);
							} else {
								console[_0x20cc6a(0x1bb)](_0x20cc6a(0x2b8));
								var _0x471cbb = _0x20cc6a(0x2c0);
								_0x44f7a2 = {
									'advert_type': _0x3b25bb,
									'status': _0x471cbb
								}, _0x3e5250 && _0x3e5250(_0x44f7a2);
							}
						}, _0x13e999[_0x29e675(0x1d0)](_0x13e999[_0x29e675(0x3bd)]);
					}
				}
			});
		},
		'getGameConfig': function(_0x266758) {
			var _0x15f3fd = a0_0x4cc5;
			console[_0x15f3fd(0x1bb)](_0x15f3fd(0x304)), wx[_0x15f3fd(0x35c)]({
				'url': HOST + _0x15f3fd(0x34a),
				'method': _0x15f3fd(0x2cb),
				'dataType': _0x15f3fd(0x3a2),
				'header': {
					'content-type': _0x15f3fd(0x220)
				},
				'data': {
					'game_pkg': config[_0x15f3fd(0x273)],
					'partner_id': config['partner_id']
				},
				'success': function(_0x21c170) {
					var _0x12791c = _0x15f3fd,
						_0x52721c = _0x21c170['data'][_0x12791c(0x230)];
					console[_0x12791c(0x1bb)](_0x12791c(0x349)), console['log'](_0x21c170[_0x12791c(0x230)]);
					var _0x522065 = {};
					_0x522065 = {
						'pay_switch': _0x52721c[_0x12791c(0x2eb)],
						'game_ver': _0x52721c['game_ver']
					}, _0x266758 && _0x266758(_0x522065);
				}
			});
		},
		'getUserZhuanduanInfo': function(_0x40b2f0) {
			var _0x88193e = a0_0x4cc5;
			console['log'](_0x88193e(0x29c));
			var _0x2aa51f = wx[_0x88193e(0x338)](_0x88193e(0x325));
			wx[_0x88193e(0x35c)]({
				'url': HOST + '/?method=user.getUserZhuanduanInfo',
				'method': _0x88193e(0x2cb),
				'dataType': 'json',
				'header': {
					'content-type': _0x88193e(0x220)
				},
				'data': {
					'game_id': config['game_id'],
					'game_pkg': config[_0x88193e(0x273)],
					'partner_id': config[_0x88193e(0x3ac)],
					'sdk_token': _0x2aa51f
				},
				'success': function(_0x448488) {
					var _0x599c09 = _0x88193e,
						_0x12601c = _0x448488[_0x599c09(0x230)][_0x599c09(0x230)];
					console[_0x599c09(0x1bb)](_0x599c09(0x235));
					var _0x35d89b = {};
					_0x35d89b = {
						'download_url': _0x12601c['download_url'],
						'password': _0x12601c[_0x599c09(0x2d7)],
						'service_qq': _0x12601c['service_qq'],
						'username': _0x12601c['username'],
						'is_show': _0x12601c[_0x599c09(0x2f1)]
					}, _0x40b2f0 && _0x40b2f0(_0x35d89b);
				}
			});
		},
		'openService': function() {
			var _0x2d88c2 = a0_0x4cc5;
			wx[_0x2d88c2(0x2e3)]();
		}
	};
}

function a0_0x15dd() {
	var _0x146e97 = ['1,1,1,1', 'getConfig', '游戏币', 'selected_server', 'pay_switch', '[SDK]小游戏启动参数', '0000', 'alignV', 'tick', 'blockData', 'is_show', 'serverBG', '当前服务器正在维护中', 'user', 'scaleMode', 'enter', 'numComponents', 'mac', 'totalBytesWritten', 'renderHandler', 'login/image_xfy_ct.png', 'MainCode', 'ceil', '_scrollBar', 'JPEG\x20error:\x20', 'HTMLDivElement', 'videoAdv.offClose卸载成功', '我知道了', '请求平台服务器失败！#1', '[SDK]获取游戏配置', '正在登录游戏', 'middle', 'requestPayment', 'login/img_slts_16.png', 'Panel', 'proLabel2', 'labels', 'productname', 'visible', '[SDK]订阅消息发送成功', 'login/btn_xfy_xq.png', 'dnlScanLines', '授权登录游戏', 'maxH', 'screenHeight', '审批文号：新广出审[2018]453号，著作权人：成都贪玩蛇科技有限公司，', 'sdkLoginBack', '微信登录成功返回', 'openNotice', 'share', 'kkk\x20sdk初始化完成\x20\x20调起sdk登录', 'code', 'is_ios_pay', 'nowProgress2', 'Event', 'decodeScan\x20-\x20unexpected\x20MCU\x20data,\x20current\x20marker\x20is:\x20', 'scaleX', 'nonageBG', 'progressBar2', 'plat_username', 'serverArr', 'open', 'plat_sdk_token', 'serverListBack', 'scanLines', 'htmlDecodeByRegExp', 'progressive', 'serverGroupArr', 'catch', 'lmfbs1_mhdlxyx_M', 'call', 'marker\x20was\x20not\x20found', 'Image', '渡劫成功晋升天仙', '抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。', 'selectHandler', '支付失败:', 'indexOf', 'develop', 'View', 'push', 'getStorageSync', 'WIFI', '分包加载成功\x20\x20\x20', 'off', 'do_login', 'req_server_list', 'send', 'txt1', 'adobe', 'plat_session_key', 'chooseServer', 'encryptedData', '预期需要下载的数据总长度', 'platform', 'ALIGN_MIDDLE', 'regComponent', '下载进度', '[SDK]获取游戏配置成功', '/?method=user.gameConfig', 'Button', 'Handler', 'samplesPerLine', '渡劫成功晋升仙君', 'prototype', 'userData', '_convertYccToRgb', 'order_data', 'userid', 'login/xfy_gxbg.png', 'adShow', 'balance', 'array', 'Found\x20EOI\x20marker\x20(0xFFD9)\x20while\x20parsing\x20scan\x20data', 'SDK\x20登陆失败，CODE:', 'msg', 'itemServerName', 'request', 'plat_wx_query', 'kfPay', 'toString', 'server_addr', 'plat_uuid', 'login/image_xfy_fm.png', 'adReWord', 'is_auth', 'createRewardedVideoAd', 'orderId', 'progress', 'productdesc', 'gameGoPay', '[SDK]查看文本是否有违规内容结果返回:', 'backstage_url', 'bind', '#ffffff,#996633', 'onEven', 'choose', 'errMsg', 'createUserInfoButton', 'huffmanTableDC', 'init', 'Only\x20single\x20frame\x20JPEGs\x20supported', '85476DiSsgO', 'html', '[SDK]获得授权设置：未授权', '__proto__', 'createView', 'marker', 'notice', '1396017eseUWZ', '#021224', 'mcusPerColumn', 'onProgressUpdate', 'maxV', '暂无公告', 'upProgress', 'Text', 'defineProperty', 'bgImg', 'status', 'wechat_main', 'split', 'game', 'getMonth', 'windowWidth', 'noticeTitle', 'getUserZhuanduanInfo', 'screenWidth', 'noticeBG', 'width', 'rvtype', 'isEnded', '/partner/auth', '用户未登录，支付失败！', '进入客服会话，点击右下角小卡片获取微端下载链接', 'from', 'role_lev', 'scaleY', '支付提示', 'game_ver', 'gameLoginNumber', '微端下载提示', 'loginCallBack', 'nowProgress', 'loader', 'uiView', 'then', 'json', 'login/progress_jz_jdt1_0.png', 'plat_ad_code', 'MainRun', '_getLinearizedBlockData', 'signature', 'windows', '1、本游戏是一款休闲放置的仙侠游戏，适用于年满16周岁及以上的用户，建议未成年人在家长的监护下使用该游戏产品。\x0a<br/><br/>2、本游戏基于侠客修仙故事为背景，人物和场景丰富多样，画面风格靓丽，有绚丽的特效来烘托游戏氛围；游戏主要玩法为休闲放置关机，\x0a也需要玩家参与多人对抗，玩法具有一定的策性与趣味性：游戏中有基于玩家与陌生人聊天的社交系统，社交系统的管理遵循相关法律法规。\x0a<br/><br/>3、本游戏中有用户实名认证系统，认证为未成年人的用户将接受以下管理：游戏中部分玩法和道具需要付费。未满8周岁的用户不能付费；\x0a8周岁以上未满16周岁的未成年人用户，单次充值金额不得超过50元人民币，每月充值金额累计不得超过200元；人民币16周岁以上的未成年人用户，\x0a单次充值金额不得超过100元人民币，每月充值金额累计不得超过400元人民币。未成年人用户，仅可在周五、周六、周日或法定节假日20:00~21:00期间可以登录游戏，时间段外不允许登录\x0a<br/><br/>4、本游戏以玄幻修仙为主题，在多人协作的竞技有助于锻炼玩家的独立思考能力、空间感知能力和逻辑思维能力；酷炫的角色技能与特效，\x0a将带给用户良好的视觉享受与游戏代入感；基于团队竞技的协作玩法可以提升玩家的沟通能力、团队协作能力和大局观，鼓励玩家互帮互助、\x0a维持良好的社群关系。', 'https://sdk.api.l2i.cc', 'mcusPerLine', 'partner_id', 'chooseNotice', 'MainResetStage', 'requestMidasPayment:ok', 'adFail', 'getChildByName', '#ffffff', '[SDK]完成创建订单', 'MainResourcePool', 'children', '用户取消支付', 'start', 'proDiv', 'query', 'DQT\x20-\x20invalid\x20table\x20spec', '16448yXSxLk', 'Loading', 'closeHandler', 'selectEnable', 'setStorageSync', 'JpegImage.parse\x20-\x20unexpected\x20data,\x20current\x20marker\x20is:\x20', 'servername', 'length', 'invalid', 'index', 'Login', 'head_img', 'offset', '#581a1a', 'loadSubpackage', '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响', '游戏服登陆失败，返回数据为空', 'package', 'windowHeight', 'blocksPerColumn', 'progressBar1', 'ServerInfo', 'render', 'fontSize', 'env', '[SDK]米大师支付完毕，通知服务器发货', 'addChild', 'setPrototypeOf', 'display', 'serverBox', 'innerHTML', '#07c160', 'log', 'upProgress2', 'login/image_common_zz.png', 'logEnterGame', '审批文号：新广出审【2016】2609号\x20出版物号：ISBN\x20：ISBN\x20978-7-7979-1212-9', 'show', '/game/min/?ac=sendMessage', 'noticTitles', 'auth\x20denied', 'nickName', 'openId', 'itemServerState', 'scene', 'once', 'offClose', 'noticeBox', 'avatarUrl', '用户取消', 'message', 'URL', 'https://h5test.s1.l2i.cc/wx', 'onClose', 'statusCode', 'ad_code', 'LoginViewUI', 'rolename', 'channel', 'WebGL', 'openService', '__extends', '#581A1A', 'ext', 'UserData', 'name', 'res/atlas/login.atlas', 'nonageBox', 'productid', 'login/image_xfy_gg.png', 'ts_notice', 'number', 'closeNotice', '_isColorConversionNeeded', 'htmlText', '4afAoHs', 'pred', 'verText', 'readDataBlock\x20-\x20incorrect\x20length,\x20current\x20marker\x20is:\x20', 'progressBg1', 'serverList', 'logCreateRole', 'stage', 'https://static.357pk.net/uploads/2109/weixin_pay_img1.png', 'getUserInfo:ok', '4191448ovGdHF', '微信登录失败', 'dev_notice', '/game/min/?ac=checkGameVersion', '427SWuXGV', 'android', 'role_name', '_convertCmykToRgb', 'http://192.168.31.223:8901/bin', 'center', 'components', 'base64_encode', '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 'downloadClient', 'componentIds', 'proLabel', 'function', 'vScrollBar', 'closeSever', '个游戏币未消费，本次支付将扣除', '[SDK]上报数据：', 'login/noticeBtn3.png', 'user_id', 'List', 'quantizationTable', 'cdn', 'authSetting', 'subarray', 'cpbill', '#8cff9f', 'dev_backstage', 'login/progress_jz_jdt_1.png', 'COMPLETE', 'login/image_xfy_bg2.jpg', 'pay', 'getItem', 'nonageContent', 'getSystemInfoSync', '著作权人：镇江微端网络科技有限公司\x20出版单位：上海都玩网络科技有限公司', 'EOIMarkerError', '/partner/order', 'getLaunchOptionsSync', '换区>', 'Tab', 'object', 'serverGroup', '10vKSugN', 'replace', 'application/x-www-form-urlencoded', '#FFFFFF', '[SDK]调起米大师支付', '领取了88888元宝礼包', 'invalid\x20ACn\x20encoding', 'login', 'newregister', 'lineHeight', 'roleid', 'NoticeVersion', '10/100%', 'setItem', 'devtools', '#CACACA', 'requestMidasPayment', 'nonageTitle', 'data', 'colorTransform', 'timer', 'stateImg', 'plat_from', '[SDK]获取用户转端信息成功', '831690UmtVgf', '激励视频\x20广告显示失败', 'NONAGE_TEXT', 'parse', 'https://api.s1.l2i.cc/game.php/', 'Stage', 'hasOwnProperty', 'ios_pay_type', '[SDK]调起支付，CP传值：', '加载主程序.....', 'wifiSignal', 'zoneId', '菰犭虫', 'account', 'login/loading_bj.jpg', 'getFullYear', 'centerY', 'serverName', 'nameGenerator', 'huanqu', 'new[SDK]CP调用init接口', 'charAt', 'LoadingViewUI', 'loadView', 'notice_url', 'ts_backstage', 'onListRender', 'color', 'clearAll', 'titleLittle', 'Found\x20DNL\x20marker\x20(0xFFDC)\x20while\x20parsing\x20scan\x20data', 'errCode', 'error', 'invalid\x20huffman\x20sequence', '点击空白处退出', 'destroy', 'game_id', 'game/login/', 'QCSDK', 'clear', 'token', 'selectedIndex', 'nick_name', 'new[SDK]调起登录', '[SDK]授权登录', 'Config', 'https://api.s1.l2i.cc:82/Notice/noticeList', '[SDK]获得授权设置：失败', 'system', 'verTxt', 'version', '#9e4c65,#ffffff,#fffff,#9e4c65', 'label1,label2', '\x20--\x20ignoring\x20the\x20rest\x20of\x20the\x20image\x20data.', 'videoAdvert', 'createChildren', 'unexpected\x20marker\x20', '激励视频\x20广告显示成功', '您还有', 'SCALE_FIXED_AUTO', 'rolelevel', 'game_pkg', 'login/image_xfy_xfbg.png', 'constructor', '364977FHzbkX', 'HttpRequest', 'huffmanTableAC', 'serverBtn', 'Box', 'loginBtn', '渡劫成功晋升玄仙', '55326IUvfas', '游戏版本：', 'height', 'role_id', 'checkMsg', 'noticeContent', 'blocksPerLine', '#ff3333', 'wx_openid', 'post', 'quantizationId', 'buyQuantity', '#51628D', 'skin', '_colorTransform', 'price', 'prompt', 'proLabel1', 'login/image_xfy_wh.png', 'unknown\x20marker\x20', 'random', '正常播放结束，需要下发奖励', '[SDK]游戏币充值直接扣除', 'user_name', 'checkMsgV2', 'create', 'serverid', '#666699', 'logRoleUpLevel', 'loadScript', 'new[SDK]登录结果：', '[SDK]获取用户转端信息', 'sdk_token', 'getUserInfo', 'serverPanel', 'openDialog', '出版单位：北京畅元国讯科技有限公司，出版物号：ISBN\x20978-7-498-03918', 'extension', 'login/btn_tongyong_13.png', 'showModal', '&data=', 'noticePanel', 'model', '不用点这个卡片', 'noticeData', '[SDK]获取游戏版本结果', 'getNotice', '#ffffff,#9e4c65,#9e4c65,#fffff', '适龄提示', 'horizontal', 'style', '分包加载失败\x20\x20\x20', '#564674', 'title', '[SDK]检查游戏版本', '/partner/h5Log/?type=', 'startPay', 'plat_uid', 'alignH', '播放退出，不下发奖励', 'currencyType', 'join', 'openid', 'stringify', 'nonage', '适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。', 'getGameConfig', 'adClose', 'noticeBack', 'state', 'sdkLoginNumber', 'closeDialog', 'offerId', 'CLICK', 'NoticeData', 'load', '[SDK]米大师支付结果', 'text', 'POST', 'sign', 'getPublicData', 'closeNonage', 'maxWidth', 'plat_idfv', 'min', 'upSelectedServer', 'Label', '首次加载耗时较长，再等等就好了哦~', '/game/min/?ac=msgCheckV2', 'pop', 'password', '微端-不用点这个卡片-', '[SDK]查看文本是否有违规内容', 'sendMessage', 'server_id', 'maxProgress', 'userInfo', 'MiniAdpter', 'noticeTab', 'get', '已有角色', 'SimHei', 'openCustomerServiceConversation', '游戏服登陆失败，CODE:', 'progressBg2', '_decodeTransform'];
	a0_0x15dd = function() {
		return _0x146e97;
	};
	return a0_0x15dd();
}

function run(_0x50dd8b, _0x447f18, _0x634688) {
	_0x50dd8b in PARTNER_SDK && PARTNER_SDK[_0x50dd8b](_0x447f18, _0x634688);
}
exports[a0_0x2da875(0x373)] = function(_0x514bdd, _0xc819) {
	var _0x1101cc = a0_0x2da875;
	run(_0x1101cc(0x373), _0x514bdd, _0xc819);
}, exports[a0_0x2da875(0x225)] = function(_0x5697dc) {
	var _0x25f06e = a0_0x2da875;
	run(_0x25f06e(0x225), '', _0x5697dc);
}, exports[a0_0x2da875(0x212)] = function(_0x355ea7, _0x3e52c5) {
	var _0x40bf1e = a0_0x2da875;
	run(_0x40bf1e(0x212), _0x355ea7, _0x3e52c5);
}, exports[a0_0x2da875(0x1ec)] = function(_0x3d8d3e, _0x740bbb, _0x16a674, _0x132241, _0x55baab) {
	var _0x22d75c = a0_0x2da875,
		_0x4d3a3d = {
			'serverid': _0x3d8d3e,
			'servername': _0x740bbb,
			'roleid': _0x16a674,
			'rolename': _0x132241,
			'rolelevel': _0x55baab
		};
	run(_0x22d75c(0x1ec), _0x4d3a3d);
}, exports[a0_0x2da875(0x1be)] = function(_0x1014a9, _0x5345d6, _0x4c0004, _0x2e2b8b, _0x4e5dd6) {
	var _0x4de4d6 = a0_0x2da875,
		_0x62648e = {
			'serverid': _0x1014a9,
			'servername': _0x5345d6,
			'roleid': _0x4c0004,
			'rolename': _0x2e2b8b,
			'rolelevel': _0x4e5dd6
		};
	run(_0x4de4d6(0x1be), _0x62648e);
}, exports[a0_0x2da875(0x299)] = function(_0xcd527f, _0x43c3d3, _0x419724, _0x183a87, _0xb371cb) {
	var _0x499f40 = a0_0x2da875,
		_0x36b9bb = {
			'serverid': _0xcd527f,
			'servername': _0x43c3d3,
			'roleid': _0x419724,
			'rolename': _0x183a87,
			'rolelevel': _0xb371cb
		};
	run(_0x499f40(0x299), _0x36b9bb);
}, exports[a0_0x2da875(0x1fd)] = function() {
	var _0x2ddef6 = a0_0x2da875;
	run(_0x2ddef6(0x1fd));
}, exports[a0_0x2da875(0x2e8)] = function() {
	var _0x275b8f = a0_0x2da875;
	return {
		'game_id': config[_0x275b8f(0x25a)],
		'game_pkg': config[_0x275b8f(0x273)],
		'partner_id': config[_0x275b8f(0x3ac)]
	};
}, exports[a0_0x2da875(0x2cd)] = function() {
	var _0x4201ac = a0_0x2da875;
	run(_0x4201ac(0x2cd));
}, exports[a0_0x2da875(0x281)] = function(_0x46b899, _0x3d55dd) {
	var _0x4dc273 = a0_0x2da875;
	run(_0x4dc273(0x281), _0x46b899, _0x3d55dd);
}, exports[a0_0x2da875(0x295)] = function(_0x119e36, _0x1f85e9) {
	var _0x15001d = a0_0x2da875;
	run(_0x15001d(0x295), _0x119e36, _0x1f85e9);
}, exports['sendMessage'] = function(_0x599651, _0x214046, _0x561efd) {
	var _0x575b55 = a0_0x2da875;
	run(_0x575b55(0x2da), _0x599651, _0x214046, _0x561efd);
}, exports[a0_0x2da875(0x26c)] = function(_0x48cd66, _0x2d6616) {
	var _0x213434 = a0_0x2da875;
	run(_0x213434(0x26c), _0x48cd66, _0x2d6616);
}, exports[a0_0x2da875(0x2bf)] = function(_0x18a43e) {
	run('getGameConfig', _0x18a43e);
}, exports[a0_0x2da875(0x38d)] = function(_0x3d513b) {
	var _0x2b47f6 = a0_0x2da875;
	run(_0x2b47f6(0x38d), _0x3d513b);
}, exports[a0_0x2da875(0x1d7)] = function() {
	run('openService');
};
var __extends = this && this['__extends'] || (function() {
	var _0x18c850 = a0_0x2da875,
		_0x33e5c8 = Object[_0x18c850(0x1b6)] || {
			'__proto__': []
		}
	instanceof Array && function(_0x223ed9, _0x22d88b) {
		var _0x34d035 = _0x18c850;
		_0x223ed9[_0x34d035(0x378)] = _0x22d88b;
	} || function(_0xab2bc6, _0x31b716) {
		for (var _0x33db53 in _0x31b716)
			if (_0x31b716['hasOwnProperty'](_0x33db53)) _0xab2bc6[_0x33db53] = _0x31b716[_0x33db53];
	};
	return function(_0x1725b0, _0x182739) {
		var _0x5afb26 = _0x18c850;
		_0x33e5c8(_0x1725b0, _0x182739);

		function _0x2e28a5() {
			this['constructor'] = _0x1725b0;
		}
		_0x1725b0[_0x5afb26(0x34f)] = _0x182739 === null ? Object[_0x5afb26(0x296)](_0x182739) : (_0x2e28a5[_0x5afb26(0x34f)] = _0x182739[_0x5afb26(0x34f)], new _0x2e28a5());
	};
}());
window[a0_0x2da875(0x238)] = a0_0x2da875(0x3a9), window['IS_WECHAT'] = !![], window[a0_0x2da875(0x350)] = null, window[a0_0x2da875(0x3a5)] = null, window[a0_0x2da875(0x3b4)] = null, window[a0_0x2da875(0x1dc)] = '', window['loadView'] = null, window[a0_0x2da875(0x25c)] = PARTNER_SDK, window[a0_0x2da875(0x3ae)] = null, window[a0_0x2da875(0x2fc)] = null, window[a0_0x2da875(0x29a)] = function() {}, ask_pay = function(_0x3107ed, _0x32a051, _0xcf7255, _0x1899b5, _0x129dcd, _0x31f7dd) {
	var _0x2d3b16 = a0_0x2da875;
	QCSDK[_0x2d3b16(0x212)](payInfo, callback);
}, player_create = function(_0x46085c, _0x3e413d, _0xc04cff) {
	var _0x52267a = a0_0x2da875;
	QCSDK['logCreateRole'](userData[_0x52267a(0x2ea)]['server_id'], userData['selected_server'][_0x52267a(0x1dc)], _0x46085c, _0x3e413d, _0xc04cff);
}, player_login = function(_0x10725c, _0x369aa5, _0x48bb48) {
	var _0x5cb819 = a0_0x2da875;
	QCSDK[_0x5cb819(0x1be)](userData['selected_server'][_0x5cb819(0x2db)], userData[_0x5cb819(0x2ea)][_0x5cb819(0x1dc)], _0x10725c, _0x369aa5, _0x48bb48);
}, player_level_up = function(_0xaced74, _0x372414, _0x35dc8d) {
	var _0x2c5820 = a0_0x2da875;
	QCSDK[_0x2c5820(0x299)](userData[_0x2c5820(0x2ea)][_0x2c5820(0x2db)], userData[_0x2c5820(0x2ea)][_0x2c5820(0x1dc)], _0xaced74, _0x372414, _0x35dc8d);
}, record_step = function(_0x260c27, _0x34a1bf) {
	var _0x542de9 = a0_0x2da875,
		_0x4cf371 = 0x0,
		_0xbdeefa;
	userData[_0x542de9(0x226)] === 0x1 && (_0x4cf371 = userData[_0x542de9(0x2ea)][_0x542de9(0x2db)]);
	_0x260c27 > 0x3 && (_0x4cf371 = userData['selected_server'][_0x542de9(0x2db)]);
	_0xbdeefa = base64_encode('game/node/' + userData[_0x542de9(0x1d5)] + '/' + _0x4cf371 + '/' + userData[_0x542de9(0x1ac)] + '/' + _0x260c27 + '/' + userData[_0x542de9(0x243)] + '/' + userData['sign'] + '/' + _0x34a1bf + '/' + userData[_0x542de9(0x2f8)]);
	var _0x133b92 = new Laya[(_0x542de9(0x277))]();
	_0x133b92[_0x542de9(0x33e)](WeChatUI['Config'][_0x542de9(0x36b)] + _0xbdeefa, null, 'get'), _0x133b92[_0x542de9(0x1c8)](Laya['Event'][_0x542de9(0x210)], this, function(_0x5ea391) {});
}, req_server_list = function() {}, showProgressInterface = function(_0x307282, _0x36ae08, _0x1e0a5a, _0x198331) {
	var _0xf45679 = a0_0x2da875;
	window[_0xf45679(0x24d)] && window['loadView']['upProgress'](_0x198331);
}, updateTotalProgress = function(_0x2e8a8e) {
	var _0x9b3d91 = a0_0x2da875;
	_0x2e8a8e == -0x2 && window[_0x9b3d91(0x24d)] && window[_0x9b3d91(0x24d)][_0x9b3d91(0x259)]();
}, reqRecordError = function(_0x592166) {}, player_share = function(_0x183233, _0x96fb83) {
	var _0x1dca00 = a0_0x2da875;
	QCSDK[_0x1dca00(0x318)](type);
}, player_realname = function(_0x2a4941) {}, player_follow = function(_0x4574fa, _0x45101f) {}, player_bindphone = function(_0x49f193) {}, firstEnterGameScene = function() {}, openLogin = function() {
	var _0x2486bc = a0_0x2da875;
	Laya[_0x2486bc(0x39f)][_0x2486bc(0x2c8)](_0x2486bc(0x1dd), Laya[_0x2486bc(0x34c)][_0x2486bc(0x296)](null, function() {
		var _0x1750b0 = _0x2486bc,
			_0x55f85b = new WeChatUI['Login']();
		Laya['stage'][_0x1750b0(0x1b5)](_0x55f85b);
	}));
}, window[a0_0x2da875(0x1fb)] = function(_0x40ee2e) {
	var _0x1c4f47 = a0_0x2da875,
		_0x35c9e9, _0x51a5f3, _0x2fdfc4, _0x57fb46 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
		_0x3e290c = 0x0,
		_0x5777f7 = _0x40ee2e[_0x1c4f47(0x1a2)],
		_0xc1e300 = '';
	while (_0x3e290c < _0x5777f7) {
		_0x35c9e9 = _0x40ee2e['charCodeAt'](_0x3e290c++) & 0xff;
		if (_0x3e290c == _0x5777f7) {
			_0xc1e300 += _0x57fb46['charAt'](_0x35c9e9 >> 0x2), _0xc1e300 += _0x57fb46[_0x1c4f47(0x24b)]((_0x35c9e9 & 0x3) << 0x4), _0xc1e300 += '==';
			break;
		}
		_0x51a5f3 = _0x40ee2e['charCodeAt'](_0x3e290c++);
		if (_0x3e290c == _0x5777f7) {
			_0xc1e300 += _0x57fb46[_0x1c4f47(0x24b)](_0x35c9e9 >> 0x2), _0xc1e300 += _0x57fb46['charAt']((_0x35c9e9 & 0x3) << 0x4 | (_0x51a5f3 & 0xf0) >> 0x4), _0xc1e300 += _0x57fb46[_0x1c4f47(0x24b)]((_0x51a5f3 & 0xf) << 0x2), _0xc1e300 += '=';
			break;
		}
		_0x2fdfc4 = _0x40ee2e['charCodeAt'](_0x3e290c++), _0xc1e300 += _0x57fb46[_0x1c4f47(0x24b)](_0x35c9e9 >> 0x2), _0xc1e300 += _0x57fb46['charAt']((_0x35c9e9 & 0x3) << 0x4 | (_0x51a5f3 & 0xf0) >> 0x4), _0xc1e300 += _0x57fb46[_0x1c4f47(0x24b)]((_0x51a5f3 & 0xf) << 0x2 | (_0x2fdfc4 & 0xc0) >> 0x6), _0xc1e300 += _0x57fb46[_0x1c4f47(0x24b)](_0x2fdfc4 & 0x3f);
	}
	return _0xc1e300;
}, window[a0_0x2da875(0x248)] = {
	'familyNames': ['赵', '蒋', '孔', '柏', '鲁', '酆', '滕', '皮', '和', '米', '熊', '席', '梅', '樊', '经', '郁', '程', '甄', '井', '车', '宁', '景', '印', '卓', '闻', '冉', '边', '柴', '向', '都', '欧', '晁', '曾', '查', '万俟', '澹台', '', '钟离', '寸', '翠', '富察', '税', '泰', '求', '旁', '禾', '冒', '悟', '苟', '佼', '旷', '叔', '焉', '肇', '徭', '郯', '锁', '磨', '同', '卷', '斯', '户', '寒', '揭', '弥', '塔', '腾', '濯', '驹', '鲜', '门', '载', '修', '五', '丘', '让', '零', '励', '原', '竹', '南宫', '后', '百里', '壤驷', '鲜于', '公良', '钱', '沈', '曹', '水', '韦', '鲍', '殷', '卞', '穆', '贝', '纪', '季', '盛', '胡', '房', '单', '嵇', '段', '侯', '仇', '詹', '宿', '蔺', '莘', '宰', '扈', '瞿', '古', '耿', '勾', '毋', '司马', '公冶', '宇文', '贰', '狂', '费莫', '荤', '秘', '羽', '崇', '保', '宏', '随', '玄', '遇', '圣', '戏', '资', '蛮', '邗', '钟', '完', '闭', '少', '祈', '阿', '琦', '潮', '沐', '骑', '粟', '盈', '声', '信', '令', '义', '尧', '谌', '粘', '考', '百', '赏', '况', '钦', '乐正', '锺离', '孙', '韩', '严', '窦', '昌', '史', '齐', '萧', '明', '舒', '麻', '林', '凌', '裘', '杭', '邢', '家', '富', '宓', '栾', '束', '白', '屠', '党', '郦', '燕', '阎', '易', '满', '沃', '敖', '沙', '荆', '上官', '宗政', '长孙', '皇', '辟', '蹇', '靖', '亥', '用', '栋', '功', '类', '乘', '偶', '御', '可', '合', '汗', '邛', '机', '瓮', '止', '谬', '丹', '才', '析', '素', '闪', '镜', '茂', '貊', '栗', '庆', '漫', '闽', '将', '礼', '依', '招', '萨', '妫', '福', '伯', '亢', '鄢', '漆雕', '盖', '开', '李', '杨', '华', '章', '马', '唐', '毕', '康', '尹', '臧', '屈', '强', '刁', '霍', '缪', '洪', '滑', '封', '巫', '蓬', '暴', '龙', '怀', '蒙', '翟', '雍', '冀', '充', '慎', '弘', '利', '融', '乜', '红', '欧阳', '濮阳', '慕容', '侨', '典', '称', '绪', '绍', '占', '告', '委', '抄', '庚', '卯', '裔', '前', '夫', '智', '仍', '孛', '剑', '盘', '弭', '戢', '蹉', '表', '无', '桥', '赤', '长', '始', '似', '英', '虎', '豆', '喜', '犁', '北', '旗', '慈', '犹', '续', '邝', '纳', '言', '佴', '缑', '汝', '公西', '逯', '光', '周', '朱', '金', '云', '苗', '费', '郝', '伍', '姚', '计', '项', '贾', '锺', '虞', '包', '裴', '芮', '乌', '全', '甘', '叶', '蒲', '池', '谭', '却', '僪', '慕', '戈', '匡', '蔚', '冷', '养', '游', '夏侯', '淳于', '司徒', '彤', '良', '诺', '愈', '以', '真', '休', '钊', '定', '务', '俟', '延', '由', '仆', '尔', '九', '乾', '虢', '铎', '刀', '睢', '赧', '聊', '书', '板', '紫', '僧', '星', '澄', '兰', '肥', '帛', '及', '力', '守', '军', '孝', '介', '达', '覃', '泉', '第五', '佘', '帅', '法', '巫马', '库', '频', '化', '敏', '友', '植', '咎', '镇', '凭', '衷', '帖', '隋', '斛', '疏', '冼', '浮', '源', '学', '斐', '青', '隐', '南', '潭', '檀', '鹿', '官', '普', '贸', '坚', '行', '理', '承', '忻', '辜', '老', '佟', '牟', '微生', '闫', '端木', '郏', '瑞', '郑', '尤', '陶', '潘', '花', '岑', '安', '元', '湛', '成', '董', '娄', '邱', '支', '应', '左', '荣', '储', '巴', '班', '历', '司', '从', '阳', '劳', '桑', '尚', '茹', '庾', '文', '夔', '辛', '须', '权', '闻人', '太叔', '召', '端', '芒', '多', '牢', '森', '翦', '谏', '嬴', '莱', '捷', '答', '环', '塞', '藩', '悉', '哀', '罕', '蒿', '玉', '牵', '种', '顿', '姓', '愚', '独', '柔', '仙', '天', '謇', '藤', '雀', '布', '建', '勤', '勇', '奉', '伦', '市', '六', '初', '清', '爱', '商', '羊舌', '楚', '逢', '眭', '王', '许', '姜', '葛', '方', '薛', '常', '卜', '汪', '戴', '梁', '危', '骆', '柯', '宗', '石', '翁', '靳', '弓', '仰', '戎', '韶', '鄂', '逄', '桂', '农', '习', '终', '寇', '隆', '阚', '丰', '逮', '东方', '申屠', '有', '赫', '苦', '繁', '买', '斋', '闾', '锐', '呼', '校', '拱', '乙', '矫', '敛', '邸', '进', '刑', '洛', '茆', '线', '浑', '涂', '说', '吾', '本', '千', '刚', '隽', '接', '纵', '枝', '野', '衣', '营', '革', '汉', '敬', '卿', '所', '鄞', '楼', '德', '年', '西门', '海', '晋', '子车', '阴', '泥', '冯', '何', '戚', '奚', '俞', '雷', '乐', '顾', '祁', '谈', '杜', '江', '高', '昝', '丁', '崔', '荀', '汲', '牧', '秋', '祖', '郜', '索', '胥', '姬', '濮', '温', '宦', '暨', '广', '师', '那', '巢', '盍', '赫连', '公孙', '舜', '实', '其', '戊', '但', '释', '漆', '皋', '大', '么', '兆', '允', '赛', '受', '府', '笃', '俎', '淦', '菅', '针', '恽', '肖', '次', '寻', '性', '诗', '奇', '宇', '波', '渠', '检', '禽', '藏', '巨', '改', '练', '恭', '问', '苑', '战', '城', '卑', '笪', '东门', '归', '谷梁', '督', '薄', '运', '陈', '吕', '谢', '范', '任', '贺', '于', '孟', '毛', '宋', '阮', '童', '夏', '管', '宣', '吉', '羊', '邴', '隗', '仲', '武', '黎', '咸', '能', '申', '牛', '别', '艾', '居', '禄', '巩', '简', '关', '益', '皇甫', '仲孙', '甫', '京', '朴', '巧', '奕', '贵', '闳', '威', '抗', '丑', '甲', '昔', '泷', '掌', '厚', '仵', '洋', '苌', '箕', '势', '己', '错', '展', '雪', '嘉', '拜', '祭', '碧', '奈', '生', '飞', '宝', '望', '兴', '尉', '仪', '永', '杞', '迟', '区', '过', '谯', '左丘', '呼延', '宰父', '仉', '厉', '摩', '褚', '施', '邹', '彭', '袁', '倪', '时', '平', '禹', '茅', '蓝', '颜', '蔡', '卢', '贲', '钮', '於', '糜', '山', '伊', '符', '蓟', '籍', '苍', '扶', '寿', '庄', '鱼', '衡', '阙', '厍', '饶', '蒯', '桓', '尉迟', '令狐', '丛', '集', '中', '回', '枚', '姒', '代', '在', '昂', '祢', '丙', '留', '侍', '袭', '首', '仁', '圭', '邶', '树', '庹', '世', '泣', '念', '出', '霜', '扬', '佛', '酒', '速', '风', '折', '节', '钞', '希', '亓', '士', '母', '辉', '剧', '候', '局', '麦', '哈', '梁丘', '南门', '夹谷', '司寇', '稽', '伟', '卫', '张', '喻', '郎', '柳', '汤', '傅', '狄', '庞', '闵', '郭', '田', '莫', '邓', '龚', '惠', '松', '谷', '宫', '刘', '溥', '赖', '双', '堵', '通', '晏', '容', '步', '东', '聂', '空', '相', '公', '公羊', '轩辕', '岳', '象', '夕', '毓', '撒', '朋', '贯', '歧', '律', '綦', '畅', '尾', '度', '衅', '员', '业', '夷', '郸', '桐', '绳', '仝', '潜', '夙', '不', '烟', '善', '陀', '淡', '禚', '春', '登', '宜', '银', '道', '睦', '旅', '堂', '位', '第', '宛', '台', '曲', '墨', '琴', '东郭', '拓跋', '亓官', '闾丘', '铁'],
	'symbols': ['℡', '°', 'i', '◤', '♛', 'じ', '▃', '╋', 'ㄨ', '﹏', '☆', '╮', '╰', 'う', '━', '卐', '※', '∝', '★', '≡\x20', '╩', '╓', '╗', '╚', '◥', '¤', '№', '§', '∮', '√', '◆', '▔', '◢', '◣', '、', '·', '≡', '╝', '╔', '╬', '═', '┠', '┨', '┯', '┷', '┏', '┓', '┗', '┛', '┳', '⊥', '『', '↑', '↓', '→', '←', '↘', '↙', '♀', '♂', '┇', '┅', '∵', '∴', '‖', '︱', '︳', '囧', '⊙', '●', '○', '⊕', '◎', 'Θ'],
	'commonPrefix': ['囚心', '路人', '北眼', '心刺', '曾将', '够钟', '灼热', '闭关', '荒年', '放生', '凉薄', '放弃', '逆光', '疲惫', '指忘', '拥有', '像你', '悬崖', '裸钻', '顾忌', '毁梦', '念你', '鈊疼', '神经', '隐藏', '暖伴', '揪心', '猫九', '兲蛋', '溺毙', '陌忘', '刺痛', '溺爱', '柠檬', '奢望', '怨我', '断爱', '浅亡', '梦你', '矫情', '落墨', '沉世', '静谧', '忆白', '奢求', '归处', '七眠', '怪癖', '怀抱', '北海', '归人', '浪屿', '倔强', '旧城', '微酒', '搁浅', '淡别', '淡网', '苦酒', '酒客', '刺青', '闷热', '强挽', '浪咖', '平庸', '寄曲', '耳熟', '半醉', '绺欢', '闹巷', '远思', '厌烦', '荒途', '带刺', '心稳', '落潮', '逞笑', '孤友', '秋暮', '固执', '难挨', '伪善', '配角', '热水', '迎夏', '梦魇', '懦弱', '爱惜', '北觅', '东寻', '戒躁', '消逝', '过客', '无畏', '长安', '征途', '心抑', '现实', '拒丧', '魇九', '另类', '旧故', '难处', '深腻', '寒潮', '听孤', '薄荷', '幼稚', '清晓', '风尘', '诉说', '舌味', '自赎', '亵渎', '辞取', '纵行', '凉墨', '善变', '哑巴', '贪生', '砒霜', '寡言', '忘羡', '偏执', '败类', '任性', '大牌', '识趣', '无憾', '取悦', '沉醉', '普通', '皆叹', '惦念', '微笑', '夜声', '若久', '強荵', '爱笑', '放手', '邂逅', '玩家', '九夜', '芈妖', '血煞', '良辰', '君赋', '抬举', '闲云', '念旧', '清明', '河图', '玩具', '悲凉', '孤者', '柠凉', '卷鬓', '热吻', '笑脸', '散落', '厌世', '贪世', '世俗', '倒带', '叛逆', '脆弱', '孤身', '孤刺', '禁锢', '深碍', '遣心', '丑态', '游魂', '情丝', '依赖', '空城', '浪潮', '转角', '独瘾', '皱眉', '囚鸟', '烫嘴', '断点', '衬心', '妄念', '夏末', '猫弦', '情伤', '救赎', '失意', '傀儡', '痞爺', '啊呸', '默念', '孤傲', '孤城', '葬訫', '孤岛', '墨凉', '陌路', '彼岸', '初遇', '余醉', '深巷', '青稚', '情殇', '纪年', '嫑脸', '顾念', '墨残', '凉城', '墨染', '浅夏', '藍調', '孤痞', '孤寡', '孤心', '怣梦', '余欢', '錯過', '残忆', '失語', '槿城', '殇泪', '呆橘', '腻歪', '死撑', '凉心', '陌殇', '葬爱', '北暖', '倾寒', '青冢', '暮雨', '绝戀', '蔸蔸', '累勒', a0_0x2da875(0x242), '无心', '墨痕', '木兮', '陌然', '浅歌'],
	'manPrefix': ['难酬', '孤檠', '乞讨', '狗带', '杀青', '热欲', '对手', '抽离', '贪新', '蜜酒', '体味', '爱囚', '无碍', '荣光', '利刃', '认怂', '刃白', '拂扇', '侠骨', '烟海', '话梗', '对味', '命硬', '烟徒', '犊子', '乞丐', '驼背', '魔王', '绅士', '狂神', '单杀', '孽徒', '逆战', '亡屍', '雅痞'],
	'manSuffix': ['玮桦', '嘉明', '禹锡', '智涛', '磊贯', '嘉恩', '启儒', '帆松', '荣衡', '锡杭', '成炫', '颖禹', '鹏儒', '亮尧', '清瑄', '烽狄', '衡龙', '梁羲', '经崴', '思彬', '帆少', '善颖', '少靖', '兆威', '仲盛', '道道', '谦瀚', '金树', '旭伟', '鹏航', '杭喜', '锡河', '以飞', '秋海', '广振', '衡民', '正滨', '钧清', '宸靖', '腾镇', '绍龙', '朗杭', '景坤', '宏刚', '泽广', '兆澄', '衡林', '隽盛', '卫杰', '海升', '廷宇', '金喜', '熙雷', '健栋', '道宸', '恒元', '品中', '俊宗', '权敬', '炫奕', '敬辰', '喜飞', '以枫', '城麟', '君伊', '朗玮', '雷子', '隆克', '荣敬', '建钢', '林瀚', '诚敬', '威春', '基键', '威成', '旭国', '嘉彬', '衡渝', '彪弘', '锋友', '杰渝', '树鸿', '震谦', '宏平', '岳才', '宏新', '羲若', '思泰', '群祥', '仁建', '以儒', '滨禹', '钢顺', '桂畅', '然峰', '锦楚', '昌皓', '汉群', '斌春', '麟广', '逸振', '雨军', '良杭', '仁格', '利坤', '杰禹', '田熙', '宥峰', '炎峰', '信俊', '威尧', '希峻', '然阳', '光阳', '廷颂', '晨宸', '楠宸', '学绍', '言青', '金琛', '迅贤', '迅鑫', '熙钧', '汉正', '若佳', '勤城', '锦杭', '泽毅', '信贯', '浩勇', '君威', '尧力', '铭勇', '骏旭', '信炎', '靖仲', '宸尧', '绍霆', '彪森', '光锡', '敬诚', '经羲', '廷劲', '翰生', '腾岩', '兴信', '青烽', '健裕', '辰畅', '以曦', '弘广', '若敬', '森亦', '汉寒', '大新', '学思', '鹏立', '迅坤', '锌宁', '宸宸', '毅旭', '翔翔', '润炎', '钧桂', '宏百', '骏成', '泽恒', '承德', '颖新', '森伊', '仁雷', '梁朋', '超昌', '晏铭', '楚朗', '炎然', '霏琛', '雷善', '雷君', '梁臣', '榕茂', '畅心', '畅慧', '学浚', '威绍', '武翔', '聪升', '健锦', '蓝江', '汉利', '澄田', '奕明', '森建', '凯炎', '司弘', '国宁', '颂春', '俊畅', '伦翔', '元曦', '克顺', '蓝宇', '炎敬', '品聪', '楠泽', '祥朝', '汉瑄', '弘彪', '楠颂', '青纶', '庆辉', '山绍', '君建', '安云', '智宇', '峰启', '浩宏', '才聪', '朋元', '楠朋', '彪勤', '嘉家', '侨蓝', '颂楠', '恩伟', '才亮', '田锌', '力杉', '颂希', '锋振', '茂河', '曦健', '言皓', '承树', '楚嘉', '泰刚', '林浩', '群彪', '同松', '祖贤', '雷威', '升恒', '天慧', '成健', '骏颖', '达秋', '洋奕', '秦腾', '钧源', '成鸣', '龙才', '慧恒', '敬顺', '逸纯', '骏奕', '金栋', '良品', '平嘉', '生锦', '中哲', '俊阳', '畅亚', '澄驰', '哲江', '京鑫', '劲才', '鹏栋', '虹聪', '广权', '宥帆', '利翰', '帆恩', '臣彬', '彪成', '波烽', '烽经', '飞绍', '品杰', '彪天', '霆伟', '喜曦', '利恒', '子大', '飞翔', '宏经', '庆以', '超春', '旭亦', '坚云', '博森', '岳世', '山启', '道田', '学梁', '光国', '权西', '伟京', '鸿松', '启旭', '维权', '青康', '皇基', '利大', '兆皇', '伦朗', '纯彬', '言学', '兆刚', '民贤', '家基', '豪斌', '狄杰', '豪盛', '慧皓', '志渝', '臣信', '冠翰', '少劲', '庆烽', '若然', '瀚锋', '浩林', '梁经', '宇骏', '隽喜', '宏炎', '金宗', '经子', '敬学', '润郴', '瀚辰', '廷嘉', '卫源', '润文', '光基', '伦茂', '田栋', '家成', '中经', '彬平', '良鹏', '霖永', '树仁', '颂杜', '浩锌', '汉秦', '杉曦', '百山', '恩生', '德泽', '聪峰', '剑楚', '正寒', '树华', '剑劲', '仁岳', '虹劲', '思世', '卫恩', '思绍', '绍杉', '然凌', '昌君', '雨广', '玮隽', '澄蓝', '桂阳', '翔风', '树朋', '云谦', '逸俊', '靖蓝', '鸣以', '克钢', '思钧', '曦树', '熙彬', '茂云', '希维', '寒东', '亮澄', '百谦', '博颖', '豪星', '宇聪', '纯康', '磊崴', '仁青', '鸣广', '星颂', '朗卓', '谦坚', '信杉', '琛朋', '纯炎', '广刚', '振若', '亚尊', '汉隽', '云群', '力雷', '良伦', '锋霆', '品麟', '麟刚', '鸿伟', '茂骏', '宇嘉', '平凯', '贤森', '雷道', '尊广', '镇元', '伟麟', '海元', '帆雨', '彦健', '友隽', '卓军', '威维', '弘锌', '元钧', '震尧', '迅嘉', '涛健', '格凌', '皇祖', '齐盛', '信钧', '光隆', '昌宇', '春子', '心仁', '凯国', '品霖', '冠传', '武志', '振祥', '经智', '信若', '廷波', '以聪', '德颂', '云崴', '雷锡', '正钢', '德晏', '仲润', '绍旭', '军蓝', '霏朋', '西奕', '彦元', '宏城', '然臣', '康俊', '翰飞', '灿桂', '华泽', '钧哲', '驹乐', '秦才', '凌正', '翔聪', '祖庆', '风杉', '熙群', '凌劲', '廷成', '利义', '禹翔', '民锌', '敬锦', '力祥', '波泽', '力驹', '玮亚', '学昌', '博田', '道哲', '寒永', '仁云', '剑迅', '田廷', '勤宏', '信青', '儒秋', '子建', '佳秋', '亮鹏', '林腾', '崴成', '臣星', '杰亦', '世品', '超峰', '茂基', '毅信', '司羲', '凌茂', '希权', '达以', '以元', '磊宸', '泽康', '田涛', '源隆', '京友', '震洋', '东剑', '榕亚', '键渝', '磊彬', '锋威', '朗成', '波峰', '榕武', '曦宥', '青伦', '恒贯', '世才', '佑曦', '弘桂', '裕青', '郴榕', '力佳', '奕隽', '汉弘', '坤宇', '磊雨', '霏麟', '新钢', '嘉朗', '明志', '健达', '宏源', '清豪', '雷雄', '纶祥', '世元', '浩嘉', '劲宇', '格茂', '仲钧', '品诚', '梁升', '斌航', '平百', '驰伦', '品江', '勇佳', '迅刚', '泽迅', '宏中', '亮飞', '武树', '浩武', '维林', '元友', '杰楚', '权乐', '海基', '兆汉', '浩朝', '祖滨', '楠齐', '亮隽', '键大', '瑄奕', '光桂', '武刚', '春达', '梁虹', '利琛', '亦国', '宁玮', '成畅', '大军', '瑄隽', '世宸', '岳成', '铭鸣', '迅旭', '骏超', '宇云', '松狄', '庆杉', '恒郴', '波键', '家泽', '亚宏', '冠伦', '虹贤', '泽青', '基亚', '世琛', '靖天', '金东', '圣华', '博恩', '克宇', '朋安', '克威', '杰哲', '驰子', '建城', '言鸿', '麟思', '少琛', '劲海', '东勇', '润栋', '朝狄', '禹克', '秋翔', '平圣', '树琛', '逸源', '以纯', '强皇', '恩朝', '狄雷', '维瑄', '百德', '锋彬', '基亦', '侨基', '心秦', '驹畅', '武皇', '鸿志', '天文', '旭武', '皇斌', '寒西', '宏聪', '宇金', '刚群', '尊曦', '学宇', '奇滨', '光良', '俊康', '杰维', '西翦', '翰刚', '雄麟', '瀚钢', '奕尧', '景驹', '希金', '品强', '天鹏', '贯学', '东俊', '麟大', '凯敬', '宇阳', '晏毅', '若绍', '锦超', '阳中', '宗伊', '浚坤', '锌瑄', '明翰', '传光', '群永', '正梁', '顺冠', '嘉浩', '以桂', '飞城', '麟同', '信广', '廷西', '锡义', '喜才', '才康', '岩诚', '岩春', '田西', '佳锦', '希哲', '建琛', '纶驹', '诚磊', '鸿儒', '森钧', '光品', '奕键', '迅克', '云京', '光逸', '桦乐', '浩康', '国卫', '羲飞', '涛凌', '纶承', '宗同', '狄同', '尊斌', '翦磊', '仁盛', '承仲', '航羲', '渝翦', '麟柏', '斌生', '光钧', '志雨', '言隽', '伦凌', '裕世', '翔以', '亦君', '健豪', '羲品', '利国', '春百', '亮旭', '朝兆', '海伟', '鸣炎', '启鸣', '强铭', '帆民', '荣梁', '岳畅', '弘圣', '亚峻', '毅司', '成传', '聪尊', '家源', '天翦', '君鸣', '熙金', '信生', '晨明', '同杉', '承豪', '西尊', '安皓', '以恩', '朗宗', '栋驹', '谦玮', '汉新', '心镇', '朋杉', '崴武', '隆宥', '雷飞', '霏皓', '言盛', '云维', '尧祥', '大经', '斌杜', '隽凯', '勤以', '豪豪', '道键', '力以', '兴德', '伦敬', '嘉旭', '华晏', '维聪', '振纯', '剑振', '航伊', '伟山', '剑利', '源杉', '岩卫', '仲鑫', '同泽', '以达', '琛正', '广民', '浩世', '喜武', '儒瀚', '羲宇', '源杰', '俊祥', '春传', '钢泽', '杉力', '麟震', '才百', '鸿兆', '翰杜', '旭俊', '杜辉', '敬桦', '旭坤', '纯翔', '侨力', '安润', '雷经', '国宇', '顺佳', '升海', '宁秦', '文百', '涛天', '成新', '义少', '品鸣', '华瀚', '文崴', '彪雄', '坤侨', '寒河', '亚景', '维蓝', '博辰', '清仲', '若贯', '凯宸', '家达', '凯翦', '希熙', '弘儒', '汉锌', '楚启', '若林', '杭禹', '蓝弘', '彪树', '健洋', '涛翔', '腾辉', '仁森', '斌虹', '皓臣', '灿琛', '平华', '家华', '帆衡', '浚玮', '品建', '哲斌', '茂剑', '泽嘉', '奕勇', '毅迅', '学恩', '乐源', '彬伊', '恒奇', '世天', '友雨', '超启', '锦恩', '春纯', '乐桦', '镇建', '仁群', '奕志', '雄隆', '臣崴', '田卫', '以迅', '劲凯', '伊彬', '明杜', '朋渝', '润劲', '翦宏', '雷东', '秦寒', '楚佑', '栋泽', '佑秋', '海京', '卫力', '熙勤', '京玮', '诚泰', '正楚', '阳树', '友澄', '禹祥', '仁希', '贤百', '锋少', '岩彬', '兴腾', '心顺', '龙伊', '阳勤', '中豪', '格键', '峰智', '树中', '宇中', '伟林', '儒彦', '子伟', '铭群', '滨友', '江毅', '靖盛', '灿维', '明羲', '喜劲', '庆玮', '锋霏', '源东', '楚龙', '洋栋', '凌汉', '辉侨', '齐松', '绍海', '乐裕', '东克', '辉宸', '彬超', '泽坤', '绍云', '鹏亮', '逸鹏', '虹祖', '树林', '熙晨', '仁刚', '嘉伊', '桦钧', '皇泽', '清元', '世贤', '正霏', '嘉洋', '航宇', '哲友', '汉盛', '霖国', '杜郴', '亦迅', '华伦', '玉琛', '恩郴', '承田', '达炎', '翦瀚', '亚谦', '力翔', '超尊', '烽泽', '同劲', '健桦', '兴羲', '风裕', '滨乐', '天克', '诚卫', '宗道', '嘉志', '司品', '司狄', '贯民', '言锦', '亚同', '品钢', '启彬', '杰大', '金儒', '雷磊', '驹卫', '贯航', '源谦', '桂生', '景言', '泰畅', '凯峰', '昌嘉', '炫涛', '琛浩', '雄磊', '润迅', '伟坚', '宁浩', '瑄卫', '亮若', '源辰', '颂江', '威颂', '松键', '朗信', '皓司', '鸣泽', '雷洋', '奇树', '伦成', '超纶', '民震', '雨琛', '杰君', '威喜', '阳源', '畅雷', '云峻', '冠郴', '廷皇', '达晏', '然城', '刚博', '兆希', '祥勇', '协然', '生鹏', '然宸', '军鹏', '君思', '俊东', '旭道', '云渝', '朝源', '喜广', '杰雷', '岳辉', '振霆', '威朗', '源波', '松仲', '靖松', '军启', '武虹', '炎剑', '刚峰', '雄岩', '梁军', '瀚炎', '协霆', '榕华', '伊晨', '达岳', '晨咏', '友梁', '金杉', '勇斌', '亦盛', '道世', '朗朗', '冠群', '弘浩', '迅安', '敬翦', '青广', '良良', '松同', '光田', '凯彪', '辰成', '奇茂', '绍平', '亦恩', '祥宏', '中枫', '岩迅', '齐思', '霖驹', '毅翰', '金炫', '河正', '友平', '佑纯', '刚子', '栋力', '伊鸿', '渝帆', '廷彦', '家良', '铭龙', '劲宏', '杭杭', '炎辉', '森生', '岳康', '朗旭', '佳兆', '鸿俊', '谦蓝', '磊镇', '廷晨', '源蓝', '少剑', '朋梁', '道广', '贤雨', '霏锋', '靖维', '冠升', '青峻', '浩狄', '滨洋', '绍钢', '琛群', '清鑫', '泽铭', '楚颂', '梁辰', '隆滨', '靖威', '达祥', '逸靖', '山喜', '灿栋', '然慧', '靖翦', '峰刚', '利瑄', '剑梁', '秋皓', '伦田', '洋树', '颖曦', '勇恩', '杰昌', '树咏', '齐昌', '震昌', '伟梁', '以信', '奕旭', '贯朋', '东宇', '杭业', '纶崴', '麟佳', '霖鑫', '润诚', '景颖', '骏楚', '国尊', '鸿信', '麟森', '汉西', '瀚光', '磊豪', '辰力', '新勇', '心达', '友航', '锡彬', '金迅', '晏俊', '力青', '百品', '勇武', '顺荣', '京尊', '平霆', '恩安', '俊启', '隽元', '阳友', '平杰', '泽亚', '聪齐', '鹏君', '格衡', '业隽', '纶林', '雷乐', '盛秦', '磊烽', '滨雨', '协嘉', '力超', '霆宇', '风民', '亦东', '达佳', '秦翔', '业彦', '', '嘉明', '禹锡', '智涛', '磊贯', '嘉恩', '启儒', '帆松', '玮桦', '荣衡', '锡杭', '成炫', '颖禹', '鹏儒', '亮尧', '清瑄', '烽狄', '衡龙', '梁羲', '经崴', '思彬', '帆少', '善颖', '少靖', '兆威', '仲盛', '道道', '谦瀚', '金树', '旭伟', '鹏航', '杭喜', '锡河', '以飞', '秋海', '广振', '衡民', '正滨', '钧清', '宸靖', '腾镇', '绍龙', '朗杭', '景坤', '宏刚', '泽广', '兆澄', '衡林', '隽盛', '卫杰', '海升', '廷宇', '金喜', '熙雷', '健栋', '道宸', '恒元', '品中', '俊宗', '权敬', '炫奕', '敬辰', '喜飞', '以枫', '城麟', '君伊', '朗玮', '雷子', '隆克', '荣敬', '建钢', '林瀚', '诚敬', '威春', '基键', '威成', '旭国', '嘉彬', '衡渝', '彪弘', '锋友', '杰渝', '树鸿', '震谦', '宏平', '岳才', '宏新', '羲若', '思泰', '群祥', '仁建', '以儒', '滨禹', '钢顺', '桂畅', '然峰', '锦楚', '昌皓', '汉群', '斌春', '麟广', '逸振', '雨军', '良杭', '仁格', '利坤', '杰禹', '田熙', '宥峰', '炎峰', '信俊', '威尧', '希峻', '然阳', '光阳', '廷颂', '晨宸', '楠宸', '学绍', '言青', '金琛', '迅贤', '迅鑫', '熙钧', '汉正', '若佳', '勤城', '锦杭', '泽毅', '信贯', '浩勇', '君威', '尧力', '铭勇', '骏旭', '信炎', '靖仲', '宸尧', '绍霆', '彪森', '光锡', '敬诚', '经羲', '廷劲', '翰生', '腾岩', '兴信', '青烽', '健裕', '辰畅', '以曦', '弘广', '若敬', '森亦', '汉寒', '大新', '学思', '鹏立', '迅坤', '锌宁', '宸宸', '毅旭', '翔翔', '润炎', '钧桂', '宏百', '骏成', '泽恒', '承德', '颖新', '森伊', '仁雷', '梁朋', '超昌', '晏铭', '楚朗', '炎然', '霏琛', '雷善', '雷君', '梁臣', '榕茂', '畅心', '畅慧', '学浚', '威绍', '武翔', '聪升', '健锦', '蓝江', '汉利', '澄田', '奕明', '森建', '凯炎', '司弘', '国宁', '颂春', '俊畅', '伦翔', '元曦', '克顺', '蓝宇', '炎敬', '品聪', '楠泽', '祥朝', '伦翔', '汉瑄', '弘彪', '楠颂', '青纶', '庆辉', '山绍', '君建', '安云', '智宇', '峰启', '浩宏', '才聪', '朋元', '楠朋', '彪勤', '嘉家', '侨蓝', '颂楠', '恩伟', '才亮', '田锌', '力杉', '颂希', '锋振', '茂河', '曦健', '言皓', '承树', '楚嘉', '泰刚', '林浩', '群彪', '同松', '祖贤', '雷威', '升恒', '天慧', '成健', '骏颖', '达秋', '洋奕', '秦腾', '钧源', '成鸣', '龙才', '慧恒', '敬顺', '逸纯', '骏奕', '金栋', '良品', '平嘉', '生锦', '中哲', '俊阳', '畅亚', '澄驰', '哲江', '京鑫', '劲才', '鹏栋', '虹聪', '广权', '宥帆', '利翰', '帆恩', '臣彬', '彪成', '波烽', '烽经', '飞绍', '品杰', '彪天', '霆伟', '喜曦', '利恒', '子大', '飞翔', '宏经', '庆以', '超春', '旭亦', '坚云', '博森', '岳世', '山启', '道田', '学梁', '光国', '权西', '伟京', '鸿松', '启旭', '维权', '青康', '皇基', '利大', '兆皇', '伦朗', '纯彬', '言学', '兆刚', '民贤', '家基', '豪斌', '狄杰', '豪盛', '慧皓', '志渝', '臣信', '冠翰', '少劲', '庆烽', '若然', '瀚锋', '浩林', '梁经', '宇骏', '隽喜', '宏炎', '金宗', '经子', '敬学', '润郴', '瀚辰', '廷嘉', '卫源', '润文', '光基', '伦茂', '田栋', '家成', '中经', '彬平', '良鹏', '霖永', '树仁', '颂杜', '浩锌', '汉秦', '杉曦', '百山', '恩生', '德泽', '聪峰', '剑楚', '正寒', '树华', '剑劲', '仁岳', '虹劲', '思世', '卫恩', '思绍', '绍杉', '然凌', '昌君', '雨广', '玮隽', '澄蓝', '桂阳', '翔风', '树朋', '云谦', '逸俊', '靖蓝', '鸣以', '克钢', '思钧', '曦树', '熙彬', '茂云', '希维', '寒东', '亮澄', '百谦', '博颖', '豪星', '宇聪', '纯康', '磊崴', '仁青', '鸣广', '星颂', '朗卓', '谦坚', '信杉', '琛朋', '纯炎', '广刚', '振若', '亚尊', '汉隽', '云群', '力雷', '良伦', '锋霆', '品麟', '麟刚', '鸿伟', '茂骏', '宇嘉', '平凯', '贤森', '雷道', '尊广', '镇元', '伟麟', '海元', '帆雨', '彦健', '友隽', '卓军', '威维', '弘锌', '元钧', '震尧', '迅嘉', '涛健', '格凌', '皇祖', '齐盛', '信钧', '光隆', '昌宇', '春子', '心仁', '凯国', '品霖', '冠传', '武志', '振祥', '经智', '信若', '廷波', '以聪', '德颂', '云崴', '雷锡', '正钢', '德晏', '仲润', '绍旭', '军蓝', '霏朋', '西奕', '彦元', '宏城', '然臣', '康俊', '翰飞', '灿桂', '华泽', '钧哲', '驹乐', '秦才', '凌正', '翔聪', '祖庆', '风杉', '熙群', '凌劲', '廷成', '利义', '禹翔', '民锌', '敬锦', '力祥', '波泽', '力驹', '玮亚', '学昌', '博田', '道哲', '寒永', '仁云', '剑迅', '田廷', '勤宏', '信青', '儒秋', '子建', '佳秋', '亮鹏', '林腾', '崴成', '臣星', '杰亦', '世品', '超峰', '茂基', '毅信', '司羲', '凌茂', '希权', '达以', '以元', '磊宸', '泽康', '田涛', '源隆', '京友', '震洋', '东剑', '榕亚', '键渝', '磊彬', '锋威', '朗成', '波峰', '榕武', '曦宥', '青伦', '恒贯', '世才', '佑曦', '弘桂', '裕青', '郴榕', '力佳', '奕隽', '汉弘', '坤宇', '磊雨', '霏麟', '新钢', '嘉朗', '明志', '健达', '宏源', '清豪', '雷雄', '纶祥', '世元', '浩嘉', '劲宇', '格茂', '仲钧', '品诚', '梁升', '斌航', '平百', '驰伦', '品江', '勇佳', '迅刚', '泽迅', '宏中', '亮飞', '武树', '浩武', '维林', '元友', '杰楚', '权乐', '海基', '兆汉', '浩朝', '祖滨', '楠齐', '亮隽', '键大', '瑄奕', '光桂', '武刚', '春达', '梁虹', '利琛', '亦国', '宁玮', '成畅', '大军', '瑄隽', '世宸', '岳成', '铭鸣', '迅旭', '骏超', '宇云', '松狄', '庆杉', '恒郴'],
	'womanPrefix': ['槿栀', '素颜', '眼眸', '薄姬', '大妞', '妤梦', '湉晨', '妩媚', '涟漪', '旖旎', '南笙', '沧颜', '凝眸', '花逝', '颜汐', '浅沫', '琉璃', '春野', '棠绾', '南音', '初柚', '倩影', '烈女', '泪眼', '莺语', '清悦', '温婉', '挽发', '诱惑', '情愫', '浊泪', '浅笑', '流苏', '晴栀', '槿城', '花葬', '夏墨', '余笙', '鎖惢', '旧梦', '喵喵', '心奴', '浅梦', '清樱', '柠栀', '冷眸', '冷颜'],
	'womanSuffix': ['碧莹', '笑凌', '南汐', '希菲', '雨瑶', '蕾盈', '雪如', '桂映', '颖嘉', '颖滢', '彤月', '婷姬', '萱琪', '勤香', '舒晶', '毓碧', '向姬', '采菁', '素洁', '琼涵', '卉映', '美儿', '寒念', '雨娇', '青澜', '岚桦', '语绮', '可馨', '诗卿', '怡聪', '清雁', '飞淑', '露丹', '馨友', '佩柔', '乐凌', '雅筠', '忆梵', '锦寒', '婵寒', '雪菲', '贤海', '瑾丽', '红迎', '淑睿', '诗馨', '丽琦', '影汐', '雪馥', '宜妍', '宛素', '艺雨', '影凌', '安妍', '咏雪', '雪松', '乐蕾', '凌凡', '璐舒', '可倩', '阳香', '枫雅', '婵艺', '雯思', '艺婷', '梵友', '融阳', '苇红', '丽梦', '颖婷', '萱诗', '咏晓', '雅静', '艺华', '容惠', '雪夏', '凡南', '瑶嘉', '月蓓', '风松', '莺艺', '迎叶', '娜英', '绮萱', '芹雨', '欣华', '筠霜', '娜双', '玉馨', '欣阳', '雯茗', '安宛', '娇英', '娴安', '洁月', '熙瑶', '平雪', '菱含', '婷宇', '姬儿', '翠菡', '清烁', '婉姣', '萱梵', '菲琳', '晓颖', '萱琦', '红蕊', '菱汐', '婉小', '青滢', '代容', '佩艺', '燕静', '颖婵', '涵易', '欢思', '香荔', '月凡', '雪翠', '媚伊', '聪丝', '娜锦', '彩寒', '娇寒', '松舒', '香颖', '芹萱', '晓兰', '平勤', '凌媚', '爽融', '岚菲', '秀丹', '小沫', '柔婵', '蓝忆', '婷瑾', '含儿', '娇雅', '思毓', '依曼', '琳洋', '佳清', '采蕊', '玲晶', '霜含', '媚琼', '菱阳', '瑗婷', '沫寒', '蕊霜', '黛涵', '彩萱', '若舒', '夏毓', '姬美', '欢仪', '媚晴', '蕊菲', '蕊如', '夏苛', '晶璧', '丽馥', '琦凌', '美玉', '聪慧', '瑶雅', '新瑶', '怜素', '晶蓝', '雯兰', '雯雪', '涵新', '瑶菲', '莹晓', '婷菱', '咏南', '贤汐', '玉萱', '晶华', '惠清', '蓝聪', '绮容', '友欢', '莎友', '霜雅', '彤碧', '蓝澜', '馨初', '琰瑞', '凡盈', '佩丝', '文妍', '芳媚', '南蕊', '瑶盼', '瑞沛', '亦初', '冰蕊', '夏熙', '晶曼', '玉汐', '洁柔', '逸初', '芬晴', '宛菡', '菲盈', '瑾瑞', '熙玉', '妍菲', '琬晓', '贤亦', '瑾飞', '涵桂', '风秀', '风沫', '雯菱', '筠琦', '萱静', '念荷', '玉依', '琪淑', '盈玉', '梦咏', '静淑', '毓睿', '慕瑶', '羽翠', '涵菱', '嘉文', '娜琼', '咏洋', '霞碧', '华欢', '采园', '希莎', '书雨', '娇玉', '寒欣', '以乐', '代颖', '映元', '初清', '希琪', '念璧', '亦丹', '馨贤', '念沫', '怡婉', '馥锦', '红雪', '娇琪', '涵雁', '迎熙', '亦乐', '茗彤', '笑柳', '迎静', '玲仪', '飞涵', '聪茗', '琳慕', '舒艺', '婕姣', '风雪', '涵华', '梦雪', '园霞', '荷慧', '燕雨', '珊妮', '莹汐', '露慕', '南瑶', '宜惠', '含亦', '诗瑶', '荔妍', '雅璐', '瑗聪', '蕾熙', '小媚', '儿颖', '巧玲', '慧笑', '文新', '勤蓝', '晶平', '茗叶', '静书', '珊华', '香希', '凡荔', '芙婷', '瑶静', '洋海', '曼叶', '卿惠', '初菡', '雨荔', '滢慧', '贝婷', '宇瑞', '梦锦', '婷迎', '代馨', '冰笑', '妮岚', '姬汐', '澜琰', '妙珊', '慧贤', '南婉', '骅菁', '小念', '夏贤', '安珊', '苑琰', '馨小', '倩琳', '寒风', '希怜', '洋睿', '迎羽', '霞莉', '莎清', '怜琳', '以勤', '飞梦', '娴琼', '婕念', '聪萱', '叶水', '婷凡', '蓝飘', '馨璐', '柔莉', '佩忆', '艺莹', '静露', '宛汐', '娇芬', '芳蕾', '桂叶', '妍如', '映馨', '咏骅', '思夏', '琳怜', '瑾萱', '风叶', '秀诗', '丹璧', '彤珊', '逸锦', '淑芹', '婷翠', '锦聪', '姣熙', '惜眉', '睿璧', '贤娅', '飞风', '素宛', '蓝易', '贝芹', '初骅', '芳雁', '璐妙', '婉露', '娅瑶', '芬亦', '华岚', '欢怜', '丝秀', '眉荔', '易乐', '水琪', '琳雪', '伊姣', '巧雪', '娅玉', '黛蓝', '晴霜', '露香', '飞华', '英瑶', '晶怜', '凡迎', '琳莎', '巧白', '双宛', '仪容', '晓惠', '佳儿', '影涵', '仪儿', '青宝', '菱秀', '逸娇', '诗羽', '霜欣', '丽娜', '桦桂', '琬枫', '容聪', '岚卿', '琪希', '逸语', '冰卉', '菁阳', '荷雨', '菲丹', '娅彦', '媚汐', '琳夏', '叶平', '菡红', '仪毓', '姬怡', '容英', '影风', '欣怡', '香妍', '娴怜', '苇芬', '沛青', '蕊忆', '霜艺', '晓晴', '柳素', '芳蓝', '筠白', '筠静', '菡夏', '妍莎', '海蓝', '娅晴', '彤莎', '玉媚', '勤红', '琴佩', '颖骅', '菱海', '影代', '沫瑶', '烁琴', '晓璧', '诗梦', '妍苛', '霜南', '怡燕', '梦璧', '希佩', '代晶', '羽彤', '宝柳', '冬凡', '梦容', '如荔', '南嘉', '美友', '苇以', '岚彦', '凡冰', '蓝欢', '叶宛', '惠婵', '淑采', '姣蕾', '菁毓', '霜芙', '小诗', '海阳', '英念', '琬熙', '贤佩', '红菲', '慕姣', '采莹', '彤萱', '沛雪', '素菲', '瑞迎', '聪风', '寒桦', '霞仪', '玉冬', '风彤', '莺珊', '儿儿', '佳琬', '语晓', '飞蓓', '诗晴', '蓉茜', '霜华', '琳小', '莺丹', '雅娜', '叶璐', '翠笑', '贤雪', '卿语', '希容', '凌素', '香含', '蓝贤', '儿雪', '伊丽', '艺风', '惠易', '逸宇', '逸梦', '洋仪', '瑞怜', '亦佳', '飘佩', '燕瑶', '骅绮', '宛欣', '芙聪', '雨书', '琼芳', '亦念', '琴笑', '翠宇', '琴融', '翠薇', '若怡', '枫丹', '初翠', '语静', '雅小', '妮柔', '惜文', '曼小', '萱莺', '宜佩', '易晶', '卿友', '萱红', '安红', '琪黛', '蓝枫', '珊仪', '荷萱', '萱滢', '双梦', '香易', '馨雪', '飘雅', '风冰', '蕾琦', '怜冰', '晴松', '桦素', '宇夏', '娜美', '燕琳', '慧艺', '黛烁', '影菡', '莎露', '婵苛', '柳姣', '婷盼', '琴琼', '梦欣', '玉荔', '柔诗', '曼红', '妙香', '桂凡', '寒友', '寒晶', '代桃', '文骅', '贤白', '宇倩', '茜馥', '蓓琪', '可雁', '如颖', '采笑', '莺蓉', '凌海', '清娴', '菲容', '薇骅', '涵梵', '影芙', '盼青', '馥露', '曼怜', '安凡', '玲柔', '妍仪', '苛柳', '绮琴', '冬汐', '雅文', '蓉初', '黛念', '霞苑', '映贝', '涵舒', '涵琰', '雁雯', '妮凡', '彦融', '荔颖', '睿苛', '菡盼', '芳晶', '黛媛', '雨桂', '卉晶', '馨琦', '凌笑', '安若', '蕊锦', '芳雪', '翠桃', '卿馨', '怡采', '冬涵', '夏雪', '玲珊', '初蓉', '友娜', '双萱', '萱玉', '如瑶', '慧爽', '若秀', '飞叶', '蕾爽', '英柳', '如婵', '秀若', '彩烁', '念忆', '霞晴', '骅芙', '芳英', '叶代', '舒宛', '宛瑶', '茗贝', '艺琪', '雁小', '宝菲', '瑶梦', '娇语', '迎玉', '菡乐', '芹怜', '沛美', '聪涵', '琰佳', '如雅', '霞代', '慧瑶', '宝媚', '苛蓉', '红颖', '蓝烁', '芹依', '爽雁', '雪桂', '以绮', '黛飞', '雪华', '苛水', '琦菡', '丹婷', '娴黛', '友凌', '婕惠', '菁翠', '丝菡', '婕枫', '汐友', '毓琰', '涵荔', '含娜', '琦映', '蕊慧', '燕芳', '飘叶', '滢菁', '松洁', '水灵', '娇雅', '馨骅', '梦姬', '萱菡', '水巧', '夏馨', '茗琦', '霞澜', '友丹', '睿馨', '瑾晴', '丝卿', '琼宇', '岚双', '桃淑', '芳萱', '希小', '巧娅', '惠宇', '飞菱', '琪岚', '欣蓝', '冰芙', '蕾如', '琼可', '妙亦', '梵毓', '桃可', '枫荷', '黛冬', '岚蓉', '月洁', '巧彤', '曼芙', '爽雅', '沛枫', '仪雪', '岚丽', '希碧', '英雨', '卿锦', '芹诗', '雯菁', '琪丝', '松蕾', '芬若', '芹绮', '梦勤', '雨骅', '翠亦', '蓉媚', '咏雅', '芙容', '艺南', '英彦', '曼娜', '亦燕', '颖夏', '怜苇', '慧盼', '冰荷', '芙瑾', '绮萱', '水曼', '燕惠', '儿飘', '宜菲', '倩绮', '青宛', '霞芹', '妮彩', '菲蓝', '影洁', '晶蕊', '嘉霞', '聪苑', '友莹', '姬琳', '双雪', '熙媚', '洋玉', '苇菡', '舒舒', '沛诗', '雅代', '琪夏', '夏灵', '熙静', '娅苛', '沫霞', '宝聪', '容娅', '骅冬', '芹盼', '慕岚', '澜冬', '瑶仪', '南琳', '彩乐', '惜菲', '新慧', '宛雅', '雅蕊', '映安', '沛汐', '松秀', '南沛', '迎飞', '彤采', '颖露', '梦雨', '香嘉', '乐舒', '琰惜', '苛沫', '琳南', '燕荔', '丹慕', '莉若', '迎诗', '洋馨', '蕾贤', '念婷', '园思', '贤颖', '欣柳', '素儿', '雁婉', '苛婕', '飘霞', '诗伊', '翠汐', '采倩', '柳晶', '筠玛', '蕊希', '华琳', '馥凌', '黛友', '惜采', '冬艺', '秀锦', '妙娅', '忆茗', '宇儿', '蕊丹', '荔锦', '慕琳', '婉如', '聪艺', '桦滢', '晴南', '霞菡', '荷莺', '毓芳', '琴筠', '希叶', '月雪', '蕊媚', '沛薇', '咏柔', '雅飘', '佩如', '琰夏', '婵汐', '雯琳', '含贝', '娅涵', '馨水', '桂婵', '水馨', '飘贤', '莉影', '馥菱', '馨锦', '锦菲', '蓉琴', '凌沫', '晶涵', '岚爽', '馨嘉', '琼琦', '秀姣', '寒桂', '菁洋', '儿毓', '娴爽', '荷素', '笑蓓', '以莎', '菲洋', '涵婕', '希桂', '宜雪', '凡寒', '荷妙', '莉逸', '琴茜', '雪静', '瑶晶', '桦灵', '素美', '茜芹', '爽依', '嘉红', '佩月', '诗宛', '茜素', '妍丽', '彦小', '瑗飞', '颖羽', '烁水', '娇咏', '青阳', '琼亦', '琦贤', '新玉', '含玲', '晓静', '蓝苑', '蓉希', '叶慧', '清诗', '玛丽', '阳影', '凌彤', '丹书', '琪语', '妮艺', '妮蓝', '兰卿', '如怡', '盼菁', '宛兰', '娜宜', '枫莹', '阳舒', '枫忆', '以烁', '毓晶', '霜素', '夏菲', '丝雪', '迎雅', '冰芬', '梦盼', '沫惠', '爽伊', '夏茗', '雪洁', '宛汐', '熙卉', '语婵', '霞冬', '毓萱', '汐含', '婉涵', '宜熙', '菲如', '颖苛', '玉月', '雪瑗', '香华', '宇如', '琬蓉', '彤婉', '瑶夏', '清雪', '玲易', '锦妙', '秀慧', '烁静', '菲小', '文岚', '熙珊', '盼兰', '映珊', '茜蓝', '可瑞', '澜彤', '菱艺', '忆园', '冰碧', '妍惠', '曼若', '娇黛', '雅蓉', '琬冰', '梵海', '雅莎', '梦彤', '贤安', '容依', '梦宜', '雅婉', '洁婉', '慧咏', '思熙', '婵媚', '诗素', '晴婵', '莎岚', '玉荷', '荷绮', '欢叶', '羽忆', '柳清', '海玉', '雨佳', '新冰', '依筠', '乐念', '静菡', '荷芬', '盼宛', '玉雯', '菁婷', '滢妮', '勤素', '伊勤', '羽霞', '艺丝', '容妍', '洁梵', '素思', '娅香', '佳秀', '希馨', '采晓', '冰平', '黛梵', '寒梦', '向冬', '瑞宛', '岚茜', '晓玲', '乐霜', '柳熙', '怜玲', '玲琳', '骅馥', '娅青', '卉清', '易涵', '兰蕾', '灵依', '咏黛', '瑞聪', '希媚', '桦羽', '玉巧', '小飞', '以婉', '欢蕊', '锦芬', '飞香', '素佩', '红书', '如宛', '馨清', '文沛', '晓苛', '婷卉', '初红', '桦沫', '莎梦', '琰华', '珊苛', '伊兰', '友影', '茗姬', '瑞晓', '琳丹', '娇菁', '汐雯', '婉飘', '菲玛', '碧静', '翠琼', '聪红', '嘉曼', '佳英', '琪梦', '笑颖', '睿雨', '希芙', '瑗芹', '蓓含', '丝曼', '易华', '宜媚', '桦琳', '伊薇', '宇碧', '逸婕', '忆涵', '元以', '沛南', '燕慕', '丹惠', '琳婕', '瑾影', '若晓', '苇慕', '瑾婵', '向咏', '羽玛', '宜雅', '阳容', '婵英', '蓉若', '瑶红', '元琪', '欢雪', '雪白', '清梦', '希静', '夏蓉', '玉盼', '茗思', '华娴', '新妍', '枫雨', '雪娴', '绮桃', '玉容', '思逸', '忆姣', '琴卉', '媚怡', '萱慕', '迎洋', '叶沛', '苇睿', '梵书', '宇芳', '芹希', '美书', '静芙', '雪莎', '梵柳', '琪露', '琪玉', '怡佳', '婷骅', '含晶', '曼露', '怜迎', '馥芙', '妙绮', '念筠', '澜笑', '慧希', '逸元', '如沫', '绮南', '念佳', '嘉瑾', '霜宜', '盼涵', '含彦', '汐海', '娜儿', '琪瑗', '蓝璐', '烁彤', '菲安', '骅睿', '怜儿', '松雅', '含菁', '乐兰', '茗珊', '惠霜', '艺羽', '姬冰', '沫桦', '娇琳', '梦彩', '亦涵', '娅绮', '彤欣', '瑶菲', '菁琰', '彦贤', '丝媚', '茜英', '文蓓', '夏怜', '怜菱', '莎冬', '霜菡', '璧岚', '碧艺', '芳冬', '以新', '薇蓝', '亦菲', '乐芬', '沛芳', '妙松', '娴华', '莎宇', '熙蓓'],
	'descs': [a0_0x2da875(0x330), a0_0x2da875(0x223), a0_0x2da875(0x27c), a0_0x2da875(0x34e), '渡劫成功晋升地仙', '领取了99999元宝礼包'],
	'familyArr': new Array(0x2),
	'symbolArr': new Array(0x3),
	'tops': [0x70, 0x8c, 0xa8, 0xc4, 0xe0],
	'items': new Array(),
	'destroyed': ![],
	'destory': function() {}
};
var JpegError = function JpegErrorClosure() {
		var _0x1c637d = a0_0x2da875;

		function _0x531444(_0x49ba6e) {
			var _0x13a640 = a0_0x4cc5;
			this[_0x13a640(0x1cd)] = _0x13a640(0x2ff) + _0x49ba6e;
		}
		return _0x531444[_0x1c637d(0x34f)] = new Error(), _0x531444[_0x1c637d(0x34f)][_0x1c637d(0x1dc)] = 'JpegError', _0x531444[_0x1c637d(0x275)] = _0x531444, _0x531444;
	}(),
	DNLMarkerError = function DNLMarkerErrorClosure() {
		var _0x5c676f = a0_0x2da875;

		function _0x4429cd(_0x12b3c9, _0x27ec60) {
			var _0x3c33f9 = a0_0x4cc5;
			this[_0x3c33f9(0x1cd)] = _0x12b3c9, this[_0x3c33f9(0x327)] = _0x27ec60;
		}
		return _0x4429cd[_0x5c676f(0x34f)] = new Error(), _0x4429cd[_0x5c676f(0x34f)][_0x5c676f(0x1dc)] = 'DNLMarkerError', _0x4429cd[_0x5c676f(0x275)] = _0x4429cd, _0x4429cd;
	}(),
	EOIMarkerError = function EOIMarkerErrorClosure() {
		var _0x39f2cb = a0_0x2da875;

		function _0xa889d8(_0x2e3d56) {
			var _0x421c69 = a0_0x4cc5;
			this[_0x421c69(0x1cd)] = _0x2e3d56;
		}
		return _0xa889d8[_0x39f2cb(0x34f)] = new Error(), _0xa889d8['prototype']['name'] = _0x39f2cb(0x217), _0xa889d8['constructor'] = _0xa889d8, _0xa889d8;
	}(),
	JpegImage = function JpegImageClosure() {
		var _0x4ac76e = a0_0x2da875,
			_0x5ce5c0 = new Uint8Array([0x0, 0x1, 0x8, 0x10, 0x9, 0x2, 0x3, 0xa, 0x11, 0x18, 0x20, 0x19, 0x12, 0xb, 0x4, 0x5, 0xc, 0x13, 0x1a, 0x21, 0x28, 0x30, 0x29, 0x22, 0x1b, 0x14, 0xd, 0x6, 0x7, 0xe, 0x15, 0x1c, 0x23, 0x2a, 0x31, 0x38, 0x39, 0x32, 0x2b, 0x24, 0x1d, 0x16, 0xf, 0x17, 0x1e, 0x25, 0x2c, 0x33, 0x3a, 0x3b, 0x34, 0x2d, 0x26, 0x1f, 0x27, 0x2e, 0x35, 0x3c, 0x3d, 0x36, 0x2f, 0x37, 0x3e, 0x3f]),
			_0x3796f1 = 0xfb1,
			_0x13ccf1 = 0x31f,
			_0x466979 = 0xd4e,
			_0x11add1 = 0x8e4,
			_0x10e309 = 0x61f,
			_0x34a8e7 = 0xec8,
			_0x4ff87e = 0x16a1,
			_0x53ba6c = 0xb50;

		function _0x3ac17e(_0x2d83ad) {
			var _0x52d25d = a0_0x4cc5,
				_0x12871d = _0x2d83ad === void 0x0 ? {} : _0x2d83ad,
				_0xc79a17 = _0x12871d['decodeTransform'],
				_0xb4085e = _0xc79a17 === void 0x0 ? null : _0xc79a17,
				_0x1fe37d = _0x12871d[_0x52d25d(0x231)],
				_0x26d6fc = _0x1fe37d === void 0x0 ? -0x1 : _0x1fe37d;
			this[_0x52d25d(0x2e6)] = _0xb4085e, this[_0x52d25d(0x28b)] = _0x26d6fc;
		}

		function _0x22b658(_0x2bf5ff, _0x17047c) {
			var _0x3fcdf1 = a0_0x4cc5,
				_0x1054eb = 0x0,
				_0x189a33 = [],
				_0x54be88, _0x1825e5, _0x18a463 = 0x10;
			while (_0x18a463 > 0x0 && !_0x2bf5ff[_0x18a463 - 0x1]) {
				_0x18a463--;
			}
			_0x189a33[_0x3fcdf1(0x337)]({
				'children': [],
				'index': 0x0
			});
			var _0x137267 = _0x189a33[0x0],
				_0x31b831;
			for (_0x54be88 = 0x0; _0x54be88 < _0x18a463; _0x54be88++) {
				for (_0x1825e5 = 0x0; _0x1825e5 < _0x2bf5ff[_0x54be88]; _0x1825e5++) {
					_0x137267 = _0x189a33['pop'](), _0x137267[_0x3fcdf1(0x3b5)][_0x137267[_0x3fcdf1(0x1a4)]] = _0x17047c[_0x1054eb];
					while (_0x137267['index'] > 0x0) {
						_0x137267 = _0x189a33[_0x3fcdf1(0x2d6)]();
					}
					_0x137267[_0x3fcdf1(0x1a4)]++, _0x189a33[_0x3fcdf1(0x337)](_0x137267);
					while (_0x189a33[_0x3fcdf1(0x1a2)] <= _0x54be88) {
						_0x189a33['push'](_0x31b831 = {
							'children': [],
							'index': 0x0
						}), _0x137267[_0x3fcdf1(0x3b5)][_0x137267[_0x3fcdf1(0x1a4)]] = _0x31b831[_0x3fcdf1(0x3b5)], _0x137267 = _0x31b831;
					}
					_0x1054eb++;
				}
				_0x54be88 + 0x1 < _0x18a463 && (_0x189a33[_0x3fcdf1(0x337)](_0x31b831 = {
					'children': [],
					'index': 0x0
				}), _0x137267[_0x3fcdf1(0x3b5)][_0x137267[_0x3fcdf1(0x1a4)]] = _0x31b831[_0x3fcdf1(0x3b5)], _0x137267 = _0x31b831);
			}
			return _0x189a33[0x0][_0x3fcdf1(0x3b5)];
		}

		function _0x104fd3(_0x1d93bd, _0x1b3524, _0x2e8461) {
			var _0x281445 = a0_0x4cc5;
			return 0x40 * ((_0x1d93bd[_0x281445(0x283)] + 0x1) * _0x1b3524 + _0x2e8461);
		}

		function _0x2797c3(_0x3e4ab9, _0x32e1d6, _0x1a3ce3, _0x145497, _0x1270c0, _0x2c0971, _0xa1afc6, _0x393875, _0x5f20df, _0x456e2c) {
			var _0x4f518e = a0_0x4cc5;
			_0x456e2c === void 0x0 && (_0x456e2c = ![]);
			var _0x424b9d = _0x1a3ce3['mcusPerLine'],
				_0x378bbe = _0x1a3ce3[_0x4f518e(0x329)],
				_0x505c03 = _0x32e1d6,
				_0x85b3de = 0x0,
				_0x1a97f5 = 0x0;

			function _0x3bdd47() {
				var _0x14aee6 = _0x4f518e;
				if (_0x1a97f5 > 0x0) return _0x1a97f5--, _0x85b3de >> _0x1a97f5 & 0x1;
				_0x85b3de = _0x3e4ab9[_0x32e1d6++];
				if (_0x85b3de === 0xff) {
					var _0x2af7c2 = _0x3e4ab9[_0x32e1d6++];
					if (_0x2af7c2) {
						if (_0x2af7c2 === 0xdc && _0x456e2c) {
							_0x32e1d6 += 0x2;
							var _0x2cf498 = _0x3e4ab9[_0x32e1d6++] << 0x8 | _0x3e4ab9[_0x32e1d6++];
							if (_0x2cf498 > 0x0 && _0x2cf498 !== _0x1a3ce3[_0x14aee6(0x327)]) throw new DNLMarkerError(_0x14aee6(0x254), _0x2cf498);
						} else {
							if (_0x2af7c2 === 0xd9) throw new EOIMarkerError(_0x14aee6(0x358));
						}
						throw new JpegError(_0x14aee6(0x26e) + (_0x85b3de << 0x8 | _0x2af7c2)['toString'](0x10));
					}
				}
				return _0x1a97f5 = 0x7, _0x85b3de >>> 0x7;
			}

			function _0x951bc9(_0x3a29ac) {
				var _0x29e06d = _0x4f518e,
					_0x576de2 = _0x3a29ac;
				while (!![]) {
					_0x576de2 = _0x576de2[_0x3bdd47()];
					if (typeof _0x576de2 === _0x29e06d(0x1e2)) return _0x576de2;
					if (typeof _0x576de2 !== _0x29e06d(0x21c)) throw new JpegError(_0x29e06d(0x257));
				}
			}

			function _0x196f91(_0x44fbf6) {
				var _0x31dea3 = 0x0;
				while (_0x44fbf6 > 0x0) {
					_0x31dea3 = _0x31dea3 << 0x1 | _0x3bdd47(), _0x44fbf6--;
				}
				return _0x31dea3;
			}

			function _0x535540(_0x581b95) {
				if (_0x581b95 === 0x1) return _0x3bdd47() === 0x1 ? 0x1 : -0x1;
				var _0xcb6847 = _0x196f91(_0x581b95);
				if (_0xcb6847 >= 0x1 << _0x581b95 - 0x1) return _0xcb6847;
				return _0xcb6847 + (-0x1 << _0x581b95) + 0x1;
			}

			function _0x1a6024(_0x3833d8, _0x5b18f8) {
				var _0x428e7c = _0x4f518e,
					_0x40e8f3 = _0x951bc9(_0x3833d8[_0x428e7c(0x372)]),
					_0x10395d = _0x40e8f3 === 0x0 ? 0x0 : _0x535540(_0x40e8f3);
				_0x3833d8[_0x428e7c(0x2f0)][_0x5b18f8] = _0x3833d8['pred'] += _0x10395d;
				var _0x50569e = 0x1;
				while (_0x50569e < 0x40) {
					var _0x410c43 = _0x951bc9(_0x3833d8[_0x428e7c(0x278)]),
						_0xaac13d = _0x410c43 & 0xf,
						_0x1cdfc5 = _0x410c43 >> 0x4;
					if (_0xaac13d === 0x0) {
						if (_0x1cdfc5 < 0xf) break;
						_0x50569e += 0x10;
						continue;
					}
					_0x50569e += _0x1cdfc5;
					var _0x38e116 = _0x5ce5c0[_0x50569e];
					_0x3833d8[_0x428e7c(0x2f0)][_0x5b18f8 + _0x38e116] = _0x535540(_0xaac13d), _0x50569e++;
				}
			}

			function _0x244d93(_0x561aca, _0x586933) {
				var _0x46e466 = _0x4f518e,
					_0x1e751c = _0x951bc9(_0x561aca[_0x46e466(0x372)]),
					_0x21c933 = _0x1e751c === 0x0 ? 0x0 : _0x535540(_0x1e751c) << _0x5f20df;
				_0x561aca[_0x46e466(0x2f0)][_0x586933] = _0x561aca[_0x46e466(0x1e7)] += _0x21c933;
			}

			function _0x16f917(_0x3d23e1, _0x252b7f) {
				var _0x3c4cf3 = _0x4f518e;
				_0x3d23e1[_0x3c4cf3(0x2f0)][_0x252b7f] |= _0x3bdd47() << _0x5f20df;
			}
			var _0x38a77b = 0x0;

			function _0x4a23d3(_0x1de679, _0x7c51ae) {
				var _0x3cade8 = _0x4f518e;
				if (_0x38a77b > 0x0) {
					_0x38a77b--;
					return;
				}
				var _0x1aab6f = _0x2c0971,
					_0x1dee24 = _0xa1afc6;
				while (_0x1aab6f <= _0x1dee24) {
					var _0xc01486 = _0x951bc9(_0x1de679[_0x3cade8(0x278)]),
						_0x1c0f80 = _0xc01486 & 0xf,
						_0xd96944 = _0xc01486 >> 0x4;
					if (_0x1c0f80 === 0x0) {
						if (_0xd96944 < 0xf) {
							_0x38a77b = _0x196f91(_0xd96944) + (0x1 << _0xd96944) - 0x1;
							break;
						}
						_0x1aab6f += 0x10;
						continue;
					}
					_0x1aab6f += _0xd96944;
					var _0x1a6b25 = _0x5ce5c0[_0x1aab6f];
					_0x1de679[_0x3cade8(0x2f0)][_0x7c51ae + _0x1a6b25] = _0x535540(_0x1c0f80) * (0x1 << _0x5f20df), _0x1aab6f++;
				}
			}
			var _0x413371 = 0x0,
				_0x32474b;

			function _0x20f8fe(_0x4ebb69, _0x34c567) {
				var _0x1065f9 = _0x4f518e,
					_0x9112d3 = _0x2c0971,
					_0x5d0b1e = _0xa1afc6,
					_0x41d996 = 0x0,
					_0x3b1fcc, _0x4b2ee8;
				while (_0x9112d3 <= _0x5d0b1e) {
					var _0x388583 = _0x34c567 + _0x5ce5c0[_0x9112d3],
						_0x2f2a8a = _0x4ebb69['blockData'][_0x388583] < 0x0 ? -0x1 : 0x1;
					switch (_0x413371) {
						case 0x0:
							_0x4b2ee8 = _0x951bc9(_0x4ebb69[_0x1065f9(0x278)]), _0x3b1fcc = _0x4b2ee8 & 0xf, _0x41d996 = _0x4b2ee8 >> 0x4;
							if (_0x3b1fcc === 0x0) _0x41d996 < 0xf ? (_0x38a77b = _0x196f91(_0x41d996) + (0x1 << _0x41d996), _0x413371 = 0x4) : (_0x41d996 = 0x10, _0x413371 = 0x1);
							else {
								if (_0x3b1fcc !== 0x1) throw new JpegError(_0x1065f9(0x224));
								_0x32474b = _0x535540(_0x3b1fcc), _0x413371 = _0x41d996 ? 0x2 : 0x3;
							}
							continue;
						case 0x1:
						case 0x2:
							_0x4ebb69[_0x1065f9(0x2f0)][_0x388583] ? _0x4ebb69[_0x1065f9(0x2f0)][_0x388583] += _0x2f2a8a * (_0x3bdd47() << _0x5f20df) : (_0x41d996--, _0x41d996 === 0x0 && (_0x413371 = _0x413371 === 0x2 ? 0x3 : 0x0));
							break;
						case 0x3:
							_0x4ebb69[_0x1065f9(0x2f0)][_0x388583] ? _0x4ebb69[_0x1065f9(0x2f0)][_0x388583] += _0x2f2a8a * (_0x3bdd47() << _0x5f20df) : (_0x4ebb69[_0x1065f9(0x2f0)][_0x388583] = _0x32474b << _0x5f20df, _0x413371 = 0x0);
							break;
						case 0x4:
							_0x4ebb69[_0x1065f9(0x2f0)][_0x388583] && (_0x4ebb69['blockData'][_0x388583] += _0x2f2a8a * (_0x3bdd47() << _0x5f20df));
							break;
					}
					_0x9112d3++;
				}
				_0x413371 === 0x4 && (_0x38a77b--, _0x38a77b === 0x0 && (_0x413371 = 0x0));
			}

			function _0x3fcfa0(_0x4b469a, _0x4faa70, _0x543c8c, _0x575e1c, _0x513a20) {
				var _0x486e4f = _0x543c8c / _0x424b9d | 0x0,
					_0x343436 = _0x543c8c % _0x424b9d,
					_0x53812c = _0x486e4f * _0x4b469a['v'] + _0x575e1c,
					_0x545ca7 = _0x343436 * _0x4b469a['h'] + _0x513a20,
					_0x54c4df = _0x104fd3(_0x4b469a, _0x53812c, _0x545ca7);
				_0x4faa70(_0x4b469a, _0x54c4df);
			}

			function _0xae0feb(_0x60cf86, _0x309980, _0x14c4af) {
				var _0x2661d6 = _0x4f518e,
					_0x25ffa8 = _0x14c4af / _0x60cf86[_0x2661d6(0x283)] | 0x0,
					_0xe5b970 = _0x14c4af % _0x60cf86['blocksPerLine'],
					_0x2afa26 = _0x104fd3(_0x60cf86, _0x25ffa8, _0xe5b970);
				_0x309980(_0x60cf86, _0x2afa26);
			}
			var _0x5cfe93 = _0x145497[_0x4f518e(0x1a2)],
				_0x2baa80, _0x5818a6, _0x455fc9, _0xa08e52, _0x397780, _0x2b94c2;
			_0x378bbe ? _0x2c0971 === 0x0 ? _0x2b94c2 = _0x393875 === 0x0 ? _0x244d93 : _0x16f917 : _0x2b94c2 = _0x393875 === 0x0 ? _0x4a23d3 : _0x20f8fe : _0x2b94c2 = _0x1a6024;
			var _0x617d87 = 0x0,
				_0xe1750b, _0x42a91f;
			_0x5cfe93 === 0x1 ? _0x42a91f = _0x145497[0x0]['blocksPerLine'] * _0x145497[0x0][_0x4f518e(0x1ae)] : _0x42a91f = _0x424b9d * _0x1a3ce3[_0x4f518e(0x37e)];
			var _0x209297, _0x103969;
			while (_0x617d87 < _0x42a91f) {
				var _0x3f7d49 = _0x1270c0 ? Math[_0x4f518e(0x2d1)](_0x42a91f - _0x617d87, _0x1270c0) : _0x42a91f;
				for (_0x5818a6 = 0x0; _0x5818a6 < _0x5cfe93; _0x5818a6++) {
					_0x145497[_0x5818a6][_0x4f518e(0x1e7)] = 0x0;
				}
				_0x38a77b = 0x0;
				if (_0x5cfe93 === 0x1) {
					_0x2baa80 = _0x145497[0x0];
					for (_0x397780 = 0x0; _0x397780 < _0x3f7d49; _0x397780++) {
						_0xae0feb(_0x2baa80, _0x2b94c2, _0x617d87), _0x617d87++;
					}
				} else
					for (_0x397780 = 0x0; _0x397780 < _0x3f7d49; _0x397780++) {
						for (_0x5818a6 = 0x0; _0x5818a6 < _0x5cfe93; _0x5818a6++) {
							_0x2baa80 = _0x145497[_0x5818a6], _0x209297 = _0x2baa80['h'], _0x103969 = _0x2baa80['v'];
							for (_0x455fc9 = 0x0; _0x455fc9 < _0x103969; _0x455fc9++) {
								for (_0xa08e52 = 0x0; _0xa08e52 < _0x209297; _0xa08e52++) {
									_0x3fcfa0(_0x2baa80, _0x2b94c2, _0x617d87, _0x455fc9, _0xa08e52);
								}
							}
						}
						_0x617d87++;
					}
				_0x1a97f5 = 0x0, _0xe1750b = _0x1bcac6(_0x3e4ab9, _0x32e1d6);
				_0xe1750b && _0xe1750b[_0x4f518e(0x1a3)] && (warn(_0x4f518e(0x31e) + _0xe1750b[_0x4f518e(0x1a3)]), _0x32e1d6 = _0xe1750b[_0x4f518e(0x1a7)]);
				var _0xbf0c89 = _0xe1750b && _0xe1750b[_0x4f518e(0x37a)];
				if (!_0xbf0c89 || _0xbf0c89 <= 0xff00) throw new JpegError(_0x4f518e(0x32e));
				if (_0xbf0c89 >= 0xffd0 && _0xbf0c89 <= 0xffd7) _0x32e1d6 += 0x2;
				else break;
			}
			return _0xe1750b = _0x1bcac6(_0x3e4ab9, _0x32e1d6), _0xe1750b && _0xe1750b[_0x4f518e(0x1a3)] && (warn('decodeScan\x20-\x20unexpected\x20Scan\x20data,\x20current\x20marker\x20is:\x20' + _0xe1750b[_0x4f518e(0x1a3)]), _0x32e1d6 = _0xe1750b[_0x4f518e(0x1a7)]), _0x32e1d6 - _0x505c03;
		}

		function _0x381b22(_0xb6d540, _0x509af8, _0x2b75d6) {
			var _0x1d55e6 = a0_0x4cc5,
				_0x3b0818 = _0xb6d540[_0x1d55e6(0x208)],
				_0x542333 = _0xb6d540[_0x1d55e6(0x2f0)],
				_0x9b2289, _0x4f1159, _0x2b8ed5, _0x310ea4, _0xc0f2b4, _0x3f7e1f, _0x2f6e9a, _0x34594a, _0xbec93b, _0x1d6091, _0x37d4b5, _0x34064a, _0x51f34e, _0x5c2f0e, _0x3b1bfe, _0x29687b, _0x300086;
			if (!_0x3b0818) throw new JpegError('missing\x20required\x20Quantization\x20Table.');
			for (var _0x5402cf = 0x0; _0x5402cf < 0x40; _0x5402cf += 0x8) {
				_0xbec93b = _0x542333[_0x509af8 + _0x5402cf], _0x1d6091 = _0x542333[_0x509af8 + _0x5402cf + 0x1], _0x37d4b5 = _0x542333[_0x509af8 + _0x5402cf + 0x2], _0x34064a = _0x542333[_0x509af8 + _0x5402cf + 0x3], _0x51f34e = _0x542333[_0x509af8 + _0x5402cf + 0x4], _0x5c2f0e = _0x542333[_0x509af8 + _0x5402cf + 0x5], _0x3b1bfe = _0x542333[_0x509af8 + _0x5402cf + 0x6], _0x29687b = _0x542333[_0x509af8 + _0x5402cf + 0x7], _0xbec93b *= _0x3b0818[_0x5402cf];
				if ((_0x1d6091 | _0x37d4b5 | _0x34064a | _0x51f34e | _0x5c2f0e | _0x3b1bfe | _0x29687b) === 0x0) {
					_0x300086 = _0x4ff87e * _0xbec93b + 0x200 >> 0xa, _0x2b75d6[_0x5402cf] = _0x300086, _0x2b75d6[_0x5402cf + 0x1] = _0x300086, _0x2b75d6[_0x5402cf + 0x2] = _0x300086, _0x2b75d6[_0x5402cf + 0x3] = _0x300086, _0x2b75d6[_0x5402cf + 0x4] = _0x300086, _0x2b75d6[_0x5402cf + 0x5] = _0x300086, _0x2b75d6[_0x5402cf + 0x6] = _0x300086, _0x2b75d6[_0x5402cf + 0x7] = _0x300086;
					continue;
				}
				_0x1d6091 *= _0x3b0818[_0x5402cf + 0x1], _0x37d4b5 *= _0x3b0818[_0x5402cf + 0x2], _0x34064a *= _0x3b0818[_0x5402cf + 0x3], _0x51f34e *= _0x3b0818[_0x5402cf + 0x4], _0x5c2f0e *= _0x3b0818[_0x5402cf + 0x5], _0x3b1bfe *= _0x3b0818[_0x5402cf + 0x6], _0x29687b *= _0x3b0818[_0x5402cf + 0x7], _0x9b2289 = _0x4ff87e * _0xbec93b + 0x80 >> 0x8, _0x4f1159 = _0x4ff87e * _0x51f34e + 0x80 >> 0x8, _0x2b8ed5 = _0x37d4b5, _0x310ea4 = _0x3b1bfe, _0xc0f2b4 = _0x53ba6c * (_0x1d6091 - _0x29687b) + 0x80 >> 0x8, _0x34594a = _0x53ba6c * (_0x1d6091 + _0x29687b) + 0x80 >> 0x8, _0x3f7e1f = _0x34064a << 0x4, _0x2f6e9a = _0x5c2f0e << 0x4, _0x9b2289 = _0x9b2289 + _0x4f1159 + 0x1 >> 0x1, _0x4f1159 = _0x9b2289 - _0x4f1159, _0x300086 = _0x2b8ed5 * _0x34a8e7 + _0x310ea4 * _0x10e309 + 0x80 >> 0x8, _0x2b8ed5 = _0x2b8ed5 * _0x10e309 - _0x310ea4 * _0x34a8e7 + 0x80 >> 0x8, _0x310ea4 = _0x300086, _0xc0f2b4 = _0xc0f2b4 + _0x2f6e9a + 0x1 >> 0x1, _0x2f6e9a = _0xc0f2b4 - _0x2f6e9a, _0x34594a = _0x34594a + _0x3f7e1f + 0x1 >> 0x1, _0x3f7e1f = _0x34594a - _0x3f7e1f, _0x9b2289 = _0x9b2289 + _0x310ea4 + 0x1 >> 0x1, _0x310ea4 = _0x9b2289 - _0x310ea4, _0x4f1159 = _0x4f1159 + _0x2b8ed5 + 0x1 >> 0x1, _0x2b8ed5 = _0x4f1159 - _0x2b8ed5, _0x300086 = _0xc0f2b4 * _0x11add1 + _0x34594a * _0x466979 + 0x800 >> 0xc, _0xc0f2b4 = _0xc0f2b4 * _0x466979 - _0x34594a * _0x11add1 + 0x800 >> 0xc, _0x34594a = _0x300086, _0x300086 = _0x3f7e1f * _0x13ccf1 + _0x2f6e9a * _0x3796f1 + 0x800 >> 0xc, _0x3f7e1f = _0x3f7e1f * _0x3796f1 - _0x2f6e9a * _0x13ccf1 + 0x800 >> 0xc, _0x2f6e9a = _0x300086, _0x2b75d6[_0x5402cf] = _0x9b2289 + _0x34594a, _0x2b75d6[_0x5402cf + 0x7] = _0x9b2289 - _0x34594a, _0x2b75d6[_0x5402cf + 0x1] = _0x4f1159 + _0x2f6e9a, _0x2b75d6[_0x5402cf + 0x6] = _0x4f1159 - _0x2f6e9a, _0x2b75d6[_0x5402cf + 0x2] = _0x2b8ed5 + _0x3f7e1f, _0x2b75d6[_0x5402cf + 0x5] = _0x2b8ed5 - _0x3f7e1f, _0x2b75d6[_0x5402cf + 0x3] = _0x310ea4 + _0xc0f2b4, _0x2b75d6[_0x5402cf + 0x4] = _0x310ea4 - _0xc0f2b4;
			}
			for (var _0x435522 = 0x0; _0x435522 < 0x8; ++_0x435522) {
				_0xbec93b = _0x2b75d6[_0x435522], _0x1d6091 = _0x2b75d6[_0x435522 + 0x8], _0x37d4b5 = _0x2b75d6[_0x435522 + 0x10], _0x34064a = _0x2b75d6[_0x435522 + 0x18], _0x51f34e = _0x2b75d6[_0x435522 + 0x20], _0x5c2f0e = _0x2b75d6[_0x435522 + 0x28], _0x3b1bfe = _0x2b75d6[_0x435522 + 0x30], _0x29687b = _0x2b75d6[_0x435522 + 0x38];
				if ((_0x1d6091 | _0x37d4b5 | _0x34064a | _0x51f34e | _0x5c2f0e | _0x3b1bfe | _0x29687b) === 0x0) {
					_0x300086 = _0x4ff87e * _0xbec93b + 0x2000 >> 0xe, _0x300086 = _0x300086 < -0x7f8 ? 0x0 : _0x300086 >= 0x7e8 ? 0xff : _0x300086 + 0x808 >> 0x4, _0x542333[_0x509af8 + _0x435522] = _0x300086, _0x542333[_0x509af8 + _0x435522 + 0x8] = _0x300086, _0x542333[_0x509af8 + _0x435522 + 0x10] = _0x300086, _0x542333[_0x509af8 + _0x435522 + 0x18] = _0x300086, _0x542333[_0x509af8 + _0x435522 + 0x20] = _0x300086, _0x542333[_0x509af8 + _0x435522 + 0x28] = _0x300086, _0x542333[_0x509af8 + _0x435522 + 0x30] = _0x300086, _0x542333[_0x509af8 + _0x435522 + 0x38] = _0x300086;
					continue;
				}
				_0x9b2289 = _0x4ff87e * _0xbec93b + 0x800 >> 0xc, _0x4f1159 = _0x4ff87e * _0x51f34e + 0x800 >> 0xc, _0x2b8ed5 = _0x37d4b5, _0x310ea4 = _0x3b1bfe, _0xc0f2b4 = _0x53ba6c * (_0x1d6091 - _0x29687b) + 0x800 >> 0xc, _0x34594a = _0x53ba6c * (_0x1d6091 + _0x29687b) + 0x800 >> 0xc, _0x3f7e1f = _0x34064a, _0x2f6e9a = _0x5c2f0e, _0x9b2289 = (_0x9b2289 + _0x4f1159 + 0x1 >> 0x1) + 0x1010, _0x4f1159 = _0x9b2289 - _0x4f1159, _0x300086 = _0x2b8ed5 * _0x34a8e7 + _0x310ea4 * _0x10e309 + 0x800 >> 0xc, _0x2b8ed5 = _0x2b8ed5 * _0x10e309 - _0x310ea4 * _0x34a8e7 + 0x800 >> 0xc, _0x310ea4 = _0x300086, _0xc0f2b4 = _0xc0f2b4 + _0x2f6e9a + 0x1 >> 0x1, _0x2f6e9a = _0xc0f2b4 - _0x2f6e9a, _0x34594a = _0x34594a + _0x3f7e1f + 0x1 >> 0x1, _0x3f7e1f = _0x34594a - _0x3f7e1f, _0x9b2289 = _0x9b2289 + _0x310ea4 + 0x1 >> 0x1, _0x310ea4 = _0x9b2289 - _0x310ea4, _0x4f1159 = _0x4f1159 + _0x2b8ed5 + 0x1 >> 0x1, _0x2b8ed5 = _0x4f1159 - _0x2b8ed5, _0x300086 = _0xc0f2b4 * _0x11add1 + _0x34594a * _0x466979 + 0x800 >> 0xc, _0xc0f2b4 = _0xc0f2b4 * _0x466979 - _0x34594a * _0x11add1 + 0x800 >> 0xc, _0x34594a = _0x300086, _0x300086 = _0x3f7e1f * _0x13ccf1 + _0x2f6e9a * _0x3796f1 + 0x800 >> 0xc, _0x3f7e1f = _0x3f7e1f * _0x3796f1 - _0x2f6e9a * _0x13ccf1 + 0x800 >> 0xc, _0x2f6e9a = _0x300086, _0xbec93b = _0x9b2289 + _0x34594a, _0x29687b = _0x9b2289 - _0x34594a, _0x1d6091 = _0x4f1159 + _0x2f6e9a, _0x3b1bfe = _0x4f1159 - _0x2f6e9a, _0x37d4b5 = _0x2b8ed5 + _0x3f7e1f, _0x5c2f0e = _0x2b8ed5 - _0x3f7e1f, _0x34064a = _0x310ea4 + _0xc0f2b4, _0x51f34e = _0x310ea4 - _0xc0f2b4, _0xbec93b = _0xbec93b < 0x10 ? 0x0 : _0xbec93b >= 0xff0 ? 0xff : _0xbec93b >> 0x4, _0x1d6091 = _0x1d6091 < 0x10 ? 0x0 : _0x1d6091 >= 0xff0 ? 0xff : _0x1d6091 >> 0x4, _0x37d4b5 = _0x37d4b5 < 0x10 ? 0x0 : _0x37d4b5 >= 0xff0 ? 0xff : _0x37d4b5 >> 0x4, _0x34064a = _0x34064a < 0x10 ? 0x0 : _0x34064a >= 0xff0 ? 0xff : _0x34064a >> 0x4, _0x51f34e = _0x51f34e < 0x10 ? 0x0 : _0x51f34e >= 0xff0 ? 0xff : _0x51f34e >> 0x4, _0x5c2f0e = _0x5c2f0e < 0x10 ? 0x0 : _0x5c2f0e >= 0xff0 ? 0xff : _0x5c2f0e >> 0x4, _0x3b1bfe = _0x3b1bfe < 0x10 ? 0x0 : _0x3b1bfe >= 0xff0 ? 0xff : _0x3b1bfe >> 0x4, _0x29687b = _0x29687b < 0x10 ? 0x0 : _0x29687b >= 0xff0 ? 0xff : _0x29687b >> 0x4, _0x542333[_0x509af8 + _0x435522] = _0xbec93b, _0x542333[_0x509af8 + _0x435522 + 0x8] = _0x1d6091, _0x542333[_0x509af8 + _0x435522 + 0x10] = _0x37d4b5, _0x542333[_0x509af8 + _0x435522 + 0x18] = _0x34064a, _0x542333[_0x509af8 + _0x435522 + 0x20] = _0x51f34e, _0x542333[_0x509af8 + _0x435522 + 0x28] = _0x5c2f0e, _0x542333[_0x509af8 + _0x435522 + 0x30] = _0x3b1bfe, _0x542333[_0x509af8 + _0x435522 + 0x38] = _0x29687b;
			}
		}

		function _0x5ba82d(_0x46c634, _0x161028) {
			var _0x4752cc = a0_0x4cc5,
				_0x5bfda1 = _0x161028[_0x4752cc(0x283)],
				_0x30b622 = _0x161028['blocksPerColumn'],
				_0x458968 = new Int16Array(0x40);
			for (var _0x5ba62d = 0x0; _0x5ba62d < _0x30b622; _0x5ba62d++) {
				for (var _0x31f23a = 0x0; _0x31f23a < _0x5bfda1; _0x31f23a++) {
					var _0x326da6 = _0x104fd3(_0x161028, _0x5ba62d, _0x31f23a);
					_0x381b22(_0x161028, _0x326da6, _0x458968);
				}
			}
			return _0x161028[_0x4752cc(0x2f0)];
		}

		function _0x1bcac6(_0x43d767, _0x230e8c, _0x5025f2) {
			var _0x473a15 = a0_0x4cc5;
			_0x5025f2 === void 0x0 && (_0x5025f2 = _0x230e8c);

			function _0x2a39dd(_0x88c02c) {
				return _0x43d767[_0x88c02c] << 0x8 | _0x43d767[_0x88c02c + 0x1];
			}
			var _0x1f0c02 = _0x43d767[_0x473a15(0x1a2)] - 0x1,
				_0x4e5ce7 = _0x5025f2 < _0x230e8c ? _0x5025f2 : _0x230e8c;
			if (_0x230e8c >= _0x1f0c02) return null;
			var _0x189aa5 = _0x2a39dd(_0x230e8c);
			if (_0x189aa5 >= 0xffc0 && _0x189aa5 <= 0xfffe) return {
				'invalid': null,
				'marker': _0x189aa5,
				'offset': _0x230e8c
			};
			var _0x327a68 = _0x2a39dd(_0x4e5ce7);
			while (!(_0x327a68 >= 0xffc0 && _0x327a68 <= 0xfffe)) {
				if (++_0x4e5ce7 >= _0x1f0c02) return null;
				_0x327a68 = _0x2a39dd(_0x4e5ce7);
			}
			return {
				'invalid': _0x189aa5[_0x473a15(0x35f)](0x10),
				'marker': _0x327a68,
				'offset': _0x4e5ce7
			};
		}
		return _0x3ac17e[_0x4ac76e(0x34f)] = {
			'width': 0x0,
			'height': 0x0,
			'parse': function(_0x47087b, _0x10aa04) {
				var _0x2061e6 = _0x4ac76e,
					_0x382d8b = (_0x10aa04 === void 0x0 ? {} : _0x10aa04)[_0x2061e6(0x310)],
					_0x268828 = _0x382d8b === void 0x0 ? null : _0x382d8b;

				function _0x455edb() {
					var _0x43c9a0 = _0x47087b[_0x3507bd] << 0x8 | _0x47087b[_0x3507bd + 0x1];
					return _0x3507bd += 0x2, _0x43c9a0;
				}

				function _0x1c62c1() {
					var _0x14e4c4 = _0x2061e6,
						_0x49f38e = _0x455edb(),
						_0x34e05c = _0x3507bd + _0x49f38e - 0x2,
						_0x3753b4 = _0x1bcac6(_0x47087b, _0x34e05c, _0x3507bd);
					_0x3753b4 && _0x3753b4[_0x14e4c4(0x1a3)] && (warn(_0x14e4c4(0x1e9) + _0x3753b4[_0x14e4c4(0x1a3)]), _0x34e05c = _0x3753b4[_0x14e4c4(0x1a7)]);
					var _0x3b895e = _0x47087b['subarray'](_0x3507bd, _0x34e05c);
					return _0x3507bd += _0x3b895e[_0x14e4c4(0x1a2)], _0x3b895e;
				}

				function _0x308efc(_0xb55e07) {
					var _0x8c6ae9 = _0x2061e6,
						_0x1036ef = Math[_0x8c6ae9(0x2fd)](_0xb55e07['samplesPerLine'] / 0x8 / _0xb55e07[_0x8c6ae9(0x312)]),
						_0x4b5f32 = Math[_0x8c6ae9(0x2fd)](_0xb55e07['scanLines'] / 0x8 / _0xb55e07['maxV']);
					for (var _0x140882 = 0x0; _0x140882 < _0xb55e07[_0x8c6ae9(0x1fa)][_0x8c6ae9(0x1a2)]; _0x140882++) {
						_0x44f222 = _0xb55e07[_0x8c6ae9(0x1fa)][_0x140882];
						var _0x242d38 = Math[_0x8c6ae9(0x2fd)](Math['ceil'](_0xb55e07['samplesPerLine'] / 0x8) * _0x44f222['h'] / _0xb55e07[_0x8c6ae9(0x312)]),
							_0x255424 = Math[_0x8c6ae9(0x2fd)](Math[_0x8c6ae9(0x2fd)](_0xb55e07['scanLines'] / 0x8) * _0x44f222['v'] / _0xb55e07[_0x8c6ae9(0x380)]),
							_0xe54697 = _0x1036ef * _0x44f222['h'],
							_0x5a3361 = _0x4b5f32 * _0x44f222['v'],
							_0x2eea38 = 0x40 * _0x5a3361 * (_0xe54697 + 0x1);
						_0x44f222[_0x8c6ae9(0x2f0)] = new Int16Array(_0x2eea38), _0x44f222['blocksPerLine'] = _0x242d38, _0x44f222[_0x8c6ae9(0x1ae)] = _0x255424;
					}
					_0xb55e07[_0x8c6ae9(0x3ab)] = _0x1036ef, _0xb55e07[_0x8c6ae9(0x37e)] = _0x4b5f32;
				}
				var _0x3507bd = 0x0,
					_0x34ea33 = null,
					_0xc9528b = null,
					_0xf99722, _0x31fbe1, _0x546e9b = 0x0,
					_0xfa031a = [],
					_0x1ecdf0 = [],
					_0x57b0f1 = [],
					_0x2642c5 = _0x455edb();
				if (_0x2642c5 !== 0xffd8) throw new JpegError('SOI\x20not\x20found');
				_0x2642c5 = _0x455edb();
				_0x157de3: while (_0x2642c5 !== 0xffd9) {
					var _0x471447, _0x2ec093, _0x361d43;
					switch (_0x2642c5) {
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
							var _0xecdb63 = _0x1c62c1();
							_0x2642c5 === 0xffe0 && (_0xecdb63[0x0] === 0x4a && _0xecdb63[0x1] === 0x46 && _0xecdb63[0x2] === 0x49 && _0xecdb63[0x3] === 0x46 && _0xecdb63[0x4] === 0x0 && (_0x34ea33 = {
								'version': {
									'major': _0xecdb63[0x5],
									'minor': _0xecdb63[0x6]
								},
								'densityUnits': _0xecdb63[0x7],
								'xDensity': _0xecdb63[0x8] << 0x8 | _0xecdb63[0x9],
								'yDensity': _0xecdb63[0xa] << 0x8 | _0xecdb63[0xb],
								'thumbWidth': _0xecdb63[0xc],
								'thumbHeight': _0xecdb63[0xd],
								'thumbData': _0xecdb63[_0x2061e6(0x20b)](0xe, 0xe + 0x3 * _0xecdb63[0xc] * _0xecdb63[0xd])
							}));
							_0x2642c5 === 0xffee && (_0xecdb63[0x0] === 0x41 && _0xecdb63[0x1] === 0x64 && _0xecdb63[0x2] === 0x6f && _0xecdb63[0x3] === 0x62 && _0xecdb63[0x4] === 0x65 && (_0xc9528b = {
								'version': _0xecdb63[0x5] << 0x8 | _0xecdb63[0x6],
								'flags0': _0xecdb63[0x7] << 0x8 | _0xecdb63[0x8],
								'flags1': _0xecdb63[0x9] << 0x8 | _0xecdb63[0xa],
								'transformCode': _0xecdb63[0xb]
							}));
							break;
						case 0xffdb:
							var _0xc99964 = _0x455edb(),
								_0x340a21 = _0xc99964 + _0x3507bd - 0x2,
								_0x11d055;
							while (_0x3507bd < _0x340a21) {
								var _0x310c57 = _0x47087b[_0x3507bd++],
									_0x18ee7b = new Uint16Array(0x40);
								if (_0x310c57 >> 0x4 === 0x0)
									for (_0x2ec093 = 0x0; _0x2ec093 < 0x40; _0x2ec093++) {
										_0x11d055 = _0x5ce5c0[_0x2ec093], _0x18ee7b[_0x11d055] = _0x47087b[_0x3507bd++];
									} else {
										if (_0x310c57 >> 0x4 === 0x1)
											for (_0x2ec093 = 0x0; _0x2ec093 < 0x40; _0x2ec093++) {
												_0x11d055 = _0x5ce5c0[_0x2ec093], _0x18ee7b[_0x11d055] = _0x455edb();
											} else throw new JpegError(_0x2061e6(0x3ba));
									}
								_0xfa031a[_0x310c57 & 0xf] = _0x18ee7b;
							}
							break;
						case 0xffc0:
						case 0xffc1:
						case 0xffc2:
							if (_0xf99722) throw new JpegError(_0x2061e6(0x374));
							_0x455edb(), _0xf99722 = {}, _0xf99722['extended'] = _0x2642c5 === 0xffc1, _0xf99722[_0x2061e6(0x329)] = _0x2642c5 === 0xffc2, _0xf99722['precision'] = _0x47087b[_0x3507bd++];
							var _0x27067e = _0x455edb();
							_0xf99722[_0x2061e6(0x327)] = _0x268828 || _0x27067e, _0xf99722[_0x2061e6(0x34d)] = _0x455edb(), _0xf99722['components'] = [], _0xf99722[_0x2061e6(0x1fe)] = {};
							var _0x241f3c = _0x47087b[_0x3507bd++],
								_0x1eb737, _0x2ac52f = 0x0,
								_0x5d373c = 0x0;
							for (_0x471447 = 0x0; _0x471447 < _0x241f3c; _0x471447++) {
								_0x1eb737 = _0x47087b[_0x3507bd];
								var _0x5ec88b = _0x47087b[_0x3507bd + 0x1] >> 0x4,
									_0x1131de = _0x47087b[_0x3507bd + 0x1] & 0xf;
								_0x2ac52f < _0x5ec88b && (_0x2ac52f = _0x5ec88b);
								_0x5d373c < _0x1131de && (_0x5d373c = _0x1131de);
								var _0x451317 = _0x47087b[_0x3507bd + 0x2];
								_0x361d43 = _0xf99722[_0x2061e6(0x1fa)][_0x2061e6(0x337)]({
									'h': _0x5ec88b,
									'v': _0x1131de,
									'quantizationId': _0x451317,
									'quantizationTable': null
								}), _0xf99722[_0x2061e6(0x1fe)][_0x1eb737] = _0x361d43 - 0x1, _0x3507bd += 0x3;
							}
							_0xf99722[_0x2061e6(0x312)] = _0x2ac52f, _0xf99722['maxV'] = _0x5d373c, _0x308efc(_0xf99722);
							break;
						case 0xffc4:
							var _0x195633 = _0x455edb();
							for (_0x471447 = 0x2; _0x471447 < _0x195633;) {
								var _0x2fbd0b = _0x47087b[_0x3507bd++],
									_0x2ed33c = new Uint8Array(0x10),
									_0x54f9c5 = 0x0;
								for (_0x2ec093 = 0x0; _0x2ec093 < 0x10; _0x2ec093++, _0x3507bd++) {
									_0x54f9c5 += _0x2ed33c[_0x2ec093] = _0x47087b[_0x3507bd];
								}
								var _0x53561b = new Uint8Array(_0x54f9c5);
								for (_0x2ec093 = 0x0; _0x2ec093 < _0x54f9c5; _0x2ec093++, _0x3507bd++) {
									_0x53561b[_0x2ec093] = _0x47087b[_0x3507bd];
								}
								_0x471447 += 0x11 + _0x54f9c5, (_0x2fbd0b >> 0x4 === 0x0 ? _0x57b0f1 : _0x1ecdf0)[_0x2fbd0b & 0xf] = _0x22b658(_0x2ed33c, _0x53561b);
							}
							break;
						case 0xffdd:
							_0x455edb(), _0x31fbe1 = _0x455edb();
							break;
						case 0xffda:
							var _0x35eafd = ++_0x546e9b === 0x1 && !_0x268828;
							_0x455edb();
							var _0x33ba01 = _0x47087b[_0x3507bd++],
								_0x1d264e = [],
								_0x44f222;
							for (_0x471447 = 0x0; _0x471447 < _0x33ba01; _0x471447++) {
								var _0x5b5dd8 = _0xf99722[_0x2061e6(0x1fe)][_0x47087b[_0x3507bd++]];
								_0x44f222 = _0xf99722[_0x2061e6(0x1fa)][_0x5b5dd8];
								var _0x1b45a7 = _0x47087b[_0x3507bd++];
								_0x44f222[_0x2061e6(0x372)] = _0x57b0f1[_0x1b45a7 >> 0x4], _0x44f222[_0x2061e6(0x278)] = _0x1ecdf0[_0x1b45a7 & 0xf], _0x1d264e[_0x2061e6(0x337)](_0x44f222);
							}
							var _0x3f1301 = _0x47087b[_0x3507bd++],
								_0x1ed81a = _0x47087b[_0x3507bd++],
								_0x175844 = _0x47087b[_0x3507bd++];
							try {
								var _0x279f48 = _0x2797c3(_0x47087b, _0x3507bd, _0xf99722, _0x1d264e, _0x31fbe1, _0x3f1301, _0x1ed81a, _0x175844 >> 0x4, _0x175844 & 0xf, _0x35eafd);
								_0x3507bd += _0x279f48;
							} catch (_0xf2c403) {
								if (_0xf2c403 instanceof DNLMarkerError) return warn(_0xf2c403[_0x2061e6(0x1cd)] + '\x20--\x20attempting\x20to\x20re-parse\x20the\x20JPEG\x20image.'), this[_0x2061e6(0x239)](_0x47087b, {
									'dnlScanLines': _0xf2c403[_0x2061e6(0x327)]
								});
								else {
									if (_0xf2c403 instanceof EOIMarkerError) {
										warn(_0xf2c403['message'] + _0x2061e6(0x26b));
										break _0x157de3;
									}
								}
								throw _0xf2c403;
							}
							break;
						case 0xffdc:
							_0x3507bd += 0x4;
							break;
						case 0xffff:
							_0x47087b[_0x3507bd] !== 0xff && _0x3507bd--;
							break;
						default:
							if (_0x47087b[_0x3507bd - 0x3] === 0xff && _0x47087b[_0x3507bd - 0x2] >= 0xc0 && _0x47087b[_0x3507bd - 0x2] <= 0xfe) {
								_0x3507bd -= 0x3;
								break;
							}
							var _0x14df78 = _0x1bcac6(_0x47087b, _0x3507bd - 0x2);
							if (_0x14df78 && _0x14df78[_0x2061e6(0x1a3)]) {
								warn(_0x2061e6(0x3c0) + _0x14df78[_0x2061e6(0x1a3)]), _0x3507bd = _0x14df78['offset'];
								break;
							}
							throw new JpegError(_0x2061e6(0x290) + _0x2642c5[_0x2061e6(0x35f)](0x10));
					}
					_0x2642c5 = _0x455edb();
				}
				this[_0x2061e6(0x390)] = _0xf99722[_0x2061e6(0x34d)], this[_0x2061e6(0x27f)] = _0xf99722[_0x2061e6(0x327)], this['jfif'] = _0x34ea33, this[_0x2061e6(0x340)] = _0xc9528b, this['components'] = [];
				for (_0x471447 = 0x0; _0x471447 < _0xf99722[_0x2061e6(0x1fa)][_0x2061e6(0x1a2)]; _0x471447++) {
					_0x44f222 = _0xf99722[_0x2061e6(0x1fa)][_0x471447];
					var _0x30014e = _0xfa031a[_0x44f222[_0x2061e6(0x287)]];
					_0x30014e && (_0x44f222[_0x2061e6(0x208)] = _0x30014e), this[_0x2061e6(0x1fa)][_0x2061e6(0x337)]({
						'output': _0x5ba82d(_0xf99722, _0x44f222),
						'scaleX': _0x44f222['h'] / _0xf99722[_0x2061e6(0x312)],
						'scaleY': _0x44f222['v'] / _0xf99722[_0x2061e6(0x380)],
						'blocksPerLine': _0x44f222[_0x2061e6(0x283)],
						'blocksPerColumn': _0x44f222[_0x2061e6(0x1ae)]
					});
				}
				this[_0x2061e6(0x2f7)] = this[_0x2061e6(0x1fa)]['length'];
			},
			'_getLinearizedBlockData': function(_0x527afe, _0x4f08af, _0x49d853, _0x14e7a0, _0x4de541) {
				var _0xbcd688 = _0x4ac76e;
				_0x49d853 === void 0x0 && (_0x49d853 = ![]);
				_0x14e7a0 === void 0x0 && (_0x14e7a0 = 0x0);
				_0x4de541 === void 0x0 && (_0x4de541 = null);
				var _0x5b5b23 = ![],
					_0x41fabf = this[_0xbcd688(0x390)] / _0x527afe,
					_0x267144 = this[_0xbcd688(0x27f)] / _0x4f08af,
					_0x495550, _0x433fbd, _0xfc1b9a, _0x504de9, _0x85a4fa, _0xcb1229, _0x2c69bb, _0x5cc166, _0x214693, _0x1c8212, _0x559684 = 0x0,
					_0x38d22f, _0x70656a = this[_0xbcd688(0x1fa)][_0xbcd688(0x1a2)],
					_0x144531 = _0x527afe * _0x4f08af * _0x70656a;
				_0x70656a == 0x3 && _0x49d853 && (_0x144531 = _0x527afe * _0x4f08af * 0x4);
				var _0x444b23 = new ArrayBuffer(_0x144531 + _0x14e7a0),
					_0x5322e0 = new Uint8ClampedArray(_0x444b23, _0x14e7a0),
					_0x6637bb = new Uint32Array(_0x527afe),
					_0x19d8c7 = 0xfffffff8;
				if (_0x70656a == 0x3 && _0x49d853) {
					for (_0x2c69bb = 0x0; _0x2c69bb < _0x70656a; _0x2c69bb++) {
						_0x495550 = this[_0xbcd688(0x1fa)][_0x2c69bb], _0x433fbd = _0x495550[_0xbcd688(0x31f)] * _0x41fabf, _0xfc1b9a = _0x495550['scaleY'] * _0x267144, _0x559684 = _0x2c69bb, _0x38d22f = _0x495550['output'], _0x504de9 = _0x495550[_0xbcd688(0x283)] + 0x1 << 0x3;
						for (_0x85a4fa = 0x0; _0x85a4fa < _0x527afe; _0x85a4fa++) {
							_0x5cc166 = 0x0 | _0x85a4fa * _0x433fbd, _0x6637bb[_0x85a4fa] = (_0x5cc166 & _0x19d8c7) << 0x3 | _0x5cc166 & 0x7;
						}
						for (_0xcb1229 = 0x0; _0xcb1229 < _0x4f08af; _0xcb1229++) {
							_0x5cc166 = 0x0 | _0xcb1229 * _0xfc1b9a, _0x1c8212 = _0x504de9 * (_0x5cc166 & _0x19d8c7) | (_0x5cc166 & 0x7) << 0x3;
							for (_0x85a4fa = 0x0; _0x85a4fa < _0x527afe; _0x85a4fa++) {
								_0x5322e0[_0x559684] = _0x38d22f[_0x1c8212 + _0x6637bb[_0x85a4fa]], _0x559684 += 0x4;
							}
						}
					}
					_0x559684 = 0x3;
					if (_0x4de541 != null) {
						var _0x2de231 = 0x0;
						for (_0xcb1229 = 0x0; _0xcb1229 < _0x4f08af; _0xcb1229++) {
							for (_0x85a4fa = 0x0; _0x85a4fa < _0x527afe; _0x85a4fa++) {
								_0x5322e0[_0x559684] = _0x4de541[_0x2de231++], _0x559684 += 0x4;
							}
						}
					} else
						for (_0xcb1229 = 0x0; _0xcb1229 < _0x4f08af; _0xcb1229++) {
							for (_0x85a4fa = 0x0; _0x85a4fa < _0x527afe; _0x85a4fa++) {
								_0x5322e0[_0x559684] = 0xff, _0x559684 += 0x4;
							}
						}
				} else
					for (_0x2c69bb = 0x0; _0x2c69bb < _0x70656a; _0x2c69bb++) {
						_0x495550 = this[_0xbcd688(0x1fa)][_0x2c69bb], _0x433fbd = _0x495550[_0xbcd688(0x31f)] * _0x41fabf, _0xfc1b9a = _0x495550[_0xbcd688(0x398)] * _0x267144, _0x559684 = _0x2c69bb, _0x38d22f = _0x495550['output'], _0x504de9 = _0x495550[_0xbcd688(0x283)] + 0x1 << 0x3;
						for (_0x85a4fa = 0x0; _0x85a4fa < _0x527afe; _0x85a4fa++) {
							_0x5cc166 = 0x0 | _0x85a4fa * _0x433fbd, _0x6637bb[_0x85a4fa] = (_0x5cc166 & _0x19d8c7) << 0x3 | _0x5cc166 & 0x7;
						}
						for (_0xcb1229 = 0x0; _0xcb1229 < _0x4f08af; _0xcb1229++) {
							_0x5cc166 = 0x0 | _0xcb1229 * _0xfc1b9a, _0x1c8212 = _0x504de9 * (_0x5cc166 & _0x19d8c7) | (_0x5cc166 & 0x7) << 0x3;
							for (_0x85a4fa = 0x0; _0x85a4fa < _0x527afe; _0x85a4fa++) {
								_0x5322e0[_0x559684] = _0x38d22f[_0x1c8212 + _0x6637bb[_0x85a4fa]], _0x559684 += _0x70656a;
							}
						}
					}
				var _0x449728 = this[_0xbcd688(0x2e6)];
				!_0x5b5b23 && _0x70656a === 0x4 && !_0x449728 && (_0x449728 = new Int32Array([-0x100, 0xff, -0x100, 0xff, -0x100, 0xff, -0x100, 0xff]));
				if (_0x449728) {
					if (_0x70656a == 0x3 && _0x49d853)
						for (_0x2c69bb = 0x0; _0x2c69bb < _0x144531;) {
							for (_0x5cc166 = 0x0, _0x214693 = 0x0; _0x5cc166 < _0x70656a; _0x5cc166++, _0x2c69bb++, _0x214693 += 0x2) {
								_0x5322e0[_0x2c69bb] = (_0x5322e0[_0x2c69bb] * _0x449728[_0x214693] >> 0x8) + _0x449728[_0x214693 + 0x1];
							}
							_0x2c69bb++;
						} else
							for (_0x2c69bb = 0x0; _0x2c69bb < _0x144531;) {
								for (_0x5cc166 = 0x0, _0x214693 = 0x0; _0x5cc166 < _0x70656a; _0x5cc166++, _0x2c69bb++, _0x214693 += 0x2) {
									_0x5322e0[_0x2c69bb] = (_0x5322e0[_0x2c69bb] * _0x449728[_0x214693] >> 0x8) + _0x449728[_0x214693 + 0x1];
								}
							}
				}
				return _0x5322e0;
			},
			get '_isColorConversionNeeded'() {
				var _0x33f699 = _0x4ac76e;
				if (this[_0x33f699(0x340)]) return !!this[_0x33f699(0x340)]['transformCode'];
				if (this[_0x33f699(0x2f7)] === 0x3) {
					if (this[_0x33f699(0x28b)] === 0x0) return ![];
					return !![];
				}
				if (this['_colorTransform'] === 0x1) return !![];
				return ![];
			},
			'_convertYccToRgb': function _0x1d6ee1(_0xd82141, _0x17504d) {
				var _0x1f9bd5 = _0x4ac76e;
				_0x17504d === void 0x0 && (_0x17504d = ![]);
				var _0x28bd34, _0x2af717, _0x2ce849, _0x8822a3, _0x47e453;
				if (_0x17504d)
					for (_0x8822a3 = 0x0, _0x47e453 = _0xd82141['length']; _0x8822a3 < _0x47e453; _0x8822a3 += 0x3) {
						_0x28bd34 = _0xd82141[_0x8822a3], _0x2af717 = _0xd82141[_0x8822a3 + 0x1], _0x2ce849 = _0xd82141[_0x8822a3 + 0x2], _0xd82141[_0x8822a3] = _0x28bd34 - 179.456 + 1.402 * _0x2ce849, _0xd82141[_0x8822a3 + 0x1] = _0x28bd34 + 135.459 - 0.344 * _0x2af717 - 0.714 * _0x2ce849, _0xd82141[_0x8822a3 + 0x2] = _0x28bd34 - 226.816 + 1.772 * _0x2af717, _0x8822a3++;
					} else
						for (_0x8822a3 = 0x0, _0x47e453 = _0xd82141[_0x1f9bd5(0x1a2)]; _0x8822a3 < _0x47e453; _0x8822a3 += 0x3) {
							_0x28bd34 = _0xd82141[_0x8822a3], _0x2af717 = _0xd82141[_0x8822a3 + 0x1], _0x2ce849 = _0xd82141[_0x8822a3 + 0x2], _0xd82141[_0x8822a3] = _0x28bd34 - 179.456 + 1.402 * _0x2ce849, _0xd82141[_0x8822a3 + 0x1] = _0x28bd34 + 135.459 - 0.344 * _0x2af717 - 0.714 * _0x2ce849, _0xd82141[_0x8822a3 + 0x2] = _0x28bd34 - 226.816 + 1.772 * _0x2af717;
						}
				return _0xd82141;
			},
			'_convertYcckToRgb': function _0x307213(_0x302a9a) {
				var _0x3628fa = _0x4ac76e,
					_0x1faf2f, _0x4c8403, _0x3d6ace, _0x247aa6, _0x388cd0 = 0x0;
				for (var _0x41e8c1 = 0x0, _0x3e2485 = _0x302a9a[_0x3628fa(0x1a2)]; _0x41e8c1 < _0x3e2485; _0x41e8c1 += 0x4) {
					_0x1faf2f = _0x302a9a[_0x41e8c1], _0x4c8403 = _0x302a9a[_0x41e8c1 + 0x1], _0x3d6ace = _0x302a9a[_0x41e8c1 + 0x2], _0x247aa6 = _0x302a9a[_0x41e8c1 + 0x3], _0x302a9a[_0x388cd0++] = -122.67195406894 + _0x4c8403 * (-0.0000660635669420364 * _0x4c8403 + 0.000437130475926232 * _0x3d6ace - 0.000054080610064599 * _0x1faf2f + 0.00048449797120281 * _0x247aa6 - 0.154362151871126) + _0x3d6ace * (-0.000957964378445773 * _0x3d6ace + 0.000817076911346625 * _0x1faf2f - 0.00477271405408747 * _0x247aa6 + 1.53380253221734) + _0x1faf2f * (0.000961250184130688 * _0x1faf2f - 0.00266257332283933 * _0x247aa6 + 0.48357088451265) + _0x247aa6 * (-0.000336197177618394 * _0x247aa6 + 0.484791561490776), _0x302a9a[_0x388cd0++] = 107.268039397724 + _0x4c8403 * (0.0000219927104525741 * _0x4c8403 - 0.000640992018297945 * _0x3d6ace + 0.000659397001245577 * _0x1faf2f + 0.000426105652938837 * _0x247aa6 - 0.176491792462875) + _0x3d6ace * (-0.000778269941513683 * _0x3d6ace + 0.00130872261408275 * _0x1faf2f + 0.000770482631801132 * _0x247aa6 - 0.151051492775562) + _0x1faf2f * (0.00126935368114843 * _0x1faf2f - 0.00265090189010898 * _0x247aa6 + 0.25802910206845) + _0x247aa6 * (-0.000318913117588328 * _0x247aa6 - 0.213742400323665), _0x302a9a[_0x388cd0++] = -20.810012546947 + _0x4c8403 * (-0.000570115196973677 * _0x4c8403 - 0.0000263409051004589 * _0x3d6ace + 0.0020741088115012 * _0x1faf2f - 0.00288260236853442 * _0x247aa6 + 0.814272968359295) + _0x3d6ace * (-0.0000153496057440975 * _0x3d6ace - 0.000132689043961446 * _0x1faf2f + 0.000560833691242812 * _0x247aa6 - 0.195152027534049) + _0x1faf2f * (0.00174418132927582 * _0x1faf2f - 0.00255243321439347 * _0x247aa6 + 0.116935020465145) + _0x247aa6 * (-0.000343531996510555 * _0x247aa6 + 0.24165260232407);
				}
				return _0x302a9a['subarray'](0x0, _0x388cd0);
			},
			'_convertYcckToCmyk': function _0x5d3264(_0x1af588) {
				var _0x29e9b2 = _0x4ac76e,
					_0x4fb186, _0x11433f, _0x207680;
				for (var _0x4bac4d = 0x0, _0x32ccfa = _0x1af588[_0x29e9b2(0x1a2)]; _0x4bac4d < _0x32ccfa; _0x4bac4d += 0x4) {
					_0x4fb186 = _0x1af588[_0x4bac4d], _0x11433f = _0x1af588[_0x4bac4d + 0x1], _0x207680 = _0x1af588[_0x4bac4d + 0x2], _0x1af588[_0x4bac4d] = 434.456 - _0x4fb186 - 1.402 * _0x207680, _0x1af588[_0x4bac4d + 0x1] = 119.541 - _0x4fb186 + 0.344 * _0x11433f + 0.714 * _0x207680, _0x1af588[_0x4bac4d + 0x2] = 481.816 - _0x4fb186 - 1.772 * _0x11433f;
				}
				return _0x1af588;
			},
			'_convertCmykToRgb': function _0x4af108(_0x48496e) {
				var _0xb74e94, _0x4ef2af, _0x570a95, _0x6e109, _0x1082e5 = 0x0,
					_0x115135 = 0x1 / 0xff;
				for (var _0x24c01c = 0x0, _0x10ac07 = _0x48496e['length']; _0x24c01c < _0x10ac07; _0x24c01c += 0x4) {
					_0xb74e94 = _0x48496e[_0x24c01c] * _0x115135, _0x4ef2af = _0x48496e[_0x24c01c + 0x1] * _0x115135, _0x570a95 = _0x48496e[_0x24c01c + 0x2] * _0x115135, _0x6e109 = _0x48496e[_0x24c01c + 0x3] * _0x115135, _0x48496e[_0x1082e5++] = 0xff + _0xb74e94 * (-4.387332384609988 * _0xb74e94 + 54.48615194189176 * _0x4ef2af + 18.82290502165302 * _0x570a95 + 212.25662451639585 * _0x6e109 - 285.2331026137004) + _0x4ef2af * (1.7149763477362134 * _0x4ef2af - 5.6096736904047315 * _0x570a95 - 17.873870861415444 * _0x6e109 - 5.497006427196366) + _0x570a95 * (-2.5217340131683033 * _0x570a95 - 21.248923337353073 * _0x6e109 + 17.5119270841813) - _0x6e109 * (21.86122147463605 * _0x6e109 + 189.48180835922747), _0x48496e[_0x1082e5++] = 0xff + _0xb74e94 * (8.841041422036149 * _0xb74e94 + 60.118027045597366 * _0x4ef2af + 6.871425592049007 * _0x570a95 + 31.159100130055922 * _0x6e109 - 79.2970844816548) + _0x4ef2af * (-15.310361306967817 * _0x4ef2af + 17.575251261109482 * _0x570a95 + 131.35250912493976 * _0x6e109 - 190.9453302588951) + _0x570a95 * (4.444339102852739 * _0x570a95 + 9.8632861493405 * _0x6e109 - 24.86741582555878) - _0x6e109 * (20.737325471181034 * _0x6e109 + 187.80453709719578), _0x48496e[_0x1082e5++] = 0xff + _0xb74e94 * (0.8842522430003296 * _0xb74e94 + 8.078677503112928 * _0x4ef2af + 30.89978309703729 * _0x570a95 - 0.23883238689178934 * _0x6e109 - 14.183576799673286) + _0x4ef2af * (10.49593273432072 * _0x4ef2af + 63.02378494754052 * _0x570a95 + 50.606957656360734 * _0x6e109 - 112.23884253719248) + _0x570a95 * (0.03296041114873217 * _0x570a95 + 115.60384449646641 * _0x6e109 - 193.58209356861505) - _0x6e109 * (22.33816807309886 * _0x6e109 + 180.12613974708367);
				}
				return _0x48496e['subarray'](0x0, _0x1082e5);
			},
			'getData': function(_0x31cbc4, _0x3349ae, _0x354f4b, _0x2fc7ab, _0x56fefe, _0x3e17c5) {
				var _0x113baa = _0x4ac76e;
				_0x354f4b === void 0x0 && (_0x354f4b = ![]);
				_0x2fc7ab === void 0x0 && (_0x2fc7ab = ![]);
				_0x56fefe === void 0x0 && (_0x56fefe = 0x0);
				_0x3e17c5 === void 0x0 && (_0x3e17c5 = null);
				if (this[_0x113baa(0x2f7)] > 0x4) throw new JpegError('Unsupported\x20color\x20mode');
				var _0x124904 = this[_0x113baa(0x3a6)](_0x31cbc4, _0x3349ae, _0x2fc7ab, _0x56fefe, _0x3e17c5);
				if (this[_0x113baa(0x2f7)] === 0x1 && _0x354f4b) {
					var _0x286b0f = _0x124904[_0x113baa(0x1a2)],
						_0x2b65ec = new Uint8ClampedArray(_0x286b0f * 0x3),
						_0x445256 = 0x0;
					for (var _0x41f129 = 0x0; _0x41f129 < _0x286b0f; _0x41f129++) {
						var _0x5b2d6e = _0x124904[_0x41f129];
						_0x2b65ec[_0x445256++] = _0x5b2d6e, _0x2b65ec[_0x445256++] = _0x5b2d6e, _0x2b65ec[_0x445256++] = _0x5b2d6e;
					}
					return _0x2b65ec;
				} else {
					if (this[_0x113baa(0x2f7)] === 0x3 && this[_0x113baa(0x1e4)]) return this[_0x113baa(0x351)](_0x124904, _0x2fc7ab);
					else {
						if (this[_0x113baa(0x2f7)] === 0x4) {
							if (this['_isColorConversionNeeded']) {
								if (_0x354f4b) return this['_convertYcckToRgb'](_0x124904);
								return this['_convertYcckToCmyk'](_0x124904);
							} else {
								if (_0x354f4b) return this[_0x113baa(0x1f7)](_0x124904);
							}
						}
					}
				}
				return _0x124904;
			}
		}, _0x3ac17e;
	}(),
	WeChatUI;

function a0_0x4cc5(_0xacfada, _0xe99120) {
	var _0x15dd94 = a0_0x15dd();
	return a0_0x4cc5 = function(_0x4cc58f, _0x49ceae) {
		_0x4cc58f = _0x4cc58f - 0x1a1;
		var _0x2e68c8 = _0x15dd94[_0x4cc58f];
		return _0x2e68c8;
	}, a0_0x4cc5(_0xacfada, _0xe99120);
}(function(_0x3befa1) {
	var _0x7b93fb = a0_0x2da875,
		_0x9df1de = (function() {
			var _0x5547d2 = a0_0x4cc5;

			function _0x595629() {}
			return Object['defineProperty'](_0x595629, _0x5547d2(0x36b), {
				'get': function() {
					var _0x194b45 = _0x5547d2;
					return DEBUG ? this[_0x194b45(0x24f)] : this[_0x194b45(0x20e)];
				},
				'enumerable': !![],
				'configurable': !![]
			}), Object[_0x5547d2(0x384)](_0x595629, _0x5547d2(0x24e), {
				'get': function() {
					var _0x403e36 = _0x5547d2;
					return DEBUG ? this[_0x403e36(0x1e1)] : this['dev_notice'];
				},
				'enumerable': !![],
				'configurable': !![]
			}), _0x595629[_0x5547d2(0x20e)] = _0x5547d2(0x23a), _0x595629[_0x5547d2(0x24f)] = _0x5547d2(0x23a), _0x595629[_0x5547d2(0x1f2)] = 'https://api.s1.l2i.cc:82/Notice/noticeList', _0x595629[_0x5547d2(0x1e1)] = _0x5547d2(0x264), _0x595629;
		}());
	_0x3befa1[_0x7b93fb(0x263)] = _0x9df1de;
}(WeChatUI || (WeChatUI = {})));
var WeChatUI;
(function(_0x130704) {
	var _0x5c5975 = a0_0x2da875,
		_0x551b22 = laya['ui'][_0x5c5975(0x336)],
		_0x2e32ba = function(_0x3b6c93) {
			var _0x236a65 = _0x5c5975;
			__extends(_0x2fa16f, _0x3b6c93);

			function _0x2fa16f() {
				return _0x3b6c93['call'](this) || this;
			}
			return _0x2fa16f[_0x236a65(0x34f)]['createChildren'] = function() {
				var _0x1e9776 = _0x236a65;
				_0x551b22['regComponent'](_0x1e9776(0x383), laya[_0x1e9776(0x1b7)][_0x1e9776(0x383)]), _0x3b6c93[_0x1e9776(0x34f)][_0x1e9776(0x26d)][_0x1e9776(0x32d)](this), this['createView'](_0x130704[_0x1e9776(0x24c)][_0x1e9776(0x3a0)]);
			}, _0x2fa16f[_0x236a65(0x3a0)] = {
				'type': _0x236a65(0x336),
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
						'var': _0x236a65(0x385),
						'skin': _0x236a65(0x244)
					}
				}, {
					'type': _0x236a65(0x27a),
					'props': {
						'y': 0x410,
						'x': 0x0,
						'width': 0x2d0,
						'var': _0x236a65(0x3b8),
						'name': _0x236a65(0x3b8),
						'height': 0xf0
					},
					'child': [{
						'type': _0x236a65(0x32f),
						'props': {
							'y': -0x25,
							'x': 0x6b,
							'width': 0x1fa,
							'var': _0x236a65(0x1ea),
							'skin': 'login/progress_jz_jdt1_0.png',
							'height': 0x1a
						}
					}, {
						'type': _0x236a65(0x32f),
						'props': {
							'y': 0x5,
							'x': 0x6b,
							'width': 0x1fa,
							'var': _0x236a65(0x2e5),
							'skin': _0x236a65(0x3a3),
							'height': 0x1a
						}
					}, {
						'type': 'Image',
						'props': {
							'y': -0x1f,
							'x': 0x79,
							'width': 0x1de,
							'var': 'progressBar1',
							'skin': _0x236a65(0x20f),
							'height': 0xe
						}
					}, {
						'type': _0x236a65(0x32f),
						'props': {
							'y': 0xb,
							'x': 0x79,
							'width': 0x1de,
							'var': _0x236a65(0x321),
							'skin': _0x236a65(0x20f),
							'height': 0xe
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': -0x4b,
							'x': 0x0,
							'width': 0x2d0,
							'var': _0x236a65(0x1ff),
							'text': '正在进入场景......',
							'strokeColor': _0x236a65(0x3b2),
							'stroke': 0x2,
							'fontSize': 0x18,
							'font': 'SimHei',
							'color': _0x236a65(0x1a8),
							'align': _0x236a65(0x1f9)
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': -0x24,
							'x': 0x0,
							'width': 0x2d0,
							'var': _0x236a65(0x28e),
							'text': '10/100%',
							'strokeColor': _0x236a65(0x1d9),
							'stroke': 0x3,
							'fontSize': 0x18,
							'font': _0x236a65(0x2e2),
							'color': _0x236a65(0x221),
							'align': _0x236a65(0x1f9)
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': 0x6,
							'x': 0x0,
							'width': 0x2d0,
							'var': _0x236a65(0x30a),
							'text': _0x236a65(0x22a),
							'strokeColor': _0x236a65(0x1d9),
							'stroke': 0x3,
							'fontSize': 0x18,
							'font': 'SimHei',
							'color': '#FFFFFF',
							'align': _0x236a65(0x1f9)
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': 0x33,
							'x': 0x0,
							'width': 0x2d0,
							'text': _0x236a65(0x2d4),
							'strokeColor': '#000000',
							'stroke': 0x2,
							'fontSize': 0x18,
							'font': _0x236a65(0x2e2),
							'color': _0x236a65(0x20d),
							'align': _0x236a65(0x1f9)
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': 0x5e,
							'x': 0x0,
							'width': 0x2d0,
							'text': _0x236a65(0x331),
							'strokeColor': '#021224',
							'stroke': 0x2,
							'fontSize': 0x14,
							'font': 'SimHei',
							'color': '#FFFFFF',
							'align': _0x236a65(0x1f9)
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': 0x7d,
							'x': 0x0,
							'width': 0x2d0,
							'text': '适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。',
							'strokeColor': _0x236a65(0x37d),
							'stroke': 0x2,
							'fontSize': 0x14,
							'font': _0x236a65(0x2e2),
							'color': _0x236a65(0x221),
							'align': 'center'
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': 0xa5,
							'x': 0x0,
							'width': 0x2d0,
							'var': _0x236a65(0x33f),
							'text': _0x236a65(0x314),
							'strokeColor': '#021224',
							'stroke': 0x2,
							'fontSize': 0x12,
							'font': _0x236a65(0x2e2),
							'color': _0x236a65(0x221),
							'align': _0x236a65(0x1f9)
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': 0xc3,
							'x': 0x0,
							'width': 0x2d0,
							'var': 'txt2',
							'text': _0x236a65(0x2a1),
							'strokeColor': '#021224',
							'stroke': 0x2,
							'fontSize': 0x12,
							'font': _0x236a65(0x2e2),
							'color': _0x236a65(0x221),
							'align': _0x236a65(0x1f9)
						}
					}, {
						'type': _0x236a65(0x383),
						'props': {
							'y': 0xde,
							'x': 0x0,
							'width': 0x2d0,
							'var': 'verTxt',
							'text': _0x236a65(0x27e),
							'strokeColor': _0x236a65(0x37d),
							'stroke': 0x2,
							'fontSize': 0x12,
							'font': _0x236a65(0x2e2),
							'color': _0x236a65(0x221),
							'align': _0x236a65(0x1f9)
						}
					}]
				}]
			}, _0x2fa16f;
		}(_0x551b22);
	_0x130704[_0x5c5975(0x24c)] = _0x2e32ba;
	var _0x196e00 = function(_0x198558) {
		var _0x17927a = _0x5c5975;
		__extends(_0x50f0b8, _0x198558);

		function _0x50f0b8() {
			return _0x198558['call'](this) || this;
		}
		return _0x50f0b8[_0x17927a(0x34f)][_0x17927a(0x26d)] = function() {
			var _0x23e6d4 = _0x17927a;
			_0x551b22[_0x23e6d4(0x347)]('Text', laya[_0x23e6d4(0x1b7)][_0x23e6d4(0x383)]), _0x551b22[_0x23e6d4(0x347)](_0x23e6d4(0x300), laya[_0x23e6d4(0x376)]['dom'][_0x23e6d4(0x300)]), _0x198558[_0x23e6d4(0x34f)]['createChildren'][_0x23e6d4(0x32d)](this), this[_0x23e6d4(0x379)](_0x130704['LoginViewUI'][_0x23e6d4(0x3a0)]);
		}, _0x50f0b8[_0x17927a(0x3a0)] = {
			'type': _0x17927a(0x336),
			'props': {
				'width': 0x2d0,
				'height': 0x500,
				'centerX': 0x0
			},
			'child': [{
				'type': _0x17927a(0x32f),
				'props': {
					'y': -0x8c,
					'x': -0x78,
					'skin': _0x17927a(0x211)
				}
			}, {
				'type': _0x17927a(0x32f),
				'props': {
					'y': 0x391,
					'x': 0x7c,
					'var': _0x17927a(0x279),
					'skin': _0x17927a(0x30f)
				}
			}, {
				'type': _0x17927a(0x34b),
				'props': {
					'y': 0x3e8,
					'x': 0xbc,
					'var': 'loginBtn',
					'stateNum': 0x1,
					'skin': 'login/btn_xfy_dlyx.png'
				}
			}, {
				'type': 'Image',
				'props': {
					'y': 0x39d,
					'x': 0x9b,
					'var': _0x17927a(0x233),
					'skin': _0x17927a(0x2fb)
				}
			}, {
				'type': 'Image',
				'props': {
					'y': 0x31,
					'x': 0x21d,
					'var': 'notice',
					'skin': 'login/bth_gonggao.png'
				}
			}, {
				'type': _0x17927a(0x2d3),
				'props': {
					'y': 0x466,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'text': _0x17927a(0x331),
					'strokeColor': _0x17927a(0x37d),
					'stroke': 0x2,
					'leading': 0x6,
					'height': 0x16,
					'fontSize': 0x16,
					'font': _0x17927a(0x2e2),
					'color': _0x17927a(0x221),
					'align': _0x17927a(0x1f9)
				}
			}, {
				'type': _0x17927a(0x2d3),
				'props': {
					'y': 0x39e,
					'x': 0xd2,
					'width': 0x12c,
					'var': _0x17927a(0x247),
					'fontSize': 0x1e,
					'font': _0x17927a(0x2e2),
					'color': _0x17927a(0x289),
					'align': _0x17927a(0x1f9)
				}
			}, {
				'type': _0x17927a(0x2d3),
				'props': {
					'y': 0x39e,
					'x': 0x1f0,
					'width': 0x64,
					'var': _0x17927a(0x249),
					'valign': _0x17927a(0x306),
					'text': _0x17927a(0x21a),
					'height': 0x1e,
					'fontSize': 0x1e,
					'font': _0x17927a(0x2e2),
					'color': _0x17927a(0x289),
					'align': _0x17927a(0x1f9)
				}
			}, {
				'type': 'Label',
				'props': {
					'y': 0x4b0,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'text': _0x17927a(0x216),
					'strokeColor': _0x17927a(0x37d),
					'stroke': 0x2,
					'fontSize': 0x10,
					'font': _0x17927a(0x2e2),
					'color': _0x17927a(0x221),
					'align': _0x17927a(0x1f9)
				}
			}, {
				'type': 'Label',
				'props': {
					'y': 0x4ce,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'text': _0x17927a(0x1bf),
					'strokeColor': _0x17927a(0x37d),
					'stroke': 0x2,
					'fontSize': 0x10,
					'font': _0x17927a(0x2e2),
					'color': _0x17927a(0x221),
					'align': 'center'
				}
			}, {
				'type': _0x17927a(0x2d3),
				'props': {
					'y': 0x484,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'text': _0x17927a(0x2be),
					'strokeColor': _0x17927a(0x37d),
					'stroke': 0x2,
					'leading': 0x6,
					'height': 0x16,
					'fontSize': 0x16,
					'font': _0x17927a(0x2e2),
					'color': _0x17927a(0x221),
					'align': _0x17927a(0x1f9)
				}
			}, {
				'type': 'Text',
				'props': {
					'y': 0x4ec,
					'x': 0xa,
					'width': 0x2d0,
					'var': _0x17927a(0x1e8),
					'text': _0x17927a(0x27e),
					'strokeColor': _0x17927a(0x37d),
					'stroke': 0x2,
					'fontSize': 0x12,
					'font': 'SimHei',
					'color': _0x17927a(0x221),
					'align': 'center'
				}
			}, {
				'type': _0x17927a(0x2d3),
				'props': {
					'y': 0x2d7,
					'x': 0x0,
					'wordWrap': !![],
					'width': 0x2d0,
					'visible': ![],
					'var': _0x17927a(0x28d),
					'text': _0x17927a(0x2f3),
					'strokeColor': '#021224',
					'stroke': 0x2,
					'leading': 0x6,
					'height': 0x24,
					'fontSize': 0x24,
					'font': 'SimHei',
					'color': _0x17927a(0x284),
					'align': _0x17927a(0x1f9)
				}
			}, {
				'type': 'Box',
				'props': {
					'y': -0x8c,
					'x': -0x78,
					'width': 0x3c0,
					'visible': ![],
					'var': _0x17927a(0x1b8),
					'height': 0x618
				},
				'child': [{
					'type': _0x17927a(0x32f),
					'props': {
						'y': 0x0,
						'x': 0x0,
						'width': 0x3c0,
						'var': _0x17927a(0x2f2),
						'skin': _0x17927a(0x1bd),
						'sizeGrid': _0x17927a(0x2e7),
						'height': 0x618,
						'alpha': 0.7
					}
				}, {
					'type': _0x17927a(0x32f),
					'props': {
						'y': 0x122,
						'x': 0x8e,
						'skin': _0x17927a(0x274),
						'mouseThrough': ![],
						'mouseEnabled': !![]
					}
				}, {
					'type': 'Image',
					'props': {
						'y': 0x142,
						'x': 0x2fb,
						'var': _0x17927a(0x202),
						'stateNum': 0x1,
						'skin': _0x17927a(0x2a3)
					}
				}, {
					'type': _0x17927a(0x309),
					'props': {
						'y': 0x1ae,
						'x': 0xc6,
						'width': 0xb6,
						'var': _0x17927a(0x29f),
						'vScrollBarSkin': _0x17927a(0x1bd),
						'height': 0x2b7
					},
					'child': [{
						'type': _0x17927a(0x21b),
						'props': {
							'y': 0x0,
							'x': 0x0,
							'var': _0x17927a(0x21d),
							'strokeColors': '#666699,#ffffff',
							'stateNum': 0x2,
							'skin': 'login/serverGroup.png',
							'selectedIndex': 0x0,
							'labelStroke': 0x2,
							'labelSize': 0x1a,
							'labelFont': _0x17927a(0x2e2),
							'labelColors': _0x17927a(0x36d),
							'direction': 'vertical'
						}
					}]
				}, {
					'type': _0x17927a(0x207),
					'props': {
						'y': 0x1ad,
						'x': 0x18e,
						'width': 0x160,
						'var': 'serverList',
						'vScrollBarSkin': _0x17927a(0x1bd),
						'repeatX': 0x1,
						'height': 0x2b4
					},
					'child': [{
						'type': _0x17927a(0x34b),
						'props': {
							'y': 0x0,
							'x': 0x0,
							'var': 'serverItem',
							'stateNum': 0x1,
							'skin': 'login/btn_xfy_fwq.png',
							'renderType': _0x17927a(0x1b1)
						},
						'child': [{
							'type': _0x17927a(0x2d3),
							'props': {
								'y': 0x13,
								'x': 0x0,
								'wordWrap': !![],
								'width': 0x160,
								'var': _0x17927a(0x35b),
								'text': _0x17927a(0x2e1),
								'name': _0x17927a(0x35b),
								'height': 0x16,
								'fontSize': 0x16,
								'font': _0x17927a(0x2e2),
								'color': _0x17927a(0x2b1),
								'align': _0x17927a(0x1f9)
							}
						}, {
							'type': _0x17927a(0x32f),
							'props': {
								'y': 0xc,
								'x': 0x15,
								'var': _0x17927a(0x1c6),
								'skin': _0x17927a(0x2fb),
								'name': _0x17927a(0x1c6)
							}
						}]
					}]
				}, {
					'type': _0x17927a(0x2d3),
					'props': {
						'y': 0x2cd,
						'x': 0x78,
						'wordWrap': !![],
						'width': 0x2d0,
						'visible': ![],
						'text': '当前服务器正在维护中',
						'strokeColor': '#021224',
						'stroke': 0x2,
						'leading': 0x6,
						'height': 0x24,
						'fontSize': 0x24,
						'font': _0x17927a(0x2e2),
						'color': _0x17927a(0x284),
						'align': _0x17927a(0x1f9)
					}
				}, {
					'type': _0x17927a(0x2d3),
					'props': {
						'y': 0x4b2,
						'x': 0x17e,
						'width': 0xc4,
						'text': _0x17927a(0x258),
						'name': 'ExitPromptText',
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': _0x17927a(0x2e2),
						'color': _0x17927a(0x22d)
					}
				}]
			}, {
				'type': _0x17927a(0x27a),
				'props': {
					'y': 0x0,
					'x': 0x0,
					'width': 0x2d0,
					'visible': ![],
					'var': _0x17927a(0x1ca),
					'height': 0x500
				},
				'child': [{
					'type': _0x17927a(0x32f),
					'props': {
						'y': -0x8c,
						'x': -0x78,
						'width': 0x3c0,
						'var': _0x17927a(0x38f),
						'skin': _0x17927a(0x1bd),
						'sizeGrid': _0x17927a(0x2e7),
						'height': 0x618,
						'alpha': 0.7
					}
				}, {
					'type': _0x17927a(0x32f),
					'props': {
						'y': 0xb6,
						'x': 0x19,
						'skin': _0x17927a(0x1e0),
						'mouseThrough': ![],
						'mouseEnabled': !![]
					}
				}, {
					'type': 'Image',
					'props': {
						'y': 0xd5,
						'x': 0x285,
						'var': 'closeNotice',
						'stateNum': 0x1,
						'skin': _0x17927a(0x2a3)
					}
				}, {
					'type': _0x17927a(0x21b),
					'props': {
						'y': 0x3d0,
						'x': 0x3c,
						'var': _0x17927a(0x2df),
						'strokeColors': _0x17927a(0x269),
						'stateNum': 0x2,
						'skin': 'login/noticeBtn2.png',
						'labels': _0x17927a(0x26a),
						'labelStroke': 0x2,
						'labelSize': 0x1a,
						'labelFont': 'SimHei',
						'labelColors': _0x17927a(0x2ac),
						'direction': _0x17927a(0x2ae)
					}
				}, {
					'type': _0x17927a(0x2d3),
					'props': {
						'y': 0xfc,
						'x': 0xf5,
						'width': 0xdc,
						'var': 'noticeTitle',
						'text': '公告',
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': 'SimHei',
						'color': _0x17927a(0x298),
						'bold': !![],
						'align': _0x17927a(0x1f9)
					}
				}, {
					'type': _0x17927a(0x2d3),
					'props': {
						'y': 0x445,
						'x': 0xfe,
						'width': 0xc4,
						'text': _0x17927a(0x258),
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': _0x17927a(0x2e2),
						'color': _0x17927a(0x22d)
					}
				}, {
					'type': _0x17927a(0x309),
					'props': {
						'y': 0x143,
						'x': 0x4f,
						'width': 0x230,
						'var': _0x17927a(0x2a6),
						'vScrollBarSkin': _0x17927a(0x1bd),
						'height': 0x262
					},
					'child': [{
						'type': _0x17927a(0x300),
						'props': {
							'y': 0x0,
							'x': 0x0,
							'width': 0x230,
							'var': _0x17927a(0x282),
							'innerHTML': _0x17927a(0x1e5),
							'height': 0x376
						}
					}]
				}]
			}, {
				'type': _0x17927a(0x27a),
				'props': {
					'y': 0x0,
					'x': 0x0,
					'width': 0x2d0,
					'visible': ![],
					'var': _0x17927a(0x1de),
					'height': 0x500
				},
				'child': [{
					'type': _0x17927a(0x32f),
					'props': {
						'y': -0x8c,
						'x': -0x78,
						'width': 0x3c0,
						'var': _0x17927a(0x320),
						'skin': _0x17927a(0x1bd),
						'sizeGrid': _0x17927a(0x2e7),
						'height': 0x618,
						'alpha': 0.7
					}
				}, {
					'type': 'Image',
					'props': {
						'y': 0xb6,
						'x': 0x16,
						'skin': _0x17927a(0x354),
						'mouseThrough': ![],
						'mouseEnabled': !![]
					}
				}, {
					'type': 'Image',
					'props': {
						'y': 0xd5,
						'x': 0x27f,
						'var': _0x17927a(0x2ce),
						'stateNum': 0x1,
						'skin': _0x17927a(0x2a3)
					}
				}, {
					'type': 'Label',
					'props': {
						'y': 0xfc,
						'x': 0xf5,
						'width': 0xdc,
						'var': 'nonageTitle',
						'text': '适龄提示',
						'name': _0x17927a(0x253),
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': _0x17927a(0x2e2),
						'color': _0x17927a(0x298),
						'bold': !![],
						'align': _0x17927a(0x1f9)
					}
				}, {
					'type': _0x17927a(0x2d3),
					'props': {
						'y': 0x445,
						'x': 0xfe,
						'width': 0xc4,
						'text': '点击空白处退出',
						'height': 0x1c,
						'fontSize': 0x1c,
						'font': 'SimHei',
						'color': _0x17927a(0x22d)
					}
				}, {
					'type': _0x17927a(0x300),
					'props': {
						'y': 0x13e,
						'x': 0x4a,
						'width': 0x230,
						'var': _0x17927a(0x214),
						'innerHTML': _0x17927a(0x1e5),
						'height': 0x2bc
					}
				}]
			}, {
				'type': _0x17927a(0x32f),
				'props': {
					'y': 0x32,
					'x': 0x287,
					'var': _0x17927a(0x2bd),
					'skin': _0x17927a(0x308)
				}
			}]
		}, _0x50f0b8;
	}(_0x551b22);
	_0x130704['LoginViewUI'] = _0x196e00;
}(WeChatUI || (WeChatUI = {})));
var WeChatUI;
(function(_0x38df0e) {
	var _0x2eb578 = a0_0x2da875,
		_0x18cfd3 = function(_0x548a42) {
			var _0x11d788 = a0_0x4cc5;
			__extends(_0x4b63fe, _0x548a42);

			function _0x4b63fe() {
				var _0x52b01d = a0_0x4cc5,
					_0x12d34b = _0x548a42[_0x52b01d(0x32d)](this) || this;
				return _0x12d34b[_0x52b01d(0x2dc)] = 0x9, _0x12d34b[_0x52b01d(0x373)](), _0x12d34b[_0x52b01d(0x36e)](), _0x12d34b;
			}
			return _0x4b63fe[_0x11d788(0x34f)][_0x11d788(0x373)] = function() {
				var _0x548699 = _0x11d788;
				this[_0x548699(0x267)][_0x548699(0x2ca)] = _0x548699(0x27e) + gameVersion, loadView = this, this[_0x548699(0x246)] = 0x0, this[_0x548699(0x39e)] = 0x0, this[_0x548699(0x31c)] = 0x0, this[_0x548699(0x2cf)] = this[_0x548699(0x1af)]['width'], this[_0x548699(0x1af)][_0x548699(0x390)] = this[_0x548699(0x321)][_0x548699(0x390)] = 0x0, this[_0x548699(0x28e)]['text'] = this[_0x548699(0x30a)][_0x548699(0x2ca)] = '0%', this[_0x548699(0x382)](_0x548699(0x23f));
				var _0x205359 = wx[_0x548699(0x1a9)]({
					'name': _0x548699(0x387),
					'success': function(_0x206bd0) {
						var _0x5b39ea = _0x548699;
						console['log'](_0x5b39ea(0x33a), _0x206bd0), Laya[_0x5b39ea(0x1ce)]['basePath'] = _0x5b39ea(0x1f8), enterGame(userData);
					},
					'fail': function(_0x31fdd4) {
						var _0x42497c = _0x548699;
						console[_0x42497c(0x1bb)](_0x42497c(0x2b0), _0x31fdd4);
					}
				});
				_0x205359[_0x548699(0x37f)](function(_0x531b2c) {
					var _0x555709 = _0x548699;
					console[_0x555709(0x1bb)](_0x555709(0x348), _0x531b2c[_0x555709(0x367)]), console[_0x555709(0x1bb)]('已经下载的数据长度', _0x531b2c[_0x555709(0x2f9)]), console[_0x555709(0x1bb)](_0x555709(0x344), _0x531b2c['totalBytesExpectedToWrite']);
				}), Laya[_0x548699(0x232)]['loop'](0x64, this, this[_0x548699(0x1bc)]);
			}, _0x4b63fe[_0x11d788(0x34f)][_0x11d788(0x382)] = function(_0x1651e6) {
				var _0x469937 = _0x11d788;
				if (this[_0x469937(0x39e)] == this['maxProgress']) return;
				this[_0x469937(0x39e)]++, this[_0x469937(0x31c)] = 0x0;
				var _0x520b96 = this[_0x469937(0x39e)] / this[_0x469937(0x2dc)];
				this[_0x469937(0x321)]['width'] = _0x520b96 * this[_0x469937(0x2cf)], this['proLabel2'][_0x469937(0x2ca)] = Math['floor'](_0x520b96 * 0x64) + '%', this[_0x469937(0x1ff)][_0x469937(0x2ca)] = _0x1651e6, this[_0x469937(0x39e)] == this[_0x469937(0x2dc)] && Laya['timer'][_0x469937(0x1c8)](0x2710, this, this[_0x469937(0x324)]);
			}, _0x4b63fe['prototype'][_0x11d788(0x1bc)] = function() {
				var _0x1a775b = _0x11d788;
				this['nowProgress2'] < 0x63 && (this[_0x1a775b(0x31c)]++, this[_0x1a775b(0x1af)][_0x1a775b(0x390)] = this[_0x1a775b(0x31c)] / 0x64 * this[_0x1a775b(0x2cf)], this[_0x1a775b(0x28e)][_0x1a775b(0x2ca)] = this[_0x1a775b(0x31c)] + '%');
			}, _0x4b63fe['prototype'][_0x11d788(0x324)] = function() {
				this['destroy'](), MainResetStage();
			}, _0x4b63fe[_0x11d788(0x34f)][_0x11d788(0x36e)] = function() {}, _0x4b63fe[_0x11d788(0x34f)][_0x11d788(0x259)] = function() {
				var _0x350306 = _0x11d788;
				Laya['timer'][_0x350306(0x252)](this), loadView = null, _0x548a42['prototype'][_0x350306(0x259)][_0x350306(0x32d)](this, !![]);
			}, _0x4b63fe;
		}(_0x38df0e['LoadingViewUI']);
	_0x38df0e[_0x2eb578(0x3bc)] = _0x18cfd3;
}(WeChatUI || (WeChatUI = {})));
var pack = '8891',
	cdn = a0_0x2da875(0x1cf),
	tsCdn = a0_0x2da875(0x1cf),
	devCdn = a0_0x2da875(0x1cf),
	WeChatUI;
(function(_0x50a0ab) {
	var _0x3df4fc = a0_0x2da875,
		_0x57a523 = Laya[_0x3df4fc(0x31d)],
		_0x1d9113 = function(_0x7971af) {
			var _0x481ac2 = _0x3df4fc;
			__extends(_0x2d6572, _0x7971af);

			function _0x2d6572() {
				var _0x1c1923 = a0_0x4cc5,
					_0x373670 = _0x7971af['call'](this) || this;
				return _0x373670[_0x1c1923(0x2c3)] = 0x3, _0x373670['gameLoginNumber'] = 0x3, _0x373670[_0x1c1923(0x373)](), _0x373670[_0x1c1923(0x36e)](), _0x373670;
			}
			return _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x373)] = function() {
				var _0x35ae87 = _0x481ac2,
					_0x45a064 = this;
				this[_0x35ae87(0x2c3)] = 0x3, this[_0x35ae87(0x39b)] = 0x3, this['prompt'][_0x35ae87(0x30d)] = ![], this[_0x35ae87(0x246)] = 0x0, this['verText'][_0x35ae87(0x2ca)] = _0x35ae87(0x27e) + gameVersion, QCSDK[_0x35ae87(0x373)]({
					'game_ver': gameVersion
				}, function(_0x29d4ac) {
					var _0x5c167f = _0x35ae87;
					_0x29d4ac[_0x5c167f(0x335)] == 0x1 ? cdn = tsCdn : cdn = devCdn, console[_0x5c167f(0x1bb)](_0x5c167f(0x319)), QCSDK['login'](_0x45a064[_0x5c167f(0x315)][_0x5c167f(0x36c)](_0x45a064));
				}), this['serverPanel'][_0x35ae87(0x201)][_0x35ae87(0x30d)] = ![], this[_0x35ae87(0x2a6)]['vScrollBar'][_0x35ae87(0x30d)] = ![];
				var _0x160c62 = this[_0x35ae87(0x1eb)];
				_0x160c62[_0x35ae87(0x2fe)][_0x35ae87(0x30d)] = ![], this[_0x35ae87(0x21d)][_0x35ae87(0x332)] = Laya[_0x35ae87(0x34c)]['create'](this, this[_0x35ae87(0x36f)], null, ![]), this[_0x35ae87(0x1eb)][_0x35ae87(0x2fa)] = Laya[_0x35ae87(0x34c)][_0x35ae87(0x296)](this, this[_0x35ae87(0x250)], null, ![]), this[_0x35ae87(0x1eb)][_0x35ae87(0x332)] = Laya[_0x35ae87(0x34c)][_0x35ae87(0x296)](this, this[_0x35ae87(0x342)], null, ![]), this[_0x35ae87(0x1eb)][_0x35ae87(0x3be)] = !![], this[_0x35ae87(0x282)][_0x35ae87(0x251)] = this[_0x35ae87(0x214)]['color'] = '#666699', this[_0x35ae87(0x282)][_0x35ae87(0x2af)][_0x35ae87(0x1b2)] = this[_0x35ae87(0x214)][_0x35ae87(0x2af)][_0x35ae87(0x1b2)] = 0x16, this[_0x35ae87(0x282)]['style']['fontFamily'] = this['nonageContent'][_0x35ae87(0x2af)]['fontFamily'] = 'SimHei', this[_0x35ae87(0x282)][_0x35ae87(0x2af)][_0x35ae87(0x227)] = this['nonageContent'][_0x35ae87(0x2af)][_0x35ae87(0x227)] = 0x1a, this[_0x35ae87(0x214)][_0x35ae87(0x1b9)] = NONAGE_TEXT, this[_0x35ae87(0x22f)][_0x35ae87(0x2ca)] = _0x35ae87(0x2ad), this[_0x35ae87(0x2df)][_0x35ae87(0x332)] = Laya[_0x35ae87(0x34c)][_0x35ae87(0x296)](this, this[_0x35ae87(0x3ad)], null, ![]);
			}, _0x2d6572[_0x481ac2(0x34f)]['sdkLoginBack'] = function(_0x217aae, _0x15730a) {
				var _0x12e2d0 = _0x481ac2;
				console['log']('kkk\x20sdk\x20登录返回：' + _0x217aae);
				if (_0x217aae == 0x0) {
					var _0x492900 = {};
					_0x492900[_0x12e2d0(0x3ac)] = 0x4, _0x492900[_0x12e2d0(0x273)] = _0x12e2d0(0x32c), _0x492900[_0x12e2d0(0x345)] = 'minGame', _0x492900[_0x12e2d0(0x206)] = _0x15730a[_0x12e2d0(0x353)], _0x492900[_0x12e2d0(0x25e)] = _0x15730a['token'];
					var _0x3a16fb = encodeURIComponent(JSON[_0x12e2d0(0x2bc)](_0x492900)),
						_0x3a22cf = new Laya['HttpRequest']();
					_0x3a22cf[_0x12e2d0(0x33e)](_0x50a0ab['Config'][_0x12e2d0(0x36b)] + _0x12e2d0(0x25b) + pack + '/' + _0x3a16fb, null, _0x12e2d0(0x2e0)), _0x3a22cf[_0x12e2d0(0x1c8)](Laya[_0x12e2d0(0x31d)][_0x12e2d0(0x210)], this, this[_0x12e2d0(0x39d)][_0x12e2d0(0x36c)](this));
				} else this[_0x12e2d0(0x2c3)]--, this[_0x12e2d0(0x2c3)] > 0x0 ? QCSDK['login'](this[_0x12e2d0(0x315)][_0x12e2d0(0x36c)](this)) : (this[_0x12e2d0(0x28d)][_0x12e2d0(0x2ca)] = _0x12e2d0(0x359) + _0x217aae, this['prompt'][_0x12e2d0(0x30d)] = !![]);
			}, _0x2d6572[_0x481ac2(0x34f)]['loginCallBack'] = function(_0x519d31) {
				var _0x3636c8 = _0x481ac2;
				_0x519d31 = JSON[_0x3636c8(0x239)](_0x519d31);
				if (!_0x519d31) {
					this[_0x3636c8(0x39b)]--;
					this[_0x3636c8(0x39b)] > 0x0 ? QCSDK[_0x3636c8(0x225)](this[_0x3636c8(0x315)][_0x3636c8(0x36c)](this)) : (this[_0x3636c8(0x28d)][_0x3636c8(0x2ca)] = _0x3636c8(0x1ab), this['prompt'][_0x3636c8(0x30d)] = !![]);
					return;
				}
				if (_0x519d31[_0x3636c8(0x255)] === 0xc8) {
					var _0xdfab54 = new _0x50a0ab['UserData'](),
						_0x519d31 = _0x519d31[_0x3636c8(0x230)],
						_0x25e0b8 = _0x519d31['s'];
					_0xdfab54[_0x3636c8(0x243)] = _0x519d31[_0x3636c8(0x2f4)][_0x3636c8(0x1c5)], _0xdfab54['uid'] = _0x519d31[_0x3636c8(0x2f4)]['openId'], _0xdfab54[_0x3636c8(0x1d5)] = _0x519d31[_0x3636c8(0x1d5)], _0xdfab54[_0x3636c8(0x1ac)] = _0x519d31['package'], _0xdfab54[_0x3636c8(0x2f8)] = '';
					!_0x519d31['cdn'] || _0x519d31[_0x3636c8(0x209)] == '' ? _0xdfab54[_0x3636c8(0x209)] = cdn : _0xdfab54[_0x3636c8(0x209)] = _0x519d31['cdn'];
					_0xdfab54['rvtype'] = 0x0, _0xdfab54[_0x3636c8(0x226)] = _0x519d31['newregister'], _0xdfab54['sign'] = _0x519d31[_0x3636c8(0x2cc)];
					var _0x10d422 = {
						'server_id': _0x25e0b8[_0x3636c8(0x2db)],
						'name': _0x25e0b8[_0x3636c8(0x1dc)],
						'server_num': parseInt(_0x25e0b8['server_num']),
						'channel_num': parseInt(_0x25e0b8['channel_num']),
						'server_addr': _0x25e0b8[_0x3636c8(0x360)],
						'server_port': parseInt(_0x25e0b8['server_port']),
						'status': parseInt(_0x25e0b8[_0x3636c8(0x386)]),
						'tick': parseInt(_0x25e0b8[_0x3636c8(0x2ef)]),
						'sign': _0x25e0b8['sign'],
						'package': parseInt(_0x519d31[_0x3636c8(0x1ac)]),
						'cdn': ''
					};
					_0xdfab54[_0x3636c8(0x2ea)] = _0x10d422, userData = _0xdfab54, console[_0x3636c8(0x1bb)]('kk', userData), userData[_0x3636c8(0x226)] == 0x1 ? this[_0x3636c8(0x225)]() : (this[_0x3636c8(0x2d2)](), this[_0x3636c8(0x247)]['visible'] = this[_0x3636c8(0x279)][_0x3636c8(0x30d)] = this[_0x3636c8(0x233)]['visible'] = this[_0x3636c8(0x249)]['visible'] = this['notice'][_0x3636c8(0x30d)] = this['nonage'][_0x3636c8(0x30d)] = this[_0x3636c8(0x27b)][_0x3636c8(0x30d)] = !![], this[_0x3636c8(0x2ab)]());
				} else {
					this[_0x3636c8(0x39b)]--;
					this[_0x3636c8(0x39b)] > 0x0 ? QCSDK[_0x3636c8(0x225)](this[_0x3636c8(0x315)][_0x3636c8(0x36c)](this)) : (this[_0x3636c8(0x28d)][_0x3636c8(0x2ca)] = _0x3636c8(0x2e4) + _0x519d31[_0x3636c8(0x255)], this['prompt']['visible'] = !![]);
					return;
				}
			}, _0x2d6572['prototype']['onEven'] = function() {
				var _0x395856 = _0x481ac2;
				this['serverBtn']['on'](_0x57a523[_0x395856(0x2c6)], this, this[_0x395856(0x2a0)], [0x0]), this[_0x395856(0x202)]['on'](_0x57a523['CLICK'], this, this['closeDialog'], [0x0]), this[_0x395856(0x2f2)]['on'](_0x57a523[_0x395856(0x2c6)], this, this[_0x395856(0x2c4)], [0x0]), this['nonage']['on'](_0x57a523[_0x395856(0x2c6)], this, this[_0x395856(0x2a0)], [0x1]), this['closeNonage']['on'](_0x57a523[_0x395856(0x2c6)], this, this[_0x395856(0x2c4)], [0x1]), this[_0x395856(0x320)]['on'](_0x57a523[_0x395856(0x2c6)], this, this[_0x395856(0x2c4)], [0x1]), this[_0x395856(0x37b)]['on'](_0x57a523[_0x395856(0x2c6)], this, this[_0x395856(0x2a0)], [0x2]), this[_0x395856(0x1e3)]['on'](_0x57a523[_0x395856(0x2c6)], this, this[_0x395856(0x2c4)], [0x2]), this[_0x395856(0x38f)]['on'](_0x57a523['CLICK'], this, this[_0x395856(0x2c4)], [0x2]), this[_0x395856(0x27b)]['on'](_0x57a523[_0x395856(0x2c6)], this, this[_0x395856(0x225)]);
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x2a0)] = function(_0x541193) {
				var _0x3497a1 = _0x481ac2;
				if (_0x541193 == 0x0) this[_0x3497a1(0x29f)][_0x3497a1(0x30d)] = ![], this[_0x3497a1(0x1eb)][_0x3497a1(0x30d)] = ![], this[_0x3497a1(0x1b8)][_0x3497a1(0x30d)] = !![], this[_0x3497a1(0x33d)]();
				else {
					if (_0x541193 == 0x1) this['nonageBox'][_0x3497a1(0x30d)] = !![];
					else _0x541193 == 0x2 && this[_0x3497a1(0x317)](0x0);
				}
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x2c4)] = function(_0x4a2426) {
				var _0x5d681c = _0x481ac2;
				if (_0x4a2426 == 0x0) this[_0x5d681c(0x1b8)][_0x5d681c(0x30d)] = ![];
				else {
					if (_0x4a2426 == 0x1) this[_0x5d681c(0x1de)][_0x5d681c(0x30d)] = ![];
					else _0x4a2426 == 0x2 && (this[_0x5d681c(0x1ca)][_0x5d681c(0x30d)] = ![]);
				}
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x225)] = function() {
				var _0x455aa9 = _0x481ac2,
					_0x5baa4d = new _0x50a0ab[(_0x455aa9(0x3bc))]();
				Laya['stage'][_0x455aa9(0x1b5)](_0x5baa4d), this[_0x455aa9(0x259)]();
			}, _0x2d6572[_0x481ac2(0x34f)]['choose'] = function(_0x4b8971) {
				var _0x41d66e = _0x481ac2;
				this[_0x41d66e(0x1eb)]['array'] = this[_0x41d66e(0x323)][_0x4b8971];
			}, _0x2d6572['prototype'][_0x481ac2(0x342)] = function(_0x371f86) {
				var _0x20006f = _0x481ac2;
				userData[_0x20006f(0x2ea)] = this[_0x20006f(0x323)][this[_0x20006f(0x21d)][_0x20006f(0x25f)]][_0x371f86], this[_0x20006f(0x2d2)](), this[_0x20006f(0x1b8)]['visible'] = ![];
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x250)] = function(_0x1b3167, _0x237aee) {
				var _0x116888 = _0x481ac2,
					_0x133bf6 = _0x1b3167[_0x116888(0x3b1)]('itemServerName'),
					_0x1b191f = _0x1b3167[_0x116888(0x3b1)](_0x116888(0x1c6)),
					_0x510553 = this[_0x116888(0x323)][this[_0x116888(0x21d)][_0x116888(0x25f)]][_0x237aee];
				_0x133bf6['text'] = _0x510553['name'];
				if (_0x510553['status'] === 0x2) _0x1b191f['skin'] = _0x116888(0x2fb);
				else {
					if (_0x510553[_0x116888(0x386)] === 0x1) _0x1b191f['skin'] = 'login/image_xfy_fm.png';
					else _0x510553[_0x116888(0x386)] === -0x1 && (_0x1b191f[_0x116888(0x28a)] = _0x116888(0x28f));
				}
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x33d)] = function() {
				var _0x5deee8 = _0x481ac2,
					_0x4369f3 = base64_encode('game/allServer/' + userData[_0x5deee8(0x1d5)] + '/' + userData[_0x5deee8(0x1ac)] + '/' + userData[_0x5deee8(0x243)] + '/' + userData[_0x5deee8(0x391)] + '/' + userData[_0x5deee8(0x2cc)]),
					_0x4913ae = new Laya[(_0x5deee8(0x277))]();
				_0x4913ae[_0x5deee8(0x33e)](_0x50a0ab[_0x5deee8(0x263)][_0x5deee8(0x36b)] + _0x4369f3, null, 'get'), _0x4913ae[_0x5deee8(0x1c8)](Laya[_0x5deee8(0x31d)]['COMPLETE'], this, this[_0x5deee8(0x326)]);
			}, _0x2d6572[_0x481ac2(0x34f)]['serverListBack'] = function(_0x3fe25e) {
				var _0x265a41 = _0x481ac2;
				_0x3fe25e = JSON[_0x265a41(0x239)](_0x3fe25e);
				if (!_0x3fe25e[_0x265a41(0x255)]) return;
				for (var _0x1f810d = 0x0; _0x1f810d < _0x3fe25e['z'][_0x265a41(0x1a2)]; _0x1f810d++) {
					_0x1f810d != 0x0 ? this[_0x265a41(0x32a)] = this[_0x265a41(0x32a)] + ',' + _0x3fe25e['z'][_0x1f810d] : this['serverGroupArr'] = '' + _0x3fe25e['z'][_0x1f810d];
				}
				this[_0x265a41(0x323)] = _0x3fe25e['s'], this[_0x265a41(0x21d)][_0x265a41(0x30b)] = this[_0x265a41(0x32a)], this[_0x265a41(0x21d)][_0x265a41(0x25f)] = 0x0, this[_0x265a41(0x1eb)][_0x265a41(0x357)] = this[_0x265a41(0x323)][0x0], this['serverPanel'][_0x265a41(0x30d)] = !![], this[_0x265a41(0x1eb)]['visible'] = !![];
			}, _0x2d6572[_0x481ac2(0x34f)]['upSelectedServer'] = function() {
				var _0x4cd993 = _0x481ac2;
				this[_0x4cd993(0x247)][_0x4cd993(0x2ca)] = userData[_0x4cd993(0x2ea)][_0x4cd993(0x1dc)];
				if (userData['selected_server'][_0x4cd993(0x386)] === 0x2) this[_0x4cd993(0x233)][_0x4cd993(0x28a)] = _0x4cd993(0x2fb);
				else {
					if (userData[_0x4cd993(0x2ea)]['status'] === 0x1) this[_0x4cd993(0x233)][_0x4cd993(0x28a)] = _0x4cd993(0x362);
					else userData[_0x4cd993(0x2ea)][_0x4cd993(0x386)] === -0x1 && (this[_0x4cd993(0x233)][_0x4cd993(0x28a)] = 'login/image_xfy_wh.png');
				}
			}, _0x2d6572['prototype'][_0x481ac2(0x2ab)] = function() {
				var _0x3ed557 = _0x481ac2,
					_0xc1f550 = {
						'groupId': GROUP_ID
					},
					_0xa767fc = new Laya['HttpRequest']();
				_0xa767fc['send'](_0x50a0ab[_0x3ed557(0x263)][_0x3ed557(0x24e)], _0xc1f550, _0x3ed557(0x286)), _0xa767fc[_0x3ed557(0x1c8)](Laya['Event']['COMPLETE'], this, this[_0x3ed557(0x2c1)]);
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x2c1)] = function(_0x7ccc3f) {
				var _0x28a14e = _0x481ac2;
				_0x7ccc3f = JSON[_0x28a14e(0x239)](_0x7ccc3f);
				if (_0x7ccc3f[_0x28a14e(0x31a)] != 0x0) {
					this[_0x28a14e(0x2a9)] = [{
						'title': '公告',
						'contents': '暂无公告',
						'version': 0x0
					}];
					return;
				}
				this[_0x28a14e(0x2a9)] = _0x7ccc3f[_0x28a14e(0x230)];
				if (this[_0x28a14e(0x2a9)][_0x28a14e(0x1a2)] == 0x0) {
					this[_0x28a14e(0x2a9)] = [{
						'title': '公告',
						'contents': _0x28a14e(0x381),
						'version': 0x0
					}];
					return;
				}
				var _0x58105a = -0x1;
				for (var _0xe30697 = 0x0; _0xe30697 < this[_0x28a14e(0x2a9)]['length']; _0xe30697++) {
					if (_0xe30697 == 0x3) break;
					_0xe30697 == 0x0 ? this[_0x28a14e(0x1c2)] = this[_0x28a14e(0x2a9)][_0xe30697][_0x28a14e(0x2b2)] : this['noticTitles'] = this['noticTitles'] + ',' + this[_0x28a14e(0x2a9)][_0xe30697][_0x28a14e(0x2b2)];
					var _0x20d916 = Number(localStorage[_0x28a14e(0x213)](_0x28a14e(0x229) + _0xe30697));
					_0x20d916 == undefined && (_0x20d916 = -0x1), _0x58105a == -0x1 && _0x20d916 < this['noticeData'][_0xe30697]['version'] && (_0x58105a = _0xe30697);
				}
				userData[_0x28a14e(0x226)] != 0x1 && _0x58105a != -0x1 && (this[_0x28a14e(0x317)](_0x58105a), localStorage[_0x28a14e(0x22b)]('NoticeVersion' + _0x58105a, this[_0x28a14e(0x2a9)][_0x58105a][_0x28a14e(0x268)] + ''));
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x3ad)] = function(_0x4de27e) {
				var _0x1b4e60 = _0x481ac2;
				this[_0x1b4e60(0x282)][_0x1b4e60(0x1b9)] = this[_0x1b4e60(0x328)](this[_0x1b4e60(0x2a9)][_0x4de27e]['contents']), this[_0x1b4e60(0x38c)]['text'] = this['noticeData'][_0x4de27e][_0x1b4e60(0x2b2)];
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x317)] = function(_0x516279) {
				var _0x30b43a = _0x481ac2;
				this[_0x30b43a(0x1ca)][_0x30b43a(0x30d)] = !![], this[_0x30b43a(0x2a9)][_0x30b43a(0x1a2)] < 0x2 ? this[_0x30b43a(0x2df)][_0x30b43a(0x30d)] = ![] : (this[_0x30b43a(0x2df)][_0x30b43a(0x30b)] = this[_0x30b43a(0x1c2)], this[_0x30b43a(0x2df)][_0x30b43a(0x30d)] = !![], this[_0x30b43a(0x2df)][_0x30b43a(0x25f)] = _0x516279, this[_0x30b43a(0x2a9)]['length'] == 0x2 ? this[_0x30b43a(0x2df)][_0x30b43a(0x28a)] = 'login/noticeBtn2.png' : this[_0x30b43a(0x2df)][_0x30b43a(0x28a)] = _0x30b43a(0x205)), this[_0x30b43a(0x282)]['innerHTML'] = this[_0x30b43a(0x328)](this['noticeData'][_0x516279]['contents']), this['noticeTitle'][_0x30b43a(0x2ca)] = this[_0x30b43a(0x2a9)][_0x516279][_0x30b43a(0x2b2)];
			}, _0x2d6572[_0x481ac2(0x34f)]['htmlDecodeByRegExp'] = function(_0xa1ef68) {
				var _0x21fc7b = _0x481ac2,
					_0x48e8ff = '';
				if (_0xa1ef68['length'] == 0x0) return '';
				return _0x48e8ff = _0xa1ef68[_0x21fc7b(0x21f)](/&amp;/g, '&'), _0x48e8ff = _0x48e8ff[_0x21fc7b(0x21f)](/&lt;/g, '<'), _0x48e8ff = _0x48e8ff[_0x21fc7b(0x21f)](/&gt;/g, '>'), _0x48e8ff = _0x48e8ff[_0x21fc7b(0x21f)](/&nbsp;/g, '\x20'), _0x48e8ff = _0x48e8ff['replace'](/&#39;/g, '\x27'), _0x48e8ff = _0x48e8ff[_0x21fc7b(0x21f)](/&quot;/g, '\x22'), _0x48e8ff = _0x48e8ff[_0x21fc7b(0x21f)](/&mdash;/g, '——'), _0x48e8ff;
			}, _0x2d6572[_0x481ac2(0x34f)][_0x481ac2(0x259)] = function() {
				var _0x3d15b9 = _0x481ac2;
				this[_0x3d15b9(0x202)][_0x3d15b9(0x33b)](_0x57a523['CLICK'], this, this[_0x3d15b9(0x2c4)]), this['serverBG'][_0x3d15b9(0x33b)](_0x57a523[_0x3d15b9(0x2c6)], this, this[_0x3d15b9(0x2c4)]), this[_0x3d15b9(0x2ce)]['off'](_0x57a523[_0x3d15b9(0x2c6)], this, this[_0x3d15b9(0x2c4)]), this['nonageBG']['off'](_0x57a523[_0x3d15b9(0x2c6)], this, this[_0x3d15b9(0x2c4)]), this[_0x3d15b9(0x1e3)][_0x3d15b9(0x33b)](_0x57a523[_0x3d15b9(0x2c6)], this, this[_0x3d15b9(0x2c4)]), this['noticeBG'][_0x3d15b9(0x33b)](_0x57a523[_0x3d15b9(0x2c6)], this, this[_0x3d15b9(0x2c4)]), this[_0x3d15b9(0x279)][_0x3d15b9(0x33b)](_0x57a523['CLICK'], this, this[_0x3d15b9(0x2a0)]), this[_0x3d15b9(0x2bd)]['off'](_0x57a523[_0x3d15b9(0x2c6)], this, this[_0x3d15b9(0x2a0)]), this[_0x3d15b9(0x37b)]['off'](_0x57a523[_0x3d15b9(0x2c6)], this, this[_0x3d15b9(0x2a0)]), this[_0x3d15b9(0x27b)][_0x3d15b9(0x33b)](_0x57a523[_0x3d15b9(0x2c6)], this, this['login']), this[_0x3d15b9(0x21d)]['selectHandler'][_0x3d15b9(0x25d)](), this[_0x3d15b9(0x21d)][_0x3d15b9(0x332)] = null, this[_0x3d15b9(0x1eb)]['renderHandler'][_0x3d15b9(0x25d)](), this[_0x3d15b9(0x1eb)][_0x3d15b9(0x2fa)] = null, this['serverList'][_0x3d15b9(0x332)][_0x3d15b9(0x25d)](), this[_0x3d15b9(0x1eb)][_0x3d15b9(0x332)] = null, this[_0x3d15b9(0x2df)][_0x3d15b9(0x332)][_0x3d15b9(0x25d)](), this['noticeTab'][_0x3d15b9(0x332)] = null, _0x7971af[_0x3d15b9(0x34f)][_0x3d15b9(0x259)][_0x3d15b9(0x32d)](this, !![]);
			}, _0x2d6572;
		}(_0x50a0ab[_0x3df4fc(0x1d3)]);
	_0x50a0ab[_0x3df4fc(0x1a5)] = _0x1d9113;

	function _0xc6558e() {
		var _0xd30810 = _0x3df4fc;
		Laya[_0xd30810(0x39f)][_0xd30810(0x2c8)](_0xd30810(0x1dd), Laya['Handler'][_0xd30810(0x296)](null, _0x19d9ce));
	}

	function _0x19d9ce() {
		var _0x14c168 = _0x3df4fc,
			_0x34cf0f = new _0x1d9113();
		Laya[_0x14c168(0x1ed)][_0x14c168(0x1b5)](_0x34cf0f);
	}
	Laya[_0x3df4fc(0x2de)][_0x3df4fc(0x373)](), Laya['init'](0x2d0, 0x500, Laya[_0x3df4fc(0x1d6)]), Laya[_0x3df4fc(0x1ed)][_0x3df4fc(0x2f5)] = laya[_0x3df4fc(0x1b7)][_0x3df4fc(0x23b)][_0x3df4fc(0x271)], Laya['stage']['screenMode'] = Laya[_0x3df4fc(0x23b)]['SCREEN_NONE'], Laya[_0x3df4fc(0x1ed)][_0x3df4fc(0x2b7)] = Laya[_0x3df4fc(0x23b)]['ALIGN_CENTER'], Laya[_0x3df4fc(0x1ed)][_0x3df4fc(0x2ee)] = Laya[_0x3df4fc(0x23b)][_0x3df4fc(0x346)], _0xc6558e();
}(WeChatUI || (WeChatUI = {})));
var WeChatUI;
(function(_0x56d9df) {
	var _0x199bdc = a0_0x2da875,
		_0x130a5e = (function() {
			function _0x3b211d() {}
			return _0x3b211d;
		}());
	_0x56d9df[_0x199bdc(0x1db)] = _0x130a5e;
	var _0x544d8f = (function() {
		function _0x3d9e95() {}
		return _0x3d9e95;
	}());
	_0x56d9df[_0x199bdc(0x1b0)] = _0x544d8f;
	var _0x579a5f = (function() {
		function _0x4962ca() {}
		return _0x4962ca;
	}());
	_0x56d9df[_0x199bdc(0x2c7)] = _0x579a5f;
}(WeChatUI || (WeChatUI = {})));