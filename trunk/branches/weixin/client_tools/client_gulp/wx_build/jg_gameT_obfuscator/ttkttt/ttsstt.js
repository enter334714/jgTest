var M = wx.$T;
var HOST = M[321003];
var that = this;
export default class Dall {
    stebutonanimation(partner_id, game_pkg, game_id) {
        let username = wx.getStorageSync('plat_username');
        let sign = "";
        let ts = Date.now();
        console.log(M[321084] + username);
        let that = this;
        wx.request({
            url: 'https://' + HOST + '/partner/data/guide_download/' + partner_id + '/' + game_pkg,
            method: M[320149],
            dataType: M[320613],
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
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
            appId: M[321085],
            path: 'pages/chat/chat?username=' + username + '&ts=' + ts + M[321086] + sign + '&type=' + game_id,
            extraData: {
                foo: M[321087]
            },
            envVersion: M[321057],
            success(res) {
                wx.showToast({
                    title: M[321088]
                });
            }
        });
    }

}