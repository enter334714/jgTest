var _ = wx.y$;
var HOST = _[28840];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28841]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28842] + username);
        let that = this;
        wx.request({
            url: _[25432] + HOST + _[28843] + partner_id + '/' + game_pkg,
            method: _[28844],
            dataType: _[5848],
            header: {
                'content-type': _[28845] // 默认值
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
            appId: _[28846],
            path: _[28847] + username + _[28848] + ts + _[28849] + sign + _[28850] + game_id,
            extraData: {
                foo: _[20382]
            },
            envVersion: _[28851],
            success(res) {
                wx.showToast({
                    title: _[28852]
                });
            }
        });
    }

}