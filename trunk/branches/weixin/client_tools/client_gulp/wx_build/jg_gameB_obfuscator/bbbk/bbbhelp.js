var _ = wx.y$;
var HOST = _[27802];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[27803]);
        let sign = "";
        let ts = Date.now();
        console.log(_[27804] + username);
        let that = this;
        wx.request({
            url: _[24566] + HOST + _[27805] + partner_id + '/' + game_pkg,
            method: _[27806],
            dataType: _[5763],
            header: {
                'content-type': _[27807] // 默认值
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
            appId: _[27808],
            path: _[27809] + username + _[27810] + ts + _[27811] + sign + _[27812] + game_id,
            extraData: {
                foo: _[19876]
            },
            envVersion: _[27813],
            success(res) {
                wx.showToast({
                    title: _[27814]
                });
            }
        });
    }

}