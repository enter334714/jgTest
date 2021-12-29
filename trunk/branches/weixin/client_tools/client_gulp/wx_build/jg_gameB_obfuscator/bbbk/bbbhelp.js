var _ = wx.y$;
var HOST = _[28446];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28447]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28448] + username);
        let that = this;
        wx.request({
            url: _[25432] + HOST + _[28449] + partner_id + '/' + game_pkg,
            method: _[28450],
            dataType: _[5848],
            header: {
                'content-type': _[28451] // 默认值
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
            appId: _[28452],
            path: _[28453] + username + _[28454] + ts + _[28455] + sign + _[28456] + game_id,
            extraData: {
                foo: _[20382]
            },
            envVersion: _[28457],
            success(res) {
                wx.showToast({
                    title: _[28458]
                });
            }
        });
    }

}