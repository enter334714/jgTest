var _ = wx.y$;
var HOST = _[27470];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[27471]);
        let sign = "";
        let ts = Date.now();
        console.log(_[27472] + username);
        let that = this;
        wx.request({
            url: _[27473] + HOST + _[27474] + partner_id + '/' + game_pkg,
            method: _[27475],
            dataType: _[5712],
            header: {
                'content-type': _[27476] // 默认值
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
            appId: _[27477],
            path: _[27478] + username + _[27479] + ts + _[27480] + sign + _[27481] + game_id,
            extraData: {
                foo: _[19726]
            },
            envVersion: _[27482],
            success(res) {
                wx.showToast({
                    title: _[27483]
                });
            }
        });
    }

}