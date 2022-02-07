var _ = wx.y$;
var HOST = _[29708];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[29709]);
        let sign = "";
        let ts = Date.now();
        console.log(_[29710] + username);
        let that = this;
        wx.request({
            url: _[25664] + HOST + _[29711] + partner_id + '/' + game_pkg,
            method: _[29338],
            dataType: _[5871],
            header: {
                'content-type': _[29457] // 默认值
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
            appId: _[29712],
            path: _[29713] + username + _[29714] + ts + _[29715] + sign + _[29716] + game_id,
            extraData: {
                foo: _[20524]
            },
            envVersion: _[29717],
            success(res) {
                wx.showToast({
                    title: _[29718]
                });
            }
        });
    }

}