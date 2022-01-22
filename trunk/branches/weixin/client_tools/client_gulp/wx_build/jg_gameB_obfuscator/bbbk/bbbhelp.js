var _ = wx.y$;
var HOST = _[29013];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[29014]);
        let sign = "";
        let ts = Date.now();
        console.log(_[29015] + username);
        let that = this;
        wx.request({
            url: _[25561] + HOST + _[29016] + partner_id + '/' + game_pkg,
            method: _[29017],
            dataType: _[5872],
            header: {
                'content-type': _[29018] // 默认值
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
            appId: _[29019],
            path: _[29020] + username + _[29021] + ts + _[29022] + sign + _[29023] + game_id,
            extraData: {
                foo: _[20466]
            },
            envVersion: _[29024],
            success(res) {
                wx.showToast({
                    title: _[29025]
                });
            }
        });
    }

}