var _ = wx.y$;
var HOST = _[28046];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28047]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28048] + username);
        let that = this;
        wx.request({
            url: _[24755] + HOST + _[28049] + partner_id + '/' + game_pkg,
            method: _[28050],
            dataType: _[5787],
            header: {
                'content-type': _[28051] // 默认值
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
            appId: _[28052],
            path: _[28053] + username + _[28054] + ts + _[28055] + sign + _[28056] + game_id,
            extraData: {
                foo: _[20000]
            },
            envVersion: _[28057],
            success(res) {
                wx.showToast({
                    title: _[28058]
                });
            }
        });
    }

}