var HOST = 'sdk.sh9130.com';
var that = this;
export default class Dall {
    stebutonanimation(partner_id,game_pkg,game_id){
        let  username = wx.getStorageSync('plat_username');
        let sign="";
        let ts= Date.now();
        console.log('用户username：'+username)
        let that = this
        wx.request({
            url: 'https://' + HOST + '/partner/data/guide_download/' + partner_id + '/' + game_pkg,
            method: 'POST',
            dataType: 'json',
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            data: {
                username:username,
                ts:ts
            },
            success: function (res) {
                sign = res.data.data;
                that.Getto(username,ts,sign,game_id)
            }
        });
    }
    Getto(username,ts,sign,game_id){
        var appid= wx.getStorageSync('navigate_app_id');
        var appid = appid?appid:'wx81d91c0166099f18';
        wx.navigateToMiniProgram({
            appId: appid,
            path: 'pages/chat/chat?username=' + username+ '&ts=' + ts + '&sign=' + sign +'&type=' + game_id,
            extraData: {
                foo: 'bar'
            },
            envVersion: 'release',
            success(res) {
                wx.showToast({
                    title: '跳转成功'
                })
            }
        })
    }

}

