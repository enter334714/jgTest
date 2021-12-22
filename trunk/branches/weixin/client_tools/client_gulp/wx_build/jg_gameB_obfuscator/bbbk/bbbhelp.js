var _ = wx.y$;
var HOST = _[28390];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28391]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28392] + username);
        let that = this;
        wx.request({
            url: _[24991] + HOST + _[28393] + partner_id + '/' + game_pkg,
            method: _[28394],
            dataType: _[5809],
            header: {
                'content-type': _[28395] // 默认值
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
            appId: _[28396],
            path: _[28397] + username + _[28398] + ts + _[28399] + sign + _[28400] + game_id,
            extraData: {
                foo: _[20143]
            },
            envVersion: _[28401],
            success(res) {
                wx.showToast({
                    title: _[28402]
                });
            }
        });
    }

}