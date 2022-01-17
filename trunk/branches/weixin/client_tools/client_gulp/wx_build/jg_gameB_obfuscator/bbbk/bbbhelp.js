var _ = wx.y$;
var HOST = _[29009];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[29010]);
        let sign = "";
        let ts = Date.now();
        console.log(_[29011] + username);
        let that = this;
        wx.request({
            url: _[25557] + HOST + _[29012] + partner_id + '/' + game_pkg,
            method: _[29013],
            dataType: _[5872],
            header: {
                'content-type': _[29014] // 默认值
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
            appId: _[29015],
            path: _[29016] + username + _[29017] + ts + _[29018] + sign + _[29019] + game_id,
            extraData: {
                foo: _[20465]
            },
            envVersion: _[29020],
            success(res) {
                wx.showToast({
                    title: _[29021]
                });
            }
        });
    }

}