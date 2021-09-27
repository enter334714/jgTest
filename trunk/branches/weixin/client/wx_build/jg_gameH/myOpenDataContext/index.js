/**
 * @Author xinjiechen
 * @Date 2021/4/12 20:20
 */


//开放数据域里的代码
wx.onMessage((type) => {
    console.log('消息', type);
    if (type === 'start') {
        wx.getPotentialFriendList({
            success: res => {
                console.log('获取好友列表', res.list)
            },
            fail: res => {
                console.error('获取好友列表失败')
            }
        })
    }
});