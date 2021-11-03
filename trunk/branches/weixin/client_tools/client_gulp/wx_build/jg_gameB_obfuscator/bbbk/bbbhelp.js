var _ = wx.y$;
var HOST = _[27600];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[27601]);
        let sign = "";
        let ts = Date.now();
        console.log(_[27602] + username);
        let that = this;
        wx.request({
            url: _[27603] + HOST + _[27604] + partner_id + '/' + game_pkg,
            method: _[27605],
            dataType: _[5737],
            header: {
                'content-type': _[27606] // 默认值
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
            appId: _[27607],
            path: _[27608] + username + _[27609] + ts + _[27610] + sign + _[27611] + game_id,
            extraData: {
                foo: _[19786]
            },
            envVersion: _[27612],
            success(res) {
                wx.showToast({
                    title: _[27613]
                });
            }
        });
    }

}