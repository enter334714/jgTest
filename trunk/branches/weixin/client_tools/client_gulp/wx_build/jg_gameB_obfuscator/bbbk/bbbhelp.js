var _ = wx.y$;
var HOST = _[28098];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28099]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28100] + username);
        let that = this;
        wx.request({
            url: _[28101] + HOST + _[28102] + partner_id + '/' + game_pkg,
            method: _[27750],
            dataType: _[220],
            header: {
                'content-type': _[27862] // 默认值
            },
            data: {
                username: username,
                ts: ts
            },
            success: function (res) {
                sign = res.data.data;
                that.Getto(username, ts, sign, game_id);
            }
        });
    }
    Getto(username, ts, sign, game_id) {
        wx.navigateToMiniProgram({
            appId: _[28103],
            path: _[28104] + username + _[28105] + ts + _[28106] + sign + _[28107] + game_id,
            extraData: {
                foo: _[20182]
            },
            envVersion: _[28108],
            success(res) {
                wx.showToast({
                    title: _[28109]
                });
            }
        });
    }

}