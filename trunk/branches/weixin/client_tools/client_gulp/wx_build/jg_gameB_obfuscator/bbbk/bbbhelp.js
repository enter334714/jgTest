var _ = wx.y$;
var HOST = _[28000];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync(_[28001]);
        let sign = "";
        let ts = Date.now();
        console.log(_[28002] + username);
        let that = this;
        wx.request({
            url: _[24993] + HOST + _[28003] + partner_id + '/' + game_pkg,
            method: _[28004],
            dataType: _[5810],
            header: {
                'content-type': _[28005] // 默认值
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
            appId: _[28006],
            path: _[28007] + username + _[28008] + ts + _[28009] + sign + _[28010] + game_id,
            extraData: {
                foo: _[20145]
            },
            envVersion: _[28011],
            success(res) {
                wx.showToast({
                    title: _[28012]
                });
            }
        });
    }

}