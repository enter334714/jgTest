var _ = wx.y$;
var HOST = _[28391];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28392]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28393] + username);
        let that = this;
        wx.request({
            url: _[24992] + HOST + _[28394] + partner_id + '/' + game_pkg,
            method: _[28395],
            dataType: _[5810],
            header: {
                'content-type': _[28396] // 默认值
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
            appId: _[28397],
            path: _[28398] + username + _[28399] + ts + _[28400] + sign + _[28401] + game_id,
            extraData: {
                foo: _[20144]
            },
            envVersion: _[28402],
            success(res) {
                wx.showToast({
                    title: _[28403]
                });
            }
        });
    }

}