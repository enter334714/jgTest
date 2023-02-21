import gak1_qo from '../mw/yu.js';
window['versions'] = { 'wxVersion': window['config']['game_ver'] }, window['DEBUG'] = ![], window['J1Q5'] = 0x1, window['ENV'] = 0x1, window['J1P5Q'] = !![], window['WSS'] = !![], window['J1FRP5Q'] = '', window['isWaiFangWx'] = ![], window['J15Q'] = {
    'base_cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/',
    'cdn': 'https://cdn-tjqy.shzbkj.com/weixin_0/'
}, J15Q['pay_infos'] = {}, J15Q['package'] = '0', J15Q['version'] = window['versions']['wxVersion'], J15Q['mac'] = '', J15Q['os'] = '1', J15Q['sdk_name'] = '9130', J15Q['apiurl'] = 'https://api-tjqytest.shzbkj.com', J15Q['logurl'] = 'https://log-tjqytest.shzbkj.com', J15Q['payurl'] = 'https://pay-tjqytest.shzbkj.com', J15Q['apikey'] = 'MQx0mYlUWO5XYKvgAIPKWgK1w722GKih', J15Q['partnerId'] = '1', J15Q['pkgName'] = '', J15Q['device_id'] = '', J15Q['from_scene'] = 0x0, J15Q['serverList'] = {}, J15Q['channelNum'] = parseInt(J15Q['partnerId']), J15Q['channel'] = J15Q['partnerId'], J15Q['selectedServer'] = {}, J15Q['J1R5'] = 'https://jgcenter.sh9130.com/clientlog/', J15Q['showLogo'] = ![], J15Q['debugUsers'] = '39927500|58163716|74597555', J15Q['tick'] = Date['now'](), J15Q['configType'] = '_weixin', J15Q['exposeType'] = '_a', J15Q['encryptParam'] = '', J15Q['loadingType'] = 0x2, J15Q['lastVersion'] = 0x7c1, J15Q['wxVersion'] = window['versions']['wxVersion'], J15Q['wxShield'] = ![], J15Q['wxIOS'] = ![], J15Q['wxAndroid'] = ![], J15Q['wxPC'] = ![], window['J1PQ5'] = 0x5, window['J1PQ'] = ![], window['J1QP'] = ![], window['J15PQ'] = ![], window['loadServerRes'] = ![], window['loadLoadingRes'] = ![], window['J15QP'] = ![], window['J1P5'] = ![], window['J15P'] = ![], window['J1QP5'] = ![], window['sdkInitRes'] = null, window['alert'] = function (koa) {
    console['log']('alert', koa), wx['hideLoading']({}), wx['showModal']({
        'title': '提示',
        'content': koa,
        'success'(_pedm) {
            if (_pedm['confirm']) console['log']('用户点击确定');else _pedm['cancel'] && console['log']('用户点击取消');
        }
    });
}, window['J1RP5Q'] = function (m5gtp) {
    console['log']('loginAlert', m5gtp), J1R5QP(), wx['showModal']({
        'title': '提示',
        'content': m5gtp,
        'confirmText': '重试',
        'cancelText': '退出',
        'success'(nsh3uz) {
            if (nsh3uz['confirm']) window['J15R']();else nsh3uz['cancel'] && (console['log']('退出游戏'), wx['exitMiniProgram']({}));
        }
    });
}, window['exitAlert'] = function (qb2r) {
    console['log']('exitAlert', qb2r), wx['showModal']({
        'title': '提示',
        'content': qb2r,
        'confirmText': '重登',
        'showCancel': ![],
        'complete'(arbo1q) {
            console['log']('退出游戏'), wx['exitMiniProgram']({});
        }
    });
}, window['J1RPQ5'] = ![], window['J1R5PQ'] = function (a0bqr) {
    window['J1RPQ5'] = !![], wx['showLoading'](a0bqr);
}, window['J1R5QP'] = function () {
    window['J1RPQ5'] && (window['J1RPQ5'] = ![], wx['hideLoading']({}));
}, window['J1RQP5'] = function (_mecdk) {
    window['ServerLoading']['instance']['J1RQP5'](_mecdk);
}, window['msgCheck'] = function (mk_cd, mp_c) {
    gak1_qo['msgCheck'](mk_cd, function (zsun3) {
        zsun3 && zsun3['data'] ? zsun3['data']['state'] == 0x1 ? mp_c(!![]) : (mp_c(![]), console['info']('存在敏感词：\x20' + zsun3['data']['msg'])) : console['log']('msgCheck', zsun3);
    });
}, window['J1RQ5P'] = function (yljw4$) {
    console['log']('getJsURL', yljw4$);
}, window['J1R5Q'] = function (kce_o) {}, window['J1RQ5'] = function (hzn3s, n2h083, cpdm9) {}, window['J1RQ'] = function (abqro) {
    console['log']('toEnterGame', abqro), window['ServerLoading']['instance']['closeAuthor'](), window['ServerLoading']['instance']['closeServer'](), window['ServerLoading']['instance']['closeLoading'](), window['closeFillter']();
}, window['J1QR'] = function (emk_c) {
    window['toErrorAlarm'](0xe, 'onApiError ' + emk_c), window['J1RP5Q']('on api error');
    var mp5d9t = {
        'id': window['J15Q']['roleId'],
        'role': window['J15Q']['roleName'],
        'level': window['J15Q']['roleLevel'],
        'account': window['J15Q']['account'],
        'version': window['J15Q']['lastVersion'],
        'cdn': window['J15Q']['cdn'],
        'pkgName': window['J15Q']['pkgName'],
        'gamever': window['config']['game_ver'],
        'serverid': window['J15Q']['selectedServer'] ? window['J15Q']['selectedServer']['server_id'] : 0x0,
        'systemInfo': window['systemInfo'],
        'error': 'onApiError',
        'stack': emk_c ? emk_c : 'on api error'
    },
        roq1ba = JSON['stringify'](mp5d9t);
    console['error']('API错误\uFF1A' + roq1ba), window['J1R5'](roq1ba);
}, window['toErrorAlarm'] = function (raq10b, md9pt5) {
    sendApi(J15Q['logurl'], 'log.client_error', {
        'game_pkg': J15Q['pkgName'],
        'partner_id': J15Q['partnerId'],
        'server_id': J15Q['selectedServer'] && J15Q['selectedServer']['server_id'] > 0x0 ? J15Q['selectedServer']['server_id'] : 0x0,
        'uid': J15Q['account'] > 0x0 ? J15Q['account'] : 0x0,
        'type': raq10b,
        'info': md9pt5
    });
}, window['J15RQ'] = function (f9p5tg) {
    var $64yjl = JSON['parse'](f9p5tg);
    $64yjl['gamever'] = window['config']['game_ver'], $64yjl['serverid'] = window['J15Q']['selectedServer'] ? window['J15Q']['selectedServer']['server_id'] : 0x0, $64yjl['systemInfo'] = window['systemInfo'];
    var mdce = JSON['stringify']($64yjl);
    console['error']('上报错误：' + mdce), window['J1R5'](mdce);
}, window['J15QR'] = function (aq1kob, ek) {
    var p_dmc = {
        'id': window['J15Q']['roleId'],
        'role': window['J15Q']['roleName'],
        'level': window['J15Q']['roleLevel'],
        'account': window['J15Q']['account'],
        'version': window['J15Q']['lastVersion'],
        'cdn': window['J15Q']['cdn'],
        'pkgName': window['J15Q']['pkgName'],
        'gamever': window['config']['game_ver'],
        'serverid': window['J15Q']['selectedServer'] ? window['J15Q']['selectedServer']['server_id'] : 0x0,
        'systemInfo': window['systemInfo'],
        'error': aq1kob,
        'stack': ek
    },
        u7zx3 = JSON['stringify'](p_dmc);
    console['warn']('上报信息：' + u7zx3), window['J1R5'](u7zx3);
}, window['J1R5'] = function (t695fg) {
    if (window['J15Q']['wxPlatform'] == 'devtools') return;
    var td5pm = J15Q['J1R5'] + '?account=' + J15Q['account'];
    wx['request']({
        'url': td5pm,
        'method': 'POST',
        'data': t695fg,
        'header': {
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        },
        'success': function (yl6f4j) {
            DEBUG && console['log']('clientlog:', td5pm, t695fg, yl6f4j);
        },
        'fail': function (w$jli4) {
            DEBUG && console['log']('clientlog:', td5pm, t695fg, w$jli4);
        },
        'complete': function () {}
    });
}, window['guild'] = function () {
    function braq() {
        return ((0x1 + Math['random']()) * 0x10000 | 0x0)['toString'](0x10)['substring'](0x1);
    }
    return braq() + braq() + '-' + braq() + '-' + braq() + '-' + braq() + '+' + braq() + braq() + braq();
}, window['J15R'] = function () {
    console['log']('#SDK 初始化\uFF1A');
    var w4$lj = gak1_qo['getConfig']();
    J15Q['channel'] = w4$lj['partner_id'], J15Q['channelNum'] = w4$lj['partner_id'], J15Q['partnerId'] = w4$lj['partner_id'], J15Q['pkgName'] = w4$lj['game_pkg'];
    var zu37x = { 'game_ver': J15Q['version'] };
    J15Q['device_id'] = this['guild'](), J1R5PQ({ 'title': '正在初始化' }), gak1_qo['init'](zu37x, this['J1QR5']['bind'](this));
}, window['J1QR5'] = function (rb8n02) {
    var c9m5dp = rb8n02['develop'];
    sdkInitRes = rb8n02, console['log']('#初始化成功\x20\x20\x20提审状态:' + c9m5dp + '\x20\x20\x20是否提审:' + (c9m5dp == 0x1) + '\x20\x20\x20提审版本号:' + rb8n02['game_ver'] + '\x20\x20\x20当前版本号:' + window['versions']['wxVersion'] + '   version_name:' + rb8n02['version_name']);
    if (!rb8n02['game_ver'] || window['J1FPQR5'](window['versions']['wxVersion'], rb8n02['game_ver']) < 0x0) console['log']('#正式版============================='), J15Q['apiurl'] = 'https://api-tjqy.shzbkj.com', J15Q['logurl'] = 'https://log-tjqy.shzbkj.com', J15Q['payurl'] = 'https://pay-tjqy.shzbkj.com', J15Q['cdn'] = 'https://cdn-tjqy-zz.shzbkj.com/weixin_1/', J15Q['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', J15Q['version_name'] = rb8n02['version_name'], J15Q['wxShield'] = ![];else window['J1FPQR5'](window['versions']['wxVersion'], rb8n02['game_ver']) == 0x0 ? (console['log']('#审核版============================='), J15Q['apiurl'] = 'https://api-tjqytest.shzbkj.com', J15Q['logurl'] = 'https://log-tjqytest.shzbkj.com', J15Q['payurl'] = 'https://pay-tjqytest.shzbkj.com', J15Q['cdn'] = 'https://cdn-tjqy.shzbkj.com/weixin_0/', J15Q['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', J15Q['version_name'] = 'weixin', J15Q['wxShield'] = !![]) : (console['log']('#开发版============================='), J15Q['apiurl'] = 'https://api-tjqytest.shzbkj.com', J15Q['logurl'] = 'https://log-tjqytest.shzbkj.com', J15Q['payurl'] = 'https://pay-tjqytest.shzbkj.com', J15Q['cdn'] = 'https://cdn-tjqy.shzbkj.com/weixin_0/', J15Q['spareCdn'] = 'https://cdn-tjqy-ali.shzbkj.com/weixin_1/', J15Q['version_name'] = 'weixin', J15Q['wxShield'] = ![]);
    J15Q['from_scene'] = config['from'] ? config['from'] : 0x0, this['J1P5RQ'](), this['J1P5QR'](), window['sdkLoginRetry'] = 0x5, J1R5PQ({ 'title': '正在登录账号' }), gak1_qo['login'](this['J1Q5R']['bind'](this));
}, window['sdkLoginRetry'] = 0x5, window['J1Q5R'] = function (jliw, hns3z) {
    if (jliw == 0x0 && hns3z && hns3z['token']) {
        J15Q['sdk_token'] = hns3z['token'], J15Q['wx_channel'] = hns3z['wx_channel'], J15Q['video_type'] = hns3z['video_type'], J15Q['zsy_tp_state'] = hns3z['zsy_tp_state'], J15Q['ad_flag'] = hns3z['ad_flag'];
        var bqr201 = this;
        J1R5PQ({ 'title': '正在验证账号' }), sendApi(J15Q['apiurl'], 'User.login', {
            'platform': J15Q['sdk_name'],
            'partner_id': J15Q['partnerId'],
            'token': hns3z['token'],
            'game_pkg': J15Q['pkgName'],
            'deviceId': J15Q['device_id'],
            'scene': 'WX_' + J15Q['from_scene']
        }, this['J1PR5Q']['bind'](this), J1PQ5, J1QR);
    } else hns3z && hns3z['errMsg'] && window['sdkLoginRetry'] > 0x0 && (hns3z['errMsg']['indexOf']('fail interrupted') != -0x1 || hns3z['errMsg']['indexOf']('network api interrupted') != -0x1 || hns3z['errMsg']['indexOf']('Network Error') != -0x1 || hns3z['errMsg']['indexOf']('ERR_TIMED_OUT') != -0x1 || hns3z['errMsg']['indexOf']('ERR_CONNECTION_ABORTED') != -0x1 || hns3z['errMsg']['indexOf']('ERR_CONNECTION_RESET') != -0x1) ? (window['sdkLoginRetry']--, gak1_qo['login'](this['J1Q5R']['bind'](this))) : (window['toErrorAlarm'](0x1, 'AKSDK.login fail: status=' + jliw + ',errMsg=' + (hns3z ? hns3z['errMsg'] : '')), window['J15QR']('sdkOnLoginError', JSON['stringify']({
        'status': jliw,
        'data': hns3z
    })), window['J1RP5Q']('登录/注册失败' + (hns3z && hns3z['errMsg'] ? '，' + hns3z['errMsg'] : '')));
}, window['J1PR5Q'] = function (p5t9mg) {
    if (!p5t9mg) {
        window['toErrorAlarm'](0x2, 'User.login fail: response is null'), window['J15QR']('userLoginError', 'response is null'), window['J1RP5Q']('User.login failed');
        return;
    }
    if (p5t9mg['state'] != 'success') {
        window['toErrorAlarm'](0x2, 'User.login fail: state=' + p5t9mg['state']), window['J15QR']('userLoginError', JSON['stringify'](p5t9mg)), window['J1RP5Q']('User.login failed: ' + p5t9mg['state']);
        return;
    }
    if (p5t9mg['ban_state'] == 0x1) {
        window['J1RP5Q']('账号已被封禁！');
        return;
    }
    J15Q['userId'] = String(p5t9mg['account']), J15Q['account'] = String(p5t9mg['account']), J15Q['platform'] = String(p5t9mg['platform']), J15Q['channel'] = String(p5t9mg['platform']), J15Q['platform_uid'] = String(p5t9mg['platform_uid']), J15Q['php_sign'] = String(p5t9mg['sign']), J15Q['php_signtime'] = String(p5t9mg['time']), J15Q['sign'] = '';
    var kcem_d = this;
    J1R5PQ({ 'title': '请求服务器' });
    var br0q12 = localStorage['getItem']('LastSer_' + J15Q['pkgName'] + J15Q['account']);
    if (br0q12 && br0q12 != '') {
        var uhs38 = Number(br0q12);
        kcem_d['getCheckServers'](uhs38);
    } else kcem_d['getDefaultServers']();
}, window['getDefaultServers'] = function () {
    var br1q02 = this;
    sendApi(J15Q['apiurl'], 'Server.defaultServer', {
        'partner_id': J15Q['partnerId'],
        'uid': J15Q['account'],
        'version': J15Q['version'],
        'game_pkg': J15Q['pkgName'],
        'device': J15Q['device_id']
    }, br1q02['J1PRQ5']['bind'](br1q02), J1PQ5, J1QR);
}, window['J1PRQ5'] = function (wyl$j) {
    if (!wyl$j) {
        window['toErrorAlarm'](0x3, 'Server.defaultServer failed'), window['J1RP5Q']('Server.defaultServer failed');
        return;
    }
    if (wyl$j['state'] != 'success') {
        window['toErrorAlarm'](0x3, 'Server.defaultServer failed: ' + wyl$j['state']), window['J1RP5Q']('Server.defaultServer failed: ' + wyl$j['state']);
        return;
    }
    if (!wyl$j['data'] || wyl$j['data']['length'] == 0x0) {
        window['toErrorAlarm'](0x3, 'Server.defaultServer failed: data null'), window['J1RP5Q']('服务器尚未开启');
        return;
    }
    this['updCurServer'](wyl$j);
}, window['getCheckServers'] = function (ltg6yf) {
    var qro1ab = this;
    sendApi(J15Q['apiurl'], 'Server.check_server', {
        'server_id': ltg6yf,
        'time': Date['now']() / 0x3e8
    }, qro1ab['onUserLoginCheckServers']['bind'](qro1ab), J1PQ5, J1QR);
}, window['onUserLoginCheckServers'] = function (s7z3xu) {
    if (!s7z3xu) {
        window['toErrorAlarm'](0x4, 'Server.check_server failed'), this['getDefaultServers']();
        return;
    }
    if (s7z3xu['state'] != 'success') {
        window['toErrorAlarm'](0x4, 'Server.check_server failed: ' + s7z3xu['state']), this['getDefaultServers']();
        return;
    }
    if (!s7z3xu['data'] || s7z3xu['data']['length'] == 0x0) {
        window['toErrorAlarm'](0x4, 'Server.check_server failed: data null'), this['getDefaultServers']();
        return;
    }
    this['updCurServer'](s7z3xu);
}, window['updCurServer'] = function (brqa01) {
    J15Q['newRegister'] = brqa01['is_new'] != undefined ? brqa01['is_new'] : 0x0, J15Q['selectedServer'] = {
        'server_id': String(brqa01['data'][0x0]['server_id']),
        'server_name': String(brqa01['data'][0x0]['server_name']),
        'entry_ip': brqa01['data'][0x0]['entry_ip'],
        'entry_port': parseInt(brqa01['data'][0x0]['entry_port']),
        'status': J15PR(brqa01['data'][0x0]),
        'start_time': brqa01['data'][0x0]['start_time'],
        'maintain_time': brqa01['data'][0x0]['maintain_time'] ? brqa01['data'][0x0]['maintain_time'] : '',
        'is_recommend': brqa01['data'][0x0]['is_recommend'],
        'cdn': J15Q['cdn']
    }, this['J1Q5PR'](), window['ServerLoading'] && window['ServerLoading']['instance']['openJumpTipsBtn'] && window['ServerLoading']['instance']['openJumpTipsBtn'](sdkInitRes['isShowSdkAge'], sdkInitRes['sdk_age_adaptation_icon'], sdkInitRes['sdk_age_adaptation_content'], sdkInitRes['coordinate_x'], sdkInitRes['coordinate_y']);
}, window['J1Q5PR'] = function () {
    if (J15Q['newRegister'] == 0x1) {
        var ljwi$ = J15Q['selectedServer']['status'];
        if (ljwi$ === -0x1 || ljwi$ === 0x0) {
            window['toErrorAlarm'](0xf, 'new register selectedServer status error: id=' + J15Q['selectedServer']['id'] + ',status=' + J15Q['selectedServer']['status']), window['J1RP5Q'](ljwi$ === -0x1 ? '当前服务器在维护中' : '当前服务器尚未开启，敬请期待');
            return;
        }
        J1QRP5(0x0, J15Q['selectedServer']['server_id']), window['ServerLoading']['instance']['openLoading'](J15Q['newRegister']);
    } else window['ServerLoading']['instance']['openServer'](), J1R5QP();
    window['J15P'] = !![], window['setFillter'](), window['J1QP5R'](), window['J1Q5RP']();
}, window['J1P5RQ'] = function () {
    sendApi(J15Q['apiurl'], 'User.getCdnVersion', {
        'game_pkg': J15Q['pkgName'],
        'version_name': J15Q['version_name']
    }, this['reqVersionConfigCallBack']['bind'](this), J1PQ5, J1QR);
}, window['reqVersionConfigCallBack'] = function (nh3szu) {
    if (!nh3szu) {
        window['toErrorAlarm'](0x5, 'User.getCdnVersion failed'), window['J1RP5Q']('User.getCdnVersion failed');
        return;
    }
    if (nh3szu['state'] != 'success') {
        window['toErrorAlarm'](0x5, 'User.getCdnVersion failed: state=' + nh3szu['state']), window['J1RP5Q']('User.getCdnVersion failed: state=' + nh3szu['state']);
        return;
    }
    if (!nh3szu['data'] || !nh3szu['data']['version']) {
        window['toErrorAlarm'](0x5, 'User.getCdnVersion failed: version=' + (nh3szu['data'] && nh3szu['data']['version'])), window['J1RP5Q']('User.getCdnVersion failed: version=' + (nh3szu['data'] && nh3szu['data']['version']));
        return;
    }
    nh3szu['data']['cdn_url'] && nh3szu['data']['cdn_url']['length'] > 0xa && (J15Q['base_cdn'] = nh3szu['data']['cdn_url'], J15Q['cdn'] = nh3szu['data']['cdn_url']), nh3szu['data']['version'] && (J15Q['lastVersion'] = nh3szu['data']['version']), console['info']('lastVersion:' + J15Q['lastVersion'] + ', version_name:' + J15Q['version_name']), window['J15QP'] = !![], window['J1QP5R'](), window['J1Q5RP']();
}, window['pkgOptions'], window['J1P5QR'] = function () {
    sendApi(J15Q['apiurl'], 'Common.get_option_pkg', { 'game_pkg': J15Q['pkgName'] }, this['J1PQR5']['bind'](this), J1PQ5, J1QR);
}, window['J1PQR5'] = function (eack) {
    if (eack && eack['state'] === 'success' && eack['data']) {
        window['pkgOptions'] = eack['data'];
        for (var cd in eack['data']) {
            J15Q[cd] = eack['data'][cd];
        }
    } else window['toErrorAlarm'](0xb, 'Common.get_option_pkg failed'), console['info']('reqPkgOptionsCallBack ' + eack['state']);
    window['J1P5'] = !![], window['setFillter'](), window['J1Q5RP']();
}, window['setFillter'] = function () {
    if (!window['J15P'] || !window['J1P5']) return;
    var sznuh = J15Q['newRegister'] == 0x1,
        kbqao = J15Q['wxShield'],
        hsn38 = J15Q['fillter_tm_pkg'] && J15Q['fillter_tm_pkg'] > 0x0;
    if (kbqao || sznuh && hsn38) {
        var jwv$ = J15Q['fillter_ui_pkg'],
            coe_kd = jwv$ && jwv$['length'] == 0x9;
        coe_kd && (window['ShieldColor'] = jwv$);
        var w4$ilj = J15Q['fillter_mosaic_pkg'],
            oa1q_k = w4$ilj && w4$ilj['split']('#')['length'] == 0x4;
        oa1q_k && (window['ShieldNoise'] = w4$ilj);
    }
}, window['closeFillter'] = function () {
    window['ShieldColor'] = null, window['ShieldNoise'] = null;
}, window['toPay'] = function (uhzsn3, ptgm59, p9mtd5, nh32u8, g5yf6, $jy64l, szhn3u, f6gl4y, oabk1, cekd_m) {
    g5yf6 = String(g5yf6);
    var j$i4vw = szhn3u,
        x3u7zs = f6gl4y;
    J15Q['pay_infos'][g5yf6] = {
        'productid': g5yf6,
        'productname': j$i4vw,
        'productdesc': x3u7zs,
        'roleid': uhzsn3,
        'rolename': ptgm59,
        'rolelevel': p9mtd5,
        'price': $jy64l,
        'callback': oabk1
    }, sendApi(J15Q['payurl'], 'Order.order', {
        'game_pkg': J15Q['pkgName'],
        'server_id': J15Q['selectedServer']['server_id'],
        'server_name': J15Q['selectedServer']['server_name'],
        'level': p9mtd5,
        'uid': J15Q['account'],
        'role_id': uhzsn3,
        'role_name': ptgm59,
        'product_id': g5yf6,
        'product_name': j$i4vw,
        'product_desc': x3u7zs,
        'money': $jy64l,
        'partner_id': J15Q['partnerId']
    }, toPayCallBack, J1PQ5, J1QR);
}, window['toPayCallBack'] = function (m95ptg) {
    if (m95ptg && (m95ptg['errCode'] === 0xc8 || m95ptg['state'] == 'success')) {
        var pdt9m5 = J15Q['pay_infos'][String(m95ptg['product_id'])];
        if (pdt9m5['callback']) pdt9m5['callback'](m95ptg['product_id'], m95ptg['cp_order_id'], -0x1);
        gak1_qo['pay']({
            'cpbill': m95ptg['cp_order_id'],
            'productid': m95ptg['product_id'],
            'productname': pdt9m5['productname'],
            'productdesc': pdt9m5['productdesc'],
            'serverid': J15Q['selectedServer']['server_id'],
            'servername': J15Q['selectedServer']['server_name'],
            'roleid': pdt9m5['roleid'],
            'rolename': pdt9m5['rolename'],
            'rolelevel': pdt9m5['rolelevel'],
            'price': pdt9m5['price'],
            'extension': JSON['stringify']({ 'cp_order_id': m95ptg['cp_order_id'] })
        }, function (_cped, bqoa) {
            pdt9m5['callback'] && _cped == 0x0 && pdt9m5['callback'](m95ptg['product_id'], m95ptg['cp_order_id'], _cped);
            console['info'](JSON['stringify']({
                'type': 'paycallback',
                'status': _cped,
                'data': m95ptg,
                'role_name': pdt9m5['rolename']
            }));
            if (_cped === 0x0) {} else {
                if (_cped === 0x1) {} else {
                    if (_cped === 0x2) {}
                }
            }
        });
    } else {
        var b12rq = m95ptg ? 'errCode=' + m95ptg['errCode'] + ',state=' + m95ptg['state'] + ',info=' + m95ptg['info'] : '获取订单失败';
        window['toErrorAlarm'](0xd, 'Order.order fail: ' + b12rq), alert(b12rq);
    }
}, window['J1PQ5R'] = function () {}, window['J1RPQ'] = function (code_, t95dpm, w4j$yl, e9m, zus37x) {
    gak1_qo['logCreateRole'](J15Q['selectedServer']['server_id'], J15Q['selectedServer']['server_name'] || J15Q['selectedServer']['server_id'], code_, t95dpm, w4j$yl), sendApi(J15Q['apiurl'], 'User.create_role', {
        'game_pkg': J15Q['pkgName'],
        'server_id': J15Q['selectedServer']['server_id'],
        'role_id': code_,
        'uid': J15Q['account'],
        'role_name': t95dpm,
        'role_type': e9m,
        'level': w4j$yl
    });
}, window['J1RQP'] = function (qk_oea, dmp5c9, oq1ak, _qkeao, epdmc, a_ke, gf6yt5, g59fpt, lty, empdc) {
    J15Q['roleId'] = qk_oea, J15Q['roleName'] = dmp5c9, J15Q['roleLevel'] = oq1ak, gak1_qo['logEnterGame'](J15Q['selectedServer']['server_id'], J15Q['selectedServer']['server_name'] || J15Q['selectedServer']['server_id'], qk_oea, dmp5c9, oq1ak), sendApi(J15Q['apiurl'], 'User.update_role', {
        'game_pkg': J15Q['pkgName'],
        'server_id': J15Q['selectedServer']['server_id'],
        'role_id': qk_oea,
        'uid': J15Q['account'],
        'role_name': dmp5c9,
        'role_type': _qkeao,
        'level': oq1ak,
        'evolution': epdmc
    });
}, window['J1PRQ'] = function (_dkm, _1qao, x37uz, flyg46, orqb1a, mg9tp5, qabo1r, gtf6y5, ytgl6, mcdep9) {
    J15Q['roleId'] = _dkm, J15Q['roleName'] = _1qao, J15Q['roleLevel'] = x37uz, gak1_qo['logRoleUpLevel'](J15Q['selectedServer']['server_id'], J15Q['selectedServer']['server_name'] || J15Q['selectedServer']['server_id'], _dkm, _1qao, x37uz), sendApi(J15Q['apiurl'], 'User.update_role', {
        'game_pkg': J15Q['pkgName'],
        'server_id': J15Q['selectedServer']['server_id'],
        'role_id': _dkm,
        'uid': J15Q['account'],
        'role_name': _1qao,
        'role_type': flyg46,
        'level': x37uz,
        'evolution': orqb1a
    });
}, window['J1PQR'] = function (tm5dp) {}, window['J1RP'] = function (g4l6yf, u7szh) {
    gak1_qo['share']('share', { 'activity_id': u7szh }, function (nuh8) {
        g4l6yf && g4l6yf(nuh8);
    });
}, window['openService'] = function () {
    gak1_qo['openService']();
}, window['microPortGuide'] = function () {
    gak1_qo['weiduanHelper'] && gak1_qo['weiduanHelper']();
}, window['reqSMSCode'] = function (p9tgm, dkco, qo_ak1, u2h, z7, ce9md, $j6ly4, mcp95d) {
    mcp95d = mcp95d || J15Q['selectedServer']['server_id'], sendApi(J15Q['apiurl'], 'User.get_code', {
        'phone': p9tgm,
        'role_id': dkco,
        'uid': J15Q['account'],
        'game_pkg': J15Q['pkgName'],
        'partner_id': J15Q['partnerId'],
        'server_id': mcp95d
    }, $j6ly4, 0x2, null, function () {
        return !![];
    });
}, window['onShow'] = function (mt9d5) {
    window['J1QRP'] = mt9d5, window['J1QRP'] && window['J1PR'] && (console['info']('小游戏切前台事件，场景值：' + window['J1PR']['scene']), window['J1QRP'](window['J1PR']), window['J1PR'] = null);
}, window['J1QPR'] = function (f46gyl, epdc, rbaoq1, wil4j$) {
    window['send']('https://sdk.sh9130.com/game/?ct=min&ac=getInviter', {
        'game_pkg': window['J15Q']['pkgName'],
        'role_id': epdc,
        'server_id': rbaoq1
    }, wil4j$);
}, window['J15RPQ'] = function (k1oba, w$4ivj, b8r210) {
    function edoc_k(nz3u) {
        var dpcme = [],
            usx7z = [],
            mcekd_ = b8r210 || window['config']['tmpId'];
        for (var vi$4 in mcekd_) {
            var jiv4$ = Number(vi$4);
            (!k1oba || !k1oba['length'] || k1oba['indexOf'](jiv4$) != -0x1) && (usx7z['push'](mcekd_[vi$4]), dpcme['push']([jiv4$, 0x3]));
        }
        window['J1FPQR5'](window['SDKVersion'], '2.4.4') >= 0x0 ? (console['log']('调用订阅'), gak1_qo['subscribeMessage'] && gak1_qo['subscribeMessage'](usx7z, function (gmt95p) {
            console['log']('订阅回调：'), console['log'](gmt95p);
            if (gmt95p && gmt95p['errMsg'] == 'requestSubscribeMessage:ok') for (var m9gtp5 in mcekd_) {
                if (gmt95p[mcekd_[m9gtp5]] == 'accept') {
                    var ab01 = Number(m9gtp5);
                    for (var ra1q0 = 0x0; ra1q0 < dpcme['length']; ra1q0++) {
                        if (dpcme[ra1q0][0x0] == ab01) {
                            dpcme[ra1q0][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['J1FPQR5'](window['SDKVersion'], '2.10.1') >= 0x0 ? wx['getSetting']({
                'withSubscriptions': !![],
                'success': function (e9cdmp) {
                    var j4$lyw = e9cdmp['subscriptionsSetting']['itemSettings'];
                    if (j4$lyw) {
                        console['log']('获得订阅设置：'), console['log'](j4$lyw);
                        for (var aqokb1 in mcekd_) {
                            if (j4$lyw[mcekd_[aqokb1]] == 'accept') {
                                var un382h = Number(aqokb1);
                                for (var f4y6lg = 0x0; f4y6lg < dpcme['length']; f4y6lg++) {
                                    if (dpcme[f4y6lg][0x0] == un382h) {
                                        dpcme[f4y6lg][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console['log'](dpcme), w$4ivj && w$4ivj(dpcme);
                    } else console['log']('获得订阅设置：没有长期订阅消息'), console['log'](e9cdmp), console['log'](dpcme), w$4ivj && w$4ivj(dpcme);
                },
                'fail': function () {
                    console['log']('获得订阅设置：失败'), console['log'](dpcme), w$4ivj && w$4ivj(dpcme);
                }
            }) : (console['log']('版本过低，获得订阅设置：失败\x20' + window['SDKVersion']), console['log'](dpcme), w$4ivj && w$4ivj(dpcme));
        })) : (console['log']('版本过低，不支持订阅\x20' + window['SDKVersion']), console['log'](dpcme), w$4ivj && w$4ivj(dpcme)), wx['offTouchEnd'](edoc_k);
    }
    wx['onTouchEnd'](edoc_k);
}, window['J15RQP'] = {
    'isSuccess': ![],
    'level': '100',
    'isCharging': ![]
}, window['J15PRQ'] = function (dmp5) {
    wx['getBatteryInfo']({
        'success': function (fly4g6) {
            var s3hnu8 = window['J15RQP'];
            s3hnu8['isSuccess'] = !![], s3hnu8['level'] = Number(fly4g6['level'])['toFixed'](0x0), s3hnu8['isCharging'] = fly4g6['isCharging'], dmp5 && dmp5(s3hnu8['isSuccess'], s3hnu8['level'], s3hnu8['isCharging']);
        },
        'fail': function (l46fy) {
            console['log']('调用获取电池信息失败', l46fy['errMsg']);
            var ekac_o = window['J15RQP'];
            dmp5 && dmp5(ekac_o['isSuccess'], ekac_o['level'], ekac_o['isCharging']);
        }
    });
}, window['getNetworkType'] = function (q0arb1) {
    wx['getNetworkType']({
        'success': function (tfg6y5) {
            q0arb1 && q0arb1(!![], tfg6y5);
        },
        'fail': function (pc9ed) {
            q0arb1 && q0arb1(![], pc9ed);
        }
    });
}, window['onNetworkStatusChange'] = function (i$wj) {
    if (i$wj) wx['onNetworkStatusChange'](i$wj);
}, window['offNetworkStatusChange'] = function (obka1q) {
    wx['offNetworkStatusChange'](obka1q);
}, window['send'] = function (g6yfl, wl4jy$, pfg95, dmpec9, dp5t, eco_d, qr10ab, dm9c5p) {
    if (dmpec9 == undefined) dmpec9 = 0x1;
    wx['request']({
        'url': g6yfl,
        'method': qr10ab || 'GET',
        'responseType': 'text',
        'data': wl4jy$,
        'header': { 'content-type': dm9c5p || 'application/json' },
        'success': function (nsz) {
            DEBUG && console['log']('send.success:', g6yfl, info, nsz);
            if (nsz && nsz['statusCode'] == 0xc8) {
                var z3hs7u = nsz['data'];
                !eco_d || eco_d(z3hs7u) ? pfg95 && pfg95(z3hs7u) : window['sendFail'](g6yfl, wl4jy$, pfg95, dmpec9, dp5t, eco_d, nsz);
            } else window['sendFail'](g6yfl, wl4jy$, pfg95, dmpec9, dp5t, eco_d, nsz);
        },
        'fail': function (lij$) {
            DEBUG && console['log']('send.fail:', g6yfl, info, lij$), window['sendFail'](g6yfl, wl4jy$, pfg95, dmpec9, dp5t, eco_d, lij$);
        },
        'complete': function () {}
    });
}, window['sendFail'] = function (o_eqk, sz73x, k_mec, c5dm9, ivjw$4, kq1_, wj4$yl) {
    c5dm9 - 0x1 > 0x0 ? setTimeout(function () {
        window['send'](o_eqk, sz73x, k_mec, c5dm9 - 0x1, ivjw$4, kq1_);
    }, 0x3e8) : ivjw$4 && ivjw$4(JSON['stringify']({
        'url': o_eqk,
        'response': wj4$yl
    }));
}, window['sendApi'] = function (rh08n2, tgf659, gt96f, aqoe, $j4yw, o1qbr, _ceko) {
    !gt96f && (gt96f = {});
    var j$64l = Math['floor'](Date['now']() / 0x3e8);
    gt96f['time'] = j$64l, gt96f['method'] = tgf659;
    var $iwl4j = Object['keys'](gt96f)['sort'](),
        mcpe_d = '',
        w4$jy = '';
    for (var b280nr = 0x0; b280nr < $iwl4j['length']; b280nr++) {
        mcpe_d = mcpe_d + (b280nr == 0x0 ? '' : '&') + $iwl4j[b280nr] + gt96f[$iwl4j[b280nr]], w4$jy = w4$jy + (b280nr == 0x0 ? '' : '&') + $iwl4j[b280nr] + '=' + encodeURIComponent(gt96f[$iwl4j[b280nr]]);
    }
    mcpe_d = mcpe_d + J15Q['apikey'];
    var w4$ji = 'sign=' + md5(mcpe_d);
    send(rh08n2 + '?' + w4$jy + (w4$jy == '' ? '' : '&') + w4$ji, null, aqoe, $j4yw, o1qbr, _ceko || function (hn8023) {
        return hn8023['state'] == 'success';
    }, null, 'application/x-www-form-urlencoded');
}, window['J15PQR'] = function (gf46ly, eckmd) {
    var tpmd95 = 0x0;
    J15Q['selectedServer'] && (tpmd95 = J15Q['selectedServer']['server_id']), sendApi(J15Q['logurl'], 'UserLog.reportUidStep', {
        'partnerId': J15Q['partnerId'],
        'gamePkg': J15Q['pkgName'],
        'logTime': Math['floor'](Date['now']() / 0x3e8),
        'platformUid': J15Q['platform_uid'],
        'type': gf46ly,
        'serverId': tpmd95
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['J15QRP'] = function (vw$j4i) {
    sendApi(J15Q['apiurl'], 'Server.getServerGroup', {
        'partner_id': J15Q['partnerId'],
        'uid': J15Q['account'],
        'version': J15Q['version'],
        'game_pkg': J15Q['pkgName'],
        'device': J15Q['device_id']
    }, J15QPR, J1PQ5, J1QR);
}, window['J15QPR'] = function (decm_) {
    if (decm_ && decm_['state'] === 'success' && decm_['data']) {
        decm_['data']['unshift']({
            'id': -0x2,
            'name': '最新服'
        }), decm_['data']['unshift']({
            'id': -0x1,
            'name': '已有角色'
        }), J15Q['groupList'] = decm_['data'];
        if (window['initPanel']) window['initPanel']['showGroupList']();
    } else {
        J15Q['hasGroupReq'] = ![];
        var sn3h = decm_ ? decm_['state'] : '';
        window['toErrorAlarm'](0x7, 'Server.getServerGroup fail: ' + sn3h), window['J1RP5Q']('reqServerGroupCallBack ' + sn3h);
    }
}, window['J1RP5'] = function (n2hu3) {
    sendApi(J15Q['apiurl'], 'Server.getServerByUid', {
        'partner_id': J15Q['partnerId'],
        'uid': J15Q['account'],
        'version': J15Q['version'],
        'game_pkg': J15Q['pkgName'],
        'device': J15Q['device_id']
    }, J1R5P, J1PQ5, J1QR);
}, window['J1R5P'] = function (oeqa_) {
    J15Q['hasServerReq'] = ![];
    if (oeqa_ && oeqa_['state'] === 'success' && oeqa_['data']) {
        for (var _1qkao = 0x0; _1qkao < oeqa_['data']['length']; _1qkao++) {
            oeqa_['data'][_1qkao]['status'] = J15PR(oeqa_['data'][_1qkao]);
        }
        J15Q['serverList'][-0x1] = window['changeServerName'](oeqa_['data']), window['initPanel']['showServerList'](-0x1);
    } else {
        var b08 = oeqa_ ? oeqa_['state'] : '';
        window['toErrorAlarm'](0x8, 'Server.getServerByUid fail: ' + b08), window['J1RP5Q']('reqServerOwnerCallBack ' + b08);
    }
}, window['req_server_owner_status'] = function (unh328) {
    sendApi(J15Q['apiurl'], 'Server.getServerByUid', {
        'partner_id': J15Q['partnerId'],
        'uid': J15Q['account'],
        'version': J15Q['version'],
        'game_pkg': J15Q['pkgName'],
        'device': J15Q['device_id']
    }, unh328, J1PQ5, J1QR);
}, window['J1PR5'] = function (tygf6l, q_oa1) {
    sendApi(J15Q['apiurl'], 'Server.getServerByGroup', {
        'partner_id': J15Q['partnerId'],
        'uid': J15Q['account'],
        'version': J15Q['version'],
        'game_pkg': J15Q['pkgName'],
        'device': J15Q['device_id'],
        'server_group_id': q_oa1
    }, J1P5R, J1PQ5, J1QR);
}, window['J1P5R'] = function (ft5gy6) {
    J15Q['hasServerReq'] = ![];
    if (ft5gy6 && ft5gy6['state'] === 'success' && ft5gy6['data'] && ft5gy6['data']['data']) {
        var $4jlwi = ft5gy6['data']['server_group_id'],
            t59md = [];
        for (var yw$l4 = 0x0; yw$l4 < ft5gy6['data']['data']['length']; yw$l4++) {
            ft5gy6['data']['data'][yw$l4]['status'] = J15PR(ft5gy6['data']['data'][yw$l4]), (t59md['length'] == 0x0 || ft5gy6['data']['data'][yw$l4]['status'] != 0x0) && (t59md[t59md['length']] = ft5gy6['data']['data'][yw$l4]);
        }
        J15Q['serverList'][$4jlwi] = window['changeServerName'](t59md), window['initPanel']['showServerList']($4jlwi);
    } else {
        var wl$ji4 = ft5gy6 ? ft5gy6['state'] : '';
        window['toErrorAlarm'](0x9, 'Server.getServerByGroup fail: ' + wl$ji4), window['J1RP5Q']('reqServerListCallBack ' + wl$ji4);
    }
}, window['J1FPQ5'] = function (hsn) {
    sendApi(J15Q['apiurl'], 'Server.getRecommendServerList', {
        'partner_id': J15Q['partnerId'],
        'uid': J15Q['account'],
        'version': J15Q['version'],
        'game_pkg': J15Q['pkgName'],
        'device': J15Q['device_id']
    }, reqServerRecommendCallBack, J1PQ5, J1QR);
}, window['reqServerRecommendCallBack'] = function (jl6yf4) {
    J15Q['hasServerReq'] = ![];
    if (jl6yf4 && jl6yf4['state'] === 'success' && jl6yf4['data']) {
        for (var jl46$y = 0x0; jl46$y < jl6yf4['data']['length']; jl46$y++) {
            jl6yf4['data'][jl46$y]['status'] = J15PR(jl6yf4['data'][jl46$y]);
        }
        J15Q['serverList'][-0x2] = window['changeServerName'](jl6yf4['data']), window['initPanel']['showServerList'](-0x2);
    } else {
        var j4$iwl = jl6yf4 ? jl6yf4['state'] : '';
        window['toErrorAlarm'](0xa, 'Server.getRecommendServerList fail: ' + j4$iwl), alert('reqServerRecommendCallBack ' + j4$iwl);
    }
}, window['changeServerName'] = function (b8102r) {
    return b8102r;
}, window['J15RP'] = function (a_, f695gt) {
    a_ = a_ || J15Q['selectedServer']['server_id'], sendApi(J15Q['apiurl'], 'Common.get_anno', {
        'type': '4',
        'game_pkg': J15Q['pkgName'],
        'server_id': a_
    }, f695gt);
}, window['req_multi_server_notice'] = function (rbn28, c_dkm, $j4ly6, cmpd9) {
    $j4ly6 = $j4ly6 || J15Q['selectedServer']['server_id'], sendApi(J15Q['apiurl'], 'Common.get_new_anno', {
        'type': rbn28,
        'game_pkg': c_dkm,
        'server_id': $j4ly6
    }, cmpd9);
}, window['req_privacy'] = function (fyl6, k_aco) {
    sendApi(J15Q['apiurl'], 'Common.get_option_pkg_detail', { 'game_pkg': fyl6 }, k_aco);
}, window['J15PR'] = function (fgy5t6) {
    if (fgy5t6) {
        if (fgy5t6['status'] == 0x1) {
            if (fgy5t6['online_status'] == 0x3) return 0x3;else return fgy5t6['online_status'] == 0x1 ? 0x2 : 0x1;
        } else return fgy5t6['status'] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['J1QRP5'] = function (yljf46, d_coek) {
    J15Q['last_check_ban'] = {
        'step': yljf46,
        'server_id': d_coek
    };
    var uhn38 = this;
    J1R5PQ({ 'title': '正在验证角色' }), sendApi(J15Q['apiurl'], 'User.checkInfo', {
        'partner_id': J15Q['partnerId'],
        'uid': J15Q['account'],
        'game_pkg': J15Q['pkgName'],
        'server_id': d_coek,
        'platform': J15Q['platform'],
        'platform_uid': J15Q['platform_uid'],
        'check_login_time': J15Q['php_signtime'],
        'check_login_sign': J15Q['php_sign'],
        'version_name': J15Q['version_name']
    }, J1QR5P, J1PQ5, J1QR, function (ak_oeq) {
        return ak_oeq['state'] == 'success' || ak_oeq['info'] == 'time_err' || ak_oeq['info'] == 'sign_err';
    });
}, window['J1QR5P'] = function (fj4l6) {
    var barq1 = this;
    if (fj4l6 && fj4l6['state'] === 'success' && fj4l6['data']) {
        var il4$w = J15Q['selectedServer'];
        il4$w['channel_num'] = J15Q['channelNum'], il4$w['sign'] = String(fj4l6['data']['login_sign']), il4$w['tick'] = parseInt(fj4l6['data']['time']);
        if (fj4l6['data']['server_num']) il4$w['server_num'] = parseInt(fj4l6['data']['server_num']);else il4$w['server_num'] = parseInt(fj4l6['data']['server_id']);
        il4$w['is_domain'] = 0x0, il4$w['cdn'] = J15Q['base_cdn'], il4$w['resver'] = fj4l6['data']['cdn_version'], il4$w['server_options'] = fj4l6['data']['server_options'];
        if (fj4l6['data']['max_create']) il4$w['max_create'] = parseInt(fj4l6['data']['max_create']);
        console['log']('server_options\uFF1A' + JSON['stringify'](il4$w['server_options'])), J15Q['newRegister'] == 0x1 && il4$w['server_options'] && il4$w['server_options']['show_btn'] == 0x1 && (J15Q['showGetBtn'] = 0x1, window['ServerLoading']['instance']['J1FQ5']()), J1QPR5();
    } else {
        if (J15Q['last_check_ban']['step'] >= 0x3) {
            var r8n0 = fj4l6 ? fj4l6['state'] : '';
            window['toErrorAlarm'](0xc, 'User.checkInfo fail: ' + r8n0), J1QR(JSON['stringify'](fj4l6)), window['J1RP5Q']('User.checkInfo failed: ' + r8n0);
        } else sendApi(J15Q['apiurl'], 'User.login', {
            'platform': J15Q['sdk_name'],
            'partner_id': J15Q['partnerId'],
            'token': J15Q['sdk_token'],
            'game_pkg': J15Q['pkgName'],
            'deviceId': J15Q['device_id'],
            'scene': 'WX_' + J15Q['from_scene']
        }, function (dmpc59) {
            if (!dmpc59 || dmpc59['state'] != 'success') {
                window['J1RP5Q']('User.login failed: ' + dmpc59 && dmpc59['state']);
                return;
            }
            J15Q['php_sign'] = String(dmpc59['sign']), J15Q['php_signtime'] = String(dmpc59['time']), setTimeout(function () {
                J1QRP5(J15Q['last_check_ban']['step'] + 0x1, J15Q['last_check_ban']['server_id']);
            }, 0x5dc);
        }, J1PQ5, J1QR, function (t6fyl) {
            return t6fyl['state'] == 'success' || t6fyl['state'] == 'failed';
        });
    }
}, window['J1QPR5'] = function () {
    ServerLoading['instance']['openLoading'](J15Q['newRegister']), window['J1PQ'] = !![], window['J1Q5RP']();
}, window['J1QP5R'] = function () {
    if (window['J1QP'] && window['J15PQ'] && window['loadServerRes'] && window['loadLoadingRes'] && window['J15QP'] && window['J15P']) {
        if (!window['MainWX']['instance']) {
            console['log']('Main 初始化' + window['MainWX']['instance']);
            var gty6f5 = wx['getLaunchOptionsSync'](),
                un3hzs = gty6f5['scene'] ? gty6f5['scene'] : 0x0,
                fg64ly = {
                'cdn': window['J15Q']['cdn'],
                'spareCdn': window['J15Q']['spareCdn'],
                'newRegister': window['J15Q']['newRegister'],
                'wxPC': window['J15Q']['wxPC'],
                'wxIOS': window['J15Q']['wxIOS'],
                'wxAndroid': window['J15Q']['wxAndroid'],
                'wxParam': {
                    'limitLoad': window['J15Q']['J1FRPQ5'],
                    'benchmarkLevel': window['J15Q']['J1FR5PQ'],
                    'wxFrom': window['config']['from'] == 'txcps' ? 0x1 : 0x0,
                    'wxSDKVersion': window['SDKVersion'],
                    'qudao': '6kw'
                },
                'configType': window['J15Q']['configType'],
                'exposeType': window['J15Q']['exposeType'],
                'scene': un3hzs,
                'video_type': window['J15Q']['video_type'],
                'ad_flag': window['J15Q']['ad_flag']
            };
            if (window['pkgOptions']) for (var _qaoke in window['pkgOptions']) {
                if (!fg64ly[_qaoke]) fg64ly[_qaoke] = window['pkgOptions'][_qaoke];
            }
            new window['MainWX'](fg64ly, window['J15Q']['lastVersion'], window['J1FRP5Q']);
        }
    }
}, window['J1Q5RP'] = function () {
    if (window['J1QP'] && window['J15PQ'] && window['loadServerRes'] && window['loadLoadingRes'] && window['J15QP'] && window['J15P'] && window['J1PQ'] && window['J1P5']) {
        J1R5QP();
        if (!J1QP5) {
            J1QP5 = !![];
            if (!window['MainWX']['instance']) window['J1QP5R']();
            var b01 = 0x0,
                h8n203 = wx['getMenuButtonBoundingClientRect']();
            h8n203 && (window['J15Q']['wxPhone'] && (b01 = h8n203['top']), console['info']('MenuButton  top:' + h8n203['top'] + ',bottom:' + h8n203['bottom'] + ',left:' + h8n203['left'] + ',right:' + h8n203['right'] + ',width:' + h8n203['width'] + ',height:' + h8n203['height']));
            var g9t65 = {};
            for (const kqaoe in J15Q['selectedServer']) {
                g9t65[kqaoe] = J15Q['selectedServer'][kqaoe];
            }
            var b2r0n = {
                'channel': window['J15Q']['channel'],
                'account': window['J15Q']['account'],
                'userId': window['J15Q']['userId'],
                'cdn': window['J15Q']['cdn'],
                'data': window['J15Q']['data'],
                'package': window['J15Q']['package'],
                'newRegister': window['J15Q']['newRegister'],
                'pkgName': window['J15Q']['pkgName'],
                'partnerId': window['J15Q']['partnerId'],
                'platform_uid': window['J15Q']['platform_uid'],
                'deviceId': window['J15Q']['device_id'],
                'selectedServer': g9t65,
                'configType': window['J15Q']['configType'],
                'exposeType': window['J15Q']['exposeType'],
                'debugUsers': window['J15Q']['debugUsers'],
                'wxMenuTop': b01,
                'wxShield': window['J15Q']['wxShield'],
                'encryptParam': window['J15Q']['encryptParam'],
                'wx_channel': window['J15Q']['wx_channel'],
                'zsy_tp_state': window['J15Q']['zsy_tp_state']
            };
            if (window['pkgOptions']) for (var fg9t56 in window['pkgOptions']) {
                b2r0n[fg9t56] = window['pkgOptions'][fg9t56];
            }
            window['MainWX']['instance']['J1Q5F'](b2r0n);
            if (J15Q['selectedServer'] && J15Q['selectedServer']['server_id']) localStorage['setItem']('LastSer_' + J15Q['pkgName'] + J15Q['account'], J15Q['selectedServer']['server_id']);
        }
    } else console['info']('\u3010登录\u3011loadProbPkg:' + window['J1QP'] + ',loadMainPkg:' + window['J15PQ'] + ',loadServerRes:' + window['loadServerRes'] + ',loadLoadingRes:' + window['loadLoadingRes'] + ',loadVersion:' + window['J15QP'] + ',loadServer:' + window['J15P'] + ',isCheckBan:' + window['J1PQ'] + ',loadOption:' + window['J1P5']);
};